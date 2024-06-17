
$(document).ready(function(){
  let iconCart = $('#shop');
  let closeCart = $('.closeCart');
  let body = $('body');
  let main = $('main');
  let iconCartSpan = $('#cartItens');
  let listCartHTML = $('.listCart');
  // let listProductHTML = $('.')

  let listProducts = [
    {
      "id": 1,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 2,
      "name": "Ponta de peito bovina",
      "price": 30,
      "image": "produtos/pontadepeito.jpeg"
    },
    {
      "id": 3,
      "name": "Lagarto bovino",
      "price": 25,
      "image": "produtos/lagartobovino.jpeg"
    },
    {
      "id": 4,
      "name": "Picanha",
      "price": 85,
      "image": "produtos/picanha.jpeg"
    },
    {
      "id": 5,
      "name": "Bisteca de contra file",
      "price": 40,
      "image": "produtos/bistecadocontrafile.jpeg"
    },
    {
      "id": 6,
      "name": "Linguiça toscana Frimesa",
      "price": 20,
      "image": "produtos/linguiçatoscanaFrimesaKG.jpeg"
    },
    {
      "id": 7,
      "name": "Costelinha suína",
      "price": 20,
      "image": "produtos/costelinhasuínaKG.jpeg"
    },
    {
      "id": 8,
      "name": "Toucinho suíno",
      "price": 15,
      "image": "produtos/toicinho.jpeg"
    },
    {
      "id": 9,
      "name": "Coxa com Sobrecoxa",
      "price": 22,
      "image": "produtos/coxacomsobre.jpeg"
    },
    {
      "id": 10,
      "name": "Cebola Nacional",
      "price": 3,25,
      "image": "produtos/cebola-nacional-unidade.webp"
    },
    {
      "id": 11,
      "name": "Limão Tahity",
      "price": 0.80,
      "image": "produtos/limao-tahity.webp"
    },
    {
      "id": 12,
      "name": "Cenoura",
      "price": 2.08,
      "image": "produtos/cenoura.webp"
    },
    {
      "id": 13,
      "name": "Laranja Pera",
      "price": 2,
      "image": "produtos/laranja-pera-unidade.webp"
    },
    {
      "id": 14,
      "name": "Batata Doce",
      "price": 1.74,
      "image": "produtos/batata-doce.webp"
    },
    {
      "id": 15,
      "name": "Maçã Gala",
      "price": 3.42,
      "image": "produtos/maça.webp"
    },
    {
      "id": 16,
      "name": "Manga Palmer",
      "price": 5.28,
      "image": "produtos/manga-palmer-1-unidade.webp"
    },
    {
      "id": 17,
      "name": "Alface Americana",
      "price": 15,
      "image": "produtos/alface-americana-un.webp"
    },
    {
      "id": 18,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 19,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 20,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 21,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 22,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 23,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 24,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 25,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 26,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 27,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 28,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 29,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 30,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 31,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 32,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 33,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 34,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 35,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 36,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    }

  ];

  let carts = [];

  iconCart.click(function(){
    body.toggleClass('showCart');
  });

  closeCart.click(function(){
    body.toggleClass('showCart');
  });
  main.click(function(event){
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });
  const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
      carts = [{
        product_id: product_id,
        quantity: 1
      }]
    } else if(positionThisProductInCart < 0){
      carts.push({
        product_id: product_id,
        quantity: 1
      });
    }else{
      carts[positionThisProductInCart].quantity++;
    }
    addCartToHTML();
    addCartToMemory();
  }
  addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
  }
  const addCartToHTML = () => {
    listCartHTML.html('');
    let totalQuantity = 0;
    if(carts.length > 0){
      carts.forEach(cart => {
        totalQuantity = totalQuantity + cart.quantity;
        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.dataset.id = cart.product_id;
        let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
        let info = listProducts[positionProduct];
        newCart.innerHTML = `
          <div class="imageCart">
            <img src="${info.image}">
          </div>
          <div class="name">
            ${info.name}
          </div>
          <div class="totalPrice">
            $${info.price * cart.quantity}
          </div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${cart.quantity}</span>
            <span class="plus">></span>
        `;
        listCartHTML.append(newCart);
      })
    }
    iconCartSpan.text(totalQuantity);
  }
  listCartHTML.click((event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
      let product_id = positionClick.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if(positionClick.classList.contains('plus')){
        type = 'plus';
      }
      changeQuantity(product_id, type);
    }
  });
  const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
      switch (type){
        case 'plus':
          carts[positionItemInCart].quantity++;
          break;

        default:
          let valueChange = carts[positionItemInCart].quantity - 1;
          if(valueChange > 0){
            carts[positionItemInCart].quantity = valueChange;
          }else{
            carts.splice(positionItemInCart, 1);
          }
          break;
      }
    }
    addCartToMemory();
    addCartToHTML();
  }
  const initApp = () => {
    if(localStorage.getItem('cart')){
      carts = JSON.parse(localStorage.getItem('cart'));
      addCartToHTML();
    }
  }
  initApp();
});
