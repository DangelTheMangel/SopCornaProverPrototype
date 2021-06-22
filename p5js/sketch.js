
function createBtn(x,y,sX,sY,h,text){
  return {
  xPos: x, 
  yPos: y, 
  sizeX: sX,
  sizeY: sY,
  hidden: h,
  btnText: text,


  drawbtn: function(){
    if(!this.hidden){
      rect(this.xPos,this.yPos,this.sizeX,this.sizeY) 
    }
      
  },
  
  checkIfClicked: function(mx, my){
      if (mx > this.xPos &&
                mx < this.xPos + this.sizeX &&
                my > this.yPos &&
                my < this.yPos + this.sizeY) {
                btn.onClicked();
            
        }
  },
   
  onClicked: function(){
      
  },
};
}

function createTextFeild(x,y,sX,sY,h,c){
  return {
    xPos: x, 
    yPos: y, 
    sizeX: sX,
    sizeY: sY,
    hidden: h,
    Text: c,
    input: "Indsæt",
    clicked: false,

    drawbtn: function(){
      if(!this.hidden){
      
      rect(this.xPos,this.yPos,this.sizeX,this.sizeY) 
      text('indsæt', this.xPos,this.yPos);
      }
      
    },
  
    checkIfClicked: function(mx, my){
        if (mx > this.xPos &&
                mx < this.xPos + this.sizeX &&
                my > this.yPos &&
                my < this.yPos + this.sizeY) {
                this.clicked = true;
            
          }
    },
   
    textInput: function(key){
      if(this.clicked ){
        console.log(key)
      }
    },
    
  };
}

var btn = createBtn(50,50,200,50,false,"test");
var tf = createTextFeild(300,50,200,50,false,"test");

function setup() {
  createCanvas(600, 400);
  
  btn.onClicked = function(){
    console.log("cunt");
  }
}

function draw() {
  background(220);
  //rect(50,50,50,50)
  btn.drawbtn(); 
  tf.drawbtn();
}

function mouseClicked(){
  btn.checkIfClicked(mouseX,mouseY);
  tf.checkIfClicked(mouseX,mouseY);
}

function keyTyped() {
  tf.textInput(key);
}
