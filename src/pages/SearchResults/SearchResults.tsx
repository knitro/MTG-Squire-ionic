import React from 'react';
import { IonPage, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { SearchState, emptySearch, getSearchRequest } from '../../states/SearchState';
import Header from '../../components/Header/Header';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import SingleSearchResult from './SupportingComponents/SingleSearchResult';
import uuid from 'uuid';

export interface SearchResultsState {
  currentSearchState: SearchState[]
};

interface SearchResultsComponentProps {
  state : SearchResultsState
};

class SearchResults extends React.Component<{}, SearchResultsState> {

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchState: [emptySearch],
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {
    this.setState({currentSearchState: await getSearchRequest()});
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
              <IonCardTitle>{"Found " + props.state.currentSearchState.length + " Results:"}</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <>
            {props.state.currentSearchState.map((renderSearchState : SearchState) =>
              <SingleSearchResult key={uuid.v4()} currentSearchState={renderSearchState}/>
            )}
          </>

        </IonList>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );
}

export default SearchResults;