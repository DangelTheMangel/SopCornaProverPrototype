class LastSite {
  constructor() {
    //classen variavler
    this.hidden = true;
    this.tlfBool = false;
    this.tlf = "";
    this.place = "";
    this.time = "";
  }

  draw() {
    //den sting der bliver skrevet på skærmen
    var sting ;
    //vis tlf ikke ønsket står der det eller står der det valgte telefonnummer
    if (!this.tlfBool) {
      sting = "Tlf:" + " Ikke ønsket" + "\nSted: " + this.place + "\nTid: "+ this.time;
    } else {
      sting = "Tlf:" + this.tlf + "\nSted: " + this.place + "\nTid: "+ this.time;
    }
    //tegner teskten på skærmen
    textSize(75);
    text(sting, 50, 250);
  }
}
