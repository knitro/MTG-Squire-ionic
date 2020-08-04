import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonButton, IonRow, IonCol, IonGrid } from '@ionic/react';
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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton size="large">20</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large">30</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton size="large">40</IonButton>
            </IonCol>
            <IonCol>
              <IonButton size="large">__</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default LifeCounterNewGame;
