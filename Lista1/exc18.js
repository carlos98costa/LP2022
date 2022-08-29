function calcular() {
    let gCelcius = parseFloat(document.getElementById("gCelcius").value)
    let gFahrenheit = gCelcius * 1.8 + 32
    document.getElementById("gFahrenheit").innerHTML = 
    `A temperatura ${gCelcius}°C em Fahrenheit é ${gFahrenheit}°F `
}