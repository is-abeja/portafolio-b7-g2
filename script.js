// alert("Hola Mundo <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//reconoces una accion porque tiene parentesis despues del nombre de la accion
//a veces tiene el operador punto
typewriter
  .pauseFor(2500) //milisegundos para empezar a correr 2.5 sg
  .typeString('Isabel Cervantes')
  .pauseFor(300)
  .deleteAll() //parentesis porque es accion
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();