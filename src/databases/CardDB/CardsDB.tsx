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
  
  verifyDatabase() : DatabaseLoad {
    return DatabaseLoad.NOT_LOADED;
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

}
  

export default CardsDB;