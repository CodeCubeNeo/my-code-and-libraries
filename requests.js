// ! simple requests library in javascript, based on XMLHttpRequest/ActiveXObject

// only minified
// prettier-ignore
(()=>{let a=(a,b,c,d)=>{function e(){if(c.headers)for(let[a,b]of Object.entries(c.headers))g.setRequestHeader(a,b)}function f(a){return"string"==typeof a&&(a=new String(g.response),Object.getPrototypeOf(a).json=()=>{try{return JSON.parse(a)}catch(a){throw new Error("Couldn't decode json from response: "+a)}},a=a.toString()),a}if("string"!=typeof b)throw new Error("Invalid request url, it should be a string");if("object"!=typeof c&&"function"==typeof d)throw new Error("Invalid options, they should be an object");if("function"==typeof c&&"object"==typeof d)throw new Error("Options and callback should switch places");if("function"!=typeof d&&"function"!=typeof c?(d=!1,"object"!=typeof c&&(c={})):"function"===c&&(d=c,c={}),c.headers)if("object"!=typeof c.headers)throw new Error("Invalid headers, they should be an object");else if("object"==typeof c.headers&&0===Object.keys(c.headers).length&&c.headers.constructor===Object)throw new Error("Invalid headers, they are empty");let g=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.responseType&&(g.responseType=c.responseType);let h="";if(c.data)if("object"!=typeof c.data)throw new Error("Invalid data, it should be an object");else if("object"==typeof c.data&&0===Object.keys(c.data).length&&c.data.constructor===Object)throw new Error("Invalid data, it is empty");else for(let[a,b]of Object.entries(c.data))h?h+="&"+a+"="+b:h=a+"="+b;d&&(g.onreadystatechange=()=>{4!==g.readyState||(4===g.readyState&&200<=g.status&&400>g.status?d(f(g.response)):d("error",g.status))},g.onerror=()=>{d("error")});let i=c.hash?c.hash:"";return"GET"==a?(g.open("GET",b+(h?"?"+h:"")+i,!!d),e(),g.send(),d?g:f(g.response)):("POST"==a?(g.open("POST",b+i,!!d),e()):"PUT"==a?(g.open("PUT",b+i,!!d),e()):"DELETE"==a&&(g.open("DELETE",b+i,!!d),e()),g.send(h),d?g:f(g.response))};window.requests={get:(b,c,d)=>a("GET",b,c,d),post:(b,c,d)=>a("POST",b,c,d),put:(b,c,d)=>a("PUT",b,c,d),delete:(b,c,d)=>a("DELETE",b,c,d)}})();

// minified and transpiled to es2015
// prettier-ignore
(function(){"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var mainReq=function(e,t,a,r){if("string"!=typeof t)throw new Error("Invalid request url, it should be a string");if("object"!==_typeof(a)&&"function"==typeof r)throw new Error("Invalid options, they should be an object");if("function"==typeof a&&"object"===_typeof(r))throw new Error("Options and callback should switch places");if("function"!=typeof r&&"function"!=typeof a?(r=!1,"object"!==_typeof(a)&&(a={})):"function"===a&&(r=a,a={}),a.headers){if("object"!==_typeof(a.headers))throw new Error("Invalid headers, they should be an object");if("object"===_typeof(a.headers)&&0===Object.keys(a.headers).length&&a.headers.constructor===Object)throw new Error("Invalid headers, they are empty")}var i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");a.responseType&&(i.responseType=a.responseType);var o="";if(a.data){if("object"!==_typeof(a.data))throw new Error("Invalid data, it should be an object");if("object"===_typeof(a.data)&&0===Object.keys(a.data).length&&a.data.constructor===Object)throw new Error("Invalid data, it is empty");for(var n=0,s=Object.entries(a.data);n<s.length;n++){var u=_slicedToArray(s[n],2),c=u[0],y=u[1];o?o+="&"+c+"="+y:o=c+"="+y}}function f(){if(a.headers)for(var e=0,t=Object.entries(a.headers);e<t.length;e++){var r=_slicedToArray(t[e],2),o=r[0],n=r[1];i.setRequestHeader(o,n)}}function l(e){return"string"==typeof e&&(e=new String(i.response),Object.getPrototypeOf(e).json=function(){try{return JSON.parse(e)}catch(e){throw new Error("Couldn't decode json from response: "+e)}},e=e.toString()),e}r&&(i.onreadystatechange=function(){4===i.readyState&&(4===i.readyState&&200<=i.status&&i.status<400?r(l(i.response)):r("error",i.status))},i.onerror=function(){r("error")});var p=a.hash?a.hash:"";return"GET"==e?(i.open("GET",t+(o?"?"+o:"")+p,!!r),f(),i.send()):("POST"==e?(i.open("POST",t+p,!!r),f()):"PUT"==e?(i.open("PUT",t+p,!!r),f()):"DELETE"==e&&(i.open("DELETE",t+p,!!r),f()),i.send(o)),r?i:l(i.response)};window.requests={get:function(e,t,r){return mainReq("GET",e,t,r)},post:function(e,t,r){return mainReq("POST",e,t,r)},put:function(e,t,r){return mainReq("PUT",e,t,r)},delete:function(e,t,r){return mainReq("DELETE",e,t,r)}};})();

// ! usage
// request.http_request_method(url, optional_options?, callback_function?);
// in the options object you can specify the url hash, http headers,
// responseType (one from XMLHttpRequest responseTypes) and url or body data (depending on the req method)

// supported http_request_methods:
// requests.get, requests.post, requests.put and requests.delete

// if callback is specified it will receive the data as the first argument and
// if the data is a of type string (usually it is) you also get the data.json() method,
// which will return the parsed json or an error if parsing failed

// if callback is specified, then the return value of the function call (request.http_request_method) will be
// the XMLHttpRequest/ActiveXObject object itself, otherwise the return value will be just the response (with .json() method)

// ! example
requests.get(
	"./index.html",
	{
		// (#hash will be appended at the end of url)
		hash: "#hash",
		// responeType
		responseType: "text", // blob, json, document...
		// headers (any valid http headers are allowed)
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		},
		// url or body data
		data: {
			fullName: "John Williams",
			id: 163
		}
	},
	// callback
	(data) => console.log(data.json())
);

// source (not minified) code
(() => {
	let mainReq = (method, url, optionsORcallaback, reqCallback) => {
		// url checking
		if (typeof url !== "string") throw new Error("Invalid request url, it should be a string");
		// options and callback
		if (typeof optionsORcallaback !== "object" && typeof reqCallback === "function") throw new Error("Invalid options, they should be an object");
		if (typeof optionsORcallaback === "function" && typeof reqCallback === "object") throw new Error("Options and callback should switch places");
		if (typeof reqCallback !== "function" && typeof optionsORcallaback !== "function") {
			reqCallback = false;
			if (typeof optionsORcallaback !== "object") optionsORcallaback = {};
		} else if (optionsORcallaback === "function") {
			reqCallback = optionsORcallaback;
			optionsORcallaback = {};
		}
		// check if option.headers are valid
		if (optionsORcallaback.headers) {
			if (typeof optionsORcallaback.headers !== "object") {
				throw new Error("Invalid headers, they should be an object");
			} else if (typeof optionsORcallaback.headers === "object" && Object.keys(optionsORcallaback.headers).length === 0 && optionsORcallaback.headers.constructor === Object) {
				throw new Error("Invalid headers, they are empty");
			}
		}
		// make xhr object
		let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		// response type
		if (optionsORcallaback.responseType) xhr.responseType = optionsORcallaback.responseType;
		// check if url params are valid
		let urlParams = "";
		if (optionsORcallaback.data) {
			if (typeof optionsORcallaback.data !== "object") {
				throw new Error("Invalid data, it should be an object");
			} else if (typeof optionsORcallaback.data === "object" && Object.keys(optionsORcallaback.data).length === 0 && optionsORcallaback.data.constructor === Object) {
				throw new Error("Invalid data, it is empty");
			} else {
				for (let [header, value] of Object.entries(optionsORcallaback.data)) {
					urlParams ? (urlParams += "&" + header + "=" + value) : (urlParams = header + "=" + value);
				}
			}
		}
		// if callback is specified make it an asynchronous
		if (reqCallback) {
			xhr.onreadystatechange = () => {
				if (xhr.readyState !== 4) return;
				if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
					reqCallback(addJSONmethod(xhr.response));
				} else {
					reqCallback("error", xhr.status);
				}
			};
			xhr.onerror = () => {
				reqCallback("error");
			};
		}
		// two helper functions
		function setHeaders() {
			if (optionsORcallaback.headers) {
				for (let [header, value] of Object.entries(optionsORcallaback.headers)) {
					xhr.setRequestHeader(header, value);
				}
			}
		}
		function addJSONmethod(response) {
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
			return response;
		}
		// url hash
		let urlHash = optionsORcallaback.hash ? optionsORcallaback.hash : "";
		if (method == "GET") {
			xhr.open("GET", url + (urlParams ? "?" + urlParams : "") + urlHash, !!reqCallback);
			setHeaders();
			xhr.send();
			return reqCallback ? xhr : addJSONmethod(xhr.response);
		} else if (method == "POST") {
			xhr.open("POST", url + urlHash, !!reqCallback);
			setHeaders();
		} else if (method == "PUT") {
			xhr.open("PUT", url + urlHash, !!reqCallback);
			setHeaders();
		} else if (method == "DELETE") {
			xhr.open("DELETE", url + urlHash, !!reqCallback);
			setHeaders();
		}
		xhr.send(urlParams);
		return reqCallback ? xhr : addJSONmethod(xhr.response);
	};
	window.requests = {
		get: (url, optionsORcallaback, callback) => {
			return mainReq("GET", url, optionsORcallaback, callback);
		},
		post: (url, optionsORcallaback, callback) => {
			return mainReq("POST", url, optionsORcallaback, callback);
		},
		put: (url, optionsORcallaback, callback) => {
			return mainReq("PUT", url, optionsORcallaback, callback);
		},
		delete: (url, optionsORcallaback, callback) => {
			return mainReq("DELETE", url, optionsORcallaback, callback);
		}
	};
})();
