/*class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
		console.log(`Hello! ${this.name}`)
	}
	exit() {
		console.log(`Пользователь ${this.name} ушел`)
	}
}
let ivan = new User('Ivan', 25);
 	alex = new User('Alex', 20);
 console.log(ivan);
 console.log(alex);
 ivan.hello();
 alex.hello();*/

 /*class Options {
 	constructor(height, width, bg, fontSize, textAlign) {
 		this.height = height;
 		this.width = width;
 		this.bg = bg;
 		this.fontSize = fontSize;
 		this.textAlign = textAlign;
 	}
 		createDiv() {
 			let elem = document.createElement('div');
 			document.body.appendChild(elem);
 			let param = `Высота:${this.height}px; ширина:${this.width}px; Цвет фона:${this.bg}px; Размер шрифта:${this.fontSize}px; Выравнивание текста:${this.textAlign}px`;
 			elem.style.cssText = param;
 		}
 		
 }
 const item = new Options("1000px", "2000px", "green", "20px", "center");

 item.createDiv();*/

 class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv() {
		let block = document.createElement('div');
		document.body.append(block);
		let p = `height:${this.height}px;
		 			 width:${this.width}px;
		 			 background-color:${this.bg};
		 			 font-size:${this.fontSize}px; 
		 			 text-align:${this.textAlign}`;
		block.style.cssText = p;
	}
}

const item = new Options(100, 200, "green", 20, "center");

item.newDiv();