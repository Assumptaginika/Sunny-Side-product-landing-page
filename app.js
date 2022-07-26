const hamburger = document.querySelector('.hamburger');

const priNav  = document.querySelector('.priNav');

let show = false;



hamburger.addEventListener('click', () => {

    console.log('click')

    if(!show) {
        priNav.style.display = 'block'
        show = true
    } else {
        priNav.style.display = 'none'
        show = false
    }
    hamburger.classList.toggle('active');
    navLink.classList.toggle('active');
})

document.querySelectorAll("nav-link"). forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav-link.classList.remove("active");
}))