import React from 'react';
import './LifeCounter.css';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from "@ionic/react";
import FirstScreenButton from './Slides/FirstScreenButton';
import { slideOpts180, slideOpts90, slideOpts270 } from './Slides/SlidesHelper';
import SecondScreenButton from './Slides/SecondScreenButton';

const LifeTotalThreePlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="threePlayerRowUpper">
          <IonCol class="threePlayerColUpper">
            <IonSlides class="life-slides-180" pager={true} options={slideOpts180}>
              <IonSlide>
                <SecondScreenButton rotation={180} division={1/6} player={0}/>
              </IonSlide>
              <IonSlide>
                <FirstScreenButton rotation={180} division={1/6} player={0}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
        <IonRow class="threePlayerRowLower">
          <IonCol class="threePlayerColLower">
            <IonSlides class="life-slides-90" pager={true} options={slideOpts90}>
              <IonSlide>
                <FirstScreenButton rotation={90} division={0.25} player={1}/>
              </IonSlide>
              <IonSlide>
                <SecondScreenButton rotation={90} division={0.25} player={1}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
          <IonCol class="threePlayerColLower">
            <IonSlides class="life-slides-270" pager={true} options={slideOpts270}>
              <IonSlide>
                <SecondScreenButton rotation={270} division={0.75} player={2}/>
              </IonSlide>
              <IonSlide>
                <FirstScreenButton rotation={270} division={0.75} player={2}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalThreePlayer;