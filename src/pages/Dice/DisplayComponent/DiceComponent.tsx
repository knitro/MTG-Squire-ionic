import React, { useState } from 'react';
import './Dice.css';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonInput, IonLabel, IonList, IonCard, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import { rollCustom, flipCoin, rollD6, rollD20 } from '../Logic/DiceHelper';
import { DiceHistoryState } from '../../../states/DiceHistoryState';
import uuid from 'uuid';
import Dice, { DiceState } from '../DisplayStateManager/Dice';

/**
 * Interface for input of DiceComponent
 */
interface DiceComponentProps {
  state : DiceState
  main : Dice
};

/**
 * Component used by Dice
 * @param props - inputs for component of state and main Dice class
 */
const DiceComponent = (props : DiceComponentProps) => {

  /*Variable Initialisation*/
  let diceHistory : DiceHistoryState[] = props.state.currentDiceHistoryState;
  let diceClass : Dice = props.main;
  let maxHistoryNumber : number = props.state.maxHistoryNumber;

  /*Hook Initialisation*/
  const [die, setDie]         = useState('Roll a Dice');
  const [dieType, setDieType] = useState('');
  const [custom, setCustom]   = useState(1);

  /*Return*/
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Dice"/>

      <IonContent>

        <IonList>

          {/*Ion Card 1: Dice Display*/}
          <IonCard>
            <IonLabel class="diceOutputText">
              {die}
            </IonLabel>
            <IonLabel class="diceOutputSubText">
              {dieType}
            </IonLabel>
          </IonCard>

          {/*Ion Card 2: Dice Buttons*/}
          <IonCard>
            <IonGrid>
              <IonRow>
                
                {/*Coin Button*/}
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e => {
                      setDie(flipCoin(maxHistoryNumber));
                      setDieType('Coin');
                      diceClass.updateDiceHistory();
                    }
                  }>
                    <IonLabel class="diceButtonText">
                      Coin
                    </IonLabel>
                  </IonButton>
                </IonCol>
                
                {/*6 Sided Die Button*/}
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e => {
                      setDie(rollD6(maxHistoryNumber).toString());
                      setDieType('6 Sided Die');
                      diceClass.updateDiceHistory();
                    }
                  }>
                    <IonLabel class="diceButtonText">
                      D6
                    </IonLabel>
                  </IonButton>
                </IonCol>
                
                {/*20 Sided Die Button*/}
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e => {
                      setDie(rollD20(maxHistoryNumber).toString());
                      setDieType('20 Sided Die');
                      diceClass.updateDiceHistory();
                    }
                  }>
                    <IonLabel class="diceButtonText">
                      D20
                    </IonLabel>
                  </IonButton>
                </IonCol>

              </IonRow>
              
              {/*Custom Die Input Field*/}
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="Custom" type="number"
                    onIonChange={e => {
                        setCustom(Math.ceil(Number(e.detail.value!)))
                    }}/>
                </IonCol>
              {/*Custom Die Button*/}
                <IonCol>
                  <IonButton
                  onClick={e => {
                    setDie(rollCustom(custom, maxHistoryNumber));
                    setDieType('Custom ('+ custom +' Sided) Die');
                    diceClass.updateDiceHistory();
                  }}>
                    custom
                  </IonButton>
                </IonCol>
              </IonRow>

            </IonGrid>
          </IonCard>
          
          {/* IonCard 3: Dice History Header*/}
          <IonCard color="secondary">
            <IonCardHeader>
              <IonCardSubtitle>{"Dice History"}</IonCardSubtitle>
              <IonCardTitle>{"Showing your previous " + diceHistory.length + " Rolls:"}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={
                (e) => {
                  diceClass.clearDiceHistory();
                }
              }>
                {"Clear Dice History"}
              </IonButton>
            </IonCardContent>
          </IonCard>
          
          {/* IonCards 4+: Dice History*/}
          <div>
            {[...diceHistory].reverse().map((currentPreviousRoll : DiceHistoryState) =>
              <IonCard key={uuid.v4()}>
                <IonGrid class="diceHistoryGrid">
                  <IonRow class="diceHistoryRow">
                    <IonCol class="diceHistoryCol">
                      <IonText class="diceHistoryValueText">{currentPreviousRoll.dieValue}</IonText>
                    </IonCol>
                    {/* <IonCol class="diceHistoryCol"> */}
                    <IonCol>
                      <IonText class="diceHistoryTypeText">{currentPreviousRoll.dieType}</IonText>                      
                    </IonCol> 
                  </IonRow>
                </IonGrid>



              </IonCard>
            )}
          </div>

        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default DiceComponent;