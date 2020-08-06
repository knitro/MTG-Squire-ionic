import React from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import LiveSearchBar, { LiveSearchCategory } from '../../components/LiveSearchBar/LiveSearchBar';

const QuickSearch_Downloaded: React.FC = () => {

  /*Hook Initialisation*/
  // const [searchText, setSearchText] = useState('');

  return (

    <IonPage>
      
      {/* Displays the Header */}
      <Header headerLabel="Quick Search - Downloaded"/>
      
      <IonContent>

        <LiveSearchBar searchString="" placeholderText="Search for Magic Cards" category={LiveSearchCategory.Cards}/>
      
        <IonText>
          Card Database Downloaded!
        </IonText>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearch_Downloaded;
