import { Component } from 'react';
import App, { DatabaseLoad } from '../App';

import axios from 'axios';
import { FilesystemDirectory } from '@capacitor/core';
import { SearchState } from '../states/SearchState';

abstract class Database extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /** Constructor to be Uncommented if SQLite is to be used*/
  // private sqlite : SQLite;
  // private database : SQLiteObject;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    console.log("Constructed Database Instance");
  }

  /** Constructor to be Uncommented if SQLite is to be used*/
  // constructor(sqlite : SQLite) {
  //   super(sqlite);
  //   this.sqlite = sqlite;
  //   this.database = SQLiteObject.prototype; //Initial Initialisation (To be properly initialised later)
  // }

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
   * This method should load the database file and call/return the return value from loadingDatabaseFile(string, string).
   */
  abstract loadDatabaseFile() : boolean;

  /**
   * This method should perform the search and store the search result in the database
   */
  abstract async performSearch(currentSearchState: SearchState) : Promise<boolean>;

  ////////////////////////
  /*"Implemented" Methods*/
  ////////////////////////

  /**
   * Downloads the Database from the given url.
   * Note that this method exists SOLEY to show that there was some intended implementation of downloading a database,
   * but plugin failures have negated the possible use. 
   * @param url - the URL to the database
   * @param fileName - the file name that the database will be saved under
   * @param databaseIndex - the Index of the database as per App.tsx
   */
  protected async downloadingDatabase(url : string, fileName : string, databaseIndex : number) {

    console.log("Started: downloadingDatabase() ");

    const FileDownload = require('js-file-download');

    /*Download the File*/
    axios({
      url: url,
      method: 'GET'
    }).then((response) => {
      console.log("Started: Downloading Database " + fileName + " from " + url);
      FileDownload(response.data, FilesystemDirectory.Data + "/" + fileName);
      App.updateDatabase(databaseIndex, DatabaseLoad.LOADED);
      console.log("Finished: Downloading Database " + fileName + " from " + url);
    });

    console.log("Finished: downloadingDatabase() ");
    return;

  }

  /**
   * This method is to be only called by verifyDatabase() once the variables are set accordingly.
   * Note that this method exists SOLEY to show that there was some intended implementation of downloading a database,
   * but plugin failures have negated the possible use. 
   * @param url - the URL to the online SHA256 file
   * @param localDirectory the directory to the local SHA256 file
   */
  protected verifyingDatabase(url : string, localDirectory : string) : DatabaseLoad {
    //TODO:: Extension Work
    //Assume Database is never loaded still meets requirements
    return DatabaseLoad.NOT_LOADED;
  }

  /**
   * Percent Encode the parameter string.
   * @param stringToEncode - the string to encode.
   */
  protected percentEncode(stringToEncode : string) : string {
    let encodedString = encodeURI(stringToEncode)
    return encodedString;
  }

  ////////////////////////
  /*SQLite Methods*/
  ////////////////////////

  //Methods to be uncommented if SQLite functionality is to be implemented.
  //Note that for these methods to work, the sqlite dependency needs to be installed.

  // /**
  //  * Loads up the database from the given directory and filename.
  //  * @param directory - the directory of the database
  //  * @param fileName  - the name of the database
  //  */
  // protected loadingDatabaseFile(directory : string, fileName : string) : boolean {

  //   this.sqlite.create({
  //     name: fileName,
  //     location: directory
  //   })
  //   .then((db: SQLiteObject) => {
  //     this.database = db;
  //     return true;
  //   })
  //   .catch(e => console.log(e));
  //   return false;
  // }

  // /**
  //  * Returns the database object.
  //  */
  // protected getDatabase() : SQLiteObject {
  //   return this.database;
  // }

}
  

export default Database;