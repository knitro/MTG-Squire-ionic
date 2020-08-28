import React from 'react';
import { IonCard, IonButton, IonText, IonTitle } from '@ionic/react';

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
      <IonTitle>{props.title}</IonTitle>
      <IonText>
        {props.text}
      </IonText>
        {(''.localeCompare(props.buttonHref) === 0)
        ? 
          <></>
        :
          <IonButton href={props.buttonHref}>
            {props.buttonText}
          </IonButton>        
        }
    </IonCard>
  );
};

export default HelpCard;
