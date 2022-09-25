function exc1() {
    let a
    let b
    let c
    let d
    let cont = 1

    while (cont <= 5) {
        a = Number(prompt(`Informe o 1º valor: `))
        b = Number(prompt(`Informe o 2º valor: `))
        c = Number(prompt(`Informe o 3º valor: `))
        d = Number(prompt(`Informe o 4º valor: `))

        console.log(`Grupo ${cont}: [${a},${b},${c},${d}]`)
        let lista = [a, b, c, d]
        lista.sort()
        let lista1 = [a, b, c, d]
        lista1.sort()
        lista1.reverse()

        console.log(`Ordem crescente (Grupo ${cont}): [${lista}]`)
        console.log(`Ordem decrescente (Grupo ${cont}): [${lista1}]`)
        console.log('')

        cont++
    } 
}