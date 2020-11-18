window.addEventListener("Load",initsite)
document.getElementById("loginbtn").addEventListener("click", loginUser)
document.getElementById("logoutbtn").addEventListener("click", logoutUser)

function initsite(){
    showlogin()
}

function autenticate(){
    const loggedInUser = fetchLoggedInUser()

    if (loggedInUser){
        hidelogin()
        console.log("Logged in")
    }

}

function fetchLoggedInUser(){
    return localStorage.getItem("loggedInUser")
}

function fetchUser(){
    let Userlist = localStorage.getItem("userList")

    if(!Userlist){
        return[]
    }

    Userlist = JSON.parse(Userlist)
    return Userlist

}

function closeModal(){
    let modalcontainer  = document.getElementById("theModal");
    modalcontainer.style.display = "none"
    
}


function loginUser(){
    const Username = document.getElementById("userInput").value
    const Password = document.getElementById("passInput").value

    const Userlist =  fetchUser()

    let foundUser = undefined

    for (let i = 0; i < Userlist.length; i++) {
        const userlist = Userlist[i];
        if (Username == userlist.username && Password == userlist.password){
            closeModal()
            hidelogin()
            
            foundUser = userlist
            
        }else{
        }   
    }

    if(foundUser){
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        hidelogin()
        document.getElementById("userInput").value =""
        document.getElementById("passInput").value =""
        initLoggedIn()

    }



}

function logoutUser(){
    localStorage.removeItem("loggedInUser")
    showlogin()
    window.location="index.html"
}

function showlogin(){
    document.getElementById("modalbutton").classList.remove("hide")
    document.getElementById("logoutbtn").classList.add("hide")
}

function hidelogin(){
    document.getElementById("modalbutton").classList.add("hide")
    document.getElementById("logoutbtn").classList.remove("hide")

}
/* let users =[
    {
        username:"Grexes",
        password:"123"
    },
    {
        username:"Whilma",
        password:"123"
    },
    {
        username:"Gröna",
        password:"123"
    },

]

localStorage.setItem("Userlist", JSON.stringify(users)) */