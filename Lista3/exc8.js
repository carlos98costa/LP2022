function exc8() {
    let idade
    let peso
    let altura
    let corOlhos
    let corCabelo
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let countIdade1 = 0
    for (i = 1; i < 7; i++) {
        idade = Number(prompt(`Informe a idade ${i}: `))
        peso = Number(prompt(`Informe o peso ${i}: `))
        altura = Number(prompt(`Informe a altura ${i}: `))
        corOlhos = String(prompt(`Escolha a cor dos olhos \n A. Azul \n P. Preto \n V. Verde \n C. Castanho`)).toUpperCase()
        corCabelo = String(prompt(`Escolha a cor do cabelo \n L. Louro \n P. Preto \n C. Castanho \n R. Ruivo`)).toUpperCase()
        if (idade > 50 && peso < 60) {
            count1++
        }
        if (altura < 1.5) {
            count2++
            countIdade1 = countIdade1 + idade
        }
        if (corOlhos == "A") {
            count3++
        }
        if (corCabelo == "R" && corOlhos != "A") {
            count4++
        }
    }
    console.log(`A resposta 1 é ${count1}`)
    console.log(`A resposta 2 é ${countIdade1 / count2}`)
    console.log(`A resposta 3 é ${((count3 / 6) * 100).toFixed(2)}%`)
    console.log(`A resposta 4 é ${count4}`)
}
