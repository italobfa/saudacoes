
function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if(hora > 4 && hora < 12){
        msg.innerHTML += '<p>Tenha um Bom Dia!</p>'
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#eddac4'

    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += '<p>Tenha uma Boa Tarde!</p>'
        imagem.src = 'fototarde.png'
        document.body.style.background = '#b8cbdd'

    }else if (hora >= 18){
        msg.innerHTML += '<p>Tenha uma Boa Noite!</p>'
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#071a1b'

    }else{
        msg.innerHTML += '<p>Tenha uma Boa Madrugada!</p>'
        imagem.src = 'fotomadrugada.png'
        document.body.style.background = '#36403a'
    }
}