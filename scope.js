//Exercise 1
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();
/* the scopes in this current context of code are local scopes and closures
-yes we can access outerVar within its scope function closure
-yes we can access innerVar within its local scope
*/


//Exercise two
function mainFunction(greeting) {
  console.log(`${greeting}, how are you?`);
}

mainFunction("Hello");


//Exercise three
 let makeDrinks = function() {
  return function(drink) {
    console.log(`It's time for an iced ${drink} drink`);
  }
}
let drinks = makeDrinks();
drinks("coffee");


//Exercise four
let pet = "cat";


function modifyGlobalPet() {
  pet = "turtle";
  console.log(`The family pet is now a ${pet}.`);
}

function localScopePet() {
  let pet = "dog";
  console.log(`The family pet is a ${pet}.`);
}

modifyGlobalPet();
localScopePet();


//Exercise five
function functionPizzaFactory(pizzaToppings) {
  return function (pizzaSize) {
    return `You're ${pizzaSize} ${pizzaToppings} Pizza is almost out of the oven!`;
  };
}
