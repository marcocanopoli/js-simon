/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
*/

var nums = [];
var numsString= "";
var userTries = [];

//string and array with 5 random numbers
for (var i = 0; i < 5; i++) {
    var num = getRandomNumber(0, 100);
    numsString += num + " ";
    nums.push(num);
}
alert("I numeri da memorizzare sono:\n" + numsString);
console.log(nums);

//timeout 30s, then ask user for 5 nums input and compares them with random generated number array
setTimeout(function () {
    var userTries = fillArray(5);
    var inCommon = checkUserTries(nums, userTries);    
    alert("Hai indovinato " + inCommon.length + " numeri:\n" + inCommon);
}, 2000);

//------ FUNCTIONS ------//
//gets random int with min and max included
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//returns int between 1 and 100
function getUserNumber() {
    var num;
    while (isNaN(num) || num < 1 || num > 100) {
        num = parseInt(prompt("Inserisci un numero da 1 a 100"));
    }
    return(num);
}

//returns array with user number prompts, number of prompts in argument
function fillArray(tries) {
    var array = [];
    while (array.length < tries) {
        var num = getUserNumber();
        array.push(num);
    }
    return array;
}

//given 2 arrays returns array with elements in common
function checkUserTries(firstArray, secondArray) {
    var common = [];
    var num;
    for (var i = 0; i < secondArray.length; i++){
        num = secondArray[i];
        if (firstArray.includes(num)) {
            common.push(num);
        }
    }
    return common;
}
//------ /FUNCTIONS ------//