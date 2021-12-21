// (1.1) funzione random per generare 5  numeri (random)  che dopo metterà  dentro un array
function randomNumber(min , max){
    let random = Math.floor(Math.random() * ((max + 1) - min) )+ min;
    return random;
}
//(1.3) timer 30 secondi dove nascondo i numeri
setTimeout(function(){
    outputHtml.innerHTML='';
},30000)

//(3)prompt con timer di 30 secondi(funzione)
setTimeout(function(){
    //contatore a zero (mi servirà per contare numeri esatti)
    let count = 0;
    //ripeto  prompt per 5 volte
    for(let i=0 ; i < 5 ;i++){
       let userNumber = parseInt(prompt('inserisci numeri che hai visto'))
       console.log(userNumber)//debug
       //pusho numeri della var userNumber in userList
       userList.push(userNumber);
       //controllo se i numeri inseriti dall'utente sono presenti nell'array di numeri casuali
       if(numbers.includes(userNumber)){//conta e pusha il numero
        count++;
        correctNum.push(userNumber);
    }
    }//se il contatore è diverso da zero, alert con conteggio numeri esatti e numeri esatti
    if(count!==0){
        alert('hai indovinato la bellezza di....'+count+' numeri !')
        alert('ecco i numeri che hai indovinato...'+correctNum)
    }else{//altrimenti l'utente dovrà ritentare 
        alert('non hai indovinato nessun numero , ritenta')
    }
},31000)//imposto un secondo più tardi per non creare conflitto con altro timer

//(0) dichiaro le variabili
const outputHtml = document.getElementById('output');
//list numeri random
let numbers=[];
//list per  numeri inserita dall'utente
let userList = [];
//lista per numeri corretti
let correctNum = []
//(1.2)
while(numbers.length < 5 ){
    let number = randomNumber(1 , 100);
    if (!numbers.includes(number)){
        numbers.push(number);
    }
}
//(2)stampo numbers a schermo
outputHtml.innerHTML = `Simon say : ${numbers}`;
//debug
console.log(correctNum)
console.log(numbers)
