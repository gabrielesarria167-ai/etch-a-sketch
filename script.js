// example with 16 * 16 pixels

const container = document.querySelector("#container");

for(let i = 0; i<16; i++){
    let xRow = document.createElement("div");
    xRow.classList.add("row");
    container.appendChild(xRow);

    for(let j = 0; j<16; j++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        xRow.appendChild(pixel);
    }
}

