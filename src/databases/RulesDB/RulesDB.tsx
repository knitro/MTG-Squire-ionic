import Database from '../Database';
import { DatabaseLoad } from '../../App';
import { SearchState } from '../../states/SearchState';

class RulesDB extends Database {
  
  ////////////////////////
  /*Fields*/
  ////////////////////////

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  ////////////////////////
  /*Methods*/
  ////////////////////////
  
  downloadDatabase() : boolean {
    return false;
  }

  verifyDatabase() : DatabaseLoad {
    return DatabaseLoad.NOT_LOADED;
  }

  loadDatabaseFile(): boolean {
    return false;
  }

  performSearch(currentSearch : SearchState) : void {
    return;
  }

  ////////////////////////
  /*Render*/
  ////////////////////////
  
}
  

export default RulesDB;