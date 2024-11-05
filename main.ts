/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Oct 2024
 * This program checks how bright the light is
*/

//variables
let strip = robotbit.rgb() 

//setup
basic.showIcon(IconNames.Happy)
basic.clearScreen()

//When it is on
basic.forever(function() {
    let lightLevel = input.lightLevel()
    if (lightLevel <= 51) {
        strip.clear() 
    }
    if (lightLevel > 52) {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (lightLevel > 104) {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red)) 
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (lightLevel > 156) {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red)) 
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (lightLevel > 208) {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red)) 
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    // Add a short delay
    basic.pause(100)
})
