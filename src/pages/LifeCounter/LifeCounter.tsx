import React, { useState } from 'react';
import { IonPage, IonLabel, IonButton, IonGrid, IonCol, IonRow } from '@ionic/react';
import './LifeCounter.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import LifeTotalOnePlayer from '../../components/LifeCounter/LifeTotalOnePlayer';
import LifeTotalTwoPlayer from '../../components/LifeCounter/LifeTotalTwoPlayer';
import { PlayersContextConsumer, Players, PlayersContextProvider, updatePlayer } from '../../states/LifeCounterPlayerState';
import LifeTotalThreePlayer from '../../components/LifeCounter/LifeTotalThreePlayer';
import LifeTotalFourPlayer from '../../components/LifeCounter/LifeTotalFourPlayer';

const LifeCounter: React.FC = () => {
  const [count,setCount] = useState([] as Number[]);
  // const [count,setCount] = useState(0);
  return (
    <IonPage>
      <PlayersContextProvider>
      {/* <Header headerLabel="Life Counter"/> */}
      <PlayersContextConsumer>
          {(context : Players) => (
        (context.players.length == 4) ? // if 4 players
        <LifeTotalFourPlayer/>
        
        : (context.players.length == 3) ? //if 3 players
        <LifeTotalThreePlayer/>
        
        : (context.players.length == 2) ? // if 2 players
        <LifeTotalTwoPlayer/>

        : //if 1 player
        <LifeTotalOnePlayer/>

        )}
      </PlayersContextConsumer>
      <FooterTabs/>
      </PlayersContextProvider>
    </IonPage>
  );
};

export default LifeCounter;
