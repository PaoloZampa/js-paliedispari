//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//chiedo utente un numero da 1 a 5
const userNumber = Number(prompt('Inserisci un numero da 1 a 5!'));

//verifico che numero sia compreso tra uno e 5
if (userNumber > 5) {
    alert('Hai inserito un numero non compreso tra 1 e 5! Capra!')
} else if (userNumber < 1) {
    alert('Hai inserito un numero non compreso tra 1 e 5! Capra!')
}
console.log(userNumber)

//creo funzione per generare numeri
function numbGenerator(numb1) {
    return Math.floor(Math.random() * numb1)
}

//richiamo funzione
const myNumber = numbGenerator(6)
console.log(myNumber)

//creo funzione numeri
function result(numb1, numb2){
    const finalResult = numb1 + numb2
    if (finalResult % 2 === 0) {
        return (`${finalResult}': Ha vinto il numero pari'`)
    }
    return (`${finalResult}: Ha vinto il numero dispari'`)
}

//richiamo funzione
const winner = result(userNumber, myNumber)
console.log(winner);