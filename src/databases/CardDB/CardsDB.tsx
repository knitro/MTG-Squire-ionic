import Database from '../Database';
import { DatabaseLoad } from '../../App';

class CardsDB extends Database {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  ////////////////////////
  /*Methods*/
  ////////////////////////
  
  downloadDatabase() : void {
    this.downloadingDatabase("https://mtgjson.com/api/v5/AllPrintings.sqlite", "AllPrintings.sqlite", 0);
  }

  verifyDatabase() : DatabaseLoad {
    return DatabaseLoad.NOT_LOADED;
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;