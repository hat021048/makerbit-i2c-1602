led.plot(2, 2)
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
    makerbit.showStringOnLcd1602("Temp:", makerbit.position1602(LcdPosition1602.Pos1), 5)
    makerbit.showStringOnLcd1602("" + (Math.round(dht11_dht22.readData(dataType.temperature)) + (dht11_dht22.readData(dataType.temperature) - Math.round(dht11_dht22.readData(dataType.temperature))) * 10), makerbit.position1602(LcdPosition1602.Pos7), 4)
    makerbit.showStringOnLcd1602("GrC", makerbit.position1602(LcdPosition1602.Pos12), 3)
    makerbit.showStringOnLcd1602("Fukt:", makerbit.position1602(LcdPosition1602.Pos17), 5)
    makerbit.showStringOnLcd1602("" + (dht11_dht22.readData(dataType.humidity)), makerbit.position1602(LcdPosition1602.Pos23), 2)
    makerbit.showStringOnLcd1602("%", makerbit.position1602(LcdPosition1602.Pos26), 1)
})
