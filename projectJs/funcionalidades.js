const navegador=document.querySelector('.nav-principal')
const navlogo=document.querySelector('.cont-logo')
const imglogo=document.getElementById('logo')
const btnHelp=document.getElementById('interrogacion')
const mensajeAyuda=document.getElementById('ayuda-btn')
const imgCabecera = document.getElementById('imgHder');

addEventListener("wheel", (e) => {
    if (window.scrollY !==0) {
        console.log('kajdvhjbxnmz')
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
    } 
   else{
    navegador.id='0'
    navlogo.id='0'
    imglogo.src='multimedia/logo.png'
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

