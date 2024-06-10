import axios from 'axios'
import readLine from 'readline'

//#region interface

const readL = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

interface Pokemon {
    nom : string
    poids : number
    taille : number
    types : {type : {name : string, url : string} }[]
    nomFr? : string
    survivant? : boolean
}

interface reponsePokemon {
    name : string
    weight : number
    height : number
    types : {type : {name : string, url : string} }[]
    species : {url : string}
}

interface reponseEspecePokemon {
    names: {name : string; language : {name : string}}[]
}

interface ResponseType{
    names : {language: {name : string}, name : string}[]
}

//#endregion

//#region AppelApi
const recupererDonneePokemon = async (nom : string) : Promise<Pokemon> => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${nom.toLowerCase()}`
        const reponse = await axios.get<reponsePokemon>(url)
        const reponseEspece = await axios.get<reponseEspecePokemon>(reponse.data.species.url)
        const nomFr = reponseEspece.data.names.find(n => n.language.name === "fr")?.name || reponse.data.name
        return {
            nom : reponse.data.name,
            poids : reponse.data.weight, 
            taille : reponse.data.height, 
            types : reponse.data.types, 
            nomFr : nomFr, 
            survivant : true
        }
    } catch (error) {
        throw new Error("Erreur de la récupération des données du pokémon !")
    }
}

const obtenirDonneePokemon = async (nom : string): Promise<Pokemon> =>{
    try{
        return await recupererDonneePokemon(nom)
    } catch {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${nom.toLowerCase()}`
            console.log(url);
            const reponseEspece = await axios.get<reponseEspecePokemon>(url)
            const nomEn = reponseEspece.data.names.find(n => n.language.name === "en")?.name || nom.toLowerCase()
            return await recupererDonneePokemon(nomEn)
        } catch (error) {
            throw new Error(`Le pokémon "${nom}" n'existe pas...`)
        }
    }
}

const recupererTypeFr = async (url : string) : Promise<string> => {
    try{
        const reponse = await axios.get<ResponseType>(url)
        const typeFr = reponse.data.names.find(n => n.language.name === "fr")?.name || "Inconnus"
        return typeFr
    } catch (error){
        throw new Error("Erreur de la récupération du type en francais !")
    }
}


//#endregion

//#region fonctions

const afficherResultatsFinaux = (pokemonUserResult : Pokemon[], pokemonIaResult : Pokemon[]) =>{
    console.log("Résultats finaux:")
    console.log("Èquipe du joueur:")
    pokemonUserResult.forEach(pokemon =>{
        console.log(`  - ${pokemon.nomFr} ${pokemon.survivant ? '😁' : '💀'}`);
    })
    console.log("Èquipe de l'ordinateur:")
    pokemonIaResult.forEach(pokemon =>{
        console.log(`  - ${pokemon.nomFr} ${pokemon.survivant ? '😁' : '💀'}`);
    })
}

const determinerGagnantDuel = (pokemonUser : Pokemon, PokemonIa : Pokemon): number => {
    let scoreUser = 0
    let scoreIa = 0

    if (pokemonUser.poids > PokemonIa.poids) scoreUser += 50
    else if (PokemonIa.poids > pokemonUser.poids) scoreIa += 50

    if (pokemonUser.taille > PokemonIa.taille) scoreUser += 30
    else if (PokemonIa.taille > pokemonUser.taille) scoreIa += 30

    if (pokemonUser.types.length > PokemonIa.types.length) scoreUser += 20
    else if (PokemonIa.types.length > pokemonUser.types.length) scoreIa += 20

    // 1 pour le pokémonUser gagnant
    // 2 pour le pokemonOdinateurGagnant
    // 0 pour l'égalité
    return scoreUser > scoreIa ? 1 : scoreIa > scoreUser ? 2 : 0 
}

const obteenirPokemonAletoire = async (): Promise<Pokemon> =>{
    const idAléatoire = Math.floor(Math.random() * 151) + 1
    return await recupererDonneePokemon(idAléatoire.toString())
}

const obtenirPokemonsAletoire = async (): Promise<Pokemon[]> => {
    const pokemonAleatoires = await Promise.all(Array.from({length : 6}, () => obteenirPokemonAletoire()))
    return pokemonAleatoires
}

const afficherInfosPokemon = async (pokemon : Pokemon, position : 'haut' | 'bas') =>{
    const ettiquetePosition = position === 'haut' ? 'Joueur' : 'Ordinateur'
    console.log(`${ettiquetePosition === 'Joueur' ? "Joueur    :" : 'Ordinateur :'} ${pokemon.nomFr}`);
    console.log(`    - Poids   : ${pokemon.poids / 10} Kg`);
    console.log(`    - Taille  : ${pokemon.taille / 10} m`);
    const typesFr : string[] = await Promise.all(pokemon.types.map(async (t) => await recupererTypeFr(t.type.url)))
    console.log(`    - Type(s) : ${typesFr.join(", ")}`);
}

const determinerGagnant = async(pokemonsUser : Pokemon[], pokemonsIa : Pokemon[]): Promise<string> =>{
    let nombreVictoireUser : number = 0
    let nombrevictoireIa : number = 0

    for(let i = 0; i < 6; i++){
        console.log("\n==========================");
        await afficherInfosPokemon(pokemonsUser[i], 'haut')
        console.log("\n==========================");
        await afficherInfosPokemon(pokemonsIa[i], 'bas')

        const resultat = determinerGagnantDuel(pokemonsUser[i], pokemonsIa[i])

        await new Promise(resolve => setTimeout(resolve,1500)) // Attendre 1 secondes pour afficher le résultat

        if(resultat === 1){
            console.log(`Le gagnant est le joueur ! 🏆`);
            nombreVictoireUser ++
            pokemonsIa[i].survivant = false
        }
        else if(resultat === 2){
            console.log(`Le gagnant est l'ordinateur ! 🏆`);
            nombrevictoireIa ++
            pokemonsUser[i].survivant = false
        }
        else{
            console.log("C'est une égalité 🤝");
        }

        await new Promise(resolve => setTimeout(resolve,1500)) // Attendre 1 secondes pour afficher le résultat
        await attendreEntreeUtilisateur()
        console.clear()
    }

    return nombreVictoireUser > nombrevictoireIa ? "L'utilisateur gagne !" : nombrevictoireIa > nombreVictoireUser ? "L'ordinateur gagne" : "C'est une égalité !"
}

const attendreEntreeUtilisateur = (): Promise<void> => {
    return  new Promise(resolve =>{
        readL.question("Appyer sur Enter pour continuer ⌨", () =>{
            resolve()
        })
    })
}

const obtenirPokemonParNom = async (): Promise<Pokemon[]> =>{
    const nomsPokemons : string[] = []
    while(nomsPokemons.length < 6){
        const nom = await new Promise<string>(resolve =>{
            readL.question(`Entrez le nom du pokémon ${nomsPokemons.length +1 } : `, resolve)
        })

        try {
            const pokemon = await obtenirDonneePokemon(nom)
            nomsPokemons.push(pokemon.nom)
        } catch (error){
            console.error(error);
        }
    }
    const pokemonUtilisateur = await Promise.all(nomsPokemons.map(nom => obtenirDonneePokemon(nom)))
    return pokemonUtilisateur
}

const obtenirPokemonUtilisateur = async (): Promise<Pokemon[]> =>{
    const choix = await new Promise<string>(resolve =>{
        readL.question("Voulez vous choisir vos pokémon par nom ou les générer aléatoirement ? (nom/aleatoire) :", resolve)
    })

    if (choix.toLowerCase() === "nom"){
        return obtenirPokemonParNom()
    } else {
        return obtenirPokemonsAletoire()
    }
}

//#endregion


const principal = async () => {
    try{
        console.clear()
        console.log("Bienvenue dans le combat pokémon ! 🤠");
        await attendreEntreeUtilisateur()
        console.clear()
        
        console.log("Préparation des équipes... ⌛\n");

        const pokemonUtilisateur = await obtenirPokemonUtilisateur()
        const pokemonsIa = await obtenirPokemonsAletoire()

        console.log("Équipes du joueur : ")
        pokemonUtilisateur.forEach(pokemon => console.log(` - ${pokemon.nomFr}`))
        console.log("\n Équipe de l'ordinateur : ");
        pokemonsIa.forEach(pokemon => console.log(`- ${pokemon.nomFr}`))

        await attendreEntreeUtilisateur()
        console.clear()

        console.log("Le combat commence ⚔");
        const gagnant = await determinerGagnant(pokemonUtilisateur, pokemonsIa)

        console.log(`\n ${gagnant}`);

        afficherResultatsFinaux(pokemonUtilisateur, pokemonsIa)
    } catch(error){
        console.error(error)
    } finally {
        readL.close()
    }
}

// Exécuter la fonction principale
principal()
