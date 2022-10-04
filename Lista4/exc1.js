function exc1() {
    let list = []
    let cont = 1
    let pares = []
    do {
        list.push(Number(prompt(`Informe o ${cont}° numero: `)))
        cont++
        if (list % 2 == 0) {
            pares.push(list)
        }
    } while (cont <= 6);
    console.log(list)
    console.log(pares)
}   