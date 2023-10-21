// const promiseNew = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve()
//     },2000)
//     setTimeout(()=>{
//         reject('Erorr')
//     },1000)
   
// });
// promiseNew
//          .then((n)=>{
//             console.log(n)
//          })
//         .catch((eror)=>{
//             console.log(eror)
//         })

// function delayedSum(a, b, delay){
//  const promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//              resolve(a + b)
//         },delay);
//     });
//     promise
//          .then((n)=>{
//          console.log(n)
//            })
//            .catch((erorr)=>{
//             console.log(erorr)
//            })
    
// }

// delayedSum(2, 3, 2000)


// const url = 'https://jsonplaceholder.typicode.com/tods'
// const result =fetch(url, {
//      method: 'GET',
// })
//   result
//         .then((response)=>{
//           console.log('respons', response)
//           if(!response.ok){
//                throw new Error('Ощибка Запроса')
//           }
//            return response.json()
//         })
//         .then((todos)=>{
//           console.log(todos)
//         })
//         .catch((erorr)=>{
//           console.log(erorr)
//         })


// function fetchData(url){
//    const result = fetch(url,{
//           method: 'GET',
//      });
//     result 
//           .then((todos)=>{
//                return todos.json
//           })
//           .then((ret)=>{
//                console.log(ret)
//           })
//           .catch((erorr)=>{
//                console.log(erorr)
//           })
// }

// fetchData('https://api.example.om/data')


const object={
     status: false,
}

const promise = new Promise((resolve, reject)=>{
          if(object.status){
               resolve('ВЫполнено')
          }else{
               setTimeout(()=>{
                    reject('Тайм-oyt')
               },3000)
          }
          
})

promise
       .then((n)=>{
          console.log(n)
       })
       .catch((erorr)=>{
          console.log(erorr)
       })