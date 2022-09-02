function calcular() {
    let precoProduto = parseFloat(document.getElementById("precoProduto").value)
    if (precoProduto <= 50) {
        resultado = precoProduto * 1.05
    }else if (precoProduto > 50 && precoProduto <= 100) {
        resultado = precoProduto * 1.10
    }else {
        resultado = precoProduto * 1.15
    }

    if (resultado <= 80) {
        classificacao = "Barato"
    }else if (resultado > 80 && resultado <= 100) {
        classificacao = "Normal"
    }else if (resultado > 100 && resultado <= 200) {
        classificacao = "Caro"
    }else {
        classificacao = "Muito caro"
    }

    document.getElementById("resultado").innerHTML = 
    `O novo preço do produto será R$ ${resultado.toFixed(2)}, este produto é classificado como ${classificacao}`
}