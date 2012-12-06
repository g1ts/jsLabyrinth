function mkbg(){
  var b = document.getElementsByTagName('body')[0];

  var imgs = [];
  var positions = [];

  var l = 26;
  var img = ['1.png', '2.png'];
  var sw = b.scrollWidth;
  var sh = b.scrollHeight;

  for(var i=0;i<sh/l;i++){
    for(var j=0;j<sw/l;j++){
      imgs.push('url('+img[Math.round(Math.random())]+')');
      positions.push(j*l+'px '+i*l+'px');
    }
  }

  b.style.backgroundImage = imgs.join(', ');
  b.style.backgroundPosition = positions.join(', ');
  b.style.backgroundRepeat = "no-repeat";
}

