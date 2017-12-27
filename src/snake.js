const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isSnakeHitsLeftWall: function(){
    let head = this.head;
    return head.x == 0;
  },
  isSnakeHitsUpWall: function(){
    let head = this.head;
    return head.y == 0;
  },
  isSnakeHitsRightWall: function(rightEndOfWall){
    let head = this.head;
    return head.x == rightEndOfWall;
  },
  isSnakeHitsDownWall: function(gridHeight){
    let head = this.head;
    return head.y == gridHeight;
  },
  isSnakeHitsSideWall: function(rightEndOfWall){
    return this.isSnakeHitsLeftWall()||this.isSnakeHitsRightWall(rightEndOfWall)
  },
  isSnakeHitsUpDownWall: function(gridHeight){
    return this.isSnakeHitsUpWall()||this.isSnakeHitsDownWall(gridHeight);
  },
  isDied: function(rightEndOfWall,gridHeight){
    return this.isSnakeHitsSideWall(rightEndOfWall)||this.isSnakeHitsUpDownWall(gridHeight);
  }
}
