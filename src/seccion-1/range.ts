
import { range,asyncScheduler } from 'rxjs';

//range sirve para emitar valores desde un rango entonce por ejemplo empieza en 1 y emite 10 valores
//de manera sincronizada

// const numberrange = range(1,10);
// numberrange.subscribe(value => console.log('value: ' + value));

// value: 1
// value: 2
// value: 3
// value: 4
// value: 5
// value: 6
// value: 7
// value: 8
// value: 9
// value: 10

//valore el range asincrono

const numberrange2 = range(1,10,asyncScheduler);
console.log('start range');
numberrange2.subscribe(range => console.log('range: ' + range));
console.log('end range');

//osea se ejecuto de manera asincrona ya que aparece el mensaje start y end range y luego la secuencia
// start range
// end range
// range: 1
// range: 2
// range: 3
// range: 4
// range: 5
// range: 6
// range: 7
// range: 8
// range: 9
// range: 10


// const numbers = range(1, 3);

// numbers.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Complete!')
// });

// Logs:
// 1
// 2
// 3
// 'Complete!'



