// CHECK IF INPUT IS EMPTY TO DISABLE SUBMIT
var inputSubmit = document.getElementById('inputSubmit')
function checkEmptyInput() {
    var inputEmail = document.getElementById('inputEmail').value
    var inputPassword = document.getElementById('inputPasswordP').value
    var inputPasswordT = document.getElementById('inputPasswordT').value
    if (inputEmail.length > 0 && inputEmail !== '' && inputPassword.length > 0 && inputPassword !== '') {
        inputSubmit.removeAttribute('disabled')
    } else {
        inputSubmit.setAttribute('disabled', true)
    }
}

// TOGGLE PASSWORD VISIBILITY
function visiblePassword(bolParams) {
    document.getElementById('inputPasswordT').value = document.getElementById('inputPasswordP').value
    if (bolParams === true) {
        document.getElementById('passwordPassword').classList.remove('d-flex')
        document.getElementById('passwordText').classList.remove('d-none')
        document.getElementById('passwordPassword').classList.add('d-none')
        document.getElementById('passwordText').classList.add('d-flex')
    } else {
        document.getElementById('passwordPassword').classList.remove('d-none')
        document.getElementById('passwordText').classList.remove('d-flex')
        document.getElementById('passwordPassword').classList.add('d-flex')
        document.getElementById('passwordText').classList.add('d-none')
    }
}