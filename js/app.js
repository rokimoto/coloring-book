(function() {


// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    // onend: function (event) {
    //   var textEl = event.target.querySelector('p');

    //   textEl && (textEl.textContent =
    //     'moved a distance of '
    //     + (Math.sqrt(event.dx * event.dx +
    //                  event.dy * event.dy)|0) + 'px');
    // }
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

  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;



/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.5,



  // when you've gone in enough for the eligible places to be highlighted
  ondropactivate: function (event) {
    // add class to the places you can go
    event.target.classList.add('drop-active');
  },

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // add class to a specific place to drop
    dropzoneElement.classList.add('drop-target');
    // add class to the element when hovering over specific place to drop
    draggableElement.classList.add('can-drop');

    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove class to a specific place to drop
    event.target.classList.remove('drop-target');
    // remove class to the element when hovering over specific place to drop
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  },
  ondropdeactivate: function (event) {
    // add class to all the places you can go
    event.target.classList.remove('drop-active');
    // remove class to a specific place to drop
    event.target.classList.remove('drop-target');
  }
});




})();