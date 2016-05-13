function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    
   var ctx = canvas.getContext('2d');
   var x = 0;
    var y = 0;
   
  
    
    
   drawChar(x,y);
    
  }
}

    
     function drawChar(x,y){
    var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
        
   
     ctx.fillStyle= "yellow";
ctx.fillRect(0+x,160+y,25,10);
ctx.fillRect(85+x,160+y,29,10);
ctx.fillStyle= "black";
ctx.fillRect(25+x,25+y,60,140);
ctx.fillStyle= "Red";
ctx.fillRect(25+x,25+y,10,60);
ctx.fillRect(75+x,25+y,10,60);
ctx.fillRect(25+x,115+y,60,20);


ctx.fillStyle="blue";
ctx.beginPath();
ctx.moveTo(45+x, 90+y);
ctx.lineTo(65+x, 90+y);
ctx.lineTo(55+x, 110+y);
ctx.fill();
}
     }       
