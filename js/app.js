let input = document.getElementById('email');
let iconError = document.getElementById('icon-error');
let message = document.getElementById('message-error');
let button = document.getElementById('button');

button.addEventListener("click", (e) => {
    e.preventDefault();
    

    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(input.value)){
        input.classList.remove('error-input');
        iconError.style.display='none';
        message.style.display="none";
        input.value = '';

    } else {
        input.classList.add('error-input');
        iconError.style.display="inline";
        message.style.display="inline";
    }

});

