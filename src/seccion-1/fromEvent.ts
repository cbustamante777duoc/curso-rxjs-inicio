import { fromEvent } from "rxjs";

//sirve para captura eventos 
const click = fromEvent<PointerEvent>(document, "click");

click.subscribe(evento => {
    console.log(`value x: ${evento.x}`);
    console.log(`value y: ${evento.y}`);
}
);

//valores de la pagina
// value x: 312 value y:188
// index.ts:5 value x: 332 value y:310
// index.ts:5 value x: 387 value y:503
// index.ts:5 value x: 255 value y:313

//para saber que valores tecleo el usuario de la pagina
const keyup = fromEvent<KeyboardEvent>(document, 'keyup');

keyup.subscribe(
    x => console.log(x.key),
)

//arroja las teclas que presiono sobre la pagina