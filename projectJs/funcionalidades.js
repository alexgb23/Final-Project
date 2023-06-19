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
const cookisCont = document.getElementById('cookis')
const icoMenu=document.getElementById('icono-menu')
const asideLateral=document.querySelector('.nav-lateral')
const arrowUl=document.getElementById('arrow')


addEventListener("wheel", (e) => {
    if (window.scrollY !==0) {
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
        icoMenu.src='multimedia/pngwingModified.png'
        icoMenu.style.backgroundColor='transparent'
        btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
       
    } 
   else{
    navegador.id='0'
    navlogo.id='0'
    icoMenu.style.backgroundColor='#dc143c3b'
    icoMenu.src='multimedia/pngwing.com.png'
    imglogo.src='multimedia/logo.png'
    btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937.png'
   }
});


addEventListener('load', () => {
   prueba()
   setInterval(() => {
      prueba()
   },'22000')
  //  cokis()
})


function cokis(){
  setTimeout(() => {
    cookisCont.style.display='block';
    document.body.style.overflow='hidden'
  },'3000');
}


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




icoMenu.addEventListener('click',(e)=>{
  if(icoMenu.id=='icono-menu'){
    abrirAside()
 
  }
 else if(icoMenu.id=='icono-cerrar'){
  cerrarAside()
  }
  })

  function abrirAside(){
    asideLateral.style.width='28%'
    asideLateral.style.visibility='visible'
    icoMenu.id='icono-cerrar'
    icoMenu.style.marginLeft='88%'
    icoMenu.src='multimedia/btnCerrar.png'
    icoMenu.style.backgroundColor='#a0122f'
    icoMenu.style.transition='0.4s'
    document.body.style.overflow='hidden'
    
  }

  function cerrarAside(){
    asideLateral.style.width=='0%'
    asideLateral.style.visibility='hidden'
    asideLateral.style.transition='0s'
    icoMenu.id='icono-menu'
    icoMenu.src='multimedia/pngwing.com.png'
    icoMenu.style.marginLeft='15%'
    icoMenu.style.backgroundColor='#dc143c3b'
    document.body.style.overflow='auto'
    
  }

  arrowUl.addEventListener('click',()=>{
    
    if(arrowUl.style.rotate !=='-180deg'){
      desplegarArrow()
    }
    else if(arrowUl.style.rotate =='-180deg'){
      replegarArrow()
    }
  })

  function desplegarArrow(){
  arrowUl.style.rotate ='-180deg'
  arrowUl.style.transition='0.5s'
  }

  function replegarArrow(){
    arrowUl.style.rotate ='0deg'
    arrowUl.style.transition='0.5s'
    }
  
    