// Déclaration de variables
let age : number = 25;
let jour : number = 1;
let est_Adulte : boolean = age >= 18;
let hasId : boolean = true;

// Condition if / else
console.log("--- Condition if / else ---");
if (age >= 18) {
    console.log("Vous êtes majeur !!!");
}
else if (age <= 18){
    console.log("Vous êtes mineur !!!");
}
else{
    console.log("Si vous n'êtes ni majeur, ni mineur, existez vous réellement ?? 😨");
}

// Contition ternaire
console.log("--- Contition ternaire ---");
let message : string = (age >= 18) ? "Vous êtes majeur !!!" : "Vous êtes mineur !!!";
console.log(message);

// Contition switch
console.log("--- Contition switch ---");
let nomDuJour : string

switch(jour) {
    case 1 :
        nomDuJour = "Lundi";
        break;
    case 2 :
        nomDuJour = "Mardi";
        break;
    case 3 :
        nomDuJour = "Mercredi";
        break;
    case 4 :
        nomDuJour = "Jeudi";
        break;
    case 5 :
        nomDuJour = "Vendredi";
        break;
    default :
        nomDuJour = "Weekend";
        break;
}
console.log(`Aujourd'hui nous sommes ${nomDuJour}`);

console.log("--- Opérateurts logiques ---");

if (hasId && est_Adulte){
    console.log("Vous êtes autorisé à entrer ");
}
else{
    console.log("Vous n'êtes pas autorisé à entrer ");
}

