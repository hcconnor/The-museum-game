var canvas = document.getElementById('The-Museum-Game'); //something from index goes here
var context = canvas.getContext('2d');
//-----------------GLOBAL VARIABLES--------------------
var buttonArray = [];
//-----------------ENGINE MECHANICS---------------------
function gui(){
  this.guiInit = function(){
    buttonArray[0] = new button("Enter", canvas.width/2, canvas.height/2, 100, 50);
  }

};

function button(text, X, Y, width, height) {
    this.text = text;
    this.width = width;
    this.height = height;
    this.x = X - this.width / 2;
    this.y = Y - this.height / 2;

    //Pass in a function then its parameter
    this.click = function(method,param) {
        method(param);
    }
    this.draw = function() {
        context.fillStyle = "GREY";
        context.fillRect(this.x, this.y, this.width, this.height);
		    context.font = "30px Arial";
        context.fillStyle = "#FFFFFF";
        context.fillText(this.text, this.x + this.width / 2 - 50, this.y + this.height / 2);
    }
};

function checkBounds(object, mouseX, mouseY) {
    if ((mouseX < (object.x + object.width)) && (mouseY < (object.y + object.height)) && (mouseX > (object.x)) && (mouseY > (object.y))) {
        return true;
    } else {
        return false;
    }
};

function phaseClick(testStr){
  console.log(testStr);
}
