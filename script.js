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

function colorPixel(event) {
    event.target.style.backgroundColor = currentColor;
}

function toggleHover(event) {
    ongoingHover = !ongoingHover;
    totalPixels.forEach((pixel) => {
        if (ongoingHover) {
            colorPixel(event);
            pixel.addEventListener("mouseover", colorPixel);
            hoverStatus.textContent = "Coloring mode is currently active";
        }
        else{
            pixel.removeEventListener("mouseover", colorPixel);
            hoverStatus.textContent = "Coloring mode is currently disabled"
        }
    })
}

function erasePixel(event) {
    event.target.style.backgroundColor = "white";
}

function toggleEraser(event) {
    ongoingEraser = !ongoingEraser;
    event.preventDefault();
    totalPixels.forEach((pixel) => {
        pixel.removeEventListener("click", toggleHover);
        if (ongoingEraser) {
            erasePixel(event);
            pixel.addEventListener("mouseover", erasePixel);
            hoverStatus.textContent = "Eraser Mode On";
        }
        else {
            pixel.removeEventListener("mouseover", erasePixel);
            hoverStatus.textContent = "Eraser Mode Off";
            pixel.addEventListener("click", toggleHover);
        }
    })
}

function setPixelsColoring() {
    totalPixels = document.querySelectorAll(".pixel");
    totalPixels.forEach((pixel) => { // pixels changing color on hover start only when the mouse gets clicked
        pixel.addEventListener("click", toggleHover);
        pixel.addEventListener("contextmenu", toggleEraser);
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
let ongoingEraser = false;
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
