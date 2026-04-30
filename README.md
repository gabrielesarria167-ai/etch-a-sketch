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