import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Dice.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';

const Dice: React.FC = () => {
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Dice"/>

      <IonContent>

        <WorkInProgress name={"Dice"}/>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default Dice;
