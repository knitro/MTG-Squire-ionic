import Database from '../Database';
import { DatabaseLoad } from '../../App';
import { SearchState, saveSearchState } from '../../states/SearchState';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import ResultDisplay from '../../pages/ResultDisplay/ResultDisplay';
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
  private rulings : string[] = [];

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
    return this.loadingDatabaseFile("", this.fileName);
  }

  async performSearch(currentSearch : SearchState) {

    /*Variable Initialisation*/
    let url = this.percentEncode("https://api.scryfall.com/cards/search?order=released&q=" + currentSearch.cardName);

    /*Get the API Call*/
    axios({
      url: url,
      method: 'GET',
    }).then((response) => {

      /*Grab the JSON Data*/
      let output : ScryFallInformation[] = response.data.data;
      let latestResult : ScryFallInformation = output[0];

      /*Get Additional Rulings*/
      // let additionalRulings: string[] = this.getCardRuling(latestResult.rulings_uri).then(
      //   (result) => {return result;
      // });
      // additionalRulings.map((currentItem: string) => console.log(currentItem));
      this.getCardRuling(latestResult.rulings_uri);

      /*Get CardImageURL*/
      let cardImageURL : string = "" 
          + "https://api.scryfall.com/cards/" 
          + latestResult.set
          + "/" + latestResult.collector_number
          + "?format=image&version=png";

      /*Generate the SearchState*/
      let searchResult : SearchState = {
        cardName:   latestResult.name,
        imageLink:  cardImageURL,
        manaCost:   latestResult.mana_cost,
        prices: {
          scryFallPricing_nonfoil:  latestResult.prices.usd,
          scryFallPricing_foil:     latestResult.prices.usd_foil
        },
        fullType:   latestResult.type_line,
        oracleText: latestResult.oracle_text,
        set : {
          setName: latestResult.set_name,
          setCode: latestResult.set,
          imageLink: ""
        },
        legality: {
          standard:   latestResult.legalities.standard,
          future:     latestResult.legalities.future,
          historic:   latestResult.legalities.historic,
          pioneer:    latestResult.legalities.pioneer,
          modern:     latestResult.legalities.modern,
          legacy:     latestResult.legalities.legacy,
          pauper:     latestResult.legalities.pauper,
          vintage:    latestResult.legalities.vintage,
          penny:      latestResult.legalities.penny,
          commander:  latestResult.legalities.commander,
          brawl:      latestResult.legalities.brawl,
          duel:       latestResult.legalities.duel,
          oldschool:  latestResult.legalities.oldschool
        },
        misc: {
          reserved: latestResult.reserved,
          foil:     latestResult.foil,
          nonfoil:  latestResult.nonfoil,
          promo:    latestResult.promo,
          reprint:  latestResult.reprint,
          collector_number: latestResult.collector_number,
          rarity:   latestResult.rarity,
          frame:    latestResult.frame,
          artist:   latestResult.artist,
          released: latestResult.released_at
        },
        rulings: this.rulings
      };

      /*Save SearchState to Storage*/
      saveSearchState(searchResult);

      console.log("Finished: performSearch() http");

    });

    console.log("Finished: performedSearch() quick")

  }

  /**
   * TODO::
   * @param url 
   */
  async getCardRuling(url : string) {

    let returnArray : string[] = [];

     /*Get the API Call*/
     axios({
      url: url,
      method: 'GET',
    }).then((response) => {

      /*Grab the JSON Data*/
      let output : ScryFallRulings[] = response.data.data;
      output.map((currentRuling: ScryFallRulings) => returnArray.push(currentRuling.comment));
      this.rulings = returnArray;
      this.rulings.map((currentItem: string) => console.log(currentItem));
    });
    
    this.rulings = returnArray;
    console.log("");
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;