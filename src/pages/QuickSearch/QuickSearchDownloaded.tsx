import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import SearchBar, { SearchCategory } from '../../components/SearchBar/SearchBar';

const QuickSearchDownloaded: React.FC = () => {

  return (

    <IonPage>
      
      {/* Displays the Header */}
      <Header headerLabel="Quick Search"/>
      
      <IonContent>

        <SearchBar searchString="" placeholderText="Search for Magic Cards" category={SearchCategory.Cards}/>
      
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearchDownloaded;
