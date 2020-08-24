import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol, IonText, IonSlides, IonSlide } from '@ionic/react';
import './ResultDisplay.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import ManaCost from '../../components/ManaCost/ManaCost';
import { SearchState, getSearchState, emptySearch, MiscInformation } from '../../states/SearchState';
import uuid from 'uuid';
import OtherPrinting from './SupportingComponents/OtherPrinting';
import StarCityGames from './SupportingComponents/StarCityGames';

////////////////////////
/*Interfaces*/
////////////////////////

interface legality {
  label: string //The Label to go with the Legality (The Format)
  legality: string //The Legality Status
  colour: string
};

interface ResultsDisplayState {
  currentSearchState: SearchState //The Label to go with the Legality (The Format)
  legalitiesFormatted: legality[] //The Legality Status
  additionalRulings: string[]
};

interface ResultsDisplayComponentProps {
  state : ResultsDisplayState
  main : ResultDisplay
};

////////////////////////
/*Functions*/
////////////////////////

/**
 * Creates a React Component containing the card's price.
 * @param source - the Label of the source of the price
 * @param price - the price of the card
 * @param isFoil - boolean whether the card's price is for a foil card
 * @param isOnline - boolean whether the card's price is for an online card
 * @param miscInfo - the MiscInformation of the unique card.
 */
function getPrice(source : string, price : string, isFoil : boolean, isOnline : boolean, miscInfo: MiscInformation) {

  // if ((typeof miscInfo.nonfoil != 'undefined') && (typeof miscInfo.foil != 'undefined') && (typeof miscInfo.digital_only != 'undefined')) {
    if ( (isFoil && (miscInfo.foil === true)) || (!isFoil && (miscInfo.nonfoil === true)) ) {
      if ((isOnline && (miscInfo.digital_only === true)) || (!isOnline && (miscInfo.digital_only === false))) {
        if ("".localeCompare(price) !== 0) {
          return (
            <IonCardContent>
              <IonText class="category-label">{source + " " + ((isFoil) ? ("Foil") : ("Non Foil")) + ": "}</IonText>
              <IonText class="category-value">{price}</IonText>
            </IonCardContent>
          )
        } else {
          return (
            <IonCardContent>
              {source + ": " + "Price Not Available"}
            </IonCardContent>
          )
        }
      }
    }
  // }
  
  /*Fail Return*/
  return (
    <></>
  );
}

/**
 * Capitalises the First Letter
 * @param input - the string to capitalise
 */
function capitaliseFirstLetter(input : string) : string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Converts a boolean into a Yes/No string
 * @param input - the 
 */
function convertBooleanToString(input : boolean) : string {
  return (input) ? "Yes" : "No";
}

////////////////////////
/*Results Display Class*/
////////////////////////

class ResultDisplay extends React.Component<{}, ResultsDisplayState> {

  ////////////////////////
  /*Fields*/
  ////////////////////////

  //None

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchState: emptySearch,
      legalitiesFormatted: [],
      additionalRulings: []
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {

    console.log("Component Mounting");
    this.setState({currentSearchState: await getSearchState()});
    this.formatLegalities();
    this.setRulings();
  }

  /**
   * Sets the Rulings of a Card to be displayed.
   */
  setRulings() {
    this.setState({additionalRulings: []});
    if (this.state.currentSearchState.rulings.length === 0) {
      this.state.additionalRulings.push("None");
    } else {
      this.state.currentSearchState.rulings.map((currentItem: string) => {
        this.state.additionalRulings.push(currentItem);
        return currentItem;
      });
    }
  }

  /**
   * Formats the Legalities into a single legality[], making it easier on the render method
   * to render the legalities of a card.
   */
  formatLegalities() {
    
    /*Reset Array*/
    this.setState({legalitiesFormatted: []}); 

    /*Variable Simplification*/
    let search : SearchState = this.state.currentSearchState;
    let array : legality[] = this.state.legalitiesFormatted;

    /*Re-Add to the String[]*/
    //Standard
    array.push(this.formatLegality("Standard", search.legality.standard));
    //Pioneer
    array.push(this.formatLegality("Pioneer", search.legality.pioneer));
    //Modern
    array.push(this.formatLegality("Modern", search.legality.modern));
    //Legacy
    array.push(this.formatLegality("Legacy", search.legality.legacy));
    //Pauper
    array.push(this.formatLegality("Pauper", search.legality.pauper));
    //Commander
    array.push(this.formatLegality("Commander", search.legality.commander));
    //Vintage
    array.push(this.formatLegality("Vintage", search.legality.vintage));
    //Future
    array.push(this.formatLegality("Future", search.legality.future));
    //Historic
    array.push(this.formatLegality("Historic", search.legality.historic));
    //Brawl
    array.push(this.formatLegality("Brawl", search.legality.brawl));
    //Penny
    array.push(this.formatLegality("Penny", search.legality.penny));
    //Duel
    array.push(this.formatLegality("Duel", search.legality.duel));
    //Old School
    array.push(this.formatLegality("Old School", search.legality.oldschool));
  }

  /**
   * Formats a single legality from "Code English" to English.
   * @param format - the Format String to be printed at the start
   * @param legalityString - the Legality string from the legality interface
   */
  formatLegality(format: string, legalityString : string) : legality {

    let formatCleaned : string = format + ": ";

    if ("legal".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Legal", colour: "success"};
    } else if ("not_legal".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Not Legal", colour: "danger"};
    } else if ("restricted".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Restricted", colour: "warning"};
    } else if ("banned".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Banned", colour: "danger"};
    } else {
      return {label: formatCleaned, legality: "Unsure", colour: "dark"};
    }
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {

    /*Display*/ 
    return (
      <ResultsDisplayComponent state={this.state} main={this}/>
    );
  }
 
};

////////////////////////
/*Results Display Component*/
////////////////////////

const ResultsDisplayComponent = (props : ResultsDisplayComponentProps) => {

  /*Variable Initialisation*/
  //Props
  const currentSearchState = props.state.currentSearchState;
  const legalitiesFormatted = props.state.legalitiesFormatted;
  const additionalRulings = props.state.additionalRulings;
  const miscInformation = currentSearchState.misc;
  const main = props.main;

  //Optional Parameters for Swiping (Ionic Slides)
  const slideOpts = {
    initialSlide: 1,
    speed: 300,
    autoHeight: true,
  };

  //Slider's Swiper
  const [swiper, setSwiper] = useState<any>({});

  const init = async function(this: any) {
      setSwiper(await this.getSwiper());
  };

  /*Display*/ 
  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel={currentSearchState.cardName}/>
      
      <IonContent>

        <IonSlides pager={true} options={slideOpts} id="slides"onIonSlidesDidLoad={init}>
            
          {/* IonSlide 1: Other Printings */}
          <IonSlide>
            <IonList>

              {/* IonCard 1:  All Printings Header*/}
              <IonCard color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>{"All Printings for:"}</IonCardSubtitle>
                  <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
              <>
                {currentSearchState.otherPrints.map((renderSearchState : SearchState) =>
                  <OtherPrinting key={uuid.v4()} currentSearchState={renderSearchState} display={main} currentDisplay={1} swiper={swiper}/>
                )}
              </>

            </IonList>
          </IonSlide>

          {/*Ion Slide 2: General Card Information*/}
          <IonSlide>
            <IonList>
            
              {/* IonCard 1: Name + Image */}
              <IonCard color="secondary">
                <IonCardHeader>
                  <IonRow>
                    <IonCol>
                      <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                    </IonCol>
                    <IonCol>
                      <ManaCost cost={currentSearchState.manaCost}/>
                    </IonCol>
                  </IonRow>
                  <IonCardSubtitle>{currentSearchState.fullType}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <img src={currentSearchState.imageLink} alt={currentSearchState.imageLink}/>
                </IonCardContent>
              </IonCard>
              
              {/* IonCard 2:  Oracle Text*/}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{"Oracle Text"}</IonCardTitle>
                </IonCardHeader>
                <>
                  {currentSearchState.oracleText.split("\n").map((currentItem: string) => 
                    <IonCardContent key={uuid.v4()}>
                      {currentItem}
                    </IonCardContent>
                  )}
                </>
              </IonCard>

              {/* IonCard 3:  Additional Rulings*/}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
                </IonCardHeader>
                <>
                    {additionalRulings.map((currentItem: string) => 
                      <IonCardContent key={uuid.v4()}>
                        {currentItem}
                      </IonCardContent>
                    )}
                </>
              </IonCard>

            </IonList>
          </IonSlide>

          {/* IonSlide 3: Pricing */}
          <IonSlide>
            {/* <IonList> */}
              <IonList>
              
                {/* IonCards 1:  Prices and Purchase Link Header*/}
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>{"Prices for:"}</IonCardSubtitle>
                    <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>

                {/* IonCards 2:  Pricing*/}
                <IonCard class="fullScreenCard">
                  <IonCardHeader>
                    <IonCardTitle>{"ScryFall Prices"}</IonCardTitle>
                  </IonCardHeader>
                  <>
                    {getPrice("Scryfall USD", currentSearchState.prices.scryFallPricing_nonfoil, false, false, currentSearchState.misc)}
                    {getPrice("Scryfall USD", currentSearchState.prices.scryFallPricing_foil, true, false, currentSearchState.misc)}
                  </>
                </IonCard>
                
                {/* IonCards 3:  Prices and Purchase Link Header*/}
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>{"Purchase Links for:"}</IonCardSubtitle>
                    <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>

                {/* IonCards 4:  Purchase Links*/}
                <StarCityGames search={currentSearchState}/>
              
              </IonList>

          </IonSlide>

          
          {/* IonSlide 4: Legalities */}
          <IonSlide>

              {/* IonCard 1: Legalities */}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{"Legalities"}</IonCardTitle>
                </IonCardHeader>
                <>
                    {legalitiesFormatted.map((currentItem: legality) => 
                      <IonCardContent key={uuid.v4()}>
                        <IonText class="category-label">{currentItem.label}</IonText>
                        <IonText class="category-value" color={currentItem.colour}>{currentItem.legality}</IonText>
                      </IonCardContent>
                    )}
                </>
              </IonCard>

          </IonSlide>
            
          {/* IonSlide 5: Misc Information */}
          <IonSlide>

              {/* IonCard 1:  Misc Information*/}
              <IonCard>

                <IonCardHeader>
                  <IonCardTitle>{"Miscellaneous Information"}</IonCardTitle>
                </IonCardHeader>
                
                <IonCardContent>  
                  <IonText class="category-label">{"Released Date: "}</IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.released)}</IonText>
                </IonCardContent>
                
                <IonCardContent>  
                  <IonText class="category-label">{"Artist: "}</IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.artist)}</IonText>
                </IonCardContent>
                
                <IonCardContent>  
                  <IonText class="category-label">{"Rarity: "}</IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.rarity)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Collector Number: "}</IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.collector_number)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Exists Non-Foil Version: "}</IonText>
                  <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.nonfoil)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Exists Foil Version: "}</IonText>
                  <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.foil)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Is a Promo Variant: "}</IonText>
                  <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.promo)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Is it a Reprint?: "} </IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.rarity)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"Frame Version: "}</IonText>
                  <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.frame)}</IonText>
                </IonCardContent>

                <IonCardContent>  
                  <IonText class="category-label">{"On the Reserve List?: "} </IonText>
                  <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.reserved)}</IonText>
                </IonCardContent>

              </IonCard>

          </IonSlide>

        </IonSlides>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );

}

export default ResultDisplay;
