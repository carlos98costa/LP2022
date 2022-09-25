function exc18() {
    let idade, sexo, salario
    let qtdPesquisadas = 0
    let salarioSoma = 0
    let maxIdade = 0
    let minIdade = 0
    let mulheresCount = 0
    let sexoMinSal = ""
    let idadeMinSal = 0
    do {
        idade = Number(prompt(`Informe a idade: `))
        if (idade >= 0){
            sexo = String(prompt(`Informe o sexo: \n M. Masculino \n F. Feminino`)).toUpperCase()
            salario = Number(prompt(`Informe o salario:`))
        }else{
            alert(`O programa foi finalizado!`)
        }
        qtdPesquisadas++
        salarioSoma = salarioSoma + salario
        var minSalario = salario
        if (idade > maxIdade) {
            maxIdade = idade
        }
        if (idade >= 0 && idade < minIdade) {
            minIdade = idade
        }
        if (sexo == "F" && salario <= 2000) {
            mulheresCount++
        }
        if (salario < minSalario) {
            minSalario = salario
            idadeMinSal = idade
            sexoMinSal = sexo
        }
    } while (idade >= 0);
    console.log(`A media dos salarios é R$ ${((salarioSoma / qtdPesquisadas)).toFixed(2)}`)
    console.log(`A maior idade é  ${maxIdade}, a menor idade é ${minIdade}`)
    console.log(`Mulheres com salario menor que R$ 2000 é  ${mulheresCount}`)
    console.log(`O menor salario é R$ ${minSalario}`)
}