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
    do {
        for (i=0; i < 6; i++){
            idade = Number(prompt(`Informe a idade: `))
            peso = Number(prompt(`Informe o peso: `))
            altura = Number(prompt(`Informe a altura: `))
            corOlhos = String(prompt(`Escolha a cor dos olhos \n A. Azul \n P. Preto \n V. Verde \n C. Castanho`)).toUpperCase
            corCabelo = String(prompt(`Escolha a cor do cabelo \n L. Louro \n P. Preto \n C. Castanho \n R. Ruivo`)).toUpperCase
            if (idade > 50 && peso < 60) {
                count1++
            }
            if (altura < 1.5) {
                count2++
                countIdade1++
            }
            if (corOlhos == "A") {
                count3++
            }
            if (corCabelo == "R" && corOlhos != "A") {
                count4++
            }
        console.log(`A resposta 1 é ${count1}`)
        console.log(`A resposta 2 é ${countIdade1 / count2}`)
        console.log(`A resposta 3 é ${(count3 / 6) * 100 }`)
        console.log(`A resposta 4 é ${count4}`)
        }
    } while (i < 6);
}