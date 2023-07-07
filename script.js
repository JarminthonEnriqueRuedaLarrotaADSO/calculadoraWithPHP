const formulario = document.getElementById('form')
const btnEnviar = document.getElementById('btn-enviar');

const numeros = [document.getElementById('num1'),document.getElementById('num2'),document.getElementById('num3')]
const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const numero3 = document.getElementById('num3')

const solonumero = (e) => {
    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode) {
        e.preventDefault()
    }
}
const enviarFormulario = formulario => {
    formulario.submit()
}
const validacion = (e) => {
    e.preventDefault()
    if (numero1.value === "") {
        alert('Rellene la casilla 1')
        return false
    }
    if (numero2.value === "") {
        alert('Rellene la casilla 2')
        numero2.focus()
        return false
    }
    if (numero3.value === "") {
        alert('Rellene la casilla 3')
        numero3.focus()
        return false
    }
    enviarFormulario(formulario)
}
numeros.forEach((item)=> item.addEventListener('keypress', solonumero))
btnEnviar.addEventListener('click', validacion)
