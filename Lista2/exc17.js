function calcular() {
    let senha = parseInt(document.getElementById("senha").value)
    let senhaCorreta = 4531

    if (senha != senhaCorreta) {
        document.getElementById("resultado").innerHTML = 
        `Senha incorreta. Acesso negado!`
    }else {
        document.getElementById("resultado").innerHTML = 
        `Login realizado com sucesso!`
    }

}