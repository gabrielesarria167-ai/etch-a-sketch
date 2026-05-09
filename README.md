# JAVASCRIPT: ETCH - A - SKETCH

>[!NOTE]
>This project is **not** final, as continuous changes will occur over time. For more info, [contact me](https://github.com/gabrielesarria167-ai).

In this project I will work on to build the classic time burner: ***etch-a-sketch***.

The toy essentially is made of a stylus and a screen to draw in to create cute art.

This first version will simply have a big grid made of pixels, and whenever the user hovers over one of these pixels, it turns black, simulating the stylus hovering.

I will also add a button to reset the screen, making it so the user can continuously make new stuff.

---

## PLANNING

First of all, in the html file I will create an empty _div_ container, that will hold all of our pixels.

Since hardcoding all pixels is very time consuming, we can use javascript to do it for us!

For this first version, the first thing that comes into my mind is a *for()* cycle, that creates containers for the pixels until it reaches the total pixel size, given by:

$$
totalPixels = (xAxisPixels)^2
$$

```js
    for(cycle that stops when it reaches totalPixels){
        creates a div
    }
```

This does create the exact amount of pixels we need, but they will all be splattered up together in the same axis, so I have to find a way to, when the cycle has created enough divs for a row, go down a line and start again.

A way to work on this would be to first create *yAxisPixels* containers, and then, by using flexbox's ***flex-direction: column***, push them all vertically.

Then, inside every one of these containers, insert the cycle I had written before.

To do this, I can insert another *for()* cycle inside my original one.

Now I want to make it so the user can select the amount of pixels for the board, instead of only having a fixed size.

For this, I will create a slider, and then everytime its value gets changed, I insert a new board with the updated values.

After the slider has been made, its time for the pixels to actually change on hover.
I made this by adding an event listener to all pixels every time a grid loads, and when the users cursor hovers on the pixel, it turns black.

I also made it so you have to first click to start coloring, to avoid messy situations, and I added a reset button that deletes all pixels in the grid, and then reloads the grid with only white ones.

Next thing in my bucket list is to add a rgb picker, to select the color pixels on hover: I will add an event listener that reads the value of the rgb selector every time it changes, and save it as the color to use.

To stop the hovering effect, Im thinking to impplement a feature where when the user double clicks a pixel it starts/stops.

```js
let ongoing = false;

function setPixelsColoring() {
    totalPixels = document.querySelectorAll(".pixel");
    totalPixels.forEach((pixel) => { // pixels changing color on hover start only when the mouse gets clicked
        pixel.addEventListener("dblclick", () => {
            ongoing = !ongoing // toggles between true/false
            if(ongoing){
            colorPixel(pixel, currentColor); // calls color fn once for the first btn click to color the pixel
            totalPixels.forEach((pixel) => { // updates event listener for every dimension change
                pixel.addEventListener("mouseover", () => colorPixel(pixel, currentColor));
            })
            }
            else{
                pixel.removeEventListener("mouseover", () => colorPixel(pixel, currentColor));
            }
        })
    })
}

function colorPixel(pixel, color) {
    pixel.style.backgroundColor = `${color}`;
}
```