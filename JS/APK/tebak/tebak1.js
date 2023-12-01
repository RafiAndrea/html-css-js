let changeToPlay = 3;
let counter;
let autoReload;

const resultNumber = function (){
    const number = [0,1,2,3,4,5,6,7,8,9];
    number.sort(() => Math.random() - 0.5);
    return number[Math.floor(Math.random() * number.length -1)];
};