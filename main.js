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


/* //Knappens EventListner
addEventListener("click", function() {addToCart(i)}
//Knappens funktion
function addToCart(i) {
    cartList.push(listOfProducts[i])
} */

function initSite() {
    loadProducts();

    // This would also be a good place to initialize other parts of the UI
}



/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    function counter(){
        let cartCounter = localStorage.getItem("cartList")
        for(let i=0;i < cartCounter.length; i++)
            if(cartCounter){
                cartCounter = JSON.parse(cartCounter)
                console.log(cartCounter.length)
                let addButton = document.getElementById("addButton");
                cartCounter = document.getElementById("count").innerHTML = cartCounter.length;
        }
        else{
            cartCounter = []
        }
    }

getProducts()

   function getProducts() {
       for (let i = 0; i < listOfProducts.length; i++) {
           let product = listOfProducts[i];
           document.getElementById("main").appendChild(createProductCard(i))
       }

    }
   function createProductCard(i) {
    
    counter()
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
       price.innerHTML += listOfProducts[i].price

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

    // Make variable from getCartList() to save new product in. Then save the variable to storage
    function addToCart(i) {

    let cartToSave = getCartList()
    cartToSave.push(listOfProducts[i])
    localStorage.setItem("cartList", JSON.stringify(cartToSave))
    counter()
   }

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}