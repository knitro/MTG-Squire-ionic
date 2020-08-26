import React from 'react';
import { IonPage, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { SearchState, getSearchRequest } from '../../states/SearchState';
import Header from '../../components/Header/Header';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import SingleSearchResult from './SupportingComponents/SingleSearchResult';
import uuid from 'uuid';
import { getSettings } from '../../states/SettingsState';

export interface SearchResultsState {
  currentSearchState: SearchState[]
  maxNumberOfResults: number
};

interface SearchResultsComponentProps {
  state : SearchResultsState
};

class SearchResults extends React.Component<{}, SearchResultsState> {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  maxNumberOfResults : number;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchState: [],
      maxNumberOfResults: 0
    }
    this.maxNumberOfResults = Number.POSITIVE_INFINITY;
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {
    this.setState({
      currentSearchState: await getSearchRequest(),
      maxNumberOfResults: (await getSettings()).maxSearch
    });
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
    return (
      <SearchResultsComponent state={this.state}/>
    );
  }

}

////////////////////////
/*Search Results Component*/
////////////////////////

const SearchResultsComponent = (props : SearchResultsComponentProps) => {

  let searchArray = props.state.currentSearchState;

  while (searchArray.length > props.state.maxNumberOfResults) {
    searchArray.slice();
  }
  

  return (
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel={"Search Results:"}/>
      <IonContent>
        <IonList>
          
          {/* IonCard 1:  All Printings Header*/}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardSubtitle>{"Search Complete"}</IonCardSubtitle>
              <IonCardTitle>{"Found " + searchArray.length + " Results:"}</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          
          <div>
            {searchArray.map((renderSearchState : SearchState) =>
              <SingleSearchResult key={uuid.v4()} currentSearchState={renderSearchState}/>
            )}
          </div>

        </IonList>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
}

export default SearchResults;