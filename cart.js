let iconCart = $('#shop');
let closeCart = $('.closeCart');
let body = $('body');

iconCart.click(function(){
  body.toggleClass('showCart');
});

closeCart.click(function(){
  body.toggleClass('showCart');
});