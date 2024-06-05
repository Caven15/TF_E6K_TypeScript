// Exercice 1 : Somme des carrés
// Écrivez une boucle for qui calcule la somme des carrés des nombres de 1 à 20 et affichez le résultat
// final dans la console. Utilisez la formule n * n pour obtenir le carré d'un nombre n.

console.log("--- Exo 1 ---")
let somme : number = 0
for(let i = 1;i <= 20; i++){
    somme += i * i
}
console.log(`Somme des carrés pour les nombres de 1 à 20 : ${somme}`);


// Exercice 2 : Compter les occurrences
// Écrivez une fonction countOccurrences qui prend un tableau de nombres et un nombre cible comme
// arguments. Utilisez une boucle pour parcourir le tableau, compter combien de fois le nombre
// cible apparaît, et retourner ce nombre. Affichez le résultat dans la console. Si le nombre cible
// n'est pas présent, la fonction doit retourner 0.

console.log("--- Exo 2 ---")
function countOccurrences(tableau : number[], cible : number) : number{
    let compteur : number = 0
    for(let element of tableau){
        if(element === cible){
            compteur++
        }
    }
    return compteur
}
const monTab : number[] = [1,2,4,5,6]
console.log(`Occurrences du nombre cible : ${countOccurrences(monTab,3)}`);

// Exercice 3 : Réverser un tableau
// Écrivez une fonction reverseArray qui prend un tableau de nombres [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] et utilise
// une boucle for pour inverser l'ordre des éléments du tableau. Retournez le tableau inversé et
// affichez-le dans la console. Ne pas utiliser de méthodes intégrées comme reverse().

console.log("--- Exo 3 ---")
function reverseArray(tableau : number[]) : number[]{
    let tabReversed : number[] = []

    for(let i = tableau.length - 1; i >= 0; i--){
        tabReversed.push(tableau[i])
    }

    return tabReversed
}

console.log(`Tableau inversé : ${reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);

// Exercice 4 : Table de multiplication
// Écrivez une fonction multiplicationTable qui prend un nombre entier comme argument et utilise une
// boucle for pour générer la table de multiplication de ce nombre de 1 à 12. Affichez chaque ligne
// de la table dans la console au format "n x i = produit", où n est le nombre donné et i varie de 1 à
// 12.

console.log("--- Exo 4 ---")
function multiplicationTable(nombre :number) : void{
    for(let i = 1; i <= 12; i++){
        console.log(`${nombre} x ${i} = ${nombre * i}`)
    }
}

multiplicationTable(3)

// Exercice 5 : Filtrer les nombres pairs
// Écrivez une fonction filterEvenNumbers qui prend un tableau de nombres comme argument et
// utilise une boucle pour parcourir le tableau et renvoyer un nouveau tableau contenant
// uniquement les nombres pairs. Affichez le tableau résultant dans la console. Ne pas utiliser de
// méthodes intégrées comme filter().

console.log("--- Exo 5 ---")
function filterEvenNumbers(tableau : number[]) : number[]{
    let tableauPair : number[] = []
    for (let element of tableau){
        if(element % 2 === 0){
            tableauPair.push(element)
        }
    }
    return tableauPair
}

console.log(`Tableau de pairs : ${filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);


// Exercice 6 : Calcul de la moyenne
// Écrivez une fonction calculateAverage qui prend un tableau de nombres comme argument et utilise
// une boucle pour calculer la somme des éléments. Divisez cette somme par le nombre d'éléments
// dans le tableau pour obtenir la moyenne. Retournez cette moyenne et affichez-la dans la console.
// Assurez-vous de gérer les tableaux vides.

console.log("--- Exo 6 ---")
function calculateAverage(tableau : number[]): number{
    if (tableau.length === 0) return 0
    let somme : number = 0
    for (let element of tableau){
        somme += element
    }
    return somme / tableau.length
}

console.log(`Moyennes des éléments du tableau : ${calculateAverage([1, 2, 3])}`);


// Exercice 7 : Trouver le second plus grand
// Écrivez une fonction secondLargest qui prend un tableau d'entiers comme argument et utilise une
// boucle pour trouver et retourner le second plus grand nombre dans le tableau. Affichez le résultat
// dans la console. Vous ne pouvez pas utiliser de méthodes intégrées comme sort(). Assurez-vous
// de gérer les cas où le tableau contient moins de deux éléments.

console.log("--- Exo 7 ---")
function secondLargest(tableau : number[]): number | null{
    if (tableau.length < 2) return null
    let premier : number = -Infinity,second : number = -Infinity
    for(let element of tableau){
        if(element > premier){
            second = premier
            premier = element
        } else if (element > second && element < premier){
            second = element
        }
    }
    return second === -Infinity ? null : second
}

console.log(`Second plus grand nombre : ${secondLargest([1, 2, 3])}`);

// Exercice 8 : Vérification des nombres premiers
// Écrivez une fonction isPrime qui prend un nombre entier comme argument et utilise une boucle
// pour vérifier si ce nombre est premier. Un nombre premier est un nombre entier supérieur à 1
// qui n'a aucun diviseur autre que 1 et lui-même. La fonction doit retourner true si le nombre est
// premier, sinon false. Affichez le résultat dans la console. Gérez également les cas où le nombre est
// inférieur ou égal à 1.

console.log("--- Exo 8 ---")
function isPrime(nombre : number): boolean{
    if(nombre <= 1) return false
    for(let i = 2; i <= Math.sqrt(nombre); i++){
        if(nombre % i === 0) return false
    }
    return true
}

console.log(`Le nombre est premier : ${isPrime(1)}`);

// Exercice 9 : Compter les caractères
// Écrivez une fonction countCharacters qui prend une chaîne de caractères comme argument et utilise
// une boucle pour parcourir la chaîne et compter le nombre de fois que chaque caractère apparaît.
// Retournez un objet contenant les caractères comme clés et leur nombre d'occurrences comme
// valeurs. Affichez l'objet résultant dans la console. Gérez la casse des caractères (c'est-à-dire, a et
// A doivent être comptés séparément).

console.log("--- Exo 9 ---")
function countCharacters(chaine : string) : {[key : string] : number}{
    let charCount :  {[key : string] : number} = {}
    for(let char of chaine){
        if(charCount[char]){
            charCount[char]++ 
        }
        else{
            charCount[char] = 1
        }
    }
    return charCount
}
let results : {[key : string] : number} = countCharacters("Hello")

for(let result in results){
    console.log(`Occurrences pour ${result} caractère : ${results[result]}`);
}

// Exercice 10 : Générateur de permutations
// Écrivez une fonction generatePermutations qui prend une chaîne de caractères comme argument et
// utilise une boucle (ou une approche récursive) pour générer et afficher toutes les permutations
// possibles de la chaîne. Retournez un tableau contenant toutes les permutations possibles.
// Affichez le tableau résultant dans la console. Assurez-vous de gérer les chaînes contenant des
// caractères répétés.


console.log("--- Exo 10 ---")
function generatePermutations(chaine : string) : string[]{
    if(chaine.length <= 1) return [chaine]
    let chainePermut : Set<string> = new Set()
    for(let i = 0; i < chaine.length; i++){
        let char : string = chaine[i]
        let charVariant : string = chaine.slice(0,i) + chaine.slice(i + 1) 
        // Récursivité
        for (let permutation of generatePermutations(charVariant)){
            chainePermut.add(char + permutation)
        }
    }
    return Array.from(chainePermut)
}

console.log(`Permutations de la chaine : ${generatePermutations("qsd")}`);