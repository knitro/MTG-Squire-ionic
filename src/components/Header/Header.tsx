import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonMenuButton } from "@ionic/react";
import './Header.css';
import { ellipsisVertical } from 'ionicons/icons';

const Header: React.FC<{headerLabel : string}> = (props) => {
  
  return (
    <IonHeader>

      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}/>
        </IonButtons>
        
        {/* PlaceHolder "Further Option Button"*/}
        <IonButtons slot="primary">
          <IonIcon icon={ellipsisVertical} size="large"/>
        </IonButtons>

        <IonTitle size="large">{props.headerLabel}</IonTitle>

      </IonToolbar>
    </IonHeader>
  );
};

export default Header;