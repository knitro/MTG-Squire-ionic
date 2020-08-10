import React, { Component, useState } from 'react';
import { IonContent, IonPage, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol, IonLoading } from '@ionic/react';
import './ResultDisplay.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import ManaCost from '../../components/ManaCost/ManaCost';
import { SearchState } from '../../states/SearchState';

class ResultDisplay_Loading extends Component {

  ////////////////////////
  /*Methods*/
  ////////////////////////
  
  // async function findExactCard() {
    
  // }
  

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {

    /*Initialise Hooks*/
    const [showLoading, setShowLoading] = useState(true);

    /*Initialise Variable Fields*/
    let headerLabel : string = "Searching";

    return (
      
      <IonPage>
  
        {/* Displays the Header */}
        <Header headerLabel={headerLabel}/>
        
        <IonContent>
  
          <IonLoading
            cssClass='loading'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(true)}
            message={'Please wait...'}
            duration={5000}
          />
  
          {/* { (context : SearchState) =>
            <IonList>
              <IonItem><IonLabel>Total Number of Migraines: {context.migraines ? context.migraines.length : 0}</IonLabel></IonItem>
              { (context.migraines)
                ? context.migraines.map((m : Migraine) =>
                  <IonItemSliding key={uuid.v4()}>
                    <IonItem><IonLabel className="ion-text-wrap">On {m.date} you had {m.description}.</IonLabel></IonItem>

                    <IonItemOptions side="end">
                      <IonItemOption color="danger" onClick={() => {
                        var i = context.migraines.findIndex(o => o.date === m.date && o.description === m.description);
                        if (i > -1) context.migraines.splice(i, 1);
                        saveMigraines(context.migraines);
                      }}>Delete</IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>)
                : {} }
            </IonList>
          } */}
  
        </IonContent>
  
        {/* Displays Tabs at the Bottom */}
        <FooterTabs/>
        {/* <TestDatabase/> */}
  
      </IonPage>
    );

  } 
  
 
};

export default ResultDisplay_Loading;
