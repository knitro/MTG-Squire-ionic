import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol, IonText, IonSlides, IonSlide } from '@ionic/react';
import './ResultsDisplay.css';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import ManaCost from '../../../components/ManaCost/ManaCost';
import { SearchState } from '../../../states/SearchState';
import uuid from 'uuid';
import OtherPrinting from '../SupportingComponents/OtherPrinting';
import StarCityGames from '../SupportingComponents/StarCityGames';
import ResultsDisplay, { ResultsDisplayState, Legality } from '../DisplayStateManager/ResultsDisplay';
import { capitaliseFirstLetter, convertBooleanToString } from '../../../logic/stringHelper';
import { getPrice } from '../Logic/ResultsDisplayLogic';

interface ResultsDisplayComponentProps {
  state : ResultsDisplayState
  main : ResultsDisplay
};

/**
 * Displays the ResultsDisplay
 * @param props - the interface of values that is to be displayed by the ResultsDisplayComponent
 */
const ResultsDisplayComponent = (props : ResultsDisplayComponentProps) => {

  /*Variable Initialisation*/
  //Props
  const currentSearchState = props.state.currentSearchState;
  const legalitiesFormatted = props.state.legalitiesFormatted;
  const additionalRulings = props.state.additionalRulings;
  const miscInformation = currentSearchState.misc;
  const currencyTo = props.state.currentCurrency;
  const currencyMapping = props.state.currencyMapping;
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
              <div>
                {currentSearchState.otherPrints.map((renderSearchState : SearchState) =>
                  <OtherPrinting key={uuid.v4()} currentSearchState={renderSearchState} display={main} swiper={swiper}/>
                )}
              </div>

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
                <div>
                  {currentSearchState.oracleText.split("\n").map((currentItem: string) => 
                    <IonCardContent key={uuid.v4()}>
                      {currentItem}
                    </IonCardContent>
                  )}
                </div>
              </IonCard>

              {/* IonCard 3:  Additional Rulings*/}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
                </IonCardHeader>
                <div>
                    {additionalRulings.map((currentItem: string) => 
                      <IonCardContent key={uuid.v4()}>
                        {currentItem}
                      </IonCardContent>
                    )}
                </div>
              </IonCard>

            </IonList>
          </IonSlide>

          {/* IonSlide 3: Pricing */}
          <IonSlide>
            {/* <IonList> */}
              <IonList>
                
                {/*IonCard 0: Image Card*/}
                <IonCard>
                  <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
                </IonCard>

                {/* IonCards 1: Prices and Purchase Link Header*/}
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
                  <div>
                    {getPrice("Scryfall", "USD", currencyTo, currencyMapping, currentSearchState.prices.scryFallPricing_nonfoil, false, false, currentSearchState.misc)}
                    {getPrice("Scryfall", "USD", currencyTo, currencyMapping, currentSearchState.prices.scryFallPricing_foil, true, false, currentSearchState.misc)}
                  </div>
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
            <IonList>
              
              {/*IonCard 0: Image Card*/}
              <IonCard>
                <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
              </IonCard>

              {/* IonCards 1: Legality Header*/}
              <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>{"Format Legality for:"}</IonCardSubtitle>
                    <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>

              {/* IonCard 2: Legalities */}
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{"Legalities"}</IonCardTitle>
                </IonCardHeader>
                <div>
                    {legalitiesFormatted.map((currentItem: Legality) => 
                      <IonCardContent key={uuid.v4()}>
                        <IonText class="category-label">{currentItem.label}</IonText>
                        <IonText class="category-value" color={currentItem.colour}>{currentItem.legality}</IonText>
                      </IonCardContent>
                    )}
                </div>
              </IonCard>
            </IonList>
          </IonSlide>
            
          {/* IonSlide 5: Misc Information */}
          <IonSlide>
            <IonList>
              
              {/*IonCard 0: Image Card*/}
              <IonCard>
                <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
              </IonCard>

              {/* IonCards 1: Misc Information Header*/}
              <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>{"Miscellaneous Information for:"}</IonCardSubtitle>
                    <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>

              {/* IonCard 2:  Misc Information*/}
              <IonCard class="fullScreenCard">

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
            </IonList>
          </IonSlide>

        </IonSlides>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );

}

export default ResultsDisplayComponent;