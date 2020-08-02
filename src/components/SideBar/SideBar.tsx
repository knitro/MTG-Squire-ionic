import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenu, IonContent, IonList, IonItem, IonMenuToggle, IonIcon, IonText } from "@ionic/react";
import { searchOutline, search, cube, add, swapHorizontal, server, cash, chevronBackCircle, cogOutline, copy } from 'ionicons/icons';

/*Interfaces*/
//The Interface used for containing the important data when constructing a SideBar Item.
interface SideBarItem {
  label : string,
  path : string,
  iconName : string
}

class SideBar extends Component {

  /*Fields*/
  //Items on the Sidebar
  sideBarItems : SideBarItem[]= [
    {label: "Quick Search", path: "/quick-search", iconName: searchOutline},
    {label: "Advanced Search", path: "/advanced-search", iconName: search},
    {label: "Dice", path: "/dice", iconName: cube},
    {label: "Life Counter", path: "/life-counter/new-game", iconName: add},
    {label: "Trade Cards", path: "/trade-cards", iconName: swapHorizontal},
    {label: "Rules", path: "/rules/overview", iconName: server},
    {label: "Set EVs", path: "/set-ev/overview", iconName: cash},
    {label: "Search History", path: "/search-history", iconName: chevronBackCircle},
    {label: "Settings", path: "/settings", iconName: cogOutline}
  ];

  /*Constructor*/
  constructor(props : any) {
    super(props)
  }

  /*Methods*/
  //Renders the Menu Item (Used in the Render)
  renderMenuItem (currentItem: SideBarItem) {
    return (
      <IonMenuToggle auto-hide="false">
        <IonItem href={currentItem.path}>
          <IonIcon icon={currentItem.iconName} slot="start"/>
          <IonText>{currentItem.label}</IonText>
        </IonItem>
      </IonMenuToggle>
    );
  }

  /*Render*/
  render() {
    return (
      <IonMenu side="start" type="overlay" contentId="main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonIcon icon={copy} slot="start" size="large"/>
            <IonTitle>MTG Squire</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            {/* Creates the SideBar Items through calling the renderMenuItem for each item in the sideBarItems array*/}
            {this.sideBarItems.map((currentItem: SideBarItem) => this.renderMenuItem(currentItem))}
          </IonList>
        </IonContent>

      </IonMenu>
    );
  }
}






// const SideBar: React.FC = () => {

//   return (

//     <IonMenu side="start" type="overlay" contentId="main">
//       <IonHeader>
//         <IonToolbar color="primary">
//           <IonTitle>MTG Squire</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList>
//         </IonList>
//       </IonContent>
//     </IonMenu>

//   );
// }
export default SideBar;