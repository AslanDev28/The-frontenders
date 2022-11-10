class mobileNavbar {
  constructor(mobileMenu, navList, navLinks){
      this.mobileMenu = document.querySelector(mobileMenu)
      this.navList = document.querySelector(navList)
      this.navLinks = document.querySelectorAll(navLinks)
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

  handleClick() {
      this.navList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass)
      this.animateLinks()
  }

  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick)
     
  }
  
  init() {
      if(this.mobileMenu){
      this.addClickEvent()
      }
      return this;
  }
}

const MobileNavbar = new mobileNavbar(
  ".mobile-menu",
  ".nav-lista",
  ".nav-lista li",
);
MobileNavbar.init()



function validarEmail(emaill) {
    let validacao = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emaill);
    let emailSmall = document.getElementById("msgerror");
  
    if (validacao == false) {
      emailSmall.innerText = "E-mail inválido";
    } else {
      emailSmall.innerText = "";
    }
  }
  
  let email = document.getElementById("email");
  
  function entrar() {
    let usuario = document.querySelector("#email");
    let senha = document.querySelector("#senha");
  
    let msgEmail = document.querySelector("#msgerror");
  
    if (usuario.value <= 0 || senha.value <= 0) {
      usuario.setAttribute("style", "border-color: red");
      senha.setAttribute("style", "border-color: red");
      msgEmail.innerHTML = "Insira um usuário e senha válidos";
      usuario.focus();
    } else {
      alert("Você está logado!")
      location.assign("index.html")
      
    } 
   
}
  
