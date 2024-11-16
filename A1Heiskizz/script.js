
        
const container = document.getElementById('container');
const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('login');

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});



// Sign Up Validation



const userPassword = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpass");
const errMessage = document.querySelector("#error-message");
const Button = document.querySelector("#submit");


Button.addEventListener('click', () => {
    if (userPassword.value === confirmPassword.value) {
        return 1;
    
    }else{
        errMessage.style.display = "block";
    }
})