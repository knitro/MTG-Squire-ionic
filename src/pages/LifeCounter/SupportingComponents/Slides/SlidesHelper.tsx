import { Players } from "../../../../states/LifeCounterPlayerState";

export interface ButtonProps {
  rotation : number;
  division : number;
  player : number;
  startingLife : number;
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
  if(p === 0)
    return "player-one"
  else if(p === 1)
    return "player-two"
  else if(p === 2)
    return "player-three"
  else 
    return "player-four"
}

export function getSubColour(c : string){
  if('valueW'.localeCompare(c) === 0)
    return "colour-w"
  else if('valueU'.localeCompare(c) === 0)
    return "colour-u"
  else if('valueB'.localeCompare(c) === 0)
    return "colour-b"
  else if('valueR'.localeCompare(c) === 0)
    return "colour-r"
  else if('valueG'.localeCompare(c) === 0)
    return "colour-g"
  else
    return "colour-c"
}

export function getTextClass(r : number,isSub : boolean){
  if(r === 0)
    return isSub ? "subtext0" : "text0"
  else if(r === 90)
    return isSub ? "subtext90" :"text90"
  else if(r === 180)
    return isSub ? "subtext180" :"text180"
  else 
    return isSub ? "subtext270" : "text270"
}

export function getImageClass(r : number){
  if(r === 0)
    return "slideImage-0"
  else if(r === 90)
    return "slideImage-90"
  else if(r === 180)
    return "slideImage-180"
  else 
    return "slideImage-270"
}


export function getChange(rotation : number, division : number, pressValue : number){
  if(rotation === 0 || rotation === 180){
    //division over y axis
    if( pressValue >= ((window.innerHeight - 65) * division) ){
      return (rotation === 0 ? -1 : 1);
    } else {
      return (rotation === 0 ? 1 : -1);
    }
  } else { //90 or 270
    //division over x axis    
    if( pressValue >= (window.innerWidth * division) ){
      return (rotation === 90 ? 1 : -1);
    } else {
      return (rotation === 90 ? -1 : 1);
    }
  }
}

export function getSubValue(players : Players, p : number, option : string){
  if (players.players[p] == null){
    return 0;
  } else if ('valueW'.localeCompare(option) === 0){
    return players.players[p].valueW;
  } else if ('valueU'.localeCompare(option) === 0){
    return players.players[p].valueU;
  } else if ('valueB'.localeCompare(option) === 0){
    return players.players[p].valueB;
  } else if ('valueR'.localeCompare(option) === 0){
    return players.players[p].valueR;
  } else if ('valueG'.localeCompare(option) === 0){
    return players.players[p].valueG;
  } else if ('valueC'.localeCompare(option) === 0){
    return players.players[p].valueC;
  } else {
    return players.players[p].lifeTotal;
  }
}

export function getSubName(num : number, isReverse : boolean){
  if(isReverse){
    num = (5 - num);
  }

  if(num === 0)
    return 'valueW'
  else if(num === 1)
    return 'valueU'
  else if(num === 2)
    return 'valueB'
  else if(num === 3)
    return 'valueR'
  else if(num === 4)
    return 'valueG'
  else 
    return 'valueC'
}