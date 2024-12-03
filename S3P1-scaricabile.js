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
somma.classList = "risposta mt-2"
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

console.log(boundary(200));


// ------- crea elemento HTML per stampare risposta

let controllo = document.createElement("div")
controllo.classList = "risposta mt-2"
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
parolaInvertita.classList = "risposta mt-2"
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
    for (let i = 0; i < fraseSplit.length; i++) {
        // ----- rende maiuscola la prima lettera di ogni parola (CharAt) e aggiunge la parte restante minuscola (substr.)
        fraseSplit[i] = fraseSplit[i][0].toUpperCase() + fraseSplit[i].substr(1)
    }

    return fraseSplit.join(" ")
}

console.log(upperFirst("oggi è una bella giornata"))


// ------- crea elemento HTML per stampare risposta

let lettereMaiuscole = document.createElement("div")
lettereMaiuscole.classList = "risposta mt-2"
let risposta4 = document.getElementById("esercizio4")
risposta4.appendChild(lettereMaiuscole)

// ----- interazione con HTML

document.getElementById("upperFirst").addEventListener("click", upperFirst2 = () => {
    let frase = document.getElementById("frase").value.toLowerCase()            //----- prende valore da input cliente e lo rende minuscolo
    frase = upperFirst(frase)
    document.getElementById("frase").value = "";
    lettereMaiuscole.innerHTML = "<p> Ecco la frase: <b><i><u>" + frase + "</u></i></b>.</p>"
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
random.classList = "risposta mt-2"
let risposta5 = document.getElementById("esercizio5")
risposta5.appendChild(random)

// ----- interazione con HTML

document.getElementById("giveMeRandom").addEventListener("click", giveMeRandom2 = () => {
    let num5 = parseInt(document.getElementById("num5").value);

    // controlla che il numero sia compreso tra 0 e 10
    if (num5 <= 0 || num5 > 10) {
        random.innerHTML = "<p>Per favore, inserisci un numero valido compreso tra 0 e 10.</p>";
        return;
    }
    num5 = giveMeRandom(num5);
    document.getElementById("num5").value = "";
    random.innerHTML = `<p> ${num5} </p>`
})
















//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// ------- dichiara funzione generale

const area = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return `<span class="text-danger">Error</span>: Inserisci due numeri validi.`
    }
    // calcola area rettandolo
    return a * b
}

console.log(area(5, 7))


// ------- crea elemento HTML per stampare risposta

let calcoloArea = document.createElement("div")
calcoloArea.classList = "risposta mt-2"
let rispostaExtra1 = document.getElementById("esercizio-extra1")
rispostaExtra1.appendChild(calcoloArea)

// ----- interazione con HTML

document.getElementById("area").addEventListener("click", () => {
    let num6 = parseInt(document.getElementById("num6").value);
    let num7 = parseInt(document.getElementById("num7").value)

    let areaRettangolo = area(num6, num7);
    document.getElementById("num6").value = "";
    document.getElementById("num7").value = "";
    calcoloArea.innerHTML = `<p>L'area del rettangolo è pari a ${areaRettangolo}</p>`
})


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// ------- dichiara funzione generale

const crazyDiff = (a) => {
    if (isNaN(a) || a < 0) {
        return `<span class="text-danger">Error</span>: Inserisci un numero valido maggiore di 0.`
    }

    if (a < 19) {
        let result = 19 - a
        return `<p>La differenza assoluta è pari a <span class="fw-bold">${result}</span>`

    } else {
        let resultParz = a - 19
        if (resultParz > 19) {
            result = resultParz * 3
        }
        return `<p>La differenza assoluta di <span class="fw-bold">${resultParz}</span> è maggiore di 19 e moltiplicata per 3 è pari a <span class="fw-bold">${result}</span></p>`
    }
}

console.log(crazyDiff(50))


// ------- crea elemento HTML per stampare risposta

let calcolaDiff = document.createElement("div")
calcolaDiff.classList = "risposta mt-2"
let rispostaExtra2 = document.getElementById("esercizio-extra2")
rispostaExtra2.appendChild(calcolaDiff)

// ----- interazione con HTML

document.getElementById("crazyDiff").addEventListener("click", () => {
    let num8 = parseInt(document.getElementById("num8").value);

    let diffAssol = crazyDiff(num8);
    document.getElementById("num8").value = "";
    calcolaDiff.innerHTML = `${diffAssol}`
})



/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// ------- dichiara funzione generale

const codify = (a) => {
    if (a.startsWith("code")) {
        return `<p>La frase è: <span class="fw-bold">${a}</span>`

    } else {
        return `<p>La frase è: <span class="fw-bold">${"code" + a}</p>`
    }
}

console.log(codify("codesto"))


// ------- crea elemento HTML per stampare risposta

let stringCode = document.createElement("div")
stringCode.classList = "risposta mt-2"
let rispostaExtra3 = document.getElementById("esercizio-extra3")
rispostaExtra3.appendChild(stringCode)

// ----- interazione con HTML

document.getElementById("codify").addEventListener("click", () => {
    let parola2 = document.getElementById("parola2").value;

    let codifica = codify(parola2);
    document.getElementById("parola2").value = "";
    stringCode.innerHTML = `${codifica}` 
})




/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// ------- dichiara funzione generale

const check3and7 = (a) => {
    if (isNaN(a) || a < 0) {
        return `<span class="text-danger">Error</span>: Inserisci un numero valido maggiore di 0.`
    }
    
    if (a % 3 === 0 && a % 7 === 0) {
        return `<p><span class="text-success fw-bold">True</span>: <span class="fw-bold">${a}</span> è un multiplo di 3 e di 7</p>`
    } else if (a % 3 === 0) {
        return `<p><span class="text-success fw-bold">True</span>: <span class="fw-bold">${a}</span> è un multiplo di 3</p>`
    } else if (a % 7 === 0) {
        return `<p><span class="text-success fw-bold">True</span>: <span class="fw-bold">${a}</span> è un multiplo di 7</p>`
    } else {
        return `<p><span class="text-danger fw-bold">False</span>: <span class="fw-bold">${a}</span> NON è multiplo di 3 o di 7</p>`
    }
}

console.log(check3and7(21))


// ------- crea elemento HTML per stampare risposta

let check = document.createElement("div")
check.classList = "risposta mt-2"
let rispostaExtra4 = document.getElementById("esercizio-extra4")
rispostaExtra4.appendChild(check)

// ----- interazione con HTML

document.getElementById("check3and7").addEventListener("click", () => {
    let num9 = parseInt(document.getElementById("num9").value);

    let checkMult = check3and7(num9);
    document.getElementById("num9").value = "";
    check.innerHTML = `${checkMult}`
})




/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = (a) => {
    a.slice(1, a.length - 1)
    return `<p>La parola senza il primo e l'ultimo carattere è uguale a: <span class="fw-bold">${(a.slice(1, a.length - 1))}</span></p>`;
    
}

console.log(cutString("ciao"))


// ------- crea elemento HTML per stampare risposta

let taglia = document.createElement("div")
taglia.classList = "risposta mt-2"
let rispostaExtra5 = document.getElementById("esercizio-extra5")
rispostaExtra5.appendChild(taglia)

// ----- interazione con HTML

document.getElementById("cutString").addEventListener("click", () => {
    let parola3 = document.getElementById("parola3").value;

    let tagliaPal = cutString(parola3);
    document.getElementById("parola3").value = "";
    taglia.innerHTML = `${tagliaPal}`
})

