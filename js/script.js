/*

TRACCIA: L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

*/


// 1. do un valore alla variabile => level = 1

// 2. chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
    // 2.1 confronto la scelta dell'utente con la variabile => if( levelChoice = 1)
    // 2.2 se l'utente sceglie livello 1 , genero una griglia di numeri con range 1-100/ griglia 10 x 10 => for
    // 2.3 se l'utente sceglie livello 2 , genero una griglia di numeri con range 1-81/ griglia 9 x 9 => for
    // 2.4 se l'utente sceglie livello 3 , genero una griglia di numeri con range 1-49/ griglia 7 x 7 => for

// 3. creo funzione di callback per cambiare il colore della cella cliccata 


const gridContainer = document.getElementById("grid");

let level = 1;


// chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
let levelChoice = prompt ("Da quale livello vuoi partire: 1, 2 o 3 ?");
console.log(levelChoice);


if(levelChoice = level) {
    // griglia 10 x 10
    for (let i = 1; i <= 100; i++) {

        let node = document.createElement("div");
        node.classList.add("square", "square-l1");
        gridContainer.append(node);

    }
}else if(levelChoice = 2) {
    // griglia 9 x 9 
    for (let i = 1; i <= 81; i++) {

        let node = document.createElement("div");
        node.classList.add("square", "square-l2");
        gridContainer.append(node);
    }

} else if(levelChoice = 3) {
    // griglia 7 x 7 
    for (let i = 1; i <= 49; i++) {

        let node = document.createElement("div");
        node.classList.add("square", "square-l3");
        gridContainer.append(node);

    } 
}








