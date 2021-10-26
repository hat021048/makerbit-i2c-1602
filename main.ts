basic.showIcon(IconNames.Heart)
makerbit.connectLcd(39)
dht11_dht22.selectTempType(tempType.celsius)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P16,
    false,
    true,
    true
    )
    makerbit.showStringOnLcd1602("Temp:", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("" + (Math.round(dht11_dht22.readData(dataType.temperature)) + (dht11_dht22.readData(dataType.temperature) - Math.round(dht11_dht22.readData(dataType.temperature))) * 10), makerbit.position1602(LcdPosition1602.Pos7), 16)
    makerbit.showStringOnLcd1602("Fukt:", makerbit.position1602(LcdPosition1602.Pos17), 16)
    makerbit.showStringOnLcd1602("" + (dht11_dht22.readData(dataType.humidity)), makerbit.position1602(LcdPosition1602.Pos23), 16)
})
