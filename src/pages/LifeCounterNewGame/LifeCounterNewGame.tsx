import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonInput, IonCard } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame } from '../../LifeTotalStore';


const LifeCounterNewGame: React.FC = () => {
  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>
      <GameContextConsumer>
          {(context : Game) => (
      <IonButton href="/life-counter/set-players" class="optionButton" color="tertiary"
      onClick={e => {
        context == null ?
        saveGame({lifeTotal: 20, numberPlayers : 2}) : saveGame(context)
      }}
      >New Game</IonButton>
      )}
      </GameContextConsumer>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default LifeCounterNewGame;
