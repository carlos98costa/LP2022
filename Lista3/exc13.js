function exc13() {
    let idade
    let peso
    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let countPeso1 = 0
    let countPeso2 = 0
    let countPeso3 = 0
    let countPeso4 = 0
    for (i = 1; i < 16; i++) {
        idade = Number(prompt(`Informe a idade ${i}: `))
        peso = Number(prompt(`Informe o peso ${i}: `))
        if (idade >= 1 && idade <= 10) {
            count1++
            countPeso1 = countPeso1 + peso
        }else if (idade >= 11 && idade <= 20) {
            count2++
            countPeso2 = countPeso2 + peso
        }else if (idade >= 21 && idade <= 30) {
            count3++
            countPeso3 = countPeso3 + peso
        }else if (idade >= 31) {
            count4++
            countPeso4 = countPeso4 + peso
        }
    }
    console.log(`A media 1 é  ${(countPeso1 / count1).toFixed(2)}`)
    console.log(`A media 2 é  ${(countPeso2 / count2).toFixed(2)}`)
    console.log(`A media 3 é  ${(countPeso3 / count3).toFixed(2)}`)
    console.log(`A media 4 é  ${(countPeso4 / count4).toFixed(2)}`)
}