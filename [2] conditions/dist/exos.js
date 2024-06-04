"use strict";
// Exercice 1: Vérification d'âges
// Pour commencer, écrivez une fonction appelée verifierAge qui prend en
// entrée un âge (de type number) et retourne un message. Si l'âge est inférieur
// à 18, la fonction doit retourner "Vous êtes mineur". Si l'âge est compris entre 18
// et 65 ans, la fonction doit retourner "Vous êtes adulte". Si l'âge est supérieur à
// 65 ans, la fonction doit retourner "Vous êtes senior".
console.log("--- Exo 1 ---");
function verifierAge(age) {
    if (age < 18) {
        return "Vous est mineur";
    }
    else if (age <= 65) {
        return "Vous est majeur";
    }
    else {
        return "vous etes senior";
    }
}
console.log(verifierAge(28));
// Exercice 2: Classification des nombres
// Créez une fonction appelée classerNombre qui prend un nombre comme
// argument et retourne une chaîne de caractères. Si le nombre est positif, la
// fonction doit retourner "Positif". Si le nombre est négatif, la fonction doit
// retourner "Négatif". Si le nombre est zéro, la fonction doit retourner "Zéro".
console.log("--- Exo 2 ---");
function classerNombre(nombre) {
    if (nombre > 0) {
        return "Positif";
    }
    else if (nombre < 0) {
        return "Négatif";
    }
    else {
        return "Zéro";
    }
}
console.log(classerNombre(0));
console.log(classerNombre(1));
console.log(classerNombre(-1));
// Exercice 3: Pair ou Impair
// Écrivez une fonction nommée estPair qui prend un nombre comme argument
// et retourne un message. Si le nombre est pair, la fonction doit retourner "Pair".
// Si le nombre est impair, la fonction doit retourner "Impair".
console.log("--- Exo 3 ---");
function estPair(nombre) {
    if (nombre % 2 == 0) {
        return "paire";
    }
    else {
        return "impaire";
    }
    // return nombre % 2 === 0 ? "paire" : "impaire"
}
console.log(estPair(5));
// Exercice 4: Calcul de réduction
// Écrivez une fonction nommée calculerReduction qui prend en entrée un
// montant (de type number) et applique une réduction basée sur les règles
// suivantes. Si le montant est supérieur à 1000, appliquez une réduction de 20%.
// Si le montant est compris entre 500 et 1000, appliquez une réduction de 10%.
// Si le montant est inférieur à 500, appliquez une réduction de 5%. La fonction
// doit retourner le montant après réduction.
console.log("--- Exo 4 ---");
function calculerReduction(montant) {
    let resultat;
    if (montant > 1000) {
        resultat = montant - (montant * 0.2);
    }
    else if ((montant <= 1000) && (montant >= 500)) {
        resultat = montant - (montant * 0.1);
    }
    else {
        resultat = montant - (montant * 0.05);
    }
    return resultat;
}
console.log(calculerReduction(2000));
// Exercice 5: Vérification de mots de passe
// Créez une fonction appelée verifierMotDePasse qui prend un mot de passe
// (de type string) et retourne un message. Si le mot de passe contient moins de
// 8 caractères, la fonction doit retourner "Mot de passe trop court". Si le mot de
// passe contient au moins 8 caractères mais pas de chiffres, la fonction doit
// retourner "Le mot de passe doit contenir au moins un chiffre". Si le mot de passe
// contient au moins 8 caractères et au moins un chiffre, la fonction doit retourner
// "Mot de passe valide".
console.log("--- Exo 5 ---");
let mdp = "azertyu8";
function verifierMotDePasse(mdp) {
    let retour = "Mot de passe trop court...";
    if (mdp.length >= 8) {
        retour = "Le mot de passe doit contenir au moins un chiffre...";
        let hasNumber = /\d/;
        if (hasNumber.test(mdp)) {
            retour = "Mot de passe valide !";
        }
    }
    return retour;
}
console.log(`Nous allons vérifier le mot de passe : ${mdp} est : ${verifierMotDePasse(mdp)}`);
// Exercice 6: Evaluation des notes
// Écrivez une fonction nommée evaluerNote qui prend une note (de type
// number) sur 100 et retourne un grade basé sur les critères suivants. Si la note
// est entre 90 et 100, la fonction doit retourner "A". Si la note est entre 80 et 89, la
// fonction doit retourner "B". Si la note est entre 70 et 79, la fonction doit retourner
// "C". Si la note est entre 60 et 69, la fonction doit retourner "D". Si la note est
// inférieure à 60, la fonction doit retourner "F".
console.log("--- Exo 6 ---");
function evaluerNote(note) {
    if (note >= 0 && note <= 100) {
        if (note > 89) {
            return ("A");
        }
        else if (note > 79) {
            return ("B");
        }
        else if (note > 69) {
            return ("C");
        }
        else if (note >= 60) {
            return ("D");
        }
        else if (note < 60) {
            return ("F");
        }
    }
    else {
        return ("Note incorrecte...");
    }
}
console.log(evaluerNote(-10));
console.log(evaluerNote(75));
console.log(evaluerNote(150));
// Exercice 7: Vérification d'années bissextiles
// Écrivez une fonction nommée estBissextile qui prend une année (de type
// number) et retourne true si l'année est bissextile, sinon false. Une année est
// bissextile si elle est divisible par 4 mais pas par 100, ou si elle est divisible par
// 400.
console.log("--- Exo 7 ---");
function estBissextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
}
console.log(estBissextile(2021));
// Exercice 8: Analyse des scores
// Écrivez une fonction appelée analyserScores qui prend un tableau de scores
// (array de number) et retourne un objet avec les statistiques suivantes : le score
// maximum, le score minimum, la moyenne des scores, et la médiane des
// scores.
console.log("--- Exo 8 ---");
function analyserScores(scores) {
    // Vérifier su le tableau est vide
    if (scores.length === 0) {
        throw new Error("Le tableau des scores est vide...");
    }
    // Initialiser les variables pour les statistiques
    let max = scores[0];
    let min = scores[0];
    let somme = 0;
    // Parcourir le tableau des scores [7,5,2,3,6,4,1]
    for (const score of scores) {
        // Mettre à jour le maximum et le minimum
        max = Math.max(max, score);
        min = Math.min(min, score);
        // Accumuler la sommes des scores
        somme += score;
    }
    // Calculer le moyenne des scores
    const moyenne = somme / scores.length;
    console.log(scores);
    // Trier le tableau des scores
    scores.sort((a, b) => a - b);
    console.log(scores);
    // Calculer la médiane des scores
    let mediane;
    if (scores.length % 2 === 0) {
        mediane = (scores[scores.length / 2] + scores[scores.length / 2 - 1]) / 2;
    }
    else {
        mediane = scores[Math.floor(scores.length / 2)];
    }
    // Retourner un objet avec nos statistiques
    return { max, min, moyenne, mediane };
}
// Exemple 
const newTabScores = [70, 60, 96, 75, 85];
const statistiques = analyserScores(newTabScores);
console.log(`Score maximum : ${statistiques.max}`);
console.log(`Score minimum : ${statistiques.min}`);
console.log(`Moyennes des scores : ${statistiques.moyenne}`);
console.log(`Médiane des scores : ${statistiques.mediane}`);
