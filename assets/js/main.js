window.addEventListener("scroll", () => {
    const menu = document.querySelector("header");
    menu.classList.toggle("rolagem", window.scrollY > 0)
})

const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")

nav.addEventListener("click", () => {
    menu.classList.toggle('ativo')
})

const filtro = document.querySelectorAll(".organizador div")
const grid = document.querySelector(".grid")
const flex = document.querySelector(".flex")
const posts = document.querySelector(".posts")

filtro.forEach((event) => {
    event.addEventListener("click", () => {
        grid.classList.remove('ativo')
        flex.classList.remove('ativo')

        event.classList.add('ativo')
        if (event.className == 'flex ativo') {
            console.log('flex ativo');
            posts.classList.add("ativo")
        }

        if (event.className == 'grid ativo') {
            console.log('flex ativo');
            posts.classList.remove("ativo")
        }
    })
})

