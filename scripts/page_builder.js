(function() {
  setTimeout(startNameAnimation, 500);
  createIcons();
  setLogo();
  resizePage();
  window.addEventListener("resize", resizePage, false);
})();