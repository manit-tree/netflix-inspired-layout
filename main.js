import "./style.css";

function carousel(node) {
  let el = node.querySelector(".carousel-items")
  let list = el.querySelectorAll('.carousel-item');
  let arr = [];
  let w = 0;
  let item_width = 0;
  let item_gap = 0;

  let settings = {
    duration: '40s',
    direction: 'left',
    shift: 'off'
  }

  if (node.dataset.duration != undefined) {
    settings.duration = node.dataset.duration
  }

  if (node.dataset.direction != undefined) {
    settings.direction = node.dataset.direction
  }

  if (node.dataset.shift != undefined) {
    settings.shift = node.dataset.shift;
  }


  list.forEach((_node, i) => {
    if (i == 0) {
      item_width = _node.clientWidth;
      item_gap = parseInt(getComputedStyle(_node).marginRight);
    }

    arr.push(_node.cloneNode(true));
    w = w + _node.clientWidth + parseInt(getComputedStyle(_node).marginRight);
  })

  arr.forEach((_node) => {
    el.appendChild(_node);
  })

  let shift = 0;

  if (settings.shift == 'on') {
    shift = Math.floor(item_width / 2) + item_gap;
  }

  el.setAttribute('style', '--width: ' + w + 'px; --duration: ' + settings.duration + '; --shift: ' + shift + 'px');
  el.classList.add('slide-' + settings.direction);
}

function start() {
  carousel(document.querySelector("#my-carousel-a"));
  carousel(document.querySelector("#my-carousel-b"));
  carousel(document.querySelector("#my-carousel-c"));
  carousel(document.querySelector("#my-carousel-d"));
  carousel(document.querySelector("#my-carousel-e"));
  carousel(document.querySelector("#my-carousel-f"));
}

start();