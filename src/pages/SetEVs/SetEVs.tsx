import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './SetEVs.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';

const SetEVs: React.FC = () => {
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="SetEVs"/>

      <IonContent>

        <WorkInProgress name={"SetEVs"}/>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default SetEVs;
