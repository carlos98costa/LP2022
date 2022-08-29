function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let opcao = parseFloat(document.getElementById("opcao").value)
    if (opcao == 1) {
        elevado = (num1 ** num2)
        document.getElementById("resultado").innerHTML = 
        `O numero ${num1} elevado pelo numero ${num2} é ${elevado}`
    }else if (opcao == 2) {
        raiz1 = Math.sqrt(num1)
        raiz2 = Math.sqrt(num2)
        document.getElementById("resultado").innerHTML = 
        `A raiz quadrada de ${num1} é ${raiz1}. <br>
         A raiz quadrada de ${num2} é ${raiz2}.`
    }else if (opcao == 3) {
        raizC1 = Math.cbrt(num1)
        raizC2 = Math.cbrt(num2)
        document.getElementById("resultado").innerHTML = 
        `A raiz cubica de ${num1} é ${raizC1}. <br>
         A raiz cubica de ${num2} é ${raizC2}.`
    }
}