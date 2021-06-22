class VaelgTid {
  constructor(xPos, yPos, openYpos, xSize, ySize) {

    this.xPos = xPos;
    this.yPos = yPos;
    this.openYpos = openYpos;
    this.xSize = xSize;
    this.ySize = ySize;
    this.OldYSize = ySize;
    this.hidden = true;

    //instantere alle knapperne
    this.tfDay = new Textfield(this.xPos +10, this.openYpos + (this.ySize/9) +55, ySize - ySize/8, 25, false, "Dag");
    this.tfMounth = new Textfield(this.xPos +10, this.openYpos + (this.ySize/9)*2+55, ySize- ySize/8, 25, false, "Måned");
    this.tfYear = new Textfield(this.xPos +10, this.openYpos + (this.ySize/9)*3+55, ySize- ySize/8, 25, false, "År");
    this.tfDay.input = day();
    this.tfMounth.input = month();
    this.tfYear.input = year();

    this.btnMorgen = new Button(this.xPos + this.xSize/2, this.openYpos + (this.ySize/9) +55, this.xSize/2 -10, 35, false, "Morgen");
    this.btnFormiddag = new Button(this.xPos + this.xSize/2, this.openYpos + (this.ySize/9)*2 +55, this.xSize/2 -10, 35, false, "Formiddag");
    this.btnEftermiddag = new Button(this.xPos + this.xSize/2, this.openYpos + (this.ySize/9)*3 +55, this.xSize/2 -10, 35, false, "Eftermiddag");
    this.btnAften = new Button(this.xPos + this.xSize/2, this.openYpos + (this.ySize/9)*4 +55, this.xSize/2 -10, 35, false, "Aften");

    //boolean som sørger for at den section man har valgt af tid bliver vist
    this.Morgen = false;
    this.Formiddag = false;
    this.Eftermiddag = false;
    this.Aften = false;

    //de forskellige knappe arrays
    this.btnArrayMorgen = [];
    this.btnArrayFormiddag = [];
    this.btnArrayEftermiddag = [];
    this.btnArrayAften = [];

    //classen output
    this.output = "";
  }

  //bruger tila t rykke ypotionene på en knap
  moveBtn(ypos, btn) {
    btn.yPos = ypos;
  }

  //fylder knappelister op med knapper efter tid
  fillUpBtnArray(btnArray, timer, min, slutTime, slutMin, xpos, ypos) {
    let i = 0;
    for (let y = 0; y < 24; y++) {
      for (let x = 0; x < 7; x++) {
        //knappen søttelse og postion
        let xs = (this.xSize/2)/6 - 20;
        let ys = (this.ySize/6 - 10)/2;
        let xp = this.xPos + this.xSize/2 + ((xs+5)*x) + 12;
        let yp =  ypos + ((ys+ 5)*y);

        //tilføjer knappen til arrayet
        btnArray[i] = new Button(xp, yp, xs, ys, false, timer + ":" + min);
        i++;

        //stopper loopet vis du har ramt tiden
        if (timer == slutTime && min == slutMin ) {
          console.log("time: " + timer + " min: " + min);
          break;
        } else {
          //sørger for at den rigtige tid står på knapperne
          if (min +5>55) {
            timer += 1;
            min = 0;
          } else {
            min += 5;
          }
        }
      }
      //stopper andet loop
      if (timer == slutTime && min == slutMin ) {
        break;
      }
    }
  }

  draw() {
    //tegner fanen vis knappen ikke er gemt
    if (!this.hidden) {
      //baggrunden
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      rect(this.xPos, this.yPos, this.xSize, this.OldYSize/9);
      rect(this.xPos, (this.ySize + this.yPos)- this.OldYSize/8, this.xSize, this.OldYSize/8);
      //overskrifter
      textSize(20);
      text("Vælg tid", this.xPos +10, this.yPos + (this.OldYSize/9)/2 );
      textSize(16);
      text("Dato:", this.xPos +10, this.yPos + this.OldYSize/9 + 25 );
      text("Tidspunkt:", this.xPos + this.xSize/2, this.yPos + this.OldYSize/9 + 25 );
      textSize(14);

      //tener alle tffælter og knapper som ikke vælger tid
      this.tfDay.drawTF();
      this.tfMounth.drawTF();
      this.tfYear.drawTF();
      this.btnMorgen.drawbtn();
      this.btnFormiddag.drawbtn();
      this.btnEftermiddag.drawbtn();
      this.btnAften.drawbtn();
      textSize(12);


      //tegner tidknapperne vis de forskellige perioder er blevet valgt
      if (this.Morgen) {

        for (let i = 0; i < this.btnArrayMorgen.length; i++) {
          this.btnArrayMorgen[i].drawbtn();
        }
      } else if (this.Formiddag) {

        for (let i = 0; i < this.btnArrayFormiddag.length; i++) {
          this.btnArrayFormiddag[i].drawbtn();
        }
      } else if (this.Eftermiddag) {

        for (let i = 0; i < this.btnArrayEftermiddag.length; i++) {
          this.btnArrayEftermiddag[i].drawbtn();
        }
      } else if (this.Aften) {
        for (let i = 0; i < this.btnArrayAften.length; i++) {
          this.btnArrayAften[i].drawbtn();
        }
      }
    } else {
      //overskrift vis når fanen er gemt
      textSize(20);
      text("Vælg tid: " + this.output, this.xPos +10, this.yPos + (this.ySize/9)/2 );
    }
  }

  siteClicked(mx, my) {
    //tjekker alle knapper og tekstflæter igennem og igver brugerns mus x og y vis siden ikke er gemt
    if (!this.hidden) {


      if (this.Morgen) {
        for (let i = 0; i < this.btnArrayMorgen.length; i++) {
          this.btnArrayMorgen[i].checkIfClicked(mx, my);
        }
      } 

      if (this.Formiddag) {
        for (let i = 0; i < this.btnArrayFormiddag.length; i++) {
          this.btnArrayFormiddag[i].checkIfClicked(mx, my);
        }
      }
      if (this.Eftermiddag) {
        for (let i = 0; i < this.btnArrayEftermiddag.length; i++) {
          this.btnArrayEftermiddag[i].checkIfClicked(mx, my);
        }
      }
      if (this.Aften) {
        for (let i = 0; i < this.btnArrayAften.length; i++) {
          this.btnArrayAften[i].checkIfClicked(mx, my);
        }
      }
      this.btnMorgen.checkIfClicked(mx, my);
      this.btnFormiddag.checkIfClicked(mx, my);
      this.btnEftermiddag.checkIfClicked(mx, my);
      this.btnAften.checkIfClicked(mx, my);
    }
  }
  //vis siden ikke er gemt giver den tastatur inputtet til alle tekstflæter
  siteTyped(key, keyCode) {
    if (!this.hidden) {
      this.textInput(key, keyCode);
      this.textInput(key, keyCode);
      this.textInput(key, keyCode);
    }
  }
}
