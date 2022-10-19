import { asyncScheduler } from 'rxjs';

//funcion a ejecutar
// const hola = () => console.log('hola'); 
// // hola();//hola
// asyncScheduler.schedule(hola,7000)

// //asyncScheduler es muy similar a setTimeout
// setTimeout(() => {
//     console.log('usando la funcion despues de 2 seg');
// }, 2000);

//Ejemplo 2


//funcion que ejecuta a los 3 segundos y ejecuta el estado y luego el estado cambia cada un segundo 
//sumandole 1 en 1
const sub = asyncScheduler.schedule(function (state) {

    console.log('state: ' + state);

    this.schedule(state! + 1, 1000)

}, 3000, 1)

//output
// state:1
// state:2
// state:3
// state:4
// state:5
// state:6
// state:7
// state:8
// state:9
// state:10

// a los 13 segundos me desubcribo
asyncScheduler.schedule(() => sub.unsubscribe(), 13000)


//ultimo ejemplo


// function task(state) {
//     console.log(state);
//     this.schedule(state + 1, 1000); // `this` references currently executing Action,
//     // which we reschedule with new state and delay
// }

// asyncScheduler.schedule(task, 3000, 0);