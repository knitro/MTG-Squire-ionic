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