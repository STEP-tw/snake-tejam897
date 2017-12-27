const Snake=function(head,body) {
  this.head=head;
  this.body=body;
  this.tailLength = 2;
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
    this.tailLength+=1;
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  isHitsLeftWall: function(){
    let head = this.head;
    return head.x == 0;
  },
  isHitsUpWall: function(){
    let head = this.head;
    return head.y == 0 ;
  },
  isHitsRightWall: function(rightEndOfWall){
    let head = this.head;
    return head.x == rightEndOfWall;
  },
  isHitsDownWall: function(gridHeight){
    let head = this.head;
    return head.y == gridHeight;
  },
  isHitsSideWall: function(rightEndOfWall){
    return this.isHitsLeftWall()||this.isHitsRightWall(rightEndOfWall)
  },
  isHitsUpDownWall: function(gridHeight){
    return this.isHitsUpWall()||this.isHitsDownWall(gridHeight);
  },
  isHitsItself: function(){
    let head = this.head;
    let body = this.body;
  },
  isHitsItself: function(){
    let head = this.head;
    let body = this.body;
    let tailLength = this.tailLength;
    let diffOfXCoords = head.x-body[0].x;
    let diffOfYCoords = head.y-body[0].y;
    return (head.x == body[0].x&&diffOfYCoords<tailLength)||(head.y == body[0].y&&diffOfXCoords<tailLength);
  },
  isDied: function(rightEndOfWall,gridHeight){
    return this.isHitsSideWall(rightEndOfWall)||this.isHitsUpDownWall(gridHeight)||this.isHitsItself();
  }
}
