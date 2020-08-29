import React from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './SearchHistory.css';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import SingleSearchHistoryResult from './SupportingComponents/SingleSearchHistoryResult';
import uuid from 'uuid';
import { SearchHistoryState } from '../../../states/SearchHistoryState';
import { SearchHistoryPageState } from '../DisplayStateManager/SearchHistory';

interface SearchHistoryComponentProps {
  state : SearchHistoryPageState
};

/**
 * Displays the Search History using information provided from props.
 * @param props - contains the information to display on the page
 */
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
            {[...previousSearches].reverse().map((currentPreviousSearch : SearchHistoryState) =>
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

export default SearchHistoryComponent;
