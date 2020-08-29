import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import SearchBar, { SearchCategory } from '../../../components/SearchBar/SearchBar';
import App from '../../../App';

/**
 * Renders the QuickSearch given that the DataManager DOES NOT have a database to work with.
 */
const QuickSearchRequireDownload: React.FC = () => {

  const currentDataManager = App.dataManager;

  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Quick Search - Not Downloaded"/>
      
      <IonContent>

        <SearchBar searchString="" placeholderText="Search for Magic Cards" category={SearchCategory.Cards}/>
      
        <IonButton 
            id="downloadDatabaseButton"
            color="primary"
            expand="block"
            fill="outline"
            shape="round"
            size="large"
            text-align="center"
            class="downloadDatabaseButton"
            onClick={e => {
              currentDataManager.downloadDatabase();
            }}
          >
              {"Download Card Database"}
          </IonButton>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearchRequireDownload;
