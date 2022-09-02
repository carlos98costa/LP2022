function calcular() {
    let precoProduto = parseFloat(document.getElementById("precoProduto").value)
    let codigo = parseFloat(document.getElementById("codigo").value)
    
    if (precoProduto <= 30) {
        desconto = precoProduto * 0
        resultado = precoProduto - desconto
    }else if (precoProduto > 30 && precoProduto <= 100) {
        desconto = precoProduto * 0.1
        resultado = precoProduto - desconto
    }else {
        desconto = precoProduto * 0.15
        resultado = precoProduto - desconto
    }

    document.getElementById("resultado").innerHTML = 
    `O produto do codigo ${codigo} recebeu um desconto de R$ ${desconto.toFixed(2)}.<br>
    Seu novo preço será R$ ${resultado.toFixed(2)}`

}