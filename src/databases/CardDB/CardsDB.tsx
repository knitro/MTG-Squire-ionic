import Database from '../Database';
import { DatabaseLoad } from '../../App';
import { SearchState } from '../../states/SearchState';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import ResultDisplay from '../../pages/ResultDisplay/ResultDisplay';
import axios from 'axios';

//https://scryfall.com/docs/api/cards
interface ScryFallInformation {

  name : string
  mana_cost : string
  type_line : string
  oracle_text : string
  set_name : string //Full set name
  set : string //Set Code
  //set image?
  prices : Object
  image_uris	: Object
}

class CardsDB extends Database {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  private fileName : string = "AllPrintings.sqlite";
  private fileDownloadLink : string = "https://mtgjson.com/api/v5/AllPrintings.sqlite";

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  ////////////////////////
  /*Methods*/
  ////////////////////////
  
  downloadDatabase() : void {
    this.downloadingDatabase(this.fileDownloadLink, this.fileName, 0);
  }

  verifyDatabase() : DatabaseLoad {
    return DatabaseLoad.NOT_LOADED;
  }

  loadDatabaseFile(): boolean {
    return this.loadingDatabaseFile("", this.fileName);
  }

  performSearch(currentSearch : SearchState) : SearchState {

    /*Variable Initialisation*/
    //Reference: https://scryfall.com/docs/api/cards/search
    let url = "https://api.scryfall.com/cards/search?order=released&q=" + currentSearch.cardName;

    /*Download the File*/
    axios({
      url: url, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      console.log("Started: Scryfall API ping from " + url);

      let reponseJSON = JSON.parse(response.data);
      responseJSON.
      // response.data

      console.log("Finished: Scryfall API ping from " + url);
    });

  }


  // performSearch(currentSearch : SearchState) : SearchState {

  //   let currentDB : SQLiteObject = this.getDatabase();
    
  //   let sqlCommand : string = "SELECT *"
  //                           + "FROM cards"
  //                           + "WHERE name = " + currentSearch.cardName
  //                           ;

  //   currentDB.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
  //     console.log('Got upperString result: ' + rs.rows.item(0).upperString);
  //   });
  //   currentDB.executeSql(sqlCommand, [])
  //     .then(() => {

  //       console.log('Executed SQL'); 
        
  //       let finalResult : SearchState = {
  //         cardName: "Llanowar Elves",
  //         imageLink: "https://api.scryfall.com/cards/mb1/1262?format=image&version=png",
  //         manaCost: "{G}",
  //         prices: {
  //           scryfallPricing: 0.25
  //         },
  //         fullType: "Creature — Elf Druid",
  //         oracleText : "{T}: Add {G}.",
  //         set : {
  //           setName: "Mystery Booster",
  //           setCode: "MB1",
  //           imageLink: "https://cdn-cardmavin.mavin.io/wp-content/uploads/2019/04/magic-card-symbol-core-set-2019-150x72.png" 
  //         }
  //       }

  //     })
  //     .catch(e => {
  //       console.log(e); 
  //       return ResultDisplay.defaultProps;
  //     });

  //   return ResultDisplay.defaultProps;
  // }

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;