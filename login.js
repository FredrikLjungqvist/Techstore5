
userlist = [{
  name:"Grexes",
  lastname:"Grootgram",
  password:"admin",
  list: ["samsung","honda"]
  },
  {
  name:"Whilma",
  lastname:"Whiterwhite",
  password:"Admin",
  list: [{
        "title": "iPhone X",
        "description": "Last years phone from Apple with a beautiful all display front.",
        "image": "iPhoneX.png",
        "price": 11495
    },{
        "title": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus.",
        "image": "OnePlus5.png",
        "price": 4995
    },{
        "title": "Galaxy S8",
        "description": "Really cool edge to edge smartphone from Samsung.",
        "image": "SamsungS8.png",
        "price": 7990
    },{
        "title": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "image": "LGV30.png",
        "price": 7495
    }
]
  },
  {
  name:"Gröna",
  lastname:"gröngöling",
  password:"grön",
  list: ["Iphone","Volvo"]
    }]


sessionStorage.setItem("userlist", JSON.stringify(userlist))
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
login.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let loginInput = document.getElementById("loginInput")
loginInput.addEventListener("click", Usercheck);

  /* for(i=0;i<userlist[i].list[i].length;i++)
  product = userlist.list[i] */



function Usercheck(){
  
document.getElementById("error").innerText = ""
let user = document.getElementById("inputUser").value;
let pass = document.getElementById("inputPass").value;

for(let i=0;i<userlist.length;i++){
  Users = userlist[i]
  for(let j=0;j<userlist[i].length;j++){
   product = userlist[i].list[j]

  let Username = sessionStorage.getItem("userlist", JSON.parse.toString(Users.name));
  Username = userlist[i].name
  let Password = sessionStorage.getItem("userlist", JSON.parse.toString(Users.password));
  Password = userlist[i].password

  function content(){
    let renderwrapper =document.getElementById("wrapper");
  
    let title = document.createElement("h3")
    title.innerText="Welcome" + userlist[i].name +" "+ userlist[i].lastname +" whishlist; " + userlist[i].list[j].title
    title.id = "title"
  
    renderwrapper.appendChild(title)
  }

  console.log(Username, Password)
if (Username === user && Password === pass){
    content()
    document.getElementById("myModal").style.display = "block";
    document.getElementById("error").innerText = ""
    document.getElementById("inputUser").value=""
    document.getElementById("inputPass").value=""
    
    return
    /*   alert("Welcome " + userlist[i].name +" "+ userlist[i].lastname +" whishlist; "+userlist[i].list)
  */   }
  else if (Username != user || !Password != pass){
    document.getElementById("wrapper").innerHTML=""
    document.getElementById("error").innerText = "Fel uppgifter"
    document.getElementById("inputUser").value=""
    document.getElementById("inputPass").value=""
  }
  /* else if (Username === !user || Password === !pass){
  document.getElementById("wrapper").innerHTML=""
  document.getElementById("error").innerText = "Fel uppgifter"
  return
  } */
    }  
  }
}

/* function content(){
  let renderwrapper =document.getElementById("wrapper");

  let title = document.createElement("h3")
  title.innerText="Welcome" + userlist[i].name +" "+ userlist[i].lastname +" whishlist; " + userlist[i].list[j].title
  title.id = "title"

  renderwrapper.appendChild(title)
} */