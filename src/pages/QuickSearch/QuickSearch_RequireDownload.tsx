import React, { Component } from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import LiveSearchBar, { LiveSearchCategory } from '../../components/LiveSearchBar/LiveSearchBar';
import App, { DatabaseState } from '../../App';
import { useHistory } from 'react-router-dom';

const QuickSearch_RequireDownload: React.FC = () => {

  const currentDatabase = App.databases[0];
  const history = useHistory();

  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Quick Search - Not Downloaded"/>
      
      <IonContent>

        <LiveSearchBar searchString="" placeholderText="Search for Magic Cards" category={LiveSearchCategory.Cards}/>
      
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
              console.log("Button Pressed: Download Database");
              currentDatabase.database.downloadDatabase();
              history.push("/settings");
            }}
          >
              Download Card Database
          </IonButton>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearch_RequireDownload;
