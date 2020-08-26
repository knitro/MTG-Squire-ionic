import React, { useState } from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonInput, IonLabel, IonList, IonCard } from '@ionic/react';
import './Dice.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { rollCustom, flipCoin, rollD6, rollD20 } from './DiceHelper';

const Dice: React.FC = () => {
  const [die,setDie] = useState('Roll a Dice');
  const [dieType,setDieType] = useState('');
  const [custom,setCustom] = useState(1);
  return (
    
    <IonPage>

      {/* Displays the Header */}
      <Header headerLabel="Dice"/>

      <IonContent>

        <IonList>
          <IonCard>
            <IonLabel class="diceOutputText">
              {die}
            </IonLabel>
            <IonLabel class="diceOutputSubText">
              {dieType}
            </IonLabel>
          </IonCard>

          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e => 
                      (
                        setDie(flipCoin()),
                        setDieType('Coin')
                      )
                  }>
                    <IonLabel class="diceButtonText">
                      Coin
                    </IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e =>
                      (
                        setDie(rollD6().toString()),
                        setDieType('6 Sided Die')
                      )
                  }>
                    <IonLabel class="diceButtonText">
                      D6
                    </IonLabel>
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton class="diceButton"
                    onClick={e =>
                      (
                        setDie(rollD20().toString()),
                        setDieType('20 Sided Die')
                      )
                  }>
                    <IonLabel class="diceButtonText">
                      D20
                    </IonLabel>
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="Custom" type="number"
                    onIonChange={e => {
                        setCustom(Math.ceil(Number(e.detail.value!)))
                    }}/>
                </IonCol>
                <IonCol>
                  <IonButton
                  onClick={e => {
                    var customDie = rollCustom(custom);
                    if(customDie < 1){
                      setDie('Please use a positive integer');
                      setDieType('Custom value given: '+ custom);
                    } else {
                      setDie(customDie.toString())
                      setDieType('Custom ('+ custom +' Sided) Die')
                    }
                  }}>
                    custom
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

          <IonCard>
            <IonLabel>
              History:
            </IonLabel>
          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default Dice;
