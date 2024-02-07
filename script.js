//for mouse cursor
var circle=document.querySelector("#circle")
window.addEventListener("mousemove",function (dets) {
    // console.log(dets.clientX,dets.clientY)
    circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
})

var hampage=document.querySelector(".ham-page")
        function myFunction(x) {
            x.classList.toggle("change");
            hampage.classList.toggle("change-ham");          
        }

//for dark mode
var main=document.body.querySelector(".main")
var changemode=document.querySelector(".mode")

changemode.onclick=function () {
    main.classList.toggle("dark-mode")
    // console.log("changing color")
}

var  roles=document.querySelector(".changing-roles")
roles.addEventListener("mousemove",function (dets) {

    //without gsap
   circle.style.width="13vw"
   circle.style.height="13vw"
   circle.style.margin="-6vw"
   circle.style.opacity=".2"
   circle.style.transition=".2s"
   roles.style.color="black"


   gsap.to(".changing-roles span",{
    color:"red",
    y:"-5vw",
    duration:.3
   })
})
roles.addEventListener("mouseleave",function (dets) {

    //without gsap
    circle.style.width="1vw"
    circle.style.height="1vw"
    circle.style.margin="-0.7vw"
    circle.style.opacity="1"
    roles.style.color="white"
    circle.style.transition=".1s"

    gsap.to(".changing-roles span",{
        y:"0vw",
        color:"#ffff"
       })
})



