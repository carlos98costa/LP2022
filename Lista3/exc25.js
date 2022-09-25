function exc25() {
    let opcao, tipoInvestimento, valorInvestido
    let rendimentoMensal = 0
    let totalInvestido = 0
    let rendimentoTotal = 0

    do {
        codigo = Number(prompt(`Informe o codigo do cliente(numeros) \n Para finalizar o programa informe um valor igual ou menor que 0`))
        if (codigo > 0) {
            tipoInvestimento = Number(prompt(`Informe o tipo de investimento \n 1. Poupança \n 2. Poupança Plus \n 3. Fundos de renda fixa`))
            valorInvestido = Number(prompt(`Informe o valor do investimento R$ `))
            totalInvestido = totalInvestido + valorInvestido
            if(tipoInvestimento == 1) {
                console.log(`O codigo do cliente é ${codigo}`)
                rendimentoMensal = valorInvestido * 0.015
                rendimentoTotal = rendimentoTotal + rendimentoMensal
                console.log(`O rendimento mensal será R$ ${rendimentoMensal.toFixed(2)}`)
            }else if(tipoInvestimento == 2) {
                console.log(`O codigo do cliente é ${codigo}`)
                rendimentoMensal = valorInvestido * 0.020
                rendimentoTotal = rendimentoTotal + rendimentoMensal
                console.log(`O rendimento mensal será R$ ${rendimentoMensal.toFixed(2)}`)
            }else if(tipoInvestimento == 3) {
                console.log(`O codigo do cliente é ${codigo}`)
                rendimentoMensal = valorInvestido * 0.04
                rendimentoTotal = rendimentoTotal + rendimentoMensal
                console.log(`O rendimento mensal será R$ ${rendimentoMensal.toFixed(2)}`)
            }
        }
    } while (codigo > 0);
    console.log(`O valor total investido foi R$ ${totalInvestido.toFixed(2)}`)
    console.log(`O total de juros pagos por mês é R$ ${rendimentoTotal.toFixed(2)}`)
}
    
