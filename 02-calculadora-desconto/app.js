'use strict'

function removerClase() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('verde', 'marrom', 'vermelho')
}
function calcularDesconto() {
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')
    let economia = ''
    let precoFinal = ''
    let faixaFinal = ''

    economia = preco.value * desconto.value / 100
    precoFinal = preco.value - economia
    faixaFinal = `Valor Economizado: ${economia} - Preço Final: ${precoFinal} `

    removerClase()
    if (desconto.value <= 5) {
        resultado.textContent = faixaFinal
        resultado.classList.add('verde')
    } else if (desconto.value > 6 && desconto.value <= 10) {
        resultado.textContent = faixaFinal
        resultado.classList.add('marrom')
    } else if (desconto.value > 10) {
        resultado.textContent = faixaFinal
        resultado.classList.add('vermelho')
    }
    else {
        resultado.textContent = "[ERRO]"
    }


}


