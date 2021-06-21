/* var: escopo que determina as fronteiras de um código */
/* let: usado sempre por questões de boa práticas, evita problemas de conflitos de escopo*/
/* const: uma variavel contante que não é usada comumente */

/*
Da pra acessar o elemnto por 
Tag: getElementTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
      txtNome.innerHTML = 'Nome inválido!'
      txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOK = true
    }

}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'E-mail invalido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail valido!'
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length > 201){
        txtAssunto.innerHTML = 'Texto muito grande! Permitido no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){

    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }

}