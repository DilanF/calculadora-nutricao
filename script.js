function validar() {
    let metros = document.getElementById('data-metros')
    let quilos = document.getElementById('data-quilos')
    metros.style.border = "1px solid #eee"
    quilos.style.border = "1px solid #eee"
    if (!metros.value || !quilos.value) {
        if (!metros.value && !quilos.value) {
            metros.style.border = "1px solid red"
            quilos.style.border = "1px solid red"
        } else if (!metros.value) {
            metros.style.border = "1px solid red"
        } else {
            quilos.style.border = "1px solid red"
        }
    } else {
        calcularIMC()
    }
}

function calcularIMC () {
    let metros = parseFloat(document.getElementById('data-metros').value)
    let metrosInput = document.getElementById('data-metros')
    let quilos = parseFloat(document.getElementById('data-quilos').value)
    let quilosInput = document.getElementById('data-quilos')
    let resultado = quilos / (metros * metros)
    let resultadoFixado = resultado.toFixed(1)
    let imprimir = document.getElementById('resultado-imc')
    if (metros > 2.51 || metros < 0) {
        metrosInput.style.border = "1px solid red";
        imprimir.style.color = "#fff"
        return imprimir.innerHTML = `Digite uma altura valida`
    }  else if (quilos > 600 || quilos < 0) {
        quilosInput.style.border = "1px solid red";
        imprimir.style.color = "#fff"
        return imprimir.innerHTML = `Digite um peso valido`
    } else {
        if (resultado < 18.5) {
            imprimir.style.color = "#f5f31c"
            return imprimir.innerHTML = `IMC: ${resultadoFixado} = Magreza | Obesidade: 0`
        } else if (resultado < 24.9) {
            imprimir.style.color = "#17e925"
            return imprimir.innerHTML = `IMC: ${resultadoFixado} = Eutrofia | Obesidade: 0`
        } else if (resultado < 29.9) {
            imprimir.style.color = "#f5f31c"
            return imprimir.innerHTML = `IMC: ${resultadoFixado} = Sobrepeso | Obesidade: 1`
        } else if (resultado < 39.9) {
            imprimir.style.color = "#f5ca1c"
            return imprimir.innerHTML = `IMC: ${resultadoFixado} = Obesidade | Obesidade: 2`
        } else if (resultado > 40.0) {
            imprimir.style.color = "#fe3a3a"
            return imprimir.innerHTML = `IMC: ${resultadoFixado} = Obedidade Grave | Obesidade: 3`
        }
    } 
}

const a = document.querySelector('[calcular-imc]')
a.onclick = validar