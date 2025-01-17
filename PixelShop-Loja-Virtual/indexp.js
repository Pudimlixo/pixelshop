var redirect = document.getElementById('srcpesquisar')

redirect.addEventListener('keydown', function(event){
    if((event.key == "Enter") && (redirect.value == "Produto 1")){

        window.location = 'produto1.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 2")){

        window.location = 'produto2.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 3")){

        window.location = 'produto3.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 4")){

        window.location = 'produto4.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 5")){

        window.location = 'produto5.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 6")){

        window.location = 'produto6.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 7")){

        window.location = 'produto7.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 8")){

        window.location = 'produto8.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 9")){

        window.location = 'produto9.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 10")){

        window.location = 'produto10.html'

    } else{
        redirect.innerText = `Nada encontrado`
    }
})