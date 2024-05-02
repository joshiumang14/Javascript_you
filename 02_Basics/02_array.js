const marvel_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman","flash","batman"]

 marvel_heros.push(dc_heros)
 console.log(marvel_heros);
//Push is used for add inside into array.
const newAll_heros=marvel_heros.concat(dc_heros)
console.log(newAll_heros);
//concat is used for marge all element of array 
const new_All=[...marvel_heros, ...dc_heros]
console.log(new_All);
//spilt(...) is used for merge with spilt. ex-water glass...We use this method for perform work.
const another_array=[1,2,3,4,[4,7,99,0],76,44,88,22,[6,7,9,4]]
console.log(another_array);
const new_another_array=another_array.flat(Infinity)
//Flat is used for perform element in simple order 
console.log(new_another_array);

console.log(Array.isArray("Umang"));
// to check array
console.log(Array.from("Umang"));
// to make array
console.log(Array);
console.log(Array.from({name: "joshi"}));//interesting
// it can't make array becz ...
let score=100
let score1=200
let score2=300
console.log(Array.of(score,score1,score2));
// instead of from we use of becz from take string and can't make array through simple elements..for more MDN 

const a=33
console.log(a);
let b=44
console.log(b);
b=4
console.log(b);


