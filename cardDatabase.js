//----------------------------BASE CARD OBJECT---------------------
/*    USAGE
  Draw card, check card type. If card is not an item, call card.action();
  If card is item or has no action, nothing happens.
  Player can use ability "pick up" on items.

  IMPLEMENTATION NOTES OR QUESTIONS:
    Should dialogue be contained within objects or should the objects
    be part of the array in the list where dialogue/text is kept right now?

*/
function cardBase(myRoom, myType, myDialogue, myEffect){
  this.room = myRoom;
  this.type = myType;
  this.dialogue = myDialogue;
  this.effect = myEffect;
};

function item(myRoom, myDialogue, myEffect, myName){
  cardBase.call(this, myRoom, myType, myDialogue, myEffect);
  this.name = myName;
};

function affectPlayerHealth(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myType, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target.health += value;
  }
};

function affectGlobalBoolean(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myType, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target = this.value;
  }
};

function affectPlayerAP(myRoom, myDialogue, myEffect, myValue){
  cardBase.call(this, myRoom, myType, myDialogue, myEffect);
  this.value = myValue;

  this.action = function(target){
    target.ap += this.value;
  }
};

function advanceStage(myRoom, myDialogue, myEffect){
  cardBase.call(this, myRoom, myType, myDialogue, myEffect);

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
