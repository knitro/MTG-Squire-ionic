import { Component } from 'react';

import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
import { DatabaseLoad } from '../App';
// import { File } from '@ionic-native/file';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

abstract class Database extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  fileTransfer : FileTransferObject = FileTransfer.create();
  // file : File = File.createFile();

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
   * Downloads the Database from the given url.
   * @param url - the URL to the database
   * @param fileName - the file name that the database will be saved under. Extension is not required
   */
  downloadDatabase(url : string, fileName : string) {

    // this.fileTransfer.download(url, ) //(url, this.storageDirectory + fileName).then((entry) => {
  //   console.log('download complete: ' + entry.toURL());
  // }, (error) => {
  //   // handle error
  // });

    let fullFileName : string = fileName + ".db";

    try {
      SQLite.create({ //This opens or creates a SQL file
        name: fullFileName, location: 'default'
      }).then(async (db: SQLiteObject) => {
          try {
            const create = await db.executeSql('create table if not exists danceMoves(name VARCHAR(32))', []);
            console.log('Table created/exists. Msg: ', create);
            const insert = await db.executeSql('insert into danceMoves (name) values (?)', ['Macarena']);
            console.log('Inserted Macarena: ', insert);
          } catch (e) {
            console.log('SQL error: ', e);
          }
      })
    } catch(e) {
      console.log("Error. SQL Database could not be set up. Could be due to not being used on an actual device?");
    }

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



    return DatabaseLoad.LOADED;
  }
  
}
  

export default Database;