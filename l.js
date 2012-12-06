// s = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAaCAQAAABS17cmAAAAAXNSR0IArs4c6QAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AwGCDEUmydGXgAAAAh0RVh0Q29tbWVudAD2zJa/AAAA00lEQVRIx7WW3Q3DIAyEbwnG6AYZmREqMQqjXB9oSxrh1AcmT1Ei/Pn3DEAwsXLfkwmCAPeiMh8N9Hk5+NyAKW/riejMeFRhzxeuH8Jrw4OVbKCOiovqmidYP2Iw6WsNtg8R0fRS4C7cmKQNQBEoywLs7NZAzAC0grrLB9QDHhUYnYLu238VoB+kqkX5UQEJpKCyQ1ewkg5LBWSQp1beHsVKyyqjgJXpKANNWwBZqCytFmhT0n1XJw1z8lLkgcaMkuWJfQxKatYA/haYBJ1uafLGegHmwLVw17GPCwAAAABJRU5ErkJggg==';

//i = new Image(s);


// картинки можно генерить на холсте или из base64 строк

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

