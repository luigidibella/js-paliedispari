const giocata = prompt('Scegli pari o dispari');
const numeroGiocatore = parseInt(prompt('Scegli un numero'));
const numPc = getRandomNumber();
const somma = numPc + numeroGiocatore;

let risultato;

if(giocata === 'pari' && isEven(somma) || giocata === 'dispari' && !isEven(somma)){
  console.log(getRisultato() + ' Vince il giocatore');
  risultato = getRisultato() + ' Vince il giocatore'
}else{
  console.log(getRisultato() + ' Vince il PC');
  risultato = getRisultato() + ' Vince il PC'
}

alert(risultato);

function getRandomNumber(){
  return Math.ceil(Math.random() * 5);
}

function isEven(number){
  if(number % 2 === 0){
    return true;
  }
  return false;
}

function getRisultato(){
  return `Num. giocatore: ${numeroGiocatore}, Giocata: ${giocata}, Num. PC: ${numPc}`
}