### A Database Library
- Uses Caching for now; don't use on personal projects.
- My another github repo is the base of this lib
- [Click here to see](https://github.com/Sxlitude/database) the raw database repo.

#### Getting Started
- installing the database
```
npm install sxli.db
```
- initial code
```js
/* Default Database Defining */
const Database = require('sxli.db');
const db = new Database();

/* But If you have a custom URL */
const Database = require('sxli.db');
const db = new Database('url);
```
Talking about `url`, you may remove it if you wish, but if it doesn't work then consider visiting [this repo](https://github.com/Sxlitude/database) to get your own URL !

- setting a key
```js
/* Setting a String as value */
await db.set('foo', 'hello');

/* Setting a boolean as value */
await db.set('foo', true);

/* Setting an array as value */
const numbers = [ 1, 2, 3, 4, 5 ];
await db.set('foo', numbers);

/* Setting Object as value */
const data = {
  numbers: {
    odd: [1, 3, 5, 7, 9],
    even: [2, 4, 6, 8, 10],
    maxToTen: true
  },
  trigonometry: {
    terms: ['sin', 'cos', 'tan'],
    flipped: ['cosec', 'sec', 'cot']
  }
}

await db.set('foo', data)
```
- Getting a value
```js
/* By async keyword */
const value = await db.get('items');
console.log(value);

/* By then method */
db.get('items').then(value => {
  console.log(value);
});
```
- Deleting a value
```js
/* By async keyword */
await db.delete('xyz');

/* By then method */
db.get('xyz').then(() => {
  console.log('deleted!');
});
```
- listing values with prefix
```js
/* By async keyword */
const arrayOfKeys = await db.list('guild_');
console.log(arrayOfKeys);

/* By then method */
db.list('guild_').then(array => {
  console.log(array);
});
```
