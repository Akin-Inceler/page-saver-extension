
let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")


saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = ""
})

function renderLead() {
    let listItem = `
        <li>
            <a href='${myLeads[myLeads.length - 1]}' target='_blank'>${myLeads[myLeads.length - 1]}</a>
        </li>
    `
    ulEl.innerHTML += listItem
}