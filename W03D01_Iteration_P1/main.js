/* START CODE UNDER THIS LINE */

//pulse cheack
//Q1

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

/////////////////////////////
//Q2

//Create a while loop with a starting value of 0 and an end value of 5. Console log all numbers in between including the start and end.

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

//////////////////////////////////
//Q3

for (let i=10; i<=20; i++  ){
console.log(i);

}
//////////////////////////////////////
//Q4

const galaxies = ["Andromeda", "Milky Way", "Magellanic Clouds"];

for (i=0; i<=galaxies.length; i++){
    console.log(i,galaxies[i]);
}

/////////////////////////////////
//Q5

const randomString = "bwaxaawqaacasghwera";

for (let i=0; i<=randomString.length; i++) {
  if (randomString[i] !== 'a') {
    console.log(randomString[i]);
  }
}


////////////////////////////////////
//practice

//Q1

const sum = function (numbers) {
  
};

sum([1, 2, 3, 4, 5, 6]); // => 21
sum([1, 2, 3]); // => 6
