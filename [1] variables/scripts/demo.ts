// Déclaration de variables 
console.clear()
console.log("------------------- Déclaration de variables en TypeScript -------------------")

// Déclaration d'une variable avec typage explicite
let maChaine : string = "Hello world !!!"
console.log(`maChaine ${maChaine}`)

// Déclaration d'une variable avec typage explicite (TypeScript infère le type)
let monNombre = 10 // TypeScript infère que monNOmbre est de type number
console.log(`monNombre ${monNombre}`)

// Déclaration d'un variable pour un tableau de nombres
let monTabNombre : number[]= [1,2,3,4,5]
console.log(`monTabNombre ${monTabNombre}`)

// Déclaration d'un variable pour un tableau de string
let monTabString : string[]= ["un","deux","trois"]
console.log(`monTabString ${monTabString}`)

// Déclaration d'une variable un tuple 
let monTuple : [string, number] = ["Test", 35]
console.log(`monTuple ${monTuple}`)

// Déclaration d'un variable avec un typage explicite pour un objet
let monObjet : {nom : string, age : number} = { nom : "50", age : 50}
console.log(`monObjet ${monObjet}`)

// D2claration d'une variable avec Union Type (Peut contenir plusieur types)
let monUnion : string | number = "Hello world !!!"
console.log(`monUnion ${monUnion}`)
monUnion = 50 // monUnion est maintenant un nombre...
console.log(`monUnion ${monUnion}`)

// L'utilisation de l'opérateur litéral pour déclarer des variables avec des valeur spécifique
let monliteral : "un" | "deux" | "trois"
monliteral = "deux"
console.log(`monliteral ${monliteral}`)


// Déclaration d'une variable avec Any (peut contenir n'importe quel type)
let monAny : any = "Hello" 
console.log(`monAny ${monAny}`)
monAny = true
console.log(`monAny ${monAny}`)
monAny = 30
console.log(`monAny ${monAny}`)

// Utilisation de l'opérateur Undefined  pour déclarer une variable pouvant être undefined
let maVarNonDefinie : string | undefined
maVarNonDefinie = undefined
console.log(`maVarNonDefinie ${maVarNonDefinie}`)
maVarNonDefinie = "Personne"
console.log(`maVarNonDefinie ${maVarNonDefinie}`)

// Utilisation de l'opérateur null  pour déclarer une variable pouvant être null
let maVarNull : string | null
maVarNull = null
console.log(`maVarNull ${maVarNull}`)
maVarNull = "Personne"
console.log(`maVarNull ${maVarNull}`)


// Utilisation de l'opérateur Never pour déclarer une fonction ne retournat jamais de valeur ou un type qui ne peut pas être atteint 
function ajoutErreur(message : string): never{
    throw new Error(message)
}

// Utilisation de l'opérateur void pour délcarer une fonction ne retournant aucune valeur
function direBonjour() : void{
    console.log("Bonjour depuis une procédure qui utilise l'opérateur void");
}
direBonjour()

// Déclaration d'une fonction avec un type de retour bien spécifique
function add(nombreA : number, nombreB : number): number{
    return nombreA + nombreB
}

console.log("Résultat de la fonction add(10,5)", add(10,5));