//----------------------------BASE CARD OBJECT---------------------
function cardBase(myRoom, myDialogue, myEffect){
  this.room = myRoom;
  this.dialogue = myDialogue;
  this.effect = myEffect;
};

function item(myRoom, myDialogue, myEffect){
  cardBase.call(this, myRoom, myDialogue, myEffect);
};

function affectPlayerHealth(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target.health += value;
  }
};

function affectGlobalBoolean(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target = this.value;
  }
};

function affectPlayerAP(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target.ap += this.value;
  }
};

function advanceStage(myRoom, myDialogue, myEffect){
  cardBase.call(this, myRoom, myDialogue, myEffect);

  this.action = function(){
    currStage++;
  }
}
//-----------------------CARD DATABASE STRUCTURE-------------------------
var stage1 = {
         "example line": ["Room","Guide dialogue"],
                   "A1": ["The Lobby", "Welcome to the Tortugan museum of history! Experiece our new Mysteries of Inca exhibit! Available for a short time only!"],
                   "B1": ["The Gift Shop", "The Gift shop woooooo"]
};
