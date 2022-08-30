function calcular() {
    let valorInv = parseFloat(document.getElementById("valorInv").value)
    let opcao = parseFloat(document.getElementById("opcao").value)
    switch(opcao) {
        case 1:
            resultado = valorInv * 0.03
            if (opcao == 1) {
                opcao = String("Poupança")
            }
            document.getElementById("resultado").innerHTML = 
            `O valor rendido com um investimento na ${opcao} de R$ ${valorInv.toFixed(2)} será
            R$ ${resultado}`
        break
        case 2:
            resultado = valorInv * 0.04
            if (opcao == 2) {
                opcao = String("Fundos de renda fixa")
            }
            document.getElementById("resultado").innerHTML = 
            `O valor rendido com um investimento no ${opcao} de R$ ${valorInv.toFixed(2)} será
            R$ ${resultado}`
        break
        default:
            if (isNaN(valorInv))
            document.getElementById("resultado").innerHTML = 
            `ERRO. O Valor a ser investido deve ser um numero`
        break
    }
}