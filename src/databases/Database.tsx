import { Component } from 'react';
import App, { DatabaseLoad } from '../App';

import axios from 'axios';
import { FilesystemDirectory } from '@capacitor/core';

abstract class Database extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    // this.file = file;
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * This method should download the database and call/return the return value from downloadingDatabase(string, string).
   */
  abstract downloadDatabase() : void;

  /**
   * Downloads the Database from the given url.
   * @param url - the URL to the database
   * @param fileName - the file name that the database will be saved under
   */
  async downloadingDatabase(url : string, fileName : string, databaseIndex : number) {

    console.log("Started: downloadingDatabase() ")
    console.log("Started: Downloading Database " + fileName + " from " + url);

    const FileDownload = require('js-file-download');

    console.log("FilesystemDirectory.Data = " + FilesystemDirectory.Data);

    axios({
      url: url, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      FileDownload(response.data, FilesystemDirectory.Data + "/" + fileName);
      App.updateDatabase(databaseIndex, DatabaseLoad.LOADED);
    });

    console.log("Finished: downloadingDatabase() ");

    return true;

  }

  /**
   * This method should verify the database and call/return the return value from verifyingDatabase(string, string).
   */
  abstract verifyDatabase() : DatabaseLoad;

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
  
}
  

export default Database;