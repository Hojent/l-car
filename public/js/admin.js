/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return r;
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, c = c && c.hasOwnProperty("default") ? c["default"] : c;

  var r,
      n,
      s,
      a,
      l,
      u,
      f,
      d,
      _,
      g,
      m,
      p,
      v,
      E,
      y,
      T,
      C,
      I,
      A,
      D,
      b,
      S,
      w,
      N,
      O,
      k,
      P,
      L,
      j,
      R,
      H,
      W,
      M,
      x,
      U,
      K,
      F,
      V,
      Q,
      B,
      Y,
      G,
      q,
      z,
      X,
      J,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      ot,
      at,
      lt,
      ht,
      ct,
      ut,
      ft,
      dt,
      _t,
      gt,
      mt,
      pt,
      vt,
      Et,
      yt,
      Tt,
      Ct,
      It,
      At,
      Dt,
      bt,
      St,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      Lt,
      jt,
      Rt,
      Ht,
      Wt,
      Mt,
      xt,
      Ut,
      Kt,
      Ft,
      Vt,
      Qt,
      Bt,
      Yt,
      Gt,
      qt,
      zt,
      Xt,
      Jt,
      Zt,
      $t,
      te,
      ee,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le,
      he,
      ce,
      ue,
      fe,
      de,
      _e,
      ge,
      me,
      pe,
      ve,
      Ee,
      ye,
      Te,
      Ce,
      Ie,
      Ae,
      De,
      be,
      Se,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      Le,
      je,
      Re,
      He,
      We,
      Me,
      xe,
      Ue,
      Ke,
      Fe,
      Ve,
      Qe,
      Be,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      sn,
      on,
      an,
      ln,
      hn,
      cn,
      un,
      fn,
      dn,
      _n,
      gn,
      mn,
      pn,
      vn,
      En,
      yn,
      Tn,
      Cn = function (i) {
    var e = "transitionend";

    function t(t) {
      var e = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
          ;
        }

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");

        try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;
        var e = i(t).css("transition-duration");
        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                s = e[i],
                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(e),
      In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      t = t || this._element;

      var e = this._getRootElement(t);

      this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, s), this._element = null;
    }, t._getRootElement = function (t) {
      var e = Cn.getSelectorFromElement(t),
          n = !1;
      return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(u.CLOSE);
      return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (r(e).removeClass(_), r(e).hasClass(d)) {
        var t = Cn.getTransitionDurationFromElement(e);
        r(e).one(Cn.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(s);
        e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
    return r.fn[n] = l, g._jQueryInterface;
  }, g),
      An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + y,
    FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
  }, k = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(b)[0];

      if (n) {
        var i = m(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1;else {
            var r = m(n).find(w)[0];
            r && m(r).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
    }, t.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = m(this).data(v);
        t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }]), n;
  }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = m(t.target).closest(N)[0];
    m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
    return m.fn[p] = T, k._jQueryInterface;
  }, k),
      Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, x = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, U = "next", K = "prev", F = "left", V = "right", Q = {
    SLIDE: "slide" + R,
    SLID: "slid" + R,
    KEYDOWN: "keydown" + R,
    MOUSEENTER: "mouseenter" + R,
    MOUSELEAVE: "mouseleave" + R,
    TOUCHEND: "touchend" + R,
    LOAD_DATA_API: "load" + R + H,
    CLICK_DATA_API: "click" + R + H
  }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  }, $ = function () {
    function s(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners();
    }

    var t = s.prototype;
    return t.next = function () {
      this._isSliding || this._slide(U);
    }, t.nextWhenVisible = function () {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(K);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? U : K;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;

      if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
      var o = (r + (t === K ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return P(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);

        var e = this._indicatorsElement.children[this._getItemIndex(t)];

        e && P(e).addClass(Y);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);

      if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
        var u = P.Event(Q.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: h
        });

        if (P(this._element).hasClass(G)) {
          P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
          var f = Cn.getTransitionDurationFromElement(o);
          P(o).one(Cn.TRANSITION_END, function () {
            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
              return P(s._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);

        c && this.cycle();
      }
    }, s._jQueryInterface = function (i) {
      return this.each(function () {
        var t = P(this).data(j),
            e = h({}, M, P(this).data());
        "object" == _typeof(i) && (e = h({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, s._dataApiClickHandler = function (t) {
      var e = Cn.getSelectorFromElement(this);

      if (e) {
        var n = P(e)[0];

        if (n && P(n).hasClass(B)) {
          var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
        }
      }
    }, o(s, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return M;
      }
    }]), s;
  }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
    P(Z.DATA_RIDE).each(function () {
      var t = P(this);

      $._jQueryInterface.call(t, t.data());
    });
  }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
    return P.fn[L] = W, $._jQueryInterface;
  }, $),
      bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
    toggle: !0,
    parent: ""
  }, ot = {
    toggle: "boolean",
    parent: "(string|element)"
  }, at = {
    SHOW: "show" + it,
    SHOWN: "shown" + it,
    HIDE: "hide" + it,
    HIDDEN: "hidden" + it,
    CLICK_DATA_API: "click" + it + ".data-api"
  }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }, gt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            s = Cn.getSelectorFromElement(r);
        null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      tt(this._element).hasClass(lt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
        var i = tt.Event(at.SHOW);

        if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));

          var r = this._getDimension();

          tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
          var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
          }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
        var e = tt.Event(at.HIDE);

        if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                s = Cn.getSelectorFromElement(r);
            if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
          }).emulateTransitionEnd(o);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t;
    }, t._getDimension = function () {
      return tt(this._element).hasClass(ft) ? ft : dt;
    }, t._getParent = function () {
      var n = this,
          t = null;
      Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return tt(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = tt(t).hasClass(lt);
        0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Cn.getSelectorFromElement(t);
      return e ? tt(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = tt(this),
            e = t.data(nt),
            n = h({}, st, t.data(), "object" == _typeof(i) && i);

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, o(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return st;
      }
    }]), a;
  }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = tt(this),
        e = Cn.getSelectorFromElement(this);
    tt(e).each(function () {
      var t = tt(this),
          e = t.data(nt) ? "toggle" : n.data();

      gt._jQueryInterface.call(t, e);
    });
  }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
    return tt.fn[et] = rt, gt._jQueryInterface;
  }, gt),
      Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
    HIDE: "hide" + Et,
    HIDDEN: "hidden" + Et,
    SHOW: "show" + Et,
    SHOWN: "shown" + Et,
    CLICK: "click" + Et,
    CLICK_DATA_API: "click" + Et + yt,
    KEYDOWN_DATA_API: "keydown" + Et + yt,
    KEYUP_DATA_API: "keyup" + Et + yt
  }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Vt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Qt = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = l.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !mt(this._element).hasClass(At)) {
        var t = l._getParentFromElement(this._element),
            e = mt(this._menu).hasClass(Dt);

        if (l._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = mt.Event(It.SHOW, n);

          if (mt(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      mt(this._element).on(It.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);

        this._menu = mt(t).find(Lt)[0];
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = mt(this._element).parent(),
          e = Mt;
      return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e;
    }, t._detectNavbar = function () {
      return 0 < mt(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};
      "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: t,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = mt(this).data(vt);

        if (t || (t = new l(this, "object" == _typeof(e) ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = mt(e[n]).data(vt),
            s = {
          relatedTarget: e[n]
        };

        if (r) {
          var o = r._menu;

          if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
            var a = mt.Event(It.HIDE, s);
            mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = Cn.getSelectorFromElement(t);
      return n && (e = mt(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
        var e = l._getParentFromElement(this),
            n = mt(e).hasClass(Dt);

        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = mt(e).find(Rt).get();

          if (0 !== i.length) {
            var r = i.indexOf(t.target);
            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var s = mt(e).find(kt)[0];
            mt(s).trigger("focus");
          }

          mt(this).trigger("click");
        }
      }
    }, o(l, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Vt;
      }
    }]), l;
  }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
    t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
  }).on(It.CLICK_DATA_API, Pt, function (t) {
    t.stopPropagation();
  }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
    return mt.fn[pt] = Tt, Qt._jQueryInterface;
  }, Qt),
      wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, Jt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, Zt = {
    HIDE: "hide" + qt,
    HIDDEN: "hidden" + qt,
    SHOW: "show" + qt,
    SHOWN: "shown" + qt,
    FOCUSIN: "focusin" + qt,
    RESIZE: "resize" + qt,
    CLICK_DISMISS: "click.dismiss" + qt,
    KEYDOWN_DISMISS: "keydown.dismiss" + qt,
    MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
    CLICK_DATA_API: "click" + qt + ".data-api"
  }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
    DIALOG: ".modal-dialog",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
  }, se = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var t = r.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
        var n = Bt.Event(Zt.SHOW, {
          relatedTarget: t
        });
        Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
          Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Bt.Event(Zt.HIDE);

        if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = Bt(this._element).hasClass(ne);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
            var r = Cn.getTransitionDurationFromElement(this._element);
            Bt(this._element).one(Cn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();

      var i = Bt.Event(Zt.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
      };

      if (n) {
        var s = Cn.getTransitionDurationFromElement(this._element);
        Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;
      Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Bt(window).off(Zt.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne) ? ne : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
        if (!n) return void t();
        var i = Cn.getTransitionDurationFromElement(this._backdrop);
        Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Bt(this._backdrop).removeClass(ie);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (Bt(this._element).hasClass(ne)) {
          var s = Cn.getTransitionDurationFromElement(this._backdrop);
          Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.paddingRight,
              i = Bt(e).css("padding-right");
          Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Bt(re.STICKY_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });
        var t = document.body.style.paddingRight,
            e = Bt(document.body).css("padding-right");
        Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Bt(re.FIXED_CONTENT).each(function (t, e) {
        var n = Bt(e).data("padding-right");
        "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
      }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Bt(e).data("margin-right");
        "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
      });
      var t = Bt(document.body).data("padding-right");
      "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = $t, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Bt(this).data(Gt),
            e = h({}, r.Default, Bt(this).data(), "object" == _typeof(n) && n);

        if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, o(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return Xt;
      }
    }]), r;
  }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = Cn.getSelectorFromElement(this);
    i && (e = Bt(i)[0]);
    var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = Bt(e).one(Zt.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
        Bt(n).is(":visible") && n.focus();
      });
    });

    se._jQueryInterface.call(Bt(e), r, this);
  }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
    return Bt.fn[Yt] = zt, se._jQueryInterface;
  }, se),
      Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(_e = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(de = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, pe = "out", ve = {
    HIDE: "hide" + he,
    HIDDEN: "hidden" + he,
    SHOW: (me = "show") + he,
    SHOWN: "shown" + he,
    INSERTED: "inserted" + he,
    CLICK: "click" + he,
    FOCUSIN: "focusin" + he,
    FOCUSOUT: "focusout" + he,
    MOUSEENTER: "mouseenter" + he,
    MOUSELEAVE: "mouseleave" + he
  }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
    function i(t, e) {
      if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = oe(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = oe.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        oe(this.element).trigger(t);
        var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = Cn.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);

        this.addAttachmentClass(o);
        var a = !1 === this.config.container ? document.body : oe(this.config.container);
        oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
          placement: o,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Ce
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          }
        }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);

        var l = function l() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
        };

        if (oe(this.tip).hasClass(Ee)) {
          var h = Cn.getTransitionDurationFromElement(this.tip);
          oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = oe.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
          var s = Cn.getTransitionDurationFromElement(n);
          oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      oe(this.getTipElement()).addClass(ue + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || oe(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = oe(this.getTipElement());
      this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return _e[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== be) {
          var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          oe(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
        oe(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = h({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === me && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === pe && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), t)).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = oe(this.getTipElement()),
          e = t.attr("class").match(fe);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = oe(this).data(le),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return le;
      }
    }, {
      key: "Event",
      get: function get() {
        return ve;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return he;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return de;
      }
    }]), i;
  }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
    return oe.fn[ae] = ce, Se._jQueryInterface;
  }, Se),
      On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), He = h({}, Nn.DefaultType, {
    content: "(string|element|function)"
  }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
    HIDE: "hide" + ke,
    HIDDEN: "hidden" + ke,
    SHOW: (Me = "show") + ke,
    SHOWN: "shown" + ke,
    INSERTED: "inserted" + ke,
    CLICK: "click" + ke,
    FOCUSIN: "focusin" + ke,
    FOCUSOUT: "focusout" + ke,
    MOUSEENTER: "mouseenter" + ke,
    MOUSELEAVE: "mouseleave" + ke
  }, Fe = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      we(this.getTipElement()).addClass(Le + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || we(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = we(this.getTipElement());
      this.setElementContent(t.find(xe), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = we(this.getTipElement()),
          e = t.attr("class").match(je);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = we(this).data(Oe),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return Re;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ne;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Oe;
      }
    }, {
      key: "Event",
      get: function get() {
        return Ke;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }]), i;
  }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
    return we.fn[Ne] = Pe, Fe._jQueryInterface;
  }, Fe),
      kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
    offset: 10,
    method: "auto",
    target: ""
  }, ze = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, Xe = {
    ACTIVATE: "activate" + Ye,
    SCROLL: "scroll" + Ye,
    LOAD_DATA_API: "load" + Ye + ".data-api"
  }, Je = "dropdown-item", Ze = "active", $e = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  }, tn = "offset", en = "position", nn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method,
          s = r === en ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
        var e,
            n = Cn.getSelectorFromElement(t);

        if (n && (e = Ve(n)[0]), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [Ve(e)[r]().top + s, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = h({}, qe, t)).target) {
        var e = Ve(t.target).attr("id");
        e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
      }

      return Cn.typeCheckConfig(Qe, t, ze), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",");

      t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });
      var n = Ve(t.join(","));
      n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Ve(this).data(Be);

        if (t || (t = new n(this, "object" == _typeof(e) && e), Ve(this).data(Be, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }, {
      key: "Default",
      get: function get() {
        return qe;
      }
    }]), n;
  }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
    for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
      var n = Ve(t[e]);

      nn._jQueryInterface.call(n, n.data());
    }
  }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
    return Ve.fn[Qe] = Ge, nn._jQueryInterface;
  }, nn),
      Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
    HIDE: "hide" + on,
    HIDDEN: "hidden" + on,
    SHOW: "show" + on,
    SHOWN: "shown" + on,
    CLICK_DATA_API: "click" + on + ".data-api"
  }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
        var t,
            i,
            e = rn(this._element).closest(gn)[0],
            r = Cn.getSelectorFromElement(this._element);

        if (e) {
          var s = "UL" === e.nodeName ? pn : mn;
          i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
        }

        var o = rn.Event(ln.HIDE, {
          relatedTarget: this._element
        }),
            a = rn.Event(ln.SHOW, {
          relatedTarget: i
        });

        if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
          r && (t = rn(r)[0]), this._activate(this._element, e);

          var l = function l() {
            var t = rn.Event(ln.HIDDEN, {
              relatedTarget: n._element
            }),
                e = rn.Event(ln.SHOWN, {
              relatedTarget: i
            });
            rn(i).trigger(t), rn(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      rn.removeData(this._element, sn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn),
          o = function o() {
        return i._transitionComplete(t, r, n);
      };

      if (r && s) {
        var a = Cn.getTransitionDurationFromElement(r);
        rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
      } else o();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        rn(e).removeClass(dn + " " + cn);
        var i = rn(e.parentNode).find(yn)[0];
        i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
        var r = rn(t).closest(_n)[0];
        r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = rn(this),
            e = t.data(sn);

        if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.0";
      }
    }]), i;
  }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
    t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
  }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
    return rn.fn.tab = an, Tn._jQueryInterface;
  }, Tn);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./resources/assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* perfect-scrollbar v0.6.10 */
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return require(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }

      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    'use strict';

    var ps = require('../main'),
        psInstances = require('../plugin/instances');

    function mountJQuery(jQuery) {
      jQuery.fn.perfectScrollbar = function (settingOrCommand) {
        return this.each(function () {
          if (_typeof(settingOrCommand) === 'object' || typeof settingOrCommand === 'undefined') {
            // If it's an object or none, initialize.
            var settings = settingOrCommand;

            if (!psInstances.get(this)) {
              ps.initialize(this, settings);
            }
          } else {
            // Unless, it may be a command.
            var command = settingOrCommand;

            if (command === 'update') {
              ps.update(this);
            } else if (command === 'destroy') {
              ps.destroy(this);
            }
          }

          return jQuery(this);
        });
      };
    }

    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (mountJQuery),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var jq; }

    module.exports = mountJQuery;
  }, {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function (require, module, exports) {
    'use strict';

    function oldAdd(element, className) {
      var classes = element.className.split(' ');

      if (classes.indexOf(className) < 0) {
        classes.push(className);
      }

      element.className = classes.join(' ');
    }

    function oldRemove(element, className) {
      var classes = element.className.split(' ');
      var idx = classes.indexOf(className);

      if (idx >= 0) {
        classes.splice(idx, 1);
      }

      element.className = classes.join(' ');
    }

    exports.add = function (element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        oldAdd(element, className);
      }
    };

    exports.remove = function (element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        oldRemove(element, className);
      }
    };

    exports.list = function (element) {
      if (element.classList) {
        return Array.prototype.slice.apply(element.classList);
      } else {
        return element.className.split(' ');
      }
    };
  }, {}],
  3: [function (require, module, exports) {
    'use strict';

    var DOM = {};

    DOM.e = function (tagName, className) {
      var element = document.createElement(tagName);
      element.className = className;
      return element;
    };

    DOM.appendTo = function (child, parent) {
      parent.appendChild(child);
      return child;
    };

    function cssGet(element, styleName) {
      return window.getComputedStyle(element)[styleName];
    }

    function cssSet(element, styleName, styleValue) {
      if (typeof styleValue === 'number') {
        styleValue = styleValue.toString() + 'px';
      }

      element.style[styleName] = styleValue;
      return element;
    }

    function cssMultiSet(element, obj) {
      for (var key in obj) {
        var val = obj[key];

        if (typeof val === 'number') {
          val = val.toString() + 'px';
        }

        element.style[key] = val;
      }

      return element;
    }

    DOM.css = function (element, styleNameOrObject, styleValue) {
      if (_typeof(styleNameOrObject) === 'object') {
        // multiple set with object
        return cssMultiSet(element, styleNameOrObject);
      } else {
        if (typeof styleValue === 'undefined') {
          return cssGet(element, styleNameOrObject);
        } else {
          return cssSet(element, styleNameOrObject, styleValue);
        }
      }
    };

    DOM.matches = function (element, query) {
      if (typeof element.matches !== 'undefined') {
        return element.matches(query);
      } else {
        if (typeof element.matchesSelector !== 'undefined') {
          return element.matchesSelector(query);
        } else if (typeof element.webkitMatchesSelector !== 'undefined') {
          return element.webkitMatchesSelector(query);
        } else if (typeof element.mozMatchesSelector !== 'undefined') {
          return element.mozMatchesSelector(query);
        } else if (typeof element.msMatchesSelector !== 'undefined') {
          return element.msMatchesSelector(query);
        }
      }
    };

    DOM.remove = function (element) {
      if (typeof element.remove !== 'undefined') {
        element.remove();
      } else {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };

    DOM.queryChildren = function (element, selector) {
      return Array.prototype.filter.call(element.childNodes, function (child) {
        return DOM.matches(child, selector);
      });
    };

    module.exports = DOM;
  }, {}],
  4: [function (require, module, exports) {
    'use strict';

    var EventElement = function EventElement(element) {
      this.element = element;
      this.events = {};
    };

    EventElement.prototype.bind = function (eventName, handler) {
      if (typeof this.events[eventName] === 'undefined') {
        this.events[eventName] = [];
      }

      this.events[eventName].push(handler);
      this.element.addEventListener(eventName, handler, false);
    };

    EventElement.prototype.unbind = function (eventName, handler) {
      var isHandlerProvided = typeof handler !== 'undefined';
      this.events[eventName] = this.events[eventName].filter(function (hdlr) {
        if (isHandlerProvided && hdlr !== handler) {
          return true;
        }

        this.element.removeEventListener(eventName, hdlr, false);
        return false;
      }, this);
    };

    EventElement.prototype.unbindAll = function () {
      for (var name in this.events) {
        this.unbind(name);
      }
    };

    var EventManager = function EventManager() {
      this.eventElements = [];
    };

    EventManager.prototype.eventElement = function (element) {
      var ee = this.eventElements.filter(function (eventElement) {
        return eventElement.element === element;
      })[0];

      if (typeof ee === 'undefined') {
        ee = new EventElement(element);
        this.eventElements.push(ee);
      }

      return ee;
    };

    EventManager.prototype.bind = function (element, eventName, handler) {
      this.eventElement(element).bind(eventName, handler);
    };

    EventManager.prototype.unbind = function (element, eventName, handler) {
      this.eventElement(element).unbind(eventName, handler);
    };

    EventManager.prototype.unbindAll = function () {
      for (var i = 0; i < this.eventElements.length; i++) {
        this.eventElements[i].unbindAll();
      }
    };

    EventManager.prototype.once = function (element, eventName, handler) {
      var ee = this.eventElement(element);

      var onceHandler = function onceHandler(e) {
        ee.unbind(eventName, onceHandler);
        handler(e);
      };

      ee.bind(eventName, onceHandler);
    };

    module.exports = EventManager;
  }, {}],
  5: [function (require, module, exports) {
    'use strict';

    module.exports = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }

      return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      };
    }();
  }, {}],
  6: [function (require, module, exports) {
    'use strict';

    var cls = require('./class'),
        d = require('./dom');

    exports.toInt = function (x) {
      return parseInt(x, 10) || 0;
    };

    exports.clone = function (obj) {
      if (obj === null) {
        return null;
      } else if (_typeof(obj) === 'object') {
        var result = {};

        for (var key in obj) {
          result[key] = this.clone(obj[key]);
        }

        return result;
      } else {
        return obj;
      }
    };

    exports.extend = function (original, source) {
      var result = this.clone(original);

      for (var key in source) {
        result[key] = this.clone(source[key]);
      }

      return result;
    };

    exports.isEditable = function (el) {
      return d.matches(el, "input,[contenteditable]") || d.matches(el, "select,[contenteditable]") || d.matches(el, "textarea,[contenteditable]") || d.matches(el, "button,[contenteditable]");
    };

    exports.removePsClasses = function (element) {
      var clsList = cls.list(element);

      for (var i = 0; i < clsList.length; i++) {
        var className = clsList[i];

        if (className.indexOf('ps-') === 0) {
          cls.remove(element, className);
        }
      }
    };

    exports.outerWidth = function (element) {
      return this.toInt(d.css(element, 'width')) + this.toInt(d.css(element, 'paddingLeft')) + this.toInt(d.css(element, 'paddingRight')) + this.toInt(d.css(element, 'borderLeftWidth')) + this.toInt(d.css(element, 'borderRightWidth'));
    };

    exports.startScrolling = function (element, axis) {
      cls.add(element, 'ps-in-scrolling');

      if (typeof axis !== 'undefined') {
        cls.add(element, 'ps-' + axis);
      } else {
        cls.add(element, 'ps-x');
        cls.add(element, 'ps-y');
      }
    };

    exports.stopScrolling = function (element, axis) {
      cls.remove(element, 'ps-in-scrolling');

      if (typeof axis !== 'undefined') {
        cls.remove(element, 'ps-' + axis);
      } else {
        cls.remove(element, 'ps-x');
        cls.remove(element, 'ps-y');
      }
    };

    exports.env = {
      isWebKit: 'WebkitAppearance' in document.documentElement.style,
      supportsTouch: 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: window.navigator.msMaxTouchPoints !== null
    };
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function (require, module, exports) {
    'use strict';

    var destroy = require('./plugin/destroy'),
        initialize = require('./plugin/initialize'),
        update = require('./plugin/update');

    module.exports = {
      initialize: initialize,
      update: update,
      destroy: destroy
    };
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function (require, module, exports) {
    'use strict';

    module.exports = {
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      stopPropagationOnClick: true,
      suppressScrollX: false,
      suppressScrollY: false,
      swipePropagation: true,
      useBothWheelAxes: false,
      useKeyboard: true,
      useSelectionScroll: false,
      wheelPropagation: false,
      wheelSpeed: 1,
      theme: 'default'
    };
  }, {}],
  9: [function (require, module, exports) {
    'use strict';

    var d = require('../lib/dom'),
        h = require('../lib/helper'),
        instances = require('./instances');

    module.exports = function (element) {
      var i = instances.get(element);

      if (!i) {
        return;
      }

      i.event.unbindAll();
      d.remove(i.scrollbarX);
      d.remove(i.scrollbarY);
      d.remove(i.scrollbarXRail);
      d.remove(i.scrollbarYRail);
      h.removePsClasses(element);
      instances.remove(element);
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
        instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindClickRailHandler(element, i) {
      function pageOffset(el) {
        return el.getBoundingClientRect();
      }

      var stopPropagation = window.Event.prototype.stopPropagation.bind;

      if (i.settings.stopPropagationOnClick) {
        i.event.bind(i.scrollbarY, 'click', stopPropagation);
      }

      i.event.bind(i.scrollbarYRail, 'click', function (e) {
        var halfOfScrollbarLength = h.toInt(i.scrollbarYHeight / 2);
        var positionTop = i.railYRatio * (e.pageY - window.pageYOffset - pageOffset(i.scrollbarYRail).top - halfOfScrollbarLength);
        var maxPositionTop = i.railYRatio * (i.railYHeight - i.scrollbarYHeight);
        var positionRatio = positionTop / maxPositionTop;

        if (positionRatio < 0) {
          positionRatio = 0;
        } else if (positionRatio > 1) {
          positionRatio = 1;
        }

        updateScroll(element, 'top', (i.contentHeight - i.containerHeight) * positionRatio);
        updateGeometry(element);
        e.stopPropagation();
      });

      if (i.settings.stopPropagationOnClick) {
        i.event.bind(i.scrollbarX, 'click', stopPropagation);
      }

      i.event.bind(i.scrollbarXRail, 'click', function (e) {
        var halfOfScrollbarLength = h.toInt(i.scrollbarXWidth / 2);
        var positionLeft = i.railXRatio * (e.pageX - window.pageXOffset - pageOffset(i.scrollbarXRail).left - halfOfScrollbarLength);
        var maxPositionLeft = i.railXRatio * (i.railXWidth - i.scrollbarXWidth);
        var positionRatio = positionLeft / maxPositionLeft;

        if (positionRatio < 0) {
          positionRatio = 0;
        } else if (positionRatio > 1) {
          positionRatio = 1;
        }

        updateScroll(element, 'left', (i.contentWidth - i.containerWidth) * positionRatio - i.negativeScrollAdjustment);
        updateGeometry(element);
        e.stopPropagation();
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindClickRailHandler(element, i);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function (require, module, exports) {
    'use strict';

    var d = require('../../lib/dom'),
        h = require('../../lib/helper'),
        instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindMouseScrollXHandler(element, i) {
      var currentLeft = null;
      var currentPageX = null;

      function updateScrollLeft(deltaX) {
        var newLeft = currentLeft + deltaX * i.railXRatio;
        var maxLeft = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + i.railXRatio * (i.railXWidth - i.scrollbarXWidth);

        if (newLeft < 0) {
          i.scrollbarXLeft = 0;
        } else if (newLeft > maxLeft) {
          i.scrollbarXLeft = maxLeft;
        } else {
          i.scrollbarXLeft = newLeft;
        }

        var scrollLeft = h.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - i.railXRatio * i.scrollbarXWidth)) - i.negativeScrollAdjustment;
        updateScroll(element, 'left', scrollLeft);
      }

      var mouseMoveHandler = function mouseMoveHandler(e) {
        updateScrollLeft(e.pageX - currentPageX);
        updateGeometry(element);
        e.stopPropagation();
        e.preventDefault();
      };

      var mouseUpHandler = function mouseUpHandler() {
        h.stopScrolling(element, 'x');
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      };

      i.event.bind(i.scrollbarX, 'mousedown', function (e) {
        currentPageX = e.pageX;
        currentLeft = h.toInt(d.css(i.scrollbarX, 'left')) * i.railXRatio;
        h.startScrolling(element, 'x');
        i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
        e.stopPropagation();
        e.preventDefault();
      });
    }

    function bindMouseScrollYHandler(element, i) {
      var currentTop = null;
      var currentPageY = null;

      function updateScrollTop(deltaY) {
        var newTop = currentTop + deltaY * i.railYRatio;
        var maxTop = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + i.railYRatio * (i.railYHeight - i.scrollbarYHeight);

        if (newTop < 0) {
          i.scrollbarYTop = 0;
        } else if (newTop > maxTop) {
          i.scrollbarYTop = maxTop;
        } else {
          i.scrollbarYTop = newTop;
        }

        var scrollTop = h.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - i.railYRatio * i.scrollbarYHeight));
        updateScroll(element, 'top', scrollTop);
      }

      var mouseMoveHandler = function mouseMoveHandler(e) {
        updateScrollTop(e.pageY - currentPageY);
        updateGeometry(element);
        e.stopPropagation();
        e.preventDefault();
      };

      var mouseUpHandler = function mouseUpHandler() {
        h.stopScrolling(element, 'y');
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      };

      i.event.bind(i.scrollbarY, 'mousedown', function (e) {
        currentPageY = e.pageY;
        currentTop = h.toInt(d.css(i.scrollbarY, 'top')) * i.railYRatio;
        h.startScrolling(element, 'y');
        i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
        e.stopPropagation();
        e.preventDefault();
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindMouseScrollXHandler(element, i);
      bindMouseScrollYHandler(element, i);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
        d = require('../../lib/dom'),
        instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindKeyboardHandler(element, i) {
      var hovered = false;
      i.event.bind(element, 'mouseenter', function () {
        hovered = true;
      });
      i.event.bind(element, 'mouseleave', function () {
        hovered = false;
      });
      var shouldPrevent = false;

      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;

        if (deltaX === 0) {
          if (!i.scrollbarYActive) {
            return false;
          }

          if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
            return !i.settings.wheelPropagation;
          }
        }

        var scrollLeft = element.scrollLeft;

        if (deltaY === 0) {
          if (!i.scrollbarXActive) {
            return false;
          }

          if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
            return !i.settings.wheelPropagation;
          }
        }

        return true;
      }

      i.event.bind(i.ownerDocument, 'keydown', function (e) {
        if (e.isDefaultPrevented && e.isDefaultPrevented()) {
          return;
        }

        var focused = d.matches(i.scrollbarX, ':focus') || d.matches(i.scrollbarY, ':focus');

        if (!hovered && !focused) {
          return;
        }

        var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

        if (activeElement) {
          // go deeper if element is a webcomponent
          while (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }

          if (h.isEditable(activeElement)) {
            return;
          }
        }

        var deltaX = 0;
        var deltaY = 0;

        switch (e.which) {
          case 37:
            // left
            deltaX = -30;
            break;

          case 38:
            // up
            deltaY = 30;
            break;

          case 39:
            // right
            deltaX = 30;
            break;

          case 40:
            // down
            deltaY = -30;
            break;

          case 33:
            // page up
            deltaY = 90;
            break;

          case 32:
            // space bar
            if (e.shiftKey) {
              deltaY = 90;
            } else {
              deltaY = -90;
            }

            break;

          case 34:
            // page down
            deltaY = -90;
            break;

          case 35:
            // end
            if (e.ctrlKey) {
              deltaY = -i.contentHeight;
            } else {
              deltaY = -i.containerHeight;
            }

            break;

          case 36:
            // home
            if (e.ctrlKey) {
              deltaY = element.scrollTop;
            } else {
              deltaY = i.containerHeight;
            }

            break;

          default:
            return;
        }

        updateScroll(element, 'top', element.scrollTop - deltaY);
        updateScroll(element, 'left', element.scrollLeft + deltaX);
        updateGeometry(element);
        shouldPrevent = shouldPreventDefault(deltaX, deltaY);

        if (shouldPrevent) {
          e.preventDefault();
        }
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindKeyboardHandler(element, i);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindMouseWheelHandler(element, i) {
      var shouldPrevent = false;

      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;

        if (deltaX === 0) {
          if (!i.scrollbarYActive) {
            return false;
          }

          if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
            return !i.settings.wheelPropagation;
          }
        }

        var scrollLeft = element.scrollLeft;

        if (deltaY === 0) {
          if (!i.scrollbarXActive) {
            return false;
          }

          if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
            return !i.settings.wheelPropagation;
          }
        }

        return true;
      }

      function getDeltaFromEvent(e) {
        var deltaX = e.deltaX;
        var deltaY = -1 * e.deltaY;

        if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
          // OS X Safari
          deltaX = -1 * e.wheelDeltaX / 6;
          deltaY = e.wheelDeltaY / 6;
        }

        if (e.deltaMode && e.deltaMode === 1) {
          // Firefox in deltaMode 1: Line scrolling
          deltaX *= 10;
          deltaY *= 10;
        }

        if (deltaX !== deltaX && deltaY !== deltaY
        /* NaN checks */
        ) {
            // IE in some mouse drivers
            deltaX = 0;
            deltaY = e.wheelDelta;
          }

        return [deltaX, deltaY];
      }

      function shouldBeConsumedByTextarea(deltaX, deltaY) {
        var hoveredTextarea = element.querySelector('textarea:hover');

        if (hoveredTextarea) {
          var maxScrollTop = hoveredTextarea.scrollHeight - hoveredTextarea.clientHeight;

          if (maxScrollTop > 0) {
            if (!(hoveredTextarea.scrollTop === 0 && deltaY > 0) && !(hoveredTextarea.scrollTop === maxScrollTop && deltaY < 0)) {
              return true;
            }
          }

          var maxScrollLeft = hoveredTextarea.scrollLeft - hoveredTextarea.clientWidth;

          if (maxScrollLeft > 0) {
            if (!(hoveredTextarea.scrollLeft === 0 && deltaX < 0) && !(hoveredTextarea.scrollLeft === maxScrollLeft && deltaX > 0)) {
              return true;
            }
          }
        }

        return false;
      }

      function mousewheelHandler(e) {
        var delta = getDeltaFromEvent(e);
        var deltaX = delta[0];
        var deltaY = delta[1];

        if (shouldBeConsumedByTextarea(deltaX, deltaY)) {
          return;
        }

        shouldPrevent = false;

        if (!i.settings.useBothWheelAxes) {
          // deltaX will only be used for horizontal scrolling and deltaY will
          // only be used for vertical scrolling - this is the default
          updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
          updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
        } else if (i.scrollbarYActive && !i.scrollbarXActive) {
          // only vertical scrollbar is active and useBothWheelAxes option is
          // active, so let's scroll vertical bar using both mouse wheel axes
          if (deltaY) {
            updateScroll(element, 'top', element.scrollTop - deltaY * i.settings.wheelSpeed);
          } else {
            updateScroll(element, 'top', element.scrollTop + deltaX * i.settings.wheelSpeed);
          }

          shouldPrevent = true;
        } else if (i.scrollbarXActive && !i.scrollbarYActive) {
          // useBothWheelAxes and only horizontal bar is active, so use both
          // wheel axes for horizontal bar
          if (deltaX) {
            updateScroll(element, 'left', element.scrollLeft + deltaX * i.settings.wheelSpeed);
          } else {
            updateScroll(element, 'left', element.scrollLeft - deltaY * i.settings.wheelSpeed);
          }

          shouldPrevent = true;
        }

        updateGeometry(element);
        shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

        if (shouldPrevent) {
          e.stopPropagation();
          e.preventDefault();
        }
      }

      if (typeof window.onwheel !== "undefined") {
        i.event.bind(element, 'wheel', mousewheelHandler);
      } else if (typeof window.onmousewheel !== "undefined") {
        i.event.bind(element, 'mousewheel', mousewheelHandler);
      }
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindMouseWheelHandler(element, i);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
        updateGeometry = require('../update-geometry');

    function bindNativeScrollHandler(element, i) {
      i.event.bind(element, 'scroll', function () {
        updateGeometry(element);
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindNativeScrollHandler(element, i);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function (require, module, exports) {
    'use strict';

    var h = require('../../lib/helper'),
        instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindSelectionHandler(element, i) {
      function getRangeNode() {
        var selection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : '';

        if (selection.toString().length === 0) {
          return null;
        } else {
          return selection.getRangeAt(0).commonAncestorContainer;
        }
      }

      var scrollingLoop = null;
      var scrollDiff = {
        top: 0,
        left: 0
      };

      function startScrolling() {
        if (!scrollingLoop) {
          scrollingLoop = setInterval(function () {
            if (!instances.get(element)) {
              clearInterval(scrollingLoop);
              return;
            }

            updateScroll(element, 'top', element.scrollTop + scrollDiff.top);
            updateScroll(element, 'left', element.scrollLeft + scrollDiff.left);
            updateGeometry(element);
          }, 50); // every .1 sec
        }
      }

      function stopScrolling() {
        if (scrollingLoop) {
          clearInterval(scrollingLoop);
          scrollingLoop = null;
        }

        h.stopScrolling(element);
      }

      var isSelected = false;
      i.event.bind(i.ownerDocument, 'selectionchange', function () {
        if (element.contains(getRangeNode())) {
          isSelected = true;
        } else {
          isSelected = false;
          stopScrolling();
        }
      });
      i.event.bind(window, 'mouseup', function () {
        if (isSelected) {
          isSelected = false;
          stopScrolling();
        }
      });
      i.event.bind(window, 'mousemove', function (e) {
        if (isSelected) {
          var mousePosition = {
            x: e.pageX,
            y: e.pageY
          };
          var containerGeometry = {
            left: element.offsetLeft,
            right: element.offsetLeft + element.offsetWidth,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight
          };

          if (mousePosition.x < containerGeometry.left + 3) {
            scrollDiff.left = -5;
            h.startScrolling(element, 'x');
          } else if (mousePosition.x > containerGeometry.right - 3) {
            scrollDiff.left = 5;
            h.startScrolling(element, 'x');
          } else {
            scrollDiff.left = 0;
          }

          if (mousePosition.y < containerGeometry.top + 3) {
            if (containerGeometry.top + 3 - mousePosition.y < 5) {
              scrollDiff.top = -5;
            } else {
              scrollDiff.top = -20;
            }

            h.startScrolling(element, 'y');
          } else if (mousePosition.y > containerGeometry.bottom - 3) {
            if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
              scrollDiff.top = 5;
            } else {
              scrollDiff.top = 20;
            }

            h.startScrolling(element, 'y');
          } else {
            scrollDiff.top = 0;
          }

          if (scrollDiff.top === 0 && scrollDiff.left === 0) {
            stopScrolling();
          } else {
            startScrolling();
          }
        }
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      bindSelectionHandler(element, i);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (require, module, exports) {
    'use strict';

    var instances = require('../instances'),
        updateGeometry = require('../update-geometry'),
        updateScroll = require('../update-scroll');

    function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = element.scrollTop;
        var scrollLeft = element.scrollLeft;
        var magnitudeX = Math.abs(deltaX);
        var magnitudeY = Math.abs(deltaY);

        if (magnitudeY > magnitudeX) {
          // user is perhaps trying to swipe up/down the page
          if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
            return !i.settings.swipePropagation;
          }
        } else if (magnitudeX > magnitudeY) {
          // user is perhaps trying to swipe left/right across the page
          if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
            return !i.settings.swipePropagation;
          }
        }

        return true;
      }

      function applyTouchMove(differenceX, differenceY) {
        updateScroll(element, 'top', element.scrollTop - differenceY);
        updateScroll(element, 'left', element.scrollLeft - differenceX);
        updateGeometry(element);
      }

      var startOffset = {};
      var startTime = 0;
      var speed = {};
      var easingLoop = null;
      var inGlobalTouch = false;
      var inLocalTouch = false;

      function globalTouchStart() {
        inGlobalTouch = true;
      }

      function globalTouchEnd() {
        inGlobalTouch = false;
      }

      function getTouch(e) {
        if (e.targetTouches) {
          return e.targetTouches[0];
        } else {
          // Maybe IE pointer
          return e;
        }
      }

      function shouldHandle(e) {
        if (e.targetTouches && e.targetTouches.length === 1) {
          return true;
        }

        if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
          return true;
        }

        return false;
      }

      function touchStart(e) {
        if (shouldHandle(e)) {
          inLocalTouch = true;
          var touch = getTouch(e);
          startOffset.pageX = touch.pageX;
          startOffset.pageY = touch.pageY;
          startTime = new Date().getTime();

          if (easingLoop !== null) {
            clearInterval(easingLoop);
          }

          e.stopPropagation();
        }
      }

      function touchMove(e) {
        if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
          var touch = getTouch(e);
          var currentOffset = {
            pageX: touch.pageX,
            pageY: touch.pageY
          };
          var differenceX = currentOffset.pageX - startOffset.pageX;
          var differenceY = currentOffset.pageY - startOffset.pageY;
          applyTouchMove(differenceX, differenceY);
          startOffset = currentOffset;
          var currentTime = new Date().getTime();
          var timeGap = currentTime - startTime;

          if (timeGap > 0) {
            speed.x = differenceX / timeGap;
            speed.y = differenceY / timeGap;
            startTime = currentTime;
          }

          if (shouldPreventDefault(differenceX, differenceY)) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }

      function touchEnd() {
        if (!inGlobalTouch && inLocalTouch) {
          inLocalTouch = false;
          clearInterval(easingLoop);
          easingLoop = setInterval(function () {
            if (!instances.get(element)) {
              clearInterval(easingLoop);
              return;
            }

            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(easingLoop);
              return;
            }

            applyTouchMove(speed.x * 30, speed.y * 30);
            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        }
      }

      if (supportsTouch) {
        i.event.bind(window, 'touchstart', globalTouchStart);
        i.event.bind(window, 'touchend', globalTouchEnd);
        i.event.bind(element, 'touchstart', touchStart);
        i.event.bind(element, 'touchmove', touchMove);
        i.event.bind(element, 'touchend', touchEnd);
      }

      if (supportsIePointer) {
        if (window.PointerEvent) {
          i.event.bind(window, 'pointerdown', globalTouchStart);
          i.event.bind(window, 'pointerup', globalTouchEnd);
          i.event.bind(element, 'pointerdown', touchStart);
          i.event.bind(element, 'pointermove', touchMove);
          i.event.bind(element, 'pointerup', touchEnd);
        } else if (window.MSPointerEvent) {
          i.event.bind(window, 'MSPointerDown', globalTouchStart);
          i.event.bind(window, 'MSPointerUp', globalTouchEnd);
          i.event.bind(element, 'MSPointerDown', touchStart);
          i.event.bind(element, 'MSPointerMove', touchMove);
          i.event.bind(element, 'MSPointerUp', touchEnd);
        }
      }
    }

    module.exports = function (element, supportsTouch, supportsIePointer) {
      var i = instances.get(element);
      bindTouchHandler(element, i, supportsTouch, supportsIePointer);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
        h = require('../lib/helper'),
        instances = require('./instances'),
        updateGeometry = require('./update-geometry'); // Handlers


    var clickRailHandler = require('./handler/click-rail'),
        dragScrollbarHandler = require('./handler/drag-scrollbar'),
        keyboardHandler = require('./handler/keyboard'),
        mouseWheelHandler = require('./handler/mouse-wheel'),
        nativeScrollHandler = require('./handler/native-scroll'),
        selectionHandler = require('./handler/selection'),
        touchHandler = require('./handler/touch');

    module.exports = function (element, userSettings) {
      userSettings = _typeof(userSettings) === 'object' ? userSettings : {};
      cls.add(element, 'ps-container'); // Create a plugin instance.

      var i = instances.add(element);
      i.settings = h.extend(i.settings, userSettings);
      cls.add(element, 'ps-theme-' + i.settings.theme);
      clickRailHandler(element);
      dragScrollbarHandler(element);
      mouseWheelHandler(element);
      nativeScrollHandler(element);

      if (i.settings.useSelectionScroll) {
        selectionHandler(element);
      }

      if (h.env.supportsTouch || h.env.supportsIePointer) {
        touchHandler(element, h.env.supportsTouch, h.env.supportsIePointer);
      }

      if (i.settings.useKeyboard) {
        keyboardHandler(element);
      }

      updateGeometry(element);
    };
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
        d = require('../lib/dom'),
        defaultSettings = require('./default-setting'),
        EventManager = require('../lib/event-manager'),
        guid = require('../lib/guid'),
        h = require('../lib/helper');

    var instances = {};

    function Instance(element) {
      var i = this;
      i.settings = h.clone(defaultSettings);
      i.containerWidth = null;
      i.containerHeight = null;
      i.contentWidth = null;
      i.contentHeight = null;
      i.isRtl = d.css(element, 'direction') === "rtl";

      i.isNegativeScroll = function () {
        var originalScrollLeft = element.scrollLeft;
        var result = null;
        element.scrollLeft = -1;
        result = element.scrollLeft < 0;
        element.scrollLeft = originalScrollLeft;
        return result;
      }();

      i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
      i.event = new EventManager();
      i.ownerDocument = element.ownerDocument || document;

      function focus() {
        cls.add(element, 'ps-focus');
      }

      function blur() {
        cls.remove(element, 'ps-focus');
      }

      i.scrollbarXRail = d.appendTo(d.e('div', 'ps-scrollbar-x-rail'), element);
      i.scrollbarX = d.appendTo(d.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
      i.scrollbarX.setAttribute('tabindex', 0);
      i.event.bind(i.scrollbarX, 'focus', focus);
      i.event.bind(i.scrollbarX, 'blur', blur);
      i.scrollbarXActive = null;
      i.scrollbarXWidth = null;
      i.scrollbarXLeft = null;
      i.scrollbarXBottom = h.toInt(d.css(i.scrollbarXRail, 'bottom'));
      i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN

      i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : h.toInt(d.css(i.scrollbarXRail, 'top'));
      i.railBorderXWidth = h.toInt(d.css(i.scrollbarXRail, 'borderLeftWidth')) + h.toInt(d.css(i.scrollbarXRail, 'borderRightWidth')); // Set rail to display:block to calculate margins

      d.css(i.scrollbarXRail, 'display', 'block');
      i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
      d.css(i.scrollbarXRail, 'display', '');
      i.railXWidth = null;
      i.railXRatio = null;
      i.scrollbarYRail = d.appendTo(d.e('div', 'ps-scrollbar-y-rail'), element);
      i.scrollbarY = d.appendTo(d.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
      i.scrollbarY.setAttribute('tabindex', 0);
      i.event.bind(i.scrollbarY, 'focus', focus);
      i.event.bind(i.scrollbarY, 'blur', blur);
      i.scrollbarYActive = null;
      i.scrollbarYHeight = null;
      i.scrollbarYTop = null;
      i.scrollbarYRight = h.toInt(d.css(i.scrollbarYRail, 'right'));
      i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN

      i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : h.toInt(d.css(i.scrollbarYRail, 'left'));
      i.scrollbarYOuterWidth = i.isRtl ? h.outerWidth(i.scrollbarY) : null;
      i.railBorderYWidth = h.toInt(d.css(i.scrollbarYRail, 'borderTopWidth')) + h.toInt(d.css(i.scrollbarYRail, 'borderBottomWidth'));
      d.css(i.scrollbarYRail, 'display', 'block');
      i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));
      d.css(i.scrollbarYRail, 'display', '');
      i.railYHeight = null;
      i.railYRatio = null;
    }

    function getId(element) {
      if (typeof element.dataset === 'undefined') {
        return element.getAttribute('data-ps-id');
      } else {
        return element.dataset.psId;
      }
    }

    function setId(element, id) {
      if (typeof element.dataset === 'undefined') {
        element.setAttribute('data-ps-id', id);
      } else {
        element.dataset.psId = id;
      }
    }

    function removeId(element) {
      if (typeof element.dataset === 'undefined') {
        element.removeAttribute('data-ps-id');
      } else {
        delete element.dataset.psId;
      }
    }

    exports.add = function (element) {
      var newId = guid();
      setId(element, newId);
      instances[newId] = new Instance(element);
      return instances[newId];
    };

    exports.remove = function (element) {
      delete instances[getId(element)];
      removeId(element);
    };

    exports.get = function (element) {
      return instances[getId(element)];
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (require, module, exports) {
    'use strict';

    var cls = require('../lib/class'),
        d = require('../lib/dom'),
        h = require('../lib/helper'),
        instances = require('./instances'),
        updateScroll = require('./update-scroll');

    function getThumbSize(i, thumbSize) {
      if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
      }

      if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
      }

      return thumbSize;
    }

    function updateCss(element, i) {
      var xRailOffset = {
        width: i.railXWidth
      };

      if (i.isRtl) {
        xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
      } else {
        xRailOffset.left = element.scrollLeft;
      }

      if (i.isScrollbarXUsingBottom) {
        xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
      } else {
        xRailOffset.top = i.scrollbarXTop + element.scrollTop;
      }

      d.css(i.scrollbarXRail, xRailOffset);
      var yRailOffset = {
        top: element.scrollTop,
        height: i.railYHeight
      };

      if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
          yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
        } else {
          yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
      } else {
        if (i.isRtl) {
          yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
        } else {
          yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
      }

      d.css(i.scrollbarYRail, yRailOffset);
      d.css(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth
      });
      d.css(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth
      });
    }

    module.exports = function (element) {
      var i = instances.get(element);
      i.containerWidth = element.clientWidth;
      i.containerHeight = element.clientHeight;
      i.contentWidth = element.scrollWidth;
      i.contentHeight = element.scrollHeight;
      var existingRails;

      if (!element.contains(i.scrollbarXRail)) {
        existingRails = d.queryChildren(element, '.ps-scrollbar-x-rail');

        if (existingRails.length > 0) {
          existingRails.forEach(function (rail) {
            d.remove(rail);
          });
        }

        d.appendTo(i.scrollbarXRail, element);
      }

      if (!element.contains(i.scrollbarYRail)) {
        existingRails = d.queryChildren(element, '.ps-scrollbar-y-rail');

        if (existingRails.length > 0) {
          existingRails.forEach(function (rail) {
            d.remove(rail);
          });
        }

        d.appendTo(i.scrollbarYRail, element);
      }

      if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
        i.scrollbarXActive = true;
        i.railXWidth = i.containerWidth - i.railXMarginWidth;
        i.railXRatio = i.containerWidth / i.railXWidth;
        i.scrollbarXWidth = getThumbSize(i, h.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
        i.scrollbarXLeft = h.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
      } else {
        i.scrollbarXActive = false;
      }

      if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
        i.scrollbarYActive = true;
        i.railYHeight = i.containerHeight - i.railYMarginHeight;
        i.railYRatio = i.containerHeight / i.railYHeight;
        i.scrollbarYHeight = getThumbSize(i, h.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
        i.scrollbarYTop = h.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
      } else {
        i.scrollbarYActive = false;
      }

      if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
        i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
      }

      if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
        i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
      }

      updateCss(element, i);

      if (i.scrollbarXActive) {
        cls.add(element, 'ps-active-x');
      } else {
        cls.remove(element, 'ps-active-x');
        i.scrollbarXWidth = 0;
        i.scrollbarXLeft = 0;
        updateScroll(element, 'left', 0);
      }

      if (i.scrollbarYActive) {
        cls.add(element, 'ps-active-y');
      } else {
        cls.remove(element, 'ps-active-y');
        i.scrollbarYHeight = 0;
        i.scrollbarYTop = 0;
        updateScroll(element, 'top', 0);
      }
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (require, module, exports) {
    'use strict';

    var instances = require('./instances');

    var upEvent = document.createEvent('Event'),
        downEvent = document.createEvent('Event'),
        leftEvent = document.createEvent('Event'),
        rightEvent = document.createEvent('Event'),
        yEvent = document.createEvent('Event'),
        xEvent = document.createEvent('Event'),
        xStartEvent = document.createEvent('Event'),
        xEndEvent = document.createEvent('Event'),
        yStartEvent = document.createEvent('Event'),
        yEndEvent = document.createEvent('Event'),
        lastTop,
        lastLeft;
    upEvent.initEvent('ps-scroll-up', true, true);
    downEvent.initEvent('ps-scroll-down', true, true);
    leftEvent.initEvent('ps-scroll-left', true, true);
    rightEvent.initEvent('ps-scroll-right', true, true);
    yEvent.initEvent('ps-scroll-y', true, true);
    xEvent.initEvent('ps-scroll-x', true, true);
    xStartEvent.initEvent('ps-x-reach-start', true, true);
    xEndEvent.initEvent('ps-x-reach-end', true, true);
    yStartEvent.initEvent('ps-y-reach-start', true, true);
    yEndEvent.initEvent('ps-y-reach-end', true, true);

    module.exports = function (element, axis, value) {
      if (typeof element === 'undefined') {
        throw 'You must provide an element to the update-scroll function';
      }

      if (typeof axis === 'undefined') {
        throw 'You must provide an axis to the update-scroll function';
      }

      if (typeof value === 'undefined') {
        throw 'You must provide a value to the update-scroll function';
      }

      if (axis === 'top' && value <= 0) {
        element.scrollTop = value = 0; // don't allow negative scroll

        element.dispatchEvent(yStartEvent);
      }

      if (axis === 'left' && value <= 0) {
        element.scrollLeft = value = 0; // don't allow negative scroll

        element.dispatchEvent(xStartEvent);
      }

      var i = instances.get(element);

      if (axis === 'top' && value >= i.contentHeight - i.containerHeight) {
        element.scrollTop = value = i.contentHeight - i.containerHeight; // don't allow scroll past container

        element.dispatchEvent(yEndEvent);
      }

      if (axis === 'left' && value >= i.contentWidth - i.containerWidth) {
        element.scrollLeft = value = i.contentWidth - i.containerWidth; // don't allow scroll past container

        element.dispatchEvent(xEndEvent);
      }

      if (!lastTop) {
        lastTop = element.scrollTop;
      }

      if (!lastLeft) {
        lastLeft = element.scrollLeft;
      }

      if (axis === 'top' && value < lastTop) {
        element.dispatchEvent(upEvent);
      }

      if (axis === 'top' && value > lastTop) {
        element.dispatchEvent(downEvent);
      }

      if (axis === 'left' && value < lastLeft) {
        element.dispatchEvent(leftEvent);
      }

      if (axis === 'left' && value > lastLeft) {
        element.dispatchEvent(rightEvent);
      }

      if (axis === 'top') {
        element.scrollTop = lastTop = value;
        element.dispatchEvent(yEvent);
      }

      if (axis === 'left') {
        element.scrollLeft = lastLeft = value;
        element.dispatchEvent(xEvent);
      }
    };
  }, {
    "./instances": 18
  }],
  21: [function (require, module, exports) {
    'use strict';

    var d = require('../lib/dom'),
        h = require('../lib/helper'),
        instances = require('./instances'),
        updateGeometry = require('./update-geometry'),
        updateScroll = require('./update-scroll');

    module.exports = function (element) {
      var i = instances.get(element);

      if (!i) {
        return;
      } // Recalcuate negative scrollLeft adjustment


      i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0; // Recalculate rail margins

      d.css(i.scrollbarXRail, 'display', 'block');
      d.css(i.scrollbarYRail, 'display', 'block');
      i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
      i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom')); // Hide scrollbars not to affect scrollWidth and scrollHeight

      d.css(i.scrollbarXRail, 'display', 'none');
      d.css(i.scrollbarYRail, 'display', 'none');
      updateGeometry(element); // Update top/left scroll to trigger events

      updateScroll(element, 'top', element.scrollTop);
      updateScroll(element, 'left', element.scrollLeft);
      d.css(i.scrollbarXRail, 'display', '');
      d.css(i.scrollbarYRail, 'display', '');
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]);

/***/ }),

/***/ "./resources/assets/admin/dist/js/custom.min.js":
/*!******************************************************!*\
  !*** ./resources/assets/admin/dist/js/custom.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  "use strict";

  $(".preloader").fadeOut(); // ============================================================== 
  // Theme options
  // ==============================================================     
  // ============================================================== 
  // sidebar-hover
  // ==============================================================

  $(".left-sidebar").hover(function () {
    $(".navbar-header").addClass("expand-logo");
  }, function () {
    $(".navbar-header").removeClass("expand-logo");
  }); // this is for close icon when navigation open in mobile view

  $(".nav-toggler").on('click', function () {
    $("#main-wrapper").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");
  });
  $(".nav-lock").on('click', function () {
    $("body").toggleClass("lock-nav");
    $(".nav-lock i").toggleClass("mdi-toggle-switch-off");
    $("body, .page-wrapper").trigger("resize");
  });
  $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
    $(".app-search").toggle(200);
    $(".app-search input").focus();
  }); // ============================================================== 
  // Right sidebar options
  // ==============================================================

  $(function () {
    $(".service-panel-toggle").on('click', function () {
      $(".customizer").toggleClass('show-service-panel');
    });
    $('.page-wrapper').on('click', function () {
      $(".customizer").removeClass('show-service-panel');
    });
  }); // ============================================================== 
  // This is for the floating labels
  // ============================================================== 

  $('.floating-labels .form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
  }).trigger('blur'); // ============================================================== 
  //tooltip
  // ============================================================== 

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // ============================================================== 
  //Popover
  // ============================================================== 

  $(function () {
    $('[data-toggle="popover"]').popover();
  }); // ============================================================== 
  // Perfact scrollbar
  // ============================================================== 

  $('.message-center, .customizer-body, .scrollable').perfectScrollbar({
    wheelPropagation: !0
  });
  /*var ps = new PerfectScrollbar('.message-body');
  var ps = new PerfectScrollbar('.notifications');
  var ps = new PerfectScrollbar('.scroll-sidebar');
  var ps = new PerfectScrollbar('.customizer-body');*/
  // ============================================================== 
  // Resize all elements
  // ============================================================== 

  $("body, .page-wrapper").trigger("resize");
  $(".page-wrapper").show(); // ============================================================== 
  // To do list
  // ============================================================== 

  $(".list-task li label").click(function () {
    $(this).toggleClass("task-done");
  }); //****************************

  /* This is for the mini-sidebar if width is less then 1170*/
  //**************************** 

  var setsidebartype = function setsidebartype() {
    var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;

    if (width < 1170) {
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    } else {
      $("#main-wrapper").attr("data-sidebartype", "full");
    }
  };

  $(window).ready(setsidebartype);
  $(window).on("resize", setsidebartype); //****************************

  /* This is for sidebartoggler*/
  //****************************

  $('.sidebartoggler').on("click", function () {
    $("#main-wrapper").toggleClass("mini-sidebar");

    if ($("#main-wrapper").hasClass("mini-sidebar")) {
      $(".sidebartoggler").prop("checked", !0);
      $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
    } else {
      $(".sidebartoggler").prop("checked", !1);
      $("#main-wrapper").attr("data-sidebartype", "full");
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/admin/dist/js/jquery-ui.min.js":
/*!*********************************************************!*\
  !*** ./resources/assets/admin/dist/js/jquery-ui.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e;) {
      t = t.parent(), e = t.css("visibility");
    }

    return "hidden" !== e;
  }

  function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent();
    }

    return 0;
  }

  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function () {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", i, o);
  }

  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
  }

  function a(e, i) {
    t.extend(e, i);

    for (var s in i) {
      null == i[s] && (e[s] = i[s]);
    }

    return e;
  }

  function r(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
    };
  }

  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var h = 0,
      l = Array.prototype.slice;
  t.cleanData = function (e) {
    return function (i) {
      var s, n, o;

      for (o = 0; null != (n = i[o]); o++) {
        try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      }

      e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        h = e.split(".")[0];
    e = e.split(".")[1];
    var l = h + "-" + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
      return !!t.data(e, l);
    }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: []
    }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }

        function n(t) {
          return i.prototype[e].apply(this, t);
        }

        return function () {
          var e,
              i = this._super,
              o = this._superApply;
          return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e
    }, r, {
      constructor: o,
      namespace: h,
      widgetName: e,
      widgetFullName: l
    }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
      for (i in n[o]) {
        s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
      }
    }

    return e;
  }, t.widget.bridge = function (e, i) {
    var s = i.prototype.widgetFullName || e;

    t.fn[e] = function (n) {
      var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;
      return o ? this.length || "instance" !== n ? this.each(function () {
        var i,
            o = t.data(this, s);
        return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
        var e = t.data(this, s);
        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
      })), r;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(t) {
          t.target === i && this.destroy();
        }
      }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function destroy() {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(e, i) {
      var s,
          n,
          o,
          a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
          n[s[o]] = n[s[o]] || {}, n = n[s[o]];
        }

        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
        n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = i;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function _setOptions(t) {
      var e;

      for (e in t) {
        this._setOption(e, t[e]);
      }

      return this;
    },
    _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function _setOptionClasses(e) {
      var i, s, n;

      for (i in e) {
        n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(e) {
      function i(i, o) {
        var a, r;

        for (r = 0; i.length > r; r++) {
          a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(e) {
      var i = this;
      t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function _on(e, i, s) {
      var n,
          o = this;
      "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }

        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + o.eventNamespace,
            c = h[2];
        c ? n.on(l, c, r) : i.on(l, r);
      });
    },
    _off: function _off(e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    },
    _delay: function _delay(t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function _hoverable(e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function mouseenter(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function focusin(e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(e, i, s) {
      var n,
          o,
          a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
        n in i || (i[n] = o[n]);
      }
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = {
        effect: n
      });
      var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
    }

    function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }

    function s(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : t.isWindow(i) ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: e.scrollTop(),
          left: e.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: e.outerWidth(),
        height: e.outerHeight(),
        offset: e.offset()
      };
    }

    var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
    t.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;
        var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      },
      getScrollInfo: function getScrollInfo(e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {
          width: o ? t.position.scrollbarWidth() : 0,
          height: n ? t.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: o ? t(e).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: i.outerWidth(),
          height: i.outerHeight()
        };
      }
    }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);
      n = t.extend({}, n);

      var u,
          p,
          f,
          g,
          m,
          _,
          v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};

      return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
        var s,
            r,
            h = t(this),
            l = h.outerWidth(),
            c = h.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = l + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            I = e(k.my, h.outerWidth(), h.outerHeight());

        "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
          marginLeft: d,
          marginTop: _
        }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
            targetWidth: p,
            targetHeight: f,
            elemWidth: l,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: x,
            collisionHeight: C,
            offset: [u[0] + I[0], u[1] + I[1]],
            my: n.my,
            at: n.at,
            within: b,
            elem: h
          });
        }), n.using && (r = function r(t) {
          var e = g.left - D.left,
              i = e + p - l,
              s = g.top - D.top,
              r = s + f - c,
              u = {
            target: {
              element: v,
              left: g.left,
              top: g.top,
              width: p,
              height: f
            },
            element: {
              element: h,
              left: D.left,
              top: D.top,
              width: l,
              height: c
            },
            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
          };
          l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
        }), h.offset(t.extend(D, {
          using: r
        }));
      });
    }, t.ui.position = {
      fit: {
        left: function left(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - a - n;
          e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
        },
        top: function top(t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - a - n;
          e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
        }
      },
      flip: {
        left: function left(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              c = l - h,
              u = l + e.collisionWidth - r - h,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
          0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f));
        },
        top: function top(t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              c = l - h,
              u = l + e.collisionHeight - r - h,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
          0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function left() {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  }(), t.ui.position, t.extend(t.expr[":"], {
    data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, s) {
      return !!t.data(e, s[3]);
    }
  }), t.fn.extend({
    disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    }
  });
  var c = "ui-effects-",
      u = "ui-effects-style",
      d = "ui-effects-animated",
      p = t;
  t.effects = {
    effect: {}
  }, function (t, e) {
    function i(t, e, i) {
      var s = u[e.type] || {};
      return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
    }

    function s(i) {
      var s = l(),
          n = s._rgba = [];
      return i = i.toLowerCase(), f(h, function (t, o) {
        var a,
            r = o.re.exec(i),
            h = r && o.parse(r),
            l = o.space || "rgba";
        return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e;
      }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
    }

    function n(t, e, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }

    var o,
        a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(t) {
        return [t[1], t[2], t[3], t[4]];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(t) {
        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
      }
    }, {
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function parse(t) {
        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
      }
    }, {
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function parse(t) {
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function parse(t) {
        return [t[1], t[2] / 100, t[3] / 100, t[4]];
      }
    }],
        l = t.Color = function (e, i, s, n) {
      return new t.Color.fn.parse(e, i, s, n);
    },
        c = {
      rgba: {
        props: {
          red: {
            idx: 0,
            type: "byte"
          },
          green: {
            idx: 1,
            type: "byte"
          },
          blue: {
            idx: 2,
            type: "byte"
          }
        }
      },
      hsla: {
        props: {
          hue: {
            idx: 0,
            type: "degrees"
          },
          saturation: {
            idx: 1,
            type: "percent"
          },
          lightness: {
            idx: 2,
            type: "percent"
          }
        }
      }
    },
        u = {
      "byte": {
        floor: !0,
        max: 255
      },
      percent: {
        max: 1
      },
      degrees: {
        mod: 360,
        floor: !0
      }
    },
        d = l.support = {},
        p = t("<p>")[0],
        f = t.each;

    p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
      e.cache = "_" + t, e.props.alpha = {
        idx: 3,
        type: "percent",
        def: 1
      };
    }), l.fn = t.extend(l.prototype, {
      parse: function parse(n, a, r, h) {
        if (n === e) return this._rgba = [null, null, null, null], this;
        (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
        var u = this,
            d = t.type(n),
            p = this._rgba = [];
        return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
          p[e.idx] = i(n[e.idx], e);
        }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
          n[e.cache] && (u[e.cache] = n[e.cache].slice());
        }) : f(c, function (e, s) {
          var o = s.cache;
          f(s.props, function (t, e) {
            if (!u[o] && s.to) {
              if ("alpha" === t || null == n[t]) return;
              u[o] = s.to(u._rgba);
            }

            u[o][e.idx] = i(n[t], e, !0);
          }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
        }), this) : e;
      },
      is: function is(t) {
        var i = l(t),
            s = !0,
            n = this;
        return f(c, function (t, o) {
          var a,
              r = i[o.cache];
          return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
          })), s;
        }), s;
      },
      _space: function _space() {
        var t = [],
            e = this;
        return f(c, function (i, s) {
          e[s.cache] && t.push(i);
        }), t.pop();
      },
      transition: function transition(t, e) {
        var s = l(t),
            n = s._space(),
            o = c[n],
            a = 0 === this.alpha() ? l("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            h = r.slice();

        return s = s[o.cache], f(o.props, function (t, n) {
          var o = n.idx,
              a = r[o],
              l = s[o],
              c = u[n.type] || {};
          null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)));
        }), this[n](h);
      },
      blend: function blend(e) {
        if (1 === this._rgba[3]) return this;

        var i = this._rgba.slice(),
            s = i.pop(),
            n = l(e)._rgba;

        return l(t.map(i, function (t, e) {
          return (1 - s) * n[e] + s * t;
        }));
      },
      toRgbaString: function toRgbaString() {
        var e = "rgba(",
            i = t.map(this._rgba, function (t, e) {
          return null == t ? e > 2 ? 1 : 0 : t;
        });
        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
      },
      toHslaString: function toHslaString() {
        var e = "hsla(",
            i = t.map(this.hsla(), function (t, e) {
          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
        });
        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
      },
      toHexString: function toHexString(e) {
        var i = this._rgba.slice(),
            s = i.pop();

        return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
          return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
        }).join("");
      },
      toString: function toString() {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }
    }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e,
          i,
          s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          h = Math.min(s, n, o),
          l = r - h,
          c = r + h,
          u = .5 * c;
      return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a];
    }, c.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;
      return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o];
    }, f(c, function (s, n) {
      var o = n.props,
          a = n.cache,
          h = n.to,
          c = n.from;
      l.fn[s] = function (s) {
        if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
        var n,
            r = t.type(s),
            u = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();
        return f(o, function (t, e) {
          var s = u["object" === r ? t : e.idx];
          null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
        }), c ? (n = l(c(d)), n[a] = d, n) : l(d);
      }, f(o, function (e, i) {
        l.fn[e] || (l.fn[e] = function (n) {
          var o,
              a = t.type(n),
              h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              c = l[i.idx];
          return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
        });
      });
    }), l.hook = function (e) {
      var i = e.split(" ");
      f(i, function (e, i) {
        t.cssHooks[i] = {
          set: function set(e, n) {
            var o,
                a,
                r = "";

            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
              if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) {
                  try {
                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                  } catch (h) {}
                }

                n = n.blend(r && "transparent" !== r ? r : "_default");
              }

              n = n.toRgbaString();
            }

            try {
              e.style[i] = n;
            } catch (h) {}
          }
        }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
        };
      });
    }, l.hook(a), t.cssHooks.borderColor = {
      expand: function expand(t) {
        var e = {};
        return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
          e["border" + s + "Color"] = t;
        }), e;
      }
    }, o = t.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    };
  }(p), function () {
    function e(e) {
      var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
      if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) {
        i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
      } else for (i in n) {
        "string" == typeof n[i] && (o[i] = n[i]);
      }
      return o;
    }

    function i(e, i) {
      var s,
          o,
          a = {};

      for (s in i) {
        o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
      }

      return a;
    }

    var s = ["add", "remove", "toggle"],
        n = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
      t.fx.step[i] = function (t) {
        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0);
      };
    }), t.fn.addBack || (t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.effects.animateClass = function (n, o, a, r) {
      var h = t.speed(o, a, r);
      return this.queue(function () {
        var o,
            a = t(this),
            r = a.attr("class") || "",
            l = h.children ? a.find("*").addBack() : a;
        l = l.map(function () {
          var i = t(this);
          return {
            el: i,
            start: e(this)
          };
        }), o = function o() {
          t.each(s, function (t, e) {
            n[e] && a[e + "Class"](n[e]);
          });
        }, o(), l = l.map(function () {
          return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
        }), a.attr("class", r), l = l.map(function () {
          var e = this,
              i = t.Deferred(),
              s = t.extend({}, h, {
            queue: !1,
            complete: function complete() {
              i.resolve(e);
            }
          });
          return this.el.animate(this.diff, s), i.promise();
        }), t.when.apply(t, l.get()).done(function () {
          o(), t.each(arguments, function () {
            var e = this.el;
            t.each(this.diff, function (t) {
              e.css(t, "");
            });
          }), h.complete.call(a[0]);
        });
      });
    }, t.fn.extend({
      addClass: function (e) {
        return function (i, s, n, o) {
          return s ? t.effects.animateClass.call(this, {
            add: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.addClass),
      removeClass: function (e) {
        return function (i, s, n, o) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, {
            remove: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.removeClass),
      toggleClass: function (e) {
        return function (i, s, n, o, a) {
          return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
            add: i
          } : {
            remove: i
          }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
            toggle: i
          }, s, n, o);
        };
      }(t.fn.toggleClass),
      switchClass: function switchClass(e, i, s, n, o) {
        return t.effects.animateClass.call(this, {
          add: i,
          remove: e
        }, s, n, o);
      }
    });
  }(), function () {
    function e(e, i, s, n) {
      return t.isPlainObject(e) && (i = e, e = e.effect), e = {
        effect: e
      }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
    }

    function i(e) {
      return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != _typeof(e) || e.effect ? !1 : !0 : !0;
    }

    function s(t, e) {
      var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
      return {
        top: parseFloat(o[1]) || 0,
        right: "auto" === o[2] ? i : parseFloat(o[2]),
        bottom: "auto" === o[3] ? s : parseFloat(o[3]),
        left: parseFloat(o[4]) || 0
      };
    }

    t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
      return function (i) {
        return !!t(i).data(d) || e(i);
      };
    }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
      save: function save(t, e) {
        for (var i = 0, s = e.length; s > i; i++) {
          null !== e[i] && t.data(c + e[i], t[0].style[e[i]]);
        }
      },
      restore: function restore(t, e) {
        for (var i, s = 0, n = e.length; n > s; s++) {
          null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i));
        }
      },
      setMode: function setMode(t, e) {
        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
      },
      createWrapper: function createWrapper(e) {
        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
        var i = {
          width: e.outerWidth(!0),
          height: e.outerHeight(!0),
          "float": e.css("float")
        },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
            n = {
          width: e.width(),
          height: e.height()
        },
            o = document.activeElement;

        try {
          o.id;
        } catch (a) {
          o = document.body;
        }

        return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
          position: "relative"
        }), e.css({
          position: "relative"
        })) : (t.extend(i, {
          position: e.css("position"),
          zIndex: e.css("z-index")
        }), t.each(["top", "left", "bottom", "right"], function (t, s) {
          i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
        }), e.css({
          position: "relative",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto"
        })), e.css(n), s.css(i).show();
      },
      removeWrapper: function removeWrapper(e) {
        var i = document.activeElement;
        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
      }
    }), t.extend(t.effects, {
      version: "1.12.1",
      define: function define(e, i, s) {
        return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
      },
      scaledDimensions: function scaledDimensions(t, e, i) {
        if (0 === e) return {
          height: 0,
          width: 0,
          outerHeight: 0,
          outerWidth: 0
        };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;
        return {
          height: t.height() * n,
          width: t.width() * s,
          outerHeight: t.outerHeight() * n,
          outerWidth: t.outerWidth() * s
        };
      },
      clipToBox: function clipToBox(t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top
        };
      },
      unshift: function unshift(t, e, i) {
        var s = t.queue();
        e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function saveStyle(t) {
        t.data(u, t[0].style.cssText);
      },
      restoreStyle: function restoreStyle(t) {
        t[0].style.cssText = t.data(u) || "", t.removeData(u);
      },
      mode: function mode(t, e) {
        var i = t.is(":hidden");
        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
      },
      getBaseline: function getBaseline(t, e) {
        var i, s;

        switch (t[0]) {
          case "top":
            i = 0;
            break;

          case "middle":
            i = .5;
            break;

          case "bottom":
            i = 1;
            break;

          default:
            i = t[0] / e.height;
        }

        switch (t[1]) {
          case "left":
            s = 0;
            break;

          case "center":
            s = .5;
            break;

          case "right":
            s = 1;
            break;

          default:
            s = t[1] / e.width;
        }

        return {
          x: s,
          y: i
        };
      },
      createPlaceholder: function createPlaceholder(e) {
        var i,
            s = e.css("position"),
            n = e.position();
        return e.css({
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
          display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
          visibility: "hidden",
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight"),
          "float": e.css("float")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
          position: s,
          left: n.left,
          top: n.top
        }), i;
      },
      removePlaceholder: function removePlaceholder(t) {
        var e = c + "placeholder",
            i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function cleanUp(e) {
        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
      },
      setTransition: function setTransition(e, i, s, n) {
        return n = n || {}, t.each(i, function (t, i) {
          var o = e.cssUnit(i);
          o[0] > 0 && (n[i] = o[0] * s + o[1]);
        }), n;
      }
    }), t.fn.extend({
      effect: function effect() {
        function i(e) {
          function i() {
            r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
          }

          function a() {
            t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
          }

          var r = t(this);
          s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a);
        }

        var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            r = a || "fx",
            h = s.complete,
            l = s.mode,
            c = [],
            u = function u(e) {
          var i = t(this),
              s = t.effects.mode(i, l) || o;
          i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
        };

        return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
          h && h.call(this);
        }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i);
      },
      show: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "show", this.effect.call(this, n);
        };
      }(t.fn.show),
      hide: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "hide", this.effect.call(this, n);
        };
      }(t.fn.hide),
      toggle: function (t) {
        return function (s) {
          if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "toggle", this.effect.call(this, n);
        };
      }(t.fn.toggle),
      cssUnit: function cssUnit(e) {
        var i = this.css(e),
            s = [];
        return t.each(["em", "px", "%", "pt"], function (t, e) {
          i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
        }), s;
      },
      cssClip: function cssClip(t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
      },
      transfer: function transfer(e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            c = {
          top: l.top - r,
          left: l.left - h,
          height: n.innerHeight(),
          width: n.innerWidth()
        },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
          top: u.top - r,
          left: u.left - h,
          height: s.innerHeight(),
          width: s.innerWidth(),
          position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function () {
          d.remove(), t.isFunction(i) && i();
        });
      }
    }), t.fx.step.clip = function (e) {
      e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
        top: e.pos * (e.end.top - e.start.top) + e.start.top,
        right: e.pos * (e.end.right - e.start.right) + e.start.right,
        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
        left: e.pos * (e.end.left - e.start.left) + e.start.left
      });
    };
  }(), function () {
    var e = {};
    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2);
      };
    }), t.extend(e, {
      Sine: function Sine(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      Circ: function Circ(t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function Elastic(t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      },
      Back: function Back(t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function Bounce(t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) {
          ;
        }

        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      }
    }), t.each(e, function (e, i) {
      t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
        return 1 - i(1 - t);
      }, t.easing["easeInOut" + e] = function (t) {
        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
      };
    });
  }();
  var f = t.effects;
  t.effects.define("blind", "hide", function (e, i) {
    var s = {
      up: ["bottom", "top"],
      vertical: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      horizontal: ["right", "left"],
      right: ["left", "right"]
    },
        n = t(this),
        o = e.direction || "up",
        a = n.cssClip(),
        r = {
      clip: t.extend({}, a)
    },
        h = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("bounce", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = "hide" === r,
        l = "show" === r,
        c = e.direction || "up",
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left",
        _ = "up" === c || "left" === c,
        v = 0,
        b = a.queue().length;

    for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
      opacity: 1
    }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) {
      s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
    }

    h && (s = {
      opacity: 0
    }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1);
  }), t.effects.define("clip", "hide", function (e, i) {
    var s,
        n = {},
        o = t(this),
        a = e.direction || "vertical",
        r = "both" === a,
        h = r || "horizontal" === a,
        l = r || "vertical" === a;
    s = o.cssClip(), n.clip = {
      top: l ? (s.bottom - s.top) / 2 : s.top,
      right: h ? (s.right - s.left) / 2 : s.right,
      bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
      left: h ? (s.right - s.left) / 2 : s.left
    }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("drop", "hide", function (e, i) {
    var s,
        n = t(this),
        o = e.mode,
        a = "show" === o,
        r = e.direction || "left",
        h = "up" === r || "down" === r ? "top" : "left",
        l = "up" === r || "left" === r ? "-=" : "+=",
        c = "+=" === l ? "-=" : "+=",
        u = {
      opacity: 0
    };
    t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("explode", "hide", function (e, i) {
    function s() {
      b.push(this), b.length === u * d && n();
    }

    function n() {
      p.css({
        visibility: "visible"
      }), t(b).remove(), i();
    }

    var o,
        a,
        r,
        h,
        l,
        c,
        u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = "show" === f,
        m = p.show().css("visibility", "hidden").offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];

    for (o = 0; u > o; o++) {
      for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) {
        r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -a * _,
          top: -o * v
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: _,
          height: v,
          left: r + (g ? l * _ : 0),
          top: h + (g ? c * v : 0),
          opacity: g ? 0 : 1
        }).animate({
          left: r + (g ? 0 : l * _),
          top: h + (g ? 0 : c * v),
          opacity: g ? 1 : 0
        }, e.duration || 500, e.easing, s);
      }
    }
  }), t.effects.define("fade", "toggle", function (e, i) {
    var s = "show" === e.mode;
    t(this).css("opacity", s ? 0 : 1).animate({
      opacity: s ? 1 : 0
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("fold", "hide", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        c = l ? ["right", "bottom"] : ["bottom", "right"],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = {
      clip: t.extend({}, p)
    },
        g = {
      clip: t.extend({}, p)
    },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
    h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
    }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4);
  }), t.effects.define("highlight", "show", function (e, i) {
    var s = t(this),
        n = {
      backgroundColor: s.css("backgroundColor")
    };
    "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("size", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = ["fontSize"],
        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        c = e.mode,
        u = "effect" !== c,
        d = e.scale || "both",
        p = e.origin || ["middle", "center"],
        f = a.css("position"),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);

    t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width
      }
    }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
      var i = t(this),
          s = t.effects.scaledDimensions(i),
          o = {
        height: s.height * n.from.y,
        width: s.width * n.from.x,
        outerHeight: s.outerHeight * n.from.y,
        outerWidth: s.outerWidth * n.from.x
      },
          a = {
        height: s.height * n.to.y,
        width: s.width * n.to.x,
        outerHeight: s.height * n.to.y,
        outerWidth: s.width * n.to.x
      };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
        u && t.effects.restoreStyle(i);
      });
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function complete() {
        var e = a.offset();
        0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
      }
    });
  }), t.effects.define("scale", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        a = t.extend(!0, {
      from: t.effects.scaledDimensions(s),
      to: t.effects.scaledDimensions(s, o, e.direction || "both"),
      origin: e.origin || ["middle", "center"]
    }, e);
    e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
  }), t.effects.define("puff", "hide", function (e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
    });
    t.effects.effect.scale.call(this, s, i);
  }), t.effects.define("pulsate", "show", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        c = 0,
        u = 1,
        d = s.queue().length;

    for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) {
      s.animate({
        opacity: c
      }, l, e.easing), c = 1 - c;
    }

    s.animate({
      opacity: c
    }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
  }), t.effects.define("shake", function (e, i) {
    var s = 1,
        n = t(this),
        o = e.direction || "left",
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        c = "up" === o || "down" === o ? "top" : "left",
        u = "up" === o || "left" === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;

    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) {
      n.animate(p, l, e.easing).animate(f, l, e.easing);
    }

    n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1);
  }), t.effects.define("slide", "show", function (e, i) {
    var s,
        n,
        o = t(this),
        a = {
      up: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      right: ["left", "right"]
    },
        r = e.mode,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        c = "up" === h || "left" === h,
        u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
        d = {};
    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  });
  var f;
  t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function (e, i) {
    t(this).transfer(e, i);
  })), t.ui.focusable = function (i, s) {
    var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase();
    return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)));
  }, t.extend(t.expr[":"], {
    focusable: function focusable(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"));
    }
  }), t.ui.focusable, t.fn.form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
  }, t.ui.formResetMixin = {
    _formResetHandler: function _formResetHandler() {
      var e = t(this);
      setTimeout(function () {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function _bindFormResetHandler() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
      }
    },
    _unbindFormResetHandler: function _unbindFormResetHandler() {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    }
  }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
    function s(e, i, s, o) {
      return t.each(n, function () {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
      }), i;
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        o = i.toLowerCase(),
        a = {
      innerWidth: t.fn.innerWidth,
      innerHeight: t.fn.innerHeight,
      outerWidth: t.fn.outerWidth,
      outerHeight: t.fn.outerHeight
    };
    t.fn["inner" + i] = function (e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
        t(this).css(o, s(this, e) + "px");
      });
    }, t.fn["outer" + i] = function (e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
        t(this).css(o, s(this, e, !0, n) + "px");
      });
    };
  }), t.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.escapeSelector = function () {
    var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
    return function (e) {
      return e.replace(t, "\\$1");
    };
  }(), t.fn.labels = function () {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n));
  }, t.fn.scrollParent = function (e) {
    var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
      var e = t(this);
      return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
    }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.extend(t.expr[":"], {
    tabbable: function tabbable(e) {
      var i = t.attr(e, "tabindex"),
          s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s);
    }
  }), t.fn.extend({
    uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }
  }), t.widget("ui.accordion", {
    version: "1.12.1",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function _create() {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : t()
      };
    },
    _createIcons: function _createIcons() {
      var e,
          i,
          s = this.options.icons;
      s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    },
    _destroyIcons: function _destroyIcons() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    },
    _destroy: function _destroy() {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
    },
    _setOption: function _setOption(t, e) {
      return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
    },
    _keydown: function _keydown(e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;

        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(n + 1) % s];
            break;

          case i.LEFT:
          case i.UP:
            o = this.headers[(n - 1 + s) % s];
            break;

          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);

            break;

          case i.HOME:
            o = this.headers[0];
            break;

          case i.END:
            o = this.headers[s - 1];
        }

        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
      }
    },
    _panelKeyDown: function _panelKeyDown(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
    },
    refresh: function refresh() {
      var e = this.options;
      this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function _processPanels() {
      var t = this.headers,
          e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    },
    _refresh: function _refresh() {
      var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var e = t(this),
            i = e.uniqueId().attr("id"),
            s = e.next(),
            n = s.uniqueId().attr("id");
        e.attr("aria-controls", n), s.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
        var i = t(this),
            s = i.css("position");
        "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
      }), this.headers.each(function () {
        e -= t(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
        var i = t(this).is(":visible");
        i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
      }).height(e));
    },
    _activate: function _activate(e) {
      var i = this._findActive(e)[0];

      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function _findActive(e) {
      return "number" == typeof e ? this.headers.eq(e) : t();
    },
    _setupEvents: function _setupEvents(e) {
      var i = {
        keydown: "_keydown"
      };
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function _eventHandler(e) {
      var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          c = o.next(),
          u = {
        oldHeader: o,
        oldPanel: c,
        newHeader: h ? t() : a,
        newPanel: l
      };
      e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
    },
    _toggle: function _toggle(e) {
      var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
        "aria-hidden": "true"
      }), s.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : i.length && this.headers.filter(function () {
        return 0 === parseInt(t(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _animate: function _animate(t, e, i) {
      var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css("box-sizing"),
          l = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {},
          u = l && c.down || c,
          d = function d() {
        a._toggleComplete(i);
      };

      return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function step(t, e) {
          e.now = Math.round(t);
        }
      }), t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: d,
        step: function step(t, i) {
          i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0);
        }
      }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
    },
    _toggleComplete: function _toggleComplete(t) {
      var e = t.oldPanel,
          i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
    }
  }), t.ui.safeActiveElement = function (t) {
    var e;

    try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }

    return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
          t.preventDefault();
        },
        "click .ui-menu-item": function clickUiMenuItem(e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function mouseenterUiMenuItem(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
                s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function blur(e) {
          this._delay(function () {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function click(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function _destroy() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    },
    _keydown: function _keydown(e) {
      var i,
          s,
          n,
          o,
          a = !0;

      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;

        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;

        case t.ui.keyCode.HOME:
          this._move("first", "first", e);

          break;

        case t.ui.keyCode.END:
          this._move("last", "last", e);

          break;

        case t.ui.keyCode.UP:
          this.previous(e);
          break;

        case t.ui.keyCode.DOWN:
          this.next(e);
          break;

        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;

        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;

        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);

          break;

        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;

        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      a && e.preventDefault();
    },
    _activate: function _activate(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    },
    refresh: function refresh() {
      var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");

        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }

      this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    focus: function focus(t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      });
    },
    _scrollIntoView: function _scrollIntoView(e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
    },
    blur: function blur(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function _startOpening(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function _open(e) {
      var i = t.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function collapseAll(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
      }, this.delay);
    },
    _close: function _close(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(e) {
      return !t(e.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function collapse(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function expand(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function next(t) {
      this._move("next", "first", t);
    },
    previous: function previous(t) {
      this._move("prev", "last", t);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function _move(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function nextPage(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
    },
    previousPage: function previousPage(e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
    },
    _filterMenuItems: function _filterMenuItems(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function _create() {
      var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;

          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;

            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;

            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;

            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;

            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;

            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;

            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;

            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function keypress(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;

          if (!i) {
            var n = t.ui.keyCode;

            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);

                break;

              case n.PAGE_DOWN:
                this._move("nextPage", s);

                break;

              case n.UP:
                this._keyEvent("previous", s);

                break;

              case n.DOWN:
                this._keyEvent("next", s);

            }
          }
        },
        input: function input(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
        },
        focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function blur(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function mousedown(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        },
        menufocus: function menufocus(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            t(e.target).trigger(e.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
        },
        menuselect: function menuselect(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
              n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
            this.previous = n, this.selectedItem = s;
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function _isEventTargetInWidget(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    },
    _closeOnClickOutside: function _closeOnClickOutside(t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function _appendTo() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _initSource: function _initSource() {
      var e,
          i,
          s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
        s(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function success(t) {
            n(t);
          },
          error: function error() {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function _searchTimeout(t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;

        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    },
    search: function search(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
    },
    _search: function _search(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response());
    },
    _response: function _response() {
      var e = ++this.requestIndex;
      return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function __response(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function close(t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function _close(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    },
    _change: function _change(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        });
      });
    },
    _suggest: function _suggest(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function _resizeMenu() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(e, i) {
      var s = this;
      t.each(i, function (t, i) {
        s._renderItemData(e, i);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function _renderItem(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    },
    _move: function _move(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function _isContentEditable(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function escapeRegex(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function (t) {
        return s.test(t.label || t.value || t);
      });
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    }
  }), t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function _create() {
      this._enhance();
    },
    _enhance: function _enhance() {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function _destroy() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    },
    _initWidgets: function _initWidgets() {
      var e = this,
          i = [];
      t.each(this.options.items, function (s, n) {
        var o,
            a = {};
        return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
          var e = t(this);
          e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
          classes: {}
        }, e.element.find(n).each(function () {
          var n = t(this),
              o = n[s]("instance"),
              r = t.widget.extend({}, a);

          if ("button" !== s || !n.parent(".ui-spinner").length) {
            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
            var h = n[s]("widget");
            t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]);
          }
        })), void 0) : void 0;
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function _callChildMethod(e) {
      this.childWidgets.each(function () {
        var i = t(this),
            s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function _updateCornerClass(t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
          s = this._buildSimpleOptions(e, "label").classes.label;

      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function _buildSimpleOptions(t, e) {
      var i = "vertical" === this.options.direction,
          s = {
        classes: {}
      };
      return s.classes[e] = {
        middle: "",
        first: "ui-corner-" + (i ? "top" : "left"),
        last: "ui-corner-" + (i ? "bottom" : "right"),
        only: "ui-corner-all"
      }[t], s;
    },
    _spinnerOptions: function _spinnerOptions(t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");

      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
    },
    _buttonOptions: function _buttonOptions(t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function _checkboxradioOptions(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function _selectmenuOptions(t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        }[t]
      };
    },
    _resolveClassesValues: function _resolveClassesValues(e, i) {
      var s = {};
      return t.each(e, function (n) {
        var o = i.options.classes[n] || "";
        o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
      }), s;
    },
    _setOption: function _setOption(t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0);
    },
    refresh: function refresh() {
      var e,
          i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
        var n = e[s]().data("ui-controlgroup-data");

        if (n && i["_" + n.widgetName + "Options"]) {
          var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
          o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
        } else i._updateCornerClass(e[s](), s);
      }), this._callChildMethod("refresh"));
    }
  }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function _getCreateOptions() {
      var e,
          i,
          s = this,
          n = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
      }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n;
    },
    _create: function _create() {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function focus() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
        },
        blur: function blur() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
        }
      });
    },
    _readType: function _readType() {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
    },
    _enhance: function _enhance() {
      this._updateIcon(this.element[0].checked);
    },
    widget: function widget() {
      return this.label;
    },
    _getRadioGroup: function _getRadioGroup() {
      var e,
          i = this.element[0].name,
          s = "input[name='" + t.ui.escapeSelector(i) + "']";
      return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
        return 0 === t(this).form().length;
      }), e.not(this.element)) : t([]);
    },
    _toggleClasses: function _toggleClasses() {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
        var e = t(this).checkboxradio("instance");
        e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    },
    _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    },
    _setOption: function _setOption(t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0;
    },
    _updateIcon: function _updateIcon(e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    },
    _updateLabel: function _updateLabel() {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
    },
    refresh: function refresh() {
      var t = this.element[0].checked,
          e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
        disabled: e
      });
    }
  }]), t.ui.checkboxradio, t.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function _getCreateOptions() {
      var t,
          e = this._super() || {};
      return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
    },
    _create: function _create() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function keyup(e) {
          e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
        }
      });
    },
    _enhance: function _enhance() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function _updateTooltip() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    },
    _updateIcon: function _updateIcon(e, i) {
      var s = "iconPosition" !== e,
          n = s ? this.options.iconPosition : i,
          o = "top" === n || "bottom" === n;
      this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n));
    },
    _destroy: function _destroy() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function _attachIconSpace(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function _attachIcon(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function _setOptions(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function _setOption(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur());
    },
    refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
        disabled: t
      }), this._updateTooltip();
    }
  }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function _create() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    },
    _setOption: function _setOption(t, e) {
      return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0);
    }
  }), t.fn.button = function (e) {
    return function () {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
        icon: !1
      }) : this.checkboxradio.apply(this, arguments));
    };
  }(t.fn.button), t.fn.buttonset = function () {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == _typeof(arguments[0]) && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments));
  }), t.ui.button, t.extend(t.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var m;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },
    setDefaults: function setDefaults(t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function _attachDatepicker(e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    },
    _newInst: function _newInst(e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function _connectDatepicker(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function _attachments(e, i) {
      var s,
          n,
          o,
          a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");

      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: o,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
        src: o,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
      }));
    },
    _autoSize: function _autoSize(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");

        a.match(/[DM]/) && (e = function e(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) {
            t[n].length > i && (i = t[n].length, s = n);
          }

          return s;
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function _inlineDatepicker(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function _dialogDatepicker(e, i, s, n, o) {
      var r,
          h,
          l,
          c,
          u,
          d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
    },
    _destroyDatepicker: function _destroyDatepicker(e) {
      var i,
          s = t(e),
          n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null));
    },
    _enableDatepicker: function _enableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    },
    _disableDatepicker: function _disableDatepicker(e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    },
    _isDisabledDatepicker: function _isDisabledDatepicker(t) {
      if (!t) return !1;

      for (var e = 0; this._disabledInputs.length > e; e++) {
        if (this._disabledInputs[e] === t) return !0;
      }

      return !1;
    },
    _getInst: function _getInst(e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function _optionDatepicker(e, i, s) {
      var n,
          o,
          r,
          h,
          l = this._getInst(e);

      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
    },
    _changeDatepicker: function _changeDatepicker(t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function _refreshDatepicker(t) {
      var e = this._getInst(t);

      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function _setDateDatepicker(t, e) {
      var i = this._getInst(t);

      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function _getDateDatepicker(t, e) {
      var i = this._getInst(t);

      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function _doKeyDown(e) {
      var i,
          s,
          n,
          o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");

      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;

        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;

        case 27:
          t.datepicker._hideDatepicker();

          break;

        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        default:
          a = !1;
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function _doKeyPress(e) {
      var i,
          s,
          n = t.datepicker._getInst(e.target);

      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    },
    _doKeyUp: function _doKeyUp(e) {
      var i,
          s = t.datepicker._getInst(e.target);

      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
      } catch (n) {}
      return !0;
    },
    _showDatepicker: function _showDatepicker(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
          return r |= "fixed" === t(this).css("position"), !r;
        }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
      }
    },
    _updateDatepicker: function _updateDatepicker(e) {
      this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);

      var i,
          s = this._getNumberOfMonths(e),
          n = s[1],
          a = 17,
          r = e.dpDiv.find("." + this._dayOverClass + " a");

      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function _shouldFocusInput(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    },
    _checkOffset: function _checkOffset(e, i, s) {
      var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
          l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i;
    },
    _findPos: function _findPos(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
        e = e[n ? "previousSibling" : "nextSibling"];
      }

      return i = t(e).offset(), [i.left, i.top];
    },
    _hideDatepicker: function _hideDatepicker(e) {
      var i,
          s,
          n,
          o,
          a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
        t.datepicker._tidyDialog(a);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function _tidyDialog(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function _checkExternalClick(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
            s = t.datepicker._getInst(i[0]);

        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function _adjustDate(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
    },
    _gotoToday: function _gotoToday(e) {
      var i,
          s = t(e),
          n = this._getInst(s[0]);

      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    },
    _selectMonthYear: function _selectMonthYear(e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
    },
    _selectDay: function _selectDay(e, i, s, n) {
      var o,
          a = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function _clearDate(e) {
      var i = t(e);

      this._selectDate(i, "");
    },
    _selectDate: function _selectDate(e, i) {
      var s,
          n = t(e),
          o = this._getInst(n[0]);

      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
    },
    _updateAlternate: function _updateAlternate(e) {
      var i,
          s,
          n,
          o = this._get(e, "altField");

      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
    },
    noWeekends: function noWeekends(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    },
    iso8601Week: function iso8601Week(t) {
      var e,
          i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    },
    parseDate: function parseDate(e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == _typeof(i) ? "" + i : i + "", "" === i) return null;

      var n,
          o,
          a,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
          u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          g = -1,
          m = -1,
          _ = -1,
          v = -1,
          b = !1,
          y = function y(t) {
        var i = e.length > n + 1 && e.charAt(n + 1) === t;
        return i && n++, i;
      },
          w = function w(t) {
        var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);
        if (!a) throw "Missing number at position " + h;
        return h += a[0].length, parseInt(a[0], 10);
      },
          k = function k(e, s, n) {
        var o = -1,
            a = t.map(y(e) ? n : s, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });
        if (t.each(a, function (t, e) {
          var s = e[1];
          return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0;
        }), -1 !== o) return o + 1;
        throw "Unknown name at position " + h;
      },
          x = function x() {
        if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
        h++;
      };

      for (n = 0; e.length > n; n++) {
        if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;else switch (e.charAt(n)) {
          case "d":
            _ = w("d");
            break;

          case "D":
            k("D", u, d);
            break;

          case "o":
            v = w("o");
            break;

          case "m":
            m = w("m");
            break;

          case "M":
            m = k("M", p, f);
            break;

          case "y":
            g = w("y");
            break;

          case "@":
            r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;

          case "!":
            r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;

          case "'":
            y("'") ? x() : b = !0;
            break;

          default:
            x();
        }
      }

      if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v;;) {
        if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
        m++, _ -= o;
      }
      if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function formatDate(t, e, i) {
      if (!e) return "";

      var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function h(e) {
        var i = t.length > s + 1 && t.charAt(s + 1) === e;
        return i && s++, i;
      },
          l = function l(t, e, i) {
        var s = "" + e;
        if (h(t)) for (; i > s.length;) {
          s = "0" + s;
        }
        return s;
      },
          c = function c(t, e, i, s) {
        return h(t) ? s[e] : i[e];
      },
          u = "",
          d = !1;

      if (e) for (s = 0; t.length > s; s++) {
        if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;else switch (t.charAt(s)) {
          case "d":
            u += l("d", e.getDate(), 2);
            break;

          case "D":
            u += c("D", e.getDay(), n, o);
            break;

          case "o":
            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;

          case "m":
            u += l("m", e.getMonth() + 1, 2);
            break;

          case "M":
            u += c("M", e.getMonth(), a, r);
            break;

          case "y":
            u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
            break;

          case "@":
            u += e.getTime();
            break;

          case "!":
            u += 1e4 * e.getTime() + this._ticksTo1970;
            break;

          case "'":
            h("'") ? u += "'" : d = !0;
            break;

          default:
            u += t.charAt(s);
        }
      }
      return u;
    },
    _possibleChars: function _possibleChars(t) {
      var e,
          i = "",
          s = !1,
          n = function n(i) {
        var s = t.length > e + 1 && t.charAt(e + 1) === i;
        return s && e++, s;
      };

      for (e = 0; t.length > e; e++) {
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;

          case "D":
          case "M":
            return null;

          case "'":
            n("'") ? i += "'" : s = !0;
            break;

          default:
            i += t.charAt(e);
        }
      }

      return i;
    },
    _get: function _get(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function _setDateFromField(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);

        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }

        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function _getDefaultDate(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    },
    _determineDate: function _determineDate(e, i, s) {
      var n = function n(t) {
        var e = new Date();
        return e.setDate(e.getDate() + t), e;
      },
          o = function o(i) {
        try {
          return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
        } catch (s) {}

        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
          switch (l[2] || "d") {
            case "d":
            case "D":
              r += parseInt(l[1], 10);
              break;

            case "w":
            case "W":
              r += 7 * parseInt(l[1], 10);
              break;

            case "m":
            case "M":
              a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
              break;

            case "y":
            case "Y":
              o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
          }

          l = h.exec(i);
        }

        return new Date(o, a, r);
      },
          a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());

      return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
    },
    _daylightSavingAdjust: function _daylightSavingAdjust(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function _setDate(t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));

      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function _getDate(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function _attachHandlers(e) {
      var i = this._get(e, "stepMonths"),
          s = "#" + e.id.replace(/\\\\/g, "\\");

      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function prev() {
            t.datepicker._adjustDate(s, -i, "M");
          },
          next: function next() {
            t.datepicker._adjustDate(s, +i, "M");
          },
          hide: function hide() {
            t.datepicker._hideDatepicker();
          },
          today: function today() {
            t.datepicker._gotoToday(s);
          },
          selectDay: function selectDay() {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function selectMonth() {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function selectYear() {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function _generateHTML(t) {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          k,
          x,
          C,
          D,
          I,
          T,
          P,
          M,
          S,
          H,
          z,
          O,
          A,
          N,
          W,
          E,
          F,
          L,
          R = new Date(),
          B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          Y = this._get(t, "isRTL"),
          j = this._get(t, "showButtonPanel"),
          q = this._get(t, "hideIfNoPrevNext"),
          K = this._get(t, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"),
          $ = this._get(t, "stepMonths"),
          X = 1 !== U[0] || 1 !== U[1],
          G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          Q = this._getMinMaxDate(t, "min"),
          J = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - V,
          te = t.drawYear;

      if (0 > Z && (Z += 12, te--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
        Z--, 0 > Z && (Z = 11, te--);
      }

      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
            if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
              case 0:
                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                break;

              case U[1] - 1:
                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                break;

              default:
                T += " ui-datepicker-group-middle", I = "";
            }
            T += "'>";
          }

          for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
            M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
          }

          for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
            for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) {
              E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
            }

            T += W + "</tr>";
          }

          Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T;
        }

        y += x;
      }

      return y += l, t._keyEvent = !1, y;
    },
    _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
      var h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m = this._get(t, "changeMonth"),
          _ = this._get(t, "changeYear"),
          v = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          y = "";

      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) {
          (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        }

        y += "</select>";
      }
      if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(e) ? d : e;
        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) {
          t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        }

        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
      }
      return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
    },
    _adjustInstDate: function _adjustInstDate(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));

      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
    },
    _restrictMinMax: function _restrictMinMax(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = i && i > e ? i : e;

      return s && n > s ? s : n;
    },
    _notifyChange: function _notifyChange(t) {
      var e = this._get(t, "onChangeMonthYear");

      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function _getNumberOfMonths(t) {
      var e = this._get(t, "numberOfMonths");

      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function _getMinMaxDate(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function _getDaysInMonth(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));

      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    },
    _isInRange: function _isInRange(t, e) {
      var i,
          s,
          n = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          h = this._get(t, "yearRange");

      return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
    },
    _getFormatConfig: function _getFormatConfig(t) {
      var e = this._get(t, "shortYearCutoff");

      return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      };
    },
    _formatDate: function _formatDate(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == _typeof(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
    }
  }), t.fn.datepicker = function (e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
  }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());

  var _ = !1;

  t(document).on("mouseup", function () {
    _ = !1;
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(e) {
      if (!_) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
            s = 1 === e.which,
            n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }

      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), t.ui.plugin = {
    add: function add(e, i, s) {
      var n,
          o = t.ui[e].prototype;

      for (n in s) {
        o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
      }
    },
    call: function call(t, e, i, s) {
      var n,
          o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) {
        t.options[o[n][0]] && o[n][1].apply(t.element, i);
      }
    }
  }, t.ui.safeBlur = function (e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
  }, t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
    },
    _mouseCapture: function _mouseCapture(e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    },
    _blockFrames: function _blockFrames(e) {
      this.iframeBlocks = this.document.find(e).map(function () {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function _blurActiveElement(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i);
    },
    _mouseStart: function _mouseStart(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === t(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    },
    _refreshOffsets: function _refreshOffsets(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();

        if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
        this.position = s.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    },
    _mouseStop: function _mouseStop(e) {
      var i = this,
          s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", e) !== !1 && i._clear();
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
    },
    _mouseUp: function _mouseUp(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this;
    },
    _getHandle: function _getHandle(e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    },
    _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _isRootNode: function _isRootNode(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      var e = this.offsetParent.offset(),
          i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);

      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    },
    _convertPositionTo: function _convertPositionTo(t, e) {
      e || (e = this.position);

      var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);

      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      };
    },
    _generatePosition: function _generatePosition(t, e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;

      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _trigger: function _trigger(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.sortables = [], t(s.options.connectToSortable).each(function () {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
      });
    },
    stop: function stop(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
        var t = this;
        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n));
      });
    },
    drag: function drag(e, i, s) {
      t.each(s.sortables, function () {
        var n = !1,
            o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n;
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), t.ui.plugin.add("draggable", "cursor", {
    start: function start(e, i, s) {
      var n = t("body"),
          o = s.options;
      n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._cursor && t("body").css("cursor", n._cursor);
    }
  }), t.ui.plugin.add("draggable", "opacity", {
    start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css("opacity", n._opacity);
    }
  }), t.ui.plugin.add("draggable", "scroll", {
    start: function start(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function drag(e, i, s) {
      var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
      a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
    }
  }), t.ui.plugin.add("draggable", "snap", {
    start: function start(e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var e = t(this),
            i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left
        });
      });
    },
    drag: function drag(e, i, s) {
      var n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;

      for (d = s.snapElements.length - 1; d >= 0; d--) {
        h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
          snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
          top: c - s.helperProportions.height,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u,
          left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h - s.helperProportions.width
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
          top: c,
          left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
          top: u - s.helperProportions.height,
          left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l - s.helperProportions.width
        }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
          snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = n || o || a || r || p);
      }
    }
  }), t.ui.plugin.add("draggable", "stack", {
    start: function start(e, i, s) {
      var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
      });
      a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
        t(this).css("zIndex", n + e);
      }), this.css("zIndex", n + a.length));
    }
  }), t.ui.plugin.add("draggable", "zIndex", {
    start: function start(e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
    },
    stop: function stop(e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css("zIndex", n._zIndex);
    }
  }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function _num(t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function _isNumber(t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function _hasScroll(e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;
      return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
    },
    _create: function _create() {
      var e,
          i = this.options,
          s = this;
      this._addClass("ui-resizable"), t.extend(this, {
        _aspectRatio: !!i.aspectRatio,
        aspectRatio: i.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
        i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
      }).on("mouseleave", function () {
        i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
      }), this._mouseInit();
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      var e,
          i = function i(e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      };

      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
        position: e.css("position"),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css("top"),
        left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    },
    _setOption: function _setOption(t, e) {
      switch (this._super(t, e), t) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;

        default:
      }
    },
    _setupHandles: function _setupHandles() {
      var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this;
      if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) {
        e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
          zIndex: a.zIndex
        }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      }
      this._renderAxis = function (e) {
        var i, s, n, o;
        e = e || this.element;

        for (i in this.handles) {
          this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
            mousedown: r._mouseDown
          })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se");
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function _removeHandles() {
      this._handles.remove();
    },
    _mouseCapture: function _mouseCapture(e) {
      var i,
          s,
          n = !1;

      for (i in this.handles) {
        s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
      }

      return !this.options.disabled && n;
    },
    _mouseStart: function _mouseStart(e) {
      var i,
          s,
          n,
          o = this.options,
          a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: a.width(),
        height: a.height()
      }, this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight()
      } : {
        width: a.width(),
        height: a.height()
      }, this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: e.pageX,
        top: e.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
    },
    _mouseDrag: function _mouseDrag(e) {
      var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1;
    },
    _mouseStop: function _mouseStop(e) {
      this.resizing = !1;
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          c = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
        width: c.helper.width() - o,
        height: c.helper.height() - n
      }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
        top: h,
        left: r
      })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function _applyChanges() {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(t) {
      var e,
          i,
          s,
          n,
          o,
          a = this.options;
      o = {
        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o;
    },
    _updateCache: function _updateCache(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function _updateRatio(t) {
      var e = this.position,
          i = this.size,
          s = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
    },
    _respectSize: function _respectSize(t) {
      var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    },
    _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) {
        i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
      }

      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      };
    },
    _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) {
        t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        });
      }
    },
    _renderProxy: function _renderProxy() {
      var e = this.element,
          i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function e(t, _e) {
        return {
          width: this.originalSize.width + _e
        };
      },
      w: function w(t, e) {
        var i = this.originalSize,
            s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e
        };
      },
      n: function n(t, e, i) {
        var s = this.originalSize,
            n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        };
      },
      s: function s(t, e, i) {
        return {
          height: this.originalSize.height + i
        };
      },
      se: function se(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      },
      sw: function sw(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      },
      ne: function ne(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      },
      nw: function nw(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      }
    },
    _propagate: function _propagate(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), t.ui.plugin.add("resizable", "animate", {
    stop: function stop(e) {
      var i = t(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = {
        width: i.size.width - r,
        height: i.size.height - a
      },
          l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function step() {
          var s = {
            width: parseFloat(i.element.css("width")),
            height: parseFloat(i.element.css("height")),
            top: parseFloat(i.element.css("top")),
            left: parseFloat(i.element.css("left"))
          };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", e);
        }
      });
    }
  }), t.ui.plugin.add("resizable", "containment", {
    start: function start() {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable("instance"),
          l = h.options,
          c = h.element,
          u = l.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
      d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: t(document),
        left: 0,
        top: 0,
        width: t(document).width(),
        height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
        i[t] = h._num(e.css("padding" + s));
      }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
        height: e.innerHeight() - i[3],
        width: e.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
        element: d,
        left: s.left,
        top: s.top,
        width: a,
        height: r
      }));
    },
    resize: function resize(e) {
      var i,
          s,
          n,
          o,
          a = t(this).resizable("instance"),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          c = a._aspectRatio || e.shiftKey,
          u = {
        top: 0,
        left: 0
      },
          d = a.containerElement,
          p = !0;
      d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
    },
    stop: function stop() {
      var e = t(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      });
    }
  }), t.ui.plugin.add("resizable", "alsoResize", {
    start: function start() {
      var e = t(this).resizable("instance"),
          i = e.options;
      t(i.alsoResize).each(function () {
        var e = t(this);
        e.data("ui-resizable-alsoresize", {
          width: parseFloat(e.width()),
          height: parseFloat(e.height()),
          left: parseFloat(e.css("left")),
          top: parseFloat(e.css("top"))
        });
      });
    },
    resize: function resize(e, i) {
      var s = t(this).resizable("instance"),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
        height: s.size.height - o.height || 0,
        width: s.size.width - o.width || 0,
        top: s.position.top - a.top || 0,
        left: s.position.left - a.left || 0
      };
      t(n.alsoResize).each(function () {
        var e = t(this),
            s = t(this).data("ui-resizable-alsoresize"),
            n = {},
            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        t.each(o, function (t, e) {
          var i = (s[e] || 0) + (r[e] || 0);
          i && i >= 0 && (n[e] = i || null);
        }), e.css(n);
      });
    },
    stop: function stop() {
      t(this).removeData("ui-resizable-alsoresize");
    }
  }), t.ui.plugin.add("resizable", "ghost", {
    start: function start() {
      var e = t(this).resizable("instance"),
          i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: i.height,
        width: i.width,
        margin: 0,
        left: 0,
        top: 0
      }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
    },
    resize: function resize() {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({
        position: "relative",
        height: e.size.height,
        width: e.size.width
      });
    },
    stop: function stop() {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    }
  }), t.ui.plugin.add("resizable", "grid", {
    resize: function resize() {
      var e,
          i = t(this).resizable("instance"),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          c = h[1] || 1,
          u = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / c) * c,
          p = o.width + u,
          f = o.height + d,
          g = s.maxWidth && p > s.maxWidth,
          m = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f;

      s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
    }
  }), t.ui.resizable, t.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function using(e) {
          var i = t(this).css(e).offset().top;
          0 > i && t(this).css("top", e.top - i);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function _create() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    },
    _init: function _init() {
      this.options.autoOpen && this.open();
    },
    _appendTo: function _appendTo() {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
    },
    _destroy: function _destroy() {
      var t,
          e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    },
    widget: function widget() {
      return this.uiDialog;
    },
    disable: t.noop,
    enable: t.noop,
    close: function close(e) {
      var i = this;
      this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        i._trigger("close", e);
      }));
    },
    isOpen: function isOpen() {
      return this._isOpen;
    },
    moveToTop: function moveToTop() {
      this._moveToTop();
    },
    _moveToTop: function _moveToTop(e, i) {
      var s = !1,
          n = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +t(this).css("z-index");
      }).get(),
          o = Math.max.apply(null, n);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s;
    },
    open: function open() {
      var e = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        e._focusTabbable(), e._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"), void 0);
    },
    _focusTabbable: function _focusTabbable() {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
    },
    _keepFocus: function _keepFocus(e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
        i || this._focusTabbable();
      }

      e.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function _createWrapper() {
      this.uiDialog = t("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function keydown(e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;

          if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");
            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
              n.trigger("focus");
            }), e.preventDefault()) : (this._delay(function () {
              s.trigger("focus");
            }), e.preventDefault());
          }
        },
        mousedown: function mousedown(t) {
          this._moveToTop(t) && this._focusTabbable();
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      });
    },
    _createTitlebar: function _createTitlebar() {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function mousedown(e) {
          t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
        }
      }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
        label: t("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function click(t) {
          t.preventDefault(), this.close(t);
        }
      }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": e.attr("id")
      });
    },
    _title: function _title(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    },
    _createButtons: function _createButtons() {
      var e = this,
          i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
        var n, o;
        s = t.isFunction(s) ? {
          click: s,
          text: i
        } : s, s = t.extend({
          type: "button"
        }, s), n = s.click, o = {
          icon: s.icon,
          iconPosition: s.iconPosition,
          showLabel: s.showLabel,
          icons: s.icons,
          text: s.text
        }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
          n.apply(e.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    },
    _makeDraggable: function _makeDraggable() {
      function e(t) {
        return {
          position: t.position,
          offset: t.offset
        };
      }

      var i = this,
          s = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function start(s, n) {
          i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
        },
        drag: function drag(t, s) {
          i._trigger("drag", t, e(s));
        },
        stop: function stop(n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();
          s.position = {
            my: "left top",
            at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
        }
      });
    },
    _makeResizable: function _makeResizable() {
      function e(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size
        };
      }

      var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: a,
        start: function start(s, n) {
          i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
        },
        resize: function resize(t, s) {
          i._trigger("resize", t, e(s));
        },
        stop: function stop(n, o) {
          var a = i.uiDialog.offset(),
              r = a.left - i.document.scrollLeft(),
              h = a.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: "left top",
            at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
        }
      }).css("position", o);
    },
    _trackFocus: function _trackFocus() {
      this._on(this.widget(), {
        focusin: function focusin(e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target);
        }
      });
    },
    _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function _untrackInstance() {
      var e = this._trackingInstances(),
          i = t.inArray(this, e);

      -1 !== i && e.splice(i, 1);
    },
    _trackingInstances: function _trackingInstances() {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
    },
    _minHeight: function _minHeight() {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    },
    _position: function _position() {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    },
    _setOptions: function _setOptions(e) {
      var i = this,
          s = !1,
          n = {};
      t.each(e, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    },
    _setOption: function _setOption(e, i) {
      var s,
          n,
          o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
        label: t("<a>").text("" + this.options.closeText).html()
      }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function _size() {
      var t,
          e,
          i,
          s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var e = t(this);
        return t("<div>").css({
          position: "absolute",
          width: e.outerWidth(),
          height: e.outerHeight()
        }).appendTo(e.parent()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function _allowInteraction(e) {
      return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function _createOverlay() {
      if (this.options.modal) {
        var e = !0;
        this._delay(function () {
          e = !1;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function focusin(t) {
            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          }
        }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    },
    _destroyOverlay: function _destroyOverlay() {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;
        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
      }
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function _createWrapper() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    },
    _setOption: function _setOption(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
    }
  }), t.ui.dialog, t.widget("ui.droppable", {
    version: "1.12.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function _create() {
      var e,
          i = this.options,
          s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
        return t.is(s);
      }, this.proportions = function () {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function _addToManager(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
    },
    _splice: function _splice(t) {
      for (var e = 0; t.length > e; e++) {
        t[e] === this && t.splice(e, 1);
      }
    },
    _destroy: function _destroy() {
      var e = t.ui.ddmanager.droppables[this.options.scope];

      this._splice(e);
    },
    _setOption: function _setOption(e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
        return t.is(i);
      };else if ("scope" === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i);
      }

      this._super(e, i);
    },
    _activate: function _activate(e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
    },
    _deactivate: function _deactivate(e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
    },
    _over: function _over(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
    },
    _out: function _out(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
    },
    _drop: function _drop(e, i) {
      var s = i || t.ui.ddmanager.current,
          n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = t(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
          offset: i.element.offset()
        }), i.options.tolerance, e) ? (n = !0, !1) : void 0;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1;
    },
    ui: function ui(t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      };
    },
    _addHoverClass: function _addHoverClass() {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function _removeHoverClass() {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function _addActiveClass() {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function _removeActiveClass() {
      this._removeClass("ui-droppable-active");
    }
  });

  var v = t.ui.intersect = function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }

    return function (e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          h = a + e.helperProportions.height,
          l = i.offset.left,
          c = i.offset.top,
          u = l + i.proportions().width,
          d = c + i.proportions().height;

      switch (s) {
        case "fit":
          return o >= l && u >= r && a >= c && d >= h;

        case "intersect":
          return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;

        case "pointer":
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);

        case "touch":
          return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);

        default:
          return !1;
      }
    };
  }();

  t.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function prepareOffsets(e, i) {
      var s,
          n,
          o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();

      t: for (s = 0; o.length > s; s++) {
        if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; r.length > n; n++) {
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t;
            }
          }

          o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
            width: o[s].element[0].offsetWidth,
            height: o[s].element[0].offsetHeight
          }));
        }
      }
    },
    drop: function drop(e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    },
    dragStart: function dragStart(e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function drag(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s,
              n,
              o,
              a = v(e, this, this.options.tolerance, i),
              r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
          r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
            return t(this).droppable("instance").options.scope === n;
          }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    },
    dragStop: function dragStop(e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    }
  }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1
    },
    _addActiveClass: function _addActiveClass() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    },
    _removeActiveClass: function _removeActiveClass() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    },
    _addHoverClass: function _addHoverClass() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    },
    _removeHoverClass: function _removeHoverClass() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    }
  }), t.ui.droppable, t.widget("ui.progressbar", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-progressbar": "ui-corner-all",
        "ui-progressbar-value": "ui-corner-left",
        "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    },
    _destroy: function _destroy() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    },
    value: function value(t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0);
    },
    _constrainedValue: function _constrainedValue(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
    },
    _setOptions: function _setOptions(t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    },
    _setOption: function _setOption(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function _refreshValue() {
      var e = this.options.value,
          i = this._percentage();

      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete");
    }
  }), t.widget("ui.selectable", t.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function _create() {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
          var i = t(this),
              s = i.offset(),
              n = {
            left: s.left - e.elementPos.left,
            top: s.top - e.elementPos.top
          };
          t.data(this, "selectable-item", {
            element: this,
            $element: i,
            left: n.left,
            top: n.top,
            right: n.left + i.outerWidth(),
            bottom: n.top + i.outerHeight(),
            startselected: !1,
            selected: i.hasClass("ui-selected"),
            selecting: i.hasClass("ui-selecting"),
            unselecting: i.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    },
    _destroy: function _destroy() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    },
    _mouseStart: function _mouseStart(e) {
      var i = this,
          s = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var s = t.data(this, "selectable-item");
        s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
          unselecting: s.element
        }));
      }), t(e.target).parents().addBack().each(function () {
        var s,
            n = t.data(this, "selectable-item");
        return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
          selecting: n.element
        }) : i._trigger("unselecting", e, {
          unselecting: n.element
        }), !1) : void 0;
      }));
    },
    _mouseDrag: function _mouseDrag(e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
        return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
          left: o,
          top: a,
          width: r - o,
          height: h - a
        }), this.selectees.each(function () {
          var i = t.data(this, "selectable-item"),
              l = !1,
              c = {};
          i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
            selecting: i.element
          }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
            unselecting: i.element
          }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
            unselecting: i.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function _mouseStop(e) {
      var i = this;
      return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
          unselected: s.element
        });
      }), t(".ui-selecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
          selected: s.element
        });
      }), this._trigger("stop", e), this.helper.remove(), !1;
    }
  }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
    version: "1.12.1",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function _create() {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t();
    },
    _drawButton: function _drawButton() {
      var e,
          i = this,
          s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);

      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function click(t) {
          this.button.focus(), t.preventDefault();
        }
      }), this.element.hide(), this.button = t("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        i._rendered || i._refreshMenu();
      });
    },
    _drawMenu: function _drawMenu() {
      var e = this;
      this.menu = t("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function select(t, i) {
          t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
        },
        focus: function focus(t, i) {
          var s = i.item.data("ui-selectmenu-item");
          null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
            item: s
          }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    },
    refresh: function refresh() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    },
    _refreshMenu: function _refreshMenu() {
      var t,
          e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    },
    open: function open(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
    },
    _position: function _position() {
      this.menuWrap.position(t.extend({
        of: this.button
      }, this.options.position));
    },
    close: function close(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
    },
    widget: function widget() {
      return this.button;
    },
    menuWidget: function menuWidget() {
      return this.menu;
    },
    _renderButtonItem: function _renderButtonItem(e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
    },
    _renderMenu: function _renderMenu(e, i) {
      var s = this,
          n = "";
      t.each(i, function (i, o) {
        var a;
        o.optgroup !== n && (a = t("<li>", {
          text: o.optgroup
        }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e);
    },
    _renderItem: function _renderItem(e, i) {
      var s = t("<li>"),
          n = t("<div>", {
        title: i.element.attr("title")
      });
      return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e);
    },
    _setText: function _setText(t, e) {
      e ? t.text(e) : t.html("&#160;");
    },
    _move: function _move(t, e) {
      var i,
          s,
          n = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s);
    },
    _getSelectedItem: function _getSelectedItem() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    },
    _toggle: function _toggle(t) {
      this[this.isOpen ? "close" : "open"](t);
    },
    _setSelection: function _setSelection() {
      var t;
      this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
    },
    _documentClick: {
      mousedown: function mousedown(e) {
        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
      }
    },
    _buttonEvents: {
      mousedown: function mousedown() {
        var t;
        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange();
      },
      click: function click(t) {
        this._setSelection(), this._toggle(t);
      },
      keydown: function keydown(e) {
        var i = !0;

        switch (e.keyCode) {
          case t.ui.keyCode.TAB:
          case t.ui.keyCode.ESCAPE:
            this.close(e), i = !1;
            break;

          case t.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);
            break;

          case t.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);
            break;

          case t.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);
            break;

          case t.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
            break;

          case t.ui.keyCode.LEFT:
            this._move("prev", e);

            break;

          case t.ui.keyCode.RIGHT:
            this._move("next", e);

            break;

          case t.ui.keyCode.HOME:
          case t.ui.keyCode.PAGE_UP:
            this._move("first", e);

            break;

          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_DOWN:
            this._move("last", e);

            break;

          default:
            this.menu.trigger(e), i = !1;
        }

        i && e.preventDefault();
      }
    },
    _selectFocusedItem: function _selectFocusedItem(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
    },
    _select: function _select(t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
        item: t
      }), t.index !== i && this._trigger("change", e, {
        item: t
      }), this.close(e);
    },
    _setAria: function _setAria(t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
        "aria-labelledby": e,
        "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e);
    },
    _setOption: function _setOption(t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");

        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
      }

      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    },
    _appendTo: function _appendTo() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _toggleAttr: function _toggleAttr() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function _resizeButton() {
      var t = this.options.width;
      return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0);
    },
    _resizeMenu: function _resizeMenu() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    },
    _getCreateOptions: function _getCreateOptions() {
      var t = this._super();

      return t.disabled = this.element.prop("disabled"), t;
    },
    _parseOptions: function _parseOptions(e) {
      var i = this,
          s = [];
      e.each(function (e, n) {
        s.push(i._parseOption(t(n), e));
      }), this.items = s;
    },
    _parseOption: function _parseOption(t, e) {
      var i = t.parent("optgroup");
      return {
        element: t,
        index: e,
        value: t.val(),
        label: t.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || t.prop("disabled")
      };
    },
    _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    }
  }]), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];

      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
        a.push(o);
      }

      this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
      });
    },
    _createRange: function _createRange() {
      var e = this.options;
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this,
          u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e);
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - h.left - o.width() / 2,
        top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var e = {
        x: t.pageX,
        y: t.pageY
      },
          i = this._normValueFromMouse(e);

      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop: function _mouseStop(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(t) {
      var e, i, s, n, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
    },
    _uiHash: function _uiHash(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
    },
    _hasMultipleValues: function _hasMultipleValues() {
      return this.options.values && this.options.values.length;
    },
    _start: function _start(t, e) {
      return this._trigger("start", t, this._uiHash(e));
    },
    _slide: function _slide(t, e, i) {
      var s,
          n,
          o = this.value(),
          a = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    },
    _stop: function _stop(t, e) {
      this._trigger("stop", t, this._uiHash(e));
    },
    _change: function _change(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    },
    value: function value(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    },
    values: function values(e, i) {
      var s, n, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();

      for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) {
        s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(e, i) {
      var s,
          n = 0;

      switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) {
            this._change(null, s);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _value: function _value() {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function _values(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);

      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }

        return i;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;

      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function _precisionOf(t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshRange: function _refreshRange(t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      });
    },
    _refreshValue: function _refreshValue() {
      var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          c = {};
      this._hasMultipleValues() ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), e = i;
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, r.animate));
    },
    _handleEvents: {
      keydown: function keydown(e) {
        var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");

        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;
        }

        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;

          case t.ui.keyCode.END:
            n = this._valueMax();
            break;

          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;

          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o);
        }

        this._slide(e, a, n);
      },
      keyup: function keyup(e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
      }
    }
  }), t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(t, e, i) {
      return t >= e && e + i > t;
    },
    _isFloating: function _isFloating(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    },
    _create: function _create() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    },
    _setHandleClassName: function _setHandleClassName() {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      for (var t = this.items.length - 1; t >= 0; t--) {
        this.items[t].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(e, i) {
      var s = null,
          n = !1,
          o = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
        this === e.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    },
    _mouseStart: function _mouseStart(e, i, s) {
      var n,
          o,
          a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, t.extend(this.offset, {
        click: {
          left: e.pageX - this.offset.left,
          top: e.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
        this.containers[n]._trigger("activate", e, this._uiHash(this));
      }
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0;
    },
    _mouseDrag: function _mouseDrag(e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;

      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger("change", e, this._uiHash());
          break;
        }
      }

      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
          o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(e);
          });
        } else this._clear(e, i);

        return !1;
      }
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();

        for (var e = this.containers.length - 1; e >= 0; e--) {
          this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + "="), s.join("&");
    },
    toArray: function toArray(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, i.each(function () {
        s.push(t(e.item || this).attr(e.attribute || "id") || "");
      }), s;
    },
    _intersectsWith: function _intersectsWith(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = "x" === this.options.axis || s + l > r && h > s + l,
          d = "y" === this.options.axis || e + c > o && a > e + c,
          p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function _intersectsWithPointer(t) {
      var e,
          i,
          s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;

      return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
    },
    _intersectsWithSides: function _intersectsWithSides(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();

      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left");
    },
    refresh: function refresh(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(e) {
      function i() {
        r.push(this);
      }

      var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith();

      if (l && e) for (s = l.length - 1; s >= 0; s--) {
        for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) {
          a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
        }
      }

      for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
        h[s][0].each(i);
      }

      return t(r);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++) {
          if (e[i] === t.item[0]) return !1;
        }

        return !0;
      });
    },
    _refreshItems: function _refreshItems(e) {
      this.items = [], this.containers = [this];

      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this.items,
          u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
        item: this.currentItem
      }) : t(this.options.items, this.element), this]],
          d = this._connectWith();

      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) {
        for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
          o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
            item: this.currentItem
          }) : t(o.options.items, o.element), o]), this.containers.push(o));
        }
      }

      for (i = u.length - 1; i >= 0; i--) {
        for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) {
          h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
            item: h,
            instance: a,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;

      for (i = this.items.length - 1; i >= 0; i--) {
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) {
        o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(e) {
      e = e || this;
      var i,
          s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function element() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
              n = t("<" + s + ">", e.document[0]);
          return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        },
        update: function update(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(e, i) {
      var s = this;
      e.children().each(function () {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
      });
    },
    _contactContainers: function _contactContainers(e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d = null,
          p = null;

      for (i = this.containers.length - 1; i >= 0; i--) {
        if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
          d = this.containers[i], p = i;
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      }

      if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) {
          t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
        }

        if (!o && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(e) {
      var i = this.options,
          s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var e,
          i,
          s,
          n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function _convertPositionTo(e, i) {
      i || (i = this.position);
      var s = "absolute" === e ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function _generatePosition(e) {
      var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function _rearrange(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;

      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function _clear(t, e) {
      function i(t, e, i) {
        return function (s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }

      this.reverting = !1;
      var s,
          n = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) {
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        }

        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();

      for (this.fromOutside && !e && n.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (n.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), n.push(function (t) {
        return function (e) {
          t._trigger("receive", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (t) {
        return function (e) {
          t._trigger("update", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
        e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      }

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) {
          n[s].call(this, t);
        }

        this._trigger("stop", t, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function _uiHash(e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      };
    }
  }), t.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _getCreateOptions: function _getCreateOptions() {
      var e = this._super(),
          i = this.element;

      return t.each(["min", "max", "step"], function (t, s) {
        var n = i.attr(s);
        null != n && n.length && (e[s] = n);
      }), e;
    },
    _events: {
      keydown: function keydown(t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function focus() {
        this.previous = this.element.val();
      },
      blur: function blur(t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0);
      },
      mousewheel: function mousewheel(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(t);
          }, 100), t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
          e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }

        var s;
        s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0;
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    },
    _draw: function _draw() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
          "ui-button": ""
        }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function _keydown(e) {
      var i = this.options,
          s = t.ui.keyCode;

      switch (e.keyCode) {
        case s.UP:
          return this._repeat(null, 1, e), !0;

        case s.DOWN:
          return this._repeat(null, -1, e), !0;

        case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;

        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0;
      }

      return !1;
    },
    _start: function _start(t) {
      return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    },
    _repeat: function _repeat(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    },
    _spin: function _spin(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
        value: i
      }) === !1 || (this._value(i), this.counter++);
    },
    _increment: function _increment(e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
    },
    _precision: function _precision() {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function _precisionOf(t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    },
    _adjustValue: function _adjustValue(t) {
      var e,
          i,
          s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
    },
    _stop: function _stop(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t));
    },
    _setOption: function _setOption(t, e) {
      var i, s, n;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: r(function (t) {
      this._super(t);
    }),
    _parse: function _parse(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
    },
    _format: function _format(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    },
    _refresh: function _refresh() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      });
    },
    isValid: function isValid() {
      var t = this.value();
      return null === t ? !1 : t === this._adjustValue(t);
    },
    _value: function _value(t, e) {
      var i;
      "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh();
    },
    _destroy: function _destroy() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: r(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function _stepUp(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: r(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function _stepDown(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: r(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: r(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function value(t) {
      return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
    },
    widget: function widget() {
      return this.uiSpinner;
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
    _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    },
    _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span>";
    },
    _buttonHtml: function _buttonHtml() {
      return "<a></a><a></a>";
    }
  }), t.ui.spinner, t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function () {
      var t = /#.*$/;
      return function (e) {
        var i, s;
        i = e.href.replace(t, ""), s = location.href.replace(t, "");

        try {
          i = decodeURIComponent(i);
        } catch (n) {}

        try {
          s = decodeURIComponent(s);
        } catch (n) {}

        return e.hash.length > 1 && i === s;
      };
    }(),
    _create: function _create() {
      var e = this,
          i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function _initialActive() {
      var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function (i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      };
    },
    _tabKeydown: function _tabKeydown(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          s = this.tabs.index(i),
          n = !0;

      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;

          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;

          case t.ui.keyCode.HOME:
            s = 0;
            break;

          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;

          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;

          default:
            return;
        }

        e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    },
    _panelKeydown: function _panelKeydown(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
    },
    _handlePageNav: function _handlePageNav(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function _findNextTab(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }

      for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) {
        e = i ? e + 1 : e - 1;
      }

      return e;
    },
    _focusNextTab: function _focusNextTab(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function _setOption(t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
    },
    _sanitizeSelector: function _sanitizeSelector(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function refresh() {
      var e = this.options,
          i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
    },
    _refresh: function _refresh() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function _processTabs() {
      var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
        t(this).is(".ui-state-disabled") && e.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        t(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return t("a", this)[0];
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
        var n,
            o,
            a,
            r = t(s).uniqueId().attr("id"),
            h = t(s).closest("li"),
            l = h.attr("aria-controls");
        e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
          "aria-controls": a,
          "aria-labelledby": r
        }), o.attr("aria-labelledby", r);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    },
    _getList: function _getList() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function _createPanel(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function _setOptionDisabled(e) {
      var i, s, n;

      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) {
        i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      }

      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
    },
    _setupEvents: function _setupEvents(e) {
      var i = {};
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function click(t) {
          t.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function _setupHeightStyle(e) {
      var i,
          s = this.element.parent();
      "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var e = t(this),
            s = e.css("position");
        "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height("").height());
      }).height(i));
    },
    _eventHandler: function _eventHandler(e) {
      var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest("li"),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          c = {
        oldTab: s,
        oldPanel: l,
        newTab: r ? t() : o,
        newPanel: h
      };
      e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
    },
    _toggle: function _toggle(e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i);
      }

      function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
      }

      var o = this,
          a = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
        return 0 === t(this).attr("tabIndex");
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function _activate(e) {
      var i,
          s = this._findActive(e);

      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function _findActive(e) {
      return e === !1 ? t() : this.tabs.eq(e);
    },
    _getIndex: function _getIndex(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
    },
    _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var e = t(this),
            i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function enable(e) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
        return t !== e ? t : null;
      }) : t.map(this.tabs, function (t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    },
    disable: function disable(e) {
      var i = this.options.disabled;

      if (i !== !0) {
        if (void 0 === e) i = !0;else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }

        this._setOptionDisabled(i);
      }
    },
    load: function load(e, i) {
      e = this._getIndex(e);

      var s = this,
          n = this.tabs.eq(e),
          o = n.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(n),
          r = {
        tab: n,
        panel: a
      },
          h = function h(t, e) {
        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
      };

      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
        setTimeout(function () {
          a.html(t), s._trigger("load", i, r), h(n, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          h(t, e);
        }, 1);
      })));
    },
    _ajaxSettings: function _ajaxSettings(e, i, s) {
      var n = this;
      return {
        url: e.attr("href").replace(/#.*$/, ""),
        beforeSend: function beforeSend(e, o) {
          return n._trigger("beforeLoad", i, t.extend({
            jqXHR: e,
            ajaxSettings: o
          }, s));
        }
      };
    },
    _getPanelForTab: function _getPanelForTab(e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
    _processTabs: function _processTabs() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    }
  }), t.ui.tabs, t.widget("ui.tooltip", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-tooltip": "ui-corner-all ui-widget-shadow"
      },
      content: function content() {
        var e = t(this).attr("title") || "";
        return t("<a>").text(e).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function _addDescribedBy(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
    },
    _removeDescribedBy: function _removeDescribedBy(e) {
      var i = e.data("ui-tooltip-id"),
          s = (e.attr("aria-describedby") || "").split(/\s+/),
          n = t.inArray(i, s);
      -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
    },
    _create: function _create() {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
        role: "log",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
    },
    _setOption: function _setOption(e, i) {
      var s = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
        s._updateContent(e.element);
      });
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this[t ? "_disable" : "_enable"]();
    },
    _disable: function _disable() {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur");
        n.target = n.currentTarget = s.element[0], e.close(n, !0);
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
        var e = t(this);
        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
      }));
    },
    _enable: function _enable() {
      this.disabledTitles.each(function () {
        var e = t(this);
        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
      }), this.disabledTitles = t([]);
    },
    open: function open(e) {
      var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
        var e,
            s = t(this);
        s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr("title")
        }, s.attr("title", ""));
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
    },
    _updateContent: function _updateContent(t, e) {
      var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;
      return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
        n._delay(function () {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
        });
      }), i && this._open(e, t, i), void 0);
    },
    _open: function _open(e, i, s) {
      function n(t) {
        l.of = t, a.is(":hidden") || a.position(l);
      }

      var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position);

      if (s) {
        if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
          mousemove: n
        }), n(e)) : a.position(t.extend({
          of: i
        }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          a.is(":visible") && (n(l.of), clearInterval(r));
        }, t.fx.interval)), this._trigger("open", e, {
          tooltip: a
        });
      }
    },
    _registerCloseHandlers: function _registerCloseHandlers(e, i) {
      var s = {
        keyup: function keyup(e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);
            s.currentTarget = i[0], this.close(s, !0);
          }
        }
      };
      i[0] !== this.element[0] && (s.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s);
    },
    close: function close(e) {
      var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);

      return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
        s._removeTooltip(t(this));
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
        t(i.element).attr("title", i.title), delete s.parents[e];
      }), o.closing = !0, this._trigger("close", e, {
        tooltip: i
      }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
    },
    _tooltip: function _tooltip(e) {
      var i = t("<div>").attr("role", "tooltip"),
          s = t("<div>").appendTo(i),
          n = i.uniqueId().attr("id");
      return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
        element: e,
        tooltip: i
      };
    },
    _find: function _find(t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null;
    },
    _removeTooltip: function _removeTooltip(t) {
      t.remove(), delete this.tooltips[t.attr("id")];
    },
    _appendTo: function _appendTo(t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e;
    },
    _destroy: function _destroy() {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur"),
            o = s.element;
        n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
    options: {
      tooltipClass: null
    },
    _tooltip: function _tooltip() {
      var t = this._superApply(arguments);

      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
    }
  }), t.ui.tooltip;
});

/***/ }),

/***/ "./resources/assets/admin/dist/js/jquery.ui.touch-punch-improved.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/admin/dist/js/jquery.ui.touch-punch-improved.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery UI Touch Punch Improved 0.3.1
 *
 *
 * Copyright 2013, Chris Hutchinson <chris@brushd.com>
 * Original jquery-ui-touch-punch Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 * jquery.ui.widget.js
 * jquery.ui.mouse.js
 */
(function ($) {
  var pointerEnabled = window.navigator.pointerEnabled || window.navigator.msPointerEnabled; // Detect touch support

  $.support.touch = 'ontouchend' in document || pointerEnabled; // Ignore browsers without touch support or mouse support

  if (!$.support.touch || !$.ui.mouse) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      touchHandled; // see http://stackoverflow.com/a/12714084/220825

  function fixTouch(touch) {
    var winPageX = window.pageXOffset,
        winPageY = window.pageYOffset,
        x = touch.clientX,
        y = touch.clientY;

    if (touch.pageY === 0 && Math.floor(y) > Math.floor(touch.pageY) || touch.pageX === 0 && Math.floor(x) > Math.floor(touch.pageX)) {
      // iOS4 clientX/clientY have the value that should have been
      // in pageX/pageY. While pageX/page/ have the value 0
      x = x - winPageX;
      y = y - winPageY;
    } else if (y < touch.pageY - winPageY || x < touch.pageX - winPageX) {
      // Some Android browsers have totally bogus values for clientX/Y
      // when scrolling/zooming a page. Detectable since clientX/clientY
      // should never be smaller than pageX/pageY minus page scroll
      x = touch.pageX - winPageX;
      y = touch.pageY - winPageY;
    }

    return {
      clientX: x,
      clientY: y
    };
  }
  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */


  function simulateMouseEvent(event, simulatedType) {
    // Ignore multi-touch events
    if (!pointerEnabled && event.originalEvent.touches.length > 1 || pointerEnabled && !event.isPrimary) {
      return;
    }

    var touch = pointerEnabled ? event.originalEvent : event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents'),
        coord = fixTouch(touch); // Check if element is an input or a textarea

    if ($(touch.target).is("input") || $(touch.target).is("textarea")) {
      event.stopPropagation();
    } else {
      event.preventDefault();
    } // Initialize the simulated mouse event using the touch event's coordinates


    simulatedEvent.initMouseEvent(simulatedType, // type
    true, // bubbles
    true, // cancelable
    window, // view
    1, // detail
    event.screenX || touch.screenX, // screenX
    event.screenY || touch.screenY, // screenY
    event.clientX || coord.clientX, // clientX
    event.clientY || coord.clientY, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button
    null // relatedTarget
    ); // Dispatch the simulated event to the target element

    event.target.dispatchEvent(simulatedEvent);
  }
  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */


  mouseProto._touchStart = function (event) {
    var self = this; // Ignore the event if another widget is already being handled

    if (touchHandled || !pointerEnabled && !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    } // Set the flag to prevent other widgets from inheriting the touch event


    touchHandled = true; // Track movement to determine if interaction was a click

    self._touchMoved = false; // Simulate the mouseover event

    simulateMouseEvent(event, 'mouseover'); // Simulate the mousemove event

    simulateMouseEvent(event, 'mousemove'); // Simulate the mousedown event

    simulateMouseEvent(event, 'mousedown');
  };
  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */


  mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    } // Interaction was not a click


    this._touchMoved = true; // Simulate the mousemove event

    simulateMouseEvent(event, 'mousemove');
  };
  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */


  mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    } // Simulate the mouseup event


    simulateMouseEvent(event, 'mouseup'); // Simulate the mouseout event

    simulateMouseEvent(event, 'mouseout'); // If the touch interaction did not move, it should trigger a click

    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, 'click');
    } // Unset the flag to allow other widgets to inherit the touch event


    touchHandled = false;
  };
  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */


  mouseProto._mouseInit = function () {
    var self = this;
    self.element.on({
      'touchstart': $.proxy(self, '_touchStart'),
      'touchmove': $.proxy(self, '_touchMove'),
      'touchend': $.proxy(self, '_touchEnd'),
      'pointerDown': $.proxy(self, '_touchStart'),
      'pointerMove': $.proxy(self, '_touchMove'),
      'pointerUp': $.proxy(self, '_touchEnd'),
      'MSPointerDown': $.proxy(self, '_touchStart'),
      'MSPointerMove': $.proxy(self, '_touchMove'),
      'MSPointerUp': $.proxy(self, '_touchEnd')
    }); // Call the original $.ui.mouse init method

    _mouseInit.call(self);
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/admin/dist/js/sidebarmenu.js":
/*!*******************************************************!*\
  !*** ./resources/assets/admin/dist/js/sidebarmenu.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ============================================================== 
// Auto select left navbar
// ============================================================== 
$(function () {
  "use strict";

  var url = window.location + "";
  var path = url.replace(window.location.protocol + "//" + window.location.host + "/", "");
  var element = $('ul#sidebarnav a').filter(function () {
    return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
  });
  element.parentsUntil(".sidebar-nav").each(function (index) {
    if ($(this).is("li") && $(this).children("a").length !== 0) {
      $(this).children("a").addClass("active");
      $(this).parent("ul#sidebarnav").length === 0 ? $(this).addClass("active") : $(this).addClass("selected");
    } else if (!$(this).is("ul") && $(this).children("a").length === 0) {
      $(this).addClass("selected");
    } else if ($(this).is("ul")) {
      $(this).addClass('in');
    }
  });
  element.addClass("active");
  $('#sidebarnav a').on('click', function (e) {
    if (!$(this).hasClass("active")) {
      // hide any open menus and remove all other classes
      $("ul", $(this).parents("ul:first")).removeClass("in");
      $("a", $(this).parents("ul:first")).removeClass("active"); // open our new menu and add the open class

      $(this).next("ul").addClass("in");
      $(this).addClass("active");
    } else if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents("ul:first").removeClass("active");
      $(this).next("ul").removeClass("in");
    }
  });
  $('#sidebarnav >li >a.has-arrow').on('click', function (e) {
    e.preventDefault();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/admin/dist/js/jquery.ui.touch-punch-improved.js ./resources/assets/admin/dist/js/jquery-ui.min.js ./resources/assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js ./resources/assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js ./resources/assets/admin/dist/js/sidebarmenu.js ./resources/assets/admin/dist/js/custom.min.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! w:\domains\lar7\resources\assets\admin\dist\js\jquery.ui.touch-punch-improved.js */"./resources/assets/admin/dist/js/jquery.ui.touch-punch-improved.js");
__webpack_require__(/*! w:\domains\lar7\resources\assets\admin\dist\js\jquery-ui.min.js */"./resources/assets/admin/dist/js/jquery-ui.min.js");
__webpack_require__(/*! w:\domains\lar7\resources\assets\admin\assets\libs\bootstrap\dist\js\bootstrap.min.js */"./resources/assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js");
__webpack_require__(/*! w:\domains\lar7\resources\assets\admin\assets\libs\perfect-scrollbar\dist\perfect-scrollbar.jquery.min.js */"./resources/assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js");
__webpack_require__(/*! w:\domains\lar7\resources\assets\admin\dist\js\sidebarmenu.js */"./resources/assets/admin/dist/js/sidebarmenu.js");
module.exports = __webpack_require__(/*! w:\domains\lar7\resources\assets\admin\dist\js\custom.min.js */"./resources/assets/admin/dist/js/custom.min.js");


/***/ })

/******/ });