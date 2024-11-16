const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(el => {
    el.addEventListener('mouseover', ()=>{
        el.children[1].style.display = "flex"
    })
})

navLinks.forEach(el => {
    el.addEventListener('mouseleave', ()=>{
        el.children[1].style.display = "none"
    })
})

const navSideBar = document.querySelector('.navside-bar');
const navBgDark = document.querySelector('.bg-dark')
const navMenuIcon = document.querySelector('.nav-menu-icon img')
const closeIcon = document.querySelector('.close')

navBgDark.addEventListener('click', ()=> {
    navSideBar.style.width = "0px"
})

closeIcon.addEventListener('click', ()=> {
    navSideBar.style.width = "0px"
})

navMenuIcon.addEventListener('click', ()=> {
    navSideBar.style.width = "100%"
})