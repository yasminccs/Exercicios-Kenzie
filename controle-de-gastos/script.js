const inputCost = document.querySelector('#inputValorOrcamento')//input q coloca o orçamento
const btnCalculate = document.querySelector('#calcularOrcamento')//botao q add o orçamento
const totalCost = document.querySelector('#totalOrcamento')//orcamento do cilindro
const nameDespesa = document.querySelector('#nameDespesa')//input q coloca o nome da despesa
const valueDespesa = document.querySelector('#valueDespesa')//input q coloca o valor da despesa
const btnAddDespesa = document.querySelector('#addDespesa')//botao de calcular os valore
const titleDespesa = document.querySelector('#titleDespesa')//para onde vai o nome da despesa
const titleValue = document.querySelector('#titleValue')//para onde vai o valor da despesa
const totalDespesas = document.querySelector('#totalDespesas')//despesas totais no cilindrao
const saldo = document.querySelector('#saldo')//onde mostra o saldo
let b = 0

const obj = {
    orcamento: 0,
    despesa: 0,
    saldo: 0
}
console.log(obj)

btnCalculate.addEventListener('click', function(){
    obj.orcamento = Number(inputCost.value)
    obj.saldo = obj.orcamento - obj.despesa
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

document.querySelector('#iconLixeira').addEventListener('click', function(){
    titleDespesa.innerText = `------`
    titleValue.innerText = `R$0`

        obj.despesa -= Number(valueDespesa.value)
        totalDespesas.innerText = `- R$${obj.despesa}`

        obj.saldo = Number(obj.orcamento += obj.despesa)
        saldo.innerText = `R$${obj.saldo}`
})
