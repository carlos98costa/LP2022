function calcular() {
    let idade = parseInt(document.getElementById("idade").value)

    if (idade < 18) {
        document.getElementById("resultado").innerHTML = 
        `Você ainda não atingiu a maioridade!`
    }else {
        document.getElementById("resultado").innerHTML = 
        `Você já atingiu a maioridade!`
    }
}