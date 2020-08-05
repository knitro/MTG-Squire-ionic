import Database from '../Database';
import { DatabaseLoad } from '../../App';

class CardsDB extends Database {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  private fileName : string = "AllPrintings.sqlite";

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  ////////////////////////
  /*Methods*/
  ////////////////////////
  
  downloadDatabase() : void {
    this.downloadingDatabase("https://mtgjson.com/api/v5/AllPrintings.sqlite", this.fileName, 0);
  }

  verifyDatabase() : DatabaseLoad {
    return DatabaseLoad.NOT_LOADED;
  }

  loadDatabaseFile(): boolean {
    this.loadingDatabaseFile("", this.fileName);
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;