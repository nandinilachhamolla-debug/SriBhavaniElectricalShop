// SEARCH FUNCTION

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let productName = card.querySelector("h3")
        .textContent.toLowerCase();

        if(productName.includes(filter)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

});


// ADD TO CART FUNCTION

let cartCount = 0;

let cart = document.getElementById("cart");

let buttons = document.querySelectorAll(".cartBtn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        cartCount++;

        cart.textContent = "Cart: " + cartCount;

        alert("Product Added to Cart ✅");

    });

});
// LOGIN BUTTON

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){

    alert("Login Successful ✅");

});