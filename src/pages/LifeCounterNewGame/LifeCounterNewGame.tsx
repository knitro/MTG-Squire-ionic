import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonInput } from '@ionic/react';
import './LifeCounterNewGame.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';

const LifeCounterNewGame: React.FC = () => {
  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

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
        <IonGrid class = "buttonGrid">
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton class="optionButton">20</IonButton>
            </IonCol>
            <IonCol>
              <IonButton class="optionButton">30</IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton class="optionButton">40</IonButton>
            </IonCol>
            <IonCol>
              {/* <IonButton size="large">__</IonButton> */}
              <IonInput class="optionTextField" placeholder="Custom"/>
              <IonButton >Use custom value</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton item-end /*class="nextButton"*/ size="large">Next</IonButton>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default LifeCounterNewGame;
