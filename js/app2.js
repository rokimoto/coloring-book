
// target elements with the "draggable" class
interact('.drag')
  .draggable({
    maxPerElement: 5,
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "self",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,

  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  window.dragMoveListener = dragMoveListener;

interact('.colorable').dropzone({
  // only accept elements matching this CSS selector
  accept: '.bucket',
  // Require a 75% element overlap for a drop to be possible
  overlap: 'pointer',

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    if (draggableElement.classList.contains('red-bucket')) {
      dropzoneElement.classList.add('red-temp');
      draggableElement.classList.add('bucket-tip-red');
    }

    if (draggableElement.classList.contains('yellow-bucket')) {
      dropzoneElement.classList.add('yellow-temp');
      draggableElement.classList.add('bucket-tip-yellow');
    }

    if (draggableElement.classList.contains('blue-bucket')) {
      dropzoneElement.classList.add('blue-temp');
      draggableElement.classList.add('bucket-tip-blue');
    }

    if (draggableElement.classList.contains('white-bucket')) {
      dropzoneElement.classList.add('white-temp');
      draggableElement.classList.add('bucket-tip-white');
    }

    if (draggableElement.classList.contains('pink-bucket')) {
      dropzoneElement.classList.add('pink-temp');
      draggableElement.classList.add('bucket-tip-pink');
    }

    if (draggableElement.classList.contains('brown-bucket')) {
      dropzoneElement.classList.add('brown-temp');
      draggableElement.classList.add('bucket-tip-brown');
    }

    if (draggableElement.classList.contains('purple-bucket')) {
      dropzoneElement.classList.add('purple-temp');
      draggableElement.classList.add('bucket-tip-purple');
    }

    if (draggableElement.classList.contains('green-bucket')) {
      dropzoneElement.classList.add('green-temp');
      draggableElement.classList.add('bucket-tip-green');
    }

    if (draggableElement.classList.contains('orange-bucket')) {
      dropzoneElement.classList.add('orange-temp');
      draggableElement.classList.add('bucket-tip-orange');
    }

  },
  ondragleave: function (event) {

      if (event.relatedTarget.classList.contains('bucket-tip-red')) {
        event.target.classList.remove('red-temp');
        event.relatedTarget.classList.remove('bucket-tip-red');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-yellow')) {
        event.target.classList.remove('yellow-temp');
        event.relatedTarget.classList.remove('bucket-tip-yellow');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-blue')) {
        event.target.classList.remove('blue-temp');
        event.relatedTarget.classList.remove('bucket-tip-blue');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-white')) {
        event.target.classList.remove('white-temp');
        event.relatedTarget.classList.remove('bucket-tip-white');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-pink')) {
        event.target.classList.remove('pink-temp');
        event.relatedTarget.classList.remove('bucket-tip-pink');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-brown')) {
        event.target.classList.remove('brown-temp');
        event.relatedTarget.classList.remove('bucket-tip-brown');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-purple')) {
        event.target.classList.remove('purple-temp');
        event.relatedTarget.classList.remove('bucket-tip-purple');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-green')) {
        event.target.classList.remove('green-temp');
        event.relatedTarget.classList.remove('bucket-tip-green');
      }

      if (event.relatedTarget.classList.contains('bucket-tip-orange')) {
        event.target.classList.remove('orange-temp');
        event.relatedTarget.classList.remove('bucket-tip-orange');
      }

  },
  ondrop: function (event) {
    var dropzoneElement = event.target;
    dropzoneElement.classList.remove('pink', 'red', 'yellow', 'blue', 'brown', 'white', 'purple', 'green', 'orange', 'pink-temp', 'red-temp', 'yellow-temp', 'blue-temp', 'brown-temp', 'white-temp', 'purple-temp', 'green-temp', 'orange-temp');
    if (event.relatedTarget.classList.contains('red-bucket')) {
      dropzoneElement.classList.add('red');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('yellow-bucket')) {
      dropzoneElement.classList.add('yellow');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('blue-bucket')) {
      dropzoneElement.classList.add('blue');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('white-bucket')) {
      dropzoneElement.classList.add('white');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('pink-bucket')) {
      dropzoneElement.classList.add('pink');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('brown-bucket')) {
      dropzoneElement.classList.add('brown');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('purple-bucket')) {
      dropzoneElement.classList.add('purple');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('green-bucket')) {
      dropzoneElement.classList.add('green');
      // dropzoneElement.classList.add('colored');
    }

    if (event.relatedTarget.classList.contains('orange-bucket')) {
      dropzoneElement.classList.add('orange');
      // dropzoneElement.classList.add('colored');
    }

  },

  ondropdeactivate: function (event) {
    if (event.relatedTarget.classList.contains('red-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-red');
    }

    if (event.relatedTarget.classList.contains('yellow-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-yellow');
    }

    if (event.relatedTarget.classList.contains('blue-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-blue');
    }

    if (event.relatedTarget.classList.contains('white-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-white');
    }

    if (event.relatedTarget.classList.contains('pink-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-pink');
    }

    if (event.relatedTarget.classList.contains('brown-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-brown');
    }

    if (event.relatedTarget.classList.contains('purple-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-purple');
    }

    if (event.relatedTarget.classList.contains('green-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-green');
    }

    if (event.relatedTarget.classList.contains('orange-bucket')) {
      event.relatedTarget.classList.remove('bucket-tip-orange');
    }

  }
});


var kittyThumb = document.getElementById('kitty-thumb');
var kirbyThumb = document.getElementById('kirby-thumb');
var pikachuThumb = document.getElementById('pikachu-thumb');


var kittyImg = document.getElementById('hellokitty-img');
var kirbyImg = document.getElementById('kirby-img');
var pikachuImg = document.getElementById('pikachu-img');

var reset = document.getElementById('reset');

var colored = document.querySelectorAll(".colorable");


reset.addEventListener("click", function() {
  
  for (var i = 0; i < colored.length; i++) {
    colored[i].classList.remove('pink', 'red', 'yellow', 'blue', 'brown', 'white', 'purple', 'green', 'orange', 'pink-temp', 'red-temp', 'yellow-temp', 'blue-temp', 'brown-temp', 'white-temp', 'purple-temp', 'green-temp', 'orange-temp')
  }
});

kittyThumb.addEventListener("click", function() {
  pikachuImg.style.display = "none";
  kirbyImg.style.display = "none";
  kittyImg.style.display = "inline-block";
});

kirbyThumb.addEventListener("click", function() {
  pikachuImg.style.display = "none";
  kittyImg.style.display = "none";
  kirbyImg.style.display = "inline-block";
})

pikachuThumb.addEventListener("click", function() {
  kittyImg.style.display = "none";
  kirbyImg.style.display = "none";
  pikachuImg.style.display = "inline-block";
})

var matches = document.querySelectorAll("div.note, div.alert");



