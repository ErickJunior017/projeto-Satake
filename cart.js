let iconCart = $('#shop');
let closeCart = $('.closeCart');
let body = $('body');
let main = $('main');
let iconCartSpan = $('#cartItens');
let listCartHTML = $('.listCart');
let listProducts = [{

}];

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
}
const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if(carts.length > 0){
    carts.forEach(cart => {
      totalQuantity = totalQuantity + cart.quantity;
      let newCart = document.createElement('div');
      // newCart.classList.add('item');
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
      listCartHTML.appendChild(newCart);
    })
  }
  iconCartSpan.innerHTML = totalQuantity;
}
