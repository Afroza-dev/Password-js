let passwordBtn = document.querySelector('.passwordBtn');
console.log(passwordBtn)
let passwordInput = document.querySelector('.passwordField input');
function passwordShow(){
    if (passwordInput.type == "password"){
       passwordInput.type ='text';
       passwordBtn.innerHTML = '<i class="bi bi-eye"></i>';
    }
else {
    passwordInput.type ='password';
    passwordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
};
}
passwordBtn.addEventListener('click', passwordShow);

let submitBtn = document.querySelector('.submitBtn');

function submitForm () {
    passwordInput.value.length > 6 ? alert('Submitted') : alert('weak password');
}

submitBtn.addEventListener('click',submitForm);