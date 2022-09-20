function exc7() {
    let idade
    let altura
    let peso
    let resp1 = 0
    let resp2 = 0
    let alturas = 0
    let alturasCont = 0
    let contPeso = 0
    let resp3 = 0
    for (let i = 0; i<5; i++ ) {
        idade = Number(prompt(`Informa a idade ${i + 1}: `))
        altura = Number(prompt(`Informe a altura ${i + 1}`))
        peso = Number(prompt(`Informe o peso ${i + 1}`))
        if (idade > 50) {
            resp1++
        }if (idade >= 10 && idade <= 20) {
            alturasCont++
            alturas += altura
            resp2 = alturas / alturasCont
            console.log(alturas)
        }if (peso < 40) {
            contPeso++
            resp3 = (contPeso / 5) * 100
        }
    }
    if (resp1 > 0) {
        console.log(`A resposta 1 é ${resp1}`)
    }else {
        console.log(`Não há pessoas com idade maior que 50 anos `)
    }
    if (alturasCont != 0) {
        console.log(`A media de alturas é ${resp2}`)
    }else {
        console.log(`Não há pessoas com idade entre 10 e 20`)
    }if (peso != 0 ) {
        console.log(`A % de pessoas com peso até 40kg é ${resp3}%`)
    }else {
        console.log(`Não há pessoas com peso até 40kg`)
    }
}