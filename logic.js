let menu = document.querySelector(".fixed-menu")
let mobileMenu = document.querySelector('.mobile-menu')
let body = document.querySelector('body')

menu.addEventListener("click", function(event){
    
    let clickTarget = event.target
    let activeBtn = document.querySelector(".active")
    if (clickTarget.classList.contains("nav-link") ){
        if (!mobileMenu.classList.contains('hide')){
            document.querySelectorAll(".icon").forEach(function(item){
                item.classList.toggle('hide-btn')
            })
        }
        clickTarget.classList.add("active")
        activeBtn.classList.remove("active")
        if (!mobileMenu.classList.contains('hide')){
            mobileMenu.classList.add('hide')
            
        }
    }
    if (!body.classList.contains('off-scroll') && !mobileMenu.classList.contains('hide')){
        body.classList.add('off-scroll')
    }
    else{
        body.classList.remove('off-scroll')
    }
})

let classLink = '.main-link'

window.onscroll = function(){
    let h = document.documentElement.clientHeight
    if (window.scrollY >= h*4) {
        classLink = '.comments-link'
    }
    else if (window.scrollY >= h*3) {
        classLink = '.projects-link'
    }
    else if (window.scrollY >= h*2) {
        classLink = '.skills-link'
    }
    else if (window.scrollY >= h) {
        classLink = '.about-link'
    }
    else{
        classLink = '.main-link'
    }


let activeBtn = document.querySelector('.active')
let newActiveBtn = document.querySelector(classLink)
if (!newActiveBtn.classList.contains('active')){
    newActiveBtn.classList.add('active')
    activeBtn.classList.remove('active')
}}
document.querySelector('.mobile-button').addEventListener('click', function(event){
    document.querySelector('.mobile-menu').classList.toggle('hide')
    document.querySelectorAll(".icon").forEach(function(item){
        item.classList.toggle('hide-btn')
    })
})
document.querySelector('mob')