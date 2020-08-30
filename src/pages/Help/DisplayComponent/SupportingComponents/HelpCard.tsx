import React from 'react';
import { IonCard, IonButton, IonText, IonTitle, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

/**
 * Interface of inputs for HelpCard
 */
interface HelpCardProps{
  title : string;      //title of card
  text : string;       //text displayed on card
  buttonText : string; //text displayed on button
  buttonHref : string; //link to page button will go to (blank ("") if no button)
}

/**
 * Helper component for Help
 * @param props - values for displaying information on card
 */
const HelpCard = (props : HelpCardProps) => {

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonText>
          {props.text}
        </IonText>
        <div>
          {
          (''.localeCompare(props.buttonHref) === 0)
          ? <></>
          : <IonButton href={props.buttonHref}>
              {props.buttonText}
            </IonButton>        
          }
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default HelpCard;
