import Database from '../Database';
import { DatabaseLoad } from '../../App';
import { SearchState, saveSearchState, saveSearchRequest } from '../../states/SearchState';
import axios from 'axios';
import { ScryFallInformation, blankScryFallInformation, ScryFallRulings, ScryFallSearchTerms } from './ScryFallInterfaces';

class CardsDB extends Database {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /*Constant Links*/
  private fileName : string = "AllPrintings.sqlite";
  private fileDownloadLink : string = "https://mtgjson.com/api/v5/AllPrintings.sqlite";
  private sha256 : string = "AllPrintings.sqlite.sha256";
  private sha256Link : string = "https://mtgjson.com/api/v5/AllPrintings.sqlite.sha256";
  private directory : string = ""; //To be Filled in if this work is extended upon

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  ////////////////////////
  /*Implemented Methods*/
  ////////////////////////
  
  downloadDatabase() : void {
    this.downloadingDatabase(this.fileDownloadLink, this.fileName, 0);
  }

  verifyDatabase() : DatabaseLoad {
    return this.verifyingDatabase(this.sha256Link, this.sha256);
  }

  loadDatabase(): boolean {
    return this.loadingDatabase(this.fileName, this.directory);
  }

  async performSearch(currentSearch : SearchState) : Promise<boolean> {

    /*Variable Initialisation*/
    let url = this.percentEncode("https://api.scryfall.com/cards/search?order=released&q=" + currentSearch.cardName);
    
    return await this.performSearchURL(url, false);
  }

  async performAllSearch(searchTerms : ScryFallSearchTerms) : Promise<boolean> {

    /*Variable Initialisation*/
    let compiledSearchTerm : string = "";

    //Add Main Search Term
    compiledSearchTerm += (searchTerms.mainSearch.toLowerCase());

    //Add Inclusion of Colours
    if (searchTerms.coloursInclude.length !== 0) {
      let coloursIncludeString = "+c:";
      searchTerms.coloursInclude.map((currentColour) => coloursIncludeString += currentColour.toLowerCase());
      compiledSearchTerm += coloursIncludeString;
    }

    //Add Exclusion of Colours
    if (searchTerms.coloursExclude.length !== 0) {
      let coloursExcludeString = "+c:";
      searchTerms.coloursExclude.map((currentColour) => coloursExcludeString += currentColour.toLowerCase());
      compiledSearchTerm += coloursExcludeString;
    }
    

    //Add Card Types
    if (searchTerms.cardTypes.length !== 0) {
      let cardTypesString = "";
      searchTerms.cardTypes.map((currentType) => cardTypesString += "+t:" + currentType.toLowerCase() + " ");
      cardTypesString = cardTypesString.trim();
      compiledSearchTerm += cardTypesString;
    }
    
    //Add Card Text
    if (searchTerms.cardText.length !== 0) {
      let cardText = "";
      searchTerms.cardText.map((currentText) => cardText += "o:" + currentText.toLowerCase() + " ");
      cardText = cardText.trim();
      compiledSearchTerm += cardText;
    }

    //Get the Final URL
    let url = this.percentEncode("https://api.scryfall.com/cards/search?order=released&q=" + compiledSearchTerm);
    
    /*Perform API Call*/
    try {

      const axiosResult : ScryFallInformation[] = await axios({
        url: url,
        method: 'GET',
      }).then((response) => {
          //Grab JSON Data
          let output : ScryFallInformation[] = response.data.data;
          return output;
      }).catch(err => {
        console.log(err);
        return [blankScryFallInformation];
      });

      let searchResults: SearchState[] = axiosResult.map((currentSearchState) => {
        return this.generateSearchState(currentSearchState, [], []);
      }) 

      const returnValue = await saveSearchRequest(searchResults);
      if (returnValue === true) {
        console.log("Searching Returned True");
        return true;
      } else {
        console.log("Searching Returned False");
        return false;
      }

    } catch (err) {

      console.log(err);
      return false
    }
  }

  async performSearchURL(url : string, singleCard : boolean) : Promise<boolean> {

    console.log("URL = " + url);

    /*Variable Initialisation*/
    try {

      /*Get the API Call*/
      const axiosResult : ScryFallInformation = await axios({
        url: url,
        method: 'GET',
      }).then((response) => {
        
        /*Grab the JSON Data*/
        if (singleCard) {
          let output : ScryFallInformation = response.data;
          return output;
        } else {
          let output : ScryFallInformation[] = response.data.data;
          let latestResult : ScryFallInformation = output[0];
          return latestResult;
        }
      }).catch(err => {
        console.log(err);
        return blankScryFallInformation;
      });
      
      const otherPrintings: SearchState[] = await this.getOtherPrintings(axiosResult.prints_search_uri)
      const searchResult : SearchState = await this.generateSearchStateWithRulings(axiosResult, otherPrintings);

      const returnValue = await saveSearchState(searchResult);
      if (returnValue === true) {
        console.log("Searching Returned True");
        return true;
      } else {
        console.log("Searching Returned False");
        return false;
      }

    } catch (err) {

      console.log(err);
      return false
    }
    
  }

  ////////////////////////
  /*Helper Methods*/
  ////////////////////////

  /**
   * Returns a Promise string[] of Rulings.
   * @param url The Scryfall URL that the rulings come from.
   */
  async getCardRuling(url : string) : Promise<string[]> {

    let returnArray : string[] = await axios({
      url: url,
      method: 'GET',
    }).then((response) => {

      /*Grab the JSON Data*/
      let stringArray : string[] = [];
      let output : ScryFallRulings[] = response.data.data;
      output.map((currentRuling: ScryFallRulings) => stringArray.push(currentRuling.comment));
      // stringArray.map((currentItem: string) => console.log(currentItem));
      return stringArray;
    }).catch(err => {
      console.log(err);
      return [];
    });
    return returnArray;
    
  }

  /**
   * Returns a Promise string[] of Other Printings.
   * @param url The Scryfall URL that the Other Printings come from.
   */
  async getOtherPrintings(url : string) : Promise<SearchState[]> {
    
    console.log("Other Printings URL: " + url);
    
    let returnArray : SearchState[] = await axios({
      url: url,
      method: 'GET',
    }).then((response) => {

      /*Grab the JSON Data*/
      let searchStateArray : SearchState[] = [];
      let output : ScryFallInformation[] = response.data.data;

      output.map(async (currentSearchState: ScryFallInformation) => searchStateArray.push(await this.generateSearchStateWithRulings(currentSearchState, [])));

      return searchStateArray;
    }).catch(err => {
      console.log(err);
      return [];
    });
    return returnArray;
    
  }

  /**
   * Generates a Search State from a ScryFallInformation interface (retrieved from Scryfall API call).
   * @param axiosResult 
   */
  async generateSearchStateWithRulings(axiosResult : ScryFallInformation, otherPrints : SearchState[]) : Promise<SearchState> {
    
    /*Set Arbitrary Value to the Card Rulings*/
    const cardRulings : string[] = await this.getCardRuling(axiosResult.rulings_uri);

    return this.generateSearchState(axiosResult, otherPrints, cardRulings);
  }

  generateSearchState(axiosResult : ScryFallInformation, otherPrints : SearchState[], cardRulings : string[]) : SearchState {
    
    /*Get Card Images*/
    const cardImageURL : string = "" 
        + "https://api.scryfall.com/cards/" 
        + axiosResult.set
        + "/" + axiosResult.collector_number
        + "?format=image&version=png";
    
    const cardImageOnlyURL : string = "" 
        + "https://api.scryfall.com/cards/" 
        + axiosResult.set
        + "/" + axiosResult.collector_number
        + "?format=image&version=art_crop";

    // console.log("cardImageURL = " + cardImageURL);

    /*Generate the SearchState*/
    let searchResult : SearchState = {
      cardName:   axiosResult.name,
      imageLink:  cardImageURL,
      imageOnlyLink: cardImageOnlyURL,
      manaCost:   axiosResult.mana_cost,
      prices: {
        scryFallPricing_nonfoil:  axiosResult.prices.usd,
        scryFallPricing_foil:     axiosResult.prices.usd_foil
      },
      fullType:   axiosResult.type_line,
      oracleText: axiosResult.oracle_text,
      set : {
        setName: axiosResult.set_name,
        setCode: axiosResult.set,
        imageLink: ""
      },
      legality: {
        standard:   axiosResult.legalities.standard,
        future:     axiosResult.legalities.future,
        historic:   axiosResult.legalities.historic,
        pioneer:    axiosResult.legalities.pioneer,
        modern:     axiosResult.legalities.modern,
        legacy:     axiosResult.legalities.legacy,
        pauper:     axiosResult.legalities.pauper,
        vintage:    axiosResult.legalities.vintage,
        penny:      axiosResult.legalities.penny,
        commander:  axiosResult.legalities.commander,
        brawl:      axiosResult.legalities.brawl,
        duel:       axiosResult.legalities.duel,
        oldschool:  axiosResult.legalities.oldschool
      },
      misc: {
        reserved: axiosResult.reserved,
        foil:     axiosResult.foil,
        nonfoil:  axiosResult.nonfoil,
        promo:    axiosResult.promo,
        reprint:  axiosResult.reprint,
        collector_number: axiosResult.collector_number,
        rarity:   axiosResult.rarity,
        frame:    axiosResult.frame,
        artist:   axiosResult.artist,
        released: axiosResult.released_at,
        digital_only: axiosResult.digital
      },
      rulings: cardRulings,
      otherPrints: otherPrints,
      api_uri: axiosResult.uri
    };

    return searchResult;
  }

}
  

export default CardsDB;