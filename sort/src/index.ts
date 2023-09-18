import { Sorter } from './Sorter.js';
import { NumbersCollection } from './NumbersCollection.js';
import { CharactersCollection } from './CharactersCollection.js';
import { LinkedList } from './LinkedList.js';



//  const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
//  numbersCollection.sort();
//  console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// charactersCollection.sort();
// console.log(charactersCollection);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();


