window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
window.URL = window.URL || window.webkitURL;

var l = 26;

function mkbg(){
  init();
  var b = document.getElementsByTagName('body')[0];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;

  for(var i=0;i<sw/l;i++){
    for(var j=0;j<sh/l;j++){
      drawLine(context, l, i*l, j*l, Math.round(Math.random()));
    }
  }
  setBg();
}

function update(){
  var b = document.getElementsByTagName('body')[0];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;
  var c = (sw/l*sh/l)*0.05;
  for(var i=0;i<c;i++){
    var x = l*Math.round(sw/l*Math.random());
    var y = l*Math.round(sh/l*Math.random());
    drawLine(context, l, x, y, Math.round(Math.random()));
  }
  setBg();
}

function setBg(){
  var b = document.getElementsByTagName('body')[0];
  if(typeof window.Blob == "function" && typeof c.toBlob == "function"){
    c.toBlob(function(blob){
      var u = URL.createObjectURL(blob);
      b.style.backgroundImage += ", url('" + u + "')";
      b.style.backgroundRepeat = "no-repeat";
      setTimeout(function(){
        b.style.backgroundImage = "url('" + u + "')";
      },200);
    });
  }else{
    var u = c.toDataURL("image/png");
    b.style.backgroundImage += ', url(' + u + ')';
    setTimeout(function(){
      b.style.backgroundImage = 'url(' + u + ')';
    },200);
  }
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
  context.strokeStyle = '#ae94d9';
  context.fillStyle = '#3a2362';
}

function drawLine(context, l, X, Y, d){
  context.fillRect(X,Y,l,l);
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


