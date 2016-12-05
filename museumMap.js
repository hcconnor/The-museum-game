function node(myName){
  this.name = myName;
  this.links = [];
  this.currPlayers = [];
  this.hasMonster = false;
  this.isLocked = false;
}

function makeMap(){
  museum.push(new node("Lobby"));             //0
  museum.push(new node("Gift Shop"));         //1
  museum.push(new node("Hallway"));           //2
  museum.push(new node("Main Exhibit"));      //3
  museum.push(new node("Egyptian Exhibit"));  //4
  museum.push(new node("Power Room"));        //5
  museum.push(new node("Security Room"));     //6
  museum.push(new node("Medieval Exhibit"));  //7

  //connect rooms here
}


//pathfinding algorithm
function findPath(start, end, myPlayer){
  var playerAP = myPlayer.actionPoints;
  var availableRms = playerAP/2;

  var path = search(start, end, myPlayer);
  return path;
}

function search(myStart, myEnd, avblAP){
  var AP = avblAP;
  var start = myStart;
  var end = myEnd;
  var result = [];

  for(var i = 0; i < start.link.length; i++){
    if(start.link[i].name == end.name){
      result.push(start.link[i]);
      return result;
    }else if(AP > 0){
      result.push(search(start.link[i],end, AP-1));
    }else{
      return result;
    }
  }
}
