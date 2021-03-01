//correo
//const BtnEnviar = document.getElementById("boton-form");
const form =document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const correo = document.getElementById("correo");
const mensaje= document.getElementById("mensaje");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,100}$/, // Letras y espacios, pueden llevar acentos.
  asunto: /^[a-zA-ZÀ-ÿ0-9\s]{2,100}$/, // Letras y espacios, pueden llevar acentos, numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  texto: /^[a-zA-ZÀ-ÿ0-9\_\-\.\,\:\;\(\)\/\"\=\¿\?\!]+$/, // Letras, numeros, guion y guion_bajo
}

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if(nombre.value === null || nombre.value === '' || nombre.value === ' '){
    let mError="Introdusca un nombre";
    mensajeError(mError);
  }else{
    if(asunto.value === null || asunto.value === '' || asunto.value === ' '){
      let mError="Introdusca un asunto";
      mensajeError(mError);
    }else{
      if(correo.value === null || correo.value === '' || correo.value === ' '){
        let mError="Introdusca un nombre";
        mensajeError(mError);
      }else{
        if(mensaje.value === null || mensaje.value === '' || mensaje.value === ' '){
          let mError="Introdusca un nombre";
          mensajeError(mError);
        }else{
          if(!expresiones.nombre.test(nombre.value)){
            let mError="Solo se permiten letras, espacios y acentos en el campo nombre";
            mensajeError(mError);
          }else{
            if(!expresiones.asunto.test(asunto.value)){
              let mError="Solo se permiten letras, espacios, numeros y acentos en el campo asunto";
              mensajeError(mError);
            }else{
              if(!expresiones.correo.test(correo.value)){
                let mError="Escriba una direccion de correo valida ejemplo: correo@algo.com";
                mensajeError(mError);
              }else{
                if(!expresiones.texto.test(mensaje.value)){
                  let mError="Solo se permiten letras, espacios, acentos, puntos, comas, parentesis, comillas dobles, diagonal, signos de exclamacion en el campo de mensaje";
                  mensajeError(mError);
                }else{
                  Email.send({
                    Host :"smtp.gmail.com",
                    Username : "correopruebaemails@gmail.com",
                    Password : "1q2w3e4r_",
                    To : 'correopruebaemails@gmail.com',
                    From : "correopruebaemails@gmail.com",
                    Subject : "Correo PizzaStyle",
                    Body : " Nombre: "+nombre.value+", <br>Correo: "+correo.value+", <br>Asunto: "+asunto.value+", <br>Mensaje: "+mensaje.value,
                    }).then(
                      Swal.fire({
                        title: 'Correo enviado',
                        text: 'Correo enviado correctamente ',
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
});

function mensajeError(mensaje){
   return Swal.fire({
    icon: 'error',
    title: 'Ha ocurrido un error',
    text: mensaje,
    confirmButtonText: 'continuar',
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
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu a");
const linkHeader = document.querySelector(".link-header")
const linkMenu = document.querySelector(".link-menu")
const linkNosotros = document.querySelector(".link-nosotros")
const linkContacto = document.querySelector(".link-contacto")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkHeader.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkMenu.addEventListener("click", () => {
  navLinks.classList.toggle("abierto");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

linkNosotros.addEventListener("click", () => {
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





