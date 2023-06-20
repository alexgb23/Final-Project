const navegador=document.querySelector('.nav-principal')
const navlogo=document.querySelector('.cont-logo')
const imglogo=document.getElementById('logo')
const btnHelp=document.getElementById('interrogacion')
const mensajeAyuda=document.getElementById('ayuda-btn')
const imgCabecera = document.getElementById('imgHder');
const iniciarSesion=document.querySelector('.btnclick')
const modalLogin=document.querySelector('.modal-Login')
const btnCloseISesion=document.querySelector('#btnCerrar-login')
const modalIniciarSesion=document.querySelector('.iniciarSesion')
const btnCerrarModal=document.getElementById('btnCerrar')
const btnRegistrarse=document.getElementById('registrarse')
const maincont=document.querySelector('.cont-general')
const btnAceptarRegistro=document.getElementById('btnAceptar')
const cookisCont = document.getElementById('cookis')
const icoMenu=document.getElementById('icono-menu')
const asideLateral=document.querySelector('.nav-lateral')
const arrowUl=document.getElementById('arrow')
const listDownAside=document.getElementById('list-lat-ol')
const btnAceptcookies=document.getElementById('btnAceptar-cookies')
const checkCookies=document.getElementById('Acept-Privacity')

let usuarioRegistrado=new Array();
let userSaveLocal;
let contador=0


/////////////////////////////////eventos de mover la rueda del mouse///////////////////////////////

addEventListener("wheel",() => { ///declaracion para que haga una instruccion cuando la rueda del mouse se mueva

    if (window.scrollY > 20 ) {              ////condicion cuando la rueda del mouse se mueve hacia abajo
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
        icoMenu.src='multimedia/pngwingModified.png'
        icoMenu.style.backgroundColor='transparent'
        btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
       
    } 
    ////condicion cuando la rueda del mouse se mueve hacia arriba y que la barra lateral
    /// no se encuentre visible porq me cambia el icono del menu/////

   else if ((window.scrollY < 20) && (asideLateral.style.visibility=='hidden')){ 
    navegador.id='0'
    navlogo.id='0'
    icoMenu.style.backgroundColor='#dc143c3b'
    icoMenu.src='multimedia/pngwing.com.png'
    imglogo.src='multimedia/logo.png'
    btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937.png'
   }
});

//////////////////funcion para cuando carga la pagina que cargue las fotos de portada
//// haga el slider con transision y se repita y salgan las cookis 

addEventListener('load', () => {
   sliderHead()
   setInterval(() => {
      sliderHead()
   },'22000')
  //  cokis()
  
})


function cokis(){            //////funcion para que se active el contenido de las cookis
  setTimeout(() => {
    cookisCont.style.display='block';
    document.body.style.overflow='hidden'
  },'3000');
  btnAceptcookies.setAttribute('disabled','true')
}

/////////////////funcion para que se carguen las imagenes del head con transiciones automaticas

function sliderHead(){
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

////////////aqui se le da funcionalidad al boton de ayuda del nav, se activa y desactiva el contenedor
 
btnHelp.addEventListener('click', ()=>{
  if(mensajeAyuda.style.display=='none'){
    mensajeAyuda.style.display='block'
  }
  else if(mensajeAyuda.style.display=='block'){
    mensajeAyuda.style.display='none'
  }
})

////////////////////////funcion para mostrar la modal Iniciar Sesion

iniciarSesion.addEventListener('click',()=>{
  if(modalIniciarSesion.style.display=='none'){
    modalIniciarSesion.style.display='block'
    document.body.style.overflow='hidden'
    modalIniciarSesion.style.opacity='1'
  }
})

btnCloseISesion.addEventListener('click',()=>{ ////funcion para cerrar la modal de registro de usuarios
 if(modalIniciarSesion.style.display=='block'){
    modalIniciarSesion.style.display='none'
    document.body.style.overflow='auto'
  }
})

////////////////////////funcion para mostrar la modal de registro de usuarios

btnRegistrarse.addEventListener('click',()=>{
  if(modalLogin.style.display=='none'){
    modalLogin.style.display='block'
    document.body.style.overflow='hidden'
    modalLogin.style.opacity='1'
  }
})

btnCerrarModal.addEventListener('click',()=>{ ////funcion para cerrar la modal de registro de usuarios
 if(modalLogin.style.display=='block'){
    modalLogin.style.display='none'
    modalIniciarSesion.style.display='none'
    document.body.style.overflow='auto'
  }
})



/////////////////////////////////////////////capturar datos de los input de registro de usuario///////////

btnAceptarRegistro.addEventListener('click',()=>{ ////funcion para aceptar registro y recoger datos de los input
    let inputNombre=document.getElementById('nombre')
    let inputApellido1=document.getElementById('apellido1')
    let inputApellido2=document.getElementById('apellido2')
    let email=document.getElementById('mail')
    let telefono=document.getElementById('telefono')
    let direccion=document.getElementById('direccion')
    let password=document.getElementById('contraseña')
   
    
   if((inputNombre.value.trim() != "")  && (email.value.trim() != "") 
   && (password.value.trim() != "")){
     usuarioRegistrado.push({nombre:inputNombre.value,primerApellido:inputApellido1.value,
      segundoApellido:inputApellido2.value,correo:email.value,telefono:telefono.value,
      direccion:direccion.value,contrasena:password.value})
      
     localStorage.setItem("Usuarios", JSON.stringify(usuarioRegistrado));

     setTimeout(() => {
      modalLogin.style.display='none'
     },2000)
   }
 
   else {
    alert("Introduzca todos los campos");
}
userSaveLocal=JSON.parse(localStorage.getItem("Usuarios"))
let prueba=userSaveLocal.map((item)=>{
  return item.correo
})
  

console.log(prueba)
})

//////////////////////////////////////////////eventos a realizar al clicar en icono de menu////////////////

icoMenu.addEventListener('click',(e)=>{
  if(icoMenu.id=='icono-menu'){
    abrirAside()
 
  }
 else if(icoMenu.id=='icono-cerrar'){
  cerrarAside()
  }
  })

  function abrirAside(){                                       //funcion para desplegar el aside lateral hacia la derecha
    asideLateral.style.width='29%'
    asideLateral.style.visibility='visible'
    icoMenu.id='icono-cerrar'
    icoMenu.style.marginLeft='88%'
    icoMenu.src='multimedia/btnCerrar.png'
    icoMenu.style.backgroundColor='#a0122f'
    icoMenu.style.transition='0.4s'
    document.body.style.overflow='hidden'
  }
  
  function cerrarAside(){                                      //funcion para esconder el aside lateral
    asideLateral.style.width=='0%'
    asideLateral.style.visibility='hidden'
    asideLateral.style.transition='0s'
    icoMenu.id='icono-menu'
    icoMenu.src='multimedia/pngwing.com.png'
    icoMenu.style.marginLeft='15%'
    icoMenu.style.backgroundColor='#dc143c3b'
    document.body.style.overflow='auto'
  }

//////////////////////////////////////////////eventos a realizar al clicar en flecha del menu lateral////////////////////////////

  arrowUl.addEventListener('click',()=>{                     //funcion para desplegar flecha de menu lateral
    if(arrowUl.style.rotate !=='-180deg'){
      desplegarArrow()
    }
    else if(arrowUl.style.rotate =='-180deg'){
      replegarArrow()
    }
  })

  function desplegarArrow(){                     //funcion para desplegar flecha de menu lateral y mostrar listado de opciones
  arrowUl.style.rotate ='-180deg'
  arrowUl.style.transition='0.5s'
  listDownAside.style.display='block'
  asideLateral.style.overflow='auto'
  }

  function replegarArrow(){                          //funcion para replegar flecha de menu lateral y ocultar listado de opciones
    arrowUl.style.rotate ='0deg'
    arrowUl.style.transition='0.5s'
    listDownAside.style.display='none'
    }
  //////////////////////////////////////////////eventos a realizar al clicar en boton de aceptar cookies////////////////////////////
checkCookies.addEventListener('click',()=>{
  if(checkCookies.checked==true){
    btnAceptcookies.style.opacity='1'
    btnAceptcookies.removeAttribute('disabled')
    btnAceptcookies.style.cursor='pointer'
  }
})
    btnAceptcookies.addEventListener('click',()=>{
        cookisCont.style.display='none'
        document.body.style.overflow='auto'
    })
