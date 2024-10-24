/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program checks how bright the light is
*/

let lightLevel = 0
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)


basic.forever(function() {

lightLevel = input.lightLevel()

    // Turn off all NeoPixels
    strip.showColor(neopixel.colors(NeoPixelColors.Black))

    if (lightLevel > 51) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 104) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 156) {
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 208) {
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
})
