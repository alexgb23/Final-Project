const navegador=document.querySelector('.nav-principal')
const navlogo=document.querySelector('.cont-logo')
const imglogo=document.getElementById('logo')



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



const imgCabecera = document.getElementById('imgHder');

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

// let imgCabecera=['multimedia/cart-with-oysters-caesar-salad-flutes-lemonade-1920x1080.jpg.webp',
// 'multimedia/main-dish-wild-sea-bass-fennel-potato-puree-mfrh-original-1920x1080.jpg.webp',
// 'multimedia/red-flowers-candles-mfrh-original-1920x1080.jpg.webp',
// 'multimedia/lobster-rolls-mfrh-original-1920x1080.jpg.webp',
// 'multimedia/lunch-main-beef-tenderloin-roast-vegetables-mfrh-original-1920x1080.jpg.webp']




// //crear carousel automatico con el array 
// let carousel = document.querySelector('.hdr-img');
// let img = document.createElement('img');
// img.setAttribute('id', 'imgHder');
// // img.setAttribute('class', 'img');
// img.setAttribute('src', imgCabecera[0]);
// carousel.appendChild(img);


// //cambiar imagenes automaticamente
// let i = 0;
// setInterval(function () {
//     if (i < imgCabecera.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     img.setAttribute('src', imgCabecera[i]);
   
// }
//     ,7000);
// // dar tamaños

// //animar y dar estilo
// addEventListener('load', () => {
//     interaccion()
//     // setInterval(() => {
      
//     //     interaccion()
//     //        },'42000')


// }
// );

// function interaccion(){
//     for (i=0;i<imgCabecera.length;i++){
//         setTimeout(() => {
//             img.style.transition = '14s';
//             img.style.scale = '1.5';
//         });

//         setTimeout(() => {
//             img.style.transition = 'all 8s';
//             img.style.scale = '1.2';
//         },14000);

//         setTimeout(() => {
//             img.style.transition = 'all 8s';
//             img.style.scale = '1.1';
//         },21000);

//         setTimeout(() => {
//             img.style.transition = 'all 8s';
//             img.style.scale = '0.99';
//         },34000);

//         setTimeout(() => {
//             img.style.transition = 'all 8s';
//             img.style.scale = '1.3';
//         },42000);

        

//     }
// }