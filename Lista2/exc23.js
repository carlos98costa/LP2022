function calcular() {
    let codigo = parseInt(document.getElementById("codigo").value)
    let qtd = parseInt(document.getElementById("qtd").value)



    if (codigo >= 1 && codigo <= 10) {
        precoUnit = 10
    }else if (codigo >= 11 && codigo <= 20) {
        precoUnit = 15
    }else if (codigo >= 21 && codigo <= 30) {
        precoUnit = 20
    }else if (codigo >= 31 && codigo <= 40) {
        precoUnit = 30
    }else {
        precoUnit = "Codigo invalido!"
    }

    precoTotal = precoUnit * qtd

    if (precoTotal <= 250) {
        desconto = precoTotal * 0.05
    }else if (precoTotal > 250 && precoTotal <= 500) {
        desconto = precoTotal * 0.10
    }else {
        desconto = precoTotal * 0.15
    }

    precoComDesconto = precoTotal - desconto

    if (codigo > 0 && qtd > 0 ) {
        document.getElementById("resultado").innerHTML = 
    `O preço por unidade será R$ ${precoUnit} <br>
    O preço total será R$ ${precoTotal} <br>
    O desconto será de R$ ${desconto} <br>
    O preço final com desconto será R$ ${precoComDesconto}`
    }else {
        document.getElementById("resultado").innerHTML = 
        `Erro ao informar valores acima!`
    }

}