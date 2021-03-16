import {validateName, validateEmail, validateMessage, validateZgodaEmail, validateZgodaOferta} from './validateForm.js'

const sendingMail = () => {
    const sendButton = document.querySelector('.contact-form__button')
sendButton.addEventListener("click", function(event){
    let nameValidation = validateName()
    let mailValidation = validateEmail()
    let messageValidation = validateMessage()
    let emailZgodaValidation = validateZgodaEmail()
    let ofetaZgodaValidation = validateZgodaOferta()
   // console.log(`name: ${nameV}, mail: ${mailV}, message: ${messageV}`)
    if(nameValidation && mailValidation && messageValidation && emailZgodaValidation && ofetaZgodaValidation){
        let data = new URLSearchParams();
        data.append("name", document.querySelector('#name').value)
        data.append("email", document.querySelector('#email').value)
        data.append("phone", document.querySelector('#phone').value)
        data.append("message", document.querySelector('#message').value)
        fetch("../kontakt.php", {
            method: "post",
            body: data
        })
        .then(function(response){
            return response.text();
        })
        .then(function(text){
            console.log(text)
        })
        .catch(function(error){
            console.log(error)
        })
        //return false;
        event.preventDefault()
        let myForm = document.querySelector(".contact-form__form");
        myForm.innerHTML = `<div class="contact-form__confirmation">
        <h4>Dziękujemy za wiadomość.</h4>
        <p>Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
        </div>`
    }else{
        event.preventDefault()
    }
})
}

export default sendingMail