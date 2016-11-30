var canvas = document.getElementById('The-Museum-Game'); //something from index goes here
var context = canvas.getContext('2d');
//-----------------PLAYER-------------------------------
function player(myPlayerNum, myType){
  this.playerNum = myPlayerNum;
  this.type = myType;
  this.skills = abilities[this.type];
  this.inventory = [];
}

var abilities = {
         "Thief": ["Pick Up","Drop","Unlock","lol whatever this one was"],
    "Politician": [],
       "Veteran": [],
     "Professor": []
};

//-----------------ENGINE MECHANICS---------------------
function gui(){

}

function changeTurn(){

}
