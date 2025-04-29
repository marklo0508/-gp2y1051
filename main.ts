basic.showIcon(IconNames.Heart)
GP2Y1051.setSerial(SerialPin.P14)
basic.forever(function () {
    basic.showNumber(GP2Y1051.getData())
    basic.pause(1000)
})
