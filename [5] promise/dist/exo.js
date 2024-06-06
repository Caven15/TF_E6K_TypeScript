"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Fonction pour récupérer les informations d'un Pokémon via l'API
const recupererDonneesPokemon = async (nom) => {
    var _a;
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nom.toLowerCase()}`;
        const reponse = await axios_1.default.get(url);
        const reponseEspece = await axios_1.default.get(reponse.data.species.url);
        const nomFr = ((_a = reponseEspece.data.names.find(n => n.language.name === 'fr')) === null || _a === void 0 ? void 0 : _a.name) || reponse.data.name;
        return { nom: reponse.data.name, poids: reponse.data.weight, taille: reponse.data.height, types: reponse.data.types, nom_fr: nomFr, survivant: true };
    }
    catch (error) {
        throw new Error('Erreur lors de la récupération des données du Pokémon');
    }
};
const obtenirDonneesPokemon = async (nom) => {
    var _a;
    try {
        return await recupererDonneesPokemon(nom);
    }
    catch (_b) {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${nom.toLowerCase()}`;
            const reponseEspece = await axios_1.default.get(url);
            const nomEn = ((_a = reponseEspece.data.names.find(n => n.language.name === 'en')) === null || _a === void 0 ? void 0 : _a.name) || nom.toLowerCase();
            return await recupererDonneesPokemon(nomEn);
        }
        catch (error) {
            throw new Error(`Le Pokémon "${nom}" n'existe pas.`);
        }
    }
};
const obtenirPokemonAleatoire = async () => {
    const idAleatoire = Math.floor(Math.random() * 898) + 1; // Il y a 898 Pokémon jusqu'à présent
    return await recupererDonneesPokemon(idAleatoire.toString());
};
// Fonction pour récupérer les types en français
const recupererTypeFrancais = async (url) => {
    var _a;
    try {
        const reponse = await axios_1.default.get(url);
        const typeFr = ((_a = reponse.data.names.find(n => n.language.name === 'fr')) === null || _a === void 0 ? void 0 : _a.name) || 'Inconnu';
        return typeFr;
    }
    catch (error) {
        throw new Error('Erreur lors de la récupération du type');
    }
};
// Fonction pour permettre à l'utilisateur de choisir six Pokémon par nom
const obtenirPokemonsParNom = async () => {
    const nomsPokemons = [];
    while (nomsPokemons.length < 6) {
        const nom = await new Promise(resolve => {
            rl.question(`Entrez le nom du Pokémon ${nomsPokemons.length + 1} : `, resolve);
        });
        try {
            const pokemon = await obtenirDonneesPokemon(nom);
            nomsPokemons.push(pokemon.nom); // Correction pour utiliser le nom correct
        }
        catch (error) {
            console.log(error);
        }
    }
    const pokemonsUtilisateur = await Promise.all(nomsPokemons.map(nom => obtenirDonneesPokemon(nom)));
    return pokemonsUtilisateur;
};
// Fonction pour permettre à l'utilisateur de choisir six Pokémon
const obtenirPokemonsUtilisateur = async () => {
    const choix = await new Promise(resolve => {
        rl.question('Voulez-vous choisir vos Pokémon par nom ou les générer aléatoirement ? (nom/aleatoire) : ', resolve);
    });
    if (choix.toLowerCase() === 'nom') {
        return obtenirPokemonsParNom();
    }
    else {
        return obtenirPokemonsAleatoires();
    }
};
// Fonction pour générer six Pokémon aléatoires
const obtenirPokemonsAleatoires = async () => {
    const pokemonsAleatoires = await Promise.all(Array.from({ length: 6 }, () => obtenirPokemonAleatoire()));
    return pokemonsAleatoires;
};
// Fonction pour déterminer le gagnant d'un duel
const determinerGagnantDuel = (pokemon1, pokemon2) => {
    let score1 = 0;
    let score2 = 0;
    if (pokemon1.poids > pokemon2.poids)
        score1 += 50;
    else if (pokemon2.poids > pokemon1.poids)
        score2 += 50;
    if (pokemon1.taille > pokemon2.taille)
        score1 += 30;
    else if (pokemon2.taille > pokemon1.taille)
        score2 += 30;
    if (pokemon1.types.length > pokemon2.types.length)
        score1 += 20;
    else if (pokemon2.types.length > pokemon1.types.length)
        score2 += 20;
    return score1 > score2 ? 1 : score2 > score1 ? 2 : 0; // 1 pour pokemon1 gagnant, 2 pour pokemon2 gagnant, 0 pour égalité
};
// Fonction pour afficher les informations d'un Pokémon
const afficherInfosPokemon = async (pokemon, cote) => {
    const etiquetteCote = cote === 'gauche' ? 'Joueur' : 'Ordinateur';
    console.log(`${etiquetteCote === 'Joueur' ? 'Joueur     :' : 'Ordinateur :'} ${pokemon.nom_fr}`);
    console.log(`   - Poids: ${pokemon.poids / 10} kg`);
    console.log(`   - Taille: ${pokemon.taille / 10} m`);
    const typesFr = await Promise.all(pokemon.types.map(async (t) => await recupererTypeFrancais(t.type.url)));
    console.log(`   - Types: ${typesFr.join(', ')}`);
};
// Fonction pour déterminer le gagnant final
const determinerGagnant = async (pokemonsUtilisateur, pokemonsAleatoires) => {
    let victoiresUtilisateur = 0;
    let victoiresAleatoires = 0;
    for (let i = 0; i < 6; i++) {
        console.log('\n===========================');
        await afficherInfosPokemon(pokemonsUtilisateur[i], 'gauche');
        console.log('-👾- 🆚 -👾-');
        await afficherInfosPokemon(pokemonsAleatoires[i], 'droite');
        console.log('===========================\n');
        const resultat = determinerGagnantDuel(pokemonsUtilisateur[i], pokemonsAleatoires[i]);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde pour afficher le gagnant
        if (resultat === 1) {
            console.log('Le gagnant est le Joueur ! 🏆');
            victoiresUtilisateur++;
            pokemonsAleatoires[i].survivant = false; // Marquer le Pokémon de l'ordinateur comme mort
        }
        else if (resultat === 2) {
            console.log('Le gagnant est l\'Ordinateur ! 🏆');
            victoiresAleatoires++;
            pokemonsUtilisateur[i].survivant = false; // Marquer le Pokémon du joueur comme mort
        }
        else {
            console.log('C\'est une égalité ! 🤝');
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde avant de proposer de passer au combat suivant
        await attendreEntreeUtilisateur();
        console.clear();
    }
    return victoiresUtilisateur > victoiresAleatoires
        ? 'L\'utilisateur gagne !'
        : victoiresAleatoires > victoiresUtilisateur
            ? 'L\'équipe aléatoire gagne !'
            : 'C\'est une égalité !';
};
// Fonction pour attendre l'entrée de l'utilisateur et continuer
const attendreEntreeUtilisateur = () => {
    return new Promise(resolve => {
        rl.question('Appuyez sur Enter pour continuer ⌨', () => {
            resolve();
        });
    });
};
// Fonction pour afficher les résultats finaux
const afficherResultatsFinaux = (pokemonsUtilisateur, pokemonsAleatoires) => {
    console.log('Résultats finaux:');
    console.log('Équipe du Joueur:');
    pokemonsUtilisateur.forEach(pokemon => {
        console.log(` - ${pokemon.nom_fr} ${pokemon.survivant ? '😊' : '💀'}`);
    });
    console.log('Équipe de l\'Ordinateur:');
    pokemonsAleatoires.forEach(pokemon => {
        console.log(` - ${pokemon.nom_fr} ${pokemon.survivant ? '😊' : '💀'}`);
    });
};
// Fonction principale pour exécuter le programme
const principal = async () => {
    try {
        console.clear();
        console.log('Bienvenue dans le combat Pokémon ! 🤩');
        await attendreEntreeUtilisateur();
        console.clear();
        console.log('Préparation des équipes... ⏳\n');
        const pokemonsUtilisateur = await obtenirPokemonsUtilisateur();
        const pokemonsAleatoires = await obtenirPokemonsAleatoires();
        console.log('Équipe du Joueur:');
        pokemonsUtilisateur.forEach(pokemon => console.log(` - ${pokemon.nom_fr}`));
        console.log('\nÉquipe de l\'Ordinateur:');
        pokemonsAleatoires.forEach(pokemon => console.log(` - ${pokemon.nom_fr}`));
        await attendreEntreeUtilisateur();
        console.clear();
        console.log('Le combat commence ! ⚔️');
        const gagnant = await determinerGagnant(pokemonsUtilisateur, pokemonsAleatoires);
        console.log(`\n${gagnant}`);
        afficherResultatsFinaux(pokemonsUtilisateur, pokemonsAleatoires);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        rl.close();
    }
};
// Exécuter la fonction principale
principal();
