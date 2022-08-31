function calcular() {
    let ladosPoligono = parseFloat(document.getElementById("ladosPoligono").value)
    resultado = ladosPoligono * (ladosPoligono - 3) / 2

    document.getElementById("resultado").innerHTML = 
    `O Poligono tem ${resultado} diagonais`
}