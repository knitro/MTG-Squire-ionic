import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonText, IonCheckbox, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid, IonButton, IonLoading, IonAlert, IonInput } from '@ionic/react';
import './AdvancedSearch.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { ScryFallSearchTerms } from '../../databases/CardDB/ScryFallInterfaces';
import App from '../../App';
import { useHistory } from 'react-router';

const AdvancedSearch: React.FC = () => {

  /*Variable Initialisation*/
  // let mainSearchTerm : string = "";
  // let cardTypesValue : string = "";
  // let cardTextValue : string = "";

  const [mainSearchTerm, setMainSearchTerm] = useState<string>("");
  const [cardTypesValue, setCardTypesValue] = useState<string>("");
  const [cardTextValue, setCardTextValue] = useState<string>("");

  const history = useHistory();

  /*Hook Initialisation*/
  const [includeWhite, setIncludeWhite] = useState(false);
  const [includeBlue, setIncludeBlue] = useState(false);
  const [includeBlack, setIncludeBlack] = useState(false);
  const [includeRed, setIncludeRed] = useState(false);
  const [includeGreen, setIncludeGreen] = useState(false);
  const [includeColourless, setIncludeColourless] = useState(false);

  const [excludeWhite, setExcludeWhite] = useState(false);
  const [excludeBlue, setExcludeBlue] = useState(false);
  const [excludeBlack, setExcludeBlack] = useState(false);
  const [excludeRed, setExcludeRed] = useState(false);
  const [excludeGreen, setExcludeGreen] = useState(false);
  const [excludeColourless, setExcludeColourless] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  /*Return*/
  return (

    <IonPage>
      
      {/* Displays the Header */}
      <Header headerLabel="Advanced Search"/>
      
      <IonContent>
        <IonList>
          
          {/*Main Search Terms*/}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Main Search Terms"}</IonCardTitle>
              <IonCardSubtitle>{"Put Card Names Here"}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonInput 
                autocomplete="on" 
                inputmode="text" 
                type="text"
                placeholder={"Add Search Terms Here"}
                value={mainSearchTerm} 
                onIonChange={
                  e => {
                    setMainSearchTerm(e.detail.value!);
                    // mainSearchTerm = e.detail.value!;
                  } 
                }
                clearOnEdit={false}
              />
            </IonCardContent>

          </IonCard>
          
          {/*Colour Inclusions*/}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Colours"}</IonCardTitle>
              <IonCardSubtitle>{"To Include"}</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>
              <IonGrid fixed={true}>
                <IonRow>
                  <IonCol>
                    <IonRow><IonText class="label">{"White"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeWhite} onIonChange={e => setIncludeWhite(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Blue"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeBlue} onIonChange={e => setIncludeBlue(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Black"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeBlack} onIonChange={e => setIncludeBlack(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Red"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeRed} onIonChange={e => setIncludeRed(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Green"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeGreen} onIonChange={e => setIncludeGreen(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Colourless"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="success" checked={includeColourless} onIonChange={e => setIncludeColourless(e.detail.checked)}/></IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>

          </IonCard>

          {/*Colour Exclusions*/}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Colours"}</IonCardTitle>
              <IonCardSubtitle>{"To Exclude"}</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>
              <IonGrid fixed={true}>
                <IonRow>
                  <IonCol>
                    <IonRow><IonText class="label">{"White"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeWhite} onIonChange={e => setExcludeWhite(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Blue"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeBlue} onIonChange={e => setExcludeBlue(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Black"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeBlack} onIonChange={e => setExcludeBlack(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Red"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeRed} onIonChange={e => setExcludeRed(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Green"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeGreen} onIonChange={e => setExcludeGreen(e.detail.checked)}/></IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow><IonText class="label">{"Colourless"}</IonText></IonRow>
                    <IonRow><IonCheckbox color="danger" checked={excludeColourless} onIonChange={e => setExcludeColourless(e.detail.checked)}/></IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>

          </IonCard>
         
          {/*Card Types*/}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Card Types"}</IonCardTitle>
              <IonCardSubtitle>{"Leave a space between each card type"}</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>
              <IonInput 
                autocomplete="on" 
                inputmode="text" 
                type="text" 
                placeholder={"Add Card Types Here"}
                value={cardTypesValue} 
                onIonChange={
                  e => {
                    setCardTypesValue(e.detail.value!);
                    // cardTypesValue = e.detail.value!;
                  } 
                }
              />
            </IonCardContent>

          </IonCard>

          {/*Card Text*/}
          <IonCard>

            <IonCardHeader>
              <IonCardTitle>{"Card Text"}</IonCardTitle>
              <IonCardSubtitle>{"Put the card text in quotation marks"}</IonCardSubtitle>
            </IonCardHeader>
            
            <IonCardContent>
              <IonInput 
                autocomplete="on" 
                inputmode="text" 
                type="text" 
                placeholder={"Add Card Text Here"}
                value={cardTextValue} 
                onIonChange={
                  e => {
                    setCardTextValue(e.detail.value!);
                    // cardTextValue = e.detail.value!;
                  } 
                }
              />
            </IonCardContent>
          </IonCard>

          <IonButton 
            color="primary"
            expand="block"
            fill="solid"
            size="large"
            text-align="center"
            class="searchButton"
            onClick={e => {

              console.log("Button Pressed: Performing Advanced Searching");

              /*Variable Initialisation*/
              let coloursInclude  : string[] = [];
              let coloursExclude  : string[] = [];
              let cardTypes       : string[] = [];
              let cardText        : string[] = [];

              //coloursInclude Initialisation
              if (includeWhite)       {coloursInclude.push("w");}
              if (includeBlue)        {coloursInclude.push("u");}
              if (includeBlack)       {coloursInclude.push("b");}
              if (includeRed)         {coloursInclude.push("r");}
              if (includeGreen)       {coloursInclude.push("g");}
              if (excludeColourless)  {coloursInclude.push("c");}

              //coloursExclude Initialisation
              if (excludeWhite)       {coloursExclude.push("w");}
              if (excludeBlue)        {coloursExclude.push("u");}
              if (excludeBlack)       {coloursExclude.push("b");}
              if (excludeRed)         {coloursExclude.push("r");}
              if (excludeGreen)       {coloursExclude.push("g");}
              if (excludeColourless)  {coloursExclude.push("c");}
              
              //cardTypes Initialisation
              if ("".localeCompare(cardTypesValue) !== 0) {
                cardTypesValue.split(" ").map((cardType) => {
                  return cardTypes.push(cardType);
                });
              }

              //cardText Initialisation
              if ("".localeCompare(cardTextValue) !== 0) {
                cardText.push(cardTextValue); //Currently does not support multiple cardText, database is ready to allow however
              }
              
              /*Create the Search Term*/
              let searchTerms : ScryFallSearchTerms = {
                mainSearch:     mainSearchTerm,
                coloursInclude: coloursInclude,
                coloursExclude: coloursExclude,
                cardTypes:      cardTypes,
                cardText:       cardText
              }

              setShowLoading(true)
              App.databases[0].database.performAllSearch(searchTerms).then((didPerform) => {
                if (didPerform) {
                  setShowLoading(false)
                  history.push("/search-results");
                  console.log("Finished: Card Searching");
                } else {
                  setShowLoading(false)
                  setShowAlert(true);
                  console.log("Finished but Failed: Card Searching");
                }
              });
            }}
          >{"Perform Search"}</IonButton>

        </IonList>
        
        <IonLoading
          cssClass='ionLoading'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Searching...'}
          duration={10000}
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='failed'
          header={'ERROR'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      {/* <TestDatabase/> */}

    </IonPage>
  );
};

export default AdvancedSearch;
