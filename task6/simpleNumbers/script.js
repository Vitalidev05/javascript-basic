"use strict";

function simpleNumbers(i){
    let isNumberSimple = true;
    if(i==2){
        return i;
    }

    for(let n=2;n<=i/2;n++){
         if((i % n)==0){
            isNumberSimple = false;
        }
    }

    if(isNumberSimple){
        return i;
        }
    }

        
let inputNumber = Number(prompt('Введите число',10)); 
let simpleNumber;
let result = '';

for(let i=2; i<=inputNumber; i++){            
    simpleNumber = simpleNumbers(i);
    if(simpleNumber){
        result+= simpleNumber + ' ';
    }               
}

alert(result);

        

    