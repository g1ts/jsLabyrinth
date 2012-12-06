var l = 26;
var _i = null;

function mkbg(){
  init();
  var b = document.getElementsByTagName('body')[0];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;

  for(var i=0;i<sw/l;i++){
    for(var j=0;j<sh/l;j++){
      dravLine(context, l, i*l, j*l, Math.round(Math.random()));
    }
  }
  setBg();
  if(_i){clearInterval(_i);}
  _i = setInterval(changeRndTile,500);
}

function changeRndTile(){
  var b = document.getElementsByTagName('body')[0];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;
  var c = (sw/l*sh/l)*0.05;
  for(var i=0;i<c;i++){
    var x = l*Math.round(sw/l*Math.random());
    var y = l*Math.round(sh/l*Math.random());
    dravLine(context, l, x, y, Math.round(Math.random()));
  }
  setBg();
}

function setBg(){
  var b = document.getElementsByTagName('body')[0];
  c.toBlob(function(blob){
    var u = URL.createObjectURL(blob);
    var oldImg = b.style.backgroundImage;
    b.style.backgroundImage += ", url('" + u + "')";
    b.style.backgroundRepeat = "no-repeat";
    setTimeout(function(){
      b.style.backgroundImage = "url('" + u + "')";
    },200);
  })
}

function init(){
  var b = document.getElementsByTagName('body')[0];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;
  c = document.createElement('canvas');
  c.width = sw;
  c.height = sh;
  context = c.getContext('2d');
  context.lineWidth = 3;
}

function dravLine(context, l, X, Y, d){
  //context.clearRect(X-1,Y-1,l+2,l+2);
  context.clearRect(X,Y,l,l);
  if(d==true){
    var x1=X;
    var y1=Y;
    var x2=X+l;
    var y2=Y+l;
  }else{
    var x1=X+l;
    var y1=Y;
    var x2=X;
    var y2=Y+l;
  }
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.stroke();
}


