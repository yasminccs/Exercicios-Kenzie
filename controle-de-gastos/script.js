const inputCost = document.querySelector('#inputValueBudget')
const btnCalculate = document.querySelector('#btnAddBudget')
const nameDespesa = document.querySelector('#inputNameExpense')
const valueDespesa = document.querySelector('#inputValueExpense')
const btnAddDespesa = document.querySelector('#btnAddExpense')
const titleDespesa = document.querySelector('#pExpense')
const titleValue = document.querySelector('#pValueExpense')

const totalCost = document.querySelector('#displayBudget')
const totalDespesas = document.querySelector('#displayExpenses')
const saldo = document.querySelector('#displaySale')

const select = document.querySelector('#allExpenses')

const obj = {
    orcamento: 0,
    despesa: 0,
    saldo: 0
}
console.log(obj)

btnCalculate.addEventListener('click', function(){
    obj.orcamento += Number(inputCost.value)
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

        const options = document.createElement('option')
        options.innerText += `${nameDespesa.value} --- R$${valueDespesa.value}`
        select.append(options)
    }
})

document.querySelector('#iconTrash').addEventListener('click', function(){
    
    obj.despesa -= Number(valueDespesa.value)
    totalDespesas.innerText = `- R$${obj.despesa}`

    obj.saldo = Number(obj.orcamento += obj.despesa)
    saldo.innerText = `R$${obj.saldo}`
})
