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
const asideLateralResponsive=document.querySelector('#nav-lateral-responsive')
const arrowUl=document.getElementById('arrow')
const listDownAside=document.getElementById('list-lat-ol')
const btnAceptcookies=document.getElementById('btnAceptar-cookies')
const checkCookies=document.getElementById('Acept-Privacity')
const btniSesion=document.getElementById('isesion')
const btnMostrarOcultarContraseña = document.getElementById('verContraseña')
const btnShowHideContraseñaLogin = document.getElementById('verPassword')

//////////////////variables de los inputs////////////

const inputNombre=document.getElementById('nombre')
const inputApellido1=document.getElementById('apellido1')
const inputApellido2=document.getElementById('apellido2')
const email=document.getElementById('mail')
const telefono=document.getElementById('telefono')
const direccion=document.getElementById('direccion')
const password=document.getElementById('contraseña')

let usuarioRegistrado=[{nombre:'Alexander',primerApellido:'Galvez',segundoApellido:'Benavides',correo:'alexander.galvez@estudioenpenascal.com',telefono:'688872515',direccion:'Vista Alegre 2 5D',contrasena:'1234'}]
let userSaveLocal;
let contador=0



/////////////////////////////////eventos de mover la rueda del mouse///////////////////////////////

addEventListener("scroll",() => { ///declaracion para que haga una instruccion cuando la rueda del mouse se mueva

    if (scrollY > 20 ) {              ////condicion cuando la rueda del mouse se mueve hacia abajo
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
        icoMenu.src='multimedia/pngwingModified.png'
        icoMenu.style.backgroundColor='transparent'
        btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
       
    } 
    ////condicion cuando la rueda del mouse se mueve hacia arriba y que la barra lateral
    /// no se encuentre visible porq me cambia el icono del menu/////

   else if ((scrollY < 20) && (asideLateral.style.visibility=='hidden')){ 
    navegador.removeAttribute('id')
    navlogo.removeAttribute('id')
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
  
   
////////////guardar en el local el array de usuarios registrados
   if((inputNombre.value.trim() != "")  && (email.value.trim() != "") 
   && (password.value.trim() != "")){
     usuarioRegistrado.push({nombre:inputNombre.value,primerApellido:inputApellido1.value,
      segundoApellido:inputApellido2.value,correo:email.value,telefono:telefono.value,
      direccion:direccion.value,contrasena:password.value})
      
     localStorage.setItem("Usuarios", JSON.stringify(usuarioRegistrado));
      modalLogin.style.display='none'
   }
 
   else {
    errorEnCampos()

}
})
////////////////Funcion para error en campos input vacios
function errorEnCampos(){
let inputNombreVacio=document.getElementById('errorNombre')
let inputMailVacio=document.getElementById('errorMail')
let inputPasswordVacio=document.getElementById('errorPassword')

  if(inputNombre.value.trim() == ""){
    inputNombreVacio.innerHTML='Campo Obligatorio'
    inputNombreVacio.style.color='red'
    inputNombreVacio.style.backgroundColor='black'
  }
  else if(inputNombre.value.trim()!==''){
    inputNombreVacio.innerHTML=''
  }
 if(email.value.trim() == ""){
    inputMailVacio.innerHTML='Campo Obligatorio'
    inputMailVacio.style.color='red'
    inputMailVacio.style.backgroundColor='black'
  }
  else if(email.value.trim()!==''){
    inputMailVacio.innerHTML=''
  }
  if(password.value.trim() == ""){
    inputPasswordVacio.innerHTML='Campo Obligatorio'
    inputPasswordVacio.style.color='red'
    inputPasswordVacio.style.backgroundColor='black'
  }
  else if(password.value.trim()!==''){
    inputPasswordVacio.innerHTML=''
  }
}

/////////////////////////////////////////mostrar/ocultar contraseña de registro de usuario
  btnMostrarOcultarContraseña.addEventListener('click',()=>{
    mostrarOcultarContraseña()
  })
    
  function mostrarOcultarContraseña(){
if(password.type=='password'){
  password.type='text'
  btnMostrarOcultarContraseña.src='multimedia/esconder.png'
}
else if(password.type=='text'){
  password.type='password'
  btnMostrarOcultarContraseña.src='multimedia/ver.png'
}
  }

  /////////////////////mostrar/ocultar contraseña de login
  btnShowHideContraseñaLogin.addEventListener('click',()=>{
    showHidePaswrdLgin()
  })

  function showHidePaswrdLgin(){
let inputPaswordLogin=document.getElementById('contraseñaSesion')
    if(inputPaswordLogin.type=='password'){
      inputPaswordLogin.type='text'
      btnShowHideContraseñaLogin.src='multimedia/esconder.png'
    }
    else if(inputPaswordLogin.type=='text'){
      inputPaswordLogin.type='password'
      btnShowHideContraseñaLogin.src='multimedia/ver.png'
    }
  }

/////////////////////////////Iniciar Sesion ////////////////

btniSesion.addEventListener('click',()=>{
  login()

})


//////////////////////////////funcion para iniciar sesion////////////
function login() {
  let registroInputCorreo=document.getElementById('emailSesion')
  let registroInputPassword=document.getElementById('contraseñaSesion')
 
  userSaveLocal=JSON.parse(localStorage.getItem("Usuarios"))

          for (let i = 0; i < userSaveLocal.length; i++) {
          if ((registroInputCorreo.value === userSaveLocal[i].correo) && (registroInputPassword.value === userSaveLocal[i].contrasena)) {
              console.log("Este usuario esta registrado");
              modalIniciarSesion.style.display='none'
              iniciarSesion.value='prueba'

          } else if((registroInputCorreo.value !== userSaveLocal[i].correo )){
              console.log("Este usuario no esta registrado");
         }
      }
}


//////////////////////////////////////////////eventos a realizar al clicar en icono de menu////////////////

icoMenu.addEventListener('click',(e)=>{
  if(icoMenu.id=='icono-menu'){
    abrirAside()
    
      
 
  }
 else if((icoMenu.id=='icono-cerrar')|| (icoMenu.id=='icono-cerrar-responsive')){
  cerrarAside()
  }
  })

  function abrirAside(){ 
    if(screen.width>768){
      asideLateral.style.visibility='visible'
      asideLateral.style.width='29%'
      asideLateral.style.visibility='visible'
      icoMenu.id='icono-cerrar'
      icoMenu.style.marginLeft='88%'
      icoMenu.src='multimedia/btnCerrar.png'
      icoMenu.style.backgroundColor='#a0122f'
      icoMenu.style.transition='0.4s'
      document.body.style.overflow='hidden'
      }
      else if(screen.width<=768){
      asideLateral.style.visibility='visible'
      asideLateral.style.width='60%'
      asideLateral.style.visibility='visible'
      icoMenu.id='cerrar-responsive'
      icoMenu.style.marginLeft='45%'
      icoMenu.style.top='4%'
      icoMenu.src='multimedia/btnCerrar.png'
      icoMenu.style.backgroundColor='#a0122f'
      icoMenu.style.transition='0.4s'
      document.body.style.overflow='hidden'
        }
                   
  }
  
  function cerrarAside(){     
    asideLateral.style.visibility='hidden'                                 //funcion para esconder el aside lateral
    asideLateral.style.width='0%'
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

  function desplegarArrow(){      
                                            //funcion para desplegar flecha de menu lateral y mostrar listado de opciones
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
