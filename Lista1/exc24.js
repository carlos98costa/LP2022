function calcular() {
    let valorReais = parseFloat(document.getElementById("valorReais").value)
    let opcao = parseFloat(document.getElementById("opcao").value)
    switch(opcao) {
        case 1:
            dolar = valorReais * 1.8
            if (opcao == 1){
                opcao = String("Dolar")
            }
            document.getElementById("resultado").innerHTML = 
            `O valor em R$ ${valorReais} em ${opcao}  será US$ ${dolar.toFixed(2)}`
        break
        case 2:
            marcoAlemao = valorReais * 2
            if (opcao == 2){
                opcao = String("Marco alemão")
            }
            document.getElementById("resultado").innerHTML = 
            `O valor em R$ ${valorReais} em ${opcao}  será US$ ${marcoAlemao.toFixed(2)}`
        break
        case 3:
            libras = valorReais * 3.57
            if (opcao == 3){
                opcao = String("Libras esterlinas")
            }
            document.getElementById("resultado").innerHTML = 
            `O valor em R$ ${valorReais} em ${opcao}  será US$ ${libras.toFixed(2)}`
        break
    }
}