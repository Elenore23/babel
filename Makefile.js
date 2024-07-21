// source hash: dcec000a77b25a9c3a5a324b32b9465c9ef36926
/* eslint-disable */
// prettier-ignore
'use strict';

var require$$0$1 = require('os');
var require$$1 = require('fs');
var require$$0 = require('path');
var require$$3 = require('events');
var require$$5 = require('assert');
var require$$3$1 = require('util');
var require$$0$2 = require('child_process');
var node_url = require('node:url');
var node_child_process = require('node:child_process');
var node_string_decoder = require('node:string_decoder');
var node_util = require('node:util');
var process$6 = require('node:process');
var node_fs = require('node:fs');
var tty = require('node:tty');
var path$5 = require('node:path');
var promises = require('node:timers/promises');
var node_os = require('node:os');
var node_events = require('node:events');
var node_v8 = require('node:v8');
var node_stream = require('node:stream');
var node_buffer = require('node:buffer');
var promises$1 = require('node:stream/promises');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var fails$v = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$u = fails$v;

var functionBindNative = !fails$u(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$s = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$s, call$s);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$s.apply(fn, arguments);
  };
};

var uncurryThis$x = functionUncurryThis;

var toString$e = uncurryThis$x({}.toString);
var stringSlice$c = uncurryThis$x(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$c(toString$e(it), 8, -1);
};

var uncurryThis$w = functionUncurryThis;
var fails$t = fails$v;
var classof$d = classofRaw$2;

var $Object$4 = Object;
var split$3 = uncurryThis$w(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$t(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$d(it) === 'String' ? split$3(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$h = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$a = function (it) {
  if (isNullOrUndefined$6(it)) throw new $TypeError$h("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$9 = requireObjectCoercible$a;

var toIndexedObject$7 = function (it) {
  return IndexedObject$2(requireObjectCoercible$9(it));
};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$x =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var sharedStore = {exports: {}};

var isPure = false;

var global$w = global$x;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$8 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$8(global$w, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$w[key] = value;
  } return value;
};

var globalThis$1 = global$x;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = sharedStore.exports = globalThis$1[SHARED] || defineGlobalProperty$2(SHARED, {});

(store$3.versions || (store$3.versions = [])).push({
  version: '3.36.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.exports;

var store$2 = sharedStoreExports;

var shared$4 = function (key, value) {
  return store$2[key] || (store$2[key] = value || {});
};

var requireObjectCoercible$8 = requireObjectCoercible$a;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$a = function (argument) {
  return $Object$3(requireObjectCoercible$8(argument));
};

var uncurryThis$v = functionUncurryThis;
var toObject$9 = toObject$a;

var hasOwnProperty = uncurryThis$v({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$9(it), key);
};

var uncurryThis$u = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$d = uncurryThis$u(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$d(++id + postfix, 36);
};

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$v = global$x;
var userAgent$6 = engineUserAgent;

var process$5 = global$v.process;
var Deno$1 = global$v.Deno;
var versions = process$5 && process$5.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$6) {
  match = userAgent$6.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$6.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = engineV8Version;
var fails$s = fails$v;
var global$u = global$x;

var $String$5 = global$u.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$s(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$t = global$x;
var shared$3 = shared$4;
var hasOwn$h = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Symbol$1 = global$t.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

var wellKnownSymbol$n = function (name) {
  if (!hasOwn$h(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$h(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var isCallable$q = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$p = isCallable$q;

var isObject$i = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$p(it);
};

var isObject$h = isObject$i;

var $String$4 = String;
var $TypeError$g = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$h(argument)) return argument;
  throw new $TypeError$g($String$4(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$r = fails$v;

// Detect IE8's incomplete defineProperty implementation
var descriptors$1 = !fails$r(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var DESCRIPTORS$l = descriptors$1;
var fails$q = fails$v;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$l && fails$q(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var objectDefineProperty = {};

var global$s = global$x;
var isObject$g = isObject$i;

var document$3 = global$s.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$k = descriptors$1;
var fails$p = fails$v;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$k && !fails$p(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$r = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$r.bind(call$r) : function () {
  return call$r.apply(call$r, arguments);
};

var global$r = global$x;
var isCallable$o = isCallable$q;

var aFunction = function (argument) {
  return isCallable$o(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$r[namespace]) : global$r[namespace] && global$r[namespace][method];
};

var uncurryThis$t = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$t({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$n = isCallable$q;
var isPrototypeOf$7 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$3 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$n($Symbol) && isPrototypeOf$7($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$m = isCallable$q;
var tryToString$5 = tryToString$6;

var $TypeError$f = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$c = function (argument) {
  if (isCallable$m(argument)) return argument;
  throw new $TypeError$f(tryToString$5(argument) + ' is not a function');
};

var aCallable$b = aCallable$c;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$6 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$b(func);
};

var call$q = functionCall;
var isCallable$l = isCallable$q;
var isObject$f = isObject$i;

var $TypeError$e = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$l(fn = input.toString) && !isObject$f(val = call$q(fn, input))) return val;
  if (isCallable$l(fn = input.valueOf) && !isObject$f(val = call$q(fn, input))) return val;
  if (pref !== 'string' && isCallable$l(fn = input.toString) && !isObject$f(val = call$q(fn, input))) return val;
  throw new $TypeError$e("Can't convert object to primitive value");
};

var call$p = functionCall;
var isObject$e = isObject$i;
var isSymbol$2 = isSymbol$3;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$m = wellKnownSymbol$n;

var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$m('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$e(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$p(exoticToPrim, input, pref);
    if (!isObject$e(result) || isSymbol$2(result)) return result;
    throw new $TypeError$d("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var DESCRIPTORS$j = descriptors$1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$c = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$j ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$c('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil$1 = Math.ceil;
var floor$6 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$6 : ceil$1)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$8 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$7 = toIntegerOrInfinity$8;

var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$7(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$6 = toIntegerOrInfinity$8;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$7 = function (argument) {
  var len = toIntegerOrInfinity$6(argument);
  return len > 0 ? min$2(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$6 = toLength$7;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$b = function (obj) {
  return toLength$6(obj.length);
};

var toIndexedObject$6 = toIndexedObject$7;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$a = lengthOfArrayLike$b;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$5 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$6($this);
    var length = lengthOfArrayLike$a(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$5(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$5(false)
};

var hiddenKeys$4 = {};

var uncurryThis$s = functionUncurryThis;
var hasOwn$g = hasOwnProperty_1;
var toIndexedObject$5 = toIndexedObject$7;
var indexOf$2 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$8 = uncurryThis$s([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$5(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$g(hiddenKeys$3, key) && hasOwn$g(O, key) && push$8(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$g(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$8(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$3 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$i = descriptors$1;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$5 = objectDefineProperty;
var anObject$d = anObject$f;
var toIndexedObject$4 = toIndexedObject$7;
var objectKeys$2 = objectKeys$3;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$i && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$d(O);
  var props = toIndexedObject$4(Properties);
  var keys = objectKeys$2(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$7;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4;
var uid$1 = uid$3;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */
var anObject$c = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$c(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$l = wellKnownSymbol$n;
var create$5 = objectCreate;
var defineProperty$7 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$l('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
  defineProperty$7(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$5(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$3 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$q = global$x;
var isCallable$k = isCallable$q;

var WeakMap$2 = global$q.WeakMap;

var weakMapBasicDetection = isCallable$k(WeakMap$2) && /native code/.test(String(WeakMap$2));

var createPropertyDescriptor$6 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$h = descriptors$1;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$6;

var createNonEnumerableProperty$8 = DESCRIPTORS$h ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$p = global$x;
var isObject$d = isObject$i;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
var hasOwn$f = hasOwnProperty_1;
var shared$1 = sharedStoreExports;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$5 = global$p.TypeError;
var WeakMap$1 = global$p.WeakMap;
var set$3, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set$3(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$d(it) || (state = get$1(it)).type !== TYPE) {
      throw new TypeError$5('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store$1 = shared$1.state || (shared$1.state = new WeakMap$1());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$3 = function (it, metadata) {
    if (store$1.has(it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return store$1.get(it) || {};
  };
  has = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set$3 = function (it, metadata) {
    if (hasOwn$f(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$7(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$f(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$f(it, STATE);
  };
}

var internalState = {
  set: set$3,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var DESCRIPTORS$g = descriptors$1;
var call$o = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$6;
var toIndexedObject$3 = toIndexedObject$7;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$e = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$e(O, P)) return createPropertyDescriptor$4(!call$o(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$f = descriptors$1;
var hasOwn$d = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$f && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$d(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$f || (DESCRIPTORS$f && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$r = functionUncurryThis;
var isCallable$j = isCallable$q;
var store = sharedStoreExports;

var functionToString = uncurryThis$r(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$j(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var uncurryThis$q = functionUncurryThis;
var fails$o = fails$v;
var isCallable$i = isCallable$q;
var hasOwn$c = hasOwnProperty_1;
var DESCRIPTORS$e = descriptors$1;
var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$8 = internalState;

var enforceInternalState$3 = InternalStateModule$8.enforce;
var getInternalState$5 = InternalStateModule$8.get;
var $String$2 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;
var stringSlice$b = uncurryThis$q(''.slice);
var replace$8 = uncurryThis$q(''.replace);
var join$3 = uncurryThis$q([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$e && !fails$o(function () {
  return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$b($String$2(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$8($String$2(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$c(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
    if (DESCRIPTORS$e) defineProperty$6(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$c(options, 'arity') && value.length !== options.arity) {
    defineProperty$6(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$c(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$e) defineProperty$6(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$3(value);
  if (!hasOwn$c(state, 'source')) {
    state.source = join$3(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$i(this) && getInternalState$5(this).source || inspectSource$2(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$3.exports;

var isCallable$h = isCallable$q;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$b = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$h(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$4 = getBuiltIn$7;
var uncurryThis$p = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$b = anObject$f;

var concat$2 = uncurryThis$p([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$b(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$b = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$b(target, key) && !(exceptions && hasOwn$b(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$n = fails$v;
var isCallable$g = isCallable$q;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize$1(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$g(detection) ? fails$n(detection)
    : !!detection;
};

var normalize$1 = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$o = global$x;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
var defineBuiltIn$a = defineBuiltIn$b;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$2 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$o;
  } else if (STATIC) {
    target = global$o[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global$o[TARGET] && global$o[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$6(sourceProperty, 'sham', true);
    }
    defineBuiltIn$a(target, key, sourceProperty, options);
  }
};

var fails$m = fails$v;

var correctPrototypeGetter = !fails$m(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$a = hasOwnProperty_1;
var isCallable$f = isCallable$q;
var toObject$8 = toObject$a;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype$2 = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$8(O);
  if (hasOwn$a(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$f(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype$2 : null;
};

var fails$l = fails$v;
var isCallable$e = isCallable$q;
var isObject$c = isObject$i;
var getPrototypeOf$3 = objectGetPrototypeOf$1;
var defineBuiltIn$9 = defineBuiltIn$b;
var wellKnownSymbol$k = wellKnownSymbol$n;

var ITERATOR$6 = wellKnownSymbol$k('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$c(IteratorPrototype$2) || fails$l(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$e(IteratorPrototype$2[ITERATOR$6])) {
  defineBuiltIn$9(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$5 = objectDefineProperty.f;
var hasOwn$9 = hasOwnProperty_1;
var wellKnownSymbol$j = wellKnownSymbol$n;

var TO_STRING_TAG$3 = wellKnownSymbol$j('toStringTag');

var setToStringTag$6 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$9(target, TO_STRING_TAG$3)) {
    defineProperty$5(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$4 = objectCreate;
var createPropertyDescriptor$3 = createPropertyDescriptor$6;
var setToStringTag$5 = setToStringTag$6;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$4(IteratorPrototype$1, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$o = functionUncurryThis;
var aCallable$a = aCallable$c;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$o(aCallable$a(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isObject$b = isObject$i;

var isPossiblePrototype$1 = function (argument) {
  return isObject$b(argument) || argument === null;
};

var isPossiblePrototype = isPossiblePrototype$1;

var $String$1 = String;
var $TypeError$b = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError$b("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$a = isObject$i;
var requireObjectCoercible$7 = requireObjectCoercible$a;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible$7(O);
    aPossiblePrototype(proto);
    if (!isObject$a(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$p = _export;
var call$n = functionCall;
var FunctionName$1 = functionName;
var isCallable$d = isCallable$q;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf$2 = objectGetPrototypeOf$1;
var setPrototypeOf$5 = objectSetPrototypeOf;
var setToStringTag$4 = setToStringTag$6;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
var defineBuiltIn$8 = defineBuiltIn$b;
var wellKnownSymbol$i = wellKnownSymbol$n;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$i('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$5) {
          setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$d(CurrentIteratorPrototype[ITERATOR$5])) {
          defineBuiltIn$8(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME$1) {
      createNonEnumerableProperty$5(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$n(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$8(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$p({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$8(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$3 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$2 = toIndexedObject$7;
var addToUnscopables$2 = addToUnscopables$3;
var Iterators$2 = iterators;
var InternalStateModule$7 = internalState;
var defineProperty$4 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var DESCRIPTORS$d = descriptors$1;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$6 = InternalStateModule$7.set;
var getInternalState$4 = InternalStateModule$7.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$6(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$2(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$4(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$2(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject$2(index, false);
    case 'values': return createIterResultObject$2(target[index], false);
  } return createIterResultObject$2([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$2('keys');
addToUnscopables$2('values');
addToUnscopables$2('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$d && values.name !== 'values') try {
  defineProperty$4(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

var isCallable$c = isCallable$q;
var isObject$9 = isObject$i;
var setPrototypeOf$4 = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$3 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf$4 &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$c(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$9(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf$4($this, NewTargetPrototype);
  return $this;
};

var isObject$8 = isObject$i;
var classof$c = classofRaw$2;
var wellKnownSymbol$h = wellKnownSymbol$n;

var MATCH$1 = wellKnownSymbol$h('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$8(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$c(it) === 'RegExp');
};

var wellKnownSymbol$g = wellKnownSymbol$n;

var TO_STRING_TAG$2 = wellKnownSymbol$g('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$b = isCallable$q;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$f = wellKnownSymbol$n;

var TO_STRING_TAG$1 = wellKnownSymbol$f('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$b = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$b(O.callee) ? 'Arguments' : result;
};

var classof$a = classof$b;

var $String = String;

var toString$c = function (argument) {
  if (classof$a(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$a = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$a(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$m = functionCall;
var hasOwn$8 = hasOwnProperty_1;
var isPrototypeOf$6 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$2 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$8(R, 'flags') && isPrototypeOf$6(RegExpPrototype$2, R)
    ? call$m(regExpFlags, R) : flags;
};

var fails$k = fails$v;
var global$n = global$x;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$n.RegExp;

var UNSUPPORTED_Y$3 = fails$k(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$3 || fails$k(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$k(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$3
};

var defineProperty$3 = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$3(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var makeBuiltIn = makeBuiltInExports;
var defineProperty$2 = objectDefineProperty;

var defineBuiltInAccessor$7 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$2.f(target, name, descriptor);
};

var getBuiltIn$3 = getBuiltIn$7;
var defineBuiltInAccessor$6 = defineBuiltInAccessor$7;
var wellKnownSymbol$e = wellKnownSymbol$n;
var DESCRIPTORS$c = descriptors$1;

var SPECIES$4 = wellKnownSymbol$e('species');

var setSpecies$3 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$c && Constructor && !Constructor[SPECIES$4]) {
    defineBuiltInAccessor$6(Constructor, SPECIES$4, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var fails$j = fails$v;
var global$m = global$x;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$m.RegExp;

var regexpUnsupportedDotAll = fails$j(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

var fails$i = fails$v;
var global$l = global$x;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$l.RegExp;

var regexpUnsupportedNcg = fails$i(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

var DESCRIPTORS$b = descriptors$1;
var global$k = global$x;
var uncurryThis$n = functionUncurryThis;
var isForced$1 = isForced_1;
var inheritIfRequired$2 = inheritIfRequired$3;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
var create$3 = objectCreate;
var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var isPrototypeOf$5 = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$b = toString$c;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers$2 = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$7 = defineBuiltIn$b;
var fails$h = fails$v;
var hasOwn$7 = hasOwnProperty_1;
var enforceInternalState$2 = internalState.enforce;
var setSpecies$2 = setSpecies$3;
var wellKnownSymbol$d = wellKnownSymbol$n;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol$d('match');
var NativeRegExp = global$k.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$k.SyntaxError;
var exec$6 = uncurryThis$n(RegExpPrototype$1.exec);
var charAt$7 = uncurryThis$n(''.charAt);
var replace$7 = uncurryThis$n(''.replace);
var stringIndexOf$1 = uncurryThis$n(''.indexOf);
var stringSlice$a = uncurryThis$n(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers$2.MISSED_STICKY;
var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$b &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$h(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt$7(string, index);
    if (chr === '\\') {
      result += chr + charAt$7(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create$3(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt$7(string, index);
    if (chr === '\\') {
      chr += charAt$7(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$6(IS_NCG, stringSlice$a(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn$7(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced$1('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf$5(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf$5(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$b(pattern);
    flags = flags === undefined ? '' : toString$b(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
      if (dotAll) flags = replace$7(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y$2) flags = replace$7(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState$2(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$4(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames$1(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$7(global$k, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies$2('RegExp');

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$l = functionCall;
var uncurryThis$m = functionUncurryThis;
var toString$a = toString$c;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4;
var create$2 = objectCreate;
var getInternalState$3 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$6 = uncurryThis$m(''.charAt);
var indexOf$1 = uncurryThis$m(''.indexOf);
var replace$6 = uncurryThis$m(''.replace);
var stringSlice$9 = uncurryThis$m(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$l(nativeExec, re1, 'a');
  call$l(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$3(re);
    var str = toString$a(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$l(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$l(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$6(flags, 'y', '');
      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$9(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$6(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$l(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$9(match.input, charsAdded);
        match[0] = stringSlice$9(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$l(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$2(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$o = _export;
var exec$5 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$o({ target: 'RegExp', proto: true, forced: /./.exec !== exec$5 }, {
  exec: exec$5
});

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$k = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$k.bind(apply$2) : function () {
  return call$k.apply(apply$2, arguments);
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var call$j = functionCall;
var defineBuiltIn$6 = defineBuiltIn$b;
var regexpExec$1 = regexpExec$2;
var fails$g = fails$v;
var wellKnownSymbol$c = wellKnownSymbol$n;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

var SPECIES$3 = wellKnownSymbol$c('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$c(KEY);

  var DELEGATES_TO_SYMBOL = !fails$g(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$g(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$3] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call$j(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call$j(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$6(String.prototype, KEY, methods[0]);
    defineBuiltIn$6(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty$3(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$l = functionUncurryThis;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$8;
var toString$9 = toString$c;
var requireObjectCoercible$6 = requireObjectCoercible$a;

var charAt$5 = uncurryThis$l(''.charAt);
var charCodeAt$1 = uncurryThis$l(''.charCodeAt);
var stringSlice$8 = uncurryThis$l(''.slice);

var createMethod$4 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$9(requireObjectCoercible$6($this));
    var position = toIntegerOrInfinity$5(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$5(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$8(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$4(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$4(true)
};

var charAt$4 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$4(S, index).length : 1);
};

var uncurryThis$k = functionUncurryThis;
var toObject$7 = toObject$a;

var floor$5 = Math.floor;
var charAt$3 = uncurryThis$k(''.charAt);
var replace$5 = uncurryThis$k(''.replace);
var stringSlice$7 = uncurryThis$k(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$2 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$7(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$5(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$3(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$7(str, 0, position);
      case "'": return stringSlice$7(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$7(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$5(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$3(ch, 1) : captures[f - 1] + charAt$3(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$i = functionCall;
var anObject$9 = anObject$f;
var isCallable$a = isCallable$q;
var classof$9 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$a = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$a(exec)) {
    var result = call$i(exec, R, S);
    if (result !== null) anObject$9(result);
    return result;
  }
  if (classof$9(R) === 'RegExp') return call$i(regexpExec, R, S);
  throw new $TypeError$a('RegExp#exec called on incompatible receiver');
};

var apply$1 = functionApply;
var call$h = functionCall;
var uncurryThis$j = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$f = fails$v;
var anObject$8 = anObject$f;
var isCallable$9 = isCallable$q;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var toIntegerOrInfinity$4 = toIntegerOrInfinity$8;
var toLength$5 = toLength$7;
var toString$8 = toString$c;
var requireObjectCoercible$5 = requireObjectCoercible$a;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$4 = getMethod$6;
var getSubstitution$1 = getSubstitution$2;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$b = wellKnownSymbol$n;

var REPLACE$1 = wellKnownSymbol$b('replace');
var max$1 = Math.max;
var min$1 = Math.min;
var concat$1 = uncurryThis$j([].concat);
var push$7 = uncurryThis$j([].push);
var stringIndexOf = uncurryThis$j(''.indexOf);
var stringSlice$6 = uncurryThis$j(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE$1]) {
    return /./[REPLACE$1]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$f(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$5(this);
      var replacer = isNullOrUndefined$4(searchValue) ? undefined : getMethod$4(searchValue, REPLACE$1);
      return replacer
        ? call$h(replacer, searchValue, O, replaceValue)
        : call$h(nativeReplace, toString$8(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$8(this);
      var S = toString$8(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable$9(replaceValue);
      if (!functionalReplace) replaceValue = toString$8(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec$1(rx, S);
        if (result === null) break;

        push$7(results, result);
        if (!global) break;

        var matchStr = toString$8(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$5(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$8(result[0]);
        var position = max$1(min$1(toIntegerOrInfinity$4(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$7(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== undefined) push$7(replacerArgs, namedCaptures);
          replacement = toString$8(apply$1(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$6(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$i = functionUncurryThis;
var requireObjectCoercible$4 = requireObjectCoercible$a;
var toString$7 = toString$c;
var whitespaces$1 = whitespaces$2;

var replace$4 = uncurryThis$i(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = toString$7(requireObjectCoercible$4($this));
    if (TYPE & 1) string = replace$4(string, ltrim, '');
    if (TYPE & 2) string = replace$4(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var fails$e = fails$v;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails$e(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$n = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod$1 = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$n({ target: 'String', proto: true, forced: forcedStringTrimMethod$1('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var $$m = _export;
var call$g = functionCall;
var uncurryThis$h = functionUncurryThis;
var requireObjectCoercible$3 = requireObjectCoercible$a;
var isCallable$8 = isCallable$q;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var isRegExp = isRegexp;
var toString$6 = toString$c;
var getMethod$3 = getMethod$6;
var getRegExpFlags = regexpGetFlags;
var getSubstitution = getSubstitution$2;
var wellKnownSymbol$a = wellKnownSymbol$n;

var REPLACE = wellKnownSymbol$a('replace');
var $TypeError$9 = TypeError;
var indexOf = uncurryThis$h(''.indexOf);
uncurryThis$h(''.replace);
var stringSlice$5 = uncurryThis$h(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$$m({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible$3(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined$3(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString$6(requireObjectCoercible$3(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError$9('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod$3(searchValue, REPLACE);
      if (replacer) {
        return call$g(replacer, searchValue, O, replaceValue);
      }
    }
    string = toString$6(O);
    searchString = toString$6(searchValue);
    functionalReplace = isCallable$8(replaceValue);
    if (!functionalReplace) replaceValue = toString$6(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString$6(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice$5(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice$5(string, endOfLastMatch);
    }
    return result;
  }
});

var common$3 = {};

var old = {};

var hasRequiredOld;
function requireOld() {
  if (hasRequiredOld) return old;
  hasRequiredOld = 1;
  var pathModule = require$$0;
  var isWindows = process.platform === 'win32';
  var fs = require$$1;
  var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
  function rethrow() {
    var callback;
    if (DEBUG) {
      var backtrace = new Error();
      callback = debugCallback;
    } else callback = missingCallback;
    return callback;
    function debugCallback(err) {
      if (err) {
        backtrace.message = err.message;
        err = backtrace;
        missingCallback(err);
      }
    }
    function missingCallback(err) {
      if (err) {
        if (process.throwDeprecation) throw err;else if (!process.noDeprecation) {
          var msg = 'fs: missing callback ' + (err.stack || err.message);
          if (process.traceDeprecation) console.trace(msg);else console.error(msg);
        }
      }
    }
  }
  function maybeCallback(cb) {
    return typeof cb === 'function' ? cb : rethrow();
  }
  pathModule.normalize;
  if (isWindows) {
    var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
  } else {
    var nextPartRe = /(.*?)(?:[\/]+|$)/g;
  }
  if (isWindows) {
    var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
  } else {
    var splitRootRe = /^[\/]*/;
  }
  old.realpathSync = function realpathSync(p, cache) {
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return cache[p];
    }
    var original = p,
      seenLinks = {},
      knownHard = {};
    var pos;
    var current;
    var base;
    var previous;
    start();
    function start() {
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = '';
      if (isWindows && !knownHard[base]) {
        fs.lstatSync(base);
        knownHard[base] = true;
      }
    }
    while (pos < p.length) {
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;
      if (knownHard[base] || cache && cache[base] === base) {
        continue;
      }
      var resolvedLink;
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        resolvedLink = cache[base];
      } else {
        var stat = fs.lstatSync(base);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache) cache[base] = base;
          continue;
        }
        var linkTarget = null;
        if (!isWindows) {
          var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            linkTarget = seenLinks[id];
          }
        }
        if (linkTarget === null) {
          fs.statSync(base);
          linkTarget = fs.readlinkSync(base);
        }
        resolvedLink = pathModule.resolve(previous, linkTarget);
        if (cache) cache[base] = resolvedLink;
        if (!isWindows) seenLinks[id] = linkTarget;
      }
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }
    if (cache) cache[original] = p;
    return p;
  };
  old.realpath = function realpath(p, cache, cb) {
    if (typeof cb !== 'function') {
      cb = maybeCallback(cache);
      cache = null;
    }
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return process.nextTick(cb.bind(null, null, cache[p]));
    }
    var original = p,
      seenLinks = {},
      knownHard = {};
    var pos;
    var current;
    var base;
    var previous;
    start();
    function start() {
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = '';
      if (isWindows && !knownHard[base]) {
        fs.lstat(base, function (err) {
          if (err) return cb(err);
          knownHard[base] = true;
          LOOP();
        });
      } else {
        process.nextTick(LOOP);
      }
    }
    function LOOP() {
      if (pos >= p.length) {
        if (cache) cache[original] = p;
        return cb(null, p);
      }
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;
      if (knownHard[base] || cache && cache[base] === base) {
        return process.nextTick(LOOP);
      }
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        return gotResolvedLink(cache[base]);
      }
      return fs.lstat(base, gotStat);
    }
    function gotStat(err, stat) {
      if (err) return cb(err);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        return process.nextTick(LOOP);
      }
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          return gotTarget(null, seenLinks[id], base);
        }
      }
      fs.stat(base, function (err) {
        if (err) return cb(err);
        fs.readlink(base, function (err, target) {
          if (!isWindows) seenLinks[id] = target;
          gotTarget(err, target);
        });
      });
    }
    function gotTarget(err, target, base) {
      if (err) return cb(err);
      var resolvedLink = pathModule.resolve(previous, target);
      if (cache) cache[base] = resolvedLink;
      gotResolvedLink(resolvedLink);
    }
    function gotResolvedLink(resolvedLink) {
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }
  };
  return old;
}

var fs_realpath;
var hasRequiredFs_realpath;
function requireFs_realpath() {
  if (hasRequiredFs_realpath) return fs_realpath;
  hasRequiredFs_realpath = 1;
  fs_realpath = realpath;
  realpath.realpath = realpath;
  realpath.sync = realpathSync;
  realpath.realpathSync = realpathSync;
  realpath.monkeypatch = monkeypatch;
  realpath.unmonkeypatch = unmonkeypatch;
  var fs = require$$1;
  var origRealpath = fs.realpath;
  var origRealpathSync = fs.realpathSync;
  var version = process.version;
  var ok = /^v[0-5]\./.test(version);
  var old = requireOld();
  function newError(er) {
    return er && er.syscall === 'realpath' && (er.code === 'ELOOP' || er.code === 'ENOMEM' || er.code === 'ENAMETOOLONG');
  }
  function realpath(p, cache, cb) {
    if (ok) {
      return origRealpath(p, cache, cb);
    }
    if (typeof cache === 'function') {
      cb = cache;
      cache = null;
    }
    origRealpath(p, cache, function (er, result) {
      if (newError(er)) {
        old.realpath(p, cache, cb);
      } else {
        cb(er, result);
      }
    });
  }
  function realpathSync(p, cache) {
    if (ok) {
      return origRealpathSync(p, cache);
    }
    try {
      return origRealpathSync(p, cache);
    } catch (er) {
      if (newError(er)) {
        return old.realpathSync(p, cache);
      } else {
        throw er;
      }
    }
  }
  function monkeypatch() {
    fs.realpath = realpath;
    fs.realpathSync = realpathSync;
  }
  function unmonkeypatch() {
    fs.realpath = origRealpath;
    fs.realpathSync = origRealpathSync;
  }
  return fs_realpath;
}

var uncurryThis$g = functionUncurryThis;
var fails$d = fails$v;
var isCallable$7 = isCallable$q;
var classof$8 = classof$b;
var getBuiltIn$2 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop$2 = function () { /* empty */ };
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$4 = uncurryThis$g(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$2);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop$2, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$8(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$4(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$3 = !construct || fails$d(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$2 = isConstructor$3;
var tryToString$4 = tryToString$6;

var $TypeError$8 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor$2(argument)) return argument;
  throw new $TypeError$8(tryToString$4(argument) + ' is not a constructor');
};

var anObject$7 = anObject$f;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var wellKnownSymbol$9 = wellKnownSymbol$n;

var SPECIES$2 = wellKnownSymbol$9('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$7(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$2(S = anObject$7(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
};

var call$f = functionCall;
var uncurryThis$f = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$6 = anObject$f;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var requireObjectCoercible$2 = requireObjectCoercible$a;
var speciesConstructor$1 = speciesConstructor$2;
var advanceStringIndex = advanceStringIndex$2;
var toLength$4 = toLength$7;
var toString$5 = toString$c;
var getMethod$2 = getMethod$6;
var regExpExec = regexpExecAbstract;
var stickyHelpers = regexpStickyHelpers;
var fails$c = fails$v;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push$6 = uncurryThis$f([].push);
var stringSlice$4 = uncurryThis$f(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$c(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call$f(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = isNullOrUndefined$1(separator) ? undefined : getMethod$2(separator, SPLIT);
      return splitter
        ? call$f(splitter, separator, O, limit)
        : call$f(internalSplit, toString$5(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$6(this);
      var S = toString$5(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor$1(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice$4(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength$4(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$6(A, stringSlice$4(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$6(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$6(A, stringSlice$4(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var concatMap;
var hasRequiredConcatMap;
function requireConcatMap() {
  if (hasRequiredConcatMap) return concatMap;
  hasRequiredConcatMap = 1;
  concatMap = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      var x = fn(xs[i], i);
      if (isArray(x)) res.push.apply(res, x);else res.push(x);
    }
    return res;
  };
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  return concatMap;
}

var balancedMatch;
var hasRequiredBalancedMatch;
function requireBalancedMatch() {
  if (hasRequiredBalancedMatch) return balancedMatch;
  hasRequiredBalancedMatch = 1;
  balancedMatch = balanced;
  function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }
  function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
  }
  balanced.range = range;
  function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
      begs = [];
      left = str.length;
      while (i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();
          if (beg < left) {
            left = beg;
            right = bi;
          }
          bi = str.indexOf(b, i + 1);
        }
        i = ai < bi && ai >= 0 ? ai : bi;
      }
      if (begs.length) {
        result = [left, right];
      }
    }
    return result;
  }
  return balancedMatch;
}

var braceExpansion;
var hasRequiredBraceExpansion;
function requireBraceExpansion() {
  if (hasRequiredBraceExpansion) return braceExpansion;
  hasRequiredBraceExpansion = 1;
  var concatMap = requireConcatMap();
  var balanced = requireBalancedMatch();
  braceExpansion = expandTop;
  var escSlash = '\0SLASH' + Math.random() + '\0';
  var escOpen = '\0OPEN' + Math.random() + '\0';
  var escClose = '\0CLOSE' + Math.random() + '\0';
  var escComma = '\0COMMA' + Math.random() + '\0';
  var escPeriod = '\0PERIOD' + Math.random() + '\0';
  function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
  }
  function escapeBraces(str) {
    return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
  }
  function unescapeBraces(str) {
    return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
  }
  function parseCommaParts(str) {
    if (!str) return [''];
    var parts = [];
    var m = balanced('{', '}', str);
    if (!m) return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = parseCommaParts(post);
    if (post.length) {
      p[p.length - 1] += postParts.shift();
      p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
  }
  function expandTop(str) {
    if (!str) return [];
    if (str.substr(0, 2) === '{}') {
      str = '\\{\\}' + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
  }
  function embrace(str) {
    return '{' + str + '}';
  }
  function isPadded(el) {
    return /^-?0\d/.test(el);
  }
  function lte(i, y) {
    return i <= y;
  }
  function gte(i, y) {
    return i >= y;
  }
  function expand(str, isTop) {
    var expansions = [];
    var m = balanced('{', '}', str);
    if (!m || /\$$/.test(m.pre)) return [str];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
      if (m.post.match(/,.*\}/)) {
        str = m.pre + '{' + m.body + escClose + m.post;
        return expand(str);
      }
      return [str];
    }
    var n;
    if (isSequence) {
      n = m.body.split(/\.\./);
    } else {
      n = parseCommaParts(m.body);
      if (n.length === 1) {
        n = expand(n[0], false).map(embrace);
        if (n.length === 1) {
          var post = m.post.length ? expand(m.post, false) : [''];
          return post.map(function (p) {
            return m.pre + n[0] + p;
          });
        }
      }
    }
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [''];
    var N;
    if (isSequence) {
      var x = numeric(n[0]);
      var y = numeric(n[1]);
      var width = Math.max(n[0].length, n[1].length);
      var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
      var test = lte;
      var reverse = y < x;
      if (reverse) {
        incr *= -1;
        test = gte;
      }
      var pad = n.some(isPadded);
      N = [];
      for (var i = x; test(i, y); i += incr) {
        var c;
        if (isAlphaSequence) {
          c = String.fromCharCode(i);
          if (c === '\\') c = '';
        } else {
          c = String(i);
          if (pad) {
            var need = width - c.length;
            if (need > 0) {
              var z = new Array(need + 1).join('0');
              if (i < 0) c = '-' + z + c.slice(1);else c = z + c;
            }
          }
        }
        N.push(c);
      }
    } else {
      N = concatMap(n, function (el) {
        return expand(el, false);
      });
    }
    for (var j = 0; j < N.length; j++) {
      for (var k = 0; k < post.length; k++) {
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion) expansions.push(expansion);
      }
    }
    return expansions;
  }
  return braceExpansion;
}

var minimatch_1;
var hasRequiredMinimatch;
function requireMinimatch() {
  if (hasRequiredMinimatch) return minimatch_1;
  hasRequiredMinimatch = 1;
  minimatch_1 = minimatch;
  minimatch.Minimatch = Minimatch;
  var path = function () {
    try {
      return require('path');
    } catch (e) {}
  }() || {
    sep: '/'
  };
  minimatch.sep = path.sep;
  var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
  var expand = requireBraceExpansion();
  var plTypes = {
    '!': {
      open: '(?:(?!(?:',
      close: '))[^/]*?)'
    },
    '?': {
      open: '(?:',
      close: ')?'
    },
    '+': {
      open: '(?:',
      close: ')+'
    },
    '*': {
      open: '(?:',
      close: ')*'
    },
    '@': {
      open: '(?:',
      close: ')'
    }
  };
  var qmark = '[^/]';
  var star = qmark + '*?';
  var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';
  var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';
  var reSpecials = charSet('().*{}+?[]^$\\!');
  function charSet(s) {
    return s.split('').reduce(function (set, c) {
      set[c] = true;
      return set;
    }, {});
  }
  var slashSplit = /\/+/;
  minimatch.filter = filter;
  function filter(pattern, options) {
    options = options || {};
    return function (p, i, list) {
      return minimatch(p, pattern, options);
    };
  }
  function ext(a, b) {
    b = b || {};
    var t = {};
    Object.keys(a).forEach(function (k) {
      t[k] = a[k];
    });
    Object.keys(b).forEach(function (k) {
      t[k] = b[k];
    });
    return t;
  }
  minimatch.defaults = function (def) {
    if (!def || typeof def !== 'object' || !Object.keys(def).length) {
      return minimatch;
    }
    var orig = minimatch;
    var m = function minimatch(p, pattern, options) {
      return orig(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch(pattern, options) {
      return new orig.Minimatch(pattern, ext(def, options));
    };
    m.Minimatch.defaults = function defaults(options) {
      return orig.defaults(ext(def, options)).Minimatch;
    };
    m.filter = function filter(pattern, options) {
      return orig.filter(pattern, ext(def, options));
    };
    m.defaults = function defaults(options) {
      return orig.defaults(ext(def, options));
    };
    m.makeRe = function makeRe(pattern, options) {
      return orig.makeRe(pattern, ext(def, options));
    };
    m.braceExpand = function braceExpand(pattern, options) {
      return orig.braceExpand(pattern, ext(def, options));
    };
    m.match = function (list, pattern, options) {
      return orig.match(list, pattern, ext(def, options));
    };
    return m;
  };
  Minimatch.defaults = function (def) {
    return minimatch.defaults(def).Minimatch;
  };
  function minimatch(p, pattern, options) {
    assertValidPattern(pattern);
    if (!options) options = {};
    if (!options.nocomment && pattern.charAt(0) === '#') {
      return false;
    }
    return new Minimatch(pattern, options).match(p);
  }
  function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) {
      return new Minimatch(pattern, options);
    }
    assertValidPattern(pattern);
    if (!options) options = {};
    pattern = pattern.trim();
    if (!options.allowWindowsEscape && path.sep !== '/') {
      pattern = pattern.split(path.sep).join('/');
    }
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    this.make();
  }
  Minimatch.prototype.debug = function () {};
  Minimatch.prototype.make = make;
  function make() {
    var pattern = this.pattern;
    var options = this.options;
    if (!options.nocomment && pattern.charAt(0) === '#') {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    var set = this.globSet = this.braceExpand();
    if (options.debug) this.debug = function debug() {
      console.error.apply(console, arguments);
    };
    this.debug(this.pattern, set);
    set = this.globParts = set.map(function (s) {
      return s.split(slashSplit);
    });
    this.debug(this.pattern, set);
    set = set.map(function (s, si, set) {
      return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    set = set.filter(function (s) {
      return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
  }
  Minimatch.prototype.parseNegate = parseNegate;
  function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate) return;
    for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === '!'; i++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset) this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
  }
  minimatch.braceExpand = function (pattern, options) {
    return braceExpand(pattern, options);
  };
  Minimatch.prototype.braceExpand = braceExpand;
  function braceExpand(pattern, options) {
    if (!options) {
      if (this instanceof Minimatch) {
        options = this.options;
      } else {
        options = {};
      }
    }
    pattern = typeof pattern === 'undefined' ? this.pattern : pattern;
    assertValidPattern(pattern);
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
      return [pattern];
    }
    return expand(pattern);
  }
  var MAX_PATTERN_LENGTH = 1024 * 64;
  var assertValidPattern = function (pattern) {
    if (typeof pattern !== 'string') {
      throw new TypeError('invalid pattern');
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
      throw new TypeError('pattern is too long');
    }
  };
  Minimatch.prototype.parse = parse;
  var SUBPARSE = {};
  function parse(pattern, isSub) {
    assertValidPattern(pattern);
    var options = this.options;
    if (pattern === '**') {
      if (!options.noglobstar) return GLOBSTAR;else pattern = '*';
    }
    if (pattern === '') return '';
    var re = '';
    var hasMagic = !!options.nocase;
    var escaping = false;
    var patternListStack = [];
    var negativeLists = [];
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    var patternStart = pattern.charAt(0) === '.' ? '' : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';
    var self = this;
    function clearStateChar() {
      if (stateChar) {
        switch (stateChar) {
          case '*':
            re += star;
            hasMagic = true;
            break;
          case '?':
            re += qmark;
            hasMagic = true;
            break;
          default:
            re += '\\' + stateChar;
            break;
        }
        self.debug('clearStateChar %j %j', stateChar, re);
        stateChar = false;
      }
    }
    for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
      this.debug('%s\t%s %s %j', pattern, i, re, c);
      if (escaping && reSpecials[c]) {
        re += '\\' + c;
        escaping = false;
        continue;
      }
      switch (c) {
        case '/':
          {
            return false;
          }
        case '\\':
          clearStateChar();
          escaping = true;
          continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
          if (inClass) {
            this.debug('  in class');
            if (c === '!' && i === classStart + 1) c = '^';
            re += c;
            continue;
          }
          self.debug('call clearStateChar %j', stateChar);
          clearStateChar();
          stateChar = c;
          if (options.noext) clearStateChar();
          continue;
        case '(':
          if (inClass) {
            re += '(';
            continue;
          }
          if (!stateChar) {
            re += '\\(';
            continue;
          }
          patternListStack.push({
            type: stateChar,
            start: i - 1,
            reStart: re.length,
            open: plTypes[stateChar].open,
            close: plTypes[stateChar].close
          });
          re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
          this.debug('plType %j %j', stateChar, re);
          stateChar = false;
          continue;
        case ')':
          if (inClass || !patternListStack.length) {
            re += '\\)';
            continue;
          }
          clearStateChar();
          hasMagic = true;
          var pl = patternListStack.pop();
          re += pl.close;
          if (pl.type === '!') {
            negativeLists.push(pl);
          }
          pl.reEnd = re.length;
          continue;
        case '|':
          if (inClass || !patternListStack.length || escaping) {
            re += '\\|';
            escaping = false;
            continue;
          }
          clearStateChar();
          re += '|';
          continue;
        case '[':
          clearStateChar();
          if (inClass) {
            re += '\\' + c;
            continue;
          }
          inClass = true;
          classStart = i;
          reClassStart = re.length;
          re += c;
          continue;
        case ']':
          if (i === classStart + 1 || !inClass) {
            re += '\\' + c;
            escaping = false;
            continue;
          }
          var cs = pattern.substring(classStart + 1, i);
          try {
            RegExp('[' + cs + ']');
          } catch (er) {
            var sp = this.parse(cs, SUBPARSE);
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
            hasMagic = hasMagic || sp[1];
            inClass = false;
            continue;
          }
          hasMagic = true;
          inClass = false;
          re += c;
          continue;
        default:
          clearStateChar();
          if (escaping) {
            escaping = false;
          } else if (reSpecials[c] && !(c === '^' && inClass)) {
            re += '\\';
          }
          re += c;
      }
    }
    if (inClass) {
      cs = pattern.substr(classStart + 1);
      sp = this.parse(cs, SUBPARSE);
      re = re.substr(0, reClassStart) + '\\[' + sp[0];
      hasMagic = hasMagic || sp[1];
    }
    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
      var tail = re.slice(pl.reStart + pl.open.length);
      this.debug('setting tail', re, pl);
      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
        if (!$2) {
          $2 = '\\';
        }
        return $1 + $1 + $2 + '|';
      });
      this.debug('tail=%j\n   %s', tail, tail, pl, re);
      var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
      hasMagic = true;
      re = re.slice(0, pl.reStart) + t + '\\(' + tail;
    }
    clearStateChar();
    if (escaping) {
      re += '\\\\';
    }
    var addPatternStart = false;
    switch (re.charAt(0)) {
      case '[':
      case '.':
      case '(':
        addPatternStart = true;
    }
    for (var n = negativeLists.length - 1; n > -1; n--) {
      var nl = negativeLists[n];
      var nlBefore = re.slice(0, nl.reStart);
      var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
      var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
      var nlAfter = re.slice(nl.reEnd);
      nlLast += nlAfter;
      var openParensBefore = nlBefore.split('(').length - 1;
      var cleanAfter = nlAfter;
      for (i = 0; i < openParensBefore; i++) {
        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
      }
      nlAfter = cleanAfter;
      var dollar = '';
      if (nlAfter === '' && isSub !== SUBPARSE) {
        dollar = '$';
      }
      var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
      re = newRe;
    }
    if (re !== '' && hasMagic) {
      re = '(?=.)' + re;
    }
    if (addPatternStart) {
      re = patternStart + re;
    }
    if (isSub === SUBPARSE) {
      return [re, hasMagic];
    }
    if (!hasMagic) {
      return globUnescape(pattern);
    }
    var flags = options.nocase ? 'i' : '';
    try {
      var regExp = new RegExp('^' + re + '$', flags);
    } catch (er) {
      return new RegExp('$.');
    }
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
  }
  minimatch.makeRe = function (pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
  };
  Minimatch.prototype.makeRe = makeRe;
  function makeRe() {
    if (this.regexp || this.regexp === false) return this.regexp;
    var set = this.set;
    if (!set.length) {
      this.regexp = false;
      return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? 'i' : '';
    var re = set.map(function (pattern) {
      return pattern.map(function (p) {
        return p === GLOBSTAR ? twoStar : typeof p === 'string' ? regExpEscape(p) : p._src;
      }).join('\\\/');
    }).join('|');
    re = '^(?:' + re + ')$';
    if (this.negate) re = '^(?!' + re + ').*$';
    try {
      this.regexp = new RegExp(re, flags);
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  minimatch.match = function (list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function (f) {
      return mm.match(f);
    });
    if (mm.options.nonull && !list.length) {
      list.push(pattern);
    }
    return list;
  };
  Minimatch.prototype.match = function match(f, partial) {
    if (typeof partial === 'undefined') partial = this.partial;
    this.debug('match', f, this.pattern);
    if (this.comment) return false;
    if (this.empty) return f === '';
    if (f === '/' && partial) return true;
    var options = this.options;
    if (path.sep !== '/') {
      f = f.split(path.sep).join('/');
    }
    f = f.split(slashSplit);
    this.debug(this.pattern, 'split', f);
    var set = this.set;
    this.debug(this.pattern, 'set', set);
    var filename;
    var i;
    for (i = f.length - 1; i >= 0; i--) {
      filename = f[i];
      if (filename) break;
    }
    for (i = 0; i < set.length; i++) {
      var pattern = set[i];
      var file = f;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      var hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate) return true;
        return !this.negate;
      }
    }
    if (options.flipNegate) return false;
    return this.negate;
  };
  Minimatch.prototype.matchOne = function (file, pattern, partial) {
    var options = this.options;
    this.debug('matchOne', {
      'this': this,
      file: file,
      pattern: pattern
    });
    this.debug('matchOne', file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug('matchOne loop');
      var p = pattern[pi];
      var f = file[fi];
      this.debug(pattern, p, f);
      if (p === false) return false;
      if (p === GLOBSTAR) {
        this.debug('GLOBSTAR', [pattern, p, f]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug('** at the end');
          for (; fi < fl; fi++) {
            if (file[fi] === '.' || file[fi] === '..' || !options.dot && file[fi].charAt(0) === '.') return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug('globstar found match!', fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === '.' || swallowee === '..' || !options.dot && swallowee.charAt(0) === '.') {
              this.debug('dot detected!', file, fr, pattern, pr);
              break;
            }
            this.debug('globstar swallow a segment, and continue');
            fr++;
          }
        }
        if (partial) {
          this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
          if (fr === fl) return true;
        }
        return false;
      }
      var hit;
      if (typeof p === 'string') {
        hit = f === p;
        this.debug('string match', p, f, hit);
      } else {
        hit = f.match(p);
        this.debug('pattern match', p, f, hit);
      }
      if (!hit) return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
        return fi === fl - 1 && file[fi] === '';
      }
    throw new Error('wtf?');
  };
  function globUnescape(s) {
    return s.replace(/\\(.)/g, '$1');
  }
  function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  return minimatch_1;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;
function requireInherits_browser() {
  if (hasRequiredInherits_browser) return inherits_browser.exports;
  hasRequiredInherits_browser = 1;
  if (typeof Object.create === 'function') {
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    inherits_browser.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return inherits_browser.exports;
}

var hasRequiredInherits;
function requireInherits() {
  if (hasRequiredInherits) return inherits.exports;
  hasRequiredInherits = 1;
  try {
    var util = require('util');
    if (typeof util.inherits !== 'function') throw '';
    inherits.exports = util.inherits;
  } catch (e) {
    inherits.exports = requireInherits_browser();
  }
  return inherits.exports;
}

var pathIsAbsolute = {exports: {}};

var hasRequiredPathIsAbsolute;
function requirePathIsAbsolute() {
  if (hasRequiredPathIsAbsolute) return pathIsAbsolute.exports;
  hasRequiredPathIsAbsolute = 1;
  function posix(path) {
    return path.charAt(0) === '/';
  }
  function win32(path) {
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || '';
    var isUnc = Boolean(device && device.charAt(1) !== ':');
    return Boolean(result[2] || isUnc);
  }
  pathIsAbsolute.exports = process.platform === 'win32' ? win32 : posix;
  pathIsAbsolute.exports.posix = posix;
  pathIsAbsolute.exports.win32 = win32;
  return pathIsAbsolute.exports;
}

var tryToString$3 = tryToString$6;

var $TypeError$7 = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw new $TypeError$7('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var uncurryThis$e = functionUncurryThis;

var arraySlice$4 = uncurryThis$e([].slice);

var arraySlice$3 = arraySlice$4;

var floor$4 = Math.floor;

var sort$1 = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor$4(length / 2);
    var left = sort$1(arraySlice$3(array, 0, middle), comparefn);
    var right = sort$1(arraySlice$3(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

var arraySort$1 = sort$1;

var fails$b = fails$v;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$b(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$5 = engineUserAgent;

var firefox = userAgent$5.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent$4 = engineUserAgent;

var webkit = userAgent$4.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$l = _export;
var uncurryThis$d = functionUncurryThis;
var aCallable$9 = aCallable$c;
var toObject$6 = toObject$a;
var lengthOfArrayLike$9 = lengthOfArrayLike$b;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$4 = toString$c;
var fails$a = fails$v;
var internalSort$1 = arraySort$1;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var FF$1 = engineFfVersion;
var IE_OR_EDGE$1 = engineIsIeOrEdge;
var V8$1 = engineV8Version;
var WEBKIT$1 = engineWebkitVersion;

var test$1 = [];
var nativeSort$1 = uncurryThis$d(test$1.sort);
var push$5 = uncurryThis$d(test$1.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$a(function () {
  test$1.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$a(function () {
  test$1.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT$1 = !fails$a(function () {
  // feature detection can be too slow, so check engines versions
  if (V8$1) return V8$1 < 70;
  if (FF$1 && FF$1 > 3) return;
  if (IE_OR_EDGE$1) return true;
  if (WEBKIT$1) return WEBKIT$1 < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test$1.push({ k: chr + index, v: value });
    }
  }

  test$1.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test$1.length; index++) {
    chr = test$1[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

var getSortCompare$1 = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$4(x) > toString$4(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$l({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$9(comparefn);

    var array = toObject$6(this);

    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$9(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$5(items, array[index]);
    }

    internalSort$1(items, getSortCompare$1(comparefn));

    itemsLength = lengthOfArrayLike$9(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var common$2 = {};

var hasRequiredCommon$1;
function requireCommon$1() {
  if (hasRequiredCommon$1) return common$2;
  hasRequiredCommon$1 = 1;
  common$2.setopts = setopts;
  common$2.ownProp = ownProp;
  common$2.makeAbs = makeAbs;
  common$2.finish = finish;
  common$2.mark = mark;
  common$2.isIgnored = isIgnored;
  common$2.childrenIgnored = childrenIgnored;
  function ownProp(obj, field) {
    return Object.prototype.hasOwnProperty.call(obj, field);
  }
  var fs = require$$1;
  var path = require$$0;
  var minimatch = requireMinimatch();
  var isAbsolute = requirePathIsAbsolute();
  var Minimatch = minimatch.Minimatch;
  function alphasort(a, b) {
    return a.localeCompare(b, 'en');
  }
  function setupIgnores(self, options) {
    self.ignore = options.ignore || [];
    if (!Array.isArray(self.ignore)) self.ignore = [self.ignore];
    if (self.ignore.length) {
      self.ignore = self.ignore.map(ignoreMap);
    }
  }
  function ignoreMap(pattern) {
    var gmatcher = null;
    if (pattern.slice(-3) === '/**') {
      var gpattern = pattern.replace(/(\/\*\*)+$/, '');
      gmatcher = new Minimatch(gpattern, {
        dot: true
      });
    }
    return {
      matcher: new Minimatch(pattern, {
        dot: true
      }),
      gmatcher: gmatcher
    };
  }
  function setopts(self, pattern, options) {
    if (!options) options = {};
    if (options.matchBase && -1 === pattern.indexOf("/")) {
      if (options.noglobstar) {
        throw new Error("base matching requires globstar");
      }
      pattern = "**/" + pattern;
    }
    self.silent = !!options.silent;
    self.pattern = pattern;
    self.strict = options.strict !== false;
    self.realpath = !!options.realpath;
    self.realpathCache = options.realpathCache || Object.create(null);
    self.follow = !!options.follow;
    self.dot = !!options.dot;
    self.mark = !!options.mark;
    self.nodir = !!options.nodir;
    if (self.nodir) self.mark = true;
    self.sync = !!options.sync;
    self.nounique = !!options.nounique;
    self.nonull = !!options.nonull;
    self.nosort = !!options.nosort;
    self.nocase = !!options.nocase;
    self.stat = !!options.stat;
    self.noprocess = !!options.noprocess;
    self.absolute = !!options.absolute;
    self.fs = options.fs || fs;
    self.maxLength = options.maxLength || Infinity;
    self.cache = options.cache || Object.create(null);
    self.statCache = options.statCache || Object.create(null);
    self.symlinks = options.symlinks || Object.create(null);
    setupIgnores(self, options);
    self.changedCwd = false;
    var cwd = process.cwd();
    if (!ownProp(options, "cwd")) self.cwd = cwd;else {
      self.cwd = path.resolve(options.cwd);
      self.changedCwd = self.cwd !== cwd;
    }
    self.root = options.root || path.resolve(self.cwd, "/");
    self.root = path.resolve(self.root);
    if (process.platform === "win32") self.root = self.root.replace(/\\/g, "/");
    self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
    if (process.platform === "win32") self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
    self.nomount = !!options.nomount;
    options.nonegate = true;
    options.nocomment = true;
    options.allowWindowsEscape = false;
    self.minimatch = new Minimatch(pattern, options);
    self.options = self.minimatch.options;
  }
  function finish(self) {
    var nou = self.nounique;
    var all = nou ? [] : Object.create(null);
    for (var i = 0, l = self.matches.length; i < l; i++) {
      var matches = self.matches[i];
      if (!matches || Object.keys(matches).length === 0) {
        if (self.nonull) {
          var literal = self.minimatch.globSet[i];
          if (nou) all.push(literal);else all[literal] = true;
        }
      } else {
        var m = Object.keys(matches);
        if (nou) all.push.apply(all, m);else m.forEach(function (m) {
          all[m] = true;
        });
      }
    }
    if (!nou) all = Object.keys(all);
    if (!self.nosort) all = all.sort(alphasort);
    if (self.mark) {
      for (var i = 0; i < all.length; i++) {
        all[i] = self._mark(all[i]);
      }
      if (self.nodir) {
        all = all.filter(function (e) {
          var notDir = !/\/$/.test(e);
          var c = self.cache[e] || self.cache[makeAbs(self, e)];
          if (notDir && c) notDir = c !== 'DIR' && !Array.isArray(c);
          return notDir;
        });
      }
    }
    if (self.ignore.length) all = all.filter(function (m) {
      return !isIgnored(self, m);
    });
    self.found = all;
  }
  function mark(self, p) {
    var abs = makeAbs(self, p);
    var c = self.cache[abs];
    var m = p;
    if (c) {
      var isDir = c === 'DIR' || Array.isArray(c);
      var slash = p.slice(-1) === '/';
      if (isDir && !slash) m += '/';else if (!isDir && slash) m = m.slice(0, -1);
      if (m !== p) {
        var mabs = makeAbs(self, m);
        self.statCache[mabs] = self.statCache[abs];
        self.cache[mabs] = self.cache[abs];
      }
    }
    return m;
  }
  function makeAbs(self, f) {
    var abs = f;
    if (f.charAt(0) === '/') {
      abs = path.join(self.root, f);
    } else if (isAbsolute(f) || f === '') {
      abs = f;
    } else if (self.changedCwd) {
      abs = path.resolve(self.cwd, f);
    } else {
      abs = path.resolve(f);
    }
    if (process.platform === 'win32') abs = abs.replace(/\\/g, '/');
    return abs;
  }
  function isIgnored(self, path) {
    if (!self.ignore.length) return false;
    return self.ignore.some(function (item) {
      return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path));
    });
  }
  function childrenIgnored(self, path) {
    if (!self.ignore.length) return false;
    return self.ignore.some(function (item) {
      return !!(item.gmatcher && item.gmatcher.match(path));
    });
  }
  return common$2;
}

var sync$1;
var hasRequiredSync;
function requireSync() {
  if (hasRequiredSync) return sync$1;
  hasRequiredSync = 1;
  sync$1 = globSync;
  globSync.GlobSync = GlobSync;
  var rp = requireFs_realpath();
  var minimatch = requireMinimatch();
  minimatch.Minimatch;
  requireGlob().Glob;
  var path = require$$0;
  var assert = require$$5;
  var isAbsolute = requirePathIsAbsolute();
  var common = requireCommon$1();
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;
  function globSync(pattern, options) {
    if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    return new GlobSync(pattern, options).found;
  }
  function GlobSync(pattern, options) {
    if (!pattern) throw new Error('must provide pattern');
    if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    if (!(this instanceof GlobSync)) return new GlobSync(pattern, options);
    setopts(this, pattern, options);
    if (this.noprocess) return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false);
    }
    this._finish();
  }
  GlobSync.prototype._finish = function () {
    assert.ok(this instanceof GlobSync);
    if (this.realpath) {
      var self = this;
      this.matches.forEach(function (matchset, index) {
        var set = self.matches[index] = Object.create(null);
        for (var p in matchset) {
          try {
            p = self._makeAbs(p);
            var real = rp.realpathSync(p, self.realpathCache);
            set[real] = true;
          } catch (er) {
            if (er.syscall === 'stat') set[self._makeAbs(p)] = true;else throw er;
          }
        }
      });
    }
    common.finish(this);
  };
  GlobSync.prototype._process = function (pattern, index, inGlobStar) {
    assert.ok(this instanceof GlobSync);
    var n = 0;
    while (typeof pattern[n] === 'string') {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join('/'), index);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join('/');
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null) read = '.';else if (isAbsolute(prefix) || isAbsolute(pattern.map(function (p) {
      return typeof p === 'string' ? p : '[*]';
    }).join('/'))) {
      if (!prefix || !isAbsolute(prefix)) prefix = '/' + prefix;
      read = prefix;
    } else read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read)) return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
  };
  GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries) return;
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== '.' || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m) matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0) return;
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index]) this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix.slice(-1) !== '/') e = prefix + '/' + e;else e = prefix + e;
        }
        if (e.charAt(0) === '/' && !this.nomount) {
          e = path.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return;
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix) newPattern = [prefix, e];else newPattern = [e];
      this._process(newPattern.concat(remain), index, inGlobStar);
    }
  };
  GlobSync.prototype._emitMatch = function (index, e) {
    if (isIgnored(this, e)) return;
    var abs = this._makeAbs(e);
    if (this.mark) e = this._mark(e);
    if (this.absolute) {
      e = abs;
    }
    if (this.matches[index][e]) return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === 'DIR' || Array.isArray(c)) return;
    }
    this.matches[index][e] = true;
    if (this.stat) this._stat(e);
  };
  GlobSync.prototype._readdirInGlobStar = function (abs) {
    if (this.follow) return this._readdir(abs, false);
    var entries;
    var lstat;
    try {
      lstat = this.fs.lstatSync(abs);
    } catch (er) {
      if (er.code === 'ENOENT') {
        return null;
      }
    }
    var isSym = lstat && lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    if (!isSym && lstat && !lstat.isDirectory()) this.cache[abs] = 'FILE';else entries = this._readdir(abs, false);
    return entries;
  };
  GlobSync.prototype._readdir = function (abs, inGlobStar) {
    if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === 'FILE') return null;
      if (Array.isArray(c)) return c;
    }
    try {
      return this._readdirEntries(abs, this.fs.readdirSync(abs));
    } catch (er) {
      this._readdirError(abs, er);
      return null;
    }
  };
  GlobSync.prototype._readdirEntries = function (abs, entries) {
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/') e = abs + e;else e = abs + '/' + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return entries;
  };
  GlobSync.prototype._readdirError = function (f, er) {
    switch (er.code) {
      case 'ENOTSUP':
      case 'ENOTDIR':
        var abs = this._makeAbs(f);
        this.cache[abs] = 'FILE';
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + ' invalid cwd ' + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          throw error;
        }
        break;
      case 'ENOENT':
      case 'ELOOP':
      case 'ENAMETOOLONG':
      case 'UNKNOWN':
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict) throw er;
        if (!this.silent) console.error('glob error', er);
        break;
    }
  };
  GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    if (!entries) return;
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    if (isSym && inGlobStar) return;
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !this.dot) continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true);
    }
  };
  GlobSync.prototype._processSimple = function (prefix, index) {
    var exists = this._stat(prefix);
    if (!this.matches[index]) this.matches[index] = Object.create(null);
    if (!exists) return;
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === '/') {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail) prefix += '/';
      }
    }
    if (process.platform === 'win32') prefix = prefix.replace(/\\/g, '/');
    this._emitMatch(index, prefix);
  };
  GlobSync.prototype._stat = function (f) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength) return false;
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c)) c = 'DIR';
      if (!needDir || c === 'DIR') return c;
      if (needDir && c === 'FILE') return false;
    }
    var stat = this.statCache[abs];
    if (!stat) {
      var lstat;
      try {
        lstat = this.fs.lstatSync(abs);
      } catch (er) {
        if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
          this.statCache[abs] = false;
          return false;
        }
      }
      if (lstat && lstat.isSymbolicLink()) {
        try {
          stat = this.fs.statSync(abs);
        } catch (er) {
          stat = lstat;
        }
      } else {
        stat = lstat;
      }
    }
    this.statCache[abs] = stat;
    var c = true;
    if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === 'FILE') return false;
    return c;
  };
  GlobSync.prototype._mark = function (p) {
    return common.mark(this, p);
  };
  GlobSync.prototype._makeAbs = function (f) {
    return common.makeAbs(this, f);
  };
  return sync$1;
}

var wrappy_1;
var hasRequiredWrappy;
function requireWrappy() {
  if (hasRequiredWrappy) return wrappy_1;
  hasRequiredWrappy = 1;
  wrappy_1 = wrappy;
  function wrappy(fn, cb) {
    if (fn && cb) return wrappy(fn)(cb);
    if (typeof fn !== 'function') throw new TypeError('need wrapper function');
    Object.keys(fn).forEach(function (k) {
      wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      var ret = fn.apply(this, args);
      var cb = args[args.length - 1];
      if (typeof ret === 'function' && ret !== cb) {
        Object.keys(cb).forEach(function (k) {
          ret[k] = cb[k];
        });
      }
      return ret;
    }
  }
  return wrappy_1;
}

var once = {exports: {}};

var hasRequiredOnce;
function requireOnce() {
  if (hasRequiredOnce) return once.exports;
  hasRequiredOnce = 1;
  var wrappy = requireWrappy();
  once.exports = wrappy(once$1);
  once.exports.strict = wrappy(onceStrict);
  once$1.proto = once$1(function () {
    Object.defineProperty(Function.prototype, 'once', {
      value: function () {
        return once$1(this);
      },
      configurable: true
    });
    Object.defineProperty(Function.prototype, 'onceStrict', {
      value: function () {
        return onceStrict(this);
      },
      configurable: true
    });
  });
  function once$1(fn) {
    var f = function () {
      if (f.called) return f.value;
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
  }
  function onceStrict(fn) {
    var f = function () {
      if (f.called) throw new Error(f.onceError);
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || 'Function wrapped with `once`';
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
  }
  return once.exports;
}

var inflight_1;
var hasRequiredInflight;
function requireInflight() {
  if (hasRequiredInflight) return inflight_1;
  hasRequiredInflight = 1;
  var wrappy = requireWrappy();
  var reqs = Object.create(null);
  var once = requireOnce();
  inflight_1 = wrappy(inflight);
  function inflight(key, cb) {
    if (reqs[key]) {
      reqs[key].push(cb);
      return null;
    } else {
      reqs[key] = [cb];
      return makeres(key);
    }
  }
  function makeres(key) {
    return once(function RES() {
      var cbs = reqs[key];
      var len = cbs.length;
      var args = slice(arguments);
      try {
        for (var i = 0; i < len; i++) {
          cbs[i].apply(null, args);
        }
      } finally {
        if (cbs.length > len) {
          cbs.splice(0, len);
          process.nextTick(function () {
            RES.apply(null, args);
          });
        } else {
          delete reqs[key];
        }
      }
    });
  }
  function slice(args) {
    var length = args.length;
    var array = [];
    for (var i = 0; i < length; i++) array[i] = args[i];
    return array;
  }
  return inflight_1;
}

var glob_1;
var hasRequiredGlob;
function requireGlob() {
  if (hasRequiredGlob) return glob_1;
  hasRequiredGlob = 1;
  glob_1 = glob;
  var rp = requireFs_realpath();
  var minimatch = requireMinimatch();
  minimatch.Minimatch;
  var inherits = requireInherits();
  var EE = require$$3.EventEmitter;
  var path = require$$0;
  var assert = require$$5;
  var isAbsolute = requirePathIsAbsolute();
  var globSync = requireSync();
  var common = requireCommon$1();
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var inflight = requireInflight();
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;
  var once = requireOnce();
  function glob(pattern, options, cb) {
    if (typeof options === 'function') cb = options, options = {};
    if (!options) options = {};
    if (options.sync) {
      if (cb) throw new TypeError('callback provided to sync glob');
      return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
  }
  glob.sync = globSync;
  var GlobSync = glob.GlobSync = globSync.GlobSync;
  glob.glob = glob;
  function extend(origin, add) {
    if (add === null || typeof add !== 'object') {
      return origin;
    }
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  glob.hasMagic = function (pattern, options_) {
    var options = extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern) return false;
    if (set.length > 1) return true;
    for (var j = 0; j < set[0].length; j++) {
      if (typeof set[0][j] !== 'string') return true;
    }
    return false;
  };
  glob.Glob = Glob;
  inherits(Glob, EE);
  function Glob(pattern, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = null;
    }
    if (options && options.sync) {
      if (cb) throw new TypeError('callback provided to sync glob');
      return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob)) return new Glob(pattern, options, cb);
    setopts(this, pattern, options);
    this._didRealPath = false;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    if (typeof cb === 'function') {
      cb = once(cb);
      this.on('error', cb);
      this.on('end', function (matches) {
        cb(null, matches);
      });
    }
    var self = this;
    this._processing = 0;
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess) return this;
    if (n === 0) return done();
    var sync = true;
    for (var i = 0; i < n; i++) {
      this._process(this.minimatch.set[i], i, false, done);
    }
    sync = false;
    function done() {
      --self._processing;
      if (self._processing <= 0) {
        if (sync) {
          process.nextTick(function () {
            self._finish();
          });
        } else {
          self._finish();
        }
      }
    }
  }
  Glob.prototype._finish = function () {
    assert(this instanceof Glob);
    if (this.aborted) return;
    if (this.realpath && !this._didRealpath) return this._realpath();
    common.finish(this);
    this.emit('end', this.found);
  };
  Glob.prototype._realpath = function () {
    if (this._didRealpath) return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0) return this._finish();
    var self = this;
    for (var i = 0; i < this.matches.length; i++) this._realpathSet(i, next);
    function next() {
      if (--n === 0) self._finish();
    }
  };
  Glob.prototype._realpathSet = function (index, cb) {
    var matchset = this.matches[index];
    if (!matchset) return cb();
    var found = Object.keys(matchset);
    var self = this;
    var n = found.length;
    if (n === 0) return cb();
    var set = this.matches[index] = Object.create(null);
    found.forEach(function (p, i) {
      p = self._makeAbs(p);
      rp.realpath(p, self.realpathCache, function (er, real) {
        if (!er) set[real] = true;else if (er.syscall === 'stat') set[p] = true;else self.emit('error', er);
        if (--n === 0) {
          self.matches[index] = set;
          cb();
        }
      });
    });
  };
  Glob.prototype._mark = function (p) {
    return common.mark(this, p);
  };
  Glob.prototype._makeAbs = function (f) {
    return common.makeAbs(this, f);
  };
  Glob.prototype.abort = function () {
    this.aborted = true;
    this.emit('abort');
  };
  Glob.prototype.pause = function () {
    if (!this.paused) {
      this.paused = true;
      this.emit('pause');
    }
  };
  Glob.prototype.resume = function () {
    if (this.paused) {
      this.emit('resume');
      this.paused = false;
      if (this._emitQueue.length) {
        var eq = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var i = 0; i < eq.length; i++) {
          var e = eq[i];
          this._emitMatch(e[0], e[1]);
        }
      }
      if (this._processQueue.length) {
        var pq = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var i = 0; i < pq.length; i++) {
          var p = pq[i];
          this._processing--;
          this._process(p[0], p[1], p[2], p[3]);
        }
      }
    }
  };
  Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === 'function');
    if (this.aborted) return;
    this._processing++;
    if (this.paused) {
      this._processQueue.push([pattern, index, inGlobStar, cb]);
      return;
    }
    var n = 0;
    while (typeof pattern[n] === 'string') {
      n++;
    }
    var prefix;
    switch (n) {
      case pattern.length:
        this._processSimple(pattern.join('/'), index, cb);
        return;
      case 0:
        prefix = null;
        break;
      default:
        prefix = pattern.slice(0, n).join('/');
        break;
    }
    var remain = pattern.slice(n);
    var read;
    if (prefix === null) read = '.';else if (isAbsolute(prefix) || isAbsolute(pattern.map(function (p) {
      return typeof p === 'string' ? p : '[*]';
    }).join('/'))) {
      if (!prefix || !isAbsolute(prefix)) prefix = '/' + prefix;
      read = prefix;
    } else read = prefix;
    var abs = this._makeAbs(read);
    if (childrenIgnored(this, read)) return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
  };
  Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function (er, entries) {
      return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries) return cb();
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      if (e.charAt(0) !== '.' || dotOk) {
        var m;
        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }
        if (m) matchedEntries.push(e);
      }
    }
    var len = matchedEntries.length;
    if (len === 0) return cb();
    if (remain.length === 1 && !this.mark && !this.stat) {
      if (!this.matches[index]) this.matches[index] = Object.create(null);
      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];
        if (prefix) {
          if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
        }
        if (e.charAt(0) === '/' && !this.nomount) {
          e = path.join(this.root, e);
        }
        this._emitMatch(index, e);
      }
      return cb();
    }
    remain.shift();
    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      if (prefix) {
        if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
      }
      this._process([e].concat(remain), index, inGlobStar, cb);
    }
    cb();
  };
  Glob.prototype._emitMatch = function (index, e) {
    if (this.aborted) return;
    if (isIgnored(this, e)) return;
    if (this.paused) {
      this._emitQueue.push([index, e]);
      return;
    }
    var abs = isAbsolute(e) ? e : this._makeAbs(e);
    if (this.mark) e = this._mark(e);
    if (this.absolute) e = abs;
    if (this.matches[index][e]) return;
    if (this.nodir) {
      var c = this.cache[abs];
      if (c === 'DIR' || Array.isArray(c)) return;
    }
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st) this.emit('stat', e, st);
    this.emit('match', e);
  };
  Glob.prototype._readdirInGlobStar = function (abs, cb) {
    if (this.aborted) return;
    if (this.follow) return this._readdir(abs, false, cb);
    var lstatkey = 'lstat\0' + abs;
    var self = this;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb) self.fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
      if (er && er.code === 'ENOENT') return cb();
      var isSym = lstat && lstat.isSymbolicLink();
      self.symlinks[abs] = isSym;
      if (!isSym && lstat && !lstat.isDirectory()) {
        self.cache[abs] = 'FILE';
        cb();
      } else self._readdir(abs, false, cb);
    }
  };
  Glob.prototype._readdir = function (abs, inGlobStar, cb) {
    if (this.aborted) return;
    cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
    if (!cb) return;
    if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs, cb);
    if (ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (!c || c === 'FILE') return cb();
      if (Array.isArray(c)) return cb(null, c);
    }
    var self = this;
    self.fs.readdir(abs, readdirCb(this, abs, cb));
  };
  function readdirCb(self, abs, cb) {
    return function (er, entries) {
      if (er) self._readdirError(abs, er, cb);else self._readdirEntries(abs, entries, cb);
    };
  }
  Glob.prototype._readdirEntries = function (abs, entries, cb) {
    if (this.aborted) return;
    if (!this.mark && !this.stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/') e = abs + e;else e = abs + '/' + e;
        this.cache[e] = true;
      }
    }
    this.cache[abs] = entries;
    return cb(null, entries);
  };
  Glob.prototype._readdirError = function (f, er, cb) {
    if (this.aborted) return;
    switch (er.code) {
      case 'ENOTSUP':
      case 'ENOTDIR':
        var abs = this._makeAbs(f);
        this.cache[abs] = 'FILE';
        if (abs === this.cwdAbs) {
          var error = new Error(er.code + ' invalid cwd ' + this.cwd);
          error.path = this.cwd;
          error.code = er.code;
          this.emit('error', error);
          this.abort();
        }
        break;
      case 'ENOENT':
      case 'ELOOP':
      case 'ENAMETOOLONG':
      case 'UNKNOWN':
        this.cache[this._makeAbs(f)] = false;
        break;
      default:
        this.cache[this._makeAbs(f)] = false;
        if (this.strict) {
          this.emit('error', er);
          this.abort();
        }
        if (!this.silent) console.error('glob error', er);
        break;
    }
    return cb();
  };
  Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function (er, entries) {
      self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };
  Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    if (!entries) return cb();
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    if (isSym && inGlobStar) return cb();
    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !this.dot) continue;
      var instead = gspref.concat(entries[i], remainWithoutGlobStar);
      this._process(instead, index, true, cb);
      var below = gspref.concat(entries[i], remain);
      this._process(below, index, true, cb);
    }
    cb();
  };
  Glob.prototype._processSimple = function (prefix, index, cb) {
    var self = this;
    this._stat(prefix, function (er, exists) {
      self._processSimple2(prefix, index, er, exists, cb);
    });
  };
  Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
    if (!this.matches[index]) this.matches[index] = Object.create(null);
    if (!exists) return cb();
    if (prefix && isAbsolute(prefix) && !this.nomount) {
      var trail = /[\/\\]$/.test(prefix);
      if (prefix.charAt(0) === '/') {
        prefix = path.join(this.root, prefix);
      } else {
        prefix = path.resolve(this.root, prefix);
        if (trail) prefix += '/';
      }
    }
    if (process.platform === 'win32') prefix = prefix.replace(/\\/g, '/');
    this._emitMatch(index, prefix);
    cb();
  };
  Glob.prototype._stat = function (f, cb) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === '/';
    if (f.length > this.maxLength) return cb();
    if (!this.stat && ownProp(this.cache, abs)) {
      var c = this.cache[abs];
      if (Array.isArray(c)) c = 'DIR';
      if (!needDir || c === 'DIR') return cb(null, c);
      if (needDir && c === 'FILE') return cb();
    }
    var stat = this.statCache[abs];
    if (stat !== undefined) {
      if (stat === false) return cb(null, stat);else {
        var type = stat.isDirectory() ? 'DIR' : 'FILE';
        if (needDir && type === 'FILE') return cb();else return cb(null, type, stat);
      }
    }
    var self = this;
    var statcb = inflight('stat\0' + abs, lstatcb_);
    if (statcb) self.fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
      if (lstat && lstat.isSymbolicLink()) {
        return self.fs.stat(abs, function (er, stat) {
          if (er) self._stat2(f, abs, null, lstat, cb);else self._stat2(f, abs, er, stat, cb);
        });
      } else {
        self._stat2(f, abs, er, lstat, cb);
      }
    }
  };
  Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
    if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
      this.statCache[abs] = false;
      return cb();
    }
    var needDir = f.slice(-1) === '/';
    this.statCache[abs] = stat;
    if (abs.slice(-1) === '/' && stat && !stat.isDirectory()) return cb(null, false, stat);
    var c = true;
    if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === 'FILE') return cb();
    return cb(null, c, stat);
  };
  return glob_1;
}

var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common$3;
  hasRequiredCommon = 1;
  var os = require$$0$1;
  var fs = require$$1;
  var glob = requireGlob();
  var shell = requireShell();
  var shellMethods = Object.create(shell);
  common$3.extend = Object.assign;
  var isElectron = Boolean(process.versions.electron);
  var DEFAULT_CONFIG = {
    fatal: false,
    globOptions: {},
    maxdepth: 255,
    noglob: false,
    silent: false,
    verbose: false,
    execPath: null,
    bufLength: 64 * 1024
  };
  var config = {
    reset: function () {
      Object.assign(this, DEFAULT_CONFIG);
      if (!isElectron) {
        this.execPath = process.execPath;
      }
    },
    resetForTesting: function () {
      this.reset();
      this.silent = true;
    }
  };
  config.reset();
  common$3.config = config;
  var state = {
    error: null,
    errorCode: 0,
    currentCmd: 'shell.js'
  };
  common$3.state = state;
  delete process.env.OLDPWD;
  function isObject(a) {
    return typeof a === 'object' && a !== null;
  }
  common$3.isObject = isObject;
  function log() {
    if (!config.silent) {
      console.error.apply(console, arguments);
    }
  }
  common$3.log = log;
  function convertErrorOutput(msg) {
    if (typeof msg !== 'string') {
      throw new TypeError('input must be a string');
    }
    return msg.replace(/\\/g, '/');
  }
  common$3.convertErrorOutput = convertErrorOutput;
  function error(msg, _code, options) {
    if (typeof msg !== 'string') throw new Error('msg must be a string');
    var DEFAULT_OPTIONS = {
      continue: false,
      code: 1,
      prefix: state.currentCmd + ': ',
      silent: false
    };
    if (typeof _code === 'number' && isObject(options)) {
      options.code = _code;
    } else if (isObject(_code)) {
      options = _code;
    } else if (typeof _code === 'number') {
      options = {
        code: _code
      };
    } else if (typeof _code !== 'number') {
      options = {};
    }
    options = Object.assign({}, DEFAULT_OPTIONS, options);
    if (!state.errorCode) state.errorCode = options.code;
    var logEntry = convertErrorOutput(options.prefix + msg);
    state.error = state.error ? state.error + '\n' : '';
    state.error += logEntry;
    if (config.fatal) throw new Error(logEntry);
    if (msg.length > 0 && !options.silent) log(logEntry);
    if (!options.continue) {
      throw {
        msg: 'earlyExit',
        retValue: new ShellString('', state.error, state.errorCode)
      };
    }
  }
  common$3.error = error;
  function ShellString(stdout, stderr, code) {
    var that;
    if (stdout instanceof Array) {
      that = stdout;
      that.stdout = stdout.join('\n');
      if (stdout.length > 0) that.stdout += '\n';
    } else {
      that = new String(stdout);
      that.stdout = stdout;
    }
    that.stderr = stderr;
    that.code = code;
    pipeMethods.forEach(function (cmd) {
      that[cmd] = shellMethods[cmd].bind(that);
    });
    return that;
  }
  common$3.ShellString = ShellString;
  function parseOptions(opt, map, errorOptions) {
    if (typeof opt !== 'string' && !isObject(opt)) {
      throw new Error('options must be strings or key-value pairs');
    } else if (!isObject(map)) {
      throw new Error('parseOptions() internal error: map must be an object');
    } else if (errorOptions && !isObject(errorOptions)) {
      throw new Error('parseOptions() internal error: errorOptions must be object');
    }
    if (opt === '--') {
      return {};
    }
    var options = {};
    Object.keys(map).forEach(function (letter) {
      var optName = map[letter];
      if (optName[0] !== '!') {
        options[optName] = false;
      }
    });
    if (opt === '') return options;
    if (typeof opt === 'string') {
      if (opt[0] !== '-') {
        throw new Error("Options string must start with a '-'");
      }
      var chars = opt.slice(1).split('');
      chars.forEach(function (c) {
        if (c in map) {
          var optionName = map[c];
          if (optionName[0] === '!') {
            options[optionName.slice(1)] = false;
          } else {
            options[optionName] = true;
          }
        } else {
          error('option not recognized: ' + c, errorOptions || {});
        }
      });
    } else {
      Object.keys(opt).forEach(function (key) {
        var c = key[1];
        if (c in map) {
          var optionName = map[c];
          options[optionName] = opt[key];
        } else {
          error('option not recognized: ' + c, errorOptions || {});
        }
      });
    }
    return options;
  }
  common$3.parseOptions = parseOptions;
  function expand(list) {
    if (!Array.isArray(list)) {
      throw new TypeError('must be an array');
    }
    var expanded = [];
    list.forEach(function (listEl) {
      if (typeof listEl !== 'string') {
        expanded.push(listEl);
      } else {
        var ret;
        try {
          ret = glob.sync(listEl, config.globOptions);
          ret = ret.length > 0 ? ret : [listEl];
        } catch (e) {
          ret = [listEl];
        }
        expanded = expanded.concat(ret);
      }
    });
    return expanded;
  }
  common$3.expand = expand;
  var buffer = typeof Buffer.alloc === 'function' ? function (len) {
    return Buffer.alloc(len || config.bufLength);
  } : function (len) {
    return new Buffer(len || config.bufLength);
  };
  common$3.buffer = buffer;
  function unlinkSync(file) {
    try {
      fs.unlinkSync(file);
    } catch (e) {
      if (e.code === 'EPERM') {
        fs.chmodSync(file, '0666');
        fs.unlinkSync(file);
      } else {
        throw e;
      }
    }
  }
  common$3.unlinkSync = unlinkSync;
  function statFollowLinks() {
    return fs.statSync.apply(fs, arguments);
  }
  common$3.statFollowLinks = statFollowLinks;
  function statNoFollowLinks() {
    return fs.lstatSync.apply(fs, arguments);
  }
  common$3.statNoFollowLinks = statNoFollowLinks;
  function randomFileName() {
    function randomHash(count) {
      if (count === 1) {
        return parseInt(16 * Math.random(), 10).toString(16);
      }
      var hash = '';
      for (var i = 0; i < count; i++) {
        hash += randomHash(1);
      }
      return hash;
    }
    return 'shelljs_' + randomHash(20);
  }
  common$3.randomFileName = randomFileName;
  function wrap(cmd, fn, options) {
    options = options || {};
    return function () {
      var retValue = null;
      state.currentCmd = cmd;
      state.error = null;
      state.errorCode = 0;
      try {
        var args = [].slice.call(arguments, 0);
        if (config.verbose) {
          console.error.apply(console, [cmd].concat(args));
        }
        state.pipedValue = this && typeof this.stdout === 'string' ? this.stdout : '';
        if (options.unix === false) {
          retValue = fn.apply(this, args);
        } else {
          if (isObject(args[0]) && args[0].constructor.name === 'Object') {} else if (args.length === 0 || typeof args[0] !== 'string' || args[0].length <= 1 || args[0][0] !== '-') {
            args.unshift('');
          }
          args = args.reduce(function (accum, cur) {
            if (Array.isArray(cur)) {
              return accum.concat(cur);
            }
            accum.push(cur);
            return accum;
          }, []);
          args = args.map(function (arg) {
            if (isObject(arg) && arg.constructor.name === 'String') {
              return arg.toString();
            }
            return arg;
          });
          var homeDir = os.homedir();
          args = args.map(function (arg) {
            if (typeof arg === 'string' && arg.slice(0, 2) === '~/' || arg === '~') {
              return arg.replace(/^~/, homeDir);
            }
            return arg;
          });
          if (!config.noglob && options.allowGlobbing === true) {
            args = args.slice(0, options.globStart).concat(expand(args.slice(options.globStart)));
          }
          try {
            if (isObject(options.cmdOptions)) {
              args[0] = parseOptions(args[0], options.cmdOptions);
            }
            retValue = fn.apply(this, args);
          } catch (e) {
            if (e.msg === 'earlyExit') {
              retValue = e.retValue;
            } else {
              throw e;
            }
          }
        }
      } catch (e) {
        if (!state.error) {
          e.name = 'ShellJSInternalError';
          throw e;
        }
        if (config.fatal) throw e;
      }
      if (options.wrapOutput && (typeof retValue === 'string' || Array.isArray(retValue))) {
        retValue = new ShellString(retValue, state.error, state.errorCode);
      }
      state.currentCmd = 'shell.js';
      return retValue;
    };
  }
  common$3.wrap = wrap;
  function _readFromPipe() {
    return state.pipedValue;
  }
  common$3.readFromPipe = _readFromPipe;
  var DEFAULT_WRAP_OPTIONS = {
    allowGlobbing: true,
    canReceivePipe: false,
    cmdOptions: null,
    globStart: 1,
    pipeOnly: false,
    wrapOutput: true,
    unix: true
  };
  var pipeMethods = [];
  function _register(name, implementation, wrapOptions) {
    wrapOptions = wrapOptions || {};
    Object.keys(wrapOptions).forEach(function (option) {
      if (!DEFAULT_WRAP_OPTIONS.hasOwnProperty(option)) {
        throw new Error("Unknown option '" + option + "'");
      }
      if (typeof wrapOptions[option] !== typeof DEFAULT_WRAP_OPTIONS[option]) {
        throw new TypeError("Unsupported type '" + typeof wrapOptions[option] + "' for option '" + option + "'");
      }
    });
    wrapOptions = Object.assign({}, DEFAULT_WRAP_OPTIONS, wrapOptions);
    if (shell.hasOwnProperty(name)) {
      throw new Error('Command `' + name + '` already exists');
    }
    if (wrapOptions.pipeOnly) {
      wrapOptions.canReceivePipe = true;
      shellMethods[name] = wrap(name, implementation, wrapOptions);
    } else {
      shell[name] = wrap(name, implementation, wrapOptions);
    }
    if (wrapOptions.canReceivePipe) {
      pipeMethods.push(name);
    }
  }
  common$3.register = _register;
  return common$3;
}

var cat;
var hasRequiredCat;
function requireCat() {
  if (hasRequiredCat) return cat;
  hasRequiredCat = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('cat', _cat, {
    canReceivePipe: true,
    cmdOptions: {
      'n': 'number'
    }
  });
  function _cat(options, files) {
    var cat = common.readFromPipe();
    if (!files && !cat) common.error('no paths given');
    files = [].slice.call(arguments, 1);
    files.forEach(function (file) {
      if (!fs.existsSync(file)) {
        common.error('no such file or directory: ' + file);
      } else if (common.statFollowLinks(file).isDirectory()) {
        common.error(file + ': Is a directory');
      }
      cat += fs.readFileSync(file, 'utf8');
    });
    if (options.number) {
      cat = addNumbers(cat);
    }
    return cat;
  }
  cat = _cat;
  function addNumbers(cat) {
    var lines = cat.split('\n');
    var lastLine = lines.pop();
    lines = lines.map(function (line, i) {
      return numberedLine(i + 1, line);
    });
    if (lastLine.length) {
      lastLine = numberedLine(lines.length + 1, lastLine);
    }
    lines.push(lastLine);
    return lines.join('\n');
  }
  function numberedLine(n, line) {
    var number = ('     ' + n).slice(-6) + '\t';
    return number + line;
  }
  return cat;
}

var cd;
var hasRequiredCd;
function requireCd() {
  if (hasRequiredCd) return cd;
  hasRequiredCd = 1;
  var os = require$$0$1;
  var common = requireCommon();
  common.register('cd', _cd, {});
  function _cd(options, dir) {
    if (!dir) dir = os.homedir();
    if (dir === '-') {
      if (!process.env.OLDPWD) {
        common.error('could not find previous directory');
      } else {
        dir = process.env.OLDPWD;
      }
    }
    try {
      var curDir = process.cwd();
      process.chdir(dir);
      process.env.OLDPWD = curDir;
    } catch (e) {
      var err;
      try {
        common.statFollowLinks(dir);
        err = 'not a directory: ' + dir;
      } catch (e2) {
        err = 'no such file or directory: ' + dir;
      }
      if (err) common.error(err);
    }
    return '';
  }
  cd = _cd;
  return cd;
}

var chmod;
var hasRequiredChmod;
function requireChmod() {
  if (hasRequiredChmod) return chmod;
  hasRequiredChmod = 1;
  var common = requireCommon();
  var fs = require$$1;
  var path = require$$0;
  var PERMS = function (base) {
    return {
      OTHER_EXEC: base.EXEC,
      OTHER_WRITE: base.WRITE,
      OTHER_READ: base.READ,
      GROUP_EXEC: base.EXEC << 3,
      GROUP_WRITE: base.WRITE << 3,
      GROUP_READ: base.READ << 3,
      OWNER_EXEC: base.EXEC << 6,
      OWNER_WRITE: base.WRITE << 6,
      OWNER_READ: base.READ << 6,
      STICKY: parseInt('01000', 8),
      SETGID: parseInt('02000', 8),
      SETUID: parseInt('04000', 8),
      TYPE_MASK: parseInt('0770000', 8)
    };
  }({
    EXEC: 1,
    WRITE: 2,
    READ: 4
  });
  common.register('chmod', _chmod, {});
  function _chmod(options, mode, filePattern) {
    if (!filePattern) {
      if (options.length > 0 && options.charAt(0) === '-') {
        [].unshift.call(arguments, '');
      } else {
        common.error('You must specify a file.');
      }
    }
    options = common.parseOptions(options, {
      'R': 'recursive',
      'c': 'changes',
      'v': 'verbose'
    });
    filePattern = [].slice.call(arguments, 2);
    var files;
    if (options.recursive) {
      files = [];
      filePattern.forEach(function addFile(expandedFile) {
        var stat = common.statNoFollowLinks(expandedFile);
        if (!stat.isSymbolicLink()) {
          files.push(expandedFile);
          if (stat.isDirectory()) {
            fs.readdirSync(expandedFile).forEach(function (child) {
              addFile(expandedFile + '/' + child);
            });
          }
        }
      });
    } else {
      files = filePattern;
    }
    files.forEach(function innerChmod(file) {
      file = path.resolve(file);
      if (!fs.existsSync(file)) {
        common.error('File not found: ' + file);
      }
      if (options.recursive && common.statNoFollowLinks(file).isSymbolicLink()) {
        return;
      }
      var stat = common.statFollowLinks(file);
      var isDir = stat.isDirectory();
      var perms = stat.mode;
      var type = perms & PERMS.TYPE_MASK;
      var newPerms = perms;
      if (isNaN(parseInt(mode, 8))) {
        mode.split(',').forEach(function (symbolicMode) {
          var pattern = /([ugoa]*)([=\+-])([rwxXst]*)/i;
          var matches = pattern.exec(symbolicMode);
          if (matches) {
            var applyTo = matches[1];
            var operator = matches[2];
            var change = matches[3];
            var changeOwner = applyTo.indexOf('u') !== -1 || applyTo === 'a' || applyTo === '';
            var changeGroup = applyTo.indexOf('g') !== -1 || applyTo === 'a' || applyTo === '';
            var changeOther = applyTo.indexOf('o') !== -1 || applyTo === 'a' || applyTo === '';
            var changeRead = change.indexOf('r') !== -1;
            var changeWrite = change.indexOf('w') !== -1;
            var changeExec = change.indexOf('x') !== -1;
            var changeExecDir = change.indexOf('X') !== -1;
            var changeSticky = change.indexOf('t') !== -1;
            var changeSetuid = change.indexOf('s') !== -1;
            if (changeExecDir && isDir) {
              changeExec = true;
            }
            var mask = 0;
            if (changeOwner) {
              mask |= (changeRead ? PERMS.OWNER_READ : 0) + (changeWrite ? PERMS.OWNER_WRITE : 0) + (changeExec ? PERMS.OWNER_EXEC : 0) + (changeSetuid ? PERMS.SETUID : 0);
            }
            if (changeGroup) {
              mask |= (changeRead ? PERMS.GROUP_READ : 0) + (changeWrite ? PERMS.GROUP_WRITE : 0) + (changeExec ? PERMS.GROUP_EXEC : 0) + (changeSetuid ? PERMS.SETGID : 0);
            }
            if (changeOther) {
              mask |= (changeRead ? PERMS.OTHER_READ : 0) + (changeWrite ? PERMS.OTHER_WRITE : 0) + (changeExec ? PERMS.OTHER_EXEC : 0);
            }
            if (changeSticky) {
              mask |= PERMS.STICKY;
            }
            switch (operator) {
              case '+':
                newPerms |= mask;
                break;
              case '-':
                newPerms &= ~mask;
                break;
              case '=':
                newPerms = type + mask;
                if (common.statFollowLinks(file).isDirectory()) {
                  newPerms |= PERMS.SETUID + PERMS.SETGID & perms;
                }
                break;
              default:
                common.error('Could not recognize operator: `' + operator + '`');
            }
            if (options.verbose) {
              console.log(file + ' -> ' + newPerms.toString(8));
            }
            if (perms !== newPerms) {
              if (!options.verbose && options.changes) {
                console.log(file + ' -> ' + newPerms.toString(8));
              }
              fs.chmodSync(file, newPerms);
              perms = newPerms;
            }
          } else {
            common.error('Invalid symbolic mode change: ' + symbolicMode);
          }
        });
      } else {
        newPerms = type + parseInt(mode, 8);
        if (common.statFollowLinks(file).isDirectory()) {
          newPerms |= PERMS.SETUID + PERMS.SETGID & perms;
        }
        fs.chmodSync(file, newPerms);
      }
    });
    return '';
  }
  chmod = _chmod;
  return chmod;
}

var cp$1;
var hasRequiredCp;
function requireCp() {
  if (hasRequiredCp) return cp$1;
  hasRequiredCp = 1;
  var fs = require$$1;
  var path = require$$0;
  var common = requireCommon();
  common.register('cp', _cp, {
    cmdOptions: {
      'f': '!no_force',
      'n': 'no_force',
      'u': 'update',
      'R': 'recursive',
      'r': 'recursive',
      'L': 'followsymlink',
      'P': 'noFollowsymlink'
    },
    wrapOutput: false
  });
  function copyFileSync(srcFile, destFile, options) {
    if (!fs.existsSync(srcFile)) {
      common.error('copyFileSync: no such file or directory: ' + srcFile);
    }
    var isWindows = process.platform === 'win32';
    try {
      if (options.update && common.statFollowLinks(srcFile).mtime < fs.statSync(destFile).mtime) {
        return;
      }
    } catch (e) {}
    if (common.statNoFollowLinks(srcFile).isSymbolicLink() && !options.followsymlink) {
      try {
        common.statNoFollowLinks(destFile);
        common.unlinkSync(destFile);
      } catch (e) {}
      var symlinkFull = fs.readlinkSync(srcFile);
      fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
    } else {
      var buf = common.buffer();
      var bufLength = buf.length;
      var bytesRead = bufLength;
      var pos = 0;
      var fdr = null;
      var fdw = null;
      try {
        fdr = fs.openSync(srcFile, 'r');
      } catch (e) {
        common.error('copyFileSync: could not read src file (' + srcFile + ')');
      }
      try {
        fdw = fs.openSync(destFile, 'w');
      } catch (e) {
        common.error('copyFileSync: could not write to dest file (code=' + e.code + '):' + destFile);
      }
      while (bytesRead === bufLength) {
        bytesRead = fs.readSync(fdr, buf, 0, bufLength, pos);
        fs.writeSync(fdw, buf, 0, bytesRead);
        pos += bytesRead;
      }
      fs.closeSync(fdr);
      fs.closeSync(fdw);
      fs.chmodSync(destFile, common.statFollowLinks(srcFile).mode);
    }
  }
  function cpdirSyncRecursive(sourceDir, destDir, currentDepth, opts) {
    if (!opts) opts = {};
    if (currentDepth >= common.config.maxdepth) return;
    currentDepth++;
    var isWindows = process.platform === 'win32';
    try {
      fs.mkdirSync(destDir);
    } catch (e) {
      if (e.code !== 'EEXIST') throw e;
    }
    var files = fs.readdirSync(sourceDir);
    for (var i = 0; i < files.length; i++) {
      var srcFile = sourceDir + '/' + files[i];
      var destFile = destDir + '/' + files[i];
      var srcFileStat = common.statNoFollowLinks(srcFile);
      var symlinkFull;
      if (opts.followsymlink) {
        if (cpcheckcycle(sourceDir, srcFile)) {
          console.error('Cycle link found.');
          symlinkFull = fs.readlinkSync(srcFile);
          fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
          continue;
        }
      }
      if (srcFileStat.isDirectory()) {
        cpdirSyncRecursive(srcFile, destFile, currentDepth, opts);
      } else if (srcFileStat.isSymbolicLink() && !opts.followsymlink) {
        symlinkFull = fs.readlinkSync(srcFile);
        try {
          common.statNoFollowLinks(destFile);
          common.unlinkSync(destFile);
        } catch (e) {}
        fs.symlinkSync(symlinkFull, destFile, isWindows ? 'junction' : null);
      } else if (srcFileStat.isSymbolicLink() && opts.followsymlink) {
        srcFileStat = common.statFollowLinks(srcFile);
        if (srcFileStat.isDirectory()) {
          cpdirSyncRecursive(srcFile, destFile, currentDepth, opts);
        } else {
          copyFileSync(srcFile, destFile, opts);
        }
      } else {
        if (fs.existsSync(destFile) && opts.no_force) {
          common.log('skipping existing file: ' + files[i]);
        } else {
          copyFileSync(srcFile, destFile, opts);
        }
      }
    }
    var checkDir = common.statFollowLinks(sourceDir);
    fs.chmodSync(destDir, checkDir.mode);
  }
  function checkRecentCreated(sources, index) {
    var lookedSource = sources[index];
    return sources.slice(0, index).some(function (src) {
      return path.basename(src) === path.basename(lookedSource);
    });
  }
  function cpcheckcycle(sourceDir, srcFile) {
    var srcFileStat = common.statNoFollowLinks(srcFile);
    if (srcFileStat.isSymbolicLink()) {
      var cyclecheck = common.statFollowLinks(srcFile);
      if (cyclecheck.isDirectory()) {
        var sourcerealpath = fs.realpathSync(sourceDir);
        var symlinkrealpath = fs.realpathSync(srcFile);
        var re = new RegExp(symlinkrealpath);
        if (re.test(sourcerealpath)) {
          return true;
        }
      }
    }
    return false;
  }
  function _cp(options, sources, dest) {
    if (options.followsymlink) {
      options.noFollowsymlink = false;
    }
    if (!options.recursive && !options.noFollowsymlink) {
      options.followsymlink = true;
    }
    if (arguments.length < 3) {
      common.error('missing <source> and/or <dest>');
    } else {
      sources = [].slice.call(arguments, 1, arguments.length - 1);
      dest = arguments[arguments.length - 1];
    }
    var destExists = fs.existsSync(dest);
    var destStat = destExists && common.statFollowLinks(dest);
    if ((!destExists || !destStat.isDirectory()) && sources.length > 1) {
      common.error('dest is not a directory (too many sources)');
    }
    if (destExists && destStat.isFile() && options.no_force) {
      return new common.ShellString('', '', 0);
    }
    sources.forEach(function (src, srcIndex) {
      if (!fs.existsSync(src)) {
        if (src === '') src = "''";
        common.error('no such file or directory: ' + src, {
          continue: true
        });
        return;
      }
      var srcStat = common.statFollowLinks(src);
      if (!options.noFollowsymlink && srcStat.isDirectory()) {
        if (!options.recursive) {
          common.error("omitting directory '" + src + "'", {
            continue: true
          });
        } else {
          var newDest = destStat && destStat.isDirectory() ? path.join(dest, path.basename(src)) : dest;
          try {
            common.statFollowLinks(path.dirname(dest));
            cpdirSyncRecursive(src, newDest, 0, {
              no_force: options.no_force,
              followsymlink: options.followsymlink
            });
          } catch (e) {
            common.error("cannot create directory '" + dest + "': No such file or directory");
          }
        }
      } else {
        var thisDest = dest;
        if (destStat && destStat.isDirectory()) {
          thisDest = path.normalize(dest + '/' + path.basename(src));
        }
        var thisDestExists = fs.existsSync(thisDest);
        if (thisDestExists && checkRecentCreated(sources, srcIndex)) {
          if (!options.no_force) {
            common.error("will not overwrite just-created '" + thisDest + "' with '" + src + "'", {
              continue: true
            });
          }
          return;
        }
        if (thisDestExists && options.no_force) {
          return;
        }
        if (path.relative(src, thisDest) === '') {
          common.error("'" + thisDest + "' and '" + src + "' are the same file", {
            continue: true
          });
          return;
        }
        copyFileSync(src, thisDest, options);
      }
    });
    return new common.ShellString('', common.state.error, common.state.errorCode);
  }
  cp$1 = _cp;
  return cp$1;
}

var dirs = {};

var hasRequiredDirs;
function requireDirs() {
  if (hasRequiredDirs) return dirs;
  hasRequiredDirs = 1;
  var common = requireCommon();
  var _cd = requireCd();
  var path = require$$0;
  common.register('dirs', _dirs, {
    wrapOutput: false
  });
  common.register('pushd', _pushd, {
    wrapOutput: false
  });
  common.register('popd', _popd, {
    wrapOutput: false
  });
  var _dirStack = [];
  function _isStackIndex(index) {
    return /^[\-+]\d+$/.test(index);
  }
  function _parseStackIndex(index) {
    if (_isStackIndex(index)) {
      if (Math.abs(index) < _dirStack.length + 1) {
        return /^-/.test(index) ? Number(index) - 1 : Number(index);
      }
      common.error(index + ': directory stack index out of range');
    } else {
      common.error(index + ': invalid number');
    }
  }
  function _actualDirStack() {
    return [process.cwd()].concat(_dirStack);
  }
  function _pushd(options, dir) {
    if (_isStackIndex(options)) {
      dir = options;
      options = '';
    }
    options = common.parseOptions(options, {
      'n': 'no-cd',
      'q': 'quiet'
    });
    var dirs = _actualDirStack();
    if (dir === '+0') {
      return dirs;
    } else if (!dir) {
      if (dirs.length > 1) {
        dirs = dirs.splice(1, 1).concat(dirs);
      } else {
        return common.error('no other directory');
      }
    } else if (_isStackIndex(dir)) {
      var n = _parseStackIndex(dir);
      dirs = dirs.slice(n).concat(dirs.slice(0, n));
    } else {
      if (options['no-cd']) {
        dirs.splice(1, 0, dir);
      } else {
        dirs.unshift(dir);
      }
    }
    if (options['no-cd']) {
      dirs = dirs.slice(1);
    } else {
      dir = path.resolve(dirs.shift());
      _cd('', dir);
    }
    _dirStack = dirs;
    return _dirs(options.quiet ? '-q' : '');
  }
  dirs.pushd = _pushd;
  function _popd(options, index) {
    if (_isStackIndex(options)) {
      index = options;
      options = '';
    }
    options = common.parseOptions(options, {
      'n': 'no-cd',
      'q': 'quiet'
    });
    if (!_dirStack.length) {
      return common.error('directory stack empty');
    }
    index = _parseStackIndex(index || '+0');
    if (options['no-cd'] || index > 0 || _dirStack.length + index === 0) {
      index = index > 0 ? index - 1 : index;
      _dirStack.splice(index, 1);
    } else {
      var dir = path.resolve(_dirStack.shift());
      _cd('', dir);
    }
    return _dirs(options.quiet ? '-q' : '');
  }
  dirs.popd = _popd;
  function _dirs(options, index) {
    if (_isStackIndex(options)) {
      index = options;
      options = '';
    }
    options = common.parseOptions(options, {
      'c': 'clear',
      'q': 'quiet'
    });
    if (options.clear) {
      _dirStack = [];
      return _dirStack;
    }
    var stack = _actualDirStack();
    if (index) {
      index = _parseStackIndex(index);
      if (index < 0) {
        index = stack.length + index;
      }
      if (!options.quiet) {
        common.log(stack[index]);
      }
      return stack[index];
    }
    if (!options.quiet) {
      common.log(stack.join(' '));
    }
    return stack;
  }
  dirs.dirs = _dirs;
  return dirs;
}

var echo;
var hasRequiredEcho;
function requireEcho() {
  if (hasRequiredEcho) return echo;
  hasRequiredEcho = 1;
  var format = require$$3$1.format;
  var common = requireCommon();
  common.register('echo', _echo, {
    allowGlobbing: false
  });
  function _echo(opts) {
    var messages = [].slice.call(arguments, opts ? 0 : 1);
    var options = {};
    try {
      options = common.parseOptions(messages[0], {
        'e': 'escapes',
        'n': 'no_newline'
      }, {
        silent: true
      });
      if (messages[0]) {
        messages.shift();
      }
    } catch (_) {
      common.state.error = null;
    }
    var output = format.apply(null, messages);
    if (!options.no_newline) {
      output += '\n';
    }
    process.stdout.write(output);
    return output;
  }
  echo = _echo;
  return echo;
}

var error_1;
var hasRequiredError;
function requireError() {
  if (hasRequiredError) return error_1;
  hasRequiredError = 1;
  var common = requireCommon();
  function error() {
    return common.state.error;
  }
  error_1 = error;
  return error_1;
}

var execChild = {exports: {}};

execChild.exports;
var hasRequiredExecChild;
function requireExecChild() {
  if (hasRequiredExecChild) return execChild.exports;
  hasRequiredExecChild = 1;
  (function (module) {
    if (require.main !== module) {
      throw new Error('This file should not be required');
    }
    var childProcess = require$$0$2;
    var fs = require$$1;
    var paramFilePath = process.argv[2];
    var serializedParams = fs.readFileSync(paramFilePath, 'utf8');
    var params = JSON.parse(serializedParams);
    var cmd = params.command;
    var execOptions = params.execOptions;
    var pipe = params.pipe;
    var stdoutFile = params.stdoutFile;
    var stderrFile = params.stderrFile;
    var c = childProcess.exec(cmd, execOptions, function (err) {
      if (!err) {
        process.exitCode = 0;
      } else if (err.code === undefined) {
        process.exitCode = 1;
      } else {
        process.exitCode = err.code;
      }
    });
    var stdoutStream = fs.createWriteStream(stdoutFile);
    var stderrStream = fs.createWriteStream(stderrFile);
    c.stdout.pipe(stdoutStream);
    c.stderr.pipe(stderrStream);
    c.stdout.pipe(process.stdout);
    c.stderr.pipe(process.stderr);
    if (pipe) {
      c.stdin.end(pipe);
    }
  })(execChild);
  return execChild.exports;
}

var tempdir = {};

var hasRequiredTempdir;
function requireTempdir() {
  if (hasRequiredTempdir) return tempdir;
  hasRequiredTempdir = 1;
  var common = requireCommon();
  var os = require$$0$1;
  var fs = require$$1;
  common.register('tempdir', _tempDir, {
    allowGlobbing: false,
    wrapOutput: false
  });
  function writeableDir(dir) {
    if (!dir || !fs.existsSync(dir)) return false;
    if (!common.statFollowLinks(dir).isDirectory()) return false;
    var testFile = dir + '/' + common.randomFileName();
    try {
      fs.writeFileSync(testFile, ' ');
      common.unlinkSync(testFile);
      return dir;
    } catch (e) {
      return false;
    }
  }
  var cachedTempDir;
  function _tempDir() {
    if (cachedTempDir) return cachedTempDir;
    cachedTempDir = writeableDir(os.tmpdir()) || writeableDir(process.env.TMPDIR) || writeableDir(process.env.TEMP) || writeableDir(process.env.TMP) || writeableDir(process.env.Wimp$ScrapDir) || writeableDir('C:\\TEMP') || writeableDir('C:\\TMP') || writeableDir('\\TEMP') || writeableDir('\\TMP') || writeableDir('/tmp') || writeableDir('/var/tmp') || writeableDir('/usr/tmp') || writeableDir('.');
    return cachedTempDir;
  }
  function isCached() {
    return cachedTempDir;
  }
  function clearCache() {
    cachedTempDir = undefined;
  }
  tempdir.tempDir = _tempDir;
  tempdir.isCached = isCached;
  tempdir.clearCache = clearCache;
  return tempdir;
}

var pwd;
var hasRequiredPwd;
function requirePwd() {
  if (hasRequiredPwd) return pwd;
  hasRequiredPwd = 1;
  var path = require$$0;
  var common = requireCommon();
  common.register('pwd', _pwd, {
    allowGlobbing: false
  });
  function _pwd() {
    var pwd = path.resolve(process.cwd());
    return pwd;
  }
  pwd = _pwd;
  return pwd;
}

var exec$3;
var hasRequiredExec;
function requireExec() {
  if (hasRequiredExec) return exec$3;
  hasRequiredExec = 1;
  var common = requireCommon();
  var _tempDir = requireTempdir().tempDir;
  var _pwd = requirePwd();
  var path = require$$0;
  var fs = require$$1;
  var child = require$$0$2;
  var DEFAULT_MAXBUFFER_SIZE = 20 * 1024 * 1024;
  var DEFAULT_ERROR_CODE = 1;
  common.register('exec', _exec, {
    unix: false,
    canReceivePipe: true,
    wrapOutput: false
  });
  function execSync(cmd, opts, pipe) {
    if (!common.config.execPath) {
      common.error('Unable to find a path to the node binary. Please manually set config.execPath');
    }
    var tempDir = _tempDir();
    var paramsFile = path.resolve(tempDir + '/' + common.randomFileName());
    var stderrFile = path.resolve(tempDir + '/' + common.randomFileName());
    var stdoutFile = path.resolve(tempDir + '/' + common.randomFileName());
    opts = common.extend({
      silent: common.config.silent,
      cwd: _pwd().toString(),
      env: process.env,
      maxBuffer: DEFAULT_MAXBUFFER_SIZE,
      encoding: 'utf8'
    }, opts);
    if (fs.existsSync(paramsFile)) common.unlinkSync(paramsFile);
    if (fs.existsSync(stderrFile)) common.unlinkSync(stderrFile);
    if (fs.existsSync(stdoutFile)) common.unlinkSync(stdoutFile);
    opts.cwd = path.resolve(opts.cwd);
    var paramsToSerialize = {
      command: cmd,
      execOptions: opts,
      pipe: pipe,
      stdoutFile: stdoutFile,
      stderrFile: stderrFile
    };
    function writeFileLockedDown(filePath, data) {
      fs.writeFileSync(filePath, data, {
        encoding: 'utf8',
        mode: parseInt('600', 8)
      });
    }
    writeFileLockedDown(stdoutFile, '');
    writeFileLockedDown(stderrFile, '');
    writeFileLockedDown(paramsFile, JSON.stringify(paramsToSerialize));
    var execArgs = [path.join(__dirname, 'exec-child.js'), paramsFile];
    if (opts.silent) {
      opts.stdio = 'ignore';
    } else {
      opts.stdio = [0, 1, 2];
    }
    var code = 0;
    try {
      delete opts.shell;
      child.execFileSync(common.config.execPath, execArgs, opts);
    } catch (e) {
      code = e.status || DEFAULT_ERROR_CODE;
    }
    var stdout = '';
    var stderr = '';
    if (opts.encoding === 'buffer') {
      stdout = fs.readFileSync(stdoutFile);
      stderr = fs.readFileSync(stderrFile);
    } else {
      stdout = fs.readFileSync(stdoutFile, opts.encoding);
      stderr = fs.readFileSync(stderrFile, opts.encoding);
    }
    try {
      common.unlinkSync(paramsFile);
    } catch (e) {}
    try {
      common.unlinkSync(stderrFile);
    } catch (e) {}
    try {
      common.unlinkSync(stdoutFile);
    } catch (e) {}
    if (code !== 0) {
      common.error(stderr, code, {
        continue: true,
        silent: true
      });
    }
    var obj = common.ShellString(stdout, stderr, code);
    return obj;
  }
  function execAsync(cmd, opts, pipe, callback) {
    opts = common.extend({
      silent: common.config.silent,
      cwd: _pwd().toString(),
      env: process.env,
      maxBuffer: DEFAULT_MAXBUFFER_SIZE,
      encoding: 'utf8'
    }, opts);
    var c = child.exec(cmd, opts, function (err, stdout, stderr) {
      if (callback) {
        if (!err) {
          callback(0, stdout, stderr);
        } else if (err.code === undefined) {
          callback(1, stdout, stderr);
        } else {
          callback(err.code, stdout, stderr);
        }
      }
    });
    if (pipe) c.stdin.end(pipe);
    if (!opts.silent) {
      c.stdout.pipe(process.stdout);
      c.stderr.pipe(process.stderr);
    }
    return c;
  }
  function _exec(command, options, callback) {
    options = options || {};
    if (!command) common.error('must specify command');
    var pipe = common.readFromPipe();
    if (typeof options === 'function') {
      callback = options;
      options = {
        async: true
      };
    }
    if (typeof options === 'object' && typeof callback === 'function') {
      options.async = true;
    }
    options = common.extend({
      silent: common.config.silent,
      async: false
    }, options);
    if (options.async) {
      return execAsync(command, options, pipe, callback);
    } else {
      return execSync(command, options, pipe);
    }
  }
  exec$3 = _exec;
  return exec$3;
}

var ls;
var hasRequiredLs;
function requireLs() {
  if (hasRequiredLs) return ls;
  hasRequiredLs = 1;
  var path = require$$0;
  var fs = require$$1;
  var common = requireCommon();
  var glob = requireGlob();
  var globPatternRecursive = path.sep + '**';
  common.register('ls', _ls, {
    cmdOptions: {
      'R': 'recursive',
      'A': 'all',
      'L': 'link',
      'a': 'all_deprecated',
      'd': 'directory',
      'l': 'long'
    }
  });
  function _ls(options, paths) {
    if (options.all_deprecated) {
      common.log('ls: Option -a is deprecated. Use -A instead');
      options.all = true;
    }
    if (!paths) {
      paths = ['.'];
    } else {
      paths = [].slice.call(arguments, 1);
    }
    var list = [];
    function pushFile(abs, relName, stat) {
      if (process.platform === 'win32') {
        relName = relName.replace(/\\/g, '/');
      }
      if (options.long) {
        stat = stat || (options.link ? common.statFollowLinks(abs) : common.statNoFollowLinks(abs));
        list.push(addLsAttributes(relName, stat));
      } else {
        list.push(relName);
      }
    }
    paths.forEach(function (p) {
      var stat;
      try {
        stat = options.link ? common.statFollowLinks(p) : common.statNoFollowLinks(p);
        if (stat.isSymbolicLink()) {
          try {
            var _stat = common.statFollowLinks(p);
            if (_stat.isDirectory()) {
              stat = _stat;
            }
          } catch (_) {}
        }
      } catch (e) {
        common.error('no such file or directory: ' + p, 2, {
          continue: true
        });
        return;
      }
      if (stat.isDirectory() && !options.directory) {
        if (options.recursive) {
          glob.sync(p + globPatternRecursive, {
            dot: options.all,
            follow: options.link
          }).forEach(function (item) {
            if (path.relative(p, item)) {
              pushFile(item, path.relative(p, item));
            }
          });
        } else if (options.all) {
          fs.readdirSync(p).forEach(function (item) {
            pushFile(path.join(p, item), item);
          });
        } else {
          fs.readdirSync(p).forEach(function (item) {
            if (item[0] !== '.') {
              pushFile(path.join(p, item), item);
            }
          });
        }
      } else {
        pushFile(p, p, stat);
      }
    });
    return list;
  }
  function addLsAttributes(pathName, stats) {
    stats.name = pathName;
    stats.toString = function () {
      return [this.mode, this.nlink, this.uid, this.gid, this.size, this.mtime, this.name].join(' ');
    };
    return stats;
  }
  ls = _ls;
  return ls;
}

var find$1;
var hasRequiredFind;
function requireFind() {
  if (hasRequiredFind) return find$1;
  hasRequiredFind = 1;
  var path = require$$0;
  var common = requireCommon();
  var _ls = requireLs();
  common.register('find', _find, {});
  function _find(options, paths) {
    if (!paths) {
      common.error('no path specified');
    } else if (typeof paths === 'string') {
      paths = [].slice.call(arguments, 1);
    }
    var list = [];
    function pushFile(file) {
      if (process.platform === 'win32') {
        file = file.replace(/\\/g, '/');
      }
      list.push(file);
    }
    paths.forEach(function (file) {
      var stat;
      try {
        stat = common.statFollowLinks(file);
      } catch (e) {
        common.error('no such file or directory: ' + file);
      }
      pushFile(file);
      if (stat.isDirectory()) {
        _ls({
          recursive: true,
          all: true
        }, file).forEach(function (subfile) {
          pushFile(path.join(file, subfile));
        });
      }
    });
    return list;
  }
  find$1 = _find;
  return find$1;
}

var grep;
var hasRequiredGrep;
function requireGrep() {
  if (hasRequiredGrep) return grep;
  hasRequiredGrep = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('grep', _grep, {
    globStart: 2,
    canReceivePipe: true,
    cmdOptions: {
      'v': 'inverse',
      'l': 'nameOnly',
      'i': 'ignoreCase'
    }
  });
  function _grep(options, regex, files) {
    var pipe = common.readFromPipe();
    if (!files && !pipe) common.error('no paths given', 2);
    files = [].slice.call(arguments, 2);
    if (pipe) {
      files.unshift('-');
    }
    var grep = [];
    if (options.ignoreCase) {
      regex = new RegExp(regex, 'i');
    }
    files.forEach(function (file) {
      if (!fs.existsSync(file) && file !== '-') {
        common.error('no such file or directory: ' + file, 2, {
          continue: true
        });
        return;
      }
      var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
      if (options.nameOnly) {
        if (contents.match(regex)) {
          grep.push(file);
        }
      } else {
        var lines = contents.split('\n');
        lines.forEach(function (line) {
          var matched = line.match(regex);
          if (options.inverse && !matched || !options.inverse && matched) {
            grep.push(line);
          }
        });
      }
    });
    return grep.join('\n') + '\n';
  }
  grep = _grep;
  return grep;
}

var head;
var hasRequiredHead;
function requireHead() {
  if (hasRequiredHead) return head;
  hasRequiredHead = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('head', _head, {
    canReceivePipe: true,
    cmdOptions: {
      'n': 'numLines'
    }
  });
  function readSomeLines(file, numLines) {
    var buf = common.buffer();
    var bufLength = buf.length;
    var bytesRead = bufLength;
    var pos = 0;
    var fdr = fs.openSync(file, 'r');
    var numLinesRead = 0;
    var ret = '';
    while (bytesRead === bufLength && numLinesRead < numLines) {
      bytesRead = fs.readSync(fdr, buf, 0, bufLength, pos);
      var bufStr = buf.toString('utf8', 0, bytesRead);
      numLinesRead += bufStr.split('\n').length - 1;
      ret += bufStr;
      pos += bytesRead;
    }
    fs.closeSync(fdr);
    return ret;
  }
  function _head(options, files) {
    var head = [];
    var pipe = common.readFromPipe();
    if (!files && !pipe) common.error('no paths given');
    var idx = 1;
    if (options.numLines === true) {
      idx = 2;
      options.numLines = Number(arguments[1]);
    } else if (options.numLines === false) {
      options.numLines = 10;
    }
    files = [].slice.call(arguments, idx);
    if (pipe) {
      files.unshift('-');
    }
    var shouldAppendNewline = false;
    files.forEach(function (file) {
      if (file !== '-') {
        if (!fs.existsSync(file)) {
          common.error('no such file or directory: ' + file, {
            continue: true
          });
          return;
        } else if (common.statFollowLinks(file).isDirectory()) {
          common.error("error reading '" + file + "': Is a directory", {
            continue: true
          });
          return;
        }
      }
      var contents;
      if (file === '-') {
        contents = pipe;
      } else if (options.numLines < 0) {
        contents = fs.readFileSync(file, 'utf8');
      } else {
        contents = readSomeLines(file, options.numLines);
      }
      var lines = contents.split('\n');
      var hasTrailingNewline = lines[lines.length - 1] === '';
      if (hasTrailingNewline) {
        lines.pop();
      }
      shouldAppendNewline = hasTrailingNewline || options.numLines < lines.length;
      head = head.concat(lines.slice(0, options.numLines));
    });
    if (shouldAppendNewline) {
      head.push('');
    }
    return head.join('\n');
  }
  head = _head;
  return head;
}

var ln;
var hasRequiredLn;
function requireLn() {
  if (hasRequiredLn) return ln;
  hasRequiredLn = 1;
  var fs = require$$1;
  var path = require$$0;
  var common = requireCommon();
  common.register('ln', _ln, {
    cmdOptions: {
      's': 'symlink',
      'f': 'force'
    }
  });
  function _ln(options, source, dest) {
    if (!source || !dest) {
      common.error('Missing <source> and/or <dest>');
    }
    source = String(source);
    var sourcePath = path.normalize(source).replace(RegExp(path.sep + '$'), '');
    var isAbsolute = path.resolve(source) === sourcePath;
    dest = path.resolve(process.cwd(), String(dest));
    if (fs.existsSync(dest)) {
      if (!options.force) {
        common.error('Destination file exists', {
          continue: true
        });
      }
      fs.unlinkSync(dest);
    }
    if (options.symlink) {
      var isWindows = process.platform === 'win32';
      var linkType = isWindows ? 'file' : null;
      var resolvedSourcePath = isAbsolute ? sourcePath : path.resolve(process.cwd(), path.dirname(dest), source);
      if (!fs.existsSync(resolvedSourcePath)) {
        common.error('Source file does not exist', {
          continue: true
        });
      } else if (isWindows && common.statFollowLinks(resolvedSourcePath).isDirectory()) {
        linkType = 'junction';
      }
      try {
        fs.symlinkSync(linkType === 'junction' ? resolvedSourcePath : source, dest, linkType);
      } catch (err) {
        common.error(err.message);
      }
    } else {
      if (!fs.existsSync(source)) {
        common.error('Source file does not exist', {
          continue: true
        });
      }
      try {
        fs.linkSync(source, dest);
      } catch (err) {
        common.error(err.message);
      }
    }
    return '';
  }
  ln = _ln;
  return ln;
}

var mkdir;
var hasRequiredMkdir;
function requireMkdir() {
  if (hasRequiredMkdir) return mkdir;
  hasRequiredMkdir = 1;
  var common = requireCommon();
  var fs = require$$1;
  var path = require$$0;
  common.register('mkdir', _mkdir, {
    cmdOptions: {
      'p': 'fullpath'
    }
  });
  function mkdirSyncRecursive(dir) {
    var baseDir = path.dirname(dir);
    if (baseDir === dir) {
      common.error('dirname() failed: [' + dir + ']');
    }
    if (fs.existsSync(baseDir)) {
      fs.mkdirSync(dir, parseInt('0777', 8));
      return;
    }
    mkdirSyncRecursive(baseDir);
    fs.mkdirSync(dir, parseInt('0777', 8));
  }
  function _mkdir(options, dirs) {
    if (!dirs) common.error('no paths given');
    if (typeof dirs === 'string') {
      dirs = [].slice.call(arguments, 1);
    }
    dirs.forEach(function (dir) {
      try {
        var stat = common.statNoFollowLinks(dir);
        if (!options.fullpath) {
          common.error('path already exists: ' + dir, {
            continue: true
          });
        } else if (stat.isFile()) {
          common.error('cannot create directory ' + dir + ': File exists', {
            continue: true
          });
        }
        return;
      } catch (e) {}
      var baseDir = path.dirname(dir);
      if (!fs.existsSync(baseDir) && !options.fullpath) {
        common.error('no such file or directory: ' + baseDir, {
          continue: true
        });
        return;
      }
      try {
        if (options.fullpath) {
          mkdirSyncRecursive(path.resolve(dir));
        } else {
          fs.mkdirSync(dir, parseInt('0777', 8));
        }
      } catch (e) {
        var reason;
        if (e.code === 'EACCES') {
          reason = 'Permission denied';
        } else if (e.code === 'ENOTDIR' || e.code === 'ENOENT') {
          reason = 'Not a directory';
        } else {
          throw e;
        }
        common.error('cannot create directory ' + dir + ': ' + reason, {
          continue: true
        });
      }
    });
    return '';
  }
  mkdir = _mkdir;
  return mkdir;
}

var rm;
var hasRequiredRm;
function requireRm() {
  if (hasRequiredRm) return rm;
  hasRequiredRm = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('rm', _rm, {
    cmdOptions: {
      'f': 'force',
      'r': 'recursive',
      'R': 'recursive'
    }
  });
  function rmdirSyncRecursive(dir, force, fromSymlink) {
    var files;
    files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
      var file = dir + '/' + files[i];
      var currFile = common.statNoFollowLinks(file);
      if (currFile.isDirectory()) {
        rmdirSyncRecursive(file, force);
      } else {
        if (force || isWriteable(file)) {
          try {
            common.unlinkSync(file);
          } catch (e) {
            common.error('could not remove file (code ' + e.code + '): ' + file, {
              continue: true
            });
          }
        }
      }
    }
    if (fromSymlink) return;
    var result;
    try {
      var start = Date.now();
      for (;;) {
        try {
          result = fs.rmdirSync(dir);
          if (fs.existsSync(dir)) throw {
            code: 'EAGAIN'
          };
          break;
        } catch (er) {
          if (process.platform === 'win32' && (er.code === 'ENOTEMPTY' || er.code === 'EBUSY' || er.code === 'EPERM' || er.code === 'EAGAIN')) {
            if (Date.now() - start > 1000) throw er;
          } else if (er.code === 'ENOENT') {
            break;
          } else {
            throw er;
          }
        }
      }
    } catch (e) {
      common.error('could not remove directory (code ' + e.code + '): ' + dir, {
        continue: true
      });
    }
    return result;
  }
  function isWriteable(file) {
    var writePermission = true;
    try {
      var __fd = fs.openSync(file, 'a');
      fs.closeSync(__fd);
    } catch (e) {
      writePermission = false;
    }
    return writePermission;
  }
  function handleFile(file, options) {
    if (options.force || isWriteable(file)) {
      common.unlinkSync(file);
    } else {
      common.error('permission denied: ' + file, {
        continue: true
      });
    }
  }
  function handleDirectory(file, options) {
    if (options.recursive) {
      rmdirSyncRecursive(file, options.force);
    } else {
      common.error('path is a directory', {
        continue: true
      });
    }
  }
  function handleSymbolicLink(file, options) {
    var stats;
    try {
      stats = common.statFollowLinks(file);
    } catch (e) {
      common.unlinkSync(file);
      return;
    }
    if (stats.isFile()) {
      common.unlinkSync(file);
    } else if (stats.isDirectory()) {
      if (file[file.length - 1] === '/') {
        if (options.recursive) {
          var fromSymlink = true;
          rmdirSyncRecursive(file, options.force, fromSymlink);
        } else {
          common.error('path is a directory', {
            continue: true
          });
        }
      } else {
        common.unlinkSync(file);
      }
    }
  }
  function handleFIFO(file) {
    common.unlinkSync(file);
  }
  function _rm(options, files) {
    if (!files) common.error('no paths given');
    files = [].slice.call(arguments, 1);
    files.forEach(function (file) {
      var lstats;
      try {
        var filepath = file[file.length - 1] === '/' ? file.slice(0, -1) : file;
        lstats = common.statNoFollowLinks(filepath);
      } catch (e) {
        if (!options.force) {
          common.error('no such file or directory: ' + file, {
            continue: true
          });
        }
        return;
      }
      if (lstats.isFile()) {
        handleFile(file, options);
      } else if (lstats.isDirectory()) {
        handleDirectory(file, options);
      } else if (lstats.isSymbolicLink()) {
        handleSymbolicLink(file, options);
      } else if (lstats.isFIFO()) {
        handleFIFO(file);
      }
    });
    return '';
  }
  rm = _rm;
  return rm;
}

var mv;
var hasRequiredMv;
function requireMv() {
  if (hasRequiredMv) return mv;
  hasRequiredMv = 1;
  var fs = require$$1;
  var path = require$$0;
  var common = requireCommon();
  var cp = requireCp();
  var rm = requireRm();
  common.register('mv', _mv, {
    cmdOptions: {
      'f': '!no_force',
      'n': 'no_force'
    }
  });
  function checkRecentCreated(sources, index) {
    var lookedSource = sources[index];
    return sources.slice(0, index).some(function (src) {
      return path.basename(src) === path.basename(lookedSource);
    });
  }
  function _mv(options, sources, dest) {
    if (arguments.length < 3) {
      common.error('missing <source> and/or <dest>');
    } else if (arguments.length > 3) {
      sources = [].slice.call(arguments, 1, arguments.length - 1);
      dest = arguments[arguments.length - 1];
    } else if (typeof sources === 'string') {
      sources = [sources];
    } else {
      common.error('invalid arguments');
    }
    var exists = fs.existsSync(dest);
    var stats = exists && common.statFollowLinks(dest);
    if ((!exists || !stats.isDirectory()) && sources.length > 1) {
      common.error('dest is not a directory (too many sources)');
    }
    if (exists && stats.isFile() && options.no_force) {
      common.error('dest file already exists: ' + dest);
    }
    sources.forEach(function (src, srcIndex) {
      if (!fs.existsSync(src)) {
        common.error('no such file or directory: ' + src, {
          continue: true
        });
        return;
      }
      var thisDest = dest;
      if (fs.existsSync(dest) && common.statFollowLinks(dest).isDirectory()) {
        thisDest = path.normalize(dest + '/' + path.basename(src));
      }
      var thisDestExists = fs.existsSync(thisDest);
      if (thisDestExists && checkRecentCreated(sources, srcIndex)) {
        if (!options.no_force) {
          common.error("will not overwrite just-created '" + thisDest + "' with '" + src + "'", {
            continue: true
          });
        }
        return;
      }
      if (fs.existsSync(thisDest) && options.no_force) {
        common.error('dest file already exists: ' + thisDest, {
          continue: true
        });
        return;
      }
      if (path.resolve(src) === path.dirname(path.resolve(thisDest))) {
        common.error('cannot move to self: ' + src, {
          continue: true
        });
        return;
      }
      try {
        fs.renameSync(src, thisDest);
      } catch (e) {
        if (e.code === 'EXDEV') {
          cp('-r', src, thisDest);
          rm('-rf', src);
        }
      }
    });
    return '';
  }
  mv = _mv;
  return mv;
}

var popd = {};

var hasRequiredPopd;
function requirePopd() {
  if (hasRequiredPopd) return popd;
  hasRequiredPopd = 1;
  return popd;
}

var pushd = {};

var hasRequiredPushd;
function requirePushd() {
  if (hasRequiredPushd) return pushd;
  hasRequiredPushd = 1;
  return pushd;
}

var sed;
var hasRequiredSed;
function requireSed() {
  if (hasRequiredSed) return sed;
  hasRequiredSed = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('sed', _sed, {
    globStart: 3,
    canReceivePipe: true,
    cmdOptions: {
      'i': 'inplace'
    }
  });
  function _sed(options, regex, replacement, files) {
    var pipe = common.readFromPipe();
    if (typeof replacement !== 'string' && typeof replacement !== 'function') {
      if (typeof replacement === 'number') {
        replacement = replacement.toString();
      } else {
        common.error('invalid replacement string');
      }
    }
    if (typeof regex === 'string') {
      regex = RegExp(regex);
    }
    if (!files && !pipe) {
      common.error('no files given');
    }
    files = [].slice.call(arguments, 3);
    if (pipe) {
      files.unshift('-');
    }
    var sed = [];
    files.forEach(function (file) {
      if (!fs.existsSync(file) && file !== '-') {
        common.error('no such file or directory: ' + file, 2, {
          continue: true
        });
        return;
      }
      var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
      var lines = contents.split('\n');
      var result = lines.map(function (line) {
        return line.replace(regex, replacement);
      }).join('\n');
      sed.push(result);
      if (options.inplace) {
        fs.writeFileSync(file, result, 'utf8');
      }
    });
    return sed.join('\n');
  }
  sed = _sed;
  return sed;
}

var set$2;
var hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set$2;
  hasRequiredSet = 1;
  var common = requireCommon();
  common.register('set', _set, {
    allowGlobbing: false,
    wrapOutput: false
  });
  function _set(options) {
    if (!options) {
      var args = [].slice.call(arguments, 0);
      if (args.length < 2) common.error('must provide an argument');
      options = args[1];
    }
    var negate = options[0] === '+';
    if (negate) {
      options = '-' + options.slice(1);
    }
    options = common.parseOptions(options, {
      'e': 'fatal',
      'v': 'verbose',
      'f': 'noglob'
    });
    if (negate) {
      Object.keys(options).forEach(function (key) {
        options[key] = !options[key];
      });
    }
    Object.keys(options).forEach(function (key) {
      if (negate !== options[key]) {
        common.config[key] = options[key];
      }
    });
    return;
  }
  set$2 = _set;
  return set$2;
}

var $trimEnd = stringTrim.end;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
var stringTrimEnd = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

var $$k = _export;
var trimEnd$1 = stringTrimEnd;

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$$k({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd$1 }, {
  trimRight: trimEnd$1
});

// TODO: Remove this line from `core-js@4`

var $$j = _export;
var trimEnd = stringTrimEnd;

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$$j({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});

var sort;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort;
  hasRequiredSort = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('sort', _sort, {
    canReceivePipe: true,
    cmdOptions: {
      'r': 'reverse',
      'n': 'numerical'
    }
  });
  function parseNumber(str) {
    var match = str.match(/^\s*(\d*)\s*(.*)$/);
    return {
      num: Number(match[1]),
      value: match[2]
    };
  }
  function unixCmp(a, b) {
    var aLower = a.toLowerCase();
    var bLower = b.toLowerCase();
    return aLower === bLower ? -1 * a.localeCompare(b) : aLower.localeCompare(bLower);
  }
  function numericalCmp(a, b) {
    var objA = parseNumber(a);
    var objB = parseNumber(b);
    if (objA.hasOwnProperty('num') && objB.hasOwnProperty('num')) {
      return objA.num !== objB.num ? objA.num - objB.num : unixCmp(objA.value, objB.value);
    } else {
      return unixCmp(objA.value, objB.value);
    }
  }
  function _sort(options, files) {
    var pipe = common.readFromPipe();
    if (!files && !pipe) common.error('no files given');
    files = [].slice.call(arguments, 1);
    if (pipe) {
      files.unshift('-');
    }
    var lines = files.reduce(function (accum, file) {
      if (file !== '-') {
        if (!fs.existsSync(file)) {
          common.error('no such file or directory: ' + file, {
            continue: true
          });
          return accum;
        } else if (common.statFollowLinks(file).isDirectory()) {
          common.error('read failed: ' + file + ': Is a directory', {
            continue: true
          });
          return accum;
        }
      }
      var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
      return accum.concat(contents.trimRight().split('\n'));
    }, []);
    var sorted = lines.sort(options.numerical ? numericalCmp : unixCmp);
    if (options.reverse) {
      sorted = sorted.reverse();
    }
    return sorted.join('\n') + '\n';
  }
  sort = _sort;
  return sort;
}

var tail;
var hasRequiredTail;
function requireTail() {
  if (hasRequiredTail) return tail;
  hasRequiredTail = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('tail', _tail, {
    canReceivePipe: true,
    cmdOptions: {
      'n': 'numLines'
    }
  });
  function _tail(options, files) {
    var tail = [];
    var pipe = common.readFromPipe();
    if (!files && !pipe) common.error('no paths given');
    var idx = 1;
    if (options.numLines === true) {
      idx = 2;
      options.numLines = Number(arguments[1]);
    } else if (options.numLines === false) {
      options.numLines = 10;
    }
    options.numLines = -1 * Math.abs(options.numLines);
    files = [].slice.call(arguments, idx);
    if (pipe) {
      files.unshift('-');
    }
    var shouldAppendNewline = false;
    files.forEach(function (file) {
      if (file !== '-') {
        if (!fs.existsSync(file)) {
          common.error('no such file or directory: ' + file, {
            continue: true
          });
          return;
        } else if (common.statFollowLinks(file).isDirectory()) {
          common.error("error reading '" + file + "': Is a directory", {
            continue: true
          });
          return;
        }
      }
      var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
      var lines = contents.split('\n');
      if (lines[lines.length - 1] === '') {
        lines.pop();
        shouldAppendNewline = true;
      } else {
        shouldAppendNewline = false;
      }
      tail = tail.concat(lines.slice(options.numLines));
    });
    if (shouldAppendNewline) {
      tail.push('');
    }
    return tail.join('\n');
  }
  tail = _tail;
  return tail;
}

var test;
var hasRequiredTest;
function requireTest() {
  if (hasRequiredTest) return test;
  hasRequiredTest = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('test', _test, {
    cmdOptions: {
      'b': 'block',
      'c': 'character',
      'd': 'directory',
      'e': 'exists',
      'f': 'file',
      'L': 'link',
      'p': 'pipe',
      'S': 'socket'
    },
    wrapOutput: false,
    allowGlobbing: false
  });
  function _test(options, path) {
    if (!path) common.error('no path given');
    var canInterpret = false;
    Object.keys(options).forEach(function (key) {
      if (options[key] === true) {
        canInterpret = true;
      }
    });
    if (!canInterpret) common.error('could not interpret expression');
    if (options.link) {
      try {
        return common.statNoFollowLinks(path).isSymbolicLink();
      } catch (e) {
        return false;
      }
    }
    if (!fs.existsSync(path)) return false;
    if (options.exists) return true;
    var stats = common.statFollowLinks(path);
    if (options.block) return stats.isBlockDevice();
    if (options.character) return stats.isCharacterDevice();
    if (options.directory) return stats.isDirectory();
    if (options.file) return stats.isFile();
    if (options.pipe) return stats.isFIFO();
    if (options.socket) return stats.isSocket();
    return false;
  }
  test = _test;
  return test;
}

var to;
var hasRequiredTo;
function requireTo() {
  if (hasRequiredTo) return to;
  hasRequiredTo = 1;
  var common = requireCommon();
  var fs = require$$1;
  var path = require$$0;
  common.register('to', _to, {
    pipeOnly: true,
    wrapOutput: false
  });
  function _to(options, file) {
    if (!file) common.error('wrong arguments');
    if (!fs.existsSync(path.dirname(file))) {
      common.error('no such file or directory: ' + path.dirname(file));
    }
    try {
      fs.writeFileSync(file, this.stdout || this.toString(), 'utf8');
      return this;
    } catch (e) {
      common.error('could not write to file (code ' + e.code + '): ' + file, {
        continue: true
      });
    }
  }
  to = _to;
  return to;
}

var toEnd;
var hasRequiredToEnd;
function requireToEnd() {
  if (hasRequiredToEnd) return toEnd;
  hasRequiredToEnd = 1;
  var common = requireCommon();
  var fs = require$$1;
  var path = require$$0;
  common.register('toEnd', _toEnd, {
    pipeOnly: true,
    wrapOutput: false
  });
  function _toEnd(options, file) {
    if (!file) common.error('wrong arguments');
    if (!fs.existsSync(path.dirname(file))) {
      common.error('no such file or directory: ' + path.dirname(file));
    }
    try {
      fs.appendFileSync(file, this.stdout || this.toString(), 'utf8');
      return this;
    } catch (e) {
      common.error('could not append to file (code ' + e.code + '): ' + file, {
        continue: true
      });
    }
  }
  toEnd = _toEnd;
  return toEnd;
}

var touch;
var hasRequiredTouch;
function requireTouch() {
  if (hasRequiredTouch) return touch;
  hasRequiredTouch = 1;
  var common = requireCommon();
  var fs = require$$1;
  common.register('touch', _touch, {
    cmdOptions: {
      'a': 'atime_only',
      'c': 'no_create',
      'd': 'date',
      'm': 'mtime_only',
      'r': 'reference'
    }
  });
  function _touch(opts, files) {
    if (!files) {
      common.error('no files given');
    } else if (typeof files === 'string') {
      files = [].slice.call(arguments, 1);
    } else {
      common.error('file arg should be a string file path or an Array of string file paths');
    }
    files.forEach(function (f) {
      touchFile(opts, f);
    });
    return '';
  }
  function touchFile(opts, file) {
    var stat = tryStatFile(file);
    if (stat && stat.isDirectory()) {
      return;
    }
    if (!stat && opts.no_create) {
      return;
    }
    fs.closeSync(fs.openSync(file, 'a'));
    var now = new Date();
    var mtime = opts.date || now;
    var atime = opts.date || now;
    if (opts.reference) {
      var refStat = tryStatFile(opts.reference);
      if (!refStat) {
        common.error('failed to get attributess of ' + opts.reference);
      }
      mtime = refStat.mtime;
      atime = refStat.atime;
    } else if (opts.date) {
      mtime = opts.date;
      atime = opts.date;
    }
    if (opts.atime_only && opts.mtime_only) ; else if (opts.atime_only) {
      mtime = stat.mtime;
    } else if (opts.mtime_only) {
      atime = stat.atime;
    }
    fs.utimesSync(file, atime, mtime);
  }
  touch = _touch;
  function tryStatFile(filePath) {
    try {
      return common.statFollowLinks(filePath);
    } catch (e) {
      return null;
    }
  }
  return touch;
}

var uniq;
var hasRequiredUniq;
function requireUniq() {
  if (hasRequiredUniq) return uniq;
  hasRequiredUniq = 1;
  var common = requireCommon();
  var fs = require$$1;
  function lpad(c, str) {
    var res = '' + str;
    if (res.length < c) {
      res = Array(c - res.length + 1).join(' ') + res;
    }
    return res;
  }
  common.register('uniq', _uniq, {
    canReceivePipe: true,
    cmdOptions: {
      'i': 'ignoreCase',
      'c': 'count',
      'd': 'duplicates'
    }
  });
  function _uniq(options, input, output) {
    var pipe = common.readFromPipe();
    if (!pipe) {
      if (!input) common.error('no input given');
      if (!fs.existsSync(input)) {
        common.error(input + ': No such file or directory');
      } else if (common.statFollowLinks(input).isDirectory()) {
        common.error("error reading '" + input + "'");
      }
    }
    if (output && fs.existsSync(output) && common.statFollowLinks(output).isDirectory()) {
      common.error(output + ': Is a directory');
    }
    var lines = (input ? fs.readFileSync(input, 'utf8') : pipe).trimRight().split('\n');
    var compare = function (a, b) {
      return options.ignoreCase ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) : a.localeCompare(b);
    };
    var uniqed = lines.reduceRight(function (res, e) {
      if (res.length === 0) {
        return [{
          count: 1,
          ln: e
        }];
      } else if (compare(res[0].ln, e) === 0) {
        return [{
          count: res[0].count + 1,
          ln: e
        }].concat(res.slice(1));
      } else {
        return [{
          count: 1,
          ln: e
        }].concat(res);
      }
    }, []).filter(function (obj) {
      return options.duplicates ? obj.count > 1 : true;
    }).map(function (obj) {
      return (options.count ? lpad(7, obj.count) + ' ' : '') + obj.ln;
    }).join('\n') + '\n';
    if (output) {
      new common.ShellString(uniqed).to(output);
      return '';
    } else {
      return uniqed;
    }
  }
  uniq = _uniq;
  return uniq;
}

var which$2;
var hasRequiredWhich;
function requireWhich() {
  if (hasRequiredWhich) return which$2;
  hasRequiredWhich = 1;
  var common = requireCommon();
  var fs = require$$1;
  var path = require$$0;
  common.register('which', _which, {
    allowGlobbing: false,
    cmdOptions: {
      'a': 'all'
    }
  });
  var XP_DEFAULT_PATHEXT = '.com;.exe;.bat;.cmd;.vbs;.vbe;.js;.jse;.wsf;.wsh';
  var FILE_EXECUTABLE_MODE = 1;
  function isWindowsPlatform() {
    return process.platform === 'win32';
  }
  function splitPath(p) {
    return p ? p.split(path.delimiter) : [];
  }
  function isExecutable(pathName) {
    try {
      fs.accessSync(pathName, FILE_EXECUTABLE_MODE);
    } catch (err) {
      return false;
    }
    return true;
  }
  function checkPath(pathName) {
    return fs.existsSync(pathName) && !common.statFollowLinks(pathName).isDirectory() && (isWindowsPlatform() || isExecutable(pathName));
  }
  function _which(options, cmd) {
    if (!cmd) common.error('must specify command');
    var isWindows = isWindowsPlatform();
    var pathArray = splitPath(process.env.PATH);
    var queryMatches = [];
    if (cmd.indexOf('/') === -1) {
      var pathExtArray = [''];
      if (isWindows) {
        var pathExtEnv = process.env.PATHEXT || XP_DEFAULT_PATHEXT;
        pathExtArray = splitPath(pathExtEnv.toUpperCase());
      }
      for (var k = 0; k < pathArray.length; k++) {
        if (queryMatches.length > 0 && !options.all) break;
        var attempt = path.resolve(pathArray[k], cmd);
        if (isWindows) {
          attempt = attempt.toUpperCase();
        }
        var match = attempt.match(/\.[^<>:"/\|?*.]+$/);
        if (match && pathExtArray.indexOf(match[0]) >= 0) {
          if (checkPath(attempt)) {
            queryMatches.push(attempt);
            break;
          }
        } else {
          for (var i = 0; i < pathExtArray.length; i++) {
            var ext = pathExtArray[i];
            var newAttempt = attempt + ext;
            if (checkPath(newAttempt)) {
              queryMatches.push(newAttempt);
              break;
            }
          }
        }
      }
    } else if (checkPath(cmd)) {
      queryMatches.push(path.resolve(cmd));
    }
    if (queryMatches.length > 0) {
      return options.all ? queryMatches : queryMatches[0];
    }
    return options.all ? [] : null;
  }
  which$2 = _which;
  return which$2;
}

var dynamicModules;

function getDynamicModules() {
	return dynamicModules || (dynamicModules = {
		"/node_modules/shelljs/src/cat.js": requireCat,
		"/node_modules/shelljs/src/cd.js": requireCd,
		"/node_modules/shelljs/src/chmod.js": requireChmod,
		"/node_modules/shelljs/src/common.js": requireCommon,
		"/node_modules/shelljs/src/cp.js": requireCp,
		"/node_modules/shelljs/src/dirs.js": requireDirs,
		"/node_modules/shelljs/src/echo.js": requireEcho,
		"/node_modules/shelljs/src/error.js": requireError,
		"/node_modules/shelljs/src/exec-child.js": requireExecChild,
		"/node_modules/shelljs/src/exec.js": requireExec,
		"/node_modules/shelljs/src/find.js": requireFind,
		"/node_modules/shelljs/src/grep.js": requireGrep,
		"/node_modules/shelljs/src/head.js": requireHead,
		"/node_modules/shelljs/src/ln.js": requireLn,
		"/node_modules/shelljs/src/ls.js": requireLs,
		"/node_modules/shelljs/src/mkdir.js": requireMkdir,
		"/node_modules/shelljs/src/mv.js": requireMv,
		"/node_modules/shelljs/src/popd.js": requirePopd,
		"/node_modules/shelljs/src/pushd.js": requirePushd,
		"/node_modules/shelljs/src/pwd.js": requirePwd,
		"/node_modules/shelljs/src/rm.js": requireRm,
		"/node_modules/shelljs/src/sed.js": requireSed,
		"/node_modules/shelljs/src/set.js": requireSet,
		"/node_modules/shelljs/src/sort.js": requireSort,
		"/node_modules/shelljs/src/tail.js": requireTail,
		"/node_modules/shelljs/src/tempdir.js": requireTempdir,
		"/node_modules/shelljs/src/test.js": requireTest,
		"/node_modules/shelljs/src/to.js": requireTo,
		"/node_modules/shelljs/src/toEnd.js": requireToEnd,
		"/node_modules/shelljs/src/touch.js": requireTouch,
		"/node_modules/shelljs/src/uniq.js": requireUniq,
		"/node_modules/shelljs/src/which.js": requireWhich
	});
}

function createCommonjsRequire(originalModuleDir) {
	function handleRequire(path) {
		var resolvedPath = commonjsResolve(path, originalModuleDir);
		if (resolvedPath !== null) {
			return getDynamicModules()[resolvedPath]();
		}
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}
	handleRequire.resolve = function (path) {
		var resolvedPath = commonjsResolve(path, originalModuleDir);
		if (resolvedPath !== null) {
			return resolvedPath;
		}
		return require.resolve(path);
	};
	return handleRequire;
}

function commonjsResolve (path, originalModuleDir) {
	var shouldTryNodeModules = isPossibleNodeModulesPath(path);
	path = normalize(path);
	var relPath;
	if (path[0] === '/') {
		originalModuleDir = '';
	}
	var modules = getDynamicModules();
	var checkedExtensions = ['', '.js', '.json'];
	while (true) {
		if (!shouldTryNodeModules) {
			relPath = normalize(originalModuleDir + '/' + path);
		} else {
			relPath = normalize(originalModuleDir + '/node_modules/' + path);
		}

		if (relPath.endsWith('/..')) {
			break; // Travelled too far up, avoid infinite loop
		}

		for (var extensionIndex = 0; extensionIndex < checkedExtensions.length; extensionIndex++) {
			var resolvedPath = relPath + checkedExtensions[extensionIndex];
			if (modules[resolvedPath]) {
				return resolvedPath;
			}
		}
		if (!shouldTryNodeModules) break;
		var nextDir = normalize(originalModuleDir + '/..');
		if (nextDir === originalModuleDir) break;
		originalModuleDir = nextDir;
	}
	return null;
}

function isPossibleNodeModulesPath (modulePath) {
	var c0 = modulePath[0];
	if (c0 === '/' || c0 === '\\') return false;
	var c1 = modulePath[1], c2 = modulePath[2];
	if ((c0 === '.' && (!c1 || c1 === '/' || c1 === '\\')) ||
		(c0 === '.' && c1 === '.' && (!c2 || c2 === '/' || c2 === '\\'))) return false;
	if (c1 === ':' && (c2 === '/' || c2 === '\\')) return false;
	return true;
}

function normalize (path) {
	path = path.replace(/\\/g, '/');
	var parts = path.split('/');
	var slashed = parts[0] === '';
	for (var i = 1; i < parts.length; i++) {
		if (parts[i] === '.' || parts[i] === '') {
			parts.splice(i--, 1);
		}
	}
	for (var i = 1; i < parts.length; i++) {
		if (parts[i] !== '..') continue;
		if (i > 0 && parts[i - 1] !== '..' && parts[i - 1] !== '.') {
			parts.splice(--i, 2);
			i--;
		}
	}
	path = parts.join('/');
	if (slashed && path[0] !== '/') path = '/' + path;
	else if (path.length === 0) path = '.';
	return path;
}

var shell$2 = {};

var commands = ['cat', 'cd', 'chmod', 'cp', 'dirs', 'echo', 'exec', 'find', 'grep', 'head', 'ln', 'ls', 'mkdir', 'mv', 'pwd', 'rm', 'sed', 'set', 'sort', 'tail', 'tempdir', 'test', 'to', 'toEnd', 'touch', 'uniq', 'which'];
getDefaultExportFromCjs(commands);

var hasRequiredShell;
function requireShell() {
  if (hasRequiredShell) return shell$2;
  hasRequiredShell = 1;
  var common = requireCommon();
  commands.forEach(function (command) {
    createCommonjsRequire("/node_modules/shelljs")('./src/' + command);
  });
  shell$2.exit = process.exit;
  shell$2.error = requireError();
  shell$2.ShellString = common.ShellString;
  shell$2.env = process.env;
  shell$2.config = common.config;
  return shell$2;
}

var shell$1 = requireShell();
var common$1 = requireCommon();
Object.keys(shell$1).forEach(function (cmd) {
  commonjsGlobal[cmd] = shell$1[cmd];
});
var _to = requireTo();
String.prototype.to = common$1.wrap('to', _to);
var _toEnd = requireToEnd();
String.prototype.toEnd = common$1.wrap('toEnd', _toEnd);

commonjsGlobal.config.fatal = true;
commonjsGlobal.target = {};
var args = process.argv.slice(2),
  targetArgs,
  dashesLoc = args.indexOf('--');
if (dashesLoc > -1) {
  targetArgs = args.slice(dashesLoc + 1, args.length);
  args = args.slice(0, dashesLoc);
}
setTimeout(function () {
  var t;
  if (args.length === 1 && args[0] === '--help') {
    console.log('Available targets:');
    for (t in commonjsGlobal.target) console.log('  ' + t);
    return;
  }
  for (t in commonjsGlobal.target) {
    (function (t, oldTarget) {
      commonjsGlobal.target[t] = function () {
        if (!oldTarget.done) {
          oldTarget.done = true;
          oldTarget.result = oldTarget.apply(oldTarget, arguments);
        }
        return oldTarget.result;
      };
    })(t, commonjsGlobal.target[t]);
  }
  if (args.length > 0) {
    args.forEach(function (arg) {
      if (arg in commonjsGlobal.target) commonjsGlobal.target[arg](targetArgs);else {
        console.log('no such target: ' + arg);
      }
    });
  } else if ('all' in commonjsGlobal.target) {
    commonjsGlobal.target.all(targetArgs);
  }
}, 0);

var semver$1 = {exports: {}};

(function (module, exports) {
  exports = module.exports = SemVer;
  var debug;
  if (typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
    debug = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift('SEMVER');
      console.log.apply(console, args);
    };
  } else {
    debug = function () {};
  }
  exports.SEMVER_SPEC_VERSION = '2.0.0';
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var MAX_SAFE_COMPONENT_LENGTH = 16;
  var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  var re = exports.re = [];
  var safeRe = exports.safeRe = [];
  var src = exports.src = [];
  var t = exports.tokens = {};
  var R = 0;
  function tok(n) {
    t[n] = R++;
  }
  var LETTERDASHNUMBER = '[a-zA-Z0-9-]';
  var safeRegexReplacements = [['\\s', 1], ['\\d', MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];
  function makeSafeRe(value) {
    for (var i = 0; i < safeRegexReplacements.length; i++) {
      var token = safeRegexReplacements[i][0];
      var max = safeRegexReplacements[i][1];
      value = value.split(token + '*').join(token + '{0,' + max + '}').split(token + '+').join(token + '{1,' + max + '}');
    }
    return value;
  }
  tok('NUMERICIDENTIFIER');
  src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*';
  tok('NUMERICIDENTIFIERLOOSE');
  src[t.NUMERICIDENTIFIERLOOSE] = '\\d+';
  tok('NONNUMERICIDENTIFIER');
  src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-]' + LETTERDASHNUMBER + '*';
  tok('MAINVERSION');
  src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')';
  tok('MAINVERSIONLOOSE');
  src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')';
  tok('PRERELEASEIDENTIFIER');
  src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] + '|' + src[t.NONNUMERICIDENTIFIER] + ')';
  tok('PRERELEASEIDENTIFIERLOOSE');
  src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] + '|' + src[t.NONNUMERICIDENTIFIER] + ')';
  tok('PRERELEASE');
  src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] + '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))';
  tok('PRERELEASELOOSE');
  src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))';
  tok('BUILDIDENTIFIER');
  src[t.BUILDIDENTIFIER] = LETTERDASHNUMBER + '+';
  tok('BUILD');
  src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] + '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))';
  tok('FULL');
  tok('FULLPLAIN');
  src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] + src[t.PRERELEASE] + '?' + src[t.BUILD] + '?';
  src[t.FULL] = '^' + src[t.FULLPLAIN] + '$';
  tok('LOOSEPLAIN');
  src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + '?' + src[t.BUILD] + '?';
  tok('LOOSE');
  src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$';
  tok('GTLT');
  src[t.GTLT] = '((?:<|>)?=?)';
  tok('XRANGEIDENTIFIERLOOSE');
  src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
  tok('XRANGEIDENTIFIER');
  src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*';
  tok('XRANGEPLAIN');
  src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:' + src[t.PRERELEASE] + ')?' + src[t.BUILD] + '?' + ')?)?';
  tok('XRANGEPLAINLOOSE');
  src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[t.PRERELEASELOOSE] + ')?' + src[t.BUILD] + '?' + ')?)?';
  tok('XRANGE');
  src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$';
  tok('XRANGELOOSE');
  src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$';
  tok('COERCE');
  src[t.COERCE] = '(^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])';
  tok('COERCERTL');
  re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g');
  safeRe[t.COERCERTL] = new RegExp(makeSafeRe(src[t.COERCE]), 'g');
  tok('LONETILDE');
  src[t.LONETILDE] = '(?:~>?)';
  tok('TILDETRIM');
  src[t.TILDETRIM] = '(\\s*)' + src[t.LONETILDE] + '\\s+';
  re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], 'g');
  safeRe[t.TILDETRIM] = new RegExp(makeSafeRe(src[t.TILDETRIM]), 'g');
  var tildeTrimReplace = '$1~';
  tok('TILDE');
  src[t.TILDE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAIN] + '$';
  tok('TILDELOOSE');
  src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$';
  tok('LONECARET');
  src[t.LONECARET] = '(?:\\^)';
  tok('CARETTRIM');
  src[t.CARETTRIM] = '(\\s*)' + src[t.LONECARET] + '\\s+';
  re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], 'g');
  safeRe[t.CARETTRIM] = new RegExp(makeSafeRe(src[t.CARETTRIM]), 'g');
  var caretTrimReplace = '$1^';
  tok('CARET');
  src[t.CARET] = '^' + src[t.LONECARET] + src[t.XRANGEPLAIN] + '$';
  tok('CARETLOOSE');
  src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$';
  tok('COMPARATORLOOSE');
  src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$';
  tok('COMPARATOR');
  src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$';
  tok('COMPARATORTRIM');
  src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')';
  re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g');
  safeRe[t.COMPARATORTRIM] = new RegExp(makeSafeRe(src[t.COMPARATORTRIM]), 'g');
  var comparatorTrimReplace = '$1$2$3';
  tok('HYPHENRANGE');
  src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAIN] + ')' + '\\s*$';
  tok('HYPHENRANGELOOSE');
  src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s*$';
  tok('STAR');
  src[t.STAR] = '(<|>)?=?\\s*\\*';
  for (var i = 0; i < R; i++) {
    debug(i, src[i]);
    if (!re[i]) {
      re[i] = new RegExp(src[i]);
      safeRe[i] = new RegExp(makeSafeRe(src[i]));
    }
  }
  exports.parse = parse;
  function parse(version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version !== 'string') {
      return null;
    }
    if (version.length > MAX_LENGTH) {
      return null;
    }
    var r = options.loose ? safeRe[t.LOOSE] : safeRe[t.FULL];
    if (!r.test(version)) {
      return null;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      return null;
    }
  }
  exports.valid = valid;
  function valid(version, options) {
    var v = parse(version, options);
    return v ? v.version : null;
  }
  exports.clean = clean;
  function clean(version, options) {
    var s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
  }
  exports.SemVer = SemVer;
  function SemVer(version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      if (version.loose === options.loose) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError('Invalid Version: ' + version);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
    }
    if (!(this instanceof SemVer)) {
      return new SemVer(version, options);
    }
    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    var m = version.trim().match(options.loose ? safeRe[t.LOOSE] : safeRe[t.FULL]);
    if (!m) {
      throw new TypeError('Invalid Version: ' + version);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version');
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(function (id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }
  SemVer.prototype.format = function () {
    this.version = this.major + '.' + this.minor + '.' + this.patch;
    if (this.prerelease.length) {
      this.version += '-' + this.prerelease.join('.');
    }
    return this.version;
  };
  SemVer.prototype.toString = function () {
    return this.version;
  };
  SemVer.prototype.compare = function (other) {
    debug('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return this.compareMain(other) || this.comparePre(other);
  };
  SemVer.prototype.compareMain = function (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  };
  SemVer.prototype.comparePre = function (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    var i = 0;
    do {
      var a = this.prerelease[i];
      var b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  };
  SemVer.prototype.compareBuild = function (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    var i = 0;
    do {
      var a = this.build[i];
      var b = other.build[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  };
  SemVer.prototype.inc = function (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;
      case 'prepatch':
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier);
        }
        this.inc('pre', identifier);
        break;
      case 'major':
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'minor':
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'patch':
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          var i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break;
      default:
        throw new Error('invalid increment argument: ' + release);
    }
    this.format();
    this.raw = this.version;
    return this;
  };
  exports.inc = inc;
  function inc(version, release, loose, identifier) {
    if (typeof loose === 'string') {
      identifier = loose;
      loose = undefined;
    }
    try {
      return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
      return null;
    }
  }
  exports.diff = diff;
  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse(version1);
      var v2 = parse(version2);
      var prefix = '';
      if (v1.prerelease.length || v2.prerelease.length) {
        prefix = 'pre';
        var defaultResult = 'prerelease';
      }
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return prefix + key;
          }
        }
      }
      return defaultResult;
    }
  }
  exports.compareIdentifiers = compareIdentifiers;
  var numeric = /^[0-9]+$/;
  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }
  exports.rcompareIdentifiers = rcompareIdentifiers;
  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }
  exports.major = major;
  function major(a, loose) {
    return new SemVer(a, loose).major;
  }
  exports.minor = minor;
  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }
  exports.patch = patch;
  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }
  exports.compare = compare;
  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }
  exports.compareLoose = compareLoose;
  function compareLoose(a, b) {
    return compare(a, b, true);
  }
  exports.compareBuild = compareBuild;
  function compareBuild(a, b, loose) {
    var versionA = new SemVer(a, loose);
    var versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  }
  exports.rcompare = rcompare;
  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }
  exports.sort = sort;
  function sort(list, loose) {
    return list.sort(function (a, b) {
      return exports.compareBuild(a, b, loose);
    });
  }
  exports.rsort = rsort;
  function rsort(list, loose) {
    return list.sort(function (a, b) {
      return exports.compareBuild(b, a, loose);
    });
  }
  exports.gt = gt;
  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }
  exports.lt = lt;
  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }
  exports.eq = eq;
  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }
  exports.neq = neq;
  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }
  exports.gte = gte;
  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }
  exports.lte = lte;
  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }
  exports.cmp = cmp;
  function cmp(a, op, b, loose) {
    switch (op) {
      case '===':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        return a === b;
      case '!==':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        return a !== b;
      case '':
      case '=':
      case '==':
        return eq(a, b, loose);
      case '!=':
        return neq(a, b, loose);
      case '>':
        return gt(a, b, loose);
      case '>=':
        return gte(a, b, loose);
      case '<':
        return lt(a, b, loose);
      case '<=':
        return lte(a, b, loose);
      default:
        throw new TypeError('Invalid operator: ' + op);
    }
  }
  exports.Comparator = Comparator;
  function Comparator(comp, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }
    if (!(this instanceof Comparator)) {
      return new Comparator(comp, options);
    }
    comp = comp.trim().split(/\s+/).join(' ');
    debug('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);
    if (this.semver === ANY) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }
    debug('comp', this);
  }
  var ANY = {};
  Comparator.prototype.parse = function (comp) {
    var r = this.options.loose ? safeRe[t.COMPARATORLOOSE] : safeRe[t.COMPARATOR];
    var m = comp.match(r);
    if (!m) {
      throw new TypeError('Invalid comparator: ' + comp);
    }
    this.operator = m[1] !== undefined ? m[1] : '';
    if (this.operator === '=') {
      this.operator = '';
    }
    if (!m[2]) {
      this.semver = ANY;
    } else {
      this.semver = new SemVer(m[2], this.options.loose);
    }
  };
  Comparator.prototype.toString = function () {
    return this.value;
  };
  Comparator.prototype.test = function (version) {
    debug('Comparator.test', version, this.options.loose);
    if (this.semver === ANY || version === ANY) {
      return true;
    }
    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options);
      } catch (er) {
        return false;
      }
    }
    return cmp(version, this.operator, this.semver, this.options);
  };
  Comparator.prototype.intersects = function (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required');
    }
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    var rangeTmp;
    if (this.operator === '') {
      if (this.value === '') {
        return true;
      }
      rangeTmp = new Range(comp.value, options);
      return satisfies(this.value, rangeTmp, options);
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true;
      }
      rangeTmp = new Range(this.value, options);
      return satisfies(comp.semver, rangeTmp, options);
    }
    var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };
  exports.Range = Range;
  function Range(range, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }
    if (range instanceof Comparator) {
      return new Range(range.value, options);
    }
    if (!(this instanceof Range)) {
      return new Range(range, options);
    }
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    this.raw = range.trim().split(/\s+/).join(' ');
    this.set = this.raw.split('||').map(function (range) {
      return this.parseRange(range.trim());
    }, this).filter(function (c) {
      return c.length;
    });
    if (!this.set.length) {
      throw new TypeError('Invalid SemVer Range: ' + this.raw);
    }
    this.format();
  }
  Range.prototype.format = function () {
    this.range = this.set.map(function (comps) {
      return comps.join(' ').trim();
    }).join('||').trim();
    return this.range;
  };
  Range.prototype.toString = function () {
    return this.range;
  };
  Range.prototype.parseRange = function (range) {
    var loose = this.options.loose;
    var hr = loose ? safeRe[t.HYPHENRANGELOOSE] : safeRe[t.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug('hyphen replace', range);
    range = range.replace(safeRe[t.COMPARATORTRIM], comparatorTrimReplace);
    debug('comparator trim', range, safeRe[t.COMPARATORTRIM]);
    range = range.replace(safeRe[t.TILDETRIM], tildeTrimReplace);
    range = range.replace(safeRe[t.CARETTRIM], caretTrimReplace);
    range = range.split(/\s+/).join(' ');
    var compRe = loose ? safeRe[t.COMPARATORLOOSE] : safeRe[t.COMPARATOR];
    var set = range.split(' ').map(function (comp) {
      return parseComparator(comp, this.options);
    }, this).join(' ').split(/\s+/);
    if (this.options.loose) {
      set = set.filter(function (comp) {
        return !!comp.match(compRe);
      });
    }
    set = set.map(function (comp) {
      return new Comparator(comp, this.options);
    }, this);
    return set;
  };
  Range.prototype.intersects = function (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required');
    }
    return this.set.some(function (thisComparators) {
      return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
        return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
          return rangeComparators.every(function (rangeComparator) {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  };
  function isSatisfiable(comparators, options) {
    var result = true;
    var remainingComparators = comparators.slice();
    var testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every(function (otherComparator) {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  }
  exports.toComparators = toComparators;
  function toComparators(range, options) {
    return new Range(range, options).set.map(function (comp) {
      return comp.map(function (c) {
        return c.value;
      }).join(' ').trim().split(' ');
    });
  }
  function parseComparator(comp, options) {
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
  }
  function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
  }
  function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceTilde(comp, options);
    }).join(' ');
  }
  function replaceTilde(comp, options) {
    var r = options.loose ? safeRe[t.TILDELOOSE] : safeRe[t.TILDE];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('tilde', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (isX(p)) {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      } else if (pr) {
        debug('replaceTilde pr', pr);
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else {
        ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
      }
      debug('tilde return', ret);
      return ret;
    });
  }
  function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceCaret(comp, options);
    }).join(' ');
  }
  function replaceCaret(comp, options) {
    debug('caret', comp, options);
    var r = options.loose ? safeRe[t.CARETLOOSE] : safeRe[t.CARET];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('caret', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (isX(p)) {
        if (M === '0') {
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
        } else {
          ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
        }
      } else if (pr) {
        debug('replaceCaret pr', pr);
        if (M === '0') {
          if (m === '0') {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
          } else {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
          }
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
        }
      } else {
        debug('no pr');
        if (M === '0') {
          if (m === '0') {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
          } else {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
          }
        } else {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
        }
      }
      debug('caret return', ret);
      return ret;
    });
  }
  function replaceXRanges(comp, options) {
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map(function (comp) {
      return replaceXRange(comp, options);
    }).join(' ');
  }
  function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? safeRe[t.XRANGELOOSE] : safeRe[t.XRANGE];
    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;
      if (gtlt === '=' && anyX) {
        gtlt = '';
      }
      pr = options.includePrerelease ? '-0' : '';
      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          ret = '<0.0.0-0';
        } else {
          ret = '*';
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === '>') {
          gtlt = '>=';
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          gtlt = '<';
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        ret = gtlt + M + '.' + m + '.' + p + pr;
      } else if (xm) {
        ret = '>=' + M + '.0.0' + pr + ' <' + (+M + 1) + '.0.0' + pr;
      } else if (xp) {
        ret = '>=' + M + '.' + m + '.0' + pr + ' <' + M + '.' + (+m + 1) + '.0' + pr;
      }
      debug('xRange return', ret);
      return ret;
    });
  }
  function replaceStars(comp, options) {
    debug('replaceStars', comp, options);
    return comp.trim().replace(safeRe[t.STAR], '');
  }
  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = '';
    } else if (isX(fm)) {
      from = '>=' + fM + '.0.0';
    } else if (isX(fp)) {
      from = '>=' + fM + '.' + fm + '.0';
    } else {
      from = '>=' + from;
    }
    if (isX(tM)) {
      to = '';
    } else if (isX(tm)) {
      to = '<' + (+tM + 1) + '.0.0';
    } else if (isX(tp)) {
      to = '<' + tM + '.' + (+tm + 1) + '.0';
    } else if (tpr) {
      to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
    } else {
      to = '<=' + to;
    }
    return (from + ' ' + to).trim();
  }
  Range.prototype.test = function (version) {
    if (!version) {
      return false;
    }
    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options);
      } catch (er) {
        return false;
      }
    }
    for (var i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true;
      }
    }
    return false;
  };
  function testSet(set, version, options) {
    for (var i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          var allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }
  exports.satisfies = satisfies;
  function satisfies(version, range, options) {
    try {
      range = new Range(range, options);
    } catch (er) {
      return false;
    }
    return range.test(version);
  }
  exports.maxSatisfying = maxSatisfying;
  function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  }
  exports.minSatisfying = minSatisfying;
  function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  }
  exports.minVersion = minVersion;
  function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer('0.0.0');
    if (range.test(minver)) {
      return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
      return minver;
    }
    minver = null;
    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];
      comparators.forEach(function (comparator) {
        var compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case '>':
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          case '':
          case '>=':
            if (!minver || gt(minver, compver)) {
              minver = compver;
            }
            break;
          case '<':
          case '<=':
            break;
          default:
            throw new Error('Unexpected operation: ' + comparator.operator);
        }
      });
    }
    if (minver && range.test(minver)) {
      return minver;
    }
    return null;
  }
  exports.validRange = validRange;
  function validRange(range, options) {
    try {
      return new Range(range, options).range || '*';
    } catch (er) {
      return null;
    }
  }
  exports.ltr = ltr;
  function ltr(version, range, options) {
    return outside(version, range, '<', options);
  }
  exports.gtr = gtr;
  function gtr(version, range, options) {
    return outside(version, range, '>', options);
  }
  exports.outside = outside;
  function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case '>':
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = '>';
        ecomp = '>=';
        break;
      case '<':
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = '<';
        ecomp = '<=';
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range, options)) {
      return false;
    }
    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];
      var high = null;
      var low = null;
      comparators.forEach(function (comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator('>=0.0.0');
        }
        high = high || comparator;
        low = low || comparator;
        if (gtfn(comparator.semver, high.semver, options)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, options)) {
          low = comparator;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  }
  exports.prerelease = prerelease;
  function prerelease(version, options) {
    var parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }
  exports.intersects = intersects;
  function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
  }
  exports.coerce = coerce;
  function coerce(version, options) {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === 'number') {
      version = String(version);
    }
    if (typeof version !== 'string') {
      return null;
    }
    options = options || {};
    var match = null;
    if (!options.rtl) {
      match = version.match(safeRe[t.COERCE]);
    } else {
      var next;
      while ((next = safeRe[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        safeRe[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
      }
      safeRe[t.COERCERTL].lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    return parse(match[2] + '.' + (match[3] || '0') + '.' + (match[4] || '0'), options);
  }
})(semver$1, semver$1.exports);
var semverExports = semver$1.exports;
var semver = getDefaultExportFromCjs(semverExports);

function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

var $$i = _export;
var $includes = arrayIncludes.includes;
var fails$9 = fails$v;
var addToUnscopables$1 = addToUnscopables$3;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$9(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$i({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('includes');

var charAt$2 = stringMultibyte.charAt;
var toString$3 = toString$c;
var InternalStateModule$6 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$5 = InternalStateModule$6.set;
var getInternalState$2 = InternalStateModule$6.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$5(this, {
    type: STRING_ITERATOR,
    string: toString$3(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject$1(undefined, true);
  point = charAt$2(string, index);
  state.index += point.length;
  return createIterResultObject$1(point, false);
});

var fails$8 = fails$v;
var wellKnownSymbol$8 = wellKnownSymbol$n;
var DESCRIPTORS$a = descriptors$1;
var IS_PURE = isPure;

var ITERATOR$4 = wellKnownSymbol$8('iterator');

var urlConstructorDetection = !fails$8(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var params = url.searchParams;
  var params2 = new URLSearchParams('a=1&a=2&b=3');
  var result = '';
  url.pathname = 'c%20d';
  params.forEach(function (value, key) {
    params['delete']('b');
    result += key + value;
  });
  params2['delete']('a', 2);
  // `undefined` case is a Chromium 117 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
  params2['delete']('b', undefined);
  return (IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')))
    || (!params.size && (IS_PURE || !DESCRIPTORS$a))
    || !params.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || params.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !params[ITERATOR$4]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

var classofRaw = classofRaw$2;
var uncurryThis$c = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$c(fn);
};

var uncurryThis$b = functionUncurryThisClause;
var aCallable$8 = aCallable$c;
var NATIVE_BIND = functionBindNative;

var bind$a = uncurryThis$b(uncurryThis$b.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$8(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$a(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var isPrototypeOf$4 = objectIsPrototypeOf;

var $TypeError$6 = TypeError;

var anInstance$5 = function (it, Prototype) {
  if (isPrototypeOf$4(Prototype, it)) return it;
  throw new $TypeError$6('Incorrect invocation');
};

var DESCRIPTORS$9 = descriptors$1;
var uncurryThis$a = functionUncurryThis;
var call$e = functionCall;
var fails$7 = fails$v;
var objectKeys$1 = objectKeys$3;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$5 = toObject$a;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat = uncurryThis$a([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$7(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$9 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$5(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$9 || call$e(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var call$d = functionCall;
var anObject$5 = anObject$f;
var getMethod$1 = getMethod$6;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$5(iterator);
  try {
    innerResult = getMethod$1(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$d(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$5(innerResult);
  return value;
};

var anObject$4 = anObject$f;
var iteratorClose$1 = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$4(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$1(iterator, 'throw', error);
  }
};

var wellKnownSymbol$7 = wellKnownSymbol$n;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$7('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$3 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
};

var DESCRIPTORS$8 = descriptors$1;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$6;

var createProperty$2 = function (object, key, value) {
  if (DESCRIPTORS$8) definePropertyModule$1.f(object, key, createPropertyDescriptor$2(0, value));
  else object[key] = value;
};

var classof$7 = classof$b;
var getMethod = getMethod$6;
var isNullOrUndefined = isNullOrUndefined$7;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$n;

var ITERATOR$2 = wellKnownSymbol$6('iterator');

var getIteratorMethod$5 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR$2)
    || getMethod(it, '@@iterator')
    || Iterators[classof$7(it)];
};

var call$c = functionCall;
var aCallable$7 = aCallable$c;
var anObject$3 = anObject$f;
var tryToString$2 = tryToString$6;
var getIteratorMethod$4 = getIteratorMethod$5;

var $TypeError$5 = TypeError;

var getIterator$4 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable$7(iteratorMethod)) return anObject$3(call$c(iteratorMethod, argument));
  throw new $TypeError$5(tryToString$2(argument) + ' is not iterable');
};

var bind$9 = functionBindContext;
var call$b = functionCall;
var toObject$4 = toObject$a;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
var isConstructor$1 = isConstructor$3;
var lengthOfArrayLike$8 = lengthOfArrayLike$b;
var createProperty$1 = createProperty$2;
var getIterator$3 = getIterator$4;
var getIteratorMethod$3 = getIteratorMethod$5;

var $Array$2 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$4(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$1(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$3(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$2 && isArrayIteratorMethod$2(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator$3(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call$b(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$1(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$8(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$2(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$1(result, index, value);
    }
  }
  result.length = index;
  return result;
};

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis$9 = functionUncurryThis;

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError$4 = RangeError;
var exec$2 = uncurryThis$9(regexSeparators.exec);
var floor$3 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis$9(''.charCodeAt);
var join$2 = uncurryThis$9([].join);
var push$4 = uncurryThis$9([].push);
var replace$3 = uncurryThis$9(''.replace);
var split$2 = uncurryThis$9(''.split);
var toLowerCase$1 = uncurryThis$9(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) === 0xDC00) { // Low surrogate.
        push$4(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$4(output, value);
        counter--;
      }
    } else {
      push$4(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$3(delta / damp) : delta >> 1;
  delta += floor$3(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$3(delta / baseMinusTMin);
    k += base;
  }
  return floor$3(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$4(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$4(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$3((maxInt - delta) / handledCPCountPlusOne)) {
      throw new $RangeError$4(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw new $RangeError$4(OVERFLOW_ERROR);
      }
      if (currentValue === n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$4(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$3(qMinusT / baseMinusT);
          k += base;
        }

        push$4(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join$2(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$3(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$4(encoded, exec$2(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join$2(encoded, '.');
};

var $TypeError$4 = TypeError;

var validateArgumentsLength$3 = function (passed, required) {
  if (passed < required) throw new $TypeError$4('Not enough arguments');
  return passed;
};

var global$j = global$x;
var DESCRIPTORS$7 = descriptors$1;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn$2 = function (name) {
  if (!DESCRIPTORS$7) return global$j[name];
  var descriptor = getOwnPropertyDescriptor(global$j, name);
  return descriptor && descriptor.value;
};

var defineBuiltIn$5 = defineBuiltIn$b;

var defineBuiltIns$2 = function (target, src, options) {
  for (var key in src) defineBuiltIn$5(target, key, src[key], options);
  return target;
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$h = _export;
var global$i = global$x;
var safeGetBuiltIn$1 = safeGetBuiltIn$2;
var call$a = functionCall;
var uncurryThis$8 = functionUncurryThis;
var DESCRIPTORS$6 = descriptors$1;
var USE_NATIVE_URL$1 = urlConstructorDetection;
var defineBuiltIn$4 = defineBuiltIn$b;
var defineBuiltInAccessor$5 = defineBuiltInAccessor$7;
var defineBuiltIns$1 = defineBuiltIns$2;
var setToStringTag$3 = setToStringTag$6;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$5 = internalState;
var anInstance$4 = anInstance$5;
var isCallable$6 = isCallable$q;
var hasOwn$6 = hasOwnProperty_1;
var bind$8 = functionBindContext;
var classof$6 = classof$b;
var anObject$2 = anObject$f;
var isObject$7 = isObject$i;
var $toString$1 = toString$c;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$6;
var getIterator$2 = getIterator$4;
var getIteratorMethod$2 = getIteratorMethod$5;
var createIterResultObject = createIterResultObject$3;
var validateArgumentsLength$2 = validateArgumentsLength$3;
var wellKnownSymbol$5 = wellKnownSymbol$n;
var arraySort = arraySort$1;

var ITERATOR$1 = wellKnownSymbol$5('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$4 = InternalStateModule$5.set;
var getInternalParamsState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$5.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var nativeFetch = safeGetBuiltIn$1('fetch');
var NativeRequest = safeGetBuiltIn$1('Request');
var Headers = safeGetBuiltIn$1('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$i.RegExp;
var TypeError$4 = global$i.TypeError;
var decodeURIComponent = global$i.decodeURIComponent;
var encodeURIComponent$1 = global$i.encodeURIComponent;
var charAt$1 = uncurryThis$8(''.charAt);
var join$1 = uncurryThis$8([].join);
var push$3 = uncurryThis$8([].push);
var replace$2 = uncurryThis$8(''.replace);
var shift$1 = uncurryThis$8([].shift);
var splice = uncurryThis$8([].splice);
var split$1 = uncurryThis$8(''.split);
var stringSlice$3 = uncurryThis$8(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$2(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$2(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$2(encodeURIComponent$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$4(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    target: getInternalParamsState(params).entries,
    index: 0,
    kind: kind
  });
}, URL_SEARCH_PARAMS, function next() {
  var state = getInternalIteratorState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  var entry = target[index];
  switch (state.kind) {
    case 'keys': return createIterResultObject(entry.key, false);
    case 'values': return createIterResultObject(entry.value, false);
  } return createIterResultObject([entry.key, entry.value], false);
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject$7(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$3(init, 1) : init : $toString$1(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var entries = this.entries;
    var iteratorMethod = getIteratorMethod$2(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator$2(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$a(next, iterator)).done) {
        entryIterator = getIterator$2(anObject$2(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$a(entryNext, entryIterator)).done ||
          (second = call$a(entryNext, entryIterator)).done ||
          !call$a(entryNext, entryIterator).done
        ) throw new TypeError$4('Expected sequence with length 2');
        push$3(entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$6(object, key)) {
      push$3(entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var entries = this.entries;
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$3(entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$3(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$4(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var state = setInternalState$4(this, new URLSearchParamsState(init));
  if (!DESCRIPTORS$6) this.size = state.entries.length;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns$1(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$2(arguments.length, 2);
    push$3(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    if (!DESCRIPTORS$6) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name /* , value */) {
    var state = getInternalParamsState(this);
    var length = validateArgumentsLength$2(arguments.length, 1);
    var entries = state.entries;
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index];
      if (entry.key === key && (value === undefined || entry.value === value)) {
        splice(entries, index, 1);
        if (value !== undefined) break;
      } else index++;
    }
    if (!DESCRIPTORS$6) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$2(arguments.length, 1);
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    var entries = getInternalParamsState(this).entries;
    validateArgumentsLength$2(arguments.length, 1);
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$3(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name /* , value */) {
    var entries = getInternalParamsState(this).entries;
    var length = validateArgumentsLength$2(arguments.length, 1);
    var key = $toString$1(name);
    var $value = length < 2 ? undefined : arguments[1];
    var value = $value === undefined ? $value : $toString$1($value);
    var index = 0;
    while (index < entries.length) {
      var entry = entries[index++];
      if (entry.key === key && (value === undefined || entry.value === value)) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    var state = getInternalParamsState(this);
    validateArgumentsLength$2(arguments.length, 1);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$3(entries, { key: key, value: val });
    if (!DESCRIPTORS$6) this.size = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$8(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$4(URLSearchParamsPrototype, ITERATOR$1, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$4(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS$6) defineBuiltInAccessor$5(URLSearchParamsPrototype, 'size', {
  get: function size() {
    return getInternalParamsState(this).entries.length;
  },
  configurable: true,
  enumerable: true
});

setToStringTag$3(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$h({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable$6(Headers)) {
  var headersHas = uncurryThis$8(HeadersPrototype.has);
  var headersSet = uncurryThis$8(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$7(init)) {
      var body = init.body;
      var headers;
      if (classof$6(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$1(init, {
          body: createPropertyDescriptor$1(0, $toString$1(body)),
          headers: createPropertyDescriptor$1(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$6(nativeFetch)) {
    $$h({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$6(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$4(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$h({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$g = _export;
var DESCRIPTORS$5 = descriptors$1;
var USE_NATIVE_URL = urlConstructorDetection;
var global$h = global$x;
var bind$7 = functionBindContext;
var uncurryThis$7 = functionUncurryThis;
var defineBuiltIn$3 = defineBuiltIn$b;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$7;
var anInstance$3 = anInstance$5;
var hasOwn$5 = hasOwnProperty_1;
var assign = objectAssign;
var arrayFrom = arrayFrom$1;
var arraySlice$2 = arraySlice$4;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var $toString = toString$c;
var setToStringTag$2 = setToStringTag$6;
var validateArgumentsLength$1 = validateArgumentsLength$3;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule$4 = internalState;

var setInternalState$3 = InternalStateModule$4.set;
var getInternalURLState = InternalStateModule$4.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global$h.URL;
var TypeError$3 = global$h.TypeError;
var parseInt$1 = global$h.parseInt;
var floor$2 = Math.floor;
var pow$1 = Math.pow;
var charAt = uncurryThis$7(''.charAt);
var exec$1 = uncurryThis$7(/./.exec);
var join = uncurryThis$7([].join);
var numberToString = uncurryThis$7(1.0.toString);
var pop = uncurryThis$7([].pop);
var push$2 = uncurryThis$7([].push);
var replace$1 = uncurryThis$7(''.replace);
var shift = uncurryThis$7([].shift);
var split = uncurryThis$7(''.split);
var stringSlice$2 = uncurryThis$7(''.slice);
var toLowerCase = uncurryThis$7(''.toLowerCase);
var unshift = uncurryThis$7([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] === '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part === '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) === '0') {
      radix = exec$1(HEX_START, part) ? 16 : 8;
      part = stringSlice$2(part, radix === 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec$1(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
      number = parseInt$1(part, radix);
    }
    push$2(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index === partsLength - 1) {
      if (number >= pow$1(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow$1(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() === ':') {
    if (charAt(input, 1) !== ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex === 8) return;
    if (chr() === ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec$1(HEX, chr())) {
      value = value * 16 + parseInt$1(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() === '.') {
      if (length === 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() === '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec$1(DIGIT, chr())) return;
        while (exec$1(DIGIT, chr())) {
          number = parseInt$1(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece === 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
      }
      if (numbersSeen !== 4) return;
      break;
    } else if (chr() === ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex !== 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor$2(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn$5(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length === 2 && exec$1(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) === ':' || (!normalized && second === '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice$2(string, 0, 2)) && (
    string.length === 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw new TypeError$3(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw new TypeError$3(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace$1(input, LEADING_C0_CONTROL_OR_SPACE, '');
      input = replace$1(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
    }

    input = replace$1(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec$1(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec$1(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
            buffer += toLowerCase(chr);
          } else if (chr === ':') {
            if (stateOverride && (
              (url.isSpecial() !== hasOwn$5(specialSchemes, buffer)) ||
              (buffer === 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme === 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme === 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] === '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push$2(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr !== '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr === '#') {
            url.scheme = base.scheme;
            url.path = arraySlice$2(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme === 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr === '/' && codePoints[pointer + 1] === '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr === '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr === EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$2(base.path);
            url.query = base.query;
          } else if (chr === '/' || (chr === '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr === '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$2(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$2(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice$2(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr === '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr !== '/' && chr !== '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr === '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint === ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer === '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme === 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr === ':' && !seenBracket) {
            if (buffer === '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride === HOSTNAME) return;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer === '') return INVALID_HOST;
            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr === '[') seenBracket = true;
            else if (chr === ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec$1(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr === EOF || chr === '/' || chr === '?' || chr === '#' ||
            (chr === '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer !== '') {
              var port = parseInt$1(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr === '/' || chr === '\\') state = FILE_SLASH;
          else if (base && base.scheme === 'file') {
            switch (chr) {
              case EOF:
                url.host = base.host;
                url.path = arraySlice$2(base.path);
                url.query = base.query;
                break;
              case '?':
                url.host = base.host;
                url.path = arraySlice$2(base.path);
                url.query = '';
                state = QUERY;
                break;
              case '#':
                url.host = base.host;
                url.path = arraySlice$2(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
                break;
              default:
                if (!startsWithWindowsDriveLetter(join(arraySlice$2(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySlice$2(base.path);
                  url.shortenPath();
                }
                state = PATH;
                continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr === '/' || chr === '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice$2(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push$2(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer === '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host === 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr !== '/' && chr !== '\\') continue;
          } else if (!stateOverride && chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            state = PATH;
            if (chr !== '/') continue;
          } break;

        case PATH:
          if (
            chr === EOF || chr === '/' ||
            (chr === '\\' && url.isSpecial()) ||
            (!stateOverride && (chr === '?' || chr === '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push$2(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
                push$2(url.path, '');
              }
            } else {
              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push$2(url.path, buffer);
            }
            buffer = '';
            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr === '?') {
              url.query = '';
              state = QUERY;
            } else if (chr === '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr === '?') {
            url.query = '';
            state = QUERY;
          } else if (chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr === '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr !== EOF) {
            if (chr === "'" && url.isSpecial()) url.query += '%27';
            else if (chr === '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) === '[') {
      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
      result = parseIPv6(stringSlice$2(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec$1(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec$1(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username !== '' || this.password !== '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn$5(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme === 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw new TypeError$3(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme === 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme === 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port === '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search === '') {
      this.query = null;
    } else {
      if (charAt(search, 0) === '?') search = stringSlice$2(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash === '') {
      this.fragment = null;
      return;
    }
    if (charAt(hash, 0) === '#') hash = stringSlice$2(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance$3(this, URLPrototype);
  var base = validateArgumentsLength$1(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState$3(that, new URLState(url, false, base));
  if (!DESCRIPTORS$5) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS$5) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor$4(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor$4(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor$4(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor$4(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor$4(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor$4(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor$4(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor$4(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor$4(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor$4(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor$4(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor$4(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn$3(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn$3(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn$3(URLConstructor, 'createObjectURL', bind$7(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn$3(URLConstructor, 'revokeObjectURL', bind$7(nativeRevokeObjectURL, NativeURL));
}

setToStringTag$2(URLConstructor, 'URL');

$$g({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS$5 }, {
  URL: URLConstructor
});

var $$f = _export;
var call$9 = functionCall;

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$$f({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call$9(URL.prototype.toString, this);
  }
});

const safeNormalizeFileUrl = (file, name) => {
  const fileString = normalizeFileUrl(file);
  if (typeof fileString !== 'string') {
    throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
  }
  return fileString;
};
const normalizeFileUrl = file => file instanceof URL ? node_url.fileURLToPath(file) : file;

const normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
  const filePath = safeNormalizeFileUrl(rawFile, 'First argument');
  const [commandArguments, options] = isPlainObject(rawArguments) ? [[], rawArguments] : [rawArguments, rawOptions];
  if (!Array.isArray(commandArguments)) {
    throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
  }
  if (commandArguments.some(commandArgument => typeof commandArgument === 'object' && commandArgument !== null)) {
    throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
  }
  const normalizedArguments = commandArguments.map(String);
  const nullByteArgument = normalizedArguments.find(normalizedArgument => normalizedArgument.includes('\0'));
  if (nullByteArgument !== undefined) {
    throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
  }
  if (!isPlainObject(options)) {
    throw new TypeError(`Last argument must be an options object: ${options}`);
  }
  return [filePath, normalizedArguments, options];
};

var typedArrayConstructor = {exports: {}};

var wellKnownSymbol$4 = wellKnownSymbol$n;

var ITERATOR = wellKnownSymbol$4('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
var DESCRIPTORS$4 = descriptors$1;
var global$g = global$x;
var isCallable$5 = isCallable$q;
var isObject$6 = isObject$i;
var hasOwn$4 = hasOwnProperty_1;
var classof$5 = classof$b;
var tryToString$1 = tryToString$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
var defineBuiltIn$2 = defineBuiltIn$b;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$7;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getPrototypeOf$1 = objectGetPrototypeOf$1;
var setPrototypeOf$3 = objectSetPrototypeOf;
var wellKnownSymbol$3 = wellKnownSymbol$n;
var uid = uid$3;
var InternalStateModule$3 = internalState;

var enforceInternalState$1 = InternalStateModule$3.enforce;
var getInternalState$1 = InternalStateModule$3.get;
var Int8Array$3 = global$g.Int8Array;
var Int8ArrayPrototype$1 = Int8Array$3 && Int8Array$3.prototype;
var Uint8ClampedArray$1 = global$g.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
var TypedArray$1 = Int8Array$3 && getPrototypeOf$1(Int8Array$3);
var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && getPrototypeOf$1(Int8ArrayPrototype$1);
var ObjectPrototype$1 = Object.prototype;
var TypeError$2 = global$g.TypeError;

var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$5(global$g.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject$6(it)) return false;
  var klass = classof$5(it);
  return klass === 'DataView'
    || hasOwn$4(TypedArrayConstructorsList, klass)
    || hasOwn$4(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf$1(it);
  if (!isObject$6(proto)) return;
  var state = getInternalState$1(proto);
  return (state && hasOwn$4(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray$1 = function (it) {
  if (!isObject$6(it)) return false;
  var klass = classof$5(it);
  return hasOwn$4(TypedArrayConstructorsList, klass)
    || hasOwn$4(BigIntArrayConstructorsList, klass);
};

var aTypedArray$3 = function (it) {
  if (isTypedArray$1(it)) return it;
  throw new TypeError$2('Target is not a typed array');
};

var aTypedArrayConstructor$1 = function (C) {
  if (isCallable$5(C) && (!setPrototypeOf$3 || isPrototypeOf$3(TypedArray$1, C))) return C;
  throw new TypeError$2(tryToString$1(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$3 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$4) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$g[ARRAY];
    if (TypedArrayConstructor && hasOwn$4(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype$1[KEY] || forced) {
    defineBuiltIn$2(TypedArrayPrototype$1, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$4) return;
  if (setPrototypeOf$3) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$g[ARRAY];
      if (TypedArrayConstructor && hasOwn$4(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray$1[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$2(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$g[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$2(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$g[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$g[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$5(TypedArray$1) || TypedArray$1 === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray$1 = function TypedArray() {
    throw new TypeError$2('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$g[NAME]) setPrototypeOf$3(global$g[NAME], TypedArray$1);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype$1) {
  TypedArrayPrototype$1 = TypedArray$1.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
    if (global$g[NAME]) setPrototypeOf$3(global$g[NAME].prototype, TypedArrayPrototype$1);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
  setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
}

if (DESCRIPTORS$4 && !hasOwn$4(TypedArrayPrototype$1, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$3(TypedArrayPrototype$1, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject$6(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global$g[NAME]) {
    createNonEnumerableProperty$2(global$g[NAME], TYPED_ARRAY_TAG$1, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
  aTypedArray: aTypedArray$3,
  aTypedArrayConstructor: aTypedArrayConstructor$1,
  exportTypedArrayMethod: exportTypedArrayMethod$3,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray$1,
  TypedArray: TypedArray$1,
  TypedArrayPrototype: TypedArrayPrototype$1
};

/* eslint-disable no-new -- required for testing */
var global$f = global$x;
var fails$6 = fails$v;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer$2 = global$f.ArrayBuffer;
var Int8Array$2 = global$f.Int8Array;

var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$6(function () {
  Int8Array$2(1);
}) || !fails$6(function () {
  new Int8Array$2(-1);
}) || !checkCorrectnessOfIteration$1(function (iterable) {
  new Int8Array$2();
  new Int8Array$2(null);
  new Int8Array$2(1.5);
  new Int8Array$2(iterable);
}, true) || fails$6(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
});

var toIntegerOrInfinity$3 = toIntegerOrInfinity$8;
var toLength$3 = toLength$7;

var $RangeError$3 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$2 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$3(it);
  var length = toLength$3(number);
  if (number !== length) throw new $RangeError$3('Wrong length or index');
  return length;
};

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};

var sign = mathSign;

var abs$1 = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

var roundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

var mathFloatRound = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs$1(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};

var floatRound = mathFloatRound;

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
var mathFround = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array$1 = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor$1 = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array$1(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor$1(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var ieee754 = {
  pack: pack,
  unpack: unpack
};

var toObject$3 = toObject$a;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$7 = lengthOfArrayLike$b;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$3(this);
  var length = lengthOfArrayLike$7(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var global$e = global$x;
var uncurryThis$6 = functionUncurryThis;
var DESCRIPTORS$3 = descriptors$1;
var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var FunctionName = functionName;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$7;
var defineBuiltIns = defineBuiltIns$2;
var fails$5 = fails$v;
var anInstance$2 = anInstance$5;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$8;
var toLength$2 = toLength$7;
var toIndex$1 = toIndex$2;
var fround = mathFround;
var IEEE754 = ieee754;
var getPrototypeOf = objectGetPrototypeOf$1;
var setPrototypeOf$2 = objectSetPrototypeOf;
var arrayFill = arrayFill$1;
var arraySlice$1 = arraySlice$4;
var inheritIfRequired$1 = inheritIfRequired$3;
var copyConstructorProperties$1 = copyConstructorProperties$3;
var setToStringTag$1 = setToStringTag$6;
var InternalStateModule$2 = internalState;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH$1 = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule$2.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule$2.getterFor(DATA_VIEW);
var setInternalState$2 = InternalStateModule$2.set;
var NativeArrayBuffer = global$e[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global$e[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array$1 = global$e.Array;
var RangeError$3 = global$e.RangeError;
var fill = uncurryThis$6(arrayFill);
var reverse = uncurryThis$6([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter$1 = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor$2(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$1(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice$1(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex$1(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance$2(this, ArrayBufferPrototype$1);
    var byteLength = toIndex$1(length);
    setInternalState$2(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array$1(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS$3) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance$2(this, DataViewPrototype);
    anInstance$2(buffer, ArrayBufferPrototype$1);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity$2(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength$2(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
    setInternalState$2(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS$3) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS$3) {
    addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter$1($DataView, 'buffer', getInternalDataViewState);
    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set$1(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set$1(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails$5(function () {
    NativeArrayBuffer(1);
  }) || !fails$5(function () {
    new NativeArrayBuffer(-1);
  }) || fails$5(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$2(this, ArrayBufferPrototype$1);
      return inheritIfRequired$1(new NativeArrayBuffer(toIndex$1(length)), this, $ArrayBuffer);
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;

    ArrayBufferPrototype$1.constructor = $ArrayBuffer;

    copyConstructorProperties$1($ArrayBuffer, NativeArrayBuffer);
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty$1(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf$2 && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf$2(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis$6(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag$1($ArrayBuffer, ARRAY_BUFFER);
setToStringTag$1($DataView, DATA_VIEW);

var arrayBuffer = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

var isObject$5 = isObject$i;

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
  return !isObject$5(it) && isFinite(it) && floor(it) === it;
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$8;

var $RangeError$2 = RangeError;

var toPositiveInteger$1 = function (it) {
  var result = toIntegerOrInfinity$1(it);
  if (result < 0) throw new $RangeError$2("The argument can't be less than 0");
  return result;
};

var toPositiveInteger = toPositiveInteger$1;

var $RangeError$1 = RangeError;

var toOffset$2 = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError$1('Wrong offset');
  return offset;
};

var round = Math.round;

var toUint8Clamped$1 = function (it) {
  var value = round(it);
  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
};

var classof$4 = classof$b;

var isBigIntArray$1 = function (it) {
  var klass = classof$4(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$3 = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$2 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError$3("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var bind$6 = functionBindContext;
var call$8 = functionCall;
var aConstructor = aConstructor$2;
var toObject$2 = toObject$a;
var lengthOfArrayLike$6 = lengthOfArrayLike$b;
var getIterator$1 = getIterator$4;
var getIteratorMethod$1 = getIteratorMethod$5;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
var isBigIntArray = isBigIntArray$1;
var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
var toBigInt$1 = toBigInt$2;

var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject$2(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod$1(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod$1(iteratorMethod)) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call$8(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind$6(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike$6(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt$1(value) : +value;
  }
  return result;
};

var classof$3 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$2 = Array.isArray || function isArray(argument) {
  return classof$3(argument) === 'Array';
};

var isArray$1 = isArray$2;
var isConstructor = isConstructor$3;
var isObject$4 = isObject$i;
var wellKnownSymbol$2 = wellKnownSymbol$n;

var SPECIES$1 = wellKnownSymbol$2('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray$1(C.prototype))) C = undefined;
    else if (isObject$4(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$5 = functionBindContext;
var uncurryThis$5 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$1 = toObject$a;
var lengthOfArrayLike$5 = lengthOfArrayLike$b;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;

var push$1 = uncurryThis$5([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$5(self);
    var boundFunction = bind$5(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$1(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$1(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};

var lengthOfArrayLike$4 = lengthOfArrayLike$b;

var arrayFromConstructorAndList$1 = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike$4(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var $$e = _export;
var global$d = global$x;
var call$7 = functionCall;
var DESCRIPTORS$2 = descriptors$1;
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
var ArrayBufferViewCore$3 = arrayBufferViewCore;
var ArrayBufferModule = arrayBuffer;
var anInstance$1 = anInstance$5;
var createPropertyDescriptor = createPropertyDescriptor$6;
var createNonEnumerableProperty = createNonEnumerableProperty$8;
var isIntegralNumber = isIntegralNumber$1;
var toLength$1 = toLength$7;
var toIndex = toIndex$2;
var toOffset$1 = toOffset$2;
var toUint8Clamped = toUint8Clamped$1;
var toPropertyKey = toPropertyKey$3;
var hasOwn$3 = hasOwnProperty_1;
var classof$2 = classof$b;
var isObject$3 = isObject$i;
var isSymbol = isSymbol$3;
var create = objectCreate;
var isPrototypeOf$2 = objectIsPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var typedArrayFrom = typedArrayFrom$1;
var forEach = arrayIteration.forEach;
var setSpecies$1 = setSpecies$3;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$7;
var definePropertyModule = objectDefineProperty;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var arrayFromConstructorAndList = arrayFromConstructorAndList$1;
var InternalStateModule$1 = internalState;
var inheritIfRequired = inheritIfRequired$3;

var getInternalState = InternalStateModule$1.get;
var setInternalState$1 = InternalStateModule$1.set;
var enforceInternalState = InternalStateModule$1.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError$2 = global$d.RangeError;
var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataView$1 = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$3.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore$3.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore$3.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore$3.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore$3.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var addGetter = function (it, key) {
  defineBuiltInAccessor$1(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer$1 = function (it) {
  var klass;
  return isPrototypeOf$2(ArrayBufferPrototype, it) || (klass = classof$2(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject$3(descriptor)
    && hasOwn$3(descriptor, 'value')
    && !hasOwn$3(descriptor, 'get')
    && !hasOwn$3(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn$3(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn$3(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS$2) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $$e({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global$d[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance$1(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject$3(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer$1(byteLength);
        } else if (isArrayBuffer$1(data)) {
          buffer = data;
          byteOffset = toOffset$1(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError$2(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError$2(WRONG_LENGTH);
          } else {
            byteLength = toLength$1($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError$2(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return arrayFromConstructorAndList(TypedArrayConstructor, data);
        } else {
          return call$7(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState$1(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView$1(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance$1(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject$3(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer$1(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return arrayFromConstructorAndList(TypedArrayConstructor, data);
          return call$7(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $$e({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies$1(CONSTRUCTOR_NAME);
  };
} else typedArrayConstructor.exports = function () { /* empty */ };

var typedArrayConstructorExports = typedArrayConstructor.exports;

var createTypedArrayConstructor = typedArrayConstructorExports;

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

var ArrayBufferViewCore$2 = arrayBufferViewCore;
var $fill = arrayFill$1;
var toBigInt = toBigInt$2;
var classof$1 = classof$b;
var call$6 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fails$4 = fails$v;

var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;
var slice = uncurryThis$4(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails$4(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod$2('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray$2(this);
  var actualValue = slice(classof$1(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call$6($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);

var global$c = global$x;
var call$5 = functionCall;
var ArrayBufferViewCore$1 = arrayBufferViewCore;
var lengthOfArrayLike$3 = lengthOfArrayLike$b;
var toOffset = toOffset$2;
var toIndexedObject$1 = toObject$a;
var fails$3 = fails$v;

var RangeError$1 = global$c.RangeError;
var Int8Array$1 = global$c.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$3(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call$5($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$1.NATIVE_ARRAY_BUFFER_VIEWS && fails$3(function () {
  var array = new Int8Array$1(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod$1('set', function set(arrayLike /* , offset */) {
  aTypedArray$1(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject$1(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$5($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike$3(src);
  var index = 0;
  if (len + offset > length) throw new RangeError$1('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

var global$b = global$x;
var uncurryThis$3 = functionUncurryThisClause;
var fails$2 = fails$v;
var aCallable$6 = aCallable$c;
var internalSort = arraySort$1;
var ArrayBufferViewCore = arrayBufferViewCore;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global$b.Uint16Array;
var nativeSort = Uint16Array && uncurryThis$3(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$2(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails$2(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails$2(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable$6(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

const {
  toString: objectToString$1
} = Object.prototype;
const isArrayBuffer = value => objectToString$1.call(value) === '[object ArrayBuffer]';
const isUint8Array = value => objectToString$1.call(value) === '[object Uint8Array]';
const bufferToUint8Array = buffer => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
const textEncoder$1 = new TextEncoder();
const stringToUint8Array = string => textEncoder$1.encode(string);
const textDecoder = new TextDecoder();
const uint8ArrayToString = uint8Array => textDecoder.decode(uint8Array);
const joinToString = (uint8ArraysOrStrings, encoding) => {
  const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
  return strings.join('');
};
const uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
  if (encoding === 'utf8' && uint8ArraysOrStrings.every(uint8ArrayOrString => typeof uint8ArrayOrString === 'string')) {
    return uint8ArraysOrStrings;
  }
  const decoder = new node_string_decoder.StringDecoder(encoding);
  const strings = uint8ArraysOrStrings.map(uint8ArrayOrString => typeof uint8ArrayOrString === 'string' ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString).map(uint8Array => decoder.write(uint8Array));
  const finalString = decoder.end();
  return finalString === '' ? strings : [...strings, finalString];
};
const joinToUint8Array = uint8ArraysOrStrings => {
  if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
    return uint8ArraysOrStrings[0];
  }
  return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
};
const stringsToUint8Arrays = uint8ArraysOrStrings => uint8ArraysOrStrings.map(uint8ArrayOrString => typeof uint8ArrayOrString === 'string' ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString);
const concatUint8Arrays = uint8Arrays => {
  const result = new Uint8Array(getJoinLength(uint8Arrays));
  let index = 0;
  for (const uint8Array of uint8Arrays) {
    result.set(uint8Array, index);
    index += uint8Array.length;
  }
  return result;
};
const getJoinLength = uint8Arrays => {
  let joinLength = 0;
  for (const uint8Array of uint8Arrays) {
    joinLength += uint8Array.length;
  }
  return joinLength;
};

const isTemplateString = templates => Array.isArray(templates) && Array.isArray(templates.raw);
const parseTemplates = (templates, expressions) => {
  let tokens = [];
  for (const [index, template] of templates.entries()) {
    tokens = parseTemplate({
      templates,
      expressions,
      tokens,
      index,
      template
    });
  }
  if (tokens.length === 0) {
    throw new TypeError('Template script must not be empty');
  }
  const [file, ...commandArguments] = tokens;
  return [file, commandArguments, {}];
};
const parseTemplate = ({
  templates,
  expressions,
  tokens,
  index,
  template
}) => {
  if (template === undefined) {
    throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
  }
  const {
    nextTokens,
    leadingWhitespaces,
    trailingWhitespaces
  } = splitByWhitespaces(template, templates.raw[index]);
  const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);
  if (index === expressions.length) {
    return newTokens;
  }
  const expression = expressions[index];
  const expressionTokens = Array.isArray(expression) ? expression.map(expression => parseExpression(expression)) : [parseExpression(expression)];
  return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
};
const splitByWhitespaces = (template, rawTemplate) => {
  if (rawTemplate.length === 0) {
    return {
      nextTokens: [],
      leadingWhitespaces: false,
      trailingWhitespaces: false
    };
  }
  const nextTokens = [];
  let templateStart = 0;
  const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);
  for (let templateIndex = 0, rawIndex = 0; templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
    const rawCharacter = rawTemplate[rawIndex];
    if (DELIMITERS.has(rawCharacter)) {
      if (templateStart !== templateIndex) {
        nextTokens.push(template.slice(templateStart, templateIndex));
      }
      templateStart = templateIndex + 1;
    } else if (rawCharacter === '\\') {
      const nextRawCharacter = rawTemplate[rawIndex + 1];
      if (nextRawCharacter === 'u' && rawTemplate[rawIndex + 2] === '{') {
        rawIndex = rawTemplate.indexOf('}', rawIndex + 3);
      } else {
        var _ESCAPE_LENGTH$nextRa;
        rawIndex += (_ESCAPE_LENGTH$nextRa = ESCAPE_LENGTH[nextRawCharacter]) != null ? _ESCAPE_LENGTH$nextRa : 1;
      }
    }
  }
  const trailingWhitespaces = templateStart === template.length;
  if (!trailingWhitespaces) {
    nextTokens.push(template.slice(templateStart));
  }
  return {
    nextTokens,
    leadingWhitespaces,
    trailingWhitespaces
  };
};
const DELIMITERS = new Set([' ', '\t', '\r', '\n']);
const ESCAPE_LENGTH = {
  x: 3,
  u: 5
};
const concatTokens = (tokens, nextTokens, isSeparated) => isSeparated || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [...tokens.slice(0, -1), `${tokens.at(-1)}${nextTokens[0]}`, ...nextTokens.slice(1)];
const parseExpression = expression => {
  const typeOfExpression = typeof expression;
  if (typeOfExpression === 'string') {
    return expression;
  }
  if (typeOfExpression === 'number') {
    return String(expression);
  }
  if (isPlainObject(expression) && ('stdout' in expression || 'isMaxBuffer' in expression)) {
    return getSubprocessResult(expression);
  }
  if (expression instanceof node_child_process.ChildProcess || Object.prototype.toString.call(expression) === '[object Promise]') {
    throw new TypeError('Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.');
  }
  throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
};
const getSubprocessResult = ({
  stdout
}) => {
  if (typeof stdout === 'string') {
    return stdout;
  }
  if (isUint8Array(stdout)) {
    return uint8ArrayToString(stdout);
  }
  if (stdout === undefined) {
    throw new TypeError('Missing result.stdout in template expression. This is probably due to the previous subprocess\' "stdout" option.');
  }
  throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
};

function _AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function (t) {
        if (u) {
          var i = "return" === r ? "return" : "next";
          if (!o.k || t.done) return resume(i, t);
          t = e[i](t).value;
        }
        settle(n.done ? "return" : "normal", t);
      }, function (e) {
        resume("throw", e);
      });
    } catch (e) {
      settle("throw", e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case "return":
        r.resolve({
          value: n,
          done: !0
        });
        break;
      case "throw":
        r.reject(n);
        break;
      default:
        r.resolve({
          value: n,
          done: !1
        });
    }
    (r = r.next) ? resume(r.key, r.arg) : t = null;
  }
  this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: n,
        resolve: o,
        reject: u,
        next: null
      };
      t ? t = t.next = i : (r = t = i, resume(e, n));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, _AsyncGenerator.prototype.next = function (e) {
  return this._invoke("next", e);
}, _AsyncGenerator.prototype.throw = function (e) {
  return this._invoke("throw", e);
}, _AsyncGenerator.prototype.return = function (e) {
  return this._invoke("return", e);
};
function _OverloadYield(t, e) {
  this.v = t, this.k = e;
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _asyncGeneratorDelegate(t) {
  var e = {},
    n = !1;
  function pump(e, r) {
    return n = !0, r = new Promise(function (n) {
      n(t[e](r));
    }), {
      done: !1,
      value: new _OverloadYield(r, 1)
    };
  }
  return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
    return this;
  }, e.next = function (t) {
    return n ? (n = !1, t) : pump("next", t);
  }, "function" == typeof t.throw && (e.throw = function (t) {
    if (n) throw n = !1, t;
    return pump("throw", t);
  }), "function" == typeof t.return && (e.return = function (t) {
    return n ? (n = !1, t) : pump("return", t);
  }), e;
}
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function (r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function () {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    return: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    throw: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _wrapAsyncGenerator(fn) {
  return function () {
    return new _AsyncGenerator(fn.apply(this, arguments));
  };
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

const isStandardStream = stream => STANDARD_STREAMS.includes(stream);
const STANDARD_STREAMS = [process$6.stdin, process$6.stdout, process$6.stderr];
const STANDARD_STREAMS_ALIASES = ['stdin', 'stdout', 'stderr'];
const getStreamName = fdNumber => {
  var _STANDARD_STREAMS_ALI;
  return (_STANDARD_STREAMS_ALI = STANDARD_STREAMS_ALIASES[fdNumber]) != null ? _STANDARD_STREAMS_ALI : `stdio[${fdNumber}]`;
};

const normalizeFdSpecificOptions = options => {
  const optionsCopy = Object.assign({}, options);
  for (const optionName of FD_SPECIFIC_OPTIONS) {
    optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
  }
  return optionsCopy;
};
const normalizeFdSpecificOption = (options, optionName) => {
  const optionBaseArray = Array.from({
    length: getStdioLength(options) + 1
  });
  const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
  return addDefaultValue$1(optionArray, optionName);
};
const getStdioLength = ({
  stdio
}) => Array.isArray(stdio) ? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length) : STANDARD_STREAMS_ALIASES.length;
const normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue) ? normalizeOptionObject(optionValue, optionArray, optionName) : optionArray.fill(optionValue);
const normalizeOptionObject = (optionValue, optionArray, optionName) => {
  for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
    for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
      optionArray[fdNumber] = optionValue[fdName];
    }
  }
  return optionArray;
};
const compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1;
const getFdNameOrder = fdName => {
  if (fdName === 'stdout' || fdName === 'stderr') {
    return 0;
  }
  return fdName === 'all' ? 2 : 1;
};
const parseFdName = (fdName, optionName, optionArray) => {
  if (fdName === 'ipc') {
    return [optionArray.length - 1];
  }
  const fdNumber = parseFd(fdName);
  if (fdNumber === undefined || fdNumber === 0) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
  }
  if (fdNumber >= optionArray.length) {
    throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  return fdNumber === 'all' ? [1, 2] : [fdNumber];
};
const parseFd = fdName => {
  if (fdName === 'all') {
    return fdName;
  }
  if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
    return STANDARD_STREAMS_ALIASES.indexOf(fdName);
  }
  const regexpResult = FD_REGEXP.exec(fdName);
  if (regexpResult !== null) {
    return Number(regexpResult[1]);
  }
};
const FD_REGEXP = /^fd(\d+)$/;
const addDefaultValue$1 = (optionArray, optionName) => optionArray.map(optionValue => optionValue === undefined ? DEFAULT_OPTIONS[optionName] : optionValue);
const verboseDefault = node_util.debuglog('execa').enabled ? 'full' : 'none';
const DEFAULT_OPTIONS = {
  lines: false,
  buffer: true,
  maxBuffer: 1000 * 1000 * 100,
  verbose: verboseDefault,
  stripFinalNewline: true
};
const FD_SPECIFIC_OPTIONS = ['lines', 'buffer', 'maxBuffer', 'verbose', 'stripFinalNewline'];
const getFdSpecificValue = (optionArray, fdNumber) => fdNumber === 'ipc' ? optionArray.at(-1) : optionArray[fdNumber];

const isVerbose = ({
  verbose
}, fdNumber) => getFdVerbose(verbose, fdNumber) !== 'none';
const isFullVerbose = ({
  verbose
}, fdNumber) => !['none', 'short'].includes(getFdVerbose(verbose, fdNumber));
const getVerboseFunction = ({
  verbose
}, fdNumber) => {
  const fdVerbose = getFdVerbose(verbose, fdNumber);
  return isVerboseFunction(fdVerbose) ? fdVerbose : undefined;
};
const getFdVerbose = (verbose, fdNumber) => fdNumber === undefined ? getFdGenericVerbose(verbose) : getFdSpecificValue(verbose, fdNumber);
const getFdGenericVerbose = verbose => {
  var _verbose$find;
  return (_verbose$find = verbose.find(fdVerbose => isVerboseFunction(fdVerbose))) != null ? _verbose$find : VERBOSE_VALUES.findLast(fdVerbose => verbose.includes(fdVerbose));
};
const isVerboseFunction = fdVerbose => typeof fdVerbose === 'function';
const VERBOSE_VALUES = ['none', 'short', 'full'];

var toIntegerOrInfinity = toIntegerOrInfinity$8;
var toString$2 = toString$c;
var requireObjectCoercible$1 = requireObjectCoercible$a;

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
var stringRepeat = function repeat(count) {
  var str = toString$2(requireObjectCoercible$1(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis$2 = functionUncurryThis;
var toLength = toLength$7;
var toString$1 = toString$c;
var $repeat = stringRepeat;
var requireObjectCoercible = requireObjectCoercible$a;

var repeat = uncurryThis$2($repeat);
var stringSlice$1 = uncurryThis$2(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod$1 = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString$1(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString$1(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice$1(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

var stringPad = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod$1(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod$1(true)
};

// https://github.com/zloirock/core-js/issues/280
var userAgent$3 = engineUserAgent;

var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent$3);

var $$d = _export;
var $padStart = stringPad.start;
var WEBKIT_BUG = stringPadWebkitBug;

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$$d({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});

const joinCommand = (filePath, rawArguments) => {
  const fileAndArguments = [filePath, ...rawArguments];
  const command = fileAndArguments.join(' ');
  const escapedCommand = fileAndArguments.map(fileAndArgument => quoteString(escapeControlCharacters(fileAndArgument))).join(' ');
  return {
    command,
    escapedCommand
  };
};
const escapeLines = lines => node_util.stripVTControlCharacters(lines).split('\n').map(line => escapeControlCharacters(line)).join('\n');
const escapeControlCharacters = line => line.replaceAll(SPECIAL_CHAR_REGEXP, character => escapeControlCharacter(character));
const escapeControlCharacter = character => {
  const commonEscape = COMMON_ESCAPES[character];
  if (commonEscape !== undefined) {
    return commonEscape;
  }
  const codepoint = character.codePointAt(0);
  const codepointHex = codepoint.toString(16);
  return codepoint <= ASTRAL_START ? `\\u${codepointHex.padStart(4, '0')}` : `\\U${codepointHex}`;
};
const SPECIAL_CHAR_REGEXP = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]|[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F-\u0897\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF4-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EE\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{100FF}\u{10103}-\u{10106}\u{10134}-\u{10136}\u{1018F}\u{1019D}-\u{1019F}\u{101A1}-\u{101CF}\u{101FE}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102DF}\u{102FC}-\u{102FF}\u{10324}-\u{1032C}\u{1034B}-\u{1034F}\u{1037B}-\u{1037F}\u{1039E}\u{103C4}-\u{103C7}\u{103D6}-\u{103FF}\u{1049E}\u{1049F}\u{104AA}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{1056E}\u{1057B}\u{1058B}\u{10593}\u{10596}\u{105A2}\u{105B2}\u{105BA}\u{105BD}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{1077F}\u{10786}\u{107B1}\u{107BB}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}\u{1089F}-\u{108A6}\u{108B0}-\u{108DF}\u{108F3}\u{108F6}-\u{108FA}\u{1091C}-\u{1091E}\u{1093A}-\u{1093E}\u{10940}-\u{1097F}\u{109B8}-\u{109BB}\u{109D0}\u{109D1}\u{10A04}\u{10A07}-\u{10A0B}\u{10A14}\u{10A18}\u{10A36}\u{10A37}\u{10A3B}-\u{10A3E}\u{10A49}-\u{10A4F}\u{10A59}-\u{10A5F}\u{10AA0}-\u{10ABF}\u{10AE7}-\u{10AEA}\u{10AF7}-\u{10AFF}\u{10B36}-\u{10B38}\u{10B56}\u{10B57}\u{10B73}-\u{10B77}\u{10B92}-\u{10B98}\u{10B9D}-\u{10BA8}\u{10BB0}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CF9}\u{10D28}-\u{10D2F}\u{10D3A}-\u{10E5F}\u{10E7F}\u{10EAA}\u{10EAE}\u{10EAF}\u{10EB2}-\u{10EFC}\u{10F28}-\u{10F2F}\u{10F5A}-\u{10F6F}\u{10F8A}-\u{10FAF}\u{10FCC}-\u{10FDF}\u{10FF7}-\u{10FFF}\u{1104E}-\u{11051}\u{11076}-\u{1107E}\u{110BD}\u{110C3}-\u{110CF}\u{110E9}-\u{110EF}\u{110FA}-\u{110FF}\u{11135}\u{11148}-\u{1114F}\u{11177}-\u{1117F}\u{111E0}\u{111F5}-\u{111FF}\u{11212}\u{11242}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112AA}-\u{112AF}\u{112EB}-\u{112EF}\u{112FA}-\u{112FF}\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}\u{11345}\u{11346}\u{11349}\u{1134A}\u{1134E}\u{1134F}\u{11351}-\u{11356}\u{11358}-\u{1135C}\u{11364}\u{11365}\u{1136D}-\u{1136F}\u{11375}-\u{113FF}\u{1145C}\u{11462}-\u{1147F}\u{114C8}-\u{114CF}\u{114DA}-\u{1157F}\u{115B6}\u{115B7}\u{115DE}-\u{115FF}\u{11645}-\u{1164F}\u{1165A}-\u{1165F}\u{1166D}-\u{1167F}\u{116BA}-\u{116BF}\u{116CA}-\u{116FF}\u{1171B}\u{1171C}\u{1172C}-\u{1172F}\u{11747}-\u{117FF}\u{1183C}-\u{1189F}\u{118F3}-\u{118FE}\u{11907}\u{11908}\u{1190A}\u{1190B}\u{11914}\u{11917}\u{11936}\u{11939}\u{1193A}\u{11947}-\u{1194F}\u{1195A}-\u{1199F}\u{119A8}\u{119A9}\u{119D8}\u{119D9}\u{119E5}-\u{119FF}\u{11A48}-\u{11A4F}\u{11AA3}-\u{11AAF}\u{11AF9}-\u{11AFF}\u{11B0A}-\u{11BFF}\u{11C09}\u{11C37}\u{11C46}-\u{11C4F}\u{11C6D}-\u{11C6F}\u{11C90}\u{11C91}\u{11CA8}\u{11CB7}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D37}-\u{11D39}\u{11D3B}\u{11D3E}\u{11D48}-\u{11D4F}\u{11D5A}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8F}\u{11D92}\u{11D99}-\u{11D9F}\u{11DAA}-\u{11EDF}\u{11EF9}-\u{11EFF}\u{11F11}\u{11F3B}-\u{11F3D}\u{11F5A}-\u{11FAF}\u{11FB1}-\u{11FBF}\u{11FF2}-\u{11FFE}\u{1239A}-\u{123FF}\u{1246F}\u{12475}-\u{1247F}\u{12544}-\u{12F8F}\u{12FF3}-\u{12FFF}\u{13430}-\u{1343F}\u{13456}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}\u{16A6A}-\u{16A6D}\u{16ABF}\u{16ACA}-\u{16ACF}\u{16AEE}\u{16AEF}\u{16AF6}-\u{16AFF}\u{16B46}-\u{16B4F}\u{16B5A}\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E9B}-\u{16EFF}\u{16F4B}-\u{16F4E}\u{16F88}-\u{16F8E}\u{16FA0}-\u{16FDF}\u{16FE5}-\u{16FEF}\u{16FF2}-\u{16FFF}\u{187F8}-\u{187FF}\u{18CD6}-\u{18CFF}\u{18D09}-\u{1AFEF}\u{1AFF4}\u{1AFFC}\u{1AFFF}\u{1B123}-\u{1B131}\u{1B133}-\u{1B14F}\u{1B153}\u{1B154}\u{1B156}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}\u{1BC9B}\u{1BCA0}-\u{1CEFF}\u{1CF2E}\u{1CF2F}\u{1CF47}-\u{1CF4F}\u{1CFC4}-\u{1CFFF}\u{1D0F6}-\u{1D0FF}\u{1D127}\u{1D128}\u{1D173}-\u{1D17A}\u{1D1EB}-\u{1D1FF}\u{1D246}-\u{1D2BF}\u{1D2D4}-\u{1D2DF}\u{1D2F4}-\u{1D2FF}\u{1D357}-\u{1D35F}\u{1D379}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D7CC}\u{1D7CD}\u{1DA8C}-\u{1DA9A}\u{1DAA0}\u{1DAB0}-\u{1DEFF}\u{1DF1F}-\u{1DF24}\u{1DF2B}-\u{1DFFF}\u{1E007}\u{1E019}\u{1E01A}\u{1E022}\u{1E025}\u{1E02B}-\u{1E02F}\u{1E06E}-\u{1E08E}\u{1E090}-\u{1E0FF}\u{1E12D}-\u{1E12F}\u{1E13E}\u{1E13F}\u{1E14A}-\u{1E14D}\u{1E150}-\u{1E28F}\u{1E2AF}-\u{1E2BF}\u{1E2FA}-\u{1E2FE}\u{1E300}-\u{1E4CF}\u{1E4FA}-\u{1E7DF}\u{1E7E7}\u{1E7EC}\u{1E7EF}\u{1E7FF}\u{1E8C5}\u{1E8C6}\u{1E8D7}-\u{1E8FF}\u{1E94C}-\u{1E94F}\u{1E95A}-\u{1E95D}\u{1E960}-\u{1EC70}\u{1ECB5}-\u{1ED00}\u{1ED3E}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1EEEF}\u{1EEF2}-\u{1EFFF}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F1AE}-\u{1F1E5}\u{1F203}-\u{1F20F}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F24F}\u{1F252}-\u{1F25F}\u{1F266}-\u{1F2FF}\u{1F6D8}-\u{1F6DB}\u{1F6ED}-\u{1F6EF}\u{1F6FD}-\u{1F6FF}\u{1F777}-\u{1F77A}\u{1F7DA}-\u{1F7DF}\u{1F7EC}-\u{1F7EF}\u{1F7F1}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8B2}-\u{1F8FF}\u{1FA54}-\u{1FA5F}\u{1FA6E}\u{1FA6F}\u{1FA7D}-\u{1FA7F}\u{1FA89}-\u{1FA8F}\u{1FABE}\u{1FAC6}-\u{1FACD}\u{1FADC}-\u{1FADF}\u{1FAE9}-\u{1FAEF}\u{1FAF9}-\u{1FAFF}\u{1FB93}\u{1FBCB}-\u{1FBEF}\u{1FBFA}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B73A}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2EBEF}\u{2EE5E}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{3134F}\u{323B0}-\u{E00FF}\u{E01F0}-\u{10FFFF}]/gu;
const COMMON_ESCAPES = {
  ' ': ' ',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t'
};
const ASTRAL_START = 65535;
const quoteString = escapedArgument => {
  if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
    return escapedArgument;
  }
  return process$6.platform === 'win32' ? `"${escapedArgument.replaceAll('"', '""')}"` : `'${escapedArgument.replaceAll('\'', '\'\\\'\'')}'`;
};
const NO_ESCAPE_REGEXP = /^[\w./-]+$/;

var DESCRIPTORS$1 = descriptors$1;
var fails$1 = fails$v;
var uncurryThis$1 = functionUncurryThis;
var objectGetPrototypeOf = objectGetPrototypeOf$1;
var objectKeys = objectKeys$3;
var toIndexedObject = toIndexedObject$7;
var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

var propertyIsEnumerable = uncurryThis$1($propertyIsEnumerable);
var push = uncurryThis$1([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS$1 && fails$1(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS$1 || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

var $$c = _export;
var $entries = objectToArray.entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$$c({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});

function isUnicodeSupported() {
  if (process$6.platform !== 'win32') {
    return process$6.env.TERM !== 'linux';
  }
  return Boolean(process$6.env.WT_SESSION) || Boolean(process$6.env.TERMINUS_SUBLIME) || process$6.env.ConEmuTask === '{cmd::Cmder}' || process$6.env.TERM_PROGRAM === 'Terminus-Sublime' || process$6.env.TERM_PROGRAM === 'vscode' || process$6.env.TERM === 'xterm-256color' || process$6.env.TERM === 'alacritty' || process$6.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';
}

const common = {
  circleQuestionMark: '(?)',
  questionMarkPrefix: '(?)',
  square: '█',
  squareDarkShade: '▓',
  squareMediumShade: '▒',
  squareLightShade: '░',
  squareTop: '▀',
  squareBottom: '▄',
  squareLeft: '▌',
  squareRight: '▐',
  squareCenter: '■',
  bullet: '●',
  dot: '․',
  ellipsis: '…',
  pointerSmall: '›',
  triangleUp: '▲',
  triangleUpSmall: '▴',
  triangleDown: '▼',
  triangleDownSmall: '▾',
  triangleLeftSmall: '◂',
  triangleRightSmall: '▸',
  home: '⌂',
  heart: '♥',
  musicNote: '♪',
  musicNoteBeamed: '♫',
  arrowUp: '↑',
  arrowDown: '↓',
  arrowLeft: '←',
  arrowRight: '→',
  arrowLeftRight: '↔',
  arrowUpDown: '↕',
  almostEqual: '≈',
  notEqual: '≠',
  lessOrEqual: '≤',
  greaterOrEqual: '≥',
  identical: '≡',
  infinity: '∞',
  subscriptZero: '₀',
  subscriptOne: '₁',
  subscriptTwo: '₂',
  subscriptThree: '₃',
  subscriptFour: '₄',
  subscriptFive: '₅',
  subscriptSix: '₆',
  subscriptSeven: '₇',
  subscriptEight: '₈',
  subscriptNine: '₉',
  oneHalf: '½',
  oneThird: '⅓',
  oneQuarter: '¼',
  oneFifth: '⅕',
  oneSixth: '⅙',
  oneEighth: '⅛',
  twoThirds: '⅔',
  twoFifths: '⅖',
  threeQuarters: '¾',
  threeFifths: '⅗',
  threeEighths: '⅜',
  fourFifths: '⅘',
  fiveSixths: '⅚',
  fiveEighths: '⅝',
  sevenEighths: '⅞',
  line: '─',
  lineBold: '━',
  lineDouble: '═',
  lineDashed0: '┄',
  lineDashed1: '┅',
  lineDashed2: '┈',
  lineDashed3: '┉',
  lineDashed4: '╌',
  lineDashed5: '╍',
  lineDashed6: '╴',
  lineDashed7: '╶',
  lineDashed8: '╸',
  lineDashed9: '╺',
  lineDashed10: '╼',
  lineDashed11: '╾',
  lineDashed12: '−',
  lineDashed13: '–',
  lineDashed14: '‐',
  lineDashed15: '⁃',
  lineVertical: '│',
  lineVerticalBold: '┃',
  lineVerticalDouble: '║',
  lineVerticalDashed0: '┆',
  lineVerticalDashed1: '┇',
  lineVerticalDashed2: '┊',
  lineVerticalDashed3: '┋',
  lineVerticalDashed4: '╎',
  lineVerticalDashed5: '╏',
  lineVerticalDashed6: '╵',
  lineVerticalDashed7: '╷',
  lineVerticalDashed8: '╹',
  lineVerticalDashed9: '╻',
  lineVerticalDashed10: '╽',
  lineVerticalDashed11: '╿',
  lineDownLeft: '┐',
  lineDownLeftArc: '╮',
  lineDownBoldLeftBold: '┓',
  lineDownBoldLeft: '┒',
  lineDownLeftBold: '┑',
  lineDownDoubleLeftDouble: '╗',
  lineDownDoubleLeft: '╖',
  lineDownLeftDouble: '╕',
  lineDownRight: '┌',
  lineDownRightArc: '╭',
  lineDownBoldRightBold: '┏',
  lineDownBoldRight: '┎',
  lineDownRightBold: '┍',
  lineDownDoubleRightDouble: '╔',
  lineDownDoubleRight: '╓',
  lineDownRightDouble: '╒',
  lineUpLeft: '┘',
  lineUpLeftArc: '╯',
  lineUpBoldLeftBold: '┛',
  lineUpBoldLeft: '┚',
  lineUpLeftBold: '┙',
  lineUpDoubleLeftDouble: '╝',
  lineUpDoubleLeft: '╜',
  lineUpLeftDouble: '╛',
  lineUpRight: '└',
  lineUpRightArc: '╰',
  lineUpBoldRightBold: '┗',
  lineUpBoldRight: '┖',
  lineUpRightBold: '┕',
  lineUpDoubleRightDouble: '╚',
  lineUpDoubleRight: '╙',
  lineUpRightDouble: '╘',
  lineUpDownLeft: '┤',
  lineUpBoldDownBoldLeftBold: '┫',
  lineUpBoldDownBoldLeft: '┨',
  lineUpDownLeftBold: '┥',
  lineUpBoldDownLeftBold: '┩',
  lineUpDownBoldLeftBold: '┪',
  lineUpDownBoldLeft: '┧',
  lineUpBoldDownLeft: '┦',
  lineUpDoubleDownDoubleLeftDouble: '╣',
  lineUpDoubleDownDoubleLeft: '╢',
  lineUpDownLeftDouble: '╡',
  lineUpDownRight: '├',
  lineUpBoldDownBoldRightBold: '┣',
  lineUpBoldDownBoldRight: '┠',
  lineUpDownRightBold: '┝',
  lineUpBoldDownRightBold: '┡',
  lineUpDownBoldRightBold: '┢',
  lineUpDownBoldRight: '┟',
  lineUpBoldDownRight: '┞',
  lineUpDoubleDownDoubleRightDouble: '╠',
  lineUpDoubleDownDoubleRight: '╟',
  lineUpDownRightDouble: '╞',
  lineDownLeftRight: '┬',
  lineDownBoldLeftBoldRightBold: '┳',
  lineDownLeftBoldRightBold: '┯',
  lineDownBoldLeftRight: '┰',
  lineDownBoldLeftBoldRight: '┱',
  lineDownBoldLeftRightBold: '┲',
  lineDownLeftRightBold: '┮',
  lineDownLeftBoldRight: '┭',
  lineDownDoubleLeftDoubleRightDouble: '╦',
  lineDownDoubleLeftRight: '╥',
  lineDownLeftDoubleRightDouble: '╤',
  lineUpLeftRight: '┴',
  lineUpBoldLeftBoldRightBold: '┻',
  lineUpLeftBoldRightBold: '┷',
  lineUpBoldLeftRight: '┸',
  lineUpBoldLeftBoldRight: '┹',
  lineUpBoldLeftRightBold: '┺',
  lineUpLeftRightBold: '┶',
  lineUpLeftBoldRight: '┵',
  lineUpDoubleLeftDoubleRightDouble: '╩',
  lineUpDoubleLeftRight: '╨',
  lineUpLeftDoubleRightDouble: '╧',
  lineUpDownLeftRight: '┼',
  lineUpBoldDownBoldLeftBoldRightBold: '╋',
  lineUpDownBoldLeftBoldRightBold: '╈',
  lineUpBoldDownLeftBoldRightBold: '╇',
  lineUpBoldDownBoldLeftRightBold: '╊',
  lineUpBoldDownBoldLeftBoldRight: '╉',
  lineUpBoldDownLeftRight: '╀',
  lineUpDownBoldLeftRight: '╁',
  lineUpDownLeftBoldRight: '┽',
  lineUpDownLeftRightBold: '┾',
  lineUpBoldDownBoldLeftRight: '╂',
  lineUpDownLeftBoldRightBold: '┿',
  lineUpBoldDownLeftBoldRight: '╃',
  lineUpBoldDownLeftRightBold: '╄',
  lineUpDownBoldLeftBoldRight: '╅',
  lineUpDownBoldLeftRightBold: '╆',
  lineUpDoubleDownDoubleLeftDoubleRightDouble: '╬',
  lineUpDoubleDownDoubleLeftRight: '╫',
  lineUpDownLeftDoubleRightDouble: '╪',
  lineCross: '╳',
  lineBackslash: '╲',
  lineSlash: '╱'
};
const specialMainSymbols = {
  tick: '✔',
  info: 'ℹ',
  warning: '⚠',
  cross: '✘',
  squareSmall: '◻',
  squareSmallFilled: '◼',
  circle: '◯',
  circleFilled: '◉',
  circleDotted: '◌',
  circleDouble: '◎',
  circleCircle: 'ⓞ',
  circleCross: 'ⓧ',
  circlePipe: 'Ⓘ',
  radioOn: '◉',
  radioOff: '◯',
  checkboxOn: '☒',
  checkboxOff: '☐',
  checkboxCircleOn: 'ⓧ',
  checkboxCircleOff: 'Ⓘ',
  pointer: '❯',
  triangleUpOutline: '△',
  triangleLeft: '◀',
  triangleRight: '▶',
  lozenge: '◆',
  lozengeOutline: '◇',
  hamburger: '☰',
  smiley: '㋡',
  mustache: '෴',
  star: '★',
  play: '▶',
  nodejs: '⬢',
  oneSeventh: '⅐',
  oneNinth: '⅑',
  oneTenth: '⅒'
};
const specialFallbackSymbols = {
  tick: '√',
  info: 'i',
  warning: '‼',
  cross: '×',
  squareSmall: '□',
  squareSmallFilled: '■',
  circle: '( )',
  circleFilled: '(*)',
  circleDotted: '( )',
  circleDouble: '( )',
  circleCircle: '(○)',
  circleCross: '(×)',
  circlePipe: '(│)',
  radioOn: '(*)',
  radioOff: '( )',
  checkboxOn: '[×]',
  checkboxOff: '[ ]',
  checkboxCircleOn: '(×)',
  checkboxCircleOff: '( )',
  pointer: '>',
  triangleUpOutline: '∆',
  triangleLeft: '◄',
  triangleRight: '►',
  lozenge: '♦',
  lozengeOutline: '◊',
  hamburger: '≡',
  smiley: '☺',
  mustache: '┌─┐',
  star: '✶',
  play: '►',
  nodejs: '♦',
  oneSeventh: '1/7',
  oneNinth: '1/9',
  oneTenth: '1/10'
};
const mainSymbols = Object.assign(Object.assign({}, common), specialMainSymbols);
const fallbackSymbols = Object.assign(Object.assign({}, common), specialFallbackSymbols);
const shouldUseMain = isUnicodeSupported();
const figures = shouldUseMain ? mainSymbols : fallbackSymbols;
Object.entries(specialMainSymbols);

var _tty$WriteStream$prot, _tty$WriteStream, _tty$WriteStream$hasC;
const hasColors = (_tty$WriteStream$prot = tty == null || (_tty$WriteStream = tty.WriteStream) == null || (_tty$WriteStream = _tty$WriteStream.prototype) == null || (_tty$WriteStream$hasC = _tty$WriteStream.hasColors) == null ? void 0 : _tty$WriteStream$hasC.call(_tty$WriteStream)) != null ? _tty$WriteStream$prot : false;
const format = (open, close) => {
  if (!hasColors) {
    return input => input;
  }
  const openCode = `\u001B[${open}m`;
  const closeCode = `\u001B[${close}m`;
  return input => {
    const string = input + '';
    let index = string.indexOf(closeCode);
    if (index === -1) {
      return openCode + string + closeCode;
    }
    let result = openCode;
    let lastIndex = 0;
    while (index !== -1) {
      result += string.slice(lastIndex, index) + openCode;
      lastIndex = index + closeCode.length;
      index = string.indexOf(closeCode, lastIndex);
    }
    result += string.slice(lastIndex) + closeCode;
    return result;
  };
};
const bold = format(1, 22);
const gray = format(90, 39);
const redBright = format(91, 39);
const yellowBright = format(93, 39);

const defaultVerboseFunction = ({
  type,
  message,
  timestamp,
  piped,
  commandId,
  result: {
    failed = false
  } = {},
  options: {
    reject = true
  }
}) => {
  const timestampString = serializeTimestamp(timestamp);
  const icon = ICONS[type]({
    failed,
    reject,
    piped
  });
  const color = COLORS[type]({
    reject
  });
  return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
};
const serializeTimestamp = timestamp => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`;
const padField = (field, padding) => String(field).padStart(padding, '0');
const getFinalIcon = ({
  failed,
  reject
}) => {
  if (!failed) {
    return figures.tick;
  }
  return reject ? figures.cross : figures.warning;
};
const ICONS = {
  command: ({
    piped
  }) => piped ? '|' : '$',
  output: () => ' ',
  ipc: () => '*',
  error: getFinalIcon,
  duration: getFinalIcon
};
const identity$1 = string => string;
const COLORS = {
  command: () => bold,
  output: () => identity$1,
  ipc: () => identity$1,
  error: ({
    reject
  }) => reject ? redBright : yellowBright,
  duration: () => gray
};

const applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
  const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
  return printedLines.map(({
    verboseLine,
    verboseObject
  }) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction)).filter(printedLine => printedLine !== undefined).map(printedLine => appendNewline(printedLine)).join('');
};
const applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
  if (verboseFunction === undefined) {
    return verboseLine;
  }
  const printedLine = verboseFunction(verboseLine, verboseObject);
  if (typeof printedLine === 'string') {
    return printedLine;
  }
};
const appendNewline = printedLine => printedLine.endsWith('\n') ? printedLine : `${printedLine}\n`;

const _excluded$7 = ["piped"];
const verboseLog = ({
  type,
  verboseMessage,
  fdNumber,
  verboseInfo,
  result
}) => {
  const verboseObject = getVerboseObject({
    type,
    result,
    verboseInfo
  });
  const printedLines = getPrintedLines(verboseMessage, verboseObject);
  const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
  node_fs.writeFileSync(STDERR_FD, finalLines);
};
const getVerboseObject = _ref => {
  let {
      type,
      result,
      verboseInfo: {
        escapedCommand,
        commandId,
        rawOptions: {
          piped = false
        }
      }
    } = _ref,
    options = _objectWithoutProperties(_ref.verboseInfo.rawOptions, _excluded$7);
  return {
    type,
    escapedCommand,
    commandId: `${commandId}`,
    timestamp: new Date(),
    piped,
    result,
    options
  };
};
const getPrintedLines = (verboseMessage, verboseObject) => verboseMessage.split('\n').map(message => getPrintedLine(Object.assign(Object.assign({}, verboseObject), {}, {
  message
})));
const getPrintedLine = verboseObject => {
  const verboseLine = defaultVerboseFunction(verboseObject);
  return {
    verboseLine,
    verboseObject
  };
};
const STDERR_FD = 2;
const serializeVerboseMessage = message => {
  const messageString = typeof message === 'string' ? message : node_util.inspect(message);
  const escapedMessage = escapeLines(messageString);
  return escapedMessage.replaceAll('\t', ' '.repeat(TAB_SIZE));
};
const TAB_SIZE = 2;

const logCommand = (escapedCommand, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  verboseLog({
    type: 'command',
    verboseMessage: escapedCommand,
    verboseInfo
  });
};

const getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
  validateVerbose(verbose);
  const commandId = getCommandId(verbose);
  return {
    verbose,
    escapedCommand,
    commandId,
    rawOptions
  };
};
const getCommandId = verbose => isVerbose({
  verbose
}) ? COMMAND_ID++ : undefined;
let COMMAND_ID = 0n;
const validateVerbose = verbose => {
  for (const fdVerbose of verbose) {
    if (fdVerbose === false) {
      throw new TypeError('The "verbose: false" option was renamed to "verbose: \'none\'".');
    }
    if (fdVerbose === true) {
      throw new TypeError('The "verbose: true" option was renamed to "verbose: \'short\'".');
    }
    if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
      const allowedValues = VERBOSE_VALUES.map(allowedValue => `'${allowedValue}'`).join(', ');
      throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
    }
  }
};

const getStartTime = () => process$6.hrtime.bigint();
const getDurationMs = startTime => Number(process$6.hrtime.bigint() - startTime) / 1e6;

const handleCommand = (filePath, rawArguments, rawOptions) => {
  const startTime = getStartTime();
  const {
    command,
    escapedCommand
  } = joinCommand(filePath, rawArguments);
  const verbose = normalizeFdSpecificOption(rawOptions, 'verbose');
  const verboseInfo = getVerboseInfo(verbose, escapedCommand, Object.assign({}, rawOptions));
  logCommand(escapedCommand, verboseInfo);
  return {
    command,
    escapedCommand,
    startTime,
    verboseInfo
  };
};

var crossSpawn$1 = {exports: {}};

var global$a = global$x;
var classof = classofRaw$2;

var engineIsNode = classof(global$a.process) === 'process';

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$9 = global$x;
var apply = functionApply;
var bind$4 = functionBindContext;
var isCallable$4 = isCallable$q;
var hasOwn$2 = hasOwnProperty_1;
var fails = fails$v;
var html = html$2;
var arraySlice = arraySlice$4;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$3;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$9.setImmediate;
var clear = global$9.clearImmediate;
var process$4 = global$9.process;
var Dispatch = global$9.Dispatch;
var Function$1 = global$9.Function;
var MessageChannel = global$9.MessageChannel;
var String$1 = global$9.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$9.location;
});

var run = function (id) {
  if (hasOwn$2(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$9.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$4(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$4.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$4(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$9.addEventListener &&
    isCallable$4(global$9.postMessage) &&
    !global$9.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$9.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};

Queue$2.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$2;

var userAgent$1 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$8 = global$x;
var safeGetBuiltIn = safeGetBuiltIn$2;
var bind$3 = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$8.MutationObserver || global$8.WebKitMutationObserver;
var document$2 = global$8.document;
var process$3 = global$8.process;
var Promise$1 = global$8.Promise;
var microtask$1 = safeGetBuiltIn('queueMicrotask');
var notify$1, toggle, node$1, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$3.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node$1 = document$2.createTextNode('');
    new MutationObserver(flush).observe(node$1, { characterData: true });
    notify$1 = function () {
      node$1.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$3(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$3.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$3(macrotask, global$8);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$4 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$7 = global$x;

var promiseNativeConstructor = global$7.Promise;

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$6 = global$x;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$3 = isCallable$q;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$1 = wellKnownSymbol$n;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$1('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$6.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$5 = aCallable$c;

var $TypeError$2 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$2('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$5(resolve);
  this.reject = aCallable$5(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$b = _export;
var IS_NODE = engineIsNode;
var global$5 = global$x;
var call$4 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$b;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$6;
var setSpecies = setSpecies$3;
var aCallable$4 = aCallable$c;
var isCallable$2 = isCallable$q;
var isObject$2 = isObject$i;
var anInstance = anInstance$5;
var speciesConstructor = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$3 = perform$4;
var Queue = queue$1;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$5.TypeError;
var document$1 = global$5.document;
var process$2 = global$5.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$5.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$2(it) && isCallable$2(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$4(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$5.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$5['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$4(task, global$5, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$3(function () {
        if (IS_NODE) {
          process$2.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$4(task, global$5, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$2.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$2 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$4(then, value,
            bind$2(internalResolve, wrapper, state),
            bind$2(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$4(executor);
    call$4(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$2(internalResolve, state), bind$2(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$2(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$2.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$2(internalResolve, state);
    this.reject = bind$2(internalReject, state);
  };

  newPromiseCapabilityModule$4.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$2(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$4(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var bind$1 = functionBindContext;
var call$3 = functionCall;
var anObject$1 = anObject$f;
var tryToString = tryToString$6;
var isArrayIteratorMethod = isArrayIteratorMethod$3;
var lengthOfArrayLike$2 = lengthOfArrayLike$b;
var isPrototypeOf$1 = objectIsPrototypeOf;
var getIterator = getIterator$4;
var getIteratorMethod = getIteratorMethod$5;
var iteratorClose = iteratorClose$2;

var $TypeError$1 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$4 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$1(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$1(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError$1(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$3(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
  } return new Result(false);
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$a = _export;
var call$2 = functionCall;
var aCallable$3 = aCallable$c;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$4;
var iterate$3 = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$3(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$3(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$2($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable$1 = isCallable$q;
var defineBuiltIn = defineBuiltIn$b;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$1(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$8 = _export;
var call$1 = functionCall;
var aCallable$2 = aCallable$c;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$4;
var iterate$2 = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate$2(iterable, function (promise) {
        call$1($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$1.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

var anObject = anObject$f;
var isObject$1 = isObject$i;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

var windows;
var hasRequiredWindows;
function requireWindows() {
  if (hasRequiredWindows) return windows;
  hasRequiredWindows = 1;
  windows = isexe;
  isexe.sync = sync;
  var fs = require$$1;
  function checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) {
      return true;
    }
    pathext = pathext.split(';');
    if (pathext.indexOf('') !== -1) {
      return true;
    }
    for (var i = 0; i < pathext.length; i++) {
      var p = pathext[i].toLowerCase();
      if (p && path.substr(-p.length).toLowerCase() === p) {
        return true;
      }
    }
    return false;
  }
  function checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) {
      return false;
    }
    return checkPathExt(path, options);
  }
  function isexe(path, options, cb) {
    fs.stat(path, function (er, stat) {
      cb(er, er ? false : checkStat(stat, path, options));
    });
  }
  function sync(path, options) {
    return checkStat(fs.statSync(path), path, options);
  }
  return windows;
}

var mode;
var hasRequiredMode;
function requireMode() {
  if (hasRequiredMode) return mode;
  hasRequiredMode = 1;
  mode = isexe;
  isexe.sync = sync;
  var fs = require$$1;
  function isexe(path, options, cb) {
    fs.stat(path, function (er, stat) {
      cb(er, er ? false : checkStat(stat, options));
    });
  }
  function sync(path, options) {
    return checkStat(fs.statSync(path), options);
  }
  function checkStat(stat, options) {
    return stat.isFile() && checkMode(stat, options);
  }
  function checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt('100', 8);
    var g = parseInt('010', 8);
    var o = parseInt('001', 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
  }
  return mode;
}

var core;
if (process.platform === 'win32' || commonjsGlobal.TESTING_WINDOWS) {
  core = requireWindows();
} else {
  core = requireMode();
}
var isexe_1 = isexe$1;
isexe$1.sync = sync;
function isexe$1(path, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }
  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided');
    }
    return new Promise(function (resolve, reject) {
      isexe$1(path, options || {}, function (er, is) {
        if (er) {
          reject(er);
        } else {
          resolve(is);
        }
      });
    });
  }
  core(path, options || {}, function (er, is) {
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null;
        is = false;
      }
    }
    cb(er, is);
  });
}
function sync(path, options) {
  try {
    return core.sync(path, options || {});
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false;
    } else {
      throw er;
    }
  }
}
getDefaultExportFromCjs(isexe_1);

const isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
const path$4 = require$$0;
const COLON = isWindows ? ';' : ':';
const isexe = isexe_1;
const getNotFoundError = cmd => Object.assign(new Error(`not found: ${cmd}`), {
  code: 'ENOENT'
});
const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON;
  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [''] : [...(isWindows ? [process.cwd()] : []), ...(opt.path || process.env.PATH || '').split(colon)];
  const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '';
  const pathExt = isWindows ? pathExtExe.split(colon) : [''];
  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '') pathExt.unshift('');
  }
  return {
    pathEnv,
    pathExt,
    pathExtExe
  };
};
const which$1 = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }
  if (!opt) opt = {};
  const {
    pathEnv,
    pathExt,
    pathExtExe
  } = getPathInfo(cmd, opt);
  const found = [];
  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path$4.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
    resolve(subStep(p, i, 0));
  });
  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length) return resolve(step(i + 1));
    const ext = pathExt[ii];
    isexe(p + ext, {
      pathExt: pathExtExe
    }, (er, is) => {
      if (!er && is) {
        if (opt.all) found.push(p + ext);else return resolve(p + ext);
      }
      return resolve(subStep(p, i, ii + 1));
    });
  });
  return cb ? step(0).then(res => cb(null, res), cb) : step(0);
};
const whichSync = (cmd, opt) => {
  opt = opt || {};
  const {
    pathEnv,
    pathExt,
    pathExtExe
  } = getPathInfo(cmd, opt);
  const found = [];
  for (let i = 0; i < pathEnv.length; i++) {
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path$4.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
    for (let j = 0; j < pathExt.length; j++) {
      const cur = p + pathExt[j];
      try {
        const is = isexe.sync(cur, {
          pathExt: pathExtExe
        });
        if (is) {
          if (opt.all) found.push(cur);else return cur;
        }
      } catch (ex) {}
    }
  }
  if (opt.all && found.length) return found;
  if (opt.nothrow) return null;
  throw getNotFoundError(cmd);
};
var which_1 = which$1;
which$1.sync = whichSync;
getDefaultExportFromCjs(which_1);

var pathKey$2 = {exports: {}};

const pathKey$1 = (options = {}) => {
  const environment = options.env || process.env;
  const platform = options.platform || process.platform;
  if (platform !== 'win32') {
    return 'PATH';
  }
  return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};
pathKey$2.exports = pathKey$1;
pathKey$2.exports.default = pathKey$1;
var pathKeyExports = pathKey$2.exports;
getDefaultExportFromCjs(pathKeyExports);

const path$3 = require$$0;
const which = which_1;
const getPathKey = pathKeyExports;
function resolveCommandAttempt(parsed, withoutPathExt) {
  const env = parsed.options.env || process.env;
  const cwd = process.cwd();
  const hasCustomCwd = parsed.options.cwd != null;
  const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;
  if (shouldSwitchCwd) {
    try {
      process.chdir(parsed.options.cwd);
    } catch (err) {}
  }
  let resolved;
  try {
    resolved = which.sync(parsed.command, {
      path: env[getPathKey({
        env
      })],
      pathExt: withoutPathExt ? path$3.delimiter : undefined
    });
  } catch (e) {} finally {
    if (shouldSwitchCwd) {
      process.chdir(cwd);
    }
  }
  if (resolved) {
    resolved = path$3.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
  }
  return resolved;
}
function resolveCommand$1(parsed) {
  return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}
var resolveCommand_1 = resolveCommand$1;
getDefaultExportFromCjs(resolveCommand_1);

var _escape = {};

const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function escapeCommand(arg) {
  arg = arg.replace(metaCharsRegExp, '^$1');
  return arg;
}
function escapeArgument(arg, doubleEscapeMetaChars) {
  arg = `${arg}`;
  arg = arg.replace(/(\\*)"/g, '$1$1\\"');
  arg = arg.replace(/(\\*)$/, '$1$1');
  arg = `"${arg}"`;
  arg = arg.replace(metaCharsRegExp, '^$1');
  if (doubleEscapeMetaChars) {
    arg = arg.replace(metaCharsRegExp, '^$1');
  }
  return arg;
}
_escape.command = escapeCommand;
_escape.argument = escapeArgument;

var shebangRegex$1 = /^#!(.*)/;
getDefaultExportFromCjs(shebangRegex$1);

const shebangRegex = shebangRegex$1;
var shebangCommand$1 = (string = '') => {
  const match = string.match(shebangRegex);
  if (!match) {
    return null;
  }
  const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
  const binary = path.split('/').pop();
  if (binary === 'env') {
    return argument;
  }
  return argument ? `${binary} ${argument}` : binary;
};
getDefaultExportFromCjs(shebangCommand$1);

const fs = require$$1;
const shebangCommand = shebangCommand$1;
function readShebang$1(command) {
  const size = 150;
  const buffer = Buffer.alloc(size);
  let fd;
  try {
    fd = fs.openSync(command, 'r');
    fs.readSync(fd, buffer, 0, size, 0);
    fs.closeSync(fd);
  } catch (e) {}
  return shebangCommand(buffer.toString());
}
var readShebang_1 = readShebang$1;
getDefaultExportFromCjs(readShebang_1);

const path$2 = require$$0;
const resolveCommand = resolveCommand_1;
const escape = _escape;
const readShebang = readShebang_1;
const isWin$1 = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function detectShebang(parsed) {
  parsed.file = resolveCommand(parsed);
  const shebang = parsed.file && readShebang(parsed.file);
  if (shebang) {
    parsed.args.unshift(parsed.file);
    parsed.command = shebang;
    return resolveCommand(parsed);
  }
  return parsed.file;
}
function parseNonShell(parsed) {
  if (!isWin$1) {
    return parsed;
  }
  const commandFile = detectShebang(parsed);
  const needsShell = !isExecutableRegExp.test(commandFile);
  if (parsed.options.forceShell || needsShell) {
    const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
    parsed.command = path$2.normalize(parsed.command);
    parsed.command = escape.command(parsed.command);
    parsed.args = parsed.args.map(arg => escape.argument(arg, needsDoubleEscapeMetaChars));
    const shellCommand = [parsed.command].concat(parsed.args).join(' ');
    parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
    parsed.command = process.env.comspec || 'cmd.exe';
    parsed.options.windowsVerbatimArguments = true;
  }
  return parsed;
}
function parse$1(command, args, options) {
  if (args && !Array.isArray(args)) {
    options = args;
    args = null;
  }
  args = args ? args.slice(0) : [];
  options = Object.assign({}, options);
  const parsed = {
    command,
    args,
    options,
    file: undefined,
    original: {
      command,
      args
    }
  };
  return options.shell ? parsed : parseNonShell(parsed);
}
var parse_1 = parse$1;
getDefaultExportFromCjs(parse_1);

const isWin = process.platform === 'win32';
function notFoundError(original, syscall) {
  return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
    code: 'ENOENT',
    errno: 'ENOENT',
    syscall: `${syscall} ${original.command}`,
    path: original.command,
    spawnargs: original.args
  });
}
function hookChildProcess(cp, parsed) {
  if (!isWin) {
    return;
  }
  const originalEmit = cp.emit;
  cp.emit = function (name, arg1) {
    if (name === 'exit') {
      const err = verifyENOENT(arg1, parsed);
      if (err) {
        return originalEmit.call(cp, 'error', err);
      }
    }
    return originalEmit.apply(cp, arguments);
  };
}
function verifyENOENT(status, parsed) {
  if (isWin && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawn');
  }
  return null;
}
function verifyENOENTSync(status, parsed) {
  if (isWin && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawnSync');
  }
  return null;
}
var enoent$1 = {
  hookChildProcess,
  verifyENOENT,
  verifyENOENTSync,
  notFoundError
};
getDefaultExportFromCjs(enoent$1);

const cp = require$$0$2;
const parse = parse_1;
const enoent = enoent$1;
function spawn(command, args, options) {
  const parsed = parse(command, args, options);
  const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
  enoent.hookChildProcess(spawned, parsed);
  return spawned;
}
function spawnSync(command, args, options) {
  const parsed = parse(command, args, options);
  const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
  result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
  return result;
}
crossSpawn$1.exports = spawn;
crossSpawn$1.exports.spawn = spawn;
crossSpawn$1.exports.sync = spawnSync;
crossSpawn$1.exports._parse = parse;
crossSpawn$1.exports._enoent = enoent;
var crossSpawnExports = crossSpawn$1.exports;
var crossSpawn = getDefaultExportFromCjs(crossSpawnExports);

function pathKey(options = {}) {
  const {
    env = process.env,
    platform = process.platform
  } = options;
  if (platform !== 'win32') {
    return 'PATH';
  }
  return Object.keys(env).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
}

const _excluded$6 = ["env"];
const npmRunPath = ({
  cwd = process$6.cwd(),
  path: pathOption = process$6.env[pathKey()],
  preferLocal = true,
  execPath = process$6.execPath,
  addExecPath = true
} = {}) => {
  const cwdString = cwd instanceof URL ? node_url.fileURLToPath(cwd) : cwd;
  const cwdPath = path$5.resolve(cwdString);
  const result = [];
  if (preferLocal) {
    applyPreferLocal(result, cwdPath);
  }
  if (addExecPath) {
    applyExecPath(result, execPath, cwdPath);
  }
  return [...result, pathOption].join(path$5.delimiter);
};
const applyPreferLocal = (result, cwdPath) => {
  let previous;
  while (previous !== cwdPath) {
    result.push(path$5.join(cwdPath, 'node_modules/.bin'));
    previous = cwdPath;
    cwdPath = path$5.resolve(cwdPath, '..');
  }
};
const applyExecPath = (result, execPath, cwdPath) => {
  const execPathString = execPath instanceof URL ? node_url.fileURLToPath(execPath) : execPath;
  result.push(path$5.resolve(cwdPath, execPathString, '..'));
};
const npmRunPathEnv = (_ref = {}) => {
  let {
      env = process$6.env
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$6);
  env = Object.assign({}, env);
  const pathName = pathKey({
    env
  });
  options.path = env[pathName];
  env[pathName] = npmRunPath(options);
  return env;
};

var $$5 = _export;
var DESCRIPTORS = descriptors$1;
var global$4 = global$x;
var uncurryThis = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable = isCallable$q;
var isPrototypeOf = objectIsPrototypeOf;
var toString = toString$c;
var defineBuiltInAccessor = defineBuiltInAccessor$7;
var copyConstructorProperties = copyConstructorProperties$3;

var NativeSymbol = global$4.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$5({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

const getFinalError = (originalError, message, isSync) => {
  const ErrorClass = isSync ? ExecaSyncError : ExecaError;
  const options = originalError instanceof DiscardedError ? {} : {
    cause: originalError
  };
  return new ErrorClass(message, options);
};
class DiscardedError extends Error {}
const setErrorName = (ErrorClass, value) => {
  Object.defineProperty(ErrorClass.prototype, 'name', {
    value,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
};
const isExecaError = error => isErrorInstance(error) && execaErrorSymbol in error;
const execaErrorSymbol = Symbol('isExecaError');
const isErrorInstance = value => Object.prototype.toString.call(value) === '[object Error]';
class ExecaError extends Error {}
setErrorName(ExecaError, ExecaError.name);
class ExecaSyncError extends Error {}
setErrorName(ExecaSyncError, ExecaSyncError.name);

var $$4 = _export;
var $values = objectToArray.values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$$4({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

var $$3 = _export;
var iterate$1 = iterate$4;
var createProperty = createProperty$2;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$$3({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate$1(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

const getRealtimeSignals = () => {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({
    length
  }, getRealtimeSignal);
};
const getRealtimeSignal = (value, index) => ({
  name: `SIGRT${index + 1}`,
  number: SIGRTMIN + index,
  action: "terminate",
  description: "Application-specific signal (realtime)",
  standard: "posix"
});
const SIGRTMIN = 34;
const SIGRTMAX = 64;

const SIGNALS = [{
  name: "SIGHUP",
  number: 1,
  action: "terminate",
  description: "Terminal closed",
  standard: "posix"
}, {
  name: "SIGINT",
  number: 2,
  action: "terminate",
  description: "User interruption with CTRL-C",
  standard: "ansi"
}, {
  name: "SIGQUIT",
  number: 3,
  action: "core",
  description: "User interruption with CTRL-\\",
  standard: "posix"
}, {
  name: "SIGILL",
  number: 4,
  action: "core",
  description: "Invalid machine instruction",
  standard: "ansi"
}, {
  name: "SIGTRAP",
  number: 5,
  action: "core",
  description: "Debugger breakpoint",
  standard: "posix"
}, {
  name: "SIGABRT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "ansi"
}, {
  name: "SIGIOT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "bsd"
}, {
  name: "SIGBUS",
  number: 7,
  action: "core",
  description: "Bus error due to misaligned, non-existing address or paging error",
  standard: "bsd"
}, {
  name: "SIGEMT",
  number: 7,
  action: "terminate",
  description: "Command should be emulated but is not implemented",
  standard: "other"
}, {
  name: "SIGFPE",
  number: 8,
  action: "core",
  description: "Floating point arithmetic error",
  standard: "ansi"
}, {
  name: "SIGKILL",
  number: 9,
  action: "terminate",
  description: "Forced termination",
  standard: "posix",
  forced: true
}, {
  name: "SIGUSR1",
  number: 10,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGSEGV",
  number: 11,
  action: "core",
  description: "Segmentation fault",
  standard: "ansi"
}, {
  name: "SIGUSR2",
  number: 12,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGPIPE",
  number: 13,
  action: "terminate",
  description: "Broken pipe or socket",
  standard: "posix"
}, {
  name: "SIGALRM",
  number: 14,
  action: "terminate",
  description: "Timeout or timer",
  standard: "posix"
}, {
  name: "SIGTERM",
  number: 15,
  action: "terminate",
  description: "Termination",
  standard: "ansi"
}, {
  name: "SIGSTKFLT",
  number: 16,
  action: "terminate",
  description: "Stack is empty or overflowed",
  standard: "other"
}, {
  name: "SIGCHLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "posix"
}, {
  name: "SIGCLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "other"
}, {
  name: "SIGCONT",
  number: 18,
  action: "unpause",
  description: "Unpaused",
  standard: "posix",
  forced: true
}, {
  name: "SIGSTOP",
  number: 19,
  action: "pause",
  description: "Paused",
  standard: "posix",
  forced: true
}, {
  name: "SIGTSTP",
  number: 20,
  action: "pause",
  description: "Paused using CTRL-Z or \"suspend\"",
  standard: "posix"
}, {
  name: "SIGTTIN",
  number: 21,
  action: "pause",
  description: "Background process cannot read terminal input",
  standard: "posix"
}, {
  name: "SIGBREAK",
  number: 21,
  action: "terminate",
  description: "User interruption with CTRL-BREAK",
  standard: "other"
}, {
  name: "SIGTTOU",
  number: 22,
  action: "pause",
  description: "Background process cannot write to terminal output",
  standard: "posix"
}, {
  name: "SIGURG",
  number: 23,
  action: "ignore",
  description: "Socket received out-of-band data",
  standard: "bsd"
}, {
  name: "SIGXCPU",
  number: 24,
  action: "core",
  description: "Process timed out",
  standard: "bsd"
}, {
  name: "SIGXFSZ",
  number: 25,
  action: "core",
  description: "File too big",
  standard: "bsd"
}, {
  name: "SIGVTALRM",
  number: 26,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGPROF",
  number: 27,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGWINCH",
  number: 28,
  action: "ignore",
  description: "Terminal window size changed",
  standard: "bsd"
}, {
  name: "SIGIO",
  number: 29,
  action: "terminate",
  description: "I/O is available",
  standard: "other"
}, {
  name: "SIGPOLL",
  number: 29,
  action: "terminate",
  description: "Watched event",
  standard: "other"
}, {
  name: "SIGINFO",
  number: 29,
  action: "ignore",
  description: "Request for process information",
  standard: "other"
}, {
  name: "SIGPWR",
  number: 30,
  action: "terminate",
  description: "Device running out of power",
  standard: "systemv"
}, {
  name: "SIGSYS",
  number: 31,
  action: "core",
  description: "Invalid system call",
  standard: "other"
}, {
  name: "SIGUNUSED",
  number: 31,
  action: "terminate",
  description: "Invalid system call",
  standard: "other"
}];

const getSignals = () => {
  const realtimeSignals = getRealtimeSignals();
  const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal$1);
  return signals;
};
const normalizeSignal$1 = ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) => {
  const {
    signals: {
      [name]: constantSignal
    }
  } = node_os.constants;
  const supported = constantSignal !== undefined;
  const number = supported ? constantSignal : defaultNumber;
  return {
    name,
    number,
    description,
    supported,
    action,
    forced,
    standard
  };
};

const getSignalsByName = () => {
  const signals = getSignals();
  return Object.fromEntries(signals.map(getSignalByName));
};
const getSignalByName = ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) => [name, {
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}];
const signalsByName = getSignalsByName();
const getSignalsByNumber = () => {
  const signals = getSignals();
  const length = SIGRTMAX + 1;
  const signalsA = Array.from({
    length
  }, (value, number) => getSignalByNumber(number, signals));
  return Object.assign({}, ...signalsA);
};
const getSignalByNumber = (number, signals) => {
  const signal = findSignalByNumber(number, signals);
  if (signal === undefined) {
    return {};
  }
  const {
    name,
    description,
    supported,
    action,
    forced,
    standard
  } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};
const findSignalByNumber = (number, signals) => {
  const signal = signals.find(({
    name
  }) => node_os.constants.signals[name] === number);
  if (signal !== undefined) {
    return signal;
  }
  return signals.find(signalA => signalA.number === number);
};
getSignalsByNumber();

const normalizeKillSignal = killSignal => {
  const optionName = 'option `killSignal`';
  if (killSignal === 0) {
    throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
  }
  return normalizeSignal(killSignal, optionName);
};
const normalizeSignalArgument = signal => signal === 0 ? signal : normalizeSignal(signal, '`subprocess.kill()`\'s argument');
const normalizeSignal = (signalNameOrInteger, optionName) => {
  if (Number.isInteger(signalNameOrInteger)) {
    return normalizeSignalInteger(signalNameOrInteger, optionName);
  }
  if (typeof signalNameOrInteger === 'string') {
    return normalizeSignalName(signalNameOrInteger, optionName);
  }
  throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.\n${getAvailableSignals()}`);
};
const normalizeSignalInteger = (signalInteger, optionName) => {
  if (signalsIntegerToName.has(signalInteger)) {
    return signalsIntegerToName.get(signalInteger);
  }
  throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.\n${getAvailableSignals()}`);
};
const getSignalsIntegerToName = () => new Map(Object.entries(node_os.constants.signals).reverse().map(([signalName, signalInteger]) => [signalInteger, signalName]));
const signalsIntegerToName = getSignalsIntegerToName();
const normalizeSignalName = (signalName, optionName) => {
  if (signalName in node_os.constants.signals) {
    return signalName;
  }
  if (signalName.toUpperCase() in node_os.constants.signals) {
    throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
  }
  throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.\n${getAvailableSignals()}`);
};
const getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`;
const getAvailableSignalNames = () => Object.keys(node_os.constants.signals).sort().map(signalName => `'${signalName}'`).join(', ');
const getAvailableSignalIntegers = () => [...new Set(Object.values(node_os.constants.signals).sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))].join(', ');
const getSignalDescription = signal => signalsByName[signal].description;

const normalizeForceKillAfterDelay = forceKillAfterDelay => {
  if (forceKillAfterDelay === false) {
    return forceKillAfterDelay;
  }
  if (forceKillAfterDelay === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT;
  }
  if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
    throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
  }
  return forceKillAfterDelay;
};
const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5;
const subprocessKill = ({
  kill,
  options: {
    forceKillAfterDelay,
    killSignal
  },
  onInternalError,
  context,
  controller
}, signalOrError, errorArgument) => {
  const {
    signal,
    error
  } = parseKillArguments(signalOrError, errorArgument, killSignal);
  emitKillError(error, onInternalError);
  const killResult = kill(signal);
  setKillTimeout({
    kill,
    signal,
    forceKillAfterDelay,
    killSignal,
    killResult,
    context,
    controller
  });
  return killResult;
};
const parseKillArguments = (signalOrError, errorArgument, killSignal) => {
  const [signal = killSignal, error] = isErrorInstance(signalOrError) ? [undefined, signalOrError] : [signalOrError, errorArgument];
  if (typeof signal !== 'string' && !Number.isInteger(signal)) {
    throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
  }
  if (error !== undefined && !isErrorInstance(error)) {
    throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
  }
  return {
    signal: normalizeSignalArgument(signal),
    error
  };
};
const emitKillError = (error, onInternalError) => {
  if (error !== undefined) {
    onInternalError.reject(error);
  }
};
const setKillTimeout = function () {
  var _ref = _asyncToGenerator(function* ({
    kill,
    signal,
    forceKillAfterDelay,
    killSignal,
    killResult,
    context,
    controller
  }) {
    if (signal === killSignal && killResult) {
      killOnTimeout({
        kill,
        forceKillAfterDelay,
        context,
        controllerSignal: controller.signal
      });
    }
  });
  return function setKillTimeout(_x) {
    return _ref.apply(this, arguments);
  };
}();
const killOnTimeout = function () {
  var _ref2 = _asyncToGenerator(function* ({
    kill,
    forceKillAfterDelay,
    context,
    controllerSignal
  }) {
    if (forceKillAfterDelay === false) {
      return;
    }
    try {
      yield promises.setTimeout(forceKillAfterDelay, undefined, {
        signal: controllerSignal
      });
      if (kill('SIGKILL')) {
        var _context$isForcefully;
        (_context$isForcefully = context.isForcefullyTerminated) != null ? _context$isForcefully : context.isForcefullyTerminated = true;
      }
    } catch (_unused) {}
  });
  return function killOnTimeout(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

const onAbortedSignal = function () {
  var _ref = _asyncToGenerator(function* (mainSignal, stopSignal) {
    if (!mainSignal.aborted) {
      yield node_events.once(mainSignal, 'abort', {
        signal: stopSignal
      });
    }
  });
  return function onAbortedSignal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const validateCancelSignal = ({
  cancelSignal
}) => {
  if (cancelSignal !== undefined && Object.prototype.toString.call(cancelSignal) !== '[object AbortSignal]') {
    throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
  }
};
const throwOnCancel = ({
  subprocess,
  cancelSignal,
  gracefulCancel,
  context,
  controller
}) => cancelSignal === undefined || gracefulCancel ? [] : [terminateOnCancel(subprocess, cancelSignal, context, controller)];
const terminateOnCancel = function () {
  var _ref = _asyncToGenerator(function* (subprocess, cancelSignal, context, {
    signal
  }) {
    var _context$terminationR;
    yield onAbortedSignal(cancelSignal, signal);
    (_context$terminationR = context.terminationReason) != null ? _context$terminationR : context.terminationReason = 'cancel';
    subprocess.kill();
    throw cancelSignal.reason;
  });
  return function terminateOnCancel(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

const validateIpcMethod = ({
  methodName,
  isSubprocess,
  ipc,
  isConnected
}) => {
  validateIpcOption(methodName, isSubprocess, ipc);
  validateConnection(methodName, isSubprocess, isConnected);
};
const validateIpcOption = (methodName, isSubprocess, ipc) => {
  if (!ipc) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
  }
};
const validateConnection = (methodName, isSubprocess, isConnected) => {
  if (!isConnected) {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
  }
};
const throwOnEarlyDisconnect = isSubprocess => {
  throw new Error(`${getMethodName('getOneMessage', isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
};
const throwOnStrictDeadlockError = isSubprocess => {
  throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName('getOneMessage', isSubprocess)},
	${getMethodName('sendMessage', isSubprocess, 'message, {strict: true}')},
]);`);
};
const getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName('sendMessage', isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, {
  cause: error
});
const throwOnMissingStrict = isSubprocess => {
  throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
};
const throwOnStrictDisconnect = isSubprocess => {
  throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
};
const getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`);
const throwOnMissingParent = () => {
  throw new Error('`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.');
};
const handleEpipeError = ({
  error,
  methodName,
  isSubprocess
}) => {
  if (error.code === 'EPIPE') {
    throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, {
      cause: error
    });
  }
};
const handleSerializationError = ({
  error,
  methodName,
  isSubprocess,
  message
}) => {
  if (isSerializationError(error)) {
    throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, {
      cause: error
    });
  }
};
const isSerializationError = ({
  code,
  message
}) => SERIALIZATION_ERROR_CODES.has(code) || SERIALIZATION_ERROR_MESSAGES.some(serializationErrorMessage => message.includes(serializationErrorMessage));
const SERIALIZATION_ERROR_CODES = new Set(['ERR_MISSING_ARGS', 'ERR_INVALID_ARG_TYPE']);
const SERIALIZATION_ERROR_MESSAGES = ['could not be cloned', 'circular structure', 'call stack size exceeded'];
const getMethodName = (methodName, isSubprocess, parameters = '') => methodName === 'cancelSignal' ? '`cancelSignal`\'s `controller.abort()`' : `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`;
const getNamespaceName = isSubprocess => isSubprocess ? '' : 'subprocess.';
const getOtherProcessName = isSubprocess => isSubprocess ? 'parent process' : 'subprocess';
const disconnect = anyProcess => {
  if (anyProcess.connected) {
    anyProcess.disconnect();
  }
};

const createDeferred = () => {
  const methods = {};
  const promise = new Promise((resolve, reject) => {
    Object.assign(methods, {
      resolve,
      reject
    });
  });
  return Object.assign(promise, methods);
};

const getToStream = (destination, to = 'stdin') => {
  const isWritable = true;
  const {
    options,
    fileDescriptors
  } = SUBPROCESS_OPTIONS.get(destination);
  const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
  const destinationStream = destination.stdio[fdNumber];
  if (destinationStream === null) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
  }
  return destinationStream;
};
const getFromStream = (source, from = 'stdout') => {
  const isWritable = false;
  const {
    options,
    fileDescriptors
  } = SUBPROCESS_OPTIONS.get(source);
  const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
  const sourceStream = fdNumber === 'all' ? source.all : source.stdio[fdNumber];
  if (sourceStream === null || sourceStream === undefined) {
    throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
  }
  return sourceStream;
};
const SUBPROCESS_OPTIONS = new WeakMap();
const getFdNumber = (fileDescriptors, fdName, isWritable) => {
  const fdNumber = parseFdNumber(fdName, isWritable);
  validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
  return fdNumber;
};
const parseFdNumber = (fdName, isWritable) => {
  const fdNumber = parseFd(fdName);
  if (fdNumber !== undefined) {
    return fdNumber;
  }
  const {
    validOptions,
    defaultValue
  } = isWritable ? {
    validOptions: '"stdin"',
    defaultValue: 'stdin'
  } : {
    validOptions: '"stdout", "stderr", "all"',
    defaultValue: 'stdout'
  };
  throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
};
const validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
  const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
  if (fileDescriptor === undefined) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
  }
  if (fileDescriptor.direction === 'input' && !isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
  }
  if (fileDescriptor.direction !== 'input' && isWritable) {
    throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
  }
};
const getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
  if (fdNumber === 'all' && !options.all) {
    return 'The "all" option must be true to use "from: \'all\'".';
  }
  const {
    optionName,
    optionValue
  } = getInvalidStdioOption(fdNumber, options);
  return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
};
const getInvalidStdioOption = (fdNumber, {
  stdin,
  stdout,
  stderr,
  stdio
}) => {
  const usedDescriptor = getUsedDescriptor(fdNumber);
  if (usedDescriptor === 0 && stdin !== undefined) {
    return {
      optionName: 'stdin',
      optionValue: stdin
    };
  }
  if (usedDescriptor === 1 && stdout !== undefined) {
    return {
      optionName: 'stdout',
      optionValue: stdout
    };
  }
  if (usedDescriptor === 2 && stderr !== undefined) {
    return {
      optionName: 'stderr',
      optionValue: stderr
    };
  }
  return {
    optionName: `stdio[${usedDescriptor}]`,
    optionValue: stdio[usedDescriptor]
  };
};
const getUsedDescriptor = fdNumber => fdNumber === 'all' ? 1 : fdNumber;
const getOptionName = isWritable => isWritable ? 'to' : 'from';
const serializeOptionValue = value => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return typeof value === 'number' ? `${value}` : 'Stream';
};

const incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
  const maxListeners = eventEmitter.getMaxListeners();
  if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
    return;
  }
  eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
  node_events.addAbortListener(signal, () => {
    eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
  });
};

const addReference = (channel, reference) => {
  if (reference) {
    addReferenceCount(channel);
  }
};
const addReferenceCount = channel => {
  channel.refCounted();
};
const removeReference = (channel, reference) => {
  if (reference) {
    removeReferenceCount(channel);
  }
};
const removeReferenceCount = channel => {
  channel.unrefCounted();
};
const undoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    removeReferenceCount(channel);
    removeReferenceCount(channel);
  }
};
const redoAddedReferences = (channel, isSubprocess) => {
  if (isSubprocess) {
    addReferenceCount(channel);
    addReferenceCount(channel);
  }
};

const onMessage = function () {
  var _ref = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter
  }, wrappedMessage) {
    if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
      return;
    }
    if (!INCOMING_MESSAGES.has(anyProcess)) {
      INCOMING_MESSAGES.set(anyProcess, []);
    }
    const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
    incomingMessages.push(wrappedMessage);
    if (incomingMessages.length > 1) {
      return;
    }
    while (incomingMessages.length > 0) {
      yield waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
      yield promises.scheduler.yield();
      const message = yield handleStrictRequest({
        wrappedMessage: incomingMessages[0],
        anyProcess,
        channel,
        isSubprocess,
        ipcEmitter
      });
      incomingMessages.shift();
      ipcEmitter.emit('message', message);
      ipcEmitter.emit('message:done');
    }
  });
  return function onMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const onDisconnect = function () {
  var _ref2 = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter,
    boundOnMessage
  }) {
    abortOnDisconnect();
    const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
    while ((incomingMessages == null ? void 0 : incomingMessages.length) > 0) {
      yield node_events.once(ipcEmitter, 'message:done');
    }
    anyProcess.removeListener('message', boundOnMessage);
    redoAddedReferences(channel, isSubprocess);
    ipcEmitter.connected = false;
    ipcEmitter.emit('disconnect');
  });
  return function onDisconnect(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
const INCOMING_MESSAGES = new WeakMap();

const getIpcEmitter = (anyProcess, channel, isSubprocess) => {
  if (IPC_EMITTERS.has(anyProcess)) {
    return IPC_EMITTERS.get(anyProcess);
  }
  const ipcEmitter = new node_events.EventEmitter();
  ipcEmitter.connected = true;
  IPC_EMITTERS.set(anyProcess, ipcEmitter);
  forwardEvents({
    ipcEmitter,
    anyProcess,
    channel,
    isSubprocess
  });
  return ipcEmitter;
};
const IPC_EMITTERS = new WeakMap();
const forwardEvents = ({
  ipcEmitter,
  anyProcess,
  channel,
  isSubprocess
}) => {
  const boundOnMessage = onMessage.bind(undefined, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter
  });
  anyProcess.on('message', boundOnMessage);
  anyProcess.once('disconnect', onDisconnect.bind(undefined, {
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter,
    boundOnMessage
  }));
  undoAddedReferences(channel, isSubprocess);
};
const isConnected = anyProcess => {
  const ipcEmitter = IPC_EMITTERS.get(anyProcess);
  return ipcEmitter === undefined ? anyProcess.channel !== null : ipcEmitter.connected;
};

const handleSendStrict = ({
  anyProcess,
  channel,
  isSubprocess,
  message,
  strict
}) => {
  if (!strict) {
    return message;
  }
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
  return {
    id: count++,
    type: REQUEST_TYPE,
    message,
    hasListeners
  };
};
let count = 0n;
const validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
  if ((wrappedMessage == null ? void 0 : wrappedMessage.type) !== REQUEST_TYPE || wrappedMessage.hasListeners) {
    return;
  }
  for (const {
    id
  } of outgoingMessages) {
    if (id !== undefined) {
      STRICT_RESPONSES[id].resolve({
        isDeadlock: true,
        hasListeners: false
      });
    }
  }
};
const handleStrictRequest = function () {
  var _ref = _asyncToGenerator(function* ({
    wrappedMessage,
    anyProcess,
    channel,
    isSubprocess,
    ipcEmitter
  }) {
    if ((wrappedMessage == null ? void 0 : wrappedMessage.type) !== REQUEST_TYPE || !anyProcess.connected) {
      return wrappedMessage;
    }
    const {
      id,
      message
    } = wrappedMessage;
    const response = {
      id,
      type: RESPONSE_TYPE,
      message: hasMessageListeners(anyProcess, ipcEmitter)
    };
    try {
      yield sendMessage({
        anyProcess,
        channel,
        isSubprocess,
        ipc: true
      }, response);
    } catch (error) {
      ipcEmitter.emit('strict:error', error);
    }
    return message;
  });
  return function handleStrictRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
const handleStrictResponse = wrappedMessage => {
  var _STRICT_RESPONSES$id;
  if ((wrappedMessage == null ? void 0 : wrappedMessage.type) !== RESPONSE_TYPE) {
    return false;
  }
  const {
    id,
    message: hasListeners
  } = wrappedMessage;
  (_STRICT_RESPONSES$id = STRICT_RESPONSES[id]) == null || _STRICT_RESPONSES$id.resolve({
    isDeadlock: false,
    hasListeners
  });
  return true;
};
const waitForStrictResponse = function () {
  var _ref2 = _asyncToGenerator(function* (wrappedMessage, anyProcess, isSubprocess) {
    if ((wrappedMessage == null ? void 0 : wrappedMessage.type) !== REQUEST_TYPE) {
      return;
    }
    const deferred = createDeferred();
    STRICT_RESPONSES[wrappedMessage.id] = deferred;
    const controller = new AbortController();
    try {
      const {
        isDeadlock,
        hasListeners
      } = yield Promise.race([deferred, throwOnDisconnect$1(anyProcess, isSubprocess, controller)]);
      if (isDeadlock) {
        throwOnStrictDeadlockError(isSubprocess);
      }
      if (!hasListeners) {
        throwOnMissingStrict(isSubprocess);
      }
    } finally {
      controller.abort();
      delete STRICT_RESPONSES[wrappedMessage.id];
    }
  });
  return function waitForStrictResponse(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
const STRICT_RESPONSES = {};
const throwOnDisconnect$1 = function () {
  var _ref3 = _asyncToGenerator(function* (anyProcess, isSubprocess, {
    signal
  }) {
    incrementMaxListeners(anyProcess, 1, signal);
    yield node_events.once(anyProcess, 'disconnect', {
      signal
    });
    throwOnStrictDisconnect(isSubprocess);
  });
  return function throwOnDisconnect(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
const REQUEST_TYPE = 'execa:ipc:request';
const RESPONSE_TYPE = 'execa:ipc:response';

const startSendMessage = (anyProcess, wrappedMessage, strict) => {
  if (!OUTGOING_MESSAGES.has(anyProcess)) {
    OUTGOING_MESSAGES.set(anyProcess, new Set());
  }
  const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
  const onMessageSent = createDeferred();
  const id = strict ? wrappedMessage.id : undefined;
  const outgoingMessage = {
    onMessageSent,
    id
  };
  outgoingMessages.add(outgoingMessage);
  return {
    outgoingMessages,
    outgoingMessage
  };
};
const endSendMessage = ({
  outgoingMessages,
  outgoingMessage
}) => {
  outgoingMessages.delete(outgoingMessage);
  outgoingMessage.onMessageSent.resolve();
};
const waitForOutgoingMessages = function () {
  var _ref = _asyncToGenerator(function* (anyProcess, ipcEmitter, wrappedMessage) {
    while (!hasMessageListeners(anyProcess, ipcEmitter) && ((_OUTGOING_MESSAGES$ge = OUTGOING_MESSAGES.get(anyProcess)) == null ? void 0 : _OUTGOING_MESSAGES$ge.size) > 0) {
      var _OUTGOING_MESSAGES$ge;
      const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
      validateStrictDeadlock(outgoingMessages, wrappedMessage);
      yield Promise.all(outgoingMessages.map(({
        onMessageSent
      }) => onMessageSent));
    }
  });
  return function waitForOutgoingMessages(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const OUTGOING_MESSAGES = new WeakMap();
const hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount('message') > getMinListenerCount(anyProcess);
const getMinListenerCount = anyProcess => SUBPROCESS_OPTIONS.has(anyProcess) && !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, 'ipc') ? 1 : 0;

const sendMessage = ({
  anyProcess,
  channel,
  isSubprocess,
  ipc
}, message, {
  strict = false
} = {}) => {
  const methodName = 'sendMessage';
  validateIpcMethod({
    methodName,
    isSubprocess,
    ipc,
    isConnected: anyProcess.connected
  });
  return sendMessageAsync({
    anyProcess,
    channel,
    methodName,
    isSubprocess,
    message,
    strict
  });
};
const sendMessageAsync = function () {
  var _ref = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    methodName,
    isSubprocess,
    message,
    strict
  }) {
    const wrappedMessage = handleSendStrict({
      anyProcess,
      channel,
      isSubprocess,
      message,
      strict
    });
    const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
    try {
      yield sendOneMessage({
        anyProcess,
        methodName,
        isSubprocess,
        wrappedMessage,
        message
      });
    } catch (error) {
      disconnect(anyProcess);
      throw error;
    } finally {
      endSendMessage(outgoingMessagesState);
    }
  });
  return function sendMessageAsync(_x) {
    return _ref.apply(this, arguments);
  };
}();
const sendOneMessage = function () {
  var _ref2 = _asyncToGenerator(function* ({
    anyProcess,
    methodName,
    isSubprocess,
    wrappedMessage,
    message
  }) {
    const sendMethod = getSendMethod(anyProcess);
    try {
      yield Promise.all([waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess), sendMethod(wrappedMessage)]);
    } catch (error) {
      handleEpipeError({
        error,
        methodName,
        isSubprocess
      });
      handleSerializationError({
        error,
        methodName,
        isSubprocess,
        message
      });
      throw error;
    }
  });
  return function sendOneMessage(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const getSendMethod = anyProcess => {
  if (PROCESS_SEND_METHODS.has(anyProcess)) {
    return PROCESS_SEND_METHODS.get(anyProcess);
  }
  const sendMethod = node_util.promisify(anyProcess.send.bind(anyProcess));
  PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
  return sendMethod;
};
const PROCESS_SEND_METHODS = new WeakMap();

const sendAbort = (subprocess, message) => {
  const methodName = 'cancelSignal';
  validateConnection(methodName, false, subprocess.connected);
  return sendOneMessage({
    anyProcess: subprocess,
    methodName,
    isSubprocess: false,
    wrappedMessage: {
      type: GRACEFUL_CANCEL_TYPE,
      message
    },
    message
  });
};
const getCancelSignal = function () {
  var _ref = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    isSubprocess,
    ipc
  }) {
    yield startIpc({
      anyProcess,
      channel,
      isSubprocess,
      ipc
    });
    return cancelController.signal;
  });
  return function getCancelSignal(_x) {
    return _ref.apply(this, arguments);
  };
}();
const startIpc = function () {
  var _ref2 = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    isSubprocess,
    ipc
  }) {
    if (cancelListening) {
      return;
    }
    cancelListening = true;
    if (!ipc) {
      throwOnMissingParent();
      return;
    }
    if (channel === null) {
      abortOnDisconnect();
      return;
    }
    getIpcEmitter(anyProcess, channel, isSubprocess);
    yield promises.scheduler.yield();
  });
  return function startIpc(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
let cancelListening = false;
const handleAbort = wrappedMessage => {
  if ((wrappedMessage == null ? void 0 : wrappedMessage.type) !== GRACEFUL_CANCEL_TYPE) {
    return false;
  }
  cancelController.abort(wrappedMessage.message);
  return true;
};
const GRACEFUL_CANCEL_TYPE = 'execa:ipc:cancel';
const abortOnDisconnect = () => {
  cancelController.abort(getAbortDisconnectError());
};
const cancelController = new AbortController();

const validateGracefulCancel = ({
  gracefulCancel,
  cancelSignal,
  ipc,
  serialization
}) => {
  if (!gracefulCancel) {
    return;
  }
  if (cancelSignal === undefined) {
    throw new Error('The `cancelSignal` option must be defined when setting the `gracefulCancel` option.');
  }
  if (!ipc) {
    throw new Error('The `ipc` option cannot be false when setting the `gracefulCancel` option.');
  }
  if (serialization === 'json') {
    throw new Error('The `serialization` option cannot be \'json\' when setting the `gracefulCancel` option.');
  }
};
const throwOnGracefulCancel = ({
  subprocess,
  cancelSignal,
  gracefulCancel,
  forceKillAfterDelay,
  context,
  controller
}) => gracefulCancel ? [sendOnAbort({
  subprocess,
  cancelSignal,
  forceKillAfterDelay,
  context,
  controller
})] : [];
const sendOnAbort = function () {
  var _ref = _asyncToGenerator(function* ({
    subprocess,
    cancelSignal,
    forceKillAfterDelay,
    context,
    controller: {
      signal
    }
  }) {
    var _context$terminationR;
    yield onAbortedSignal(cancelSignal, signal);
    const reason = getReason(cancelSignal);
    yield sendAbort(subprocess, reason);
    killOnTimeout({
      kill: subprocess.kill,
      forceKillAfterDelay,
      context,
      controllerSignal: signal
    });
    (_context$terminationR = context.terminationReason) != null ? _context$terminationR : context.terminationReason = 'gracefulCancel';
    throw cancelSignal.reason;
  });
  return function sendOnAbort(_x) {
    return _ref.apply(this, arguments);
  };
}();
const getReason = ({
  reason
}) => {
  if (!(reason instanceof DOMException)) {
    return reason;
  }
  const error = new Error(reason.message);
  Object.defineProperty(error, 'stack', {
    value: reason.stack,
    enumerable: false,
    configurable: true,
    writable: true
  });
  return error;
};

const validateTimeout = ({
  timeout
}) => {
  if (timeout !== undefined && (!Number.isFinite(timeout) || timeout < 0)) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }
};
const throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === undefined ? [] : [killAfterTimeout(subprocess, timeout, context, controller)];
const killAfterTimeout = function () {
  var _ref = _asyncToGenerator(function* (subprocess, timeout, context, {
    signal
  }) {
    var _context$terminationR;
    yield promises.setTimeout(timeout, undefined, {
      signal
    });
    (_context$terminationR = context.terminationReason) != null ? _context$terminationR : context.terminationReason = 'timeout';
    subprocess.kill();
    throw new DiscardedError();
  });
  return function killAfterTimeout(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

const _excluded$5 = ["node", "nodePath", "nodeOptions", "cwd", "execPath"];
const mapNode = ({
  options
}) => {
  if (options.node === false) {
    throw new TypeError('The "node" option cannot be false with `execaNode()`.');
  }
  return {
    options: Object.assign(Object.assign({}, options), {}, {
      node: true
    })
  };
};
const handleNodeOption = (file, commandArguments, _ref) => {
  let {
      node: shouldHandleNode = false,
      nodePath = process$6.execPath,
      nodeOptions = process$6.execArgv.filter(nodeOption => !nodeOption.startsWith('--inspect')),
      cwd,
      execPath: formerNodePath
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$5);
  if (formerNodePath !== undefined) {
    throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
  }
  const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
  const resolvedNodePath = path$5.resolve(cwd, normalizedNodePath);
  const newOptions = Object.assign(Object.assign({}, options), {}, {
    nodePath: resolvedNodePath,
    node: shouldHandleNode,
    cwd
  });
  if (!shouldHandleNode) {
    return [file, commandArguments, newOptions];
  }
  if (path$5.basename(file, '.exe') === 'node') {
    throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
  }
  return [resolvedNodePath, [...nodeOptions, file, ...commandArguments], Object.assign(Object.assign({
    ipc: true
  }, newOptions), {}, {
    shell: false
  })];
};

const validateIpcInputOption = ({
  ipcInput,
  ipc,
  serialization
}) => {
  if (ipcInput === undefined) {
    return;
  }
  if (!ipc) {
    throw new Error('The `ipcInput` option cannot be set unless the `ipc` option is `true`.');
  }
  validateIpcInput[serialization](ipcInput);
};
const validateAdvancedInput = ipcInput => {
  try {
    node_v8.serialize(ipcInput);
  } catch (error) {
    throw new Error('The `ipcInput` option is not serializable with a structured clone.', {
      cause: error
    });
  }
};
const validateJsonInput = ipcInput => {
  try {
    JSON.stringify(ipcInput);
  } catch (error) {
    throw new Error('The `ipcInput` option is not serializable with JSON.', {
      cause: error
    });
  }
};
const validateIpcInput = {
  advanced: validateAdvancedInput,
  json: validateJsonInput
};
const sendIpcInput = function () {
  var _ref = _asyncToGenerator(function* (subprocess, ipcInput) {
    if (ipcInput === undefined) {
      return;
    }
    yield subprocess.sendMessage(ipcInput);
  });
  return function sendIpcInput(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const validateEncoding = ({
  encoding
}) => {
  if (ENCODINGS.has(encoding)) {
    return;
  }
  const correctEncoding = getCorrectEncoding(encoding);
  if (correctEncoding !== undefined) {
    throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
  }
  const correctEncodings = [...ENCODINGS].map(correctEncoding => serializeEncoding(correctEncoding)).join(', ');
  throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
};
const TEXT_ENCODINGS = new Set(['utf8', 'utf16le']);
const BINARY_ENCODINGS = new Set(['buffer', 'hex', 'base64', 'base64url', 'latin1', 'ascii']);
const ENCODINGS = new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);
const getCorrectEncoding = encoding => {
  if (encoding === null) {
    return 'buffer';
  }
  if (typeof encoding !== 'string') {
    return;
  }
  const lowerEncoding = encoding.toLowerCase();
  if (lowerEncoding in ENCODING_ALIASES) {
    return ENCODING_ALIASES[lowerEncoding];
  }
  if (ENCODINGS.has(lowerEncoding)) {
    return lowerEncoding;
  }
};
const ENCODING_ALIASES = {
  'utf-8': 'utf8',
  'utf-16le': 'utf16le',
  'ucs-2': 'utf16le',
  ucs2: 'utf16le',
  binary: 'latin1'
};
const serializeEncoding = encoding => typeof encoding === 'string' ? `"${encoding}"` : String(encoding);

const normalizeCwd = (cwd = getDefaultCwd()) => {
  const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
  return path$5.resolve(cwdString);
};
const getDefaultCwd = () => {
  try {
    return process$6.cwd();
  } catch (error) {
    error.message = `The current directory does not exist.\n${error.message}`;
    throw error;
  }
};
const fixCwdError = (originalMessage, cwd) => {
  if (cwd === getDefaultCwd()) {
    return originalMessage;
  }
  let cwdStat;
  try {
    cwdStat = node_fs.statSync(cwd);
  } catch (error) {
    return `The "cwd" option is invalid: ${cwd}.\n${error.message}\n${originalMessage}`;
  }
  if (!cwdStat.isDirectory()) {
    return `The "cwd" option is not a directory: ${cwd}.\n${originalMessage}`;
  }
  return originalMessage;
};

const _excluded$4 = ["extendEnv", "preferLocal", "cwd", "localDir", "encoding", "reject", "cleanup", "all", "windowsHide", "killSignal", "forceKillAfterDelay", "gracefulCancel", "ipcInput", "ipc", "serialization"];
const normalizeOptions = (filePath, rawArguments, rawOptions) => {
  rawOptions.cwd = normalizeCwd(rawOptions.cwd);
  const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);
  const {
    command: file,
    args: commandArguments,
    options: initialOptions
  } = crossSpawn._parse(processedFile, processedArguments, processedOptions);
  const fdOptions = normalizeFdSpecificOptions(initialOptions);
  const options = addDefaultOptions(fdOptions);
  validateTimeout(options);
  validateEncoding(options);
  validateIpcInputOption(options);
  validateCancelSignal(options);
  validateGracefulCancel(options);
  options.shell = normalizeFileUrl(options.shell);
  options.env = getEnv(options);
  options.killSignal = normalizeKillSignal(options.killSignal);
  options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
  options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);
  if (process$6.platform === 'win32' && path$5.basename(file, '.exe') === 'cmd') {
    commandArguments.unshift('/q');
  }
  return {
    file,
    commandArguments,
    options
  };
};
const addDefaultOptions = _ref => {
  let {
      extendEnv = true,
      preferLocal = false,
      cwd,
      localDir: localDirectory = cwd,
      encoding = 'utf8',
      reject = true,
      cleanup = true,
      all = false,
      windowsHide = true,
      killSignal = 'SIGTERM',
      forceKillAfterDelay = true,
      gracefulCancel = false,
      ipcInput,
      ipc = ipcInput !== undefined || gracefulCancel,
      serialization = 'advanced'
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$4);
  return Object.assign(Object.assign({}, options), {}, {
    extendEnv,
    preferLocal,
    cwd,
    localDirectory,
    encoding,
    reject,
    cleanup,
    all,
    windowsHide,
    killSignal,
    forceKillAfterDelay,
    gracefulCancel,
    ipcInput,
    ipc,
    serialization
  });
};
const getEnv = ({
  env: envOption,
  extendEnv,
  preferLocal,
  node,
  localDirectory,
  nodePath
}) => {
  const env = extendEnv ? Object.assign(Object.assign({}, process$6.env), envOption) : envOption;
  if (preferLocal || node) {
    return npmRunPathEnv({
      env,
      cwd: localDirectory,
      execPath: nodePath,
      preferLocal,
      addExecPath: node
    });
  }
  return env;
};

function stripFinalNewline(input) {
  if (typeof input === 'string') {
    return stripFinalNewlineString(input);
  }
  if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
    throw new Error('Input must be a string or a Uint8Array');
  }
  return stripFinalNewlineBinary(input);
}
const stripFinalNewlineString = input => input.at(-1) === LF ? input.slice(0, input.at(-2) === CR ? -2 : -1) : input;
const stripFinalNewlineBinary = input => input.at(-1) === LF_BINARY ? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1) : input;
const LF = '\n';
const LF_BINARY = LF.codePointAt(0);
const CR = '\r';
const CR_BINARY = CR.codePointAt(0);

var global$3 = global$x;

var path$1 = global$3;

var wellKnownSymbolWrapped = {};

var wellKnownSymbol = wellKnownSymbol$n;

wellKnownSymbolWrapped.f = wellKnownSymbol;

var path = path$1;
var hasOwn = hasOwnProperty_1;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineProperty = objectDefineProperty.f;

var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

var defineWellKnownSymbol = wellKnownSymbolDefine;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

var $$2 = _export;
var global$2 = global$x;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$2({ global: true, forced: global$2.globalThis !== global$2 }, {
  globalThis: global$2
});

const getStreamContents$1 = function () {
  var _ref = _asyncToGenerator(function* (stream, {
    init,
    convertChunk,
    getSize,
    truncateChunk,
    addChunk,
    getFinalChunk,
    finalize
  }, {
    maxBuffer = Number.POSITIVE_INFINITY
  } = {}) {
    if (!isAsyncIterable(stream)) {
      throw new Error('The first argument must be a Readable, a ReadableStream, or an async iterable.');
    }
    const state = init();
    state.length = 0;
    try {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = _asyncIterator(stream), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
          const chunk = _step.value;
          {
            const chunkType = getChunkType(chunk);
            const convertedChunk = convertChunk[chunkType](chunk, state);
            appendChunk({
              convertedChunk,
              state,
              getSize,
              truncateChunk,
              addChunk,
              maxBuffer
            });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      appendFinalChunk({
        state,
        convertChunk,
        getSize,
        truncateChunk,
        addChunk,
        getFinalChunk,
        maxBuffer
      });
      return finalize(state);
    } catch (error) {
      error.bufferedData = finalize(state);
      throw error;
    }
  });
  return function getStreamContents(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const appendFinalChunk = ({
  state,
  getSize,
  truncateChunk,
  addChunk,
  getFinalChunk,
  maxBuffer
}) => {
  const convertedChunk = getFinalChunk(state);
  if (convertedChunk !== undefined) {
    appendChunk({
      convertedChunk,
      state,
      getSize,
      truncateChunk,
      addChunk,
      maxBuffer
    });
  }
};
const appendChunk = ({
  convertedChunk,
  state,
  getSize,
  truncateChunk,
  addChunk,
  maxBuffer
}) => {
  const chunkSize = getSize(convertedChunk);
  const newLength = state.length + chunkSize;
  if (newLength <= maxBuffer) {
    addNewChunk(convertedChunk, state, addChunk, newLength);
    return;
  }
  const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
  if (truncatedChunk !== undefined) {
    addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
  }
  throw new MaxBufferError();
};
const addNewChunk = (convertedChunk, state, addChunk, newLength) => {
  state.contents = addChunk(convertedChunk, state, newLength);
  state.length = newLength;
};
const isAsyncIterable = stream => typeof stream === 'object' && stream !== null && typeof stream[Symbol.asyncIterator] === 'function';
const getChunkType = chunk => {
  var _globalThis$Buffer;
  const typeOfChunk = typeof chunk;
  if (typeOfChunk === 'string') {
    return 'string';
  }
  if (typeOfChunk !== 'object' || chunk === null) {
    return 'others';
  }
  if ((_globalThis$Buffer = globalThis.Buffer) != null && _globalThis$Buffer.isBuffer(chunk)) {
    return 'buffer';
  }
  const prototypeName = objectToString.call(chunk);
  if (prototypeName === '[object ArrayBuffer]') {
    return 'arrayBuffer';
  }
  if (prototypeName === '[object DataView]') {
    return 'dataView';
  }
  if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString.call(chunk.buffer) === '[object ArrayBuffer]') {
    return 'typedArray';
  }
  return 'others';
};
const {
  toString: objectToString
} = Object.prototype;
class MaxBufferError extends Error {
  constructor() {
    super('maxBuffer exceeded');
    _defineProperty(this, "name", 'MaxBufferError');
  }
}

const identity = value => value;
const noop$1 = () => undefined;
const getContentsProp = ({
  contents
}) => contents;
const throwObjectStream = chunk => {
  throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};
const getLengthProp = convertedChunk => convertedChunk.length;

function getStreamAsArray(_x, _x2) {
  return _getStreamAsArray.apply(this, arguments);
}
function _getStreamAsArray() {
  _getStreamAsArray = _asyncToGenerator(function* (stream, options) {
    return getStreamContents$1(stream, arrayMethods, options);
  });
  return _getStreamAsArray.apply(this, arguments);
}
const initArray = () => ({
  contents: []
});
const increment = () => 1;
const addArrayChunk = (convertedChunk, {
  contents
}) => {
  contents.push(convertedChunk);
  return contents;
};
const arrayMethods = {
  init: initArray,
  convertChunk: {
    string: identity,
    buffer: identity,
    arrayBuffer: identity,
    dataView: identity,
    typedArray: identity,
    others: identity
  },
  getSize: increment,
  truncateChunk: noop$1,
  addChunk: addArrayChunk,
  getFinalChunk: noop$1,
  finalize: getContentsProp
};

function getStreamAsArrayBuffer(_x, _x2) {
  return _getStreamAsArrayBuffer.apply(this, arguments);
}
function _getStreamAsArrayBuffer() {
  _getStreamAsArrayBuffer = _asyncToGenerator(function* (stream, options) {
    return getStreamContents$1(stream, arrayBufferMethods, options);
  });
  return _getStreamAsArrayBuffer.apply(this, arguments);
}
const initArrayBuffer = () => ({
  contents: new ArrayBuffer(0)
});
const useTextEncoder = chunk => textEncoder.encode(chunk);
const textEncoder = new TextEncoder();
const useUint8Array = chunk => new Uint8Array(chunk);
const useUint8ArrayWithOffset = chunk => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
const truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
const addArrayBufferChunk = (convertedChunk, {
  contents,
  length: previousLength
}, length) => {
  const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
  new Uint8Array(newContents).set(convertedChunk, previousLength);
  return newContents;
};
const resizeArrayBufferSlow = (contents, length) => {
  if (length <= contents.byteLength) {
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
const resizeArrayBuffer = (contents, length) => {
  if (length <= contents.maxByteLength) {
    contents.resize(length);
    return contents;
  }
  const arrayBuffer = new ArrayBuffer(length, {
    maxByteLength: getNewContentsLength(length)
  });
  new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
  return arrayBuffer;
};
const getNewContentsLength = length => Math.pow(SCALE_FACTOR, Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR)));
const SCALE_FACTOR = 2;
const finalizeArrayBuffer = ({
  contents,
  length
}) => hasArrayBufferResize() ? contents : contents.slice(0, length);
const hasArrayBufferResize = () => 'resize' in ArrayBuffer.prototype;
const arrayBufferMethods = {
  init: initArrayBuffer,
  convertChunk: {
    string: useTextEncoder,
    buffer: useUint8Array,
    arrayBuffer: useUint8Array,
    dataView: useUint8ArrayWithOffset,
    typedArray: useUint8ArrayWithOffset,
    others: throwObjectStream
  },
  getSize: getLengthProp,
  truncateChunk: truncateArrayBufferChunk,
  addChunk: addArrayBufferChunk,
  getFinalChunk: noop$1,
  finalize: finalizeArrayBuffer
};

function getStreamAsString(_x, _x2) {
  return _getStreamAsString.apply(this, arguments);
}
function _getStreamAsString() {
  _getStreamAsString = _asyncToGenerator(function* (stream, options) {
    return getStreamContents$1(stream, stringMethods, options);
  });
  return _getStreamAsString.apply(this, arguments);
}
const initString = () => ({
  contents: '',
  textDecoder: new TextDecoder()
});
const useTextDecoder = (chunk, {
  textDecoder
}) => textDecoder.decode(chunk, {
  stream: true
});
const addStringChunk = (convertedChunk, {
  contents
}) => contents + convertedChunk;
const truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
const getFinalStringChunk = ({
  textDecoder
}) => {
  const finalChunk = textDecoder.decode();
  return finalChunk === '' ? undefined : finalChunk;
};
const stringMethods = {
  init: initString,
  convertChunk: {
    string: identity,
    buffer: useTextDecoder,
    arrayBuffer: useTextDecoder,
    dataView: useTextDecoder,
    typedArray: useTextDecoder,
    others: throwObjectStream
  },
  getSize: getLengthProp,
  truncateChunk: truncateStringChunk,
  addChunk: addStringChunk,
  getFinalChunk: getFinalStringChunk,
  finalize: getContentsProp
};

const handleMaxBuffer = ({
  error,
  stream,
  readableObjectMode,
  lines,
  encoding,
  fdNumber
}) => {
  if (!(error instanceof MaxBufferError)) {
    throw error;
  }
  if (fdNumber === 'all') {
    return error;
  }
  const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
  error.maxBufferInfo = {
    fdNumber,
    unit
  };
  stream.destroy();
  throw error;
};
const getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
  if (readableObjectMode) {
    return 'objects';
  }
  if (lines) {
    return 'lines';
  }
  if (encoding === 'buffer') {
    return 'bytes';
  }
  return 'characters';
};
const checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
  if (ipcOutput.length !== maxBuffer) {
    return;
  }
  const error = new MaxBufferError();
  error.maxBufferInfo = {
    fdNumber: 'ipc'
  };
  throw error;
};
const getMaxBufferMessage = (error, maxBuffer) => {
  const {
    streamName,
    threshold,
    unit
  } = getMaxBufferInfo(error, maxBuffer);
  return `Command's ${streamName} was larger than ${threshold} ${unit}`;
};
const getMaxBufferInfo = (error, maxBuffer) => {
  if ((error == null ? void 0 : error.maxBufferInfo) === undefined) {
    return {
      streamName: 'output',
      threshold: maxBuffer[1],
      unit: 'bytes'
    };
  }
  const {
    maxBufferInfo: {
      fdNumber,
      unit
    }
  } = error;
  delete error.maxBufferInfo;
  const threshold = getFdSpecificValue(maxBuffer, fdNumber);
  if (fdNumber === 'ipc') {
    return {
      streamName: 'IPC output',
      threshold,
      unit: 'messages'
    };
  }
  return {
    streamName: getStreamName(fdNumber),
    threshold,
    unit
  };
};
const isMaxBufferSync = (resultError, output, maxBuffer) => (resultError == null ? void 0 : resultError.code) === 'ENOBUFS' && output !== null && output.some(result => result !== null && result.length > getMaxBufferSync(maxBuffer));
const truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
  if (!isMaxBuffer) {
    return result;
  }
  const maxBufferValue = getMaxBufferSync(maxBuffer);
  return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
};
const getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;

const createMessages = ({
  stdio,
  all,
  ipcOutput,
  originalError,
  signal,
  signalDescription,
  exitCode,
  escapedCommand,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal,
  maxBuffer,
  timeout,
  cwd
}) => {
  const errorCode = originalError == null ? void 0 : originalError.code;
  const prefix = getErrorPrefix({
    originalError,
    timedOut,
    timeout,
    isMaxBuffer,
    maxBuffer,
    errorCode,
    signal,
    signalDescription,
    exitCode,
    isCanceled,
    isGracefullyCanceled,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal
  });
  const originalMessage = getOriginalMessage(originalError, cwd);
  const suffix = originalMessage === undefined ? '' : `\n${originalMessage}`;
  const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
  const messageStdio = all === undefined ? [stdio[2], stdio[1]] : [all];
  const message = [shortMessage, ...messageStdio, ...stdio.slice(3), ipcOutput.map(ipcMessage => serializeIpcMessage(ipcMessage)).join('\n')].map(messagePart => escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))).filter(Boolean).join('\n\n');
  return {
    originalMessage,
    shortMessage,
    message
  };
};
const getErrorPrefix = ({
  originalError,
  timedOut,
  timeout,
  isMaxBuffer,
  maxBuffer,
  errorCode,
  signal,
  signalDescription,
  exitCode,
  isCanceled,
  isGracefullyCanceled,
  isForcefullyTerminated,
  forceKillAfterDelay,
  killSignal
}) => {
  const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);
  if (timedOut) {
    return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
  }
  if (isGracefullyCanceled) {
    if (signal === undefined) {
      return `Command was gracefully canceled with exit code ${exitCode}`;
    }
    return isForcefullyTerminated ? `Command was gracefully canceled${forcefulSuffix}` : `Command was gracefully canceled with ${signal} (${signalDescription})`;
  }
  if (isCanceled) {
    return `Command was canceled${forcefulSuffix}`;
  }
  if (isMaxBuffer) {
    return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
  }
  if (errorCode !== undefined) {
    return `Command failed with ${errorCode}${forcefulSuffix}`;
  }
  if (isForcefullyTerminated) {
    return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
  }
  if (signal !== undefined) {
    return `Command was killed with ${signal} (${signalDescription})`;
  }
  if (exitCode !== undefined) {
    return `Command failed with exit code ${exitCode}`;
  }
  return 'Command failed';
};
const getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds` : '';
const getOriginalMessage = (originalError, cwd) => {
  var _originalError$messag;
  if (originalError instanceof DiscardedError) {
    return;
  }
  const originalMessage = isExecaError(originalError) ? originalError.originalMessage : String((_originalError$messag = originalError == null ? void 0 : originalError.message) != null ? _originalError$messag : originalError);
  const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
  return escapedOriginalMessage === '' ? undefined : escapedOriginalMessage;
};
const serializeIpcMessage = ipcMessage => typeof ipcMessage === 'string' ? ipcMessage : node_util.inspect(ipcMessage);
const serializeMessagePart = messagePart => Array.isArray(messagePart) ? messagePart.map(messageItem => stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join('\n') : serializeMessageItem(messagePart);
const serializeMessageItem = messageItem => {
  if (typeof messageItem === 'string') {
    return messageItem;
  }
  if (isUint8Array(messageItem)) {
    return uint8ArrayToString(messageItem);
  }
  return '';
};

const makeSuccessResult = ({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options: {
    cwd
  },
  startTime
}) => omitUndefinedProperties({
  command,
  escapedCommand,
  cwd,
  durationMs: getDurationMs(startTime),
  failed: false,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isTerminated: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  exitCode: 0,
  stdout: stdio[1],
  stderr: stdio[2],
  all,
  stdio,
  ipcOutput,
  pipedFrom: []
});
const makeEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  isSync
}) => makeError({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut: false,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer: false,
  isForcefullyTerminated: false,
  stdio: Array.from({
    length: fileDescriptors.length
  }),
  ipcOutput: [],
  options,
  isSync
});
const makeError = ({
  error: originalError,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode: rawExitCode,
  signal: rawSignal,
  stdio,
  all,
  ipcOutput,
  options: {
    timeoutDuration,
    timeout = timeoutDuration,
    forceKillAfterDelay,
    killSignal,
    cwd,
    maxBuffer
  },
  isSync
}) => {
  const {
    exitCode,
    signal,
    signalDescription
  } = normalizeExitPayload(rawExitCode, rawSignal);
  const {
    originalMessage,
    shortMessage,
    message
  } = createMessages({
    stdio,
    all,
    ipcOutput,
    originalError,
    signal,
    signalDescription,
    exitCode,
    escapedCommand,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    forceKillAfterDelay,
    killSignal,
    maxBuffer,
    timeout,
    cwd
  });
  const error = getFinalError(originalError, message, isSync);
  Object.assign(error, getErrorProperties({
    error,
    command,
    escapedCommand,
    startTime,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isMaxBuffer,
    isForcefullyTerminated,
    exitCode,
    signal,
    signalDescription,
    stdio,
    all,
    ipcOutput,
    cwd,
    originalMessage,
    shortMessage
  }));
  return error;
};
const getErrorProperties = ({
  error,
  command,
  escapedCommand,
  startTime,
  timedOut,
  isCanceled,
  isGracefullyCanceled,
  isMaxBuffer,
  isForcefullyTerminated,
  exitCode,
  signal,
  signalDescription,
  stdio,
  all,
  ipcOutput,
  cwd,
  originalMessage,
  shortMessage
}) => {
  var _error$cause;
  return omitUndefinedProperties({
    shortMessage,
    originalMessage,
    command,
    escapedCommand,
    cwd,
    durationMs: getDurationMs(startTime),
    failed: true,
    timedOut,
    isCanceled,
    isGracefullyCanceled,
    isTerminated: signal !== undefined,
    isMaxBuffer,
    isForcefullyTerminated,
    exitCode,
    signal,
    signalDescription,
    code: (_error$cause = error.cause) == null ? void 0 : _error$cause.code,
    stdout: stdio[1],
    stderr: stdio[2],
    all,
    stdio,
    ipcOutput,
    pipedFrom: []
  });
};
const omitUndefinedProperties = result => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== undefined));
const normalizeExitPayload = (rawExitCode, rawSignal) => {
  const exitCode = rawExitCode === null ? undefined : rawExitCode;
  const signal = rawSignal === null ? undefined : rawSignal;
  const signalDescription = signal === undefined ? undefined : getSignalDescription(rawSignal);
  return {
    exitCode,
    signal,
    signalDescription
  };
};

const toZeroIfInfinity = value => Number.isFinite(value) ? value : 0;
function parseNumber(milliseconds) {
  return {
    days: Math.trunc(milliseconds / 86400000),
    hours: Math.trunc(milliseconds / 3600000 % 24),
    minutes: Math.trunc(milliseconds / 60000 % 60),
    seconds: Math.trunc(milliseconds / 1000 % 60),
    milliseconds: Math.trunc(milliseconds % 1000),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1000) % 1000),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1000)
  };
}
function parseBigint(milliseconds) {
  return {
    days: milliseconds / 86400000n,
    hours: milliseconds / 3600000n % 24n,
    minutes: milliseconds / 60000n % 60n,
    seconds: milliseconds / 1000n % 60n,
    milliseconds: milliseconds % 1000n,
    microseconds: 0n,
    nanoseconds: 0n
  };
}
function parseMilliseconds(milliseconds) {
  switch (typeof milliseconds) {
    case 'number':
      {
        if (Number.isFinite(milliseconds)) {
          return parseNumber(milliseconds);
        }
        break;
      }
    case 'bigint':
      {
        return parseBigint(milliseconds);
      }
  }
  throw new TypeError('Expected a finite number or bigint');
}

const isZero = value => value === 0 || value === 0n;
const pluralize = (word, count) => count === 1 || count === 1n ? word : `${word}s`;
const SECOND_ROUNDING_EPSILON = 0.0000001;
const ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
function prettyMilliseconds(milliseconds, options) {
  const isBigInt = typeof milliseconds === 'bigint';
  if (!isBigInt && !Number.isFinite(milliseconds)) {
    throw new TypeError('Expected a finite number or bigint');
  }
  options = Object.assign({}, options);
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.unitCount = 1;
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  let result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * Math.pow(10, decimalDigits) + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / Math.pow(10, decimalDigits);
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    var _valueString;
    if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === 'm')) {
      return;
    }
    valueString = (_valueString = valueString) != null ? _valueString : String(value);
    if (options.colonNotation) {
      const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      valueString += options.verbose ? ' ' + pluralize(long, value) : short;
    }
    result.push(valueString);
  };
  const parsed = parseMilliseconds(milliseconds);
  const days = BigInt(parsed.days);
  add(days / 365n, 'year', 'y');
  add(days % 365n, 'day', 'd');
  add(Number(parsed.hours), 'hour', 'h');
  add(Number(parsed.minutes), 'minute', 'm');
  if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1000) {
    const seconds = Number(parsed.seconds);
    const milliseconds = Number(parsed.milliseconds);
    const microseconds = Number(parsed.microseconds);
    const nanoseconds = Number(parsed.nanoseconds);
    add(seconds, 'second', 's');
    if (options.formatSubMilliseconds) {
      add(milliseconds, 'millisecond', 'ms');
      add(microseconds, 'microsecond', 'µs');
      add(nanoseconds, 'nanosecond', 'ns');
    } else {
      const millisecondsAndBelow = milliseconds + microseconds / 1000 + nanoseconds / 1e6;
      const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === 'number' ? options.millisecondsDecimalDigits : 0;
      const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
      const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
      add(Number.parseFloat(millisecondsString), 'millisecond', 'ms', millisecondsString);
    }
  } else {
    const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1000 % 60;
    const secondsDecimalDigits = typeof options.secondsDecimalDigits === 'number' ? options.secondsDecimalDigits : 1;
    const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
    const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, '');
    add(Number.parseFloat(secondsString), 'second', 's', secondsString);
  }
  if (result.length === 0) {
    return '0' + (options.verbose ? ' milliseconds' : 'ms');
  }
  const separator = options.colonNotation ? ':' : ' ';
  if (typeof options.unitCount === 'number') {
    result = result.slice(0, Math.max(options.unitCount, 1));
  }
  return result.join(separator);
}

const logError = (result, verboseInfo) => {
  if (result.failed) {
    verboseLog({
      type: 'error',
      verboseMessage: result.shortMessage,
      verboseInfo,
      result
    });
  }
};

const logResult = (result, verboseInfo) => {
  if (!isVerbose(verboseInfo)) {
    return;
  }
  logError(result, verboseInfo);
  logDuration(result, verboseInfo);
};
const logDuration = (result, verboseInfo) => {
  const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
  verboseLog({
    type: 'duration',
    verboseMessage,
    verboseInfo,
    result
  });
};

const handleResult = (result, verboseInfo, {
  reject
}) => {
  logResult(result, verboseInfo);
  if (result.failed && reject) {
    throw result;
  }
  return result;
};

function isStream(stream, {
  checkOpen = true
} = {}) {
  return stream !== null && typeof stream === 'object' && (stream.writable || stream.readable || !checkOpen || stream.writable === undefined && stream.readable === undefined) && typeof stream.pipe === 'function';
}
function isWritableStream$1(stream, {
  checkOpen = true
} = {}) {
  return isStream(stream, {
    checkOpen
  }) && (stream.writable || !checkOpen) && typeof stream.write === 'function' && typeof stream.end === 'function' && typeof stream.writable === 'boolean' && typeof stream.writableObjectMode === 'boolean' && typeof stream.destroy === 'function' && typeof stream.destroyed === 'boolean';
}
function isReadableStream$1(stream, {
  checkOpen = true
} = {}) {
  return isStream(stream, {
    checkOpen
  }) && (stream.readable || !checkOpen) && typeof stream.read === 'function' && typeof stream.readable === 'boolean' && typeof stream.readableObjectMode === 'boolean' && typeof stream.destroy === 'function' && typeof stream.destroyed === 'boolean';
}
function isDuplexStream(stream, options) {
  return isWritableStream$1(stream, options) && isReadableStream$1(stream, options);
}

const getStdioItemType = (value, optionName) => {
  if (isAsyncGenerator(value)) {
    return 'asyncGenerator';
  }
  if (isSyncGenerator(value)) {
    return 'generator';
  }
  if (isUrl(value)) {
    return 'fileUrl';
  }
  if (isFilePathObject(value)) {
    return 'filePath';
  }
  if (isWebStream(value)) {
    return 'webStream';
  }
  if (isStream(value, {
    checkOpen: false
  })) {
    return 'native';
  }
  if (isUint8Array(value)) {
    return 'uint8Array';
  }
  if (isAsyncIterableObject(value)) {
    return 'asyncIterable';
  }
  if (isIterableObject(value)) {
    return 'iterable';
  }
  if (isTransformStream(value)) {
    return getTransformStreamType({
      transform: value
    }, optionName);
  }
  if (isTransformOptions(value)) {
    return getTransformObjectType(value, optionName);
  }
  return 'native';
};
const getTransformObjectType = (value, optionName) => {
  if (isDuplexStream(value.transform, {
    checkOpen: false
  })) {
    return getDuplexType(value, optionName);
  }
  if (isTransformStream(value.transform)) {
    return getTransformStreamType(value, optionName);
  }
  return getGeneratorObjectType(value, optionName);
};
const getDuplexType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, 'Duplex stream');
  return 'duplex';
};
const getTransformStreamType = (value, optionName) => {
  validateNonGeneratorType(value, optionName, 'web TransformStream');
  return 'webTransform';
};
const validateNonGeneratorType = ({
  final,
  binary,
  objectMode
}, optionName, typeName) => {
  checkUndefinedOption(final, `${optionName}.final`, typeName);
  checkUndefinedOption(binary, `${optionName}.binary`, typeName);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
};
const checkUndefinedOption = (value, optionName, typeName) => {
  if (value !== undefined) {
    throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
  }
};
const getGeneratorObjectType = ({
  transform,
  final,
  binary,
  objectMode
}, optionName) => {
  if (transform !== undefined && !isGenerator(transform)) {
    throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
  }
  if (isDuplexStream(final, {
    checkOpen: false
  })) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
  }
  if (isTransformStream(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
  }
  if (final !== undefined && !isGenerator(final)) {
    throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
  }
  checkBooleanOption(binary, `${optionName}.binary`);
  checkBooleanOption(objectMode, `${optionName}.objectMode`);
  return isAsyncGenerator(transform) || isAsyncGenerator(final) ? 'asyncGenerator' : 'generator';
};
const checkBooleanOption = (value, optionName) => {
  if (value !== undefined && typeof value !== 'boolean') {
    throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
  }
};
const isGenerator = value => isAsyncGenerator(value) || isSyncGenerator(value);
const isAsyncGenerator = value => Object.prototype.toString.call(value) === '[object AsyncGeneratorFunction]';
const isSyncGenerator = value => Object.prototype.toString.call(value) === '[object GeneratorFunction]';
const isTransformOptions = value => isPlainObject(value) && (value.transform !== undefined || value.final !== undefined);
const isUrl = value => Object.prototype.toString.call(value) === '[object URL]';
const isRegularUrl = value => isUrl(value) && value.protocol !== 'file:';
const isFilePathObject = value => isPlainObject(value) && Object.keys(value).length === 1 && isFilePathString(value.file);
const isFilePathString = file => typeof file === 'string';
const isUnknownStdioString = (type, value) => type === 'native' && typeof value === 'string' && !KNOWN_STDIO_STRINGS.has(value);
const KNOWN_STDIO_STRINGS = new Set(['ipc', 'ignore', 'inherit', 'overlapped', 'pipe']);
const isReadableStream = value => Object.prototype.toString.call(value) === '[object ReadableStream]';
const isWritableStream = value => Object.prototype.toString.call(value) === '[object WritableStream]';
const isWebStream = value => isReadableStream(value) || isWritableStream(value);
const isTransformStream = value => isReadableStream(value == null ? void 0 : value.readable) && isWritableStream(value == null ? void 0 : value.writable);
const isAsyncIterableObject = value => isObject(value) && typeof value[Symbol.asyncIterator] === 'function';
const isIterableObject = value => isObject(value) && typeof value[Symbol.iterator] === 'function';
const isObject = value => typeof value === 'object' && value !== null;
const TRANSFORM_TYPES = new Set(['generator', 'asyncGenerator', 'duplex', 'webTransform']);
const FILE_TYPES = new Set(['fileUrl', 'filePath', 'fileNumber']);
const SPECIAL_DUPLICATE_TYPES_SYNC = new Set(['fileUrl', 'filePath']);
const SPECIAL_DUPLICATE_TYPES = new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, 'webStream', 'nodeStream']);
const FORBID_DUPLICATE_TYPES = new Set(['webTransform', 'duplex']);
const TYPE_TO_MESSAGE = {
  generator: 'a generator',
  asyncGenerator: 'an async generator',
  fileUrl: 'a file URL',
  filePath: 'a file path string',
  fileNumber: 'a file descriptor number',
  webStream: 'a web stream',
  nodeStream: 'a Node.js stream',
  webTransform: 'a web TransformStream',
  duplex: 'a Duplex stream',
  native: 'any value',
  iterable: 'an iterable',
  asyncIterable: 'an async iterable',
  string: 'a string',
  uint8Array: 'a Uint8Array'
};

const getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === 'output' ? getOutputObjectModes(objectMode, index, newTransforms) : getInputObjectModes(objectMode, index, newTransforms);
const getOutputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = objectMode != null ? objectMode : writableObjectMode;
  return {
    writableObjectMode,
    readableObjectMode
  };
};
const getInputObjectModes = (objectMode, index, newTransforms) => {
  const writableObjectMode = index === 0 ? objectMode === true : newTransforms[index - 1].value.readableObjectMode;
  const readableObjectMode = index !== newTransforms.length - 1 && (objectMode != null ? objectMode : writableObjectMode);
  return {
    writableObjectMode,
    readableObjectMode
  };
};
const getFdObjectMode = (stdioItems, direction) => {
  const lastTransform = stdioItems.findLast(({
    type
  }) => TRANSFORM_TYPES.has(type));
  if (lastTransform === undefined) {
    return false;
  }
  return direction === 'input' ? lastTransform.value.writableObjectMode : lastTransform.value.readableObjectMode;
};

const normalizeTransforms = (stdioItems, optionName, direction, options) => [...stdioItems.filter(({
  type
}) => !TRANSFORM_TYPES.has(type)), ...getTransforms(stdioItems, optionName, direction, options)];
const getTransforms = (stdioItems, optionName, direction, {
  encoding
}) => {
  const transforms = stdioItems.filter(({
    type
  }) => TRANSFORM_TYPES.has(type));
  const newTransforms = Array.from({
    length: transforms.length
  });
  for (const [index, stdioItem] of Object.entries(transforms)) {
    newTransforms[index] = normalizeTransform({
      stdioItem,
      index: Number(index),
      newTransforms,
      optionName,
      direction,
      encoding
    });
  }
  return sortTransforms(newTransforms, direction);
};
const normalizeTransform = ({
  stdioItem,
  stdioItem: {
    type
  },
  index,
  newTransforms,
  optionName,
  direction,
  encoding
}) => {
  if (type === 'duplex') {
    return normalizeDuplex({
      stdioItem,
      optionName
    });
  }
  if (type === 'webTransform') {
    return normalizeTransformStream({
      stdioItem,
      index,
      newTransforms,
      direction
    });
  }
  return normalizeGenerator({
    stdioItem,
    index,
    newTransforms,
    direction,
    encoding
  });
};
const normalizeDuplex = ({
  stdioItem,
  stdioItem: {
    value: {
      transform,
      transform: {
        writableObjectMode,
        readableObjectMode
      },
      objectMode = readableObjectMode
    }
  },
  optionName
}) => {
  if (objectMode && !readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  if (!objectMode && readableObjectMode) {
    throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
  }
  return Object.assign(Object.assign({}, stdioItem), {}, {
    value: {
      transform,
      writableObjectMode,
      readableObjectMode
    }
  });
};
const normalizeTransformStream = ({
  stdioItem,
  stdioItem: {
    value
  },
  index,
  newTransforms,
  direction
}) => {
  const {
    transform,
    objectMode
  } = isPlainObject(value) ? value : {
    transform: value
  };
  const {
    writableObjectMode,
    readableObjectMode
  } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return Object.assign(Object.assign({}, stdioItem), {}, {
    value: {
      transform,
      writableObjectMode,
      readableObjectMode
    }
  });
};
const normalizeGenerator = ({
  stdioItem,
  stdioItem: {
    value
  },
  index,
  newTransforms,
  direction,
  encoding
}) => {
  const {
    transform,
    final,
    binary: binaryOption = false,
    preserveNewlines = false,
    objectMode
  } = isPlainObject(value) ? value : {
    transform: value
  };
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const {
    writableObjectMode,
    readableObjectMode
  } = getTransformObjectModes(objectMode, index, newTransforms, direction);
  return Object.assign(Object.assign({}, stdioItem), {}, {
    value: {
      transform,
      final,
      binary,
      preserveNewlines,
      writableObjectMode,
      readableObjectMode
    }
  });
};
const sortTransforms = (newTransforms, direction) => direction === 'input' ? newTransforms.reverse() : newTransforms;

const getStreamDirection = (stdioItems, fdNumber, optionName) => {
  var _directions$find;
  const directions = stdioItems.map(stdioItem => getStdioItemDirection(stdioItem, fdNumber));
  if (directions.includes('input') && directions.includes('output')) {
    throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
  }
  return (_directions$find = directions.find(Boolean)) != null ? _directions$find : DEFAULT_DIRECTION;
};
const getStdioItemDirection = ({
  type,
  value
}, fdNumber) => {
  var _KNOWN_DIRECTIONS$fdN;
  return (_KNOWN_DIRECTIONS$fdN = KNOWN_DIRECTIONS[fdNumber]) != null ? _KNOWN_DIRECTIONS$fdN : guessStreamDirection[type](value);
};
const KNOWN_DIRECTIONS = ['input', 'output', 'output'];
const anyDirection = () => undefined;
const alwaysInput = () => 'input';
const guessStreamDirection = {
  generator: anyDirection,
  asyncGenerator: anyDirection,
  fileUrl: anyDirection,
  filePath: anyDirection,
  iterable: alwaysInput,
  asyncIterable: alwaysInput,
  uint8Array: alwaysInput,
  webStream: value => isWritableStream(value) ? 'output' : 'input',
  nodeStream(value) {
    if (!isReadableStream$1(value, {
      checkOpen: false
    })) {
      return 'output';
    }
    return isWritableStream$1(value, {
      checkOpen: false
    }) ? undefined : 'input';
  },
  webTransform: anyDirection,
  duplex: anyDirection,
  native(value) {
    const standardStreamDirection = getStandardStreamDirection(value);
    if (standardStreamDirection !== undefined) {
      return standardStreamDirection;
    }
    if (isStream(value, {
      checkOpen: false
    })) {
      return guessStreamDirection.nodeStream(value);
    }
  }
};
const getStandardStreamDirection = value => {
  if ([0, process$6.stdin].includes(value)) {
    return 'input';
  }
  if ([1, 2, process$6.stdout, process$6.stderr].includes(value)) {
    return 'output';
  }
};
const DEFAULT_DIRECTION = 'output';

const normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes('ipc') ? [...stdioArray, 'ipc'] : stdioArray;

const _excluded$3 = ["stdio", "ipc", "buffer"];
const normalizeStdioOption = (_ref, verboseInfo, isSync) => {
  let {
      stdio,
      ipc,
      buffer
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$3);
  const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => addDefaultValue(stdioOption, fdNumber));
  return isSync ? normalizeStdioSync(stdioArray, buffer, verboseInfo) : normalizeIpcStdioArray(stdioArray, ipc);
};
const getStdioArray = (stdio, options) => {
  if (stdio === undefined) {
    return STANDARD_STREAMS_ALIASES.map(alias => options[alias]);
  }
  if (hasAlias(options)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map(alias => `\`${alias}\``).join(', ')}`);
  }
  if (typeof stdio === 'string') {
    return [stdio, stdio, stdio];
  }
  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }
  const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
  return Array.from({
    length
  }, (_, fdNumber) => stdio[fdNumber]);
};
const hasAlias = options => STANDARD_STREAMS_ALIASES.some(alias => options[alias] !== undefined);
const addDefaultValue = (stdioOption, fdNumber) => {
  if (Array.isArray(stdioOption)) {
    return stdioOption.map(item => addDefaultValue(item, fdNumber));
  }
  if (stdioOption === null || stdioOption === undefined) {
    return fdNumber >= STANDARD_STREAMS_ALIASES.length ? 'ignore' : 'pipe';
  }
  return stdioOption;
};
const normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) => !buffer[fdNumber] && fdNumber !== 0 && !isFullVerbose(verboseInfo, fdNumber) && isOutputPipeOnly(stdioOption) ? 'ignore' : stdioOption);
const isOutputPipeOnly = stdioOption => stdioOption === 'pipe' || Array.isArray(stdioOption) && stdioOption.every(item => item === 'pipe');

const handleNativeStream = ({
  stdioItem,
  stdioItem: {
    type
  },
  isStdioArray,
  fdNumber,
  direction,
  isSync
}) => {
  if (!isStdioArray || type !== 'native') {
    return stdioItem;
  }
  return isSync ? handleNativeStreamSync({
    stdioItem,
    fdNumber,
    direction
  }) : handleNativeStreamAsync({
    stdioItem,
    fdNumber
  });
};
const handleNativeStreamSync = ({
  stdioItem,
  stdioItem: {
    value,
    optionName
  },
  fdNumber,
  direction
}) => {
  const targetFd = getTargetFd({
    value,
    optionName,
    fdNumber,
    direction
  });
  if (targetFd !== undefined) {
    return targetFd;
  }
  if (isStream(value, {
    checkOpen: false
  })) {
    throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
  }
  return stdioItem;
};
const getTargetFd = ({
  value,
  optionName,
  fdNumber,
  direction
}) => {
  const targetFdNumber = getTargetFdNumber(value, fdNumber);
  if (targetFdNumber === undefined) {
    return;
  }
  if (direction === 'output') {
    return {
      type: 'fileNumber',
      value: targetFdNumber,
      optionName
    };
  }
  if (tty.isatty(targetFdNumber)) {
    throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
  }
  return {
    type: 'uint8Array',
    value: bufferToUint8Array(node_fs.readFileSync(targetFdNumber)),
    optionName
  };
};
const getTargetFdNumber = (value, fdNumber) => {
  if (value === 'inherit') {
    return fdNumber;
  }
  if (typeof value === 'number') {
    return value;
  }
  const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
  if (standardStreamIndex !== -1) {
    return standardStreamIndex;
  }
};
const handleNativeStreamAsync = ({
  stdioItem,
  stdioItem: {
    value,
    optionName
  },
  fdNumber
}) => {
  if (value === 'inherit') {
    return {
      type: 'nodeStream',
      value: getStandardStream(fdNumber, value, optionName),
      optionName
    };
  }
  if (typeof value === 'number') {
    return {
      type: 'nodeStream',
      value: getStandardStream(value, value, optionName),
      optionName
    };
  }
  if (isStream(value, {
    checkOpen: false
  })) {
    return {
      type: 'nodeStream',
      value,
      optionName
    };
  }
  return stdioItem;
};
const getStandardStream = (fdNumber, value, optionName) => {
  const standardStream = STANDARD_STREAMS[fdNumber];
  if (standardStream === undefined) {
    throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
  }
  return standardStream;
};

const handleInputOptions = ({
  input,
  inputFile
}, fdNumber) => fdNumber === 0 ? [...handleInputOption(input), ...handleInputFileOption(inputFile)] : [];
const handleInputOption = input => input === undefined ? [] : [{
  type: getInputType(input),
  value: input,
  optionName: 'input'
}];
const getInputType = input => {
  if (isReadableStream$1(input, {
    checkOpen: false
  })) {
    return 'nodeStream';
  }
  if (typeof input === 'string') {
    return 'string';
  }
  if (isUint8Array(input)) {
    return 'uint8Array';
  }
  throw new Error('The `input` option must be a string, a Uint8Array or a Node.js Readable stream.');
};
const handleInputFileOption = inputFile => inputFile === undefined ? [] : [Object.assign(Object.assign({}, getInputFileType(inputFile)), {}, {
  optionName: 'inputFile'
})];
const getInputFileType = inputFile => {
  if (isUrl(inputFile)) {
    return {
      type: 'fileUrl',
      value: inputFile
    };
  }
  if (isFilePathString(inputFile)) {
    return {
      type: 'filePath',
      value: {
        file: inputFile
      }
    };
  }
  throw new Error('The `inputFile` option must be a file path string or a file URL.');
};

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$1 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

var isArray = isArray$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$b;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var bind = functionBindContext;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike$1(element);
        targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray$1;

var $$1 = _export;
var flattenIntoArray = flattenIntoArray_1;
var aCallable$1 = aCallable$c;
var toObject = toObject$a;
var lengthOfArrayLike = lengthOfArrayLike$b;
var arraySpeciesCreate = arraySpeciesCreate$2;

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$$1({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable$1(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = addToUnscopables$3;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');

const filterDuplicates = stdioItems => stdioItems.filter((stdioItemOne, indexOne) => stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value || indexOne >= indexTwo || stdioItemOne.type === 'generator' || stdioItemOne.type === 'asyncGenerator'));
const getDuplicateStream = ({
  stdioItem: {
    type,
    value,
    optionName
  },
  direction,
  fileDescriptors,
  isSync
}) => {
  const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
  if (otherStdioItems.length === 0) {
    return;
  }
  if (isSync) {
    validateDuplicateStreamSync({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
    return;
  }
  if (SPECIAL_DUPLICATE_TYPES.has(type)) {
    return getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
  if (FORBID_DUPLICATE_TYPES.has(type)) {
    validateDuplicateTransform({
      otherStdioItems,
      type,
      value,
      optionName
    });
  }
};
const getOtherStdioItems = (fileDescriptors, type) => fileDescriptors.flatMap(({
  direction,
  stdioItems
}) => stdioItems.filter(stdioItem => stdioItem.type === type).map(stdioItem => Object.assign(Object.assign({}, stdioItem), {}, {
  direction
})));
const validateDuplicateStreamSync = ({
  otherStdioItems,
  type,
  value,
  optionName,
  direction
}) => {
  if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
    getDuplicateStreamInstance({
      otherStdioItems,
      type,
      value,
      optionName,
      direction
    });
  }
};
const getDuplicateStreamInstance = ({
  otherStdioItems,
  type,
  value,
  optionName,
  direction
}) => {
  const duplicateStdioItems = otherStdioItems.filter(stdioItem => hasSameValue(stdioItem, value));
  if (duplicateStdioItems.length === 0) {
    return;
  }
  const differentStdioItem = duplicateStdioItems.find(stdioItem => stdioItem.direction !== direction);
  throwOnDuplicateStream(differentStdioItem, optionName, type);
  return direction === 'output' ? duplicateStdioItems[0].stream : undefined;
};
const hasSameValue = ({
  type,
  value
}, secondValue) => {
  if (type === 'filePath') {
    return value.file === secondValue.file;
  }
  if (type === 'fileUrl') {
    return value.href === secondValue.href;
  }
  return value === secondValue;
};
const validateDuplicateTransform = ({
  otherStdioItems,
  type,
  value,
  optionName
}) => {
  const duplicateStdioItem = otherStdioItems.find(({
    value: {
      transform
    }
  }) => transform === value.transform);
  throwOnDuplicateStream(duplicateStdioItem, optionName, type);
};
const throwOnDuplicateStream = (stdioItem, optionName, type) => {
  if (stdioItem !== undefined) {
    throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
  }
};

const handleStdio = (addProperties, options, verboseInfo, isSync) => {
  const stdio = normalizeStdioOption(options, verboseInfo, isSync);
  const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
    stdioOption,
    fdNumber,
    options,
    isSync
  }));
  const fileDescriptors = getFinalFileDescriptors({
    initialFileDescriptors,
    addProperties,
    options,
    isSync
  });
  options.stdio = fileDescriptors.map(({
    stdioItems
  }) => forwardStdio(stdioItems));
  return fileDescriptors;
};
const getFileDescriptor = ({
  stdioOption,
  fdNumber,
  options,
  isSync
}) => {
  const optionName = getStreamName(fdNumber);
  const {
    stdioItems: initialStdioItems,
    isStdioArray
  } = initializeStdioItems({
    stdioOption,
    fdNumber,
    options,
    optionName
  });
  const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
  const stdioItems = initialStdioItems.map(stdioItem => handleNativeStream({
    stdioItem,
    isStdioArray,
    fdNumber,
    direction,
    isSync
  }));
  const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
  const objectMode = getFdObjectMode(normalizedStdioItems, direction);
  validateFileObjectMode(normalizedStdioItems, objectMode);
  return {
    direction,
    objectMode,
    stdioItems: normalizedStdioItems
  };
};
const initializeStdioItems = ({
  stdioOption,
  fdNumber,
  options,
  optionName
}) => {
  const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
  const initialStdioItems = [...values.map(value => initializeStdioItem(value, optionName)), ...handleInputOptions(options, fdNumber)];
  const stdioItems = filterDuplicates(initialStdioItems);
  const isStdioArray = stdioItems.length > 1;
  validateStdioArray(stdioItems, isStdioArray, optionName);
  validateStreams(stdioItems);
  return {
    stdioItems,
    isStdioArray
  };
};
const initializeStdioItem = (value, optionName) => ({
  type: getStdioItemType(value, optionName),
  value,
  optionName
});
const validateStdioArray = (stdioItems, isStdioArray, optionName) => {
  if (stdioItems.length === 0) {
    throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
  }
  if (!isStdioArray) {
    return;
  }
  for (const {
    value,
    optionName
  } of stdioItems) {
    if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
      throw new Error(`The \`${optionName}\` option must not include \`${value}\`.`);
    }
  }
};
const INVALID_STDIO_ARRAY_OPTIONS = new Set(['ignore', 'ipc']);
const validateStreams = stdioItems => {
  for (const stdioItem of stdioItems) {
    validateFileStdio(stdioItem);
  }
};
const validateFileStdio = ({
  type,
  value,
  optionName
}) => {
  if (isRegularUrl(value)) {
    throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
  }
  if (isUnknownStdioString(type, value)) {
    throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
  }
};
const validateFileObjectMode = (stdioItems, objectMode) => {
  if (!objectMode) {
    return;
  }
  const fileStdioItem = stdioItems.find(({
    type
  }) => FILE_TYPES.has(type));
  if (fileStdioItem !== undefined) {
    throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
  }
};
const getFinalFileDescriptors = ({
  initialFileDescriptors,
  addProperties,
  options,
  isSync
}) => {
  const fileDescriptors = [];
  try {
    for (const fileDescriptor of initialFileDescriptors) {
      fileDescriptors.push(getFinalFileDescriptor({
        fileDescriptor,
        fileDescriptors,
        addProperties,
        options,
        isSync
      }));
    }
    return fileDescriptors;
  } catch (error) {
    cleanupCustomStreams(fileDescriptors);
    throw error;
  }
};
const getFinalFileDescriptor = ({
  fileDescriptor: {
    direction,
    objectMode,
    stdioItems
  },
  fileDescriptors,
  addProperties,
  options,
  isSync
}) => {
  const finalStdioItems = stdioItems.map(stdioItem => addStreamProperties({
    stdioItem,
    addProperties,
    direction,
    options,
    fileDescriptors,
    isSync
  }));
  return {
    direction,
    objectMode,
    stdioItems: finalStdioItems
  };
};
const addStreamProperties = ({
  stdioItem,
  addProperties,
  direction,
  options,
  fileDescriptors,
  isSync
}) => {
  const duplicateStream = getDuplicateStream({
    stdioItem,
    direction,
    fileDescriptors,
    isSync
  });
  if (duplicateStream !== undefined) {
    return Object.assign(Object.assign({}, stdioItem), {}, {
      stream: duplicateStream
    });
  }
  return Object.assign(Object.assign({}, stdioItem), addProperties[direction][stdioItem.type](stdioItem, options));
};
const cleanupCustomStreams = fileDescriptors => {
  for (const {
    stdioItems
  } of fileDescriptors) {
    for (const {
      stream
    } of stdioItems) {
      if (stream !== undefined && !isStandardStream(stream)) {
        stream.destroy();
      }
    }
  }
};
const forwardStdio = stdioItems => {
  if (stdioItems.length > 1) {
    return stdioItems.some(({
      value
    }) => value === 'overlapped') ? 'overlapped' : 'pipe';
  }
  const [{
    type,
    value
  }] = stdioItems;
  return type === 'native' ? value : 'pipe';
};

const handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true);
const forbiddenIfSync = ({
  type,
  optionName
}) => {
  throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
};
const forbiddenNativeIfSync = ({
  optionName,
  value
}) => {
  if (value === 'ipc' || value === 'overlapped') {
    throwInvalidSyncValue(optionName, `"${value}"`);
  }
  return {};
};
const throwInvalidSyncValue = (optionName, value) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
};
const addProperties$1 = {
  generator() {},
  asyncGenerator: forbiddenIfSync,
  webStream: forbiddenIfSync,
  nodeStream: forbiddenIfSync,
  webTransform: forbiddenIfSync,
  duplex: forbiddenIfSync,
  asyncIterable: forbiddenIfSync,
  native: forbiddenNativeIfSync
};
const addPropertiesSync = {
  input: Object.assign(Object.assign({}, addProperties$1), {}, {
    fileUrl: ({
      value
    }) => ({
      contents: [bufferToUint8Array(node_fs.readFileSync(value))]
    }),
    filePath: ({
      value: {
        file
      }
    }) => ({
      contents: [bufferToUint8Array(node_fs.readFileSync(file))]
    }),
    fileNumber: forbiddenIfSync,
    iterable: ({
      value
    }) => ({
      contents: [...value]
    }),
    string: ({
      value
    }) => ({
      contents: [value]
    }),
    uint8Array: ({
      value
    }) => ({
      contents: [value]
    })
  }),
  output: Object.assign(Object.assign({}, addProperties$1), {}, {
    fileUrl: ({
      value
    }) => ({
      path: value
    }),
    filePath: ({
      value: {
        file
      }
    }) => ({
      path: file
    }),
    fileNumber: ({
      value
    }) => ({
      path: value
    }),
    iterable: forbiddenIfSync,
    string: forbiddenIfSync,
    uint8Array: forbiddenIfSync
  })
};

const stripNewline = (value, {
  stripFinalNewline: stripFinalNewline$1
}, fdNumber) => getStripFinalNewline(stripFinalNewline$1, fdNumber) && value !== undefined && !Array.isArray(value) ? stripFinalNewline(value) : value;
const getStripFinalNewline = (stripFinalNewline, fdNumber) => fdNumber === 'all' ? stripFinalNewline[1] || stripFinalNewline[2] : stripFinalNewline[fdNumber];

const getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped ? undefined : initializeSplitLines(preserveNewlines, state);
const splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode ? chunk.flatMap(item => splitLinesItemSync(item, preserveNewlines)) : splitLinesItemSync(chunk, preserveNewlines);
const splitLinesItemSync = (chunk, preserveNewlines) => {
  const {
    transform,
    final
  } = initializeSplitLines(preserveNewlines, {});
  return [...transform(chunk), ...final()];
};
const initializeSplitLines = (preserveNewlines, state) => {
  state.previousChunks = '';
  return {
    transform: splitGenerator.bind(undefined, state, preserveNewlines),
    final: linesFinal.bind(undefined, state)
  };
};
const splitGenerator = function* (state, preserveNewlines, chunk) {
  if (typeof chunk !== 'string') {
    yield chunk;
    return;
  }
  let {
    previousChunks
  } = state;
  let start = -1;
  for (let end = 0; end < chunk.length; end += 1) {
    if (chunk[end] === '\n') {
      const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
      let line = chunk.slice(start + 1, end + 1 - newlineLength);
      if (previousChunks.length > 0) {
        line = concatString(previousChunks, line);
        previousChunks = '';
      }
      yield line;
      start = end;
    }
  }
  if (start !== chunk.length - 1) {
    previousChunks = concatString(previousChunks, chunk.slice(start + 1));
  }
  state.previousChunks = previousChunks;
};
const getNewlineLength = (chunk, end, preserveNewlines, state) => {
  if (preserveNewlines) {
    return 0;
  }
  state.isWindowsNewline = end !== 0 && chunk[end - 1] === '\r';
  return state.isWindowsNewline ? 2 : 1;
};
const linesFinal = function* ({
  previousChunks
}) {
  if (previousChunks.length > 0) {
    yield previousChunks;
  }
};
const getAppendNewlineGenerator = ({
  binary,
  preserveNewlines,
  readableObjectMode,
  state
}) => binary || preserveNewlines || readableObjectMode ? undefined : {
  transform: appendNewlineGenerator.bind(undefined, state)
};
const appendNewlineGenerator = function* ({
  isWindowsNewline = false
}, chunk) {
  const {
    unixNewline,
    windowsNewline,
    LF,
    concatBytes
  } = typeof chunk === 'string' ? linesStringInfo : linesUint8ArrayInfo;
  if (chunk.at(-1) === LF) {
    yield chunk;
    return;
  }
  const newline = isWindowsNewline ? windowsNewline : unixNewline;
  yield concatBytes(chunk, newline);
};
const concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`;
const linesStringInfo = {
  windowsNewline: '\r\n',
  unixNewline: '\n',
  LF: '\n',
  concatBytes: concatString
};
const concatUint8Array = (firstChunk, secondChunk) => {
  const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
  chunk.set(firstChunk, 0);
  chunk.set(secondChunk, firstChunk.length);
  return chunk;
};
const linesUint8ArrayInfo = {
  windowsNewline: new Uint8Array([0x0D, 0x0A]),
  unixNewline: new Uint8Array([0x0A]),
  LF: 0x0A,
  concatBytes: concatUint8Array
};

const getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode ? undefined : validateStringTransformInput.bind(undefined, optionName);
const validateStringTransformInput = function* (optionName, chunk) {
  if (typeof chunk !== 'string' && !isUint8Array(chunk) && !node_buffer.Buffer.isBuffer(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
  }
  yield chunk;
};
const getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode ? validateObjectTransformReturn.bind(undefined, optionName) : validateStringTransformReturn.bind(undefined, optionName);
const validateObjectTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  yield chunk;
};
const validateStringTransformReturn = function* (optionName, chunk) {
  validateEmptyReturn(optionName, chunk);
  if (typeof chunk !== 'string' && !isUint8Array(chunk)) {
    throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
  }
  yield chunk;
};
const validateEmptyReturn = (optionName, chunk) => {
  if (chunk === null || chunk === undefined) {
    throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
  }
};

const getEncodingTransformGenerator = (binary, encoding, skipped) => {
  if (skipped) {
    return;
  }
  if (binary) {
    return {
      transform: encodingUint8ArrayGenerator.bind(undefined, new TextEncoder())
    };
  }
  const stringDecoder = new node_string_decoder.StringDecoder(encoding);
  return {
    transform: encodingStringGenerator.bind(undefined, stringDecoder),
    final: encodingStringFinal.bind(undefined, stringDecoder)
  };
};
const encodingUint8ArrayGenerator = function* (textEncoder, chunk) {
  if (node_buffer.Buffer.isBuffer(chunk)) {
    yield bufferToUint8Array(chunk);
  } else if (typeof chunk === 'string') {
    yield textEncoder.encode(chunk);
  } else {
    yield chunk;
  }
};
const encodingStringGenerator = function* (stringDecoder, chunk) {
  yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
};
const encodingStringFinal = function* (stringDecoder) {
  const lastChunk = stringDecoder.end();
  if (lastChunk !== '') {
    yield lastChunk;
  }
};

const pushChunks = node_util.callbackify(_asyncToGenerator(function* (getChunks, state, getChunksArguments, transformStream) {
  state.currentIterable = getChunks(...getChunksArguments);
  try {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(state.currentIterable), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const chunk = _step.value;
        {
          transformStream.push(chunk);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } finally {
    delete state.currentIterable;
  }
}));
const transformChunk = function () {
  var _ref = _wrapAsyncGenerator(function* (chunk, generators, index) {
    if (index === generators.length) {
      yield chunk;
      return;
    }
    const {
      transform = identityGenerator$1
    } = generators[index];
    var _iteratorAbruptCompletion2 = false;
    var _didIteratorError2 = false;
    var _iteratorError2;
    try {
      for (var _iterator2 = _asyncIterator(transform(chunk)), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _awaitAsyncGenerator(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
        const transformedChunk = _step2.value;
        {
          yield* _asyncGeneratorDelegate(_asyncIterator(transformChunk(transformedChunk, generators, index + 1)));
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
          yield _awaitAsyncGenerator(_iterator2.return());
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  return function transformChunk(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const finalChunks = function () {
  var _ref2 = _wrapAsyncGenerator(function* (generators) {
    for (const [index, {
      final
    }] of Object.entries(generators)) {
      yield* _asyncGeneratorDelegate(_asyncIterator(generatorFinalChunks(final, Number(index), generators)));
    }
  });
  return function finalChunks(_x4) {
    return _ref2.apply(this, arguments);
  };
}();
const generatorFinalChunks = function () {
  var _ref3 = _wrapAsyncGenerator(function* (final, index, generators) {
    if (final === undefined) {
      return;
    }
    var _iteratorAbruptCompletion3 = false;
    var _didIteratorError3 = false;
    var _iteratorError3;
    try {
      for (var _iterator3 = _asyncIterator(final()), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield _awaitAsyncGenerator(_iterator3.next())).done; _iteratorAbruptCompletion3 = false) {
        const finalChunk = _step3.value;
        {
          yield* _asyncGeneratorDelegate(_asyncIterator(transformChunk(finalChunk, generators, index + 1)));
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
          yield _awaitAsyncGenerator(_iterator3.return());
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  });
  return function generatorFinalChunks(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
const destroyTransform = node_util.callbackify(_asyncToGenerator(function* ({
  currentIterable
}, error) {
  if (currentIterable !== undefined) {
    yield error ? currentIterable.throw(error) : currentIterable.return();
    return;
  }
  if (error) {
    throw error;
  }
}));
const identityGenerator$1 = function* (chunk) {
  yield chunk;
};

const pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
  try {
    for (const chunk of getChunksSync(...getChunksArguments)) {
      transformStream.push(chunk);
    }
    done();
  } catch (error) {
    done(error);
  }
};
const runTransformSync = (generators, chunks) => [...chunks.flatMap(chunk => [...transformChunkSync(chunk, generators, 0)]), ...finalChunksSync(generators)];
const transformChunkSync = function* (chunk, generators, index) {
  if (index === generators.length) {
    yield chunk;
    return;
  }
  const {
    transform = identityGenerator
  } = generators[index];
  for (const transformedChunk of transform(chunk)) {
    yield* transformChunkSync(transformedChunk, generators, index + 1);
  }
};
const finalChunksSync = function* (generators) {
  for (const [index, {
    final
  }] of Object.entries(generators)) {
    yield* generatorFinalChunksSync(final, Number(index), generators);
  }
};
const generatorFinalChunksSync = function* (final, index, generators) {
  if (final === undefined) {
    return;
  }
  for (const finalChunk of final()) {
    yield* transformChunkSync(finalChunk, generators, index + 1);
  }
};
const identityGenerator = function* (chunk) {
  yield chunk;
};

const generatorToStream = ({
  value,
  value: {
    transform,
    final,
    writableObjectMode,
    readableObjectMode
  },
  optionName
}, {
  encoding
}) => {
  const state = {};
  const generators = addInternalGenerators(value, encoding, optionName);
  const transformAsync = isAsyncGenerator(transform);
  const finalAsync = isAsyncGenerator(final);
  const transformMethod = transformAsync ? pushChunks.bind(undefined, transformChunk, state) : pushChunksSync.bind(undefined, transformChunkSync);
  const finalMethod = transformAsync || finalAsync ? pushChunks.bind(undefined, finalChunks, state) : pushChunksSync.bind(undefined, finalChunksSync);
  const destroyMethod = transformAsync || finalAsync ? destroyTransform.bind(undefined, state) : undefined;
  const stream = new node_stream.Transform({
    writableObjectMode,
    writableHighWaterMark: node_stream.getDefaultHighWaterMark(writableObjectMode),
    readableObjectMode,
    readableHighWaterMark: node_stream.getDefaultHighWaterMark(readableObjectMode),
    transform(chunk, encoding, done) {
      transformMethod([chunk, generators, 0], this, done);
    },
    flush(done) {
      finalMethod([generators], this, done);
    },
    destroy: destroyMethod
  });
  return {
    stream
  };
};
const runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
  const generators = stdioItems.filter(({
    type
  }) => type === 'generator');
  const reversedGenerators = isInput ? generators.reverse() : generators;
  for (const {
    value,
    optionName
  } of reversedGenerators) {
    const generators = addInternalGenerators(value, encoding, optionName);
    chunks = runTransformSync(generators, chunks);
  }
  return chunks;
};
const addInternalGenerators = ({
  transform,
  final,
  binary,
  writableObjectMode,
  readableObjectMode,
  preserveNewlines
}, encoding, optionName) => {
  const state = {};
  return [{
    transform: getValidateTransformInput(writableObjectMode, optionName)
  }, getEncodingTransformGenerator(binary, encoding, writableObjectMode), getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state), {
    transform,
    final
  }, {
    transform: getValidateTransformReturn(readableObjectMode, optionName)
  }, getAppendNewlineGenerator({
    binary,
    preserveNewlines,
    readableObjectMode,
    state
  })].filter(Boolean);
};

const addInputOptionsSync = (fileDescriptors, options) => {
  for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
    addInputOptionSync(fileDescriptors, fdNumber, options);
  }
};
const getInputFdNumbers = fileDescriptors => new Set(Object.entries(fileDescriptors).filter(([, {
  direction
}]) => direction === 'input').map(([fdNumber]) => Number(fdNumber)));
const addInputOptionSync = (fileDescriptors, fdNumber, options) => {
  const {
    stdioItems
  } = fileDescriptors[fdNumber];
  const allStdioItems = stdioItems.filter(({
    contents
  }) => contents !== undefined);
  if (allStdioItems.length === 0) {
    return;
  }
  if (fdNumber !== 0) {
    const [{
      type,
      optionName
    }] = allStdioItems;
    throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
  }
  const allContents = allStdioItems.map(({
    contents
  }) => contents);
  const transformedContents = allContents.map(contents => applySingleInputGeneratorsSync(contents, stdioItems));
  options.input = joinToUint8Array(transformedContents);
};
const applySingleInputGeneratorsSync = (contents, stdioItems) => {
  const newContents = runGeneratorsSync(contents, stdioItems, 'utf8', true);
  validateSerializable(newContents);
  return joinToUint8Array(newContents);
};
const validateSerializable = newContents => {
  const invalidItem = newContents.find(item => typeof item !== 'string' && !isUint8Array(item));
  if (invalidItem !== undefined) {
    throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
  }
};

const shouldLogOutput = ({
  stdioItems,
  encoding,
  verboseInfo,
  fdNumber
}) => fdNumber !== 'all' && isFullVerbose(verboseInfo, fdNumber) && !BINARY_ENCODINGS.has(encoding) && fdUsesVerbose(fdNumber) && (stdioItems.some(({
  type,
  value
}) => type === 'native' && PIPED_STDIO_VALUES.has(value)) || stdioItems.every(({
  type
}) => TRANSFORM_TYPES.has(type)));
const fdUsesVerbose = fdNumber => fdNumber === 1 || fdNumber === 2;
const PIPED_STDIO_VALUES = new Set(['pipe', 'overlapped']);
const logLines = function () {
  var _ref = _asyncToGenerator(function* (linesIterable, stream, fdNumber, verboseInfo) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(linesIterable), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const line = _step.value;
        {
          if (!isPipingStream(stream)) {
            logLine(line, fdNumber, verboseInfo);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return function logLines(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
const logLinesSync = (linesArray, fdNumber, verboseInfo) => {
  for (const line of linesArray) {
    logLine(line, fdNumber, verboseInfo);
  }
};
const isPipingStream = stream => stream._readableState.pipes.length > 0;
const logLine = (line, fdNumber, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(line);
  verboseLog({
    type: 'output',
    verboseMessage,
    fdNumber,
    verboseInfo
  });
};

const transformOutputSync = ({
  fileDescriptors,
  syncResult: {
    output
  },
  options,
  isMaxBuffer,
  verboseInfo
}) => {
  if (output === null) {
    return {
      output: Array.from({
        length: 3
      })
    };
  }
  const state = {};
  const outputFiles = new Set([]);
  const transformedOutput = output.map((result, fdNumber) => transformOutputResultSync({
    result,
    fileDescriptors,
    fdNumber,
    state,
    outputFiles,
    isMaxBuffer,
    verboseInfo
  }, options));
  return Object.assign({
    output: transformedOutput
  }, state);
};
const transformOutputResultSync = ({
  result,
  fileDescriptors,
  fdNumber,
  state,
  outputFiles,
  isMaxBuffer,
  verboseInfo
}, {
  buffer,
  encoding,
  lines,
  stripFinalNewline,
  maxBuffer
}) => {
  if (result === null) {
    return;
  }
  const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
  const uint8ArrayResult = bufferToUint8Array(truncatedResult);
  const {
    stdioItems,
    objectMode
  } = fileDescriptors[fdNumber];
  const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
  const {
    serializedResult,
    finalResult = serializedResult
  } = serializeChunks({
    chunks,
    objectMode,
    encoding,
    lines,
    stripFinalNewline,
    fdNumber
  });
  logOutputSync({
    serializedResult,
    fdNumber,
    state,
    verboseInfo,
    encoding,
    stdioItems,
    objectMode
  });
  const returnedResult = buffer[fdNumber] ? finalResult : undefined;
  try {
    if (state.error === undefined) {
      writeToFiles(serializedResult, stdioItems, outputFiles);
    }
    return returnedResult;
  } catch (error) {
    state.error = error;
    return returnedResult;
  }
};
const runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
  try {
    return runGeneratorsSync(chunks, stdioItems, encoding, false);
  } catch (error) {
    state.error = error;
    return chunks;
  }
};
const serializeChunks = ({
  chunks,
  objectMode,
  encoding,
  lines,
  stripFinalNewline,
  fdNumber
}) => {
  if (objectMode) {
    return {
      serializedResult: chunks
    };
  }
  if (encoding === 'buffer') {
    return {
      serializedResult: joinToUint8Array(chunks)
    };
  }
  const serializedResult = joinToString(chunks, encoding);
  if (lines[fdNumber]) {
    return {
      serializedResult,
      finalResult: splitLinesSync(serializedResult, !stripFinalNewline[fdNumber], objectMode)
    };
  }
  return {
    serializedResult
  };
};
const logOutputSync = ({
  serializedResult,
  fdNumber,
  state,
  verboseInfo,
  encoding,
  stdioItems,
  objectMode
}) => {
  if (!shouldLogOutput({
    stdioItems,
    encoding,
    verboseInfo,
    fdNumber
  })) {
    return;
  }
  const linesArray = splitLinesSync(serializedResult, false, objectMode);
  try {
    logLinesSync(linesArray, fdNumber, verboseInfo);
  } catch (error) {
    var _state$error;
    (_state$error = state.error) != null ? _state$error : state.error = error;
  }
};
const writeToFiles = (serializedResult, stdioItems, outputFiles) => {
  for (const {
    path
  } of stdioItems.filter(({
    type
  }) => FILE_TYPES.has(type))) {
    const pathString = typeof path === 'string' ? path : path.toString();
    if (outputFiles.has(pathString)) {
      node_fs.appendFileSync(path, serializedResult);
    } else {
      outputFiles.add(pathString);
      node_fs.writeFileSync(path, serializedResult);
    }
  }
};

const getAllSync = ([, stdout, stderr], options) => {
  if (!options.all) {
    return;
  }
  if (stdout === undefined) {
    return stderr;
  }
  if (stderr === undefined) {
    return stdout;
  }
  if (Array.isArray(stdout)) {
    return Array.isArray(stderr) ? [...stdout, ...stderr] : [...stdout, stripNewline(stderr, options, 'all')];
  }
  if (Array.isArray(stderr)) {
    return [stripNewline(stdout, options, 'all'), ...stderr];
  }
  if (isUint8Array(stdout) && isUint8Array(stderr)) {
    return concatUint8Arrays([stdout, stderr]);
  }
  return `${stdout}${stderr}`;
};

var $ = _export;
var call = functionCall;
var aCallable = aCallable$c;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$4;
var iterate = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

const waitForExit = function () {
  var _ref = _asyncToGenerator(function* (subprocess, context) {
    var _context$isForcefully;
    const [exitCode, signal] = yield waitForExitOrError(subprocess);
    (_context$isForcefully = context.isForcefullyTerminated) != null ? _context$isForcefully : context.isForcefullyTerminated = false;
    return [exitCode, signal];
  });
  return function waitForExit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const waitForExitOrError = function () {
  var _ref2 = _asyncToGenerator(function* (subprocess) {
    const [spawnPayload, exitPayload] = yield Promise.allSettled([node_events.once(subprocess, 'spawn'), node_events.once(subprocess, 'exit')]);
    if (spawnPayload.status === 'rejected') {
      return [];
    }
    return exitPayload.status === 'rejected' ? waitForSubprocessExit(subprocess) : exitPayload.value;
  });
  return function waitForExitOrError(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
const waitForSubprocessExit = function () {
  var _ref3 = _asyncToGenerator(function* (subprocess) {
    try {
      return yield node_events.once(subprocess, 'exit');
    } catch (_unused) {
      return waitForSubprocessExit(subprocess);
    }
  });
  return function waitForSubprocessExit(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
const waitForSuccessfulExit = function () {
  var _ref4 = _asyncToGenerator(function* (exitPromise) {
    const [exitCode, signal] = yield exitPromise;
    if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
      throw new DiscardedError();
    }
    return [exitCode, signal];
  });
  return function waitForSuccessfulExit(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
const isSubprocessErrorExit = (exitCode, signal) => exitCode === undefined && signal === undefined;
const isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;

const getExitResultSync = ({
  error,
  status: exitCode,
  signal,
  output
}, {
  maxBuffer
}) => {
  const resultError = getResultError(error, exitCode, signal);
  const timedOut = (resultError == null ? void 0 : resultError.code) === 'ETIMEDOUT';
  const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
  return {
    resultError,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer
  };
};
const getResultError = (error, exitCode, signal) => {
  if (error !== undefined) {
    return error;
  }
  return isFailedExit(exitCode, signal) ? new DiscardedError() : undefined;
};

const _excluded$2 = ["encoding", "maxBuffer"];
const execaCoreSync = (rawFile, rawArguments, rawOptions) => {
  const {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  } = handleSyncArguments(rawFile, rawArguments, rawOptions);
  const result = spawnSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    verboseInfo,
    fileDescriptors,
    startTime
  });
  return handleResult(result, verboseInfo, options);
};
const handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
  const {
    command,
    escapedCommand,
    startTime,
    verboseInfo
  } = handleCommand(rawFile, rawArguments, rawOptions);
  const syncOptions = normalizeSyncOptions(rawOptions);
  const {
    file,
    commandArguments,
    options
  } = normalizeOptions(rawFile, rawArguments, syncOptions);
  validateSyncOptions(options);
  const fileDescriptors = handleStdioSync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
};
const normalizeSyncOptions = options => options.node && !options.ipc ? Object.assign(Object.assign({}, options), {}, {
  ipc: false
}) : options;
const validateSyncOptions = ({
  ipc,
  ipcInput,
  detached,
  cancelSignal
}) => {
  if (ipcInput) {
    throwInvalidSyncOption('ipcInput');
  }
  if (ipc) {
    throwInvalidSyncOption('ipc: true');
  }
  if (detached) {
    throwInvalidSyncOption('detached: true');
  }
  if (cancelSignal) {
    throwInvalidSyncOption('cancelSignal');
  }
};
const throwInvalidSyncOption = value => {
  throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
};
const spawnSubprocessSync = ({
  file,
  commandArguments,
  options,
  command,
  escapedCommand,
  verboseInfo,
  fileDescriptors,
  startTime
}) => {
  const syncResult = runSubprocessSync({
    file,
    commandArguments,
    options,
    command,
    escapedCommand,
    fileDescriptors,
    startTime
  });
  if (syncResult.failed) {
    return syncResult;
  }
  const {
    resultError,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer
  } = getExitResultSync(syncResult, options);
  const {
    output,
    error = resultError
  } = transformOutputSync({
    fileDescriptors,
    syncResult,
    options,
    isMaxBuffer,
    verboseInfo
  });
  const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
  const all = stripNewline(getAllSync(output, options), options, 'all');
  return getSyncResult({
    error,
    exitCode,
    signal,
    timedOut,
    isMaxBuffer,
    stdio,
    all,
    options,
    command,
    escapedCommand,
    startTime
  });
};
const runSubprocessSync = ({
  file,
  commandArguments,
  options,
  command,
  escapedCommand,
  fileDescriptors,
  startTime
}) => {
  try {
    addInputOptionsSync(fileDescriptors, options);
    const normalizedOptions = normalizeSpawnSyncOptions(options);
    return node_child_process.spawnSync(file, commandArguments, normalizedOptions);
  } catch (error) {
    return makeEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync: true
    });
  }
};
const normalizeSpawnSyncOptions = _ref => {
  let {
      encoding,
      maxBuffer
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$2);
  return Object.assign(Object.assign({}, options), {}, {
    encoding: 'buffer',
    maxBuffer: getMaxBufferSync(maxBuffer)
  });
};
const getSyncResult = ({
  error,
  exitCode,
  signal,
  timedOut,
  isMaxBuffer,
  stdio,
  all,
  options,
  command,
  escapedCommand,
  startTime
}) => error === undefined ? makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime
}) : makeError({
  error,
  command,
  escapedCommand,
  timedOut,
  isCanceled: false,
  isGracefullyCanceled: false,
  isMaxBuffer,
  isForcefullyTerminated: false,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput: [],
  options,
  startTime,
  isSync: true
});

const getOneMessage = ({
  anyProcess,
  channel,
  isSubprocess,
  ipc
}, {
  reference = true,
  filter
} = {}) => {
  validateIpcMethod({
    methodName: 'getOneMessage',
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  return getOneMessageAsync({
    anyProcess,
    channel,
    isSubprocess,
    filter,
    reference
  });
};
const getOneMessageAsync = function () {
  var _ref = _asyncToGenerator(function* ({
    anyProcess,
    channel,
    isSubprocess,
    filter,
    reference
  }) {
    addReference(channel, reference);
    const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
    const controller = new AbortController();
    try {
      return yield Promise.race([getMessage(ipcEmitter, filter, controller), throwOnDisconnect(ipcEmitter, isSubprocess, controller), throwOnStrictError(ipcEmitter, isSubprocess, controller)]);
    } catch (error) {
      disconnect(anyProcess);
      throw error;
    } finally {
      controller.abort();
      removeReference(channel, reference);
    }
  });
  return function getOneMessageAsync(_x) {
    return _ref.apply(this, arguments);
  };
}();
const getMessage = function () {
  var _ref2 = _asyncToGenerator(function* (ipcEmitter, filter, {
    signal
  }) {
    if (filter === undefined) {
      const [message] = yield node_events.once(ipcEmitter, 'message', {
        signal
      });
      return message;
    }
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(node_events.on(ipcEmitter, 'message', {
          signal
        })), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const [message] = _step.value;
        {
          if (filter(message)) {
            return message;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return function getMessage(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
const throwOnDisconnect = function () {
  var _ref3 = _asyncToGenerator(function* (ipcEmitter, isSubprocess, {
    signal
  }) {
    yield node_events.once(ipcEmitter, 'disconnect', {
      signal
    });
    throwOnEarlyDisconnect(isSubprocess);
  });
  return function throwOnDisconnect(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
const throwOnStrictError = function () {
  var _ref4 = _asyncToGenerator(function* (ipcEmitter, isSubprocess, {
    signal
  }) {
    const [error] = yield node_events.once(ipcEmitter, 'strict:error', {
      signal
    });
    throw getStrictResponseError(error, isSubprocess);
  });
  return function throwOnStrictError(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

const getEachMessage = ({
  anyProcess,
  channel,
  isSubprocess,
  ipc
}, {
  reference = true
} = {}) => loopOnMessages({
  anyProcess,
  channel,
  isSubprocess,
  ipc,
  shouldAwait: !isSubprocess,
  reference
});
const loopOnMessages = ({
  anyProcess,
  channel,
  isSubprocess,
  ipc,
  shouldAwait,
  reference
}) => {
  validateIpcMethod({
    methodName: 'getEachMessage',
    isSubprocess,
    ipc,
    isConnected: isConnected(anyProcess)
  });
  addReference(channel, reference);
  const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
  const controller = new AbortController();
  const state = {};
  stopOnDisconnect(anyProcess, ipcEmitter, controller);
  abortOnStrictError({
    ipcEmitter,
    isSubprocess,
    controller,
    state
  });
  return iterateOnMessages({
    anyProcess,
    channel,
    ipcEmitter,
    isSubprocess,
    shouldAwait,
    controller,
    state,
    reference
  });
};
const stopOnDisconnect = function () {
  var _ref2 = _asyncToGenerator(function* (anyProcess, ipcEmitter, controller) {
    try {
      yield node_events.once(ipcEmitter, 'disconnect', {
        signal: controller.signal
      });
      controller.abort();
    } catch (_unused) {}
  });
  return function stopOnDisconnect(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
const abortOnStrictError = function () {
  var _ref3 = _asyncToGenerator(function* ({
    ipcEmitter,
    isSubprocess,
    controller,
    state
  }) {
    try {
      const [error] = yield node_events.once(ipcEmitter, 'strict:error', {
        signal: controller.signal
      });
      state.error = getStrictResponseError(error, isSubprocess);
      controller.abort();
    } catch (_unused2) {}
  });
  return function abortOnStrictError(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
const iterateOnMessages = function () {
  var _ref = _wrapAsyncGenerator(function* ({
    anyProcess,
    channel,
    ipcEmitter,
    isSubprocess,
    shouldAwait,
    controller,
    state,
    reference
  }) {
    try {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = _asyncIterator(node_events.on(ipcEmitter, 'message', {
            signal: controller.signal
          })), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const [message] = _step.value;
          {
            throwIfStrictError(state);
            yield message;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _awaitAsyncGenerator(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } catch (_unused3) {
      throwIfStrictError(state);
    } finally {
      controller.abort();
      removeReference(channel, reference);
      if (!isSubprocess) {
        disconnect(anyProcess);
      }
      if (shouldAwait) {
        yield _awaitAsyncGenerator(anyProcess);
      }
    }
  });
  return function iterateOnMessages(_x) {
    return _ref.apply(this, arguments);
  };
}();
const throwIfStrictError = ({
  error
}) => {
  if (error) {
    throw error;
  }
};

const addIpcMethods = (subprocess, {
  ipc
}) => {
  Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
};
const getIpcExport = () => {
  const anyProcess = process$6;
  const isSubprocess = true;
  const ipc = process$6.channel !== undefined;
  return Object.assign(Object.assign({}, getIpcMethods(anyProcess, isSubprocess, ipc)), {}, {
    getCancelSignal: getCancelSignal.bind(undefined, {
      anyProcess,
      channel: anyProcess.channel,
      isSubprocess,
      ipc
    })
  });
};
const getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
  sendMessage: sendMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getOneMessage: getOneMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  }),
  getEachMessage: getEachMessage.bind(undefined, {
    anyProcess,
    channel: anyProcess.channel,
    isSubprocess,
    ipc
  })
});

const handleEarlyError = ({
  error,
  command,
  escapedCommand,
  fileDescriptors,
  options,
  startTime,
  verboseInfo
}) => {
  cleanupCustomStreams(fileDescriptors);
  const subprocess = new node_child_process.ChildProcess();
  createDummyStreams(subprocess, fileDescriptors);
  Object.assign(subprocess, {
    readable,
    writable,
    duplex
  });
  const earlyError = makeEarlyError({
    error,
    command,
    escapedCommand,
    fileDescriptors,
    options,
    startTime,
    isSync: false
  });
  const promise = handleDummyPromise(earlyError, verboseInfo, options);
  return {
    subprocess,
    promise
  };
};
const createDummyStreams = (subprocess, fileDescriptors) => {
  const stdin = createDummyStream();
  const stdout = createDummyStream();
  const stderr = createDummyStream();
  const extraStdio = Array.from({
    length: fileDescriptors.length - 3
  }, createDummyStream);
  const all = createDummyStream();
  const stdio = [stdin, stdout, stderr, ...extraStdio];
  Object.assign(subprocess, {
    stdin,
    stdout,
    stderr,
    all,
    stdio
  });
};
const createDummyStream = () => {
  const stream = new node_stream.PassThrough();
  stream.end();
  return stream;
};
const readable = () => new node_stream.Readable({
  read() {}
});
const writable = () => new node_stream.Writable({
  write() {}
});
const duplex = () => new node_stream.Duplex({
  read() {},
  write() {}
});
const handleDummyPromise = function () {
  var _ref = _asyncToGenerator(function* (error, verboseInfo, options) {
    return handleResult(error, verboseInfo, options);
  });
  return function handleDummyPromise(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

const handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false);
const forbiddenIfAsync = ({
  type,
  optionName
}) => {
  throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
};
const addProperties = {
  fileNumber: forbiddenIfAsync,
  generator: generatorToStream,
  asyncGenerator: generatorToStream,
  nodeStream: ({
    value
  }) => ({
    stream: value
  }),
  webTransform({
    value: {
      transform,
      writableObjectMode,
      readableObjectMode
    }
  }) {
    const objectMode = writableObjectMode || readableObjectMode;
    const stream = node_stream.Duplex.fromWeb(transform, {
      objectMode
    });
    return {
      stream
    };
  },
  duplex: ({
    value: {
      transform
    }
  }) => ({
    stream: transform
  }),
  native() {}
};
const addPropertiesAsync = {
  input: Object.assign(Object.assign({}, addProperties), {}, {
    fileUrl: ({
      value
    }) => ({
      stream: node_fs.createReadStream(value)
    }),
    filePath: ({
      value: {
        file
      }
    }) => ({
      stream: node_fs.createReadStream(file)
    }),
    webStream: ({
      value
    }) => ({
      stream: node_stream.Readable.fromWeb(value)
    }),
    iterable: ({
      value
    }) => ({
      stream: node_stream.Readable.from(value)
    }),
    asyncIterable: ({
      value
    }) => ({
      stream: node_stream.Readable.from(value)
    }),
    string: ({
      value
    }) => ({
      stream: node_stream.Readable.from(value)
    }),
    uint8Array: ({
      value
    }) => ({
      stream: node_stream.Readable.from(node_buffer.Buffer.from(value))
    })
  }),
  output: Object.assign(Object.assign({}, addProperties), {}, {
    fileUrl: ({
      value
    }) => ({
      stream: node_fs.createWriteStream(value)
    }),
    filePath: ({
      value: {
        file
      }
    }) => ({
      stream: node_fs.createWriteStream(file)
    }),
    webStream: ({
      value
    }) => ({
      stream: node_stream.Writable.fromWeb(value)
    }),
    iterable: forbiddenIfAsync,
    asyncIterable: forbiddenIfAsync,
    string: forbiddenIfAsync,
    uint8Array: forbiddenIfAsync
  })
};

function mergeStreams(streams) {
  if (!Array.isArray(streams)) {
    throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
  }
  for (const stream of streams) {
    validateStream(stream);
  }
  const objectMode = streams.some(({
    readableObjectMode
  }) => readableObjectMode);
  const highWaterMark = getHighWaterMark(streams, objectMode);
  const passThroughStream = new MergedStream({
    objectMode,
    writableHighWaterMark: highWaterMark,
    readableHighWaterMark: highWaterMark
  });
  for (const stream of streams) {
    passThroughStream.add(stream);
  }
  return passThroughStream;
}
const getHighWaterMark = (streams, objectMode) => {
  if (streams.length === 0) {
    return node_stream.getDefaultHighWaterMark(objectMode);
  }
  const highWaterMarks = streams.filter(({
    readableObjectMode
  }) => readableObjectMode === objectMode).map(({
    readableHighWaterMark
  }) => readableHighWaterMark);
  return Math.max(...highWaterMarks);
};
var _streams = new WeakMap();
var _ended = new WeakMap();
var _aborted = new WeakMap();
var _onFinished = new WeakMap();
var _unpipeEvent = new WeakMap();
var _streamPromises = new WeakMap();
class MergedStream extends node_stream.PassThrough {
  constructor(...args) {
    super(...args);
    _classPrivateFieldInitSpec(this, _streams, new Set([]));
    _classPrivateFieldInitSpec(this, _ended, new Set([]));
    _classPrivateFieldInitSpec(this, _aborted, new Set([]));
    _classPrivateFieldInitSpec(this, _onFinished, void 0);
    _classPrivateFieldInitSpec(this, _unpipeEvent, Symbol('unpipe'));
    _classPrivateFieldInitSpec(this, _streamPromises, new WeakMap());
  }
  add(stream) {
    var _classPrivateFieldGet2$1;
    validateStream(stream);
    if (_classPrivateFieldGet2(_streams, this).has(stream)) {
      return;
    }
    _classPrivateFieldGet2(_streams, this).add(stream);
    (_classPrivateFieldGet2$1 = _classPrivateFieldGet2(_onFinished, this)) != null ? _classPrivateFieldGet2$1 : _classPrivateFieldSet2(_onFinished, this, onMergedStreamFinished(this, _classPrivateFieldGet2(_streams, this), _classPrivateFieldGet2(_unpipeEvent, this)));
    const streamPromise = endWhenStreamsDone({
      passThroughStream: this,
      stream,
      streams: _classPrivateFieldGet2(_streams, this),
      ended: _classPrivateFieldGet2(_ended, this),
      aborted: _classPrivateFieldGet2(_aborted, this),
      onFinished: _classPrivateFieldGet2(_onFinished, this),
      unpipeEvent: _classPrivateFieldGet2(_unpipeEvent, this)
    });
    _classPrivateFieldGet2(_streamPromises, this).set(stream, streamPromise);
    stream.pipe(this, {
      end: false
    });
  }
  remove(stream) {
    var _this = this;
    return _asyncToGenerator(function* () {
      validateStream(stream);
      if (!_classPrivateFieldGet2(_streams, _this).has(stream)) {
        return false;
      }
      const streamPromise = _classPrivateFieldGet2(_streamPromises, _this).get(stream);
      if (streamPromise === undefined) {
        return false;
      }
      _classPrivateFieldGet2(_streamPromises, _this).delete(stream);
      stream.unpipe(_this);
      yield streamPromise;
      return true;
    })();
  }
}
const onMergedStreamFinished = function () {
  var _ref = _asyncToGenerator(function* (passThroughStream, streams, unpipeEvent) {
    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
    const controller = new AbortController();
    try {
      yield Promise.race([onMergedStreamEnd(passThroughStream, controller), onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller)]);
    } finally {
      controller.abort();
      updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
    }
  });
  return function onMergedStreamFinished(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const onMergedStreamEnd = function () {
  var _ref2 = _asyncToGenerator(function* (passThroughStream, {
    signal
  }) {
    try {
      yield promises$1.finished(passThroughStream, {
        signal,
        cleanup: true
      });
    } catch (error) {
      errorOrAbortStream(passThroughStream, error);
      throw error;
    }
  });
  return function onMergedStreamEnd(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
const onInputStreamsUnpipe = function () {
  var _ref3 = _asyncToGenerator(function* (passThroughStream, streams, unpipeEvent, {
    signal
  }) {
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(node_events.on(passThroughStream, 'unpipe', {
          signal
        })), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const [unpipedStream] = _step.value;
        {
          if (streams.has(unpipedStream)) {
            unpipedStream.emit(unpipeEvent);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
  return function onInputStreamsUnpipe(_x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
const validateStream = stream => {
  if (typeof (stream == null ? void 0 : stream.pipe) !== 'function') {
    throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
  }
};
const endWhenStreamsDone = function () {
  var _ref4 = _asyncToGenerator(function* ({
    passThroughStream,
    stream,
    streams,
    ended,
    aborted,
    onFinished,
    unpipeEvent
  }) {
    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
    const controller = new AbortController();
    try {
      yield Promise.race([afterMergedStreamFinished(onFinished, stream, controller), onInputStreamEnd({
        passThroughStream,
        stream,
        streams,
        ended,
        aborted,
        controller
      }), onInputStreamUnpipe({
        stream,
        streams,
        ended,
        aborted,
        unpipeEvent,
        controller
      })]);
    } finally {
      controller.abort();
      updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
    }
    if (streams.size > 0 && streams.size === ended.size + aborted.size) {
      if (ended.size === 0 && aborted.size > 0) {
        abortStream(passThroughStream);
      } else {
        endStream(passThroughStream);
      }
    }
  });
  return function endWhenStreamsDone(_x10) {
    return _ref4.apply(this, arguments);
  };
}();
const afterMergedStreamFinished = function () {
  var _ref5 = _asyncToGenerator(function* (onFinished, stream, {
    signal
  }) {
    try {
      yield onFinished;
      if (!signal.aborted) {
        abortStream(stream);
      }
    } catch (error) {
      if (!signal.aborted) {
        errorOrAbortStream(stream, error);
      }
    }
  });
  return function afterMergedStreamFinished(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
const onInputStreamEnd = function () {
  var _ref6 = _asyncToGenerator(function* ({
    passThroughStream,
    stream,
    streams,
    ended,
    aborted,
    controller: {
      signal
    }
  }) {
    try {
      yield promises$1.finished(stream, {
        signal,
        cleanup: true,
        readable: true,
        writable: false
      });
      if (streams.has(stream)) {
        ended.add(stream);
      }
    } catch (error) {
      if (signal.aborted || !streams.has(stream)) {
        return;
      }
      if (isAbortError(error)) {
        aborted.add(stream);
      } else {
        errorStream(passThroughStream, error);
      }
    }
  });
  return function onInputStreamEnd(_x14) {
    return _ref6.apply(this, arguments);
  };
}();
const onInputStreamUnpipe = function () {
  var _ref7 = _asyncToGenerator(function* ({
    stream,
    streams,
    ended,
    aborted,
    unpipeEvent,
    controller: {
      signal
    }
  }) {
    yield node_events.once(stream, unpipeEvent, {
      signal
    });
    if (!stream.readable) {
      return node_events.once(signal, 'abort', {
        signal
      });
    }
    streams.delete(stream);
    ended.delete(stream);
    aborted.delete(stream);
  });
  return function onInputStreamUnpipe(_x15) {
    return _ref7.apply(this, arguments);
  };
}();
const endStream = stream => {
  if (stream.writable) {
    stream.end();
  }
};
const errorOrAbortStream = (stream, error) => {
  if (isAbortError(error)) {
    abortStream(stream);
  } else {
    errorStream(stream, error);
  }
};
const isAbortError = error => (error == null ? void 0 : error.code) === 'ERR_STREAM_PREMATURE_CLOSE';
const abortStream = stream => {
  if (stream.readable || stream.writable) {
    stream.destroy();
  }
};
const errorStream = (stream, error) => {
  if (!stream.destroyed) {
    stream.once('error', noop);
    stream.destroy(error);
  }
};
const noop = () => {};
const updateMaxListeners = (passThroughStream, increment) => {
  const maxListeners = passThroughStream.getMaxListeners();
  if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
    passThroughStream.setMaxListeners(maxListeners + increment);
  }
};
const PASSTHROUGH_LISTENERS_COUNT = 2;
const PASSTHROUGH_LISTENERS_PER_STREAM = 1;

const pipeStreams = (source, destination) => {
  source.pipe(destination);
  onSourceFinish(source, destination);
  onDestinationFinish(source, destination);
};
const onSourceFinish = function () {
  var _ref = _asyncToGenerator(function* (source, destination) {
    if (isStandardStream(source) || isStandardStream(destination)) {
      return;
    }
    try {
      yield promises$1.finished(source, {
        cleanup: true,
        readable: true,
        writable: false
      });
    } catch (_unused) {}
    endDestinationStream(destination);
  });
  return function onSourceFinish(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const endDestinationStream = destination => {
  if (destination.writable) {
    destination.end();
  }
};
const onDestinationFinish = function () {
  var _ref2 = _asyncToGenerator(function* (source, destination) {
    if (isStandardStream(source) || isStandardStream(destination)) {
      return;
    }
    try {
      yield promises$1.finished(destination, {
        cleanup: true,
        readable: false,
        writable: true
      });
    } catch (_unused2) {}
    abortSourceStream(source);
  });
  return function onDestinationFinish(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
const abortSourceStream = source => {
  if (source.readable) {
    source.destroy();
  }
};

const pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
  const pipeGroups = new Map();
  for (const [fdNumber, {
    stdioItems,
    direction
  }] of Object.entries(fileDescriptors)) {
    for (const {
      stream
    } of stdioItems.filter(({
      type
    }) => TRANSFORM_TYPES.has(type))) {
      pipeTransform(subprocess, stream, direction, fdNumber);
    }
    for (const {
      stream
    } of stdioItems.filter(({
      type
    }) => !TRANSFORM_TYPES.has(type))) {
      pipeStdioItem({
        subprocess,
        stream,
        direction,
        fdNumber,
        pipeGroups,
        controller
      });
    }
  }
  for (const [outputStream, inputStreams] of pipeGroups.entries()) {
    const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
    pipeStreams(inputStream, outputStream);
  }
};
const pipeTransform = (subprocess, stream, direction, fdNumber) => {
  if (direction === 'output') {
    pipeStreams(subprocess.stdio[fdNumber], stream);
  } else {
    pipeStreams(stream, subprocess.stdio[fdNumber]);
  }
  const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
  if (streamProperty !== undefined) {
    subprocess[streamProperty] = stream;
  }
  subprocess.stdio[fdNumber] = stream;
};
const SUBPROCESS_STREAM_PROPERTIES = ['stdin', 'stdout', 'stderr'];
const pipeStdioItem = ({
  subprocess,
  stream,
  direction,
  fdNumber,
  pipeGroups,
  controller
}) => {
  var _pipeGroups$get;
  if (stream === undefined) {
    return;
  }
  setStandardStreamMaxListeners(stream, controller);
  const [inputStream, outputStream] = direction === 'output' ? [stream, subprocess.stdio[fdNumber]] : [subprocess.stdio[fdNumber], stream];
  const outputStreams = (_pipeGroups$get = pipeGroups.get(inputStream)) != null ? _pipeGroups$get : [];
  pipeGroups.set(inputStream, [...outputStreams, outputStream]);
};
const setStandardStreamMaxListeners = (stream, {
  signal
}) => {
  if (isStandardStream(stream)) {
    incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
  }
};
const MAX_LISTENERS_INCREMENT = 2;

const signals = [];
signals.push('SIGHUP', 'SIGINT', 'SIGTERM');
if (process.platform !== 'win32') {
  signals.push('SIGALRM', 'SIGABRT', 'SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT');
}
if (process.platform === 'linux') {
  signals.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT');
}

const processOk = process => !!process && typeof process === 'object' && typeof process.removeListener === 'function' && typeof process.emit === 'function' && typeof process.reallyExit === 'function' && typeof process.listeners === 'function' && typeof process.kill === 'function' && typeof process.pid === 'number' && typeof process.on === 'function';
const kExitEmitter = Symbol.for('signal-exit emitter');
const global$1 = globalThis;
const ObjectDefineProperty = Object.defineProperty.bind(Object);
class Emitter {
  constructor() {
    _defineProperty(this, "emitted", {
      afterExit: false,
      exit: false
    });
    _defineProperty(this, "listeners", {
      afterExit: [],
      exit: []
    });
    _defineProperty(this, "count", 0);
    _defineProperty(this, "id", Math.random());
    if (global$1[kExitEmitter]) {
      return global$1[kExitEmitter];
    }
    ObjectDefineProperty(global$1, kExitEmitter, {
      value: this,
      writable: false,
      enumerable: false,
      configurable: false
    });
  }
  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  removeListener(ev, fn) {
    const list = this.listeners[ev];
    const i = list.indexOf(fn);
    if (i === -1) {
      return;
    }
    if (i === 0 && list.length === 1) {
      list.length = 0;
    } else {
      list.splice(i, 1);
    }
  }
  emit(ev, code, signal) {
    if (this.emitted[ev]) {
      return false;
    }
    this.emitted[ev] = true;
    let ret = false;
    for (const fn of this.listeners[ev]) {
      ret = fn(code, signal) === true || ret;
    }
    if (ev === 'exit') {
      ret = this.emit('afterExit', code, signal) || ret;
    }
    return ret;
  }
}
class SignalExitBase {}
const signalExitWrap = handler => {
  return {
    onExit(cb, opts) {
      return handler.onExit(cb, opts);
    },
    load() {
      return handler.load();
    },
    unload() {
      return handler.unload();
    }
  };
};
class SignalExitFallback extends SignalExitBase {
  onExit() {
    return () => {};
  }
  load() {}
  unload() {}
}
var _hupSig = new WeakMap();
var _emitter = new WeakMap();
var _process = new WeakMap();
var _originalProcessEmit = new WeakMap();
var _originalProcessReallyExit = new WeakMap();
var _sigListeners = new WeakMap();
var _loaded = new WeakMap();
var _SignalExit_brand = new WeakSet();
class SignalExit extends SignalExitBase {
  constructor(_process2) {
    super();
    _classPrivateMethodInitSpec(this, _SignalExit_brand);
    _classPrivateFieldInitSpec(this, _hupSig, process$1.platform === 'win32' ? 'SIGINT' : 'SIGHUP');
    _classPrivateFieldInitSpec(this, _emitter, new Emitter());
    _classPrivateFieldInitSpec(this, _process, void 0);
    _classPrivateFieldInitSpec(this, _originalProcessEmit, void 0);
    _classPrivateFieldInitSpec(this, _originalProcessReallyExit, void 0);
    _classPrivateFieldInitSpec(this, _sigListeners, {});
    _classPrivateFieldInitSpec(this, _loaded, false);
    _classPrivateFieldSet2(_process, this, _process2);
    _classPrivateFieldSet2(_sigListeners, this, {});
    for (const sig of signals) {
      _classPrivateFieldGet2(_sigListeners, this)[sig] = () => {
        const listeners = _classPrivateFieldGet2(_process, this).listeners(sig);
        let {
          count
        } = _classPrivateFieldGet2(_emitter, this);
        const p = _process2;
        if (typeof p.__signal_exit_emitter__ === 'object' && typeof p.__signal_exit_emitter__.count === 'number') {
          count += p.__signal_exit_emitter__.count;
        }
        if (listeners.length === count) {
          this.unload();
          const ret = _classPrivateFieldGet2(_emitter, this).emit('exit', null, sig);
          const s = sig === 'SIGHUP' ? _classPrivateFieldGet2(_hupSig, this) : sig;
          if (!ret) _process2.kill(_process2.pid, s);
        }
      };
    }
    _classPrivateFieldSet2(_originalProcessReallyExit, this, _process2.reallyExit);
    _classPrivateFieldSet2(_originalProcessEmit, this, _process2.emit);
  }
  onExit(cb, opts) {
    if (!processOk(_classPrivateFieldGet2(_process, this))) {
      return () => {};
    }
    if (_classPrivateFieldGet2(_loaded, this) === false) {
      this.load();
    }
    const ev = opts != null && opts.alwaysLast ? 'afterExit' : 'exit';
    _classPrivateFieldGet2(_emitter, this).on(ev, cb);
    return () => {
      _classPrivateFieldGet2(_emitter, this).removeListener(ev, cb);
      if (_classPrivateFieldGet2(_emitter, this).listeners['exit'].length === 0 && _classPrivateFieldGet2(_emitter, this).listeners['afterExit'].length === 0) {
        this.unload();
      }
    };
  }
  load() {
    if (_classPrivateFieldGet2(_loaded, this)) {
      return;
    }
    _classPrivateFieldSet2(_loaded, this, true);
    _classPrivateFieldGet2(_emitter, this).count += 1;
    for (const sig of signals) {
      try {
        const fn = _classPrivateFieldGet2(_sigListeners, this)[sig];
        if (fn) _classPrivateFieldGet2(_process, this).on(sig, fn);
      } catch (_) {}
    }
    _classPrivateFieldGet2(_process, this).emit = (ev, ...a) => {
      return _assertClassBrand(_SignalExit_brand, this, _processEmit).call(this, ev, ...a);
    };
    _classPrivateFieldGet2(_process, this).reallyExit = code => {
      return _assertClassBrand(_SignalExit_brand, this, _processReallyExit).call(this, code);
    };
  }
  unload() {
    if (!_classPrivateFieldGet2(_loaded, this)) {
      return;
    }
    _classPrivateFieldSet2(_loaded, this, false);
    signals.forEach(sig => {
      const listener = _classPrivateFieldGet2(_sigListeners, this)[sig];
      if (!listener) {
        throw new Error('Listener not defined for signal: ' + sig);
      }
      try {
        _classPrivateFieldGet2(_process, this).removeListener(sig, listener);
      } catch (_) {}
    });
    _classPrivateFieldGet2(_process, this).emit = _classPrivateFieldGet2(_originalProcessEmit, this);
    _classPrivateFieldGet2(_process, this).reallyExit = _classPrivateFieldGet2(_originalProcessReallyExit, this);
    _classPrivateFieldGet2(_emitter, this).count -= 1;
  }
}
function _processReallyExit(code) {
  if (!processOk(_classPrivateFieldGet2(_process, this))) {
    return 0;
  }
  _classPrivateFieldGet2(_process, this).exitCode = code || 0;
  _classPrivateFieldGet2(_emitter, this).emit('exit', _classPrivateFieldGet2(_process, this).exitCode, null);
  return _classPrivateFieldGet2(_originalProcessReallyExit, this).call(_classPrivateFieldGet2(_process, this), _classPrivateFieldGet2(_process, this).exitCode);
}
function _processEmit(ev, ...args) {
  const og = _classPrivateFieldGet2(_originalProcessEmit, this);
  if (ev === 'exit' && processOk(_classPrivateFieldGet2(_process, this))) {
    if (typeof args[0] === 'number') {
      _classPrivateFieldGet2(_process, this).exitCode = args[0];
    }
    const ret = og.call(_classPrivateFieldGet2(_process, this), ev, ...args);
    _classPrivateFieldGet2(_emitter, this).emit('exit', _classPrivateFieldGet2(_process, this).exitCode, null);
    return ret;
  } else {
    return og.call(_classPrivateFieldGet2(_process, this), ev, ...args);
  }
}
const process$1 = globalThis.process;
const {
  onExit,
  load,
  unload
} = signalExitWrap(processOk(process$1) ? new SignalExit(process$1) : new SignalExitFallback());

const cleanupOnExit = (subprocess, {
  cleanup,
  detached
}, {
  signal
}) => {
  if (!cleanup || detached) {
    return;
  }
  const removeExitHandler = onExit(() => {
    subprocess.kill();
  });
  node_events.addAbortListener(signal, () => {
    removeExitHandler();
  });
};

const normalizePipeArguments = ({
  source,
  sourcePromise,
  boundOptions,
  createNested
}, ...pipeArguments) => {
  const startTime = getStartTime();
  const {
    destination,
    destinationStream,
    destinationError,
    from,
    unpipeSignal
  } = getDestinationStream(boundOptions, createNested, pipeArguments);
  const {
    sourceStream,
    sourceError
  } = getSourceStream(source, from);
  const {
    options: sourceOptions,
    fileDescriptors
  } = SUBPROCESS_OPTIONS.get(source);
  return {
    sourcePromise,
    sourceStream,
    sourceOptions,
    sourceError,
    destination,
    destinationStream,
    destinationError,
    unpipeSignal,
    fileDescriptors,
    startTime
  };
};
const getDestinationStream = (boundOptions, createNested, pipeArguments) => {
  try {
    const {
      destination,
      pipeOptions: {
        from,
        to,
        unpipeSignal
      } = {}
    } = getDestination(boundOptions, createNested, ...pipeArguments);
    const destinationStream = getToStream(destination, to);
    return {
      destination,
      destinationStream,
      from,
      unpipeSignal
    };
  } catch (error) {
    return {
      destinationError: error
    };
  }
};
const getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
  if (Array.isArray(firstArgument)) {
    const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
    return {
      destination,
      pipeOptions: boundOptions
    };
  }
  if (typeof firstArgument === 'string' || firstArgument instanceof URL) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
    }
    const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
    const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
    return {
      destination,
      pipeOptions: rawOptions
    };
  }
  if (SUBPROCESS_OPTIONS.has(firstArgument)) {
    if (Object.keys(boundOptions).length > 0) {
      throw new TypeError('Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).');
    }
    return {
      destination: firstArgument,
      pipeOptions: pipeArguments[0]
    };
  }
  throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
};
const mapDestinationArguments = ({
  options
}) => ({
  options: Object.assign(Object.assign({}, options), {}, {
    stdin: 'pipe',
    piped: true
  })
});
const getSourceStream = (source, from) => {
  try {
    const sourceStream = getFromStream(source, from);
    return {
      sourceStream
    };
  } catch (error) {
    return {
      sourceError: error
    };
  }
};

const handlePipeArgumentsError = ({
  sourceStream,
  sourceError,
  destinationStream,
  destinationError,
  fileDescriptors,
  sourceOptions,
  startTime
}) => {
  const error = getPipeArgumentsError({
    sourceStream,
    sourceError,
    destinationStream,
    destinationError
  });
  if (error !== undefined) {
    throw createNonCommandError({
      error,
      fileDescriptors,
      sourceOptions,
      startTime
    });
  }
};
const getPipeArgumentsError = ({
  sourceStream,
  sourceError,
  destinationStream,
  destinationError
}) => {
  if (sourceError !== undefined && destinationError !== undefined) {
    return destinationError;
  }
  if (destinationError !== undefined) {
    abortSourceStream(sourceStream);
    return destinationError;
  }
  if (sourceError !== undefined) {
    endDestinationStream(destinationStream);
    return sourceError;
  }
};
const createNonCommandError = ({
  error,
  fileDescriptors,
  sourceOptions,
  startTime
}) => makeEarlyError({
  error,
  command: PIPE_COMMAND_MESSAGE,
  escapedCommand: PIPE_COMMAND_MESSAGE,
  fileDescriptors,
  options: sourceOptions,
  startTime,
  isSync: false
});
const PIPE_COMMAND_MESSAGE = 'source.pipe(destination)';

const waitForBothSubprocesses = function () {
  var _ref = _asyncToGenerator(function* (subprocessPromises) {
    const [{
      status: sourceStatus,
      reason: sourceReason,
      value: sourceResult = sourceReason
    }, {
      status: destinationStatus,
      reason: destinationReason,
      value: destinationResult = destinationReason
    }] = yield subprocessPromises;
    if (!destinationResult.pipedFrom.includes(sourceResult)) {
      destinationResult.pipedFrom.push(sourceResult);
    }
    if (destinationStatus === 'rejected') {
      throw destinationResult;
    }
    if (sourceStatus === 'rejected') {
      throw sourceResult;
    }
    return destinationResult;
  });
  return function waitForBothSubprocesses(_x) {
    return _ref.apply(this, arguments);
  };
}();

const pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
  const mergedStream = MERGED_STREAMS.has(destinationStream) ? pipeMoreSubprocessStream(sourceStream, destinationStream) : pipeFirstSubprocessStream(sourceStream, destinationStream);
  incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
  incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
  cleanupMergedStreamsMap(destinationStream);
  return mergedStream;
};
const pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = mergeStreams([sourceStream]);
  pipeStreams(mergedStream, destinationStream);
  MERGED_STREAMS.set(destinationStream, mergedStream);
  return mergedStream;
};
const pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
  const mergedStream = MERGED_STREAMS.get(destinationStream);
  mergedStream.add(sourceStream);
  return mergedStream;
};
const cleanupMergedStreamsMap = function () {
  var _ref = _asyncToGenerator(function* (destinationStream) {
    try {
      yield promises$1.finished(destinationStream, {
        cleanup: true,
        readable: false,
        writable: true
      });
    } catch (_unused) {}
    MERGED_STREAMS.delete(destinationStream);
  });
  return function cleanupMergedStreamsMap(_x) {
    return _ref.apply(this, arguments);
  };
}();
const MERGED_STREAMS = new WeakMap();
const SOURCE_LISTENERS_PER_PIPE = 2;
const DESTINATION_LISTENERS_PER_PIPE = 1;

const unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === undefined ? [] : [unpipeOnSignalAbort(unpipeSignal, unpipeContext)];
const unpipeOnSignalAbort = function () {
  var _ref = _asyncToGenerator(function* (unpipeSignal, {
    sourceStream,
    mergedStream,
    fileDescriptors,
    sourceOptions,
    startTime
  }) {
    yield node_util.aborted(unpipeSignal, sourceStream);
    yield mergedStream.remove(sourceStream);
    const error = new Error('Pipe canceled by `unpipeSignal` option.');
    throw createNonCommandError({
      error,
      fileDescriptors,
      sourceOptions,
      startTime
    });
  });
  return function unpipeOnSignalAbort(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const _excluded$1 = ["destination"];
const pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
  if (isPlainObject(pipeArguments[0])) {
    return pipeToSubprocess.bind(undefined, Object.assign(Object.assign({}, sourceInfo), {}, {
      boundOptions: Object.assign(Object.assign({}, sourceInfo.boundOptions), pipeArguments[0])
    }));
  }
  const _normalizePipeArgumen = normalizePipeArguments(sourceInfo, ...pipeArguments),
    {
      destination
    } = _normalizePipeArgumen,
    normalizedInfo = _objectWithoutProperties(_normalizePipeArgumen, _excluded$1);
  const promise = handlePipePromise(Object.assign(Object.assign({}, normalizedInfo), {}, {
    destination
  }));
  promise.pipe = pipeToSubprocess.bind(undefined, Object.assign(Object.assign({}, sourceInfo), {}, {
    source: destination,
    sourcePromise: promise,
    boundOptions: {}
  }));
  return promise;
};
const handlePipePromise = function () {
  var _ref = _asyncToGenerator(function* ({
    sourcePromise,
    sourceStream,
    sourceOptions,
    sourceError,
    destination,
    destinationStream,
    destinationError,
    unpipeSignal,
    fileDescriptors,
    startTime
  }) {
    const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
    handlePipeArgumentsError({
      sourceStream,
      sourceError,
      destinationStream,
      destinationError,
      fileDescriptors,
      sourceOptions,
      startTime
    });
    const maxListenersController = new AbortController();
    try {
      const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
      return yield Promise.race([waitForBothSubprocesses(subprocessPromises), ...unpipeOnAbort(unpipeSignal, {
        sourceStream,
        mergedStream,
        sourceOptions,
        fileDescriptors,
        startTime
      })]);
    } finally {
      maxListenersController.abort();
    }
  });
  return function handlePipePromise(_x) {
    return _ref.apply(this, arguments);
  };
}();
const getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);

const iterateOnSubprocessStream = ({
  subprocessStdout,
  subprocess,
  binary,
  shouldEncode,
  encoding,
  preserveNewlines
}) => {
  const controller = new AbortController();
  stopReadingOnExit(subprocess, controller);
  return iterateOnStream({
    stream: subprocessStdout,
    controller,
    binary,
    shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
    encoding,
    shouldSplit: !subprocessStdout.readableObjectMode,
    preserveNewlines
  });
};
const stopReadingOnExit = function () {
  var _ref2 = _asyncToGenerator(function* (subprocess, controller) {
    try {
      yield subprocess;
    } catch (_unused) {} finally {
      controller.abort();
    }
  });
  return function stopReadingOnExit(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
const iterateForResult = ({
  stream,
  onStreamEnd,
  lines,
  encoding,
  stripFinalNewline,
  allMixed
}) => {
  const controller = new AbortController();
  stopReadingOnStreamEnd(onStreamEnd, controller, stream);
  const objectMode = stream.readableObjectMode && !allMixed;
  return iterateOnStream({
    stream,
    controller,
    binary: encoding === 'buffer',
    shouldEncode: !objectMode,
    encoding,
    shouldSplit: !objectMode && lines,
    preserveNewlines: !stripFinalNewline
  });
};
const stopReadingOnStreamEnd = function () {
  var _ref3 = _asyncToGenerator(function* (onStreamEnd, controller, stream) {
    try {
      yield onStreamEnd;
    } catch (_unused2) {
      stream.destroy();
    } finally {
      controller.abort();
    }
  });
  return function stopReadingOnStreamEnd(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
const iterateOnStream = ({
  stream,
  controller,
  binary,
  shouldEncode,
  encoding,
  shouldSplit,
  preserveNewlines
}) => {
  const onStdoutChunk = node_events.on(stream, 'data', {
    signal: controller.signal,
    highWaterMark: HIGH_WATER_MARK,
    highWatermark: HIGH_WATER_MARK
  });
  return iterateOnData({
    onStdoutChunk,
    controller,
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  });
};
const DEFAULT_OBJECT_HIGH_WATER_MARK = node_stream.getDefaultHighWaterMark(true);
const HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;
const iterateOnData = function () {
  var _ref = _wrapAsyncGenerator(function* ({
    onStdoutChunk,
    controller,
    binary,
    shouldEncode,
    encoding,
    shouldSplit,
    preserveNewlines
  }) {
    const generators = getGenerators({
      binary,
      shouldEncode,
      encoding,
      shouldSplit,
      preserveNewlines
    });
    try {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = _asyncIterator(onStdoutChunk), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const [chunk] = _step.value;
          {
            yield* _asyncGeneratorDelegate(_asyncIterator(transformChunkSync(chunk, generators, 0)));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _awaitAsyncGenerator(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        throw error;
      }
    } finally {
      yield* _asyncGeneratorDelegate(_asyncIterator(finalChunksSync(generators)));
    }
  });
  return function iterateOnData(_x) {
    return _ref.apply(this, arguments);
  };
}();
const getGenerators = ({
  binary,
  shouldEncode,
  encoding,
  shouldSplit,
  preserveNewlines
}) => [getEncodingTransformGenerator(binary, encoding, !shouldEncode), getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {})].filter(Boolean);

const getStreamOutput = function () {
  var _ref = _asyncToGenerator(function* ({
    stream,
    onStreamEnd,
    fdNumber,
    encoding,
    buffer,
    maxBuffer,
    lines,
    allMixed,
    stripFinalNewline,
    verboseInfo,
    streamInfo
  }) {
    const logPromise = logOutputAsync({
      stream,
      onStreamEnd,
      fdNumber,
      encoding,
      allMixed,
      verboseInfo,
      streamInfo
    });
    if (!buffer) {
      yield Promise.all([resumeStream(stream), logPromise]);
      return;
    }
    const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline, fdNumber);
    const iterable = iterateForResult({
      stream,
      onStreamEnd,
      lines,
      encoding,
      stripFinalNewline: stripFinalNewlineValue,
      allMixed
    });
    const [output] = yield Promise.all([getStreamContents({
      stream,
      iterable,
      fdNumber,
      encoding,
      maxBuffer,
      lines
    }), logPromise]);
    return output;
  });
  return function getStreamOutput(_x) {
    return _ref.apply(this, arguments);
  };
}();
const logOutputAsync = function () {
  var _ref2 = _asyncToGenerator(function* ({
    stream,
    onStreamEnd,
    fdNumber,
    encoding,
    allMixed,
    verboseInfo,
    streamInfo: {
      fileDescriptors
    }
  }) {
    var _fileDescriptors$fdNu;
    if (!shouldLogOutput({
      stdioItems: (_fileDescriptors$fdNu = fileDescriptors[fdNumber]) == null ? void 0 : _fileDescriptors$fdNu.stdioItems,
      encoding,
      verboseInfo,
      fdNumber
    })) {
      return;
    }
    const linesIterable = iterateForResult({
      stream,
      onStreamEnd,
      lines: true,
      encoding,
      stripFinalNewline: true,
      allMixed
    });
    yield logLines(linesIterable, stream, fdNumber, verboseInfo);
  });
  return function logOutputAsync(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const resumeStream = function () {
  var _ref3 = _asyncToGenerator(function* (stream) {
    yield promises.setImmediate();
    if (stream.readableFlowing === null) {
      stream.resume();
    }
  });
  return function resumeStream(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
const getStreamContents = function () {
  var _ref4 = _asyncToGenerator(function* ({
    stream,
    stream: {
      readableObjectMode
    },
    iterable,
    fdNumber,
    encoding,
    maxBuffer,
    lines
  }) {
    try {
      if (readableObjectMode || lines) {
        return yield getStreamAsArray(iterable, {
          maxBuffer
        });
      }
      if (encoding === 'buffer') {
        return new Uint8Array(yield getStreamAsArrayBuffer(iterable, {
          maxBuffer
        }));
      }
      return yield getStreamAsString(iterable, {
        maxBuffer
      });
    } catch (error) {
      return handleBufferedData(handleMaxBuffer({
        error,
        stream,
        readableObjectMode,
        lines,
        encoding,
        fdNumber
      }));
    }
  });
  return function getStreamContents(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
const getBufferedData = function () {
  var _ref5 = _asyncToGenerator(function* (streamPromise) {
    try {
      return yield streamPromise;
    } catch (error) {
      return handleBufferedData(error);
    }
  });
  return function getBufferedData(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
const handleBufferedData = ({
  bufferedData
}) => isArrayBuffer(bufferedData) ? new Uint8Array(bufferedData) : bufferedData;

const waitForStream = function () {
  var _ref = _asyncToGenerator(function* (stream, fdNumber, streamInfo, {
    isSameDirection,
    stopOnExit = false
  } = {}) {
    const state = handleStdinDestroy(stream, streamInfo);
    const abortController = new AbortController();
    try {
      yield Promise.race([...(stopOnExit ? [streamInfo.exitPromise] : []), promises$1.finished(stream, {
        cleanup: true,
        signal: abortController.signal
      })]);
    } catch (error) {
      if (!state.stdinCleanedUp) {
        handleStreamError(error, fdNumber, streamInfo, isSameDirection);
      }
    } finally {
      abortController.abort();
    }
  });
  return function waitForStream(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const handleStdinDestroy = (stream, {
  originalStreams: [originalStdin],
  subprocess
}) => {
  const state = {
    stdinCleanedUp: false
  };
  if (stream === originalStdin) {
    spyOnStdinDestroy(stream, subprocess, state);
  }
  return state;
};
const spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
  const {
    _destroy
  } = subprocessStdin;
  subprocessStdin._destroy = (...destroyArguments) => {
    setStdinCleanedUp(subprocess, state);
    _destroy.call(subprocessStdin, ...destroyArguments);
  };
};
const setStdinCleanedUp = ({
  exitCode,
  signalCode
}, state) => {
  if (exitCode !== null || signalCode !== null) {
    state.stdinCleanedUp = true;
  }
};
const handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
  if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
    throw error;
  }
};
const shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
  if (streamInfo.propagating) {
    return isStreamEpipe(error) || isStreamAbort(error);
  }
  streamInfo.propagating = true;
  return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection ? isStreamEpipe(error) : isStreamAbort(error);
};
const isInputFileDescriptor = ({
  fileDescriptors
}, fdNumber) => fdNumber !== 'all' && fileDescriptors[fdNumber].direction === 'input';
const isStreamAbort = error => (error == null ? void 0 : error.code) === 'ERR_STREAM_PREMATURE_CLOSE';
const isStreamEpipe = error => (error == null ? void 0 : error.code) === 'EPIPE';

const waitForStdioStreams = ({
  subprocess,
  encoding,
  buffer,
  maxBuffer,
  lines,
  stripFinalNewline,
  verboseInfo,
  streamInfo
}) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
  stream,
  fdNumber,
  encoding,
  buffer: buffer[fdNumber],
  maxBuffer: maxBuffer[fdNumber],
  lines: lines[fdNumber],
  allMixed: false,
  stripFinalNewline,
  verboseInfo,
  streamInfo
}));
const waitForSubprocessStream = function () {
  var _ref = _asyncToGenerator(function* ({
    stream,
    fdNumber,
    encoding,
    buffer,
    maxBuffer,
    lines,
    allMixed,
    stripFinalNewline,
    verboseInfo,
    streamInfo
  }) {
    if (!stream) {
      return;
    }
    const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
    if (isInputFileDescriptor(streamInfo, fdNumber)) {
      yield onStreamEnd;
      return;
    }
    const [output] = yield Promise.all([getStreamOutput({
      stream,
      onStreamEnd,
      fdNumber,
      encoding,
      buffer,
      maxBuffer,
      lines,
      allMixed,
      stripFinalNewline,
      verboseInfo,
      streamInfo
    }), onStreamEnd]);
    return output;
  });
  return function waitForSubprocessStream(_x) {
    return _ref.apply(this, arguments);
  };
}();

const makeAllStream = ({
  stdout,
  stderr
}, {
  all
}) => all && (stdout || stderr) ? mergeStreams([stdout, stderr].filter(Boolean)) : undefined;
const waitForAllStream = ({
  subprocess,
  encoding,
  buffer,
  maxBuffer,
  lines,
  stripFinalNewline,
  verboseInfo,
  streamInfo
}) => waitForSubprocessStream(Object.assign(Object.assign({}, getAllStream(subprocess, buffer)), {}, {
  fdNumber: 'all',
  encoding,
  maxBuffer: maxBuffer[1] + maxBuffer[2],
  lines: lines[1] || lines[2],
  allMixed: getAllMixed(subprocess),
  stripFinalNewline,
  verboseInfo,
  streamInfo
}));
const getAllStream = ({
  stdout,
  stderr,
  all
}, [, bufferStdout, bufferStderr]) => {
  const buffer = bufferStdout || bufferStderr;
  if (!buffer) {
    return {
      stream: all,
      buffer
    };
  }
  if (!bufferStdout) {
    return {
      stream: stderr,
      buffer
    };
  }
  if (!bufferStderr) {
    return {
      stream: stdout,
      buffer
    };
  }
  return {
    stream: all,
    buffer
  };
};
const getAllMixed = ({
  all,
  stdout,
  stderr
}) => all && stdout && stderr && stdout.readableObjectMode !== stderr.readableObjectMode;

const shouldLogIpc = verboseInfo => isFullVerbose(verboseInfo, 'ipc');
const logIpcOutput = (message, verboseInfo) => {
  const verboseMessage = serializeVerboseMessage(message);
  verboseLog({
    type: 'ipc',
    verboseMessage,
    fdNumber: 'ipc',
    verboseInfo
  });
};

const waitForIpcOutput = function () {
  var _ref = _asyncToGenerator(function* ({
    subprocess,
    buffer: bufferArray,
    maxBuffer: maxBufferArray,
    ipc,
    ipcOutput,
    verboseInfo
  }) {
    if (!ipc) {
      return ipcOutput;
    }
    const isVerbose = shouldLogIpc(verboseInfo);
    const buffer = getFdSpecificValue(bufferArray, 'ipc');
    const maxBuffer = getFdSpecificValue(maxBufferArray, 'ipc');
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = _asyncIterator(loopOnMessages({
          anyProcess: subprocess,
          channel: subprocess.channel,
          isSubprocess: false,
          ipc,
          shouldAwait: false,
          reference: true
        })), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
        const message = _step.value;
        {
          if (buffer) {
            checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
            ipcOutput.push(message);
          }
          if (isVerbose) {
            logIpcOutput(message, verboseInfo);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) {
          yield _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return ipcOutput;
  });
  return function waitForIpcOutput(_x) {
    return _ref.apply(this, arguments);
  };
}();
const getBufferedIpcOutput = function () {
  var _ref2 = _asyncToGenerator(function* (ipcOutputPromise, ipcOutput) {
    yield Promise.allSettled([ipcOutputPromise]);
    return ipcOutput;
  });
  return function getBufferedIpcOutput(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

const waitForSubprocessResult = function () {
  var _ref = _asyncToGenerator(function* ({
    subprocess,
    options: {
      encoding,
      buffer,
      maxBuffer,
      lines,
      timeoutDuration: timeout,
      cancelSignal,
      gracefulCancel,
      forceKillAfterDelay,
      stripFinalNewline,
      ipc,
      ipcInput
    },
    context,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    onInternalError,
    controller
  }) {
    const exitPromise = waitForExit(subprocess, context);
    const streamInfo = {
      originalStreams,
      fileDescriptors,
      subprocess,
      exitPromise,
      propagating: false
    };
    const stdioPromises = waitForStdioStreams({
      subprocess,
      encoding,
      buffer,
      maxBuffer,
      lines,
      stripFinalNewline,
      verboseInfo,
      streamInfo
    });
    const allPromise = waitForAllStream({
      subprocess,
      encoding,
      buffer,
      maxBuffer,
      lines,
      stripFinalNewline,
      verboseInfo,
      streamInfo
    });
    const ipcOutput = [];
    const ipcOutputPromise = waitForIpcOutput({
      subprocess,
      buffer,
      maxBuffer,
      ipc,
      ipcOutput,
      verboseInfo
    });
    const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
    const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);
    try {
      return yield Promise.race([Promise.all([{}, waitForSuccessfulExit(exitPromise), Promise.all(stdioPromises), allPromise, ipcOutputPromise, sendIpcInput(subprocess, ipcInput), ...originalPromises, ...customStreamsEndPromises]), onInternalError, throwOnSubprocessError(subprocess, controller), ...throwOnTimeout(subprocess, timeout, context, controller), ...throwOnCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        context,
        controller
      }), ...throwOnGracefulCancel({
        subprocess,
        cancelSignal,
        gracefulCancel,
        forceKillAfterDelay,
        context,
        controller
      })]);
    } catch (error) {
      var _context$terminationR;
      (_context$terminationR = context.terminationReason) != null ? _context$terminationR : context.terminationReason = 'other';
      return Promise.all([{
        error
      }, exitPromise, Promise.all(stdioPromises.map(stdioPromise => getBufferedData(stdioPromise))), getBufferedData(allPromise), getBufferedIpcOutput(ipcOutputPromise, ipcOutput), Promise.allSettled(originalPromises), Promise.allSettled(customStreamsEndPromises)]);
    }
  });
  return function waitForSubprocessResult(_x) {
    return _ref.apply(this, arguments);
  };
}();
const waitForOriginalStreams = (originalStreams, subprocess, streamInfo) => originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber] ? undefined : waitForStream(stream, fdNumber, streamInfo));
const waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({
  stdioItems
}, fdNumber) => stdioItems.filter(({
  value,
  stream = value
}) => isStream(stream, {
  checkOpen: false
}) && !isStandardStream(stream)).map(({
  type,
  value,
  stream = value
}) => waitForStream(stream, fdNumber, streamInfo, {
  isSameDirection: TRANSFORM_TYPES.has(type),
  stopOnExit: type === 'native'
})));
const throwOnSubprocessError = function () {
  var _ref2 = _asyncToGenerator(function* (subprocess, {
    signal
  }) {
    const [error] = yield node_events.once(subprocess, 'error', {
      signal
    });
    throw error;
  });
  return function throwOnSubprocessError(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

const initializeConcurrentStreams = () => ({
  readableDestroy: new WeakMap(),
  writableFinal: new WeakMap(),
  writableDestroy: new WeakMap()
});
const addConcurrentStream = (concurrentStreams, stream, waitName) => {
  const weakMap = concurrentStreams[waitName];
  if (!weakMap.has(stream)) {
    weakMap.set(stream, []);
  }
  const promises = weakMap.get(stream);
  const promise = createDeferred();
  promises.push(promise);
  const resolve = promise.resolve.bind(promise);
  return {
    resolve,
    promises
  };
};
const waitForConcurrentStreams = function () {
  var _ref = _asyncToGenerator(function* ({
    resolve,
    promises
  }, subprocess) {
    resolve();
    const [isSubprocessExit] = yield Promise.race([Promise.allSettled([true, subprocess]), Promise.all([false, ...promises])]);
    return !isSubprocessExit;
  });
  return function waitForConcurrentStreams(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const safeWaitForSubprocessStdin = function () {
  var _ref = _asyncToGenerator(function* (subprocessStdin) {
    if (subprocessStdin === undefined) {
      return;
    }
    try {
      yield waitForSubprocessStdin(subprocessStdin);
    } catch (_unused) {}
  });
  return function safeWaitForSubprocessStdin(_x) {
    return _ref.apply(this, arguments);
  };
}();
const safeWaitForSubprocessStdout = function () {
  var _ref2 = _asyncToGenerator(function* (subprocessStdout) {
    if (subprocessStdout === undefined) {
      return;
    }
    try {
      yield waitForSubprocessStdout(subprocessStdout);
    } catch (_unused2) {}
  });
  return function safeWaitForSubprocessStdout(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const waitForSubprocessStdin = function () {
  var _ref3 = _asyncToGenerator(function* (subprocessStdin) {
    yield promises$1.finished(subprocessStdin, {
      cleanup: true,
      readable: false,
      writable: true
    });
  });
  return function waitForSubprocessStdin(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
const waitForSubprocessStdout = function () {
  var _ref4 = _asyncToGenerator(function* (subprocessStdout) {
    yield promises$1.finished(subprocessStdout, {
      cleanup: true,
      readable: true,
      writable: false
    });
  });
  return function waitForSubprocessStdout(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
const waitForSubprocess = function () {
  var _ref5 = _asyncToGenerator(function* (subprocess, error) {
    yield subprocess;
    if (error) {
      throw error;
    }
  });
  return function waitForSubprocess(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
const destroyOtherStream = (stream, isOpen, error) => {
  if (error && !isStreamAbort(error)) {
    stream.destroy(error);
  } else if (isOpen) {
    stream.destroy();
  }
};

const createReadable = ({
  subprocess,
  concurrentStreams,
  encoding
}, {
  from,
  binary: binaryOption = true,
  preserveNewlines = true
} = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const {
    subprocessStdout,
    waitReadableDestroy
  } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const {
    readableEncoding,
    readableObjectMode,
    readableHighWaterMark
  } = getReadableOptions(subprocessStdout, binary);
  const {
    read,
    onStdoutDataDone
  } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const readable = new node_stream.Readable({
    read,
    destroy: node_util.callbackify(onReadableDestroy.bind(undefined, {
      subprocessStdout,
      subprocess,
      waitReadableDestroy
    })),
    highWaterMark: readableHighWaterMark,
    objectMode: readableObjectMode,
    encoding: readableEncoding
  });
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable,
    subprocess
  });
  return readable;
};
const getSubprocessStdout = (subprocess, from, concurrentStreams) => {
  const subprocessStdout = getFromStream(subprocess, from);
  const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, 'readableDestroy');
  return {
    subprocessStdout,
    waitReadableDestroy
  };
};
const getReadableOptions = ({
  readableEncoding,
  readableObjectMode,
  readableHighWaterMark
}, binary) => binary ? {
  readableEncoding,
  readableObjectMode,
  readableHighWaterMark
} : {
  readableEncoding,
  readableObjectMode: true,
  readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK
};
const getReadableMethods = ({
  subprocessStdout,
  subprocess,
  binary,
  encoding,
  preserveNewlines
}) => {
  const onStdoutDataDone = createDeferred();
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: !binary,
    encoding,
    preserveNewlines
  });
  return {
    read() {
      onRead(this, onStdoutData, onStdoutDataDone);
    },
    onStdoutDataDone
  };
};
const onRead = function () {
  var _ref = _asyncToGenerator(function* (readable, onStdoutData, onStdoutDataDone) {
    try {
      const {
        value,
        done
      } = yield onStdoutData.next();
      if (done) {
        onStdoutDataDone.resolve();
      } else {
        readable.push(value);
      }
    } catch (_unused) {}
  });
  return function onRead(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const onStdoutFinished = function () {
  var _ref2 = _asyncToGenerator(function* ({
    subprocessStdout,
    onStdoutDataDone,
    readable,
    subprocess,
    subprocessStdin
  }) {
    try {
      yield waitForSubprocessStdout(subprocessStdout);
      yield subprocess;
      yield safeWaitForSubprocessStdin(subprocessStdin);
      yield onStdoutDataDone;
      if (readable.readable) {
        readable.push(null);
      }
    } catch (error) {
      yield safeWaitForSubprocessStdin(subprocessStdin);
      destroyOtherReadable(readable, error);
    }
  });
  return function onStdoutFinished(_x4) {
    return _ref2.apply(this, arguments);
  };
}();
const onReadableDestroy = function () {
  var _ref3 = _asyncToGenerator(function* ({
    subprocessStdout,
    subprocess,
    waitReadableDestroy
  }, error) {
    if (yield waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
      destroyOtherReadable(subprocessStdout, error);
      yield waitForSubprocess(subprocess, error);
    }
  });
  return function onReadableDestroy(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
const destroyOtherReadable = (stream, error) => {
  destroyOtherStream(stream, stream.readable, error);
};

const createWritable = ({
  subprocess,
  concurrentStreams
}, {
  to
} = {}) => {
  const {
    subprocessStdin,
    waitWritableFinal,
    waitWritableDestroy
  } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const writable = new node_stream.Writable(Object.assign(Object.assign({}, getWritableMethods(subprocessStdin, subprocess, waitWritableFinal)), {}, {
    destroy: node_util.callbackify(onWritableDestroy.bind(undefined, {
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    })),
    highWaterMark: subprocessStdin.writableHighWaterMark,
    objectMode: subprocessStdin.writableObjectMode
  }));
  onStdinFinished(subprocessStdin, writable);
  return writable;
};
const getSubprocessStdin = (subprocess, to, concurrentStreams) => {
  const subprocessStdin = getToStream(subprocess, to);
  const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, 'writableFinal');
  const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, 'writableDestroy');
  return {
    subprocessStdin,
    waitWritableFinal,
    waitWritableDestroy
  };
};
const getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
  write: onWrite.bind(undefined, subprocessStdin),
  final: node_util.callbackify(onWritableFinal.bind(undefined, subprocessStdin, subprocess, waitWritableFinal))
});
const onWrite = (subprocessStdin, chunk, encoding, done) => {
  if (subprocessStdin.write(chunk, encoding)) {
    done();
  } else {
    subprocessStdin.once('drain', done);
  }
};
const onWritableFinal = function () {
  var _ref = _asyncToGenerator(function* (subprocessStdin, subprocess, waitWritableFinal) {
    if (yield waitForConcurrentStreams(waitWritableFinal, subprocess)) {
      if (subprocessStdin.writable) {
        subprocessStdin.end();
      }
      yield subprocess;
    }
  });
  return function onWritableFinal(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
const onStdinFinished = function () {
  var _ref2 = _asyncToGenerator(function* (subprocessStdin, writable, subprocessStdout) {
    try {
      yield waitForSubprocessStdin(subprocessStdin);
      if (writable.writable) {
        writable.end();
      }
    } catch (error) {
      yield safeWaitForSubprocessStdout(subprocessStdout);
      destroyOtherWritable(writable, error);
    }
  });
  return function onStdinFinished(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
const onWritableDestroy = function () {
  var _ref3 = _asyncToGenerator(function* ({
    subprocessStdin,
    subprocess,
    waitWritableFinal,
    waitWritableDestroy
  }, error) {
    yield waitForConcurrentStreams(waitWritableFinal, subprocess);
    if (yield waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
      destroyOtherWritable(subprocessStdin, error);
      yield waitForSubprocess(subprocess, error);
    }
  });
  return function onWritableDestroy(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
const destroyOtherWritable = (stream, error) => {
  destroyOtherStream(stream, stream.writable, error);
};

const createDuplex = ({
  subprocess,
  concurrentStreams,
  encoding
}, {
  from,
  to,
  binary: binaryOption = true,
  preserveNewlines = true
} = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const {
    subprocessStdout,
    waitReadableDestroy
  } = getSubprocessStdout(subprocess, from, concurrentStreams);
  const {
    subprocessStdin,
    waitWritableFinal,
    waitWritableDestroy
  } = getSubprocessStdin(subprocess, to, concurrentStreams);
  const {
    readableEncoding,
    readableObjectMode,
    readableHighWaterMark
  } = getReadableOptions(subprocessStdout, binary);
  const {
    read,
    onStdoutDataDone
  } = getReadableMethods({
    subprocessStdout,
    subprocess,
    binary,
    encoding,
    preserveNewlines
  });
  const duplex = new node_stream.Duplex(Object.assign(Object.assign({
    read
  }, getWritableMethods(subprocessStdin, subprocess, waitWritableFinal)), {}, {
    destroy: node_util.callbackify(onDuplexDestroy.bind(undefined, {
      subprocessStdout,
      subprocessStdin,
      subprocess,
      waitReadableDestroy,
      waitWritableFinal,
      waitWritableDestroy
    })),
    readableHighWaterMark,
    writableHighWaterMark: subprocessStdin.writableHighWaterMark,
    readableObjectMode,
    writableObjectMode: subprocessStdin.writableObjectMode,
    encoding: readableEncoding
  }));
  onStdoutFinished({
    subprocessStdout,
    onStdoutDataDone,
    readable: duplex,
    subprocess,
    subprocessStdin
  });
  onStdinFinished(subprocessStdin, duplex, subprocessStdout);
  return duplex;
};
const onDuplexDestroy = function () {
  var _ref = _asyncToGenerator(function* ({
    subprocessStdout,
    subprocessStdin,
    subprocess,
    waitReadableDestroy,
    waitWritableFinal,
    waitWritableDestroy
  }, error) {
    yield Promise.all([onReadableDestroy({
      subprocessStdout,
      subprocess,
      waitReadableDestroy
    }, error), onWritableDestroy({
      subprocessStdin,
      subprocess,
      waitWritableFinal,
      waitWritableDestroy
    }, error)]);
  });
  return function onDuplexDestroy(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

const createIterable = (subprocess, encoding, {
  from,
  binary: binaryOption = false,
  preserveNewlines = false
} = {}) => {
  const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
  const subprocessStdout = getFromStream(subprocess, from);
  const onStdoutData = iterateOnSubprocessStream({
    subprocessStdout,
    subprocess,
    binary,
    shouldEncode: true,
    encoding,
    preserveNewlines
  });
  return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
};
const iterateOnStdoutData = function () {
  var _ref = _wrapAsyncGenerator(function* (onStdoutData, subprocessStdout, subprocess) {
    try {
      yield* _asyncGeneratorDelegate(_asyncIterator(onStdoutData));
    } finally {
      if (subprocessStdout.readable) {
        subprocessStdout.destroy();
      }
      yield _awaitAsyncGenerator(subprocess);
    }
  });
  return function iterateOnStdoutData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

const addConvertedStreams = (subprocess, {
  encoding
}) => {
  const concurrentStreams = initializeConcurrentStreams();
  subprocess.readable = createReadable.bind(undefined, {
    subprocess,
    concurrentStreams,
    encoding
  });
  subprocess.writable = createWritable.bind(undefined, {
    subprocess,
    concurrentStreams
  });
  subprocess.duplex = createDuplex.bind(undefined, {
    subprocess,
    concurrentStreams,
    encoding
  });
  subprocess.iterable = createIterable.bind(undefined, subprocess, encoding);
  subprocess[Symbol.asyncIterator] = createIterable.bind(undefined, subprocess, encoding, {});
};

const mergePromise = (subprocess, promise) => {
  for (const [property, descriptor] of descriptors) {
    const value = descriptor.value.bind(promise);
    Reflect.defineProperty(subprocess, property, Object.assign(Object.assign({}, descriptor), {}, {
      value
    }));
  }
};
const nativePromisePrototype = _asyncToGenerator(function* () {})().constructor.prototype;
const descriptors = ['then', 'catch', 'finally'].map(property => [property, Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)]);

const _excluded = ["timeout", "signal"];
const execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
  const {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  } = handleAsyncArguments(rawFile, rawArguments, rawOptions);
  const {
    subprocess,
    promise
  } = spawnSubprocessAsync({
    file,
    commandArguments,
    options,
    startTime,
    verboseInfo,
    command,
    escapedCommand,
    fileDescriptors
  });
  subprocess.pipe = pipeToSubprocess.bind(undefined, {
    source: subprocess,
    sourcePromise: promise,
    boundOptions: {},
    createNested
  });
  mergePromise(subprocess, promise);
  SUBPROCESS_OPTIONS.set(subprocess, {
    options,
    fileDescriptors
  });
  return subprocess;
};
const handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
  const {
    command,
    escapedCommand,
    startTime,
    verboseInfo
  } = handleCommand(rawFile, rawArguments, rawOptions);
  const {
    file,
    commandArguments,
    options: normalizedOptions
  } = normalizeOptions(rawFile, rawArguments, rawOptions);
  const options = handleAsyncOptions(normalizedOptions);
  const fileDescriptors = handleStdioAsync(options, verboseInfo);
  return {
    file,
    commandArguments,
    command,
    escapedCommand,
    startTime,
    verboseInfo,
    options,
    fileDescriptors
  };
};
const handleAsyncOptions = _ref => {
  let {
      timeout,
      signal
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded);
  if (signal !== undefined) {
    throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
  }
  return Object.assign(Object.assign({}, options), {}, {
    timeoutDuration: timeout
  });
};
const spawnSubprocessAsync = ({
  file,
  commandArguments,
  options,
  startTime,
  verboseInfo,
  command,
  escapedCommand,
  fileDescriptors
}) => {
  let subprocess;
  try {
    subprocess = node_child_process.spawn(file, commandArguments, options);
  } catch (error) {
    return handleEarlyError({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      verboseInfo
    });
  }
  const controller = new AbortController();
  node_events.setMaxListeners(Number.POSITIVE_INFINITY, controller.signal);
  const originalStreams = [...subprocess.stdio];
  pipeOutputAsync(subprocess, fileDescriptors, controller);
  cleanupOnExit(subprocess, options, controller);
  const context = {};
  const onInternalError = createDeferred();
  subprocess.kill = subprocessKill.bind(undefined, {
    kill: subprocess.kill.bind(subprocess),
    options,
    onInternalError,
    context,
    controller
  });
  subprocess.all = makeAllStream(subprocess, options);
  addConvertedStreams(subprocess, options);
  addIpcMethods(subprocess, options);
  const promise = handlePromise({
    subprocess,
    options,
    startTime,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    command,
    escapedCommand,
    context,
    onInternalError,
    controller
  });
  return {
    subprocess,
    promise
  };
};
const handlePromise = function () {
  var _ref2 = _asyncToGenerator(function* ({
    subprocess,
    options,
    startTime,
    verboseInfo,
    fileDescriptors,
    originalStreams,
    command,
    escapedCommand,
    context,
    onInternalError,
    controller
  }) {
    const [errorInfo, [exitCode, signal], stdioResults, allResult, ipcOutput] = yield waitForSubprocessResult({
      subprocess,
      options,
      context,
      verboseInfo,
      fileDescriptors,
      originalStreams,
      onInternalError,
      controller
    });
    controller.abort();
    onInternalError.resolve();
    const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
    const all = stripNewline(allResult, options, 'all');
    const result = getAsyncResult({
      errorInfo,
      exitCode,
      signal,
      stdio,
      all,
      ipcOutput,
      context,
      options,
      command,
      escapedCommand,
      startTime
    });
    return handleResult(result, verboseInfo, options);
  });
  return function handlePromise(_x) {
    return _ref2.apply(this, arguments);
  };
}();
const getAsyncResult = ({
  errorInfo,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput,
  context,
  options,
  command,
  escapedCommand,
  startTime
}) => 'error' in errorInfo ? makeError({
  error: errorInfo.error,
  command,
  escapedCommand,
  timedOut: context.terminationReason === 'timeout',
  isCanceled: context.terminationReason === 'cancel' || context.terminationReason === 'gracefulCancel',
  isGracefullyCanceled: context.terminationReason === 'gracefulCancel',
  isMaxBuffer: errorInfo.error instanceof MaxBufferError,
  isForcefullyTerminated: context.isForcefullyTerminated,
  exitCode,
  signal,
  stdio,
  all,
  ipcOutput,
  options,
  startTime,
  isSync: false
}) : makeSuccessResult({
  command,
  escapedCommand,
  stdio,
  all,
  ipcOutput,
  options,
  startTime
});

const mergeOptions = (boundOptions, options) => {
  const newOptions = Object.fromEntries(Object.entries(options).map(([optionName, optionValue]) => [optionName, mergeOption(optionName, boundOptions[optionName], optionValue)]));
  return Object.assign(Object.assign({}, boundOptions), newOptions);
};
const mergeOption = (optionName, boundOptionValue, optionValue) => {
  if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
    return Object.assign(Object.assign({}, boundOptionValue), optionValue);
  }
  return optionValue;
};
const DEEP_OPTIONS = new Set(['env', ...FD_SPECIFIC_OPTIONS]);

const createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
  const createNested = (mapArguments, boundOptions, setBoundExeca) => createExeca(mapArguments, boundOptions, deepOptions, setBoundExeca);
  const boundExeca = (...execaArguments) => callBoundExeca({
    mapArguments,
    deepOptions,
    boundOptions,
    setBoundExeca,
    createNested
  }, ...execaArguments);
  if (setBoundExeca !== undefined) {
    setBoundExeca(boundExeca, createNested, boundOptions);
  }
  return boundExeca;
};
const callBoundExeca = ({
  mapArguments,
  deepOptions = {},
  boundOptions = {},
  setBoundExeca,
  createNested
}, firstArgument, ...nextArguments) => {
  if (isPlainObject(firstArgument)) {
    return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
  }
  const {
    file,
    commandArguments,
    options,
    isSync
  } = parseArguments({
    mapArguments,
    firstArgument,
    nextArguments,
    deepOptions,
    boundOptions
  });
  return isSync ? execaCoreSync(file, commandArguments, options) : execaCoreAsync(file, commandArguments, options, createNested);
};
const parseArguments = ({
  mapArguments,
  firstArgument,
  nextArguments,
  deepOptions,
  boundOptions
}) => {
  const callArguments = isTemplateString(firstArgument) ? parseTemplates(firstArgument, nextArguments) : [firstArgument, ...nextArguments];
  const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
  const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
  const {
    file = initialFile,
    commandArguments = initialArguments,
    options = mergedOptions,
    isSync = false
  } = mapArguments({
    file: initialFile,
    commandArguments: initialArguments,
    options: mergedOptions
  });
  return {
    file,
    commandArguments,
    options,
    isSync
  };
};

const mapCommandAsync = ({
  file,
  commandArguments
}) => parseCommand(file, commandArguments);
const mapCommandSync = ({
  file,
  commandArguments
}) => Object.assign(Object.assign({}, parseCommand(file, commandArguments)), {}, {
  isSync: true
});
const parseCommand = (command, unusedArguments) => {
  if (unusedArguments.length > 0) {
    throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
  }
  const [file, ...commandArguments] = parseCommandString(command);
  return {
    file,
    commandArguments
  };
};
const parseCommandString = command => {
  if (typeof command !== 'string') {
    throw new TypeError(`The command must be a string: ${String(command)}.`);
  }
  const trimmedCommand = command.trim();
  if (trimmedCommand === '') {
    return [];
  }
  const tokens = [];
  for (const token of trimmedCommand.split(SPACES_REGEXP)) {
    const previousToken = tokens.at(-1);
    if (previousToken && previousToken.endsWith('\\')) {
      tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
    } else {
      tokens.push(token);
    }
  }
  return tokens;
};
const SPACES_REGEXP = / +/g;

const setScriptSync = (boundExeca, createNested, boundOptions) => {
  boundExeca.sync = createNested(mapScriptSync, boundOptions);
  boundExeca.s = boundExeca.sync;
};
const mapScriptAsync = ({
  options
}) => getScriptOptions(options);
const mapScriptSync = ({
  options
}) => Object.assign(Object.assign({}, getScriptOptions(options)), {}, {
  isSync: true
});
const getScriptOptions = options => ({
  options: Object.assign(Object.assign({}, getScriptStdinOption(options)), options)
});
const getScriptStdinOption = ({
  input,
  inputFile,
  stdio
}) => input === undefined && inputFile === undefined && stdio === undefined ? {
  stdin: 'inherit'
} : {};
const deepScriptOptions = {
  preferLocal: true
};

createExeca(() => ({}));
const execaSync = createExeca(() => ({
  isSync: true
}));
createExeca(mapCommandAsync);
createExeca(mapCommandSync);
createExeca(mapNode);
createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);
getIpcExport();

const shell = global;
const target = new Proxy(global.target, {
  set: function (obj, prop, value) {
    return Reflect.set(...arguments);
  },
  get: function (obj, prop, receiver) {
    print(`make ${prop}`);
    return Reflect.get(...arguments);
  }
});
const SOURCES = ["packages", "codemods", "eslint"];
const YARN_PATH = shell.which("yarn").stdout;
const NODE_PATH = process.execPath;
shell.config.verbose = true;
function print(...msgs) {
  console.log.apply(console, msgs);
}
function exec(executable, args, cwd, inheritStdio = true) {
  print(`${executable.replaceAll(YARN_PATH, "yarn").replaceAll(NODE_PATH, "node")} ${args.join(" ")}`);
  try {
    return execaSync(executable, args, {
      stdio: inheritStdio ? "inherit" : undefined,
      cwd: cwd && require$$0.resolve(cwd),
      env: process.env
    }).stdout;
  } catch (error) {
    if (inheritStdio && error.exitCode !== 0) {
      console.error(new Error(`\ncommand: ${executable} ${args.join(" ")}\ncode: ${error.exitCode}`));
      process.exit(error.exitCode);
    }
    throw error;
  }
}
function yarn(args, cwd, inheritStdio) {
  return exec(YARN_PATH, args, cwd, inheritStdio);
}
function node(args, cwd, inheritStdio) {
  return exec(NODE_PATH, args, cwd, inheritStdio);
}
function env(fun, env) {
  const envBak = process.env;
  process.env = Object.assign(Object.assign({}, envBak), env);
  fun();
  process.env = envBak;
}
target["clean-all"] = function () {
  shell.rm("-rf", ["package-lock.json", ".changelog"]);
  SOURCES.forEach(source => {
    shell.rm("-rf", `${source}/*/test/tmp`);
    shell.rm("-rf", `${source}/*/package-lock.json`);
  });
  target["clean"]();
  target["clean-lib"]();
  target["clean-node-modules"]();
};
target["clean-node-modules"] = function () {
  shell.rm("-rf", "node_modules");
  SOURCES.forEach(source => {
    shell.rm("-rf", `${source}/*/node_modules`);
  });
};
target["clean"] = function () {
  target["test-clean"]();
  shell.rm("-rf", [".npmrc", "coverage", "packages/*/npm-debug*", "node_modules/.cache"]);
};
target["test-clean"] = function () {
  SOURCES.forEach(source => {
    shell.rm("-rf", `${source}/*/test/tmp`);
    shell.rm("-rf", `${source}/*/test-fixtures.json`);
  });
};
target["clean-lib"] = function () {
  shell.rm("-rf", SOURCES.map(source => `${source}/*/lib`));
  node(["scripts/set-module-type.js"]);
};
target["clean-runtime-helpers"] = function () {
  shell.rm("-rf", ["packages/babel-runtime/helpers/**/*.js", "packages/babel-runtime-corejs2/helpers/**/*.js", "packages/babel-runtime-corejs3/helpers/**/*.js", "packages/babel-runtime/helpers/**/*.mjs", "packages/babel-runtime-corejs2/helpers/**/*.mjs", "packages/babel-runtime-corejs3/helpers/**/*.mjs", "packages/babel-runtime-corejs2/core-js", "packages/babel-runtime-corejs3/core-js", "packages/babel-runtime-corejs3/core-js-stable"]);
};
target["use-cjs"] = function () {
  node(["scripts/set-module-type.js", "commonjs"]);
  target["bootstrap"]();
};
target["use-esm"] = function () {
  node(["scripts/set-module-type.js", "module"]);
  target["bootstrap"]();
};
target["bootstrap-only"] = function () {
  target["clean-all"]();
  yarn(["install"]);
};
target["bootstrap"] = function () {
  target["bootstrap-only"]();
  target["generate-tsconfig"]();
  target["build"]();
};
target["build"] = function () {
  target["build-no-bundle"]();
  if (process.env.BABEL_COVERAGE !== "true") {
    target["build-standalone"]();
  }
};
target["build-standalone"] = function () {
  yarn(["gulp", "build-babel-standalone"]);
};
target["build-bundle"] = function () {
  target["clean"]();
  target["clean-lib"]();
  node(["scripts/set-module-type.js"]);
  yarn(["gulp", "build"]);
  target["build-dist"]();
};
target["build-no-bundle"] = function () {
  target["clean"]();
  target["clean-lib"]();
  node(["scripts/set-module-type.js"]);
  env(() => {
    yarn(["gulp", "build-dev"]);
  }, {
    BABEL_ENV: "development"
  });
  target["build-dist"]();
};
target["build-flow-typings"] = function () {
  require$$1.writeFileSync("packages/babel-types/lib/index.js.flow", node(["packages/babel-types/scripts/generators/flow.js"], undefined, false));
};
target["build-dist"] = function () {
  target["build-plugin-transform-runtime-dist"]();
};
target["build-plugin-transform-runtime-dist"] = function () {
  node(["scripts/build-dist.js"], "packages/babel-plugin-transform-runtime");
};
target["prepublish"] = function () {
  if (process.env.BABEL_8_BREAKING) {
    node(["scripts/set-module-type.js", "module"]);
  } else {
    node(["scripts/set-module-type.js", "commonjs"]);
  }
  target["bootstrap-only"]();
  env(() => {
    target["prepublish-build"]();
    target["test"]();
  }, {
    IS_PUBLISH: "true"
  });
  node(["scripts/set-module-type.js", "clean"]);
};
target["prepublish-build"] = function () {
  target["clean-lib"]();
  target["clean-runtime-helpers"]();
  env(() => {
    target["build-bundle"]();
  }, {
    NODE_ENV: "production",
    BABEL_ENV: "production",
    STRIP_BABEL_8_FLAG: "true"
  });
  env(() => {
    target["prepublish-build-standalone"]();
    target["clone-license"]();
    target["prepublish-prepare-dts"]();
    target["build-flow-typings"]();
  }, {
    NODE_ENV: "production",
    STRIP_BABEL_8_FLAG: "true"
  });
};
target["prepublish-build-standalone"] = function () {
  env(() => {
    target["build-standalone"]();
  }, {
    BABEL_ENV: "production",
    IS_PUBLISH: "true"
  });
};
target["prepublish-prepare-dts"] = function () {
  target["clean-ts"]();
  target["tscheck"]();
  target["prepublish-prepare-dts-no-clean"]();
};
target["prepublish-prepare-dts-no-clean"] = function () {
  yarn(["gulp", "bundle-dts"]);
  target["build-typescript-legacy-typings"]();
  yarn(["tsc", "-p", "tsconfig.dts-bundles.json"]);
};
target["tscheck"] = function () {
  target["generate-tsconfig"]();
  node(["scripts/parallel-tsc/tsc.js", "."]);
  target["tscheck-helpers"]();
};
target["tscheck-helpers"] = function () {
  yarn(["tsc", "-p", "./packages/babel-helpers/src/helpers/tsconfig.json"]);
};
target["clean-ts"] = function () {
  shell.rm("-rf", "tsconfig.tsbuildinfo");
  shell.rm("-rf", "*/*/tsconfig.tsbuildinfo");
  shell.rm("-rf", "dts");
};
target["generate-tsconfig"] = function () {
  node(["scripts/generators/tsconfig.js"]);
  node(["scripts/generators/archived-libs-typings.js"]);
};
target["generate-type-helpers"] = function () {
  yarn(["gulp", "generate-type-helpers"]);
};
target["build-typescript-legacy-typings"] = function () {
  require$$1.writeFileSync("packages/babel-types/lib/index-legacy.d.ts", node(["packages/babel-types/scripts/generators/typescript-legacy.js"], undefined, false));
};
target["clone-license"] = function () {
  node(["scripts/clone-license.js"]);
};
function eslint(...extraArgs) {
  const eslintArgs = ["--format", "codeframe", ...extraArgs.filter(Boolean)];
  const packagesPackages = require$$1.readdirSync("packages").filter(n => require$$1.existsSync(`packages/${n}/package.json`));
  const chunks = [];
  for (let i = 0, chunkSize = 40; i < packagesPackages.length; i += chunkSize) {
    chunks.push([`packages/{${packagesPackages.slice(i, i + chunkSize)}}/**/*`]);
  }
  const rest = ["eslint", "codemods", "scripts", "benchmark", "*.{js,cjs,mjs,ts}"];
  chunks.push(rest);
  if (process.env.ESLINT_GO_BRRRR) {
    env(() => yarn(["eslint", "packages", ...rest, ...eslintArgs]), {
      BABEL_ENV: "test",
      NODE_OPTIONS: "--max-old-space-size=16384"
    });
  } else {
    for (const chunk of chunks) {
      env(() => yarn(["eslint", ...chunk, ...eslintArgs]), {
        BABEL_ENV: "test"
      });
    }
  }
}
target["lint"] = function () {
  env(() => target["tscheck"](), {
    TSCHECK_SILENT: "true"
  });
  eslint();
};
target["lint-ci"] = function () {
  target["tscheck"]();
  eslint();
  target["prepublish-prepare-dts-no-clean"]();
};
target["fix"] = function () {
  target["fix-json"]();
  target["fix-js"]();
};
target["fix-js"] = function () {
  env(() => target["tscheck"](), {
    TSCHECK_SILENT: "true"
  });
  eslint("--fix");
};
target["fix-json"] = function () {
  yarn(["prettier", `{${SOURCES.join(",")}}/*/test/fixtures/**/options.json`, "--write", "--loglevel", "warn"]);
};
target["watch"] = function () {
  target["build-no-bundle"]();
  env(() => {
    yarn(["gulp", "watch"]);
  }, {
    BABEL_ENV: "development",
    WATCH_SKIP_BUILD: "true"
  });
};
target["test"] = function () {
  target["lint"]();
  target["test-only"]();
};
target["test-only"] = function (args = []) {
  yarn(["jest", ...args]);
};
target["test-cov"] = function () {
  target["build"]();
  env(() => {
    yarn(["c8", "jest"]);
  }, {
    BABEL_ENV: "test",
    BABEL_COVERAGE: "true"
  });
};
function bootstrapParserTests(name, repoURL, subPaths) {
  function getParserTestsCommit(id) {
    const content = require$$1.readFileSync("./Makefile", "utf8");
    const commit = content.match(new RegExp(`${id}_COMMIT = (\\w{40})`))[1];
    if (!commit) throw new Error(`Could not find ${id}_COMMIT in Makefile`);
    return commit;
  }
  const dir = "./build/" + name.toLowerCase();
  shell.rm("-rf", dir);
  print("mkdir -p build");
  require$$1.mkdirSync("build", {
    recursive: true
  });
  exec("git", ["clone", "--filter=blob:none", "--sparse", "--single-branch", "--shallow-since='2 years ago'", repoURL, dir]);
  exec("git", ["sparse-checkout", "set", ...subPaths], dir);
  exec("git", ["checkout", "-q", getParserTestsCommit(name)], dir);
}
target["bootstrap-test262"] = function () {
  bootstrapParserTests("TEST262", "https://github.com/tc39/test262.git", ["test", "harness"]);
};
target["bootstrap-typescript"] = function () {
  bootstrapParserTests("TYPESCRIPT", "https://github.com/microsoft/TypeScript.git", ["tests"]);
};
target["bootstrap-flow"] = function () {
  bootstrapParserTests("FLOW", "https://github.com/facebook/flow.git", ["src/parser/test/flow"]);
};
target["new-version-checklist"] = function () {
};
target["new-version"] = function () {
  target["new-version-checklist"]();
  exec("git", ["pull", "--rebase"]);
  yarn(["release-tool", "version", "-f", "@babel/standalone"]);
};
target["new-babel-8-version"] = function () {
  exec("git", ["pull", "--rebase"]);
  const pkg = JSON.parse(require$$1.readFileSync("./package.json", "utf8"));
  const nextVersion = semver.inc(pkg.version_babel8, "prerelease");
  pkg.version_babel8 = nextVersion;
  require$$1.writeFileSync("./package.json", JSON.stringify(pkg, null, 2) + "\n");
  exec("git", ["add", "./package.json"]);
  exec("git", ["commit", "-m", "Bump Babel 8 version to " + nextVersion]);
  exec("git", ["tag", `v${nextVersion}`, "-m", `v${nextVersion}`]);
  return nextVersion;
};
function bumpVersionsToBabel8Pre() {
  const pkg = JSON.parse(require$$1.readFileSync("./package.json", "utf8"));
  const nextVersion = pkg.version_babel8;
  SOURCES.forEach(source => {
    require$$1.readdirSync(source).forEach(name => {
      const pkgPath = `${source}/${name}/package.json`;
      if (require$$1.existsSync(pkgPath)) {
        var _pkg$peerDependencies, _pkg$conditions, _babel8Condition$peer;
        const pkg = JSON.parse(require$$1.readFileSync(pkgPath, "utf8"));
        if ((_pkg$peerDependencies = pkg.peerDependencies) != null && _pkg$peerDependencies["@babel/core"]) {
          pkg.peerDependencies["@babel/core"] = `^${nextVersion}`;
        }
        const babel8Condition = (_pkg$conditions = pkg.conditions) == null ? void 0 : _pkg$conditions["BABEL_8_BREAKING"][0];
        if (babel8Condition != null && (_babel8Condition$peer = babel8Condition.peerDependencies) != null && _babel8Condition$peer["@babel/core"]) {
          babel8Condition.peerDependencies["@babel/core"] = `^${nextVersion}`;
        }
        if (name === "babel-eslint-plugin") {
          babel8Condition.peerDependencies["@babel/eslint-parser"] = `^${nextVersion}`;
        }
        require$$1.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
      }
    });
  });
  env(() => yarn(["install"]), {
    YARN_ENABLE_IMMUTABLE_INSTALLS: false
  });
  return nextVersion;
}
target["new-babel-8-version-create-commit-ci"] = function () {
  const nextVersion = bumpVersionsToBabel8Pre();
  yarn(["release-tool", "version", nextVersion, "--all", "--tag-version-prefix", "tmp.v", "--yes"]);
};
target["new-babel-8-version-create-commit"] = function () {
  const nextVersion = bumpVersionsToBabel8Pre();
  exec("git", ["checkout", "-b", `release/temp/v${nextVersion}`]);
  yarn(["release-tool", "version", nextVersion, "--all", "--tag-version-prefix", "tmp.v"]);
  console.log("Run `BABEL_8_BREAKING=true make publish` to finish publishing");
};
