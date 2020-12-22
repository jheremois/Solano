const menu = document.getElementById('menu')
const options = document.getElementById('options')


const open_menu = ()=>{
    if(options.style.height !== '210px'){
        options.style.height = '210px'
    }else{
        options.style.height = '0px'
    }
}

menu.addEventListener('click', ()=> open_menu())