window.ScreenCap = {
	start(callback) {
		setInterval(function() {
			var object = {
				html: dumpHtmlText(document.documentElement),
				css: dumpCssText(document.documentElement)
			}

			callback(object);
		}, 1000/10);
	}
}

function dumpHtmlText(element) {
	return element.innerHTML;
}

// http://stackoverflow.com/questions/15000163/how-to-get-all-css-of-element
function dumpCssText(element){
  var s = '';
  var o = getComputedStyle(element);
  for(var i = 0; i < o.length; i++){
    s+=o[i] + ':' + o.getPropertyValue(o[i])+';';
  }
  return s;
}