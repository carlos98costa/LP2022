function exc3() {
    let codigo = []
    let estoque = []
    for (let i = 0; i < 2; i++) {
        codigo.push(Number(prompt(`Informe o ${i}° codigo: `)))
        estoque.push(Number(prompt(`Informe a qtd em estoque do ${i}° produto: `)))
    }
    let cliente = Number(prompt(`Informe cliente:`))
    do {
        let cod = Number(prompt(`Informe o codigo do produto a comprar:`))
        let qtd = Number(prompt(`Informe a quantidade de produtos a comprar:`))
        for (let i = 0; codigo.length; i++) {
            if (codigo[i] == cod) {
                achou = true
                if (estoque[i] >= qtd) {
                    estoque[i] = estoque[i] - qtd
                    console.log(`Pedido atendido`)
                }
                else {
                    console.log(`Estoque insuficiente`)
                }
            }
        }
        if (!achou) {
            console.log(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe o cliente: 0. para cancelar a compra`))
    } while (cliente != 0);
    console.log(codigo)
    console.log(estoque)
}