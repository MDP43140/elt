function elt(d, at, el){//[d]om_type,[at]tributes,...[el]ements
	"use strict";
	let a, e;
	d = document.createElement(d);
	el = Array.prototype.slice.call(arguments,2);
	if (typeof at == "object") for (a in at) d.setAttribute(a, at[a]);
	for (e of el) d.append(typeof e == "string" ? document.createTextNode(e):e);
	return d;
}