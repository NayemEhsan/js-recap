// check any truthy

let myVar = 5;
if(myVar){
    myVar =myVar * 100;
}else {
    myVar = 0;
}

// you check negative or falsy anything

let myMoney = 50;

if(!myMoney){
    myMoney = myMoney * 100;
}else {
    myMoney = 0;
}

const money = 80;
let food ;
if(money > 100){
    food = 'biriany';
}else {
    food = " cha busicuit";
}

//shortcut

let food1 = money > 100 ? ' biriany' : ' busicuit';
// console.log(food1)

let deink = ( money > 100 && myVar > 100) ? 'coke' : 'filter water';


const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log("hide user");

isActive ? showUser() : hideUser();
isActive && showUser();
isActive || showUser();


isActive = !isActive;
