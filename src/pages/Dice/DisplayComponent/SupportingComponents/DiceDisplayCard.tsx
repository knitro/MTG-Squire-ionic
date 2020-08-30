import React from 'react';
import '../Dice.css';
import { IonCard, IonLabel } from '@ionic/react';

interface DiceDisplayCardProps {
  dieValue : string
  dieType : string
};

const DiceDisplayCard = (props : DiceDisplayCardProps) => {

  /*Variable Initialisation*/
  const dieValue : string = props.dieValue;
  const dieType : string = props.dieType;

  /*Display and Return*/
  return (
    <IonCard>
      <IonLabel class="diceOutputText">
        {dieValue}
      </IonLabel>
      <IonLabel class="diceOutputSubText">
        {dieType}
      </IonLabel>
    </IonCard>
  );
}

export default DiceDisplayCard;