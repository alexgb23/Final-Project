const navegador=document.querySelector('.nav-principal')
const navlogo=document.querySelector('.cont-logo')
const imglogo=document.querySelector('#logo')
const btnHelp=document.querySelector('#interrogacion')
const mensajeAyuda=document.querySelector('#ayuda-btn')
const imgCabecera = document.querySelector('#imgHder');
const iniciarSesion=document.querySelector('.btnclickNav')
const modalLogin=document.querySelector('.modal-Login')
const btnCloseISesion=document.querySelector('#btnCerrar-login')
const modalIniciarSesion=document.querySelector('.iniciarSesion')
const btnCerrarModal=document.querySelector('#btnCerrar')
const btnRegistrarse=document.querySelector('#registrarse')
const maincont=document.querySelector('.cont-general')
const btnAceptarRegistro=document.querySelector('#btnAceptar')
const cookisCont = document.querySelector('#cookis')
const icoMenu=document.querySelector('#icono-menu')
const asideLateral=document.querySelector('.nav-lateral')
const asideLateralResponsive=document.querySelector('#nav-lateral-responsive')
const arrowUl=document.querySelector('#arrow')
const listDownAside=document.querySelector('#list-lat-ol')
const btnAceptcookies=document.querySelector('#btnAceptar-cookies')
const checkCookies=document.querySelector('#Acept-Privacity')
const btniSesion=document.querySelector('#isesion')
const btnMostrarOcultarContraseña = document.querySelector('#verContrasena')
const btnShowHideContraseñaLogin = document.querySelector('#verPassword')

//////////////////variables de los inputs deregistrar usuarios////////////

const inputNombre=document.querySelector('#nombre')
const inputApellido1=document.querySelector('#apellido1')
const inputApellido2=document.querySelector('#apellido2')
const email=document.querySelector('#mail')
const telefono=document.querySelector('#telefono')
const direccion=document.querySelector('#direccion')
const password=document.querySelector('#contrasenna')

//////////////////variables de los inputs login////////////

let registroInputCorreo=document.querySelector('#emailSesion')
let registroInputPassword=document.querySelector('#contrasenaSesion')
let noregistro=document.querySelector('#noregistered')


let usuarioRegistrado=[{nombre:'Alexander',primerApellido:'Galvez',segundoApellido:'Benavides',correo:'alexander.galvez880208@gmail.com',telefono:'688872515',direccion:'Vista Alegre 2 5D',contrasena:'1234'}]
let userSaveLocal;
let correosdelLocal;
let contraseñasdelLocal;
let contador=0



/////////////////////////////////eventos de mover la rueda del mouse///////////////////////////////

addEventListener("scroll",() => { ///declaracion para que haga una instruccion cuando la rueda del mouse se mueva

    if ((scrollY > 20) && (icoMenu.id=='icono-menu') ) {              ////condicion cuando la rueda del mouse se mueve hacia abajo
        navegador.id='cont-del-nav'
        navlogo.id='logo-modified'
        imglogo.src='multimedia/logomod.png'
        icoMenu.src='multimedia/pngwingModified.png'
        icoMenu.style.backgroundColor='transparent'
        btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
    } 
  
    ////condicion cuando la rueda del mouse se mueve hacia arriba y que la barra lateral
    /// no se encuentre visible porq me cambia el icono del menu/////

   else if ((scrollY == 0) && (asideLateral.style.visibility=='hidden')){ 
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
    },'50000');
    setTimeout(() => {
      imgCabecera.src='multimedia/red-flowers-candles-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '1.3'
    },'50001');
    setTimeout(() => {
      imgCabecera.src='multimedia/lobster-rolls-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '0.99'
    },'100001');
    setTimeout(() => {
      imgCabecera.src='multimedia/lunch-main-beef-tenderloin-roast-vegetables-mfrh-original-1920x1080.jpg.webp'
      imgCabecera.style.transition = '8s'
      imgCabecera.style.scale = '1.2'
    },'150001');
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
  if(inputNombre.value.trim() == ""){
    inputNombre.setAttribute('placeholder','"Campo Obligatorio"')
  }
 if(email.value.trim() == ""){
    email.setAttribute('placeholder','"Campo Obligatorio"')
  }
 if(password.value.trim() == ""){
    password.setAttribute('placeholder','"Campo Obligatorio"')
  }
 
}

/////////////////////////////////////////mostrar/ocultar contraseña de registro de usuario

btnMostrarOcultarContraseña.addEventListener('click',()=>{
  mostrarOcultarContraseña()
})
    
  function mostrarOcultarContraseña(){
if(password.type==='password'){
  password.type='text'
  btnMostrarOcultarContraseña.src='multimedia/esconder.png'
}
else if(password.type==='text'){
  password.type='password'
  btnMostrarOcultarContraseña.src='multimedia/ver.png'
}
  }

  /////////////////////mostrar/ocultar contraseña de login
  btnShowHideContraseñaLogin.addEventListener('click',()=>{
    showHidePaswrdLgin()
  })

  function showHidePaswrdLgin(){

    if(registroInputPassword.type=='password'){
      registroInputPassword.type='text'
      btnShowHideContraseñaLogin.src='multimedia/esconder.png'
    }
    else if(registroInputPassword.type=='text'){
      registroInputPassword.type='password'
      btnShowHideContraseñaLogin.src='multimedia/ver.png'
    }
  }

/////////////////////////////Iniciar Sesion ////////////////

btniSesion.addEventListener('click',()=>{
  login()
})


//////////////////////////////funcion para iniciar sesion////////////
function login() {
 
  userSaveLocal=JSON.parse(localStorage.getItem("Usuarios"))
  contraseñasdelLocal=userSaveLocal.map(element => element.contrasena)
  correosdelLocal=userSaveLocal.map(element => element.correo)

      userSaveLocal.forEach(element => {
        if((registroInputCorreo.value===element.correo) && (registroInputPassword.value === element.contrasena)){
          modalIniciarSesion.style.display='none'
          iniciarSesion.innerHTML='Bienvenido/a '+ '<br>'+ element.nombre  + '<img src="multimedia/kisspng-computer-icons-user-profile-avatar-5ab752869bb860.8278856115219636546379.png" alt="usuario" id="usuario">'
          iniciarSesion.src='multimedia/usuario.png'
        }
      }) 

      for(let i = 0; i < correosdelLocal.length; i++) 
      for(let i = 0; i < contraseñasdelLocal.length; i++)

       if((registroInputCorreo.value===correosdelLocal[i]) && (registroInputPassword.value !== contraseñasdelLocal[i])){
        registroInputPassword.value=''
        registroInputPassword.setAttribute('placeholder','CONTRASEÑA INCORRECTA')
          }


}

registroInputPassword.addEventListener('click',()=>{
  revisarusuarios()
})

function revisarusuarios(){
  userSaveLocal=JSON.parse(localStorage.getItem("Usuarios"))
  contraseñasdelLocal=userSaveLocal.map(element => element.contrasena)
  correosdelLocal=userSaveLocal.map(element => element.correo)
  
   for(let i = 0; i < correosdelLocal.length; i++) 
   for(let i = 0; i < contraseñasdelLocal.length; i++)
  
  if(registroInputCorreo.value !== correosdelLocal[i] ){
    registroInputCorreo.value=''
    registroInputCorreo.setAttribute('placeholder','USUARIO NO REGISTRADO')
  }
}


//////////////////////////////////////////////eventos a realizar al clicar en icono de menu////////////////

icoMenu.addEventListener('click',()=>{
  if(icoMenu.id=='icono-menu'){
    abrirAside()
  }
  
 else if((icoMenu.id=='icono-cerrar') || (icoMenu.id=='cerrar-responsive')){
  cerrarAside()
  }
  })

  function abrirAside(){ 
    if(screen.width>768){
      asideLateral.style.visibility='visible'
      asideLateral.style.width='29%'
      icoMenu.id='icono-cerrar'
      icoMenu.style.marginLeft='90%'
      icoMenu.src='multimedia/btnCerrar.png'
      icoMenu.style.backgroundColor='#a0122f'
      icoMenu.style.transition='0.4s'
      document.body.style.overflow='hidden'
      }
      else if(screen.width<=768){
      asideLateral.style.visibility='visible'
      asideLateral.style.width='60%'
      icoMenu.id='cerrar-responsive'
      icoMenu.style.marginLeft='45%'
      icoMenu.style.top='5%'
      icoMenu.src='multimedia/btnCerrar.png'
      icoMenu.style.backgroundColor='#a0122f'
      icoMenu.style.transition='0.4s'
      document.body.style.overflow='hidden'
        }
                   
  }
  
  function cerrarAside(){                          //funcion para esconder el aside lateral
    asideLateral.style.visibility='hidden' 
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
  else if(checkCookies.checked!==true){
    btnAceptcookies.style.opacity='0.3'
    btnAceptcookies.setAttribute('disabled','true')
  }
})
    btnAceptcookies.addEventListener('click',()=>{
        cookisCont.style.display='none'
        document.body.style.overflow='auto'
    })
