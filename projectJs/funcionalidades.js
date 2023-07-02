const navegador = document.querySelector('.nav-principal')
const navlogo = document.querySelector('.cont-logo')
const imglogo = document.querySelector('#logo')
const btnHelp = document.querySelector('#interrogacion')
const mensajeAyuda = document.querySelector('#ayuda-btn')
const header = document.querySelector('.cabecera')
const imgCabecera = document.querySelector('#imgHder')
const iniciarSesion = document.querySelector('.btnclickNav')
const modalLogin = document.querySelector('.modal-Login')
const btnCloseISesion = document.querySelector('#btnCerrar-login')
const modalIniciarSesion = document.querySelector('.iniciarSesion')
const btnCerrarModal = document.querySelector('#btnCerrar')
const btnRegistrarse = document.querySelector('#registrarse')
const maincont = document.querySelector('.cont-general')
const btnAceptarRegistro = document.querySelector('#btnAceptar')
const cookisCont = document.querySelector('#cookis')
const icoMenu = document.querySelector('#icono-menu')
const asideLateral = document.querySelector('.nav-lateral')
const asideLateralResponsive = document.querySelector('#nav-lateral-responsive')
const arrowUl = document.querySelector('#arrow')
const listDownAside = document.querySelector('#list-lat-ol')
const btnAceptcookies = document.querySelector('#btnAceptar-cookies')
const checkCookies = document.querySelector('#Acept-Privacity')
const btniSesion = document.querySelector('#isesion')
const btnMostrarOcultarContrasena = document.querySelector('#verContrasena')
const btnShowHideContraseñaLogin = document.querySelector('#verPassword')
const contWassap=document.querySelector('.pie-pag')
const btnsliderNext=document.querySelector('#btnsliderAdelante')
const btnsliderAtras=document.querySelector('#btnsliderAtras')
const imgDisp=document.querySelector('#disp__right-slider')
let nombreUsuario;


//////////////////variables de los inputs de registrar usuarios////////////

const inputNombre = document.querySelector('#nombre')
const inputApellido1 = document.querySelector('#apellido1')
const inputApellido2 = document.querySelector('#apellido2')
const email = document.querySelector('#mail')
const telefono = document.querySelector('#telefono')
const direccion = document.querySelector('#direccion')
const password = document.querySelector('#contrasenna')

//////////////////variables de los inputs login////////////

let registroInputCorreo = document.querySelector('#emailSesion')
let registroInputPassword = document.querySelector('#contrasenaSesion')
let noregistro = document.querySelector('#noregistered')

/////////////////////array de usuarios registrados que no cambian////////////
let usuarioRegistrado = [{ nombre: 'Alexander', primerApellido: 'Galvez', segundoApellido: 'Benavides', correo: 'alexander.galvez880208@gmail.com', telefono: '688872515', direccion: 'Vista Alegre 2 5D', contrasena: '1234' }]




/////////////////////////////////eventos de mover la rueda del mouse///////////////////////////////

document.addEventListener("scroll", () => { ///declaracion para que haga una instruccion cuando la rueda del mouse se mueva

  if ((window.scrollY > 20) && (icoMenu.id == 'icono-menu')) {              ////condicion cuando la rueda del mouse se mueve hacia abajo
    navegador.setAttribute('id','cont-del-nav')
    navlogo.setAttribute('id','logo-modified') 
    imglogo.src='multimedia/logomod.png'
    icoMenu.src='multimedia/pngwingModified.png'
    icoMenu.style.backgroundColor = 'transparent'
    btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937copyBlack.png'
  }

  ////condicion cuando la rueda del mouse se mueve hacia arriba y que la barra lateral
  /// no se encuentre visible porq me cambia el icono del menu/////

  if ((window.scrollY < 20) && (asideLateral.style.visibility === 'hidden')) {
    navegador.removeAttribute('id')
    navlogo.removeAttribute('id')
    icoMenu.style.backgroundColor = '#dc143c3b'
    icoMenu.src='multimedia/pngwing.com.png'
    imglogo.src='multimedia/logo.png'
    btnHelp.src='multimedia/kisspng-computer-icons-question-mark-vector-graphics-clip-font-questioncircleo-svg-png-icon-free-download-5c0dda6aa958e3.8118011315444117546937.png'
  }

});

//////////////////funcion para cuando carga la pagina que cargue las fotos de portada
//// haga el slider con transision y se repita y salgan las cookis 

addEventListener('load', () => {
  localStorage.setItem("Usuarios", JSON.stringify(usuarioRegistrado));
  cambiarCirculosSlider()
  colocarFecha()

if(header.id == 'cab-Index') {
  sliderHeadIndex()
  setInterval(() => {
    sliderHeadIndex()
  }, '150001')
  setTimeout(() => {
    crearDivWassap()
  },'10000')
   cokis()
}
else if(header.id == 'cab-Tragos') {
  sliderHeadBebidas()
  setInterval(() => {
    sliderHeadBebidas()
  }, '300001')
}
else if(header.id == 'cab-Menus') {
  sliderHeadMenus()
  setInterval(() => {
    sliderHeadMenus()
  }, '200001')
}
else if(header.id == 'cab-Chef') {
  sliderHeadChef()
  setInterval(() => {
    sliderHeadChef()
  }, '200001')
}
else if(header.id == 'cab-DeeJae') {
  sliderHeadDJae()
  setInterval(() => {
    sliderHeadDJae()
  }, '200001')
}
})


function cokis() {            //////funcion para que se active el contenido de las cookis
  setTimeout(() => {
    cookisCont.style.display = 'block';
    document.body.style.overflow = 'hidden'
  }, '3000');
  btnAceptcookies.setAttribute('disabled', 'true')
}

function sliderHeadIndex() {
  imgCabecera.src = 'multimedia/cart-with-oysters-caesar-salad-flutes-lemonade-1920x1080.jpg.webp'
  imgCabecera.style.transition = '8s'
  imgCabecera.style.scale = '1.5'

  setTimeout(() => {
    imgCabecera.src = 'multimedia/main-dish-wild-sea-bass-fennel-potato-puree-mfrh-original-1920x1080.jpg.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '50000');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/red-flowers-candles-mfrh-original-1920x1080.jpg.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.3'
  }, '50001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/lobster-rolls-mfrh-original-1920x1080.jpg.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '100001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/lunch-main-beef-tenderloin-roast-vegetables-mfrh-original-1920x1080.jpg.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '150001');
}

function sliderHeadChef() {
  imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-pietro-jeng-671956_4_11zon.webp'
  imgCabecera.style.transition = '8s'
  imgCabecera.style.scale = '1.5'

  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-elevate-1267320_2_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '50000');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-elle-hughes-2696064_3_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.3'
  }, '50001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-fidel-hajj-2814828_7_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '100001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-huy-phan-1422384_8_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '150001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgChef/AnyConv.com__pexels-pixabay-262978_5_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '200001');
}

/////////////////funcion para que se carguen las imagenes del head con transiciones automaticas

function sliderHeadDJae() {
  imgCabecera.src = 'multimedia/imgDeeJae/dj-para-fiestas-en-casa.jpg.webp'
  imgCabecera.style.transition = '8s'
  imgCabecera.style.scale = '1.5'

  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgDeeJae/dj-para-musica-de-fiestas-en-navarra-factoriadj_2_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '50000');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgDeeJae/fiestas-madrid-julio-1024x597_3_11zon.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.3'
  }, '50001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgDeeJae/WSQLVVCUYJCT7A3GYYACNFJGUU_4_11zon'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '100001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgDeeJae/Genesis-e1469136442640.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '150001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgDeeJae/shutterstock_219317206.webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '200001');

}

function sliderHeadMenus() {
  imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(1).webp'
  imgCabecera.style.transition = '8s'
  imgCabecera.style.scale = '1.5'

  setTimeout(() => {
    imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(2).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '50000');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(3).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.3'
  }, '50001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(4).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '100001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(5).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '150001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/ImgMenus/AnyConv.com__wallpaperflare.com_wallpaper(6).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '200001');
}

function sliderHeadBebidas() {
  imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(1).webp'
  imgCabecera.style.transition = '8s'
  imgCabecera.style.scale = '1.5'

  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(2).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '50000');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(3).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.3'
  }, '50001');
  setTimeout(() => {
    imgCabecera.src ='multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(4).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '0.99'
  }, '100001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(5).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '150001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(6).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '200001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(7).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '250001');
  setTimeout(() => {
    imgCabecera.src = 'multimedia/imgTragos/AnyConv.com__wallpaperflare.com_wallpaper(8).webp'
    imgCabecera.style.transition = '8s'
    imgCabecera.style.scale = '1.2'
  }, '300001');
}

////////////aqui se le da funcionalidad al boton de ayuda del nav, se activa y desactiva el contenedor

btnHelp.addEventListener('click', () => {
  if (mensajeAyuda.style.display == 'none') {
    mensajeAyuda.style.display = 'block'
  }
  else if (mensajeAyuda.style.display == 'block') {
    mensajeAyuda.style.display = 'none'
  }
})

////////////////////////funcion para mostrar la modal Iniciar Sesion

iniciarSesion.addEventListener('click', () => {
  if (modalIniciarSesion.style.display == 'none') {
    modalIniciarSesion.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalIniciarSesion.style.opacity = '1'
  }
})

btnCloseISesion.addEventListener('click', () => { ////funcion para cerrar la modal de registro de usuarios
  if (modalIniciarSesion.style.display == 'block') {
    modalIniciarSesion.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
})

////////////////////////funcion para mostrar la modal de registro de usuarios

btnRegistrarse.addEventListener('click', () => {
  if (modalLogin.style.display == 'none') {
    modalLogin.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalLogin.style.opacity = '1'
  }
})

btnCerrarModal.addEventListener('click', () => { ////funcion para cerrar la modal de registro de usuarios
  if (modalLogin.style.display == 'block') {
    modalLogin.style.display = 'none'
    modalIniciarSesion.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
})


////funcion para aceptar registro y recoger datos de los input

btnAceptarRegistro.addEventListener('click', () => { 


  ////////////guardar en el local el array de usuarios registrados
  let noregistrado=document.querySelector('#texto--cambiante')
  let traerLocalRegistro = JSON.parse(localStorage.getItem("Usuarios"))
  let mailLocalRegistro = traerLocalRegistro.map(element => element.correo)
  let contemail = 0

 ////////////recorrer y comparar el array de usuarios registrados
  for (let i = 0; i < mailLocalRegistro.length; i++) {
    if (email.value === mailLocalRegistro[i]) {
      contemail = 1
    }
  }

   ////////////condiciones para el registro
  if ((inputNombre.value.trim() == "") || (email.value.trim() == "")
    || (password.value.trim() == "")) {
    errorEnCampos()
  }

  else if ((inputNombre.value.trim() != "") && (email.value.trim() != "")
    && (password.value.trim() != "") && (contemail == 1)) {
      noregistrado.textContent = '"Este correo ya existe en nuestra base de Datos. Por favor Inicie Sesion"'
      noregistrado.style.color = 'red'
      noregistrado.style.fontSize = '1.5em'
      noregistrado.style.backgroundColor = 'black'

      btnAceptarRegistro.addEventListener('click', () => {
        modalLogin.style.display = 'none'
        noregistrado.textContent='Ahora es el momento de conocerte a ti, estamos ansiosos por Ayudarte.'
        noregistrado.style.color = 'white'
        noregistrado.style.fontSize = ''
        noregistrado.style.backgroundColor = 'transparent'
      })
  }

  else if ((inputNombre.value.trim() != "") && (email.value.trim() != "")
    && (password.value.trim() != "") && (contemail == 0)) {
    usuarioRegistrado.push({
      nombre: inputNombre.value, primerApellido: inputApellido1.value,
      segundoApellido: inputApellido2.value, correo: email.value, telefono: telefono.value,
      direccion: direccion.value, contrasena: password.value
    })

    localStorage.setItem("Usuarios", JSON.stringify(usuarioRegistrado));
    modalLogin.style.display = 'none'
  }

})
////////////////Funcion para error en campos input vacios
function errorEnCampos() {
  if (inputNombre.value.trim() == "") {
    inputNombre.setAttribute('placeholder', '"Campo Obligatorio"')
  }
  if (email.value.trim() == "") {
    email.setAttribute('placeholder', '"Campo Obligatorio"')
  }
  if (password.value.trim() == "") {
    password.setAttribute('placeholder', '"Campo Obligatorio"')
  }

}

/////////////////////////////////////////mostrar/ocultar contraseña de registro de usuario

btnMostrarOcultarContrasena.addEventListener('click', () => {
  mostrarOcultarContraseña()
})

function mostrarOcultarContraseña() {
  if (password.type === 'password') {
    password.type = 'text'
    btnMostrarOcultarContrasena.src = 'multimedia/esconder.png'
  }
  else if (password.type === 'text') {
    password.type = 'password'
    btnMostrarOcultarContrasena.src = 'multimedia/ver.png'
  }
}

/////////////////////mostrar/ocultar contraseña de login
btnShowHideContraseñaLogin.addEventListener('click', () => {
  showHidePaswrdLgin()
})

function showHidePaswrdLgin() {

  if (registroInputPassword.type == 'password') {
    registroInputPassword.type = 'text'
    btnShowHideContraseñaLogin.src = 'multimedia/esconder.png'
  }
  else if (registroInputPassword.type == 'text') {
    registroInputPassword.type = 'password'
    btnShowHideContraseñaLogin.src = 'multimedia/ver.png'
  }
}

/////////////////////////////Iniciar Sesion ////////////////

btniSesion.addEventListener('click', () => {
  login()
})


/////////////funcion para iniciar sesion si se cumplen las condiciones de registro de usuarios////////////
let nombreLocal
function login() {

  let userSaveLocal = JSON.parse(localStorage.getItem("Usuarios"))
  let contraseñasdelLocal = userSaveLocal.map(element => element.contrasena)
  let correosdelLocal = userSaveLocal.map(element => element.correo)
  nombreLocal = userSaveLocal.find(element => element.correo === registroInputCorreo.value)
  let contCorreo = 0
  let contContraseña = 0

  for (let i = 0; i < correosdelLocal.length; i++) {
    if (registroInputCorreo.value === correosdelLocal[i]) {
      contCorreo = 1
    }
  }
  for (let i = 0; i < contraseñasdelLocal.length; i++) {
    if (registroInputPassword.value === contraseñasdelLocal[i]) {
      contContraseña = 1
    }
  }

  if (contCorreo == 1 && contContraseña == 1) {
    modalIniciarSesion.style.display = 'none'
    document.body.style.overflow = 'auto'
    iniciarSesion.innerHTML = 'Bienvenido/a ' + '<br>' + nombreLocal.nombre + '<img src="multimedia/kisspng-computer-icons-user-profile-avatar-5ab752869bb860.8278856115219636546379.png" alt="usuario" id="usuario">'
    iniciarSesion.src = 'multimedia/usuario.png'
    nombreUsuario = nombreLocal.nombre
  }
  else if (contCorreo == 1 || contContraseña == 0) {
    registroInputPassword.value = ''
    registroInputPassword.setAttribute('placeholder', '"CONTRASEÑA INCORRECTA"')
  }
}



///////////////////////////////validar si el usuario existe/////////////////////

registroInputPassword.addEventListener('click', () => {

  let traerLocal = JSON.parse(localStorage.getItem("Usuarios"))
  let mailLocal = traerLocal.map(element => element.correo)
  let contCorreo = 0

  for (let i = 0; i < mailLocal.length; i++) {
    if (registroInputCorreo.value === mailLocal[i]) {
      contCorreo = 1
    }
  }

  if (contCorreo == 0) {
    registroInputCorreo.value = ''
    registroInputCorreo.setAttribute('placeholder', '"USUARIO DESCONOCIDO (REGISTRESE)"')
  }

})

//////////////////////////////////////////////eventos a realizar al clicar en icono de menu////////////////

icoMenu.addEventListener('click', () => {
  if (icoMenu.id == 'icono-menu') {
    abrirAside()
  }

  else if ((icoMenu.id == 'icono-cerrar') || (icoMenu.id == 'cerrar-responsive')) {
    cerrarAside()
  }
})

function abrirAside() {
  if (screen.width > 768) {
    asideLateral.style.visibility = 'visible'
    asideLateral.style.width = '29%'
    icoMenu.id = 'icono-cerrar'
    icoMenu.style.marginLeft = '90%'
    icoMenu.src = 'multimedia/btnCerrar.png'
    icoMenu.style.backgroundColor = '#a0122f'
    icoMenu.style.transition = '0.4s'
    document.body.style.overflow = 'hidden'
  }
  else if (screen.width <= 768) {
    asideLateral.style.visibility = 'visible'
    asideLateral.style.width = '60%'
    icoMenu.id = 'cerrar-responsive'
    icoMenu.style.marginLeft = '45%'
    icoMenu.style.top = '5%'
    icoMenu.src = 'multimedia/btnCerrar.png'
    icoMenu.style.backgroundColor = '#a0122f'
    icoMenu.style.transition = '0.4s'
    document.body.style.overflow = 'hidden'
  }

}

function cerrarAside() {                          //funcion para esconder el aside lateral
  asideLateral.style.visibility = 'hidden'
  asideLateral.style.width = '0%'
  asideLateral.style.transition = '0s'
  icoMenu.id = 'icono-menu'
  icoMenu.src = 'multimedia/pngwing.com.png'
  icoMenu.style.marginLeft = '15%'
  icoMenu.style.backgroundColor = '#dc143c3b'
  document.body.style.overflow = 'auto'
}

//////////////////////////////////////////////eventos a realizar al clicar en flecha del menu lateral////////////////////////////

arrowUl.addEventListener('click', () => {                     //funcion para desplegar flecha de menu lateral
  if (arrowUl.style.rotate !== '-180deg') {
    desplegarArrow()
  }
  else if (arrowUl.style.rotate == '-180deg') {
    replegarArrow()
  }

})

function desplegarArrow() {
  //funcion para desplegar flecha de menu lateral y mostrar listado de opciones
  arrowUl.style.rotate = '-180deg'
  arrowUl.style.transition = '0.5s'
  listDownAside.style.display = 'block'
  asideLateral.style.overflow = 'auto'
}

function replegarArrow() {                          //funcion para replegar flecha de menu lateral y ocultar listado de opciones
  arrowUl.style.rotate = '0deg'
  arrowUl.style.transition = '0.5s'
  listDownAside.style.display = 'none'
}
//////////////////////////////////////////////eventos a realizar al clicar en boton de aceptar cookies////////////////////////////
if(checkCookies)
checkCookies.addEventListener('click', () => {
  if (checkCookies.checked == true) {
    btnAceptcookies.style.opacity = '1'
    btnAceptcookies.removeAttribute('disabled')
    btnAceptcookies.style.cursor = 'pointer'
  }
  else if (checkCookies.checked !== true) {
    btnAceptcookies.style.opacity = '0.3'
    btnAceptcookies.setAttribute('disabled', 'true')
  }
})

if(btnAceptcookies)
btnAceptcookies.addEventListener('click', () => {
  cookisCont.style.display = 'none'
  document.body.style.overflow = 'auto'
})


/////////////////////condicionales de botones/////////////////////////////////


document.addEventListener('click', e => {
  if((e.target.className=='btnclick') && (e.target.innerHTML=='VER SERVICIO DE DJ »')){
    location.href = 'DeeJae.html'
  }
  else if((e.target.className=='btnclick') && (e.target.innerHTML=='VER CHEF DISPONIBLES »')){
    location.href = 'Chef.html'
  }
  else if((e.target.id=='s3artR-Btn2')){
    location.href = 'Bebidas.html'
  }
  else if((e.target.id=='s1artR-Btn2')){
    location.href = 'tiposMenus.html'
  }
  else if((e.target.className=='icnsRedes') && (e.target.alt=='Red social instagram')){
    location.href = 'https://www.instagram.com/'
  }
  else if((e.target.className=='icnsRedes') && (e.target.alt=='Red social facebook')){
    location.href = 'https://es-es.facebook.com/'
  }
  else if((e.target.className=='icnsRedes') && (e.target.alt=='red social linkedin')){
    location.href = 'https://es.linkedin.com/?src=go-pa&trk=sem-ga_campid.18146679037_asid.140850334975_crid.619061882347_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.20271&mcid=6968657504633266178&cid=&gclid=Cj0KCQjwy9-kBhCHARIsAHpBjHgFDljIVo6L3-49VRGvOgSnVR-zjwloIGdC3eX1J2PqJXDGwdK-nsEaAgQcEALw_wcB&gclsrc=aw.ds'
  }
  else if((e.target.className=='icnsRedes') && (e.target.alt=='red sicial twitter')){
    location.href = 'https://twitter.com/?lang=es'
  }
  else if((e.target.className=='icnsRedes') && (e.target.alt=='icono de ubicacion')){
    location.href = 'https://www.google.es/maps/preview'
  }
  else if((e.target.className=='btnclickAside')){
    location.href = 'index.html'
  }
  else if(e.target.id=='fter-contact'){
    location.href = 'disponibilidad.html'
    
  }
  else if((e.target.id=='img-diferente')){
    crearDivWassap()
  }
  else if(e.target.id !=='interrogacion'){
    mensajeAyuda.style.display = 'none'
  }
})


function crearDivWassap(){
 
  let divWassap=document.createElement('div')
  divWassap.id='divWassap'
  contWassap.appendChild(divWassap)

  let wassapContainer=document.createElement('div')
  wassapContainer.id='wassap-container'
  wassapContainer.innerHTML='<p id="textopowBy"> powered by <span id="spanWassap"> Join.chat </span></p>'
  divWassap.appendChild(wassapContainer)

  let wassapContainer2=document.createElement('div')
  wassapContainer2.id='container2'
  divWassap.appendChild(wassapContainer2)

  let texto=document.createElement('p')
  texto.id='textoWsP'
  texto.textContent='Hola, Bienvenid@ a Gourmet Moments. ¿En qué podemos ayudarte?'
  wassapContainer2.appendChild(texto)

 let btnenviar=document.createElement('button')
 btnenviar.id='btnenviarWS'
 btnenviar.textContent='Abrir el Chat'
 btnenviar.addEventListener('click', () => {
  if(nombreUsuario==undefined){
    alert('Inicie Sesion Primero para poder enviar mensajes')
  }
  else{
    location.href = 'https://api.whatsapp.com/send?phone=34688872515&text=Hola%20mi%20nombre%20es:'+nombreUsuario+'%20quiero%20informacion%20sobre%20Gourmet%20Moments'
  }
  
})
 divWassap.appendChild(btnenviar)

 let imgbtn=document.createElement('img')
 imgbtn.id='imgbtnWsp'
 imgbtn.src='multimedia/kisspng-computer-icons-send-5adc7d833d7dc9.8193747515243994912519.png'
 btnenviar.appendChild(imgbtn)

  let btnCloseWassap=document.createElement('img')
  btnCloseWassap.id='btnCloseWassap'
  btnCloseWassap.src='multimedia/btnCerrar.png'
  btnCloseWassap.addEventListener('click', () => {
      divWassap.remove()
})
  wassapContainer.appendChild(btnCloseWassap)
}

// document.addEventListener('click', (e) => {
//   if((e.target.className=='list-lat-down') && (e.target.textContent=='Dee Jae')){
//     location.href = 'DeeJae.html'
//   }
//  else if((e.target.className=='list-lat-down') && (e.target.textContent=='Cocteles y Bebidas')){
//     location.href = 'Bebidas.html'
//   }
//  else if((e.target.className=='list-lat-down') && (e.target.textContent=='Nuestros Chef')){
//     location.href = 'Chef.html'
//   }
//  else if((e.target.className=='list-lat-down') && (e.target.textContent=='Menus')){
//     location.href = 'tiposMenus.html'
//   }
//  else if((e.target.className=='list-lat-down') && (e.target.textContent=='Contactenos')){
//     location.href = 'disponibilidad.html'
//   }
 
// })

function colocarFecha(){
  const pDeFecha= document.querySelector('#fecha')
  let fecha
  const fechaActual = new Date();

  const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

   fecha=fechaActual.toLocaleDateString('es-ES', opciones)

  pDeFecha.textContent='Bolueta, '+' Grupo Peñascal, '+ fecha+'.';
}

                     ///////////*array de imagenes del slider/////

let arrayImgSlider=['multimedia/slider/imagen0.jpg','multimedia/slider/imagen1.jpg','multimedia/slider/imagen2.jpg','multimedia/slider/imagen3.jpg',
                    'multimedia/slider/imagen4.jpg','multimedia/slider/imagen5.jpg','multimedia/slider/imagen6.jpg'
                    ,'multimedia/slider/imagen7.jpg','multimedia/slider/imagen8.jpg','multimedia/slider/imagen9.jpg','multimedia/slider/imagen10.jpg']


                    ///////btn de slider adelante y atras y q haga el active del boton //////

if(btnsliderNext)
btnsliderNext.addEventListener('click', () => {
  sliderAdelante()
  cambiarCirculosSlider()
})

if(btnsliderAtras)
btnsliderAtras.addEventListener('click', () => {
  sliderAtras()
  cambiarCirculosSlider()
})


                    //funcion para desplegar slider hacia adelante y atras///////////////
let indiceImagen = 0
function sliderAdelante(){
  setTimeout(() => {
    btnsliderNext.src='multimedia/simbolo-de-doble-flecha-derecha-de-avance-rapido-black-right.png'
  })
  setTimeout(() => {
    btnsliderNext.src='multimedia/simbolo-de-doble-flecha-derecha-de-avance-rapido-right.png'
  },'80')

  if(indiceImagen < arrayImgSlider.length-1){
    indiceImagen++
    imgDisp.src = arrayImgSlider[indiceImagen]
  }
  else{
    indiceImagen = 0
    imgDisp.src =  arrayImgSlider[indiceImagen]
  }  
}

function sliderAtras(){
  setTimeout(() => {
    btnsliderAtras.src='multimedia/simbolo-de-doble-flecha-derecha-de-avance-rapido-black-left.png'
  })
  setTimeout(() => {
    btnsliderAtras.src='multimedia/simbolo-de-doble-flecha-derecha-de-avance-rapido-left.png'
  },'80')

  if(indiceImagen > 0){
    indiceImagen--
    imgDisp.src = arrayImgSlider[indiceImagen]
  }
  else{
    indiceImagen = arrayImgSlider.length-1
    imgDisp.src = arrayImgSlider[indiceImagen]
  }
}
  
function cambiarCirculosSlider(){
  let circulos=document.querySelectorAll('.disp__span-circle')
  circulos.forEach((circulo)=>{
    if(circulo.id=='Circle'+indiceImagen){
      circulo.style.backgroundColor = 'red'
    }
    else{
      circulo.style.backgroundColor = 'white'
    }
  
  })
}




