// https://developer.mozilla.org/en-US/docs/Web/API/CSSRule

function getRules(domcss)
  {
  document.styleSheets["0"].cssRules.map = Array.prototype.map;
  domcss = document.styleSheets["0"].cssRules.map(function(keys,values){return keys});
  return domcss;
  }
  
