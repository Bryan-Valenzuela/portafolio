var idiomaES = {
    tituloWeb:"Portafolio",
    menuHeader:"Inicio",
    menuSobre:"Sobre mi",
    menuServicios:"Servicios",
    menuProyectos:"Proyectos",
    menuContactame:"Contactame",
    hola:"Hola soy ",
    soy:"Soy Frontend developer",
    tituloSobre:"Sobre mi",
    textoSobreMi:"Soy ingeniero en software, frontend developer y autodidacta, actualmente me encuentro capacitandome en desarrollo web para convertirme en un fullstack developer",
    tituloHabilidades:"Habilidades",
    ingles:"Ingles",
    nivel:"Nativo",
    nivelEs:"Español",
    tituloAprendiendo:"Aprendiendo",
    tituloServicios:"Servicios",
    servicioFRC:"Su sitio será mostrado apropiadamente en cualquier dispositivo",
    servicioFRT:"Full responsive",
    servicioDC:"Diseño atractivo y creativo para su sitio web el cual es la cara de su negocio",
    servicioDT:"UI/UX",
    servicioDev:"Te ayudare a crear un sitio web que tus clientes amarán",
    servicioDevT:"Desarrollo",
    proyectos:"Proyectos",
    proyecto1:"Portafolio",
    proyecto3:"Trivia",
    ver:"Ver proyecto",
    contactame:"Contactame",
    campoNombre:"Nombre",
    campoAsunto:"Asunto",
    campoCorreo:"Correo",
    campoMensaje:"Descripción del mensaje",
    btnEnviar:"Enviar",
    creado:"Creado con ",
    por:" por ",
    c:"2021 Ⓒ Todos los derechos reservados.",
    formulario:"formularioES",
  }
   

var idiomaEN = { 
  tituloWeb:"Portfolio",
  menuHeader:"Home",
  menuSobre:"About me",
  menuServicios:"Services",
  menuProyectos:"Projects",
  menuContactame:"Contact me",
  hola:"Hi, I'm ",
  soy:"I am frontend developer",
  tituloSobre:"About me",
  textoSobreMi:"I am a software engineer, frontend developer and self-taught, I am currently training in web development to become a fullstack developer.",
  tituloHabilidades:"Hard skills",
  ingles:"English",
  nivel:"Native",
  nivelEs:"Spanish",
  tituloAprendiendo:"Learning",
  tituloServicios:"Services",
  servicioFRC:"Your site will display correctly on any device.",
  servicioFRT:"Fully responsive",
  servicioDC:"Attractive and creative design for your website which is the face of your business",
  servicioDT:"UI/UX",
  servicioDev:"I will help you to create a website that your customers will love.",
  servicioDevT:"Development",
  proyectos:"Projects",
  proyecto1:"Portfolio",
  proyecto3:"Quiz",
  ver:"See project",
  contactame:"Contact me",
  campoNombre:"Name",
  campoAsunto:"Subject",
  campoCorreo:"Mail",
  campoMensaje:"Message description",
  btnEnviar:"Send",
  creado:"Created with ",
  por:" by ",
  c:"2021 Ⓒ All rights reserved.",
  formulario:"formularioEN",
}

const btnIdiomaES = document.querySelector(".ES");
const btnIdiomaEN = document.querySelector(".EN");
const activoES = document.querySelector(".idiomaES");
const activoEN = document.querySelector(".idiomaEN");

const menuHeader = document.querySelector(".link-header");
const menuSobre = document.querySelector(".link-sobre-mi");
const menuServicios = document.querySelector(".link-servicios");
const menuProyectos = document.querySelector(".link-proyectos");
const menuContactame = document.querySelector(".link-contacto");
const hola = document.querySelector(".hola_land");
const soy = document.querySelector(".soy_land");
const tituloSobre = document.querySelector(".titulo_sobre");
const textoSobreMi = document.querySelector(".texto_sobre");
const tituloHabilidades = document.querySelector(".titulo_habilidades");
const ingles = document.querySelector(".habilidad_EN");
const nivel = document.querySelector(".habilidad_nativo");
const nivelEs = document.querySelector(".hablidad_ES");
const tituloAprendiendo = document.querySelector(".titulo_aprendiendo");
const tituloServicios = document.querySelector(".titulo_servicios");
const servicioFRC = document.querySelector(".servicioFRC");
const servicioFRT = document.querySelector(".servicioFRT");
const servicioDC = document.querySelector(".servicioDC");
const servicioDT = document.querySelector(".servicioDT");
const servicioDev = document.querySelector(".servicioDev");
const servicioDevT = document.querySelector(".servicioDevT");
const proyectos = document.querySelector(".titulo_proyectos");
const proyecto1 = document.querySelector(".proyecto1");
const proyecto3 = document.querySelector(".proyecto3");
const ver = document.querySelectorAll(".ver");
const contactame = document.querySelector(".titulo_contactame");
const campoNombre = document.querySelector(".campo_nombre");
const campoAsunto = document.querySelector(".campo_asunto");
const campoCorreo = document.querySelector(".campo_correo");
const campoMensaje = document.querySelector(".campo_mensaje");
const btnEnviar = document.querySelector(".btn_enviar");
const creado = document.querySelector(".creado");
const por = document.querySelector(".por");
const c = document.querySelector(".c");
const frase = document.querySelector(".frase-header");


btnIdiomaES.addEventListener('click', ()=> {

  menuHeader.innerText = idiomaES.menuHeader;
  menuSobre.innerText = idiomaES.menuSobre;
  menuServicios.innerText = idiomaES.menuServicios;
  menuProyectos.innerText = idiomaES.menuProyectos;
  menuContactame.innerText = idiomaES.menuContactame;
  hola.innerText = idiomaES.hola;
  soy.innerText = idiomaES.soy;
  tituloSobre.innerText = idiomaES.tituloSobre;
  textoSobreMi.innerText = idiomaES.textoSobreMi;
  tituloHabilidades.innerText = idiomaES.tituloHabilidades;
  ingles.innerText = idiomaES.ingles;
  nivel.innerText = idiomaES.nivel;
  nivelEs.innerText = idiomaES.nivelEs;
  tituloAprendiendo.innerText = idiomaES.tituloAprendiendo;
  tituloServicios.innerText = idiomaES.tituloServicios;
  servicioFRC.innerText = idiomaES.servicioFRC;
  servicioFRT.innerText = idiomaES.servicioFRT;
  servicioDC.innerText = idiomaES.servicioDC;
  servicioDT.innerText = idiomaES.servicioDT;
  servicioDev.innerText = idiomaES.servicioDev;
  servicioDevT.innerText = idiomaES.servicioDevT;
  proyectos.innerText = idiomaES.proyectos;
  proyecto1.innerText = idiomaES.proyecto1;
  proyecto3.innerText = idiomaES.proyecto3;

  ver.forEach((r) => {
    r.innerHTML = idiomaES.ver;
});

  contactame.innerText = idiomaES.contactame;
  campoNombre.innerText = idiomaES.campoNombre;
  campoAsunto.innerText = idiomaES.campoAsunto;
  campoCorreo.innerText = idiomaES.campoCorreo;
  campoMensaje.innerText = idiomaES.campoMensaje;
  btnEnviar.innerText = idiomaES.btnEnviar;
  creado.innerText = idiomaES.creado;
  por.innerText = idiomaES.por;
  c.innerText = idiomaES.c;

  btnEnviar.id = "formularioES";

  activoEN.classList.remove('activo');
  activoES.classList.add('activo');

  frase.classList.remove('frase-headerEN');

});


btnIdiomaEN.addEventListener('click', ()=> {

  
  menuHeader.innerText = idiomaEN.menuHeader;
  menuSobre.innerText = idiomaEN.menuSobre;
  menuServicios.innerText = idiomaEN.menuServicios;
  menuProyectos.innerText = idiomaEN.menuProyectos;
  menuContactame.innerText = idiomaEN.menuContactame;
  hola.innerText = idiomaEN.hola;
  soy.innerText = idiomaEN.soy;
  tituloSobre.innerText = idiomaEN.tituloSobre;
  textoSobreMi.innerText = idiomaEN.textoSobreMi;
  tituloHabilidades.innerText = idiomaEN.tituloHabilidades;
  ingles.innerText = idiomaEN.ingles;
  nivel.innerText = idiomaEN.nivel;
  nivelEs.innerText = idiomaEN.nivelEs;
  tituloAprendiendo.innerText = idiomaEN.tituloAprendiendo;
  tituloServicios.innerText = idiomaEN.tituloServicios;
  servicioFRC.innerText = idiomaEN.servicioFRC;
  servicioFRT.innerText = idiomaEN.servicioFRT;
  servicioDC.innerText = idiomaEN.servicioDC;
  servicioDT.innerText = idiomaEN.servicioDT;
  servicioDev.innerText = idiomaEN.servicioDev;
  servicioDevT.innerText = idiomaEN.servicioDevT;
  proyectos.innerText = idiomaEN.proyectos;
  proyecto1.innerText = idiomaEN.proyecto1;
  proyecto3.innerText = idiomaEN.proyecto3;

  ver.forEach((r) => {
    r.innerHTML = idiomaEN.ver;
});

  contactame.innerText = idiomaEN.contactame;
  campoNombre.innerText = idiomaEN.campoNombre;
  campoAsunto.innerText = idiomaEN.campoAsunto;
  campoCorreo.innerText = idiomaEN.campoCorreo;
  campoMensaje.innerText = idiomaEN.campoMensaje;
  btnEnviar.innerText = idiomaEN.btnEnviar;
  creado.innerText = idiomaEN.creado;
  por.innerText = idiomaEN.por;
  c.innerText = idiomaEN.c;

  btnEnviar.id = "formularioEN";

  activoES.classList.remove('activo');
  activoEN.classList.add('activo');
  
  frase.classList.add('frase-headerEN');

});

 

function mensajeErrorES(mensaje){
   return Swal.fire({
    icon: 'error',
    title: 'Ha ocurrido un error',
    text: mensaje,
    confirmButtonText: 'continuar',
    allowOutsideClick: false
  })
}

function mensajeErrorEN(mensaje){
  return Swal.fire({
   icon: 'error',
   title: 'An error has occurred',
   text: mensaje,
   confirmButtonText: 'Continue',
   allowOutsideClick: false
 })
}

function borrarCampos(){
    document.getElementById("nombre").value="";
    document.getElementById("asunto").value="";
    document.getElementById("correo").value="";
    document.getElementById("mensaje").value="";
}





//menu responsive
const btnMenu = document.querySelector(".btn-menu");
const navLinks = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu a");
const linkHeader = document.querySelector(".link-header");
const linkSobreMi = document.querySelector(".link-sobre-mi");
const linkServicios = document.querySelector(".link-servicios");
const linkProyectos = document.querySelector(".link-proyectos");
const linkContacto = document.querySelector(".link-contacto");

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("abierto");
    navLinks.classList.toggle("abierto");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
    activoEN.classList.toggle("fade");
    activoES.classList.toggle("fade");
});

linkHeader.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
});

linkSobreMi.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkServicios.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkProyectos.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkContacto.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//animacion porcentajes
const NPHtml = document.querySelector('.NPHtml');
const NPCss = document.querySelector('.NPCss');
const NPJs = document.querySelector('.NPJs');
const NPGit = document.querySelector('.NPGit');
const phtml = document.querySelector('.phtml');
const pcss = document.querySelector('.pcss');
const pjs = document.querySelector('.pjs');
const pgit = document.querySelector('.pgit');

phtml.addEventListener('mouseenter', () => {
  let numeroP = [{porcentaje:0}];
  
  anime({
  targets: numeroP,
  porcentaje: 100,
  round: 1,
  easing: 'linear',
  duration: 1700,
  update: function() {
    NPHtml.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )
phtml.addEventListener('mouseleave', () => {
  let numeroP = [{porcentaje:100}];
  
  anime({
  targets: numeroP,
  porcentaje: 0,
  round: 1,
  easing: 'linear',
  update: function() {
    NPHtml.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )

pcss.addEventListener('mouseenter', () => {
  let numeroP = [{porcentaje:0}];
  
  anime({
  targets: numeroP,
  porcentaje: 95,
  round: 1,
  easing: 'linear',
  duration: 1600,
  update: function() {
    NPCss.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )
pcss.addEventListener('mouseleave', () => {
  let numeroP = [{porcentaje:95}];
  
  anime({
  targets: numeroP,
  porcentaje: 0,
  round: 1,
  easing: 'linear',
  update: function() {
    NPCss.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )

pjs.addEventListener('mouseenter', () => {
  let numeroP = [{porcentaje:0}];
  
  anime({
  targets: numeroP,
  porcentaje: 60,
  round: 1,
  easing: 'linear',
  duration: 1700,
  update: function() {
    NPJs.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )
pjs.addEventListener('mouseleave', () => {
  let numeroP = [{porcentaje:60}];
  
  anime({
  targets: numeroP,
  porcentaje: 0,
  round: 1,
  easing: 'linear',
  update: function() {
    NPJs.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )

pgit.addEventListener('mouseenter', () => {
  let numeroP = [{porcentaje:0}];
  
  anime({
  targets: numeroP,
  porcentaje: 90,
  round: 1,
  easing: 'linear',
  duration: 1700,
  update: function() {
    NPGit.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )

pgit.addEventListener('mouseleave', () => {
  let numeroP = [{porcentaje:90}];
  
  anime({
  targets: numeroP,
  porcentaje: 0,
  round: 1,
  easing: 'linear',
  update: function() {
    NPGit.innerHTML = numeroP[0]['porcentaje'];
  }
});
} )


//animacion frase
const textoSoy = document.querySelector('.soy');
const textoS = textoSoy.textContent;
const textoSeparado = textoS.split("");
textoSoy.textContent = "";
for ( let i = 0; i < textoSeparado.length; i++){
  textoSoy.innerHTML += "<span>" + textoSeparado[i] + "</span>";
}

let caracter = 0;
let temporizador =setInterval(tick, 50);

function tick(){
  const span =textoSoy.querySelectorAll('span')[caracter];
  span.classList.add("degradado");
  caracter++;
  if (caracter === textoSeparado.length){
    completo();
    return
  }
}

function completo(){
  clearInterval(temporizador);
  timer = null;
}

//coreo
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const correo = document.getElementById("correo");
const mensaje= document.getElementById("mensaje");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,100}$/, // Letras y espacios, pueden llevar acentos.
  asunto: /^[a-zA-ZÀ-ÿ0-9\s]{2,100}$/, // Letras y espacios, pueden llevar acentos, numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  texto: /^[a-zA-ZÀ-ÿ0-9\_\-\.\,\:\;\(\)\/\"\=\¿\?\!\s]+$/, // Letras, numeros, guion y guion_bajo
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
 let idioma = btnEnviar.id;
  if(idioma == "formularioES"){
    if(nombre.value === null || nombre.value === '' || nombre.value === ' '){
      let mError="Introduzca un nombre";
      mensajeErrorES(mError);
      borrarCampos();
    }else{
      if(asunto.value === null || asunto.value === '' || asunto.value === ' '){
        let mError="Introduzca un asunto";
        mensajeErrorES(mError);
        borrarCampos();
      }else{
        if(correo.value === null || correo.value === '' || correo.value === ' '){
          let mError="Introduzca un correo";
          mensajeErrorES(mError);
          borrarCampos();
        }else{
          if(mensaje.value === null || mensaje.value === '' || mensaje.value === ' '){
            let mError="Introduzca un mensaje";
            mensajeErrorES(mError);
            borrarCampos();
          }else{
            if(!expresiones.nombre.test(nombre.value)){
              let mError="Solo se permiten letras, espacios, acentos en el campo nombre y minimo 2 caracteres";
              mensajeErrorES(mError);
              borrarCampos();
            }else{
              if(!expresiones.asunto.test(asunto.value)){
                let mError="Solo se permiten letras, espacios, números y acentos en el campo asunto";
                mensajeErrorES(mError);
                borrarCampos();
              }else{
                if(!expresiones.correo.test(correo.value)){
                  let mError="Escriba una dirección de correo válida ejemplo: correo@algo.com";
                  mensajeErrorES(mError);
                  borrarCampos();
                }else{
                  if(!expresiones.texto.test(mensaje.value)){
                    let mError="Solo se permiten letras, espacios, acentos, puntos, comas, paréntesis, comillas dobles, diagonal, signos de exclamación en el campo de mensaje";
                    mensajeErrorES(mError);
                    borrarCampos();
                  }else{
                    Email.send({
                      Host :"smtp.gmail.com",
                      Username : "paginascorreos1@gmail.com",
                      Password : "1qw2azxs3ER4DCVF_",
                      To : 'bryanavilav@gmail.com',
                      From : "paginascorreos1@gmail.com",
                      Subject : "Correo Portafolio",
                      Body : " Nombre: "+nombre.value+", <br>Correo: "+correo.value+", <br>Asunto: "+asunto.value+", <br>Mensaje: "+mensaje.value,
                      }).then(
                        Swal.fire({
                          title: 'Correo enviado',
                          text: 'Correo enviado correctamente',
                          icon:'success',
                          confirmButtonText: 'Continuar',
                          allowOutsideClick: false ,
                        })
                      );
                      borrarCampos();
                  }
                }
              }
            }
          }
        }
      }
    }
  }if(idioma=="formularioEN"){
    if(nombre.value === null || nombre.value === '' || nombre.value === ' '){
          let mError="Enter a name";
          mensajeErrorEN(mError);
          borrarCampos();
        }else{
          if(asunto.value === null || asunto.value === '' || asunto.value === ' '){
            let mError="Enter a subject";
            mensajeErrorEN(mError);
            borrarCampos();
          }else{
            if(correo.value === null || correo.value === '' || correo.value === ' '){
              let mError="Enter an email";
              mensajeErrorEN(mError);
              borrarCampos();
            }else{
              if(mensaje.value === null || mensaje.value === '' || mensaje.value === ' '){
                let mError="Enter a message";
                mensajeErrorEN(mError);
                borrarCampos();
              }else{
                if(!expresiones.nombre.test(nombre.value)){
                  let mError="Only letters, spaces, accents are allowed in the name field and a minimum of 2 characters";
                  mensajeErrorEN(mError);
                  borrarCampos();
                }else{
                  if(!expresiones.asunto.test(asunto.value)){
                    let mError="Only letters, spaces, numbers and accents are allowed in the subject field";
                    mensajeErrorEN(mError);
                    borrarCampos();
                  }else{
                    if(!expresiones.correo.test(correo.value)){
                      let mError="Enter a valid email address example: mail@something.com";
                      mensajeErrorEN(mError);
                      borrarCampos();
                    }else{
                      if(!expresiones.texto.test(mensaje.value)){
                        let mError="Only letters, spaces, accents, periods, commas, parentheses, double quotes, slashes, exclamation marks are allowed in the message field";
                        mensajeErrorEN(mError);
                        borrarCampos();
                      }else{
                        Email.send({
                          Host :"smtp.gmail.com",
                          Username : "correopruebaemails@gmail.com",
                          Password : "1q2w3e4r_",
                          To : 'correopruebaemails@gmail.com',
                          From : "correopruebaemails@gmail.com",
                          Subject : "Correo Portafolio",
                          Body : " Nombre: "+nombre.value+", <br>Correo: "+correo.value+", <br>Asunto: "+asunto.value+", <br>Mensaje: "+mensaje.value,
                          }).then(
                            Swal.fire({
                              title: 'Email sent',
                              text: 'Mail sent successfully',
                              icon:'success',
                              confirmButtonText: 'Continue',
                              allowOutsideClick: false ,
                            })
                          );
                          borrarCampos();
                      }
                    }
                  }
                }
              }
            }
          }
        }
  }
});