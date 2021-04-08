let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    while (y <= 0) {
        while (x <= 0) {
            for (let index = 0; index < 5; index++) {
                led.plot(x, y)
                basic.pause(100)
                x += 1
            }
        }
        y += 1
        x = 0
    }
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(100)
        }
    }
})
