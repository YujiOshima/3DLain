// Made with Zdog

// ----- setup ----- //

var sceneSize = 40;
var isSpinning = true;
var TAU = Zdog.TAU;
// colors
var pink = '#F8B';
var blush = '#F5A';
var black = '#333';
var shoe = '#D03';
var red = '#E10';
var navy = '#247';
var dark_navy = '#135'
var gray = '#888'
var silver = '#AAA'
var skin = '#CAA'
var hair = '#744'
var light_blue = '#AAC'

var illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: 'fullscreen',
  onDragStart: function() {
    isSpinning = false;
  },
  onResize: function( width, height ) {
    this.zoom = Math.floor( Math.min( width, height ) / sceneSize );
  },
});

// ----- model ----- //
var body = new Zdog.Cylinder({
  diameter: 10,
  length: 15,
  addTo: illo,
  //translate: { x: 4, y: -4 },
  rotate: { x: TAU/4 },
  color: dark_navy,
  //backface: garnet,
  stroke: false,
});

var neck = new Zdog.Cylinder({
  diameter: 4,
  length: 3,
  addTo: body,
  translate: { z: 8 },
  //rotate: { x: TAU/4 },
  color: skin,
  //backface: garnet,
  stroke: false,
});

var head = new Zdog.Hemisphere({
  diameter: 8,
  translate: { z: 12 },
  rotate: { y: -TAU/2 },
  addTo: body,
  color: skin,
});

head.copy({
  diameter: 9,
  rotate: { z: -TAU/2 },
  color: hair,
});

var hair_up = new Zdog.Cone({
  addTo: head,
  diameter: 2.5,
  length: 4,
  stroke: false,
  rotate: { x: -TAU/2 },
  translate: { x: -5, z: 3 },
  color: hair,
});
hair_up.copy({
  rotate: { z: -TAU/2 },
  //translate: { x: -5, z: 2 },  
});
var hair_clip = new Zdog.Ellipse({
  addTo: hair_up,
  width: 2.7,
  height: 2.7,
  stroke: 0.4,
  color: 'silver',
  rotate: { x: -TAU/8 },
});
hair_clip.copy({
  rotate: { x: TAU/8 },
});

var shoulder_left = new Zdog.Shape({
  addTo: body,
  // no path set, default to single point
  translate: { x: -5, z: 4 },
  stroke: 4,
  color: gray,
});
shoulder_left.copy({
  translate: { x: 5, z: 4 },
});

var arm_left = new Zdog.Shape({
  addTo: body,
  // no path set, default to single point
  path: [
     { z: -4 },
     { z: 4 },
  ],
  translate: { x: -10, z: -1 },
  rotate: { y: -TAU/8 },
  stroke: 5,
  color: dark_navy,
});
arm_left.copy({
  translate: { x: 10, z: -1 },
  rotate: { y: TAU/8 },
});

var leg = new Zdog.Shape({
  path: [
    { z: 0 },
    { z: -7 },
  ],
  addTo: body,
  translate: { z: -10 },
  color: dark_navy,
  stroke: 11.5,
});

var front = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  path: [
     { y: -3.5 },
     { y: -0.3 },
  ],
  translate: { y:-1, z: 6 },
  //rotate: { y: -TAU/8 },
  stroke: 0.8,
  color: light_blue,
});

var front_up_left = new Zdog.Rect({
  addTo: illo,
  width: 7,
  height: 3,
  translate: { x:-3, y:-5, z: 5 },
  rotate: { z: TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

front_up_left.copy({
  translate: { x:3, y:-5, z: 5 },
  rotate: { z: -TAU/8 },
});

var front_down_left = new Zdog.Rect({
  addTo: illo,
  width: 7,
  height: 2,
  translate: { x:-3, y: -1, z: 5 },
  rotate: { z: -TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

front_down_left.copy({
  translate: { x:3, y:-1, z: 5 },
  rotate: { z: TAU/8 },
});

var shoulder_up_left = new Zdog.Rect({
  addTo: illo,
  width: 3,
  height: 8,
  translate: { x:-5, y:-7, z: 0 },
  rotate: { x: TAU/4, y: TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

shoulder_up_left.copy({
  translate: { x:5, y:-7, z: 0 },
  rotate: { x: TAU/4, y: -TAU/8 },  
});

var back_up_left = new Zdog.Rect({
  addTo: illo,
  width: 7,
  height: 3,
  translate: { x:-3, y:-5, z: -5 },
  rotate: { z: TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

back_up_left.copy({
  translate: { x:3, y:-5, z: -5 },
  rotate: { z: -TAU/8 },
});

var back_down_left = new Zdog.Rect({
  addTo: illo,
  width: 14,
  height: 3,
  translate: { x:-4, y:4, z: -5 },
  rotate: { z: -TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

back_down_left.copy({
  translate: { x:4, y:4, z: -5 },
  rotate: { z: TAU/8 },
});

var shoulder_down_left = new Zdog.Rect({
  addTo: illo,
  width: 2,
  height: 9,
  translate: { x:-6, y:2, z: 0 },
  rotate: { x: TAU/4, y: -TAU/8 },
  stroke: 1,
  color: gray,
  fill: true,
});

shoulder_down_left.copy({
  translate: { x:6, y:2, z: 0 },
  rotate: { x: TAU/4, y: TAU/8 },  
});
var pattern1 = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  path: [
    {x:-3, y:2.5},
    {x:-2, y:2.5},
    {x:0, y:3.5},
    ],
  translate: { z: 4 },
  closed: false,
  //rotate: { y: -TAU/8 },
  stroke: 0.8,
  color: light_blue,
});
var pattern = new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  path: [
    {x:4, y:3},
    {x:3.5, y:3},
    {x:3, y:3.5},
    {x:0, y:3.5},
    {x:0, y:6.5},
    {x:3, y:6.5},
    {x:3, y:11.5, z:1},
    {x:0, y:11.5, z:1},
    {x:0, y:16.5, z:1},
    {x:3, y:16.5, z:1},
    {x:3, y:21.5, z:1},
  ],
  translate: { z: 4 },
  closed: false,
  //rotate: { y: -TAU/8 },
  stroke: 0.8,
  color: light_blue,
});

var umbrella = new Zdog.Shape({
  path: [
    { y: 0 },
    { y: 0 },
  ],
  addTo: illo,
  translate: { y: 0, z: 0},
  //rotate: { y: 0 },
  color: navy,
  stroke: 0,
});



// star
var starPath = ( function() {
  var path = [];
  var starRadiusA = 3;
  var starRadiusB = 1.7;
  for ( var i=0; i<10; i++ ) {
    var radius = i % 2 ? starRadiusA : starRadiusB;
    var angle = TAU * i/10 + TAU/4;
    var point = {
      x: Math.cos( angle ) * radius,
      y: Math.sin( angle ) * radius,
    };
    path.push( point );
  }
  return path;
})();
// star shape
var star = new Zdog.Ellipse({
  //path: starPath,
  width: 10,
  height: 5,
  translate: { y: -4.5 },
  stroke: 1,
  color: navy,
  fill: true,
});

// floater stars
( function() {
  for ( var i=0; i < 24; i++ ) {
    if (i !== 3 && i !== 10 && i !== 20){
       var starHolder = new Zdog.Anchor({
          addTo: umbrella,
          translate: { y: -15 + 10*Math.floor(i/6) },
            rotate: { y: TAU/6 * (i%6) + TAU/12 },
      });
      star.copy({
        addTo: starHolder,
        translate: { z: 40 },
      });
    }
  }
})();

// ----- animate ----- //

function animate() {
//  illo.rotate.y += isSpinning ? -0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

