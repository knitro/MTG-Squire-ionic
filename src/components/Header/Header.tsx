import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from "@ionic/react";
import './Header.css';

const Header: React.FC<{headerLabel : string}> = (props) => {
  
  return (
    <IonHeader>

      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}/>
        </IonButtons>
        
        <IonTitle size="large">{props.headerLabel}</IonTitle>

      </IonToolbar>
    </IonHeader>
  );
};

export default Header;