// INDEX.JS
const src = require("./Sprite.js");

// Seria um require("Scratch").. Mas nesse caso irei usar um Object mesmo
const Scratch = {
  Moviment: {
    move: function (sprite, steps) {
      console.log(
        "MOVIMENT.MOVE: aqui como foi chamado pelo sprite.js executaria para o personagem andar :D"
      );
    },
    spin: function (sprite, degrees) {
      console.log(
        "MOVIMENT.SPIN: aqui como foi chamado pelo sprite.js executaria para o personagem girar :D"
      );
    },
  },
  Appearance: {
    say: function (sprite, text, time) {
      if (time != null) {
        // Not nulled
        console.log(
          `APPEARANCE.SAY: tem tempo. Total de ${toString(time)} Segundos`
        );
      } else {
        // Nulled
        console.log("APPEARANCE.SAY: não tem tempo.");
      }

      console.log(
        "APPEARANCE.SAY: aqui como foi chamado pelo sprite.js executaria para o personagem falar e se em caso do time não ser definido a mensagem continua para sempre. :D"
      );
    },
  },
};

src.Exec("sprt", Scratch); // Execute the command and finish :)

// End! RamiresOliv ✌
