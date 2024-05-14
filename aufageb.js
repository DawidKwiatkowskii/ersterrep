"use strict";
// Funktion zum Prüfen, ob eine Zahl eine Primzahl ist
function isPrime(num) {
    if (num < 2) return false;
    const wurzel = Math.sqrt(num)
    for (let i = 2; i <= wurzel; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 1) Leeres Array mit 100 Plätzen erzeugen
let numbers = []

// 2) Das Array mit 100 Zufallszahlen von 2 bis 1000 füllen
for (let i = 0; i < 100; i++) {
    numbers.push( Math.floor(Math.random() * (999)) + 2);
}

// 3) Primzahlen aus dem Array herausfiltern
let primes = numbers.filter(num => isPrime(num));

// 4) Die Primzahlen aufsteigend sortieren
primes.sort((a, b) => a - b);

// Ergebnis ausgeben
console.log("Primzahlen:", primes);