function exc11(){
    let valorCarro
    let precoFinal
    let qtdParcelas
    let valorParcelas
    valorCarro = Number(prompt(`Informe o valor do carro R$`))
    qtdParcelas = Number(prompt(`Informe a quantidade de parcelas \n 0. A vista \n 6. 6 Parcelas \n 12. 12 Parcelas \n 18. 18 Parcelas \n 24. 24 Parcelas \n 30. 30 Parcelas \n 36. 36 Parcelas \n 42. 42 Parcelas \n 48. 48 Parcelas \n 54. 54 Parcelas \n 60. 60 Parcelas`))
    if (qtdParcelas == 0) {
        precoFinal = valorCarro * 0.8
    //Resp 1
        console.log(`Preço final a vista com 20% desconto é R$ ${precoFinal.toFixed(2)}`)
    }else if (qtdParcelas == 6) {
        precoFinal = valorCarro * 1.03
        valorParcelas = precoFinal / 6
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)} `)
    }else if (qtdParcelas == 12) {
        precoFinal = valorCarro * 1.06
        valorParcelas = precoFinal / 12
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}  `)
    }else if (qtdParcelas == 18) {
        precoFinal = valorCarro * 1.09
        valorParcelas = precoFinal / 18
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}`)
    }else if (qtdParcelas == 24) {
        precoFinal = valorCarro * 1.12
        valorParcelas = precoFinal / 24
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}`)
    }else if (qtdParcelas == 30) {
        precoFinal = valorCarro * 1.15
        valorParcelas = precoFinal / 30
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}`)
    }else if (qtdParcelas == 36) {
        precoFinal = valorCarro * 1.18
        valorParcelas = precoFinal / 36
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}`)
    }else if (qtdParcelas == 42) {
        precoFinal = valorCarro * 1.21
        valorParcelas = precoFinal / 42
        console.log(`O preco final será R$ ${precoFinal.toFixed(2)}, com parcelas de R$ ${valorParcelas.toFixed(2)}`)
    }else if (qtdParcelas == 48) {
        precoFinal = valorCarro * 1.24
        valorParcelas = precoFinal / 48
        console.log(`O preco final será R$ ${precoFinal},`)
    }else if (qtdParcelas == 54) {
        precoFinal = valorCarro * 1.27
        valorParcelas = precoFinal / 54
        console.log(`O preco final será R$ ${precoFinal},`)
    }else if (qtdParcelas == 60) {
        precoFinal = valorCarro * 1.3
        valorParcelas = precoFinal / 60
        console.log(`O preco final será R$ ${precoFinal},`)
    }else {
        alert(`Quantidade de parcelas invalidas!`)
    }
}   