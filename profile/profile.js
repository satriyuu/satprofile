var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open")
})

var typed=new Typed(".input",{
    strings:["a Frontend Developer", "a Hoopers", "a Web Developer"],
    typedSpeed:70,
    backSpeed:50,
    loop:true
})