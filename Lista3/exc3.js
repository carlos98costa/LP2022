function exc3() {
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0
    let cont4 = 0
    let cont5 = 0

    for (let i = 0; i<8; i++) {
        idade = Number(prompt(`Informe a idade: ${i+1}`))
        if (idade <= 15) {
            cont1++
        }else if (idade >= 0 && idade >= 16 && idade <= 30) {
            cont2++
        }else if (idade >= 0 && idade >= 31 && idade <= 45) {
            cont3++
        }else if (idade >= 0 && idade >= 46 && idade <= 60) {
            cont4++
        }else if (idade >= 0 && idade > 60){
            cont5++
        }else {
            i--
        }
    }

    console.log(`Faixa 1 ${cont1}`)
    console.log(`Faixa 2 ${cont2}`)
    console.log(`Faixa 3 ${cont3}`)
    console.log(`Faixa 4 ${cont4}`)
    console.log(`Faixa 5 ${cont5}`)
    console.log(`A % da Faixa 1 em relação ao total é ${cont1 / 8 * 100}%`)
    console.log(`A % da Faixa 5 em relação ao total é ${cont5 / 8 * 100}%`)
}