import React from 'react';
import './LifeCounter.css';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from "@ionic/react";
import FirstScreenButton from './Slides/FirstScreenButton';
import { slideOpts90, slideOpts270 } from './Slides/SlidesHelper';
import SecondScreenButton from './Slides/SecondScreenButton';

const LifeTotalFourPlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="fourPlayerRow">
          <IonCol class="fourPlayerCol">
            <IonSlides class="life-slides-90" pager={true} options={slideOpts90}>
              <IonSlide>
                <FirstScreenButton rotation={90} division={0.25} player={0}/>
              </IonSlide>
              <IonSlide>
                <SecondScreenButton rotation={90} division={0.25} player={0}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
          <IonCol class="fourPlayerCol">
            <IonSlides class="life-slides-270" pager={true} options={slideOpts270}>
              <IonSlide>
                <SecondScreenButton rotation={270} division={0.75} player={1}/>
              </IonSlide>
              <IonSlide>
                <FirstScreenButton rotation={270} division={0.75} player={1}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
        <IonRow class="fourPlayerRow">
          <IonCol class="fourPlayerCol">
            <IonSlides class="life-slides-90" pager={true} options={slideOpts90}>
              <IonSlide>
                <FirstScreenButton rotation={90} division={0.25} player={2}/>
              </IonSlide>
              <IonSlide>
                <SecondScreenButton rotation={90} division={0.25} player={2}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
          <IonCol class="fourPlayerCol">
            <IonSlides class="life-slides-270" pager={true} options={slideOpts270}>
              <IonSlide>
                <SecondScreenButton rotation={270} division={0.75} player={3}/>
              </IonSlide>
              <IonSlide>
                <FirstScreenButton rotation={270} division={0.75} player={3}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalFourPlayer;