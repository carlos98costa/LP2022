function exc6(){
    totalVendas = []
    porcentagem = []
    nome = []
    for (i=1; i<6; i++) {
        nome.push(String(prompt(`Informe o nome do ${i}° vendedor: `)))
        totalVendas.push(Number(prompt(`Informe o total de vendas do ${i}° vendedor: `)))
        porcentagem.push(Number(prompt(`Informe a % da comissão do ${i}° vendedor: `)))
    }
    for (x=i; totalVendas.lenght; x++) {
        console.log(`Nome: ${nome[i]}, Vendas: ${totalVendas[i]}, % comissão ${porcentagem[i]}`)
    }
}