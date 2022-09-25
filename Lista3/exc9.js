function exc9() {
    let idade
    let peso
    let altura
    let count1 = 0
    let count2 = 0
    let countIdade1 = 0
    for (i = 1; i < 11; i++) {
        idade = Number(prompt(`Informe a idade ${i}: `))
        peso = Number(prompt(`Informe o peso ${i}: `))
        altura = Number(prompt(`Informe a altura ${i}: `))
        countIdade1 = countIdade1 + idade
        if (idade >= 10 && idade <= 30 && altura > 1.9) {
            count2++
        }
        if (altura < 1.5 && peso > 90) {
            count1++
        }
    }
    console.log(`A resposta 1 é ${(countIdade1 / 10).toFixed(2)}`)
    console.log(`A resposta 2 é ${count1}`)
    console.log(`A resposta 3 é ${((count2 / 10) * 100).toFixed(2)}%`)

}
