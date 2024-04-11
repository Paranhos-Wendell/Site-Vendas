$(function(){
    $("#menu").click(function(){
        $("nav.mobile").toggle(500);
    })

    $("#icon").click(function(){
        $(".card-reveal").slideToggle(500);
    })

    $("#icon1").click(function(){
        $(".card-reveal-1").slideToggle(500);
    })


    $("#icon2").click(function(){
        $(".card-reveal-2").slideToggle(500);
    })


    $("#icon3").click(function(){
        $(".card-reveal-3").slideToggle(500);
    })

    $("#icon4").click(function(){
        $(".card-reveal-4").slideToggle(500);
    })


    $(".add-to-cart").click(function(e) {
      e.preventDefault();
      var productName = $(this).closest('.card-content').find('.card-title').text();
      addToCart(productName);
    });

    $(".cart-overlay").on("click", ".delete-btn", function() {
      $(this).closest(".cart-item").remove();
    });

    $(".close-cart").click(function() {
      $(".cart-overlay").fadeOut();
    });
     
    
      function addToCart(productName) {
        var cartItem = $("<li class='cart-item'>" + productName  + "<span class='delete-btn'>X</span></li>");
        $(".cart-items").append(cartItem);
        $(".cart-overlay").fadeIn();
      }
});

$(document).ready(function() {
    $(".add-to-Cart").click(function(e) {
      e.preventDefault();
      var produtoName = $(this).closest('.product-details').find('h3').text();
      var produtoPrice = $(this).closest('.product-details').find('p:eq(1)').text().split(':')[1].trim();
      addToCart(produtoName, produtoPrice);
    });
  
    $(".cart-overlay").on("click", ".delete-btn", function() {
      $(this).closest(".cart-item").remove();
    });
  
    $(".close-cart").click(function() {
      $(".cart-overlay").fadeOut();
    });
  });
  
  function addToCart(produtoName, produtoPrice) {
    var carTItem = $("<li class='cart-item'>" + produtoName + " - " + produtoPrice + " <span class='delete-btn'>X<span></li>");
    $(".cart-items").append(carTItem);
    $(".cart-overlay").fadeIn();
  }
  