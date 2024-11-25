/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// ------- dichiara funzione generale

const crazySum = (a, b) => {
    if (a !== b) {
        return a + b
    } else {
        return (a + b) * 3
    }
}


// ------- crea elemento HTML per stampare risposta

let somma = document.createElement("div")
somma.classList = "risposta"
let risposta1 = document.getElementById("esercizio1")
risposta1.appendChild(somma)

// ----- interazione con HTML

const crazySum2 = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let risultato = crazySum(num1, num2)

    if (risultato === (num1 + num2)) {
        somma.innerHTML = "<p> I due numeri hanno valori diversi e la loro <b><i><u>somma</u></i></b> è uguale a <b><i><u>" + risultato + "</u></i></b>.</p>"
    }
    else {
        somma.innerHTML = "<p> I due numeri hanno valori uguali e la loro <b><i><u>somma</u></i></b> moltiplicata per <b><i><u>3</u></i></b> è uguale a <b><i><u>" + risultato + "</u></i></b>.</p>"
    }

    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
}


document.getElementById("crazySum").addEventListener("click", crazySum2)



















/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// ------- dichiara funzione generale

const boundary = (a) => {
    if ((a >= 20 && a <= 100) || a === 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary (200));


// ------- crea elemento HTML per stampare risposta

let controllo = document.createElement("div")
controllo.classList = "risposta"
let risposta2 = document.getElementById("esercizio2")
risposta2.appendChild(controllo)

// ----- interazione con HTML

document.getElementById("boundary").addEventListener("click", boundary2 = () => {
    let num3 = parseInt(document.getElementById("num3").value);
    let risultato = boundary(num3)
    if (risultato === true) {
        controllo.innerHTML = "<p> Il controllo è <b><i><u>vero</u></i></b> perchè il tuo numero (" + num3 + ") è compreso tra 20 e 100 o uguale a 400.</p>"
    } else {
        controllo.innerHTML = "<p> Il controllo è <b><i><u>falso</u></i></b> perchè il tuo numero (" + num3 + ") <b><i><u>NON</u></i></b> è compreso tra 20 e 100 o uguale a 400.</p>"
    }
    document.getElementById("num3").value = "";
})



















/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// ------- dichiara funzione generale

const reverseString = (frase) => {
/*  let fraseSplit = frase.split("");
 console.log(fraseSplit);
 let fraseReverse = fraseSplit.reverse();
 console.log(fraseReverse);
 let fraseJoin = fraseReverse.join("")
 console.log(fraseJoin);
 return fraseJoin */
 
return frase.split("").reverse().join("");
}

console.log(reverseString("EPICODE"))


// ------- crea elemento HTML per stampare risposta

let parolaInvertita = document.createElement("div")
parolaInvertita.classList = "risposta"
let risposta3 = document.getElementById("esercizio3")
risposta3.appendChild(parolaInvertita)

// ----- interazione con HTML

const reverseString2 = () => {
    let parola = document.getElementById("parola").value;
    parola = reverseString(parola)
    document.getElementById("parola").value = "";
    parolaInvertita.innerHTML = "<p> La parola invertita è uguale a: <b><i><u>" + parola + "</u></i></b>.</p>"
}

document.getElementById("reverseString").addEventListener("click", reverseString2)



















/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// ------- dichiara funzione generale

const upperFirst = (frase) => {
    // ----- separa le parole tramite spazi e le mette in array
    let fraseSplit = frase.split(" ")
    // ----- cicla tutti gli elementi dell'array
    for (let i = 0; i < fraseSplit.length; i++ ) {
        // ----- rende maiuscola la prima lettera di ogni parola (CharAt) e aggiunge la parte restante minuscola (substr.)
        fraseSplit[i] = fraseSplit[i][0].toUpperCase() + fraseSplit[i].substr(1)
    }

    return fraseSplit.join(" ")    
}

console.log(upperFirst("oggi è una bella giornata"))


// ------- crea elemento HTML per stampare risposta

let lettereMaiuscole = document.createElement("div")
lettereMaiuscole.classList = "risposta"
let risposta4 = document.getElementById("esercizio4")
risposta4.appendChild(lettereMaiuscole)

// ----- interazione con HTML

document.getElementById("upperFirst").addEventListener("click", upperFirst2 = () => {
    let frase = document.getElementById("frase").value.toLowerCase()            //----- prende valore da input cliente e lo rende minuscolo
    frase = upperFirst(frase)
    document.getElementById("frase").value = "";
    lettereMaiuscole.innerHTML = "<p> Ecco la frase: <b><i><u>" + frase+ "</u></i></b>.</p>"
})



















/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// ------- dichiara funzione generale

const giveMeRandom = (n) => {
    // array vuoto
    let randomNum = []
    // cicla fino al numero inserito e crea numeri random
    for (i = 0; i < n; i++) {
        randomNum.push(Math.floor(Math.random() * 11))
    }
    return randomNum
}

console.log(giveMeRandom(5))


// ------- crea elemento HTML per stampare risposta

let random = document.createElement("div")
random.classList = "risposta"
let risposta5 = document.getElementById("esercizio5")
risposta5.appendChild(random)

// ----- interazione con HTML

document.getElementById("giveMeRandom").addEventListener("click", giveMeRandom2 = () => {
    let num5 = parseInt(document.getElementById("num5").value);
    num5 = giveMeRandom(num5);
    document.getElementById("num5").value = "";
    random.innerHTML = `<p> ${num5} </p>`
})
















//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
