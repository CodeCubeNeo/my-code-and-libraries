// my req lib
(() => {
	let mainReq = (method, url, optionsORcallaback, callback) => {
		// url checking
		if (typeof url !== "string") throw new Error("Invalid request url, it should be a string");
		// callback and options
		if (!(typeof optionsORcallaback === "function" || typeof callback === "function")) throw new Error("Callback should be specified");
		if (typeof optionsORcallaback !== "object" && typeof callback === "function") throw new Error("Invalid options, they should be an object");
		if (typeof optionsORcallaback === "function" && typeof callback === "object") throw new Error("Options and callback switched places");
		let reqCallback;
		let options = {};
		if (typeof optionsORcallaback === "object" && typeof callback === "function") {
			reqCallback = callback;
			options = optionsORcallaback;
		} else if (typeof optionsORcallaback === "function") {
			reqCallback = optionsORcallaback;
		}
		// option.headers check if they should be set
		let reqHeaders = false;
		if (options.headers) {
			if (typeof options.headers !== "object") throw new Error("Invalid headers, they should be an object");
			if (typeof options.headers === "object" && Object.keys(options.headers).length === 0 && options.headers.constructor === Object) {
				throw new Error("Invalid headers, they are empty");
			} else {
				reqHeaders = true;
			}
		}
		function setHeaders() {
			if (reqHeaders) {
				for (let [header, value] of Object.entries(options.headers)) {
					xhr.setRequestHeader(header, value);
				}
			}
		}
		// make xhr object
		let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		// response type
		if (options.responseType) xhr.responseType = options.responseType;
		// url params
		let urlParams = "";
		if (options.data) {
			if (typeof options.data !== "object") throw new Error("Invalid params, they should be an object");
			if (Object.keys(options.data).length === 0 && options.data.constructor === Object) {
				throw new Error("Invalid headers, they are empty");
			} else {
				for (let [header, value] of Object.entries(options.data)) {
					urlParams ? (urlParams += "&" + header + "=" + value) : (urlParams = header + "=" + value);
				}
			}
		}
		// url hash
		let urlHash = options.hash ? options.hash : "";
		// callback
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== 4) return;
			if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
				let response = xhr.response;
				if (typeof response === "string") {
					response = new String(xhr.response);
					Object.getPrototypeOf(response).json = () => {
						try {
							return JSON.parse(response);
						} catch (e) {
							throw new Error("Couldn't decode json from response: " + e);
						}
					};
					response = response.toString();
				}
				reqCallback(response);
			} else {
				reqCallback("error", xhr.status);
			}
		};
		xhr.onerror = () => {
			reqCallback("error");
		};
		if (method == "GET") {
			xhr.open("GET", url + "?" + urlParams + urlHash);
			setHeaders();
			xhr.send();
		} else if (method == "POST") {
			xhr.open("POST", url + urlHash);
			setHeaders();
			xhr.send(urlParams);
		} else if (method == "PUT") {
			xhr.open("PUT", url + urlHash);
			setHeaders();
			xhr.send(urlParams);
		} else if (method == "DELETE") {
			xhr.open("DELETE", url + urlHash);
			setHeaders();
			xhr.send(urlParams);
		}
	};
	window.requests = {
		get: (url, optionsORcallaback, callback) => {
			mainReq("GET", url, optionsORcallaback, callback);
		},
		post: (url, optionsORcallaback, callback) => {
			mainReq("POST", url, optionsORcallaback, callback);
		},
		put: (url, optionsORcallaback, callback) => {
			mainReq("PUT", url, optionsORcallaback, callback);
		},
		delete: (url, optionsORcallaback, callback) => {
			mainReq("DELETE", url, optionsORcallaback, callback);
		}
	};
})();
// minified and transpiled to es2015
// prettier-ignore
(function(){"use strict";function a(b){"@babel/helpers - typeof";return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}function b(a,b){return g(a)||f(a,b)||d(a,b)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(a,b){if(a){if("string"==typeof a)return e(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(a,b):void 0}}function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function f(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function g(a){if(Array.isArray(a))return a}(function(){var e=function(l,m,n,c){function d(){if(p)for(var a=0,c=Object.entries(o.headers);a<c.length;a++){var d=b(c[a],2),e=d[0],f=d[1];q.setRequestHeader(e,f)}}if("string"!=typeof m)throw new Error("Invalid request url, it should be a string");if("function"!=typeof n&&"function"!=typeof c)throw new Error("Callback should be specified");if("object"!=a(n)&&"function"==typeof c)throw new Error("Invalid options, they should be an object");if("function"==typeof n&&"object"==a(c))throw new Error("Options and callback switched places");var e,o={};"object"==a(n)&&"function"==typeof c?(e=c,o=n):"function"==typeof n&&(e=n);var p=!1;if(o.headers){if("object"!=a(o.headers))throw new Error("Invalid headers, they should be an object");if("object"==a(o.headers)&&0===Object.keys(o.headers).length&&o.headers.constructor===Object)throw new Error("Invalid headers, they are empty");else p=!0}var q=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");o.responseType&&(q.responseType=o.responseType);var i="";if(o.data){if("object"!=a(o.data))throw new Error("Invalid params, they should be an object");if(0===Object.keys(o.data).length&&o.data.constructor===Object)throw new Error("Invalid headers, they are empty");else for(var r=0,s=Object.entries(o.data);r<s.length;r++){var t=b(s[r],2),u=t[0],v=t[1];i?i+="&"+u+"="+v:i=u+"="+v}}var w=o.hash?o.hash:"";q.onreadystatechange=function(){if(4===q.readyState)if(4===q.readyState&&200<=q.status&&400>q.status){var a=q.response;"string"==typeof a&&(a=new String(q.response),Object.getPrototypeOf(a).json=function(){try{return JSON.parse(a)}catch(b){throw new Error("Couldn't decode json from response: "+b)}},a=a.toString()),e(a)}else e("error",q.status)},q.onerror=function(){e("error")},"GET"==l?(q.open("GET",m+"?"+i+w),d(),q.send()):"POST"==l?(q.open("POST",m+w),d(),q.send(i)):"PUT"==l?(q.open("PUT",m+w),d(),q.send(i)):"DELETE"==l&&(q.open("DELETE",m+w),d(),q.send(i))};window.requests={get:function(a,b,c){e("GET",a,b,c)},post:function(a,b,c){e("POST",a,b,c)},put:function(a,b,c){e("PUT",a,b,c)},delete:function(a,b,c){e("DELETE",a,b,c)}}})()})();// only minified
// prettier-ignore
(()=>{let a=(a,b,c,d)=>{function e(){if(h)for(let[a,b]of Object.entries(g.headers))i.setRequestHeader(a,b)}if("string"!=typeof b)throw new Error("Invalid request url, it should be a string");if("function"!=typeof c&&"function"!=typeof d)throw new Error("Callback should be specified");if("object"!=typeof c&&"function"==typeof d)throw new Error("Invalid options, they should be an object");if("function"==typeof c&&"object"==typeof d)throw new Error("Options and callback switched places");let f,g={};"object"==typeof c&&"function"==typeof d?(f=d,g=c):"function"==typeof c&&(f=c);let h=!1;if(g.headers){if("object"!=typeof g.headers)throw new Error("Invalid headers, they should be an object");if("object"==typeof g.headers&&0===Object.keys(g.headers).length&&g.headers.constructor===Object)throw new Error("Invalid headers, they are empty");else h=!0}let i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");g.responseType&&(i.responseType=g.responseType);let j="";if(g.data){if("object"!=typeof g.data)throw new Error("Invalid params, they should be an object");if(0===Object.keys(g.data).length&&g.data.constructor===Object)throw new Error("Invalid headers, they are empty");else for(let[a,b]of Object.entries(g.data))j?j+="&"+a+"="+b:j=a+"="+b}let k=g.hash?g.hash:"";i.onreadystatechange=()=>{if(4===i.readyState)if(4===i.readyState&&200<=i.status&&400>i.status){let a=i.response;"string"==typeof a&&(a=new String(i.response),Object.getPrototypeOf(a).json=()=>{try{return JSON.parse(a)}catch(a){throw new Error("Couldn't decode json from response: "+a)}},a=a.toString()),f(a)}else f("error",i.status)},i.onerror=()=>{f("error")},"GET"==a?(i.open("GET",b+"?"+j+k),e(),i.send()):"POST"==a?(i.open("POST",b+k),e(),i.send(j)):"PUT"==a?(i.open("PUT",b+k),e(),i.send(j)):"DELETE"==a&&(i.open("DELETE",b+k),e(),i.send(j))};window.requests={get:(b,c,d)=>{a("GET",b,c,d)},post:(b,c,d)=>{a("POST",b,c,d)},put:(b,c,d)=>{a("PUT",b,c,d)},delete:(b,c,d)=>{a("DELETE",b,c,d)}}})();
// tests
requests.get(
	"./index.html",
	{
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		data: {
			fullName: "bosanc",
			gay: true
				}
	},
	(object) => console.log(object)
);
