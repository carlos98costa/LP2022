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
}