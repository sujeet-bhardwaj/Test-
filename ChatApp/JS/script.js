let text=document.querySelector("#text")
let search=document.querySelector("#search")
let output=document.querySelector(".output");

search.addEventListener("click",async()=>{
    console.log("Are you here")
    const userMessage=text.value.trim();
  if(userMessage==""){
    alert("Enter Some Input please")
    retrun 
  }
  
})





