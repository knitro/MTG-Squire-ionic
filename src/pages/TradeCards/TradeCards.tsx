import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './TradeCards.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';

const TradeCards: React.FC = () => {
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="TradeCards"/>

      <IonContent>

        <WorkInProgress name={"TradeCards"}/>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default TradeCards;
