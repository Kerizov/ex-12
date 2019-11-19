/*function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log('Hello! ' + this.name); 
	}; 
}
User.prototype.exit = function(name) {
	console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('Ivan', 25),
	alex = new User('ALex', 20);

console.log(ivan);
console.log(alex); 

ivan.exit()  */
/****************/
/*function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b
	} 
	console.log(sum());
}
showThis(4, 5);
showThis(5, 5);*/

/*let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
		function shout() {
			console.log(this);
		}
		shout();
	}
};
obj.sum();*/
/****************/
/*let user = {
	name: 'John'
};

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
	return this * number;
}

let double = count.bind(2)
console.log(double(3));
console.log(double(10));*/

/*let btn = document.querySelector('button');

btn.addEventListener('click', function() {
	console.log(this);
	this.style.backgroundColor = 'red';
	function showThis() {
		console.log(this);
	}
	showThis();
});*/




// 1) просто вызов функции - window/underfined(und. если 'use strict')
// 2) метод обьекта - this = обьект
// 3) конструктор (new) - this = новый созданный обьект  
// 4) указание конкретного контекста - call, apply, bind


let name = "Ivan",
	age = 30,
	mail = 'ex@gmail.com';

document.write(`Пользователю ${name} ${age} лет. Его почта: ${mail}`);


function makeArray() {
	var items = [];

	for (let/*var совсем другой вывод в консоли*/ i = 0; i < 10; i++) {
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}

	return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
	console.log(this)
};

//fun();

let obj = {
	number: 5,
	sayNumber: function() {
		let say = () => {
			console.log(this);
		};
		say();
	}
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
	let show = () => {
		console.log(this);
	};
	show();
});

function calcOrDouble(number, basis = 2) {//= 2 ES6
	//basis = basis || 2; ES5
	console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);

class Rectangle {
	constructor(height, width = 20) {
		this.height = height;
		this.width = width;

	}
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a + b + c);
}
let numbers = [2, 5 ,7];

log(...numbers);