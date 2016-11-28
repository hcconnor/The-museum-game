function node(String myName){
  this.name = myName;
  this.links = [];
  this.currPlayers = [];
  this.hasMonster = false;
  this.isLocked = false;
}


function makeMap(){
  museum.push(new node("Lobby")); //0
  museum.push(new node("Gift Shop")); //1
  museum.push(new node("Hallway")); //2
  museum.push(new node("Main Exhibit")); //3
  museum.push(new node("Egyptian Exhibit")); //4
  museum.push(new node("Power Room")); //5
  museum.push(new node("Security Room")); //6
  museum.push(new node("Medieval Exhibit")); //7
}
