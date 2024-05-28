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
/* Codigo Lixo*/
$(document).ready(function(){
    $('#barraPesquisa').focus(function(){
        $('#barraPesquisa').css({"outline": "none", "border": "1.2px solid rgb(6, 6, 141)" });
    });
    $('#barraPesquisa').blur(function(){
        $('#barraPesquisa').css({"outline": "none", "border": "1px solid rgb(35, 35, 203)" });
    });
});
