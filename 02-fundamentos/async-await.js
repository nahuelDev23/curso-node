/**
 * Async Await
 */

// let getNombre = async() => {

//         throw new Error('No exite un nombre para ese usuario');
//         return 'Milena';
//     }
/**
 * es igual q esto
 */
// let getNombre = () => {
//     return new Promise((resolve,reject)=>{
//         resolve('Milena')
//     })
// }

let getSaludo = async() => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Milena')
        }, 3000)

    })
}

// getNombre().then(nombre => {
//     console.log(nombre)
// }).catch(e => {
//     console.log(e)
// })

getSaludo().then(mensaje => {
    console.log(mensaje)
})