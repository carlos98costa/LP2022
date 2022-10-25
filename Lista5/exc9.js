function exc9() {

    let comissao = 6/100


    dados = {
        salario: Number(prompt(`Informe o salario do funcionario:`)),
        vendas: Number(prompt(`Informe as vendas do funcionario:`)),
    }
    comissao*= dados.vendas
    
    console.log(`Salario fixo é R$ ${dados.salario.toFixed(2)}`)
    console.log(`A comissão será igual a 6% das vendas R$ ${dados.vendas.toFixed(2)} \n
                A comissão será R$ ${comissao.toFixed(2)}`)
    console.log(`O salario final será R$ ${(dados.salario + comissao).toFixed(2)}`)
}