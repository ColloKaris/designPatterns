import { Sorter } from './Sorter.js';
import { CharactersCollection } from './CharactersCollection.js';
// const numbersCollection = new NumbersCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// console.log('hello')
const charactersCollection = new CharactersCollection('Xaayb');
console.log(charactersCollection.data);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
