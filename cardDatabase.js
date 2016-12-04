//----------------------------BASE CARD OBJECT---------------------
/*    USAGE
  Draw card, check card type. If card is not an item, call card.action();
  If card is item or has no action, nothing happens.
  Player can use ability "pick up" on items.

  IMPLEMENTATION NOTES OR QUESTIONS:
    Should dialogue be contained within objects or should the objects
    be part of the array in the list where dialogue/text is kept right now?

*/
function cardBase(myRoom, myDialogue, myEffect, myType){
  this.room = myRoom;
  this.dialogue = myDialogue;
  this.effect = myEffect;
  this.type = myType;
};

function item(myRoom, myDialogue, myEffect, myName, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.name = myName;
};

function book(myRoom, myDialogue, myEffect, myName, myType){
  item.call(this,myRoom, myDialogue, myEffect, myName, myType);
  this.action = function(){
    //print words
  }
}

function affectPlayerHealth(myRoom, myDialogue, myEffect, myValue, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.value = myValue;

  this.action = function(target){
    target.health += value;
  }
};

function affectGlobalBoolean(myRoom, myDialogue, myEffect, myValue, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.value = myValue;

  this.action = function(target){
    target = this.value;
  }
};

function affectPlayerAP(myRoom, myDialogue, myEffect, myValue, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.value = myValue;

  this.action = function(target){
    target.ap += this.value;
  }
};

function advanceStage(myRoom, myDialogue, myEffect, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);

  this.action = function(){
    currStage++;
  }
}
//----------------------CARD DATABASE FUNCTIONS-------------------------
function searchDatabase(index){
  return cardDatabase[index][currStage-1];
}
//-----------------------CARD DATABASE STRUCTURE-------------------------
var cardDatabase= {
         "example line": ["Room","stage 1 dialogue","stage 2 dialogue","stage 3 dialogue","stage 4 dialogue"],
                   "A1": [new cardBase("Lobby","Welcome to the Museum!","Gain +1 wonder", "Room")],
                   "B1": [new cardBase("The Gift Shop","The Gift shop wooooo","Lose $400 gg nerd", "Room")]
};
//------------------------BOOKS-----------------------------------------
var library = {
  "Title" : ["hopefully the text fits here" , "one page at a time"]
}
