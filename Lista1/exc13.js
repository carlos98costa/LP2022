
function calcular() {
    var obj = [Array(9).keys()]
    let numX = parseFloat(document.getElementById("numX").value)
    let tabuada = 0
    countNeeded = 9
    let count = 0
    while (count <= countNeeded) {
        tabuada = numX * count
        document.getElementById("tabuada").innerHTML = 
        `${numX} x ${count} = ${tabuada}`
        count += 1
        
    }
}