burger = document.querySelector('.burger')
header = document.querySelector('.header')
burgermenu = document.querySelector('.burgermenu')
burger.addEventListener('click', ()=>{
    burgermenu.classList.toggle('v-class-resp')
    header.classList.toggle('h-class-resp')
})