import axios from 'axios'

// Interface pour typer la réponse de l'api 
interface Pokemon {
    id : number,
    name : string,
    types : Array<{slot : number, type :{name :string}}> // Tableau des types du pokémon
}

// Fonction pour récupérer les informations d'un pokémon
async function getPokemonByName(pokemonName : string) : Promise<Pokemon>{
    try{
        // Affecgtuer une requête GET a l'àpi pokémon pour obtenir un pokemon par son nom
        const reponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        return reponse.data
    } catch(error : any){
        // Capture 
        throw new Error(`Erreur lor de la récupération de ${pokemonName} : \n ${error.message}`)
    }
}

// Exemple d'utilisation de la fonction getPokemon
async function main(){
    const pokemonName = 'charizard'
    try{
        const pokemon = await getPokemonByName(pokemonName)
        // Afficher les information du pokémon
        console.log(`Id : ${pokemon.id}`);
        console.log(`Nom : ${pokemon.name}`);
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`); // Convertit les types en chaine de caractères
    } catch(error){
        // Capture et affiche l'erreur en cas de probluème avec la requête
        console.error(error)
    }
}

main()