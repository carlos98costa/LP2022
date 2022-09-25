function exc10(){
    let numero
    let countPar = 0
    let countPrimo = 0
    for (i = 1; i < 5; i++) {
        numero = Number(prompt(`Informe um numero ${i}: `))
        if (numero%2 == 0) {
            countPar = countPar + numero
        }
        if (altura < 1.5 && peso > 90) {
            count1++
        }
    }
    console.log(`A resposta 1 é ${(countIdade1 / 10).toFixed(2)}`)
    console.log(`A resposta 2 é ${count1}`)
    console.log(`A resposta 3 é ${((count2 / 10) * 100).toFixed(2)}%`)
}