function setDimensions(value) {
    for (let i = 0; i < value; i++) {
        let xRow = document.createElement("div");
        xRow.classList.add("row");
        container.appendChild(xRow);

        for (let j = 0; j < value; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            xRow.appendChild(pixel);
        }
    }
    totalPixels = document.querySelectorAll(".pixel");

    totalPixels.forEach((pixel) => { // pixels changing color on hover start only when the mouse gets clicked
        pixel.addEventListener("click", () => {
            colorPixel(pixel); // calls color fn once for the first btn click to color the pixel
            totalPixels.forEach((pixel) => { // updates event listener for every dimension change
                pixel.addEventListener("mouseover", () => {
                    colorPixel(pixel);
                })
            })
        })
    })
}

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function modifySize() {
    clearContainer(container);
    sliderPixels.textContent = `${slider.value}`;
    setDimensions(slider.value);
}

function colorPixel(pixel) {
    pixel.style.backgroundColor = "black";
}

const container = document.querySelector("#container");

let slider = document.querySelector("#slider");
let sliderPixels = document.querySelector("#slider-dimension");
let totalPixels;

slider.value = 16;
slider.min = 16;
slider.max = 64;
slider.step = 16;

modifySize(container); // runs once to load first grid
sliderPixels.textContent = `${slider.value}`; // runs once to load first grid size

slider.addEventListener("click", () => {
    modifySize();
});
