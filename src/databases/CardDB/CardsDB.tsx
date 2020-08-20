import Database from '../Database';
import { DatabaseLoad } from '../../App';
import { SearchState, saveSearchState } from '../../states/SearchState';
import axios from 'axios';

//https://scryfall.com/docs/api/cards
interface ScryFallInformation {

  name:         string
  mana_cost:    string
  type_line :   string
  oracle_text:  string
  set_name:     string //Full set name
  set:          string //Set Code
  collector_number: string
  image_uris:   ScryFallImages
  legalities:   ScryFallLegality
  reserved:     boolean
  foil:         boolean
  nonfoil:      boolean
  promo:        boolean
  reprint:      boolean
  rarity:       string
  frame:        string
  artist:       string
  prices :      ScryFallPrices
  released_at:  string
  rulings_uri:  string
  prints_search_uri: string
}

interface ScryFallImages {
  small:        string;
  normal:       string;
  large:        string;
  png:          string;
  art_crop:     string;
  border_crop:  string
}

interface ScryFallLegality {
  standard:   string
  future:     string
  historic:   string
  pioneer:    string
  modern:     string
  legacy:     string
  pauper:     string
  vintage:    string
  penny:      string
  commander:  string
  brawl:      string
  duel:       string
  oldschool:  string
}

interface ScryFallPrices {
  usd:      string
  usd_foil: string
  tix:      string
}

interface ScryFallRulings {
  object:       string
  oracle_id:    string
  source:       string
  published_at: string
  comment:      string
}

class CardsDB extends Database {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /*Constant Links*/
  private fileName : string = "AllPrintings.sqlite";
  private fileDownloadLink : string = "https://mtgjson.com/api/v5/AllPrintings.sqlite";
  private sha256Link : string = "https://mtgjson.com/api/v5/AllPrintings.sqlite.sha256";

  /*Fields*/
  private blankScryFallInformation : ScryFallInformation = {
    name:         "Error",
    mana_cost:    "{0}",
    type_line :   "Error",
    oracle_text:  "Error",
    set_name:     "Error",
    set:          "ERR",
    collector_number: "0",
    image_uris: {
      small:        "Error",
      normal:       "Error",
      large:        "Error",
      png:          "Error",
      art_crop:     "Error",
      border_crop:  "Error"
    },
    legalities:   {
      standard:   "Error",
      future:     "Error",
      historic:   "Error",
      pioneer:    "Error",
      modern:     "Error",
      legacy:     "Error",
      pauper:     "Error",
      vintage:    "Error",
      penny:      "Error",
      commander:  "Error",
      brawl:      "Error",
      duel:       "Error",
      oldschool:  "Error"
    },
    reserved:     false,
    foil:         false,
    nonfoil:      false,
    promo:        false,
    reprint:      false,
    rarity:       "Error",
    frame:        "Error",
    artist:       "Error",
    prices : {
      usd:      "Error",
      usd_foil: "Error",
      tix:      "Error"
    },
    released_at:  "Error",
    rulings_uri:  "Error",
    prints_search_uri: "Error",
  };

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
    //Proper Verification Implementation: Remove return below
    return DatabaseLoad.LOADED;
  }

  loadDatabaseFile(): boolean {
    return false;
    // return this.loadingDatabaseFile("", this.fileName);
  }

  async performSearch(currentSearch : SearchState) : Promise<boolean> {

    /*Variable Initialisation*/
    let url = this.percentEncode("https://api.scryfall.com/cards/search?order=released&q=" + currentSearch.cardName);
    
    try {

      /*Get the API Call*/
      const axiosResult : ScryFallInformation = await axios({
        url: url,
        method: 'GET',
      }).then((response) => {

        /*Grab the JSON Data*/
        let output : ScryFallInformation[] = response.data.data;
        let latestResult : ScryFallInformation = output[0];
        return latestResult;

      }).catch(err => {
        console.log(err);
        return this.blankScryFallInformation;
      });
      
      const cardRulings : string[] = await this.getCardRuling(axiosResult.rulings_uri)
      const cardImageURL : string = "" 
          + "https://api.scryfall.com/cards/" 
          + axiosResult.set
          + "/" + axiosResult.collector_number
          + "?format=image&version=png";

      console.log("cardImageURL = " + cardImageURL);

      /*Generate the SearchState*/
      let searchResult : SearchState = {
        cardName:   axiosResult.name,
        imageLink:  cardImageURL,
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
          released: axiosResult.released_at
        },
        rulings: cardRulings
      };

      const returnValue = await saveSearchState(searchResult);
      if (returnValue == true) {
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
      stringArray.map((currentItem: string) => console.log(currentItem));
      return stringArray;
    }).catch(err => {
      console.log(err);
      return [];
    });
    return returnArray;
    
  }
  

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;