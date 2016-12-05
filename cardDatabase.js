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

function spawnMonster(myRoom, myDialogue, myEffect, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);

  this.action = function(target){
    target.hasMonster = true;
  }
};

function item(myRoom, myDialogue, myEffect, myName, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.name = myName;
};

function book(myRoom, myDialogue, myEffect, myName, myType){
  item.call(this,myRoom, myDialogue, myEffect, myName, myType);
  this.action = function(){
    return "Pick up book";
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

function changePlayerRoom(myRoom, myDialogue, myEffect, myValue, myType){
  cardBase.call(this, myRoom, myDialogue, myEffect, myType);
  this.value = myValue;

  this.action = function(target, condition){
    if(party[currPlayer].role != condition){
      party[currPlayer].currRoom = target;
    }else if(currPlayerAP[currPlayer] < 2){
      party[currPlayer].currRoom = target;
    }else;
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
                   "L1": [new cardBase("Lobby","Welcome to the Museum pf History!","Experience our new Mysteries of the Inca exhibit! Available for a short time only!", "Room")],
                   "C1": [new cardBase("Courtyard","Just a courtyard.","Why are you outside?", "Room")],
                   "C2": [new cardBase("Courtyard","Just a courtyard.","Why are you outside?", "Room")],
                   "C3": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")],
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G1": [new cardBase("Greek Exhibit","At their pinnacle, the Greeks were a revolutionary", "force in the worlds of Mathematics, Science , and Culture.", "Room")]
                   "G2": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G3": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G5": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G6": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G7": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G8": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "G9": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E1": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E2": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E3": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E5": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E6": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E7": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E8": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E9": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "E10": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]


};
//------------------------BOOKS-----------------------------------------
var library = {
  "Title" : ["hopefully the text fits here" , "one page at a time"]
}
