const animations = () =>{
    const locals = document.querySelector('.locals-animate')
    const advantages = document.querySelector('.advantages__img')
    const allAdvantages = document.querySelectorAll('.advantages__img')
    window.addEventListener('scroll',()=>{
        let localsPosition = locals.getBoundingClientRect().top
        let screenPosition = window.innerHeight
        if(localsPosition < screenPosition){
            locals.classList.add('activeLocals')
        }
        if(advantages.getBoundingClientRect().top < screenPosition){
            allAdvantages.forEach(item =>{
                item.classList.add('active-photo')
            })
        }
    })
}

export default animations