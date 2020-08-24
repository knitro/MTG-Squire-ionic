import React, { useState } from 'react';
import { IonLoading } from '@ionic/react';
import './ResultDisplay.css';
import { useHistory } from 'react-router';
import uuid from 'uuid';


interface RedirectionComponentProps {
  redirectionLink : string
}

const RedirectionComponent = (props : RedirectionComponentProps) => {

    // /*Variable Initialisation*/
    // // let currentSearchState : SearchState = await getSearchState();
    
    // /*Hook Initialisation*/
    // const [showLoading, setShowLoading] = useState(true);
    // const history = useHistory();

    // /*Display*/ 
    // return (
    //     <IonLoading
    //       cssClass=''
    //       isOpen={showLoading}
    //       onDidDismiss={() => {
            
    //         setShowLoading(false); 
    //         console.log("Redirection Loading Complete");
    //         history.push(props.redirectionLink);
    //       }}
    //       message={'Please wait...'}
    //       duration={1000}
    //     />
    // );
 
}

export default RedirectionComponent;
