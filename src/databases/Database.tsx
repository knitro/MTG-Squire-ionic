import { Component } from 'react';
import App, { DatabaseLoad } from '../App';

import axios from 'axios';
import { FilesystemDirectory } from '@capacitor/core';
import { SearchState } from '../states/SearchState';

abstract class Database extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /*None*/

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    console.log("Constructed Database Instance");
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
   * This method should load the database file and call/return the return value from loadingDatabaseFile(string, string).
   */
  abstract loadDatabase() : boolean;

  /**
   * This method should perform the search and store the search result in the database.
   * @param currentSearchState - the currentSearchState that is being used to perform the search (quick and advanced)
   */
  abstract async performSearch(currentSearchState: SearchState) : Promise<boolean>;

  /**
   * This method should perform the search and store the search result in the database.
   * @param url - the URL of the API call required 
   * @param singleCard - determines whether the resultant search will be an array or a single card. DB calls via performSearch(SearchState) should be false, direct calls should have this as true.
   */
  abstract async performSearchURL(url : string, singleCard : boolean) : Promise<boolean>;

  /**
   * TEST
   * @param url 
   */
  abstract async updateSearchStateWithURL(url : string) : Promise<boolean>;
  ////////////////////////
  /*"Implemented" Methods*/
  ////////////////////////

  /**
   * Downloads the Database from the given url.
   * Note that this method exists SOLELY to show that there was some intended implementation of downloading a database,
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
   * Note that this method exists SOLELY to show that there was some intended implementation of downloading a database,
   * but plugin failures have negated the possible use. 
   * @param url - the URL to the online SHA256 file
   * @param localDirectory the directory to the local SHA256 file
   */
  protected verifyingDatabase(url : string, localDirectory : string) : DatabaseLoad {
    //Code Exists to allow for Extension of the System
    return DatabaseLoad.LOADED;
  }

  protected loadingDatabase(fileName : string, directory: string) : boolean {
    //Code Exists to allow for Extension of the System
    return true;
  }

  ////////////////////////
  /*Supporting Methods*/
  ////////////////////////

  /**
   * Percent Encode the parameter string.
   * @param stringToEncode - the string to encode.
   */
  protected percentEncode(stringToEncode : string) : string {
    let encodedString = encodeURI(stringToEncode)
    return encodedString;
  }

}
  

export default Database;