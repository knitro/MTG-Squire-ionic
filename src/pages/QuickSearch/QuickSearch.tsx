import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane, IonMenu } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

const QuickSearch: React.FC = () => {
  return (

    <IonPage>
      
      {/* Displays the Header */}
      <Header headerLabel="Quick Search"/>
      
      <IonContent>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 1 page" />

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
};

export default QuickSearch;
