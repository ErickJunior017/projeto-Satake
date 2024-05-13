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