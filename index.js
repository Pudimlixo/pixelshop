var redirect = document.getElementById('srcpesquisar')

redirect.addEventListener('keydown', function(event){
    if((event.key == "Enter") && (redirect.value == "Produto 1")){

        window.location = 'PixelShop-Loja-Virtual/produto1.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 2")){

        window.location = 'PixelShop-Loja-Virtual/produto2.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 3")){

        window.location = 'PixelShop-Loja-Virtual/produto3.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 4")){

        window.location = 'PixelShop-Loja-Virtual/produto4.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 5")){

        window.location = 'PixelShop-Loja-Virtual/produto5.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 6")){

        window.location = 'PixelShop-Loja-Virtual/produto6.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 7")){

        window.location = 'PixelShop-Loja-Virtual/produto7.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 8")){

        window.location = 'PixelShop-Loja-Virtual/produto8.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 9")){

        window.location = 'PixelShop-Loja-Virtual/produto9.html'

    } else if((event.key == "Enter") && (redirect.value == "Produto 10")){

        window.location = 'PixelShop-Loja-Virtual/produto10.html'

    } else{
        redirect.innerText = `Nada encontrado`
    }
})

