### A Database Library
- Uses Caching for now; don't use on personal projects.
- My another github repo is the base of this lib
- Click here to see my own database repo.

#### Getting Started
- installing the database
```
npm install sxli.db
```
- initial code
```js
const Database = require('sxli.db');
const db = new Database();
```
Remember the library uses async/await so you need to either run the next code in async function or use `.then` method for response. I tried to make it similar to replitDB.

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