const facebook = () =>{
    const post = document.querySelectorAll('.fb-post-width')
    if(window.innerWidth<580){
        post.forEach(item =>{
            console.log(item)
            item.setAttribute('data-width','250')
        })
    }
}

export default facebook