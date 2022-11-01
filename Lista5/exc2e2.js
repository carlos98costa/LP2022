function exc2e2() {
    
    function declarar() {
        let vetor = []
        let somaSalarios = 0
        let somaNumFilhos = 0
        let maiorSalario = 0
        let somaMulheres = 0
        let countEntrevistados = 0
    }

    function segundoPasso() {
        declarar()
        for (i = 1; i < 3; i++) {   //SE FOR TESTAR ALTERE O NUMERO DE ENTREVISTADOS AQUI<<<<<<<< i<21
            dados = {
                salario: Number(prompt(`Informe o salario da ${i}ª pessoa:`)),
                idade: Number(prompt(`Informe a idade da ${i}ª pessoa:`)),
                numFilhos: Number(prompt(`Informe o numero de filhos da ${i}ª pessoa:`)),
                sexo: (prompt(`Informe o sexo da ${i}ª pessoa:\n M. Masculino \n F. Feminino `)),
            }
            somaSalarios = somaSalarios + dados.salario
            somaNumFilhos = somaNumFilhos + dados.numFilhos
            if (i == 1) {
                maiorSalario = dados.salario
            }
            if (maiorSalario < dados.salario) {
                maiorSalario = dados.salario
            }
            if (dados.sexo.toUpperCase() == 'F') {
                if (dados.salario > 1000) {
                    somaMulheres++
                }
            }
            vetor.push(dados)
            countEntrevistados++
            mostrar()
        }
    
    }

    function mostrar() {
        console.log(`A media de salario da população é R$ ${(somaSalarios / countEntrevistados).toFixed(2)}`)
        console.log(`A media do n° de filhos da população é ${(somaNumFilhos / countEntrevistados).toFixed(0)}`)
        console.log(`O maior salario é R$ ${(maiorSalario).toFixed(2)}`)
        console.log(`O percentual de mulheres com salario maior que R$1000,00 é ${(somaMulheres / countEntrevistados)*100}%`)
    }
    segundoPasso()
}