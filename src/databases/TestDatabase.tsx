import React, { Component, useState } from "react";
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
// import { HTTP } from '@ionic-native/http/ngx';
import { IonAlert, IonItem, IonButton } from "@ionic/react";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

import '@capacitor-community/http';
import { Plugins, Filesystem, FilesystemDirectory } from '@capacitor/core';
// import { HttpDownloadFileResult } from "@capacitor-community/http";

/**
 * This file contains a lot of "backups" of loading/downloading online files.
 * This class does not and should not do anything.
 */
export class TestDatabase extends Component {

  // http : HTTP = HTTP.prototype; 
  // downloader : Downloader = Downloader.prototype;
  // ret: HttpDownloadFileResult = {};


  // constructor(props : any) {
  //   super(props)

    // this.downloadDatabase();

    // let url = "https://www.reddit.com/r/gifs/new/.json?limit=10";

    // console.log("Started: Constructor");
    // this.downloadFile();
    // console.log("Finished: Constructor")

    // this.getHTTP();
    // this.http.get(url, {}, {})
    //   .then(data => {
      
    //     console.log("Test 2");  
    //   console.log(data.status);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);
  
    // }).catch(error => {

    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);
  
    // });

  // }

  // async downloadFile() {

  //   console.log("Started: downloadFile()");
  //   const { Http } = Plugins;

  //   this.ret = await Http.downloadFile({
  //     url: "https://mtgjson.com/api/v5/CompiledList.json",
  //     filePath: "CompiledList.json",
  //     fileDirectory: FilesystemDirectory.Data
  //   })
  //   // .then(data => {
  //   //   console.log("Success")
  //   // })
  //   // .catch(error => {
  //   //   console.log("Failure")
  //   // });

  //   if (this.ret.path) {
  //     const read = await Filesystem.readFile({
  //       path: 'CompiledList.json',
  //       directory: FilesystemDirectory.Data
  //     });
  //     // Data is here
  //     console.log("HI");
  //   }

  //   console.log("Finished: downloadFile()");
  // }

  // async getHTTP() {

  //   console.log("Started: getHTTP()");
  //   let url = "https://www.reddit.com/r/gifs/new/.json?limit=10";

  //   await this.http.get(url, {}, {})
  //     .then(data => {
      
  //       console.log("Test 2");  
  //     console.log(data.status);
  //     console.log(data.data); // data received by server
  //     console.log(data.headers);
  
  //   }).catch(error => {

  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  
  //   }); 

  //   console.log("Finished: getHTTP()");

  // }

  // downloadDatabase() {

  //   console.log("Started: downloadDatabase()");

  //   var request: DownloadRequest = {
  //     uri: "https://mtgjson.com/api/v5/AllPrintings.sqlite",
  //     title: 'cardDB',
  //     description: '',
  //     mimeType: '',
  //     visibleInDownloadsUi: true,
  //     notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
  //     destinationInExternalFilesDir: {
  //         dirType: 'default',
  //         subPath: 'cardDBsubPath'
  //     }
  //   };

  //   this.downloader.download(request)
  //         .then((location: string) => console.log('File downloaded at:'+location))
  //         .catch((error: any) => console.error("ERROR " + error));

  //         console.log("Finished: downloadDatabase()");
      
  // }

  // render() {
  //   return(
  //     <>
  //       <IonButton onClick= { 
  //         async () => {
  //           if (this.ret.path) {
  //             const read = await Filesystem.readFile({
  //               path: 'CompiledList.json',
  //               directory: FilesystemDirectory.Data
  //             });
  //             // Data is here
  //             console.log("HI");
  //           } else {
  //             console.log("OOOf");
  //           }
  //         }
  //       }>
  //         Test!
  //       </IonButton>
  //     </>
  //   )
  // }

// }

  // downloader : Downloader = Downloader.prototype;
  // // private sqlite : SQLiteObject ;
  // // private database: SQLiteObject;
  // isService: boolean = false;
  // platform: string = "";

  // constructor(private sqlite : SQLite) {
  //   super(sqlite);
  //   // this.sqlite = sqlite;
  //   // this.database = SQLiteObject.prototype; //Initialisation
  //   // this.downloadDatabase();
    
  //   this.sqlite.create({
  //     name: 'items.db',
  //     location: 'default'
  //   })
  //     // .then((db: SQLiteObject) => {
    
  //     //   this.database = db;
          
  //     //   db.executeSql('create table danceMoves(name VARCHAR(32))', [])
  //     //     .then(() => console.log('Executed SQL'))
  //     //     .catch(e => console.log(e));


  //     // })
  //     // .catch(e => console.log(e));
  // }

  

  // readDatabase() {

    


  // }

}

// import { Component } from 'react';

// import { FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
// import { DatabaseLoad } from '../App';
// import { FilesystemDirectory, Plugins, Filesystem } from '@capacitor/core';
// import { File } from '@ionic-native/file';
// import { HttpDownloadFileResult } from '@capacitor-community/http';
// // import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { registerWebPlugin } from '@capacitor/core';
// import '@capacitor-community/http';

// import axios from 'axios';

// abstract class Database extends Component {

//   ////////////////////////
//   /*Fields*/
//   ////////////////////////

//   fileTransfer : FileTransferObject = FileTransfer.create();
//   ret: HttpDownloadFileResult = {};
//   // file : File = File.createFile();

//   ////////////////////////
//   /*Constructor*/
//   ////////////////////////

//   constructor(props : any) {
//     super(props);
//     // this.file = file;
//   }

//   ////////////////////////
//   /*Methods*/
//   ////////////////////////

//   /**
//    * This method should download the database and call/return the return value from downloadingDatabase(string, string).
//    */
//   abstract downloadDatabase() : void;

//   /**
//    * Downloads the Database from the given url.
//    * @param url - the URL to the database
//    * @param fileName - the file name that the database will be saved under
//    */
//   async downloadingDatabase(url : string, fileName : string) {

//     console.log("Started: downloadingDatabase() ")
//     console.log("Started: Downloading Database " + fileName + " from " + url);

//     // this.fileTransfer.download(url, FilesystemDirectory.Data + fileName ).then( entry => {
//     //   let url = entry.toURL();
//     //   console.log("Finished Download:  url = " + url);
//     // });

//     // setTimeout( () => {
//     //   this.fileTransfer.download(url, FilesystemDirectory.Data + fileName ).then( () => {
//     //     console.log("Download Complete!");
//     //   }).catch( () => {
//     //     console.log("Download Failure :c");
//     //   });
//     //   console.log("Timeout Ended");
//     // }, 10000);

//     // const { Http } = Plugins;
//     // // registerWebPlugin(Http.class);

//     // this.ret = await Http.downloadFile({
//     //   url: "https://mtgjson.com/api/v5/CompiledList.json",
//     //   filePath: "CompiledList.json",
//     //   fileDirectory: FilesystemDirectory.Data
//     // })

//     // if (this.ret.path) {
//     //   const read = await Filesystem.readFile({
//     //     path: 'CompiledList.json',
//     //     directory: FilesystemDirectory.Data
//     //   });
//     //   // Data is here
//     //   console.log("HI");
//     // }
    

//     // let fullFileName : string = fileName + ".db";

//     // try {
//     //   SQLite.create({ //This opens or creates a SQL file
//     //     name: fullFileName, location: 'default'
//     //   }).then(async (db: SQLiteObject) => {
//     //       try {
//     //         const create = await db.executeSql('create table if not exists danceMoves(name VARCHAR(32))', []);
//     //         console.log('Table created/exists. Msg: ', create);
//     //         const insert = await db.executeSql('insert into danceMoves (name) values (?)', ['Macarena']);
//     //         console.log('Inserted Macarena: ', insert);
//     //       } catch (e) {
//     //         console.log('SQL error: ', e);
//     //       }
//     //   })
//     // } catch(e) {
//     //   console.log("Error. SQL Database could not be set up. Could be due to not being used on an actual device?");
//     // }

//     const FileDownload = require('js-file-download');

//     axios({
//       url: url, //your url
//       method: 'GET',
//       responseType: 'blob', // important
//     }).then((response) => {
//       FileDownload(response.data, 'report.sqlite');
      
//       //  const url = window.URL.createObjectURL(new Blob([response.data]));
//       //  const link = document.createElement('a');
//       //  link.href = url;
//       //  link.setAttribute('download', fileName); //or any other extension
//       //  document.body.appendChild(link);
//       //  link.click();
//     });

//     console.log("Finished: downloadingDatabase() ");

//     return true;

//   }

//   /**
//    * This method should verify the database and call/return the return value from verifyingDatabase(string, string).
//    */
//   abstract verifyDatabase() : DatabaseLoad;

//   /**
//    * This method is to be only called by verifyDatabase() once the variables are set accordingly.
//    * @param url - the URL to the online SHA256 file
//    * @param localDirectory the directory to the local SHA256 file
//    */
//   protected verifyingDatabase(url : string, localDirectory : string) : DatabaseLoad {

//     //Extension Work
//     //Assume Database is never loaded

//     return DatabaseLoad.NOT_LOADED;
//   }
  
// }
  

// export default Database;