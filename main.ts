input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A - A G A B B - ", 355)
    music.playMelody("A B C5 C5 - B C5 B ", 355)
    music.playMelody("G - A - - - - - ", 355)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showString("Diamond")
