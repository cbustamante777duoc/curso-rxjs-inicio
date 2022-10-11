
import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ' + val),
    complete: () => console.log('complete')
}


//cada un segundo (nuca emitio el valor de complete ya que seguia emitiendo valores)
const interval$ = interval(2000);

// interval$.subscribe(observer);

//emite valores cada un segundo 
//output
// next:0
// next:1
// next:2
// next:3

//este se ejecuta una sola vez
const timer$ = timer(2000);

// timer$.subscribe(observer);

// next: 0 
// complete

// en este caso decimos que empice en el segundo 2 y emita el valor cada 2 segundos esto es muy similar a un interval
const timer2$ = timer(2000, 2000);
// timer2$.subscribe(observer);

//output
// next:0
// next:1
// next:2
// next:3

//sirve para programar una tarea se ejecuta en 10 segundo por ejemplo
const hoy = new Date();
hoy.setSeconds(hoy.getSeconds() + 10)

const timer5$ = timer(hoy);
timer5$.subscribe(observer) 

//documentation about timer
// https://www.learnrxjs.io/learn-rxjs/operators/creation/timer