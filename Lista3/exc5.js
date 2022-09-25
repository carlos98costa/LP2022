function exc5(){
    // tabuada do 5
    // com estrutura de repetição - while
    let numero = 1
    while (numero <= 10){
        let contador = 0
        while (contador <=10){
            console.log(`${numero} x ${contador} = ${numero*contador}`)
            contador++
        }
        numero++
    }
}

function calcularMedia(){
    let altura
    let contador = 1
    let acumula = 0 // neutro para soma
    while (contador <= 10) {
        altura = Number(prompt(`Informe a altura`))
        acumula = acumula + altura // somando as alturas
        contador++
    }
    document.getElementById('Resultado').innerHTML = 
    `A média das alturas é ${numero} x ${contador} = ${numero*contador}`
}