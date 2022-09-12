function calcular() {
    const despesas = 200
    let lucro
    let qtd = 120
    let maiorLucro = 0
    
    for (let preco = 5; preco >= 1; preco = preco - 0.5) {
        lucro = (preco * qtd) - despesas
        qtd+= 26
        if (lucro > maiorLucro) {
            maiorLucro = lucro
        }
        console.log(`Lucro ${lucro} a preco a ${preco} Qtd ${qtd+26}`)
    }

    console.log(`O maior lucro é ${maiorLucro} `)
}