function exc10(){
    let numero
    let countPar = 0
    let primoSoma = 0
    for (i = 1; i < 5; i++) {
        numero = Number(prompt(`Informe um numero ${i}: `))
        if (numero%2 == 0) {
            countPar = countPar + numero
        }
        let qtd = 0
            for (let i = 1; i<=numero; i++) {
                //console.log(primo)
                if (numero%i == 0) {
                    qtd++
                    console.log(qtd)
                }
            }
            if (qtd == 2) {
                primoSoma = primoSoma + numero
            }
    }
    console.log(`A soma dos numeros pares é ${countPar.toFixed}`)
    console.log(`A soma dos numeros primos é ${primoSoma}`)
}