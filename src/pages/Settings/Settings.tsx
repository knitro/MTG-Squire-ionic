import React, { useState } from 'react';
import { IonContent, IonPage, IonLabel, IonList, IonCard, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/react';
import './Settings.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';

const Settings: React.FC = () => {
  const [searchStored, setSearchStored] = useState(1);
  const [diceStored, setDiceStored] = useState(1);
  const [maxSearch, setMaxSearch] = useState(1);

  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel="Settings"/>

      <IonContent>

        <IonList>
          <IonCard>
            <IonLabel>
              {"Number of previous searches stored:"} 
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                        setSearchStored(1);
                        // setSearchStored(e.detail.value!);
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton>{"Save"}</IonButton>                  
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonLabel>
              {"Maximum number of search results displayed:"} 
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="New value" type="number"
                    onIonChange={e => {
                        setSearchStored(1);
                        console.log(e.detail.value!);
                        // setSearchStored(e.detail.value!);
                    }}/>  
                </IonCol>
                <IonCol>
                  <IonButton>{"Save"}</IonButton>                  
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard>
            <IonLabel>
              {"Number of previous dice rolls stored:"} 
            </IonLabel>
          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default Settings;
