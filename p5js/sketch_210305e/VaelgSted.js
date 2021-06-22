class VaelgSted {
  constructor(xPos, yPos, xSize, ySize) {
    //classen variavler
    this.xPos = xPos;
    this.yPos = yPos;
    this.xSize = xSize;
    this.ySize = ySize;
    this.hidden = true;
    this.location = "";
    this.btnArray = [];

    //intstiere alle knapperne 
    for (let i = 0; i < 7; i++) {
      let ys = (ySize- (this.ySize/9)*2- (this.ySize/8))/6 ;
      let x = this.xPos;
      let y =  ((tlfSite.ySize)/9 + 170) +(this.ySize/9)+ys*i ;
      let xs = this.xSize;

      this.btnArray[i] = new Button(x, y, xs, ys, false, "sted" + i);
    }
  }

  drawSite() {
    //gemmer fanen vis den er sat til at gemmes
    if (!this.hidden) {
      //bagground
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      rect(this.xPos, this.yPos, this.xSize, this.ySize/9);
      rect(this.xPos, (this.ySize + this.yPos)- this.ySize/8, this.xSize, this.ySize/8);
      //Overskrift
      textSize(20);
      text("Vælg Sted", this.xPos +10, this.yPos + (this.ySize/9)/2 );

      //tegner alle knapperne
      for (let i = 0; i < this.btnArray.length; i++) {
        this.btnArray[i].drawbtn();
      }
    } else {
      //tegner overskriften vis fanen er gemt
      textSize(20);
      text("Vælg Sted: " + this.location, this.xPos +10, this.yPos + (this.ySize/9)/2 );
    }
  }

  siteClicked(mx, my) {
    //giver alle knapperne infomation om musen vis fanen ikke er gemt
    if (!this.hidden) {
      for (let i = 0; i < this.btnArray.length; i++) {
        this.btnArray[i].checkIfClicked(mx, my);
      }
    }
  }
}
