const validate = () =>{
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')
    const zgodaOferta = document.querySelector('#zgodaoferta')
    const zgodaEmail = document.querySelector('#zgodaemail')
    name.addEventListener('change', validateName)
    email.addEventListener('change', validateEmail)
    message.addEventListener('change', validateMessage)
    zgodaEmail.addEventListener('change', validateZgodaEmail)
    zgodaOferta.addEventListener('change', validateZgodaOferta)
}

export const validateZgodaOferta = () =>{
    const zgodaOferta = document.querySelector('#zgodaoferta')
    if(!zgodaOferta.checked){
        if(!document.querySelector('.zgodaOfertaTextError')){
            let newError = createError('zgodaTextError', 'Musisz zaznaczyć wszystkie zgody.')
            //  zgodaOferta.parentElement.insertBefore(newError, zgodaOferta.nextElementSibling)
              //zgodaOferta.parentElement.appendChild(newError)
              document.querySelector('.contact-form__form').appendChild(newError)
        }
    }else{
        document.querySelector('.zgodaTextError') ? document.querySelector('.zgodaTextError').remove() : ''
    }
    return zgodaOferta.checked
}

export const validateZgodaEmail = () =>{
    const zgodaEmail = document.querySelector('#zgodaemail')
    if(!zgodaEmail.checked){
        if(!document.querySelector('.zgodaOfertaTextError')){
            let newError = createError('zgodaTextError', 'Musisz zaznaczyć wszystkie zgody.')
            //  zgodaOferta.parentElement.insertBefore(newError, zgodaOferta.nextElementSibling)
              //zgodaOferta.parentElement.appendChild(newError)
              document.querySelector('.contact-form__form').appendChild(newError)
        }
    }else{
        document.querySelector('.zgodaTextError') ? document.querySelector('.zgodaTextError').remove() : ''
    }
    return zgodaEmail.checked
}
 
export const validateName = () =>{
    const name = document.querySelector('#name')
    const regex = /\w{3,}/g;
  /*  if(name.value.length == 0){
        return false
    } */
    if(!regex.test(name.value) || name.value.length == 0){
        if(!name.classList.contains('nameInputError')){
            name.classList.add('nameInputError')
            let newError = createError('nameTextError', 'Twoje imię musi zawierać więcej niż 3 znaki.')
            name.parentElement.insertBefore(newError, name.nextElementSibling)
        }
        return false
    }else{
        name.classList.remove('nameInputError')
        name.value = name.value.trim()
        name.value = name.value.charAt(0).toUpperCase() + name.value.slice(1)
        document.querySelector('.nameTextError') ? document.querySelector('.nameTextError').remove() : ''
        return true
    }
}

export const validateEmail = () =>{
    const email = document.querySelector('#email')
    const regex = /\w{2,}\@\w{1,}\.\w{2,}/g;
  /*  if(email.value.length == 0){
        return false
    } */
    if(!regex.test(email.value) || email.value.length == 0){
        if(!email.classList.contains('emailInputError')){
            email.classList.add('emailInputError')
            let newError = createError('emailTextError', "To nie jest adres email.")
            email.parentElement.insertBefore(newError, email.nextElementSibling)
        }
        return false
    }else{
        email.classList.remove('emailInputError')
        email.value = email.value.trim()
        document.querySelector('.emailTextError') ? document.querySelector('.emailTextError').remove() : ''
        return true
    }
}


export const validateMessage = () => {
    const message = document.querySelector('#message')
    const regex = /\w{3,}/g
       /* if(message.value.length == 0){
            return false
        } */
        if(!regex.test(message.value) || message.value.length == 0){
            if(!message.classList.contains('messageInputError')){
                message.classList.add('messageInputError')
                let newError = createError('messageTextError', "Your message should contain minimum 3 characters.")
                message.parentElement.insertBefore(newError, message.nextElementSibling)
            }
            return false
        }else{
            message.classList.remove('messageInputError')
            message.value = message.value.trim()
            document.querySelector('.messageTextError') ? document.querySelector('.messageTextError').remove() : ''
            return true
        }
}



const createError = (className, text) => {
    let newError = document.createElement('p')
    newError.className = className
    newError.appendChild(document.createTextNode(text))
    return newError
}

export default validate