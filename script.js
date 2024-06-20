function navegar (){
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    }
    else {
        itens.style.display = 'block';
    }
}

function formas(){
    if(card.style.display == 'flex' && flechacima.style.display == 'inline'){
        card.style.display = 'none';
        flechacima.style.display = 'none';
        flechabaixo.style.display = 'inline';
    }
    else{
        card.style.display = 'flex';
        flechacima.style.display = 'inline';
        flechabaixo.style.display = 'none';
    } 
}

function secoes(){
    const element = document.querySelector('.offcanvas')
    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
        element.classList.remove('offcanvas')
    }else{
        menu.style.display = 'flex'
        element.classList.add('offcanvas')
    }
}

$(document).ready(function(){
    $('#barraPesquisa').focus(function(){
        $('#barraPesquisa').css({"outline": "none", "border": "1.2px solid rgb(6, 6, 141)" });
    });
    $('#barraPesquisa').blur(function(){
        $('#barraPesquisa').css({"outline": "none", "border": "1px solid rgb(35, 35, 203)" });
    });
});

function fechar(){
    if(nav.style.display == 'flex'){
        nav.style.display = 'none'
    } else{
        nav.style.display = 'flex'
    }
}

if(body.style.heigth >= '653px'){
    nav.style.display = 'none'
}