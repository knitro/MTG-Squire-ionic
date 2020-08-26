import React from 'react';
import { IonPage } from '@ionic/react';
import LifeTotalOnePlayer from './SupportingComponents/LifeTotalOnePlayer';
import LifeTotalTwoPlayer from './SupportingComponents/LifeTotalTwoPlayer';
import LifeTotalThreePlayer from './SupportingComponents/LifeTotalThreePlayer';
import LifeTotalFourPlayer from './SupportingComponents/LifeTotalFourPlayer';
import LifeTotalLeaveButton from './SupportingComponents/LifeTotalLeaveButton';
import { PlayersContextConsumer, Players, PlayersContextProvider } from '../../states/LifeCounterPlayerState';

const LifeCounter: React.FC = () => {
  return (
    <IonPage>
      <PlayersContextProvider>
      <PlayersContextConsumer>
          {(context : Players) => (
        (context.players.length === 4) ? // if 4 players
          <LifeTotalFourPlayer/>
        : (context.players.length === 3) ? //if 3 players
          <LifeTotalThreePlayer/>
        : (context.players.length === 2) ? // if 2 players
          <LifeTotalTwoPlayer/>
        : //if 1 player
          <LifeTotalOnePlayer/>
        )}
      </PlayersContextConsumer>
      </PlayersContextProvider>
      <LifeTotalLeaveButton />
    </IonPage>
  );
};

export default LifeCounter;
