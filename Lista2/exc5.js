function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let opcao = parseFloat(document.getElementById("opcao").value)

    if (opcao == 1) {
        media = (num1 + num2) / 2
        document.getElementById("resultado").innerHTML = 
        `A media entre os valores ${num1} e ${num2} é ${media}`
    }else if (opcao == 2) {
        if (num1 > num2) {
            diferenca = num1 - num2
            document.getElementById("resultado").innerHTML = 
            `A diferença entre os valores ${num1} - ${num2} é ${diferenca}`
        }else {
            diferenca = num2 - 1
            document.getElementById("resultado").innerHTML = 
            `A diferença entre os valores ${num2} - ${num1} é ${diferenca}`
        }
    }else if (opcao == 3) {
        multiplicacao = num1 * num2
        document.getElementById("resultado").innerHTML = 
            `A multiplicação dos valores ${num1} x ${num2} é ${multiplicacao}`
    }else if (opcao == 4) {
        if (num2 != 0){
            divisao = num1 / num2
        document.getElementById("resultado").innerHTML = 
            `A divisão dos valores ${num1} / ${num2} é ${divisao}`
        }else{
            document.getElementById("resultado").innerHTML = 
        `Numero 2 invalido, entre com um valor diferente de 0`
        }
    }else {
        document.getElementById("resultado").innerHTML = 
        `Opção invalida! Entre com um numero entre 1 e 4`
    }
}