function facts(){
   
    let url='https://asli-fun-fact-api.herokuapp.com/'
fetch(url).then((res)=>res.json())
.then((data)=>{
    display(data)
   
  
})
.catch(()=>{
    heading.innerText("error")
})


}

 function display(data){
     let heading= document.getElementById('heading')
     if(data.status){
         heading.innerHTML=data.data.fact

     }
     else{
         heading.innerText="error"
     }
     let para=document.createElement('p')
     para.id="para"
     para.innerHTML=data.data.fact
     document.getElementById('unknown').appendChild(para)
 }














 
















  








    


















 










