function exc12(){
    let numero, primo2
    let x = 1
    var primoCount = 0
    
    do {
        numero = Number(prompt(`Informe um numero ${x}:`))
        if (numero%1 == 0) {
            x++
            let qtd = 0
            for (let i = 1; i<=numero; i++) {
                //console.log(primo)
                if (numero%i == 0) {
                    qtd++
                    console.log(qtd)
                }
            }
            if (qtd == 2) {
                primoCount++
            }
        }else {
            alert(`Numero invalido!`)
        }
    } while (x < 11);
    console.log(`No total ${primoCount} numeros primos foram digitados!`)
}