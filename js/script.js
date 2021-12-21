// (1.1) funzione random per generare 5  numeri random  e li metto dentro un array
function randomNumber(min , max){
    let random = Math.floor(Math.random() * ((max + 1) - min) )+ min;
    return random;
}
//(1.3) timer 30 secondi dove nascondo i numeri
setTimeout(function(){
    outputHtml.innerHTML='';
},30000)

//prompt con timer di 30 secondi(funzione)
setTimeout(function(){
    let count = 0;
    for(let i=0 ; i < 5 ;i++){
       let userNumber = parseInt(prompt('inserisci numeri che hai visto'))
       console.log(userNumber)
       userList.push(userNumber);
       if(numbers.includes(userNumber)){
        count++;
        correctNum.push(userNumber);
    }
    }
    if(count!==0){
        alert('hai indovinato la bellezza di....'+count+' numeri !')
        alert('ecco i numeri che hai indovinato...'+correctNum)
    }else{
        alert('non hai indovinato nessun numero , ritenta')
    }
},31000)//imposto un secondo più tardi per non creare conflitto con altro timer

//(0) dichiaro le variabili
const outputHtml = document.getElementById('output');
let numbers=[];
 //list per  numeri inserita dall'utente
 let userList = [];
 //lista per numeri corretti
 let correctNum = []
 //contatore che conta numeri corretti
//(1.2)
while(numbers.length < 5 ){
    let number = randomNumber(1 , 100);
    if (!numbers.includes(number)){
        numbers.push(number);
    }
}
//stampo numbers a schermo
outputHtml.innerHTML = `Simon say : ${numbers}`;

//debug
console.log(correctNum)
console.log(numbers)
