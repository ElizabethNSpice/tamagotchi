input.onButtonPressed(Button.A, function () {
    hunger += 5
})
let hunger = 40
basic.forever(function () {
    if (hunger >= 35) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            # # # # #
            `)
    } else if (hunger < 35 && hunger >= 20) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (hunger < 20 && hunger > 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            `)
    } else if (hunger == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    hunger += -1
    basic.pause(2000)
})
