function exc4() {

    let vetor = []
    let somaRenda = 0
    let maiorIdade = 0
    let menorIdade = 0
    let somaMulheres = 0
    let countEntrevistados = 0

    for (i = 1; i < 21; i++) {   //SE FOR TESTAR ALTERE O NUMERO DE ENTREVISTADOS AQUI<<<<<<<< i<21
        dados = {
            idade: Number(prompt(`Informe a idade da ${i}ª pessoa:`)),
            sexo: (prompt(`Informe o sexo da ${i}ª pessoa:\n M. Masculino \n F. Feminino `)),
            renda: Number(prompt(`Informe a renda da ${i}ª pessoa:`)),
            numFilhos: Number(prompt(`Informe o numero de filhos da ${i}ª pessoa:`))
        }
        somaRenda = somaRenda + dados.renda
        if (i == 1) {
            maiorIdade = dados.idade
            menorIdade = dados.idade
        }
        if (maiorIdade < dados.idade) {
            maiorIdade = dados.idade
        }
        if (menorIdade > dados.idade) {
            menorIdade = dados.idade
        }
        if (dados.sexo.toUpperCase() == 'F' && dados.numFilhos > 2 && dados.renda < 600) {
            somaMulheres++
        }
        vetor.push(dados)
        countEntrevistados++
    }

    console.log(`A media da renda familiar é R$ ${(somaRenda / countEntrevistados).toFixed(2)}`)
    console.log(`A maior idade é ${maiorIdade}`)
    console.log(`A menor idade é ${menorIdade}`)
    console.log(`A quantidade de mulheres com mais de 2 filhos e renda menor que R$600,00 é ${somaMulheres}`)
}