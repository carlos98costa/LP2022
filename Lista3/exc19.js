function exc19() {
    let acao, precoCompra, precoVenda
    let count1 = 0
    let count2 = 0
    countLucro = 0

    do {
        acao = String(prompt(`Informe a ação: \n F. Para finalizar o programa! `)).toUpperCase()
        if (acao != "F"){
            precoCompra = Number(prompt(`Informe o preço de compra da ação: `))
            precoVenda = Number(prompt(`Informe o preço de venda da ação:`))
        }else{
            alert(`O programa foi finalizado!`)
        }
        var lucroAcao = precoVenda - precoCompra
        if (acao != "F") {
            console.log(`Ação : ${acao}`)
            console.log(`Preço compra R$ ${precoCompra}`)
            console.log(`Preço venda R$ ${precoVenda}`)
            console.log(`O lucro é R$ ${lucroAcao}`)
        }
        countLucro = countLucro + lucroAcao
        if(lucroAcao > 1000) {
            count1++
        }else if (lucroAcao < 200) {
            count2++
        }
    } while (acao != "F");
    console.log(`Quantidade de ações com lucro maior que R$1000 é ${count1}`)
    console.log(`Quantidade de ações com lucro menor que R$200 é ${count2}`)
    console.log(`O lucro total da empresa é R$ ${countLucro.toFixed(2)}`)
}