function calcular() {
    let notaA1 = parseFloat(document.getElementById("notaA1").value)
    let notaA2 = parseFloat(document.getElementById("notaA2").value)
    let notaB1 = parseFloat(document.getElementById("notaB1").value)
    let notaB2 = parseFloat(document.getElementById("notaB2").value)
    let notaFinal = (((notaA1 + notaA2) / 2) + ((notaB1 + notaB2) / 2)) / 2
    console.log(notaFinal)
    if (notaFinal >= 7)  {
        document.getElementById("notaFinal").innerHTML = 
        `O aluno foi APROVADO com a nota ${notaFinal}`
    }else if (notaFinal < 7)  {
        document.getElementById("notaFinal").innerHTML =
        `O aluno foi REPROVADO  com a nota ${notaFinal}`
    }
    
}