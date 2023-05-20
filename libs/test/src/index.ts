/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Data Types
- Array
- Map
- Set
- Object
- anon function
- null
- undefined

- Classes (Why and why they're used)
*/

//  A function that takes in a array of places to eat, and than returns random single place to eat.
// Function parameters & return must be fully typed

const placesToEat = ['McDonalds', 'KFC', 'Pizza Hut', 'Popeyes'];

function getPlaceToEat(places: string[]): string {
  let randomNumber = Math.floor(Math.random() * placesToEat.length);

  return places[randomNumber];
}

const place = getPlaceToEat(placesToEat);
console.log(place)

// How to type a function return
// const funcReturn = (): type => {}
