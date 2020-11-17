window.addEventListener("load", initSite)

function initSite() {
   /* let log = {
    username: "Fredrik",
    password: "123",
    orders: []
}
localStorage.setItem("loggedInUser", JSON.stringify(log)) */  
 
}


function getLoggedInUser() {
    const loggedInUser =  localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        
        return  JSON.parse(loggedInUser);
    }
    return []
}
function getCartList() {
    const cartList = localStorage.getItem("cartList");
    if (cartList) {
        return  JSON.parse(cartList);
    }
    return []
}
function printOrders() {
    let user = getLoggedInUser()
    let listCont = document.createElement("div")
    listCont.innerHTML = user.username 
    document.getElementById("render").appendChild(listCont)
}

function getOrders() {
    let user = getLoggedInUser()
    user.orders.forEach((order) => {
        
        
        
        let date = document.createElement("h4")
        date.classList.add("date")
        date.id = "dateId"
        date.innerHTML = order.date + " Totalpris " + totalPrice()
        
        document.getElementById("test").appendChild(date)
        console.log(order.date)
        order.products.forEach((product) => {
            
            let productName = document.createElement("h3")
            productName.innerHTML =  product.title
            productName.id = "productName"
            document.getElementById("test").appendChild(productName)
            console.log(productName)
            

        })
        
    
        
        
        
        
    })
}
function totalPrice() {
     

    let list = getCartList()
    let initialValue = 0;
    
    let sum = list.reduce(function (total, currentItem) {
        return total + currentItem.price;
    }, initialValue);
    
       return sum
     
    }




function saveOrder() {
    let getOrder = getCartList()
    let orderObject = {
        date: new Date().toDateString(),
        products: getOrder
    }
    
    

let loggedInUser = getLoggedInUser()
loggedInUser.orders.push(orderObject)
syncUsers(loggedInUser)
}
function getUsers() {
    const users = localStorage.getItem("userList");
    if(users){
        return JSON.parse(users)
        console.log(users)
    }
}

function syncUsers(loggedInUser) {
    let userList= getUsers()
    let userIndex = userList.findIndex((user)=>{
        return loggedInUser.username == user.username 
    })
    userList[userIndex] = loggedInUser
    localStorage.setItem("userList", JSON.stringify(userList))
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
}

/* let userList = [
    {
        username: "Fredrik",
        passowrd: "123",
        orders: []
    },
    {
        username: "Niklas",
        password: "123",
        orders: []
    }
]
localStorage.setItem("userList", JSON.stringify(userList)) */