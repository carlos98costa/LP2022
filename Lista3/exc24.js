function exc24() {
    let i = 1
    let numero
    let maxNum = 0
    let minNum = 0
    do {
        numero = Number(prompt(`Informe um numero ${i} \n 0. Para finalizar o programa!`))
        if (numero > 0 && numero%1 === 0) {
            if (maxNum === 0) {
                maxNum = numero
            }
            if (minNum === 0) {
                minNum = numero
            }
            if(numero > maxNum) {
                maxNum = numero
            }else if(numero < minNum) {
                minNum = numero
            }
        }else if (numero < 0) {
            alert(`Numero invalido. (Negativo)`)
            i--
        }
        i++
    } while (numero != 0);
    console.log(`O maior numero é ${maxNum} `)
    console.log(`O menor numero é ${minNum} `)
}