// Procédure (function) ne renvoie rien et stipule un argument : void en retour
function addition(nombre1 : number , nombre2 : number) : void{
    console.log(` ${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}

addition(1,5)

// Fonction (function) renvoie une valeur avec le type de valeur stipulé en retour
function multiplication(nombre1 : number , nombre2 : number) : number{
    return nombre1 * nombre2
}

let result : number = multiplication(5,3)
console.log(`5 x 3 = ${result}`);


// Application de paramètre optionnel
function bienvenueOpt(nom : string, message? : string) : string{
    if(message){
        return `${message}, ${nom}`
    }
    else{
        return `Hello, ${nom}`
    }
}

console.log(bienvenueOpt("Jhon")); // Affiche : Hello, Jhon
console.log(bienvenueOpt("Jhon", "Bienvenue à toi")); // Affiche : Bienvenue à toi, Jhon

// Application de paramètre par default
function bienvenueDef(nom : string, message : string = "Hello") : string{
    return `${message}, ${nom}`
}

console.log(bienvenueDef("Jhon")); // Affiche : Hello, Jhon
console.log(bienvenueDef("Jhon", "Bienvenue à toi")); // Affiche : Bienvenue à toi, Jhon


// Fonction anonyme assignée à une variable
const additionAnonyme = function(nombre1 : number , nombre2 : number) : number {
    return nombre1 + nombre2
}

additionAnonyme(10,10)

// fonction fléchée (Array Function)
const soustraction  = (nombre1 : number , nombre2 : number) => {
    return nombre1 - nombre2
}

soustraction(20,15)

// function id(parametre : string): string{
//     return parametre
// }

// function id(parametre : number): number{
//     return parametre
// }

// Fonction générique
function id<T>(parametre : T): T{
    return parametre
}

console.log(id<number>(42)); // Affiche 42
console.log(id<string>("Hello")); // Affiche "Hello"
