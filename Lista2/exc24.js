function calcular() {
    let preco = parseFloat(document.getElementById("preco").value)
    let categoria = parseInt(document.getElementById("categoria").value)
    let situacao = parseInt(document.getElementById("situacao").value)

    if (preco <= 25) {
        if (categoria == 1) {
            valorAumento = preco * 0.05
        }else if (categoria == 2) {
            valorAumento = preco * 0.08
        }else if (categoria == 3) {
            valorAumento = preco * 0.1
        }
    }else if (preco > 25) {
        if (categoria == 1) {
            valorAumento = preco * 0.12
        }else if (categoria == 2) {
            valorAumento = preco * 0.15
        }else if (categoria == 3) {
            valorAumento = preco * 0.18
        }
    }

    if (categoria == 2 || situacao == 1) {
        imposto = preco * 0.05
    }else {
        imposto = preco * 0.08
    }
    
    novoPreco = preco + valorAumento - imposto

    if (novoPreco <= 50) {
        classificacao = "Barato"
    }else if (novoPreco > 50 && novoPreco < 120) {
        classificacao = "Normal"
    }else {
        classificacao = "Caro"
    }

    document.getElementById("resultado").innerHTML = 
    `O valor do aumento será R$ ${valorAumento.toFixed(2)} <br>
    O valor do imposto será R$ ${imposto.toFixed(2)} <br>
    O novo preço será R$ ${novoPreco.toFixed(2)} <br>
    Esse produto é classificado como ${classificacao}`
}
