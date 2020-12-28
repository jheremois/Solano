const menu = document.getElementById('menu')
const options = document.getElementById('options')

const open_menu = ()=>{
    if(options.style.height !== '260px'){
        options.style.height = '260px'
    }else{
        options.style.height = '0px'
    }
}

const option = document.querySelectorAll('.option')

for (let i = 0; i < option.length; i++) {

    option[i].addEventListener('click', ()=> {

        if(options.style.height === '260px')
            options.style.height = '0px'

    })

}

menu.addEventListener('click', ()=> open_menu())

//  Header position
const header = document.getElementById('header')
const title = document.getElementById('title')


document.addEventListener('scroll', ()=>{

    // if(window.outerWidth < 600){

        if (title.getBoundingClientRect().top < -6) {

            header.style.boxShadow = '0px 3px 9px 0px #09367ebd'

        }
        else if (title.getBoundingClientRect().top > -3) {

            header.style.boxShadow = 'none'

        }

    // }

})

const map = L.map('map').setView([18.4321968, -68.9723359], 16)


let icon = L.icon({

    iconUrl: '../images/loca.png',

    iconSize: [35, 45] 

})


L.tileLayer('http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map)

L.marker([18.4321968, -68.9723359], {icon: icon})
    .addTo(map)
