let form_1 = document.querySelector(".form_1");
let form_2 = document.querySelector(".form_2");
let form_3 = document.querySelector(".form_3");

let form_1_btns = document.querySelector(".form_1_btns");
let form_2_btns = document.querySelector(".form_2_btns");
let form_3_btns = document.querySelector(".form_3_btns");

let form_1_next_btn = document.querySelector(".form_1_btns .btn_next");

let form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
let form_2_next_btn = document.querySelector(".form_2_btns .btn_next");

let form_3_back_btn = document.querySelector(".form_3_btns .btn_back");


let btn_done = document.querySelector(".btn_done");
let modal_wrapper = document.querySelector(".modal_wrapper");
let shadow = document.querySelector(".shadow");


let form_2_progressbar = document.querySelector(".form-2-progressbar");
let form_3_progressbar = document.querySelector(".form-3-progressbar");

form_1_next_btn.addEventListener("click", function(){
    form_1.style.display="none";
    form_2.style.display="block";

    form_1_btns.style.display="none";
    form_2_btns.style.display="flex";

    form_2_progressbar.classList.add("active");
})

form_2_next_btn.addEventListener("click", function(){
    form_2.style.display="none";
    form_3.style.display="block";

    form_2_btns.style.display="none";
    form_3_btns.style.display="flex";

    form_3_progressbar.classList.add("active");
})

form_2_back_btn.addEventListener("click", function(){
    form_2.style.display="none";
    form_1.style.display="block";

    form_2_btns.style.display="none";
    form_1_btns.style.display="flex";

    form_2_progressbar.classList.remove("active");
})

form_3_back_btn.addEventListener("click", function(){
    form_3.style.display="none";
    form_2.style.display="block";

    form_3_btns.style.display="none";
    form_2_btns.style.display="flex";

    form_3_progressbar.classList.remove("active");
})


btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
})