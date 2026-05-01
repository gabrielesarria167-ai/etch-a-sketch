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
}

function clearContainer(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function modifySize() {
    clearContainer(container);
    sliderPixels.textContent = `${slider.value}`;
    setDimensions(slider.value);
}

const container = document.querySelector("#container");

let slider = document.querySelector("#slider");
let sliderPixels = document.querySelector("#slider-dimension");

slider.value = 16;
slider.min = 16;
slider.max = 64;
slider.step = 16;

modifySize(container); // runs once to load first grid
sliderPixels.textContent = `${slider.value}`; // runs once to load first grid size

slider.addEventListener("click", () => {
    modifySize();
});

