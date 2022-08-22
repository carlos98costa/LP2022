function calcular() {
    let raio = parseFloat(document.getElementById("raio").value)
    let comprimento = 2 *(Math.PI) * raio
    let area = 4 * (Math.PI) * (raio^2)
    let volume = 4/3 * (Math.PI) * (raio^3)

    document.getElementById("comprimento").innerHTML = 
    `O comprimento do raio será ${comprimento.toFixed(2)}`
    document.getElementById("area").innerHTML = 
    `A area do raio será ${area.toFixed(2)}`
    document.getElementById("volume").innerHTML = 
    `O volume do raio será ${volume.toFixed(2)}`
    
}