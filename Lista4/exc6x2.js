function exc6x2() {
    var totalVendas = []
    var total_vendas1 = 0
    var porcentagem = []
    var nome = []
    var comissaoVet = []
    var maior = 0
    var menor = 0
    var maiorVend
    var menorVend

    for (let i = 0; i < 3; i++) {
        nome.push(String(prompt(`Informe o nome do ${i + 1}° vendedor: `)))
        totalVendas.push(Number(prompt(`Informe o total de vendas do ${i + 1}° vendedor: `)))
        porcentagem.push(Number(prompt(`Informe a % da comissão do ${i + 1}° vendedor: `)))
    }

    for (let i = 0; i < 3; i++) {
        comissao = (totalVendas[i] * porcentagem[i] / 100)
        comissaoVet.push(comissao)

        console.log(`${nome[i]},"R$", ${comissaoVet[i]}`)
    }

    maior = comissaoVet[1]
    menor = comissaoVet[1]
    maiorVend = nome[1]
    menorVend = nome[1]

    for (let i = 0; i < 3; i++) {
        if (comissaoVet[i] > maior) {
            maior = comissaoVet[i]
            maiorVend = nome[i]
        }
        if (comissaoVet[i] < menor) {
            menor = comissaoVet[i]
            menorVend = nome[i]
        }
    }

    console.log(`Nome maior vendedor ${maiorVend} comissão R$ ${maior}`)
    console.log(`Nome menor vendedor ${menorVend} comissão R$ ${menor}`)


    for (let i = 0; i < 3; i++) {
        total_vendas1 = total_vendas1 + totalVendas[i]
    }
    console.log(`O total de vendas de todos os vendedores foi R$ ${total_vendas1.toFixed(2)}`)
}