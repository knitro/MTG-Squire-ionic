import React from 'react';
import { IonCard, IonButton, IonText, IonTitle } from '@ionic/react';

interface HelpCardProps{
  title : string;
  text : string;
  buttonText : string;
  buttonHref : string;
}


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
