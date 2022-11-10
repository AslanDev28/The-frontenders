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



//VALIDACAO CEP e FORM////
const completarForm = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('localidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
    
}

const limparForm = (endereco) =>{
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('localidade').value = ''
    document.getElementById('estado').value = ''
    
}


const eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparForm()

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        alert('CEP NÃO ENCONTRADO!')
        
    }else {
        completarForm(endereco);
        
    }
}else{
    alert('CEP NÃO ENCONTRADO!')
    
}
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

function cadastrar(){
    let sigup = document.getElementById('endereco')
    document.getElementById('bairro')
    document.getElementById('localidade')
    document.getElementById('complemento')
    document.getElementById('estado')
    document.getElementById('num')
    document.getElementById('endereco')
    let name = document.getElementById('nome')
    let vEmail = document.getElementById('email')
    let pass = document.getElementById('senha')
    let passConf = document.getElementById('senhaConf')
    let rg = document.getElementById('RG')
   
    
    if (sigup.value <= 0 || sigup.value == 0 || sigup.value == '' || vEmail.value <= 0 || pass.value <= 0){
        alert('Por favor, preencha seu cadastro!')
        name.setAttribute("style", "border-color: red")
        vEmail.setAttribute("style", "border-color: red")
        pass.setAttribute("style", "border-color: red")
        passConf.setAttribute("style", "border-color: red")
        rg.setAttribute("style", "border-color: red")
        
    } else{
        alert('Cadastro realizado com sucesso, em até 30 minutos você receberá uma confirmação via email com as orientações de como utilizar o produto!')
        location.assign("teste.html")
    }
   
}





