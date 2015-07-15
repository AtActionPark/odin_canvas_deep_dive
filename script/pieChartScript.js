var data = [ 100, 68, 20, 30, 100 ]; 

var canvas = document.getElementById('canvas');

var c = canvas.getContext('2d');

//draw
c.fillStyle = "white";
c.fillRect(0,0,500,500);

var colors = ["orange", "green", "blue", "yellow", "teal"];

//calculate total of all data
var total = 0;
for (var i = 0;i<data.length;i++){
  total+=data[i];
}

//draw pie data
var previousAngle = 0;
for(var i = 0;i<data.length;i++){
  //fraction that this pieslice represents
  var fraction = data[i]/total;
  //calc starting angle
  var angle = previousAngle+fraction*Math.PI*2;

  //draw the pie slice
  c.fillStyle = colors[i];

  //fill with a radial gradient
  var grad = c.createRadialGradient(250,250,10,250,250,100);
  grad.addColorStop(0,"white");
  grad.addColorStop(1,colors[i]);
  c.fillStyle = grad;

  //create a path
  c.beginPath();
  c.moveTo(250,250);
  c.arc(250,250,100,previousAngle,angle,false);
  c.lineTo(250,250);

  //fill it
  c.fill();

  //stroke it
  c.strokeStyle = "black";
  c.stroke();

  //update for next time through the loop
  previousAngle =angle;
}

//draw centered text
c.fillStyle = "black";
c.font = "24pt sans-serif";
var text = "Sales Data from 2005";
var metrics = c.measureText(text);
c.fillText(text,250-metrics.width/2,400);
