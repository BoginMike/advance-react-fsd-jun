
import fetch from 'node-fetch'

// callback demo
// function callApi(a,b,c){

//     console.log("We are calling an api...")
//     /// case 1 some code that will get execute in some situation
//     a()


//     console.log("We are in the middle of calling")
//     ///  case 2
//     b()



//     console.log("we finished api call.")
//     /// case 3
//     c()

// }


// function routine1(){
//     console.log("sagar")
// }

// callApi( routine1 , routine1 , routine1)




// this is a promise
// fetch('')  /// operation
//     .then(x => {
//         //call back if resolve
//         // if successfull
//     })
//     .catch(x => {
//         // call back if rejects
//         // if fails
//     })


// Custom Promise
// function login(name) {

//     return new Promise((resolve, reject) => {
//         if (name[0] == "S" || name[0] == "s") {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }


// login("Rahul")
//     .then(() => {

//         console.log("Worked")

//     }).catch(() => {

//         console.log("failed")

//     })




// without async await // promises are used
// fetch("https://catfact.ninja/fact")
//     .then(x => x.json())
//     .then(data=>{
//         console.log(data.fact)
//     })


// console.log("After fetch 1 ")
// console.log("After fetch 2 ")





// async await

// async function main() {

//     try {
//         let result = await fetch("https://catfact.ninja/fact")
//         let data = await result.json()

//         console.log(data.fact)

//         console.log("After fetch 1 ")
//         console.log("After fetch 2 ")
//     }
//     catch {
//         //
//     }



// }


// main()


function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, (time));
    })
}


async function main() {

    console.log("A")
    await sleep(3000);
    console.log("C")

}

main()