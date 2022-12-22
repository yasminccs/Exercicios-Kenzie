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
let b = 0

const obj = {
    orcamento: 0,
    despesa: 0,
    saldo: 0
}
console.log(obj)

btnCalculate.addEventListener('click', function(){
    obj.orcamento = Number(inputCost.value)
    obj.saldo = obj.orcamento
    totalCost.innerText = `+ R$${obj.orcamento}`
    saldo.innerText = `R$${obj.saldo}`
})

btnAddDespesa.addEventListener('click', function(){
    if(inputCost.value.length === 0 || nameDespesa.value.length === 0 || valueDespesa.value.length === 0){
        alert('Por favor, preencha todos os campos.')
    } else {
        titleDespesa.innerText = `- ${nameDespesa.value}`
        titleValue.innerText = `R$${valueDespesa.value}`

        obj.despesa += Number(valueDespesa.value)
        totalDespesas.innerText = `- R$${obj.despesa}`

        obj.saldo = Number(obj.orcamento - obj.despesa)
        saldo.innerText = `R$${obj.saldo}`
    }
})

document.querySelector('#iconLixeira').addEventListener('click', function(){ //remover o valor atual q aparece
    titleDespesa.innerText = `------`
    titleValue.innerText = `R$0`

        obj.despesa -= Number(valueDespesa.value)
        totalDespesas.innerText = `- R$${obj.despesa}`

        obj.saldo = Number(obj.orcamento + obj.despesa)
        saldo.innerText = `R$${obj.saldo}`
})
