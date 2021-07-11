array = []

function adicionarNoArray() {
    var numero = window.document.querySelector('#numero').value
    var res = window.document.querySelector('#res')
    
    if (numero.length == 0 || numero > 100 || numero < 1) {
        window.alert("Valor invalido.")
    } else {
        array.push(Number(numero))
        res.innerHTML = ''
        for (let pos in array) {
            res.innerHTML += `Valor ${array[pos]} foi adicionado.<br>`
            finalizar.innerHTML = ``
        }
    }
}

function mostrarDados() {
    if (array.length == 0) {
        window.alert("Adicione valores antes de finalizar.")
    }else { 
    var finalizar = window.document.querySelector('#finalizar')
    c = 0
    
    array.sort(function(a,b) {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })

        for (let pos in array) {
            p = 1
            c += array[pos]
            p += Number(pos)
            media = c / p
            finalizar.innerHTML = ``
            finalizar.innerHTML += `Ao todo, temos ${p} números cadastrados.<br>`
            finalizar.innerHTML += `O maior valor informado foi ${array[pos]}.<br>`
            finalizar.innerHTML += `O menor valor informado foi ${array[0]}.<br>`  
            finalizar.innerHTML += `Somando todos os valores, temos ${c}.<br>`
            finalizar.innerHTML += `A média dos valores digitados é ${media}.`
        }
    }
}