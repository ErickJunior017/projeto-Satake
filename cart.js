
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
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 4,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 5,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 6,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 7,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 8,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 9,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 10,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 11,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 12,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 13,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 14,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 15,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 16,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 17,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 18,
      "name": "Pão Frances Unidade",
      "price": 28,
      "image": "produtos/paofrances.webp"
    },
    {
      "id": 19,
      "name": "Pão de Queijo Unidade",
      "price": 28,
      "image": "produtos/paodequijo.webp"
    },
    {
      "id": 20,
      "name": "Pão de Forma Plus Vita 480g",
      "price": 28,
      "image": "produtos/paodeforma.webp"
    },
    {
      "id": 21,
      "name": "Donut Ring Recheio de Chocolate",
      "price": 28,
      "image": "produtos/donutChocolate.webp"
    },
    {
      "id": 22,
      "name": "Sonho de Creme",
      "price": 28,
      "image": "produtos/sonhodeCreme.webp"
    },
    {
      "id": 23,
      "name": "Donut Ring Frutas Vermelhas 75g",
      "price": 28,
      "image": "produtos/donutMorango.webp"
    },
    {
      "id": 24,
      "name": "Muffin Red Velvet Melhor Bocado 80g",
      "price": 28,
      "image": "produtos/muffin.webp"
    },
    {
      "id": 25,
      "name": "Bolo de Laranja 1Kg",
      "price": 28,
      "image": "produtos/abolo_de_laranja.webp"
    },
    {
      "id": 26,
      "name": "Bolinho Ana Maria de Chocolate 70g",
      "price": 28,
      "image": "produtos/bolinhodeChocoloteDonaMaria.webp"
    },
    {
      "id": 27,
      "name": "Água Miner Crystal sem Gás 500ml",
      "price": 28,
      "image": "produtos/agua-mineral-crystal-sem-gas-500ml.webp"
    },
    {
      "id": 28,
      "name": "Coca Cola sem Açúcar 250ml",
      "price": 28,
      "image": "produtos/coca250mmlsemaçucar.webp"
    },
    {
      "id": 29,
      "name": "Pepsi 350ml",
      "price": 28,
      "image": "produtos/pepsi350ml.webp"
    },
    {
      "id": 30,
      "name": "Água Miner Crystal com Gás 1,5l",
      "price": 28,
      "image": "produtos/agua-mineral-crystal-com-gas-1-5l.webp"
    },
    {
      "id": 31,
      "name": "Cerveja Brahma Duplo Malte Lata 350Ml",
      "price": 28,
      "image": "produtos/cerv-brahma-duplo-malte-lt-sleek-350ml.webp"
    },
    {
      "id": 32,
      "name": "Cerveja Heineken Long Neck 330Ml",
      "price": 28,
      "image": "produtos/cerveja-heineken-ln-330ml.webp"
    },
    {
      "id": 33,
      "name": "Energético Monster Energy 473ml",
      "price": 28,
      "image": "produtos/energetico-monster-energy-473ml.webp"
    },
    {
      "id": 34,
      "name": "Alcatra com maminha",
      "price": 28,
      "image": "produtos/alcatra.png"
    },
    {
      "id": 35,
      "name": "Refrigerante Coca-Cola 2L",
      "price": 28,
      "image": "produtos/refrig-coca-cola-pet-2l.webp"
    },
    {
      "id": 36,
      "name": "Chá Matte Leão 24G Natural",
      "price": 28,
      "image": "produtos/cha-mate-leao-24g-natural.webp"
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
