//JS HEADER
(function() {

  var width, height, largeContainer, canvas, ctx, circles, target, animateHeader = true;

  // Main
  initHeader();
  addListeners();

  function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: 0, y: height};
    
      largeContainer = document.getElementById('hea');
      largeContainer.style.height = height+'px';

      canvas = document.getElementById('c');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create particles
      circles = [];
      for(var x = 0; x < width*0.5; x++) {
          var c = new Circle();
          circles.push(c);
      }
      animate();
  }

  // Event handling
  function addListeners() {
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
  }

  function scrollCheck() {
      if(document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
  }

  function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeContainer.style.height = height+'px';
      canvas.width = width;
      canvas.height = height;
  }

  function animate() {
      if(animateHeader) {
          ctx.clearRect(0,0,width,height);
          for(var i in circles) {
              circles[i].draw();
          }
      }
      requestAnimationFrame(animate);
  }

  // Canvas manipulation
  function Circle() {
      var _this = this;

      // constructor
      (function() {
          _this.pos = {};
          init();
          console.log(_this);
      })();

      function init() {
          _this.pos.x = Math.random()*width;
          _this.pos.y = height+Math.random()*100;
          _this.alpha = 0.1+Math.random()*0.3;
          _this.scale = 0.1+Math.random()*0.3;
          _this.velocity = Math.random();
      }

      this.draw = function() {
          if(_this.alpha <= 0) {
              init();
          }
          _this.pos.y -= _this.velocity;
          _this.alpha -= 0.0005;
          ctx.beginPath();
          ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
          ctx.fill();
      };
  }

})();
// END JS HEADER

//LOG IN
function openForm() {
  document.getElementById("popupForm").style.display="block";
}

function closeForm() {
  document.getElementById("popupForm").style.display="none";
}
//END LOG IN


//DARKMODE
let darkMode = document.getElementById("toggler");

darkMode.onclick = function(){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
}
}

//MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("logo-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}