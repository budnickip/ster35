const contactNav = () =>{
    const mailBody = document.querySelector('#body-mail')
    const phoneBody = document.querySelector('#body-phone')
    const infoBody = document.querySelector('#body-info')

    const mail = document.querySelector('#popup-mail')
    const phone = document.querySelector('#popup-phone')
    const info = document.querySelector('#popup-info')


    mail.addEventListener('click', ()=>{
        mail.classList.add('active')
        if(phone.classList.contains('active')){
            phoneBody.style.opacity = 0;
            phone.classList.remove('active')
            setTimeout(()=>{
                phoneBody.style.display = "none";
                mailBody.style.display = "flex";
                mailBody.style.opacity = 1;
            }, 700)
        }

        if(info.classList.contains('active')){
            infoBody.style.opacity = 0;
            info.classList.remove('active')
            setTimeout(()=>{
                infoBody.style.display = "none";
                mailBody.style.display = "flex";
                mailBody.style.opacity = 1;
            }, 700)
          }   
    })

    info.addEventListener('click', ()=>{
        info.classList.add('active')
        if(mail.classList.contains('active')){
            mailBody.style.opacity = 0;
            mail.classList.remove('active')
            setTimeout(()=>{
                mailBody.style.display = "none";
                infoBody.style.display = "flex";
                infoBody.style.opacity = 1;
            }, 700)
        }
        
        if(phone.classList.contains('active')){
            phoneBody.style.opacity = 0;
            phone.classList.remove('active')
            setTimeout(()=>{
                phoneBody.style.display = "none";
                infoBody.style.display = "flex";
                infoBody.style.opacity = 1;
            }, 700)
        }

    })

    phone.addEventListener('click', ()=>{
        phone.classList.add('active')
      if(mail.classList.contains('active')){
        mailBody.style.opacity = 0;
        mail.classList.remove('active')
        setTimeout(()=>{
            mailBody.style.display = "none";
            phoneBody.style.display = "flex";
            phoneBody.style.opacity = 1;
        }, 700)
      }  
      if(info.classList.contains('active')){
        infoBody.style.opacity = 0;
        info.classList.remove('active')
        setTimeout(()=>{
            infoBody.style.display = "none";
            phoneBody.style.display = "flex";
            phoneBody.style.opacity = 1;
        }, 700)
      }   
    })
}

export default contactNav