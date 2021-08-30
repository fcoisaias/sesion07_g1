input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Pitchfork)
})
basic.showString("¡ Hola !")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
