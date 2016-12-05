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
  museum.push(new node("Courtyard"));         //8
  museum.push(new node("Greek Exhibit"));         //9
  museum.push(new node("Travelling Exhibit"));    //10
  museum.push(new node("Food Court"));            //11
  museum.push(new node("Basement"));              //12
  museum.push(new node("Feudal Asia Exhibit"));   //13
  museum.push(new node("Warehouse"));   //14

  //connect rooms here
  museum[0].links.push(museum[8]);

  museum[4].links.push(museum[8]);

  museum[4].links.push(museum[8]);

  museum[5].links.push(museum[9]);

  museum[8].links.push(museum[0]);
  museum[8].links.push(museum[4]);
  museum[8].links.push(museum[6]);
  museum[8].links.push(museum[9]);
  museum[8].links.push(museum[10]);
  museum[8].links.push(museum[7]);
  museum[8].links.push(museum[13]);

  museum[9].links.push(museum[8]);
  museum[9].links.push(museum[5]);

  museum[10].links.push(museum[11]);
  museum[10].links.push(museum[12]);
  museum[10].links.push(museum[14]);

  museum[11].links.push(museum[10]);

  museum[12].links.push(museum[10]);

  museum[13].links.push(museum[8]);

  museum[14].links.push(museum[10]);
}


//pathfinding algorithm
function findPath(start, end, myPlayer){
  var playerAP = myPlayer.actionPoints;
  var availableRms = playerAP/2;

  var path = search(start, end, myPlayer);
  myPlayer.currPath = path;
  return path;
}

function search(myStart, myEnd, avblAP){
  var AP = avblAP;
  var start = myStart;
  var end = myEnd;
  var result = [];

  for(var i = 0; i < start.links.length; i++){
    if(start.links[i].name == end.name){
      result.push(start.links[i]);
      return result;
    }else if(AP > 0){
      result.push(search(start.links[i],end, AP-1));
    }else{
      return result;
    }
  }
}
