const url="https://cat-fact.herokuapp.com/facts";
let btn=document.querySelector("#btn");
let par=document.querySelector("#fact");

const getfact=async()=>{
    console.log("getting data........")
    let response= await fetch(url);
    console.log(response.status);
    let data= await response.json()
    par.innerHTML=data[0].text;
}
// btn.addEventListener("click",getfact)
$("btn").on("click",getfact)


