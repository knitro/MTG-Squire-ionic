import React from 'react';
import { IonPage, IonButton, } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../states/LifeCounterSetupState';
import { PlayersContextConsumer, Players, PlayersContextProvider } from '../../states/LifeCounterPlayerState';


const LifeCounterNewGame: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider><PlayersContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>
      <GameContextConsumer>
          {(context : Game) => (
      <IonButton href="/life-counter/set-players" class="newGameButton" shape="round" color="tertiary"
      onClick={e => {
        context == null ?
        saveGame({lifeTotal: 20, numberPlayers : 2}) : saveGame(context)
      }}
      >New<br/>Game</IonButton>
      )}
      </GameContextConsumer>
      <PlayersContextConsumer>
        {(context : Players) => (
          (context.players == null)
          ? <IonButton class="newGameButton" shape="round" color="dark">Continue<br/>Game</IonButton>
          : <IonButton class="newGameButton" shape="round" color="tertiary" href="/life-counter/game">Continue<br/>Game</IonButton>
        )}
      </PlayersContextConsumer>
      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      </PlayersContextProvider></GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterNewGame;
