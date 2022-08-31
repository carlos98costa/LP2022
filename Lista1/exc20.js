function calcular() {
    let anguloBase = parseFloat(document.getElementById("anguloBase").value)
    let catetoAdj = parseFloat(document.getElementById("catetoAdj").value)


    let hipotenusa = catetoAdj / Math.cos(anguloBase)
    document.getElementById("resultado").innerHTML =  
    `O resultado será ${hipotenusa.toFixed(2)} `
}