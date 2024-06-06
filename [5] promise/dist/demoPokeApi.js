"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Fonction pour récupérer les informations d'un pokémon
async function getPokemonByName(pokemonName) {
    try {
        // Affecgtuer une requête GET a l'àpi pokémon pour obtenir un pokemon par son nom
        const reponse = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return reponse.data;
    }
    catch (error) {
        // Capture 
        throw new Error(`Erreur lor de la récupération de ${pokemonName} : \n ${error.message}`);
    }
}
// Exemple d'utilisation de la fonction getPokemon
async function main() {
    const pokemonName = 'charizard';
    try {
        const pokemon = await getPokemonByName(pokemonName);
        // Afficher les information du pokémon
        console.log(`Id : ${pokemon.id}`);
        console.log(`Nom : ${pokemon.name}`);
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`); // Convertit les types en chaine de caractères
    }
    catch (error) {
        // Capture et affiche l'erreur en cas de probluème avec la requête
        console.error(error);
    }
}
main();
