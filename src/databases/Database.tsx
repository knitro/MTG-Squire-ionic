import { Component } from 'react';
import App, { DatabaseLoad } from '../App';

import axios from 'axios';
import { FilesystemDirectory } from '@capacitor/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { threadId } from 'worker_threads';
import { SearchState } from '../states/SearchState';

abstract class Database extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  private sqlite : SQLite;
  private database : SQLiteObject;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  // constructor(props : any) {
  //   super(props);
  //   // this.file = file;
  // }

  constructor(sqlite : SQLite) {
    super(sqlite);
    this.sqlite = sqlite;
    this.database = SQLiteObject.prototype;
  }

  ////////////////////////
  /*Abstract Methods*/
  ////////////////////////

  /**
   * This method should download the database and call/return the return value from downloadingDatabase(string, string).
   */
  abstract downloadDatabase() : void;

  /**
   * This method should verify the database and call/return the return value from verifyingDatabase(string, string).
   */
  abstract verifyDatabase() : DatabaseLoad;

  /**
   * TODO::
   */
  abstract loadDatabaseFile() : boolean;

  /**
   * TODO::
   */
  abstract performSearch(currentSearchState: SearchState) : SearchState;

  ////////////////////////
  /*"Implemented" Methods*/
  ////////////////////////

  /**
   * Downloads the Database from the given url.
   * @param url - the URL to the database
   * @param fileName - the file name that the database will be saved under
   * @param databaseIndex 
   */
  protected async downloadingDatabase(url : string, fileName : string, databaseIndex : number) {

    console.log("Started: downloadingDatabase() ")
    

    const FileDownload = require('js-file-download');
    // const history = useHistory();

    // console.log("FilesystemDirectory.Data = " + FilesystemDirectory.Data);

    /*Download the File*/
    axios({
      url: url, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      console.log("Started: Downloading Database " + fileName + " from " + url);
      FileDownload(response.data, FilesystemDirectory.Data + "/" + fileName);
      App.updateDatabase(databaseIndex, DatabaseLoad.LOADED);
      console.log("Finished: Downloading Database " + fileName + " from " + url);
    });

    console.log("Finished: downloadingDatabase() ");

    return true;

  }

  /**
   * This method is to be only called by verifyDatabase() once the variables are set accordingly.
   * @param url - the URL to the online SHA256 file
   * @param localDirectory the directory to the local SHA256 file
   */
  protected verifyingDatabase(url : string, localDirectory : string) : DatabaseLoad {

    //TODO:: Extension Work
    //Assume Database is never loaded still meets requirements

    return DatabaseLoad.NOT_LOADED;
  }

  protected loadingDatabaseFile(directory : string, fileName : string) : boolean {

    this.sqlite.create({
      name: fileName,
      location: directory
    })
    .then((db: SQLiteObject) => {
  
      this.database = db;
        
      // db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      //   .then(() => {console.log('Executed SQL'); return true})
      //   .catch(e => {console.log(e); return false;});

      return true;
    })
    .catch(e => console.log(e));
    return false;
  }

  protected getDatabase() : SQLiteObject {
    return this.database;
  }

}
  

export default Database;