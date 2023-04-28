/*
Isso é um Script "modulo"

Neste exemplo levei em consideração que existice como se fosse uma "biblioteca" Scratch que quando uma suposta "index.js" puxasse "require(..)" esse comando ele seria executado com o Sprite do personagem
e a blibioteca dos comandos EX:

entre <> = opcional
entre [] = requirido

Sct = { // Sct seria uma abreviação de Scratch
    Moviment: {
        move: function([Sprite], [Steps])...,
        spin: function([Sprite], [Degrees])...
    },
    Appearance: {
        say: function([Sprite], [Text], <Time>)...
    },

}
*/

// Inclusive aqui também seria chamado por um require("Scratch") mas optei chamar pelo próprio export então o Scratch todo vem na função exports.Exec = (Sprite, <Sct>) =>..

ProMode = true; // Olá/Hello World!

// This will be called by another script. Ex a "index.js"
exports.Exec = (Sprite, Sct) => {
  const Before_DN = Date.now();
  for (let times = 0; times < 21; times++) {
    Sct.Moviment.move(Sprite, 10); // Movev the Sprite (Actor) 10 Steps ahead;
    Sct.Moviment.spin(Sprite, 30); // Spin the Sprite (Actor) 30 Degrees;
  }
  Sct.Appearance.say(Sprite, ProMode == true ? "Hello World!" : "Olá!", 2); // Make the Actor say a hello per 2 seconds in seconds not defined the message doesn't disappear.
  setTimeout(() => {
    const After_DN = Date.now();
    console.log(
      __dirname +
        "/Sprite.js Proccess Finished total of running time: " +
        Math.abs(Math.floor(Before_DN - After_DN)).toString() +
        " MS (filtred)"
    );
  }, 1000);
};
