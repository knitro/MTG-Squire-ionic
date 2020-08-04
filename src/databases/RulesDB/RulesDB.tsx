import Database from '../Database';
import { DatabaseLoad } from '../../App';

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

  ////////////////////////
  /*Render*/
  ////////////////////////
  
}
  

export default RulesDB;