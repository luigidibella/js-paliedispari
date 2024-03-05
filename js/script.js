const parola = prompt('Inserisci una parola');
const parolaGirata = giraParola(parola);
console.log(parolaGirata);

if(isPalindrome(parola, parolaGirata)){
  console.log("La parola inserita è palindroma.");
  alert("La parola inserita è palindroma.");
}else{
  console.log("La parola inserita non è palindroma.");
  alert("La parola inserita non è palindroma.");
}

function giraParola(parolaDaGirare){
  let parolaAlContrario = '';

  for(let i = parolaDaGirare.length - 1; i >= 0; i--){
    parolaAlContrario += parolaDaGirare[i];
  }
  return parolaAlContrario;
}

function isPalindrome(parolaOriginale, parolaRigirata){
  return parolaOriginale.toLowerCase().replace(/[\W_]/g, '') === parolaRigirata.toLowerCase().replace(/[\W_]/g, '');
}