
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
    let listItem = "<li><a href='" + inputEl.value + "' target='_blank'>" + inputEl.value + "</a></li>"
    ulEl.innerHTML += listItem
}