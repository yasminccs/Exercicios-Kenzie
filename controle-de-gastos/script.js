const inputCost = document.querySelector('#inputValorOrcamento')
const btnCalculate = document.querySelector('#calcularOrcamento')
const totalCost = document.querySelector('#totalOrcamento')
const nameDespesa = document.querySelector('#nameDespesa')
const valueDespesa = document.querySelector('#valueDespesa')
const btnAddDespesa = document.querySelector('#addDespesa')
const titleDespesa = document.querySelector('#titleDespesa')
const titleValue = document.querySelector('#titleValue')
const totalDespesas = document.querySelector('#totalDespesas')
const saldo = document.querySelector('#saldo')

btnCalculate.addEventListener('click', function(){
    totalCost.innerText = `+ R$${inputCost.value}`
    saldo.innerText = `R$${inputCost.value}`
})

btnAddDespesa.addEventListener('click', function(){
    if(inputCost.value.length === 0 || nameDespesa.value.length === 0 || valueDespesa.value.length === 0){
        alert('Por favor, preencha todos os campos.')
    } else {
        titleDespesa.innerText = `- ${nameDespesa.value}`
        titleValue.innerText = `R$${valueDespesa.value}`
        totalDespesas.innerText = `- R$${valueDespesa.value}`
        const sld = Number(inputCost.value - valueDespesa.value)
        saldo.innerText = `R$${sld}`
    }
})

document.querySelector('#iconLixeira').addEventListener('click', function(){
    titleDespesa.innerText = `------`
    titleValue.innerText = `R$0`
    totalDespesas.innerText = `- R$0`
    saldo.innerText = `R$${inputCost.value}`
})
