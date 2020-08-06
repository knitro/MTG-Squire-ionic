import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonInput, IonCard } from '@ionic/react';
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
        <IonButton class="lifeNavigationButtons" color="secondary" expand="full">
          Number of<br/> Players
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton class="lifeNavigationButtons" color="light" expand="full">
          Life Totals
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton class="lifeNavigationButtons" color="light" expand="full">
          Confirmation
        </IonButton>
      </IonCol>
    </IonRow>

      <IonContent>
        <IonCard class="buttonCard">
        <IonGrid class="buttonGrid">
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton class="optionButton" color="tertiary">20</IonButton>
            </IonCol>
            <IonCol>
              <IonButton class="optionButton" color="tertiary">30</IonButton>
            </IonCol>
          </IonRow>
          <IonRow/>
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton class="optionButton" color="tertiary">40</IonButton>
            </IonCol>
            <IonCol>
              {/* <IonButton size="large">__</IonButton> */}
              <IonInput class="optionTextField" placeholder="Custom"/>
              <IonButton class="optionTextButton" color="tertiary">Use custom value</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton class="nextButton" size="large">Next</IonButton>
        </IonCard>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default LifeCounterNewGame;
