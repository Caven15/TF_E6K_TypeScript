"use strict";
//#region boucle for
console.log("--- Boucle for ---");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Exmeple for : Afficher les nombres pair de 1 à 10
console.log("--- Afficher les nombres pair de 1 à 10 ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Affichage des nombres pairs
    }
}
// For of Me permet de parcour les éléments d'une collections (tableau, tuple, ect...)
let fruits = ["Pomme", "Poire", "Banane"];
for (let fruit of fruits) {
    console.log(fruit); // Affiche chaque fruit de la collection
}
let message = "TypeScript";
for (let caractere of message) {
    console.log(caractere);
}
console.log("--- Recherche d'éléments dans un talbeau");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number === 5) {
        console.log(`Nombre trouvé ${number} 😁`);
        break;
    }
    console.log(`Recherche ${number} 🔎 `);
}
// For in permet de parcourir toutes les propriétés d'un objet
let etudiant = { nom: "Jhon", age: 35, grade: "medior" };
for (let props in etudiant) {
    console.log(`${props} : ${etudiant[props]}`);
}
//#endregion
//#region boucle while / do while
console.log("--- Compter une dondition aléatoire ---");
let compteur = 1;
while (Math.random() > 0.2) {
    console.log(compteur);
    compteur++;
}
let nombre = 1;
do {
    console.log(nombre);
    nombre++;
} while (nombre < 10);
//#endregion
