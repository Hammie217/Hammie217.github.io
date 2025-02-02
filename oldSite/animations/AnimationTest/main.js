var duration = anime({
  targets: '.rr1',
  rotate:[{value:360,duration: 2000, easing: 'linear',delay:00}],
  translateX:[{value:300,duration:1000,delay:2000}]
});

var duration2 = anime({
  rotate:90,
  duration:0,
  targets: '.rr2',
  delay:500,
  begin: function(anim) {
    document.querySelector('.r2').setAttribute("fill", "#03ff68");
  },
  translateX:[{value:300,duration:1000,delay:500}],
  
});

var duration2 = anime({
  rotate:180,
  duration:0,
  targets: '.rr3',
  delay:1000,
  begin: function(anim) {
    document.querySelector('.r3').setAttribute("fill", "#3503ff");
  },
  translateX:[{value:300,duration:1000,delay:1000}]
  
});

var duration2 = anime({
  rotate:270,
  duration:0,
  targets: '.rr4',
  delay:1500,
  begin: function(anim) {
    document.querySelector('.r4').setAttribute("fill", "#ff9a03");
  },
  translateX:[{value:300,duration:1000,delay:1500}]
  
});

var buttonEl = document.querySelectorAll('svg.se');

function animateButton(el, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

function enterButton(el) {
  animateButton(el, 1.2, 800, 400)
};

function leaveButton(el) {
  animateButton(el, 1.0, 600, 300)
};

for (var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener('mouseenter', function(e) {
    enterButton(e.target);
  }, false);
  
  buttonEl[i].addEventListener('mouseleave', function(e) {
    leaveButton(e.target)
  }, false);  
}




  /*
  var lineDrawing = anime({

  targets: '.rotate',
 rotate:{
   value:'360',
   duration:4000,
   delay:1000
 }
});
*/



