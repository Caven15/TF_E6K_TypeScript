"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Fonction pour récupérer les informations d'un Pokémon via l'API
const fetchPokemonData = async (url) => {
    var _a;
    try {
        const response = await axios_1.default.get(url);
        const speciesResponse = await axios_1.default.get(response.data.species.url);
        const nameFr = ((_a = speciesResponse.data.names.find(n => n.language.name === 'fr')) === null || _a === void 0 ? void 0 : _a.name) || response.data.name;
        return Object.assign(Object.assign({}, response.data), { name_fr: nameFr });
    }
    catch (error) {
        throw new Error('Erreur lors de la récupération des données du Pokémon');
    }
};
const getPokemonData = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    return fetchPokemonData(url);
};
const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Il y a 898 Pokémon jusqu'à présent
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    return fetchPokemonData(url);
};
// Fonction pour permettre à l'utilisateur de choisir six Pokémon
const getUserPokemons = async () => {
    const pokemonNames = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'jigglypuff', 'meowth']; // Remplacez par les noms saisis par l'utilisateur
    const userPokemons = await Promise.all(pokemonNames.map(name => getPokemonData(name)));
    return userPokemons;
};
// Fonction pour générer six Pokémon aléatoires
const getRandomPokemons = async () => {
    const randomPokemons = await Promise.all(Array.from({ length: 6 }, () => getRandomPokemon()));
    return randomPokemons;
};
// Fonction pour déterminer le gagnant d'un duel
const determineDuelWinner = (pokemon1, pokemon2) => {
    let score1 = 0;
    let score2 = 0;
    if (pokemon1.weight > pokemon2.weight)
        score1 += 50;
    else if (pokemon2.weight > pokemon1.weight)
        score2 += 50;
    if (pokemon1.height > pokemon2.height)
        score1 += 30;
    else if (pokemon2.height > pokemon1.height)
        score2 += 30;
    if (pokemon1.types.length > pokemon2.types.length)
        score1 += 20;
    else if (pokemon2.types.length > pokemon1.types.length)
        score2 += 20;
    return score1 > score2 ? 1 : score2 > score1 ? 2 : 0; // 1 pour pokemon1 gagnant, 2 pour pokemon2 gagnant, 0 pour égalité
};
// Fonction pour déterminer le gagnant final
const determineWinner = (userPokemons, randomPokemons) => {
    let userWins = 0;
    let randomWins = 0;
    for (let i = 0; i < 6; i++) {
        const result = determineDuelWinner(userPokemons[i], randomPokemons[i]);
        if (result === 1)
            userWins++;
        else if (result === 2)
            randomWins++;
    }
    if (userWins > randomWins)
        return 'L\'utilisateur gagne !';
    else if (randomWins > userWins)
        return 'L\'équipe aléatoire gagne !';
    else
        return 'C\'est une égalité !';
};
// Fonction principale pour exécuter le programme
const main = async () => {
    try {
        const userPokemons = await getUserPokemons();
        const randomPokemons = await getRandomPokemons();
        const winner = determineWinner(userPokemons, randomPokemons);
        console.log(winner);
        console.log('Pokémon restants de l\'utilisateur:', userPokemons.map(p => p.name_fr));
        console.log('Pokémon restants de l\'équipe aléatoire:', randomPokemons.map(p => p.name_fr));
    }
    catch (error) {
        console.error(error);
    }
};
// Exécuter la fonction principale
main();
