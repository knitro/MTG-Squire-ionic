import React from 'react';
import { IonContent, IonPage, IonList } from '@ionic/react';
import './Help.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import HelpCard from './SupportingComponents/HelpCard';

const Help: React.FC = () => {

  return (
    
    <IonPage>
      {/* Displays the Header */}
      <Header headerLabel="Help"/>

      <IonContent>

        <IonList>
          {/* <IonCard>
            <IonTitle>Quick Search</IonTitle>
            <IonText>
              Quick Search finds the single card with the closest name to the given input.
            </IonText>
            <IonButton href="/quick-search">go to quick search</IonButton>
          </IonCard> */}
          <HelpCard
            title = "Quick Search"
            text = "Quick Search finds the single card with the closest name to the given input."
            buttonHref = "/quick-search"
            buttonText = "go to quick search"
          />
          <HelpCard
            title = "Advanced Search"
            text = "TODO"
            buttonHref = "/advanced-search"
            buttonText = "go to advanced search"
          />
          <HelpCard
            title = "Card Pages"
            text = "TODO"
            buttonHref = ""
            buttonText = ""
          />
          <HelpCard
            title = "Dice"
            text = "The dice page gives you the ability to roll the commonly requried dice at a moments notice. It also has functionaltiy to do custom die rolls and displays most recent previous roles."          
            buttonHref = "/dice"
            buttonText = "go to dice page"
          />
          <HelpCard
            title = "Life Counter"
            text = "TODO (both set up and page)"
            buttonHref = "/life-counter/new-game"
            buttonText = "go to life counter"
          />
          <HelpCard
            title = "Search History"
            text = "Shows a list of your most recent previous searches to allow easy access to those searches."
            buttonHref = "/search-history"
            buttonText = "go to search history"
          />
          <HelpCard
            title = "Settings"
            text = "The settings page has multiple options to alter how the application works or how information is stored. More settings may be added in later versions."
            buttonHref = "/settings"
            buttonText = "go to settings page"
          />
          <HelpCard
            title = "Other Pages for later versions"
            text = "Other functionalities including a Trading Cards page, Rules and Set EVs may be added in later versions of the application."
            buttonHref = ""
            buttonText = ""
          />
        </IonList>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      
    </IonPage>
  );
};

export default Help;
