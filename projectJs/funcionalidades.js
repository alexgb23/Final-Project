const navegador=document.querySelector('.nav-principal')
const navlogo=document.querySelector('.cont-logo')
const imglogo=document.getElementById('logo')
const btnHelp=document.getElementById('interrogacion')
const mensajeAyuda=document.getElementById('ayuda-btn')
const imgCabecera = document.getElementById('imgHder');
const btnregistrarUser=document.querySelector('.btnclick')
const modalLogin=document.querySelector('.modal-Login')
const btnCerrarModal=document.getElementById('btnCerrar')
const maincont=document.querySelector('.cont-general')
const btnAceptarRegistro=document.getElementById('btnAceptar')


addEventListener("wheel", (e) => {
    if (window.scrollY !==0) {
        console.log('kajdvhjbxnmz')
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
        btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
       
    } 
   else{
    navegador.id='0'
    navlogo.id='0'
    imglogo.src='multimedia/logo.png'
    btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937.png'
   }
});


addEventListener('load', () => {
   prueba()
   setInterval(() => {
      prueba()
   },'22000')
})

function prueba(){
    imgCabecera.src='multimedia/cart-with-oysters-caesar-salad-flutes-lemonade-1920x1080.jpg.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.5'
  
    setTimeout(() => {
      imgCabecera.src='multimedia/main-dish-wild-sea-bass-fennel-potato-puree-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '0.99'
    },'7000');
    setTimeout(() => {
      imgCabecera.src='multimedia/red-flowers-candles-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '1.3'
    },'12000');
    setTimeout(() => {
      imgCabecera.src='multimedia/lobster-rolls-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '0.99'
    },'18000');
    setTimeout(() => {
      imgCabecera.src='multimedia/lunch-main-beef-tenderloin-roast-vegetables-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '1.2'
    },'22000');
}


btnHelp.addEventListener('click', ()=>{
  if(mensajeAyuda.style.display=='none'){
    mensajeAyuda.style.display='block'
  }
  else if(mensajeAyuda.style.display=='block'){
    mensajeAyuda.style.display='none'
  }

})

btnregistrarUser.addEventListener('click',()=>{
  if(modalLogin.style.display=='none'){
    modalLogin.style.display='block'
    document.body.style.overflow='hidden'
    modalLogin.style.opacity='1'
  }
})

btnCerrarModal.addEventListener('click',()=>{
 if(modalLogin.style.display=='block'){
    modalLogin.style.display='none'
    document.body.style.overflow='auto'
  }
})

btnAceptarRegistro.addEventListener('click',()=>{
let inputNombre=document.getElementById('nombre')
let inputApellido1=document.getElementById('apellido1')
    console.log(inputNombre.value,inputApellido1.value)

  
})