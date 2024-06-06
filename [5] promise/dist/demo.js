"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
console.log("modele vide...");
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
const axios_1 = __importDefault(require("axios"));
function fetchUserData(userId) {
    return axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
}
fetchUserData("5")
    .then(reponse => {
    console.log(reponse);
    console.log("-------");
    console.log(reponse.data);
})
    .catch(error => {
    console.error("Erreur de récupération utilisateur", error.message);
});
//#endregion
//#region Récupération de données depuis une api en await/ascyn
async function fetchUserDataAsync(userId) {
    try {
        const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log(response.data.name);
        console.log(response.data.username);
    }
    catch (error) {
        console.error("Erreur de récupération utilisateur", error);
    }
}
fetchUserDataAsync("3");
//#endregion
