class IndtastTLF {
  constructor(xPos, yPos, xSize, ySize) {
    //klassen variabler
    this.xPos = xPos;
    this.yPos = yPos;
    this.xSize = xSize;
    this.ySize = ySize;
    this.hidden = false;
    this.tlfChoosen = false;
    this.btnNo =  new Button(xPos +xSize - (190 + 305), yPos +ySize-55, 300, 35, false, "Nej, Ønsker ikke at svare på spørgeskema");
    this.btnYes =  new Button(xPos +xSize - 190, yPos +ySize-55, 170, 35, false, "Ja, deltag i spørgeskema");
    this.tf = new Textfield(this.xPos +10, this.yPos + (this.ySize/9)*2 + 55, ySize, 25, false, "Telefon nummer");
  }

  draw() {
    //tegner vinduet/ fanen vis den ikke er gemt
    if (!this.hidden) {
      //baggrunden
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      rect(this.xPos, this.yPos, this.xSize, this.ySize/9);
      rect(this.xPos, (this.ySize + this.yPos)- this.ySize/8, this.xSize, this.ySize/8);
      //Overskrift
      textSize(20);
      text("Indtast telefonnummer", this.xPos +10, this.yPos + (this.ySize/9)/2 );
      //Brødteskt
      textSize(12);
      text("Hvis din prøve er positiv, vil du blive kontaktet af Styrelsen for Patientsikkerhed eller din bopælskommune, som rådgiver om isolation og tilbyder hjælp\n" 
        +"med opsporing af nære kontakter.\n"+
        "Her kan du indtaste det nummer, som du foretrækker at blive ringet op på, så du bliver kontaktet på det rigtige nummer \n", this.xPos +10, this.yPos + this.ySize/9 + 45 );


      //telefonummer textflæt
      textSize(14);
      this.tf.drawTF();

      //oversrkift
      textSize(20);
      text("Hjælp os med at blive klogere på COVID-19 ", this.xPos +10, this.yPos + (this.ySize/2) );

      //brødteskt
      textSize(12);
      text("Før du bestiller tid til test, vil vi stille dig 2-3 spøgsmål. \n" 
        + "\n" 
        + "Du kan frit vælge, om du ville deltage, men dine svar kan hjælpe os med smitteopsporing, at blive klogere på COVID-19 i Danmark, og om der er steder,\n"+"hvor der er extra behov for smitteforebyggelse \n"+
        "\n"+
        "Dine oplysninger vil blive sendt til Statens Serum Inssitut. Hvis du oplyser dit tekefonnummer, vil det blive sendt tuk Coronaopsporing i Styrelsen for \nPatientsikkerhed", this.xPos +10, this.yPos + (this.ySize/2) + 25 );

      //knapper
      textSize(14);
      this.btnNo.drawbtn();
      this.btnYes.drawbtn();
    } else {

      //overskrift vis fanen ikke bliver vist
      textSize(20);
      text("Indtast telefonnummer:", this.xPos +10, this.yPos + (this.ySize/9)/2 );
    }
  }

  siteClicked(mx, my) {
    //tjekker vis siden er gemt om den så giver alle de ting som ikke kan klikkes dens data
    if (!this.hidden) {
      this.tf.checkIfClicked(mx, my);
      this.btnNo.checkIfClicked(mx, my);
      if (this.tf.input.length >7) {
        //tjekker om teskteflet har over 7 tegn for ellers er der ikke et telefon nummer også kan man ikke klikke ja
        this.btnYes.checkIfClicked(mx, my);
      }
    }
  }

  siteTyped(key, keyCode) {
    //tjekker vis siden er gemt vis ja giver den ikke dataen til textfeildet
    if (!this.hidden) {      
      this.tf.textInput(key, keyCode);
    }
  }
}
