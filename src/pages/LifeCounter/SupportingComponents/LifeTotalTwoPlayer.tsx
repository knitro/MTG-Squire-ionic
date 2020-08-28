import React from 'react';
import './LifeCounter.css';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from "@ionic/react";
import FirstScreenButton from './Slides/FirstScreenButton';
import { slideOpts0,slideOpts180 } from './Slides/SlidesHelper';
import SecondScreenButton from './Slides/SecondScreenButton';

const LifeTotalTwoPlayer = () => {
    return (
        <IonGrid class="playerGrid">
        <IonRow class="twoPlayerRow">
          <IonCol class="twoPlayerCol">
            <IonSlides class="life-slides-180" pager={true} options={slideOpts180}>
              <IonSlide>
                <SecondScreenButton rotation={180} division={0.25} player={0}/>
              </IonSlide>
              <IonSlide>
                <FirstScreenButton rotation={180} division={0.25} player={0}/>
               </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
        <IonRow class="twoPlayerRow">
          <IonCol class="twoPlayerCol">
            <IonSlides class="life-slides-0" pager={true} options={slideOpts0}>
              <IonSlide>
                <FirstScreenButton rotation={0} division={0.75} player={1}/>
              </IonSlide>
              <IonSlide>
                <SecondScreenButton rotation={0} division={0.75} player={1}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalTwoPlayer;