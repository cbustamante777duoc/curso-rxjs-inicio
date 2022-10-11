import { of } from "rxjs";

// Emitting a sequence of numbers
//este operador entrega valores en secuencia osea asincrono termina un valor y empieza el otro valor

const obs = of<number[]>(1,2,3,4,5,6,7,8);

obs.subscribe(
    next => console.log('next '+ next),
    null,
    () => console.log('terminamos')
);

// output
// next 1 
// next 2 
// next 3 
// next 4 
// next 5 
// next 6 
// next 7 
// next 8 
// terminamos

//more examples
//emits values of any type
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe(val => console.log(val));