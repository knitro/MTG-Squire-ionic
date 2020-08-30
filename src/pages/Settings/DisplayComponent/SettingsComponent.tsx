import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonGrid, IonRow, IonCol, IonInput, IonButton, IonSelectOption, IonSelect, IonTitle, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Settings.css';
import FooterTabs from '../../../components/FooterTabs/FooterTabs';
import Header from '../../../components/Header/Header';
import { SettingsState } from '../../../states/SettingsState';
import Settings from '../DisplayStateManager/Settings';

/**
 * Interface for input of SettingsDisplayComponent
 */
interface SettingsComponentProps {
  state : SettingsState;
  main : Settings;
};

/**
 * Display Component used by Settings
 * @param props - inputs for component of state and main Settings class
 */
const SettingsDisplayComponent = (props : SettingsComponentProps) => {

  /*Variable Initialisation*/
    let state : SettingsState = props.state;
    let settingsClass : Settings = props.main;

    /*Hook Initialisation*/
    const [searchStored, setSearchStored]   = useState(1);
    const [diceStored, setDiceStored]   = useState(1);

  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel="Settings"/>

      <IonContent>

        <IonList>
          {/* Card 1 : Card Searches Stored */}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Number of Previous Searches Stored:"} </IonCardTitle>
              <IonCardSubtitle>{"Current Value: " + state.searchStored}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="New Value" type="number"
                      onIonChange={e => {
                        setSearchStored(Number(e.detail.value!));
                      }}/>  
                  </IonCol>
                  <IonCol>
                    <IonButton
                    onClick={() => {
                      settingsClass.updateSettingsValue('searchStored',searchStored);
                    }}>
                      {"Save"}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>

          </IonCard>

          {/* Card 2 : Dice Rolls Stored */}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Number of Previous Dice Rolls Stored:"} </IonCardTitle>
              <IonCardSubtitle>{"Current Value: " + state.diceStored}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonInput
                      placeholder="New Value" type="number"
                      onIonChange={e => {
                        setDiceStored(Number(e.detail.value!));
                      }}/>  
                  </IonCol>
                  <IonCol>
                    <IonButton
                    onClick={() => {
                      settingsClass.updateSettingsValue('diceStored',diceStored);
                    }}>
                      {"Save"}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>

          </IonCard>

          {/* Card 3 : Currency */}
          <IonCard>
            
            <IonCardHeader>
              <IonCardTitle>{"Change Currency"} </IonCardTitle>
              <IonCardSubtitle>{"Current Value: " + state.currency}</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>
              <IonSelect value={state.currency} 
              placeholder="Change Currency" 
              onIonChange={e => {
                settingsClass.updateSettingsValueCurrency(e.detail.value!);
              }}>
                <IonSelectOption value="AUD">AUD</IonSelectOption>
                <IonSelectOption value="BGN">BGN</IonSelectOption>
                <IonSelectOption value="BRL">BRL</IonSelectOption>
                <IonSelectOption value="CAD">CAD</IonSelectOption>
                <IonSelectOption value="CHF">CHF</IonSelectOption>
                <IonSelectOption value="CNY">CNY</IonSelectOption>
                <IonSelectOption value="CZK">CZK</IonSelectOption>
                <IonSelectOption value="DKK">DKK</IonSelectOption>
                <IonSelectOption value="EUR">EUR</IonSelectOption>
                <IonSelectOption value="GBP">GBP</IonSelectOption>
                <IonSelectOption value="HKD">HKD</IonSelectOption>
                <IonSelectOption value="HRK">HRK</IonSelectOption>
                <IonSelectOption value="HUF">HUF</IonSelectOption>
                <IonSelectOption value="IDR">IDR</IonSelectOption>
                <IonSelectOption value="ILS">ILS</IonSelectOption>
                <IonSelectOption value="INR">INR</IonSelectOption>
                <IonSelectOption value="ISK">ISK</IonSelectOption>
                <IonSelectOption value="JPY">JPY</IonSelectOption>
                <IonSelectOption value="KRW">KRW</IonSelectOption>
                <IonSelectOption value="MXN">MXN</IonSelectOption>
                <IonSelectOption value="MYR">MYR</IonSelectOption>
                <IonSelectOption value="NOK">NOK</IonSelectOption>
                <IonSelectOption value="NZD">NZD</IonSelectOption>
                <IonSelectOption value="PHP">PHP</IonSelectOption>
                <IonSelectOption value="PLN">PLN</IonSelectOption>
                <IonSelectOption value="RON">RON</IonSelectOption>
                <IonSelectOption value="RUB">RUB</IonSelectOption>
                <IonSelectOption value="SEK">SEK</IonSelectOption>
                <IonSelectOption value="SGD">SGD</IonSelectOption>
                <IonSelectOption value="THB">THB</IonSelectOption>
                <IonSelectOption value="TRY">TRY</IonSelectOption>
                <IonSelectOption value="USD">USD</IonSelectOption>
                <IonSelectOption value="ZAR">ZAR</IonSelectOption>
              </IonSelect>
            </IonCardContent>

          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default SettingsDisplayComponent;