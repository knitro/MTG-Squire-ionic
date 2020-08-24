import { Players } from "../../../states/LifeCounterPlayerState";

export interface ButtonProps {
  rotation : number;
  division : number;
  player : number;
}
export interface SubButtonProps {
  rotation : number;
  division : number;
  player : number;
  option : string;
}


export const slideOptsHorizontal = {
  initialSlide: 0,
  direction: 'horizontal',
  speed: 400,
};

export const slideOptsVertical = {
  initialSlide: 0,
  direction: 'vertical',
  speed: 400,
};

export function getColour(p : number){
  if(p == 0)
    return "player-one"
  else if(p==1)
    return "player-two"
  else if(p==2)
    return "player-three"
  else 
    return "player-four"
}

export function getTextClass(r : number){
  if(r == 0)
    return "text0"
  else if(r==90)
    return "text90"
  else if(r==180)
    return "text180"
  else 
    return "text270"
}

export function getImageClass(r : number){
  if(r == 0)
    return "slideImage-0"
  else if(r==90)
    return "slideImage-90"
  else if(r==180)
    return "slideImage-180"
  else 
    return "slideImage-270"
}

export function getFile(option : string){
  if(option == 'valueW'){
    return 'assets/img/W.png';
  } else if (option == 'valueU') {
    return 'assets/img/U.png';
  } else if (option == 'valueB') {
    return 'assets/img/B.png';
  } else if (option == 'valueR') {
    return 'assets/img/R.png';
  } else {
    return 'assets/img/G.png';
  }
}

export function getChange(rotation : number, division : number, pressValue : number){
  if(rotation == 0 || rotation == 180){
    //division over y axis
    if( pressValue >= ((window.innerHeight - 65) * division) ){
      return (rotation==0 ? -1 : 1);
    } else {
      return (rotation==0 ? 1 : -1);
    }
  } else { //90 or 270
    //division over x axis    
    if( pressValue >= (window.innerWidth * division) ){
      return (rotation==90 ? 1 : -1);
    } else {
      return (rotation==90 ? -1 : 1);
    }
  }
}

export function getSubValue(players : Players, p : number, option : string){
  if(players.players[p] == null){
    return 0
  } else if (option == 'valueW'){
    return players.players[p].valueW;
  } else if (option == 'valueU'){
    return players.players[p].valueU;
  } else if (option == 'valueB'){
    return players.players[p].valueB;
  } else if (option == 'valueR'){
    return players.players[p].valueR;
  } else if (option == 'valueG'){
    return players.players[p].valueG;
  } else {
    return players.players[p].lifeTotal;
  }
}