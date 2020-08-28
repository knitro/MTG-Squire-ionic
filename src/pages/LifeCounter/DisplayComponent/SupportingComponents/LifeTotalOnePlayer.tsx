import React from 'react';
import './LifeCounter.css';
import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from "@ionic/react";
import SecondScreenButton from './Slides/SecondScreenButton';
import FirstScreenButton from './Slides/FirstScreenButton';
import { slideOpts0 } from '../../Logic/SlidesHelper';


const LifeTotalOnePlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="onePlayerRow">

          {/* Player 1 */}
          <IonCol class="onePlayerCol">
            <IonSlides class="life-slides-0" pager={true} options={slideOpts0}>
              <IonSlide>
                <FirstScreenButton rotation={0} division={0.5} player={0}/>
              </IonSlide>
              <IonSlide>
                <SecondScreenButton rotation={0} division={0.5} player={0}/>
              </IonSlide>
            </IonSlides>
          </IonCol>
          
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalOnePlayer;