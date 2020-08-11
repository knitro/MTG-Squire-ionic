import React from 'react';
import { IonPage, IonLabel } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { PlayersContextConsumer, Players, PlayersContextProvider } from '../../states/LifeCounterPlayerState';


const LifeCounter: React.FC = () => {
  return (

    <IonPage>
      <PlayersContextProvider>
      <Header headerLabel="The game itself"/>
      <PlayersContextConsumer>
          {(context : Players) => (
        <IonLabel class="lifeText">
          players: {context.players.length}<div/>
          p1: {context.players[0] == null ? "NA" : context.players[0].lifeTotal}<div/>
          p2: {context.players[1] == null ? "NA" : context.players[1].lifeTotal}<div/>
          p3: {context.players[2] == null ? "NA" : context.players[2].lifeTotal}<div/>
          p4: {context.players[3] == null ? "NA" : context.players[3].lifeTotal}
        </IonLabel>
        )}
      </PlayersContextConsumer>
      <FooterTabs/>
      </PlayersContextProvider>
    </IonPage>
  );
};

export default LifeCounter;
