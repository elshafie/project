let section = document.getElementById("section");

let toggle = document.getElementById("toggle");

function tog(){
    section.classList.toggle("active");
    toggle.classList.toggle("active");
}


const menuToggle = document.querySelector('.toggle');

const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('active');
    showcase.classList.toggle("active");
})

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle("active");
})