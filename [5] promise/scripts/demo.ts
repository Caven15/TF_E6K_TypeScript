console.clear()
console.log("modele vide...");

//#region Création de promises

// Une promise est un objet représentant l'achèvement ou l'échec d'une opération asychrone.

// fonction pour un tentative dé récupération sur une api (serveur)
// function fetchDataFromApi() : Promise<string>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             // Simule la récupération de données avec succès ou échec
//             const succes = false
//             if(succes){
//                 resolve("Data récupéréer avec succès !")
//             }
//             else{
//                 reject(new Error("Erreur lors de la récupération de données..."))
//             }
//         },1000)
//     })
// }

// // Utilisation de la Promise
// fetchDataFromApi().then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.error(error.message)
// })


//#endregion

//#region Chaining de promises

// Les promies peuvent êtres chainées pour effectuer des opérations sequentielles.

// function step1() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Step 1 est finie avec succès !");
//         }, 500)
//     })
// }

// function step2() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 2 est finie avec succès !"), 500)
//     })
// }

// function step3() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 3 est finie avec succès !"), 500)
//     })
// }

// step1()
//     .then(result1 =>{
//         console.log(result1)
//         return step2()
//     })
//     .then(result2 =>{
//         console.log(result2)
//         return step3()
//     })
//     .then(result3 =>{
//         console.log(result3);
//     })
//     .catch(error =>{
//         console.error(`Erreur dans les étapes : \n ${error}`);
//     })

//#endregion

//#region async/await

// L'utilisation de asyc/await permet de simplifier le code asynchrone en rendant le code plus linéraire et lisible

// async function fetchDataAsync() : Promise<string>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             // Simule la récupération de données avec succès ou échec
//             const succes = false
//             if(succes){
//                 resolve("Data récupéréer avec succès !")
//             }
//             else{
//                 reject(new Error("Erreur lors de la récupération de données..."))
//             }
//         },1000)
//     })
// }

// async function main(){
//     console.clear()
//     try{
//         const data = await fetchDataAsync()
//         console.log(data)
//     } catch(error){
//         console.error(error)
//     }
// }

// main()


export { };
//#endregion

//#region chaining avec async/await

// async function step4() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 4 est finie avec succès !"), 500)
//     })
// }

// async function step5() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 5 est finie avec succès !"), 500)
//     })
// }

// async function step6() : Promise<string>{
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Step 6 est finie avec succès !"), 500)
//     })
// }

// async function executeStep(){
//     try{
//         const result4 = await step4()
//         console.log(result4);

//         const result5 = await step5()
//         console.log(result5);

//         const result6 = await step6()
//         console.log(result6);
//     } catch(error){
//         console.error(`Erreur dans les steps 4,5,6 : \n ${error}`)
//     }
// }

// executeStep()

//#endregion

//#region async/await

// L'utilisation de asyc/await permet de simplifier le code asynchrone en rendant le code plus linéraire et lisible

// async function fetchDataAsync() : Promise<string>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             // Simule la récupération de données avec succès ou échec
//             const succes = false
//             if(succes){
//                 resolve("Data récupéréer avec succès !")
//             }
//             else{
//                 reject(new Error("Erreur lors de la récupération de données..."))
//             }
//         },1000)
//     })
// }

// async function main(){
//     console.clear()
//     try{
//         const data = await fetchDataAsync()
//         console.log(data)
//     } catch(error){
//         console.error(error)
//     }
// }

// main()


//#endregion

//#region Récupération de données depuis une api en promise
import axios from 'axios'

function fetchUserData(userId : string) : Promise<any>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

fetchUserData("5")
    .then(reponse =>{
        console.log(reponse);
        console.log("-------");
        console.log(reponse.data);
    })
    .catch(error =>{
        console.error("Erreur de récupération utilisateur", error.message)
    })

//#endregion

//#region Récupération de données depuis une api en await/ascyn

async function fetchUserDataAsync(userId : string){
    try{
        const response : any = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        console.log(response.data.name)
        console.log(response.data.username)
    } catch(error){
        console.error("Erreur de récupération utilisateur", error)
    }
}

fetchUserDataAsync("3")

//#endregion