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
const navCloseIcon = document.querySelector('.close')
const navDropdowns = document.querySelectorAll('.navside-dropdown')

navBgDark.addEventListener('click', ()=> {
    navSideBar.style.width = "0px"
})

navCloseIcon.addEventListener('click', ()=> {
    navSideBar.style.width = "0px"
})

navMenuIcon.addEventListener('click', ()=> {
    navSideBar.style.width = "100%"
})

navDropdowns.forEach(navDropdown => {
    navDropdown.addEventListener('mouseover', ()=>{
        Array.from(navDropdown.children).forEach(dropdownItem => {
            if(dropdownItem.classList.contains("navside-dropdown-item")){
                dropdownItem.style.display = "flex";
            }
        })
    })
})

navDropdowns.forEach(navDropdown => {
    navDropdown.addEventListener('mouseleave', ()=>{
        Array.from(navDropdown.children).forEach(dropdownItem => {
            if(dropdownItem.classList.contains("navside-dropdown-item")){
                dropdownItem.style.display = "none";
            }
        })
    })
})