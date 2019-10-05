
function animateLetter(elem, i, width, height) {
  var left = elem.getBoundingClientRect().left;
    elem.style.left = left + 'px';
    elem.style.WebkitTransition = 'left 2s ease-in-out 0s';
    elem.style.MozTransition = 'left 2s ease-in-out 0s';
    elem.style.OTransition = 'left 2s ease-in-out 0s';
    elem.style.transition = 'left 2s ease-in-out 0s';

  setTimeout(function(elem, left) {
    elem.style.position = 'absolute';
    elem.style.left = left - width * 2 + height/25 + 'px';
  }, i * 100, elem, left);
}


function animateLetters(node, width, height) {
  var colors = ['indigo', 'darkblue', 'darkgreen', 'white', 'black', 'gold', 'aqua', 'lavender'];
  var spans = node.children;
    for (let i = 0; i < spans.length; i++) {
      animateLetter(spans[i], i, width, height);
        spans[i].style.color = colors[7-i];
        spans[i].addEventListener('transitionend', function() {
          transitionEndLetter(i);
        });
    }
  setTimeout( function(node, width) {
    node.style.left = width - node.offsetWidth + 'px';
  } , 750, node, width);
}


function createStartName(width, height) {
  var node = document.createElement('h1');
    node.style.position = 'absolute';
    node.style.top = '0';
    node.style.left = width + 'px';
    node.style.fontSize = height / 15 + 'px';
    node.style.padding = (height / 75) + 'px ' + (height / 50) + 'px';
    node.style.transition = 'opacity 4s';
    node.style.zIndex = '8';
    node.innerHTML = '<span>S</span><span>t</span><span>r</span><span>e</span><span>l</span><span>k</span><span>o</span><span>v</span>';
  return node;
}


function deleteStartName(node) {
  setTimeout( function(node) {
    headname.parentNode.removeChild(node);
  }, 5000, node)
    node.style.opacity = '0';
}


function resizeBackground(height, width) {
  var back = document.getElementsByClassName('html-mobile-background')[0];
  if (height < width * 0.56) {
    back.style.backgroundSize = '100% 100%' ;
    back.style.WebkitBackgroundSize = '100% 100%';
    back.style.MozBackgroundSize = '100% 100%';
    back.style.OBackgroundSize = '100% 100%';
    back.style.minHeight = '100%';
  } else {
    back.style.backgroundSize = 'auto 100%';
    back.style.WebkitBackgroundSize = 'auto 100%';
    back.style.MozBackgroundSize = 'auto 100%';
    back.style.OBackgroundSize = 'auto 100%';
    back.style.minHeight = '100%';
  }
}


function resizeHeader(height) {
  setTimeout( function() { headname.style.opacity = '1'; } , 3000);
    headname.style.opacity = '0';
    headname.style.fontSize = height / 15 + 'px';
    headname.style.padding = (height / 75) + 'px ' + (height / 50) + 'px';
}


function resizeLogo(height) {
  setTimeout( function() { logo.style.opacity = '0.2'; } , 3000);
    logo.style.height = height / 10 + 'px';
    logo.style.marginBottom = height / 100 + 'px';
    logo.style.marginRight = height / 100 + 'px';
    logo.style.opacity = '0.7';
}


function resizePage() {
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  resizeBackground(height, width);
  resizeHeader(height);
  resizeLogo(height);
  resizeIcons(height);
}


function setLogo() {
  logo.onclick = function() {
    document.location.href = "https://vk.com/katenkafelix";
  };
}


function startNameAnimation() {
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;

  var startName = createStartName(width, height);
    headname.parentNode.appendChild(startName);
  animateLetters(startName, width, height);
  setTimeout(deleteStartName, 3000, startName);
}


function transitionEndLetter(i) {
  var colors = ['#b30213', '#9e0110', '#8a020f', 'white', 'black', '#79020e', '#65010a', '#510209'];
    event.target.style.color = colors[i];
}


function createIcons() {
  createPhoneIcon();
  createPhoneIcon();
  createPhoneIcon();
  createPhoneIcon();
  createPhoneIcon();
}

function createPhoneIcon() {
  var div = document.createElement('div');
    div.className = 'icon';
    div.classList.add('phone-icon');
  document.getElementsByClassName('menu')[0].insertBefore(div, document.getElementsByClassName('arrows')[0]);
}

function resizeIcons(height) {
  var icons = document.getElementsByClassName('icon');
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.width = icons[i].style.height = height / 7.5  + 'px';
  }
}
