/*

TRACCIA: L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

*/

// 1. creo le 3 griglie 
    // 1.1 creo una funzione generale che crei un elemento e aggiunga una classe 
    // 1.2 creo griglia 10 x 10 => for
    // 1.3 creo griglia 9 x 9 => for
    // 1.4 creo griglia 7 x 7 => for

// 2. do un valore alla variabile => level = 1

// 3. chiedo all'utente di scegliere il livello di difficoltà : 1, 2 o 3 => let levelChoice = prompt ()
    // 3.1 confronto la scelta dell'utente con la variabile => if( levelChoice = 1)
    // 3.2 se l'utente sceglie livello 1 , genero una griglia di numeri con range 1-100 
    // 3.3 se l'utente sceglie livello 2 , genero una griglia di numeri con range 1-81 
    // 3.4 se l'utente sceglie livello 3 , genero una griglia di numeri con range 1-49   

// 4. creo funzione di callback per cambiare il colore della cella cliccata 