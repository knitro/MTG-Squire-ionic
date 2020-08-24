import React from 'react';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from "@ionic/react";
import SecondScreenButton from './Slide-2/SecondScreenButton';
import FirstScreenButton from './Slide-1/FirstScreenButton';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const LifeTotalOnePlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="onePlayerRow">
          <IonCol class="onePlayerCol">

          <IonSlides class="life-slides" pager={true} options={slideOpts}>
            <IonSlide>
              <FirstScreenButton rotation={0} division={0.5} player={0}/>
            </IonSlide>
          <IonSlide>
            <SecondScreenButton rotation={0} division={0.5}/>
          </IonSlide>
          </IonSlides>                

          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalOnePlayer;