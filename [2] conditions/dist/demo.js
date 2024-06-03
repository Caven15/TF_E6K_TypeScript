"use strict";
// Déclaration de variables
let age = 25;
let jour = 1;
let est_Adulte = age >= 18;
let hasId = true;
// Condition if / else
console.log("--- Condition if / else ---");
if (age >= 18) {
    console.log("Vous êtes majeur !!!");
}
else if (age <= 18) {
    console.log("Vous êtes mineur !!!");
}
else {
    console.log("Si vous n'êtes ni majeur, ni mineur, existez vous réellement ?? 😨");
}
// Contition ternaire
console.log("--- Contition ternaire ---");
let message = (age >= 18) ? "Vous êtes majeur !!!" : "Vous êtes mineur !!!";
console.log(message);
// Contition switch
console.log("--- Contition switch ---");
let nomDuJour;
switch (jour) {
    case 1:
        nomDuJour = "Lundi";
    case 2:
        nomDuJour = "Mardi";
        break;
    case 3:
        nomDuJour = "Mercredi";
        break;
    case 4:
        nomDuJour = "Jeudi";
        break;
    case 5:
        nomDuJour = "Vendredi";
        break;
    default:
        nomDuJour = "Weekend";
        break;
}
console.log(`Aujourd'hui nous sommes ${nomDuJour}`);
