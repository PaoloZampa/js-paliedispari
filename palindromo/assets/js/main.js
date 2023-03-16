//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


function palindrome() {

    // verifico lunghezza parola
    const wordLength = userWord.length

    // ciclo metà parola
    for (let i = 0; i < wordLength / 2; i++) {

        //verifico se le due metà sono uguali
        if (userWord[i] !== userWord[wordLength - 1 - i]) {
            return `'la parola ${userWord} non è palindroma'`
        }
    }

    //blocco funzione se non rispetta if
    return `'la parola ${userWord} è palindroma'`

}

//cheido utente parola
const userWord = prompt("Inserisci la tua parola!");

//richiamo funzione 
const palindromeChecker = palindrome(userWord);

//log const richiamando funzione
console.log(palindromeChecker);

