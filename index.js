const scorllbook = () => {
    window.scrollTo(0, 790);
}
const scorllpakages = () => {
    window.scrollTo(0, 1900);
}
const scorllservice = () => {
    window.scrollTo(0, 3370);
}

const scorllGallery = () => {
    window.scrollTo(0, 4400);
}

const scorllcontact = () => {
    window.scrollTo(0, 5680);
}


const searchEvent = function search() {
    document.getElementById('Search-block').classList.toggle('display-search')
}



let btn = document.getElementById('btn');
let rotate = document.querySelector('.Navbar')
let menubtn = document.getElementById('menu')
let closebtn = document.getElementById('close')
console.log(closebtn)
function rotateblock() {

    if (closebtn.style.display != 'block') {
        menubtn.style.display = 'none'
        closebtn.style.display = 'block'

    }
    else if (menubtn.style.display != 'block') {
        menubtn.style.display = 'block'
        closebtn.style.display = 'none'

    }
    rotate.classList.toggle('Display-block')


}





const slidevideo = (a) => {
    let silder = document.querySelectorAll('.silder')

    for (let all of silder) {
        all.style.display = 'none'
    }
    silder[a].style.display = 'block'
}