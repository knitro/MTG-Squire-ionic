import React, { Component } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol } from '@ionic/react';
import './ResultDisplay.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import ManaCost from '../../components/ManaCost/ManaCost';

//////////////////////////////////////////////////////////
/*Temporary Interfaces to be Components Later*/
//////////////////////////////////////////////////////////

export interface PriceProps {
  scryfallPricing : number //Remove if TCG/CK/SCG is implemented
}


export interface SetInformation {
  setName : string
  imageLink : string
}

//////////////////////////////////////////////////////////

/**
 * Interface that contains the parameters for the Class
 */
export interface ResultsDisplayProps {
  cardName: string
  imageLink: string
  manaCost: string
  prices: PriceProps
  fullType : string
  oracleText : string
}

class ResultDisplay extends Component<ResultsDisplayProps> {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  //Default Value for the Results Display if not updated through props
  private currentProps : ResultsDisplayProps;

  public static defaultProps : ResultsDisplayProps = {
    cardName: "Llanowar Elves",
    imageLink: "https://api.scryfall.com/cards/mb1/1262?format=image&version=png",
    manaCost: "{G}",
    prices: {
      scryfallPricing: 0.25
    },
    fullType: "Creature — Elf Druid",
    oracleText : "{T}: Add {G}."
  };

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    if (props == null) {
      this.currentProps = ResultDisplay.defaultProps;
    } else if (typeof (props) == typeof (ResultDisplay.defaultProps)) {
      this.currentProps = props;
    } else {
      this.currentProps = ResultDisplay.defaultProps;
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
  /*Initialise Hooks*/

  /*Initialise Variable Fields*/
  let headerLabel : string = "Card: " + this.currentProps.cardName;
  let subtitle : string = this.currentProps.fullType;
  let title : string = this.currentProps.cardName;
  let imageLink : string = this.currentProps.imageLink;
  let oracleText : string = this.currentProps.oracleText;
  let additionalRulings : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  /*Display*/ 
  return (

    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel={headerLabel}/>
      
      <IonContent>

        <IonList>

          {/* IonCard 1: Name + Image */}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  <IonCardTitle>{title}</IonCardTitle>
                </IonCol>
                <IonCol>
                  <ManaCost cost={ResultDisplay.defaultProps.manaCost}/>
                </IonCol>
              </IonRow>
              <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
            <IonImg src={imageLink} class="cardImage"/>
            </IonCardContent>
          </IonCard>
          
          {/* IonCard 2:  Oracle Text*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Oracle Text"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {oracleText}
            </IonCardContent>

          </IonCard>

          {/* IonCard 3:  Pricing*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Prices"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {"Scryfall Price: $"} {this.currentProps.prices.scryfallPricing}
            </IonCardContent>

          </IonCard>

          {/* IonCard 4:  Additional Rulings*/}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {additionalRulings}
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

    </IonPage>
  );
  }
 
};

export default ResultDisplay;
