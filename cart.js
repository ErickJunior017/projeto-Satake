
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
