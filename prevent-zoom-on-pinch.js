window.onload = function () {
  window.addEventListener('wheel', e => {
    e.preventDefault();
  }, {passive: false});  
};
