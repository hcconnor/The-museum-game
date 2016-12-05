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
                   "L1": [new cardBase("The Lobby", ["Welcome to the Museum of History! Experience our new Mysteries of the Inca exhibit! Available for a short time only!", "Welcome to the Museum of History! Experience our new Mysteries of the Inca exhibit! Available for a short time only!", "There is no escape!", "There is no escape!"], [""], "Discovery Card")],
                   "E1": [new cardBase("The Egyptian Exhibit",["The Egyptians were a once great civilization that had thrived through blistering sands and the burning Sun.", "The Egyptians were a once great civilization that had thrived through blistering sands and the burning Sun.","The Egyptians were a once great civilization that had thrived through blistering sands and the burning Sun.","The Egyptians were a once great civilization that had thrived through blistering sands and the burning Sun."],[""], "Discovery Card")],
                   "E2": [new cardBase("The Egyptian Exhibit",["Cracked and worn with age, this burial urn has served its tenant well post mortem.", "Cracked and worn with age, this burial urn has served its tenant well post mortem.", "Cracked and worn with age, this burial urn has served its tenant well post mortem.", "Cracked and worn with age, this burial urn has served its tenant well post mortem."],["If picked up by a player, add the burial urn to their inventory.", "If picked up by a player, add the burial urn to their inventory.", "If picked up by a player, add the burial urn to their inventory.", "If picked up by a player, add the burial urn to their inventory.", "If picked up by a player, add the burial urn to their inventory."], "Item")],
                   "E3": [new cardBase("The Egyptian Exhibit",["The Egyptians never did like having their tombs robbed.", "The Egyptians never did like having their tombs robbed.", "The Egyptians never did like having their tombs robbed.", "The Egyptians never did like having their tombs robbed."],["","Spawn a 2/2 Tomb Guardian in the current room.", "Spawn a 2/2 Tomb Guardian in the current room.","Spawn a 2/2 Tomb Guardian in the current room."], "Event")],
                   "E4": [new cardBase("The Egyptian Exhibit",["The Egyptian Snake god represented chaos and opposed the gods of light and truth.", "The Egyptian Snake god represented chaos and opposed the gods of light and truth.", "The Egyptian Snake god represented chaos and opposed the gods of light and truth.", "The Egyptian Snake god represented chaos and opposed the gods of light and truth."],["Lose 2 AP for this turn only.", "Lose 2 AP for this turn only.", "Lose 2 AP for this turn only.", "Lose 2 AP for this turn only."], "Event")],
                   "E5": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E6": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E7": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E8": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E9": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E10": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E11": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "E12": [new cardBase("The Egyptian Exhibit",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],
                   "": [new cardBase("",[""],[""], "")],

                   "C1": [new cardBase("Courtyard","Just a courtyard.","Why are you outside?", "Room")],
                   "C2": [new cardBase("Courtyard","Just a courtyard.","Why are you outside?", "Room")],
                   "C3": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")],
                   "C4": [new cardBase("Courtyard","Sigh","This was a mistake", "Room")]
};
//------------------------BOOKS-----------------------------------------
var library = {
  "Title" : ["hopefully the text fits here" , "one page at a time"]
}
