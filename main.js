var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}

function initSite() {

    loadProducts()
    let main = document.createElement("div")
    main.id = "main"
    let Cardrender = document.createElement("div")
    Cardrender.id = "Cardrender"
    let cart = document.createElement("div")
    cart.id = "cart"
    let loggedIn = document.createElement("div")
    loggedIn.id = "loggedIn"
    let userBox = document.createElement("div")
    userBox.id = "userBox"
    document.getElementById("appRender").append(main, cart, loggedIn, userBox)
    main.appendChild(Cardrender)

    UserCheck()
    
}

function addProductsToWebpage() {
    for (let i = 0; i < listOfProducts.length; i++) {
        let product = listOfProducts[i];
        document.getElementById("main").appendChild(createProductCard(i))
    }
}


function createProductCard(i) {

    CartCounter()
        let Cardrender = document.getElementById("Cardrender")

        let cardBackground = document.createElement("div")
        cardBackground.id="cardBackground"

        let cardContainer = document.createElement("div")
        cardContainer.id="cardContainer"

        let imgContainer = document.createElement("div")
        imgContainer.id="imgContainer"

        let headInfoContainer = document.createElement("div")
        headInfoContainer.id= "headinfoContainer"

        let bottomInfoContainer = document.createElement("div")
        bottomInfoContainer.id= "bottomInfoContainer"

       let title = document.createElement("h3");
       title.id="title"
       title.innerHTML += listOfProducts[i].title;

       let description = document.createElement("p");
       description.id="flavorText"
       description.innerHTML += listOfProducts[i].description;

       let image = document.createElement("img");
       image.id="img"

       let imageURL = listOfProducts[i].image
       image.src = ("/assets/" +imageURL);

       let price = document.createElement("p");
       price.id="pricetag"
       price.innerHTML += listOfProducts[i].price + " kr"

       let button = document.createElement("button");
       button.id="addButton"
       button.innerHTML =  "Lägg till i kundvagnen";
       button.addEventListener("click", function() {addToCart(i)}); 

       let div = document.createElement("div")
       div.append(title, description, image, price, button);

       headInfoContainer.appendChild(title)
       headInfoContainer.appendChild(description)
       bottomInfoContainer.appendChild(price)
       bottomInfoContainer.appendChild(button)

       cardContainer.appendChild(headInfoContainer)
       imgContainer.appendChild(image)
       cardContainer.appendChild(imgContainer)
       cardContainer.appendChild(bottomInfoContainer)
       cardBackground.appendChild(cardContainer)
       Cardrender.appendChild(cardBackground)
       return div
   }
   // Check if Local storage has a list, and parse if true.
   function getCartList() {
    const cartList = localStorage.getItem("cartList")
    if (cartList) {
        return  JSON.parse(cartList)
    }
    return []
}
function counter() {
    let list = getCartList()
    if (list.length>0) {
        document.getElementById("count").innerHTML = list.length
    }
}

// Make variable from getCartList() to save new product in. Then save the variable to storage
function addToCart(i) {
    let cartToSave = getCartList()
    cartToSave.push(listOfProducts[i])
    localStorage.setItem("cartList", JSON.stringify(cartToSave))

    CartCounter()
}
function CartCounter(){
    document.getElementById("count").innerHTML = ""
    let cartCounter = getCartList()
    cartCounter = document.getElementById("count").innerHTML = cartCounter.length;
}
CartCounter()

let modalcontainer  = document.getElementById("theModal");

let modalButton = document.getElementById("modalbutton");

let span = document.getElementsByClassName("closemodal")[0];

modalButton.onclick = function(){
    modalcontainer.style.display ="block";

   }
   span.onclick =function(){
       modalcontainer.style.display = "none"
   }
   window.onclick = function(event) {
       if (event.target == modalcontainer){
        modalcontainer.style.display = "none"
       }
   }

   function showlogin(){
    document.getElementById("modalbutton").classList.remove("hide")
    document.getElementById("logoutbtn").classList.add("hide")
}

function hidelogin(){
    document.getElementById("modalbutton").classList.add("hide")
    document.getElementById("logoutbtn").classList.remove("hide")
}
function ShowOrders(){
    document.getElementById("UserPreOrders").classList.remove("hide")
}

   function UserCheck(){
       let inloggedUser = localStorage.getItem("loggedInUser")
       if (inloggedUser){
        hidelogin()
        ShowOrders()
       }
   }

