$('img').before('<br>');
$('#products .col').append("<button id='cart' type='button' class='btn btn-success'>Add to Cart</button>");
$('#products p').addClass('item');
$('#products p').next().removeClass('item').addClass('price');
$('.cart').append('<ul class="list-group items-purchased"></ul>');
$('.cart').append("<h5 id='sub-total'></h6>");
$('.cart').append("<h5 id='tax'></h6>");
$('.cart').append("<h4 id='total'></h4>");
$('.cart').append("<button id='ship' type='button' class='btn btn-danger'>Ship Item</button>");
$('#ship').hide();
$('#ship-item').hide();


const orderItems = [];
let $total = 0;
let $subTotal = 0;
const taxRate = 0.1;
let taxAmount = 0;
$('#products button').click(function() {
  let product = $(this).siblings('.item').text();
  let itemPrice = parseFloat($(this).siblings('.price').text().replace('$', ''));

  orderItems.push({
    name: product,
    price: itemPrice
  });

  $subTotal += orderItems[orderItems.length - 1].price;
  $('.items-purchased').append('<li class="list-group-item">' + orderItems[orderItems.length - 1].name + ' - $' + orderItems[orderItems.length - 1].price + '</li>');
  $('#sub-total').text("Sub Total: $" + $subTotal.toFixed(2));
  taxAmount = $subTotal * taxRate;
  $('#tax').text("Taxes: $" + taxAmount.toFixed(2));

  $total = $subTotal + taxAmount;
  $('#total').text("Total: $" + $total.toFixed(2));
  $('#ship').show();
});

$('#ship').click(function() {
  $('#ship-item').slideToggle();
});

$('#ship-item').submit(function() {
  alert('Order has been sent');
});
