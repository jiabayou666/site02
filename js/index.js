// 1.0 
var ce = function(tagName){
	return document.createElement(tagName);
}
// 2.0 
var div = ce("div");
// 3.0 
div.classList.add("box");
// 4.0 
document.body.appendChild(div);
