export function flipCoin(){
    return (rollCustom(2) > 1) ? 'Heads' : 'Tails';
}
export function rollD6(){
    return rollCustom(6);
}
export function rollD20(){
    return rollCustom(20);
}
export function rollCustom(die : number){
    return Math.ceil(Math.random() * die);
}
