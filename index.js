// console.log("Welcome to Promise")

//Promise

//3 states of Promise
//  1. pending
//  2. fulfilled
//  3. rejected


//create a promise



// let promise1 = new Promise((resolve,reject)=>{
//     if(10>2)
//     {
//         setTimeout(()=>resolve("Promise1 is success"),1000)
//     }
//     else
//     {
//         reject("Promise1 is failed")
//     }
// })

// let promise2 = new Promise((resolve,reject)=>{
//     if(10>1)
//     {
//         setTimeout(()=>resolve("Promise2 is success"),1000)
//     }
//     else
//     {
//         setTimeout(()=>reject("Promise2 is failed"),1000)
//     }
// })

// let promise3 = new Promise((resolve,reject)=>{
//     if(10>1)
//     {
//         setTimeout(()=>resolve("Promise3 is success"),1000)
//     }
//     else
//     {
//         setTimeout(()=>reject("Promis3 is failed"),1000)
//     }
// })



// promise1.then((value)=>console.log(value))
//        .catch((error)=>console.error(error))

// promise2.then((value)=>console.log(value))
//         .catch((error)=>console.error(error))

// promise3.then((value)=>console.log(value))
//         .catch((error)=>console.error(error))

// let response = Promise.all([promise1,promise2,promise3])
//                         .then(value=>console.log(value))
//                         .catch(error=>console.error(error))

// let response = Promise.any([promise1,promise2,promise3])
//                         .then(value=>console.log(value))
//                         .catch(error=>console.error(error))

// let response = Promise.race([promise1,promise3,promise2])
//                         .then(value=>console.log(value))
//                         .catch(error=>console.error(error))


// promise1.then(value=>{
//     console.log(value)
    
//     promise2.then(value=>{
//         console.log(value)
        
//         promise3.then(value=>{
//             console.log(value)
//         }).catch(error=>console.error(error))
//     }).catch(error=>console.error(error))
// }).catch(error=>console.error(error))



// fetch('https://restcountries.com/v3.1/all',{
//     method:"GET",
//     "Content-Type":"application/json"
// }).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.error(error))

function constructCards(data)
{
    for(let i = 0;i<data.length;i++)
    {
        let country = data[i]
        let wrapper = document.getElementById('root')
        let card = document.createElement('div')

        card.setAttribute('class','card')
        card.setAttribute('style',"width: 18rem; height: fit-content;")
        
        card.innerHTML= `<img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}">
        <div class="card-body">
        <h5 class="card-title">${country.name.common}</h5>
        </div>`

        wrapper.appendChild(card)
    }
}



async function getData(){
   try {
    let res = await fetch('https://restcountries.com/v3.1/all',{
        method:"GET",
        "Content-Type":"application/json"
    })
    let data = await res.json()
    
    constructCards(data)

   } catch (error) {
        console.log(error)
   }
}


getData()