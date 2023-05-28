const formContainer = document.getElementById('main-form');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputText = document.getElementById('input-query');
const formButton = document.getElementById('form-button');

formButton.addEventListener('onClick', 
    sendInfo; reset()
) 

function sendInfo() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : inputEmail.value,
        Subject : "New COntact Form Inquiry",
        Body : inputText.value
    }).then(
      message => alert('Message sent successfully')
    );
}

