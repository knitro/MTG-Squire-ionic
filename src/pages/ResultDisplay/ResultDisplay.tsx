import React, { Component } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol } from '@ionic/react';
import './ResultDisplay.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import ManaCost from '../../components/ManaCost/ManaCost';
import { SearchState, SearchStateContextConsumer } from '../../states/SearchState';

class ResultDisplay extends Component<SearchState> {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  /*None*/

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /*None*/

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
  /*Display*/ 
  return (
    
    <IonPage>
      <SearchStateContextConsumer>
      {(context : SearchState) =>

      <>
      {/* Displays the Header */}
      <Header headerLabel={"Card: " + context.cardName}/>
      
      <IonContent>
      
        <IonList>

          {/* IonCard 1: Name + Image */}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  {/* <IonCardTitle>{title}</IonCardTitle> */}
                  <IonCardTitle>{context.cardName}</IonCardTitle>
                </IonCol>
                <IonCol>
                  <ManaCost cost={context.manaCost}/>
                </IonCol>
              </IonRow>
              <IonCardSubtitle>{context.fullType}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
            <IonImg src={context.imageLink} class="cardImage"/>
            </IonCardContent>
          </IonCard>
          
          {/* IonCard 2:  Oracle Text*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Oracle Text"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {context.oracleText}
            </IonCardContent>
          </IonCard>

          {/* IonCard 3:  Pricing*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Prices"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {"Scryfall USD Non-Foil Price: $"}{context.prices.scryFallPricing_nonfoil}
            </IonCardContent>
            <IonCardContent>
              {"Scryfall USD Foil Price: $"}{context.prices.scryFallPricing_foil}
            </IonCardContent>
          </IonCard>

          {/* IonCard 4:  Additional Rulings*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {context.rulings.map((currentItem: string) => 
                  <IonCardContent>
                    {currentItem}
                  </IonCardContent>
                )}
            </IonCardContent>
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
        
        {/* <IonButton 
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
          </IonButton> */}

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}
      </>
      }</SearchStateContextConsumer>

    </IonPage>
  );
  }
 
};

export default ResultDisplay;
