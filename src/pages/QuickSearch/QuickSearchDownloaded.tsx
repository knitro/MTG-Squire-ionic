import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import LiveSearchBar, { LiveSearchCategory } from '../../components/LiveSearchBar/LiveSearchBar';

const QuickSearchDownloaded: React.FC = () => {

  return (

    <IonPage>
      
      {/* Displays the Header */}
      <Header headerLabel="Quick Search"/>
      
      <IonContent>

        <LiveSearchBar searchString="" placeholderText="Search for Magic Cards" category={LiveSearchCategory.Cards}/>
      
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearchDownloaded;