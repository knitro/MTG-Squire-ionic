import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonGrid, IonRow, IonCol, IonInput, IonButton, IonSelectOption, IonSelect, IonTitle, IonLabel } from '@ionic/react';
import './Settings.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { updateSettings, updateSettingCurrency } from "./SettingsHelper";
import { SettingsState, defaultSettings, getSettings } from '../../states/SettingsState';

interface SettingsComponentProps {
  state : SettingsState;
  main : Settings;
};

class Settings extends React.Component<{}, SettingsState> {

  // maxHistoryNumber : number;
  constructor(props : any) {
    super(props);
    this.state = defaultSettings;
    // console.log("test",this.state);
    // this.maxHistoryNumber = 0;
  }

  async componentDidMount() {
    this.setState(await getSettings());
  }

  async updateSettingsValue(key : string, value : number) {
    await updateSettings(key,value);
    getSettings().then(e => {
      this.setState(e);
    });
  }
  async updateSettingsValueCurrency(value : string) {
    await updateSettingCurrency(value);
    getSettings().then(e => {
      this.setState(e);
    });

  }


  render() {
    return (
      <SettingsDisplayComponent state={this.state} main={this}/>
    );
  }
}

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
          <IonCard>
            <IonTitle class="settingsTitle"
            > 
              {"Number of previous searches stored:"} 
            </IonTitle>
            <IonTitle class="settingsText">
              {"Current value: " + state.searchStored}
            </IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                      setSearchStored(Number(e.detail.value!));
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton
                  onClick={e => {
                    // updateSettings('searchStored',searchStored);
                    settingsClass.updateSettingsValue('searchStored',searchStored);
                  }}>
                    {"Save"}
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonTitle class="settingsTitle">
              {"Number of previous dice rolls stored:"} 
            </IonTitle>
            <IonTitle class="settingsText">
              {"Current value: " + state.diceStored}
            </IonTitle>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                      setDiceStored(Number(e.detail.value!));
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton
                  onClick={e => {
                    settingsClass.updateSettingsValue('diceStored',diceStored);
                  }}>
                    {"Save"}
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonTitle class="settingsText">
              {"Change Currency:"}
            </IonTitle>
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
          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

// const SettingsDisplayComponent = (props : SettingsComponentProps) => {

//   /*Variable Initialisation*/
//     let state : SettingsState = props.state;
//     let settingsClass : Settings = props.main;

//   return (
    
//     <IonPage>
//       {/* Displays the Header */}
//       <Header headerLabel="Settings"/>

//       <IonContent>

//               <IonLabel>
//               {
//                 state.searchStored
//               }
//             </IonLabel>
//             <IonButton
//             // onClick={e => {
//               // console.log(state);
//               // console.log(settingsClass);
//             // }
//             // }
//             >
//               test
//             </IonButton>

//       </IonContent>

//       {/* Displays Tabs at the Bottom */}
//       <FooterTabs/>
      
//     </IonPage>
//   );
// };

export default Settings;
