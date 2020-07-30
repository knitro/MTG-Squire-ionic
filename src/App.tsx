import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
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


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/quick-search" component={QuickSearch} exact={true} />
          <Route path="/life-counter/new-game" component={LifeCounterNewGame} exact={true} />
          <Route path="/settings" component={Settings} exact={true}/>
          <Route path="/" render={() => <Redirect to="/quick-search" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
