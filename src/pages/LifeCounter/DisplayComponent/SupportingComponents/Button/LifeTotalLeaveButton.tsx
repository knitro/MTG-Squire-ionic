import React from 'react';
import './LifeTotalLeaveButton.css';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { arrowUndoCircle } from 'ionicons/icons';
import { PlayersContextProvider, PlayersContextConsumer, Players } from '../../../../../states/LifeCounterPlayerState';

/**
 * Button for leaving life counter page
 */
const LifeTotalLeaveButton = () => {
    return (
      <PlayersContextProvider>
      <PlayersContextConsumer>
        {(context : Players) => (
          (context.players.length === 1) ? // if 1 player
            <LifeTotalLeaveButtonOnePlayer/>
          : (context.players.length === 3) ? //if 3 players
            <LifeTotalLeaveButtonThreePlayer/>
          :  // if 2 OR 4 players
            <LifeTotalLeaveButtonTwoPlayer/>
        )}
      </PlayersContextConsumer>
      </PlayersContextProvider>
    )
}

/**
 * Leave life counter button for one player
 */
const LifeTotalLeaveButtonOnePlayer = () => {
  return (
    <IonFab vertical="top" horizontal="center" slot="fixed">
        <IonFabButton href="/life-counter/new-game">
          <IonIcon icon={arrowUndoCircle} />
        </IonFabButton>
      </IonFab>
  )
}

/**
 * Leave life counter button for two OR four players
 */
const LifeTotalLeaveButtonTwoPlayer = () => {
  return (
    <IonFab vertical="center" horizontal="center" slot="fixed">
        <IonFabButton href="/life-counter/new-game">
          <IonIcon icon={arrowUndoCircle} />
        </IonFabButton>
      </IonFab>
  )
}

/**
 * Leave life counter button for three players
 */
const LifeTotalLeaveButtonThreePlayer = () => {
  return (
    <IonFab vertical="center" horizontal="center" slot="fixed" class="leaveButtonThreePlayer">
        <IonFabButton href="/life-counter/new-game">
          <IonIcon icon={arrowUndoCircle} />
        </IonFabButton>
      </IonFab>
  )
}

export default LifeTotalLeaveButton;