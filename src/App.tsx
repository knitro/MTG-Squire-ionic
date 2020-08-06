import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*Non-Default Imports*/
import QuickSearch_Downloaded from './pages/QuickSearch/QuickSearch_Downloaded';
import QuickSearch_RequireDownload from './pages/QuickSearch/QuickSearch_RequireDownload';
import LifeCounterNewGame from './pages/LifeCounterNewGame/LifeCounterNewGame';
import Settings from './pages/Settings/Settings';
import SideBar from './components/SideBar/SideBar'; 
import Database from './databases/Database'; 
import CardsDB from './databases/CardDB/CardsDB';
import RulesDB from './databases/RulesDB/RulesDB';
import { Plugins } from '@capacitor/core';
import ResultDisplay from './pages/ResultDisplay/ResultDisplay';
import { SQLite } from '@ionic-native/sqlite/ngx';

export enum DatabaseLoad {
  NOT_LOADED,
  LOADED,
  OLD_DATA
}

export interface DatabaseState {
  database : Database;
  loaded : DatabaseLoad; 
}

class App extends Component {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /**
   * Stores the databases, and the states of each one.
   */
  static databases : DatabaseState[] = [
    // { database: new CardsDB(sqlLite), loaded: DatabaseLoad.NOT_LOADED }, //Card Database (Index 0)
    // { database: new RulesDB(sqlLite), loaded: DatabaseLoad.NOT_LOADED }, //Rules Database (Index 1)
  ];

  static updateDatabase(index : number, newState : DatabaseLoad) {
    let currentDatabase : DatabaseState = App.databases[index];
    currentDatabase.loaded = newState;
    console.log("Database State Updated to " + DatabaseLoad);
  }

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(sqlLite: SQLite) {
    super(sqlLite);
    this.checkLocalDatabases();

    App.databases = [
      { database: new CardsDB(sqlLite), loaded: DatabaseLoad.NOT_LOADED }, //Card Database (Index 0)
      { database: new RulesDB(sqlLite), loaded: DatabaseLoad.NOT_LOADED }, //Rules Database (Index 1)
    ]
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Checks the Local Databases by "verifying" each one.
   * This is done by calling the verifyDatabase method contained in the Abstract Class Database.
   */
  checkLocalDatabases() {
    App.databases.forEach(currentDatabaseState => {
      let currentDatabaseLoadState = currentDatabaseState.database.verifyDatabase();
      currentDatabaseState.loaded = currentDatabaseLoadState;
      
    });
  }

  ////////////////////////
  /*Render*/
  ////////////////////////
  
  render() {

    /*Perform SplashScreen Actions*/
    const { SplashScreen } = Plugins;
    SplashScreen.hide();

    SplashScreen.show({
      showDuration: 3000,
      autoHide: true
    });

    return (
      <IonReactRouter>
        <IonApp>
          <IonSplitPane contentId="main"> {/* Adds/Allows the SideBar Functionality */}
            <SideBar/>  {/* The Acutal Sidebar */}
            <IonPage id="main"> {/* ID reference allowing for Sidebar Functionality */}         
                <IonRouterOutlet>
                  <Route path="/quick-search" component={
                    (App.databases[0].loaded == DatabaseLoad.NOT_LOADED) 
                    ? QuickSearch_RequireDownload 
                    : QuickSearch_Downloaded} 
                    exact={true} />
                  <Route path="/life-counter/new-game" component={LifeCounterNewGame} exact={true} />
                  <Route path="/settings" component={Settings} exact={true}/>
                  <Route path="/results-display" component={ResultDisplay} exact={true}/>
                  <Route path="/" render={() => <Redirect to="/quick-search" />} exact={true} />                           
                </IonRouterOutlet>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </IonReactRouter>
    );
  }
}

export default App;
