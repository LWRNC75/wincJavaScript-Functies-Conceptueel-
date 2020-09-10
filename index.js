// # Opdracht: JavaScript Functies (Conceptueel)
// ## Deel A: Schrijf je eerste functie

// Schrijf een pseudo-functie (een bullet list), zoals in de video, voor het recept voor jouw broodje. Schrijf het in comments uit in je JavaScript file.
// - Make Bread
// - Layer Butter on Bread
// - Layer Cheese on Bread
// - Serve on a plate

// Kopieer je pseudo-functie, zodat je er 2 hebt, en verander de onderste pseudo-functie in een echte JavaScript functie, behoudt de uitgeschreven taken in je functie.
const makeCheeseBread = function() {
    // Verander de uitgeschreven taken in de functie in console.log([hier de omschrijving van jouw taak]).
    console.log('Layer Butter on Bread.');
    console.log('Layer Cheese on Bread.');
    console.log('Server on a Plate.');
};
// Roep de functie aan, onder aan je file. "Call the function".
makeCheeseBread();
// Run je code in Node.
// Zie je de stappen voor je functie in de console verschijnen?
/* 
lawrence@MacBook-Air-van-Lauwe Opdracht 14.1 % node index.js
Layer Butter on Bread
Layer Cheese on Bread
Server on a Plate
*/


// ## Deel B: Schrijf een functie met een argument
// Naast een broodje gezond ga je ook nog andere broodjes serveren in je winkel.
// 1. Kopieer de functie die je had en herschrijf met de naam makeSandwich
// 2. De functie accepteert 1 argument genaamd topping ...
// 6. Declare function
const makeSandwich = function(topping) {
    console.log(`Layer Butter on Sandwich` + `.`);
    // 3. ... en retourneert een broodje met dat beleg .
    console.log(`Layer ` + topping + ` on Sandwich` + `.`);
    // 4. Doe dat op de volgende manier `console.log("There you go, a sandwich with ...... (hier jouw beleg)") op de puntjes moet het beleg komen te staan. (nee, dit is inderdaad niet de correcte syntax).
    console.log(`There you go, a sandwich with ` + topping + `.`);
}; 
// 5. Run de code in Node
// 6: Call Function
makeSandwich('jam');

// # Deel C: gebruik een return statement
// Je krijgt een nieuw kassa systeem! En je hebt een nieuwe kortingsactie in je broodjeszaak!
// 1. Schrijf een functie calculateDiscountedPrice
// 2. De functie accepteert 2 argumenten totalAmount , discount (beide in Euro's)
const calculateDiscountedPrice = function(totalAmount, discount) {
// 3. De functie retourneert* de totaalprijs minus de korting. *gebruikt dus een return statement
// 4. Gebruik Math.round om af te ronden.
    return Math.round(totalAmount - discount);    
};
// 5. Run de code in Node
console.log(calculateDiscountedPrice(10, 5));

// ## Deel D: gebruik meerdere return statements
// De korting is alleen geldig bij een bedrag van meer dan 25 euro!

// 1. Maak een 2de functie die precies hetzelfde doet als calculateDiscountedPrice (hernoem!)
const calculateDiscountedPriceSecond = function(totalAmount, discount) {
// 2. Gebruik een if-statement die checkt of de totalAmount wel groter is dan 25 euro.
    if (totalAmount > 25) {
        console.log(Math.round(totalAmount - discount));
// 3. Wanneer niet, retourneer* de totalAmount zonder korting. *Gebruik dus een return statement.
    } else {
        console.log(totalAmount);
    }
};
calculateDiscountedPriceSecond(29, 5.5);




