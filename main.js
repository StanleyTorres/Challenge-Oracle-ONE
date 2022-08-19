var textInput = document.getElementById('textInput')
var resultTitle = document.getElementById('resultTitle')
var resultInput = document.getElementById('resultInput')
var primaryButton = document.getElementById('button-primary')
var secondaryButton = document.getElementById('button-secondary')
var copyButton = document.getElementById('copy-button')


function validation(e) {
    key = e.keyCode || e.which
    pattern = /[a-zñ]/
    allow_key = String.fromCharCode(key)
    
    if (key <= 32 || key == 164) {
        return true
    }
    if(pattern.test(allow_key) == false){
        alert("Solo debe ingresar letras minúsculas y sin acentos")
        location.reload();
    }
    return 
}

textInput.addEventListener('keyup', () => {
    if (textInput.value.length == 0) {
        resultTitle.style.display = "block"
        resultTitle.innerText = 'Ningun mensaje fue encontrado'
        resultInput.innerText = 'Ingresa el texto que desees encriptar o desencriptar'
    } else if (textInput.value.length >= 1) {
        resultTitle.innerText = 'Puedes encriptar o desencriptar tu mensaje'
        resultInput.innerText = textInput.value
    }
})

primaryButton.onclick = () => {
    const newResult = textInput.value
    encrypt(newResult)
} 
secondaryButton.onclick = () => {
    const newResult = textInput.value
    decrypt(newResult)
} 
copyButton.onclick = () => {
    var input = document.createElement('input')
    input.setAttribute('value', resultInput.innerText);
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copyButton.innerText = "Copiado"
}

const encrypt = (newResult) => {
    let decryptKeys = [
        /e/gi,
        /i/gi,
        /a/gi,
        /o/gi,
        /u/gi
    ]
    let encryptKeys = [
        'enter',
        'imes',
        'ai',
        'ober',
        'ufat'
    ]

    for (i = 0; i < encryptKeys.length; i ++) {
        newResult = newResult.replace(decryptKeys[i], encryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensaje ha sido encriptado:'
    resultInput.innerText = newResult
    resetCopyButtonStyles()
}

function decrypt(newResult) {
    let encryptKeys = [
        /enter/g,
        /imes/g,
        /ai/g,
        /ober/g,
        /ufat/g
    ]
    let decryptKeys = [
        'e',
        'i',
        'a',
        'o',
        'u'
    ]

    for (i = 0; i < encryptKeys.length; i ++) {
        newResult = newResult.replace(encryptKeys[i], decryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensaje ha sido desencriptado:'
    resultInput.innerText = newResult
    resetCopyButtonStyles()
}

function resetCopyButtonStyles() {
    copyButton.style.display = 'flex'
    copyButton.innerText = "Copiar"
}
