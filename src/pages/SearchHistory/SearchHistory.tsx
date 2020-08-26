import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './SearchHistory.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import WorkInProgress from '../../components/WorkInProgress/WorkInProgress';

const SearchHistory: React.FC = () => {
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="SearchHistory"/>

      <IonContent>

        <WorkInProgress name={"SearchHistory"}/>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default SearchHistory;
