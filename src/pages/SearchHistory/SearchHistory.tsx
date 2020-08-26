import React from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './SearchHistory.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import SingleSearchHistoryResult from './SupportingComponents/SingleSearchHistoryResult';
import uuid from 'uuid';
import { getSearchHistory, SearchHistoryState } from '../../states/SearchHistoryState';

export interface SearchHistoryPageState {
  currentSearchHistoryState: SearchHistoryState[]
};

interface SearchHistoryComponentProps {
  state : SearchHistoryPageState
};

class SearchHistory extends React.Component<{}, SearchHistoryPageState> {

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchHistoryState: [],
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {
    this.setState({currentSearchHistoryState: await getSearchHistory()});
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
    return (
      <SearchHistoryComponent state={this.state}/>
    );
  }

}

const SearchHistoryComponent = (props : SearchHistoryComponentProps) => {

  let previousSearches : SearchHistoryState[] = props.state.currentSearchHistoryState;

  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Search History"/>

      <IonContent>
        <IonList>
          
          {/* IonCard 1:  All Printings Header*/}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardSubtitle>{"Your Search History"}</IonCardSubtitle>
              <IonCardTitle>{"Showing your last " + previousSearches.length + " Results:"}</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <div>
            {previousSearches.map((currentPreviousSearch : SearchHistoryState) =>
              <SingleSearchHistoryResult key={uuid.v4()} currentSearchHistoryState={currentPreviousSearch}/>
            )}
          </div>

        </IonList>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default SearchHistory;
