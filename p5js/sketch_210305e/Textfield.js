class Textfield {
  constructor(xPos, yPos, sizeX, sizeY, hidden, text) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.hidden = hidden;
    this.text = text;
    this.input = "Indsæt";
  }

  drawTF() {
    //vis tesktfletet ikke er gemt tegner den det
    if (!this.hidden) {   
      rect(this.xPos, this.yPos, this.sizeX, this.sizeY); 
      text(this.text, this.xPos, this.yPos - 5);
      text(this.input, this.xPos + this.sizeX/2- textWidth(this.input)/2, this.yPos+ this.sizeY/2);
    }
  }

  checkIfClicked(mx, my) {
    //vis den er klikket på sætter den trykket på sand
    if (mx > this.xPos &&
      mx < this.xPos + this.sizeX &&
      my > this.yPos &&
      my < this.yPos + this.sizeY) {
      this.clicked = true;
    } else { 
      this.clicked = false;
    }
  }

  textInput(key, keyCode ) {
    //vis den er blevet klikket på
    if (this.clicked ) {

      //tjekker om det er backspace ellr delete vis det er fjerne den 1 bogstav
      if (keyCode === BACKSPACE || keyCode === DELETE) {
        this.input = this.input.substring(0, this.input.length-2);
        //ellers tjekker den om det er tal eller bogstav
      } else if (keyCode >47 && keyCode < 91) {
        this.input = this.input + key;
      }
    }
  }
}
