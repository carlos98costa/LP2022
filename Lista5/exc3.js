function exc3() {
    let pessoas = []
    let somaIdades = 0
    let mediaIdades1 = 0
    let count1 = 0
    for (i = 1; i<3; i++) {
        dados = {
            sexo: (prompt(`Informe o sexo da ${i}ª pessoa:\n M. Masculino \n F. Feminino `)),
            altura: Number(prompt(`Informe a altura da ${i}ª pessoa:`)),
            idade: Number(prompt(`Informe a idade da ${i}ª pessoa:`)),
            olhos: (prompt(`Informe a cor dos olhos da ${i}ª pessoa:\n A. Azuis \n V. Verdes \n C. Castanhos `))
        }
        pessoas.push(dados)
        if(dados.olhos == 'C' || dados.olhos == 'c' && dados.altura > 1.6) {
            count1 = count1 + 1
            somaIdades1 = somaIdades1 + dados.idade
        }
        somaIdades = somaIdades + dados.idade
        
    }
    console.log(pessoas)
    console.log(count1)
}