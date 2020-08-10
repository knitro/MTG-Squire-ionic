import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonSplitPane,
  IonPage
} from '@ionic/react';
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

/*Page Imports (For Re-directions)*/
import QuickSearch from './pages/QuickSearch/QuickSearch';
import LifeCounterNewGame from './pages/LifeCounterNewGame/LifeCounterNewGame';
import Settings from './pages/Settings/Settings';
import SideBar from './components/SideBar/SideBar';
import LifeCounterPlayerNumber from './pages/LifeCounterNewGame/LifeCounterSetPlayers';
import LifeCounterSetLife from './pages/LifeCounterNewGame/LifeCounterSetLife';
import LifeCounterConfirm from './pages/LifeCounterNewGame/LifeCounterConfirm';

import { GameContextProvider } from './LifeTotalStore';


const App: React.FC = () => (
  <GameContextProvider>
  <IonReactRouter>
    <IonApp>
      <IonSplitPane contentId="main"> {/* Adds/Allows the SideBar Functionality */}
        <SideBar/>  {/* The Acutal Sidebar */}
        <IonPage id="main"> {/* ID reference allowing for Sidebar Functionality */}         
            <IonRouterOutlet>
              <Route path="/quick-search" component={QuickSearch} exact={true} />
              <Route path="/life-counter/new-game" component={LifeCounterNewGame} exact={true} />
              <Route path="/life-counter/set-players" component={LifeCounterPlayerNumber} exact={true}/>
              <Route path="/life-counter/set-life" component={LifeCounterSetLife} exact={true}/>
              <Route path="/life-counter/confirm" component={LifeCounterConfirm} exact={true}/>
              <Route path="/settings" component={Settings} exact={true}/>
              <Route path="/" render={() => <Redirect to="/quick-search" />} exact={true} />                           
            </IonRouterOutlet>
        </IonPage>
      </IonSplitPane>
    </IonApp>
  </IonReactRouter>
  </GameContextProvider>
);

export default App;
