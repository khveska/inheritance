import IntBuilder from './IntBuilder.js'
import StringBuilder from './StringBuilder.js'

/* IntBuilder test from README */
const intBuilder = new IntBuilder(10) // 10;
intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get() // -> 1;
console.log(IntBuilder.random(10, 100))

/* StringBuilder test from README */
const strBuilder = new StringBuilder('Hello') // 'Hello';
strBuilder
  .plus(' all', '!') // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove('l') // 'He';
  .sub(1, 1) // 'e';
  .get() // -> 'e';
