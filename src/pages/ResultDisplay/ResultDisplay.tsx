import React, { Component } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol } from '@ionic/react';
import './ResultDisplay.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import ManaCost from '../../components/ManaCost/ManaCost';
import { SearchState, getSearchState, emptySearch } from '../../states/SearchState';
import uuid from 'uuid';

class ResultDisplay extends Component<SearchState> {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  currentSearchState : SearchState;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.currentSearchState = emptySearch;
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  async componentDidMount() {
    this.currentSearchState = await getSearchState();
    console.log(this.currentSearchState.oracleText);
  }

  getPrice(label : string, price : string) {
    if (price.localeCompare("") === 0) {
      return;
    } else {
      return (
        <IonCardContent key={uuid.v4()}>
          {label + ": $"}{price}
        </IonCardContent>
      )
    }
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
    console.log("ManaCost = " + this.currentSearchState.manaCost);

  /*Display*/ 
  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel={this.currentSearchState.cardName}/>
      
      <IonContent>
      
        <IonList>

          {/* IonCard 1: Name + Image */}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  <IonCardTitle>{this.currentSearchState.cardName}</IonCardTitle>
                </IonCol>
                <IonCol>
                  <ManaCost cost={this.currentSearchState.manaCost}/>
                </IonCol>
              </IonRow>
              <IonCardSubtitle>{this.currentSearchState.fullType}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
            <IonImg src={this.currentSearchState.imageLink} class="cardImage"/>
            </IonCardContent>
          </IonCard>
          
          {/* IonCard 2:  Oracle Text*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Oracle Text"}</IonCardTitle>
            </IonCardHeader>
            <>
              {this.currentSearchState.oracleText.split("\n").map((currentItem: string) => 
                <IonCardContent key={uuid.v4()}>
                  {currentItem}
                </IonCardContent>
              )}
            </>
          </IonCard>

          {/* IonCard 3:  Pricing*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Prices"}</IonCardTitle>
            </IonCardHeader>
              {this.getPrice("Scryfall USD Non-Foil", this.currentSearchState.prices.scryFallPricing_nonfoil)}
              {this.getPrice("Scryfall USD Foil", this.currentSearchState.prices.scryFallPricing_foil)}
          </IonCard>

          {/* IonCard 4:  Additional Rulings*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
            </IonCardHeader>
            <>
                {this.currentSearchState.rulings.map((currentItem: string) => 
                  <IonCardContent key={uuid.v4()}>
                    {currentItem}
                  </IonCardContent>
                )}
            </>
          </IonCard>

          {/* IonCard 5:  Other Printings*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Other Printings"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {"None"}
            </IonCardContent>

          </IonCard>

        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
  }
 
};

export default ResultDisplay;
