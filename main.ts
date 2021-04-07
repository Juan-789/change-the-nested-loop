input.onGesture(Gesture.Shake, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(100)
        }
    }
})
