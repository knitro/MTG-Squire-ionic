import React from 'react';
import { IonPage, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { SearchState } from '../../../states/SearchState';
import Header from '../../../components/Header/Header';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import SingleSearchResult from '../DisplayComponent/SupportingComponents/SingleSearchResult';
import uuid from 'uuid';
import { SearchResultsState } from '../SearchResults';

interface SearchResultsComponentProps {
  state : SearchResultsState
};

/**
 * Displays the Search Results using the information provided by props.
 * @param props - the information required to display all the search results
 */
const SearchResultsComponent = (props : SearchResultsComponentProps) => {

  let searchArray = props.state.currentSearchState;

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

export default SearchResultsComponent;