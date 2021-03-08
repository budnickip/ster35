const contact = () =>{
    const contactBtn = document.querySelector('.open-popup')
    const askBtn = document.querySelectorAll('.open-popup-ask')
    const bookBtn = document.querySelectorAll('.open-popup-book')
    const container = document.querySelector('.popup-container')
    const layer = document.querySelector('.popup-layer')

    const textAreaText = document.querySelector('.contact-form__textarea')

    contactBtn.addEventListener('click', () =>{
        container.style.display = "flex";
        layer.style.display = "block";
    })
    askBtn.forEach(ask => {
        ask.addEventListener('click', (event)=>{
            container.style.display = "flex";
            layer.style.display = "block";
            textAreaText.innerHTML = `Interesuje mnie lokal: ${event.target.parentElement.parentElement.children[0].innerText}, proszę o więcej informacji`
          //  console.log(event.target.parentElement.parentElement.children[0].innerText)
        })
    })

    bookBtn.forEach(book =>{
        book.addEventListener('click', (event)=>{
            container.style.display = "flex";
            layer.style.display = "block";
            textAreaText.innerHTML = `Rezerwacja: ${event.target.parentElement.parentElement.children[0].innerText}, proszę o pilny kontakt`
          //  console.log(event.target.parentElement.parentElement.children[0].innerText)
        })
    })

    const closeBtn = document.querySelector('.popup-nav__close')

    closeBtn.addEventListener('click', () =>{
        container.style.display = "none";
        layer.style.display = "none";
    })
}

export default contact