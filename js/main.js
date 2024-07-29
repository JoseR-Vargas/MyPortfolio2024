//Responsive Button

const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')

abrir.addEventListener("click", () =>{
    nav.classList.add('visible')
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove('visible')
})

// Formulary

let btnsent = document.getElementById("btnFormulary")
btnsent.addEventListener("click", saveFormulary)

function saveFormulary (){
    const formulary = document.getElementById("contactForm")
    const dataFormulary = {
        name: formulary.name.value,
        email: formulary.email.value,
        message: formulary.message.value
    }

    const dataJson = JSON.stringify (dataFormulary)

    localStorage.setItem("formulary",dataJson)
}