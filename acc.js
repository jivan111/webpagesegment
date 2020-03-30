
var btn=document.getElementById("accordion")
var divContainer=document.getElementsByClassName("box")[0]


btn.addEventListener("click",()=>{
    btn.classList.add("btnClicked");
    setTimeout(()=>{
        btn.classList.remove("btnClicked");
    },300)
    if(divContainer.style.display==="flex"){
        divContainer.style.display="none"
      
    }else{
        divContainer.style.display="flex"
    }
    
 
})
var elementDiv=document.querySelectorAll("div.child")
var header=document.querySelectorAll("div>h1")
var paragraph=document.getElementsByTagName("p")
// for(var i=0;i<elementDiv.length;i++){
//     elementDiv[i].addEventListener("click",()=>{
//         console.log(elementDiv[i])
//     // paragraph[i].style.display="block";
//     })

function hideOtherDiv(index){
    for(var i=0;i<elementDiv.length;i++){
        if(i!=index){
           
            paragraph[i].classList.remove("show")
            header[i].textContent="+";

        }
    }
}
  elementDiv.forEach((btn,index)=>{
      btn.addEventListener("click",()=>{
        if( paragraph[index].classList.contains("show")){
            paragraph[index].classList.toggle("show")
            header[index].textContent="+";
        }else{
            paragraph[index].classList.toggle("show")
           
            
            
            header[index].textContent="-"
            hideOtherDiv(index)

            
          
        }
 
    }
      )
  })  







    

