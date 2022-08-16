function calcular() {
    let num1 = document.getElementById("num1").value
    let resultado = num1 * 0.9
    document.getElementById("resultado").innerHTML = 
    `O preço do produto com 10% de desconto é R$ ${resultado}`
}