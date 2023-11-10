

const colors=["red","blue","green","yellow"]
   const btn=document.querySelector(".btn")
   function colorchange (){
    
    const randomnumbers =(Math.floor (Math.random()*colors.length));  
    return colors[randomnumbers] 
                   
    }
    
    btn.addEventListener("click",function (){
    
     document.body.style.backgroundColor=colorchange()
     })