"use strict";
// Exercice 1 :
// Déclarez une variable isDone et initialisez-la avec une valeur booléenne de votre choix. Affichez
// cette valeur dans la console.
console.log("--- Exo 1 ---");
let isDone = true;
console.log(isDone);
// Exercice 2 :
// Déclarez une variable greeting et initialisez-la avec une chaîne de caractères de votre choix.
// Affichez cette chaîne dans la console.
console.log("--- Exo 2 ---");
let greeting = "Hello world !!!";
console.log(greeting);
// Exercice 3 :
// Déclarez une variable numbers et initialisez-la avec un tableau contenant les nombres de 1 à 5.
// Utilisez une boucle pour afficher chaque élément du tableau.
console.log("--- Exo 3 ---");
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
// Exercice 4 :
// Déclarez une variable person et initialisez-la avec un objet contenant les propriétés firstName
// et lastName de type chaîne de caractères. Affichez les valeurs de ces propriétés dans la console.
console.log("--- Exo 4 ---");
let person = {
    firstName: "Jhon",
    lastName: "Doe"
};
console.log(person.firstName);
console.log(person.lastName);
// Exercice 5 :
// Déclarez une fonction multiply qui prend deux paramètres de type number et retourne leur
// produit. Appelez cette fonction avec deux nombres et affichez le résultat.
console.log("--- Exo 5 ---");
function multiply(a, b) {
    return a * b;
}
let result = multiply(10, 3);
console.log(`Résultat : ${result}`);
// Exercice 6 :
// Déclarez une variable statut avec un type union pouvant être soit une chaîne de caractères
// "success", soit "error", soit "loading". Initialisez cette variable avec l'une de ces valeurs et
// affichez-la dans la console.
console.log("--- Exo 6 ---");
let statut = "loading";
console.log(statut);
// Exercice 7 :
// Déclarez une fonction greet qui prend un paramètre de type string et retourne une chaîne de
// caractères sous la forme "Hello, [name]!". Appelez cette fonction avec un nom et affichez le
// résultat.
console.log("--- Exo 7 ---");
function greet(name) {
    return `Bonjour, ${name}`;
}
let phrase = greet("Jean");
console.log(phrase);
// Exercice 8 :
// Déclarez une variable myTuple et initialisez-la avec un tuple contenant une chaîne de caractères
// et un nombre. Affichez les valeurs de ce tuple dans la console.
console.log("--- Exo 8 ---");
let monTuple = ["ma valeur String", 50];
console.log(`la valeur 0 de mon tuple : ${monTuple[0]}`);
console.log(`la valeur 1 de mon tuple : ${monTuple[1]}`);
// Exercice 9 :
// Déclarez une fonction add qui prend trois paramètres de type number et retourne leur somme.
// Appelez cette fonction avec trois nombres et affichez le résultat.
console.log("--- Exo 9 ---");
function add(a, b, c) {
    let result = a + b + c;
    return result;
}
console.log(`résultat de méthode add : ${add(1, 2, 3)}`);
// Exercice 10 :
// Déclarez une fonction filterEvenNumbers qui prend un tableau de nombres et retourne un
// nouveau tableau contenant uniquement les nombres pairs. Utilisez cette fonction pour filtrer le
// tableau [1, 2, 3, 4, 5, 6] et affichez le résultat.
console.log("--- Exo 10 ---");
function filterEvenNumbers(nombres) {
    return nombres.filter(nombre => nombre % 2 != 0);
}
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombrePairs = filterEvenNumbers(nombres);
console.log(nombrePairs);
