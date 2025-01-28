var typed = new Typed(".text", {
    strings: ["Full Stack Developer ." , "ML Engineer ." , "Data Analyst ."],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
})

function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-icon').classList.remove('active');
        document.querySelector('.navbar').classList.remove('active');
    });
});