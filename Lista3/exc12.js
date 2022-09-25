function exc12(){
    let numero, primo, primo2
    let x = 1
    let primoCount = 0
    let qtd
    do {
        numero = Number(prompt(`Informe um numero ${x}:`))
        if (numero%1 === 0) {
            x++
            for (primo = 0; primo<=numero; primo++) {
                qtd = 0
                for(primo2=1; primo2<=primo; primo2++){

                }
                if(primo%primo2==0) {
                    qtd=qtd+1
                }
                if(qtd<= 2){
                    if(primo>=2){
                        primoCount++
                    }
                }
            }
        }else {
            alert(`Numero invalido!`)
        }
    } while (x < 2);
    console.log(`No total ${primoCount} numeros primos foram digitados!`)
}