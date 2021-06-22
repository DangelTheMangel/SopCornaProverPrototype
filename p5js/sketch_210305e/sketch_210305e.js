
// Alle globale variabler 
var tlfSite;
var vaelgSted;
var vaelgTid;
var btos;
var lastSite = new LastSite();

function setup() {
  //Her besttems størelsen på siden
  createCanvas(1920, 1380);

  //Her bliver alle siderne instanseret
  tlfSite = new IndtastTLF(500, 170, width-1000, 515);
  vaelgSted = new VaelgSted(500, 515+170, width-1000, 415);
  vaelgTid = new VaelgTid(500, 515+214, (tlfSite.ySize)/9 + 214, width-1000, 415);
  btos = new BekraftTidogSted(500, 515+258, width-1000, 415);

  //her bliver her for størstedlen af knapperne deres funktioner
  giveAllButtonFunction();
}

function draw() {
  //fjerne alt hvad der er tegnet på skørmen
  clear();
  // tegner bagrounden
  background(220);

  //tegner banneret
  rect(0, 0, width, 130);
  rect(0, 28, width, 65);
  textSize(25);
  text("[CornaPrototype.dk]", 290, 60);
  textSize(12);
  rect(0, height-50, width, 50);

  //vis sidste side er skjult tegner den alle de andre sider eller tegner den kun den sidste side
  if (lastSite.hidden) {
    tlfSite.draw();
    vaelgSted.drawSite();
    vaelgTid.draw();
    btos.draw();
  } else {
    lastSite.draw();
  }
}

function mouseClicked() {

  //Giver alle siderne infomation hvor musen er når brugerne klikker
  tlfSite.siteClicked(mouseX, mouseY);
  vaelgTid.siteClicked(mouseX, mouseY);
  vaelgSted.siteClicked(mouseX, mouseY);
  btos.siteClicked(mouseX, mouseY);
}

function keyPressed() {
  //giver tlf siden tastatur input når der klikkets på tatataturet
  tlfSite.siteTyped(key, keyCode);
}


function giveAllButtonFunction() {
  //giver tlf siden knap nej funktionen at lukke sidden og gå videre til næste
  tlfSite.btnNo.onClicked = function() {
    tlfSite.hidden = true;
    vaelgSted.hidden = false;
    vaelgSted.yPos = (tlfSite.ySize)/9 + 170;
    lastSite.tlfBool = false;
  };

  //giver tlf siden knap ja funktionen at lukke sidden og gå videre til næste
  tlfSite.btnYes.onClicked = function() {
    tlfSite.hidden = true;
    this.tlfChoosen = true;
    vaelgSted.hidden = false;
    vaelgSted.yPos = (tlfSite.ySize)/9 + 170;
    lastSite.tlfBool = true;
    lastSite.tlf = tlfSite.tf.input;
  };

  //I dette forloop giver den alle knapperne hos vælg sted og giver den funktion   
  for (let i = 0; i < vaelgSted.btnArray.length; i++) {
    vaelgSted.btnArray[i].onClicked =function() {
      vaelgSted.hidden = true;
      tlfSite.hidden = true;
      vaelgSted.hidden = true;
      vaelgTid.hidden = false;
      lastSite.place = vaelgSted.btnArray[i].btnText;
      vaelgSted.location = vaelgSted.btnArray[i].btnText;
      vaelgTid.yPos = vaelgTid.openYpos ;
      btos.yPos =vaelgTid.yPos + vaelgTid.ySize;
    };
  }

  //disse er variablerne som bestemmer knappenerne tid minut og postion under tid 
  let timer = 9;
  let min = 5 ;
  let xpos = vaelgTid.btnMorgen.sizeX;
  let ypos = vaelgTid.btnMorgen.yPos + vaelgTid.btnMorgen.sizeY + 13 ;
  //laver alle knapper under formidag
  vaelgTid.fillUpBtnArray(vaelgTid.btnArrayMorgen, timer, min, 10, 45, xpos, ypos);

  //laver alle knapper under morgen og giver en ny start
  timer = 10;
  min = 50 ;
  ypos = vaelgTid.btnFormiddag.yPos + vaelgTid.btnFormiddag.sizeY + 13 ;
  vaelgTid.fillUpBtnArray(vaelgTid.btnArrayFormiddag, timer, min, 11, 55, xpos, ypos);

  //laver alle knapper under eftermidag og giver en ny start
  timer = 13;
  min = 0 ;
  ypos = vaelgTid.btnEftermiddag.yPos + vaelgTid.btnEftermiddag.sizeY + 13 ;
  vaelgTid.fillUpBtnArray(vaelgTid.btnArrayEftermiddag, timer, min, 17, 55, xpos, ypos);

  //laver alle knapper under aften og giver en ny start
  timer = 18;
  min = 0 ;
  ypos = vaelgTid.btnAften.yPos + vaelgTid.btnAften.sizeY + 13 ;
  vaelgTid.fillUpBtnArray(vaelgTid.btnArrayAften, timer, min, 21, 55, xpos, ypos);

  //Giver knappen som viser morgen tider dens funktion
  vaelgTid.btnMorgen.onClicked =function() {
    vaelgTid.Morgen = true;
    vaelgTid.Formiddag = false;
    vaelgTid.Eftermiddag = false;
    vaelgTid.Aften = false;
    let extra = (((vaelgTid.OldYSize/9) * (vaelgTid.btnArrayMorgen.length/7)) + 30);
    console.log(extra);
    vaelgTid.ySize = 415 + extra;
    vaelgTid.btnFormiddag.yPos = vaelgTid.yPos + (vaelgTid.OldYSize/9)*2 + extra ;
    vaelgTid.btnEftermiddag.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*3 + extra;
    vaelgTid.btnAften.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*4 + extra;
    btos.yPos =vaelgTid.yPos + vaelgTid.ySize;
  };
  //Giver knappen som viser formiddag tider dens funktion
  vaelgTid.btnFormiddag.onClicked =function() {
    vaelgTid.Morgen = false;
    vaelgTid.Formiddag = true;
    vaelgTid.Eftermiddag = false;
    vaelgTid.Aften = false;

    let extra =(((vaelgTid.OldYSize/9) * (vaelgTid.btnArrayFormiddag.length/7)) + 30);
    console.log(extra);
    vaelgTid.ySize = 415 + extra;
    vaelgTid.btnFormiddag.yPos = vaelgTid.yPos + (vaelgTid.OldYSize/9)*2+55;
    vaelgTid.btnEftermiddag.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*3 + 55 + extra;
    vaelgTid.btnAften.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*4 +55+ extra;
    btos.yPos =vaelgTid.yPos + vaelgTid.ySize;
  };

  //Giver knappen som viser Efftermiddag tider dens funktion
  vaelgTid.btnEftermiddag.onClicked =function() {
    vaelgTid.Morgen = false;
    vaelgTid.Formiddag = false;
    vaelgTid.Eftermiddag = true;
    vaelgTid.Aften = false;

    let extra = (((vaelgTid.OldYSize/9) * (vaelgTid.btnArrayEftermiddag.length/7)))+30;
    vaelgTid.ySize = 415 + extra;
    console.log(extra);
    vaelgTid.btnFormiddag.yPos = vaelgTid.yPos + (vaelgTid.OldYSize/9)*2+ 55;
    vaelgTid.btnEftermiddag.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*3+ 55;
    vaelgTid.btnAften.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*4 + extra;
    btos.yPos =vaelgTid.yPos + vaelgTid.ySize;
  };

  //Giver knappen som viser aften tider dens funktion
  vaelgTid.btnAften.onClicked =function() {
    vaelgTid.Morgen = false;
    vaelgTid.Formiddag = false;
    vaelgTid.Eftermiddag = false;
    vaelgTid.Aften = true;
    vaelgTid.ySize = 943;

    let extra = (((vaelgTid.OldYSize/9) * (vaelgTid.btnArrayAften.length/7)))+30;
    vaelgTid.ySize = 415 + extra;

    vaelgTid.btnFormiddag.yPos = vaelgTid.yPos + (vaelgTid.OldYSize/9)*2+ 55;
    vaelgTid.btnEftermiddag.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*3+ 55;
    vaelgTid.btnAften.yPos =vaelgTid.yPos + (vaelgTid.OldYSize/9)*4 + 55;
    btos.yPos =vaelgTid.yPos + vaelgTid.ySize;
  };

  //giver alle knapperne i deres array deres funktion
  vaelgTidgiveBtnArrayFuncktion(vaelgTid.btnArrayMorgen);
  vaelgTidgiveBtnArrayFuncktion(vaelgTid.btnArrayFormiddag);
  vaelgTidgiveBtnArrayFuncktion(vaelgTid.btnArrayEftermiddag);
  vaelgTidgiveBtnArrayFuncktion(vaelgTid.btnArrayAften);

  //gøre at man kommer til sidste side
  btos.btnAccept.onClicked = function() {
    lastSite.hidden = false;
  };
}

function vaelgTidgiveBtnArrayFuncktion(btnArray) {

  //giver alle knapperne deres funktioner
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].onClicked = function() {
      vaelgSted.hidden = true;
      tlfSite.hidden = true;
      vaelgSted.hidden = true;
      vaelgTid.hidden = true;
      btos.hidden = false;
      let day = vaelgTid.tfDay.input;
      let mounth = vaelgTid.tfMounth.input;
      let Year = vaelgTid.tfYear.input;
      vaelgTid.output = day + "-"+ mounth +"-"+Year +","+btnArray[i].btnText;
      lastSite.time = vaelgTid.output ;
      btos.yPos =350;
      btos.btnAccept.yPos = (btos.yPos + btos.ySize/2)- btos.btnAccept.sizeY/2;
      btos.btnAccept.xPos = (btos.xPos + btos.xSize/2)- btos.btnAccept.sizeX/2 ;// btnAccept (btos.btnAccept.xSize/2) - (btos.btnAccept.sizeX/2);
    };
  }
}
