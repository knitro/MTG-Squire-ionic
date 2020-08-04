import React, { Component } from 'react';
import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import './QuickSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import LiveSearchBar, { LiveSearchCategory } from '../../components/LiveSearchBar/LiveSearchBar';
import App, { DatabaseState } from '../../App';

class QuickSearchBaseContent extends Component {

  currentDatabase : DatabaseState = App.databases[0];

  render() {

    if (this.currentDatabase.loaded) {
      console.log("this.currentDatabase.loaded = true");
      return (
        <IonText>
          Card Database Downloaded!
        </IonText>
      )
    } else {
      console.log("this.currentDatabase.loaded = false");
      return (
          <IonButton 
            id="downloadDatabase"
            color="primary"
            expand="block"
            fill="outline"
            shape="round"
            size="large"
            text-align="center"
            class="downloadDatabase"
            onClick={e => {
              console.log("Button Pressed: Download Database");
              this.currentDatabase.database.downloadDatabase();
            }}
          >
              Download Card Database
          </IonButton> 
      )
    }
  }

}

const QuickSearch: React.FC = () => {

  /*Hook Initialisation*/
  // const [searchText, setSearchText] = useState('');

  return (

    <IonPage>
      
      

      {/* Displays the Header */}
      <Header headerLabel="Quick Search"/>
      
      <IonContent>

        <LiveSearchBar searchString="" placeholderText="Search for Magic Cards" category={LiveSearchCategory.Cards}/>
      
        <QuickSearchBaseContent/>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default QuickSearch;
