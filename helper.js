// ! an extremly simple jquery like element finder, getter and helper

// minified and transpiled to es2015 (little to no diffrence then the latest es)
var $=function(a){var b;if(a.startsWith("#"))b=document.getElementById(a.substring(1,a.length));else if(a.startsWith(".")){b=[];for(var c=new RegExp("(^| )"+a.substring(1,a.length)+"( |$)"),d=document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++)c.test(d[e].className)&&b.push(d[e]);1===b.length&&(b=b[0])}else{b=[];for(var g=document.getElementsByTagName(a),h=0,j=g.length;h<j;h++)b.push(g[h]);1===b.length&&(b=b[0])}if(!b||0===b.length)throw"Specified element $(\""+a+"\") not found";var k=Object.getPrototypeOf(b);return k.val=function(a){return"undefined"==typeof a?this.value:(this.value=a,this)},k.isInputChecked=function(){return"undefined"==typeof this.checked?void 0:!!this.checked},k.hide=function(){this.style.display="none"},k.show=function(a){return this.style.display="undefined"==typeof a?a:"block",this},b};

// ! usage
// use it like jquery (for the most part)
// start with a dot to get elements by classname (if it finds only one element it will return the element, not the array with one element)
let elem = $(".classname");
// start with a hash to get element by id
let elem = $("#id");
// and without anything to ge the elements by tag (again if it finds only one element it will return the element, not the array with one element)
let elem = $("input"); // this will get all the input elementson a page
// if the element can't be found it throws an error
// there are only 4 added methods to the elem
elem.hide() // hide the element by seting display: none;
elem.show(displayValue) // show the element by seting display: block/displayValue if set;
elem.val(newVal) // returns the elem's value, or sets it if newVal !== undefined
elem.isInputCheked() // if elem.checked == undefined returns undefined, else if checked == true return true, otherwise return false

// non minified code
let $ = function (selector) {
	let elem;
	if (selector.startsWith("#")) {
		elem = document.getElementById(selector.substring(1, selector.length));
	} else if (selector.startsWith(".")) {
		elem = [];
		let elemClassRegex = new RegExp("(^| )" + selector.substring(1, selector.length) + "( |$)");
		let els = document.getElementsByTagName("*");
		for (let i = 0, j = els.length; i < j; i++) if (elemClassRegex.test(els[i].className)) elem.push(els[i]);
		if (elem.length === 1) elem = elem[0];
	} else {
		elem = [];
		let els = document.getElementsByTagName(selector);
		for (let i = 0, j = els.length; i < j; i++) elem.push(els[i]);
		if (elem.length === 1) elem = elem[0];
	}
	if (!elem || elem.length === 0) throw 'Specified element $("' + selector + '") not found';
	let elemPrototype = Object.getPrototypeOf(elem);
	elemPrototype.val = function (newValue) {
		if (typeof newValue === "undefined") return this.value;
		else {
			this.value = newValue;
		}
		return this;
	};
	elemPrototype.isInputChecked = function () {
		if (typeof this.checked === "undefined") return undefined;
		else {
			if (this.checked) return true;
			else return false;
		}
	};
	elemPrototype.hide = function () {
		this.style.display = "none";
	};
	elemPrototype.show = function (displayValue) {
		if (typeof displayValue !== "undefined") this.style.display = "block";
		else this.style.display = displayValue;
		return this;
	};
	return elem;
};
