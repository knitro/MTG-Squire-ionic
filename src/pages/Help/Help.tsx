import React, { useState } from 'react';
import { IonContent, IonPage, IonLabel, IonList, IonCard, IonGrid, IonRow, IonCol, IonInput, IonButton, IonText, IonTitle } from '@ionic/react';
import './Help.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';

const Settings: React.FC = () => {

  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel="Help"/>

      <IonContent>

        <IonList>
          <IonCard>
            <IonTitle>Quick Search</IonTitle>
            <IonText>
              Quick Search finds the single card with the closest name to the given input.
            </IonText>
            <IonButton href="/quick-search">go to quick search</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Advanced Search</IonTitle>
            <IonText>
              TODO
            </IonText>
            <IonButton href="/advanced-search">go to advanced search</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Card Pages</IonTitle>
            <IonText>
              TODO
              Sections of page
            </IonText>
          </IonCard>
          <IonCard>
            <IonTitle>Dice</IonTitle>
            <IonText>
              TODO
            </IonText>
            <IonButton href="/dice">go to dice page</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Life Counter</IonTitle>
            <IonText>
              TODO (set up and page itself)
            </IonText>
            <IonButton href="/life-counter/new-game">go to life counter</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Search History</IonTitle>
            <IonText>
              Shows a list of your most recent previous searches to allow easy access to those searches.
            </IonText>
            <IonButton href="/search-history">go to search history</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Settings</IonTitle>
            <IonText>
              The settings page has multiple options to alter how the application works or how information is stored. 
            </IonText>
            <IonButton href="/settings">go to settings page</IonButton>
          </IonCard>
          <IonCard>
            <IonTitle>Other Pages for later versions</IonTitle>
            <IonText>
              Other functionalities including a Trading Cards page, Rules and Set EVs may be added in later versions of the application.
            </IonText>
          </IonCard>
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default Settings;
