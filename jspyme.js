const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function nextAction() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prevAction() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function() {
    nextAction();
});

btnLeft.addEventListener("click", function() {
    prevAction();
});