function exc3() {
    let pessoas = []
    let somaIdades1 = 0
    let countM = 0
    let count1 = 0
    let maiorIdade = 0
    let count2 = 0
    let countT = 0
    for (i = 1; i<6; i++) {
        dados = {
            sexo: (prompt(`Informe o sexo da ${i}ª pessoa:\n M. Masculino \n F. Feminino `)),
            altura: Number(prompt(`Informe a altura da ${i}ª pessoa:`)),
            idade: Number(prompt(`Informe a idade da ${i}ª pessoa:`)),
            olhos: (prompt(`Informe a cor dos olhos da ${i}ª pessoa:\n A. Azuis \n V. Verdes \n C. Castanhos `))
        }
        
        pessoas.push(dados)
        if(dados.olhos.toLowerCase() == 'c' && dados.altura > 1.6) {
            count1++
            somaIdades1 = somaIdades1 + dados.idade
        }
        if (i == 1) {
            maiorIdade = dados.idade
        }
        if (maiorIdade < dados.idade) {
            maiorIdade = dados.idade
        }
        if (dados.sexo.toLowerCase() == 'f' && dados.idade >= 20 && dados.idade <= 45) {
            count2++
        }
        if (dados.sexo.toLowerCase() == 'f' && dados.olhos == 'v' && dados.altura < 1.7) {
            count2++
        }
        if (dados.sexo.toLowerCase() == 'm') {
            countM++
        }
        countT++

    }
    console.log(`A maior idade das pessoas com olhos castanhos e mais de 1.60 é ${somaIdades1 / count1}`)
    console.log(`A maior idade é ${maiorIdade}`)
    console.log(`A quantidade de individuos é ${count2}`)
    console.log(`O percentual de homens é ${countM / countT * 100} %`)
}   