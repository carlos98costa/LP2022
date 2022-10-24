function exc8() {
    let vetor = []
    let total = 0
    var maior = 0
    var menor = 0
    var maiorVend
    var menorVend
    for (let i=1; i<11; i++) {
        vendedor = {
            nome: prompt(`Informe o nome do ${i}º vendedor:`),
            vendas: prompt(`Informe as vendas do vendedor`),
            comissao: prompt(`Informe a comissão do vendedor`),
            receber: Number()
        } 
        vendedor.receber = vendedor.vendas * vendedor.comissao / 100
        if (i == 1) {
            maior = Number(vendedor.receber)
            menor = Number(vendedor.receber)
            maiorVend = vendedor.nome
            menorVend = vendedor.nome
        }else{
            console.log(`Não era`)
        }
        let testMaior = vendedor.receber
        if (maior < vendedor.receber) {
            maior = vendedor.receber
            maiorVend = vendedor.nome
        }
        if (menor > vendedor.receber) {
            menor = vendedor.receber
            menorVend = vendedor.nome
        }
        total = total + Number(vendedor.vendas)
        vetor.push(vendedor)
    }
    console.log(vetor)
    console.log(` Total de vendas R$ ${total}`)
    console.log(`O maior vendedor foi ${maiorVend}, vai receber R$ ${maior}`)
    console.log(`O maior vendedor foi ${menorVend}, vai receber R$ ${menor}`)
}