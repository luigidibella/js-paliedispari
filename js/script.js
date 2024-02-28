function isPalindrome(word) {
  // Rimuove spazi e punteggiatura e trasforma tutto in minuscolo per evitare problemi di case sensitivity
  const cleanWord = word.toLowerCase().replace(/[\W_]/g, '');
  // Confronta la parola con la sua inversa
  return cleanWord === cleanWord.split('').reverse().join('');
}

// Funzione per chiedere all'utente di inserire una parola
function checkPalindrome() {
  const userInput = prompt("Inserisci una parola:");
  console.log(userInput);
  if (userInput) {
      if (isPalindrome(userInput)) {
          console.log("La parola inserita è un palindromo.");
          alert("La parola inserita è un palindromo.");
      } else {
          console.log("La parola inserita non è un palindromo.");
          alert("La parola inserita non è un palindromo.");
      }
  } else {
      console.log("Input non valido.");
      alert("Input non valido.");
  }
}

// Richiama la funzione per chiedere all'utente di inserire una parola e verifica se è un palindromo
checkPalindrome();