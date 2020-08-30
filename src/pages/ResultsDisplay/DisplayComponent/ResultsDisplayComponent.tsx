import React, { useState } from 'react';
import { IonContent, IonPage, IonSlides, IonSlide } from '@ionic/react';
import './ResultsDisplay.css';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import ResultsDisplay, { ResultsDisplayState } from '../DisplayStateManager/ResultsDisplay';
import OtherPrintingsCards from './SupportingComponents/OtherPrintingCards';
import GeneralInformationCards from './SupportingComponents/GeneralInformationCards';
import PricingCards from './SupportingComponents/PricingCards';
import MiscInformationCards from './SupportingComponents/MiscInformationCards';
import LegalityCards from './SupportingComponents/LegalitiesCards';

export interface ResultsDisplayComponentProps {
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
            <OtherPrintingsCards search={currentSearchState} main={main} swiper={swiper}/>
          </IonSlide>

          {/*Ion Slide 2: General Card Information*/}
          <IonSlide>
            <GeneralInformationCards search={currentSearchState} additionalRulings={additionalRulings}/>
          </IonSlide>

          {/* IonSlide 3: Pricing */}
          <IonSlide>
            <PricingCards search={currentSearchState} currentCurrency={currencyTo} currencyMapping={currencyMapping} />
          </IonSlide>

          {/* IonSlide 4: Legalities */}
          <IonSlide>
            <LegalityCards search={currentSearchState} legalities={legalitiesFormatted} />
          </IonSlide>
            
          {/* IonSlide 5: Misc Information */}
          <IonSlide>
            <MiscInformationCards search={currentSearchState} />
          </IonSlide>

        </IonSlides>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>

    </IonPage>
  );

}

export default ResultsDisplayComponent;