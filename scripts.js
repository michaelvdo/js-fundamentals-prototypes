(() => {
	'use strict';

	// 
	// Chapter 4: "Class" Objects
	// 

	// Basic prototypal lookup example



	// var parentObj = {
	// 	a: 2
	// };

	// var childObj = Object.create(parentObj);

	// console.log('childObj.a:', childObj.a);



	// The top object in the prototype chain is (usually) Object.prototype. All
	// major objects (like Function, String, etc) have this object as their
	// top-level prototye. We can see this in the browser when we inspect the
	// object's `__proto__` property.

	// Class-like behavior in JS

	// In js, we can write code that seems to duplicate Class behavior. For this,
	// we use one 'strange' characteristic of functions:



	// function Foo(name) {
	// 	this.name = name;
	// }

	// console.log('Foo.prototype:', Foo.prototype);



	// Each object created from calling this function using `new` will be
	// prototype-linked to Foo.prototype, like so:



	// function Foo(name) {
	// 	this.name = name;
	// }

	// var a = new Foo();

	// Object.getPrototypeOf(a) === Foo.prototype; // true



	// So, what happens when you call a function using the `new` keyword?
	// Actually, 4 things:

	// 1. A brand new object is constructed.
	// 2. The newly constructed object is prototype-linked to Function.prototype
	// 3. THe newly constructed object is set as the `this` binding for that
	// function call
	// 4. Unless the function returns its own alternate object, the `new`-invoked
	// function call will automatically return the newly constructed object

	// "Constructors"

	// A function's `prototype` property has one property by default, called
	// `constructor`. This property points back to the function itself. This
	// indicates (or rather suggests) that the function itself is the
	// constructor of all objects it creates, mimicking `Class` behavior from
	// other programming languages:



	// function Foo(name) {
	// 	this.name = name;
	// }

	// Foo.prototype.constructor === Foo; // true

	// var a = new Foo();
	// a.constructor === Foo; // true

	// // The convention is to write "class functions" with a capital letter.

	// // Class-like construction of an object

	// function Person(name) {
	// 	this.name = name;
	// }

	// Person.prototype.sayName = function() {
	// 	console.log('Hi, my name is', this.name);
	// };

	// var Michael = new Person('Michael');
	// Michael.sayName();



	// Class extends other class



	// Person class
	// function Person(name) {
	// 	this.name = name;
	// }

	// Person.prototype.sayName = function() {
	// 	console.log('Hi, my name is', this.name);
	// };

	// // Musician class
	// function Musician(name, instrument) {
	// 	Foo.call(this, name);
	// 	this.instrument = instrument;
	// }

	// // Link Musician.prototype to Person.prototype to establish delegate
	// // connection
	// Musician.prototype = Object.create(Person.prototype);

	// Musician.prototype.sayInstrument = function() {
	// 	console.log('I play the', this.instrument);
	// };

	// var Michael = new Musician('Michael', 'guitar');

	// Michael.sayName();
	// Michael.sayInstrument();



	// ES6 way



	// class Person {
	// 	constructor(name) {
	// 		this.name = name;
	// 	}
	// 	sayName() {
	// 		console.log('Hi, my name is', this.name);
	// 	}
	// }

	// class Musician extends Person {
	// 	constructor(name, instrument) {
	// 		super(name);
	// 		this.instrument = instrument;
	// 	}
	// 	sayInstrument() {
	// 		console.log('I play the', this.instrument);
	// 	}
	// }

	// var Jan = new Musician('Jan', 'flute');
	// Jan.sayName();
	// Jan.sayInstrument();



	// ES6 Factory function way



	// function person(name) {
	// 	function sayName() {
	// 		console.log('Hi, my name is', name);
	// 	}
	// 	return { name, sayName };
	// }

	// var michael = person('Michael');
	// michael.sayName();



	// ES6 Object.create way



	// var foo = {
	// 	something: function() {
	// 		console.log('Tell me something interesting...');
	// 	}
	// }

	// var bar = Object.create(foo);
	// bar.something(); // Tell me something good...

	// Make the API more explicit:
	// bar.saySomething = function() {
	// 	this.something();
	// }
	// bar.saySomething();


})();
