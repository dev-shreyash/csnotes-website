
//bubbules
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
(function canvasSetup(){
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.globalCompositeOperation = 'lighter';
})();
window.onresize = function() {
  canvasSetup();
};

var addStar = 0;
var stars = [];
var totalStars = 0; // spawns stars at start
var mousePos = {
  x: canvas.width * 0.5,
  y: canvas.height * 0.5
};
var friction = 0.996

//adds a new star objects to array stars
// Define an array of your custom colors
const customColors = ['#00BCD4', '#50009c', '#5800b5', '#38FF90', '#7f01ce', '#FF33FF', '#05f6fa','#38ffff', '#38fff7', '#38a3ff', '#3840ff', '#9438ff', '#f838ff', '#CCCCCC'];

function pushStar() {
  const randomColor = customColors[Math.floor(Math.random() * customColors.length)];

  stars.push({
    x: mousePos.x + 20 * (Math.random() - 0.5),
    y: mousePos.y + 20 * (Math.random() - 0.5),
    Vx: 0,
    Vy: 0,
    r: 25 * Math.random() + 3,  // random size
    color: randomColor // use the selected custom color
  });
}
let mouseClickTime = 0;

// Remove stars after a certain time interval
const removeStarsInterval = setInterval(function () {
  if (stars.length > 0 && Date.now() - mouseClickTime > 1000) {
    stars.pop(); // Remove the last star from the array
  }
}, 250); // Remove a star every 1 second

// Stop removing stars if the mouse is clicked
document.addEventListener("mousedown", function () {
  mouseClickTime = Date.now();
});

//spawns stars
for (var i = 0; i < totalStars; i++) {
  pushStar();
}
//push away if mouse down
document.addEventListener("mousedown", function() {
  addStar = 1;
  for (var i = 0; i < stars.length; i++) {
    stars[i].Vx += 3 * Math.cos(Math.atan2(stars[i].y - mousePos.y, stars[i].x - mousePos.x));
    stars[i].Vy += 3 * Math.sin(Math.atan2(stars[i].y - mousePos.y, stars[i].x - mousePos.x));
  }
});
  setTimeout(function(index) {
    stars.splice(index, 1);
  }, Math.random() * 3000 + 2000, i); // Random time between 2 to 5 seconds

// waits for mouse move and then updates position
document.addEventListener('mousemove', function(evt) {
  mousePos = {
    x: evt.clientX,
    y: evt.clientY
  };
}, false);

//recursive draw function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < stars.length; i++) {
    //draw a circle
    ctx.beginPath();
    ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, 2 * Math.PI, true);
    ctx.fillStyle = stars[i].color;
    ctx.fill();
    //bounce off walls
    if (stars[i].x > canvas.width - stars[i].r) {
      stars[i].Vx *= -friction;
      stars[i].x = canvas.width - stars[i].r;
    } else if (stars[i].x < stars[i].r) {
      stars[i].Vx *= -friction;
      stars[i].x = stars[i].r;
    }
    if (stars[i].y > canvas.height - stars[i].r) {
      stars[i].Vy *= -friction;
      stars[i].y = canvas.height - stars[i].r;
    } else if (stars[i].y < stars[i].r) {
      stars[i].Vy *= -friction;
      stars[i].y = stars[i].r;
    }
    // attraction to the mouse
    stars[i].Vx += -0.03 * Math.cos(Math.atan2(stars[i].y - mousePos.y, stars[i].x - mousePos.x));
    stars[i].Vy += -0.03 * Math.sin(Math.atan2(stars[i].y - mousePos.y, stars[i].x - mousePos.x));
    //change position, velocity, size of object elements for each location in array
    stars[i].x += stars[i].Vx;
    stars[i].y += stars[i].Vy;
    //friction slows velocity
    stars[i].Vx *= friction;
    stars[i].Vy *= friction;
  }
  if (addStar == 1) {
    pushStar();
    addStar = 0;
  } else if (addStar == -1) {
    stars = [];
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);




// Set the canvas size
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// Spawns stars with initial random positions and velocities
for (var i = 0; i < 60; i++) {
  
  stars.push({
    
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    Vx: (Math.random() - 0.5) * 4, // Random velocity in the X direction (-2 to 2)
    Vy: (Math.random() - 0.5) * 4, // Random velocity in the Y direction (-2 to 2)
    r: 25 * Math.random() + 3,  // Random size
    color: customColors[Math.floor(Math.random() * customColors.length)] // Random color
  });

}


