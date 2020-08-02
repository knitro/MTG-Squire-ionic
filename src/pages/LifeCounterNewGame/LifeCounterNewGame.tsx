import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './LifeCounterNewGame.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';

const LifeCounterNewGame: React.FC = () => {
  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>
      
      <IonContent>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default LifeCounterNewGame;
