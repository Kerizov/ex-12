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
