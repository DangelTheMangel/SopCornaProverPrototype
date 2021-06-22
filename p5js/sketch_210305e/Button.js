class Button {

  constructor(xPos, yPos, sizeX, sizeY, hidden, btnText) {
    //Klassen variabler
    this.xPos = xPos;
    this.yPos = yPos;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.hidden = hidden;
    this.btnText = btnText;
  }

  drawbtn() {
    //tegner knappen vis ikke den er gemt
    if (!this.hidden) {
      rect(this.xPos, this.yPos, this.sizeX, this.sizeY);
      text(this.btnText, this.xPos + this.sizeX/2- textWidth(this.btnText)/2, this.yPos+ this.sizeY/2);
    }
  }

  checkIfClicked(mx, my) {
    //tjekker om musen er inden for knappen og vis den er så køre den onClicked
    if (mx > this.xPos &&
      mx < this.xPos + this.sizeX &&
      my > this.yPos &&
      my < this.yPos + this.sizeY) {
      this.onClicked();
    }
  }
  //denne funktion er begrenet til at overskrive
  onClicked() {
  }
}
