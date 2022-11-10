
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



let msguser = document.getElementById("msgemail");

function validaEmail(field) {
  let usuario = field.value.substring(0, field.value.indexOf("@"));
  let dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    msguser.innerHTML = "<font color='green'>E-mail válido!</font>";
    console.log(validaEmail());
  } else {
    msguser.innerHTML = "<font color='red'>E-mail inválido!</font>";
    alert("Digite um e-mail válido!");
  }
}

function submit() {
  let submitEmail = document.getElementById("email");

  if (submitEmail.value == 0) {
    msguser.innerHTML = "Digite um E-mail válido!";
  } else {
    document.getElementById("formulario").submit();
    alert("E-mail de recuperação enviado com sucesso!");
  }
}