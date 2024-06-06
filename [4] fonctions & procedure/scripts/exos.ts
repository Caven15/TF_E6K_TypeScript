// Exercice 8 : Fonction pour appliquer une série d'opérations sur un nombre
// Écrire une fonction qui prend un nombre et un tableau de fonctions, et applique successivement
// chaque fonction au nombre, en renvoyant le résultat final.

console.log("--- Exo 8 ---");
function appliquerOperations(nombre : number, operations  : ((n : number) => number)[]) : number{
    return operations.reduce((result, operation) => operation(result), nombre)
}

const newOperations : ((n : number) => number)[] = [
    (x : number) => x+1,
    (x : number) => x*5,
    (x : number) => x-10
]

console.log(appliquerOperations(5, newOperations));

// Exercice 9 : Fonction récursive pour générer la suite de Fibonacci
// Écrire une fonction récursive qui prend un nombre entier n et génère un tableau contenant les n
// premiers termes de la suite de Fibonacci. La suite de Fibonacci commence par 0 et 1, et chaque
// terme suivant est la somme des deux termes précédents.

console.log("--- Exo 9 ---");
function suiteFibonacci(n : number) : number[]{
    if (n <= 0) return []
    if (n === 1) return [0]
    if (n === 2) return [0,1]
    
    const fibonacci = suiteFibonacci(n -1)

    
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
    return fibonacci
}

console.log(suiteFibonacci(10));
