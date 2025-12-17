//home
// let home=document.getElementById("home");
// let rooms=document.getElementById("Rooms")
// let aboutus=document.getElementById("Aboutus")
// let contactus=document.getElementById("contactus")


// home.onclick=function(){
//     window.scrollTo(0,0)
// }
// rooms.onclick=function(){
//     window.scrollTo(0,1650)
// }
// aboutus.onclick=function(){
//     window.scrollTo(0,930)
// }
// contactus.onclick=function(){
//     window.scrollTo(0,2300)
// }


const navbar = document.getElementById('navbar')

const logOut =()=>{
    localStorage.clear()

}

if (localStorage.getItem('token'))
    navbar.innerHTML = ` <a href="#" class="navbar-brand">Vantage</a>
    <div class="container" id="se">
      <div class="search-bar">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." aria-label="Search"
            aria-describedby="search-addon">
          <button class="btn btn-outline-secondary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item  " id="home"><a class="nav-link " href="#">Home</a></li>
      <li class="nav-item " id="Aboutus"><a class="nav-link " href="#aa">About us</a></li>
      <li class="nav-item" id="Rooms"><a class="nav-link " href="#Gards">Rooms</a></li>
      <li class="nav-item" id="contactus"><a class="nav-link " href="#fo">contact-us</a></li>
    </ul>
        <a href="index.html" onclick="logOut()"  class="btn btn-dark" id="sign">LogOut</a>

    `

else navbar.innerHTML = ` <a href="#" class="navbar-brand">Vantage</a>
    <div class="container" id="se">
      <div class="search-bar">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." aria-label="Search"
            aria-describedby="search-addon">
          <button class="btn btn-outline-secondary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
        <a href="HTML/login.html"  class="btn btn-dark" id="sign">Sign-in</a>
    <a href="HTML/register.html"  class="btn btn-dark" id="reg">Register</a>

    `
   

