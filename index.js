// callback or pyramid of doom
//**************************************************************************** */
/*const greet=(name,callback)=>{
  setTimeout(()=>{
    console.log(`hello ${name}`)
    if(callback){

      callback()
    }
  },2000)
}
greet("Rohan",()=>{
  greet("shyam",()=>{
    greet("rajat",()=>{
      greet("aman",()=>{
        greet("vijay")
      })
    })
  })
})*/
//***************************************************************************** */
//----------------------------------------------------------------------------------------------------------------------------------------
// to get rid of callback hell we have a concept of promises
// as promise ia an object so it has 3 state(pending,fulfilles(resolve),reject)
// const a=new Promise((resolve,reject)=<{  }) basic syntax for creating promise

// in real life senerio we are dealing with promise in anotyher way like case if we request any APi for data
//********************************************************************************/
/*const getdetail=(username,password)=>{
  return new Promise((resolve,reject) => {
    let name="Rohan";
    if(username == name){
      console.log(`username ${username} match with database`)
      resolve("username successfully matched")
      setTimeout(() => {
        console.log("please enter your password")
      },5000)
    }
    else{
      reject("username not in our database please creat an account  first")
    }

  })
}
let data=getdetail("Rohan")*/
//**********************************************************************************/
//the above example is how the promises work now we are going to understand how we are oging to use promises

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// we  are using .then() or .catch() method to use the promises .then(fullfilled) and .catch(rejected)
// res and err are the value that u pass in main function during resolve and reject
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*const chekname=(name) => {
  return new Promise((resolve,reject) => {
      if(name=="Rohan"){
        resolve("yes name match in our database")
      }else{
        reject("error your name is not in database")
      }
  })
}

let match=chekname("Rohadn")
match.then((res)=>{
  console.log("data is successfully matched",res)
});
match.catch((err)=>{
  console.log("data is not matched".err)
})*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// promise chaining concept in java script
//---------------------------------------------------------------------------------------
/*const function1=()=>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      console.log("data1")
      resolve("successfull")
    },3000)
  })
}
const function2=()=>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      console.log("data2")
      resolve("successfull")
    },3000)
  })
}
const function3=()=>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      console.log("data3")
      resolve("successfull")
    },3000)
  })
}*/

/*
console.log("fetxhing some data1.........")
function1().then((res)=>{
  console.log(res)
})
console.log("fetxhing some data2.........")
function2().then((res)=>{
  console.log(res)
})*/


/*console.log("fetching data1.........")
function1().then((res)=>{
  console.log(res)
console.log("fetching data2........")  
  function2().then((res)=>{
    console.log(res)
  })
})*/

// actual promise chaining
/*console.log("fetching data1.........")
function1().then((res)=>{
  console.log("fetching data2.........")
  return function2()
}).then((res)=>{
  console.log("fetching data3.........")
  return function3()
}).then((res)=>{
  console.log(res)
})*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise is sometime also not redable so now we are using async await 
// async function always ***return*** a promise and just by writing async before function we make that function async
//await  pause the execution of its sorrounding async function untill the promise is setteled
//await can only use inside async function


// function getApi(state){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log(` weather of ${state} right now!`)
//       resolve(200)
//     }, 3000);
//   })
// }

// async function getdata(){
//   console.log("welcome to weater API")
//   await getApi("Bihar")
//   await getApi("Punjab")
//   await getApi("Delhi")
//   console.log("weather data is shown")
// }

// getdata() here we need to call it but have other approach that disciss in below code called IIFE



const greet=(name)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`hello ${name}`)
      resolve(200)
    },2000)
  })
  
}

(async function(){
  await greet("Rohan")
  await greet("Shyam")
  await greet("Krishna")
  await greet("Shubham")
  await greet("Ayush")
})(); 



