// start of resrvation  
let resrvationbtn=document.querySelector(".header .menu button")
let resrvationpage=document.querySelector(".resrv")
let resrvcancel=document.querySelector(".resrv .resrvContent i")
let getresrve=document.querySelector(".home .homeContent .sec a")
resrvationbtn.addEventListener("click",e=>{
    resrvationpage.classList.toggle("showbook")

})
resrvcancel.addEventListener("click",e=>{

    resrvationpage.classList.remove("showbook")
})
console.log(getresrve)
getresrve.addEventListener("click",e=>{
    e.preventDefault()
    resrvationpage.classList.add("showbook")
})


// end of resrvation 

/* start of header  */
let toggelemenu=document.querySelector(".header .headerContent  .icons .clk")
let listmenu=document.querySelector(".header .headerContent .menu ul")
let listli=document.querySelectorAll(".header .headerContent .menu ul li a")
let headdiv=document.querySelector(".header ")
toggelemenu.addEventListener("click",e=>{
    listmenu.classList.toggle("show")
    toggelemenu.classList.toggle("fa-times")

    // if(listmenu.classList.contains("show")){
    //     toggelemenu.classList.replace("fa-bars","fa-xmark")
    // }else{
    //     toggelemenu.classList.replace("fa-xmark","fa-bars")
    // }
    
 
})

listli.forEach(e=>{ 
    e.addEventListener("click",el=>{
        el.preventDefault()
        listli.forEach(p=>{  
            p.classList.remove("active")
            }) 
        el.target.classList.add("active") 

        document.querySelector(el.target.id).scrollIntoView({
            behavior:"smooth"
        })
        listmenu.classList.remove("show")
    })
})

window.onscroll=e=>{
    if(window.scrollY>=200){
        headdiv.classList.add("chcolor")
    }else{
        headdiv.classList.remove("chcolor")
    }
}

let qrylitogle=document.querySelectorAll(".header .menu ul li")

qrylitogle.forEach(e=>{
    e.addEventListener("click",el=>{  
        document.querySelector(el.target.querySelector("a").id).scrollIntoView({
            behavior:"smooth"
        }) 
        listmenu.classList.remove("show")
    })
})
// document.body.addEventListener("click",e=>{
//     console.log(e.target)
// })
/* end of header  */

// start of home 
images=["./imgs/home-1.jpg","./imgs/home-2.jpg","./imgs/home-3.jpg" ]
let rightbtn=document.querySelector(".home .homeContent .icons .right")
let leftbtn=document.querySelector(".home .homeContent .icons .left")
let home=document.querySelector(".home")
let bultimg=document.querySelectorAll(".home .homeContent .bulletsimg span")
let textboxs=document.querySelectorAll(".home .homeContent .box .text")


let count=0
let sum=3
rightbtn.addEventListener("click",e=>{
    
    count=(count+sum+1)%sum;
    home.style.backgroundImage='url("'+images[count]  +'")';
    indicator(count)
    
})
leftbtn.addEventListener("click",e=>{
  
    count=(count+sum-1)%sum
    home.style.backgroundImage='url("'+images[count]  +'")';
    
    indicator(count)
})

function indicator(e){
    
    bultimg.forEach((el,index)=>{
        el.classList.remove("colored")
           if(index===e){
              el.classList.add("colored")
           }
         
    })
    textboxs.forEach((el,index)=>{
        el.classList.remove("block")
        if(index===e){
            el.classList.add("block")
         }
    })

}

// end of home 

// start of foods types 
let typebtn=document.querySelectorAll(".foodsType .types li")
let typebox=document.querySelectorAll(".foodsType .foodsTypesContent .box")
 

typebtn.forEach(e=>{
    e.addEventListener("click",el=>{
        typebtn.forEach(e=>{
            e.classList.remove("active")
        })
        el.target.classList.add("active")
        typebox.forEach(box=>{
            if((el.target.id===box.id)||(el.target.id==="lunch")){
                box.classList.remove("hidebox") 
            }else{
                box.classList.add("hidebox") 
            }
          
        })
        // if(document.querySelector(".foodsType .foodsTypesContent  ").innerHTML=""){
        //     let boxfood=document.createElement("div")
        //     boxfood.innerHTML="sorry,this type is not found"
        //     boxfood.className="message"
        //     document.querySelector(".foodsType .foodsTypesContent  ").appendChild(boxfood)
        // }
    })
})



// end of foods types 

// start coments 
let comentContent=document.querySelector(".comments .commentsContent")
// let icbtns=document.querySelectorAll(".comments .commentsContent .icons i")
// let firstbox=document.querySelectorAll(".comments .commentsContent .box")[0]
// let widthfirst=firstbox.clientWidth + 2; 
// icbtns.forEach(e=>{
//     e.addEventListener("click",( )=>{
//         comentContent.scrollLeft += e.id === "left" ? -widthfirst : widthfirst;
//     })
// })

let isdragstart = false , prevPageX , prevScrollLeft;

comentContent.addEventListener("mousemove",e=>{ 
    if(!isdragstart) return;
    e.preventDefault()
    let positdiff=e.pageX-prevPageX
    comentContent.scrollLeft=prevScrollLeft-positdiff;
})
comentContent.addEventListener("mousedown",e=>{ 
    isdragstart = true
    prevPageX=e.pageX;
    prevScrollLeft=comentContent.scrollLeft;
})
comentContent.addEventListener("mouseup",e=>{ 
    isdragstart = false ;
})
// end coments 