const contact = () =>{
    const contactBtn = document.querySelector('#contact-up')
    const container = document.querySelector('.popup-container')
    const layer = document.querySelector('.popup-layer')

    contactBtn.addEventListener('click', () =>{
        container.style.display = "flex";
        layer.style.display = "block";
    })

    const closeBtn = document.querySelector('.popup-nav__close')

    closeBtn.addEventListener('click', () =>{
        container.style.display = "none";
        layer.style.display = "none";
    })
}

export default contact