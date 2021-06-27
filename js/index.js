const bill = document.getElementById("bill_value")
const tip = document.getElementById("tip_value")
const people = document.getElementById("people")

const totalBill = document.getElementById("total")
const tipPerPerson = document.getElementById("tip_person")
const totalPerPerson = document.getElementById("total_person")

const generateRandomtip = document.getElementById("random-tip-generator")

calculate()

bill.addEventListener("input", calculate)

tip.addEventListener("input", calculate)

people.addEventListener("input", calculate)

function calculate() {
    const billValue = +bill.value
    const tipValue = +tip.value
    const numberOfPeople = +people.value <= 0 ? 1 : +people.value 
    const totalTip = (billValue / 100) * tipValue
    const totalValue = billValue + totalTip
    const totalPersonValue = totalValue / numberOfPeople
    const tipPersonValue = totalTip / numberOfPeople

    totalBill.innerHTML = totalValue.toFixed(2) + " USD"
    totalPerPerson.innerHTML = totalPersonValue.toFixed(2) + " USD"
    tipPerPerson.innerHTML = tipPersonValue.toFixed(2) + " USD"
}

generateRandomtip.addEventListener("click", () => {
    randomTipGenerator()
})

function randomTipGenerator() {
    tip.value = Math.floor(Math.random() * 15 + 5)
}

