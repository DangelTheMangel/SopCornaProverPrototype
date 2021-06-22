class BekraftTidogSted {
  constructor(xPos, yPos, xSize, ySize) {
    //Alle klassen variabler
    this.xPos = xPos;
    this.yPos = yPos;
    this.xSize = xSize;
    this.ySize = ySize;
    this.hidden = true;
    this.tlfChoosen = false;
    this.btnAccept =  new Button(xPos +xSize - (190 + 305), yPos +ySize-55, 300, 35, false, "Bekræft prøvetid");
  }

  draw() {
    //tegner vis den ikke er gemt
    if (!this.hidden) {
      //bagrunden
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      rect(this.xPos, this.yPos, this.xSize, this.ySize/9);
      rect(this.xPos, (this.ySize + this.yPos)- this.ySize/8, this.xSize, this.ySize/8);
      //Overskrift
      textSize(20);
      text("Bekræft tid og sted", this.xPos +10, this.yPos + (this.ySize/9)/2 + 10 );

      //knappen
      textSize(14);
      this.btnAccept.drawbtn();
    } else {
      //overksriften når knappen er skjult
      textSize(20);
      text("Bekræft tid og sted:", this.xPos +10, this.yPos + (this.ySize/9)/2 );
    }
  }

  siteClicked(mx, my) {
    //giver knappen mouse x og mouse y kordinatorne vis den ikke er gemt og der bliver klikket
    if (!this.hidden) {

      this.btnAccept.checkIfClicked(mx, my);
    }
  }
}
