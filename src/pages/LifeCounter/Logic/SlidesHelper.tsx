////////////////////////
/*Imports*/
////////////////////////

import { Players } from "../../../states/LifeCounterPlayerState";

////////////////////////
/*Interfaces*/
////////////////////////

/**
 * Interface used as input for life counts (buttons) on pages
 */
export interface ButtonProps {
  rotation : number; //which rotation the button is facing
  division : number; //number which is being divided by
  player : number;   //which player life total is for
}

/**
 * Interface used as input for sub counts (sub section buttons) on pages
 */
export interface SubButtonProps {
  rotation : number; //which rotation the button is facing
  division : number; //number which is being divided by
  player : number;   //which player life total is for
  option : string;   //which option is being updated
}

////////////////////////
/*Slide options*/
////////////////////////

/**
 * Slide options for buttons with rotation of 0 degrees
 */
export const slideOpts0 = {
  initialSlide: 0,
  direction: 'horizontal',
  speed: 400,
};

/**
 * Slide options for buttons with rotation of 90 degrees
 */
export const slideOpts90 = {
  initialSlide: 0,
  direction: 'vertical',
  speed: 400,

};

/**
 * Slide options for buttons with rotation of 180 degrees
 */
export const slideOpts180 = {
  initialSlide: 1,
  direction: 'horizontal',
  speed: 400,
};

/**
 * Slide options for buttons with rotation of 270 degrees
 */
export const slideOpts270 = {
  initialSlide: 1,
  direction: 'vertical',
  speed: 400,

};

////////////////////////
/*Functions*/
////////////////////////

/**
 * Function which colour css class name from number 
 * @param p - player number to get css class name
 */
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

/**
 * Function which colour css class name from sub button name 
 * @param c - sub life total value to get css class name
 */
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

/**
 * Function to get css class name from rotation value for text. 
 * Also takes into account small or large text size
 * @param r - rotation of text
 * @param isSub - if text should be smaller than normal
 */
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

/**
 * Gets value of positive or negative 1 from where a button was pressed.
 * @param rotation - rotation of button
 * @param division - multiplier of window size for middle point of button
 * @param pressValue - pressed value to compare against
 */
export function getChange(rotation : number, division : number, pressValue : number) : number {
  if(rotation === 0 || rotation === 180){
    //division over y axis
    if( pressValue >= ((window.innerHeight) * division) ){
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

/**
 * Gets value from mapping of a player. Needs player number and option of value.
 * @param players - database to get value from
 * @param p - player number of value
 * @param option - option of player which value is wanted
 */
export function getSubValue(players : Players, p : number, option : string) : number {
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

/**
 * Gets sub button name based on input number. 
 * @param num - input number (between 0-5 inclusive)
 * @param isReverse - if rotation requries values given in reverse
 */
export function getSubName(num : number, isReverse : boolean) : string {
  //reverses value given
  if(isReverse){
    num = (5 - num);
  }

  //checks number to get value
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