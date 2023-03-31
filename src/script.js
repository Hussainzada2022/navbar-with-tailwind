//variables
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const Navbar = document.querySelector(".nav")
//Eventlisteners
openBtn.addEventListener('click',openNav)
closeBtn.addEventListener("click",closeNav)
//functions
function openNav(){
    Navbar.classList.add("open")
    closeBtn.classList.remove("hidden")
    closeBtn.classList.add("block")
    openBtn.classList.add("hidden")
    openBtn.classList.remove("block")
}
function closeNav(){
    Navbar.classList.remove("open")
    closeBtn.classList.remove("block")
    closeBtn.classList.add("hidden")
    openBtn.classList.remove("hidden")
    openBtn.classList.add("block")
}