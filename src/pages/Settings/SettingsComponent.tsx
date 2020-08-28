import React from 'react';
import { IonContent, IonPage, IonList, IonCard, IonGrid, IonRow, IonCol, IonInput, IonButton, IonSelectOption, IonSelect, IonTitle } from '@ionic/react';
import './Settings.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { updateSettings, updateSettingCurrency } from "./SettingsHelper";

const SettingsDisplayComponent: React.FC = () => {

  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel="Settings"/>

      <IonContent>

        <IonList>
          <IonCard>
            <IonTitle class="settingsText">
              {"Number of previous searches stored:"} 
            </IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                      updateSettings('searchStored',Number(e.detail.value!));
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton>{"Save"}</IonButton>                  
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonTitle class="settingsText">
              {"Number of previous dice rolls stored:"} 
            </IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                      updateSettings('diceStored',Number(e.detail.value!));
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton>{"Save"}</IonButton>                  
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonTitle class="settingsText">
              {"Change Alternate Currency:"}
            </IonTitle>
            <IonSelect value="USD" 
            placeholder="Change Alternate Currency" 
            onIonChange={e => updateSettingCurrency(e.detail.value)}
            >
              <IonSelectOption value="CAD">CAD</IonSelectOption>
              <IonSelectOption value="HKD">HKD</IonSelectOption>
              <IonSelectOption value="ISK">ISK</IonSelectOption>
              <IonSelectOption value="PHP">PHP</IonSelectOption>
              <IonSelectOption value="DKK">DKK</IonSelectOption>
              <IonSelectOption value="HUF">HUF</IonSelectOption>
              <IonSelectOption value="CZK">CZK</IonSelectOption>
              <IonSelectOption value="GBP">GBP</IonSelectOption>
              <IonSelectOption value="RON">RON</IonSelectOption>
              <IonSelectOption value="SEK">SEK</IonSelectOption>
              <IonSelectOption value="IDR">IDR</IonSelectOption>
              <IonSelectOption value="INR">INR</IonSelectOption>
              <IonSelectOption value="BRL">BRL</IonSelectOption>
              <IonSelectOption value="RUB">RUB</IonSelectOption>
              <IonSelectOption value="HRK">HRK</IonSelectOption>
              <IonSelectOption value="JPY">JPY</IonSelectOption>
              <IonSelectOption value="THB">THB</IonSelectOption>
              <IonSelectOption value="CHF">CHF</IonSelectOption>
              <IonSelectOption value="EUR">EUR</IonSelectOption>
              <IonSelectOption value="MYR">MYR</IonSelectOption>
              <IonSelectOption value="BGN">BGN</IonSelectOption>
              <IonSelectOption value="TRY">TRY</IonSelectOption>
              <IonSelectOption value="CNY">CNY</IonSelectOption>
              <IonSelectOption value="NOK">NOK</IonSelectOption>
              <IonSelectOption value="NZD">NZD</IonSelectOption>
              <IonSelectOption value="ZAR">ZAR</IonSelectOption>
              <IonSelectOption value="USD">USD</IonSelectOption>
              <IonSelectOption value="MXN">MXN</IonSelectOption>
              <IonSelectOption value="SGD">SGD</IonSelectOption>
              <IonSelectOption value="AUD">AUD</IonSelectOption>
              <IonSelectOption value="ILS">ILS</IonSelectOption>
              <IonSelectOption value="KRW">KRW</IonSelectOption>
              <IonSelectOption value="PLN">PLN</IonSelectOption>
            </IonSelect>
          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default SettingsDisplayComponent;
