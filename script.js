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
    setPixelsColoring(); // loads ability for pixels inside container to be colored upon hover
}

function colorPixel(pixel, color) {
    pixel.style.backgroundColor = `${color}`;
}

function colorPixelEL(event) {
    colorPixel(event.target, currentColor);
}

function startHover(totalPixels, event) {
    colorPixel(event.target, currentColor);
    totalPixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", colorPixelEL);
    })
    hoverStatus.textContent = "Coloring mode is currently active";
}

function stopHover(totalPixels, event) {
    totalPixels.forEach((pixel) => {
        pixel.removeEventListener("mouseover", colorPixelEL);
    })
    hoverStatus.textContent = "Coloring mode disabled";
}

function setPixelsColoring() {
    totalPixels = document.querySelectorAll(".pixel");
    totalPixels.forEach((pixel) => { // pixels changing color on hover start only when the mouse gets dbl clicked
        pixel.addEventListener("click", (e) => {
            ongoingHover = !ongoingHover;
            (ongoingHover) ? startHover(totalPixels, e) : stopHover(totalPixels, e);
        })
    });
}

function clearContainer(container) {
    while (container.firstChild) { // loops until theres no child element
        container.removeChild(container.firstChild);
    }
}

function modifySize() {
    clearContainer(container); // clears prev. container
    sliderPixels.textContent = `${slider.value} x ${slider.value}`;
    setDimensions(slider.value); // creates new container with set dimensions
}

// control variables

let ongoingHover = false;
let hoverStatus = document.querySelector("#hoverStatus");

// container variables
const container = document.querySelector("#container");
let totalPixels;

// slider variables
let slider = document.querySelector("#slider");
let sliderPixels = document.querySelector("#slider-dimension");
const resetBtn = document.querySelector("#reset");

let rgbPicker = document.querySelector("#rgb-picker");
let currentColor = "#000000";
rgbPicker.value = "#000000";


slider.value = 16;
slider.min = 16;
slider.max = 64;
slider.step = 16;

modifySize(); // runs once to load first grid
sliderPixels.textContent = `${slider.value} x ${slider.value}`; // runs once to load first grid size

slider.addEventListener("click", () => {
    modifySize();
});

resetBtn.addEventListener("click", () => {
    rgbPicker.value = "#000000";
    currentColor = "#000000";
    clearContainer(container); // removes all container pixels (including white ones)
    modifySize(); // loads container again
})

rgbPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
})
