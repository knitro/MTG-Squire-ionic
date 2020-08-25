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

  loadDatabase(): boolean {
    return false;
  }

  async performSearch(currentSearch : SearchState) : Promise<boolean> {
    return true;
  }

  ////////////////////////
  /*Render*/
  ////////////////////////
  
}
  

export default RulesDB;