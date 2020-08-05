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

      {/* <IonItem lines="full">
        <IonItem class="test" lines="none" color="secondary">
          <IonTitle class="buttontext">Number<br/>of players</IonTitle>
        </IonItem>
        <IonItem class="test" lines="none" color="warning">
          <IonTitle class="buttontext">Starting<br/>Life Totals</IonTitle>
        </IonItem>
        <IonItem class="test" href='../quick-search' lines="none" color="primary">
          <IonTitle class="buttontext">Start Game!</IonTitle>
        </IonItem>
      </IonItem> */}

    <IonRow>
      <IonCol>
        <IonButton class="lifeNavigationButtons" color="warning" expand="full">
          Number of<br/> Players
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton class="lifeNavigationButtons" color="success" expand="full">
          Life Totals
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton class="lifeNavigationButtons" color="tertiary" expand="full">
          Confirmation
        </IonButton>
      </IonCol>
    </IonRow>

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
