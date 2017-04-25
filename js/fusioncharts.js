/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.7.1

 @attributions (infers respective third-party copyrights)
 Raphael 2.1.0 (modified as 'Red Raphael') <http://raphaeljs.com/license.html>
 JSON v2 <http://www.JSON.org/js.html>
 Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
*/
(function () {
 if (!window.FusionCharts || !window.FusionCharts.version) {
  var d = window,
   m = d.document,
   z = d.navigator,
   q = {
    window: d
   },
   E = q.modules = {},
   b = q.interpreters = {},
   K = Object.prototype.toString,
   I = /msie/i.test(z.userAgent) && !d.opera,
   c = /loaded|complete/,
   s = !1,
   a = function () {
    var a = q.ready;
    q.ready = !0;
    q.raiseEvent && (q.readyNotified = !0, q.raiseEvent("ready", {
     version: q.core.version,
     now: !a
    }, q.core));
    q.readyNow = !a
   },
   v = function (a, b) {
    var c, f;
    if (b instanceof Array)
     for (c = 0; c < b.length; c += 1) "object" !== typeof b[c] ? a[c] = b[c] : ("object" !==
      typeof a[c] && (a[c] = b[c] instanceof Array ? [] : {}), v(a[c], b[c]));
    else
     for (c in b) "object" === typeof b[c] ? (f = K.call(b[c]), "[object Object]" === f ? ("object" !== typeof a[c] && (a[c] = {}), v(a[c], b[c])) : "[object Array]" === f ? (a[c] instanceof Array || (a[c] = []), v(a[c], b[c])) : a[c] = b[c]) : a[c] = b[c];
    return a
   };
  q.extend = function (a, b, c, f) {
   var l;
   c && a.prototype && (a = a.prototype);
   if (!0 === f) v(a, b);
   else
    for (l in b) a[l] = b[l];
   return a
  };
  q.uniqueId = function () {
   return "chartobject-" + (q.uniqueId.lastId += 1)
  };
  q.uniqueId.lastId = 0;
  q.policies = {
   options: {
    chartTypeSourcePath: ["typeSourcePath", ""],
    product: ["product", "v3"],
    insertMode: ["insertMode", "replace"],
    safeMode: ["safeMode", !0],
    overlayButton: ["overlayButton", void 0],
    containerBackgroundColor: ["containerBackgroundColor", "#ffffff"],
    containerBackgroundOpacity: ["containerBackgroundOpacity", 1],
    containerClassName: ["containerClassName", "fusioncharts-container"],
    chartType: ["type", void 0],
    baseChartMessageFont: ["baseChartMessageFont", "Verdana,sans"],
    baseChartMessageFontSize: ["baseChartMessageFontSize",
"10"],
    baseChartMessageColor: ["baseChartMessageColor", "#666666"],
    baseChartMessageImageHAlign: ["baseChartMessageImageHAlign", "middle"],
    baseChartMessageImageVAlign: ["baseChartMessageImageVAlign", "middle"],
    baseChartMessageImageAlpha: ["baseChartMessageImageAlpha", 100],
    baseChartMessageImageScale: ["baseChartMessageImageScale", 100],
    dataLoadStartMessage: ["dataLoadStartMessage", "Retrieving data. Please wait."],
    dataLoadErrorMessage: ["dataLoadErrorMessage", "Error in loading data."],
    dataInvalidMessage: ["dataInvalidMessage",
"Invalid data."],
    dataEmptyMessage: ["dataEmptyMessage", "No data to display."],
    typeNotSupportedMessage: ["typeNotSupportedMessage", "Chart type not supported."],
    loadMessage: ["loadMessage", "Loading chart. Please wait."],
    renderErrorMessage: ["renderErrorMessage", "Unable to render chart."]
   },
   attributes: {
    lang: ["lang", "EN"],
    id: ["id", void 0]
   },
   width: ["width", "400"],
   height: ["height", "300"],
   src: ["swfUrl", ""]
  };
  b.stat = "swfUrl id width height debugMode registerWithJS backgroundColor scaleMode lang detectFlashVersion autoInstallRedirect".split(" ");
  q.parsePolicies = function (a, b, c) {
   var f, l, p;
   for (l in b)
    if (q.policies[l] instanceof Array) p = c[b[l][0]], a[l] = void 0 === p ? b[l][1] : p;
    else
     for (f in "object" !== typeof a[l] && (a[l] = {}), b[l]) p = c[b[l][f][0]], a[l][f] = void 0 === p ? b[l][f][1] : p
  };
  q.parseCommands = function (a, c, g) {
   var f, l;
   "string" === typeof c && (c = b[c] || []);
   f = 0;
   for (l = c.length; f < l; f++) a[c[f]] = g[f];
   return a
  };
  q.registrars = {
   module: function () {
    return q.core.apply(q.core, arguments)
   }
  };
  q.core = function (a) {
   if (!(this instanceof q.core)) {
    if (1 === arguments.length && a instanceof Array && "private" === a[0]) {
     if (E[a[1]]) return;
     E[a[1]] = {};
     a[3] instanceof Array && (q.core.version[a[1]] = a[3]);
     return "function" === typeof a[2] ? a[2].call(q, E[a[1]]) : q
    }
    if (1 === arguments.length && "string" === typeof a) return q.core.items[a];
    q.raiseError && q.raiseError(this, "25081840", "run", "", new SyntaxError('Use the "new" keyword while creating a new FusionCharts object'))
   }
   var c = {};
   this.__state = {};
   1 === arguments.length && "object" === typeof arguments[0] ? c = arguments[0] : q.parseCommands(c, b.stat, arguments);
   1 < arguments.length &&
    "object" === typeof arguments[arguments.length - 1] && (delete c[b.stat[arguments.length - 1]], q.extend(c, arguments[arguments.length - 1]));
   this.id = "undefined" === typeof c.id ? this.id = q.uniqueId() : c.id;
   this.args = c;
   q.core.items[this.id] instanceof q.core && q.raiseWarning(this, "06091847", "param", "", Error('A FusionChart oject with the specified id "' + this.id + '" already exists. Renaming it to ' + (this.id = q.uniqueId())));
   q.parsePolicies(this, q.policies, c);
   this.attributes.id = this.id;
   this.resizeTo && this.resizeTo(c.width,
    c.height, !0);
   this.chartType && this.chartType(c.type || c.swfUrl, !0);
   q.raiseEvent("beforeInitialize", c, this);
   q.core.items[this.id] = this;
   q.core.defaultOptions = q.core.options;
   q.raiseEvent("initialized", c, this);
   return this
  };
  q.core.prototype = {};
  q.core.prototype.constructor = q.core;
  q.extend(q.core, {
   id: "FusionCharts",
   version: ["3", "7", "1"],
   items: {},
   options: {},
   getObjectReference: function (a) {
    return q.core.items[a].ref
   },
   register: function (a) {
    return q.registrars[a = a && a.toString && a.toString().toLowerCase()] && q.registrars[a].apply(q.core,
     Array.prototype.slice.call(arguments, 1))
   }
  });
  d.FusionCharts = q.core;
  d.FusionMaps && d.FusionMaps.legacy && (q.core(["private", "modules.core.geo", d.FusionMaps.legacy, d.FusionMaps.version]), s = !0);
  c.test(m.readyState) || m.loaded ? (q.ready = !0, setTimeout(a, 1)) : function () {
   function b() {
    arguments.callee.done || (arguments.callee.done = !0, g && clearTimeout(g), s || (d.FusionMaps && d.FusionMaps.legacy && q.core(["private", "modules.core.geo", d.FusionMaps.legacy, d.FusionMaps.version]), d.FusionMaps = q.core), setTimeout(a, 1))
   }

   function C() {
    c.test(m.readyState) ?
     b() : g = setTimeout(C, 10)
   }
   var g, f;
   m.addEventListener ? m.addEventListener("DOMContentLoaded", b, !1) : m.attachEvent && d.attachEvent("onLoad", b);
   if (I) try {
    "https:" === d.location.protocol ? m.write('<script id="__ie_onload_fusioncharts" defer="defer" src="//:"></script>') : m.write('<script id="__ie_onload_fusioncharts" defer="defer" src="javascript:void(0)"></script>'), f = m.getElementById("__ie_onload_fusioncharts"), f.onreadystatechange = function () {
     "complete" == this.readyState && b()
    }
   }
   catch (l) {}
   /WebKit/i.test(z.userAgent) &&
    (g = setTimeout(C, 10));
   d.onload = function (a) {
    return function () {
     b();
     a && a.call && a.call(d)
    }
   }(d.onload)
  }();
  d.FusionMaps = q.core
 }
})();
FusionCharts.register("module", ["private", "modules.mantle.errormanager", function () {
 var d = this,
  m = d.window,
  z = {
   type: "TypeException",
   range: "ValueRangeException",
   impl: "NotImplementedException",
   param: "ParameterException",
   run: "RuntimeException",
   comp: "DesignTimeError",
   undefined: "UnspecifiedException"
  },
  q = function (b, q, I, c, s, a) {
   var v = "#" + q + " " + (b ? b.id : "unknown-source") + c + " " + a + " >> ";
   s instanceof Error ? (s.name = z[I], s.module = "FusionCharts" + c, s.level = a, s.message = v + s.message, v = s.message, m.setTimeout(function () {
    throw s;
   }, 0)) : v += s;
   q = {
    id: q,
    nature: z[I],
    source: "FusionCharts" + c,
    message: v
   };
   d.raiseEvent(a, q, b);
   if ("function" === typeof m["FC_" + a]) m["FC_" + a](q)
  },
  E;
 d.raiseError = function (b, d, m, c, s) {
  q(b, d, m, c, s, "Error")
 };
 d.raiseWarning = function (b, d, m, c, s) {
  q(b, d, m, c, s, "Warning")
 };
 E = {
  outputHelpers: {
   text: function (b, d) {
    E.outputTo("#" + b.eventId + " [" + (b.sender.id || b.sender).toString() + '] fired "' + b.eventType + '" event. ' + ("error" === b.eventType || "warning" === b.eventType ? d.message : ""))
   },
   event: function (b, d) {
    this.outputTo(b, d)
   },
   verbose: function (b,
    d) {
    E.outputTo(b.eventId, b.sender.id, b.eventType, d)
   }
  },
  outputHandler: function (b, m) {
   "function" !== typeof E.outputTo ? d.core["debugger"].outputFailed = !0 : (d.core["debugger"].outputFailed = !1, E.currentOutputHelper(b, m))
  },
  currentOutputHelper: void 0,
  outputTo: void 0,
  enabled: !1
 };
 E.currentOutputHelper = E.outputHelpers.text;
 d.extend(d.core, {
  "debugger": {
   syncStateWithCharts: !0,
   outputFormat: function (b) {
    return b && "function" === typeof b.toLowerCase && "function" === typeof E.outputHelpers[b = b.toLowerCase()] ? (E.currentOutputHelper =
     E.outputHelpers[b], !0) : !1
   },
   outputTo: function (b) {
    "function" === typeof b ? E.outputTo = b : null === b && (d.core["debugger"].enable(!1), delete E.outputTo)
   },
   enable: function (b, m, q) {
    var c;
    "object" === typeof b && 1 === arguments.length && (c = b, b = c.state, m = c.outputTo, q = c.outputFormat);
    "function" === typeof b && ("string" !== typeof m || 2 !== arguments.length && !c || (q = m), m = b, b = !0);
    if ("boolean" === typeof b && b !== E.enabled) d.core[(E.enabled = b) ? "addEventListener" : "removeEventListener"]("*", E.outputHandler);
    "function" === typeof m && (E.outputTo =
     m);
    d.core["debugger"].outputFormat(q);
    return E.enabled
   },
   enableFirebugLite: function () {
    var b;
    m.console && m.console.firebug ? d.core["debugger"].enable(m.console.log, "verbose") : ((b = m.document.getElementsByTagName("html")) && b[0].setAttribute("debug", "true"), d.loadScript("https://getfirebug.com/firebug-lite.js#overrideConsole=false,startOpened=true", function () {
     d.core["debugger"].enable(m.console.log, "verbose")
    }, "{ startOpened: true }", !0, !0))
   }
  },
  debugMode: {
   enabled: function () {
    m.setTimeout(function () {
     throw Error("Deprecated! Please use FusionCharts.debugger.enable instead.");
    }, 0);
    return d.core["debugger"].enable.apply(d.core["debugger"], arguments)
   }
  }
 }, !1)
}]);
FusionCharts.register("module", ["private", "modules.mantle.eventmanager", function () {
 var d = this,
  m = d.window,
  z = d.core,
  q = m.Object.prototype.toString,
  E = q.call([]),
  b = function (a, b, c, g) {
   try {
    a[0].call(b, c, g || {})
   }
   catch (f) {
    setTimeout(function () {
     throw f;
    }, 0)
   }
  },
  K = function (a, c, C) {
   if (a instanceof Array)
    for (var g = 0, f; g < a.length; g += 1) {
     if (a[g][1] === c.sender || void 0 === a[g][1]) f = a[g][1] === c.sender ? c.sender : d.core, b(a[g], f, c, C), !0 === c.detached && (a.splice(g, 1), --g, c.detached = !1);
     if (!0 === c.cancelled) break
    }
  },
  I = {
   unpropagator: function () {
    return !1 ===
     (this.cancelled = !0)
   },
   detacher: function () {
    return !1 === (this.detached = !0)
   },
   undefaulter: function () {
    return !1 === (this.prevented = !0)
   },
   listeners: {},
   lastEventId: 0,
   addListener: function (a, b, c) {
    var g, f;
    if (q.call(a) === E) {
     g = [];
     for (f = 0; f < a.length; f += 1) g.push(I.addListener(a[f], b, c));
     return g
    }
    if ("string" !== typeof a) d.raiseError(c || d.core, "03091549", "param", "::EventTarget.addListener", Error("Unspecified Event Type"));
    else if ("function" !== typeof b) d.raiseError(c || d.core, "03091550", "param", "::EventTarget.addListener",
     Error("Invalid Event Listener"));
    else return a = a.toLowerCase(), I.listeners[a] instanceof Array || (I.listeners[a] = []), I.listeners[a].push([b, c]), b
   },
   removeListener: function (a, b, c) {
    var g;
    if ("function" !== typeof b) d.raiseError(c || d.core, "03091560", "param", "::EventTarget.removeListener", Error("Invalid Event Listener"));
    else if (a instanceof Array)
     for (g = 0; g < a.length; g += 1) I.removeListener(a[g], b, c);
    else if ("string" !== typeof a) d.raiseError(c || d.core, "03091559", "param", "::EventTarget.removeListener", Error("Unspecified Event Type"));
    else if (a = a.toLowerCase(), a = I.listeners[a], a instanceof Array)
     for (g = 0; g < a.length; g += 1) a[g][0] === b && a[g][1] === c && (a.splice(g, 1), --g)
   },
   triggerEvent: function (a, b, c, g, f, l) {
    if ("string" !== typeof a) d.raiseError(b, "03091602", "param", "::EventTarget.dispatchEvent", Error("Invalid Event Type"));
    else {
     a = a.toLowerCase();
     var p = {
      eventType: a,
      eventId: I.lastEventId += 1,
      sender: b || Error("Orphan Event"),
      cancelled: !1,
      stopPropagation: this.unpropagator,
      prevented: !1,
      preventDefault: this.undefaulter,
      detached: !1,
      detachHandler: this.detacher
     };
     K(I.listeners[a], p, c);
     K(I.listeners["*"], p, c);
     switch (p.prevented) {
     case !0:
      if ("function" === typeof l) try {
       l.call(g || b || m, p, c || {})
      }
      catch (F) {
       setTimeout(function () {
        throw F;
       }, 0)
      }
      break;
     default:
      if ("function" === typeof f) try {
       f.call(g || b || m, p, c || {})
      }
      catch (s) {
       setTimeout(function () {
        throw s;
       }, 0)
      }
     }
     return !0
    }
   }
  },
  c = d.raiseEvent = function (a, b, c, g, f, l) {
   return I.triggerEvent(a, c, b, g, f, l)
  },
  s = d.legacyEventList = {},
  a = {};
 d.disposeEvents = function (a) {
  var b, c;
  for (b in I.listeners)
   for (c = 0; c < I.listeners[b].length; c += 1) I.listeners[b][c][1] ===
    a && I.listeners[b].splice(c, 1)
 };
 d.raiseEventWithLegacy = function (a, b, d, g, f, l, p) {
  var F = s[a];
  c(a, b, d, f, l, p);
  F && "function" === typeof m[F] && setTimeout(function () {
   m[F].apply(f || m, g)
  }, 0)
 };
 d.raiseEventGroup = function (b, d, C, g, f, l, p) {
  var F = g.id,
   s = b + F;
  a[s] ? (clearTimeout(a[s]), delete a[s]) : F && s ? a[s] = setTimeout(function () {
   c(d, C, g, f, l, p);
   delete a[s]
  }, 0) : c(d, C, g, f, l, p)
 };
 d.addEventListener = function (a, b) {
  return I.addListener(a, b)
 };
 d.removeEventListener = function (a, b) {
  return I.removeListener(a, b)
 };
 d.extend(z, {
  addEventListener: function (a,
   b) {
   return I.addListener(a, b)
  },
  removeEventListener: function (a, b) {
   return I.removeListener(a, b)
  },
  ready: function (a, b, c) {
   d.ready ? (z.ready = function (a, f) {
    "function" === typeof a && setTimeout(function () {
     a.call(f || z, b || z)
    }, 0)
   }, z.ready(a, c)) : "function" === typeof a && z.addEventListener("ready", function () {
    z.ready(a, b, c)
   });
   return this
  }
 });
 z.on = z.addEventListener;
 d.extend(z.prototype, {
  addEventListener: function (a, b) {
   return I.addListener(a, b, this)
  },
  removeEventListener: function (a, b) {
   return I.removeListener(a, b, this)
  }
 });
 z.prototype.on = z.prototype.addEventListener;
 d.policies.options.events = ["events", {}];
 d.addEventListener("beforeInitialize", function (a) {
  a = a.sender;
  var b = a.options.events,
   c;
  if (b)
   for (c in b) "function" === typeof b[c] && a.addEventListener(c, b[c])
 });
 d.ready && !d.readyNotified && (d.readyNotified = !0, d.raiseEvent("ready", {
  version: d.core.version,
  now: d.readyNow
 }, d.core))
}]);
FusionCharts.register("module", ["private", "modules.mantle.ajax", function () {
 var d = this,
  m = d.window,
  z = parseFloat(m.navigator.appVersion.split("MSIE")[1]),
  q = 5.5 <= z && 7 >= z ? !0 : !1,
  E = "file:" === m.location.protocol,
  b = m.ActiveXObject,
  K = (!b || !E) && m.XMLHttpRequest,
  I = {
   objects: 0,
   xhr: 0,
   requests: 0,
   success: 0,
   failure: 0,
   idle: 0
  },
  c = function () {
   var d;
   if (K) return c = function () {
    I.xhr++;
    return new K
   }, c();
   try {
    d = new b("Msxml2.XMLHTTP"), c = function () {
     I.xhr++;
     return new b("Msxml2.XMLHTTP")
    }
   }
   catch (a) {
    try {
     d = new b("Microsoft.XMLHTTP"),
      c = function () {
       I.xhr++;
       return new b("Microsoft.XMLHTTP")
      }
    }
    catch (v) {
     d = !1
    }
   }
   return d
  };
 d.core.ajax = {
  stats: function (b) {
   return b ? I[b] : d.extend({}, I)
  },
  headers: {
   "If-Modified-Since": "Sat, 29 Oct 1994 19:43:31 GMT",
   "X-Requested-With": "XMLHttpRequest",
   "X-Requested-By": "FusionCharts",
   Accept: "text/plain, */*",
   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
 };
 z = d.ajax = function (b, a) {
  this.onSuccess = b;
  this.onError = a;
  this.open = !1;
  I.objects++;
  I.idle++
 };
 d.extend(z.prototype, {
  headers: d.core.ajax.headers,
  transact: function (b, a, v, O) {
   var C = this,
    g = C.xmlhttp,
    f = C.headers,
    l = C.onError,
    p = C.onSuccess;
   b = "POST" === b;
   var F, Q;
   if (!g || q) g = c(), C.xmlhttp = g;
   g.onreadystatechange = function () {
    try {
     4 === g.readyState && (!g.status && E || 200 <= g.status && 300 > g.status || 304 === g.status || 1223 === g.status || 0 === g.status ? (p && p(g.responseText, C, O, a), I.success++) : l && (l(Error("XmlHttprequest Error"), C, O, a), I.failure++), I.idle--, C.open = !1)
    }
    catch (b) {
     l && l(b, C, O, a), m.FC_DEV_ENVIRONMENT && setTimeout(function () {
      throw b;
     }, 0), I.failure++
    }
   };
   try {
    g.open(b ?
     "POST" : "GET", a, !0);
    g.overrideMimeType && g.overrideMimeType("text/plain");
    if (b)
     if ("string" === typeof v) F = v;
     else {
      F = [];
      for (Q in v) F.push(Q + "=" + (v[Q] + "").replace(/\=/g, "%3D").replace(/\&/g, "%26"));
      F = F.join("&")
     }
    else F = null;
    for (Q in f) g.setRequestHeader(Q, f[Q]);
    g.send(F);
    I.requests++;
    I.idle++;
    C.open = !0
   }
   catch (k) {
    d.raiseError(d.core, "1110111515A", "run", "XmlHttprequest Error", k.message)
   }
   return g
  },
  get: function (b, a) {
   return this.transact("GET", b, void 0, a)
  },
  post: function (b, a, c) {
   return this.transact("POST", b, a,
    c)
  },
  abort: function () {
   var b = this.xmlhttp;
   this.open = !1;
   return b && "function" === typeof b.abort && b.readyState && 0 !== b.readyState && b.abort()
  },
  dispose: function () {
   this.open && this.abort();
   delete this.onError;
   delete this.onSuccess;
   delete this.xmlhttp;
   delete this.open;
   I.objects--;
   return null
  }
 })
}]);
FusionCharts.register("module", ["private", "modules.mantle.runtime;1.1", function () {
 var d = this,
  m = d.window,
  z = /(^|[\/\\])(fusioncharts\.js)([\?#].*)?$/ig,
  q = /[\\\"<>;&]/,
  E = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//i,
  b = {},
  K = {},
  I = {},
  c = {},
  s = d.purgeDOM = function (a) {
   var b = a.attributes,
    c, f;
   if (b)
    for (c = b.length - 1; 0 <= c; --c) f = b[c].name, "function" === typeof a[f] && (a[f] = null);
   if (b = a.childNodes)
    for (b = b.length, c = 0; c < b; c += 1) s(a.childNodes[c])
  },
  a = function (a, b, c) {
   var f, l;
   for (f in a)
    if (a[f] instanceof Array) b[a[f][0]] = c[f];
    else
     for (l in a[f]) b[a[f][l][0]] =
      c[f][l]
  },
  v = /^(FusionCharts|FusionWidgets|FusionMaps)/;
 d.getScriptBaseUri = function (a) {
  var b = m.document.getElementsByTagName("script"),
   c = b.length,
   f, l;
  for (l = 0; l < c; l += 1)
   if (f = b[l].getAttribute("src"), void 0 !== f && null !== f && null !== f.match(a)) return f.replace(a, "$1")
 };
 d.core.options.scriptBaseUri = function () {
  var a = d.getScriptBaseUri(z);
  return void 0 === a ? (d.raiseError(FusionCharts, "1603111624", "run", ">GenericRuntime~scriptBaseUri", "Unable to locate FusionCharts script source location (URL)."), "") : a
 }();
 d.isXSSSafe =
  function (a, b) {
   return b && null !== E.exec(a) ? !1 : null === q.exec(a)
  };
 d.xssEncode = function (a) {
  return null === a || void 0 === a || "function" !== typeof a.toString ? "" : a = a.toString().replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
 };
 d.loadScript = function (a, C, g, f, l) {
  if (!a) return !1;
  var p = C && C.success || C,
   F = C && C.failure,
   s, k = {
    type: "script",
    success: !1
   },
   B = function () {
    c[s] = clearTimeout(c[s]);
    k.success ? p && p(a, s) : F && F(a, s);
    d.raiseEvent("externalresourceload", k, d.core)
   };
  l = l ? "" : d.core.options.scriptBaseUri;
  s = l + a;
  d.isXSSSafe(s, !1) || (s = "function" === typeof m.encodeURIComponent ? m.encodeURIComponent(s) : m.escape(s));
  k.path = l;
  k.src = s;
  k.file = a;
  if (!0 === I[s] && f) return k.success = !0, k.notReloaded = !0, "function" === typeof C && (C(), d.raiseEvent("externalresourceload", k, d.core)), !0;
  if (b[s] && f) return !1;
  b[s] = !0;
  K[s] && K[s].parentNode && K[s].parentNode.removeChild(K[s]);
  C = K[s] = m.document.createElement("script");
  C.type = "text/javascript";
  C.src = s;
  g && (C["\v" === "v" ? "text" : "innerHTML"] = g);
  "function" ===
  typeof p && (I[s] = !1, c[s] = clearTimeout(c[s]), C.onload = function () {
   I[s] = !0;
   k.success = !0;
   B()
  }, C.onerror = function () {
   I[s] = !1;
   b[s] = !1;
   B()
  }, C.onreadystatechange = function () {
   if ("complete" === this.readyState || "loaded" === this.readyState) I[s] = !0, k.success = !0, B()
  });
  m.document.getElementsByTagName("head")[0].appendChild(C);
  "function" === typeof F && (c[s] = setTimeout(function () {
   I[s] || B()
  }, d.core.options.html5ResourceLoadTimeout || 15E3));
  return !0
 };
 d.capitalizeString = function (a, b) {
  return a ? a.replace(b ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/,
   function (a, b, c) {
    return b + c.toUpperCase()
   }) : a
 };
 d.extend(d.core, {
  clone: function (b, c) {
   var g = typeof b,
    f, l = d.extend({}, this.args, !1, !1);
   a(d.policies, l, this);
   a(d.renderer.getRendererPolicy(this.options.renderer), l, this);
   delete l.id;
   delete l.animate;
   delete l.stallLoad;
   f = l.link;
   l = d.extend({}, l, !1, !1);
   l.link = f;
   switch (g) {
   case "object":
    d.extend(l, b);
    break;
   case "boolean":
    c = b
   }
   return c ? l : new d.core(l)
  },
  isActive: function () {
   if (!this.ref || m.document.getElementById(this.id) !== this.ref) return !1;
   try {
    return v.test(this.ref.signature())
   }
   catch (a) {
    return !1
   }
  },
  chartType: function (a, b) {
   var c = this.src,
    f = !0 === b,
    l = this.options,
    p;
   "string" === typeof a && (b = "object" === typeof b ? b : {}, c = a.replace(/[\?\#][\s\S]*$/g, ""), p = null !== c.match(/\.swf\s*?$/ig), c = c.replace(/\.swf\s*?$/ig, ""), l.chartType = c.replace(/^[\s\S]*\//ig, "").replace(/^fcmap_/i, ""), l.chartTypeSourcePath = -1 === c.indexOf("/") ? b.chartTypeSourcePath || this.options.chartTypeSourcePath || d.core.options.chartTypeSourcePath || "" : c.replace(/[^\/]*?$/ig, ""), this.src = ((d.core.options.scriptBaseUri || "") + (l.chartTypeSourcePath ||
    d.core.options.chartTypeSourcePath || "")).replace(/\/\s*$/g, "") + "/" + l.chartType.replace(/\.swf\s*?$/ig, "") + ".swf", p && (d.raiseWarning(this, "08101320181", "comp", "FusionCharts#chartType", 'Chart type has ".swf" in alias and as such has been deprecated. Please use chart type alias.'), l.chartTypeSourcePath = d.core.options.chartTypeSourcePath || ""), void 0 !== b.dataSource && null !== b.dataSource ? this.setChartData(b.dataSource, b.dataFormat, b.dataConfiguration) : this.isActive() && !f && this.render());
   return (l.chartType ||
    "").toLowerCase()
  }
 }, !0);
 m.getChartFromId = function (a) {
  d.raiseWarning(this, "11133001041", "comp", "GenericRuntime~getObjectFromId()", 'Use of deprecated getChartFromId() or getMapFromId(). Replace with "FusionCharts()" or FusionCharts.items[].');
  return d.core.items[a] instanceof d.core ? d.core.items[a].ref : m.swfobject && m.swfobject.getObjectById(a)
 };
 m.getMapFromId = m.getChartFromId
}]);
FusionCharts.register("module", ["private", "api.printmanager", function () {
 var d = this;
 d.extend(d.core, {
  printManager: {
   configure: function () {
    d.raiseWarning(d.core, "28141714", "impl", ".printManager.configure", "PrintManager is deprecated")
   },
   isReady: function () {
    d.raiseWarning(d.core, "28141714", "impl", ".printManager.isReady", "PrintManager is deprecated");
    return !1
   },
   enabled: function () {
    d.raiseWarning(d.core, "28141714", "impl", ".printManager.enabled", "PrintManager is deprecated");
    return !1
   },
   managedPrint: function () {
    d.raiseWarning(d.core,
     "28141714", "impl", ".printManager.managedPrint", "PrintManager is deprecated")
   }
  }
 }, !1)
}]);
FusionCharts.register("module", ["private", "modules.interface.renderer", function () {
 var d = this,
  m = d.window,
  z = m.document,
  q = function () {
   d.raiseError(this, "25081845", "run", "::RendererManager", Error("No active renderer"))
  },
  E = d.FusionChartsDOMInsertModes = {
   REPLACE: "replace",
   APPEND: "append",
   PREPEND: "prepend"
  },
  b = {
   undefined: {
    render: q,
    remove: q,
    update: q,
    resize: q,
    config: q,
    policies: {}
   }
  },
  K = {},
  I = function (a) {
   return function () {
    var b = this.ref;
    if (void 0 === b || null === b || "function" !== typeof b[a]) d.raiseError(this, "25081617",
     "run", "#" + a + "()", "ExternalInterface call failed. Check whether chart has been rendered.");
    else return b[a].apply(b, arguments)
   }
  },
  c = function (a, b) {
   return "function" === typeof a[b] ? function () {
    return a[b].apply(a, arguments)
   } : a[b]
  },
  s = function (a, b) {
   var c = z.getElementById(a),
    f = b.id || b.getAttribute("id"),
    l, p;
   if (null === c) return !1;
   if (a === f) return !0;
   f = b.getElementsByTagName("*");
   l = 0;
   for (p = f.length; l < p; l++)
    if (f[l] === c) return !1;
   return !0
  },
  a = /[^\%\d]*$/ig,
  v;
 d.policies.options.containerElementId = ["renderAt", void 0];
 d.policies.options.renderer = ["renderer", void 0];
 d.policies.options.containerElementType = ["containerElementType", void 0];
 d.normalizeCSSDimension = function (a, b, c) {
  a = void 0 === a ? c.offsetWidth || parseFloat(c.style.width) : a;
  b = void 0 === b ? c.offsetHeight || parseFloat(c.style.height) : b;
  var f = {},
   l = c.style,
   p;
  l.width = a = a.toString ? a.toString() : "0";
  l.height = b = b.toString ? b.toString() : "0";
  if ((f.widthIsRelative = a.match(/^\s*\d*\.?\d*\%\s*$/) && !a.match(/^\s*0\%\s*$/)) && 0 === c.offsetWidth)
   for (p = c; p = p.offsetParent;)
    if (0 <
     p.offsetWidth) {
     a = (p.offsetWidth * parseFloat(a.match(/\d*/)[0]) / 100).toString();
     break
    }
  if ((f.heightIsRelative = b.match(/^\s*\d*\.?\d*\%\s*$/) && !b.match(/^\s*0\%\s*$/)) && 20 >= c.offsetHeight)
   for (p = c; p = p.offsetParent;)
    if (0 < p.offsetHeight) {
     b = (p.offsetHeight * parseFloat(b.match(/\d*/)[0]) / 100).toString();
     break
    }
  f.width = a.replace ? a.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : a;
  f.height = b.replace ? b.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : b;
  l.width = f.width;
  l.height = f.height;
  f.pixelWidth = f.widthIsRelative ? c.offsetWidth :
   parseInt(f.width, 10) || 0;
  f.pixelHeight = f.heightIsRelative ? c.offsetHeight : parseInt(f.height, 10) || 0;
  return f
 };
 v = d.renderer = {
  register: function (a, c) {
   if (!a || "function" !== typeof a.toString) throw Error("#03091436 ~renderer.register() Invalid value for renderer name.");
   a = a.toString().toLowerCase();
   if (void 0 !== b[a]) return d.raiseError(d.core, "03091438", "param", "::RendererManager>register", 'Duplicate renderer name specified in "name"'), !1;
   b[a] = c;
   return !0
  },
  userSetDefault: !1,
  setDefault: function (a) {
   if (!a || "function" !==
    typeof a.toString) return d.raiseError(d.core, "25081731", "param", "::RendererManager>setDefault", 'Invalid renderer name specified in "name"'), !1;
   if (void 0 === b[a = a.toString().toLowerCase()]) return d.raiseError(d.core, "25081733", "range", "::RendererManager>setDefault", "The specified renderer does not exist."), !1;
   this.userSetDefault = !1;
   d.policies.options.renderer = ["renderer", a];
   return !0
  },
  notifyRender: function (a) {
   var b = d.core.items[a && a.id];
   b && (!1 !== a.success || a.silent) || d.raiseError(d.core.items[a.id],
    "25081850", "run", "::RendererManager", Error("There was an error rendering the chart. Enable FusionCharts JS debugger for more information."));
   if (b.ref = a.ref) a.ref.FusionCharts = d.core.items[a.id];
   d.raiseEvent("internal.DOMElementCreated", {}, b)
  },
  protectedMethods: {
   options: !0,
   attributes: !0,
   src: !0,
   ref: !0,
   constructor: !0,
   signature: !0,
   link: !0,
   addEventListener: !0,
   removeEventListener: !0
  },
  getRenderer: function (a) {
   return b[a]
  },
  getRendererPolicy: function (a) {
   a = b[a].policies;
   return "object" === typeof a ? a : {}
  },
  currentRendererName: function () {
   return d.policies.options.renderer[1]
  },
  update: function (a) {
   K[a.id].update.apply(a, Array.prototype.slice.call(arguments, 1))
  },
  render: function (a) {
   K[a.id].render.apply(a, Array.prototype.slice.call(arguments, 1))
  },
  remove: function (a) {
   K[a.id].remove.apply(a, Array.prototype.slice.call(arguments, 1))
  },
  resize: function (a) {
   K[a.id].resize.apply(a, Array.prototype.slice.call(arguments, 1))
  },
  config: function (a) {
   K[a.id].config.apply(a, Array.prototype.slice.call(arguments, 1))
  },
  dispose: function (a) {
   K[a.id].dispose.apply(a, Array.prototype.slice.call(arguments,
    1))
  }
 };
 d.addEventListener("beforeInitialize", function (a) {
  a = a.sender;
  var c = a.options.renderer.toLowerCase(),
   g;
  "string" === typeof a.options.renderer && void 0 === b[c] && (a.options.renderer = d.policies.options.renderer[1]);
  a.options.renderer = c;
  K[a.id] = b[a.options.renderer];
  !0 !== K[a.id].initialized && "function" === typeof K[a.id].init && (K[a.id].init(), K[a.id].initialized = !0);
  d.parsePolicies(a, K[a.id].policies || {}, a.args);
  for (g in K[a.id].prototype) a[g] = K[a.id].prototype[g];
  for (g in K[a.id].events) a.addEventListener(g,
   K[a.id].events[g])
 });
 d.addEventListener(["rendered", "dataloaderror", "nodatatodisplay", "rendercancelled"], function (a, b) {
  var c = a.sender;
  c instanceof d.core && c.__state.rendering && (d.raiseEvent("internal.rendered", b, c), delete c.__state.rendering)
 });
 d.addEventListener("loaded", function (a) {
  var b = a.sender;
  a = a.sender.ref;
  var g, f;
  if (void 0 !== a && null !== a && "function" === typeof a.getExternalInterfaceMethods) {
   try {
    g = a.getExternalInterfaceMethods(), g = "string" === typeof g ? g.split(",") : []
   }
   catch (l) {
    g = [], d.raiseError(b,
     "13111126041", "run", "RendererManager^Loaded", Error("Error while retrieving data from the chart-object." + (l.message && 0 <= l.message.indexOf("NPObject") ? " Possible cross-domain security restriction." : "")))
   }
   for (a = 0; a < g.length; a += 1) f = g[a], void 0 === b[f] && (b[f] = I(f));
   if (b.ref)
    for (f in g = v.protectedMethods, a = v.getRenderer(b.options.renderer).protectedMethods, b)
     if (a && !g[f] && !a[f] && void 0 === b.ref[f]) try {
      b.ref[f] = c(b, f)
     }
   catch (p) {}
  }
 });
 d.legacyEventList.resized = "FC_Resized";
 d.extend(d.core.prototype, {
  render: function (a,
   b, c) {
   var f = this,
    l, p, F;
   if ((F = m[this.id]) && F.FusionCharts && F.FusionCharts === this || (F = this.ref) && F.FusionCharts && F.FusionCharts === this) d.renderer.dispose(this), F === m[this.id] && (m[this.id] = void 0);
   void 0 !== m[this.id] && d.raiseError(this, "25081843", "comp", ".render", Error("#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name forchart JS variable, chart-id and container id."));
   c ? "function" !== typeof c && (c = void 0) : "function" === typeof b ? (c =
    b, b = void 0) : b || "function" !== typeof a || (c = a, a = void 0);
   b = (b || this.options.insertMode).toLowerCase() || E.REPLACE;
   void 0 === a && (a = this.options.containerElementId);
   "string" === typeof a && (a = z.getElementById(a));
   if (void 0 === a || null === a) return d.raiseError(this, "03091456", "run", ".render()", Error("Unable to find the container DOM element.")), this;
   if (s(this.id, a)) return d.raiseError(this, "05102109", "run", ".render()", Error("A duplicate object already exists with the specific Id: " + this.id)), this;
   l = z.createElement(this.options.containerElementType ||
    "span");
   l.setAttribute("id", this.id);
   if ("append" !== b && "prepend" !== b)
    for (; a.hasChildNodes();) a.removeChild(a.firstChild);
   "prepend" === b && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l);
   this.options.containerElement = a;
   this.options.containerElementId = a.id;
   if (b = l.style) b.position = "relative", b.textAlign = "left", b.lineHeight = "normal", b.display = "inline-block", b.zoom = "1", b.fontWeight = "normal", b.fontVariant = "normal", b.fontStyle = "normal", b.textDecoration = "none", b["*DISPLAY"] = "inline", b.padding = "0",
    b.margin = "0", b.border = "none", b.direction = "ltr";
   this.options.containerClassName && (l.className = this.options.containerClassName);
   b = d.normalizeCSSDimension(this.width, this.height, l);
   this.__state.renderedWidth = b.pixelWidth;
   this.__state.renderedHeight = b.pixelHeight;
   this.__state.rendering = !0;
   d.raiseEvent("beforeRender", p = {
    container: a,
    width: this.width,
    height: this.height,
    renderer: this.options.renderer
   }, this, void 0, function (a, b) {
    d.renderer.render(f, l, function () {
     d.renderer.notifyRender.apply(this, arguments);
     if (c) try {
      c.call(a.sender, b.container)
     }
     catch (f) {
      setTimeout(function () {
       throw f;
      })
     }
    })
   }, function () {
    d.raiseEvent("renderCancelled", p, f)
   });
   return this
  },
  remove: function () {
   d.renderer.remove(this);
   return this
  },
  resizeTo: function (b, c, g) {
   var f = this,
    l = f.width,
    p = f.height,
    s = f.__state;
   "object" === typeof b && (g = c, c = b.h, b = b.w);
   b = null === b || void 0 === b ? l : b.toString().replace(a, "");
   c = null === c || void 0 === c ? p : c.toString().replace(a, "");
   !0 !== g ? d.raiseEvent("beforeresize", {
     currentWidth: l,
     currentHeight: p,
     newWidth: b,
     newHeight: c
    },
    f, void 0,
    function () {
     f.width = b;
     f.height = c;
     d.renderer.resize(f, {
      width: b,
      height: c
     });
     d.raiseEventWithLegacy("resized", {
      width: f.width,
      height: f.height,
      prevWidth: l,
      prevHeight: p,
      pixelWidth: f.ref && f.ref.offsetWidth || 0,
      pixelHeight: f.ref && f.ref.offsetHeight || 0,
      originalWidth: s.renderedWidth,
      originalHeight: s.renderedHeight
     }, f, [f.id, f.width, f.height])
    },
    function () {
     d.raiseEvent("resizecancelled", {
      currentWidth: l,
      currentHeight: p,
      cancelledTargetWidth: b,
      cancelledTargetHeight: c
     }, f)
    }) : (f.width = b, f.height = c);
   return this
  },
  dispose: function () {
   var a = this,
    b = {};
   d.raiseEvent("beforeDispose", b, a, void 0, function () {
    d.renderer.dispose(a);
    d.raiseEvent("disposed", b, a);
    d.disposeEvents(a);
    delete d.core.items[a.id];
    for (var c in a) a.hasOwnProperty(c) && delete a[c];
    a.disposed = !0
   }, function () {
    d.raiseEvent("disposeCancelled", b, a)
   })
  },
  configure: function (a, b) {
   var c;
   a && ("string" === typeof a ? (c = {}, c[a] = b) : c = a, d.renderer.config(this, c))
  }
 });
 d.extend(d.core, {
  setCurrentRenderer: function () {
   var a = v.setDefault.apply(v, arguments);
   v.userSetDefault = !0;
   return a
  },
  getCurrentRenderer: function () {
   return v.currentRendererName.apply(v, arguments)
  },
  render: function (a, b) {
   return a instanceof d.core ? (a.render(b), a) : (new d.core(a)).render(b)
  }
 }, !1)
}]);
FusionCharts.register("module", ["private", "modules.interface.transcoder", function () {
 var d = this,
  m = d.window,
  z = d.transcoders = {},
  q = {},
  E = {},
  b = /url$/i,
  K = d._interactiveCharts = {
   selectscatter: [!0, !1],
   dragcolumn2d: [!0, !0],
   dragarea: [!0, !0],
   dragline: [!0, !0],
   dragnode: [!0, !0]
  },
  I = function (b, c, p, g) {
   var v = p.obj;
   p = p.args;
   p.dataSource = b;
   p.xmlHttpRequestObject = c;
   p.source = "XmlHttpRequest";
   p.url = g;
   d.raiseEvent("dataLoadRequestCompleted", p, v, void 0, s, a)
  },
  c = function (a, b, c) {
   var g = c.obj;
   c = c.args;
   c.error = a;
   c.httpStatus = b.xhr &&
    b.xhr.status ? b.xhr.status : -1;
   c.xmlHttpRequestObject = b;
   d.raiseEvent("dataLoadError", c, g);
   "function" === typeof m.FC_DataLoadError && m.FC_DataLoadError(g.id, c)
  },
  s = function (a, b) {
   a.sender.setChartData(b.dataSource, b.dataFormat, b.config, b.successcallback, b.silent)
  },
  a = function (a, b) {
   d.raiseEvent("dataLoadCancelled", b, a.sender);
   b.xmlHttpRequestObject.abort()
  },
  v = function (a, b) {
   var p = a.sender,
    g = p.__state,
    s = b.url;
   p.options.dataSource = b.url;
   g.dhmXhrObj || (g.dhmXhrObj = new d.ajax(I, c));
   g.dhmXhrObj.get("function" ===
    typeof m.decodeURIComponent ? m.decodeURIComponent(s) : m.unescape(s), {
     obj: p,
     args: b
    })
  },
  O = function (a, b) {
   var c = a.sender,
    g = c.__state;
   d.raiseEvent("dataLoadRequestCancelled", b, c);
   g && g.dhmXhrObj && g.dhmXhrObj.abort()
  },
  C = function (a, b) {
   var c = a.sender,
    g = c.__state,
    s = c.id;
   q[s] = b;
   E[s] && delete E[s];
   E[s] = {};
   g.dataReady = void 0;
   g.dataAvailable = !0;
   !0 !== b.silent && (!0 !== c.options.safeMode || !0 !== g.rendering || c.isActive() ? (delete g.args, d.renderer.update(c, b)) : (g.updatePending = b, d.raiseWarning(c, "23091255", "run", "::DataHandler~update",
    "Renderer update was postponed due to async loading.")));
   d.raiseEvent("dataUpdated", b, c, void 0, b.successcallback)
  },
  g = function (a, b) {
   d.raiseEvent("dataUpdateCancelled", b, a.sender, void 0, b.failurecallback)
  };
 d.dataFormats = {};
 d.policies.options.dataSource = ["dataSource", void 0];
 d.policies.options.dataFormat = ["dataFormat", void 0];
 d.policies.options.dataConfiguration = ["dataConfiguration", void 0];
 d.policies.options.showDataLoadingMessage = ["showDataLoadingMessage", !1];
 d.addDataHandler = function (a, b) {
  if ("string" !==
   typeof a || void 0 !== z[a.toLowerCase()]) d.raiseError(d.core, "03091606", "param", "::DataManager.addDataHandler", Error("Invalid Data Handler Name"));
  else {
   var c = {},
    g = a.toLowerCase();
   z[g] = b;
   b.name = a;
   c["set" + a + "Data"] = function (b, c, l) {
    return this.setChartData(b, a, c, l)
   };
   b.transportable && (c["set" + a + "Url"] = function (b, c, l) {
    return this.setChartDataUrl(b, a, c, l)
   }, d.dataFormats[a + "URL"] = g + "Url");
   c["get" + a + "Data"] = function () {
    return this.getChartData(a)
   };
   d.dataFormats[a] = g;
   d.extend(d.core, c, !0)
  }
 };
 d.extend(d.core.prototype, {
  setChartDataUrl: function (a, c, g, s, C) {
   if (void 0 === c || null === c || "function" !== typeof c.toString) c = this.options.dataFormat, d.raiseWarning(this, "03091609", "param", "FusionCharts#setChartDataUrl", "Invalid Data Format. Reverting to current data format - " + c);
   c = c.toString().toLowerCase();
   c = b.test(c) ? c.slice(0, -3) : c;
   d.raiseEvent("dataLoadRequested", {
    source: "XmlHttpRequest",
    url: a,
    dataFormat: c,
    silent: !!C,
    config: g,
    successcallback: s
   }, this, void 0, v, O)
  },
  setChartData: function (a, c, p, s, v) {
   var k = this.options,
    B, A;
   if (void 0 ===
    c || null === c || "function" !== typeof c.toString) c = k.dataFormat, d.raiseWarning(this, "03091610", "param", "FusionCharts#setChartData", "Invalid Data Format. Reverting to current data format - " + c);
   c = c.toString().toLowerCase();
   b.test(c) ? this.setChartDataUrl(a, c, p, s, v) : (k.dataSource = a, B = c, k.dataFormat = c, A = z[B], "undefined" === typeof A ? d.raiseError(d.core, "03091611", "param", "FusionCharts#setChartData", Error("Data Format not recognized")) : (c = (c = d.renderer && d.renderer.getRenderer(k.renderer || d.renderer.currentRendererName())) &&
    c.dataFormat, p = c === B ? A.passthrough ? A.passthrough(a, p) : {
     data: a
    } : A.encode(a, this, p || k.dataConfiguration) || {}, p["native"] = c === B, p.format = p["native"] ? c : "xml", p.dataFormat = B, p.dataSource = a, p.silent = !!v, "function" === typeof s && (p.successcallback = s), d.raiseEvent("beforeDataUpdate", p, this, void 0, C, g)))
  },
  getChartData: function (a, b) {
   var c = this.options,
    g = this.id,
    s;
   if (void 0 === a || "function" !== typeof a.toString || void 0 === (s = z[a = a.toString().toLowerCase()])) d.raiseError(this, "25081543", "param", "::transcoder~getChartData()",
    Error('Unrecognized data-format specified in "format"'));
   else return E[g][a] ? c = E[g][a] : q[g] ? (a === q[g].format ? E[g][a] = q[g] : (E[g].xml || (E[g].xml = "xml" === q[g].format ? q[g] : z[q[g].format].encode(q[g].data, this, c.dataConfiguration)), E[g][a] || (E[g][a] = s.decode(E[g].xml.data, this, c.dataConfiguration))), c = E[g][a]) : c = {
    error: Error("Data not defined")
   }, !0 === Boolean(b) ? c : c.data
  },
  dataReady: function (a) {
   return a ? this.__state.dataAvailable : this.__state.dataReady
  }
 });
 d.extend(d.core, {
  transcodeData: function (a, b, c, g,
   s) {
   if (b && "function" === typeof b.toString && c && "function" === typeof c.toString && void 0 !== z[c = c.toString().toLowerCase()] && void 0 !== z[b = b.toString().toLowerCase()]) return a = z[b].encode(a, this, s), c = z[c].decode(a.data, this, s), c.error instanceof Error || (c.error = a.error), g ? c : c.data;
   d.raiseError(this, "14090217", "param", ".transcodeData()", Error("Unrecognized data-format specified during transcoding."))
  }
 }, !1);
 d.getRenderer && !d.getRenderer("flash") || d.addEventListener("DataLoadRequested", function (a) {
  var b = a.sender;
  b.options && "flash" === b.options.renderer && b.options.useLegacyXMLTransport && a.preventDefault()
 });
 d.addEventListener("beforeInitialize", function (a) {
  a = a.sender;
  var c = a.options,
   g = c.dataSource,
   s = d.renderer && d.renderer.getRenderer(c.renderer);
  delete q[a.id];
  E[a.id] = {};
  if (void 0 !== g && null !== g) {
   a.__state.dataSetDuringConstruction = !0;
   if ("string" !== typeof c.dataFormat) switch (typeof g) {
   case "function":
    g = c.dataSource = g.call(a, c.dataConfiguration);
    c.dataFormat = "JSON";
    break;
   case "string":
    c.dataFormat = /^\s*?\{[\s\S]*\}\s*?$/g.test(a.options.dataFormat) ?
     "JSON" : "XML";
    break;
   case "object":
    c.dataFormat = "JSON"
   }
   c.dataFormat && c.dataFormat.toString && (a.__state.dataFetchDuringConstruction = b.test(c.dataFormat.toString()));
   a.setChartData(g, c.dataFormat, void 0, void 0, !0)
  }
  else s && (a.__state.dataSetDuringConstruction = !1, d.raiseWarning(a, "1810131922A", "param", ":dataHandler~event:beforeInitialize", "Data source was not defined during construction, hence set to blank renderer default - " + s.dataFormat), a.setChartData("", s.dataFormat, void 0, void 0, !0), a.__state.dataAvailable = !1)
 });
 d.addEventListener("beforeDispose", function (a) {
  var b = a.sender;
  delete q[a.sender.id];
  delete E[a.sender.id];
  b && b.__state && b.__state.dhmXhrObj && b.__state.dhmXhrObj.abort()
 });
 d.addEventListener("disposed", function (a) {
  delete E[a.sender.id]
 });
 d.addEventListener("loaded", function (a) {
  a = a.sender;
  var b = a.__state.updatePending;
  a instanceof d.core && void 0 !== b && (delete a.__state.updatePending, d.renderer.update(a, b))
 });
 d.addEventListener("dataUpdated", function (a, b) {
  var c = a.sender,
   g = c.__state;
  g.rendering &&
   (g.dataFetchDuringConstruction || g.updatePending) && (delete g.dataFetchDuringConstruction, delete g.updatePending, d.renderer.update(c, b))
 });
 d.addEventListener(["dataLoadError", "dataInvalid"], function (a) {
  a.sender.__state.dataAvailable = !1
 });
 d.addEventListener("loaded", function (a) {
  a = a.sender;
  var b = a.__state,
   c, g, s;
  s = function (a, b) {
   return function (c) {
    return !1 === c ? b.apply(this) : this.ref.getUpdatedXMLData ? d.core.transcodeData(this.ref.getUpdatedXMLData(), "xml", a) : this.getData ? this.getData(a) : b.apply(this)
   }
  };
  if (a.chartType && K[a.chartType()] && K[a.chartType()][0]) {
   for (c in d.transcoders) g = d.transcoders[c].name, g = "get" + g + "Data", a[g] = s(c, a.constructor.prototype[g]), a[g]._dynamicdatarouter = !0;
   b.dynamicDataRoutingEnabled = !0
  }
  else if (b.dynamicDataRoutingEnabled) {
   for (c in d.transcoders) g = d.transcoders[c].name, g = "get" + g + "Data", a.hasOwnProperty(g) && a[g]._dynamicdatarouter && delete a[g];
   b.dynamicDataRoutingEnabled = !1
  }
 })
}]);
"object" !== typeof JSON && (JSON = {});
(function () {
 function d(b) {
  return 10 > b ? "0" + b : b
 }

 function m(b) {
  E.lastIndex = 0;
  return E.test(b) ? '"' + b.replace(E, function (a) {
   var b = I[a];
   return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
  }) + '"' : '"' + b + '"'
 }

 function z(d, a) {
  var v, q, C, g, f = b,
   l, p = a[d];
  p && "object" === typeof p && "function" === typeof p.toJSON && (p = p.toJSON(d));
  "function" === typeof c && (p = c.call(a, d, p));
  switch (typeof p) {
  case "string":
   return m(p);
  case "number":
   return isFinite(p) ? String(p) : "null";
  case "boolean":
  case "null":
   return String(p);
  case "object":
   if (!p) return "null";
   b += K;
   l = [];
   if ("[object Array]" === Object.prototype.toString.apply(p)) {
    g = p.length;
    for (v = 0; v < g; v += 1) l[v] = z(v, p) || "null";
    C = 0 === l.length ? "[]" : b ? "[\n" + b + l.join(",\n" + b) + "\n" + f + "]" : "[" + l.join(",") + "]";
    b = f;
    return C
   }
   if (c && "object" === typeof c)
    for (g = c.length, v = 0; v < g; v += 1) "string" === typeof c[v] && (q = c[v], (C = z(q, p)) && l.push(m(q) + (b ? ": " : ":") + C));
   else
    for (q in p) Object.prototype.hasOwnProperty.call(p, q) && (C = z(q, p)) && l.push(m(q) + (b ? ": " : ":") + C);
   C = 0 === l.length ? "{}" : b ? "{\n" + b + l.join(",\n" +
    b) + "\n" + f + "}" : "{" + l.join(",") + "}";
   b = f;
   return C
  }
 }
 "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
  return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + d(this.getUTCMonth() + 1) + "-" + d(this.getUTCDate()) + "T" + d(this.getUTCHours()) + ":" + d(this.getUTCMinutes()) + ":" + d(this.getUTCSeconds()) + "Z" : null
 }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
  return this.valueOf()
 });
 var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
  E = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
  b, K, I = {
   "\b": "\\b",
   "\t": "\\t",
   "\n": "\\n",
   "\f": "\\f",
   "\r": "\\r",
   '"': '\\"',
   "\\": "\\\\"
  },
  c;
 "function" !== typeof JSON.stringify && (JSON.stringify = function (d, a, v) {
  var m;
  K = b = "";
  if ("number" === typeof v)
   for (m = 0; m < v; m += 1) K += " ";
  else "string" === typeof v && (K = v);
  if ((c = a) && "function" !== typeof a && ("object" !== typeof a || "number" !== typeof a.length)) throw Error("JSON.stringify");
  return z("", {
   "": d
  })
 });
 "function" !== typeof JSON.parse && (JSON.parse = function (b, a) {
  function c(b, g) {
   var f, l, d = b[g];
   if (d && "object" === typeof d)
    for (f in d) Object.prototype.hasOwnProperty.call(d, f) && (l = c(d, f), void 0 !== l ? d[f] = l : delete d[f]);
   return a.call(b, g, d)
  }
  var d;
  b = String(b);
  q.lastIndex = 0;
  q.test(b) && (b = b.replace(q, function (a) {
   return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
  }));
  if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + b + ")"), "function" === typeof a ? c({
   "": d
  }, "") : d;
  throw new SyntaxError("JSON.parse");
 })
})();
FusionCharts.register("module", ["private", "modules.data.json", function () {
 var d = this,
  m = d.window,
  z = m.document,
  q = d.xssEncode,
  E, b;
 void 0 === m.JSON && d.raiseError(this, "1113062012", "run", "JSONDataHandler", Error("Could not find library support for JSON parsing."));
 d.policies.options.allowIESafeXMLParsing = ["_allowIESafeXMLParsing", !0];
 E = function () {
  var b = {
    set: !0,
    trendlines: !0,
    vtrendlines: !0,
    line: {
     trendlines: !0,
     vtrendlines: !0
    },
    data: !0,
    dataset: !0,
    lineset: !0,
    categories: !0,
    category: !0,
    linkeddata: !0,
    application: !0,
    definition: !0,
    axis: !0,
    connectors: !0,
    connector: {
     connectors: !0
    },
    trendset: !0,
    row: {
     rows: !0
    },
    column: {
     columns: !0
    },
    label: {
     labels: !0
    },
    color: {
     colorrange: !0
    },
    dial: {
     dials: !0
    },
    pointer: {
     pointers: !0
    },
    point: {
     trendpoints: !0
    },
    process: {
     processes: !0
    },
    task: {
     tasks: !0
    },
    milestone: {
     milestones: !0
    },
    datacolumn: {
     datatable: !0
    },
    text: {
     datacolumn: !0
    },
    item: {
     legend: !0
    },
    alert: {
     alerts: !0
    },
    groups: {
     annotations: !0
    },
    items: {
     groups: !0,
     data: !0
    },
    shapes: !0,
    shape: {
     shapes: !0
    },
    entitydef: !0,
    entity: {
     entitydef: !0
    }
   },
   q = {
    chart: "linkedchart",
    map: "linkedmap",
    set: "data",
    vline: {
     chart: "data",
     graph: "data",
     dataset: "data",
     categories: "category",
     linkedchart: "data"
    },
    apply: {
     application: "application"
    },
    style: {
     definition: "definition"
    },
    marker: {
     application: "application",
     definition: "definition",
     data: "items"
    },
    entity: {
     entitydef: "entitydef",
     data: "data"
    },
    shape: {
     shapes: "shapes"
    },
    connector: {
     connectors: {
      chart: "connector",
      linkedchart: "connector",
      map: "connectors",
      linkedmap: "connectors"
     }
    },
    annotationgroup: {
     annotations: "groups"
    },
    annotation: {
     groups: "items"
    }
   },
   c = {
    vline: {
     vline: "true"
    }
   },
   s = {
    chart: !0,
    map: !0,
    graph: !0
   },
   a = {
    dataset: "data",
    categories: "category"
   },
   v = {
    target: "target",
    value: "value"
   },
   E = {
    styles: {
     definition: !0,
     application: !0
    },
    chart: {
     value: !0,
     target: !0
    },
    graph: {
     value: !0,
     target: !0
    },
    linkedchart: {
     value: !0,
     target: !0
    },
    markers: {
     definition: !0,
     application: !0,
     shapes: !0,
     connectors: !0,
     data: !0
    },
    map: {
     entitydef: !0,
     data: !0
    },
    linkedmap: {
     entitydef: !0,
     data: !0
    }
   },
   C, g;
  C = {
   append: function (a, c, g, d) {
    !b[g] || !0 !== b[g] && !0 !== b[g][d] ? c[g] = a : (c[g] instanceof Array || (c[g] = []), c[g].push(a))
   },
   child: function (b, g,
    p, F) {
    var m, k, B, A, W, r;
    for (m = 0; m < g.length; m += 1) switch (B = g[m], k = B.nodeName.toLowerCase(), B.nodeType) {
    case 1:
     A = C.attr(B.attributes);
     r = s[k];
     !0 === r && (W = A, A = {}, A[k] = W);
     r = c[k];
     "object" === typeof r && d.extend(A, r);
     if (r = q[k])
      if ("object" === typeof r && "object" === typeof r[p])
       for (W in W = void 0, r[p]) {
        if (F[W]) {
         k = r[p][W];
         break
        }
       }
      else "object" === typeof r && "string" === typeof r[p] ? k = r[p] : "string" === typeof r && (k = r);
     B.childNodes.length && ((r = E[p]) && r[k] ? C.child(b, B.childNodes, k, F) : C.child(A, B.childNodes, k, F));
     (r = E[p]) && r[k] ||
      C.append(A, b, k, p);
     break;
    case 3:
     if (r = v[p]) k = r, A = B.data, C.append(A, b, k, p);
     r = a[p];
     "string" === typeof r && F.chart && parseInt(F.chart.compactdatamode, 10) && (k = r, A = B.data, b[k] = b[k] ? b[k] + A : A)
    }
   },
   attr: function (a) {
    var b, c = {};
    if (!a || !a.length) return c;
    for (b = 0; b < a.length; b += 1) c[a[b].nodeName.toLowerCase()] = a[b].value || a[b].nodeValue;
    return c
   }
  };
  g = function (a) {
   var b = {},
    c, s, v, k, B, A, W, r, q;
   if ("object" !== typeof a && a && "function" !== typeof a.toString) return g.errorObject = new TypeError("xml2json.parse()"), b;
   a = a.toString().replace(/<\!--[\s\S]*?--\x3e/g,
    "").replace(/<\?xml[\s\S]*?\?>/ig, "").replace(/&(?!([^;\n\r]+?;))/g, "&amp;$1");
   a = a.replace(/^\s\s*/, "");
   for (var I = /\s/, E = a.length; I.test(a.charAt(--E)););
   a = a.slice(0, E + 1);
   if (!a) return b;
   try {
    m.DOMParser ? c = (new m.DOMParser).parseFromString(a, "text/xml") : z.body && d.core.options.allowIESafeXMLParsing ? (s = z.createElement("xml"), s.innerHTML = a, z.body.appendChild(s), c = s.XMLDocument, z.body.removeChild(s)) : (c = new m.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a));
    if (!(c && c.childNodes && 1 === c.childNodes.length &&
      (v = c.childNodes[0]) && v.nodeName && (k = v.nodeName.toLowerCase())) || "chart" !== k && "map" !== k && "graph" !== k) return g.errorObject = new TypeError("xml2json.parse()"), b;
    if ("graph" === k) {
     B = c.createElement("chart");
     for (q = (W = v.attributes) && W.length || 0; q--;) B.setAttribute(W[q].name, W[q].value), W.removeNamedItem(W[q].name);
     if (q = (r = v.childNodes) && r.length || 0) --q, A = v.removeChild(r[q]), B.appendChild(A);
     for (; q--;) A = v.removeChild(r[q]), B.insertBefore(A, B.firstChild);
     c.replaceChild(B, v);
     v = B
    }
   }
   catch (V) {
    g.errorObject = V
   }
   v ? (v.attributes &&
    (b[k] = C.attr(v.attributes)), v.childNodes && C.child(b, v.childNodes, k, b), delete g.errorObject) : g.errorObject = new TypeError("xml2json.parse()");
   return b
  };
  return function (a) {
   delete g.errorObject;
   return {
    data: g(a),
    error: g.errorObject
   }
  }
 }();
 b = function () {
  var b, d;
  b = {
   items: {
    explode: {
     data: "set",
     groups: {
      annotations: "annotationgroup"
     },
     items: {
      groups: "annotation"
     }
    },
    text: {
     chart: {
      target: "target",
      value: "value"
     },
     graph: {
      target: "target",
      value: "value"
     }
    },
    dsv: {
     dataset: {
      data: "dataset"
     },
     categories: {
      category: "categories"
     }
    },
    attr: {
     chart: {
      chart: "chart"
     },
     graph: {
      graph: "graph"
     },
     map: {
      map: "map"
     },
     linkedmap: {
      map: "map"
     },
     linkedchart: {
      chart: "chart"
     }
    },
    group: {
     styles: {
      definition: "style",
      application: "apply"
     },
     map: {
      data: "entity",
      entitydef: "entity"
     },
     markers: {
      definition: "marker",
      application: "marker",
      shapes: "shape",
      connectors: "connector",
      items: "marker"
     }
    },
    tag: {
     markers: {
      items: "data"
     }
    }
   },
   qualify: function (b, d, a) {
    return "object" === typeof this.items[b][a] ? this.items[b][a][d] : this.items[b][a]
   }
  };
  d = function (c, s, a, v) {
   var m = "",
    C = "",
    g = "",
    f = "",
    l, p, F;
   s && "function" === typeof s.toLowerCase &&
    (s = s.toLowerCase());
   if (void 0 === a && c[s])
    for (l in c[s]) p = l.toLowerCase(), "compactdatamode" === p && (v.applyDSV = 1 == c[s][l]);
   if (c instanceof Array)
    for (l = 0; l < c.length; l += 1) g = "string" === typeof c[l] ? g + q(c[l]) : g + d(c[l], s, a, v);
   else {
    for (l in c) p = l.toLowerCase(), c[l] instanceof Array && (F = b.qualify("group", p, s)) ? (g = b.qualify("tag", p, s) || p, C += "<" + g + ">" + d(c[l], F, s, v) + "</" + g + ">") : "object" === typeof c[l] ? (F = b.qualify("attr", p, s)) ? (f = d(c[l], F, s, v).replace(/\s*\/\>/ig, ""), s = p) : C += d(c[l], p, s, v) : v.applyDSV && (F = b.qualify("dsv",
     p, s)) ? C += c[l] : (F = b.qualify("text", p, s)) ? (g = b.qualify("tag", p, s) || F, C += "<" + g + ">" + c[l] + "</" + g + ">") : "vline" === p && Boolean(c[l]) ? s = "vline" : m += " " + p + '="' + q(c[l]).toString().replace(/\"/ig, "&quot;") + '"';
    if (F = b.qualify("explode", a, s)) s = F;
    g = s;
    g = ("" !== f ? f : "<" + g) + m + ("" !== C ? ">" + C + "</" + g + ">" : " />")
   }
   return g
  };
  return function (b) {
   delete d.errorObject;
   if (b && "string" === typeof b) try {
    b = JSON.parse(b)
   }
   catch (s) {
    d.errorObject = s
   }
   return {
    data: d(b, b && b.graph ? "graph" : b && b.map ? "map" : "chart", void 0, {}),
    error: d.errorObject
   }
  }
 }();
 d.addDataHandler("JSON", {
  encode: b,
  decode: E,
  passthrough: function (b) {
   var d = {
    data: {}
   };
   if (!b) return d;
   if ("string" !== typeof b) try {
    b = JSON.stringify(b)
   }
   catch (c) {
    return d.error = c, d
   }
   try {
    d.data = JSON.parse(b.replace(/"([^"]+)":/g, function (a, b) {
     return '"' + b.toLowerCase() + '":'
    }))
   }
   catch (s) {
    d.error = s
   }
   return d
  },
  transportable: !0
 })
}]);
FusionCharts.register("module", ["private", "modules.data.xml", function () {
 var d = function (d) {
  return {
   data: d,
   error: void 0
  }
 };
 this.addDataHandler("XML", {
  encode: d,
  decode: d,
  transportable: !0
 })
}]);
FusionCharts.register("module", ["private", "modules.data.csv", function () {
 var d = this,
  m = d.window,
  z = d.core,
  q = m.parseInt,
  E = m.parseFloat,
  b = function (b) {
   return b
  },
  K;
 K = function (b) {
  this.data = [];
  this.columnCount = this.rowCount = 0;
  this.configure(b)
 };
 K.decodeLiterals = function (b, c) {
  return void 0 !== b && null !== b && b.toString ? b.replace("{tab}", "\t").replace("{quot}", '"').replace("{apos}", "'") : c
 };
 K.prototype.set = function (b, c, d) {
  var a;
  if (this.rowCount <= b) {
   for (a = this.rowCount; a <= b; a += 1) this.data[a] = [];
   this.rowCount = b + 1
  }
  this.columnCount <=
   c && (this.columnCount = c + 1);
  this.data[b][c] = d
 };
 K.prototype.setRow = function (b, c) {
  var d;
  if (this.rowCount <= b) {
   for (d = this.rowCount; d <= b; d += 1) this.data[d] = [];
   this.rowCount = b + 1
  }
  this.columnCount < c.length && (this.columnCount = c.length);
  this.data[b] = c
 };
 K.prototype.get = function (b, c) {
  var d = this.data;
  return d[b] && d[b][c]
 };
 K.prototype.configure = function (b) {
  var c = K.decodeLiterals;
  this.delimiter = c(b.delimiter, ",");
  this.qualifier = c(b.qualifier, '"');
  this.eolCharacter = c(b.eolCharacter, "\r\n");
  this.numberFormatted = !!q(b.numberFormatted,
   0)
 };
 K.prototype.clear = function () {
  this.data = [];
  this.columnCount = this.rowCount = 0
 };
 K.prototype.toString = function () {
  var b, c, d = "";
  for (b = 0; b < this.rowCount; b += 1) c = this.qualifier + this.data[b].join(this.qualifier + this.delimiter + this.qualifier) + this.qualifier, d += '""' === c ? this.eolCharacter : c + this.eolCharacter;
  0 < this.rowCount && (d = d.slice(0, d.length - 2));
  return d
 };
 d.addDataHandler("CSV", {
  encode: function (b, c) {
   d.raiseError(c, "0604111215", "run", "::CSVDataHandler.encode()", "FusionCharts CSV data-handler only supports encoding of data.");
   throw Error("FeatureNotSupportedException()");
  },
  decode: function (d, c) {
   var s = z.transcodeData(d, "xml", "json") || {},
    a = c.jsVars,
    v, m, C, g, f, l, p, F = s.chart || s.map || s.graph || {};
   p = Boolean(F.exporterrorcolumns || 0);
   var q = s.categories && s.categories[0] && s.categories[0].category || [],
    k = s.map && !s.chart || a && a.instanceAPI && "geo" === a.instanceAPI.defaultSeriesType,
    B = !1,
    A = !1,
    W = !1,
    r = !1;
   m = !1;
   var oa = b,
    ga = {},
    $, V, ta, za, Aa, Z, U, na, H, T, fa;
   f = 0;
   v = new K({
    separator: F.exportdataseparator,
    qualifier: F.exportdataqualifier,
    numberFormatted: F.exportdataformattedval
   });
   z.formatNumber && v.numberFormatted && (oa = function (a) {
    return z.formatNumber(a, F)
   });
   if (k)
    for (T in ga.geo = !0, q = a.hcObj && a.hcObj.entities && a.hcObj.entities.items || [], v.setRow(0, ["Id", " Short Name", "Long Name", "Value", "Formatted Value"]), a = 0, q) A = q[T], fa = A.eJSON, m = A.value, v.setRow(++a, [T, fa.shortLabel, fa.label, void 0 === m ? "" : m, A.formattedValue]);
   else if (void 0 !== ($ = s.dials && s.dials.dial || s.pointers && s.pointers.pointer || s.value))
    if (ga.gauge = !0, "string" === typeof $) v.set(0, 0, oa($)), ga.singlevalue = !0, "string" ===
     typeof s.target && (v.set(0, 1, oa(s.target)), ga.bullet = !0);
    else
     for (v.setRow(0, ["Id", "Value"]), ga.multivalue = !0, a = 0, l = 1, f = $.length; a < f; a += 1, l += 1) v.setRow(l, [l, oa($[a].value)]);
   else if ($ = s.dataset || !(s.data instanceof Array) && []) {
    ga.multiseries = !0;
    C = 1;
    if (V = s.lineset) $ = $.concat(V), ga.lineset = !0;
    if (ta = s.axis) $ = $.concat(ta), ga.multiaxis = !0;
    Z = $.length;
    Aa = q.length;
    if (!(Z = $.length)) {
     for (a = 0; a < Aa; a += 1) U = q[a], v.set(a + 1, 0, U.label || U.name);
     ga.multilevel = !0
    }
    for (a = 0; a < Z; a += 1)
     for (na = $, na[a].dataset ? (na = na[a].dataset,
       g = 0, za = na.length) : (na = $, g = a, za = g + 1); g < za && !B && !W; g += 1, C += 1) {
      k = na[g];
      v.set(0, C, k.seriesname);
      "string" === typeof k.data && (ga.compactdata = !0, k.data = k.data.split(F.dataseparator || "|"));
      l = f = 0;
      for (H = k.data && k.data.length || 0; f < H || f < Aa; f += 1) {
       U = q[f];
       m = l + 1;
       T = k.data && k.data[l] || {};
       if (void 0 !== T.x && void 0 !== T.y) {
        B = ga.xy = !0;
        break
       }
       if (void 0 !== T.open || void 0 !== T.high || void 0 !== T.close || void 0 !== T.low) {
        r = ga.ohlc = !0;
        break
       }
       if (void 0 !== T.rowid && void 0 !== T.columnid) {
        W = ga.heatmap = !0;
        break
       }
       if (f < Aa && !U.vline) {
        v.set(m, 0,
         U.label || U.name);
        U = E(T ? T.value : "");
        U = isNaN(U) ? "" : oa(U);
        v.set(m, C, U);
        if (A || p || T.errorvalue) A || v.set(0, C + 1, "Error"), fa = 1, v.set(m, C + 1, oa(T.errorvalue));
        l += 1
       }
      }
      fa && (C += fa, fa = 0)
     }
    V && ($ = $.slice(0, -V.length));
    ta && ($ = $.slice(0, -ta.length))
   }
   else if ($ = s.data) {
    v.set(0, 1, F.yaxisname || "Value");
    ga.singleseries = !0;
    m = "1" == F.showsumatend;
    a = 0;
    for (Aa = $.length; a < Aa; a += 1) T = $[a], T.vline || (U = E(T.value ? T.value : ""), v.setRow(a + 1, [T.label || T.name, isNaN(U) ? "" : (f += U, oa(U))]));
    m && (ga.summation = !0, v.setRow(a + 1, [F.sumlabel || "Total",
oa(f)]))
   }
   if (r)
    for (v.clear(), v.setRow(0, ["Open", "Close", "High", "Low"]), a = 0, m = 1, $ = s.dataset, za = $.length; a < za; a += 1)
     for (f = 0, k = $[a] && $[a].data || [], Z = k.length; f < Z; f += 1, m += 1) T = k[f] || {}, v.setRow(f + 1, [oa(T.open), oa(T.close), oa(T.high), oa(T.low)]);
   else if (B)
    for (v.clear(), A = !1, fa = 0, v.setRow(0, ["Series", "x", "y"]), a = 0, m = 1, $ = s.dataset, za = $.length; a < za; a += 1)
     for (f = 0, k = $[a] && $[a].data || [], Z = k.length; f < Z; f += 1, m += 1) {
      T = k[f] || {};
      U = [$[a].seriesname, oa(T.x), oa(T.y)];
      void 0 !== T.z && (U.push(oa(T.z)), fa || (v.set(0, 3, "z"), fa =
       1));
      if (A || p || void 0 !== T.errorvalue || void 0 !== T.horizontalerrorvalue || void 0 !== T.verticalerrorvalue) s = oa(T.errorvalue), U.push(T.errorvalue, void 0 === T.horizontalerrorvalue ? s : oa(T.horizontalerrorvalue), void 0 === T.verticalerrorvalue ? s : oa(T.verticalerrorvalue)), A || (v.set(0, fa + 3, "Error"), v.set(0, fa + 4, "Horizontal Error"), v.set(0, fa + 5, "Vertical Error")), A = ga.error = !0;
      v.setRow(m, U)
     }
   else if (W) {
    v.clear();
    B = {};
    W = {};
    a = 0;
    f = 1;
    q = s.rows && s.rows.row || [];
    for (p = q.length; a < p; a += 1, f += 1) U = q[a], U.id && (B[U.id.toLowerCase()] =
     f, v.set(f, 0, U.label || U.id));
    a = 0;
    f = 1;
    q = s.columns && s.columns.column || [];
    for (p = q.length; a < p; a += 1, f += 1) U = q[a], U.id && (W[U.id.toLowerCase()] = f, v.set(0, f, U.label || U.id));
    k = s.dataset && s.dataset[0] && s.dataset[0].data || [];
    a = 0;
    for (p = k.length; a < p; a += 1) T = k[a], m = T.rowid.toLowerCase(), C = T.columnid.toLowerCase(), B[m] || (B[m] = v.rowCount, v.set(v.rowCount, 0, T.rowid)), W[C] || (W[C] = v.columnCount, v.set(0, v.columnCount, T.columnid)), v.set(B[m], W[C], oa(T.value))
   }
   $ = q = V = ta = null;
   0 < v.rowCount && void 0 === v.get(0, 0) && v.set(0, 0, F.xaxisname ||
    "Label");
   return {
    data: v.toString(),
    error: void 0,
    predictedFormat: ga
   }
  },
  transportable: !1
 });
 z.addEventListener("Loaded", function (b) {
  b = b.sender;
  "javascript" !== b.options.renderer || b.getDataAsCSV || (b.getDataAsCSV = b.ref.getDataAsCSV = b.getCSVData)
 })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js", function () {
 var d = this,
  m = d.window,
  z = m.document,
  q = d.core.options,
  E = /msie/i.test(m.navigator.userAgent) && !m.opera,
  b = Boolean(m.SVGAngle || z.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")),
  K = function () {},
  I = d.hcLib = {
   cmdQueue: []
  },
  c = I.moduleCmdQueue = {
   base: [],
   charts: [],
   powercharts: [],
   widgets: [],
   maps: []
  },
  s = I.moduleDependencies = {},
  a = I.moduleMeta = {
   base: "fusioncharts.js",
   charts: "fusioncharts.charts.js",
   powercharts: "fusioncharts.powercharts.js",
   widgets: "fusioncharts.widgets.js",
   maps: "fusioncharts.maps.js"
  },
  v = {},
  O = I.getMetaSentence = function () {
   var a = {};
   return function (b) {
    b = b && b.replace(/(^\s*)|(\s*$)/g, "") || "";
    return a[b] || (a[b] = {
     key: b,
     subject: b.replace(/[^\/]*?$/ig, ""),
     predicate: b.replace(/^.*\//ig, "")
    })
   }
  }(),
  C = I.getDependentModuleName = function (a) {
   var b = [],
    c, f;
   a = O(a).predicate;
   for (c in s) void 0 !== (f = s[c][a]) && (b[f] = c);
   return b
  },
  g = I.hasModule = function (a) {
   var b, c;
   if (a instanceof Array) {
    b = 0;
    for (c = a.length; b < c; b += 1)
     if (!Boolean(d.modules["modules.renderer.js-" +
       O(a[b]).predicate])) return !1;
    return !0
   }
   return Boolean(d.modules["modules.renderer.js-" + O(a).predicate])
  },
  f = I.loadModule = function (b, c, f, l) {
   b instanceof Array || (b = [b]);
   var p = b.length,
    s = 0,
    m;
   m = function () {
    if (s >= p) c && c();
    else {
     var F = b[s],
      C = F && F.match(/[^\/]*$/i)[0],
      ta = a[F];
     s += 1;
     if (F) {
      if (g(C)) {
       m();
       return
      }
      if (v[C]) {
       d.raiseError(l || d.core, "1112201445A", "run", "JavaScriptRenderer~loadModule() ", "required resources are absent or blocked from loading.");
       f && f(C);
       return
      }
     }
     else f && f(C);
     F = d.core.options["html5" + d.capitalizeString(C) +
      "Src"];
     d.loadScript(void 0 === F ? ta : F, {
      success: function () {
       g(C) ? m() : f && f(C)
      },
      failure: f && function () {
       f(C)
      }
     }, void 0, !0)
    }
   };
   m()
  },
  l = I.executeWaitingCommands = function (a) {
   for (var b; b = a.shift();) "object" === typeof b && K[b.cmd].apply(b.obj, b.args)
  },
  p = function (a) {
   delete a.sender.jsVars._reflowData;
   a.sender.jsVars._reflowData = {};
   delete a.sender.jsVars._reflowClean
  },
  F = function () {
   var a = function () {};
   a.prototype = {
    LoadDataErrorText: "Error in loading data.",
    XMLLoadingText: "Retrieving data. Please wait",
    InvalidXMLText: "Invalid data.",
    ChartNoDataText: "No data to display.",
    ReadingDataText: "Reading data. Please wait",
    ChartNotSupported: "Chart type not supported.",
    PBarLoadingText: "",
    LoadingText: "Loading chart. Please wait",
    RenderChartErrorText: "Unable to render chart."
   };
   return a.prototype.constructor = a
  }(),
  Q = I.getContainerBackgroundColor = function (a) {
   var c = a.options.containerBackgroundColor,
    f = a.options.containerBackgroundOpacity,
    g = a.jsVars.transparent;
   void 0 !== g && null !== g ? f = a.jsVars.transparent ? 0 : 1 : (f = parseFloat(f), 0 > f ? f = 0 : 1 < f && (f = 1));
   c || (c = "#ffffff");
   if (E && !b) return f ? c : "transparent";
   c = c.replace(/^#?([a-f0-9]+)/ig, "$1");
   c = I.graphics.HEXtoRGB(c);
   c[3] = f.toString();
   return "rgba(" + c.join(",") + ")"
  };
 I.injectModuleDependency = function (a, b, f) {
  var g = !1,
   d = O(a).subject;
  a = O(a).predicate;
  b = void 0 === b ? a : O(b).predicate;
  s[a] || (s[a] = {}, c[a] || (c[a] = [], I.moduleMeta[a] = d + q.html5ScriptNamePrefix + (b && b.replace && b.replace(/^[\s\S]*\//ig, "").replace(/\?/g, "%3F").replace(/\#/g, "%23").replace(/\:/g, "%3A") || "") + q.html5ScriptNameSuffix), g = !0);
  s[a][b] = f || 0;
  return g
 };
 I.needsModule = function (a, b) {
  a = O(a).predicate;
  b = O(b).predicate;
  return void 0 !== (I.moduleDependencies[a] && I.moduleDependencies[a][b])
 };
 I.cleanupWaitingCommands = function (a) {
  for (var b = a.chartType(), b = C(b), f, g = [], d; f = b.shift();) {
   for (f = c[f] || []; d = f.shift();) "object" === typeof d && d.obj !== a && g.push(d);
   f.concat(g);
   g = []
  }
 };
 d.extend(d.core.options, {
  html5ScriptNameSuffix: ".js",
  html5ScriptNamePrefix: "fusioncharts."
 });
 d.extend(K, {
  dataFormat: "json",
  ready: !1,
  policies: {
   jsVars: {},
   options: {
    showChartLoadingMessage: ["showChartLoadingMessage",
!0]
   }
  },
  init: function () {
   g("base") ? K.ready = !0 : f("base", function () {
    K.ready = !0;
    l(I.cmdQueue)
   }, void 0, d.core)
  },
  render: function (a) {
   var b = a,
    c = this.jsVars.msgStore;
   b && this.options.showChartLoadingMessage && (b.innerHTML = '<small style="display: inline-block; *zoom:1; *display:inline; width: 100%; font-family: Verdana,sans; font-size: 10px; color: #666666; text-align: center; padding-top: ' + (parseInt(b.style.height, 10) / 2 - 5) + 'px">' + (c.PBarLoadingText || c.LoadingText) + "</small>", b.style.backgroundColor = Q(this));
   I.cmdQueue.push({
    cmd: "render",
    obj: this,
    args: arguments
   })
  },
  update: function () {
   I.cmdQueue.push({
    cmd: "update",
    obj: this,
    args: arguments
   })
  },
  resize: function () {
   I.cmdQueue.push({
    cmd: "resize",
    obj: this,
    args: arguments
   })
  },
  dispose: function () {
   var a = I.cmdQueue,
    b, c;
   b = 0;
   for (c = a.length; b < c; b += 1) a[b].obj === this && (a.splice(b, 1), --c, --b)
  },
  load: function () {
   I.cmdQueue.push({
    cmd: "load",
    obj: this,
    args: arguments
   })
  },
  config: function (a, b) {
   var c, f = this.jsVars,
    g = f.msgStore,
    f = f.cfgStore,
    d = this.options,
    l;
   l = {
    LoadingText: "loadMessage",
    ChartNotSupported: "typeNotSupportedMessage",
    RenderChartErrorText: "renderErrorMessage",
    XMLLoadingText: "dataLoadStartMessage",
    ChartNoDataText: "dataEmptyMessage",
    LoadDataErrorText: "dataLoadErrorMessage",
    InvalidXMLText: "dataInvalidMessage"
   };
   "string" === typeof a && 1 < arguments.length && (c = a, a = {}, a[c] = b);
   for (c in a) void 0 !== g[c] ? g[c] = a[c] : f[c.toLowerCase()] = a[c], l[c] && (d[l[c]] = a[c])
  },
  protectedMethods: {},
  events: {
   beforeInitialize: function (a) {
    var b = a.sender;
    a = b.jsVars;
    var c;
    a.fcObj = b;
    a.msgStore = a.msgStore || new F;
    a.cfgStore = a.cfgStore || {};
    a.previousDrawCount = -1;
    a.drawCount = 0;
    a._reflowData = {};
    b.addEventListener("beforeRender", function (a) {
     a.sender.jsVars.smartLabel = new I.SmartLabelManager(b.id, z.body || z.getElementsByTagName("body")[0]);
     a.detachHandler()
    });
    a.userModules instanceof Array || (c = a.userModules, a.userModules = [], "string" === typeof c && (a.userModules = a.userModules.concat(c.split(","))));
    I.chartAPI && I.chartAPI[void 0] || (a.needsLoaderCall = !0)
   },
   initialized: function (a) {
    a = a.sender;
    var b = a.jsVars;
    b.needsLoaderCall &&
     (delete b.needsLoaderCall, K.load.call(a))
   },
   beforeDataUpdate: p,
   beforeDispose: function (a) {
    var b = a.sender.jsVars;
    b.smartLabel && !b.smartLabel.disposed && b.smartLabel.dispose();
    p.apply(this, arguments)
   },
   beforeRender: function (a) {
    var b = a.sender.jsVars;
    delete b.drLoadAttempted;
    delete b.waitingModule;
    delete b.waitingModuleError;
    p.apply(this, arguments)
   },
   dataLoadRequested: function (a) {
    a = a.sender;
    var b = a.jsVars;
    delete b.loadError;
    a.ref && a.options.showDataLoadingMessage ? b.hcObj && !b.hasNativeMessage && b.hcObj.showLoading ?
     b.hcObj.showMessage(b.msgStore.XMLLoadingText) : a.ref.showChartMessage ? a.ref.showChartMessage("XMLLoadingText") : b.stallLoad = !0 : b.stallLoad = !0
   },
   dataLoadRequestCompleted: function (a) {
    delete a.sender.jsVars.stallLoad
   },
   dataLoadError: function (a) {
    var b = a.sender,
     c = b.jsVars;
    delete c.stallLoad;
    c.loadError = !0;
    b.ref && "function" === typeof b.ref.showChartMessage && b.ref.showChartMessage("LoadDataErrorText");
    b.__state.dataFetchDuringConstruction && delete b.__state.dataFetchDuringConstruction;
    p.apply(this, arguments)
   }
  },
  _call: function (a, b, c) {
   a.apply(c || m, b || [])
  }
 });
 d.extend(K.prototype, {
  getSWFHTML: function () {
   d.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~getSWFHTML()", "getSWFHTML() is not supported for JavaScript charts.")
  },
  addVariable: function () {
   d.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".');
   d.core.prototype.configure.apply(this, arguments)
  },
  getXML: function () {
   d.raiseWarning(this, "11171116291", "run", "JavaScriptRenderer~getXML()",
    'Use of deprecated "getXML()". Replace with "getXMLData()".');
   return this.getXMLData.apply(this, arguments)
  },
  setDataXML: function () {
   d.raiseWarning(this, "11171116292", "run", "JavaScriptRenderer~setDataXML()", 'Use of deprecated "setDataXML()". Replace with "setXMLData()".');
   return this.setXMLData.apply(this, arguments)
  },
  setDataURL: function () {
   d.raiseWarning(this, "11171116293", "run", "JavaScriptRenderer~setDataURL()", 'Use of deprecated "SetDataURL()". Replace with "setXMLUrl()".');
   return this.setXMLUrl.apply(this,
    arguments)
  },
  hasRendered: function () {
   return !(!this.jsVars.hcObj || !this.jsVars.hcObj.hasRendered)
  },
  setTransparent: function (a) {
   var b;
   if (b = this.jsVars) "boolean" !== typeof a && null !== a && (a = !0), b.transparent = null === a ? !1 : !0 === a ? !0 : !1
  }
 });
 d.extend(d.core, {
  _fallbackJSChartWhenNoFlash: function () {
   m.swfobject.hasFlashPlayerVersion(d.core.options.requiredFlashPlayerVersion) || d.renderer.setDefault("javascript")
  },
  _enableJSChartsForSelectedBrowsers: function (a) {
   void 0 !== a && null !== a && d.renderer.setDefault((new RegExp(a)).test(m.navigator.userAgent) ?
    "javascript" : "flash")
  },
  _doNotLoadExternalScript: function (b) {
   var c, f;
   for (c in b) f = c.toLowerCase(), a[f] && (v[f] = Boolean(b[c]))
  },
  _preloadJSChartModule: function () {
   throw "NotImplemented()";
  }
 });
 d.renderer.register("javascript", K);
 b || E ? d.renderer.setDefault("javascript") : m.swfobject && m.swfobject.hasFlashPlayerVersion && !m.swfobject.hasFlashPlayerVersion(d.core.options.requiredFlashPlayerVersion) && (d.raiseWarning(d.core, "1204111846", "run", "JSRenderer", "Switched to JavaScript as default rendering due to absence of required Flash Player."),
  d.renderer.setDefault("javascript"))
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-lib", function () {
 var d = this,
  m = d.window,
  z = m.document,
  q = m.navigator,
  E = Boolean(m.SVGAngle || z.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")),
  b = /msie/i.test(q.userAgent) && !m.opera,
  K = m.parseFloat,
  I = /\s+/g,
  c = /^#?/,
  s = /^rgba/i,
  a = /[#\s]/ig,
  v = /\{br\}/ig,
  O = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
  C = Math.abs,
  g = Math.pow,
  f = Math.round,
  l = g(2, -24),
  p = Object.prototype.toString,
  F = "ontouchstart" in z,
  q = F && !(q.maxTouchPoints ||
   q.msMaxTouchPoints),
  Q = "http://www.fusioncharts.com?BS=FCHSEvalMark&utm_source=FCS_trial&pver=" + m.escape(d.core.version),
  k = !/fusioncharts\.com$/i.test(m.location.hostname),
  B = Math,
  A = B.max,
  W = B.min,
  r = {
   pageX: 0,
   pageY: 0
  },
  oa = d.hcLib || (d.hcLib = {}),
  ga = function (a) {
   var b = a.data,
    c = b.chart,
    h = c.paper,
    f = a.state,
    n = T(H(a.originalEvent)),
    g = n.target || n.originalTarget || n.srcElement || n.relatedTarget || n.fromElement,
    d = c.elements.resizeBox,
    l = b.layerX = n.pageX - b.chartPosLeft,
    L = b.layerY = n.pageY - b.chartPosTop,
    k = l - b.ox,
    G = L - b.oy,
    p = b.bBox,
    s = b.ox,
    r = b.oy,
    ca = b.zoomX,
    aa = b.zoomY,
    p = b.canvasY,
    m = b.canvasX,
    v = b.canvasW,
    B = b.canvasH,
    F = b.canvasX2,
    ta = b.canvasY2,
    q = b.strokeWidth,
    k = b.attr;
   switch (f) {
   case "start":
    a = V(this);
    b.chartPosLeft = a.left;
    b.chartPosTop = a.top;
    l = n.pageX - b.chartPosLeft;
    L = n.pageY - b.chartPosTop;
    b.oy = L;
    b.ox = l;
    b.allowMove = !1;
    d || (d = c.elements.resizeBox = h.rect(c.layers.tracker).attr(k));
    l > m && l < F && L > p && L < ta && (b.allowMove = !0);
    g && g.ishot && (b.allowMove = !1);
    d.attr({
     x: 0,
     y: 0,
     width: 0,
     height: 0
    }).show();
    break;
   case "end":
    p = d.getBBox();
    c = {
     chart: c,
     selectionLeft: p.x,
     selectionTop: p.y,
     selectionHeight: p.height,
     selectionWidth: p.width,
     originalEvent: a.originalEvent
    };
    b.isDragged && (b.selectionEnd && b.selectionEnd(c), b.isDragged = 0);
    d.hide();
    delete b.oy;
    delete b.ox;
    break;
   default:
    if (!b.allowMove) break;
    k = l - b.ox;
    G = L - b.oy;
    s = b.ox;
    r = b.oy;
    b.isDragged || (c = {
     chart: c,
     selectionLeft: (ca ? W(s, s + k) : m) + .5 * q,
     selectionTop: (aa ? W(r, r + G) : p) + .5 * q,
     selectionHeight: 0,
     selectionWidth: 0,
     originalEvent: a.originalEvent
    }, b.selectionStart && b.selectionStart(c), b.isDragged = 1);
    k = -(s - W(s - (s - A(s + k, m)), F));
    G = -(r - W(r - (r - A(r + G, p)), ta));
    d.attr({
     x: (ca ? W(s, s + k) : m) + .5 * q,
     y: (aa ? W(r, r + G) : p) + .5 * q,
     width: ca ? C(k) : v,
     height: aa ? C(G) : B
    })
   }
  },
  $ = function (a) {
   var b = a.data;
   a = a.originalEvent;
   var c = a.target || a.originalTarget || a.srcElement || a.relatedTarget || a.fromElement,
    h = a.type,
    f = a.layerX,
    n = a.layerY;
   void 0 === f && (f = a.pageX - b.chartPosLeft, n = a.pageY - b.chartPosTop);
   "mousedown" === h && (c.ishot = f > b.canvasX && f < b.canvasX2 && n > b.canvasY && n < b.canvasY2);
   "mouseup" === h && setTimeout(function () {
    c.ishot = !1
   }, 1)
  },
  B = function () {
   var a =
    "innerWidth",
    b = "innerHeight",
    c = z.documentElement || z.body,
    h = c;
   "innerWidth" in m ? h = m : (a = "clientWidth", b = "clientHeight");
   return function () {
    return {
     width: h[a],
     height: h[b],
     scrollTop: c.scrollTop,
     scrollLeft: c.scrollLeft
    }
   }
  }(),
  V = function (a, b) {
   var c = {
    left: a.offsetLeft || 0,
    top: a.offsetTop || 0
   };
   for (a = a.offsetParent; a;) c.left += a.offsetLeft || 0, c.top += a.offsetTop || 0, a === z.body || a === z.documentElement || b || (c.left -= a.scrollLeft, c.top -= a.scrollTop), a = a.offsetParent;
   return c
  },
  ta = function (a) {
   return a && a.replace(/\$/g, "$$$$")
  },
  za = function (a, b) {
   return a || !1 === a || 0 === a ? a : b
  },
  Aa = function () {
   var a, b, c;
   b = 0;
   for (c = arguments.length; b < c; b += 1)
    if ((a = arguments[b]) || !1 === a || 0 === a) return a;
   return ""
  },
  Z = function () {
   var a, b, c;
   b = 0;
   for (c = arguments.length; b < c; b += 1)
    if ((a = arguments[b]) || !1 === a || 0 === a) return a
  },
  U = function (a, b, c, h) {
   return oa.dem.listen(a, b, c, h)
  },
  na = function (a, b, c) {
   return oa.dem.unlisten(a, b, c)
  },
  H = function (a) {
   a = a.sourceEvent || a.originalEvent || a;
   return F && a && a.touches && a.touches[0] || a || r
  },
  T = function () {
   var a;
   return function (b) {
    void 0 ===
     b.pageX && (b.pageX = b.clientX + (a || (a = m.document.body || m.document.documentElement)).scrollLeft, b.pageY = b.clientY + a.scrollTop);
    return b
   }
  }(),
  fa = function (a, b) {
   b = T(H(b));
   var c = b.pageX,
    h = b.pageY,
    f = V(a);
   return {
    chartX: c - f.left,
    chartY: h - f.top,
    pageX: c,
    pageY: h
   }
  },
  n = function (a) {
   return a && a.replace(/^#?([a-f0-9]+)/ig, "#$1") || "none"
  },
  L = function () {
   var a, b, c;
   b = 0;
   for (c = arguments.length; b < c; b += 1)
    if (((a = arguments[b]) || !1 === a || 0 === a) && !isNaN(a = Number(a))) return a
  },
  ca = function (a, b) {
   a = a || !1 === a || 0 === a ? Number(a) : NaN;
   return isNaN(a) ?
    null : b ? C(a) : a
  },
  aa = function (a) {
   return "string" === typeof a ? a.replace(v, "<br />") : ""
  },
  sa = function (a, b) {
   for (var c = b.length, h = -1; c--;)
    if (a === b[c]) {
     h = c;
     break
    }
   return h
  },
  Y = function () {
   if (Array.isArray) return Array.isArray;
   var a = Object.prototype.toString,
    b = a.call([]);
   return function (c) {
    return a.call(c) === b
   }
  }(),
  Ea = function (a, b, c, h, f) {
   var n, g, d, l;
   f ? (h.push(a), f.push(b)) : (h = [a], f = [b]);
   if (b instanceof Array)
    for (n = 0; n < b.length; n += 1) {
     try {
      g = a[n], d = b[n]
     }
     catch (L) {
      continue
     }
     if ("object" !== typeof d) c && void 0 === d || (a[n] =
      d);
     else {
      if (null === g || "object" !== typeof g) g = a[n] = d instanceof Array ? [] : {};
      l = sa(d, f); - 1 !== l ? g = a[n] = h[l] : Ea(g, d, c, h, f)
     }
    }
   else
    for (n in b) {
     try {
      g = a[n], d = b[n]
     }
     catch (k) {
      continue
     }
     if (null !== d && "object" === typeof d)
      if (l = p.call(d), "[object Object]" === l) {
       if (null === g || "object" !== typeof g) g = a[n] = {};
       l = sa(d, f); - 1 !== l ? g = a[n] = h[l] : Ea(g, d, c, h, f)
      }
      else "[object Array]" === l ? (null !== g && g instanceof Array || (g = a[n] = []), l = sa(d, f), -1 !== l ? g = a[n] = h[l] : Ea(g, d, c, h, f)) : a[n] = d;
     else a[n] = d
    }
   return a
  },
  la = function (a, b, c) {
   if ("object" !==
    typeof a && "object" !== typeof b) return null;
   if ("object" !== typeof b || null === b) return a;
   "object" !== typeof a && (a = b instanceof Array ? [] : {});
   Ea(a, b, c);
   return a
  },
  ya = function (a, b) {
   var c;
   if (b instanceof Array)
    for (c = b.length - 1; 0 <= c; --c) "object" !== typeof b[c] ? !0 === b[c] && a && a.splice && a.splice(c, 1) : p.call(b[c]) === p.call(a[c]) && ya(a[c], b[c]);
   else
    for (c in b) "object" !== typeof b[c] ? !0 === b[c] && a && a.splice && a.splice(c, 1) : p.call(b[c]) === p.call(a[c]) && ya(a[c], b[c]);
   return a
  },
  Ia = function () {
   var a = /^@window_/g;
   return function (b,
    c) {
    var h = b.replace(/\[[\'\"]/g, ".").replace(/[\'\"]\]/g, "").replace(/\[/g, ".@window_").replace(/\]/g, "").split("."),
     f = m,
     n, g;
    g = "";
    var d, l, L;
    l = h.length;
    for (L = 0; L < l; L += 1) {
     d = h[L];
     n = f;
     if (d.match(a)) g = m[d.replace(a, "")], f = f[g];
     else {
      if (void 0 === f || null === f) throw (g || d).replace(a, "") + " is not defined";
      f = f[d]
     }
     g = d
    }!f || "function" !== typeof f.call && f !== m.alert ? setTimeout(function () {
     throw d.replace(a, "") + "() is not a function";
    }, 0) : f === m.alert ? f(c) : f.call(n, c)
   }
  }(),
  ma = function () {
   var a = "FusionChartslinkEval" + parseInt(+new Date,
    10);
   return function (b) {
    try {
     m[a] = new Function(b), eval('window["' + a + '"]();')
    }
    catch (c) {
     setTimeout(function () {
      throw c;
     }, 0)
    }
    E ? delete m[a] : m[a] = null
   }
  }(),
  Ma = function (a, b) {
   a = Number(a);
   a = isNaN(a) ? 100 : a;
   void 0 !== b && (a = a * b / 100);
   return a % 101
  },
  pa = function (a, b, c) {
   a = a.split(",");
   var h;
   void 0 !== c && (c = L(c.split(",")[0]));
   a[0] = Ma(a[0], c);
   for (h = 1; h < b; h += 1) a[h] = a[0] * Ma(a[h], c) / 100;
   return a.join(",")
  },
  qa = function (b, c, h) {
   var f = 0,
    n = 0,
    g = 0;
   h && h.match(s) && (h = h.split(","), f = h[0].slice(h[0].indexOf("(") + 1), n = h[1], g = h[2], c ||
    0 === c || (c = parseInt(100 * h[3].slice(0, h[3].indexOf(")")), 10)));
   if (b)
    if (b.match(s)) h = b.split(","), f = h[0].slice(h[0].indexOf("(") + 1), n = h[1], g = h[2];
    else {
     b = b.replace(a, "").split(",")[0];
     switch (b.length) {
     case 3:
      b = b.charAt(0) + b.charAt(0) + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2);
      break;
     case 6:
      break;
     default:
      b = (b + "FFFFFF").slice(0, 6)
     }
     f = parseInt(b.slice(0, 2), 16);
     n = parseInt(b.slice(2, 4), 16);
     g = parseInt(b.slice(4, 6), 16)
    }
   c || 0 === c || (c = 100);
   "string" === typeof c && (c = c.split(",")[0]);
   c = parseInt(c, 10) / 100;
   return "rgba(" +
    f + "," + n + "," + g + "," + c + ")"
  },
  La = function () {
   var a = {};
   return function (b) {
    var c = (b = b || this) && b.FCcolor || b,
     h = c.color,
     f = c.ratio,
     n = c.angle,
     g = c.alpha,
     d = c.r,
     l = c.cx,
     L = c.cy,
     k = c.fx,
     G = c.fy,
     p = c.gradientUnits,
     s = c.x1,
     A = c.y1,
     r = c.x2,
     H = c.y2,
     ca = 1,
     aa, m, v, B;
    if ("string" === typeof b) return a[B = "~" + b] || (a[B] = b.replace(/^#?([a-f0-9]{3,6})/ig, "#$1"));
    h = h || "";
    if (!h) return aa;
    B = [h, g, f, n, d, l, L, p, k, G, s, r, A, H].join("_").replace(/[\(\)\s,\xb0#]/g, "_");
    if (a[B]) return a[B];
    f = f && (f + "").split(",") || [];
    g = (g || 0 === g) && (g + "").split(",") || [];
    if (h = h.split(","))
     if (aa = "", 1 === h.length) v = h[0].replace(/^#?([a-f0-9]{3,6})/ig, "$1"), aa = g.length ? "rgba(" + Na(v).join(",") + "," + .01 * K(g[0]) + ")" : v.replace(/^#?([a-f0-9]{3,6})/ig, "#$1");
     else {
      b = 0;
      for (m = h.length; b < m; b++) v = h[b].replace(/^#?([a-f0-9]{3,6})/ig, "$1"), isNaN(f[b]) || (f[b] = K(f[b]), v += ":" + f[b], isNaN(f[b + 1]) || (f[b + 1] = K(f[b + 1]) + f[b])), isNaN(g[b]) || "" === g[b] || (ca = .01 * g[b]), h[b] = "rgba(" + Na(v).join(",") + "," + ca + ")", isNaN(f[b]) || (h[b] = h[b] + ":" + f[b]);
      aa += h.join("-");
      if (void 0 !== d || void 0 !== k || void 0 !== l ||
       c.radialGradient) aa = "xr(" + [k, G, d, l, L, p].join() + ")" + aa;
      else {
       aa = "-" + aa;
       if (void 0 !== s || void 0 !== A || void 0 !== r || void 0 !== H) aa = "(" + [s, A, r, H, p].join() + ")" + aa;
       void 0 === n && (n = 0);
       aa = 360 - K(n) % 360 + aa
      }
     }
    return a[B] = aa
   }
  }(),
  Ya = function () {
   return function () {
    return ""
   }
  }(),
  ib = function (b) {
   return b.replace(a, "").replace(c, "#")
  },
  Ja = function (b, c) {
   c = (0 > c || 100 < c ? 100 : c) / 100;
   b = b.replace(a, "");
   var h = parseInt(b, 16),
    f = Math.floor(h / 65536),
    n = Math.floor((h - 65536 * f) / 256);
   return ("000000" + (f * c << 16 | n * c << 8 | (h - 65536 * f - 256 * n) * c).toString(16)).slice(-6)
  },
  Ta = function (b, c) {
   c = (0 > c || 100 < c ? 100 : c) / 100;
   b = b.replace(a, "");
   var h = parseInt(b, 16),
    f = Math.floor(h / 65536),
    n = Math.floor((h - 65536 * f) / 256);
   return ("000000" + (256 - (256 - f) * c << 16 | 256 - (256 - n) * c << 8 | 256 - (256 - (h - 65536 * f - 256 * n)) * c).toString(16)).slice(-6)
  },
  Na = function (a) {
   a = parseInt(a, 16);
   var b = Math.floor(a / 65536),
    c = Math.floor((a - 65536 * b) / 256);
   return [b, c, Math.floor(a - 65536 * b - 256 * c)]
  },
  sb = function (a, b) {
   if ("object" !== typeof a) return "";
   if (a.fontSize || a["font-size"]) !a.fontSize && a["font-size"] && (a.fontSize = a["font-size"],
    delete a["font-size"]), a.lineHeight = (parseFloat(a.fontSize) || b || 10) * oa.lineHeightFactor + "px", delete a["line-height"];
   !a.lineHeight && a["line-height"] && (a.lineHeight = a["line-height"], delete a["line-height"]);
   return a.lineHeight
  },
  Wa = function (a, b, c, h, f) {
   var n = Aa(a.labelbordercolor, b.bordercolor, c.labelbordercolor, ""),
    g = Z(a.labelbgcolor, b.bgcolor, c.labelbgcolor),
    d = L(a.labelborderthickness, b.borderthickness, c.labelborderthickness, 1);
   f = L(c.usedataplotcolorforlabels, 0) ? f || h.color : h.color;
   n = n ? qa(n, L(a.labelborderalpha,
    b.borderalpha, c.labelborderalpha, a.labelalpha, b.alpha, c.labelalpha, 100)) : "";
   a = {
    fontFamily: Z(a.labelfont, b.font, c.labelfont, h.fontFamily),
    fontSize: Z(a.labelfontsize, b.fontsize, c.labelfontsize, parseInt(h.fontSize, 10)) + "px",
    color: qa(Z(a.labelfontcolor, b.fontcolor, c.labelfontcolor, f), L(a.labelfontalpha, b.fontalpha, c.labelfontalpha, a.labelalpha, b.alpha, c.labelalpha, 100)),
    fontWeight: L(a.labelfontbold, b.fontbold, c.labelfontbold) ? "bold" : "normal",
    fontStyle: L(a.labelfontitalic, b.fontitalic, c.labelfontitalic) ?
     "italic" : "normal",
    border: n || g ? d + "px solid" : "",
    borderColor: n,
    borderThickness: d,
    borderPadding: L(a.labelborderpadding, b.borderpadding, c.labelborderpadding, 2),
    borderRadius: L(a.labelborderradius, b.borderradius, c.labelborderradius, 0),
    backgroundColor: g ? qa(g, L(a.labelbgalpha, b.bgalpha, c.labelbgalpha, a.labelalpha, b.alpha, c.labelalpha, 100)) : "",
    borderDash: L(a.labelborderdashed, b.borderdashed, c.labelborderdashed, 0) ? yb(L(a.labelborderdashlen, b.borderdashlen, c.labelborderdashlen, 4), L(a.labelborderdashgap, b.borderdashgap,
     c.labelborderdashgap, 2), d) : "none"
   };
   a.lineHeight = sb(a);
   return a
  },
  Ga = function () {
   var a = {
     top: {
      align: "center",
      verticalAlign: "top",
      textAlign: "center"
     },
     right: {
      align: "right",
      verticalAlign: "middle",
      textAlign: "left"
     },
     bottom: {
      align: "center",
      verticalAlign: "bottom",
      textAlign: "center"
     },
     left: {
      align: "left",
      verticalAlign: "middle",
      textAlign: "right"
     }
    },
    b = /([^\,^\s]+)\)$/g,
    c = function (a, b) {
     var c;
     /^(bar|bar3d)$/.test(a) && (this.isBar = !0, this.yPos = "bottom", this.yOppPos = "top", this.xPos = "left", this.xOppPos = "right");
     c = parseInt(b.labelstep,
      10);
     this.labelStep = 1 < c ? c : 1;
     this.showLabel = L(b.showlabels, b.shownames, 1);
     this.is3D = /3d$/.test(a)
    };
   c.prototype = {
    isBar: !1,
    yPos: "left",
    yOppPos: "right",
    xPos: "bottom",
    xOppPos: "top",
    addAxisGridLine: function (c, h, f, n, g, d, l, L) {
     var N = "" === f ? !1 : !0,
      k = 0 < n || 0 < d.match(b)[1] ? !0 : !1,
      G;
     if (N || k) k || (d = "rgba(0,0,0,0)", n = .1), G = {
      isGrid: !0,
      width: n,
      dashStyle: g,
      color: d,
      value: h,
      zIndex: void 0 === l ? 2 : l
     }, N && (h = c.opposite ? L ? this.xOppPos : this.yOppPos : L ? this.xPos : this.yPos, h = a[h], G.label = {
      text: f,
      style: c.labels.style,
      textAlign: h.textAlign,
      align: h.align,
      verticalAlign: h.verticalAlign,
      rotation: 0,
      x: 0,
      y: 0
     }), c.plotLines.push(G);
     return G
    },
    addAxisAltGrid: function (a, b) {
     if (!this.is3D) {
      var c = L(a._lastValue, a.min),
       u = Z(a._altGrid, !1);
      u && a.plotBands.push({
       isGrid: !0,
       color: a.alternateGridColor,
       to: b,
       from: c,
       zIndex: 1
      });
      a._lastValue = b;
      a._altGrid = !u
     }
    },
    addXaxisCat: function (b, c, h, f, n, g, d, D) {
     var l = a[b.opposite ? this.xOppPos : this.xPos];
     c = {
      isGrid: !0,
      isDataLabel: !0,
      width: .1,
      color: "rgba(0,0,0,0)",
      value: c,
      label: {
       text: f,
       link: Z(n.labellink, g.link, d.labellink),
       style: Wa(n,
        g, d, b.labels.style, D),
       textAlign: l.textAlign,
       align: l.align,
       verticalAlign: l.verticalAlign,
       rotation: 0,
       x: 0,
       y: 0
      }
     };
     0 !== h % this.labelStep && (c.stepped = !0, c.label.style = b.steppedLabels.style);
     b.plotLines.push(c)
    },
    addVline: function (a, b, c, u) {
     u = u._FCconf;
     var h = u.isBar,
      f = u.divlineStyle,
      n = aa(b.label),
      g = Boolean(L(b.showlabelborder, u.showVLineLabelBorder, 1)),
      d = Boolean(L(b.showlabelbackground, 1)),
      D = Z(b.labelhalign, h ? "left" : "center"),
      l = Z(b.labelvalign, h ? "middle" : "bottom").toLowerCase(),
      N = L(b.labelposition, 0),
      k = L(b.lineposition,
       .5),
      G = L(b.showvlines, u.showVLines, 1),
      p = L(b.alpha, u.vLineAlpha, 80),
      s = Z(b.color, u.vLineColor).replace(/^#?/, "#"),
      A = d ? Z(b.labelbgcolor, u.vLineLabelBgColor, "333333").replace(/^#?/, "#") : "",
      r = Z(b.labelcolor, u.vLineLabelColor, b.color, u.vLineColor).replace(/^#?/, "#"),
      H = L(b.thickness, u.vLineThickness, 1),
      ca = .5 * H,
      m = Boolean(Number(Z(b.dashed, 0))),
      v = L(b.dashlen, 5),
      B = L(b.dashgap, 2),
      F = u.smartLabel,
      T = parseInt(f.fontSize, 10) + 2,
      ta = 0,
      C = L(b.rotatelabel, u.rotateVLineLabels) ? 270 : 0,
      k = 0 > k || 1 < k ? .5 : k,
      N = 0 > N || 1 < N ? 0 : N;
     F.setStyle(f);
     F = F.getOriSize(n);
     s = qa(s, G ? p : "0");
     if (h) {
      switch (l) {
      case "top":
       T -= F.height + ca + 2;
       break;
      case "middle":
       T -= .5 * F.height + 1;
       break;
      default:
       T += ca
      }
      b.labelhalign || (ta -= F.width * N)
     }
     else {
      switch (l) {
      case "top":
       T = .5 * -F.height + 1;
       break;
      case "middle":
       T = 0;
       break;
      default:
       T = .5 * F.height
      }
      switch (D) {
      case "left":
       ta += H;
       break;
      case "right":
       ta -= H + 1
      }
     }
     a.plotLines.push({
      isVline: !0,
      color: s,
      width: H,
      value: c - 1 + k,
      zIndex: L(b.showontop, u.showVLinesOnTop) ? 5 : 3,
      dashStyle: m ? yb(v, B, H) : "none",
      label: {
       text: n,
       align: h ? "left" : "center",
       offsetScale: N,
       rotation: C,
       y: T,
       x: ta,
       textAlign: D,
       backgroundColor: A,
       borderWidth: G && g ? 1 : 0,
       borderType: G && g ? "solid" : "",
       borderColor: G && g ? r : "",
       backgroundOpacity: G && d ? Z(b.labelbgalpha, u.vLineLabelBgAlpha) / 100 : 0,
       style: {
        color: G ? r : s,
        fontSize: f.fontSize,
        fontFamily: f.fontFamily,
        lineHeight: f.lineHeight,
        backgroundColor: A
       }
      }
     })
    }
   };
   return c.prototype.constructor = c
  }(),
  Sb = function () {
   var a = function (a, c, u, h, f) {
     a = Math.abs(c - a);
     c = a / (u + 1);
     b(a, u, h) || (f && Number(c) / Number(h) < (1 < h ? 2 : .5) && (h /= 10), c = (Math.floor(c / h) + 1) * h, a = c * (u + 1));
     return a
    },
    b = function (a,
     b, u) {
     return c(a / (b + 1)) > c(u) ? !1 : !0
    },
    c = function (a) {
     a = Math.abs(a);
     a = String(a);
     var b = 0,
      c = a.indexOf("."); - 1 != c && (b = a.length - c - 1);
     return b
    };
   return function (c, h, f, n, g, d, N, L) {
    var k, G, p, s, A, r, H, aa = 0;
    c = !0 === isNaN(c) || void 0 === c ? .1 : c;
    h = !0 === isNaN(h) || void 0 === h ? 0 : h;
    c === h && 0 === c && (c = .1);
    g = void 0 === typeof g ? !0 : g;
    d = void 0 === typeof d ? !0 : d;
    k = Math.floor(Math.log(Math.abs(c)) / Math.LN10);
    G = Math.floor(Math.log(Math.abs(h)) / Math.LN10);
    G = Math.max(G, k);
    k = Math.pow(10, G);
    2 > Math.abs(c) / k && 2 > Math.abs(h) / k && (G--, k = Math.pow(10,
     G));
    G = Math.floor(Math.log(c - h) / Math.LN10);
    p = Math.pow(10, G);
    0 < c - h && 10 <= k / p && (k = p);
    G = (Math.floor(c / k) + 1) * k;
    0 > h ? p = -1 * (Math.floor(Math.abs(h / k)) + 1) * k : d ? p = 0 : (p = Math.floor(Math.abs(h / k) - 1) * k, p = 0 > p ? 0 : p);
    g && 0 >= c && (G = 0);
    g = f || 0 === f ? !0 : !1;
    d = n || 0 === n ? !0 : !1;
    c = !1 === g || !0 === g && Number(f) < c && c - Number(f) > l ? G : Number(f);
    h = !1 === d || !0 === d && Number(n) > h && Number(n) - h > l ? p : Number(n);
    n = Math.abs(c - h);
    if (!1 === d && !1 === g && L)
     if (0 < c && 0 > h)
      for (f = !1, g = 10 < k ? k / 10 : k, L = a(h, c, N, g, !1), d = L - (N + 1) * g; !1 === f;) {
       if (d += (N + 1) * g, b(d, N, g))
        if (L = d - n, G =
         d / (N + 1), s = Math.min(Math.abs(h), c), p = s == Math.abs(h) ? -1 : 1, 0 === N) f = !0;
        else
         for (r = 1; r <= Math.floor((N + 1) / 2); r++) A = G * r, !(A - s > L) && A > s && (H = d - A, H / G == Math.floor(H / G) && A / G == Math.floor(A / G) && (n = d, c = -1 == p ? H : A, h = -1 == p ? -A : -H, f = !0))
      }
     else f = a(h, c, N, k, !0), L = f - n, n = f, 0 < c ? c += L : h -= L;
    else L && (f = function (a, c, u) {
     for (var h = 0, f = 1, n;;) {
      n = a + h * f;
      n = 0 === n ? 1 : n;
      if (b(c, n, u)) break;
      h = -1 == f || h > a ? ++h : h;
      if (25 < h) {
       n = 0;
       break
      }
      f = h <= a ? -1 * f : 1
     }
     return n
    }, 0 < N && (L = f(N, n, k), 0 === L && (L = f(N, n + 1, k), aa = 1), N = L));
    return {
     Max: c,
     Min: h,
     Range: n,
     interval: k,
     divGap: (c -
      h + aa) / (N + 1)
    }
   }
  }(),
  Qb = function () {
   var a = function (a, b, c) {
    var u = c.jsVars && c.jsVars.smartLabel,
     h = a.offsetWidth,
     f = a.offsetHeight,
     n = this.chart;
    a = this.title;
    var g = c._chartMessageImageStyle,
     d = !1,
     l;
    void 0 !== b && (b = b.replace(/^\s+/, "").replace(/\s+$/, ""), /^i\s*[\-]\s*/i.test(b) ? (d = !0, l = b.replace(/^i\s*[\-]\s*/i, "")) : l = b.replace(/^\\/, ""));
    a.y = f / 2;
    a.x = h / 2;
    n.bgSWF = a.text = void 0;
    b = l;
    d ? (n.bgSWF = b, n.bgImageHAlign = g.imageHAlign, n.bgImageVAlign = g.imageVAlign, n.bgImageScale = g.imageScale, n.bgSWFAlpha = g.imageAlpha) : void 0 !==
     b && (u ? (sb(a.style), u.setStyle(a.style), u = u.getSmartText(aa(b), h, f), a.text = u.text) : a.text = aa(b), a.verticalAlign = "middle");
    a.style = c._chartMessageStyle;
    delete c._chartMessageImageStyle;
    delete c._chartMessageStyle
   };
   a.prototype = {
    chart: {
     events: {},
     margin: [0, 0, 0, 0],
     backgroundColor: {
      FCcolor: {
       alpha: 0
      }
     }
    },
    credits: {
     href: Q,
     text: "University of Louisiana at Monroe",
     enabled: k,
    },
    legend: {
     enabled: !1
    },
    title: {
     text: "",
     style: {
      fontFamily: "Verdana,sans",
      fontSize: "10px",
      color: "#666666"
     }
    },
    plotOptions: {
     series: {}
    },
    series: [{}],
    exporting: {
     enabled: !1
    },
    nativeMessage: !0
   };
   return a.prototype.constructor = a
  }(),
  Fb = {
   "true": {
    "true": {
     "true": "center",
     "false": "center"
    },
    "false": {
     "true": "center",
     "false": "center"
    }
   },
   "false": {
    "true": {
     "true": "right",
     "false": "left"
    },
    "false": {
     "true": "left",
     "false": "right"
    }
   }
  },
  jb = function () {
   return function (a, b, h, f, n, g, d) {
    var l, k = h.trendStyle,
     p, s, A, r, H, ca, m, v, B, F, T, ta, C, q = g ? "xAxis" : "dataLabels";
    if (g ? h.showVLines : h.showTrendlines)
     for (l = 0, s = a.length; l < s; l += 1)
      if ((C = a[l]) && C.line)
       for (p = 0, A = C.line.length; p < A; p += 1) r = C.line[p], F = h.numberFormatter.getCleanValue(Z(r.startvalue,
        r.value, 0)), T = h.numberFormatter.getCleanValue(Z(r.endvalue, Z(r.startvalue, r.value, 0))), g ? v = b : f && r.parentyaxis && /^s$/i.test(r.parentyaxis) ? (v = b[1], ta = 1) : v = b[0], ca = v.max, m = v.min, H = !1, ca >= F && ca >= T && m <= F && m <= T && (f && r.parentyaxis && /^s$/i.test(r.parentyaxis) ? H = "1" !== Z(r.valueonleft, h.trendlineValuesOnOpp) : f || (H = "1" === Z(r.valueonright, h.trendlineValuesOnOpp)), ca = Boolean(L(r.istrendzone, g ? 1 : 0)), (m = (g ? h.showVLineLabels : h.showTrendlineLabels) ? aa(Z(r.displayvalue, h.numberFormatter[q](H ? T : F, ta))) : "") ? (B = F < T,
        H = {
         text: m,
         textAlign: n ? "center" : H ? "left" : "right",
         align: n ? Fb[ca][!d][B] : H ? "right" : "left",
         verticalAlign: n ? "bottom" : "middle",
         rotation: 0,
         x: 0,
         y: 0,
         style: k
        }, m = Z(r.color, h.trendlineColor), r.alwaysVisible = ca, m && (H.style = la({}, k), H.style.color = m.replace(c, "#"))) : H = void 0, m = za(aa(Z(r.tooltext, C.tooltext, h.trendLineToolText))), m = G(m, [7, 15, 16, 17, 18, 19], {
        startValue: F,
        startDataValue: h.numberFormatter[q](F, ta),
        endValue: T,
        endDataValue: h.numberFormatter[q](T, ta),
        axisName: v.title && v.title.text
       }, r), B = L(r.thickness, h.trendlineThickness,
        1), ca ? v.plotBands.push({
        isTrend: !0,
        color: qa(Z(r.color, h.trendlineColor), Z(r.alpha, h.trendlineAlpha, 40)),
        from: F,
        to: T,
        label: H,
        zIndex: h.is3d || "1" !== Z(r.showontop, h.showTrendlinesOnTop) ? 3 : 5,
        tooltext: m,
        alwaysVisible: r.alwaysVisible
       }) : v.plotLines.push({
        isTrend: !0,
        color: qa(Z(r.color, h.trendlineColor, h.trendlineColor), Z(r.alpha, h.trendlineAlpha, 99)),
        value: F,
        to: T,
        width: B,
        dashStyle: "1" == Z(r.dashed, h.trendlinesAreDashed) ? yb(L(r.dashlen, h.trendlinesDashLen), L(r.dashgap, h.trendlinesDashGap), B) : "none",
        label: H,
        zIndex: h.is3d || "1" !== Z(r.showontop, h.showTrendlinesOnTop) ? 3 : 5,
        tooltext: m
       }))
   }
  }(),
  yb = function (a, b, c, h) {
   return h || void 0 === h ? [a, b] : "none"
  },
  kb = function () {},
  h = function (a, b, c) {
   var f, n = h[a];
   n || (n = function () {}, n.prototype = c instanceof kb ? c : new kb, n.prototype.constructor = n, n = h[a] = new n);
   c && (n.base = c);
   n.name = a;
   for (f in b) switch (typeof b[f]) {
   case "object":
    if (b[f] instanceof kb) {
     n[f] = b[f][f];
     break
    }
   default:
    n[f] = b[f];
    break;
   case "undefined":
    delete n[f]
   }
   return this instanceof h ? (a = function () {}, a.prototype = n, a.prototype.constructor =
    a, new a) : n
  },
  G = function () {
   var a = [{
      regex: /((^|[^\\])((\\)\\)*\$cleanvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cleanvalue))/ig,
      argIndex: 2,
      argKey: "cleanvalue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$datavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datavalue))/ig,
      argIndex: 2,
      argKey: "formattedValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$value)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$value))/ig,
      argIndex: 3,
      argKey: "value"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$label)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$label))/ig,
      argIndex: 2,
      argKey: "label"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$seriesname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$seriesname))/ig,
      argIndex: 5,
      argKey: "seriesname"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$yaxisname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yaxisname))/ig,
      argIndex: 2,
      argKey: "yaxisName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$xaxisname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxisname))/ig,
      argIndex: 2,
      argKey: "xaxisName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$displayvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$displayvalue))/ig,
      argIndex: 3,
      argKey: "displayvalue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$xdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xdatavalue))/ig,
      argIndex: 2,
      argKey: "xDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$ydatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$ydatavalue))/ig,
      argIndex: 2,
      argKey: "yDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$xvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xvalue))/ig,
      argIndex: 3,
      argKey: "x"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$yvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yvalue))/ig,
      argIndex: 3,
      argKey: "y"
     },
     {
      regex: /((^|[^\\])((\\)\\)*\$zvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zvalue))/ig,
      argIndex: 3,
      argKey: "z"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$name)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$name))/ig,
      argIndex: 3,
      argKey: "name"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$percentValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentValue))/ig,
      argIndex: 2,
      argKey: "percentValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$startValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startValue))/ig,
      argIndex: 2,
      argKey: "startValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$startDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startDataValue))/ig,
      argIndex: 2,
      argKey: "startDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$endValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endValue))/ig,
      argIndex: 2,
      argKey: "endValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$endDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endDataValue))/ig,
      argIndex: 2,
      argKey: "endDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$axisName)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$axisName))/ig,
      argIndex: 2,
      argKey: "axisName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$cumulativevalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativevalue))/ig,
      argIndex: 2,
      argKey: "cumulativeValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$cumulativedatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativedatavalue))/ig,
      argIndex: 2,
      argKey: "cumulativeDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$cumulativePercentValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativePercentValue))/ig,
      argIndex: 2,
      argKey: "cumulativePercentValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$cumulativepercentdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativepercentdatavalue))/ig,
      argIndex: 2,
      argKey: "cumulativePercentDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$sum)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sum))/ig,
      argIndex: 2,
      argKey: "sum"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedsum)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsum))/ig,
      argIndex: 2,
      argKey: "unformattedSum"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$targetvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetvalue))/ig,
      argIndex: 2,
      argKey: "targetValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$targetdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetdatavalue))/ig,
      argIndex: 2,
      argKey: "targetDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$processname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$processname))/ig,
      argIndex: 2,
      argKey: "processName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$start)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$start))/ig,
      argIndex: 2,
      argKey: "start"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$end)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$end))/ig,
      argIndex: 2,
      argKey: "end"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$percentcomplete)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentcomplete))/ig,
      argIndex: 2,
      argKey: "percentComplete"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$taskpercentcomplete)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskpercentcomplete))/ig,
      argIndex: 2,
      argKey: "taskPercentComplete"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$taskstartdate)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskstartdate))/ig,
      argIndex: 2,
      argKey: "taskStartDate"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$taskenddate)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskenddate))/ig,
      argIndex: 2,
      argKey: "taskEndDate"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tasklabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tasklabel))/ig,
      argIndex: 2,
      argKey: "taskLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$date)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$date))/ig,
      argIndex: 2,
      argKey: "date"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$percentofprevvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentofprevvalue))/ig,
      argIndex: 2,
      argKey: "percentOfPrevValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$sname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sname))/ig,
      argIndex: 2,
      argKey: "sName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$lname)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lname))/ig,
      argIndex: 2,
      argKey: "lName"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromid)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromid))/ig,
      argIndex: 2,
      argKey: "fromId"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
      argIndex: 2,
      argKey: "fromLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toid)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toid))/ig,
      argIndex: 2,
      argKey: "toId"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
      argIndex: 2,
      argKey: "toLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromxvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxvalue))/ig,
      argIndex: 2,
      argKey: "fromXValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromyvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromyvalue))/ig,
      argIndex: 2,
      argKey: "fromYValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromxdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxdatavalue))/ig,
      argIndex: 2,
      argKey: "fromXDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromydatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromydatavalue))/ig,
      argIndex: 2,
      argKey: "fromYDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
      argIndex: 2,
      argKey: "fromLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toxvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxvalue))/ig,
      argIndex: 2,
      argKey: "toXValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toyvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toyvalue))/ig,
      argIndex: 2,
      argKey: "toYValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toxdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxdatavalue))/ig,
      argIndex: 2,
      argKey: "toXDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toydatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toydatavalue))/ig,
      argIndex: 2,
      argKey: "toYDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
      argIndex: 2,
      argKey: "toLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$openvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$openvalue))/ig,
      argIndex: 2,
      argKey: "openValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$closevalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closevalue))/ig,
      argIndex: 2,
      argKey: "closeValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$highvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highvalue))/ig,
      argIndex: 2,
      argKey: "highValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$lowvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowvalue))/ig,
      argIndex: 2,
      argKey: "lowValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$opendatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$opendatavalue))/ig,
      argIndex: 2,
      argKey: "openDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$closedatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closedatavalue))/ig,
      argIndex: 2,
      argKey: "closeDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$highdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highdatavalue))/ig,
      argIndex: 2,
      argKey: "highDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$lowdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowdatavalue))/ig,
      argIndex: 2,
      argKey: "lowDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$maxvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxvalue))/ig,
      argIndex: 2,
      argKey: "maxValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$maxdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxdatavalue))/ig,
      argIndex: 2,
      argKey: "maxDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$minvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$minvalue))/ig,
      argIndex: 2,
      argKey: "minValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$mindatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mindatavalue))/ig,
      argIndex: 2,
      argKey: "minDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$q1)/ig,
      argIndex: 2,
      argKey: "Q1"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedQ1)/ig,
      argIndex: 2,
      argKey: "unformattedQ1"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$q3)/ig,
      argIndex: 2,
      argKey: "Q3"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedQ3)/ig,
      argIndex: 2,
      argKey: "unformattedQ3"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$median)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$median))/ig,
      argIndex: 2,
      argKey: "median"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedMedian)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMedian))/ig,
      argIndex: 2,
      argKey: "unformattedMedian"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$SD)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$SD))/ig,
      argIndex: 2,
      argKey: "SD"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedsd)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsd))/ig,
      argIndex: 2,
      argKey: "unformattedsd"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$QD)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$QD))/ig,
      argIndex: 2,
      argKey: "QD"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedQD)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedQD))/ig,
      argIndex: 2,
      argKey: "unformattedQD"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$MD)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$MD))/ig,
      argIndex: 2,
      argKey: "MD"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedMD)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMD))/ig,
      argIndex: 2,
      argKey: "unformattedMD"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$mean)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mean))/ig,
      argIndex: 2,
      argKey: "mean"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
      argIndex: 2,
      argKey: "unformattedMean"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
      argIndex: 2,
      argKey: "unformattedMean"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$volumeValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeValue))/ig,
      argIndex: 2,
      argKey: "volumeValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$volumeDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeDataValue))/ig,
      argIndex: 2,
      argKey: "volumeDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromXValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXValue))/ig,
      argIndex: 2,
      argKey: "fromXValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromYValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYValue))/ig,
      argIndex: 2,
      argKey: "fromYValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromXDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXDataValue))/ig,
      argIndex: 2,
      argKey: "fromXDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromYDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYDataValue))/ig,
      argIndex: 2,
      argKey: "fromYDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$fromLabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromLabel))/ig,
      argIndex: 2,
      argKey: "fromLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toXValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXValue))/ig,
      argIndex: 2,
      argKey: "toXValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toYValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYValue))/ig,
      argIndex: 2,
      argKey: "toYValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toXDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXDataValue))/ig,
      argIndex: 2,
      argKey: "toXDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$toYDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYDataValue))/ig,
      argIndex: 2,
      argKey: "toYDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
      argIndex: 2,
      argKey: "toLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tlLabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlLabel))/ig,
      argIndex: 5,
      argKey: "tlLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$trlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trlabel))/ig,
      argIndex: 5,
      argKey: "trLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$bllabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$bllabel))/ig,
      argIndex: 5,
      argKey: "blLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$brlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brlabel))/ig,
      argIndex: 5,
      argKey: "brLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$rowlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$rowlabel))/ig,
      argIndex: 5,
      argKey: "rowLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$columnlabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$columnlabel))/ig,
      argIndex: 5,
      argKey: "columnLabel"
     },
     {
      regex: /((^|[^\\])((\\)\\)*\$errorvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorvalue))/ig,
      argIndex: 2,
      argKey: "errorValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$errordatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errordatavalue))/ig,
      argIndex: 2,
      argKey: "errorDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$errorpercentvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentvalue))/ig,
      argIndex: 2,
      argKey: "errorPercentValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$errorpercentdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentdatavalue))/ig,
      argIndex: 2,
      argKey: "errorPercentDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$horizontalErrorValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorValue))/ig,
      argIndex: 2,
      argKey: "horizontalErrorValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$horizontalErrorDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorDataValue))/ig,
      argIndex: 2,
      argKey: "horizontalErrorDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$verticalErrorValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorValue))/ig,
      argIndex: 2,
      argKey: "verticalErrorValue"
     },
     {
      regex: /((^|[^\\])((\\)\\)*\$verticalErrorDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorDataValue))/ig,
      argIndex: 2,
      argKey: "verticalErrorDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercent)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentValue))/ig,
      argIndex: 2,
      argKey: "horizontalErrorPercentValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercentDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentDataValue))/ig,
      argIndex: 2,
      argKey: "horizontalErrorPercentDataValue"
     },
     {
      regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercent)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentValue))/ig,
      argIndex: 2,
      argKey: "verticalErrorPercentValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercentDataValue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentDataValue))/ig,
      argIndex: 2,
      argKey: "verticalErrorPercentDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$xaxispercentvalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxispercentvalue))/ig,
      argIndex: 2,
      argKey: "xAxisPercentValue"
     },
     {
      regex: /((^|[^\\])((\\)\\)*\$percentdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentdatavalue))/ig,
      argIndex: 2,
      argKey: "percentDataValue"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$trType)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trType))/ig,
      argIndex: 4,
      argKey: "trtype"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$tlType)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlType))/ig,
      argIndex: 4,
      argKey: "tltype"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$brType)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brType))/ig,
      argIndex: 4,
      argKey: "brtype"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$blType)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$blType))/ig,
      argIndex: 4,
      argKey: "bltype"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$colorRangeLabel)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$colorRangeLabel))/ig,
      argIndex: 5,
      argKey: "colorRangeLabel"
     }, {
      regex: /((^|[^\\])((\\)\\)*\$zdatavalue)/ig,
      escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zdatavalue))/ig,
      argIndex: 2,
      argKey: "zDataValue"
     }],
    b = [],
    c, h = a.length;
   for (c = 0; c < h; c += 1) b.push(c);
   return function () {
    var c = arguments[0],
     h = arguments[1],
     f, n, g, d, l;
    Y(h) || (h = b);
    if (c)
     for (l = h.length, d = 0; d < l; d +=
      1)
      if (g = a[h[d]]) f = ta(za((n = arguments[g.argIndex]) && n[g.argKey], "") + ""), c = c.replace(g.regex, "$2$4" + (g.parsingMethod ? g.parsingMethod(f) : f)), c = c.replace(g.escapeRegex, "$2$4$5");
    return c
   }
  }();
 d.core._setLineHeightFactor = function (a) {
  !(a = K(a)) || 0 > a || (oa.lineHeightFactor = a)
 };
 d.extend(oa, {
  BLANKSTRINGPLACEHOLDER: "#BLANK#",
  BLANKSTRING: "",
  COLOR_BLACK: "000000",
  COLOR_GLASS: "rgba(255, 255, 255, 0.3)",
  COLOR_WHITE: "FFFFFF",
  COLOR_TRANSPARENT: "rgba(0,0,0,0)",
  HASHSTRING: "#",
  BREAKSTRING: "<br />",
  STRINGSTRING: "string",
  OBJECTSTRING: "object",
  COMMASTRING: ",",
  ZEROSTRING: "0",
  SAMPLESTRING: "Ay0",
  TESTSTR: "Ag",
  ONESTRING: "1",
  DECIMALSTRING: ".",
  STRINGUNDEFINED: "undefined",
  POSITION_TOP: "top",
  POSITION_RIGHT: "right",
  POSITION_BOTTOM: "bottom",
  POSITION_LEFT: "left",
  POSITION_CENTER: "center",
  POSITION_MIDDLE: "middle",
  POSITION_START: "start",
  POSITION_END: "end",
  FC_CONFIG_STRING: "_FCconf",
  SHAPE_RECT: "rect",
  HUNDREDSTRING: "100",
  PXSTRING: "px",
  COMMASPACE: ", ",
  TEXTANCHOR: "text-anchor",
  TOUCH_THRESHOLD_PIXELS: 15,
  CLICK_THRESHOLD_PIXELS: 5,
  regex: {
   stripWhitespace: I,
   dropHash: c,
   startsRGBA: s,
   cleanColorCode: a,
   breakPlaceholder: v,
   hexcode: /^#?[0-9a-f]{6}/i
  },
  fireEvent: function (a, b, c, h) {
   oa.dem.fire(a, b, c, h)
  },
  plotEventHandler: function (a, c, h) {
   c = c || {};
   var f = c.type,
    n = fa(a.container, c),
    n = la(n, this.data("eventArgs")),
    g = a.logic.fireGroupEvent,
    l = this.data("groupId"),
    k = function (a, h) {
     c.FusionChartsPreventEvent = !0;
     b && h.toolText && oa.toolTip && oa.toolTip.preventTooltip()
    };
   "index" in n && !("dataIndex" in n) && (n.dataIndex = n.index);
   "value" in n && !("dataValue" in n) && (n.dataValue = n.value);
   h = Z(h, "dataplotclick").toLowerCase();
   "dataplotrollover" === h ? (c.FusionChartsPreventEvent = !1, g ? d.raiseEventGroup(l, h, n, a.fusionCharts, void 0, void 0, k) : d.raiseEvent(h, n, a.logic.chartInstance, void 0, void 0, k)) : g && "dataplotclick" !== h ? d.raiseEventGroup(l, h, n, a.fusionCharts) : d.raiseEvent(h, n, a.logic.chartInstance);
   "click" !== f && "mouseup" !== f && "touchend" !== f || !/click/i.test(h) || a.linkClickFN.call({
    link: n.link
   }, a)
  },
  getEventCoordinate: T,
  getMouseCoordinate: fa,
  addEvent: U,
  removeEvent: na,
  getTouchEvent: H,
  extend2: la,
  deltend: function (a, b) {
   if ("object" !== typeof a || "object" !== typeof b) return null;
   ya(a, b);
   return a
  },
  imprint: function (a, b, c) {
   var h;
   if ("object" !== typeof a || null === a) return b;
   if ("object" !== typeof b || null === b) return a;
   for (h in b)
    if (void 0 === a[h] || !c && null === a[h]) a[h] = b[h];
   return a
  },
  pluck: Z,
  pluckNumber: L,
  getFirstDefinedValue: function () {
   var a, b, c;
   b = 0;
   for (c = arguments.length; b < c; b += 1)
    if ((a = arguments[b]) || !1 === a || 0 === a || "" == a) return a
  },
  createElement: function (a, b, c) {
   a = z.createElement(a);
   for (var h in b) a.setAttribute(h,
    b[h]);
   c && c.appendChild && c.appendChild(a);
   return a
  },
  hashify: n,
  pluckFontSize: function () {
   var a, b, c;
   b = 0;
   for (c = arguments.length; b < c; b += 1)
    if (((a = arguments[b]) || !1 === a || 0 === a) && !isNaN(a = Number(a))) return 1 > a ? 1 : a;
   return 1
  },
  getValidValue: za,
  getPosition: V,
  getViewPortDimension: B,
  bindSelectionEvent: function (a, b) {
   b = b || {};
   var c = a.options.chart,
    h = a.container,
    f = c.zoomType,
    n = la({}, b.attr || {}),
    g = n["stroke-width"] = L(n.strokeWidth, n["stroke-width"], 1),
    d = V(h),
    l = a.eventListeners || (a.eventListeners = []);
   b = la({
    chart: a,
    zoomX: /x/.test(f),
    zoomY: /y/.test(f),
    canvasY: a.canvasTop,
    canvasX: a.canvasLeft,
    canvasW: a.canvasWidth,
    canvasH: a.canvasHeight,
    canvasX2: a.canvasLeft + a.canvasWidth,
    canvasY2: a.canvasTop + a.canvasHeight,
    strokeWidth: g,
    chartPosLeft: d.left,
    chartPosTop: d.top,
    attr: n
   }, b);
   n.stroke = Aa(n.stroke, "rgba(51,153,255,0.8)");
   n.fill = Aa(n.fill, "rgba(185,213,241,0.3)");
   n.ishot = !0;
   h && (na(h, "pointerdrag", ga), l.push(U(h, "pointerdrag", ga, b)));
   c.link && (na(a.container, "mouseup mousedown", $), l.push(U(a.container, "mouseup mousedown", $, b)))
  },
  createContextMenu: function (a) {
   var c =
    a.chart,
    h = c.smartLabel,
    f = c.logic.hcJSON && c.logic.hcJSON.chart.useRoundEdges,
    g = oa.Raphael,
    d = function (a) {
     var b = a.menufillcolor && n(a.menufillcolor),
      c = a.menulabelcolor && n(a.menulabelcolor),
      h = a.menufillhovercolor && n(a.menufillhovercolor);
     a = a.menulabelhovercolor && n(a.menulabelhovercolor);
     return {
      attrs: {
       backgroundColor: b,
       color: c
      },
      hover: {
       backgroundColor: h,
       color: a
      }
     }
    }(c.definition.chart),
    l = function (a, b, c) {
     b = b || {};
     a = (a = (a = a && g.tintshade(a.color, .7)) && g.getRGB(a)) && "rgb(" + [a.r, a.g, a.b].join() + ")";
     return {
      backgroundColor: b.backgroundHoverColor ||
       c.backgroundColor || a || "rgb(64, 64, 64)",
      color: b.hoverColor || c.color || "#FFFFFF"
     }
    }(a.basicStyle, a.hover, d.hover),
    k = function (a, b, c) {
     b = la({}, b || {});
     b = la(b, a);
     return {
      fontFamily: b.fontFamily || "Verdana,sans",
      fontSize: b.fontSize || "10px",
      color: b.color || c.color || "#000000",
      backgroundColor: b.backgroundColor || c.backgroundColor || "rgb(255, 255, 255)"
     }
    }(a.basicStyle, a.attrs, d.attrs),
    L = {
     textAlign: "left",
     align: "left",
     paddingLeft: "5px",
     paddingRight: "5px",
     paddingTop: "5px",
     cursor: "pointer",
     borderWidth: "0px"
    },
    G = a.items,
    p = a.position,
    r = a.verticalPadding || 3,
    s = a.horizontalPadding || 6,
    H = {},
    aa, m, ca, v, B, F, T, ta, C, q, Y, fa, sa;
   if (c) aa = V(c.container);
   else return !1;
   v = function () {
    var a = H.items,
     c = a.length,
     n = 0,
     u = 0,
     g = 0,
     d, t;
    H.menuItems || (H.menuItems = []);
    for (h.setStyle(k); c--;) d = a[c], d = h.getOriSize(d.text), g || (g = d.height + 2 * r), n += g, u = A(u, d.width + 2 * s);
    H.height = n;
    H.width = u;
    H.itemH = g;
    this.style.width = u + "px";
    H.menuRect || (n = H.menuRect = z.createElement("div"), n.style.border = "1px solid rgb(100, 100, 100)", f && (n.style.mozBorderRadius = "4px", n.style.webkitBorderRadius =
     "4px", n.style.borderRadius = "4px", n.style.overflow = "hidden"), b && !E ? n.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Color=#999999,direction=135,strength=3)" : (n.style.mozBoxShadow = "3px 3px 3px #999", n.style.webkitBoxShadow = "3px 3px 3px #999", n.style.boxShadow = "3px 3px 3px #999"), this.appendChild(n));
    u = a.length;
    for (c = 0; c < u; c += 1)
     if (d = a[c], H.menuItems[c]) H.menuItems[c].label.innerHTML = d.text;
     else {
      H.menuItems[c] = {};
      n = H.menuItems[c].box = z.createElement("div");
      n.style.height = g + "px";
      n.style.lineHeight =
       g + "px";
      for (t in L) n.style[t] = L[t];
      for (t in k) n.style[t] = k[t];
      H.menuRect.appendChild(n);
      n.innerHTML = d.text;
      oa.dem.listen(n, "click", sa);
      oa.dem.listen(n, "pointerhover", q);
      H.menuItems[c].box._itemIdx = c
     }
    for (; H.menuItems[c];) H.menuItems[c].box.parentNode.removeChild(H.menuItems[c].box), H.menuItems.splice(c, 1)
   };
   B = function () {
    ca || (ca = z.createElement("div"), ca.style.position = "absolute", ca.style.zIndex = "50", ca.style.display = "none", c.container.appendChild && c.container.appendChild(ca));
    return ca
   };
   F = function () {
    m =
     setTimeout(H.hide, 800)
   };
   T = function () {
    m && clearTimeout(m)
   };
   ta = function (a) {
    var b = a.x;
    a = a.y;
    var h = {
      x: b,
      y: a
     },
     n = H.width,
     f = H.height,
     u = c.chartHeight,
     t = c.chartWidth;
    b + n > t && 0 < b - n ? h.x -= n : b + n > t && (h.x = 0);
    a + f > u && 0 < a - f && (h.y -= f);
    return h
   };
   C = function () {
    H.hide()
   };
   q = function (a) {
    a.target && a.target.parentNode && ("start" === a.state ? Y : fa).call(a.target)
   };
   Y = function () {
    var a = H.menuItems[this._itemIdx],
     b;
    T();
    for (b in l) a.box.style[b] = l[b]
   };
   fa = function () {
    var a = H.menuItems[this._itemIdx],
     b;
    for (b in k) a.box.style[b] = k[b];
    F()
   };
   sa = function (a) {
    var b = H.items[this._itemIdx];
    b.onclick && b.onclick.call(b, a);
    a.originalEvent.stopPropagation ? a.originalEvent.stopPropagation() : a.originalEvent.cancelBubble = !0;
    H.hide()
   };
   H.showItem = function (a) {
    a = this.menuItems[a];
    var b = this.height,
     c = this.itemH;
    a && a._isHidden && (a.box.style.display = "", this.height = b + c, a._isHidden = !1, a = ta(p), this.left = a.x, this.top = a.y)
   };
   H.hideItem = function (a) {
    a = this.menuItems[a];
    var b = this.height,
     c = this.itemH;
    a && !a._isHidden && (a.box.style.display = "none", this.height = b - c, a._isHidden = !0, a = ta(p), this.left = a.x, this.top = a.y)
   };
   H.redraw = function () {
    var a = this.menuContainer;
    this.items = G;
    a ? v.call(this.menuContainer) : p && void 0 !== p.x && void 0 !== p.y ? (this.menuContainer = B(), v.call(this.menuContainer), a = ta(p), this.left = a.x, this.top = a.y, this.menuContainer.style.left = this.left + "px", this.menuContainer.style.top = this.top + "px") : (this.menuContainer = B(), v.call(this.menuContainer))
   };
   H.show = function (a) {
    var b = this;
    a && void 0 !== a.x && void 0 !== a.y ? (a = ta(a), b.menuContainer.style.left = a.x + "px", b.menuContainer.style.top =
     a.y + "px") : (b.menuContainer.style.left = b.left + "px", b.menuContainer.style.top = b.top + "px");
    b.menuContainer.style.display = "";
    setTimeout(function () {
     b.visible = !0;
     g.click(C)
    }, 400)
   };
   H.hide = function () {
    this.visible && (this.visible = !1, H.menuContainer.style.display = "none", H.menuContainer.style.left = -H.width + "px", H.menuContainer.style.top = -H.height + "px", g.unclick(C))
   };
   H.update = function (a) {
    a && a.length && (this.items = a, this.redraw())
   };
   H.updatePosition = function (a) {
    var b = aa.left,
     h = aa.top;
    aa = V(c.container);
    a ? (p = a, a = ta(a),
     this.left = a.x, this.top = a.y) : (this.left -= b - aa.left, this.top -= h - aa.top)
   };
   H.add = function (a) {
    var b = this.menuItems,
     c = b.length,
     n;
    h.setStyle(k);
    this.width = A(this.width, h.getOriSize(a.text).width);
    b[c] = {};
    b = b[c].box = z.createElement("div");
    b.style.height = this.itemH + "px";
    b.style.lineHeight = this.itemH + "px";
    for (n in L) b.style[n] = L[n];
    for (n in k) b.style[n] = k[n];
    H.menuRect.appendChild(b);
    b.innerHTML = a.text;
    oa.dem.listen(b, "click", sa);
    oa.dem.listen(b, "pointerhover", q);
    H.menuItems[c].box._itemIdx = c;
    this.height +=
     this.itemH
   };
   H.removeItems = function () {
    for (var a = this.menuItems, b = a && a.length, c; b--;) c = a[b], oa.dem.unlisten(c.box, "click", sa), oa.dem.unlisten(c.box, "pointerhover", q), c.box && c.box.parentNode && c.box.parentNode.removeChild(c.box);
    delete this.menuItems;
    delete this.items
   };
   H.setPosition = function (a) {
    void 0 !== a.x && void 0 !== a.y && (this.menuContainer.style.x = a.x, this.menuContainer.style.y = a.y)
   };
   H.destroy = function () {
    this.removeItems();
    this.menuContainer.parentNode.removeChild(this.menuContainer)
   };
   G && G.length &&
    (H.redraw(), H.hide());
   return H
  },
  getDefinedColor: function (a, b) {
   return a || 0 === a || "" === a ? a : b
  },
  getFirstValue: Aa,
  getFirstColor: function (a) {
   a = a.split(",")[0];
   a = a.replace(I, "");
   "" == a && (a = "000000");
   return a.replace(c, "#")
  },
  getColorCodeString: function (a, b) {
   var c = "",
    h, n, f = 0,
    g = b.split(",");
   for (n = g.length; f < n; f += 1) h = g[f].split("-"), c = 2 === h.length ? "-1" !== h[0].indexOf("dark") ? c + (Ta(a, 100 - parseInt(h[1], 10)) + ",") : c + (Ja(a, 100 - parseInt(h[1], 10)) + ",") : c + (g[f] + ",");
   return c.substring(0, c.length - 1)
  },
  pluckColor: function (a) {
   if (za(a)) return a =
    a.split(",")[0], a = a.replace(I, ""), "" == a && (a = "000000"), a.replace(c, "#")
  },
  toRaphaelColor: La,
  gradientify: Ya,
  trimString: function (a) {
   a = a.replace(/^\s\s*/, "");
   for (var b = /\s/, c = a.length; b.test(a.charAt(--c)););
   return a.slice(0, c + 1)
  },
  getFirstAlpha: function (a) {
   a = parseInt(a, 10);
   if (isNaN(a) || 100 < a || 0 > a) a = 100;
   return a
  },
  parsePointValue: ca,
  parseUnsafeString: aa,
  parseTooltext: G,
  toPrecision: function (a, b) {
   var c = g(10, b);
   return f(a * c) / c
  },
  hasTouch: q,
  CREDIT_HREF: Q,
  CREDIT_STRING: "University of Louisiana at Monroe",
  getSentenceCase: function (a) {
   a =
    a || "";
   return a.charAt(0).toUpperCase() + a.substr(1)
  },
  getCrispValues: function (a, b, c) {
   var h = c % 2 / 2;
   c = f(a + h) - h;
   a = f(a + b + h) - h - c;
   return {
    position: c,
    distance: a
   }
  },
  regescape: function (a) {
   return a && a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
  },
  regReplaceEscape: ta,
  isArray: Y,
  stubFN: function () {},
  falseFN: function () {
   return !1
  },
  stableSort: function (a, b) {
   var c = a.length,
    h;
   for (h = 0; h < c; h++) a[h].ssI = h;
   a.sort(function (a, c) {
    var h = b(a, c);
    return 0 === h ? a.ssI - c.ssI : h
   });
   for (h = 0; h < c; h++) delete a[h].ssI
  },
  hasSVG: E,
  isIE: b,
  lineHeightFactor: 1.2,
  getLinkAction: function (a, b) {
   var c = function (a) {
    return a
   };
   return function (h) {
    h = h || this.series && this.series.chart;
    var n = a.chart || a.map || {},
     f = L(n.unescapelinks, 1),
     n = L(n.clickurloverridesplotlinks, 0),
     g = Aa(this.link, "");
    h = h && h.options && h.options.chart && h.options.chart.link || "";
    var l = this.options && this.options.chart && this.options.chart.link || "",
     k = n ? Z(h, l, g) : Z(g, l, h),
     G = k,
     p, H, r, s, A, aa, ca, v, B, F;
    void 0 !== k && (f && (k = m.decodeURIComponent ? m.decodeURIComponent(k) : m.unescape(k)), k = k.replace(/^\s+/, "").replace(/\s+$/,
     ""), -1 !== k.search(/^[a-z]*\s*[\-\:]\s*/i) && (A = k.split(/\s*[\-\:]\s*/)[0].toLowerCase(), F = A.length), setTimeout(function () {
     switch (A) {
     case "j":
      k = k.replace(/^j\s*\-/i, "j-");
      p = k.indexOf("-", 2); - 1 === p ? Ia(k.slice(2)) : Ia(k.substr(2, p - 2).replace(/\s/g, ""), k.slice(p + 1));
      break;
     case "javascript":
      ma(k.replace(/^javascript\s*\:/i, ""));
      break;
     case "n":
      k.replace(/^n\s*\-/i, "n-");
      m.open(c(k.slice(2), f));
      break;
     case "f":
      k = k.replace(/^f\s*\-/i, "f-");
      p = k.indexOf("-", 2); - 1 !== p ? (H = k.substr(2, p - 2)) && m.frames[H] ? m.frames[H].location =
       c(k.slice(p + 1), f) : m.open(c(k.slice(p + 1), f), H) : m.open(c(k.slice(2), f));
      break;
     case "p":
      k = k.replace(/p\s*\-/i, "p-");
      p = k.indexOf("-", 2);
      r = k.indexOf(",", 2); - 1 === p && (p = 1);
      s = c(k.slice(p + 1), f);
      m.open(s, k.substr(2, r - 2), k.substr(r + 1, p - r - 1)).focus();
      break;
     case "newchart":
     case "newmap":
      ":" === k.charAt(F) && (p = k.indexOf("-", F + 1), B = k.substring(F + 1, p), F = p);
      p = k.indexOf("-", F + 1);
      aa = k.substring(F + 1, p).toLowerCase();
      switch (aa) {
      case "xmlurl":
      case "jsonurl":
       v = k.substring(p + 1, k.length);
       break;
      case "xml":
      case "json":
       var h =
        ca = k.substring(p + 1, k.length),
        n = {
         chart: {}
        },
        g, h = h.toLowerCase();
       if (a.linkeddata)
        for (g = 0; g < a.linkeddata.length; g += 1) a.linkeddata[g].id.toLowerCase() === h && (n = a.linkeddata[g].linkedchart || a.linkeddata[g].linkedmap);
       v = n;
       aa = "json"
      }
      d.raiseEvent("linkedChartInvoked", {
       alias: B,
       linkType: aa.toUpperCase(),
       data: v
      }, b);
      break;
     default:
      m.location.href = k
     }
     d.raiseEvent("linkClicked", {
      linkProvided: G,
      linkInvoked: k,
      linkAction: A && A.toLowerCase()
     }, b)
    }, 0))
   }
  },
  graphics: {
   parseAlpha: pa,
   convertColor: qa,
   getDarkColor: Ja,
   getLightColor: Ta,
   mapSymbolName: function (a, b) {
    var c = "circle";
    a = ca(a);
    3 <= a && (c = (b ? "spoke_" : "poly_") + a);
    return c
   },
   getColumnColor: function (a, b, c, h, n, f, g, d, k) {
    var l, L;
    l = a.split(",");
    L = b.split(",");
    f = f.split(",");
    g = g.split(",");
    a = a.replace(/\s/g, "").replace(/\,$/, "");
    k ? d = {
     FCcolor: {
      color: l[0],
      alpha: L[0]
     }
    } : n ? (a = l[0], L = L[0], d = {
     FCcolor: {
      color: Ja(a, 75) + "," + Ta(a, 10) + "," + Ja(a, 90) + "," + Ta(a, 55) + "," + Ja(a, 80),
      alpha: L + "," + L + "," + L + "," + L + "," + L,
      ratio: "0,11,14,57,18",
      angle: d ? "90" : "0"
     }
    }, f = [Ja(a, 70)]) : (b = pa(b, l.length), d = {
     FCcolor: {
      color: a,
      alpha: b,
      ratio: c,
      angle: d ? -h : h
     }
    });
    return [d, {
     FCcolor: {
      color: f[0],
      alpha: g[0]
     }
    }]
   },
   getAngle: function (a, b, c) {
    a = 180 * Math.atan(b / a) / Math.PI;
    2 == c ? a = 180 - a : 3 == c ? a += 180 : 4 == c && (a = 360 - a);
    return a
   },
   parseColor: ib,
   getValidColor: function (a) {
    return O.test(ib(a)) && a
   },
   HSBtoRGB: function (a) {
    var b = a[0],
     c = 0,
     h = 0,
     n = 0,
     g = [],
     g = a[1] / 100;
    a = a[2] / 100;
    var d = b / 60 - Math.floor(b / 60),
     k = a * (1 - g),
     l = a * (1 - d * g),
     g = a * (1 - (1 - d) * g);
    switch (Math.floor(b / 60) % 6) {
    case 0:
     c = a;
     h = g;
     n = k;
     break;
    case 1:
     c = l;
     h = a;
     n = k;
     break;
    case 2:
     c = k;
     h = a;
     n = g;
     break;
    case 3:
     c = k;
     h = l;
     n = a;
     break;
    case 4:
     c = g;
     h = k;
     n = a;
     break;
    case 5:
     c = a, h = k, n = l
    }
    return g = [f(255 * c), f(255 * h), f(255 * n)]
   },
   RGBtoHSB: function (a) {
    var b = a[0],
     c = a[1];
    a = a[2];
    var h = Math.max(Math.max(b, c), a),
     n = Math.min(Math.min(b, c), a),
     g = 0,
     d = 0;
    h == n ? g = 0 : h == b ? g = (60 * (c - a) / (h - n) + 360) % 360 : h == c ? g = 60 * (a - b) / (h - n) + 120 : h == a && (g = 60 * (b - c) / (h - n) + 240);
    d = 0 === h ? 0 : (h - n) / h;
    return [f(g), f(100 * d), f(h / 255 * 100)]
   },
   RGBtoHex: function (a) {
    return ("000000" + (a[0] << 16 | a[1] << 8 | a[2]).toString(16)).slice(-6)
   },
   HEXtoRGB: Na
  },
  setImageDisplayMode: function (a, b, c, h, n, f, g, d) {
   var k =
    h / 100 * d.width;
   h = h / 100 * d.height;
   d = {};
   var l, L = f - 2 * n;
   l = g - 2 * n;
   var p = function (a, b, c, h, f, g) {
    var d = {};
    switch (a) {
    case "top":
     d.y = n;
     break;
    case "bottom":
     d.y = g - h - n;
     break;
    case "middle":
     d.y = (g - h) / 2
    }
    switch (b) {
    case "left":
     d.x = n;
     break;
    case "right":
     d.x = f - c - n;
     break;
    case "middle":
     d.x = (f - c) / 2
    }
    return d
   };
   switch (a) {
   case "center":
    d.width = k;
    d.height = h;
    d.y = g / 2 - h / 2;
    d.x = f / 2 - k / 2;
    break;
   case "stretch":
    d.width = f - 2 * n;
    d.height = g - 2 * n;
    d.y = n;
    d.x = n;
    break;
   case "tile":
    d.width = k;
    d.height = h;
    d.tileInfo = {};
    d.tileInfo.xCount = a = Math.ceil(L / k);
    d.tileInfo.yCount = l = Math.ceil(l / h);
    b = p(b, c, k * a, h * l, f, g);
    d.y = b.y;
    d.x = b.x;
    break;
   case "fit":
    a = k / h > L / l ? L / k : l / h;
    d.width = k * a;
    d.height = h * a;
    b = p(b, c, d.width, d.height, f, g);
    d.y = b.y;
    d.x = b.x;
    break;
   case "fill":
    a = k / h > L / l ? l / h : L / k;
    d.width = k * a;
    d.height = h * a;
    b = p(b, c, d.width, d.height, f, g);
    d.y = b.y;
    d.x = b.x;
    break;
   default:
    b = p(b, c, k, h, f, g), d.width = k, d.height = h, d.y = b.y, d.x = b.x
   }
   return d
  },
  setLineHeight: sb,
  parsexAxisStyles: Wa,
  supportedStyle: {
   font: "font",
   fontFamily: "font-family",
   "font-family": "font-family",
   fontWeight: "font-weight",
   "font-weight": "font-weight",
   fontSize: "font-size",
   "font-size": "font-size",
   lineHeight: "line-height",
   "line-height": "line-height",
   textDecoration: "text-decoration",
   "text-decoration": "text-decoration",
   color: "color",
   whiteSpace: "white-space",
   "white-space": "white-space",
   padding: "padding",
   margin: "margin",
   background: "background",
   backgroundColor: "background-color",
   "background-color": "background-color",
   backgroundImage: "background-image",
   "background-image": "background-image",
   backgroundPosition: "background-position",
   "background-position": "background-position",
   backgroundPositionLeft: "background-position-left",
   "background-position-left": "background-position-left",
   backgroundPositionTop: "background-position-top",
   "background-position-top": "background-position-top",
   backgroundRepeat: "background-repeat",
   "background-repeat": "background-repeat",
   border: "border",
   borderColor: "border-color",
   "border-color": "border-color",
   borderStyle: "border-style",
   "border-style": "border-style",
   borderThickness: "border-thickness",
   "border-thickness": "border-thickness",
   borderTop: "border-top",
   "border-top": "border-top",
   borderTopColor: "border-top-color",
   "border-top-color": "border-top-color",
   borderTopStyle: "border-top-style",
   "border-top-style": "border-top-style",
   borderTopThickness: "border-top-thickness",
   "border-top-thickness": "border-top-thickness",
   borderRight: "border-right",
   "border-right": "border-right",
   borderRightColor: "border-right-color",
   "border-right-color": "border-right-color",
   borderRightStyle: "border-right-style",
   "border-right-style": "border-right-style",
   borderRightThickness: "border-right-thickness",
   "border-right-thickness": "border-right-thickness",
   borderBottom: "border-bottom",
   "border-bottom": "border-bottom",
   borderBottomColor: "border-bottom-color",
   "border-bottom-color": "border-bottom-color",
   borderBottomStyle: "border-bottom-style",
   "border-bottom-style": "border-bottom-style",
   borderBottomThickness: "border-bottom-thickness",
   "border-bottom-thickness": "border-bottom-thickness",
   borderLeft: "border-left",
   "border-left": "border-left",
   borderLeftColor: "border-left-color",
   "border-left-color": "border-left-color",
   borderLeftStyle: "border-left-style",
   "border-left-Style": "border-left-style",
   borderLeftThickness: "border-left-thickness",
   "border-left-thickness": "border-left-thickness"
  },
  getAxisLimits: Sb,
  createTrendLine: jb,
  getDashStyle: yb,
  axisLabelAdder: Ga,
  chartAPI: h,
  createDialog: Qb,
  isCanvasElemSupported: function () {
   var a = z.createElement("canvas");
   return !(!a.getContext || !a.getContext("2d"))
  }
 })
}]);
window.FusionCharts && window.FusionCharts.register("module", ["private", "vendor.redraphael", function () {
 var d = this.hcLib,
  m = window.Raphael,
  z;
 (function () {
  (function (d, m) {
   var b = /[\.\/]/,
    z = function () {},
    I = function (a, b) {
     return a - b
    },
    c, s, a = {
     n: {}
    },
    v = function (a, b) {
     a = String(a);
     var g = s,
      f = Array.prototype.slice.call(arguments, 2),
      d = v.listeners(a),
      p = 0,
      m, q = [],
      k = {},
      B = [],
      A = c;
     c = a;
     for (var W = s = 0, r = d.length; W < r; W++) "zIndex" in d[W] && (q.push(d[W].zIndex), 0 > d[W].zIndex && (k[d[W].zIndex] = d[W]));
     for (q.sort(I); 0 > q[p];)
      if (m = k[q[p++]],
       B.push(m.apply(b, f)), s) return s = g, B;
     for (W = 0; W < r; W++)
      if (m = d[W], "zIndex" in m)
       if (m.zIndex == q[p]) {
        B.push(m.apply(b, f));
        if (s) break;
        do
         if (p++, (m = k[q[p]]) && B.push(m.apply(b, f)), s) break;
        while (m)
       }
       else k[m.zIndex] = m;
     else if (B.push(m.apply(b, f)), s) break;
     s = g;
     c = A;
     return B.length ? B : null
    };
   v._events = a;
   v.listeners = function (c) {
    c = c.split(b);
    var d = a,
     g, f, l, p, s, m, k, v = [d],
     A = [];
    l = 0;
    for (p = c.length; l < p; l++) {
     k = [];
     s = 0;
     for (m = v.length; s < m; s++)
      for (d = v[s].n, g = [d[c[l]], d["*"]], f = 2; f--;)
       if (d = g[f]) k.push(d), A = A.concat(d.f || []);
     v = k
    }
    return A
   };
   v.on = function (c, d) {
    c = String(c);
    if ("function" != typeof d) return function () {};
    for (var g = c.split(b), f = a, l = 0, p = g.length; l < p; l++) f = f.n, f = f.hasOwnProperty(g[l]) && f[g[l]] || (f[g[l]] = {
     n: {}
    });
    f.f = f.f || [];
    l = 0;
    for (p = f.f.length; l < p; l++)
     if (f.f[l] == d) return z;
    f.f.push(d);
    return function (a) {
     +a == +a && (d.zIndex = +a)
    }
   };
   v.f = function (a) {
    var b = [].slice.call(arguments, 1);
    return function () {
     v.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
   };
   v.stop = function () {
    s = 1
   };
   v.nt = function (a) {
    return a ? (new RegExp("(?:\\.|\\/|^)" +
     a + "(?:\\.|\\/|$)")).test(c) : c
   };
   v.nts = function () {
    return c.split(b)
   };
   v.off = v.unbind = function (c, d) {
    if (c) {
     var g = c.split(b),
      f, l, p, s, m, k, B = [a];
     s = 0;
     for (m = g.length; s < m; s++)
      for (k = 0; k < B.length; k += p.length - 2) {
       p = [k, 1];
       f = B[k].n;
       if ("*" != g[s]) f[g[s]] && p.push(f[g[s]]);
       else
        for (l in f) f.hasOwnProperty(l) && p.push(f[l]);
       B.splice.apply(B, p)
      }
     s = 0;
     for (m = B.length; s < m; s++)
      for (f = B[s]; f.n;) {
       if (d) {
        if (f.f) {
         k = 0;
         for (g = f.f.length; k < g; k++)
          if (f.f[k] == d) {
           f.f.splice(k, 1);
           break
          }!f.f.length && delete f.f
        }
        for (l in f.n)
         if (f.n.hasOwnProperty(l) &&
          f.n[l].f) {
          p = f.n[l].f;
          k = 0;
          for (g = p.length; k < g; k++)
           if (p[k] == d) {
            p.splice(k, 1);
            break
           }!p.length && delete f.n[l].f
         }
       }
       else
        for (l in delete f.f, f.n) f.n.hasOwnProperty(l) && f.n[l].f && delete f.n[l].f;
       f = f.n
      }
    }
    else v._events = a = {
     n: {}
    }
   };
   v.once = function (a, b) {
    var c = function () {
     v.unbind(a, c);
     return b.apply(this, arguments)
    };
    return v.on(a, c)
   };
   v.version = "0.4.2";
   v.toString = function () {
    return "You are running Eve 0.4.2"
   };
   "undefined" != typeof module && module.exports ? module.exports = v : m || "undefined" == typeof define ? d.eve = v : define("eve", [], function () {
    return v
   })
  })(this, !0);
  (function (d, m, b) {
   !b && "function" === typeof define && define.amd ? define(["eve"], function (b) {
    return m(d, b)
   }) : m(d, d.eve)
  })(this, function (d, m) {
   function b(a) {
    var c, e;
    void 0 === b._url && (b._url = "");
    if (b.is(a, "function")) return p ? a() : m.on("raphael.DOMload", a);
    if (b.is(a, k)) return b._engine.create[F](b, a.splice(0, 3 + b.is(a[0], Q))).add(a);
    c = Array.prototype.slice.call(arguments, 0);
    return b.is(c[c.length - 1], "function") ? (e = c.pop(), p ? e.call(b._engine.create[F](b, c)) : m.on("raphael.DOMload",
     function () {
      e.call(b._engine.create[F](b, c))
     })) : b._engine.create[F](b, arguments)
   }

   function K() {
    return this.hex
   }

   function I(a, b) {
    for (var c = [], e = 0, t = a.length; t - 2 * !b > e; e += 2) {
     var h = [{
      x: +a[e - 2],
      y: +a[e - 1]
     }, {
      x: +a[e],
      y: +a[e + 1]
     }, {
      x: +a[e + 2],
      y: +a[e + 3]
     }, {
      x: +a[e + 4],
      y: +a[e + 5]
     }];
     b ? e ? t - 4 == e ? h[3] = {
      x: +a[0],
      y: +a[1]
     } : t - 2 == e && (h[2] = {
      x: +a[0],
      y: +a[1]
     }, h[3] = {
      x: +a[2],
      y: +a[3]
     }) : h[0] = {
      x: +a[t - 2],
      y: +a[t - 1]
     } : t - 4 == e ? h[3] = h[2] : e || (h[0] = {
      x: +a[e],
      y: +a[e + 1]
     });
     c.push(["C", (-h[0].x + 6 * h[1].x + h[2].x) / 6, (-h[0].y + 6 * h[1].y + h[2].y) / 6, (h[1].x +
      6 * h[2].x - h[3].x) / 6, (h[1].y + 6 * h[2].y - h[3].y) / 6, h[2].x, h[2].y])
    }
    return c
   }

   function c(a, b, c, e, t, h, w, J, n) {
    null == n && (n = 1);
    n = (1 < n ? 1 : 0 > n ? 0 : n) / 2;
    for (var M = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, g = 0; 12 > g; g++) var S = n * M[g] + n,
     k = S * (S * (-3 * a + 9 * c - 9 * t + 3 * w) + 6 * a - 12 * c + 6 * t) - 3 * a + 3 * c,
     S = S * (S * (-3 * b + 9 * e - 9 * h + 3 * J) + 6 * b - 12 * e + 6 * h) - 3 * b + 3 * e,
     d = d + f[g] * ma(k * k + S * S);
    return n * d
   }

   function s(a, b, e, t, h, w, J, n, M) {
    if (!(0 > M ||
      c(a, b, e, t, h, w, J, n) < M)) {
     var f = .5,
      d = 1 - f,
      g;
     for (g = c(a, b, e, t, h, w, J, n, d); .01 < Ea(g - M);) f /= 2, d += (g < M ? 1 : -1) * f, g = c(a, b, e, t, h, w, J, n, d);
     return d
    }
   }

   function a(a, e, t) {
    a = b._path2curve(a);
    e = b._path2curve(e);
    for (var h, w, J, n, M, f, d, g, S, k, R = t ? 0 : [], u = 0, l = a.length; u < l; u++)
     if (S = a[u], "M" == S[0]) h = M = S[1], w = f = S[2];
     else {
      "C" == S[0] ? (S = [h, w].concat(S.slice(1)), h = S[6], w = S[7]) : (S = [h, w, h, w, M, f, M, f], h = M, w = f);
      for (var L = 0, da = e.length; L < da; L++)
       if (k = e[L], "M" == k[0]) J = d = k[1], n = g = k[2];
       else {
        "C" == k[0] ? (k = [J, n].concat(k.slice(1)), J = k[6], n = k[7]) :
         (k = [J, n, J, n, d, g, d, g], J = d, n = g);
        var p;
        var G = S,
         X = k;
        p = t;
        var H = b.bezierBBox(G),
         s = b.bezierBBox(X);
        if (b.isBBoxIntersect(H, s)) {
         for (var H = c.apply(0, G), s = c.apply(0, X), H = sa(~~(H / 5), 1), s = sa(~~(s / 5), 1), D = [], r = [], m = {}, A = p ? 0 : [], ka = 0; ka < H + 1; ka++) {
          var ic = b.findDotsAtSegment.apply(b, G.concat(ka / H));
          D.push({
           x: ic.x,
           y: ic.y,
           t: ka / H
          })
         }
         for (ka = 0; ka < s + 1; ka++) ic = b.findDotsAtSegment.apply(b, X.concat(ka / s)), r.push({
          x: ic.x,
          y: ic.y,
          t: ka / s
         });
         for (ka = 0; ka < H; ka++)
          for (G = 0; G < s; G++) {
           var rb = D[ka],
            Fa = D[ka + 1],
            X = r[G],
            ic = r[G + 1],
            N = .001 > Ea(Fa.x -
             rb.x) ? "y" : "x",
            aa = .001 > Ea(ic.x - X.x) ? "y" : "x",
            ca;
           ca = rb.x;
           var v = rb.y,
            Yb = Fa.x,
            B = Fa.y,
            T = X.x,
            ta = X.y,
            ba = ic.x,
            F = ic.y;
           if (sa(ca, Yb) < Y(T, ba) || Y(ca, Yb) > sa(T, ba) || sa(v, B) < Y(ta, F) || Y(v, B) > sa(ta, F)) ca = void 0;
           else {
            var jc = (ca * B - v * Yb) * (T - ba) - (ca - Yb) * (T * F - ta * ba),
             q = (ca * B - v * Yb) * (ta - F) - (v - B) * (T * F - ta * ba),
             C = (ca - Yb) * (ta - F) - (v - B) * (T - ba);
            if (C) {
             var jc = jc / C,
              q = q / C,
              C = +jc.toFixed(2),
              ha = +q.toFixed(2);
             ca = C < +Y(ca, Yb).toFixed(2) || C > +sa(ca, Yb).toFixed(2) || C < +Y(T, ba).toFixed(2) || C > +sa(T, ba).toFixed(2) || ha < +Y(v, B).toFixed(2) || ha > +sa(v,
              B).toFixed(2) || ha < +Y(ta, F).toFixed(2) || ha > +sa(ta, F).toFixed(2) ? void 0 : {
              x: jc,
              y: q
             }
            }
            else ca = void 0
           }
           ca && m[ca.x.toFixed(4)] != ca.y.toFixed(4) && (m[ca.x.toFixed(4)] = ca.y.toFixed(4), rb = rb.t + Ea((ca[N] - rb[N]) / (Fa[N] - rb[N])) * (Fa.t - rb.t), X = X.t + Ea((ca[aa] - X[aa]) / (ic[aa] - X[aa])) * (ic.t - X.t), 0 <= rb && 1.001 >= rb && 0 <= X && 1.001 >= X && (p ? A++ : A.push({
            x: ca.x,
            y: ca.y,
            t1: Y(rb, 1),
            t2: Y(X, 1)
           })))
          }
         p = A
        }
        else p = p ? 0 : [];
        if (t) R += p;
        else {
         H = 0;
         for (s = p.length; H < s; H++) p[H].segment1 = u, p[H].segment2 = L, p[H].bez1 = S, p[H].bez2 = k;
         R = R.concat(p)
        }
       }
     }
    return R
   }

   function v(a, b, c, e, t, h) {
    null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +e, this.e = +t, this.f = +h) : (this.a = 1, this.c = this.b = 0, this.d = 1, this.f = this.e = 0)
   }

   function O() {
    return this.x + " " + this.y + " " + this.width + " × " + this.height
   }

   function C(a, b, c, e, t, h) {
    function w(a, b) {
     var c, e, cb, t;
     cb = a;
     for (e = 0; 8 > e; e++) {
      t = ((M * cb + n) * cb + J) * cb - a;
      if (Ea(t) < b) return cb;
      c = (3 * M * cb + 2 * n) * cb + J;
      if (1E-6 > Ea(c)) break;
      cb -= t / c
     }
     c = 0;
     e = 1;
     cb = a;
     if (cb < c) return c;
     if (cb > e) return e;
     for (; c < e;) {
      t = ((M * cb + n) * cb + J) * cb;
      if (Ea(t - a) < b) break;
      a > t ? c = cb : e = cb;
      cb = (e -
       c) / 2 + c
     }
     return cb
    }
    var J = 3 * b,
     n = 3 * (e - b) - J,
     M = 1 - J - n,
     f = 3 * c,
     d = 3 * (t - c) - f,
     g = 1 - f - d;
    return function (a, b) {
     var c = w(a, b);
     return ((g * c + d) * c + f) * c
    }(a, 1 / (200 * h))
   }

   function g(a, b) {
    var c = [],
     e = {};
    this.ms = b;
    this.times = 1;
    if (a) {
     for (var t in a) a.hasOwnProperty(t) && (e[L(t)] = a[t], c.push(L(t)));
     c.sort(D)
    }
    this.anim = e;
    this.top = c[c.length - 1];
    this.percents = c
   }

   function f(a, c, t, w, M, f) {
    t = L(t);
    var d, g, S, k, R, u, l = a.ms,
     da = {},
     p = {},
     X = {};
    if (w)
     for (u = 0, s = Oa.length; u < s; u++) {
      var H = Oa[u];
      if (H.el.id == c.id && H.anim == a) {
       H.percent != t ? (Oa.splice(u, 1),
        S = 1) : g = H;
       c.attr(H.totalOrigin);
       break
      }
     }
    else w = +p;
    u = 0;
    for (var s = a.percents.length; u < s; u++)
     if (a.percents[u] == t || a.percents[u] > w * a.top) {
      t = a.percents[u];
      R = a.percents[u - 1] || 0;
      l = l / a.top * (t - R);
      k = a.percents[u + 1];
      d = a.anim[t];
      break
     }
     else w && c.attr(a.anim[a.percents[u]]);
    if (d) {
     if (g) g.initstatus = w, g.start = new Date - g.ms * w;
     else {
      for (var D in d)
       if (d.hasOwnProperty(D) && (G.hasOwnProperty(D) || c.ca[D])) switch (da[D] = c.attr(D), null == da[D] && (da[D] = h[D]), p[D] = d[D], G[D]) {
       case Q:
        X[D] = (p[D] - da[D]) / l;
        break;
       case "colour":
        da[D] =
         b.getRGB(da[D]);
        u = b.getRGB(p[D]);
        X[D] = {
         r: (u.r - da[D].r) / l,
         g: (u.g - da[D].g) / l,
         b: (u.b - da[D].b) / l
        };
        break;
       case "path":
        u = Ab(da[D], p[D]);
        H = u[1];
        da[D] = u[0];
        X[D] = [];
        u = 0;
        for (s = da[D].length; u < s; u++) {
         X[D][u] = [0];
         for (var ka = 1, r = da[D][u].length; ka < r; ka++) X[D][u][ka] = (H[u][ka] - da[D][u][ka]) / l
        }
        break;
       case "transform":
        u = c._;
        if (s = e(u[D], p[D]))
         for (da[D] = s.from, p[D] = s.to, X[D] = [], X[D].real = !0, u = 0, s = da[D].length; u < s; u++)
          for (X[D][u] = [da[D][u][0]], ka = 1, r = da[D][u].length; ka < r; ka++) X[D][u][ka] = (p[D][u][ka] - da[D][u][ka]) / l;
        else s =
         c.matrix || new v, u = {
          _: {
           transform: u.transform
          },
          getBBox: function () {
           return c.getBBox(1)
          }
         }, da[D] = [s.a, s.b, s.c, s.d, s.e, s.f], J(u, p[D]), p[D] = u._.transform, X[D] = [(u.matrix.a - s.a) / l, (u.matrix.b - s.b) / l, (u.matrix.c - s.c) / l, (u.matrix.d - s.d) / l, (u.matrix.e - s.e) / l, (u.matrix.f - s.f) / l];
        break;
       case "csv":
        s = n(d[D]).split(Ta);
        H = n(da[D]).split(Ta);
        if ("clip-rect" == D)
         for (da[D] = H, X[D] = [], u = H.length; u--;) X[D][u] = (s[u] - da[D][u]) / l;
        p[D] = s;
        break;
       default:
        for (s = [].concat(d[D]), H = [].concat(da[D]), X[D] = [], u = c.ca[D].length; u--;) X[D][u] =
         ((s[u] || 0) - (H[u] || 0)) / l
       }
      u = d.easing;
      D = b.easing_formulas[u];
      if (!D)
       if ((D = n(u).match(Wa)) && 5 == D.length) {
        var A = D;
        D = function (a) {
         return C(a, +A[1], +A[2], +A[3], +A[4], l)
        }
       }
       else D = ba;
      u = d.start || a.start || +new Date;
      H = {
       anim: a,
       percent: t,
       timestamp: u,
       start: u + (a.del || 0),
       status: 0,
       initstatus: w || 0,
       stop: !1,
       ms: l,
       easing: D,
       from: da,
       diff: X,
       to: p,
       el: c,
       callback: d.callback,
       prev: R,
       next: k,
       repeat: f || a.times,
       origin: c.attr(),
       totalOrigin: M
      };
      Oa.push(H);
      if (w && !g && !S && (H.stop = !0, H.start = new Date - l * w, 1 == Oa.length)) return ab();
      S && (H.start =
       new Date - H.ms * w);
      1 == Oa.length && pd(ab)
     }
     m("raphael.anim.start." + c.id, c, a)
    }
   }

   function l(a) {
    for (var b = 0; b < Oa.length; b++) Oa[b].el.paper == a && Oa.splice(b--, 1)
   }
   b.upgrade = "1.0.0";
   b.version = "2.1.0";
   b.eve = m;
   z = b;
   var p, F = "apply",
    Q = "number",
    k = "array",
    B = Array.prototype.slice,
    A = Array.prototype.splice,
    W = function () {
     return function () {}.hasOwnProperty("prototype")
    }(),
    r = {
     doc: document,
     win: d
    },
    oa = Object.prototype.hasOwnProperty.call(r.win, "Raphael"),
    ga = r.win.Raphael,
    $ = r.doc,
    V = r.win,
    ta = b.supportsTouch = "createTouch" in $,
    za =
    b.supportsOnlyTouch = ta && !(V.navigator.maxTouchPoints || V.navigator.msMaxTouchPoints),
    Aa = function () {};
   b.ca = b.customAttributes = Aa.prototype;
   var Z = function () {
     this.ca = this.customAttributes = new Aa;
     this._CustomAttributes = function () {};
     this._CustomAttributes.prototype = this.ca;
     this._elementsById = {};
     this.id = b._oid++;
     m("raphael.new", this)
    },
    U = b.fn = Z.prototype = b.prototype,
    na = {
     circle: 1,
     rect: 1,
     path: 1,
     ellipse: 1,
     text: 1,
     image: 1,
     group: 1
    },
    H = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel dragstart dragmove dragend".split(" "),
    T = b._touchMap = {
     mousedown: "touchstart",
     mousemove: "touchmove",
     mouseup: "touchend"
    },
    fa = b._dragEventMap = {
     dragstart: "mousedown",
     dragmove: "mousemove",
     dragend: "mouseup"
    },
    n = V.String,
    L = V.parseFloat,
    ca = V.parseInt,
    aa = V.Math,
    sa = aa.max,
    Y = aa.min,
    Ea = aa.abs,
    la = aa.pow,
    ya = aa.cos,
    Ia = aa.sin,
    ma = aa.sqrt,
    Ma = aa.round,
    pa = aa.PI,
    qa = pa / 180,
    La = 180 / pa,
    Ya = n.prototype.toLowerCase,
    ib = n.prototype.toUpperCase,
    Ja = V.Object.prototype.toString,
    Ta = /[, ]+/,
    Na = /\{(\d+)\}/g;
   b._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i;
   var sb = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
    Wa = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    Ga = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    Sb = /,?([achlmqrstvxz]),?/gi,
    Qb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    Fb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    jb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;
   b._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/;
   var yb = {
     NaN: 1,
     Infinity: 1,
     "-Infinity": 1
    },
    kb = {
     hs: 1,
     rg: 1
    },
    h = b._availableAttrs = {
     "arrow-end": "none",
     "arrow-start": "none",
     blur: 0,
     "clip-rect": "0 0 1e9 1e9",
     "clip-path": "",
     cursor: "default",
     cx: 0,
     cy: 0,
     fill: "#fff",
     "fill-opacity": 1,
     font: '10px "Arial"',
     "font-family": '"Arial"',
     "font-size": "10",
     "font-style": "normal",
     "font-weight": 400,
     gradient: 0,
     height: 0,
     href: "about:blank",
     "letter-spacing": 0,
     "line-height": 12,
     "vertical-align": "middle",
     opacity: 1,
     path: "M0,0",
     r: 0,
     rx: 0,
     ry: 0,
     src: "",
     stroke: "#000",
     "stroke-dasharray": "",
     "stroke-linecap": "butt",
     "stroke-linejoin": "butt",
     "stroke-miterlimit": 0,
     "stroke-opacity": 1,
     "stroke-width": 1,
     target: "_blank",
     "text-anchor": "middle",
     visibility: "",
     title: "",
     transform: "",
     rotation: 0,
     width: 0,
     x: 0,
     y: 0
    },
    G = b._availableAnimAttrs = {
     blur: Q,
     "clip-rect": "csv",
     "clip-path": "path",
     cx: Q,
     cy: Q,
     fill: "colour",
     "fill-opacity": Q,
     "font-size": Q,
     height: Q,
     opacity: Q,
     path: "path",
     r: Q,
     rx: Q,
     ry: Q,
     stroke: "colour",
     "stroke-opacity": Q,
     "stroke-width": Q,
     transform: "transform",
     width: Q,
     x: Q,
     y: Q
    },
    u = {},
    D = function (a, b) {
     return L(a) - L(b)
    },
    N = function () {},
    ba = function (a) {
     return a
    },
    ha = b._rectPath = function (a, b, c, e, t) {
     return t ? [["M", a + t, b], ["l", c - 2 * t, 0], ["a", t, t, 0, 0, 1, t, t], ["l", 0, e - 2 * t], ["a", t, t, 0, 0, 1, -t, t], ["l", 2 * t - c, 0], ["a", t, t, 0, 0, 1, -t, -t], ["l", 0, 2 * t - e], ["a", t, t, 0, 0, 1, t, -t], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, e], ["l", -c, 0], ["z"]]
    },
    ra = function (a, b, c, e) {
     null == e && (e = c);
     return [["M", a, b], ["m", 0, -e], ["a", c, e, 0, 1, 1, 0, 2 * e], ["a", c, e, 0, 1, 1, 0, -2 * e], ["z"]]
    },
    ua = b._getPath = {
     group: function () {
      return !1
     },
     path: function (a) {
      return a.attr("path")
     },
     circle: function (a) {
      a = a.attrs;
      return ra(a.cx, a.cy, a.r)
     },
     ellipse: function (a) {
      a = a.attrs;
      return ra(a.cx, a.cy, a.rx, a.ry)
     },
     rect: function (a) {
      a = a.attrs;
      return ha(a.x, a.y, a.width, a.height, a.r)
     },
     image: function (a) {
      a = a.attrs;
      return ha(a.x, a.y, a.width, a.height)
     },
     text: function (a) {
      a = a._getBBox();
      return ha(a.x, a.y, a.width, a.height)
     }
    },
    ja = b.mapPath = function (a, b) {
     if (!b) return a;
     var c, e, t, h, w, J, n;
     a = Ab(a);
     t = 0;
     for (w = a.length; t < w; t++)
      for (n = a[t], h = 1, J = n.length; h < J; h += 2) c = b.x(n[h],
       n[h + 1]), e = b.y(n[h], n[h + 1]), n[h] = c, n[h + 1] = e;
     return a
    };
   b.pick = function () {
    for (var a, b = 0, c = arguments.length; b < c; b += 1)
     if ((a = arguments[b]) || !1 === a || 0 === a) return a
   };
   var Ha = b._lastArgIfGroup = function (a, c) {
     var e = a.length - 1,
      t = a[e];
     if (t && t.constructor === b.el.constructor && "group" === t.type) return c && (a[e] = void 0, delete a[e], A.call(a, e, 1)), t
    },
    Ba = b._serializeArgs = function (a) {
     var c = a[0],
      e, t;
     if (b.is(c, "object") && !b.is(c, "array") && "group" !== c.type)
      for (e = c, c.path && (c = c.path) && !b.is(c, "string") && b.is(c[0], k), c = 1, t = arguments.length; c <
       t; c += 2) e[arguments[c]] || (e[arguments[c]] = arguments[c + 1]);
     else
      for (e = {}, c = 1, t = arguments.length; c < t; c += 2) e[arguments[c]] = a[(c - 1) / 2] || arguments[c + 1];
     return e
    },
    xa = b.merge = function (a, b, c, e, t) {
     var h, w, J, n;
     t ? (e.push(a), t.push(b)) : (e = [a], t = [b]);
     if (b instanceof Array)
      for (h = 0; h < b.length; h += 1) {
       try {
        w = a[h], J = b[h]
       }
       catch (M) {
        continue
       }
       if ("object" !== typeof J) c && void 0 === J || (a[h] = J);
       else {
        if (null === w || "object" !== typeof w) w = a[h] = J instanceof Array ? [] : {};
        n = checkCyclicRef(J, t); - 1 !== n ? w = a[h] = e[n] : xa(w, J, c, e, t)
       }
      }
     else
      for (h in b) {
       try {
        w =
         a[h], J = b[h]
       }
       catch (f) {
        continue
       }
       if (null !== J && "object" === typeof J)
        if (n = Ja.call(J), "[object Object]" === n) {
         if (null === w || "object" !== typeof w) w = a[h] = {};
         n = checkCyclicRef(J, t); - 1 !== n ? w = a[h] = e[n] : xa(w, J, c, e, t)
        }
        else "[object Array]" === n ? (null !== w && w instanceof Array || (w = a[h] = []), n = checkCyclicRef(J, t), -1 !== n ? w = a[h] = e[n] : xa(w, J, c, e, t)) : a[h] = J;
       else a[h] = J
      }
     return a
    };
   b.extend = function (a, b, c) {
    if ("object" !== typeof a && "object" !== typeof b) return null;
    if ("object" !== typeof b || null === b) return a;
    "object" !== typeof a && (a = b instanceof Array ? [] : {});
    xa(a, b, c);
    return a
   };
   var Ka = b.is = function (a, b) {
    b = Ya.call(b);
    return "finite" == b ? !yb.hasOwnProperty(+a) : b == k ? a instanceof Array : "object" !== b || void 0 !== a && null !== a ? "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || Ja.call(a).slice(8, -1).toLowerCase() == b : !1
   };
   b.createUUID = function (a, b) {
    return function () {
     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
    }
   }(/[xy]/g, function (a) {
    var b = 16 * aa.random() | 0;
    return ("x" ==
     a ? b : b & 3 | 8).toString(16)
   });
   var eb = b.clone = W ? function (a) {
    if (Object(a) !== a) return a;
    var b = new a.constructor,
     c;
    for (c in a) "prototype" !== c && a.hasOwnProperty(c) && (b[c] = eb(a[c]));
    return b
   } : function (a) {
    if (Object(a) !== a) return a;
    var b = new a.constructor,
     c;
    for (c in a) a.hasOwnProperty(c) && (b[c] = eb(a[c]));
    return b
   };
   b._g = r;
   b.type = V.ENABLE_RED_CANVAS && (V.CanvasRenderingContext2D || $.createElement("canvas").getContext) ? "CANVAS" : V.SVGAngle || $.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
    "1.1") ? "SVG" : "VML";
   if ("VML" == b.type) {
    var ia = $.createElement("div"),
     Da;
    ia.innerHTML = '<v:shape adj="1"/>';
    Da = ia.firstChild;
    Da.style.behavior = "url(#default#VML)";
    if (!Da || "object" != typeof Da.adj) return b.type = "";
    ia = null
   }
   b.svg = !((b.vml = "VML" == b.type) || (b.canvas = "CANVAS" == b.type));
   b._Paper = Z;
   b._id = 0;
   b._oid = 0;
   b.angle = function (a, c, e, t, h, w) {
    return null == h ? (a -= e, c -= t, a || c ? (aa.atan2(-c, -a) * La + 540) % 360 : 0) : b.angle(a, c, h, w) - b.angle(e, t, h, w)
   };
   b.rad = function (a) {
    return a % 360 * qa
   };
   b.deg = function (a) {
    return a * La % 360
   };
   b.snapTo = function (a, b, c) {
    var e;
    Ka(c, "finite") || (c = 10);
    if (Ka(a, k))
     for (e = a.length; e--;) {
      if (Ea(a[e] - b) <= c) return a[e]
     }
    else {
     a = +a;
     e = b % a;
     if (e < c) return b - e;
     if (e > a - c) return b - e + a
    }
    return b
   };
   b.setWindow = function (a) {
    m("raphael.setWindow", b, r.win, a);
    V = r.win = a;
    $ = r.doc = r.win.document;
    b._engine.initWin && b._engine.initWin(r.win)
   };
   var fb = function (a) {
     if (b.vml) {
      var c = /^\s+|\s+$/g,
       e;
      try {
       var t = new ActiveXObject("htmlfile");
       t.write("<body>");
       t.close();
       e = t.body
      }
      catch (h) {
       e = createPopup().document.body
      }
      var w = e.createTextRange();
      fb = ea(function (a) {
       try {
        e.style.color = n(a).replace(c, "");
        var b = w.queryCommandValue("ForeColor");
        return "#" + ("000000" + ((b & 255) << 16 | b & 65280 | (b & 16711680) >>> 16).toString(16)).slice(-6)
       }
       catch (t) {
        return "none"
       }
      })
     }
     else {
      var J = r.doc.createElement("i");
      J.title = "Raphaël Colour Picker";
      J.style.display = "none";
      r.doc.body.appendChild(J);
      fb = ea(function (a) {
       J.style.color = a;
       return r.doc.defaultView.getComputedStyle(J, "").getPropertyValue("color")
      })
     }
     return fb(a)
    },
    Pa = function () {
     return "hsb(" + [this.h, this.s, this.b] + ")"
    },
    Oc =
    function () {
     return "hsl(" + [this.h, this.s, this.l] + ")"
    },
    nb = function () {
     return this.hex
    },
    Mb = function (a, c, e) {
     null == c && Ka(a, "object") && "r" in a && "g" in a && "b" in a && (e = a.b, c = a.g, a = a.r);
     null == c && Ka(a, "string") && (e = b.getRGB(a), a = e.r, c = e.g, e = e.b);
     if (1 < a || 1 < c || 1 < e) a /= 255, c /= 255, e /= 255;
     return [a, c, e]
    },
    bb = function (a, c, e, t) {
     var h = {
      r: a *= 255,
      g: c *= 255,
      b: e *= 255,
      hex: b.rgb(a, c, e),
      toString: nb
     };
     Ka(t, "finite") && (h.opacity = t);
     return h
    };
   b.color = function (a) {
    var c;
    b.is(a, "object") && "h" in a && "s" in a && "b" in a ? (c = b.hsb2rgb(a), a.r =
     c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : b.is(a, "object") && "h" in a && "s" in a && "l" in a ? (c = b.hsl2rgb(a), a.r = c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : (b.is(a, "string") && (a = b.getRGB(a)), b.is(a, "object") && "r" in a && "g" in a && "b" in a ? (c = b.rgb2hsl(a), a.h = c.h, a.s = c.s, a.l = c.l, c = b.rgb2hsb(a), a.v = c.b) : (a = {
     hex: "none"
    }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1));
    a.toString = nb;
    return a
   };
   b.hsb2rgb = function (a, b, c, e) {
    this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, e = a.o);
    var t, h, w;
    a = 360 * a % 360 / 60;
    w = c * b;
    b = w * (1 - Ea(a % 2 - 1));
    c = t =
     h = c - w;
    a = ~~a;
    c += [w, b, 0, 0, b, w][a];
    t += [b, w, w, b, 0, 0][a];
    h += [0, 0, b, w, w, b][a];
    return bb(c, t, h, e)
   };
   b.hsl2rgb = function (a, b, c, e) {
    this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h);
    if (1 < a || 1 < b || 1 < c) a /= 360, b /= 100, c /= 100;
    var t, h, w;
    a = 360 * a % 360 / 60;
    w = 2 * b * (.5 > c ? c : 1 - c);
    b = w * (1 - Ea(a % 2 - 1));
    c = t = h = c - w / 2;
    a = ~~a;
    c += [w, b, 0, 0, b, w][a];
    t += [b, w, w, b, 0, 0][a];
    h += [0, 0, b, w, w, b][a];
    return bb(c, t, h, e)
   };
   b.rgb2hsb = function (a, b, c) {
    c = Mb(a, b, c);
    a = c[0];
    b = c[1];
    c = c[2];
    var e, t;
    e = sa(a, b, c);
    t = e - Y(a, b, c);
    a = ((0 == t ? null : e == a ? (b - c) /
     t : e == b ? (c - a) / t + 2 : (a - b) / t + 4) + 360) % 6 * 60 / 360;
    return {
     h: a,
     s: 0 == t ? 0 : t / e,
     b: e,
     toString: Pa
    }
   };
   b.rgb2hsl = function (a, b, c) {
    c = Mb(a, b, c);
    a = c[0];
    b = c[1];
    c = c[2];
    var e, t, h;
    e = sa(a, b, c);
    t = Y(a, b, c);
    h = e - t;
    a = ((0 == h ? null : e == a ? (b - c) / h : e == b ? (c - a) / h + 2 : (a - b) / h + 4) + 360) % 6 * 60 / 360;
    e = (e + t) / 2;
    return {
     h: a,
     s: 0 == h ? 0 : .5 > e ? h / (2 * e) : h / (2 - 2 * e),
     l: e,
     toString: Oc
    }
   };
   b._path2string = function () {
    return this.join(",").replace(Sb, "$1")
   };
   var ea = b._cacher = function (a, b, c) {
    function e() {
     var t = B.call(arguments, 0),
      h = t.join("␀"),
      w = e.cache = e.cache || {},
      J = e.count =
      e.count || [];
     if (w.hasOwnProperty(h)) {
      a: for (var t = J, J = h, n = 0, M = t.length; n < M; n++)
       if (t[n] === J) {
        t.push(t.splice(n, 1)[0]);
        break a
       }return c ? c(w[h]) : w[h]
     }
     1E3 <= J.length && delete w[J.shift()];
     J.push(h);
     w[h] = a[F](b, t);
     return c ? c(w[h]) : w[h]
    }
    return e
   };
   b._preload = function (a, b) {
    var c = $.createElement("img");
    c.style.cssText = "position:absolute;left:-9999em;top:-9999em";
    c.onload = function () {
     b.call(this);
     this.onload = null;
     $.body.removeChild(this)
    };
    c.onerror = function () {
     $.body.removeChild(this)
    };
    $.body.appendChild(c);
    c.src =
     a
   };
   b.getRGB = ea(function (a) {
    var c, e, t, h, w;
    a && Ka(a, "object") && "opacity" in a && (c = a.opacity);
    if (!a || (a = n(a)).indexOf("-") + 1) return {
     r: -1,
     g: -1,
     b: -1,
     hex: "none",
     error: 1,
     toString: K
    };
    if ("none" == a) return {
     r: -1,
     g: -1,
     b: -1,
     hex: "none",
     toString: K
    };
    !kb.hasOwnProperty(a.toLowerCase().substring(0, 2)) && "#" !== a.charAt() && (a = fb(a));
    if (a = a.match(sb)) {
     a[2] && (h = ca(a[2].substring(5), 16), t = ca(a[2].substring(3, 5), 16), e = ca(a[2].substring(1, 3), 16));
     a[3] && (h = ca((w = a[3].charAt(3)) + w, 16), t = ca((w = a[3].charAt(2)) + w, 16), e = ca((w = a[3].charAt(1)) +
      w, 16));
     a[4] && (w = a[4].split(Ga), e = L(w[0]), "%" == w[0].slice(-1) && (e *= 2.55), t = L(w[1]), "%" == w[1].slice(-1) && (t *= 2.55), h = L(w[2]), "%" == w[2].slice(-1) && (h *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (c = L(w[3])), w[3] && "%" == w[3].slice(-1) && (c /= 100));
     if (a[5]) return w = a[5].split(Ga), e = L(w[0]), "%" == w[0].slice(-1) && (e *= 2.55), t = L(w[1]), "%" == w[1].slice(-1) && (t *= 2.55), h = L(w[2]), "%" == w[2].slice(-1) && (h *= 2.55), "deg" != w[0].slice(-3) && "°" != w[0].slice(-1) || (e /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (c = L(w[3])),
      w[3] && "%" == w[3].slice(-1) && (c /= 100), b.hsb2rgb(e, t, h, c);
     if (a[6]) return w = a[6].split(Ga), e = L(w[0]), "%" == w[0].slice(-1) && (e *= 2.55), t = L(w[1]), "%" == w[1].slice(-1) && (t *= 2.55), h = L(w[2]), "%" == w[2].slice(-1) && (h *= 2.55), "deg" != w[0].slice(-3) && "°" != w[0].slice(-1) || (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (c = L(w[3])), w[3] && "%" == w[3].slice(-1) && (c /= 100), b.hsl2rgb(e, t, h, c);
     a = {
      r: e,
      g: t,
      b: h,
      toString: K
     };
     a.hex = "#" + (16777216 | h | t << 8 | e << 16).toString(16).slice(1);
     b.is(c, "finite") && (a.opacity = c);
     return a
    }
    return {
     r: -1,
     g: -1,
     b: -1,
     hex: "none",
     error: 1,
     toString: K
    }
   }, b);
   b.tintshade = ea(function (a, c) {
    var e = b.getRGB(a),
     t;
    t = 255;
    0 > c && (c *= -1, t = 0);
    1 < c && (c = 1);
    t = 0 === c ? e : {
     r: t - (t - e.r) * c,
     g: t - (t - e.g) * c,
     b: t - (t - e.b) * c,
     toString: K
    };
    t.hex = b.rgb(t.r, t.g, t.b);
    e.error && (t.error = e.error);
    "opacity" in e ? (t.rgba = "rgba(" + [t.r, t.g, t.b, e.opacity].join() + ")", t.opacity = e.opacity) : t.rgba = "rgb(" + [t.r, t.g, t.b].join() + ")";
    return t
   }, b);
   b.hsb = ea(function (a, c, e) {
    return b.hsb2rgb(a, c, e).hex
   });
   b.hsl = ea(function (a, c, e) {
    return b.hsl2rgb(a, c, e).hex
   });
   b.rgb = ea(function (a,
    b, c) {
    return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
   });
   b.getColor = function (a) {
    a = this.getColor.start = this.getColor.start || {
     h: 0,
     s: 1,
     b: a || .75
    };
    var b = this.hsb2rgb(a.h, a.s, a.b);
    a.h += .075;
    1 < a.h && (a.h = 0, a.s -= .2, 0 >= a.s && (this.getColor.start = {
     h: 0,
     s: 1,
     b: a.b
    }));
    return b.hex
   };
   b.getColor.reset = function () {
    delete this.start
   };
   b.parsePathString = function (a) {
    if (!a) return null;
    var c = xb(a);
    if (c.arr) return P(c.arr);
    var e = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      r: 4,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
     },
     t = [];
    b.is(a, k) && b.is(a[0], k) && (t = P(a));
    t.length ||
     n(a).replace(Qb, function (a, b, c) {
      var h = [];
      a = b.toLowerCase();
      c.replace(jb, function (a, b) {
       b && h.push(+b)
      });
      "m" == a && 2 < h.length && (t.push([b].concat(h.splice(0, 2))), a = "l", b = "m" == b ? "l" : "L");
      if ("r" == a) t.push([b].concat(h));
      else
       for (; h.length >= e[a] && (t.push([b].concat(h.splice(0, e[a]))), e[a]););
     });
    t.toString = b._path2string;
    c.arr = P(t);
    return t
   };
   b.parseTransformString = ea(function (a) {
    if (!a) return null;
    var c = [];
    b.is(a, k) && b.is(a[0], k) && (c = P(a));
    c.length || n(a).replace(Fb, function (a, b, e) {
     var t = [];
     Ya.call(b);
     e.replace(jb,
      function (a, b) {
       b && t.push(+b)
      });
     c.push([b].concat(t))
    });
    c.toString = b._path2string;
    return c
   });
   var xb = function (a) {
    var b = xb.ps = xb.ps || {};
    b[a] ? b[a].sleep = 100 : b[a] = {
     sleep: 100
    };
    setTimeout(function () {
     for (var c in b) b.hasOwnProperty(c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
    });
    return b[a]
   };
   b.findDotsAtSegment = function (a, b, c, e, t, h, w, J, n) {
    var M = 1 - n,
     f = la(M, 3),
     d = la(M, 2),
     g = n * n,
     u = g * n,
     S = f * a + 3 * d * n * c + 3 * M * n * n * t + u * w,
     f = f * b + 3 * d * n * e + 3 * M * n * n * h + u * J,
     d = a + 2 * n * (c - a) + g * (t - 2 * c + a),
     u = b + 2 * n * (e - b) + g * (h - 2 * e + b),
     k = c + 2 * n * (t - c) + g *
     (w - 2 * t + c),
     g = e + 2 * n * (h - e) + g * (J - 2 * h + e);
    a = M * a + n * c;
    b = M * b + n * e;
    t = M * t + n * w;
    h = M * h + n * J;
    J = 90 - 180 * aa.atan2(d - k, u - g) / pa;
    (d > k || u < g) && (J += 180);
    return {
     x: S,
     y: f,
     m: {
      x: d,
      y: u
     },
     n: {
      x: k,
      y: g
     },
     start: {
      x: a,
      y: b
     },
     end: {
      x: t,
      y: h
     },
     alpha: J
    }
   };
   b.bezierBBox = function (a, c, e, t, h, w, J, n) {
    b.is(a, "array") || (a = [a, c, e, t, h, w, J, n]);
    a = wa.apply(null, a);
    return {
     x: a.min.x,
     y: a.min.y,
     x2: a.max.x,
     y2: a.max.y,
     width: a.max.x - a.min.x,
     height: a.max.y - a.min.y
    }
   };
   b.isPointInsideBBox = function (a, b, c) {
    return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
   };
   b.isBBoxIntersect = function (a,
    c) {
    var e = b.isPointInsideBBox;
    return e(c, a.x, a.y) || e(c, a.x2, a.y) || e(c, a.x, a.y2) || e(c, a.x2, a.y2) || e(a, c.x, c.y) || e(a, c.x2, c.y) || e(a, c.x, c.y2) || e(a, c.x2, c.y2) || (a.x < c.x2 && a.x > c.x || c.x < a.x2 && c.x > a.x) && (a.y < c.y2 && a.y > c.y || c.y < a.y2 && c.y > a.y)
   };
   b.pathIntersection = function (b, c) {
    return a(b, c)
   };
   b.pathIntersectionNumber = function (b, c) {
    return a(b, c, 1)
   };
   b.isPointInsidePath = function (c, e, t) {
    var h = b.pathBBox(c);
    return b.isPointInsideBBox(h, e, t) && (1 == a(c, [["M", e, t], ["H", h.x2 + 10]], 1) % 2 || 1 == a(c, [["M", e, t], ["V", h.y2 + 10]],
     1) % 2)
   };
   b._removedFactory = function (a) {
    return function () {
     m("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
    }
   };
   var Zb = b.pathBBox = function (a) {
     var b = xb(a);
     if (b.bbox) return b.bbox;
     if (!a) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      x2: 0,
      y2: 0
     };
     a = Ab(a);
     for (var c = 0, e = 0, t = [], h = [], w, J = 0, n = a.length; J < n; J++) w = a[J], "M" == w[0] ? (c = w[1], e = w[2], t.push(c), h.push(e)) : (c = wa(c, e, w[1], w[2], w[3], w[4], w[5], w[6]), t = t.concat(c.min.x, c.max.x), h = h.concat(c.min.y, c.max.y), c = w[5], e = w[6]);
     a = Y[F](0, t);
     w = Y[F](0,
      h);
     t = sa[F](0, t);
     h = sa[F](0, h);
     h = {
      x: a,
      y: w,
      x2: t,
      y2: h,
      width: t - a,
      height: h - w
     };
     b.bbox = eb(h);
     return h
    },
    P = function (a) {
     a = eb(a);
     a.toString = b._path2string;
     return a
    },
    Rb = b._pathToRelative = function (a) {
     var c = xb(a);
     if (c.rel) return P(c.rel);
     b.is(a, k) && b.is(a && a[0], k) || (a = b.parsePathString(a));
     var e = [],
      t = 0,
      h = 0,
      w = 0,
      J = 0,
      n = 0;
     "M" == a[0][0] && (t = a[0][1], h = a[0][2], w = t, J = h, n++, e.push(["M", t, h]));
     for (var M = a.length; n < M; n++) {
      var f = e[n] = [],
       d = a[n];
      if (d[0] != Ya.call(d[0])) switch (f[0] = Ya.call(d[0]), f[0]) {
      case "a":
       f[1] = d[1];
       f[2] = d[2];
       f[3] = d[3];
       f[4] = d[4];
       f[5] = d[5];
       f[6] = +(d[6] - t).toFixed(3);
       f[7] = +(d[7] - h).toFixed(3);
       break;
      case "v":
       f[1] = +(d[1] - h).toFixed(3);
       break;
      case "m":
       w = d[1], J = d[2];
      default:
       for (var g = 1, u = d.length; g < u; g++) f[g] = +(d[g] - (g % 2 ? t : h)).toFixed(3)
      }
      else
       for (e[n] = [], "m" == d[0] && (w = d[1] + t, J = d[2] + h), f = 0, g = d.length; f < g; f++) e[n][f] = d[f];
      d = e[n].length;
      switch (e[n][0]) {
      case "z":
       t = w;
       h = J;
       break;
      case "h":
       t += +e[n][d - 1];
       break;
      case "v":
       h += +e[n][d - 1];
       break;
      default:
       t += +e[n][d - 2], h += +e[n][d - 1]
      }
     }
     e.toString = b._path2string;
     c.rel = P(e);
     return e
    },
    Jb = b._pathToAbsolute = function (a) {
     var c = xb(a),
      e;
     if (c.abs) return P(c.abs);
     b.is(a, k) && b.is(a && a[0], k) || (a = b.parsePathString(a));
     if (!a || !a.length) return e = ["M", 0, 0], e.toString = b._path2string, e;
     var t = 0,
      h = 0,
      w = 0,
      J = 0,
      n = 0;
     e = [];
     "M" == a[0][0] && (t = +a[0][1], h = +a[0][2], w = t, J = h, n++, e[0] = ["M", t, h]);
     for (var M = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), f, d = n, g = a.length; d < g; d++) {
      e.push(n = []);
      f = a[d];
      if (f[0] != ib.call(f[0])) switch (n[0] = ib.call(f[0]), n[0]) {
      case "A":
       n[1] = f[1];
       n[2] = f[2];
       n[3] = f[3];
       n[4] = f[4];
       n[5] = f[5];
       n[6] = +(f[6] + t);
       n[7] = +(f[7] + h);
       break;
      case "V":
       n[1] = +f[1] + h;
       break;
      case "H":
       n[1] = +f[1] + t;
       break;
      case "R":
       for (var u = [t, h].concat(f.slice(1)), S = 2, R = u.length; S < R; S++) u[S] = +u[S] + t, u[++S] = +u[S] + h;
       e.pop();
       e = e.concat(I(u, M));
       break;
      case "M":
       w = +f[1] + t, J = +f[2] + h;
      default:
       for (S = 1, R = f.length; S < R; S++) n[S] = +f[S] + (S % 2 ? t : h)
      }
      else if ("R" == f[0]) u = [t, h].concat(f.slice(1)), e.pop(), e = e.concat(I(u, M)), n = ["R"].concat(f.slice(-2));
      else
       for (u = 0, S = f.length; u < S; u++) n[u] = f[u];
      switch (n[0]) {
      case "Z":
       t =
        w;
       h = J;
       break;
      case "H":
       t = n[1];
       break;
      case "V":
       h = n[1];
       break;
      case "M":
       w = n[n.length - 2], J = n[n.length - 1];
      default:
       t = n[n.length - 2], h = n[n.length - 1]
      }
     }
     e.toString = b._path2string;
     c.abs = P(e);
     return e
    },
    $a = function (a, b, c, e) {
     return [a, b, c, e, c, e]
    },
    ub = function (a, b, c, e, t, h) {
     var w = 1 / 3,
      n = 2 / 3;
     return [w * a + n * c, w * b + n * e, w * t + n * c, w * h + n * e, t, h]
    },
    Ra = function (a, b, c, e, t, h, w, n, J, f) {
     var M = 120 * pa / 180,
      d = qa * (+t || 0),
      g = [],
      u, S = ea(function (a, b, c) {
       var e = a * ya(c) - b * Ia(c);
       a = a * Ia(c) + b * ya(c);
       return {
        x: e,
        y: a
       }
      });
     if (f) l = f[0], u = f[1], h = f[2], k = f[3];
     else {
      u =
       S(a, b, -d);
      a = u.x;
      b = u.y;
      u = S(n, J, -d);
      n = u.x;
      J = u.y;
      ya(qa * t);
      Ia(qa * t);
      u = (a - n) / 2;
      l = (b - J) / 2;
      k = u * u / (c * c) + l * l / (e * e);
      1 < k && (k = ma(k), c *= k, e *= k);
      var k = c * c,
       R = e * e,
       k = (h == w ? -1 : 1) * ma(Ea((k * R - k * l * l - R * u * u) / (k * l * l + R * u * u)));
      h = k * c * l / e + (a + n) / 2;
      var k = k * -e * u / c + (b + J) / 2,
       l = aa.asin(((b - k) / e).toFixed(9));
      u = aa.asin(((J - k) / e).toFixed(9));
      l = a < h ? pa - l : l;
      u = n < h ? pa - u : u;
      0 > l && (l = 2 * pa + l);
      0 > u && (u = 2 * pa + u);
      w && l > u && (l -= 2 * pa);
      !w && u > l && (u -= 2 * pa)
     }
     if (Ea(u - l) > M) {
      var g = u,
       R = n,
       da = J;
      u = l + M * (w && u > l ? 1 : -1);
      n = h + c * ya(u);
      J = k + e * Ia(u);
      g = Ra(n, J, c, e, t, 0, w, R, da, [u,
g, h, k])
     }
     h = u - l;
     t = ya(l);
     M = Ia(l);
     w = ya(u);
     u = Ia(u);
     h = aa.tan(h / 4);
     c = 4 / 3 * c * h;
     h *= 4 / 3 * e;
     e = [a, b];
     a = [a + c * M, b - h * t];
     b = [n + c * u, J - h * w];
     n = [n, J];
     a[0] = 2 * e[0] - a[0];
     a[1] = 2 * e[1] - a[1];
     if (f) return [a, b, n].concat(g);
     g = [a, b, n].concat(g).join().split(",");
     f = [];
     n = 0;
     for (J = g.length; n < J; n++) f[n] = n % 2 ? S(g[n - 1], g[n], d).y : S(g[n], g[n + 1], d).x;
     return f
    },
    Tb = function (a, b, c, e, t, h, w, n, J) {
     var f = 1 - J;
     return {
      x: la(f, 3) * a + 3 * la(f, 2) * J * c + 3 * f * J * J * t + la(J, 3) * w,
      y: la(f, 3) * b + 3 * la(f, 2) * J * e + 3 * f * J * J * h + la(J, 3) * n
     }
    },
    wa = ea(function (a, b, c, e, t, h, w, n) {
     var J = t - 2 *
      c + a - (w - 2 * t + c),
      f = 2 * (c - a) - 2 * (t - c),
      M = a - c,
      d = (-f + ma(f * f - 4 * J * M)) / 2 / J,
      J = (-f - ma(f * f - 4 * J * M)) / 2 / J,
      g = [b, n],
      u = [a, w];
     "1e12" < Ea(d) && (d = .5);
     "1e12" < Ea(J) && (J = .5);
     0 < d && 1 > d && (d = Tb(a, b, c, e, t, h, w, n, d), u.push(d.x), g.push(d.y));
     0 < J && 1 > J && (d = Tb(a, b, c, e, t, h, w, n, J), u.push(d.x), g.push(d.y));
     J = h - 2 * e + b - (n - 2 * h + e);
     f = 2 * (e - b) - 2 * (h - e);
     M = b - e;
     d = (-f + ma(f * f - 4 * J * M)) / 2 / J;
     J = (-f - ma(f * f - 4 * J * M)) / 2 / J;
     "1e12" < Ea(d) && (d = .5);
     "1e12" < Ea(J) && (J = .5);
     0 < d && 1 > d && (d = Tb(a, b, c, e, t, h, w, n, d), u.push(d.x), g.push(d.y));
     0 < J && 1 > J && (d = Tb(a, b, c, e, t, h, w, n, J), u.push(d.x),
      g.push(d.y));
     return {
      min: {
       x: Y[F](0, u),
       y: Y[F](0, g)
      },
      max: {
       x: sa[F](0, u),
       y: sa[F](0, g)
      }
     }
    }),
    Ab = b._path2curve = ea(function (a, b) {
     var c = !b && xb(a);
     if (!b && c.curve) return P(c.curve);
     var e = Jb(a),
      t = b && Jb(b),
      h = {
       x: 0,
       y: 0,
       bx: 0,
       by: 0,
       X: 0,
       Y: 0,
       qx: null,
       qy: null
      },
      w = {
       x: 0,
       y: 0,
       bx: 0,
       by: 0,
       X: 0,
       Y: 0,
       qx: null,
       qy: null
      },
      n = function (a, b) {
       var c, e;
       if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
       a[0] in {
        T: 1,
        Q: 1
       } || (b.qx = b.qy = null);
       switch (a[0]) {
       case "M":
        b.X = a[1];
        b.Y = a[2];
        break;
       case "A":
        a = ["C"].concat(Ra[F](0, [b.x, b.y].concat(a.slice(1))));
        break;
       case "S":
        c =
         b.x + (b.x - (b.bx || b.x));
        e = b.y + (b.y - (b.by || b.y));
        a = ["C", c, e].concat(a.slice(1));
        break;
       case "T":
        b.qx = b.x + (b.x - (b.qx || b.x));
        b.qy = b.y + (b.y - (b.qy || b.y));
        a = ["C"].concat(ub(b.x, b.y, b.qx, b.qy, a[1], a[2]));
        break;
       case "Q":
        b.qx = a[1];
        b.qy = a[2];
        a = ["C"].concat(ub(b.x, b.y, a[1], a[2], a[3], a[4]));
        break;
       case "L":
        a = ["C"].concat($a(b.x, b.y, a[1], a[2]));
        break;
       case "H":
        a = ["C"].concat($a(b.x, b.y, a[1], b.y));
        break;
       case "V":
        a = ["C"].concat($a(b.x, b.y, b.x, a[1]));
        break;
       case "Z":
        a = ["C"].concat($a(b.x, b.y, b.X, b.Y))
       }
       return a
      },
      J = function (a,
       b) {
       if (7 < a[b].length) {
        a[b].shift();
        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
        a.splice(b, 1);
        d = sa(e.length, t && t.length || 0)
       }
      },
      f = function (a, b, c, h, w) {
       a && b && "M" == a[w][0] && "M" != b[w][0] && (b.splice(w, 0, ["M", h.x, h.y]), c.bx = 0, c.by = 0, c.x = a[w][1], c.y = a[w][2], d = sa(e.length, t && t.length || 0))
      },
      M = 0,
      d = sa(e.length, t && t.length || 0);
     for (; M < d; M++) {
      e[M] = n(e[M], h);
      J(e, M);
      t && (t[M] = n(t[M], w));
      t && J(t, M);
      f(e, t, h, w, M);
      f(t, e, w, h, M);
      var g = e[M],
       u = t && t[M],
       S = g.length,
       k = t && u.length;
      h.x = g[S - 2];
      h.y = g[S - 1];
      h.bx =
       L(g[S - 4]) || h.x;
      h.by = L(g[S - 3]) || h.y;
      w.bx = t && (L(u[k - 4]) || w.x);
      w.by = t && (L(u[k - 3]) || w.y);
      w.x = t && u[k - 2];
      w.y = t && u[k - 1]
     }
     t || (c.curve = P(e));
     return t ? [e, t] : e
    }, null, P);
   b._parseDots = ea(function (a) {
    for (var c = [], e = 0, t = a.length; e < t; e++) {
     var h = {},
      w = a[e].match(/^([^:]*):?([\d\.]*)/);
     h.color = b.getRGB(w[1]);
     if (h.color.error) return null;
     h.opacity = h.color.opacity;
     h.color = h.color.hex;
     w[2] && (h.offset = w[2] + "%");
     c.push(h)
    }
    e = 1;
    for (t = c.length - 1; e < t; e++)
     if (!c[e].offset) {
      a = L(c[e - 1].offset || 0);
      w = 0;
      for (h = e + 1; h < t; h++)
       if (c[h].offset) {
        w =
         c[h].offset;
        break
       }
      w || (w = 100, h = t);
      w = L(w);
      for (w = (w - a) / (h - e + 1); e < h; e++) a += w, c[e].offset = a + "%"
     }
    return c
   });
   var t = b._tear = function (a, b) {
    a == b.top && (b.top = a.prev);
    a == b.bottom && (b.bottom = a.next);
    a.next && (a.next.prev = a.prev);
    a.prev && (a.prev.next = a.next)
   };
   b._tofront = function (a, b) {
    if (b.top === a) return !1;
    t(a, b);
    a.next = null;
    a.prev = b.top;
    b.top.next = a;
    b.top = a;
    return !0
   };
   b._toback = function (a, b) {
    if (b.bottom === a) return !1;
    t(a, b);
    a.next = b.bottom;
    a.prev = null;
    b.bottom.prev = a;
    b.bottom = a;
    return !0
   };
   b._insertafter = function (a,
    b, c, e) {
    t(a, c);
    a.parent = e;
    b === e.top && (e.top = a);
    b.next && (b.next.prev = a);
    a.next = b.next;
    a.prev = b;
    b.next = a
   };
   b._insertbefore = function (a, b, c, e) {
    t(a, c);
    a.parent = e;
    b === e.bottom && (e.bottom = a);
    b.prev && (b.prev.next = a);
    a.prev = b.prev;
    b.prev = a;
    a.next = b
   };
   var w = b.toMatrix = function (a, b) {
    var c = Zb(a),
     e = {
      _: {
       transform: ""
      },
      getBBox: function () {
       return c
      }
     };
    J(e, b);
    return e.matrix
   };
   b.transformPath = function (a, b) {
    return ja(a, w(a, b))
   };
   var J = b._extractTransform = function (a, c) {
     if (null == c) return a._.transform;
     c = n(c).replace(/\.{3}|\u2026/g,
      a._.transform || "");
     var e = b.parseTransformString(c),
      t = 0,
      h = 0,
      w = 0,
      J = 1,
      f = 1,
      M = a._,
      w = new v;
     M.transform = e || [];
     if (e)
      for (var h = 0, d = e.length; h < d; h++) {
       var g = e[h],
        u = g.length,
        S = n(g[0]).toLowerCase(),
        k = g[0] != S,
        R = k ? w.invert() : 0,
        l;
       "t" == S && 3 == u ? k ? (u = R.x(0, 0), S = R.y(0, 0), k = R.x(g[1], g[2]), R = R.y(g[1], g[2]), w.translate(k - u, R - S)) : w.translate(g[1], g[2]) : "r" == S ? 2 == u ? (l = l || a.getBBox(1), w.rotate(g[1], l.x + l.width / 2, l.y + l.height / 2), t += g[1]) : 4 == u && (k ? (k = R.x(g[2], g[3]), R = R.y(g[2], g[3]), w.rotate(g[1], k, R)) : w.rotate(g[1], g[2], g[3]),
        t += g[1]) : "s" == S ? 2 == u || 3 == u ? (l = l || a.getBBox(1), w.scale(g[1], g[u - 1], l.x + l.width / 2, l.y + l.height / 2), J *= g[1], f *= g[u - 1]) : 5 == u && (k ? (k = R.x(g[3], g[4]), R = R.y(g[3], g[4]), w.scale(g[1], g[2], k, R)) : w.scale(g[1], g[2], g[3], g[4]), J *= g[1], f *= g[2]) : "m" == S && 7 == u && w.add(g[1], g[2], g[3], g[4], g[5], g[6]);
       M.dirtyT = 1;
       a.matrix = w
      }
     a.matrix = w;
     M.sx = J;
     M.sy = f;
     M.deg = t;
     M.dx = h = w.e;
     M.dy = w = w.f;
     1 == J && 1 == f && !t && M.bbox ? (M.bbox.x += +h, M.bbox.y += +w) : M.dirtyT = 1
    },
    M = function (a) {
     var b = a[0];
     switch (b.toLowerCase()) {
     case "t":
      return [b, 0, 0];
     case "m":
      return [b,
1, 0, 0, 1, 0, 0];
     case "r":
      return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
     case "s":
      return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
     }
    },
    e = b._equaliseTransform = function (a, c) {
     c = n(c).replace(/\.{3}|\u2026/g, a);
     a = b.parseTransformString(a) || [];
     c = b.parseTransformString(c) || [];
     for (var e = sa(a.length, c.length), t = [], h = [], w = 0, J, f, d, g; w < e; w++) {
      d = a[w] || M(c[w]);
      g = c[w] || M(d);
      if (d[0] != g[0] || "r" == d[0].toLowerCase() && (d[2] != g[2] || d[3] != g[3]) || "s" == d[0].toLowerCase() && (d[3] != g[3] || d[4] != g[4])) return;
      t[w] = [];
      h[w] = [];
      J = 0;
      for (f = sa(d.length, g.length); J < f; J++) J in d && (t[w][J] = d[J]), J in g && (h[w][J] = g[J])
     }
     return {
      from: t,
      to: h
     }
    };
   b._getContainer = function (a, c, e, t) {
    var h;
    h = null != t || b.is(a, "object") ? a : r.doc.getElementById(a);
    if (null != h) return h.tagName ? null == c ? {
     container: h,
     width: h.style.pixelWidth || h.offsetWidth,
     height: h.style.pixelHeight || h.offsetHeight
    } : {
     container: h,
     width: c,
     height: e
    } : {
     container: 1,
     x: a,
     y: c,
     width: e,
     height: t
    }
   };
   b.pathToRelative = Rb;
   b._engine = {};
   b.path2curve = Ab;
   b.matrix = function (a, b, c, e, t, h) {
    return new v(a, b,
     c, e, t, h)
   };
   (function (a) {
    function c(a) {
     return a[0] * a[0] + a[1] * a[1]
    }

    function e(a) {
     var b = ma(c(a));
     a[0] && (a[0] /= b);
     a[1] && (a[1] /= b)
    }
    a.add = function (a, b, c, e, t, h) {
     var w = [[], [], []],
      J = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]];
     b = [[a, c, t], [b, e, h], [0, 0, 1]];
     a && a instanceof v && (b = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]);
     for (a = 0; 3 > a; a++)
      for (c = 0; 3 > c; c++) {
       for (e = t = 0; 3 > e; e++) t += J[a][e] * b[e][c];
       w[a][c] = t
      }
     this.a = w[0][0];
     this.b = w[1][0];
     this.c = w[0][1];
     this.d = w[1][1];
     this.e = w[0][2];
     this.f = w[1][2]
    };
    a.invert = function () {
     var a =
      this.a * this.d - this.b * this.c;
     return new v(this.d / a, -this.b / a, -this.c / a, this.a / a, (this.c * this.f - this.d * this.e) / a, (this.b * this.e - this.a * this.f) / a)
    };
    a.clone = function () {
     return new v(this.a, this.b, this.c, this.d, this.e, this.f)
    };
    a.translate = function (a, b) {
     this.add(1, 0, 0, 1, a, b)
    };
    a.scale = function (a, b, c, e) {
     null == b && (b = a);
     (c || e) && this.add(1, 0, 0, 1, c, e);
     this.add(a, 0, 0, b, 0, 0);
     (c || e) && this.add(1, 0, 0, 1, -c, -e)
    };
    a.rotate = function (a, c, e) {
     a = b.rad(a);
     c = c || 0;
     e = e || 0;
     var t = +ya(a).toFixed(9);
     a = +Ia(a).toFixed(9);
     this.add(t,
      a, -a, t, c, e);
     this.add(1, 0, 0, 1, -c, -e)
    };
    a.x = function (a, b) {
     return a * this.a + b * this.c + this.e
    };
    a.y = function (a, b) {
     return a * this.b + b * this.d + this.f
    };
    a.get = function (a) {
     return +this[n.fromCharCode(97 + a)].toFixed(4)
    };
    a.toString = function () {
     return b.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
    };
    a.toMatrixString = function () {
     return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() +
      ")"
    };
    a.toFilter = function () {
     return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
    };
    a.offset = function () {
     return [this.e.toFixed(4), this.f.toFixed(4)]
    };
    a.split = function () {
     var a = {};
     a.dx = this.e;
     a.dy = this.f;
     var t = [[this.a, this.c], [this.b, this.d]];
     a.scalex = ma(c(t[0]));
     e(t[0]);
     a.shear = t[0][0] * t[1][0] + t[0][1] * t[1][1];
     t[1] = [t[1][0] - t[0][0] * a.shear, t[1][1] - t[0][1] *
a.shear];
     a.scaley = ma(c(t[1]));
     e(t[1]);
     a.shear /= a.scaley;
     var h = -t[0][1],
      t = t[1][1];
     0 > t ? (a.rotate = b.deg(aa.acos(t)), 0 > h && (a.rotate = 360 - a.rotate)) : a.rotate = b.deg(aa.asin(h));
     a.isSimple = !+a.shear.toFixed(9) && (a.scalex.toFixed(9) == a.scaley.toFixed(9) || !a.rotate);
     a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate;
     a.noRotation = !+a.shear.toFixed(9) && !a.rotate;
     return a
    };
    a.toTransformString = function (a) {
     a = a || this.split();
     return a.isSimple ? (a.scalex = +a.scalex.toFixed(4),
      a.scaley = +a.scaley.toFixed(4), a.rotate = +a.rotate.toFixed(4), (a.dx || a.dy ? "t" + [a.dx, a.dy] : "") + (1 != a.scalex || 1 != a.scaley ? "s" + [a.scalex, a.scaley, 0, 0] : "") + (a.rotate ? "r" + [a.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
    }
   })(v.prototype);
   var da = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
   "Apple Computer, Inc." == navigator.vendor && (da && 4 > da[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor &&
    da && 8 > da[1] ? U.safari = function () {
     var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
      stroke: "none"
     });
     setTimeout(function () {
      a.remove()
     });
     return !0
    } : U.safari = N;
   for (var R = function () {
     this.returnValue = !1
    }, S = function () {
     return this.originalEvent.preventDefault()
    }, ka = function () {
     this.cancelBubble = !0
    }, ic = function () {
     return this.originalEvent.stopPropagation()
    }, Yb = b.addEvent = function () {
     if (r.doc.addEventListener) return function (a, b, c, e) {
      var t = za && T[b] || b,
       h;
      T[fa[b]] && (t = T[fa[b]]);
      h = function (t) {
       var h = r.doc.documentElement.scrollTop ||
        r.doc.body.scrollTop,
        w = r.doc.documentElement.scrollLeft || r.doc.body.scrollLeft,
        J;
       if (ta && T.hasOwnProperty(za ? b : fa[b]))
        for (var n = 0, f = t.targetTouches && t.targetTouches.length; n < f; n++)
         if (J = t.targetTouches[n].target, J == a || "tspan" == J.nodeName && J.parentNode == a) {
          J = t;
          t = t.targetTouches[n];
          t.originalEvent = J;
          t.preventDefault = S;
          t.stopPropagation = ic;
          break
         }
       return c.call(e, t, t.clientX + w, t.clientY + h)
      };
      a.addEventListener(t, h, !1);
      return function () {
       a.removeEventListener(t, h, !1);
       return !0
      }
     };
     if (r.doc.attachEvent) return function (a,
      b, c, e) {
      var t = function (a) {
       a = a || r.win.event;
       var b = a.clientX + (r.doc.documentElement.scrollLeft || r.doc.body.scrollLeft),
        t = a.clientY + (r.doc.documentElement.scrollTop || r.doc.body.scrollTop);
       a.preventDefault = a.preventDefault || R;
       a.stopPropagation = a.stopPropagation || ka;
       return c.call(e, a, b, t)
      };
      a.attachEvent("on" + b, t);
      return function () {
       a.detachEvent("on" + b, t);
       return !0
      }
     }
    }(), jc = [], Wc = function (a) {
     for (var c = a.clientX, e = a.clientY, t = r.doc.documentElement.scrollTop || r.doc.body.scrollTop, h = r.doc.documentElement.scrollLeft ||
       r.doc.body.scrollLeft, w, J = jc.length; J--;) {
      w = jc[J];
      if (ta && "touchmove" === a.type)
       for (var n = a.touches.length, f; n--;) {
        if (f = a.touches[n], f.identifier == w.el._drag.id) {
         c = f.clientX;
         e = f.clientY;
         (a.originalEvent ? a.originalEvent : a).preventDefault();
         break
        }
       }
      else a.preventDefault();
      if (!w.el.removed) {
       var n = b._engine.getNode(w.el),
        M = n.nextSibling,
        d = n.parentNode,
        g = n.style.display;
       r.win.opera && d.removeChild(n);
       n.style.display = "none";
       f = w.el.paper.getElementByPoint(c, e);
       n.style.display = g;
       r.win.opera && (M ? d.insertBefore(n,
        M) : d.appendChild(n));
       f && m("raphael.drag.over." + w.el.id, w.el, f);
       c += h;
       e += t;
       m("raphael.drag.move." + w.el.id, w.move_scope || w.el, c - w.el._drag.x, e - w.el._drag.y, c, e, a)
      }
     }
    }, X = function (a) {
     b.unmousemove(Wc).unmouseup(X);
     for (var c = jc.length, e; c--;) e = jc[c], e.el._drag = {}, m("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, a);
     jc = []
    }, Fa = b.el = {}, qd = H.length; qd--;)(function (a) {
    b[a] = Fa[a] = function (c, e) {
     b.is(c, "function") && (this.events = this.events || [], this.events.push({
      name: a,
      f: c,
      unbind: Yb(this.shape ||
       this.node || r.doc, a, c, e || this)
     }));
     return this
    };
    b["un" + a] = Fa["un" + a] = function (b) {
     for (var c = this.events || [], e = c.length; e--;)
      if (c[e].name == a && c[e].f == b) {
       c[e].unbind();
       c.splice(e, 1);
       !c.length && delete this.events;
       break
      }
     return this
    }
   })(H[qd]);
   Fa.data = function (a, c) {
    var e = u[this.id] = u[this.id] || {};
    if (1 == arguments.length) {
     if (b.is(a, "object")) {
      for (var t in a) a.hasOwnProperty(t) && this.data(t, a[t]);
      return this
     }
     m("raphael.data.get." + this.id, this, e[a], a);
     return e[a]
    }
    e[a] = c;
    m("raphael.data.set." + this.id, this, c, a);
    return this
   };
   Fa.removeData = function (a) {
    null == a ? delete u[this.id] : u[this.id] && delete u[this.id][a];
    return this
   };
   Fa.getData = function () {
    return eb(u[this.id] || {})
   };
   var Jc = [],
    wd = function () {
     this.untrack = Yb(r.doc, "mouseup", vd, this)
    },
    vd = function () {
     this.untrack();
     this.untrack = null;
     return this.fn && this.fn.apply(this.scope || this.el, arguments)
    };
   Fa.mouseup = function (a, c, e) {
    if (!e) return b.mouseup.apply(this, arguments);
    Jc.push(e = {
     el: this,
     fn: a,
     scope: c
    });
    e.unbind = Yb(this.shape || this.node || r.doc, "mousedown", wd, e);
    return this
   };
   Fa.unmouseup = function (a) {
    for (var c = Jc.length, e; c--;) Jc[c].el === this && Jc[c].fn === a && (e = Jc[c], e.unbind(), e.untrack && e.untrack(), Jc.splice(c, 1));
    return e ? this : b.unmouseup.apply(this, arguments)
   };
   Fa.hover = function (a, b, c, e) {
    return this.mouseover(a, c).mouseout(b, e || c)
   };
   Fa.unhover = function (a, b) {
    return this.unmouseover(a).unmouseout(b)
   };
   var Kc = [];
   Fa.drag = function (a, c, e, t, h, w) {
    function n(J) {
     (J.originalEvent || J).preventDefault();
     var f = r.doc.documentElement.scrollTop || r.doc.body.scrollTop,
      M = r.doc.documentElement.scrollLeft ||
      r.doc.body.scrollLeft;
     this._drag.x = J.clientX + M;
     this._drag.y = J.clientY + f;
     this._drag.id = J.identifier;
     !jc.length && b.mousemove(Wc).mouseup(X);
     ta && !za && !jc.length && b.dragmove(Wc).dragend(X);
     jc.push({
      el: this,
      move_scope: t,
      start_scope: h,
      end_scope: w
     });
     c && m.on("raphael.drag.start." + this.id, c);
     a && m.on("raphael.drag.move." + this.id, a);
     e && m.on("raphael.drag.end." + this.id, e);
     m("raphael.drag.start." + this.id, h || t || this, J.clientX + M, J.clientY + f, J)
    }
    this._drag = {};
    Kc.push({
     el: this,
     start: n
    });
    this.mousedown(n);
    ta && !za &&
     this.dragstart(n);
    return this
   };
   Fa.onDragOver = function (a) {
    a ? m.on("raphael.drag.over." + this.id, a) : m.unbind("raphael.drag.over." + this.id)
   };
   Fa.undrag = function () {
    for (var a = Kc.length; a--;) Kc[a].el == this && (this.unmousedown(Kc[a].start), Kc.splice(a, 1), m.unbind("raphael.drag.*." + this.id));
    !Kc.length && b.unmousemove(Wc).unmouseup(X);
    delete this._drag
   };
   Fa.follow = function (a, c, e) {
    if (a.removed || a.constructor !== b.el.constructor) return this;
    a.followers.push({
     el: this,
     stalk: e = {
      before: "insertBefore",
      after: "insertAfter"
     }[e],
     cb: c
    });
    e && this[e](a);
    return this
   };
   Fa.unfollow = function (a) {
    if (a.removed || a.constructor !== b.el.constructor) return this;
    for (var c = 0, e = a.followers.length; c < e; c++)
     if (a.followers[c].el === this) {
      a.followers.splice(c, 1);
      break
     }
    return this
   };
   U.hide = function () {
    this.canvas.style.visibility = "hidden";
    return this
   };
   U.show = function () {
    this.canvas.style.visibility = "";
    return this
   };
   U.group = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = b._engine.group(this, a[0], c);
    return this.__set__ && this.__set__.push(a), this._elementsById[a.id] =
     a
   };
   U.circle = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "cx", 0, "cy", 0, "r", 0, "fill", "none", "stroke", "#000"),
     c = b._engine.circle(this, a, c);
    return this.__set__ && this.__set__.push(c), this._elementsById[c.id] = c
   };
   U.rect = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "x", 0, "y", 0, "width", 0, "height", 0, "r", 0, "fill", "none", "stroke", "#000"),
     c = b._engine.rect(this, a, c);
    return this.__set__ && this.__set__.push(c), this._elementsById[c.id] = c
   };
   U.ellipse = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "x", 0, "y", 0, "rx", 0, "ry",
      0, "fill", "none", "stroke", "#000"),
     c = b._engine.ellipse(this, a, c);
    return this.__set__ && this.__set__.push(c), this._elementsById[c.id] = c
   };
   U.path = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "path", "", "fill", "none", "stroke", "#000"),
     c = b._engine.path(this, a, c);
    return this.__set__ && this.__set__.push(c), this._elementsById[c.id] = c
   };
   U.image = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "src", "about:blank", "x", 0, "y", 0, "width", 0, "height", 0);
    out = b._engine.image(this, a, c);
    return this.__set__ && this.__set__.push(out),
     this._elementsById[out.id] = out
   };
   U.text = function () {
    var a = arguments,
     c = Ha(a, !0),
     a = Ba(a, "x", 0, "y", 0, "text", "", "stroke", "none", "fill", "#000", "text-anchor", "middle", "vertical-align", "middle"),
     c = b._engine.text(this, a, c);
    return this.__set__ && this.__set__.push(c), this._elementsById[c.id] = c
   };
   U.set = function (a) {
    !b.is(a, "array") && (a = A.call(arguments, 0, arguments.length));
    var c = new Lc(a);
    this.__set__ && this.__set__.push(c);
    return c
   };
   U.setStart = function (a) {
    this.__set__ = a || this.set()
   };
   U.setFinish = function (a) {
    a = this.__set__;
    delete this.__set__;
    return a
   };
   U.setSize = function (a, c) {
    return b._engine.setSize.call(this, a, c)
   };
   U.setViewBox = function (a, c, e, t, h) {
    return b._engine.setViewBox.call(this, a, c, e, t, h)
   };
   U.top = U.bottom = null;
   U.raphael = b;
   U.getElementByPoint = function (a, b) {
    var c, e, t = this.canvas,
     h = r.doc.elementFromPoint(a, b);
    if (r.win.opera && "svg" == h.tagName) {
     e = t.getBoundingClientRect();
     c = t.ownerDocument;
     var w = c.body,
      J = c.documentElement;
     c = e.top + (r.win.pageYOffset || J.scrollTop || w.scrollTop) - (J.clientTop || w.clientTop || 0);
     e = e.left +
      (r.win.pageXOffset || J.scrollLeft || w.scrollLeft) - (J.clientLeft || w.clientLeft || 0);
     w = t.createSVGRect();
     w.x = a - e;
     w.y = b - c;
     w.width = w.height = 1;
     c = t.getIntersectionList(w, null);
     c.length && (h = c[c.length - 1])
    }
    if (!h) return null;
    for (; h.parentNode && h != t.parentNode && !h.raphael;) h = h.parentNode;
    h == this.canvas.parentNode && (h = t);
    return h = h && h.raphael ? this.getById(h.raphaelid) : null
   };
   U.getElementsByBBox = function (a) {
    var c = this.set();
    this.forEach(function (e) {
     b.isBBoxIntersect(e.getBBox(), a) && c.push(e)
    });
    return c
   };
   U.getById =
    function (a) {
     return this._elementsById[a] || null
    };
   U.forEach = function (a, b) {
    for (var c = this.bottom; c && !1 !== a.call(b, c);) c = c.next;
    return this
   };
   U.getElementsByPoint = function (a, b) {
    var c = this.set();
    this.forEach(function (e) {
     e.isPointInside(a, b) && c.push(e)
    });
    return c
   };
   Fa.isPointInside = function (a, c) {
    var e = this.realPath = this.realPath || ua[this.type](this),
     t;
    return b.isPointInsidePath((t = this.attr("transform")) && t.length && b.transformPath(e, t) || e, a, c)
   };
   Fa.getBBox = function (a) {
    if (this.removed) return {};
    var b = this._;
    if (a) {
     if (b.dirty || !b.bboxwt) this.realPath = ua[this.type](this), b.bboxwt = Zb(this.realPath), b.bboxwt.toString = O, b.dirty = 0;
     return b.bboxwt
    }
    if (b.dirty || b.dirtyT || !b.bbox) {
     if (b.dirty || !this.realPath) b.bboxwt = 0, this.realPath = ua[this.type](this);
     b.bbox = Zb(ja(this.realPath, this.matrix));
     b.bbox.toString = O;
     b.dirty = b.dirtyT = 0
    }
    return b.bbox
   };
   Fa.clone = function () {
    if (this.removed) return null;
    var a = this.paper[this.type]().attr(this.attr());
    this.__set__ && this.__set__.push(a);
    return a
   };
   Fa.glow = function (a) {
    if ("text" ==
     this.type) return null;
    a = a || {};
    var b = (a.width || 10) + (+this.attr("stroke-width") || 1),
     c = a.fill || !1,
     e = a.opacity || .5,
     t = a.offsetx || 0,
     h = a.offsety || 0;
    a = a.color || "#000";
    for (var w = b / 2, J = this.paper, n = J.set(), f = this.realPath || ua[this.type](this), f = this.matrix ? ja(f, this.matrix) : f, M = 1; M < w + 1; M++) n.push(J.path(f).attr({
     stroke: a,
     fill: c ? a : "none",
     "stroke-linejoin": "round",
     "stroke-linecap": "round",
     "stroke-width": +(b / w * M).toFixed(3),
     opacity: +(e / w).toFixed(3)
    }));
    return n.insertBefore(this).translate(t, h)
   };
   var ed = function (a,
     e, t, h, w, J, n, f, M) {
     return null == M ? c(a, e, t, h, w, J, n, f) : b.findDotsAtSegment(a, e, t, h, w, J, n, f, s(a, e, t, h, w, J, n, f, M))
    },
    fd = function (a, c) {
     return function (e, t, h) {
      e = Ab(e);
      for (var w, J, n, f, M = "", d = {}, g = 0, u = 0, S = e.length; u < S; u++) {
       n = e[u];
       if ("M" == n[0]) w = +n[1], J = +n[2];
       else {
        f = ed(w, J, n[1], n[2], n[3], n[4], n[5], n[6]);
        if (g + f > t) {
         if (c && !d.start) {
          w = ed(w, J, n[1], n[2], n[3], n[4], n[5], n[6], t - g);
          M += ["C" + w.start.x, w.start.y, w.m.x, w.m.y, w.x, w.y];
          if (h) return M;
          d.start = M;
          M = ["M" + w.x, w.y + "C" + w.n.x, w.n.y, w.end.x, w.end.y, n[5], n[6]].join();
          g += f;
          w = +n[5];
          J = +n[6];
          continue
         }
         if (!a && !c) return w = ed(w, J, n[1], n[2], n[3], n[4], n[5], n[6], t - g), {
          x: w.x,
          y: w.y,
          alpha: w.alpha
         }
        }
        g += f;
        w = +n[5];
        J = +n[6]
       }
       M += n.shift() + n
      }
      d.end = M;
      w = a ? g : c ? d : b.findDotsAtSegment(w, J, n[0], n[1], n[2], n[3], n[4], n[5], 1);
      w.alpha && (w = {
       x: w.x,
       y: w.y,
       alpha: w.alpha
      });
      return w
     }
    },
    Dc = fd(1),
    rd = fd(),
    ob = fd(0, 1);
   b.getTotalLength = Dc;
   b.getPointAtLength = rd;
   b.getSubpath = function (a, b, c) {
    if (1E-6 > this.getTotalLength(a) - c) return ob(a, b).end;
    a = ob(a, c, 1);
    return b ? ob(a, b).end : a
   };
   Fa.getTotalLength = function () {
    if ("path" ==
     this.type) return this.node.getTotalLength ? this.node.getTotalLength() : Dc(this.attrs.path)
   };
   Fa.getPointAtLength = function (a) {
    if ("path" == this.type) return rd(this.attrs.path, a)
   };
   Fa.getSubpath = function (a, c) {
    if ("path" == this.type) return b.getSubpath(this.attrs.path, a, c)
   };
   var Va = b.easing_formulas = {
    linear: function (a) {
     return a
    },
    "<": function (a) {
     return la(a, 1.7)
    },
    ">": function (a) {
     return la(a, .48)
    },
    "<>": function (a) {
     var b = .48 - a / 1.04,
      c = ma(.1734 + b * b);
     a = c - b;
     a = la(Ea(a), 1 / 3) * (0 > a ? -1 : 1);
     b = -c - b;
     b = la(Ea(b), 1 / 3) * (0 > b ? -1 :
      1);
     a = a + b + .5;
     return 3 * (1 - a) * a * a + a * a * a
    },
    backIn: function (a) {
     return a * a * (2.70158 * a - 1.70158)
    },
    backOut: function (a) {
     --a;
     return a * a * (2.70158 * a + 1.70158) + 1
    },
    elastic: function (a) {
     return a == !!a ? a : la(2, -10 * a) * Ia(2 * (a - .075) * pa / .3) + 1
    },
    bounce: function (a) {
     a < 1 / 2.75 ? a *= 7.5625 * a : a < 2 / 2.75 ? (a -= 1.5 / 2.75, a = 7.5625 * a * a + .75) : a < 2.5 / 2.75 ? (a -= 2.25 / 2.75, a = 7.5625 * a * a + .9375) : (a -= 2.625 / 2.75, a = 7.5625 * a * a + .984375);
     return a
    }
   };
   Va.easeIn = Va["ease-in"] = Va["<"];
   Va.easeOut = Va["ease-out"] = Va[">"];
   Va.easeInOut = Va["ease-in-out"] = Va["<>"];
   Va["back-in"] =
    Va.backIn;
   Va["back-out"] = Va.backOut;
   var Oa = [],
    pd = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame || function (a) {
     setTimeout(a, 16)
    },
    ab = function () {
     for (var a = +new Date, c = 0; c < Oa.length; c++) {
      var e = Oa[c];
      if (!e.el.removed && !e.paused) {
       var t = a - e.start,
        h = e.ms,
        w = e.easing,
        n = e.from,
        J = e.diff,
        M = e.to,
        d = e.el,
        g = {},
        u, S = {},
        k;
       e.initstatus ? (t = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * h, e.status = e.initstatus, delete e.initstatus,
        e.stop && Oa.splice(c--, 1)) : e.status = (e.prev + t / h * (e.percent - e.prev)) / e.anim.top;
       if (!(0 > t))
        if (t < h) {
         var R = w(t / h),
          l;
         for (l in n)
          if (n.hasOwnProperty(l)) {
           switch (G[l]) {
           case Q:
            u = +n[l] + R * h * J[l];
            break;
           case "colour":
            u = "rgb(" + [gd(Ma(n[l].r + R * h * J[l].r)), gd(Ma(n[l].g + R * h * J[l].g)), gd(Ma(n[l].b + R * h * J[l].b))].join() + ")";
            break;
           case "path":
            u = [];
            t = 0;
            for (w = n[l].length; t < w; t++) {
             u[t] = [n[l][t][0]];
             M = 1;
             for (S = n[l][t].length; M < S; M++) u[t][M] = (+n[l][t][M] + R * h * J[l][t][M]).toFixed(4);
             u[t] = u[t].join(" ")
            }
            u = u.join(" ");
            break;
           case "transform":
            if (J[l].real)
             for (u = [], t = 0, w = n[l].length; t < w; t++)
              for (u[t] = [n[l][t][0]], M = 1, S = n[l][t].length; M < S; M++) u[t][M] = n[l][t][M] + R * h * J[l][t][M];
            else u = function (a) {
             return +n[l][a] + R * h * J[l][a]
            }, u = [["m", u(0), u(1), u(2), u(3), u(4), u(5)]];
            break;
           case "csv":
            if ("clip-rect" == l)
             for (u = [], t = 4; t--;) u[t] = +n[l][t] + R * h * J[l][t];
            break;
           default:
            for (w = [].concat(n[l]), u = [], t = d.ca[l].length; t--;) u[t] = +w[t] + R * h * J[l][t]
           }
           g[l] = u
          }
         d.attr(g);
         (function (a, b, c) {
          setTimeout(function () {
           m("raphael.anim.frame." + a, b, c)
          })
         })(d.id, d, e.anim)
        }
        else {
         (function (a, c, e) {
          setTimeout(function () {
           m("raphael.anim.frame." +
            c.id, c, e);
           m("raphael.anim.finish." + c.id, c, e);
           b.is(a, "function") && a.call(c)
          })
         })(e.callback, d, e.anim);
         d.attr(M);
         Oa.splice(c--, 1);
         if (1 < e.repeat && !e.next) {
          for (k in M) M.hasOwnProperty(k) && (S[k] = e.totalOrigin[k]);
          e.el.attr(S);
          f(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
         }
         e.next && !e.stop && f(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
        }
      }
     }
     b.svg && d && d.paper && d.paper.safari();
     Oa.length && pd(ab)
    },
    gd = function (a) {
     return 255 < a ? 255 : 0 > a ? 0 : a
    };
   Fa.animateWith = function (a, c, e, t, h, w) {
    if (this.removed) return w &&
     w.call(this), this;
    e = e instanceof g ? e : b.animation(e, t, h, w);
    f(e, this, e.percents[0], null, this.attr());
    e = 0;
    for (t = Oa.length; e < t; e++)
     if (Oa[e].anim == c && Oa[e].el == a) {
      Oa[t - 1].start = Oa[e].start;
      break
     }
    return this
   };
   Fa.onAnimation = function (a) {
    a ? m.on("raphael.anim.frame." + this.id, a) : m.unbind("raphael.anim.frame." + this.id);
    return this
   };
   g.prototype.delay = function (a) {
    var b = new g(this.anim, this.ms);
    b.times = this.times;
    b.del = +a || 0;
    return b
   };
   g.prototype.repeat = function (a) {
    var b = new g(this.anim, this.ms);
    b.del = this.del;
    b.times = aa.floor(sa(a, 0)) || 1;
    return b
   };
   b.animation = function (a, c, e, t) {
    if (a instanceof g) return a;
    if (b.is(e, "function") || !e) t = t || e || null, e = null;
    a = Object(a);
    c = +c || 0;
    var h = {},
     w, n;
    for (n in a) a.hasOwnProperty(n) && L(n) != n && L(n) + "%" != n && (w = !0, h[n] = a[n]);
    return w ? (e && (h.easing = e), t && (h.callback = t), new g({
     100: h
    }, c)) : new g(a, c)
   };
   Fa.animate = function (a, c, e, t) {
    if (this.removed) return t && t.call(this), this;
    a = a instanceof g ? a : b.animation(a, c, e, t);
    f(a, this, a.percents[0], null, this.attr());
    return this
   };
   Fa.setTime = function (a,
    b) {
    a && null != b && this.status(a, Y(b, a.ms) / a.ms);
    return this
   };
   Fa.status = function (a, b) {
    var c = [],
     e = 0,
     t, h;
    if (null != b) return f(a, this, -1, Y(b, 1)), this;
    for (t = Oa.length; e < t; e++)
     if (h = Oa[e], h.el.id == this.id && (!a || h.anim == a)) {
      if (a) return h.status;
      c.push({
       anim: h.anim,
       status: h.status
      })
     }
    return a ? 0 : c
   };
   Fa.pause = function (a) {
    for (var b = 0; b < Oa.length; b++) Oa[b].el.id != this.id || a && Oa[b].anim != a || !1 === m("raphael.anim.pause." + this.id, this, Oa[b].anim) || (Oa[b].paused = !0);
    return this
   };
   Fa.resume = function (a) {
    for (var b = 0; b < Oa.length; b++)
     if (Oa[b].el.id ==
      this.id && (!a || Oa[b].anim == a)) {
      var c = Oa[b];
      !1 !== m("raphael.anim.resume." + this.id, this, c.anim) && (delete c.paused, this.status(c.anim, c.status))
     }
    return this
   };
   Fa.stop = function (a) {
    for (var b = 0; b < Oa.length; b++) Oa[b].el.id != this.id || a && Oa[b].anim != a || !1 !== m("raphael.anim.stop." + this.id, this, Oa[b].anim) && Oa.splice(b--, 1);
    return this
   };
   m.on("raphael.remove", l);
   m.on("raphael.clear", l);
   Fa.toString = function () {
    return "Raphaël’s object"
   };
   Fa.toFront = function () {
    if (this.removed) return this;
    var a = b._engine.getNode(this),
     c = this.parent,
     e = this.followers,
     t;
    b._tofront(this, c) && c.canvas.appendChild(a);
    a = 0;
    for (c = e.length; a < c; a++)(t = e[a]).stalk && t.el[t.stalk](this);
    return this
   };
   Fa.toBack = function () {
    if (this.removed) return this;
    var a = b._engine.getNode(this),
     c = this.parent,
     e = this.followers,
     t;
    b._toback(this, c) && c.canvas.insertBefore(a, c.canvas.firstChild);
    a = 0;
    for (c = e.length; a < c; a++)(t = e[a]).stalk && t.el[t.stalk](this);
    return this
   };
   Fa.insertAfter = function (a) {
    if (this.removed) return this;
    var c = b._engine.getNode(this),
     e = b._engine.getLastNode(a),
     t = a.parent.canvas,
     h = this.followers,
     w;
    e.nextSibling ? t.insertBefore(c, e.nextSibling) : t.appendChild(c);
    b._insertafter(this, a, this.parent, a.parent);
    c = 0;
    for (e = h.length; c < e; c++)(w = h[c]).stalk && w.el[w.stalk](a);
    return this
   };
   Fa.insertBefore = function (a) {
    if (this.removed) return this;
    var c = b._engine.getNode(this),
     e = b._engine.getNode(a),
     t = this.followers,
     h;
    a.parent.canvas.insertBefore(c, e);
    b._insertbefore(this, a, this.parent, a.parent);
    this.parent = a.parent;
    c = 0;
    for (e = t.length; c < e; c++)(h = t[c]).stalk && h.el[h.stalk](a);
    return this
   };
   Fa.appendChild = function (a) {
    if (this.removed || "group" !== this.type) return this;
    var c = this.followers,
     e, t, h;
    if (a.parent === this) return a.toFront(), this;
    t = b._engine.getNode(a);
    b._tear(a, a.parent);
    this.canvas.appendChild(t);
    a.parent = this;
    !this.bottom && (this.bottom = a);
    a.prev = this.top;
    a.next = null;
    this.top && (this.top.next = a);
    this.top = a;
    t = 0;
    for (h = c.length; t < h; t++)(e = c[t]).stalk && e.el[e.stalk](a);
    return this
   };
   Fa.removeChild = function (a) {
    if (this.removed || "group" !== this.type || a.parent !== this) return this;
    var c = b._engine.getNode(a),
     e = this.paper;
    b._tear(a, this);
    e.canvas.appendChild(c);
    this.parent = e;
    !e.bottom && (e.bottom = this);
    (this.prev = e.top) && (e.top.next = this);
    e.top = this;
    this.next = null;
    return this
   };
   var Lc = function (a) {
     this.items = [];
     this.length = 0;
     this.type = "set";
     if (a)
      for (var b = 0, c = a.length; b < c; b++) !a[b] || a[b].constructor != Fa.constructor && a[b].constructor != Lc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
    },
    mb = Lc.prototype;
   mb.push = function () {
    for (var a, b, c = 0, e = arguments.length; c <
     e; c++) !(a = arguments[c]) || a.constructor != Fa.constructor && a.constructor != Lc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
    return this
   };
   mb.pop = function () {
    this.length && delete this[this.length--];
    return this.items.pop()
   };
   mb.forEach = function (a, b) {
    for (var c = 0, e = this.items.length; c < e && !1 !== a.call(b, this.items[c], c); c++);
    return this
   };
   for (var hb in Fa) Fa.hasOwnProperty(hb) && (mb[hb] = function (a) {
    return function () {
     var b = arguments;
     return this.forEach(function (c) {
      c[a][F](c, b)
     })
    }
   }(hb));
   mb.attr = function (a,
    c) {
    if (a && b.is(a, k) && b.is(a[0], "object"))
     for (var e = 0, t = a.length; e < t; e++) this.items[e].attr(a[e]);
    else
     for (e = 0, t = this.items.length; e < t; e++) this.items[e].attr(a, c);
    return this
   };
   mb.clear = function () {
    for (; this.length;) this.pop()
   };
   mb.splice = function (a, b, c) {
    a = 0 > a ? sa(this.length + a, 0) : a;
    b = sa(0, Y(this.length - a, isNaN(b) && this.length || b));
    var e = [],
     t = [],
     h = [],
     w;
    for (w = 2; w < arguments.length; w++) h.push(arguments[w]);
    for (w = 0; w < b; w++) t.push(this[a + w]);
    for (; w < this.length - a; w++) e.push(this[a + w]);
    var n = h.length;
    for (w = 0; w <
     n + e.length; w++) this.items[a + w] = this[a + w] = w < n ? h[w] : e[w - n];
    for (w = this.items.length = this.length -= b - n; this[w];) delete this[w++];
    return new Lc(t)
   };
   mb.exclude = function (a) {
    for (var b = 0, c = this.length; b < c; b++)
     if (this[b] == a) return this.splice(b, 1), !0
   };
   mb.animate = function (a, c, e, t) {
    !b.is(e, "function") && e || (t = e || null);
    var h = this.items.length,
     w = h,
     n = this,
     J;
    if (!h) return this;
    t && (J = function () {
     !--h && t.call(n)
    });
    e = b.is(e, "string") ? e : J;
    c = b.animation(a, c, e, J);
    for (a = this.items[--w].animate(c); w--;) this.items[w] && !this.items[w].removed &&
     this.items[w].animateWith(a, c, c);
    return this
   };
   mb.insertAfter = function (a) {
    for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
    return this
   };
   mb.getBBox = function () {
    for (var a = [], b = [], c = [], e = [], t = this.items.length; t--;)
     if (!this.items[t].removed) {
      var h = this.items[t].getBBox();
      a.push(h.x);
      b.push(h.y);
      c.push(h.x + h.width);
      e.push(h.y + h.height)
     }
    a = Y[F](0, a);
    b = Y[F](0, b);
    c = sa[F](0, c);
    e = sa[F](0, e);
    return {
     x: a,
     y: b,
     x2: c,
     y2: e,
     width: c - a,
     height: e - b
    }
   };
   mb.clone = function (a) {
    a = new Lc;
    for (var b = 0, c = this.items.length; b <
     c; b++) a.push(this.items[b].clone());
    return a
   };
   mb.toString = function () {
    return "Raphaël‘s set"
   };
   mb.glow = function (a) {
    var b = this.paper.set();
    this.forEach(function (c, e) {
     var t = c.glow(a);
     null != t && t.forEach(function (a, c) {
      b.push(a)
     })
    });
    return b
   };
   b.registerFont = function (a) {
    if (!a.face) return a;
    this.fonts = this.fonts || {};
    var b = {
      w: a.w,
      face: {},
      glyphs: {}
     },
     c = a.face["font-family"],
     e;
    for (e in a.face) a.face.hasOwnProperty(e) && (b.face[e] = a.face[e]);
    this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b];
    if (!a.svg) {
     b.face["units-per-em"] =
      ca(a.face["units-per-em"], 10);
     for (var t in a.glyphs)
      if (a.glyphs.hasOwnProperty(t) && (c = a.glyphs[t], b.glyphs[t] = {
        w: c.w,
        k: {},
        d: c.d && "M" + c.d.replace(/[mlcxtrv]/g, function (a) {
         return {
          l: "L",
          c: "C",
          x: "z",
          t: "m",
          r: "l",
          v: "c"
         }[a] || "M"
        }) + "z"
       }, c.k))
       for (var h in c.k) c.hasOwnProperty(h) && (b.glyphs[t].k[h] = c.k[h])
    }
    return a
   };
   U.getFont = function (a, c, e, t) {
    t = t || "normal";
    e = e || "normal";
    c = +c || {
     normal: 400,
     bold: 700,
     lighter: 300,
     bolder: 800
    }[c] || 400;
    if (b.fonts) {
     var h = b.fonts[a];
     if (!h) {
      a = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g,
       "") + "(\\s|$)", "i");
      for (var w in b.fonts)
       if (b.fonts.hasOwnProperty(w) && a.test(w)) {
        h = b.fonts[w];
        break
       }
     }
     var n;
     if (h)
      for (w = 0, a = h.length; w < a && (n = h[w], n.face["font-weight"] != c || n.face["font-style"] != e && n.face["font-style"] || n.face["font-stretch"] != t); w++);
     return n
    }
   };
   U.print = function (a, c, e, t, h, w, J) {
    w = w || "middle";
    J = sa(Y(J || 0, 1), -1);
    var M = n(e).split(""),
     f = 0,
     d = 0,
     g = "";
    b.is(t, e) && (t = this.getFont(t));
    if (t) {
     e = (h || 16) / t.face["units-per-em"];
     var u = t.face.bbox.split(Ta);
     h = +u[0];
     var S = u[3] - u[1],
      k = 0;
     w = +u[1] + ("baseline" ==
      w ? S + +t.face.descent : S / 2);
     for (var u = 0, l = M.length; u < l; u++) {
      if ("\n" == M[u]) d = da = f = 0, k += S;
      else var R = d && t.glyphs[M[u - 1]] || {},
       da = t.glyphs[M[u]],
       f = f + (d ? (R.w || t.w) + (R.k && R.k[M[u]] || 0) + t.w * J : 0),
       d = 1;
      da && da.d && (g += b.transformPath(da.d, ["t", f * e, k * e, "s", e, e, h, w, "t", (a - h) / e, (c - w) / e]))
     }
    }
    return this.path(g).attr({
     fill: "#000",
     stroke: "none"
    })
   };
   U.add = function (a) {
    if (b.is(a, "array"))
     for (var c = this.set(), e = 0, t = a.length, h; e < t; e++) h = a[e] || {}, na.hasOwnProperty(h.type) && c.push(this[h.type]().attr(h));
    return c
   };
   b.format = function (a,
    c) {
    var e = b.is(c, k) ? [0].concat(c) : arguments;
    a && b.is(a, "string") && e.length - 1 && (a = a.replace(Na, function (a, b) {
     return null == e[++b] ? "" : e[b]
    }));
    return a || ""
   };
   b.fullfill = function () {
    var a = /\{([^\}]+)\}/g,
     b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
     c = function (a, c, e) {
      var t = e;
      c.replace(b, function (a, b, c, e, h) {
       b = b || e;
       t && (b in t && (t = t[b]), "function" == typeof t && h && (t = t()))
      });
      return t = (null == t || t == e ? a : t) + ""
     };
    return function (b, e) {
     return String(b).replace(a, function (a, b) {
      return c(a, b, e)
     })
    }
   }();
   b.ninja =
    function () {
     oa ? r.win.Raphael = ga : delete Raphael;
     return b
    };
   var Za = b.vml && .5 || 0;
   b.crispBound = ea(function (a, b, c, e, t) {
    var h = {},
     w;
    a = a || 0;
    b = b || 0;
    c = c || 0;
    e = e || 0;
    t = t || 0;
    w = t % 2 / 2 + Za;
    h.x = Ma(a + w) - w;
    h.y = Ma(b + w) - w;
    h.width = Ma(a + c + w) - w - h.x;
    h.height = Ma(b + e + w) - w - h.y;
    h["stroke-width"] = t;
    0 === h.width && 0 !== c && (h.width = 1);
    0 === h.height && 0 !== e && (h.height = 1);
    return h
   }, b);
   Fa.crisp = function () {
    var a = this.attrs,
     c, e = this.attr(["x", "y", "width", "height", "stroke-width"]),
     e = b.crispBound(e.x, e.y, e.width, e.height, e["stroke-width"]);
    for (c in e) a[c] ===
     e[c] && delete e[c];
    return this.attr(e)
   };
   b.st = mb;
   b.define = function (a, c, e, t, h, w) {
    var n;
    if (b.is(a, k))
     for (w = 0, n = a.length; w < n; w++) b.define(a[w]);
    else if (b.is(a, "object")) b.define(a.name, a[a.name], a.ca, a.fn, a.e, a.data);
    else if (a && !b.fn[a]) return b.fn[a] = function () {
      var w = arguments,
       n = c.apply(this, w),
       J;
      if (t && b.is(t, "object"))
       for (J in t) n[J] = t[J];
      if (h && b.is(h, "object"))
       for (J in h) n[J] && n[J](h[J]);
      if (e) {
       if (b.is(e, "function")) n.ca[a] = e;
       else
        for (J in e) n.ca[J] = e[J];
       n.ca[a] && (b._lastArgIfGroup(w, !0), n.attr(a, B.call(w)))
      }
      return n
     },
     e && (b.fn[a].ca = e), t && (b.fn[a].fn = t), h && (b.fn[a].e = h), w && (b.fn[a].data = w), b.fn[a]
   };
   (function (a, c, e) {
    function t() {
     /in/.test(a.readyState) ? setTimeout(t, 9) : b.eve("raphael.DOMload")
    }
    null == a.readyState && a.addEventListener && (a.addEventListener(c, e = function () {
     a.removeEventListener(c, e, !1);
     a.readyState = "complete"
    }, !1), a.readyState = "loading");
    t()
   })(document, "DOMContentLoaded");
   m.on("raphael.DOMload", function () {
    p = !0
   });
   (function () {
    if (b.svg) {
     var a = String,
      c = parseFloat,
      e = parseInt,
      t = Math,
      h = t.max,
      w = t.abs,
      n = t.pow,
      J = t.sqrt,
      M = /[, ]+/,
      f = !(!/AppleWebKit/.test(b._g.win.navigator.userAgent) || /Chrome/.test(b._g.win.navigator.userAgent) && !(29 > b._g.win.navigator.appVersion.match(/Chrome\/(\d+)\./)[1])),
      d = b.eve,
      g = {
       block: "M5,0 0,2.5 5,5z",
       classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
       diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
       open: "M6,1 1,3.5 6,6",
       oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
      },
      u = {};
     b.toString = function () {
      return "Your browser supports SVG.\nYou are running Raphaël " + this.version
     };
     b._url = "";
     var S = function (a, b) {
       var c =
        a.gradient;
       if (c) {
        if (c === b) return;
        c.refCount--;
        c.refCount || c.parentNode.removeChild(c);
        delete a.gradient
       }
       b && (a.gradient = b, b.refCount++)
      },
      k = b._createNode = function (c, e) {
       if (e) {
        "string" == typeof c && (c = k(c));
        for (var t in e) e.hasOwnProperty(t) && ("xlink:" == t.substring(0, 6) ? c.setAttributeNS("http://www.w3.org/1999/xlink", t.substring(6), a(e[t])) : c.setAttribute(t, a(e[t])))
       }
       else c = b._g.doc.createElementNS("http://www.w3.org/2000/svg", c);
       return c
      },
      l = {
       userSpaceOnUse: "userSpaceOnUse",
       objectBoundingBox: "objectBoundingBox"
      },
      R = {
       pad: "pad",
       redlect: "reflect",
       repeat: "repeat"
      },
      da = function (e, M) {
       if (!e.paper || !e.paper.defs) return 0;
       var f = "linear",
        d = e.paper,
        g = (d.id + "-" + M).replace(/[\(\)\s%:,\xb0#]/g, "_"),
        u = .5,
        da = .5,
        L, p, D, G, X, s = e.node,
        H = s.style,
        ka = b._g.doc.getElementById(g);
       if (!ka) {
        M = a(M).replace(b._radial_gradient, function (a, b) {
         f = "radial";
         b = b && b.split(",") || [];
         G = b[5];
         X = b[6];
         var e = b[0],
          t = b[1],
          h = b[2],
          w = b[3],
          M = b[4],
          d = e && t,
          g;
         h && (L = /\%/.test(h) ? h : c(h));
         if (G === l.userSpaceOnUse) return d && (u = e, da = t), w && M && (p = w, D = M, d || (u = p, da = D)), "";
         d &&
          (u = c(e), da = c(t), e = 2 * (.5 < da) - 1, .25 < (g = n(u - .5, 2)) + n(da - .5, 2) && .25 > g && (da = J(.25 - g) * e + .5) && .5 !== da && (da = da.toFixed(5) - 1E-5 * e));
         w && M && (p = c(w), D = c(M), e = 2 * (.5 < D) - 1, .25 < (g = n(p - .5, 2)) + n(D - .5, 2) && .25 > g && (D = J(.25 - g) * e + .5) && .5 !== D && (D = D.toFixed(5) - 1E-5 * e), d || (u = p, da = D));
         return ""
        });
        M = M.split(/\s*\-\s*/);
        if ("linear" == f) {
         var ka = M.shift(),
          r = ka.match(/\((.*)\)/),
          A, r = r && r[1] && r[1].split(/\s*\,\s*/),
          ka = -c(ka);
         if (isNaN(ka)) return null;
         r && r.length ? (r[0] in l ? (G = r.shift(), r[0] in R && (X = r.shift())) : (r[4] && (G = r[4]), r[5] &&
          (X = r[5])), A = [r[0] || "0%", r[1] || "0%", r[2] || "100%", r[3] || "0%"]) : (A = [0, 0, t.cos(b.rad(ka)), t.sin(b.rad(ka))], ka = 1 / (h(w(A[2]), w(A[3])) || 1), A[2] *= ka, A[3] *= ka, 0 > A[2] && (A[0] = -A[2], A[2] = 0), 0 > A[3] && (A[1] = -A[3], A[3] = 0))
        }
        r = b._parseDots(M);
        if (!r) return null;
        ka = k(f + "Gradient", {
         id: g
        });
        ka.refCount = 0;
        G in l && ka.setAttribute("gradientUnits", a(G));
        X in R && ka.setAttribute("spreadMethod", a(X));
        "radial" === f ? (void 0 !== L && ka.setAttribute("r", a(L)), void 0 !== p && void 0 !== D && (ka.setAttribute("cx", a(p)), ka.setAttribute("cy", a(D))),
         ka.setAttribute("fx", a(u)), ka.setAttribute("fy", a(da))) : k(ka, {
         x1: A[0],
         y1: A[1],
         x2: A[2],
         y2: A[3]
        });
        A = 0;
        for (var m = r.length; A < m; A++) ka.appendChild(k("stop", {
         offset: r[A].offset ? r[A].offset : A ? "100%" : "0%",
         "stop-color": r[A].color || "#fff",
         "stop-opacity": void 0 === r[A].opacity ? 1 : r[A].opacity
        }));
        d.defs.appendChild(ka)
       }
       S(e, ka);
       k(s, {
        fill: "url('" + b._url + "#" + g + "')",
        opacity: 1,
        "fill-opacity": 1
       });
       H.fill = "";
       H.opacity = 1;
       return H.fillOpacity = 1
      },
      L = function (a) {
       var b = a.getBBox(1);
       k(a.pattern, {
        patternTransform: a.matrix.invert() +
         " translate(" + b.x + "," + b.y + ")"
       })
      },
      p = function (c, e, t) {
       if ("path" == c.type) {
        for (var h = a(e).toLowerCase().split("-"), w = c.paper, n = t ? "end" : "start", J = c.node, M = c.attrs, f = M["stroke-width"], d = h.length, S = "classic", l, R, da = 3, L = 3, p = 5; d--;) switch (h[d]) {
        case "block":
        case "classic":
        case "oval":
        case "diamond":
        case "open":
        case "none":
         S = h[d];
         break;
        case "wide":
         L = 5;
         break;
        case "narrow":
         L = 2;
         break;
        case "long":
         da = 5;
         break;
        case "short":
         da = 2
        }
        "open" == S ? (da += 2, L += 2, p += 2, l = 1, R = t ? 4 : 1, h = {
         fill: "none",
         stroke: M.stroke
        }) : (R = l = da / 2, h = {
         fill: M.stroke,
         stroke: "none"
        });
        c._.arrows ? t ? (c._.arrows.endPath && u[c._.arrows.endPath]--, c._.arrows.endMarker && u[c._.arrows.endMarker]--) : (c._.arrows.startPath && u[c._.arrows.startPath]--, c._.arrows.startMarker && u[c._.arrows.startMarker]--) : c._.arrows = {};
        if ("none" != S) {
         var d = "raphael-marker-" + S,
          D = "raphael-marker-" + n + S + da + L + "-obj" + c.id;
         b._g.doc.getElementById(d) ? u[d]++ : (w.defs.appendChild(k(k("path"), {
          "stroke-linecap": "round",
          d: g[S],
          id: d
         })), u[d] = 1);
         var G = b._g.doc.getElementById(D);
         G ? (u[D]++, da = G.getElementsByTagName("use")[0]) :
          (G = k(k("marker"), {
           id: D,
           markerHeight: L,
           markerWidth: da,
           orient: "auto",
           refX: R,
           refY: L / 2
          }), da = k(k("use"), {
           "xlink:href": "#" + d,
           transform: (t ? "rotate(180 " + da / 2 + " " + L / 2 + ") " : "") + "scale(" + da / p + "," + L / p + ")",
           "stroke-width": (1 / ((da / p + L / p) / 2)).toFixed(4)
          }), G.appendChild(da), w.defs.appendChild(G), u[D] = 1);
         k(da, h);
         w = l * ("diamond" != S && "oval" != S);
         t ? (t = c._.arrows.startdx * f || 0, f = b.getTotalLength(M.path) - w * f) : (t = w * f, f = b.getTotalLength(M.path) - (c._.arrows.enddx * f || 0));
         h = {};
         h["marker-" + n] = "url('" + b._url + "#" + D + "')";
         if (f || t) h.d =
          b.getSubpath(M.path, t, f);
         k(J, h);
         c._.arrows[n + "Path"] = d;
         c._.arrows[n + "Marker"] = D;
         c._.arrows[n + "dx"] = w;
         c._.arrows[n + "Type"] = S;
         c._.arrows[n + "String"] = e
        }
        else t ? (t = c._.arrows.startdx * f || 0, f = b.getTotalLength(M.path) - t) : (t = 0, f = b.getTotalLength(M.path) - (c._.arrows.enddx * f || 0)), c._.arrows[n + "Path"] && k(J, {
         d: b.getSubpath(M.path, t, f)
        }), delete c._.arrows[n + "Path"], delete c._.arrows[n + "Marker"], delete c._.arrows[n + "dx"], delete c._.arrows[n + "Type"], delete c._.arrows[n + "String"];
        for (h in u) u.hasOwnProperty(h) && !u[h] &&
         (c = b._g.doc.getElementById(h)) && c.parentNode.removeChild(c)
       }
      },
      D = {
       "": ["none"],
       none: ["none"],
       "-": [3, 1],
       ".": [1, 1],
       "-.": [3, 1, 1, 1],
       "-..": [3, 1, 1, 1, 1, 1],
       ". ": [1, 3],
       "- ": [4, 3],
       "--": [8, 3],
       "- .": [4, 3, 1, 3],
       "--.": [8, 3, 1, 3],
       "--..": [8, 3, 1, 3, 1, 3]
      },
      G = function (c, e, t) {
       var h = D[a(e).toLowerCase()],
        w, n;
       if (e = h || void 0 !== e && [].concat(e)) {
        w = c.attrs["stroke-width"] || 1;
        t = {
         round: w,
         square: w,
         butt: 0
        }[c.attrs["stroke-linecap"] || t["stroke-linecap"]] || 0;
        n = e.length;
        w = h ? w : 1;
        for (h = []; n--;) h[n] = e[n] * w + (n % 2 ? 1 : -1) * t || e[n], 0 > h[n] && (h[n] =
         0);
        b.is(e, "array") && k(c.node, {
         "stroke-dasharray": h.join(",")
        })
       }
      },
      X = function (a, b) {
       for (var c in b) d("raphael.attr." + c + "." + a.id, a, b[c], c), a.ca[c] && a.attr(c, b[c])
      },
      s = b._setFillAndStroke = function (c, t) {
       if (c.paper.canvas) {
        var n = c.node,
         J = c.attrs,
         d = c.paper,
         g = n.style,
         u = g.visibility;
        g.visibility = "hidden";
        for (var l in t)
         if (t.hasOwnProperty(l) && b._availableAttrs.hasOwnProperty(l)) {
          var R = t[l];
          J[l] = R;
          switch (l) {
          case "blur":
           c.blur(R);
           break;
          case "href":
          case "title":
          case "target":
           var D = n.parentNode;
           if ("a" != D.tagName.toLowerCase()) {
            if ("" ==
             R) break;
            var X = k("a");
            X.raphael = !0;
            X.raphaelid = n.raphaelid;
            D.insertBefore(X, n);
            X.appendChild(n);
            D = X
           }
           "target" == l ? D.setAttributeNS("http://www.w3.org/1999/xlink", "show", "blank" == R ? "new" : R) : D.setAttributeNS("http://www.w3.org/1999/xlink", l, R);
           n.titleNode = D;
           break;
          case "cursor":
           g.cursor = R;
           break;
          case "transform":
           c.transform(R);
           break;
          case "rotation":
           b.is(R, "array") ? c.rotate.apply(c, R) : c.rotate(R);
           break;
          case "arrow-start":
           p(c, R);
           break;
          case "arrow-end":
           p(c, R, 1);
           break;
          case "clip-path":
           var s = !0;
          case "clip-rect":
           D = !s && a(R).split(M);
           c._.clipispath = !!s;
           if (s || 4 == D.length) {
            c.clip && c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);
            var X = k("clipPath"),
             ka = k(s ? "path" : "rect");
            X.id = b.createUUID();
            k(ka, s ? {
             d: R ? J["clip-path"] = b._pathToAbsolute(R) : b._availableAttrs.path,
             fill: "none"
            } : {
             x: D[0],
             y: D[1],
             width: D[2],
             height: D[3],
             transform: c.matrix.invert()
            });
            X.appendChild(ka);
            d.defs.appendChild(X);
            k(n, {
             "clip-path": "url('" + b._url + "#" + X.id + "')"
            });
            c.clip = ka
           }!R && (R = n.getAttribute("clip-path")) && ((R = b._g.doc.getElementById(R.replace(/(^url\(#|\)$)/g,
            ""))) && R.parentNode.removeChild(R), k(n, {
            "clip-path": ""
           }), delete c.clip);
           break;
          case "path":
           "path" == c.type && (k(n, {
            d: R ? J.path = b._pathToAbsolute(R) : b._availableAttrs.path
           }), c._.dirty = 1, c._.arrows && ("startString" in c._.arrows && p(c, c._.arrows.startString), "endString" in c._.arrows && p(c, c._.arrows.endString, 1)));
           break;
          case "width":
           if (n.setAttribute(l, R), c._.dirty = 1, J.fx) l = "x", R = J.x;
           else break;
          case "x":
           J.fx && (R = -J.x - (J.width || 0));
          case "rx":
           if ("rx" == l && "rect" == c.type) break;
          case "cx":
           n.setAttribute(l, R);
           c.pattern &&
            L(c);
           c._.dirty = 1;
           break;
          case "height":
           if (n.setAttribute(l, R), c._.dirty = 1, J.fy) l = "y", R = J.y;
           else break;
          case "y":
           J.fy && (R = -J.y - (J.height || 0));
          case "ry":
           if ("ry" == l && "rect" == c.type) break;
          case "cy":
           n.setAttribute(l, R);
           c.pattern && L(c);
           c._.dirty = 1;
           break;
          case "r":
           "rect" == c.type ? k(n, {
            rx: R,
            ry: R
           }) : n.setAttribute(l, R);
           c._.dirty = 1;
           break;
          case "src":
           "image" == c.type && n.setAttributeNS("http://www.w3.org/1999/xlink", "href", R);
           break;
          case "stroke-width":
           if (1 != c._.sx || 1 != c._.sy) R /= h(w(c._.sx), w(c._.sy)) || 1;
           d._vbSize && (R *=
            d._vbSize);
           f && 0 === R && (R = 1E-6);
           n.setAttribute(l, R);
           J["stroke-dasharray"] && G(c, J["stroke-dasharray"], t);
           c._.arrows && ("startString" in c._.arrows && p(c, c._.arrows.startString), "endString" in c._.arrows && p(c, c._.arrows.endString, 1));
           break;
          case "stroke-dasharray":
           G(c, R, t);
           break;
          case "fill":
           var r = a(R).match(b._ISURL);
           if (r) {
            var X = k("pattern"),
             A = k("image");
            X.id = b.createUUID();
            k(X, {
             x: 0,
             y: 0,
             patternUnits: "userSpaceOnUse",
             height: 1,
             width: 1
            });
            k(A, {
             x: 0,
             y: 0,
             "xlink:href": r[1]
            });
            X.appendChild(A);
            (function (a) {
             b._preload(r[1],
              function () {
               var b = this.offsetWidth,
                c = this.offsetHeight;
               k(a, {
                width: b,
                height: c
               });
               k(A, {
                width: b,
                height: c
               });
               d.safari()
              })
            })(X);
            d.defs.appendChild(X);
            g.fill = "url('" + b._url + "#" + X.id + "')";
            k(n, {
             fill: g.fill
            });
            c.pattern = X;
            c.pattern && L(c);
            break
           }
           D = b.getRGB(R);
           if (!D.error) delete t.gradient, delete J.gradient, !b.is(J.opacity, "undefined") && b.is(t.opacity, "undefined") && k(n, {
             opacity: J.opacity
            }), !b.is(J["fill-opacity"], "undefined") && b.is(t["fill-opacity"], "undefined") && k(n, {
             "fill-opacity": J["fill-opacity"]
            }), c.gradient &&
            S(c);
           else if (("circle" == c.type || "ellipse" == c.type || "r" != a(R).charAt()) && da(c, R)) {
            if ("opacity" in J || "fill-opacity" in J)
             if (D = b._g.doc.getElementById(n.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) D = D.getElementsByTagName("stop"), k(D[D.length - 1], {
              "stop-opacity": ("opacity" in J ? J.opacity : 1) * ("fill-opacity" in J ? J["fill-opacity"] : 1)
             });
            J.gradient = R;
            J.fill = "none";
            g.fill = "";
            break
           }
           D.hasOwnProperty("opacity") ? (k(n, {
             "fill-opacity": g.fillOpacity = 1 < D.opacity ? D.opacity / 100 : D.opacity
            }), c._.fillOpacityDirty = !0) :
            c._.fillOpacityDirty && b.is(J["fill-opacity"], "undefined") && b.is(t["fill-opacity"], "undefined") && (n.removeAttribute("fill-opacity"), g.fillOpacity = "", delete c._.fillOpacityDirty);
          case "stroke":
           D = b.getRGB(R);
           n.setAttribute(l, D.hex);
           g[l] = D.hex;
           "stroke" == l && (D.hasOwnProperty("opacity") ? (k(n, {
            "stroke-opacity": g.strokeOpacity = 1 < D.opacity ? D.opacity / 100 : D.opacity
           }), c._.strokeOpacityDirty = !0) : c._.strokeOpacityDirty && b.is(J["stroke-opacity"], "undefined") && b.is(t["stroke-opacity"], "undefined") && (n.removeAttribute("stroke-opacity"),
            g.strokeOpacity = "", delete c._.strokeOpacityDirty), c._.arrows && ("startString" in c._.arrows && p(c, c._.arrows.startString), "endString" in c._.arrows && p(c, c._.arrows.endString, 1)));
           break;
          case "gradient":
           "circle" != c.type && "ellipse" != c.type && "r" == a(R).charAt() || da(c, R);
           break;
          case "line-height":
          case "vertical-align":
           break;
          case "visibility":
           "hidden" === R ? c.hide() : c.show();
           break;
          case "opacity":
           J.gradient && !J.hasOwnProperty("stroke-opacity") && k(n, {
            "stroke-opacity": 1 < R ? R / 100 : R
           });
          case "fill-opacity":
           if (J.gradient) {
            if (D =
             b._g.doc.getElementById(n.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) D = D.getElementsByTagName("stop"), k(D[D.length - 1], {
             "stop-opacity": R
            });
            break
           }
          default:
           "font-size" == l && (R = e(R, 10) + "px"), D = l.replace(/(\-.)/g, function (a) {
            return a.substring(1).toUpperCase()
           }), g[D] = R, c._.dirty = 1, n.setAttribute(l, R)
          }
         }
         "text" === c.type && H(c, t);
        g.visibility = u
       }
      },
      H = function (e, h) {
       if ("text" == e.type && (h.hasOwnProperty("text") || h.hasOwnProperty("font") || h.hasOwnProperty("font-size") || h.hasOwnProperty("x") || h.hasOwnProperty("y") ||
         h.hasOwnProperty("line-height") || h.hasOwnProperty("vertical-align"))) {
        var w = e.attrs,
         n = e.node,
         J = n.firstChild && b._g.doc.defaultView.getComputedStyle(n.firstChild, ""),
         M = J ? c(b._g.doc.defaultView.getComputedStyle(n.firstChild, "").getPropertyValue("font-size")) : 10,
         f = c(h["line-height"] || w["line-height"]) || 1.2 * M,
         d = w.hasOwnProperty("vertical-align") ? w["vertical-align"] : "middle",
         g = (h.direction || (J ? J.getPropertyValue("direction") : "initial")).toLowerCase(),
         u = !!document.documentMode;
        isNaN(f) && (f = 1.2 * M);
        b.is(h.text,
         "array") && (h.text = h.text.join("<br>"));
        d = "top" === d ? -.5 : "bottom" === d ? .5 : 0;
        if (h.hasOwnProperty("text") && (h.text !== w.text || e._textdirty)) {
         for (w.text = h.text; n.firstChild;) n.removeChild(n.firstChild);
         for (var R = a(h.text).split(/\n|<br\s*?\/?>/ig), M = [], S = 0, l = R.length; S < l; S++) J = k("tspan"), S ? k(J, {
           dy: f,
           x: w.x
          }) : k(J, {
           dy: f * R.length * d,
           x: w.x
          }), R[S] || (J.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), R[S] = " "), J.appendChild(b._g.doc.createTextNode(R[S])), n.appendChild(J), M[S] = J, !u &&
          "rtl" === g && S < l - 1 && (J = k("tspan"), k(J, {
           visibility: "hidden",
           "font-size": "0px"
          }), J.appendChild(b._g.doc.createTextNode("i")), n.appendChild(J));
         e._textdirty = !1
        }
        else
         for (M = n.getElementsByTagName("tspan"), S = u = 0, l = M.length; S < l; S++)
          if (J = M[S], g = J.attributes[0], !g || "visibility" !== g.name && "visibility" !== g.nodeName || "hidden" !== g.value && "hidden" !== g.nodeValue) S ? k(J, {
           dy: f,
           x: w.x
          }) : (g = M[1] && M[1].attributes[0], !g || "visibility" !== g.name && "visibility" !== g.nodeName || "hidden" !== g.value && "hidden" !== g.nodeValue || (u = t.floor(.5 *
           M.length)), k(M[0], {
           dy: f * (M.length - u) * d,
           x: w.x
          }));
        k(n, {
         x: w.x,
         y: w.y
        });
        e._.dirty = 1;
        n = e._getBBox();
        f = w.y - (n.y + n.height / 2);
        if (n.isCalculated) switch (w["vertical-align"]) {
        case "top":
         f = .75 * n.height;
         break;
        case "bottom":
         f = -(.25 * n.height);
         break;
        default:
         f = w.y - (n.y + .25 * n.height)
        }
        f && b.is(f, "finite") && M[0] && k(M[0], {
         dy: f
        })
       }
      },
      ka = function (a, c, e) {
       e = e || c;
       e.canvas && e.canvas.appendChild(a);
       this.node = this[0] = a;
       a.raphael = !0;
       a.raphaelid = this.id = b._oid++;
       this.matrix = b.matrix();
       this.realPath = null;
       this.attrs = this.attrs || {};
       this.followers =
        this.followers || [];
       this.paper = c;
       this.ca = this.customAttributes = this.customAttributes || new c._CustomAttributes;
       this._ = {
        transform: [],
        sx: 1,
        sy: 1,
        deg: 0,
        dx: 0,
        dy: 0,
        dirty: 1
       };
       this.parent = e;
       !e.bottom && (e.bottom = this);
       (this.prev = e.top) && (e.top.next = this);
       e.top = this;
       this.next = null
      },
      r = b.el;
     ka.prototype = r;
     r.constructor = ka;
     b._engine.getNode = function (a) {
      a = a.node || a[0].node;
      return a.titleNode || a
     };
     b._engine.getLastNode = function (a) {
      a = a.node || a[a.length - 1].node;
      return a.titleNode || a
     };
     r.rotate = function (b, e, t) {
      if (this.removed) return this;
      b = a(b).split(M);
      b.length - 1 && (e = c(b[1]), t = c(b[2]));
      b = c(b[0]);
      null == t && (e = t);
      if (null == e || null == t) t = this.getBBox(1), e = t.x + t.width / 2, t = t.y + t.height / 2;
      this.transform(this._.transform.concat([["r", b, e, t]]));
      return this
     };
     r.scale = function (b, e, t, h) {
      var w;
      if (this.removed) return this;
      b = a(b).split(M);
      b.length - 1 && (e = c(b[1]), t = c(b[2]), h = c(b[3]));
      b = c(b[0]);
      null == e && (e = b);
      null == h && (t = h);
      if (null == t || null == h) w = this.getBBox(1);
      t = null == t ? w.x + w.width / 2 : t;
      h = null == h ? w.y + w.height / 2 : h;
      this.transform(this._.transform.concat([["s",
b, e, t, h]]));
      return this
     };
     r.translate = function (b, e) {
      if (this.removed) return this;
      b = a(b).split(M);
      b.length - 1 && (e = c(b[1]));
      b = c(b[0]) || 0;
      this.transform(this._.transform.concat([["t", b, +e || 0]]));
      return this
     };
     r.transform = function (a) {
      var c = this._;
      if (null == a) return c.transform;
      b._extractTransform(this, a);
      this.clip && !c.clipispath && k(this.clip, {
       transform: this.matrix.invert()
      });
      this.pattern && L(this);
      this.node && k(this.node, {
       transform: this.matrix
      });
      if (1 != c.sx || 1 != c.sy) a = this.attrs.hasOwnProperty("stroke-width") ?
       this.attrs["stroke-width"] : 1, this.attr({
        "stroke-width": a
       });
      return this
     };
     r.hide = function () {
      !this.removed && this.paper.safari(this.node.style.display = "none");
      return this
     };
     r.show = function () {
      !this.removed && this.paper.safari(this.node.style.display = "");
      return this
     };
     r.remove = function () {
      if (!this.removed && this.parent.canvas) {
       var a = b._engine.getNode(this),
        c = this.paper,
        e = c.defs;
       c.__set__ && c.__set__.exclude(this);
       d.unbind("raphael.*.*." + this.id);
       for (this.gradient && e && S(this); e = this.followers.pop();) e.el.remove();
       for (; e = this.bottom;) e.remove();
       this._drag && this.undrag();
       if (this.events)
        for (; e = this.events.pop();) e.unbind();
       this.parent.canvas.removeChild(a);
       this.removeData();
       delete c._elementsById[this.id];
       b._tear(this, this.parent);
       for (e in this) this[e] = "function" === typeof this[e] ? b._removedFactory(e) : null;
       this.removed = !0
      }
     };
     r._getBBox = function () {
      var a = this.node,
       b = {},
       c = this.attrs,
       e, t;
      "none" === a.style.display && (this.show(), t = !0);
      try {
       b = a.getBBox(), "text" == this.type && (void 0 === b.x && (b.isCalculated = !0, e = c["text-anchor"],
        b.x = (c.x || 0) - b.width * ("start" === e ? 0 : "middle" === e ? .5 : 1)), void 0 === b.y && (b.isCalculated = !0, e = c["vertical-align"], b.y = (c.y || 0) - b.height * ("bottom" === e ? 1 : "middle" === e ? .5 : 0)))
      }
      catch (h) {}
      finally {
       b = b || {}
      }
      t && this.hide();
      return b
     };
     r.attr = function (a, c) {
      if (this.removed) return this;
      if (null == a) {
       var e = {},
        t;
       for (t in this.attrs) this.attrs.hasOwnProperty(t) && (e[t] = this.attrs[t]);
       e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient;
       e.transform = this._.transform;
       e.visibility = "none" === this.node.style.display ?
        "hidden" : "visible";
       return e
      }
      if (null == c && b.is(a, "string")) {
       if ("fill" == a && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
       if ("transform" == a) return this._.transform;
       if ("visibility" == a) return "none" === this.node.style.display ? "hidden" : "visible";
       var e = a.split(M),
        h = {},
        w = 0;
       for (t = e.length; w < t; w++) a = e[w], a in this.attrs ? h[a] = this.attrs[a] : b.is(this.ca[a], "function") ? h[a] = this.ca[a].def : h[a] = b._availableAttrs[a];
       return t - 1 ? h : h[e[0]]
      }
      if (null == c && b.is(a, "array")) {
       h = {};
       w = 0;
       for (t = a.length; w <
        t; w++) h[a[w]] = this.attr(a[w]);
       return h
      }
      null != c ? (e = {}, e[a] = c) : null != a && b.is(a, "object") && (e = a);
      for (w in e) d("raphael.attr." + w + "." + this.id, this, e[w], w);
      var n = {};
      for (w in this.ca)
       if (this.ca[w] && e.hasOwnProperty(w) && b.is(this.ca[w], "function") && !this.ca["_invoked" + w]) {
        this.ca["_invoked" + w] = !0;
        t = this.ca[w].apply(this, [].concat(e[w]));
        delete this.ca["_invoked" + w];
        for (h in t) t.hasOwnProperty(h) && (e[h] = t[h]);
        this.attrs[w] = e[w];
        !1 === t && (n[w] = e[w], delete e[w])
       }
      s(this, e);
      var J, w = 0;
      for (t = this.followers.length; w <
       t; w++) J = this.followers[w], J.cb && !J.cb.call(J.el, e, this) || J.el.attr(e);
      for (h in n) e[h] = n[h];
      return this
     };
     r.blur = function (a) {
      if (0 !== +a) {
       var c = k("filter"),
        e = k("feGaussianBlur");
       this.attrs.blur = a;
       c.id = b.createUUID();
       k(e, {
        stdDeviation: +a || 1.5
       });
       c.appendChild(e);
       this.paper.defs.appendChild(c);
       this._blur = c;
       k(this.node, {
        filter: "url('" + b._url + "#" + c.id + "')"
       })
      }
      else this._blur && (this._blur.parentNode.removeChild(this._blur), delete this._blur, delete this.attrs.blur), this.node.removeAttribute("filter")
     };
     r.on = function (a,
      c) {
      if (this.removed) return this;
      var e = c;
      b.supportsTouch && (a = b._touchMap[a] || "click" === a && "touchstart" || a, e = function (a) {
       a.preventDefault();
       c()
      });
      this.node["on" + a] = e;
      return this
     };
     b._engine.path = function (a, b, c) {
      var e = k("path");
      a = new ka(e, a, c);
      a.type = "path";
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.group = function (a, b, c) {
      var e = k("g");
      a = new ka(e, a, c);
      a.type = "group";
      a.canvas = a.node;
      a.top = a.bottom = null;
      a._id = b || "";
      b && e.setAttribute("class", "raphael-group-" + a.id + "-" + b);
      return a
     };
     b._engine.circle = function (a, b, c) {
      var e =
       k("circle");
      a = new ka(e, a, c);
      a.type = "circle";
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.rect = function (a, b, c) {
      var e = k("rect");
      a = new ka(e, a, c);
      a.type = "rect";
      b.rx = b.ry = b.r;
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.ellipse = function (a, b, c) {
      var e = k("ellipse");
      a = new ka(e, a, c);
      a.type = "ellipse";
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.image = function (a, b, c) {
      var e = k("image");
      a = new ka(e, a, c);
      a.type = "image";
      e.setAttribute("preserveAspectRatio", "none");
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.text = function (a, b, c) {
      var e = k("text");
      a = new ka(e, a,
       c);
      a.type = "text";
      a._textdirty = !0;
      s(a, b);
      X(a, b);
      return a
     };
     b._engine.setSize = function (a, b) {
      this.width = a || this.width;
      this.height = b || this.height;
      this.canvas.setAttribute("width", this.width);
      this.canvas.setAttribute("height", this.height);
      this._viewBox && this.setViewBox.apply(this, this._viewBox);
      return this
     };
     b._engine.create = function () {
      var a = b._getContainer.apply(0, arguments),
       c = a && a.container,
       e = a.x,
       t = a.y,
       h = a.width,
       a = a.height;
      if (!c) throw Error("SVG container not found.");
      var w = k("svg"),
       n, e = e || 0,
       t = t || 0,
       h =
       h || 512,
       a = a || 342;
      k(w, {
       height: a,
       version: 1.1,
       width: h,
       xmlns: "http://www.w3.org/2000/svg"
      });
      1 == c ? (w.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;position:absolute;left:" + e + "px;top:" + t + "px", b._g.doc.body.appendChild(w), n = 1) : (w.style.cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;position:relative",
       c.firstChild ? c.insertBefore(w, c.firstChild) : c.appendChild(w));
      c = new b._Paper;
      c.width = h;
      c.height = a;
      c.canvas = w;
      k(w, {
       id: "raphael-paper-" + c.id
      });
      c.clear();
      c._left = c._top = 0;
      n && (c.renderfix = function () {});
      c.renderfix();
      return c
     };
     b._engine.setViewBox = function (a, b, c, e, t) {
      d("raphael.setViewBox", this, this._viewBox, [a, b, c, e, t]);
      var w = h(c / this.width, e / this.height),
       n = this.top,
       J = t ? "meet" : "xMinYMin",
       M;
      null == a ? (this._vbSize && (w = 1), delete this._vbSize, M = "0 0 " + this.width + " " + this.height) : (this._vbSize = w, M = a + " " + b +
       " " + c + " " + e);
      for (k(this.canvas, {
        viewBox: M,
        preserveAspectRatio: J
       }); w && n;) J = "stroke-width" in n.attrs ? n.attrs["stroke-width"] : 1, n.attr({
       "stroke-width": J
      }), n._.dirty = 1, n._.dirtyT = 1, n = n.prev;
      this._viewBox = [a, b, c, e, !!t];
      return this
     };
     b.prototype.renderfix = function () {
      var a = this.canvas,
       b = a.style,
       c;
      try {
       c = a.getScreenCTM() || a.createSVGMatrix()
      }
      catch (e) {
       c = a.createSVGMatrix()
      }
      a = -c.e % 1;
      c = -c.f % 1;
      if (a || c) a && (this._left = (this._left + a) % 1, b.left = this._left + "px"), c && (this._top = (this._top + c) % 1, b.top = this._top + "px")
     };
     b.prototype._desc =
      function (a) {
       var c = this.desc;
       if (c)
        for (; c.firstChild;) c.removeChild(c.firstChild);
       else this.desc = c = k("desc"), this.canvas.appendChild(c);
       c.appendChild(b._g.doc.createTextNode(b.is(a, "string") ? a : "Created with Red Raphaël " + b.version))
      };
     b.prototype.clear = function () {
      var a;
      for (d("raphael.clear", this); a = this.bottom;) a.remove();
      for (a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
      this.bottom = this.top = null;
      a.appendChild(this.desc = k("desc"));
      a.appendChild(this.defs = k("defs"))
     };
     b.prototype.remove = function () {
      var a;
      for (d("raphael.remove", this); a = this.bottom;) a.remove();
      this.defs && this.defs.parentNode.removeChild(this.defs);
      this.desc && this.desc.parentNode.removeChild(this.desc);
      this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
      for (a in this) this[a] = "function" == typeof this[a] ? b._removedFactory(a) : null;
      this.removed = !0
     };
     var A = b.st,
      m;
     for (m in r) r.hasOwnProperty(m) && !A.hasOwnProperty(m) && (A[m] = function (a) {
      return function () {
       var b = arguments;
       return this.forEach(function (c) {
        c[a].apply(c, b)
       })
      }
     }(m))
    }
   })();
   (function () {
    if (b.vml) {
     var a = String,
      c = parseFloat,
      e = Math,
      t = e.round,
      h = e.max,
      w = e.min,
      n = e.sqrt,
      J = e.abs,
      M = /[, ]+/,
      f = b.eve,
      d = {
       M: "m",
       L: "l",
       C: "c",
       Z: "x",
       m: "t",
       l: "r",
       c: "v",
       z: "x"
      },
      g = /([clmz]),?([^clmz]*)/gi,
      u = / progid:\S+Blur\([^\)]+\)/g,
      k = /-?[^,\s-]+/g,
      R = {
       path: 1,
       rect: 1,
       image: 1
      },
      S = {
       circle: 1,
       ellipse: 1
      },
      l = function (c) {
       var e = /[ahqstv]/ig,
        h = b._pathToAbsolute;
       a(c).match(e) && (h = b._path2curve);
       e = /[clmz]/g;
       if (h == b._pathToAbsolute && !a(c).match(e)) return (c = a(c).replace(g, function (a, b, c) {
        var e = [],
         h = "m" == b.toLowerCase(),
         w = d[b];
        c.replace(k, function (a) {
         h && 2 == e.length && (w += e + d["m" == b ? "l" : "L"], e = []);
         e.push(t(21600 * a))
        });
        return w + e
       })) || "m0,0";
       var e = h(c),
        w;
       c = [];
       for (var n = 0, J = e.length; n < J; n++) {
        h = e[n];
        w = e[n][0].toLowerCase();
        "z" == w && (w = "x");
        for (var M = 1, f = h.length; M < f; M++) w += t(21600 * h[M]) + (M != f - 1 ? "," : "");
        c.push(w)
       }
       return c.length ? c.join(" ") : "m0,0"
      },
      da = function (a, c, e) {
       var t = b.matrix();
       t.rotate(-a, .5, .5);
       return {
        dx: t.x(c, e),
        dy: t.y(c, e)
       }
      },
      L = function (a, b, c, e, t, h) {
       var w = a._,
        n = a.matrix,
        M = w.fillpos;
       a = a.node;
       var f = a.style,
        d = 1,
        g =
        "",
        u = 21600 / b,
        k = 21600 / c;
       f.visibility = "hidden";
       if (b && c) {
        a.coordsize = J(u) + " " + J(k);
        f.rotation = h * (0 > b * c ? -1 : 1);
        h && (t = da(h, e, t), e = t.dx, t = t.dy);
        0 > b && (g += "x");
        0 > c && (g += " y") && (d = -1);
        f.flip = g;
        a.coordorigin = e * -u + " " + t * -k;
        if (M || w.fillsize)
         if (e = (e = a.getElementsByTagName("fill")) && e[0]) a.removeChild(e), M && (t = da(h, n.x(M[0], M[1]), n.y(M[0], M[1])), e.position = t.dx * d + " " + t.dy * d), w.fillsize && (e.size = w.fillsize[0] * J(b) + " " + w.fillsize[1] * J(c)), a.appendChild(e);
        f.visibility = "visible"
       }
      };
     b._url = "";
     b.toString = function () {
      return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
       this.version
     };
     var D = function (b, c, e) {
       c = a(c).toLowerCase().split("-");
       e = e ? "end" : "start";
       for (var t = c.length, h = "classic", w = "medium", n = "medium"; t--;) switch (c[t]) {
       case "block":
       case "classic":
       case "oval":
       case "diamond":
       case "open":
       case "none":
        h = c[t];
        break;
       case "wide":
       case "narrow":
        n = c[t];
        break;
       case "long":
       case "short":
        w = c[t]
       }
       b = b.node.getElementsByTagName("stroke")[0];
       b[e + "arrow"] = h;
       b[e + "arrowlength"] = w;
       b[e + "arrowwidth"] = n
      },
      p = function (a, b) {
       for (var c in b) f("raphael.attr." + c + "." + a.id, a, b[c], c), a.ca[c] && a.attr(c,
        b[c])
      },
      X = b._setFillAndStroke = function (e, n) {
       if (e.paper.canvas) {
        e.attrs = e.attrs || {};
        var J = e.node,
         f = e.attrs,
         d = J.style,
         g = R[e.type] && (n.x != f.x || n.y != f.y || n.width != f.width || n.height != f.height || n.cx != f.cx || n.cy != f.cy || n.rx != f.rx || n.ry != f.ry || n.r != f.r),
         u = S[e.type] && (f.cx != n.cx || f.cy != n.cy || f.r != n.r || f.rx != n.rx || f.ry != n.ry),
         k = "group" === e.type,
         da;
        for (da in n) n.hasOwnProperty(da) && (f[da] = n[da]);
        g && (f.path = b._getPath[e.type](e), e._.dirty = 1);
        n.href && (J.href = n.href);
        n.title && (J.title = n.title);
        n.target && (J.target =
         n.target);
        n.cursor && (d.cursor = n.cursor);
        "blur" in n && e.blur(n.blur);
        if (n.path && "path" == e.type || g) J.path = l(~a(f.path).toLowerCase().indexOf("r") ? b._pathToAbsolute(f.path) : f.path), "image" == e.type && (e._.fillpos = [f.x, f.y], e._.fillsize = [f.width, f.height], L(e, 1, 1, 0, 0, 0));
        "transform" in n && e.transform(n.transform);
        "rotation" in n && (d = n.rotation, b.is(d, "array") ? e.rotate.apply(e, d) : e.rotate(d));
        "visibility" in n && ("hidden" === n.visibility ? e.hide() : e.show());
        u && (d = +f.cx, u = +f.cy, g = +f.rx || +f.r || 0, da = +f.ry || +f.r ||
         0, J.path = b.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", t(21600 * (d - g)), t(21600 * (u - da)), t(21600 * (d + g)), t(21600 * (u + da)), t(21600 * d)));
        "clip-rect" in n && (d = a(n["clip-rect"]).split(M), 4 == d.length && (d[0] = +d[0], d[1] = +d[1], d[2] = +d[2] + d[0], d[3] = +d[3] + d[1], g = k ? J : J.clipRect || b._g.doc.createElement("div"), u = g.style, k ? (e.clip = d.slice(), g = e.matrix.offset(), g = [c(g[0]), c(g[1])], d[0] -= g[0], d[1] -= g[1], d[2] -= g[0], d[3] -= g[1], u.width = "10800px", u.height = "10800px") : J.clipRect || (u.top = "0", u.left = "0", u.width = e.paper.width +
         "px", u.height = e.paper.height + "px", J.parentNode.insertBefore(g, J), g.appendChild(J), g.raphael = !0, g.raphaelid = J.raphaelid, J.clipRect = g), u.position = "absolute", u.clip = b.format("rect({1}px {2}px {3}px {0}px)", d)), n["clip-rect"] || (k && e.clip ? (J.style.clip = "rect(auto auto auto auto)", delete e.clip) : J.clipRect && (J.clipRect.style.clip = "rect(auto auto auto auto)")));
        e.textpath && (k = e.textpath.style, n.font && (k.font = n.font), n["font-family"] && (k.fontFamily = '"' + n["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,
         "") + '"'), n["font-size"] && (k.fontSize = n["font-size"]), n["font-weight"] && (k.fontWeight = n["font-weight"]), n["font-style"] && (k.fontStyle = n["font-style"]));
        "arrow-start" in n && D(e, n["arrow-start"]);
        "arrow-end" in n && D(e, n["arrow-end"], 1);
        if (null != n.opacity || null != n["stroke-width"] || null != n.fill || null != n.src || null != n.stroke || null != n["stroke-width"] || null != n["stroke-opacity"] || null != n["fill-opacity"] || null != n["stroke-dasharray"] || null != n["stroke-miterlimit"] || null != n["stroke-linejoin"] || null != n["stroke-linecap"]) {
         k =
          J.getElementsByTagName("fill");
         d = -1;
         k = k && k[0];
         !k && (k = H("fill"));
         "image" == e.type && n.src && (k.src = n.src);
         n.fill && (k.on = !0);
         if (null == k.on || "none" == n.fill || null === n.fill) k.on = !1;
         k.on && n.fill && ((u = a(n.fill).match(b._ISURL)) ? (k.parentNode == J && J.removeChild(k), k.rotate = !0, k.src = u[1], k.type = "tile", g = e.getBBox(1), k.position = g.x + " " + g.y, e._.fillpos = [g.x, g.y], b._preload(u[1], function () {
          e._.fillsize = [this.offsetWidth, this.offsetHeight]
         })) : (u = b.getRGB(n.fill), k.color = u.hex, k.src = "", k.type = "solid", u.error && (e.type in {
          circle: 1,
          ellipse: 1
         } || "r" != a(n.fill).charAt()) && G(e, n.fill, k) ? (f.fill = "none", f.gradient = n.fill, k.rotate = !1) : "opacity" in u && !("fill-opacity" in n) && (d = u.opacity)));
         if (-1 !== d || "fill-opacity" in n || "opacity" in n) u = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+d + 1 || 2) - 1), u = w(h(u, 0), 1), k.opacity = u, k.src && (k.color = "none");
         J.appendChild(k);
         k = J.getElementsByTagName("stroke") && J.getElementsByTagName("stroke")[0];
         d = !1;
         !k && (d = k = H("stroke"));
         if (n.stroke && "none" != n.stroke || n["stroke-width"] || null != n["stroke-opacity"] ||
          n["stroke-dasharray"] || n["stroke-miterlimit"] || n["stroke-linejoin"] || n["stroke-linecap"]) k.on = !0;
         "none" != n.stroke && null !== n.stroke && null != k.on && 0 != n.stroke && 0 != n["stroke-width"] || (k.on = !1);
         u = b.getRGB("stroke" in n ? n.stroke : f.stroke);
         k.on && n.stroke && (k.color = u.hex);
         u = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+u.opacity + 1 || 2) - 1);
         g = .75 * (c(n["stroke-width"]) || 1);
         u = w(h(u, 0), 1);
         null == n["stroke-width"] && (g = f["stroke-width"]);
         n["stroke-width"] && (k.weight = g);
         g && 1 > g && (u *= g) && (k.weight = 1);
         k.opacity =
          u;
         n["stroke-linejoin"] && (k.joinstyle = n["stroke-linejoin"]) || d && (d.joinstyle = "miter");
         k.miterlimit = n["stroke-miterlimit"] || 8;
         n["stroke-linecap"] && (k.endcap = "butt" == n["stroke-linecap"] ? "flat" : "square" == n["stroke-linecap"] ? "square" : "round");
         n["stroke-dasharray"] && (u = {
           "-": "shortdash",
           ".": "shortdot",
           "-.": "shortdashdot",
           "-..": "shortdashdotdot",
           ". ": "dot",
           "- ": "dash",
           "--": "longdash",
           "- .": "dashdot",
           "--.": "longdashdot",
           "--..": "longdashdotdot"
          }, k.dashstyle = u.hasOwnProperty(n["stroke-dasharray"]) ? u[n["stroke-dasharray"]] :
          n["stroke-dasharray"].join && n["stroke-dasharray"].join(" ") || "");
         d && J.appendChild(k)
        }
        if ("text" == e.type) {
         e.paper.canvas.style.display = "";
         J = e.paper.span;
         k = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
         u = f["line-height"] && (f["line-height"] + "").match(/\d+(?:\.\d*)?(?=px)/);
         d = J.style;
         f.font && (d.font = f.font);
         f["font-family"] && (d.fontFamily = f["font-family"]);
         f["font-weight"] && (d.fontWeight = f["font-weight"]);
         f["font-style"] && (d.fontStyle = f["font-style"]);
         k = c(f["font-size"] || k && k[0]) || 10;
         d.fontSize = 100 * k + "px";
         u = c(f["line-height"] || u && u[0]) || 12;
         f["line-height"] && (d.lineHeight = 100 * u + "px");
         b.is(n.text, "array") && (n.text = e.textpath.string = n.text.join("\n").replace(/<br\s*?\/?>/ig, "\n"));
         e.textpath.string && (J.innerHTML = a(e.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
         J = J.getBoundingClientRect();
         e.W = f.w = (J.right - J.left) / 100;
         e.H = f.h = (J.bottom - J.top) / 100;
         e.X = f.x;
         e.Y = f.y;
         switch (f["vertical-align"]) {
         case "top":
          e.bby = e.H / 2;
          break;
         case "bottom":
          e.bby = -e.H / 2;
          break;
         default:
          e.bby =
           0
         }("x" in n || "y" in n || void 0 !== e.bby) && (e.path.v = b.format("m{0},{1}l{2},{1}", t(21600 * f.x), t(21600 * (f.y + (e.bby || 0))), t(21600 * f.x) + 1));
         J = "x y text font font-family font-weight font-style font-size line-height".split(" ");
         k = 0;
         for (d = J.length; k < d; k++)
          if (J[k] in n) {
           e._.dirty = 1;
           break
          }
         switch (f["text-anchor"]) {
         case "start":
          e.textpath.style["v-text-align"] = "left";
          e.bbx = e.W / 2;
          break;
         case "end":
          e.textpath.style["v-text-align"] = "right";
          e.bbx = -e.W / 2;
          break;
         default:
          e.textpath.style["v-text-align"] = "center", e.bbx = 0
         }
         e.textpath.style["v-text-kern"] = !0
        }
       }
      },
      G = function (e, t, h) {
       e.attrs = e.attrs || {};
       var w = Math.pow,
        J = "linear",
        f = ".5 .5";
       e.attrs.gradient = t;
       t = a(t).replace(b._radial_gradient, function (a, b) {
        J = "radial";
        b = b && b.split(",") || [];
        var e = b[3],
         t = b[4];
        e && t && (e = c(e), t = c(t), .25 < w(e - .5, 2) + w(t - .5, 2) && (t = n(.25 - w(e - .5, 2)) * (2 * (.5 < t) - 1) + .5), f = e + " " + t);
        return ""
       });
       t = t.split(/\s*\-\s*/);
       if ("linear" == J) {
        var M = t.shift(),
         M = -c(M);
        if (isNaN(M)) return null
       }
       t = b._parseDots(t);
       if (!t) return null;
       e = e.shape || e.node;
       if (t.length) {
        h.parentNode == e && e.removeChild(h);
        h.on = !0;
        h.method =
         "none";
        h.color = t[0].color;
        h.color2 = t[t.length - 1].color;
        for (var d = [], g = 1, u = void 0 === t[0].opacity ? 1 : t[0].opacity, k = 0, R = t.length; k < R; k++) t[k].offset && d.push(t[k].offset + " " + t[k].color), void 0 !== t[k].opacity && (g = t[k].opacity);
        h.colors = d.length ? d.join() : "0% " + h.color;
        h.opacity = g;
        h["o:opacity2"] = u;
        "radial" == J ? (h.type = "gradientTitle", h.focus = "100%", h.focussize = "0 0", h.focusposition = f, h.angle = 0) : (h.type = "gradient", h.angle = (270 - M) % 360);
        e.appendChild(h)
       }
       return 1
      },
      s = function (a, c, e) {
       e = e || c;
       var t;
       e.canvas && e.canvas.appendChild(a);
       t = H("skew");
       t.on = !0;
       a.appendChild(t);
       this.skew = t;
       this.node = this[0] = a;
       a.raphael = !0;
       a.raphaelid = this.id = b._oid++;
       this.Y = this.X = 0;
       this.attrs = this.attrs || {};
       this.followers = this.followers || [];
       this.paper = c;
       this.ca = this.customAttributes = this.customAttributes || new c._CustomAttributes;
       this.matrix = b.matrix();
       this._ = {
        transform: [],
        sx: 1,
        sy: 1,
        dx: 0,
        dy: 0,
        deg: 0,
        dirty: 1,
        dirtyT: 1
       };
       this.parent = e;
       !e.bottom && (e.bottom = this);
       (this.prev = e.top) && (e.top.next = this);
       e.top = this;
       this.next = null
      },
      e = b.el;
     s.prototype = e;
     e.constructor =
      s;
     e.transform = function (c) {
      if (null == c) return this._.transform;
      var e = this.paper._viewBoxShift,
       t = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : "",
       h;
      e && (h = c = a(c).replace(/\.{3}|\u2026/g, this._.transform || ""));
      b._extractTransform(this, t + c);
      var e = this.matrix.clone(),
       w = this.skew;
      c = this.node;
      var t = ~a(this.attrs.fill).indexOf("-"),
       n = !a(this.attrs.fill).indexOf("url(");
      e.translate(-.5, -.5);
      n || t || "image" == this.type ? (w.matrix = "1 0 0 1", w.offset = "0 0", w = e.split(), t && w.noRotation || !w.isSimple ? (c.style.filter = e.toFilter(),
       e = this.getBBox(), t = this.getBBox(1), n = e.x2 && t.x2 && "x2" || "x", w = e.y2 && t.y2 && "y2" || "y", n = e[n] - t[n], e = e[w] - t[w], c.coordorigin = -21600 * n + " " + -21600 * e, L(this, 1, 1, n, e, 0)) : (c.style.filter = "", L(this, w.scalex, w.scaley, w.dx, w.dy, w.rotate))) : (c.style.filter = "", w.matrix = a(e), w.offset = e.offset());
      h && (this._.transform = h);
      return this
     };
     e.rotate = function (b, e, t) {
      if (this.removed) return this;
      if (null != b) {
       b = a(b).split(M);
       b.length - 1 && (e = c(b[1]), t = c(b[2]));
       b = c(b[0]);
       null == t && (e = t);
       if (null == e || null == t) t = this.getBBox(1), e = t.x +
        t.width / 2, t = t.y + t.height / 2;
       this._.dirtyT = 1;
       this.transform(this._.transform.concat([["r", b, e, t]]));
       return this
      }
     };
     e.translate = function (b, e) {
      if (this.removed) return this;
      b = a(b).split(M);
      b.length - 1 && (e = c(b[1]));
      b = c(b[0]) || 0;
      e = +e || 0;
      this._.bbox && (this._.bbox.x += b, this._.bbox.y += e);
      this.transform(this._.transform.concat([["t", b, e]]));
      return this
     };
     e.scale = function (b, e, t, h) {
      if (this.removed) return this;
      b = a(b).split(M);
      b.length - 1 && (e = c(b[1]), t = c(b[2]), h = c(b[3]), isNaN(t) && (t = null), isNaN(h) && (h = null));
      b = c(b[0]);
      null == e && (e = b);
      null == h && (t = h);
      if (null == t || null == h) var w = this.getBBox(1);
      t = null == t ? w.x + w.width / 2 : t;
      h = null == h ? w.y + w.height / 2 : h;
      this.transform(this._.transform.concat([["s", b, e, t, h]]));
      this._.dirtyT = 1;
      return this
     };
     e.hide = function (a) {
      !this.removed && (this.node.style.display = "none");
      return this
     };
     e.show = function (a) {
      !this.removed && (this.node.style.display = "");
      return this
     };
     e._getBBox = function () {
      return this.removed ? {} : {
       x: this.X + (this.bbx || 0) - this.W / 2,
       y: this.Y + (this.bby || 0) - this.H / 2,
       width: this.W,
       height: this.H
      }
     };
     e.remove = function () {
      if (!this.removed && this.parent.canvas) {
       var a = b._engine.getNode(this),
        c = this.paper,
        e = this.shape;
       c.__set__ && c.__set__.exclude(this);
       f.unbind("raphael.*.*." + this.id);
       e && e.parentNode.removeChild(e);
       for (a.parentNode && a.parentNode.removeChild(a); a = this.followers.pop();) a.el.remove();
       for (; a = this.bottom;) a.remove();
       this._drag && this.undrag();
       if (this.events)
        for (; a = this.events.pop();) a.unbind();
       this.removeData();
       delete c._elementsById[this.id];
       b._tear(this, this.parent);
       for (a in this) this[a] =
        "function" === typeof this[a] ? b._removedFactory(a) : null;
       this.removed = !0
      }
     };
     e.attr = function (a, c) {
      if (this.removed) return this;
      if (null == a) {
       var e = {},
        t;
       for (t in this.attrs) this.attrs.hasOwnProperty(t) && (e[t] = this.attrs[t]);
       e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient;
       e.transform = this._.transform;
       e.visibility = "none" === this.node.style.display ? "hidden" : "visible";
       return e
      }
      if (null == c && b.is(a, "string")) {
       if ("fill" == a && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
       if ("visibility" == a) return "none" === this.node.style.display ? "hidden" : "visible";
       var e = a.split(M),
        h = {},
        w = 0;
       for (t = e.length; w < t; w++) a = e[w], a in this.attrs ? h[a] = this.attrs[a] : b.is(this.ca[a], "function") ? h[a] = this.ca[a].def : h[a] = b._availableAttrs[a];
       return t - 1 ? h : h[e[0]]
      }
      if (this.attrs && null == c && b.is(a, "array")) {
       h = {};
       w = 0;
       for (t = a.length; w < t; w++) h[a[w]] = this.attr(a[w]);
       return h
      }
      null != c && (e = {}, e[a] = c);
      null == c && b.is(a, "object") && (e = a);
      for (w in e) f("raphael.attr." + w + "." + this.id, this, e[w], w);
      if (e) {
       var n = {};
       for (w in this.ca)
        if (this.ca[w] &&
         e.hasOwnProperty(w) && b.is(this.ca[w], "function") && !this.ca["_invoked" + w]) {
         this.ca["_invoked" + w] = !0;
         t = this.ca[w].apply(this, [].concat(e[w]));
         delete this.ca["_invoked" + w];
         for (h in t) t.hasOwnProperty(h) && (e[h] = t[h]);
         this.attrs[w] = e[w];
         !1 === t && (n[w] = e[w], delete e[w])
        }
        "text" in e && "text" == this.type && (b.is(e.text, "array") && (e.text = e.text.join("\n")), this.textpath.string = e.text.replace(/<br\s*?\/?>/ig, "\n"));
       X(this, e);
       var J, w = 0;
       for (t = this.followers.length; w < t; w++) J = this.followers[w], J.cb && !J.cb.call(J.el,
        e, this) || J.el.attr(e);
       for (h in n) e[h] = n[h]
      }
      return this
     };
     e.blur = function (a) {
      var c = this.node.runtimeStyle,
       e = c.filter,
       e = e.replace(u, "");
      0 !== +a ? (this.attrs.blur = a, c.filter = e + "  progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+a || 1.5) + ")", c.margin = b.format("-{0}px 0 0 -{0}px", t(+a || 1.5))) : (c.filter = e, c.margin = 0, delete this.attrs.blur);
      return this
     };
     e.on = function (a, c) {
      if (this.removed) return this;
      this.node["on" + a] = function () {
       var a = b._g.win.event;
       a.target = a.srcElement;
       c(a)
      };
      return this
     };
     b._engine.getNode =
      function (a) {
       a = a.node || a[0].node;
       return a.clipRect || a
      };
     b._engine.getLastNode = function (a) {
      a = a.node || a[a.length - 1].node;
      return a.clipRect || a
     };
     b._engine.group = function (a, c, e) {
      var t = b._g.doc.createElement("div"),
       h = new s(t, a, e);
      t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
      h._id = c || "";
      c && (t.className = "raphael-group-" + h.id + "-" + c);
      (e || a).canvas.appendChild(t);
      h.type = "group";
      h.canvas = h.node;
      h.transform = b._engine.group.transform;
      h.top = null;
      h.bottom = null;
      return h
     };
     b._engine.group.transform =
      function (e) {
       if (null == e) return this._.transform;
       var t = this.node.style,
        h = this.clip,
        w = this.paper._viewBoxShift,
        n = w ? "s" + [w.scale, w.scale] + "-1-1t" + [w.dx, w.dy] : "";
       w && (e = a(e).replace(/\.{3}|\u2026/g, this._.transform || ""));
       b._extractTransform(this, n + e);
       e = this.matrix;
       n = e.offset();
       w = c(n[0]) || 0;
       n = c(n[1]) || 0;
       t.left = w + "px";
       t.top = n + "px";
       t.zoom = (this._.tzoom = e.get(0)) + "";
       h && (t.clip = b.format("rect({1}px {2}px {3}px {0}px)", [h[0] - w, h[1] - n, h[2] - w, h[3] - n]));
       return this
      };
     b._engine.path = function (a, b, c) {
      var e = H("shape");
      e.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
      e.coordsize = "21600 21600";
      e.coordorigin = a.coordorigin;
      a = new s(e, a, c);
      a.type = b.type || "path";
      a.path = [];
      a.Path = "";
      b.type && delete b.type;
      X(a, b);
      p(a, b);
      return a
     };
     b._engine.rect = function (a, c, e) {
      var t = b._rectPath(c.x, c.y, c.w, c.h, c.r);
      c.path = t;
      c.type = "rect";
      a = a.path(c, e);
      c = a.attrs;
      a.X = c.x;
      a.Y = c.y;
      a.W = c.width;
      a.H = c.height;
      c.path = t;
      return a
     };
     b._engine.ellipse = function (a, b, c) {
      b.type = "ellipse";
      a = a.path(b, c);
      b = a.attrs;
      a.X = b.x - b.rx;
      a.Y = b.y - b.ry;
      a.W = 2 * b.rx;
      a.H = 2 * b.ry;
      return a
     };
     b._engine.circle = function (a, b, c) {
      b.type = "circle";
      a = a.path(b, c);
      b = a.attrs;
      a.X = b.x - b.r;
      a.Y = b.y - b.r;
      a.W = a.H = 2 * b.r;
      return a
     };
     b._engine.image = function (a, c, e) {
      var t = b._rectPath(c.x, c.y, c.w, c.h);
      c.path = t;
      c.type = "image";
      c.stroke = "none";
      a = a.path(c, e);
      e = a.attrs;
      var t = a.node,
       h = t.getElementsByTagName("fill")[0];
      e.src = c.src;
      a.X = e.x = c.x;
      a.Y = e.y = c.y;
      a.W = e.width = c.w;
      a.H = e.height = c.h;
      h.parentNode == t && t.removeChild(h);
      h.rotate = !0;
      h.src = e.src;
      h.type = "tile";
      a._.fillpos = [e.x, e.y];
      a._.fillsize = [e.w, e.h];
      t.appendChild(h);
      L(a, 1, 1, 0, 0, 0);
      return a
     };
     b._engine.text = function (c, e, h) {
      var w = H("shape"),
       n = H("path"),
       J = H("textpath");
      x = e.x || 0;
      y = e.y || 0;
      text = e.text;
      n.v = b.format("m{0},{1}l{2},{1}", t(21600 * e.x), t(21600 * e.y), t(21600 * e.x) + 1);
      n.textpathok = !0;
      J.string = a(e.text).replace(/<br\s*?\/?>/ig, "\n");
      J.on = !0;
      w.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
      w.coordsize = "21600 21600";
      w.coordorigin = "0 0";
      c = new s(w, c, h);
      c.shape = w;
      c.path = n;
      c.textpath = J;
      c.type = "text";
      c.attrs.text = a(e.text ||
       "");
      c.attrs.x = e.x;
      c.attrs.y = e.y;
      c.attrs.w = 1;
      c.attrs.h = 1;
      X(c, e);
      p(c, e);
      w.appendChild(J);
      w.appendChild(n);
      return c
     };
     b._engine.setSize = function (a, c) {
      var e = this.canvas.style;
      this.width = a;
      this.height = c;
      a == +a && (a += "px");
      c == +c && (c += "px");
      e.width = a;
      e.height = c;
      e.clip = "rect(0 " + a + " " + c + " 0)";
      this._viewBox && b._engine.setViewBox.apply(this, this._viewBox);
      return this
     };
     b._engine.setViewBox = function (a, b, c, e, t) {
      f("raphael.setViewBox", this, this._viewBox, [a, b, c, e, t]);
      var w = this.width,
       n = this.height,
       J = 1 / h(c / w, e / n),
       M,
       d;
      t && (M = n / e, d = w / c, c * M < w && (a -= (w - c * M) / 2 / M), e * d < n && (b -= (n - e * d) / 2 / d));
      this._viewBox = [a, b, c, e, !!t];
      this._viewBoxShift = {
       dx: -a,
       dy: -b,
       scale: J
      };
      this.forEach(function (a) {
       a.transform("...")
      });
      return this
     };
     var H;
     b._engine.initWin = function (c) {
      var e = c.document;
      e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
      try {
       !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), H = b._createNode = function (b, c) {
        var t = e.createElement("<rvml:" + b + ' class="rvml">'),
         h;
        for (h in c) t[h] = a(c[h]);
        return t
       }
      }
      catch (t) {
       H = b._createNode = function (b, c) {
        var t = e.createElement("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'),
         h;
        for (h in c) t[h] = a(c[h]);
        return t
       }
      }
     };
     b._engine.initWin(b._g.win);
     b._engine.create = function () {
      var a = b._getContainer.apply(0, arguments),
       c = a.container,
       e = a.height,
       t = a.width,
       h = a.x,
       a = a.y;
      if (!c) throw Error("VML container not found.");
      var w = new b._Paper,
       n = w.canvas = b._g.doc.createElement("div"),
       J = n.style,
       h = h || 0,
       a = a || 0,
       t = t || 512,
       e = e || 342;
      w.width = t;
      w.height = e;
      t == +t && (t += "px");
      e == +e && (e += "px");
      w.coordsize = "21600000 21600000";
      w.coordorigin = "0 0";
      n.id = "raphael-paper-" + w.id;
      w.span = b._g.doc.createElement("span");
      w.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
      n.appendChild(w.span);
      J.cssText = b.format("top:0;left:0;width:{0};height:{1};display:inline-block;cursor:default;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", t, e);
      1 == c ? (b._g.doc.body.appendChild(n), J.left = h + "px", J.top = a + "px", J.position = "absolute") : c.firstChild ?
       c.insertBefore(n, c.firstChild) : c.appendChild(n);
      w.renderfix = function () {};
      return w
     };
     b.prototype.clear = function () {
      var a;
      for (f("raphael.clear", this); a = this.bottom;) a.remove();
      this.canvas.innerHTML = "";
      this.span = b._g.doc.createElement("span");
      this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
      this.canvas.appendChild(this.span);
      this.bottom = this.top = null
     };
     b.prototype.remove = function () {
      var a;
      for (f("raphael.remove", this); a = this.bottom;) a.remove();
      this.canvas.parentNode.removeChild(this.canvas);
      for (a in this) this[a] = "function" == typeof this[a] ? b._removedFactory(a) : null;
      return !0
     };
     var ka = b.st,
      r;
     for (r in e) e.hasOwnProperty(r) && !ka.hasOwnProperty(r) && (ka[r] = function (a) {
      return function () {
       var b = arguments;
       return this.forEach(function (c) {
        c[a].apply(c, b)
       })
      }
     }(r))
    }
   })();
   oa ? r.win.Raphael = b : Raphael = b;
   return b
  }, !0)
 })();
 d.Raphael = z;
 d.Raphael.desc = "";
 m && m !== z ? window.Raphael = m : window.Raphael === z && (window.Raphael = void 0)
}]);
FusionCharts.register("module", ["private", "fusioncharts.redraphael.helper", function () {
 var d = {};
 this.hcLib.Raphael.fn._elementFromEvent = function (m) {
  if (!m || this.removed) return null;
  var z = m.srcElement || m.target || (m = m.originalEvent) && (m.srcElement || m.target) || d;
  "tspan" === z.nodeName && (z = z.parentNode);
  return this.getById(z.raphaelid)
 }
}]);
FusionCharts.register("module", ["private", "fusioncharts.redraphael.css", function () {
 var d = this.hcLib.Raphael,
  m = d.eve,
  z = d._g,
  q = d.fn,
  E = d.el,
  b = /[, ]+/,
  K = /\B([A-Z]{1})/g,
  I, c;
 I = function (b) {
  this.rules = {};
  this.ns = b || ""
 };
 c = I.prototype;
 c.getSheet = function () {
  var b = this.node;
  b || (b = this.node = z.doc.createElement("style"), this.node.setAttribute("id", d.format("raphael-stylesheet-{0}", d._oid++)), this.node.setAttribute("type", "text/css"), (z.doc.head || z.doc.getElementsByTagName("head")[0]).appendChild(this.node));
  return b
 };
 c.setCssText = function (b) {
  var a = this.node;
  if (!a)
   if (b) a = this.getSheet();
   else return;
  a.styleSheet ? a.styleSheet.cssText = b || "" : (a.innerHTML = "", b && a.appendChild(z.doc.createTextNode(b)))
 };
 c.destroy = function () {
  this.node && this.node.parentNode && this.node.parentNode.removeChild(this.node);
  delete this.rules
 };
 c.clear = function () {
  this.setCssText("");
  this.rules = {}
 };
 c.add = function (b, a) {
  var c = this.rules[b] || (this.rules[b] = {}),
   d;
  for (d in a) c[d] = a[d]
 };
 c.render = function () {
  this.setCssText(this.toString())
 };
 c.toString =
  function (b) {
   var a = b ? "" : "\n",
    c = b ? "" : "\t";
   b = b ? ":" : ": ";
   var d = a,
    m, g;
   for (m in this.rules) {
    d += m.replace(/(^|\,)/g, "$1" + this.ns + " ") + " {" + a;
    m = this.rules[m];
    for (g in m) m[g] && (d += c + g.replace(K, "-$1").toLowerCase() + b + m[g] + ";" + a);
    d += "}" + a
   }
   return d
  };
 m.on("raphael.new", function () {
  this._stylesheet = this._stylesheet || new I;
  this.cssNamespace("")
 });
 m.on("raphael.remove", function () {
  this._stylesheet && this._stylesheet.destroy();
  delete this._stylesheet
 });
 q.cssNamespace = function (b) {
  arguments.length && (this._stylesheet.ns =
   d.format("{0}#raphael-paper-{1}", b && b + " " || "", this.id));
  return this._stylesheet.ns
 };
 q.cssAddRule = function (b, a) {
  if (1 === arguments.length && "object" === typeof b) {
   for (var c in b) this.cssAddRule(c, b[c]);
   return this
  }
  return this._stylesheet.add(b, a), this
 };
 q.cssRender = function () {
  return d.svg && this._stylesheet.render(), this
 };
 q.cssClear = function () {
  return this._stylesheet.clear(), this
 };
 d._availableAttrs["class"] = "";
 d.svg && m.on("raphael.attr.class", function (b) {
  var a = this.node;
  b = b || "";
  a.setAttribute("class", "group" ===
   this.type && this._id ? "raphael-group-" + this.id + "-" + this._id + " " + b : b)
 });
 d.vml && m.on("raphael.attr.class", function (b) {
  var a = this.paper,
   c = "." + b,
   a = a._stylesheet && a._stylesheet.rules,
   d = this.parent,
   m = this.attrs,
   g = {},
   f;
  this.node.className = "group" === this.type ? b && this._id + " " + b || this._id : "rvml " + b;
  if (c && a) {
   b = a[c];
   for (f in b) "color" === f && "text" === this.type && (f = "fill"), !m[f] && (g[f] = b[f]);
   for (; d && d.attr;) {
    if (b = d.attr("class"))
     for (f in c = "." + b + " " + c, b = a[c], b) "color" === f && "text" === this.type && (f = "fill"), m[f] || g[f] ||
      (g[f] = b[f]);
    d = d.parent
   }
   this.css(g)
  }
 });
 E.css = function (c, a) {
  var v, q, C, g;
  if (this.removed) return this;
  this.styles || (this.styles = {});
  if (null == a && d.is(c, "string")) {
   v = c.split(b);
   q = {};
   g = 0;
   for (C = v.length; g < C; g++) c = v[g], c in this.styles && (q[c] = this.styles[c]);
   return C - 1 ? q : q[v[0]]
  }
  if (null == a && d.is(c, "array")) {
   q = {};
   g = 0;
   for (C = c.length; g < C; g++) q[c[g]] = this.styles(c[g]);
   return q
  }
  null != a ? (v = {}, v[c] = a) : null != c && d.is(c, "object") && (v = c);
  q = {};
  for (g in v) C = g.replace(/\B([A-Z]{1})/g, "-$1").toLowerCase(), d._availableAttrs.hasOwnProperty(C) ||
   "color" === C ? ("color" === C && "text" === this.type && (C = "fill"), q[C] = v[g], q.dirty = !0) : (m("raphael.css." + C + "." + this.id, this, v[g], C), this.node.style[C] = v[g], this.styles[C] = v[g]);
  g = 0;
  for (C = this.followers.length; g < C; g++) this.followers[g].el.attr(v);
  q.hasOwnProperty("dirty") && (delete q.dirty, this.attr(q));
  return this
 }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelexport", function () {
 var d = this.hcLib,
  m = d.Raphael,
  z = d.pluckNumber,
  q = d.pluck,
  E = m._availableAttrs,
  b = /^matrix\(|\)$/g,
  K = /\,/g,
  I = /\n|<br\s*?\/?>/ig,
  c = /[^\d\.]/ig,
  s = /[\%\(\)\s,\xb0#]/g,
  a = /group/ig,
  v = /&/g,
  O = /"/g,
  C = /'/g,
  g = /</g,
  f = />/g,
  l = 0;
 (function (d) {
  var m = Math,
   Q = parseFloat,
   k = m.max,
   B = m.abs,
   A = m.pow,
   W = String,
   r = /[, ]+/,
   oa = [{
     reg: /xmlns\=\"http\:\/\/www.w3.org\/2000\/svg\"/ig,
     repStr: ""
    }, {
     reg: /^.*<svg /,
     repStr: '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" '
    },
    {
     reg: /\/svg>.*$/,
     repStr: "/svg>"
    }, {
     reg: /<desc\>[^<]*<\/desc\>/,
     repStr: ""
    }, {
     reg: /zIndex="[^"]+"/g,
     repStr: ""
    }, {
     reg: /url\((\\?[\'\"])[^#]+#/g,
     repStr: "url($1#"
    }, {
     reg: / href=/g,
     repStr: " xlink:href="
    }, {
     reg: /(id|class|width|height)=([^" >]+)/g,
     repStr: '$1="$2"'
    }, {
     reg: /:(path|rect)/g,
     repStr: "$1"
    }, {
     reg: /<ima?ge? ([^\>]+?[^\/])\>/gi,
     repStr: "<image $1 />"
    }, {
     reg: /<\/ima?ge?\>/g,
     repStr: ""
    }, {
     reg: /style="([^"]+)"/g,
     repStr: function (a) {
      return a.toLowerCase()
     }
    }],
   ga = {
    blur: function () {},
    transform: function () {},
    src: function (a,
     b) {
     b.attrSTR += ' xlink:href="' + b.attrs.src + '"'
    },
    path: function (a, b) {
     var c = b.attrs.path,
      c = d._pathToAbsolute(c || "");
     b.attrSTR += ' d="' + (c.toString && c.toString() || "").replace(K, " ") + '"'
    },
    gradient: function (a, b, c) {
     var f = a.attrs.gradient,
      g = "linear",
      l, r, H, v = .5,
      q = .5,
      n = r = "",
      L = "",
      ca, aa, C, Y;
     l = f.replace(s, "_");
     if (!c[l]) {
      f = W(f).replace(d._radial_gradient, function (a, b) {
       var c, n, f, d, k, l, L;
       b = b && b.split(",") || [];
       g = "radial";
       c = b[0];
       n = b[1];
       f = b[2];
       d = b[3];
       k = b[4];
       Y = b[5];
       L = c && n;
       f && (C = /\%/.test(f) ? f : Q(f));
       if ("userSpaceOnUse" ===
        Y) return L && (v = c, q = n), d && k && (ca = d, aa = k, L || (v = ca, q = aa)), "";
       L && (v = Q(c), q = Q(n), c = 2 * (.5 < q) - 1, .25 < (l = A(v - .5, 2)) + A(q - .5, 2) && .25 > l && (q = m.sqrt(.25 - l) * c + .5) && .5 !== q && (q = q.toFixed(5) - 1E-5 * c));
       d && k && (ca = Q(d), aa = Q(k), c = 2 * (.5 < aa) - 1, .25 < (l = A(ca - .5, 2)) + A(aa - .5, 2) && .25 > l && (aa = m.sqrt(.25 - l) * c + .5) && .5 !== aa && (aa = aa.toFixed(5) - 1E-5 * c), L || (v = ca, q = aa));
       return ""
      });
      f = f.split(/\s*\-\s*/);
      if ("linear" === g) {
       r = f.shift();
       r = -Q(r);
       if (isNaN(r)) return null;
       H = [0, 0, m.cos(d.rad(r)), m.sin(d.rad(r))];
       r = 1 / (k(B(H[2]), B(H[3])) || 1);
       H[2] *=
        r;
       H[3] *= r;
       0 > H[2] && (H[0] = -H[2], H[2] = 0);
       0 > H[3] && (H[1] = -H[3], H[3] = 0)
      }
      f = d._parseDots(f);
      if (!f) return null;
      "radial" === g ? (r = '<radialGradient fx = "' + v + '" fy = "' + q + '" cy = "' + aa + '" cx = "' + ca + '" r = "' + C + '" gradientUnits = "' + Y + '" id = "' + l + '">', n = "</radialGradient>") : (r = '<linearGradient x1 = "' + H[0] + '" y1 = "' + H[1] + '" x2 = "' + H[2] + '" y2 = "' + H[3] + '" gradientTransform ="matrix(' + a.matrix.invert() + ')" id = "' + l + '">', n = "</linearGradient>");
      a = 0;
      for (H = f.length; a < H; a++) L += '<stop offset="' + (f[a].offset ? f[a].offset :
       a ? "100%" : "0%") + '" stop-color="' + (f[a].color || "#fff") + '" stop-opacity="' + (void 0 === f[a].opacity ? 1 : f[a].opacity) + '" />';
      c[l] = !0;
      c.str += r + L + n
     }
     b.attrSTR += " fill=\"url('#" + l + "')\""
    },
    fill: function (a, b) {
     var c = b.attrs,
      f = c.fill,
      g;
     a.attrs.gradient || (f = d.color(f), g = f.opacity, "text" === a.type ? b.styleSTR += "fill:" + f + "; stroke-opacity:0; " : (b.attrSTR += ' fill="' + f + '"', c["fill-opacity"] || !g && 0 !== g || (b.attrSTR += ' fill-opacity="' + g + '"')))
    },
    stroke: function (a, b) {
     var c = b.attrs,
      f, g;
     f = d.color(c.stroke);
     g = f.opacity;
     "text" !==
     a.type && (b.attrSTR += ' stroke="' + f + '"', c["stroke-opacity"] || !g && 0 !== g || (b.attrSTR += ' stroke-opacity="' + g + '"'))
    },
    "clip-rect": function (a, c, f) {
     var d = W(c.attrs["clip-rect"]),
      g = d.split(r),
      d = d.replace(s, "_") + "__" + l++;
     4 === g.length && (f[d] || (f[d] = !0, f.str += '<clipPath id="' + d + '"><rect x="' + g[0] + '" y="' + g[1] + '" width="' + g[2] + '" height="' + g[3] + '" transform="matrix(' + a.matrix.invert().toMatrixString().replace(b, "") + ')"/></clipPath>'), c.attrSTR += ' clip-path="url(#' + d + ')"')
    },
    cursor: function (a, b) {
     var c = b.attrs.cursor;
     c && (b.styleSTR += "cursor:" + c + "; ")
    },
    font: function (a, b) {
     b.styleSTR += "font:" + b.attrs.font.replace(/\"/ig, " ") + "; "
    },
    "font-size": function (a, b) {
     var f = q(b.attrs["font-size"], "10");
     f && f.replace && (f = f.replace(c, ""));
     b.styleSTR += "font-size:" + f + "px; "
    },
    "font-weight": function (a, b) {
     b.styleSTR += "font-weight:" + b.attrs["font-weight"] + "; "
    },
    "font-family": function (a, b) {
     b.styleSTR += "font-family:" + b.attrs["font-family"] + "; "
    },
    "line-height": function () {},
    "clip-path": function () {},
    visibility: function () {},
    "vertical-align": function () {},
    "text-anchor": function (a, b) {
     var c = b.attrs["text-anchor"] || "middle";
     "text" === a.type && (b.attrSTR += ' text-anchor="' + c + '"')
    },
    title: function () {},
    text: function (a, b) {
     var d = b.attrs,
      k = d.text,
      l = q(d["font-size"], d.font, "10"),
      p = q(d["line-height"]),
      r, H, A;
     l && l.replace && (l = l.replace(c, ""));
     l = z(l);
     p && p.replace && (p = p.replace(c, ""));
     p = z(p, l && 1.2 * l);
     r = l ? .85 * l : .75 * p;
     l = d.x;
     H = q(d["vertical-align"], "middle").toLowerCase();
     k = W(k).split(I);
     A = k.length;
     d = 0;
     for (r = "top" === H ? r : "bottom" === H ? r - p * A : r - p * A * .5; d < A; d++) b.textSTR += "<tspan ",
      H = (k[d] || "").replace(v, "&amp;").replace(O, "&quot;").replace(C, "&#39;").replace(g, "&lt;").replace(f, "&gt;"), b.textSTR = d ? b.textSTR + ('dy="' + p + '" x="' + l + '" ') : b.textSTR + ('dy="' + r + '"'), b.textSTR += ">" + H + "</tspan>"
    }
   },
   $ = function (c, f) {
    var d = "",
     g = {
      attrSTR: "",
      styleSTR: "",
      textSTR: "",
      attrs: c.attr()
     },
     k = c.isShadow,
     l = "",
     p = "",
     r, A, m = g.attrs;
    if ("none" === c.node.style.display || k) c.next && (d += $(c.next, f));
    else {
     for (r in m)
      if ("gradient" !== r && (void 0 !== E[r] || ga[r]) && void 0 !== m[r])
       if (ga[r]) ga[r](c, g, f);
       else g.attrSTR += " " +
        r + '="' + m[r] + '"';
     c.attrs.gradient && ga.gradient(c, g, f);
     "rect" === c.type && m.r && (g.attrSTR += ' rx="' + m.r + '" ry="' + m.r + '"');
     for (A in c.styles) g.styleSTR += A + ":" + c.styles[A] + "; ";
     "image" === c.type && (g.attrSTR += ' preserveAspectRatio="none"');
     if ("text" === c.type && !m["text-anchor"]) ga["text-anchor"](c, g);
     c.bottom && (l = $(c.bottom, f));
     c.next && (p = $(c.next, f));
     k = c.type;
     k.match(a) && (k = "g");
     d += "<" + k + ' transform="matrix(' + c.matrix.toMatrixString().replace(b, "") + ')" style="' + g.styleSTR + '"' + g.attrSTR + ">" + g.textSTR + l + "</" +
      k + ">" + p
    }
    return d
   };
  d.fn.toSVG = function (a) {
   var b = "",
    c = {
     str: ""
    },
    f = 0,
    g = oa.length,
    k = "";
   if (d.svg) {
    if (this.canvas && this.canvas.parentNode) {
     for (b = this.canvas.parentNode.innerHTML; f < g; f += 1) c = oa[f], b = b.replace(c.reg, c.repStr);
     this._stylesheet && (b = b.replace(/^(<svg\s[\s\S]*?>)/ig, '$1<style type="text/css">' + this._stylesheet.toString(!0) + "</style>"))
    }
   }
   else b = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + this.width + '" version="1.1" height="' +
    this.height + '">', this.bottom && (k = $(this.bottom, c)), b += "<defs>" + c.str + "</defs>" + k + "</svg>";
   a || (b = b.replace(/<image [^\>]*\>/gi, ""));
   return b
  }
 })(m)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelshadow", function () {
 var d = this.window,
  m = d.Math.sqrt,
  z = d.parseFloat,
  q = d.parseInt,
  d = d.SVGFilterElement || d.SVGFEColorMatrixElement && 2 === d.SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE,
  E = this.hcLib.Raphael,
  b = {
   "drop-shadow": "drop-shadow",
   stroke: "stroke",
   fill: "fill",
   "stroke-width": "stroke-width",
   "stroke-opacity": "stroke-opacity",
   "stroke-linecap": "stroke-linecap",
   "stroke-linejoin": "stroke-linejoin",
   "shape-rendering": "shape-rendering",
   transform: "transform"
  },
  K = E._createNode,
  I;
 E.svg ? (d && (E.el.dropshadow = function (b, d, a, v) {
  var q = this.node,
   C = this._.shadowFilter,
   g = this.paper.cacheShadows || (this.paper.cacheShadows = {}),
   f = "drop-shadow" + [b, d, a, v].join(" "),
   l;
  if ("none" === b) {
   if (C) {
    --C.use;
    this.node.removeAttribute("filter");
    if (!C.use) {
     f = C.hash;
     for (l in C) b = C[l], b.parentNode && b.parentNode.removeChild(b), delete C[l];
     delete g[f]
    }
    delete this._.shadowFilter
   }
  }
  else C && g[f] === C || (C = this.paper.defs.appendChild(K("filter", {
   id: E.createUUID(),
   width: "200%",
   height: "200%"
  })), v = E.color(v), v.error && (v = E.color("rgba(0,0,0,1)")), l = E.pick(v.opacity, 1), this._.shadowFilter = g[f] = {
   use: 1,
   filter: C,
   hash: f,
   offset: C.appendChild(K("feOffset", {
    result: "offOut",
    "in": "SourceGraphic",
    dx: z(b),
    dy: z(d)
   })),
   matrix: C.appendChild(K("feColorMatrix", {
    result: "matrixOut",
    "in": "offOut",
    type: "matrix",
    values: "0 0 0 0 " + v.r / 255 + " 0 0 0 0 " + v.g / 255 + " 0 0 0 0 " + v.b / 255 + " 0 0 0 " + l + " 0"
   })),
   blur: C.appendChild(K("feGaussianBlur", {
    result: "blurOut",
    "in": "matrixOut",
    stdDeviation: m(z(a))
   })),
   blend: C.appendChild(K("feComposite", {
    "in": "SourceGraphic",
    in2: "blurOut",
    operator: "over"
   }))
  }, q.setAttribute("filter", 'url("' + E._url + "#" + C.id + '")'));
  return this
 }), I = function (c, d) {
  var a = this.__shadowscale,
   m = {},
   q, C;
  for (C in c) switch (b[C] && (m[C] = c[C], delete c[C]), C) {
  case "transform":
   q = d.matrix.clone();
   q.translate(this.__shadowx, this.__shadowy);
   this.transform(q.toTransformString());
   break;
  case "stroke-width":
   c[C] = ((m[C] || 1) + 6 - 2 * this.__shadowlevel) * a
  }
  this.attr(c);
  for (C in m) c[C] = m[C]
 }, E.ca["drop-shadow"] = function (b, d, a, m, z, C) {
  a = this._.shadows ||
   (this._.shadows = []);
  var g, f, l, p, F;
  if (!this.__shadowblocked)
   if ("none" === b)
    for (; f = a.pop();) f.remove();
   else
    for (m = E.color(m), m.error && (m = E.color("rgba(0,0,0,1)")), z instanceof Array ? (g = z[0], z = z[1]) : g = z, g = 1 / E.pick(g, 1), z = 1 / E.pick(z, 1), b = E.pick(b, 1) * g, d = E.pick(d, 1) * g, g = .05 * E.pick(m.opacity, 1), l = q(this.attr("stroke-width") || 1, 10) + 6, p = this.matrix.clone(), p.translate(b, d), F = 1; 3 >= F; F++) f = (a[F - 1] || this.clone().follow(this, I, !C && "before")).attr({
     stroke: m.hex,
     "stroke-opacity": g * F,
     "stroke-width": (l - 2 * F) * z,
     transform: p.toTransformString(),
     "stroke-linecap": "round",
     "stroke-linejoin": "round",
     fill: "none"
    }), f.__shadowlevel = F, f.__shadowscale = z, f.__shadowx = b, f.__shadowy = d, C && C.appendChild(f), a.push(f);
  return !1
 }, E.el.shadow = function (b, d, a, m) {
  var q;
  a && a.constructor === E.el.constructor && (m = a, a = void 0);
  "object" === typeof b && (d && d.constructor === E.el.constructor && (m = d), d = b.opacity, a = b.scalefactor, q = !!b.useFilter, b = void 0 === b.apply ? !!d : b.apply);
  void 0 === d && (d = 1);
  if (this.dropshadow) {
   if (q) return b && this.dropshadow(1, 1, 3, "rgb(64,64,64)") || this.dropshadow("none"),
    this;
   this._.shadowFilter && this.dropshadow("none")
  }
  return this.attr("drop-shadow", b ? [1, 1, 3, "rgba(64,64,64," + d + ")", a, m] : "none")
 }) : E.vml ? (E.ca["drop-shadow"] = function (b, d, a, m, q, C) {
  var g = this._.shadow,
   f, l;
  if (this.isShadow) return !1;
  "none" === b ? g && (this._.shadow = g.remove()) : (g || (g = this._.shadow = this.clone(), C && C.appendChild(g.follow(this)) || g.follow(this, void 0, "before"), g.attr({
    fill: "none",
    "fill-opacity": .5,
    "stroke-opacity": 1
   }).isShadow = !0, 0 >= g.attr("stroke-width") && g.attr("stroke-width", 1)), C = g.node.runtimeStyle,
   f = C.filter.replace(/ progid:\S+Blur\([^\)]+\)/g, ""), m = E.color(m), m.error && (m = E.color("rgba(0,0,0,1)")), l = E.pick(m.opacity, 1) / 5, q = 1 / E.pick(q, 1), b = E.pick(b, 1) * q, d = E.pick(d, 1) * q, g.translate(b, d), C.filter = f + " progid:DXImageTransform.Microsoft.Blur(pixelRadius=" + z(.4 * a) + " makeShadow=True Color=" + m.hex + ' shadowOpacity="' + l + '");');
  return !1
 }, E.el.shadow = function (b, d, a, m) {
  a && a.constructor === E.el.constructor && (m = a, a = void 0);
  "object" === typeof b && (d && "group" === d.type && (m = d), d = b.opacity, a = b.scalefactor, b = void 0 ===
   b.apply ? !!d : b.apply);
  void 0 === d && (d = 1);
  return this.attr("drop-shadow", b || !d ? [1, 1, 5, "rgba(64,64,64," + d + ")", a, m] : "none")
 }) : E.canvas && (E.el.shadow = function () {
  return this
 })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaelshapes", function () {
 var d = this.window,
  m = "createTouch" in d.document,
  z = /msie/i.test(d.navigator.userAgent) && !d.opera,
  q = d.Math,
  E = q.cos,
  b = q.sin,
  K = q.abs,
  I = q.pow,
  c = q.atan2,
  s = q.tan,
  a = q.acos,
  v = q.min,
  O = q.round,
  C = q.PI,
  g = q.sqrt,
  f = 2 * C,
  l = d.parseInt,
  p = d.parseFloat,
  F = String,
  Q = Array.prototype.slice,
  k = I(2, -24),
  B = "rgba(192,192,192," + (z ? .002 : 1E-6) + ")",
  A = this.hcLib.Raphael,
  W = A.eve,
  r = A._createNode,
  oa = A._setFillAndStroke,
  ga = A.el.constructor,
  $ = {
   speed: "optimizeSpeed",
   crisp: "crispEdges",
   precision: "geometricPrecision"
  },
  V = {
   enabled: !1,
   "false": !1,
   0: !1,
   disabled: !0,
   "true": !0,
   1: !0
  },
  ta = {
   Q: "L",
   Z: "X",
   q: "l",
   z: "x",
   ",": " "
  },
  za = /,?([achlmqrstvxz]),?/gi,
  Aa = /\s*\,\s*/g,
  Z, U = function () {
   return this.join(",").replace(za, Z)
  },
  na, H, T = A._cacher(function (a, b, c, d) {
   return g(I(c - a, 2) + I(d - b, 2))
  }),
  fa = A._cacher(function (a, b, c, d, f) {
   var g = c - a,
    k = d - b;
   c = T(a, b, c, d);
   return {
    x: a + g / c * f,
    y: b + k / c * f
   }
  });
 if (A.svg) W.on("raphael.attr.shape-rendering", function (a, b) {
  var c = this.node;
  this.attrs[b] = a = $[a] || a || "auto";
  c.setAttribute(b, a);
  c.style.shapeRendering = a
 });
 else if (A.vml) W.on("raphael.attr.shape-rendering", function (a) {
  this.node.style.antialias = "crisp" !== a
 });
 A.define && A.define([{
  name: "polypath",
  polypath: function () {
   return this.path(void 0, A._lastArgIfGroup(arguments))
  },
  ca: {
   polypath: function (a, c, d, f, g, k) {
    var r, m, H;
    r = [];
    a = l(a, 10) || 0;
    c = p(c) || 0;
    d = p(d) || 0;
    f = p(f) || 0;
    g = null === g || isNaN(g) ? .5 * C : A.rad(g);
    k = null === k || isNaN(k) ? 0 : p(k);
    m = g;
    if (2 < a) switch (g = 2 * C / a, k) {
    case 0:
     for (k = 0; k < a; k++) r.push("L", c + f * E(-m), d + f * b(-m)),
      m += g;
     r[0] = "M";
     r.push("Z");
     break;
    case 1:
     for (k = 0; k < a; k++) r.push("M", c, d, "L", c + f * E(-m), d + f * b(-m)), m += g;
     break;
    default:
     g *= .5;
     H = f * E(g) * (1 - k);
     for (k = 0; k < a; k++) r.push("L", c + f * E(-m), d + f * b(-m)), m += g, r.push("L", c + H * E(-m), d + H * b(-m)), m += g;
     r[0] = "M";
     r.push("Z")
    }
    else 0 === f ? r.push("M", c, d, "L", c, d, "Z") : r.push("M", c - f, d, "A", f, f, 0, 0, 0, c + f, d, "A", f, f, 0, 0, 0, c - f, d, "Z");
    return {
     path: r
    }
   },
   r: function (a) {
    var b = this.attrs.polypath;
    b[3] = a;
    this.attr("polypath", b);
    return !1
   }
  }
 }, {
  name: "ringpath",
  ringpath: function () {
   return this.path(void 0,
    A._lastArgIfGroup(arguments))
  },
  ca: function (a, c, d, g, l, p) {
   var r = p % f - l % f,
    m = p - l,
    H, A, s, v, B;
   this._.ringangle = .5 * (l + p);
   K(m) < k ? (m = E(l), l = b(l), d = ["M", a + d * m, c + d * l, "L", a + g * m, c + g * l, "Z"]) : (K(m) > k && K(m) % f < k ? (d = ["M", a - d, c, "A", d, d, 0, 0, 0, a + d, c, "A", d, d, 0, 0, 0, a - d, c], 0 !== g && (d = d.concat(["M", a - g, c, "A", g, g, 0, 0, 1, a + g, c, "A", g, g, 0, 0, 1, a - g, c]))) : (m = E(l), l = b(l), H = E(p), p = b(p), r %= f, 0 > r && (r += f), r = r < C ? 0 : 1, A = a + d * m, v = c + d * l, s = a + d * H, B = c + d * p, H = a + g * H, p = c + g * p, .01 > K(A - s) && .01 > K(v - B) && (v = B + .01), d = ["M", A, v, "A", d, d, 0, r, 1, s, B, "L", H, p], 0 !==
    g && (a += g * m, c += g * l, .01 > K(H - a) && .01 > K(p - c) && (c = p + .01), d.push("A", g, g, 0, r, 0, a, c))), d.push("Z"));
   return {
    path: d
   }
  }
 }, {
  name: "cubepath",
  cubepath: function () {
   var a = {
     "stroke-linejoin": "round",
     "shape-rendering": "precision",
     stroke: "none"
    },
    b = arguments,
    c = b.length - 1,
    d = b[c],
    f, g;
   d && d.constructor === A.el.constructor ? b[c] = void 0 : d = void 0;
   c = this.path(a, d);
   f = this.path(a, d);
   a = this.path(a, d);
   a._.cubetop = c.follow(a, void 0, "before");
   a._.cubeside = f.follow(a, void 0, "before");
   for (g in A.fn.cubepath.ca) a.ca[g] = A.fn.cubepath.ca[g];
   return a.attr("cubepath", [b[0], b[1], b[2], b[3], b[4], b[5]])
  },
  fn: {
   _getBBox2: function () {
    var a = this._.cubeside.getBBox(),
     b = this._.cubetop.getBBox(),
     c = this.getBBox();
    return {
     x: c.x + b.height,
     y: c.y - a.width,
     width: c.width,
     height: c.height
    }
   }
  },
  ca: {
   cubepath: function (a, b, c, d, f, g) {
    var k = this._.cubetop,
     l = this._.cubeside;
    a = a || 0;
    b = b || 0;
    c = c || 0;
    d = d || 0;
    f = f || 0;
    g = g || 0;
    this.attr("path", ["M", a + c, b, "l", 0, d, -c, 0, 0, -d, "z"]);
    k.attr("path", ["M", a, b, "l", 1, 1, c - 1, 0, 0, -1, f, -g, -c, 0, "z"]);
    l.attr("path", ["M", a + c - 1, b + 1, "l", 0, d - 1, 1, 0, f, -g,
0, -d, -f, g]);
    return !1
   },
   "stroke-linejoin": function () {
    return {
     "stroke-linejoin": "round"
    }
   },
   "drop-shadow": function (a, b, c, d) {
    var f = this._.cubetop,
     g = this._.cubeside;
    this.dropshadow && (f.dropshadow(a, -b, c, d), g.dropshadow(a, -b, c, d));
    return !1
   },
   fill: function (a, b) {
    var d = this._.cubetop,
     f = this._.cubeside,
     g = this.attr("cubepath") || [0, 0, 0, 0, 0, 0],
     k = g[2],
     l = g[4],
     g = g[5],
     p;
    a = A.color(a);
    b ? (this.attr("fill", a), d.attr("fill", A.tintshade(a, -.78).rgba), f.attr("fill", A.tintshade(a, -.65).rgba)) : (p = "opacity" in a ? "rgba(" + [a.r, a.g,
a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")", this.attr("fill", [270, A.tintshade(p, .55).rgba, A.tintshade(p, -.65).rgba].join("-")), f.attr("fill", [270, A.tintshade(p, -.75).rgba, A.tintshade(p, -.35).rgba].join("-")), d.attr("fill", [45 + A.deg(c(g, l + k)), A.tintshade(p, -.78).rgba, A.tintshade(p, .22).rgba].join("-")));
    return !1
   }
  }
 }, {
  name: "scroller",
  scroller: function (a, b, c, d, f, g, k) {
   var l = this.group("scroller", k),
    r = l.attrs,
    m = l._.scroller = {};
   f = f && "horizontal" || "vertical";
   var H, s = {},
    v, B, q;
   m.track = this.rect(l).mousedown(function (a) {
    var b =
     r["scroll-position"];
    a = "horizontal" === r["scroll-orientation"] ? a.layerX || a.x : a.layerY || a.y;
    a = (a - m.anchorOffset) / m.trackLength;
    H = A.animation({
     "scroll-position": a
    }, 2E3 * K(b - a), "easeIn");
    l.animate(H);
    W("raphael.scroll.start." + l.id, l, b)
   }).mouseup(m._mouseupTrack = function () {
    this.stop(H);
    W("raphael.scroll.end." + this.id, this, r["scroll-position"])
   }, l, !0);
   m.anchor = this.rect(l).drag(function () {
    s["scroll-position"] = v + arguments[B] / m.trackLength;
    l.animate(s, 0)
   }, function (a, b, c) {
    B = "horizontal" === r["scroll-orientation"] ?
     0 : 1;
    W("raphael.scroll.start." + l.id, l, v = r["scroll-position"]);
    c.stopPropagation()
   }, function () {
    W("raphael.scroll.end." + l.id, l, v = r["scroll-position"])
   });
   for (q in A.fn.scroller.fn) l[q] = A.fn.scroller.fn[q];
   for (q in A.fn.scroller.ca) l.ca[q] = A.fn.scroller.ca[q];
   r["scroll-orientation"] = f;
   r["stroke-width"] = 1;
   l.ca["scroll-repaint"] = l.ca["scroll-repaint-" + f];
   !A.is(g, "object") && (g = {});
   return l.attr({
    ishot: !0,
    "scroll-display-buttons": g.showButtons && "arrow" || "none",
    "scroll-display-style": g.displayStyleFlat && "flat" ||
     "3d",
    "scroll-ratio": p(g.scrollRatio) || 1,
    "scroll-position": p(g.scrollPosition) || 0,
    "scroll-repaint": [a, b, c, d]
   })
  },
  fn: {
   scroll: function (a, b) {
    var c = this._.scroller;
    b = b || this;
    c.callback = function () {
     return a.apply(b, arguments)
    };
    return this
   },
   remove: function () {
    var a = this._.scroller,
     b;
    this.attr("scroll-display-buttons", "none");
    a.track.unmouseup(a._mouseupTrack);
    for (b in a) a[b] && a[b].remove && a[b].remove(), a[b] = null;
    delete this._.scroller;
    A.el.remove.apply(this, arguments)
   }
  },
  ca: {
   "stroke-width": function () {
    return !1
   },
   "drop-shadow": function (a, b, c, d, f, g) {
    this._.scroller.track.attr("drop-shadow", [a, b, c, d, f, g]);
    return !1
   },
   "scroll-display-style": function (a) {
    var b = this.attrs,
     c = b["scroll-display-style"],
     d = b.fill;
    a = {
     flat: "flat",
     "3d": "3d",
     transparent: "transparent"
    }[a] || c;
    d && a !== c && (b["scroll-display-style"] = a, this.attr("fill", d));
    return {
     "scroll-display-style": a
    }
   },
   "scroll-display-buttons": function (a) {
    var b = this,
     c = b.paper,
     d = b._.scroller,
     f = b.attrs,
     g = f["scroll-display-buttons"],
     k = f["scroll-repaint"],
     l, p;
    void 0 === g && (g = "none");
    a = {
     none: "none",
     arrow: "arrow"
    }[a] || g;
    a !== g && (f["scroll-display-buttons"] = a, "none" === a && d.start ? (d.arrowstart.remove(), delete d.arrowstart, d.arrowend.remove(), delete d.arrowend, d.start.unmouseup(d._mouseupStart), d.start.remove(), delete d.start, d.end.unmouseup(d._mouseupEnd), d.end.remove(), delete d.end) : (d.arrowstart = c.polypath(b), d.arrowend = c.polypath(b), d.start = c.rect(b).mousedown(function () {
     var a;
     0 !== (a = f["scroll-position"]) && (b.animate({
      "scroll-position": a - .1
     }, 100).animate(l = A.animation({
       "scroll-position": 0
      },
      4500 * a, "easeIn")), W("raphael.scroll.start." + b.id, b, a))
    }).mouseup(d._mouseupStart = function () {
     b.stop(l);
     W("raphael.scroll.end." + b.id, b, f["scroll-position"])
    }, b, !0), d.end = c.rect(b).mousedown(function () {
     var a;
     1 !== (a = f["scroll-position"]) && (b.animate({
      "scroll-position": a + .1
     }, 100).animate(p = A.animation({
      "scroll-position": 1
     }, 4500 * (1 - a), "easeIn")), W("raphael.scroll.start." + b.id, b, a))
    }).mouseup(d._mouseupEnd = function () {
     b.stop(p);
     W("raphael.scroll.end." + b.id, b, f["scroll-position"])
    }, b, !0), f.fill && b.attr("fill",
     f.fill)), k && b.attr("scroll-repaint", k));
    return {
     "scroll-display-buttons": a
    }
   },
   "scroll-orientation": function (a) {
    var b = this.attrs,
     c = b["scroll-repaint"],
     d = b["scroll-orientation"];
    a = {
     horizontal: "horizontal",
     vertical: "vertical"
    }[a] || d;
    d !== a && (this.ca["scroll-repaint"] = this.ca["scroll-repaint-" + a], c && (c[2] += c[3], c[3] = c[2] - c[3], c[2] -= c[3], this.attr("scroll-repaint", c)), b.fill && this.attr("fill", b.fill));
    return {
     "scroll-orientation": a
    }
   },
   "scroll-ratio": function (a) {
    var b = this.attrs,
     c = b["scroll-ratio"],
     d = b["scroll-repaint"];
    a = 1 < a ? 1 : .01 > a ? .01 : p(a);
    d && a !== c && (b["scroll-ratio"] = a, this.attr("scroll-repaint", d));
    return {
     "scroll-ratio": a
    }
   },
   "scroll-position": function (a, b) {
    var c = this.attrs,
     d = "horizontal" === c["scroll-orientation"],
     f = c["scroll-repaint"],
     g = c["scroll-position"],
     k = this._.scroller,
     l = k.anchor;
    a = 1 < a ? 1 : 0 > a ? 0 : p(a);
    isNaN(a) && (a = g);
    f && (g !== a || b) && (g = k.start && k.start.attr(d && "width" || "height") || 0, d && l.attr("x", f[0] + g + (f[2] - 2 * g - l.attr("width")) * a + .5) || l.attr("y", f[1] + g + (f[3] - 2 * g - l.attr("height")) * a + .5), !b && 1 > c["scroll-ratio"] &&
     (W("raphael.scroll.change." + this.id, this, a), k.callback && k.callback(a)));
    return {
     "scroll-position": a
    }
   },
   r: function (a) {
    var b = this._.scroller;
    b.track.attr("r", a);
    b.anchor.attr("r", "none" === this.attrs["scroll-display-buttons"] && a || 0);
    return !1
   },
   "scroll-repaint-horizontal": function (a, b, c, d) {
    var f = this.attrs,
     g = this._.scroller,
     k = f["scroll-ratio"],
     l = f["scroll-position"],
     p = 0,
     r = c * k,
     f = "none" === f["scroll-display-buttons"];
    c && --c;
    a && (a += .5);
    d && --d;
    b && (b += .5);
    g.track.attr({
     width: c,
     height: d,
     y: b,
     x: a
    }).crisp();
    f || (p =
     v(d, .5 * c), r -= 2 * p * k, g.start.attr({
      width: p,
      height: d,
      x: a,
      y: b
     }), g.arrowstart.attr("polypath", [3, a + .5 * p, b + .5 * d, .25 * p, 180]), g.end.attr({
      width: p,
      height: d,
      x: a + c - p,
      y: b
     }), g.arrowend.attr("polypath", [3, a + c - .5 * p, b + .5 * p, .25 * p, 0]));
    g.trackLength = c - 2 * p - r;
    g.trackOffset = a + p + .5;
    g.anchorOffset = g.trackOffset + .5 * (r - 1);
    g.anchor.attr({
     height: d,
     width: r - 1,
     y: b,
     x: g.trackOffset + g.trackLength * l
    }).crisp()
   },
   "scroll-repaint-vertical": function (a, b, c, d) {
    var f = this.attrs,
     g = this._.scroller,
     k = f["scroll-ratio"],
     l = f["scroll-position"],
     p = 0,
     r = d * k,
     f = "none" === f["scroll-display-buttons"];
    c && --c;
    a && (a += .5);
    d && --d;
    b && (b += .5);
    g.track.attr({
     width: c,
     height: d,
     y: b,
     x: a
    }).crisp();
    f || (p = v(c, .5 * d), r -= 2 * p * k, g.start.attr({
     width: c,
     height: p,
     x: a,
     y: b
    }), g.arrowstart.attr("polypath", [3, a + .5 * c, b + .5 * p, .25 * p, 90]), g.end.attr({
     width: c,
     height: p,
     x: a,
     y: b + d - p
    }), g.arrowend.attr("polypath", [3, a + .5 * c, b + d - .5 * p, .25 * p, -90]));
    g.trackLength = d - 2 * p - r;
    g.trackOffset = b + p + .5;
    g.anchorOffset = g.trackOffset + .5 * (r - 1);
    g.anchor.attr({
     height: r - 1,
     width: c,
     y: g.trackOffset + g.trackLength *
      l,
     x: a
    }).crisp()
   },
   fill: function (a) {
    var b = this.attrs,
     c = this._.scroller,
     d = b["scroll-repaint"],
     f = "flat" === b["scroll-display-style"],
     g = "horizontal" === b["scroll-orientation"],
     k = {
      stroke: "none"
     },
     l;
    m && d && 3 < (l = 16 - d[g && 3 || 2]) && (k.stroke = B, k["stroke-width"] = l);
    a = A.color(a);
    a.error && (a = "#000000");
    a = "opacity" in a ? "rgba(" + [a.r, a.g, a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")";
    k.fill = f && a || [90 * g, A.tintshade(a, .15).rgba, a].join("-");
    k.stroke = A.tintshade(a, -.75).rgba;
    c.track.attr(k);
    k.fill = f && A.tintshade(a, -.6).rgba || [270 * g, A.tintshade(a, .3).rgba + ":40", A.tintshade(a, -.7).rgba].join("-");
    k.stroke = A.tintshade(a, -.6).rgba;
    c.anchor.attr(k);
    k.stroke = "none";
    "none" !== b["scroll-display-buttons"] && (k.fill = B, c.start.attr(k), c.end.attr(k), k.fill = A.tintshade(a, -.4).rgba, c.arrowstart.attr(k), c.arrowend.attr(k));
    return !1
   }
  }
 }, {
  name: "button",
  button: function (a, b, c, d, f, g) {
   g = this.group("button", g);
   var k;
   g._.button = {
    bound: this.rect(g),
    tracker: this.rect(g).attr({
     fill: B,
     stroke: B,
     cursor: "pointer"
    }).data("compositeButton", g)
   };
   !A.is(f,
    "object") && (f = {});
   for (k in A.fn.button.fn) g[k] = A.fn.button.fn[k];
   for (k in A.fn.button.ca) g.ca[k] = A.fn.button.ca[k];
   return g.attr({
    ishot: !0,
    "button-padding": [f.horizontalPadding, f.verticalPadding],
    "button-label": c,
    "button-symbol": d,
    "button-disabled": f.disabled || "false",
    "button-symbol-position": f.symbolPosition,
    "button-symbol-padding": f.symbolPadding
   }).attr("button-repaint", [a, b, f.width, f.height, f.r])
  },
  data: {
   hoverin: function () {
    var a = this._.button.hoverbackIn;
    a && !1 === a() || (this.attr("fill", "hover").hovered = !0)
   },
   hoverout: function () {
    var a = this._.button.hoverbackOut;
    a && !1 === a() || (this.attr("fill", (this.pressed || this.active) && "active" || "normal").hovered = !1)
   },
   mousedown: function () {
    this.attr("fill", "active").pressed = !0
   },
   mouseup: function () {
    var a = this._.button.callback;
    this.attr("fill", this.hovered && "hover" || this.active && "active" || "normal").pressed = !1;
    a()
   }
  },
  fn: {
   tooltip: function () {
    A.el.tooltip && A.el.tooltip.apply(this._.button.tracker, arguments);
    return this
   },
   buttonclick: function (a, b) {
    var c = this._.button;
    b = b ||
     this;
    c.callback = function () {
     return a.apply(b, arguments)
    };
    return this
   },
   labelcss: function () {
    var a = this._.button,
     b = a.label;
    a.cssArg = arguments;
    b && b.css.apply(b, arguments);
    return this.attr("button-repaint", this.attrs["button-repaint"])
   },
   buttonhover: function (a, b, c, d) {
    var f = this._.button;
    c = c || this;
    d = d || this;
    f.hoverbackIn = function () {
     return a.apply(c, arguments)
    };
    f.hoverbackOut = function () {
     return b.apply(d, arguments)
    };
    return this
   },
   remove: function () {
    var a = this._.button,
     b;
    this.attr("button-disabled", "true");
    for (b in a) a[b] &&
     a[b].remove && a[b].remove(), a[b] = null;
    delete this._.button;
    A.el.remove.apply(this, arguments)
   }
  },
  ca: {
   "button-active": function (a) {
    this.attr("fill", (this.active = !!a) ? "active" : this.hovered && "hover" || "normal")
   },
   "button-disabled": function (a) {
    var b = this._.button.tracker,
     c = this.attrs["button-disabled"],
     d = this.paper.button.data;
    a = V[a];
    c = V[c];
    if (void 0 !== a && a !== c) switch (a) {
    case !0:
     b.attr("fill", "rgba(204,204,205,.5)").unmousedown(d.mousedown).unmouseup(d.mouseup).unhover(d.hoverin, d.hoverout);
     break;
    case !1:
     b.attr("fill",
      B).mousedown(d.mousedown, this).mouseup(d.mouseup, this, !0).hover(d.hoverin, d.hoverout, this, this)
    }
   },
   "button-label": function (a) {
    var b = this._.button,
     c = this.attrs,
     d = b.label,
     f = b.cssArg,
     g = this.attrs["button-repaint"];
    a = F(a || "");
    "none" === a ? d && (b.label = d.remove()) : a && (!d && (d = b.label = this.paper.text(this).insertBefore(b.tracker)), d.attr({
     text: a,
     "text-anchor": "middle",
     "vertical-align": "middle"
    }), f && f.length && d.css.apply(d, f));
    g && c["button-label"] !== a && this.attr("button-repaint", g)
   },
   "button-symbol": function (a) {
    var b =
     this.attrs,
     c = this._.button,
     d = c.symbol,
     f = this.attrs["button-repaint"];
    a = F(a || "");
    "none" === a ? d && (c.symbol = d.remove()) : a && !d && (c.symbol = this.paper.symbol(this).insertAfter(c.bound));
    f && b["button-symbol"] !== a && this.attr("button-repaint", f)
   },
   "button-symbol-position": function (a) {
    return {
     "button-symbol-position": {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
      none: "none"
     }[F(a).toLowerCase()] || "none"
    }
   },
   "button-symbol-padding": function (a) {
    return {
     "button-symbol-padding": p(a)
    }
   },
   "button-padding": function (a,
    b) {
    return {
     "button-padding": [null == a && (a = 5) || p(a), null == b && a || p(b)]
    }
   },
   "button-repaint": function (a, b, c, d, f) {
    var g = this._.button,
     k = g.bound,
     l = g.label,
     p = g.symbol,
     r = this.attrs,
     m = r["button-padding"],
     H = m[0],
     s = m[1],
     B, q;
    void 0 === a && (a = 0);
    void 0 === b && (b = 0);
    if (void 0 === c || void 0 === d) B = l && l.getBBox() || {
     width: 0,
     height: 0
    }, void 0 === c && (c = 2 * H + B.width), void 0 === d && (d = 2 * s + B.height);
    k = A.crispBound(a, b, c, d, k.attr("stroke-width"));
    k.r = A.pick(f, O(.1 * v(d, c)));
    a = k.x;
    b = k.y;
    c = k.width;
    d = k.height;
    l && l.attr({
     x: a + c / 2,
     y: b + d / 2
    });
    if (p) {
     !A.is(q = r["button-symbol-padding"], "finite") && (q = .2 * d);
     f = d - s;
     B = .5 * f;
     switch (r["button-symbol-position"] + (l && "+" || "-")) {
     case "right+":
      a = a + (c + (2 * B + s)) - B - H;
      b += .5 * d;
      l.attr("transform", ["t", -(f + q), 0]);
      break;
     case "left+":
      a = a + H + B;
      b += .5 * d;
      l.attr("transform", ["t", f + q, 0]);
      break;
     case "top+":
      a += .5 * c;
      b = b + m[1] + B;
      l.attr("transform", ["t", 0, f + q]);
      break;
     case "bottom+":
      a += .5 * c;
      b = b + (d + (2 * B + q)) - s - B;
      l.attr("transform", ["t", 0, -(f + q)]);
      break;
     default:
      a += .5 * c, b += .5 * d
     }
     p.attr("symbol", [r["button-symbol"], a, b, B])
    }
    g.bound.attr(k);
    g.tracker.attr(k)
   },
   fill: function (a, b, c, d) {
    var f = this._.button,
     g = f.bound,
     k = f.symbol,
     l = f.label,
     p = {
      normal: f.gradient,
      active: f.gradientActive,
      hover: f.gradientHover
     }[a];
    p || (a = A.getRGB(a), a.error && (a = A.color("#cccccc")), a = "opacity" in a ? "rgba(" + [a.r, a.g, a.b, a.opacity] + ")" : "rgb(" + [a.r, a.g, a.b] + ")", f.gradient = [90, A.tintshade(a, -.8).rgba + ":0", A.tintshade(a, .8).rgba + ":100"].join("-"), f.gradientActive = [270, A.tintshade(a, -.8).rgba + ":0", A.tintshade(a, .8).rgba + ":100"].join("-"), d = A.getRGB(d), d.error && (d = a) || (d =
     "opacity" in d ? "rgba(" + [d.r, d.g, d.b, d.opacity] + ")" : "rgb(" + [d.r, d.g, d.b] + ")"), f.gradientHover = [90, A.tintshade(d, -.9).rgba + ":0", A.tintshade(d, .7).rgba + ":100"].join("-"), c = c || A.tintshade(a, .2).rgba, b = b || A.tintshade(a, -.2).rgba, f.symbolFill = c, f.labelFill = b, p = (this.pressed || this.active) && f.gradientActive || this.hovered && f.gradienthover || f.gradient);
    g.attr("fill", p);
    k && k.attr("fill", f.symbolFill);
    l && l.attr("fill", f.labelFill);
    return !1
   },
   stroke: function (a, b) {
    var c = this._.button,
     d = c.symbol;
    a = A.color(a);
    a.error &&
     (a = A.color("#999999"));
    c.bound.attr("stroke", a);
    d && d.attr("stroke", b || a);
    return !1
   },
   "stroke-width": function (a, b) {
    var c = this._.button,
     d = c.symbol;
    c.bound.attr("stroke-width", a);
    c.tracker.attr("stroke-width", a);
    d && d.attr("stroke-width", b);
    return !1
   }
  }
 }, {
  name: "trianglepath",
  trianglepath: function () {
   var a = arguments,
    b = A._lastArgIfGroup(a);
   return this.path(b).attr("trianglepath", [a[0], a[1], a[2], a[3], a[4], a[5], a[6] || 0, a[7] || 0, a[8] || 0])
  },
  fn: {
   sides: function () {
    var a = this._args;
    return [T(a[0], a[1], a[2], a[3]), T(a[2],
     a[3], a[4], a[5]), T(a[4], a[5], a[0], a[1])]
   },
   enclosedAngles: function () {
    var b = this._sides;
    return [a((I(b[0], 2) + I(b[2], 2) - I(b[1], 2)) / (2 * b[0] * b[2])), a((I(b[0], 2) + I(b[1], 2) - I(b[2], 2)) / (2 * b[0] * b[1])), a((I(b[2], 2) + I(b[1], 2) - I(b[0], 2)) / (2 * b[2] * b[1]))]
   },
   semiperimeter: function () {
    var a = this._sides || this.sides();
    return (a[0] + a[1] + a[2]) / 2
   }
  },
  ca: {
   trianglepath: function (a, b, c, d, f, k, l, p, r) {
    if (l || p || r) {
     this._args = arguments;
     this._sides = this.sides();
     var m = this.enclosedAngles(),
      H;
     H = this.semiperimeter();
     H = g(H * (H - this._sides[0]) *
      (H - this._sides[1]) * (H - this._sides[2])) / H;
     m = [v(l, H) / s(m[0] / 2), v(p, H) / s(m[1] / 2), v(r, H) / s(m[2] / 2)];
     m = [fa(a, b, f, k, m[0]), fa(a, b, c, d, m[0]), fa(c, d, a, b, m[1]), fa(c, d, f, k, m[1]), fa(f, k, c, d, m[2]), fa(f, k, a, b, m[2])];
     this.attr({
      path: ["M", m[0].x, m[0].y, "Q", a, b, m[1].x, m[1].y, "L", m[2].x, m[2].y, "Q", c, d, m[3].x, m[3].y, "L", m[4].x, m[4].y, "Q", f, k, m[5].x, m[5].y, "L", m[0].x, m[0].y]
     })
    }
    else this.attr({
     path: ["M", a, b, "L", c, d, f, k, "Z"]
    })
   }
  }
 }]);
 A.ca["text-bound"] = function (a, b, c, d, f, g) {
  d = this.paper;
  var k = this._.textbound;
  if ("text" ===
   this.type) {
   if (!(b && "none" !== b || a && "none" !== a)) return this._.textbound = k && k.unfollow(this).remove(), !1;
   c && A.is(c, "finite") || (c = 0);
   f && A.is(f, "finite") || (f = 0);
   !k && (k = this._.textbound = d.rect(0, 0, 0, 0, this.group).follow(this, A.ca["text-bound"].reposition, "before"));
   k.attr({
    stroke: b,
    "stroke-width": c,
    fill: a,
    "shape-rendering": 1 === c && "crisp" || "",
    r: f
   });
   g && k.attr("stroke-dasharray", g);
   A.ca["text-bound"].reposition.call(k, this.attr(), this);
   return !1
  }
 };
 A.ca["text-bound"].reposition = function (a, b) {
  var c = {},
   d, f, g,
   k, l;
  a.hasOwnProperty("visibility") && this.attr("visibility", a.visibility);
  if (a.hasOwnProperty("text-bound") || a.hasOwnProperty("x") || a.hasOwnProperty("y") || a.hasOwnProperty("text") || a.hasOwnProperty("text-anchor") || a.hasOwnProperty("text-align") || a.hasOwnProperty("font-size") || a.hasOwnProperty("line-height") || a.hasOwnProperty("vertical-align") || a.hasOwnProperty("transform") || a.hasOwnProperty("rotation")) d = b.attrs["text-bound"], f = F(d && d[3] || "0").split(Aa), d = p(f[0]) || 0, f = A.pick(p(f[1]), d), g = b.getBBox(),
   k = g.width, l = g.height, isNaN(k) || (c.x = g.x - d, c.y = g.y - f, c.width = k + 2 * d, c.height = l + 2 * f), this.attr(c)
 };
 A.fn.symbol = function () {
  var a = arguments,
   b = a.length - 1,
   c = a[b];
  c && c.constructor === A.el.constructor ? a[b] = void 0 : c = void 0;
  b = this.path(void 0, c);
  b.ca.symbol = A.fn.symbol.ca.symbol;
  return a.length === !!c + 0 ? b : b.attr("symbol", a)
 };
 A.fn.symbol.cache = {
  "": A._cacher(function (a, b, c, d) {
   return 3 < arguments.length ? ["M", a, b, "h", c, "v", d, "h", -c, "v", -d, "z"] : ["M", a - c, b - c, "h", c *= 2, "v", c, "h", -c, "v", -c, "z"]
  })
 };
 A.fn.symbol.ca = {
  symbol: function (a) {
   var b =
    A.is(a, "object") && 1 === arguments.length && !A.is(a, "function") ? a : arguments,
    c;
   b === a && (a = b[0]);
   b = (c = A.is(a, "function") && a || A.fn.symbol.cache[a] || A.fn.symbol.cache[""]) && c.apply(A, Q.call(b, 1));
   A.is(b, "array") || A.is(b, "string") ? this.attr("path", b) : b && this.attr(b)
  }
 };
 A.addSymbol = function (a, b) {
  var c = A.is(b, "function") && (c = {}, c[a] = b, c) || a,
   d = A.fn.symbol.cache,
   f = [],
   g;
  for (g in c) b = c[g], d[g] = A.is(b, "function") && A._cacher(b, A) || (f.push(g), b);
  for (; g = f.pop();) d[g] = d[d[g]]
 };
 A.svg ? (Z = "$1", na = function (a) {
  a ? "string" ===
   typeof a ? a = a.replace(za, Z) : a.toString = U : a = "M0,0";
  this.node.setAttribute("d", a.toString());
  return this
 }, A._engine.litepath = function (a, b, c, d) {
  a = r("path");
  (d || b).canvas.appendChild(a);
  b = new ga(a, b, d);
  b.type = "litepath";
  b.id = a.raphaelid = A._oid++;
  a.raphael = !0;
  oa(b, {
   fill: "none",
   stroke: "#000"
  });
  return b
 }, A._getPath.litepath = function (a) {
  return A.parsePathString(a.node.getAttribute("d"))
 }) : A.vml && (Z = function (a, b) {
  return ta[b] || b
 }, H = function () {
  this._transform.apply(this, arguments);
  this._.bcoord && (this.node.coordsize =
   this._.bcoord);
  return this
 }, na = function (a) {
  a ? "string" === typeof a ? a = a.replace(za, Z) : a.toString = U : a = "M0,0";
  this.node.path = a;
  return this
 }, A._engine.litepath = function (a, b, c, d) {
  a = r("shape");
  var f = a.style,
   g = new ga(a, b, d);
  f.cssText = "position:absolute;left:0;top:0;width:21600px;height:21600px;";
  c = p(c);
  isNaN(c) ? a.coordsize = "21600 21600" : (g._.bzoom = c, f.width = "1px", f.height = "1px", a.coordsize = g._.bcoord = c + " " + c);
  a.coordorigin = b.coordorigin;
  g.type = "litepath";
  g.id = a.raphaelid = A._oid++;
  a.raphael = !0;
  g._transform =
   g.transform;
  g.transform = H;
  A._setFillAndStroke(g, {
   fill: "none",
   stroke: "#000"
  });
  (d || b).canvas.appendChild(a);
  b = r("skew");
  b.on = !0;
  a.appendChild(b);
  g.skew = b;
  return g
 }, A._getPath.litepath = function (a) {
  return A.parsePathString(a.node.path || "")
 });
 A.fn.litepath = function (a, b, c) {
  b && b.constructor === ga && (c = b, b = void 0);
  a && a.constructor === ga && (c = a, a = "");
  b = A._engine.litepath(a, this, b, c);
  b.ca.litepath = na;
  a && b.attr("litepath", A.is(a, "array") ? [a] : a);
  return this.__set__ && this.__set__.push(b), this._elementsById[b.id] =
   b
 }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-htmlrenderer", function () {
 var d = this.hcLib,
  m = d.Raphael,
  z = d.dem,
  q = this.window,
  E = q.document,
  b = /msie/i.test(q.navigator.userAgent) && !q.opera,
  K = "VML" === m.type,
  I = d.hasTouch,
  c = {
   cursor: "cursor"
  },
  s = {
   x: "left",
   y: "top",
   strokeWidth: "borderThickness",
   "stroke-width": "borderThickness",
   width: "width",
   height: "height"
  },
  a = {
   fill: "backgroundColor",
   stroke: "borderColor",
   color: "color"
  },
  v = {
   left: 0,
   top: 0,
   padding: 0,
   border: "none",
   margin: 0,
   outline: "none",
   "-webkit-apperance": "none",
   position: "absolute",
   zIndex: 20
  },
  O, C = function (a, b, c, d) {
   a = E.createElement(a);
   for (var g in b) s[g] ? a.style[g] = b[g] : a.setAttribute(g, b[g]);
   for (g in c) a.style[g] = c[g];
   d && d.appendChild && d.appendChild(a);
   return a
  },
  g;
 g = function (a, b, c) {
  b && b instanceof g && (b = b.element);
  (this.element = C(a, c, v, b)).ishot = "true";
  this.nodeName = a.toLowerCase();
  this.added = Boolean(b)
 };
 g.prototype = {
  attr: function (d) {
   var g = this.element,
    p = {},
    m, v, k, B, A, q, r;
   if ("object" !== typeof d) {
    if (!(p = this[d])) {
     if ("string" === typeof d) g && g.getAttribute && (B = g.getAttribute(d));
     else if (void 0 !== d && null !== d && "object" === typeof d)
      for (k in d) g.setAttribute(k, d[k]);
     p = B
    }
    return p
   }
   for (m in d) {
    k = d[m];
    if (c[m]) {
     switch (m) {
     case "cursor":
      "pointer" === k && K && (k = "hand")
     }
     g.style[c[m]] = k;
     v = !0
    }
    else if (s[m]) g.style[s[m]] = k + "px", v = !0;
    else if (a[m]) g.style[a[m]] = k && k.replace(/^#?([a-f0-9]+)/ig, "#$1") || "none", v = !0;
    else if (/^visibility$/i.test(m)) v = "hidden" === k, g.style.display = v ? "none" : "", this.hidden = v, v = !0;
    else if (/^opacity$/i.test(m)) g.style.opacity = k, b && (v = 100 * Number(k), g.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
     v + ")"), v = !0;
    else if (/^innerhtml$/i.test(m)) {
     if (K && "select" == g.nodeName.toLowerCase()) {
      for (v = k.match(/<option\s?[\s\S]*?(\/>|><\/option>|>[\s\S]*?<\/option>)/ig); g.firstChild;) g.removeChild(g.firstChild);
      A = 0;
      for (q = v.length; A < q; A += 1) B = v[A], r = E.createElement("option"), /<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig.test(B) && (r.value = B.replace(/<option\s([\s\S]*[\'\"])\s*?(\/>|>[\s\S]*<\/option>)/ig, "$1").replace(/[\s\S]*value\s*\=\s*[\'\"]([\s\S]*)[\'\"]/, "$1")), r.text = B.replace(/<option\s*[\s\S]*[\'\"]?\s*?[\/>|\>]([\s\S]*)<\/option>/ig,
       "$1 "), g.options.add(r)
     }
     else "input" !== g.nodeName.toLowerCase() && void 0 !== k && (g.innerHTML = k || "");
     v = !0
    }
    else /^text$/i.test(m) ? ("input" !== g.nodeName.toLowerCase() && (g.innerHTML = "", void 0 !== k && g.appendChild(E.createTextNode(k))), v = !0) : /^type$/i.test(m) && b && this.added && (v = !0);
    v && (p[m] = k, delete d[m], v = !1)
   }
   for (m in d) g.setAttribute(m, d[m]);
   for (m in p) this[m] = d[m] = p[m], delete p[m];
   return this
  },
  val: function (a) {
   var b = this.element,
    c = void 0 === a;
   return "input" === this.nodeName && "checkbox" === b.getAttribute("type") ?
    c ? this.checked() ? 1 : 0 : this.checked(a) : c ? b.value : (b.value = a, this)
  },
  checked: function (a) {
   var b = this.element;
   return void 0 === a ? b.checked : (a ? b.setAttribute("checked", "checked") : b.removeAttribute("checked"), this)
  },
  css: function (a, b) {
   var c = this.element.style,
    d;
   if ("object" === typeof a)
    for (d in a) c[d] = a[d];
   else d && void 0 !== b && (c[d] = b);
   return this
  },
  translate: function (a, b) {
   var c = this.element;
   void 0 !== a && (c.style.left = a + "px");
   void 0 !== b && (c.style.top = b + "px");
   return this
  },
  add: function (a, b) {
   var c = this.element,
    d = a.element;
   b ? d.insertBefore(c, d.firstChild) : d.appendChild(c);
   this.added = !0;
   return this
  },
  hide: function () {
   this.element.style.display = "none";
   return this
  },
  show: function () {
   this.element.style.display = "";
   return this
  },
  focus: function () {
   "function" === typeof this.element.focus ? this.element.focus() : d.dem.fire(this.element, "focus")
  },
  destroy: function () {
   var a = this.element || {};
   a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = a.onblur = a.onfocus = null;
   O || (O = C("div"));
   a && O.appendChild(a);
   O.innerHTML = "";
   delete this.element;
   return null
  },
  on: K ? function (a, b) {
   this.element["on" + a] = function () {
    var a = q.event;
    a.target = a.srcElement;
    b(a)
   };
   return this
  } : function (a, b) {
   var c = b;
   I && "click" === a && (a = "touchstart", c = function (a) {
    a.preventDefault();
    b()
   });
   this.element["on" + a] = c;
   return this
  },
  bind: function (a, b, c) {
   z.listen(this.element, a, b, c);
   return this
  },
  unbind: function (a, b) {
   z.unlisten(this.element, a, b);
   return this
  },
  trigger: function (a, b) {
   z.fire(this.element, a, b);
   return this
  },
  fadeIn: function (a, b) {
   var c = "fast" === a ? 400 : 1E3;
   this.show();
   this.attr({
    opacity: 0
   });
   d.danimate.animate(this.element, {
    opacity: 1
   }, c, "linear", b)
  }
 };
 g.prototype.constructor = g;
 m.fn.html = function (a, b, c, d) {
  var m = {},
   k;
  b && "type" in b && (m.type = b.type, delete b.type);
  a = (new g(a, d, m)).css(c).attr(b);
  for (k in m) b[k] = m[k];
  return a
 }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-raphaeltooltip", function () {
 var d = this,
  m = d.window,
  z = m.document,
  q = z.body || z.getElementsByTagName("body")[0],
  E = d.hcLib,
  b = E.Raphael,
  K = b.eve,
  I = E.createElement,
  c = E.addEvent,
  s = E.removeEvent,
  a = E.getPosition,
  v = E.hasTouch,
  O = E.getTouchEvent,
  C = m.Math,
  g = C.ceil,
  f = C.floor,
  l = {},
  p = m.screen.availHeight,
  F = m.screen.availWidth,
  Q = {
   "": 1,
   moz: 1,
   webkit: 1,
   o: 1,
   ms: 1
  },
  k = {
   borderRadius: "borderRadius",
   boxShadow: "boxShadow"
  },
  B = /\-([a-z])/ig,
  A = function (a, b) {
   return b.toUpperCase()
  },
  W = function (a) {
   var c = r.forbiddenStyle,
    d, g, f;
   for (d in a) g = B.test(d) ? d.replace(B, A) : d, void 0 !== a[d] && !c[g] && (this[g] = a[d]), b.vml && /color/ig.test(g) && (this[g] = b.getRGB(this[g]).toString());
   for (d in k)
    if (this[d])
     for (f in Q) this[f + d] = this[d]
  },
  r = E.toolTip = {
   elementId: "fusioncharts-tooltip-element",
   element: null,
   lastTarget: null,
   currentTarget: null,
   currentPaper: null,
   pointeroffset: 12,
   prevented: !1,
   defaultStyle: E.extend2(W.prototype, {
    backgroundColor: "#ffffee",
    borderColor: "#000000",
    borderWidth: "1px",
    color: "#000000",
    fontSize: "10px",
    lineHeight: "12px",
    padding: "3px",
    borderStyle: "solid"
   }),
   defaultContainerStyle: {
    position: "absolute",
    textAlign: "left",
    margin: "0",
    zIndex: "99999",
    pointer: "default",
    display: "block"
   },
   forbiddenStyle: {}
  },
  oa = function (a) {
   !0 === r._oobready ? r._oobready = !1 : (s(q, "touchstart", oa), !r.hidden && r.currentTarget && (a = a.srcElement || a.target || l, a.raphael && r.currentTarget.paper.getById(a.raphaelid) === r.currentTarget || r.hide()))
  };
 b.svg && (r.defaultContainerStyle.pointerEvents = "none", r.defaultStyle.borderRadius =
  "0", r.defaultStyle.boxShadow = "none");
 b.vml && (r.forbiddenStyle.borderRadius = !0, r.forbiddenStyle.boxShadow = !0, r.defaultStyle.filter = "");
 r.setup = function () {
  var a = r.container,
   c = r.textElement,
   g = r.style,
   f = r.defaultContainerStyle,
   k = r.forbiddenStyle,
   l;
  a || (a = r.element = I("span"), (z.body || z.getElementsByTagName("body")[0]).appendChild(a), a.setAttribute("id", r.elementId), g = r.containerStyle = a.style, c = r.textElement = I("span"), a.appendChild(c), r.style = b.vml ? c.runtimeStyle : c.style, r.style.overflow = "hidden", r.style.display =
   "block", r.hidden = !1, r.hide());
  for (l in f) !k[l] && (g[l] = f[l]);
  r.scatted = !0;
  K.on("raphael.drag.start.*", function () {
   r.scatted && (r.waitingScat = !0)
  });
  K.on("raphael.drag.move.*", function () {
   r.waitingScat && (r.block(), r.waitingScat = !1)
  });
  K.on("raphael.drag.end.*", function () {
   r.waitingScat = !1;
   r.scatted && r.unblock(!0)
  });
  K.on("raphael.remove", function () {
   if (r.currentPaper === this || r.currentTarget && r.currentTarget.paper === this) r.hide(), r.currentTarget = r.currentPaper = null
  });
  d.addEventListener("LinkedChartInvoked",
   function (a) {
    r.currentPaper === a.sender.jsVars.hcObj.paper && r.hide()
   });
  d.addEventListener("realTimeUpdateComplete", function (a) {
   r.currentPaper === a.sender.jsVars.hcObj.paper && r.hide()
  })
 };
 r.restyle = function (a) {
  var b = r.style,
   c;
  for (c in a) b[c] = a[c]
 };
 r.onelement = function (b) {
  if (!b.__tipProcessed) {
   var d = this.paper,
    g = "group" === this.type ? d && d._elementFromEvent(b) : this,
    f = d.__tipStyle;
   g && f && g.__tipNeeded && ((b.originalEvent || b).FusionChartsPreventEvent && r.preventTooltip(), r.hiding && (r.hiding = clearTimeout(r.hiding)),
    r.currentPaper !== d && (d.__tipCp = d.canvas && a(d.canvas.parentNode, !0) || {}, r.restyle(d.__tipStyle), r.currentPaper = d), r.lastTarget = r.currentTarget, r.currentTarget = g, r.scatted = g.__tipScatted, r.onredraw.call(this, b), b.__tipProcessed = !0, v && (r._oobready = !0, c(q || (q = z.body || z.getElementsByTagName("body")[0]), "touchstart", oa)))
  }
 };
 r.onredraw = function (a) {
  a.__tipProcessed || (a.__tipProcessed = !0, (this.paper && this.paper._elementFromEvent(a)) === r.currentTarget && (a = O(a), r.x = f(a.pageX || a.clientX + z.body.scrollLeft + z.documentElement.scrollLeft ||
   0), r.y = f(a.pageY || a.clientY + z.body.scrollTop + z.documentElement.scrollTop || 0), r.redraw()))
 };
 r.onhide = function (a) {
  a.__tipProcessed || (a.__tipProcessed = !0, (this.paper && this.paper._elementFromEvent(a)) === r.currentTarget && (r.hiding = setTimeout(r.hide, 200)))
 };
 r.redraw = function () {
  if (!r.prevented && !r.blocked && r.currentTarget && r.currentTarget.__tipNeeded) {
   var a = r.currentTarget,
    b = a.paper,
    c = r.textElement,
    d = r.containerStyle,
    f = r.style,
    k = a.__tipText,
    a = r.pointeroffset,
    l = b.__tipCp,
    m = z.documentElement || z.body,
    A = m.scrollLeft,
    m = m.scrollTop,
    H = r.x,
    s = r.y,
    v, n = b.width,
    B = b.height,
    b = b.__tipConstrain;
   if (100 > n || 100 > B) b = !1;
   r.hidden && (r.containerStyle.top = "-999em", r.show());
   k !== r.text && (r.text = k, d.width = d.height = "", c.innerHTML = k, f.whiteSpace = "nowrap", k = g(f.pixelWidth || c.offsetWidth || 0), v = g(f.pixelHeight || c.offsetHeight || 0), (r.textWidthOverflow = H + k > l.left + n) ? (d.width = (n > k ? k + 2 * a : n - 2 * a || 0) + "px", f.whiteSpace = "normal") : d.width = "", (r.textHeightOverflow = v > B) ? (d.height = (B || 0) - 2 * a + "px", f.whiteSpace = "normal") : d.height = "");
   k = g(f.pixelWidth ||
    c.offsetWidth || 0);
   v = g(f.pixelHeight || c.offsetHeight || 0);
   b ? (r.textWidthOverflow ? H = (H - k < l.left ? l.left : H - k) - A : H + a + k > l.left - A + n - a && (H = H - k - a), r.textHeightOverflow ? s = l.top - m : s + a + v > l.top - m + B - a && (s = s - v - 1.5 * a)) : (A + F < H + a + k && (H = H - k - a), m + p < s + a + v && (s = s - v - 1.5 * a));
   d.left = (H + a || 0) + "px";
   d.top = (s + a || 0) + "px";
   r.hidden && r.show()
  }
 };
 r.hide = function () {
  r.hiding && (r.hiding = clearTimeout(r.hiding));
  r.containerStyle.display = "none";
  r.hidden = !0;
  r.prevented = !1
 };
 r.show = function () {
  r.blocked || (r.hiding && (r.hiding = clearTimeout(r.hiding)),
   r.containerStyle.display = "inline", r.hidden = !1)
 };
 r.preventTooltip = function () {
  r.prevented = !0
 };
 r.block = function () {
  r.blocked = !0;
  r.containerStyle.display = "none"
 };
 r.unblock = function (a) {
  r.blocked = !1;
  a && (r.containerStyle.display = r.hidden && "none" || "inline")
 };
 b.fn.tooltip = function (c, d, g) {
  d && (d = .4 * (void 0 === d.opacity ? 1 : d.opacity), b.svg ? c.boxShadow = "1px 1px 3px rgba(64,64,64," + d + ")" : c.filter = 'progid:DXImageTransform.Microsoft.Shadow(Strength=2, Direction=135, Color="#404040", shadowOpacity="' + d / 2 + '")');
  this.__tipStyle =
   new W(c);
  this.__tipCp = this.canvas && a(this.canvas.parentNode, !0) || {};
  this.__tipConstrain = Boolean(g);
  return this
 };
 b.el.trackTooltip = function (a) {
  var b = !!this.__tiptracking;
  if (void 0 === a || (a = !!a) === b) return this;
  a ? v ? this.touchstart(r.onelement) : (this.mouseover(r.onelement), this.mousemove(r.onredraw), this.mouseout(r.onhide)) : v ? this.untouchstart(r.onelement) : (this.unmouseover(r.onelement), this.unmousemove(r.onredraw), this.unmouseout(r.onhide));
  this.__tiptracking = a;
  return this
 };
 b.el.tooltip = function (a, c,
  d, g, f) {
  r.setup();
  b.el.tooltip = function (a, b, c, d, g) {
   b = !1 === a || void 0 === a || "" === a;
   this.__tipScatted = void 0 === d ? this.__tipScatted : !d;
   void 0 === this.__tipScatted && (this.__tipScatted = !0);
   null !== g && (this.__tip_blocked = g);
   b ^ !this.__tipText && (this.__tipNeeded = !b);
   this.__tipText = a;
   if (r.currentTarget === this && a !== r.text && !r.hidden) r[b ? "hide" : "redraw"]();
   return this
  };
  return b.el.tooltip.call(this, a, c, d, g, f)
 };
 d.core._setTooltipZIndex = function (a) {
  a = parseInt(a, 10);
  r && !isNaN(a) && (r.defaultContainerStyle.zIndex = a, r.containerStyle &&
   (r.containerStyle.zIndex = a))
 }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-smartlabel", function () {
 var d = this.hcLib,
  m = d.isIE,
  z = d.hasSVG,
  q = Math.max,
  E = this.window,
  b = / HtmlUnit/.test(E.navigator.userAgent),
  K = E.document,
  I = / AppleWebKit\//.test(E.navigator.userAgent),
  c = !!K.createElement("canvas").getContext,
  s = !(!c || !K.createElement("canvas").getContext("2d").measureText),
  E = function () {
   function a(a, b, c) {
    if (!a || !a.length) return 0;
    var d = c.getWidthFunction(),
     g = 0,
     f = 0,
     f = d(a),
     k = f / a.length;
    c = b;
    g = Math.ceil(b / k);
    if (f < b) return a.length -
     1;
    g > a.length && (c = b - f, g = a.length);
    for (; 0 < c;)
     if (c = b - d(a.substr(0, g)), f = Math.floor(c / k)) g += f;
     else return g;
    for (; 0 > c;)
     if (c = b - d(a.substr(0, g)), f = Math.floor(c / k)) g += f;
     else break;
    return g
   }

   function v(a, b) {
    b = 5 < b ? b : 5;
    this.maxContainers = 20 > b ? b : 20;
    this.last = this.first = null;
    this.containers = {};
    this.length = 0;
    this.rootNode = a;
    if (W) {
     var c = K.createElementNS("http://www.w3.org/2000/svg", "svg");
     c.setAttributeNS("http://www.w3.org/2000/svg", "xlink", "http://www.w3.org/1999/xlink");
     c.setAttributeNS("http://www.w3.org/2000/svg",
      "height", "0");
     c.setAttributeNS("http://www.w3.org/2000/svg", "width", "0");
     this.svgRoot = c;
     this.rootNode.appendChild(c)
    }
   }

   function E(a, c, d) {
    if ("undefined" !== typeof a && "object" !== typeof a) {
     this.id = a;
     var g;
     "string" === typeof c && (c = K.getElementById(c));
     a: {
      if (c && (c.offsetWidth || c.offsetHeight)) {
       if (c.appendChild) {
        c.appendChild(c = K.createElement("div"));
        c.className = "fusioncharts-smartlabel-container";
        c.setAttribute("aria-hidden", "true");
        c.setAttribute("role", "presentation");
        a = c;
        break a
       }
      }
      else if ((a = K.getElementsByTagName("body")[0]) &&
       a.appendChild) {
       c = K.createElement("div");
       c.className = "fusioncharts-smartlabel-container";
       c.setAttribute("aria-hidden", "true");
       c.setAttribute("role", "presentation");
       a.appendChild(c);
       a = c;
       break a
      }
      a = void 0
     }
     a = this.parentContainer = a;
     a.innerHTML = "WgI";
     if (b || !a.offsetHeight && !a.offsetWidth) W = !0;
     a.innerHTML = "";
     for (g in f) a.style[g] = f[g];
     this.containerManager = new v(a, 10);
     this.showNoEllipses = !d;
     this.init = !0;
     this.style = {};
     this.setStyle()
    }
   }
   var C = d.supportedStyle,
    g = {
     fontWeight: 1,
     "font-weight": 1,
     fontStyle: 1,
     "font-style": 1,
     fontSize: 1,
     "font-size": 1,
     fontFamily: 1,
     "font-family": 1
    },
    f = {
     position: "absolute",
     top: "-9999em",
     left: "-9999em",
     whiteSpace: "nowrap",
     padding: "0px",
     width: "1px",
     height: "1px",
     overflow: "hidden"
    },
    l = I ? 0 : 4.5,
    p = 0,
    F = /\b_SmartLabel\b/,
    Q = /\b_SmartLabelBR\b/,
    k = /(<[^<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig,
    B = RegExp("\\<span[^\\>]+?_SmartLabel[^\\>]{0,}\\>(.*?)\\<\\/span\\>", "ig"),
    A = /<[^>][^<]*[^>]+>/i,
    W = !1,
    r = 0,
    oa = 0,
    ga, $, V;
   K.getElementsByClassName ? (ga = "getElementsByClassName", $ = "_SmartLabel", V = !0) : (ga = "getElementsByTagName",
    $ = "span", V = !1);
   v.prototype = {
    get: function (a) {
     var b = this.containers,
      c = this.length,
      d = this.maxContainers,
      g, f = "",
      k = "",
      k = this.getCanvasFont(a);
     for (g in C) void 0 !== a[g] && (f += C[g] + ":" + a[g] + ";");
     if (!f) return !1;
     if (b[f]) f = b[f], this.first !== f && (f.prev && (f.prev.next = f.next), f.next && (f.next.prev = f.prev), f.next = this.first, f.next.prev = f, this.last === f && (this.last = f.prev), f.prev = null, this.first = f);
     else {
      if (c >= d)
       for (a = c - d + 1; a--;) this.removeContainer(this.last);
      f = this.addContainer(f, k)
     }
     return f
    },
    getCanvasFont: function (a) {
     var b,
      d = [];
     if (!c || !s) return !1;
     for (b in g) void 0 !== a[b] && d.push(a[b]);
     return d.join(" ")
    },
    setMax: function (a) {
     var b = this.length;
     a = 5 < a ? a : 5;
     a = 20 > a ? a : 20;
     if (a < b) {
      for (b -= a; b--;) this.removeContainer(this.last);
      this.length = a
     }
     this.maxContainers = a
    },
    addContainer: function (a, b) {
     var c, d;
     this.containers[a] = d = {
      next: null,
      prev: null,
      node: null,
      ellipsesWidth: 0,
      lineHeight: 0,
      dotWidth: 0,
      avgCharWidth: 4,
      keyStr: a,
      canvasStr: b,
      charCache: {}
     };
     d.next = this.first;
     d.next && (d.next.prev = d);
     this.first = d;
     this.last || (this.last = d);
     this.length +=
      1;
     c = d.node = K.createElement("div");
     this.rootNode.appendChild(c);
     m && !z ? c.style.setAttribute("cssText", a) : c.setAttribute("style", a);
     c.setAttribute("aria-hidden", "true");
     c.setAttribute("role", "presentation");
     c.style.display = "inline-block";
     c.innerHTML = "WgI";
     d.lineHeight = c.offsetHeight;
     d.avgCharWidth = c.offsetWidth / 3;
     W ? (c = d.svgText = K.createElementNS("http://www.w3.org/2000/svg", "text"), c.setAttribute("style", a), this.svgRoot.appendChild(c), c.textContent = "WgI", d.lineHeight = c.getBBox().height, d.avgCharWidth =
      (c.getBBox().width - l) / 3, c.textContent = "...", d.ellipsesWidth = c.getBBox().width - l, c.textContent = ".", d.dotWidth = c.getBBox().width - l) : b ? (c = d.canvas = K.createElement("canvas"), c.style.height = c.style.width = "0px", this.rootNode.appendChild(c), d.context = c = c.getContext("2d"), c.font = b, d.ellipsesWidth = c.measureText("...").width, d.dotWidth = c.measureText(".").width) : (c.innerHTML = "...", d.ellipsesWidth = c.offsetWidth, c.innerHTML = ".", d.dotWidth = c.offsetWidth, c.innerHTML = "");
     return d
    },
    removeContainer: function (a) {
     var b =
      a.keyStr;
     b && this.length && a && (--this.length, a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), this.first === a && (this.first = a.next), this.last === a && (this.last = a.prev), a.node.parentNode.removeChild(a.node), a.canvas && a.canvas.parentNode.removeChild(a.canvas), delete this.containers[b])
    },
    dispose: function () {
     var a, b = this.containers;
     this.maxContainers = null;
     for (a in b) this.removeContainer(b[a]);
     this.rootNode.parentNode.removeChild(this.rootNode);
     this.last = this.first = this.rootNode = null
    }
   };
   v.prototype.constructor =
    v;
   E.prototype = {
    dispose: function () {
     this.init && (this.containerManager.dispose(), delete this.container, delete this.context, delete this.cache, delete this.containerManager, delete this.containerObj, delete this.id, delete this.style, delete this.parentContainer, delete this.showNoEllipses)
    },
    useEllipsesOnOverflow: function (a) {
     this.init && (this.showNoEllipses = !a)
    },
    getWidthFunction: function () {
     var a = this.context,
      b = this.container,
      c = this.containerObj.svgText;
     return c ? function (a) {
      var b;
      c.textContent = a;
      a = c.getBBox();
      b = a.width - l;
      1 > b && (b = a.width);
      return b
     } : a ? function (b) {
      return a.measureText(b).width
     } : function (a) {
      b.innerHTML = a;
      return b.offsetWidth
     }
    },
    getSmartText: function (b, c, d, f) {
     if (!this.init) return !1;
     if (void 0 === b || null === b) b = "";
     var g = {
       text: b,
       maxWidth: c,
       maxHeight: d,
       width: null,
       height: null,
       oriTextWidth: null,
       oriTextHeight: null,
       oriText: b,
       isTruncated: !1
      },
      l = !1,
      m, s, v = 0,
      n, L, C, z = -1,
      E = l = -1;
     s = this.container;
     var I = this.context,
      O = 0;
     C = 0;
     var la, ya, Ia;
     Ia = [];
     var ma = 0,
      Ma = this.showNoEllipses ? "" : "...";
     L = this.lineHeight;
     var pa, O = [],
      z = m = -1;
     pa = function (a) {
      a = a.replace(/^\s\s*/, "");
      for (var b = /\s/, c = a.length; b.test(a.charAt(--c)););
      return a.slice(0, c + 1)
     };
     l = -1;
     ya = this.getWidthFunction();
     if (s) {
      if (!W) {
       s.innerHTML = b;
       g.oriTextWidth = l = s.offsetWidth;
       g.oriTextHeight = C = s.offsetHeight;
       if (C <= d && l <= c) return g.width = g.oriTextWidth = l, g.height = g.oriTextHeight = C, g;
       if (L > d) return g.text = "", g.width = g.oriTextWidth = 0, g.height = g.oriTextHeight = 0, g
      }
      b = pa(b).replace(/(\s+)/g, " ");
      l = A.test(b);
      L = this.showNoEllipses ? c : c - p;
      if (l) {
       v = b.replace(k, "$2");
       b = b.replace(k,
        '$1<span class="_SmartLabel">$2</span>');
       b = b.replace(/(<br\s*\/*\>)/g, '<span class="_SmartLabel _SmartLabelBR">$1</span>');
       s.innerHTML = b;
       ma = s[ga]($);
       I = 0;
       for (ya = ma.length; I < ya; I += 1)
        if (b = ma[I], V || F.test(b.className)) pa = b.innerHTML, "" !== pa && (" " === pa ? z = O.length : "-" === pa && (m = O.length), O.push({
         spaceIdx: z,
         dashIdx: m,
         elem: b
        }), Ia.push(pa));
       ma = 0;
       m = O.length;
       r = O[0].elem.offsetWidth;
       if (r > c) return g.text = "", g.width = g.oriTextWidth = g.height = g.oriTextHeight = 0, g;
       r > L && !this.showNoEllipses && (L = c - 2 * oa, L > r ? Ma = ".." : (L =
        c - oa, L > r ? Ma = "." : (L = 0, Ma = "")));
       Ia = O[0].elem.offsetLeft;
       I = O[0].elem.offsetTop;
       if (f)
        for (; ma < m; ma += 1) b = O[ma].elem, ya = b.offsetLeft - Ia + b.offsetWidth, ya > L && (la || (la = ma), s.offsetWidth > c && (n = ma, ma = m));
       else
        for (; ma < m; ma += 1) b = O[ma].elem, pa = b.offsetHeight + (b.offsetTop - I), ya = b.offsetLeft - Ia + b.offsetWidth, f = null, ya > L ? (la || (la = ma), ya > c && (l = O[ma].spaceIdx, z = O[ma].dashIdx, l > E ? (O[l].elem.innerHTML = "<br/>", E = l) : z > E ? (O[z].elem.innerHTML = z === ma ? "<br/>-" : "-<br/>", E = z) : b.parentNode.insertBefore(f = K.createElement("br"),
         b), b.offsetHeight + b.offsetTop > d ? (f ? f.parentNode.removeChild(f) : E === z ? O[z].elem.innerHTML = "-" : O[l].elem.innerHTML = " ", n = ma, ma = m) : la = null)) : pa > d && (n = ma, ma = m);
       if (n < m) {
        g.isTruncated = !0;
        la = la ? la : n;
        for (ma = m - 1; ma >= la; --ma) b = O[ma].elem, b.parentNode.removeChild(b);
        for (; 0 <= ma; --ma) b = O[ma].elem, Q.test(b.className) ? b.parentNode.removeChild(b) : ma = 0
       }
       g.text = s.innerHTML.replace(B, "$1");
       g.isTruncated && (g.text += Ma, g.tooltext = v)
      }
      else {
       Ia = b.split("");
       m = Ia.length;
       s = "";
       n = [];
       la = Ia[0];
       this.cache[la] ? r = this.cache[la].width :
        (r = ya(la), this.cache[la] = {
         width: r
        });
       if (L > r) n = b.substr(0, a(b, L, this)).split(""), ma = n.length;
       else {
        if (r > c) return g.text = "", g.width = g.oriTextWidth = g.height = g.oriTextHeight = 0, g;
        Ma && (L = c - 2 * oa, L > r ? Ma = ".." : (L = c - oa, L > r ? Ma = "." : (L = 0, Ma = "")))
       }
       O = ya(n.join(""));
       C = this.lineHeight;
       if (f) {
        for (; ma < m; ma += 1)
         if (la = n[ma] = Ia[ma], this.cache[la] ? r = this.cache[la].width : (r = ya(la), this.cache[la] = {
           width: r
          }), O += r, O > L && (s || (s = n.slice(0, -1).join("")), O > c)) return g.text = pa(s) + Ma, g.tooltext = g.oriText, g.width = ya(g.text), g.height = this.lineHeight,
          g;
        g.text = n.join("");
        g.width = O;
        g.height = this.lineHeight
       }
       else {
        for (; ma < m; ma += 1)
         if (la = n[ma] = Ia[ma], " " !== la || I || (la = "&nbsp;"), this.cache[la] ? r = this.cache[la].width : (r = ya(la), this.cache[la] = {
           width: r
          }), O += r, O > L && (s || (s = n.slice(0, -1).join("")), O > c)) {
          l = b.substr(0, n.length).lastIndexOf(" ");
          z = b.substr(0, n.length).lastIndexOf("-");
          l > E ? (O = ya(n.slice(E + 1, l).join("")), n.splice(l, 1, "<br/>"), E = l, f = l + 1) : z > E ? (z === n.length - 1 ? (O = ya(n.slice(E + 1, l).join("")), n.splice(z, 1, "<br/>-")) : (O = ya(n.slice(E + 1, l).join("")), n.splice(z,
           1, "-<br/>")), E = z, f = z + 1) : (n.splice(n.length - 1, 1, "<br/>" + Ia[ma]), l = n.length - 2, O = ya(n.slice(E + 1, l + 1).join("")), E = l, f = ma);
          C += this.lineHeight;
          if (C > d) return g.text = pa(s) + Ma, g.tooltext = g.oriText, g.width = c, g.height = C - this.lineHeight, g;
          v = q(v, O);
          s = null;
          la = a(b.substr(f), L, this);
          O = ya(b.substr(f, la || 1));
          n.length < f + la && (n = n.concat(b.substr(n.length, f + la - n.length).split("")), ma = n.length - 1)
         }
        v = q(v, O);
        g.text = n.join("");
        g.width = v;
        g.height = C
       }
       return g
      }
      g.height = s.offsetHeight;
      g.width = s.offsetWidth
     }
     else g.error = Error("Body Tag Missing!");
     return g
    },
    setStyle: function (a) {
     if (!this.init) return !1;
     if (a !== this.style || this.styleNotSet) {
      a || (a = this.style);
      var b = a,
       c = b.fontSize = b.fontSize || "12px";
      b.lineHeight = b.lineHeight || b["line-height"] || 1.2 * parseInt(c, 10) + "px";
      this.style = a;
      (this.containerObj = a = this.containerManager.get(a)) ? (this.container = a.node, this.context = a.context, this.cache = a.charCache, this.lineHeight = a.lineHeight, p = a.ellipsesWidth, oa = a.dotWidth, this.styleNotSet = !1) : this.styleNotSet = !0
     }
    },
    getTextSize: function (a, b, c) {
     if (!this.init) return !1;
     var d = {
       text: a,
       width: null,
       height: null,
       oriTextWidth: null,
       oriTextHeight: null,
       isTruncated: !1
      },
      g = this.container;
     g && (g.innerHTML = a, d.oriTextWidth = g.offsetWidth, d.oriTextHeight = g.offsetHeight, d.width = Math.min(d.oriTextWidth, b), d.height = Math.min(d.oriTextHeight, c), d.width < d.oriTextWidth || d.height < d.oriTextHeight) && (d.isTruncated = !0);
     return d
    },
    getOriSize: function (a) {
     if (!this.init) return !1;
     var b = {
       text: a,
       width: null,
       height: null
      },
      c = this.container,
      d = this.getWidthFunction(),
      g = 0;
     if (W) {
      a = a.split(/(<br\s*\/*\>)/g);
      c = a.length;
      for (b.height = this.lineHeight * c; c--;) g = q(g, d(a[c]));
      b.width = g
     }
     else c && (c.innerHTML = a, b.width = c.offsetWidth, b.height = c.offsetHeight);
     return b
    }
   };
   return E.prototype.constructor = E
  }();
 d.SmartLabelManager = E
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-numberformatter", function () {
 var d = this,
  m = d.hcLib,
  z = m.pluckNumber,
  q = m.extend2,
  E = m.getValidValue,
  b = m.pluck,
  K = m.getFirstValue,
  I = Math.abs,
  c = Math.pow,
  s = Math.round,
  a = function (a) {
   return a && a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  },
  v = {},
  O = function (a) {
   var b = [],
    c;
   for (c in a) b.push(c + "_" + a[c]);
   b.sort();
   return b.join(",")
  },
  C = function (a) {
   var b = {},
    c;
   for (c in a) b[c.toLowerCase()] = a[c];
   return b
  };
 m.NumberFormatter = function () {
  function d(a, b, g) {
   var f;
   if (0 >= b) return s(a) + "";
   if (isNaN(b)) return a += "", 12 < a.length && -1 != a.indexOf(".") && (b = 12 - a.split(".")[0].length, f = c(10, b), a = s(a * f) / f + ""), a;
   f = c(10, b);
   a = s(a * f) / f + "";
   if (1 == g)
    for (-1 == a.indexOf(".") && (a += ".0"), g = a.split("."), b -= g[1].length, g = 1; g <= b; g++) a += "0";
   return a
  }

  function f(a, b, c, d, g) {
   var f = Number(a),
    l = "",
    m = !1,
    p = "",
    s = "",
    v = p = 0;
   if (isNaN(f)) return "";
   if (1E15 < f) return f.toExponential(g ? 1 : 14);
   p = 0;
   v = a.length; - 1 != a.indexOf(".") && (l = a.substring(a.indexOf(".") + 1, a.length), v = a.indexOf("."));
   0 > f && (m = !0, p = 1);
   p =
    a.substring(p, v);
   a = p.length;
   g = d.length - 1;
   f = d[g];
   if (a < f) s = p;
   else
    for (; a >= f;) s = (a - f ? c : "") + p.substr(a - f, f) + s, a -= f, f = 0 >= --g ? d[0] : d[g], a < f && (s = p.substring(a, 0) + s);
   "" != l && (s = s + b + l);
   !0 === m && (s = "-" + s);
   return s
  }
  var l, m = {
    formatnumber: "1",
    formatnumberscale: "1",
    defaultnumberscale: "",
    numberscaleunit: ["K", "M"],
    numberscalevalue: [1E3, 1E3],
    numberprefix: "",
    numbersuffix: "",
    decimals: "",
    forcedecimals: "0",
    yaxisvaluedecimals: "2",
    decimalseparator: ".",
    thousandseparator: ",",
    thousandseparatorposition: [3],
    indecimalseparator: "",
    inthousandseparator: "",
    sformatnumber: "1",
    sformatnumberscale: "0",
    sdefaultnumberscale: "",
    snumberscaleunit: ["K", "M"],
    snumberscalevalue: [1E3, 1E3],
    snumberprefix: "",
    snumbersuffix: "",
    sdecimals: "2",
    sforcedecimals: "0",
    syaxisvaluedecimals: "2",
    xFormatNumber: "0",
    xFormatNumberScale: "0",
    xDefaultNumberScale: "",
    xNumberScaleUnit: ["K", "M"],
    xNumberScaleValue: [1E3, 1E3],
    xNumberPrefix: "",
    xNumberSuffix: ""
   },
   v = {
    mscombidy2d: {
     formatnumberscale: "1"
    }
   },
   C = function (c, d, g) {
    var f, l, s, C, Q, I, O, za, Aa, Z = d.name,
     U = q({}, m),
     na, H, T, fa, n, L,
     ca, aa, sa, Y, Ea;
    (s = v[Z]) && (U = q(U, s));
    this.csConf = U;
    this.chartAPI = d;
    E(c.numberscaleunit) && (f = c.numberscaleunit.split(","));
    if (l = E(c.snumberscaleunit, c.numberscaleunit)) l = l.split(",");
    if (s = E(c.xnumberscaleunit, c.numberscaleunit)) s = s.split(",");
    if (C = E(c.ticknumberscaleunit, c.numberscaleunit)) C = C.split(",");
    if (Q = E(c.ynumberscaleunit, c.numberscaleunit)) Q = Q.split(",");
    E(c.numberscalevalue) && (I = c.numberscalevalue.split(","));
    if (H = E(c.snumberscalevalue, c.numberscalevalue)) H = H.split(",");
    if (O = E(c.xnumberscalevalue,
      c.numberscalevalue)) O = O.split(",");
    if (za = E(c.ticknumberscalevalue, c.numberscalevalue)) za = za.split(",");
    if (Aa = E(c.ynumberscalevalue, c.numberscalevalue)) Aa = Aa.split(",");
    if (E(c.thousandseparatorposition))
     for (na = c.thousandseparatorposition.split(","), T = na.length, n = m.thousandseparatorposition[0]; T--;) fa = parseInt(na[T], 10), 0 >= fa && (fa = n), n = na[T] = fa;
    d || (d = {});
    T = z(c.scalerecursively, 0);
    fa = z(c.sscalerecursively, T);
    n = z(c.xscalerecursively, T);
    L = z(c.maxscalerecursion, -1);
    ca = z(c.smaxscalerecursion, L);
    aa = z(c.xmaxscalerecursion,
     L);
    sa = E(c.scaleseparator, " ");
    Y = E(c.sscaleseparator, sa);
    Ea = E(c.xscaleseparator, sa);
    L || (L = -1);
    this.baseConf = f = {
     cacheStore: [],
     formatnumber: b(c.formatnumber, d.formatnumber, U.formatnumber),
     formatnumberscale: b(c.formatnumberscale, d.formatnumberscale, U.formatnumberscale),
     defaultnumberscale: K(c.defaultnumberscale, d.defaultnumberscale, U.defaultnumberscale),
     numberscaleunit: b(f, d.numberscaleunit, U.numberscaleunit).concat(),
     numberscalevalue: b(I, d.numberscalevalue, U.numberscalevalue).concat(),
     numberprefix: K(c.numberprefix,
      d.numberprefix, U.numberprefix),
     numbersuffix: K(c.numbersuffix, d.numbersuffix, U.numbersuffix),
     decimalprecision: parseInt("auto" === c.decimals ? U.decimalprecision : b(c.decimals, c.decimalprecision, d.decimals, U.decimals, d.decimalprecision, U.decimalprecision), 10),
     forcedecimals: b(c.forcedecimals, d.forcedecimals, U.forcedecimals),
     decimalseparator: b(c.decimalseparator, d.decimalseparator, U.decimalseparator),
     thousandseparator: b(c.thousandseparator, d.thousandseparator, U.thousandseparator),
     thousandseparatorposition: b(na,
      d.thousandseparatorposition, U.thousandseparatorposition),
     indecimalseparator: K(c.indecimalseparator, d.indecimalseparator, U.indecimalseparator),
     inthousandseparator: K(c.inthousandseparator, d.inthousandseparator, U.inthousandseparator),
     scalerecursively: T,
     maxscalerecursion: L,
     scaleseparator: sa
    };
    E(f.inthousandseparator) && (this.baseConf._REGinthousandseparator = new RegExp(a(f.inthousandseparator), "g"));
    E(f.indecimalseparator) && (this.baseConf._REGindecimalseparator = new RegExp(a(f.indecimalseparator)));
    this.Y = [];
    g || (g = {
     cacheStore: [],
     formatnumber: f.formatnumber,
     formatnumberscale: f.formatnumberscale,
     defaultnumberscale: f.defaultnumberscale,
     numberscaleunit: f.numberscaleunit.concat(),
     numberscalevalue: f.numberscalevalue.concat(),
     numberprefix: f.numberprefix,
     numbersuffix: f.numbersuffix,
     decimalprecision: f.decimalprecision,
     forcedecimals: f.forcedecimals,
     decimalseparator: f.decimalseparator,
     thousandseparator: f.thousandseparator,
     thousandseparatorposition: f.thousandseparatorposition,
     indecimalseparator: f.indecimalseparator,
     inthousandseparator: f.inthousandseparator,
     scalerecursively: T,
     maxscalerecursion: L,
     scaleseparator: sa
    }, d.useScaleRecursively && (g.numberscalevalue && g.numberscalevalue.length) == (g.numberscaleunit && g.numberscaleunit.length) || (g.scalerecursively = T = 0), I = {
     cacheStore: [],
     formatnumber: g.formatnumber,
     formatnumberscale: g.formatnumberscale,
     defaultnumberscale: g.defaultnumberscale,
     numberscaleunit: g.numberscaleunit.concat(),
     numberscalevalue: g.numberscalevalue.concat(),
     numberprefix: g.numberprefix,
     numbersuffix: g.numbersuffix,
     decimalprecision: parseInt(b(c.yaxisvaluedecimals, g.decimalprecision, 2), 10),
     forcedecimals: b(c.forceyaxisvaluedecimals, g.forcedecimals),
     decimalseparator: g.decimalseparator,
     thousandseparator: g.thousandseparator,
     thousandseparatorposition: g.thousandseparatorposition.concat(),
     indecimalseparator: g.indecimalseparator,
     inthousandseparator: g.inthousandseparator,
     scalerecursively: T,
     maxscalerecursion: L,
     scaleseparator: sa
    }, H = {
     cacheStore: [],
     formatnumber: b(c.sformatnumber, d.sformatnumber, m.sformatnumber),
     formatnumberscale: b(c.sformatnumberscale,
      d.sformatnumberscale, m.sformatnumberscale),
     defaultnumberscale: K(c.sdefaultnumberscale, d.sdefaultnumberscale, g.defaultnumberscale),
     numberscaleunit: b(l, d.snumberscaleunit, m.snumberscaleunit).concat(),
     numberscalevalue: b(H, d.snumberscalevalue, m.snumberscalevalue).concat(),
     numberprefix: K(c.snumberprefix, d.snumberprefix, m.snumberprefix),
     numbersuffix: K(c.snumbersuffix, d.snumbersuffix, m.snumbersuffix),
     decimalprecision: parseInt(b(c.syaxisvaluedecimals, c.sdecimals, c.decimals, d.sdecimals, m.sdecimals), 10),
     forcedecimals: b(c.forcesyaxisvaluedecimals,
      c.sforcedecimals, c.forcedecimals, d.sforcedecimals, m.sforcedecimals),
     decimalseparator: b(c.decimalseparator, d.decimalseparator, m.decimalseparator),
     thousandseparator: b(c.thousandseparator, d.thousandseparator, m.thousandseparator),
     thousandseparatorposition: g.thousandseparatorposition.concat(),
     indecimalseparator: b(c.indecimalseparator, d.indecimalseparator, m.indecimalseparator),
     inthousandseparator: b(c.inthousandseparator, d.inthousandseparator, m.inthousandseparator),
     scalerecursively: fa,
     maxscalerecursion: ca,
     scaleseparator: Y
    }, l = q({}, H), l.decimalprecision = parseInt(b(c.sdecimals, c.decimals, c.syaxisvaluedecimals, d.sdecimals, m.sdecimals), 10), l.forcedecimals = b(c.sforcedecimals, c.forcedecimals, c.forcesyaxisvaluedecimals, d.sforcedecimals, m.sforcedecimals), l.cacheStore = [], d.useScaleRecursively && (H.numberscalevalue && H.numberscalevalue.length) == (H.numberscaleunit && H.numberscaleunit.length) || (H.scalerecursively = fa = 0), /^(bubble|scatter|selectscatter)$/.test(Z) && (I.formatnumber = b(c.yformatnumber, I.formatnumber), I.formatnumberscale =
     b(c.yformatnumberscale, I.formatnumberscale), I.defaultnumberscale = K(c.ydefaultnumberscale, I.defaultnumberscale), I.numberscaleunit = b(Q, I.numberscaleunit), I.numberscalevalue = b(Aa, I.numberscalevalue), I.numberprefix = b(c.ynumberprefix, I.numberprefix), I.numbersuffix = b(c.ynumbersuffix, I.numbersuffix), g.formatnumber = b(c.yformatnumber, g.formatnumber), g.formatnumberscale = b(c.yformatnumberscale, g.formatnumberscale), g.defaultnumberscale = K(c.ydefaultnumberscale, g.defaultnumberscale), g.numberscaleunit = b(c.ynumberscaleunit,
      g.numberscaleunit.concat()), g.numberscalevalue = b(c.ynumberscalevalue, g.numberscalevalue.concat()), g.numberprefix = b(c.ynumberprefix, g.numberprefix), g.numbersuffix = b(c.ynumbersuffix, g.numbersuffix)), /^(mscombidy2d|mscombidy3d)$/.test(Z) && (H.formatnumberscale = z(c.sformatnumberscale)), /^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(Z) && (g.decimalprecision = b(c.decimals, "2")), T && (g.numberscalevalue.push(1), g.numberscaleunit.unshift(g.defaultnumberscale), I.numberscalevalue.push(1),
     I.numberscaleunit.unshift(I.defaultnumberscale)), fa && (H.numberscalevalue.push(1), H.numberscaleunit.unshift(H.defaultnumberscale), l.numberscalevalue.push(1), l.numberscaleunit.unshift(l.defaultnumberscale)), this.Y[0] = {
     yAxisLabelConf: I,
     dataLabelConf: g
    }, this.Y[1] = {
     yAxisLabelConf: H,
     dataLabelConf: l
    }, this.paramLabels = g, this.param1 = I, this.param2 = H, this.paramLabels2 = l);
    this.paramX = {
     cacheStore: [],
     formatnumber: b(c.xformatnumber, f.formatnumber),
     formatnumberscale: b(c.xformatnumberscale, f.formatnumberscale),
     defaultnumberscale: K(c.xdefaultnumberscale,
      f.defaultnumberscale),
     numberscaleunit: b(s, f.numberscaleunit.concat()),
     numberscalevalue: b(O, f.numberscalevalue.concat()),
     numberprefix: b(c.xnumberprefix, f.numberprefix),
     numbersuffix: b(c.xnumbersuffix, f.numbersuffix),
     decimalprecision: parseInt(b(c.xaxisvaluedecimals, c.xaxisvaluesdecimals, f.decimalprecision, 2), 10),
     forcedecimals: b(c.forcexaxisvaluedecimals, 0),
     decimalseparator: f.decimalseparator,
     thousandseparator: f.thousandseparator,
     thousandseparatorposition: f.thousandseparatorposition.concat(),
     indecimalseparator: f.indecimalseparator,
     inthousandseparator: f.inthousandseparator,
     scalerecursively: n,
     maxscalerecursion: aa,
     scaleseparator: Ea
    };
    this.paramLegend = q(q({}, f), {
     cacheStore: [],
     decimalprecision: parseInt(z(c.legendvaluedecimals, f.decimalprecision, 2), 10),
     forcedecimals: z(c.legendvalueforcedecimals, f.forcedecimals, 0),
     formatnumberscale: b(c.legendvalueformatnumberscale, f.formatnumberscale),
     formatnumber: b(c.legendvalueformatnumber, f.formatnumber)
    });
    d.useScaleRecursively && (this.paramX.numberscalevalue && this.paramX.numberscalevalue.length) ==
     (this.paramX.numberscaleunit && this.paramX.numberscaleunit.length) || (this.paramX.scalerecursively = n = 0);
    n && (this.paramX.numberscalevalue.push(1), this.paramX.numberscaleunit.unshift(this.paramX.defaultnumberscale));
    this.paramScale = {
     cacheStore: [],
     formatnumber: b(c.tickformatnumber, f.formatnumber),
     formatnumberscale: b(c.tickformatnumberscale, f.formatnumberscale),
     defaultnumberscale: K(c.tickdefaultnumberscale, f.defaultnumberscale),
     numberscaleunit: b(C, f.numberscaleunit.concat()),
     numberscalevalue: b(za, f.numberscalevalue.concat()),
     numberprefix: b(c.ticknumberprefix, f.numberprefix),
     numbersuffix: b(c.ticknumbersuffix, f.numbersuffix),
     decimalprecision: parseInt(b(c.tickvaluedecimals, f.decimalprecision, "2"), 10),
     forcedecimals: b(c.forcetickvaluedecimals, f.forcedecimals, 0),
     decimalseparator: f.decimalseparator,
     thousandseparator: f.thousandseparator,
     thousandseparatorposition: f.thousandseparatorposition.concat(),
     indecimalseparator: f.indecimalseparator,
     inthousandseparator: f.inthousandseparator,
     scalerecursively: T,
     maxscalerecursion: L,
     scaleseparator: sa
    };
    T && (this.paramScale.numberscalevalue.push(1), this.paramScale.numberscaleunit.unshift(this.paramScale.defaultnumberscale));
    this.timeConf = {
     inputDateFormat: b(c.inputdateformat, c.dateformat, "mm/dd/yyyy"),
     outputDateFormat: b(c.outputdateformat, c.inputdateformat, c.dateformat, "mm/dd/yyyy"),
     days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
     months: "January February March April May June July August September October November December".split(" "),
     daySuffix: " st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" ")
    };
    this.cleaneValueCacheStore = {};
    this.percentStrCacheStore = {}
   };
  C.prototype = {
   cleaneValueCacheStore: {},
   percentStrCacheStore: {},
   dispose: function () {
    this.Y && delete this.Y;
    this.cleaneValueCacheStore && delete this.cleaneValueCacheStore;
    this.percentStrCacheStore && delete this.percentStrCacheStore;
    this.paramLabels && delete this.paramLabels;
    this.param1 && delete this.param1;
    this.param2 && delete this.param2;
    this.paramLabels2 && delete this.paramLabels2;
    this.csConf && delete this.csConf;
    this.chartAPI && delete this.chartAPI;
    this.baseConf && delete this.baseConf;
    this.timeConf && delete this.timeConf;
    this.paramX && delete this.paramX;
    this.paramScale && delete this.paramScale
   },
   parseMLAxisConf: function (a, c) {
    var d = this.baseConf,
     g = this.csConf,
     f = this.chartAPI,
     l = z(a.scalerecursively, d.scalerecursively),
     s = z(a.maxscalerecursion, d.maxscalerecursion),
     v = E(a.scaleseparator, d.scaleseparator),
     q, C, F, Q, O, U;
    c = z(c, this.Y.length);
    E(a.numberscaleunit) && (q = a.numberscaleunit.split(","));
    E(a.numberscalevalue) && (C = a.numberscalevalue.split(","));
    s || (s = -1);
    if (E(a.thousandseparatorposition))
     for (F = a.thousandseparatorposition.split(","), Q = F.length, U = m.thousandseparatorposition[0]; Q--;)(O = z(I(F[Q]))) ? U = O : O = U, F[Q] = O;
    d = {
     cacheStore: [],
     formatnumber: b(a.formatnumber, d.formatnumber),
     formatnumberscale: b(a.formatnumberscale, d.formatnumberscale),
     defaultnumberscale: K(a.defaultnumberscale, d.defaultnumberscale),
     numberscaleunit: b(q, d.numberscaleunit).concat(),
     numberscalevalue: b(C, d.numberscalevalue).concat(),
     numberprefix: K(a.numberprefix, d.numberprefix),
     numbersuffix: K(a.numbersuffix,
      d.numbersuffix),
     forcedecimals: b(a.forcedecimals, d.forcedecimals),
     decimalprecision: parseInt("auto" === a.decimals ? g.decimalprecision : b(a.decimals, d.decimalprecision), 10),
     decimalseparator: b(a.decimalseparator, d.decimalseparator),
     thousandseparator: b(a.thousandseparator, d.thousandseparator),
     thousandseparatorposition: b(F, d.thousandseparatorposition),
     indecimalseparator: K(a.indecimalseparator, d.indecimalseparator),
     inthousandseparator: K(a.inthousandseparator, d.inthousandseparator),
     scalerecursively: l,
     maxscalerecursion: s,
     scaleseparator: v
    };
    f.useScaleRecursively && (d.numberscalevalue && d.numberscalevalue.length) == (d.numberscaleunit && d.numberscaleunit.length) || (d.scalerecursively = l = 0);
    f = {
     cacheStore: [],
     formatnumber: d.formatnumber,
     formatnumberscale: d.formatnumberscale,
     defaultnumberscale: d.defaultnumberscale,
     numberscaleunit: d.numberscaleunit.concat(),
     numberscalevalue: d.numberscalevalue.concat(),
     numberprefix: d.numberprefix,
     numbersuffix: d.numbersuffix,
     decimalprecision: parseInt(b(a.yaxisvaluedecimals, d.decimalprecision, 2), 10),
     forcedecimals: b(a.forceyaxisvaluedecimals, d.forcedecimals),
     decimalseparator: d.decimalseparator,
     thousandseparator: d.thousandseparator,
     thousandseparatorposition: d.thousandseparatorposition.concat(),
     indecimalseparator: d.indecimalseparator,
     inthousandseparator: d.inthousandseparator,
     scalerecursively: l,
     maxscalerecursion: s,
     scaleseparator: v
    };
    l && (d.numberscalevalue.push(1), d.numberscaleunit.unshift(d.defaultnumberscale), f.numberscalevalue.push(1), f.numberscaleunit.unshift(f.defaultnumberscale));
    this.Y[c] = {
     dataLabelConf: d,
     yAxisLabelConf: f
    }
   },
   percentValue: function (a) {
    var b = this.percentStrCacheStore[a];
    void 0 === b && (b = isNaN(this.paramLabels.decimalprecision) ? "2" : this.paramLabels.decimalprecision, b = this.percentStrCacheStore[a] = f(d(a, b, this.paramLabels.forcedecimals), this.paramLabels.decimalseparator, this.paramLabels.thousandseparator, this.paramLabels.thousandseparatorposition) + "%");
    return b
   },
   getCleanValue: function (a, b) {
    var c = this.cleaneValueCacheStore[a];
    if (void 0 === c) {
     var d = this.baseConf,
      c = a + "";
     d._REGinthousandseparator &&
      (c = c.replace(d._REGinthousandseparator, ""));
     d._REGindecimalseparator && (c = c.replace(d._REGindecimalseparator, "."));
     c = parseFloat(c);
     c = isFinite(c) ? c : NaN;
     this.cleaneValueCacheStore[a] = c = isNaN(c) ? null : b ? I(c) : c
    }
    return c
   },
   dataLabels: function (a, b) {
    var c = this.Y[b] || (b ? this.Y[1] : this.Y[0]),
     d, c = c && c.dataLabelConf || this.baseConf;
    d = c.cacheStore[a];
    void 0 === d && (d = c.cacheStore[a] = l(a, c));
    return d
   },
   yAxis: function (a, b) {
    var c = this.Y[b] || (b ? this.Y[1] : this.Y[0]),
     d, c = c && c.yAxisLabelConf || this.baseConf;
    d = c.cacheStore[a];
    void 0 === d && (d = c.cacheStore[a] = l(a, c, !0));
    return d
   },
   xAxis: function (a) {
    var b = this.paramX.cacheStore[a];
    void 0 === b && (b = this.paramX.cacheStore[a] = l(a, this.paramX, !0));
    return b
   },
   sYAxis: function (a) {
    var b = this.Y[1],
     c, b = b && b.yAxisLabelConf || this.baseConf;
    c = b.cacheStore[a];
    void 0 === c && (c = b.cacheStore[a] = l(a, b));
    return c
   },
   scale: function (a) {
    var b = this.paramScale.cacheStore[a];
    void 0 === b && (b = this.paramScale.cacheStore[a] = l(a, this.paramScale));
    return b
   },
   getCleanTime: function (a) {
    var b;
    this.timeConf.inputDateFormat &&
     Date.parseExact && (b = Date.parseExact(a, this.timeConf.inputDateFormat));
    return b && b.getTime()
   },
   legendValue: function (a) {
    var b = this.paramLegend.cacheStore[a];
    void 0 === b && (b = this.paramLegend.cacheStore[a] = l(a, this.paramLegend));
    return b
   },
   legendPercentValue: function (a) {
    var b = this.percentStrCacheStore[a],
     c = this.paramLegend;
    void 0 === b && (b = isNaN(c.decimalprecision) ? "2" : c.decimalprecision, b = this.percentStrCacheStore[a] = f(d(a, b, c.forcedecimals), c.decimalseparator, c.thousandseparator, c.thousandseparatorposition) +
     "%");
    return b
   },
   getDateValue: function (a) {
    var b, c, d;
    a && !/\//.test(this.timeConf.inputDateFormat) && (a = a.replace(new RegExp(this.timeConf.inputDateFormat.replace(/[a-z]/ig, "").slice(0, 1), "g"), "/"));
    a = /^dd/.test(this.timeConf.inputDateFormat) && a && a.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/, "$2/$1/$3") || a;
    b = new Date(a);
    c = b.getTime();
    !c && a && /\:/.test(a) && (a = a.split(":"), c = z(a[0], 0), d = z(a[1], 0), a = z(a[2], 0), c = 23 < c ? 24 === c && 0 === d && 0 === a ? c : 23 : c, d = 59 < d ? 59 : d, a = 59 < a ? 59 : a, b = new Date, b.setHours(c), b.setMinutes(d),
     b.setSeconds(a), c = b.getTime());
    return {
     ms: c,
     date: b
    }
   },
   getFormattedDate: function (a, c) {
    var d = "object" === typeof a && a || new Date(a),
     g = this.timeConf,
     f = b(c, g.outputDateFormat),
     l = d.getFullYear(),
     m = d.getMonth(),
     p = d.getDate(),
     s = d.getDay(),
     v = d.getMinutes(),
     q = d.getSeconds(),
     d = d.getHours(),
     v = 9 < v ? "" + v : "0" + v,
     q = 9 < q ? "" + q : "0" + q,
     d = 9 < d ? "" + d : "0" + d;
    f.match(/dnl/) && (f = f.replace(/dnl/ig, g.days[s]));
    f.match(/dns/) && (f = f.replace(/dns/ig, g.days[s] && g.days[s].substr(0, 3)));
    f.match(/dd/) && (f = f.replace(/dd/ig, p));
    f.match(/mnl/) &&
     (f = f.replace(/mnl/ig, g.months[m]));
    f.match(/mns/) && (f = f.replace(/mns/ig, g.months[m] && g.months[m].substr(0, 3)));
    f.match(/mm/) && (f = f.replace(/mm/ig, m + 1));
    f.match(/yyyy/) && (f = f.replace(/yyyy/ig, l));
    f.match(/yy/) && (f = f.replace(/yy/ig, (l % 1E3 % 100 + "").replace(/^(\d)$/, "0$1")));
    f.match(/hh12/) && (f = f.replace(/hh12/ig, d % 12 || 12));
    f.match(/hh/) && (f = f.replace(/hh/ig, d));
    f.match(/mn/) && (f = f.replace(/mn/ig, v));
    f.match(/ss/) && (f = f.replace(/ss/ig, q));
    f.match(/ampm/) && (f = f.replace(/ampm/ig, 12 > d ? "AM" : "PM"));
    f.match(/ds/) &&
     (f = f.replace(/ds/ig, g.daySuffix[p]));
    return f
   }
  };
  C.prototype.constructor = C;
  l = function (a, c, l) {
   if (null !== a) {
    a = Number(a);
    var m = a + "",
     p, s, v, q, C;
    p = 1 == c.formatnumberscale ? c.defaultnumberscale : "";
    C = (C = m.split(".")[1]) ? C.length : c.forcedecimals ? "2" : "";
    if (1 == c.formatnumberscale) {
     m = a;
     s = c.numberscalevalue;
     a = c.numberscaleunit;
     p = {};
     var F = c.defaultnumberscale;
     v = 0;
     var E = [],
      I = [];
     if (c.scalerecursively) {
      for (v = 0; v < s.length; v++)
       if (q = z(s[v]) || 1E3, Math.abs(Number(m)) >= q && v < s.length - 1) F = m % q, m = (m - F) / q, 0 !== F && (E.push(F), I.push(a[v]));
       else {
        E.push(m);
        I.push(a[v]);
        break
       }
      E.reverse();
      I.reverse();
      p.value = E;
      p.scale = I
     }
     else {
      if (s.length === a.length)
       for (v = 0; v < s.length; v++)
        if (q = z(s[v]) || 1E3, Math.abs(Number(m)) >= q) F = a[v] || "", m = Number(m) / q;
        else break;
      p.value = m;
      p.scale = F
     }
     s = p;
     a = m = s.value;
     p = s.scale
    }
    if (c.scalerecursively && 0 !== c.formatnumberscale && "0" !== c.formatnumberscale) {
     l = s.value;
     s = s.scale;
     a = -1 == c.maxscalerecursion ? l.length : Math.min(l.length, c.maxscalerecursion);
     if (1 == c.formatnumber)
      for (m = "", q = 0; q < a; q++) p = 0 === q ? l[q] : Math.abs(l[q]), v = p + "", q ==
       a - 1 && (v = d(p, b(c.decimalprecision, C), c.forcedecimals)), m = m + f(v, c.decimalseparator, c.thousandseparator, c.thousandseparatorposition) + s[q] + (q < a - 1 ? c.scaleseparator : "");
     else
      for (m = "", q = 0; q < a; q++) m = m + (0 === q ? l[q] : Math.abs(l[q]) + "") + s[q] + (q < a - 1 ? c.scaleseparator : "");
     m = (c.numberprefix || "") + m + (c.numbersuffix || "")
    }
    else 1 == c.formatnumber && (m = d(a, b(c.decimalprecision, C), c.forcedecimals), m = f(m, c.decimalseparator, c.thousandseparator, c.thousandseparatorposition, l)), m = (c.numberprefix || "") + m + p + (c.numbersuffix || "");
    return m
   }
  };
  return C
 }();
 d.extend(d.core, {
  formatNumber: function (a, b) {
   b = b && C(b) || {};
   var c = O(b),
    d;
   v[c] ? d = v[c] : v[c] = d = new m.NumberFormatter(b, {
    useScaleRecursively: !0
   });
   return d.dataLabels(a)
  }
 }, !1);
 d.extend(d.core, {
  formatNumber: function (a, b, c, p) {
   c = c && C(c) || {};
   var s = this.jsVars.instanceAPI || {},
    z = s.numberFormatter,
    k;
   "" === O(c) ? z ? k = z : (z = this.getChartData(d.dataFormats.JSON, !0), z = z.data || {}, z = z.chart || {}, c = O(z), v[c] ? k = v[c] : v[c] = k = new m.NumberFormatter(z, s)) : (z = this.getChartData(d.dataFormats.JSON, !0), z = z.data || {}, z = z.chart || {}, z = q(q({}, z), c), c = O(z), v[c] ? k = v[c] : v[c] = k = new m.NumberFormatter(z, s));
   switch ((b && b.toLowerCase ? b : "").toLowerCase()) {
   case "yaxisvalues":
    a = k.yAxis(a, p);
    break;
   case "xaxisvalues":
    a = k.xAxis(a);
    break;
   case "scale":
    a = k.scale(a);
    break;
   default:
    a = k.dataLabels(a, p)
   }
   return a
  }
 }, !0)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-dom", function () {
 var d = this.hcLib,
  m = this.window,
  z = m.document,
  q = d.extend2,
  E = "ontouchstart" in m;
 (function (b) {
  var d = function () {
    var b = {},
     d;
    b.pointerdrag = {
     start: ["mousedown"],
     end: ["mouseup"],
     onStart: ["mousemove"],
     postHandlers: {},
     preHandlers: {}
    };
    b.pointerhover = {
     start: ["mouseover"],
     end: ["mouseout"]
    };
    b.click = {
     start: ["click"]
    };
    b.escape = {
     start: ["keydown"],
     preHandlers: {
      start: function (a) {
       a = a || m.event;
       return a.keyCode && 27 === a.keyCode ? !0 : !1
      }
     }
    };
    E && (d =
     b.pointerdrag, d.start.push("touchstart"), d.end.push("touchend"), d.onStart.push("touchmove"), d.postHandlers.onStart = function (a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1
     });
    return b
   }(),
   I;
  I = q({}, d);
  b.dem = new function () {
   var b = {},
    d = {},
    a = z.addEventListener ? function (a, b, c) {
     a.addEventListener(b, c, !1)
    } : function (a, b, c) {
     a.attachEvent("on" + b, c)
    },
    v = z.removeEventListener ? function (a, b, c) {
     a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
     a.detachEvent("on" + b, c)
    },
    E = function (a, b, c) {
     var d = [],
      g, k, s;
     s = I[b];
     c.start =
      function (b) {
       b = b || m.event;
       for (var d = s.onStart, g = s.end, l = [], k = [], v = d && d.length || 0; v--;) l.push(C(a, d[v], c, "onStart"));
       for (v = g && g.length || 0; v--;) k.push(C(a, g[v], c, "end"));
       c.startUn = c.startUn ? c.startUn.concat(l) : l;
       c.endUn = c.endUn ? c.endUn.concat(k) : k;
       c.state = "start";
       c.closure(b)
      };
     c.onStart = function (a) {
      a = a || m.event;
      c.state = "on";
      if (c.gDef && c.gDef.preHandlers && "function" === typeof c.gDef.preHandlers.onStart) c.gDef.preHandlers.onStart(a);
      c.closure(a);
      if (c.gDef && c.gDef.postHandlers && "function" === typeof c.gDef.postHandlers.onStart) c.gDef.postHandlers.onStart(a)
     };
     c.end = function (a) {
      a = a || m.event;
      for (var b = c.startUn, d = c.endUn, g = b && b.length || 0; g--;) b[g]();
      delete c.startUn;
      c.startUn = [];
      for (g = d && d.length || 0; g--;) d[g]();
      delete c.endUn;
      c.endUn = [];
      c.state = "end";
      c.closure(a)
     };
     if (s)
      for (b = s.start, k = b.length; k--;)(g = b[k]) && d.push(C(a, g, c, "start"));
     return d
    },
    C = function (b, c, d, g) {
     g = g || "closure";
     a(b, c, d[g]);
     return function () {
      v(b, c, d[g])
     }
    },
    g = function (a) {
     return function (b) {
      b = b || m.event;
      a.handler.call(a.context || a.elem, {
       data: a.data,
       type: a.type,
       state: a.state,
       isGesture: a.isGesture,
       target: b.target || b.srcElement,
       originalEvent: b
      })
     }
    };
   return {
    listen: function (a, l, m, v, q) {
     var k = this;
     l = "string" === typeof l ? l.split(" ") : l;
     var B = l.length,
      A = [],
      K = function (a, b, c) {
       A.push(function () {
        k.unlisten(a, b, c)
       })
      },
      r, oa, ga, $, V;
     if (a.ownerDocument && a.ownerDocument === z)
      for (; B--;) oa = l[B], $ = Boolean(I[oa]), V = "function" === typeof m ? m : m[B], ga = {
       handler: V,
       elem: a,
       type: oa,
       isGesture: $,
       gDef: $ ? I[oa] : null,
       data: v,
       context: q,
       start: [],
       end: [],
       links: {
        prev: null,
        next: null
       }
      }, ga.closure = g(ga), $ ? ((r = d[oa]) || (r = d[oa] = []), r.push(ga),
       E(a, oa, ga)) : ((r = b[oa]) || (r = b[oa] = []), r.push(ga), C(a, oa, ga)), K(a, oa, V);
     else
      for (; B--;) oa = l[B], V = "function" === typeof m ? m : m[B], ga = {
       handler: V,
       elem: a,
       type: oa,
       isGesture: $,
       data: v,
       context: q,
       start: [],
       end: [],
       links: {
        prev: null,
        next: null
       }
      }, ga.closure = g(ga), (r = b[oa]) || (r = b[oa] = []), r.push(ga), C(a, oa, ga), K(a, oa, V);
     return {
      unlisten: function () {
       for (var a = A.length; a--;) A[a]();
       A.length = 0;
       A = null
      }
     }
    },
    unlisten: function (a, g, m) {
     var q, C = !1,
      k, z;
     if (Boolean(I[g]))
      for (k = (q = d[g]) && q.length || 0; k--;) {
       if (z = q[k], z.handler === m && z.elem ===
        a) {
        var C = a,
         A = void 0,
         E = void 0,
         r = void 0,
         A = void 0;
        if (A = I[g])
         for (A = A.start, r = A.length; r--;)(E = A[r]) && v(C, E, z.start);
        q.splice(k, 1);
        C = !0
       }
      }
     else
      for (k = (q = b[g]) && q.length || 0; k--;) z = q[k], z.handler === m && z.elem === a && (v(a, g, z.closure), q.splice(k, 1), C = !0);
     return C
    },
    fire: function (a, d, g, m) {
     var s;
     if (a.ownerDocument && a.ownerDocument === z) z.createEvent ? (s = z.createEvent("HTMLEvents"), s.initEvent(d, !0, !0), g && (g.originalEvent ? g.originalEvent = s : q(s, g)), "function" === typeof a[d] && a[d].call(a), a.dispatchEvent(s)) : (s = z.createEventObject(),
      s.eventType = d, g && (g.originalEvent ? g.originalEvent = s : q(s, g)), "function" === typeof a[d] && a[d].call(a), a.fireEvent("on" + d, s)), m && !s.returnValue && m(s);
     else
      for (m = (d = b[d]) && d.length || 0; m--;) s = d[m], s.elem === a && s.closure(g)
    }
   }
  }
 })(d || m);
 (function (b) {
  function d(a, b) {
   var c = "";
   z.defaultView && z.defaultView.getComputedStyle ? c = z.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function (a, b) {
    return b.toUpperCase()
   }), c = a.currentStyle[b]);
   c = parseInt(c, 10);
   return isNaN(c) ?
    0 : c
  }

  function E(b, c, d, g, f, l, m, q) {
   var z = c / 40,
    k = s[l || "linear"](g - d, z),
    B = 0,
    A = function () {
     var c;
     B < z ? (c = k[B], b.style[f] = d + c + q, a && "opacity" === f && (c = 100 * Number(c), b.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + c + ")"), B += 1, setTimeout(A, 40)) : m && m()
    };
   q = q || "";
   setTimeout(A, 40)
  }
  var c = {
    width: {
     suffix: "px"
    },
    height: {
     suffix: "px"
    },
    opacity: !0,
    top: {
     suffix: "px"
    },
    left: {
     suffix: "px"
    }
   },
   s = {
    linear: function (a, b) {
     for (var c = [], d = a / b, f = 0; f < b; f += 1) c[f] = d * (f + 1);
     return c
    }
   },
   a = /msie/i.test(m.navigator.userAgent) && !m.opera;
  b.danimate = q({
   animate: function (a, b, m, g, f) {
    g = {};
    var l = {},
     p = function () {
      q += 1;
      q === s && "function" === typeof f && f()
     },
     s = 0,
     q = 0,
     k, z;
    if (40 > m) {
     for (z in b) a.style[z] = b[z];
     f && f()
    }
    else
     for (z in b) c[z] && (s += 1, g[z] = b[z], l[z] = d(a, z), k = "object" === typeof c[z] && c[z].suffix, E(a, m, l[z], g[z], z, "linear", p, k))
   }
  }, {})
 })(d || m)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-colormanager", function () {
 var d = this.hcLib,
  m = d.pluckNumber,
  z = d.graphics.getDarkColor,
  q = d.graphics.getLightColor,
  E = "AFD8F8 F6BD0F 8BBA00 FF8E46 008E8E D64646 8E468E 588526 B3AA00 008ED6 9D080D A186BE CC6600 FDC689 ABA000 F26D7D FFF200 0054A6 F7941C CC3300 006600 663300 6DCFF6".split(" "),
  b = "8BBA00 F6BD0F FF654F AFD8F8 FDB398 CDC309 B1D0D2 FAD1B9 B8A79E D7CEA5 C4B3CE E9D3BE EFE9AD CEA7A2 B2D9BA".split(" "),
  K = d.defaultPaletteOptions = {
   paletteColors: [E,
E, E, E, E],
   bgColor: ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE", "A86402,FDC16D", "FF7CA0,FFD1DD"],
   bgAngle: [270, 270, 270, 270, 270],
   bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
   bgAlpha: ["50,50", "60,50", "40,20", "20,10", "30,30"],
   canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   canvasBgAngle: [0, 0, 0, 0, 0],
   canvasBgAlpha: ["100", "100", "100", "100", "100"],
   canvasBgRatio: ["", "", "", "", ""],
   canvasBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
   canvasBorderAlpha: [100, 100, 100, 90, 100],
   showShadow: [0,
1, 1, 1, 1],
   divLineColor: ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"],
   divLineAlpha: [40, 45, 65, 40, 30],
   altHGridColor: ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
   altHGridAlpha: [50, 35, 10, 20, 15],
   altVGridColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
   altVGridAlpha: [10, 20, 10, 15, 10],
   anchorBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
   baseFontColor: ["555555", "60634E",
"025B6A", "A15E01", "68001B"],
   borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
   borderAlpha: [50, 50, 50, 50, 50],
   legendBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   legendBorderColor: ["545454", "545454", "415D6F", "845001", "D55979"],
   plotGradientColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   plotBorderColor: ["333333", "8A8A8A", "FFFFFF", "FFFFFF", "FFFFFF"],
   plotFillColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
   bgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   bgAlpha3D: ["100",
"100", "100", "100", "100"],
   bgAngle3D: [90, 90, 90, 90, 90],
   bgRatio3D: ["", "", "", "", ""],
   canvasBgColor3D: ["DDE3D5", "D8D8D7", "EEDFCA", "CFD2D8", "FEE8E0"],
   canvasBaseColor3D: ["ACBB99", "BCBCBD", "C8A06C", "96A4AF", "FAC7BC"],
   divLineColor3D: ["ACBB99", "A4A4A4", "BE9B6B", "7C8995", "D49B8B"],
   divLineAlpha3D: [100, 100, 100, 100, 100],
   legendBgColor3D: ["F0F3ED", "F3F3F3", "F7F0E8", "EEF0F2", "FEF8F5"],
   legendBorderColor3D: ["C6CFB8", "C8C8C8", "DFC29C", "CFD5DA", "FAD1C7"],
   toolTipbgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
   toolTipBorderColor3D: ["49563A",
"666666", "49351D", "576373", "681C09"],
   baseFontColor3D: ["49563A", "4A4A4A", "49351D", "48505A", "681C09"],
   anchorBgColor3D: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]
  },
  E = d.colorManager = function (b, c) {
   var s = b.chart,
    a = d.extend2({}, K),
    v = c.defaultPaletteOptions || {},
    E;
   a || (a = {});
   for (E in v) a[E] = v[E];
   a = this.paletteOptions = a;
   v = this.themeEnabled = s.palettethemecolor;
   this.paletteIndex = (0 < s.palette && 6 > s.palette ? s.palette : m(c.paletteIndex, 1)) - 1;
   this.iterator = 0;
   this.paletteColors = a.paletteColors[this.themeEnabled ? 0 :
    this.paletteIndex];
   E = s.palettecolors;
   void 0 !== E && null !== E && "" !== s.palettecolors && (this.paletteColors = s.palettecolors.split(/\s*\,\s*/));
   this.paletteLen = this.paletteColors.length;
   this.useFlatColors = m(s.useflatdataplotcolor, c.useFlatColor, 0);
   v && (this.paletteIndex = 5, a.bgColor.push(q(v, 35) + "," + q(v, 10)), a.bgAngle.push(270), a.bgRatio.push("0,100"), a.bgAlpha.push("50,50"), a.canvasBgColor.push("FFFFFF"), a.canvasBgAngle.push(0), a.canvasBgAlpha.push("100"), a.canvasBgRatio.push(""), a.canvasBorderColor.push(z(v,
     80)), a.canvasBorderAlpha.push(100), a.showShadow.push(1), a.divLineColor.push(z(v, 20)), a.divLineAlpha.push(40), a.altHGridColor.push(q(v, 20)), a.altHGridAlpha.push(15), a.altVGridColor.push(q(v, 80)), a.altVGridAlpha.push(10), a.anchorBgColor.push("FFFFFF"), a.toolTipBgColor.push("FFFFFF"), a.toolTipBorderColor.push(z(v, 80)), a.baseFontColor.push(v.split && v.split(",")[0]), a.borderColor.push(z(v, 60)), a.borderAlpha.push(50), a.legendBgColor.push("FFFFFF"), a.legendBorderColor.push(z(v, 80)), a.plotGradientColor.push("FFFFFF"),
    a.plotBorderColor.push(z(v, 85)), a.plotFillColor.push(z(v, 85)), a.bgColor3D.push("FFFFFF"), a.bgAlpha3D.push("100"), a.bgAngle3D.push(90), a.bgRatio3D.push(""), a.canvasBgColor3D.push(q(v, 20)), a.canvasBaseColor3D.push(q(v, 40)), a.divLineColor3D.push(z(v, 20)), a.divLineAlpha3D.push(40), a.legendBgColor3D.push("FFFFFF"), a.legendBorderColor3D.push(z(v, 80)), a.toolTipbgColor3D.push("FFFFFF"), a.toolTipBorderColor3D.push(z(v, 80)), a.baseFontColor3D.push(v.split && v.split(",")[0]), a.anchorBgColor3D.push("FFFFFF"), a.tickColor &&
    a.tickColor.push(z(v, 90)), a.trendDarkColor && a.trendDarkColor.push(z(v, 90)), a.trendLightColor && a.trendLightColor.push(q(v, a.TrendLightShadeOffset)), a.msgLogColor && a.msgLogColor.push(q(v, 80)), a.dialColor && a.dialColor.push(z(v, 95) + ",FFFFFF," + z(v, 95)), a.dialBorderColor && a.dialBorderColor.push(z(v, 95) + ",FFFFFF," + z(v, 95)), a.pivotColor && a.pivotColor.push(q(v, 95) + ",FFFFFF," + q(v, 95)), a.pivotBorderColor && a.pivotBorderColor.push(z(v, 95) + ",FFFFFF," + z(v, 95)), a.pointerBorderColor && a.pointerBorderColor.push(z(v,
     75)), a.pointerBgColor && a.pointerBgColor.push(z(v, 75)), a.thmBorderColor && a.thmBorderColor.push(z(v, 90)), a.thmFillColor && a.thmFillColor.push(q(v, 55)), a.cylFillColor && a.cylFillColor.push(q(v, 55)), a.periodColor && a.periodColor.push(q(v, 10)), a.winColor && a.winColor.push("666666"), a.lossColor && a.lossColor.push("CC0000"), a.drawColor && a.drawColor.push("666666"), a.scorelessColor && a.scorelessColor.push("FF0000"), a.gridColor && a.gridColor.push(q(v, 30)), a.categoryBgColor && a.categoryBgColor.push(q(v, 10)), a.dataTableBgColor &&
    a.dataTableBgColor.push(q(v, 10)), a.gridResizeBarColor && a.gridResizeBarColor.push(z(v, 90)), a.scrollBarColor && a.scrollBarColor.push(q(v, 50)))
  };
 E.prototype = {
  getColor: function (b) {
   return this.paletteOptions[b][this.paletteIndex]
  },
  getPlotColor: function (b) {
   var c = this.paletteColors;
   b = this.useFlatColors ? this.getColor("plotFillColor") : c[b % this.paletteLen];
   b || (this.iterator === this.paletteLen && (this.iterator = 0), b = c[this.iterator], this.iterator += 1);
   return b
  },
  parseColorMix: function (b, c) {
   var d = [],
    a, m, E, C, g, f, l,
    p, F, K;
   c = c.replace(/\s/g, "");
   c = c.toLowerCase();
   if ("" === c || null === c || void 0 === c) d = [b];
   else
    for (m = c.split(","), E = b.split(","), C = Math.max(m.length, E.length, 1), g = m[0], f = E[0], F = /[\{\}]/ig, K = 0; K < C; K++) l = (m[K] || g).replace(F, ""), p = E[K] || f, "color" == l ? d.push(p) : "light" == l.substr(0, 5) ? (a = l.indexOf("-"), a = -1 == a ? 1 : l.substr(a + 1, l.length - a), a = 100 - a, d.push(q(p, a))) : "dark" == l.substr(0, 4) ? (a = l.indexOf("-"), a = -1 == a ? 1 : l.substr(a + 1, l.length - a), a = 100 - a, d.push(z(p, a))) : d.push(l);
   return d
  },
  parseAlphaList: function (b, c) {
   var d =
    b.split(","),
    a = [],
    v, q = 100,
    C;
   for (C = 0; C < c; C++) v = m(d[C]), void 0 !== v && null !== v && (q = v), a[C] = q;
   return a.join()
  },
  parseRatioList: function (b, c) {
   var d = b.split(","),
    a = [],
    m = 0,
    q, C;
   for (C = 0; C < c; C++) q = d[C], q = isNaN(q) || void 0 === q ? 0 : Math.abs(Number(q)), q = 100 < q ? 100 : q, a[C] = q, m += q;
   m = 100 < m ? 100 : m;
   if (d.length < c)
    for (C = d.length; C < c; C++) a[C] = (100 - m) / (c - d.length);
   a[-1] = 0;
   return a.join()
  }
 };
 E.prototype.constructor = E;
 d.defaultGaugePaletteOptions = {
  paletteColors: [b, b, b, b, b],
  bgColor: ["CBCBCB,E9E9E9", "CFD4BE,F3F5DD", "C5DADD,EDFBFE",
"A86402,FDC16D", "FF7CA0,FFD1DD"],
  bgAngle: [270, 270, 270, 270, 270],
  bgRatio: ["0,100", "0,100", "0,100", "0,100", "0,100"],
  bgAlpha: ["50,50", "60,50", "40,20", "20,10", "30,30"],
  toolTipBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
  toolTipBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
  baseFontColor: ["555555", "60634E", "025B6A", "A15E01", "68001B"],
  tickColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
  trendDarkColor: ["333333", "60634E", "025B6A", "A15E01", "68001B"],
  trendLightColor: ["f1f1f1", "F3F5DD",
"EDFBFE", "FFF5E8", "FFD1DD"],
  pointerBorderColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
  pointerBgColor: ["545454", "60634E", "415D6F", "845001", "68001B"],
  canvasBgColor: ["FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"],
  canvasBgAngle: [0, 0, 0, 0, 0],
  canvasBgAlpha: ["100", "100", "100", "100", "100"],
  canvasBgRatio: ["", "", "", "", ""],
  canvasBorderColor: ["545454", "545454", "415D6F", "845001", "68001B"],
  canvasBorderAlpha: [100, 100, 100, 90, 100],
  altHGridColor: ["EEEEEE", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
  altHGridAlpha: [50,
35, 10, 20, 15],
  altVGridColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
  altVGridAlpha: [10, 20, 10, 15, 10],
  borderColor: ["767575", "545454", "415D6F", "845001", "68001B"],
  borderAlpha: [50, 50, 50, 50, 50],
  legendBgColor: ["ffffff", "ffffff", "ffffff", "ffffff", "ffffff"],
  legendBorderColor: ["545454", "545454", "415D6F", "845001", "D55979"],
  plotFillColor: ["767575", "D8DCC5", "99C4CD", "DEC49C", "FEC1D0"],
  plotBorderColor: ["999999", "8A8A8A", "6BA9B6", "C1934D", "FC819F"],
  msgLogColor: ["717170", "7B7D6D", "92CDD6", "965B01", "68001B"],
  TrendLightShadeOffset: 30
 }
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-annotations", function () {
 var d = this,
  m = d.core,
  z = d.hcLib,
  q = d.window,
  E = /msie/i.test(q.navigator.userAgent) && !q.opera,
  b = z.addEvent,
  K = z.removeEvent,
  I = z.hasTouch,
  c = q.Number,
  s = I ? 6 : 5,
  a = "rgba(192,192,192," + (E ? .002 : 1E-6) + ")",
  E = q.Math,
  v = E.min,
  O = E.max,
  C = E.sin,
  g = E.cos,
  f = E.PI,
  l = f / 180,
  p = d.extend,
  F = z.pluck,
  Q = z.pluckNumber,
  k = z.graphics.convertColor,
  B = z.getValidValue,
  A = z.parseUnsafeString,
  W = z.setImageDisplayMode,
  r = z.graphics.parseColor,
  oa = z.setLineHeight,
  ga = z.getMouseCoordinate,
  $ = {
   style: {}
  },
  V = z.toRaphaelColor,
  ta = function (a, b) {
   return {
    start: -b,
    end: -a,
    angle: a - b
   }
  },
  za = function (a, b, d, g, f) {
   var l, k, m = 0,
    p = 0;
   k = void 0 === b || null === b ? 1 : b;
   var s;
   if (!a || !a.toString) return {
    value: d,
    hasDynamicMacros: !1
   };
   a = a.toString();
   a = a.toLowerCase().replace(/\s/g, "");
   if (d = a.match(/^[\+\-]?\d+(\.\d+)?|[\+\-]\d+(\.\d+)?/g)) {
    for (b = 0; b < d.length; b += 1) m += Number(d[b]) || 0;
    m *= k
   }
   if (d = a.match(/^[\+\-]?(\$[a-z0-9\.]+)|[\+\-](\$[a-z0-9\.]+)/g))
    for (b = 0; b < d.length; b += 1) {
     l = d[b];
     var r = g,
      q = f,
      v = l.split("."),
      C = void 0,
      A = void 0,
      z = 0;
     for (k = void 0; C = v.shift();) switch (typeof (A = r[C])) {
     case "object":
      r = A[C];
      break;
     case "function":
      A = A(v, q), "-" === l.charAt() && (A *= -1), k = !0;
     default:
      z += c(A) || 0, v.length = 0
     }
     l = z;
     k && (s = !0);
     p += l
    }
   if (d = a.match(/^[\+\-]?\$\d+(\.\d+)?|[\+\-]\$\d+(\.\d+)?/g))
    for (b = 0; b < d.length; b += 1) p = p + Number(d[b].replace("$", "")) || 0;
   return {
    value: m + p,
    hasDynamicMacros: s
   }
  },
  Aa = function (a, b, c) {
   if (!b.removed) {
    b = b.data("annotation");
    var g = b.getRenderer(),
     f = ga(g.container, c),
     l = f.annotationOptions = b.options,
     k = f.groupOptions =
     b.group.options;
    f._shape = b;
    "id" in l && (f.annotationId = l.id);
    "id" in k && (f.groupId = k.id);
    d.raiseEvent(a, f, g.fusionCharts, c)
   }
  },
  Z, U, na;
 U = function (a, b, c, d, g) {
  this.options = a;
  this.attrs = {};
  this.css = {};
  this.bounds = {};
  this.shared = b;
  this.snaps = c || {};
  this.annotations = g;
  this.items = b = [];
  this._idstore = d;
  a.id && (this._id = a.id, d[a.id] = this);
  if (a = a.items)
   for (d = 0, c = a.length; d < c; d += 1) b.push(new na(a[d], this))
 };
 p(U.prototype, {
  scaleImageX: 1,
  scaleImageY: 1,
  scaleText: 1,
  scaleValue: 1,
  scaleValueComplement: 1,
  scaleX: 1,
  scaleY: 1
 });
 U.prototype.setup = function () {
  var a = this.options,
   b = this.shared,
   c = this.getRenderer();
  c && (this.isBelow = 0 !== Q(a.showbelow, a.showbelowchart, b.showbelow), this.useTracker = !this.isBelow && c.layers.tracker && this.shared.useTracker, this.raiseOwnEvents = b.interactionevents)
 };
 U.prototype.scale = function () {
  var a = this.options,
   b = this.shared,
   c = this.bounds,
   d = this.snaps,
   g = this.getRenderer(),
   f = b.rootxscale,
   l = b.rootyscale,
   k = c.xs = Q(a.xscale, b.xscale, 100) / 100,
   m = c.ys = Q(a.yscale, b.yscale, 100) / 100,
   p, s, r;
  g && (this.scaleText *= m,
   this.scaleImageX *= k, this.scaleImageY *= m, 0 !== Q(a.autoscale, b.autoscale) && (k = Q(a.origw, b.origw), m = Q(a.origh, b.origh), k = g.chartWidth / k, m = g.chartHeight / m, g = 0 !== Q(a.constrainedscale, b.constrainedscale), p = k < m ? k : m, s = g ? p : k, r = g ? p : m, this.scaleValue = U.prototype.scaleValue * p, this.scaleValueComplement = U.prototype.scaleValueComplement * (g ? p : k < m ? m : k), this.scaleX = U.prototype.scaleX * s, this.scaleY = U.prototype.scaleX * r, c.xs *= s, c.ys *= r, f *= s, l *= r, "1" == F(a.scaletext, b.scaletext) && (this.scaleText = U.prototype.scaleText * r),
    "1" == F(a.scaleimages, b.scaleimages) && (this.scaleImageX = U.prototype.scaleImageX * s, this.scaleImageY = U.prototype.scaleImageY * r)), c.x = za(F(a.x, a.xpos), f, 0, d, this.isBelow).value + Q(a.grpxshift, b.grpxshift, 0), c.y = za(F(a.y, a.ypos), l, 0, d, this.isBelow).value + Q(a.grpyshift, b.grpyshift, 0), this.xshift = Q(a.xshift, b.xshift, 0), this.yshift = Q(a.yshift, b.yshift, 0))
 };
 U.prototype.draw = function () {
  var a = this.getRenderer(),
   b = this.options,
   c = this.bounds,
   d = this.items,
   g = a && a.layers.dataset,
   f = this.wrapper;
  if (a) {
   f || (this.wrapper =
    f = a.paper.group("annotations"), g && (this.isBelow ? f.insertBefore(g) : f.insertAfter(a.layers.datalabels || g)));
   this.wrapper.attr({
    x: 0,
    y: 0,
    visibility: Q(b.visible, 1) ? "" : "hidden"
   }).translate(c.x, c.y);
   b = 0;
   for (c = d.length; b < c; b += 1) a = d[b], a.scale(!0), a.queueDraw ? a.queue() : (a.setup(), a.draw());
   return this
  }
 };
 U.prototype.destroy = function () {
  for (var a = this.wrapper, b = this.items, c; c = b.shift();) c.destroy();
  a && (this.wrapper = a.remove());
  this._idstore[this._id] === this && delete this._idstore[this._id]
 };
 U.prototype.addItem =
  function (a, b) {
   var c;
   this.items.push(c = new na(a, this, this._idstore));
   b && null !== this.getRenderer() && (c.scale(), c.setup(), c.draw());
   return c
  };
 U.prototype.removeItem = function (a) {
  for (var b = this.items, c = b.length; c--;)
   if (a === b[c]._id) return b.splice(c, 1)
 };
 U.prototype.getRenderer = function () {
  return this.annotations && this.annotations.getRenderer() || null
 };
 na = function (a, b) {
  var c = !1,
   d;
  this.options = a;
  this.group = b;
  this.args = [];
  this.attrs = {};
  this.attrsTracker = {};
  this.style = {};
  this.bounds = {};
  this._idstore = b._idstore;
  a.id && (this._id = a.id, b._idstore[a.id] = this);
  this.type = a.type && a.type.toLowerCase && a.type.toLowerCase();
  for (d in na.eventNames) "function" === typeof a[d] && (this[d] = a[d], c = !0);
  this.hasEvents = c;
  "function" === typeof a.onload && (this.onload = a.onload)
 };
 d.extend(na.prototype, {
  getAbsoluteBounds: function () {
   var a = this.bounds,
    b = a.x1,
    c = a.y1,
    d = a.x2,
    g = a.y2,
    f = v(b, d),
    l = v(c, g),
    b = O(b, d) - f,
    c = O(c, g) - l;
   return {
    x: f,
    width: b,
    y: l,
    height: c,
    r: a.r,
    unscaled: {
     width: b / a.xs,
     height: c / a.ys
    }
   }
  },
  queue: function () {
   this.group.annotations.shapesToDraw.push(this)
  },
  scale: function (a) {
   var b = this,
    c = b.group,
    d = c.bounds,
    g = b.bounds,
    f = b.options,
    l = c.snaps,
    k = F(f.x, f.xpos),
    m = F(f.y, f.ypos),
    p = F(f.tox, f.toxpos),
    s = F(f.toy, f.toypos),
    r = g.xs = d.xs,
    d = g.ys = d.ys,
    q = Q(f.xshift, c.xshift, 0),
    v = Q(f.yshift, c.yshift, 0),
    C;
   C = function (d, g, f, n) {
    d = za(d, g, f, n, c.isBelow);
    d.hasDynamicMacros && a && (b.queueDraw = !0);
    return d.value
   };
   b.hasDimension = !0;
   b.hasDimensionX = !0;
   b.hasDimensionY = !0;
   g.x1 = C(k, r, 0, l) + q;
   void 0 === p ? (b.hasDimension = !1, b.hasDimensionX = !1, g.x2 = g.x1) : g.x2 = C(p, r, 0, l) + q;
   g.y1 = C(m, d, 0, l) + v;
   void 0 === s ? (b.hasDimension = !1, b.hasDimensionY = !1, g.y2 = g.y1) : g.y2 = C(s, d, 0, l) + v;
   na.angularShapeTypes[b.type] && (g.angles = ta(C(f.startangle, 1, 0, l), C(f.endangle, 1, 360, l)));
   g.r = C(f.radius, c.scaleValue, 0, l)
  },
  setup: function () {
   var b = this.options,
    c = this.group,
    d = c.options,
    g = this.attrs,
    f = this.style,
    l = c.scaleValue,
    m = Q(d.fillalpha, d.alpha, 100),
    s = this.fillAlpha = F(b.fillalpha, b.alpha, m),
    r = this.fillColor = F(b.fillcolor, b.color, d.color),
    q = this.fillPattern = F(b.fillpattern && b.fillpattern.toLowerCase && b.fillpattern.toLowerCase(),
     d.fillpattern && d.fillpattern.toLowerCase && d.fillpattern.toLowerCase()),
    v = this.bordered = Q(b.showborder, na.borderedShapeTypes[this.type], !!B(b.bordercolor)),
    C = this.borderColor = F(b.bordercolor, d.bordercolor, r),
    m = this.borderAlpha = Q(b.borderalpha, b.alpha, d.borderalpha, m),
    z = this.dashed = !!Q(b.dashed, 0),
    E = Q(b.borderthickness, b.thickness, 2) * l;
   this.link = F(b.link, d.link);
   this.shadow = "1" == F(b.showshadow, d.showshadow);
   void 0 === r && (r = na.borderedShapeTypes[this.type] && "none" || "#ff0000", void 0 === C && (C = "#ff0000"));
   v && E ? (g.stroke = k(C, m), g["stroke-linecap"] = "round", g["stroke-width"] = E, z && (g["stroke-dasharray"] = [Q(b.dashlen, 5) * l, Q(b.dashgap, 3) * l])) : g.stroke = "none";
   this.fillOptions = {
    gradientUnits: "objectBoundingBox",
    color: r,
    alpha: s,
    ratio: F(b.fillratio, d.fillratio),
    angle: 360 - Q(b.fillangle, 0),
    radialGradient: "radial" === q
   };
   this.link && (f.cursor = "pointer", f._cursor = "hand");
   g.visibility = Q(b.visible, 1) ? "" : "hidden";
   this.useTracker = c.useTracker;
   this.toolText = A(F(b.tooltext, d.tooltext));
   if (this.useTracker || this.link || this.toolText) p(this.attrsTracker, {
    stroke: a,
    fill: a
   }), this.link && (this.attrsTracker.ishot = +new Date);
   this.raiseOwnEvents = c.raiseOwnEvents
  },
  draw: function () {
   var a = this.getRenderer(),
    c = this.type,
    d = this.attrs,
    g = this.style,
    f = a && a.paper,
    l = na.types[c] && na.types[c].call && na.types[c].call(this, a),
    k = na.imageShapeTypes[l],
    m = na.textShapeTypes[l],
    p = k || m || na.trackerShapeTypes[l],
    s = this.link || this.toolText,
    r = this.wrapper,
    c = this.tracker,
    q = a && a.layers.tracker || this.group.wrapper,
    v = !1,
    C = c || r,
    A = na.eventNames,
    z = na.ownEvents,
    E, F;
   if (a) {
    if (l) {
     if (r)
      if (r.elemType !==
       l) {
       if (this.ownEventsAttached) {
        for (F in z) C["un" + F].apply(r, z[F]);
        this.ownEventsAttached = !1
       }
       r = r.remove()
      }
      else if (this.hasEvents)
      for (E in A)(F = this[E]) && F.eventAttached && (K(C.node, A[E], F), F.eventAttached = !1);
     k || (d.fill = V(this.fillOptions));
     r ? r.attr(d).css(g) : (this.args.push(this.group.wrapper), r = this.wrapper = f[l].apply(f, this.args).attr(d).css(g), r.elemType = l, r.data("annotation", this), v = !0, this.args.pop());
     !this.shadow || this.shadowAdded || k || m ? r.shadow(this.shadowAdded = !1) : r.shadow(this.shadowAdded = !0, O(this.borderAlpha, this.fillOptions.alpha) / 100);
     s ? this.useTracker && (c || (this.args.push(q), c = this.tracker = p ? f.rect(0, 0, 0, 0, 0, q) : f[l].apply(f, this.args), this.args.pop()), c.attr(d).attr(this.attrsTracker)) : c && (c = c.remove());
     C = c || r;
     if (this.raiseOwnEvents && !this.ownEventsAttached) {
      for (F in z) C[F].apply(r, z[F]);
      this.ownEventsAttached = !0
     }
     this.link && C.click(a.linkClickFN, this);
     this.toolText && (C.tooltip(this.toolText || ""), this.group.wrapper.trackTooltip(!0));
     if (this.hasEvents)
      for (E in A)(F = this[E]) && !F.eventAttached &&
       (b(C.node, A[E], F, this), F.eventAttached = !0);
     k || (c && p && (a = r.getBBox(), c.attr({
      x: a.x,
      y: a.y,
      width: a.width,
      height: a.height
     })), v && this.onload && this.onload(d))
    }
    return this
   }
  },
  destroy: function () {
   var a = this.wrapper,
    b = this.tracker,
    c = b || a,
    d = na.eventNames,
    g = na.ownEvents,
    f, l;
   if (a) {
    if (this.ownEventsAttached) {
     for (l in g) c["un" + l].apply(a, g[l]);
     this.ownEventsAttached = !1
    }
    if (this.hasEvents)
     for (f in d)(l = this[f]) && l.eventAttached && (K(c.node, d[f], l), l.eventAttached = !1);
    b && (this.tracker = b.remove());
    this.wrapper = a.remove()
   }
   this._idstore[this._id] ===
    this && delete this._idstore[this._id]
  },
  getRenderer: function () {
   return this.group && this.group.getRenderer() || null
  }
 });
 d.extend(na, {
  imageShapeTypes: {
   image: !0
  },
  angularShapeTypes: {
   circle: !0,
   arc: !0
  },
  textShapeTypes: {
   text: !0
  },
  trackerShapeTypes: {
   image: !0,
   text: !0
  },
  borderedShapeTypes: {
   path: !0,
   line: !0
  },
  eventNames: {
   onmouseover: I ? "touchstart" : "mouseover",
   onmouseout: "mouseout",
   onmousemove: I ? "touchmove" : "mousemove",
   onclick: "click"
  },
  ownEvents: {
   click: [function (a) {
    Aa("annotationClick", this, a)
   }],
   hover: [function (a) {
    Aa("annotationRollOver",
     this, a)
   }, function (a) {
    Aa("annotationRollOut", this, a)
   }]
  },
  textAlignOptions: {
   left: "start",
   right: "end",
   center: "middle"
  },
  textVerticalAlignOptions: {
   top: "bottom",
   middle: "middle",
   bottom: "top"
  },
  textRotationOptions: {
   0: "0",
   1: "270",
   right: "90",
   cw: "90",
   left: "270",
   ccw: "270"
  },
  types: {
   rectangle: function () {
    var a = this.args,
     b = this.attrs,
     c = this.getAbsoluteBounds(),
     d = .5 * c.width;
    c.r > d && (c.r = d);
    a[0] = b.x = c.x;
    a[1] = b.y = c.y;
    a[2] = b.width = c.width;
    a[3] = b.height = c.height;
    a[4] = b.r = c.r;
    return "rect"
   },
   line: function () {
    var a = this.attrs,
     b = this.bounds;
    this.args[0] = a.path = ["M", b.x1, b.y1, "L", b.x2, b.y2];
    1 === a["stroke-width"] && (a["shape-rendering"] = "crisp");
    a["stroke-width"] < s && (this.attrsTracker["stroke-width"] = s);
    this.bordered && this.dashed && (this.attrsTracker["stroke-dasharray"] = "solid");
    return "path"
   },
   path: function () {
    var a = this.attrs,
     b = this.bounds;
    this.args[0] = a.path = this.options.path;
    a.transform = ["T", b.x1, b.y1, "S", b.xs, b.ys, b.x1, b.y1];
    1 === a["stroke-width"] && (a["shape-rendering"] = "crisp");
    return "path"
   },
   polygon: function () {
    var a = this.args,
     b = this.attrs,
     c = this.options,
     d = this.bounds,
     g = this.group,
     f = g.snaps;
    a[0] = za(c.sides, 1, 5, f, g.isBelow).value;
    a[1] = d.x1;
    a[2] = d.y1;
    a[3] = d.r;
    a[4] = za(c.startangle, 1, 0, f, g.isBelow).value;
    a[5] = 0;
    b.polypath = a.slice(0);
    return "polypath"
   },
   circle: function (a) {
    var b = this.args,
     c = this.attrs,
     d = this.options,
     k = this.bounds,
     m = a.chartWidth,
     p = a.chartHeight,
     s = this.group.scaleValueComplement,
     r = this.group.snaps,
     q = k.angles,
     v = this.group;
    a = k.r;
    F(d.radius) || (k.r = m < p ? m * k.xs : p * k.ys, k.r = a = .3 * k.r);
    d = za(d.yradius, s, a, r, v.isBelow).value;
    this.fillPattern || (this.fillOptions.radialGradient = !0, this.fillPattern = "radial");
    "radial" === this.fillPattern && (this.fillOptions.cx = this.fillOptions.cy = .5);
    m = q.angle % 360;
    if (!m && a === d) return b[0] = c.cx = k.x1, b[1] = c.cy = k.y1, b[2] = c.r = k.r, "circle";
    m || (q.start -= .001);
    p = q.start * l;
    m = q.end * l;
    q = q.angle * l;
    s = k.x1;
    r = k.y1;
    k = s + g(p) * a;
    p = r + C(p) * d;
    s += g(m) * a;
    m = r + C(m) * d;
    b[0] = c.path = ["M", k, p, "A", a, d, 0, 0, q >= f ? 0 : 1, s, m, "Z"];
    return "path"
   },
   arc: function (a) {
    var b = this.options,
     c = this.args,
     d = this.attrs,
     g = this.bounds,
     f = a.chartWidth;
    a = a.chartHeight;
    var k = this.group,
     m = k.scaleValue,
     p = g.angles;
    F(b.radius) || (g.r = f < a ? f * g.xs : a * g.ys, g.r *= .3);
    g.innerR = za(b.innerradius, m, .8 * g.r, this.group.snaps, k.isBelow).value;
    g.innerR > g.r && (g.innerR += g.r, g.r = g.innerR - g.r, g.innerR -= g.r);
    this.fillPattern || (this.fillOptions.radialGradient = !0, this.fillPattern = "radial");
    "radial" === this.fillPattern && (this.fillOptions.cx = this.fillOptions.cy = .5);
    c[0] = g.x1;
    c[1] = g.y1;
    c[2] = g.r;
    c[3] = g.innerR;
    c[4] = p.start * l;
    c[5] = p.end * l;
    d.ringpath = c.slice(0);
    return "ringpath"
   },
   text: function (a) {
    var b =
     this.args,
     c = this.style,
     d = this.attrs,
     g = this.group,
     f = this.bounds,
     l = this.options,
     k = this.getAbsoluteBounds(),
     m = F(l.align, g.options.textalign, "center").toLowerCase(),
     s = F(l.valign, g.options.textvalign, "middle").toLowerCase(),
     q = A(F(l.text, l.label)),
     v = a.logic.smartLabel,
     C = Q(l.wrap, g.options.wraptext, 1),
     z, E, B = F(l.rotatetext, g.options.rotatetext, "0").toLowerCase(),
     B = na.textRotationOptions[B],
     I = "0" !== B ? "y" : "x",
     K = a.options.orphanStyles;
    a = p({}, K.defaultStyle.style || {});
    K = g.id && K[g.id.toLowerCase()] || $;
    a = p(a, K.style);
    var K = parseFloat(a.fontSize),
     W = F(l.font, g.options.font, a.fontFamily),
     g = Q(l.fontsize, g.options.fontsize, K) * g.scaleText;
    C && (z = Q(l.wrapwidth, this.hasDimensionX ? k.width / f.xs : void 0), E = Q(l.wrapheight, this.hasDimensionY ? k.height / f.ys : void 0), z && (z *= f.xs), E && (E *= f.ys));
    c.fontFamily = W;
    c.fontWeight = Q(l.bold, l.isbold, 0) ? "bold" : "normal";
    Q(l.italic, l.isitalic, 0) && (c.fontStyle = "italic");
    l.bgcolor && (!d["text-bound"] && (d["text-bound"] = []), d["text-bound"][0] = r(l.bgcolor));
    l.bordercolor && (!d["text-bound"] && (d["text-bound"] = []), d["text-bound"][1] = r(l.bordercolor), d["text-bound"][2] = Q(l.borderthickness, 1), d["text-bound"][3] = Q(l.padding, 1));
    l.fontcolor && (d.fill = r(l.fontcolor), this.fillOptions && (this.fillOptions.color = d.fill));
    c.fontSize = g + "px";
    g === K ? c.lineHeight = a.lineHeight : oa(c);
    d["text-anchor"] = na.textAlignOptions[m] || na.textAlignOptions.center;
    v.setStyle(c);
    c = v.getSmartText(q, z, E, !1);
    d["vertical-align"] = na.textVerticalAlignOptions[s] || na.textVerticalAlignOptions.middle;
    d["text-anchor"] === na.textAlignOptions.left ? k[I] +=
     Q(l.leftmargin, 0) : d["text-anchor"] === na.textAlignOptions.center && (k[I] += .5 * Q(l.leftmargin, 0));
    "0" !== B && (d.rotation = [parseFloat(B), k.x, k.y]);
    b[0] = d.x = k.x;
    b[1] = d.y = k.y;
    b[2] = d.text = c.text;
    c.tooltext && (d.title = c.tooltext);
    delete d.stroke;
    delete d["stroke-weight"];
    return "text"
   },
   image: function (a) {
    var b = this,
     c = b.style,
     d = a.chartWidth,
     g = a.chartHeight;
    a = b.options;
    var f = b.attrs,
     l = b.args,
     k = B(a.url),
     m = b.group.scaleImageX * F(Number(a.xscale), 100) / 100,
     s = b.group.scaleImageY * F(Number(a.yscale), 100) / 100,
     r = b.getAbsoluteBounds(),
     v = {
      width: 1,
      height: 1
     },
     C;
    if (!k) return l[0] = f.x = r.x, l[1] = f.y = r.y, l[2] = f.width = r.width, l[3] = f.height = r.height, l[4] = f.r = r.r, "rect";
    C = new q.Image;
    C.onload = function () {
     v = W("none", "top", "left", 100, 0, d, g, C);
     delete v.x;
     delete v.y;
     v = p(v, {
      width: (b.hasDimensionX ? r.unscaled.width : v.width) * m,
      height: (b.hasDimensionY ? r.unscaled.height : v.height) * s
     });
     setTimeout(function () {
      var a, d, g;
      if (a = b.wrapper) {
       a.attr(v);
       if (d = b.tracker) g = a.getBBox(), d.attr({
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
       });
       a.css({
        opacity: c.opacity = O(Q(b.fillAlpha,
         b.borderAlpha), b.borderAlpha) / 100
       })
      }
      b.onload && b.onload(v)
     }, 0)
    };
    C.src = k;
    l[0] = f.src = k;
    l[1] = f.x = r.x;
    l[2] = f.y = r.y;
    l[3] = f.width = (b.hasDimensionX ? r.unscaled.width : v.width) * m;
    l[4] = f.height = (b.hasDimensionY ? r.unscaled.height : v.height) * s;
    c.opacity = O(Q(b.fillAlpha, b.borderAlpha), b.borderAlpha) / 100;
    delete f.stroke;
    delete f.fill;
    delete f["stroke-linecap"];
    return "image"
   }
  }
 });
 Z = function () {
  this.groups = [];
  this._idstore = {};
  this._options = {}
 };
 z.Annotations = Z;
 d.extend(Z.prototype, {
  reset: function (a, b, c) {
   var d = this.groups,
    g;
   this.clear();
   if (c) {
    g = {};
    for (var f in c) switch (typeof c[f]) {
    case "object":
    case "function":
     g["-$" + f] = g["$" + f] = g["+$" + f] = c[f];
     break;
    default:
     g["$" + f] = g["+$" + f] = c[f], g["-$" + f] = -1 * c[f]
    }
    g = this._literals = g
   }
   b && (this._options = b);
   if (a && a.groups && d)
    for (c = 0; c < a.groups.length; c += 1) d.push(new U(a.groups[c], b, g, this._idstore, this))
  },
  getRenderer: function () {
   return this._renderer
  },
  addGroup: function (a) {
   var b = this.getRenderer();
   this.groups.push(a = new U(a, this._options, this._literals, this._idstore, this));
   b && (a.setup(),
    a.scale(), a.draw());
   return a
  },
  addItem: function (a, b, c) {
   var g, f = this.getRenderer();
   "string" === typeof a ? g = this._idstore[a] : (c = b, b = a);
   if (g && g.addItem) {
    if (!f && c) {
     d.raiseWarning(this, "04031411430", "run", "Annotations~addItem()", "Cannot draw the shapeif the group has not been drawn. Use Annotations~draw() to draw the group and pass the renderer to it.");
     return
    }
    a = g.addItem(b, c)
   }
   else a = this.addGroup({}).addItem(b, c);
   return a
  },
  draw: function (a) {
   var b = this.groups,
    c, d;
   if (b && (this._renderer = a || this._renderer))
    for (c =
     0, d = b.length; c < d; c++) a = b[c], a.setup(), a.scale(), a.draw()
  },
  clear: function () {
   var a = this.groups,
    b;
   if (a) {
    for (; b = a.shift();) b.destroy();
    this.shapesToDraw = []
   }
  },
  dispose: function () {
   var a;
   this.disposing = !0;
   this.clear();
   for (a in this) delete this[a];
   this.disposed = !0
  },
  hide: function (a) {
   if (a = this._idstore[a]) return a.attrs.visibility = "hidden", a.wrapper && a.wrapper.hide(), a
  },
  show: function (a) {
   if (a = this._idstore[a]) return a.attrs.visibility = "", a.wrapper && a.wrapper.show(), a
  },
  update: function (a, b, c) {
   a = this._idstore[a];
   var d;
   if (a && b) {
    if ("object" === typeof b)
     for (d in b.id && delete b.id, b.type && delete b.type, b) a.options[(d + "").toLowerCase()] = b[d] + "";
    else a.options[(b + "").toLowerCase()] = c + "";
    a.wrapper && (a.scale(), a.setup(), a.draw());
    return a
   }
  },
  destroy: function (a) {
   var b = this._idstore[a],
    c = b.group;
   b && "function" === typeof b.destroy && (c && c.removeItem(a), b.destroy())
  },
  shapesToDraw: []
 });
 d.core.addEventListener("beforeinitialize", function (a) {
  "javascript" === a.sender.options.renderer && (a.sender.annotations = new Z)
 });
 d.core.addEventListener("disposed",
  function (a) {
   a.sender.annotations && a.sender.annotations.dispose()
  });
 d.addEventListener("internal.animationComplete", function (a) {
  var b = (a = a.sender.annotations) && a.shapesToDraw,
   c = b && b.length,
   d, g;
  if (c) {
   for (g = 0; g < c; g++) d = b[g], d.queueDraw = !1, d.scale(), d.setup(), d.draw();
   a.shapesToDraw = []
  }
 });
 m.addEventListener("rendered", function (a, b) {
  if ("javascript" === b.renderer) {
   var c = a.sender,
    d = c.jsVars || {},
    g = d.instanceAPI;
   d.hcObj && g && g.drawAnnotations ? (c.showAnnotation || (c.showAnnotation = function () {
    c.annotations.show.apply(c.annotations,
     arguments)
   }), c.hideAnnotation || (c.hideAnnotation = function () {
    c.annotations.hide.apply(c.annotations, arguments)
   })) : (delete c.showAnnotation, delete c.hideAnnotation)
  }
 })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-base", function () {
 var d = this,
  m = d.hcLib,
  z = m.Raphael,
  q = d.window,
  E = q.document,
  b = m.BLANKSTRING,
  K = m.createTrendLine,
  I = "https:" === q.location.protocol ? "https://export.api3.fusioncharts.com/" : "http://export.api3.fusioncharts.com/",
  c = m.pluck,
  s = m.getValidValue,
  a = m.pluckNumber,
  v = m.getFirstValue,
  O = m.getDefinedColor,
  C = m.parseUnsafeString,
  g = m.FC_CONFIG_STRING,
  f = m.extend2,
  l = m.getDashStyle,
  p = m.parseTooltext,
  F = m.toPrecision,
  Q = m.regex.dropHash,
  k = m.HASHSTRING,
  B = m.getSentenceCase,
  A = m.addEvent,
  W = function (a) {
   return void 0 !== a && null !== a
  },
  r = q.Math,
  oa = m.TOUCH_THRESHOLD_PIXELS,
  ga = m.CLICK_THRESHOLD_PIXELS,
  $ = r.min,
  V = r.max,
  ta = r.abs,
  za = r.ceil,
  Aa = r.floor,
  Z = r.log,
  U = r.pow,
  na = r.sqrt,
  H = r.round,
  T = m.graphics.getColumnColor,
  fa = m.getFirstColor,
  n = m.setLineHeight,
  L = m.pluckFontSize,
  ca = m.getFirstAlpha,
  aa = m.graphics.getDarkColor,
  sa = m.graphics.getLightColor,
  Y = m.graphics.convertColor,
  Ea = m.COLOR_TRANSPARENT,
  la = m.POSITION_CENTER,
  ya = m.POSITION_TOP,
  Ia = m.POSITION_BOTTOM,
  ma = m.POSITION_RIGHT,
  Ma = m.POSITION_LEFT,
  pa = m.parsexAxisStyles,
  qa = m.chartAPI,
  La = m.graphics.mapSymbolName,
  Ya = qa.singleseries,
  ib = qa.multiseries,
  Ja = m.COMMASTRING,
  Ta = m.STRINGUNDEFINED,
  Na = m.ZEROSTRING,
  sb = m.ONESTRING,
  Wa = m.HUNDREDSTRING,
  Ga = m.PXSTRING,
  Sb = m.COMMASPACE,
  Qb = q.navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
  Fb = !/fusioncharts\.com$/i.test(q.location.hostname),
  jb = {
   left: "start",
   right: "end",
   center: "middle"
  },
  yb = m.BLANKSTRINGPLACEHOLDER,
  kb = m.BGRATIOSTRING,
  h = m.COLOR_WHITE,
  G = m.TESTSTR,
  u = m.graphics.getAngle,
  D = m.axisLabelAdder,
  N = m.falseFN,
  ba = m.NumberFormatter,
  ha = m.getLinkAction,
  ra = m.getAxisLimits,
  ua = m.createDialog,
  ja = function (a, b) {
   return 0 < a ? Z(a) / Z(b || 10) : null
  },
  Ha = m.hasTouch = void 0 !== E.documentElement.ontouchstart,
  Ba = m.fireEvent = function (a, b, c, d) {
   m.dem.fire(a, b, c, d)
  },
  xa = {
   1: "bold",
   0: "normal"
  },
  Ka = {
   1: "italic",
   0: "normal"
  },
  eb = {
   1: "underline",
   0: "none"
  },
  ia = {
   font: function (a, b) {
    b.style.fontFamily = a
   },
   size: function (a, b) {
    a && (b.style.fontSize = L(a) + Ga)
   },
   color: function (a, c, d) {
    c.style.color = a && a.replace && a.replace(Q, k) || b;
    d && (c.color = c.style.color)
   },
   bgcolor: function (a, c) {
    c.style.backgroundColor = a && a.replace && a.replace(Q, k) || b
   },
   bordercolor: function (a, c) {
    c.style.border = "1px solid";
    c.style.borderColor = a && a.replace && a.replace(Q, k) || b
   },
   ishtml: b,
   leftmargin: function (b, c) {
    c.style.marginLeft = a(b, 0) + Ga
   },
   letterspacing: function (b, c) {
    c.style.letterSpacing = a(b, 0) + Ga
   },
   bold: function (a, b) {
    b.style.fontWeight = xa[a] || ""
   },
   italic: function (a, b) {
    b.style.fontStyle = Ka[a] || ""
   },
   underline: function (a, b) {
    b.style.textDecoration = eb[a] || ""
   }
  },
  Da = m.chartPaletteStr = {
   chart2D: {
    bgColor: "bgColor",
    bgAlpha: "bgAlpha",
    bgAngle: "bgAngle",
    bgRatio: "bgRatio",
    canvasBgColor: "canvasBgColor",
    canvasBaseColor: "canvasBaseColor",
    divLineColor: "divLineColor",
    legendBgColor: "legendBgColor",
    legendBorderColor: "legendBorderColor",
    toolTipbgColor: "toolTipbgColor",
    toolTipBorderColor: "toolTipBorderColor",
    baseFontColor: "baseFontColor",
    anchorBgColor: "anchorBgColor"
   },
   chart3D: {
    bgColor: "bgColor3D",
    bgAlpha: "bgAlpha3D",
    bgAngle: "bgAngle3D",
    bgRatio: "bgRatio3D",
    canvasBgColor: "canvasBgColor3D",
    canvasBaseColor: "canvasBaseColor3D",
    divLineColor: "divLineColor3D",
    divLineAlpha: "divLineAlpha3D",
    legendBgColor: "legendBgColor3D",
    legendBorderColor: "legendBorderColor3D",
    toolTipbgColor: "toolTipbgColor3D",
    toolTipBorderColor: "toolTipBorderColor3D",
    baseFontColor: "baseFontColor3D",
    anchorBgColor: "anchorBgColor3D"
   }
  },
  fb = function () {
   var a = {},
    b, c = function () {
     var h, e, g, f, u = 0,
      n, l, k = parseInt(d.core.options.resizeTrackingInterval, 10) || 300,
      m;
     for (h in a) u += 1, e = a[h], g = e.jsVars, n = e.ref, !e.disposed && (f = n && n.parentNode) && (l = n.style) && (/\%/g.test(l.width) ||
      /\%/g.test(l.height)) ? (n = f.offsetWidth, m = f.offsetHeight, !g.resizeLocked && (n && g._containerOffsetW !== n || m && g._containerOffsetH !== m) && (e.resizeTo && e.resizeTo(), g._containerOffsetW = n, g._containerOffsetH = m)) : (delete a[h], --u);
     b = u ? setTimeout(c, k) : clearTimeout(b)
    };
   return function (h, e) {
    var g = h.jsVars,
     f = e || h.ref && h.ref.parentNode || {};
    g._containerOffsetW = f.parentNode.offsetWidth;
    g._containerOffsetH = f.parentNode.offsetHeight;
    a[h.id] = h;
    b || (b = setTimeout(c, parseInt(d.core.options.resizeTrackingInterval, 10) || 300))
   }
  }(),
  Pa = {
   getExternalInterfaceMethods: function () {
    var a = qa[this.jsVars.type],
     a = a && a.eiMethods,
     b = "saveAsImage,print,exportChart,getXML,hasRendered,signature,cancelExport,getSVGString,lockResize,showChartMessage,",
     c;
    if ("string" === typeof a) b += a + Ja;
    else if (void 0 !== a || null !== a)
     for (c in a) b += c + Ja;
    return b.substr(0, b.length - 1)
   },
   drawOverlayButton: function (a) {
    var b = this.jsVars,
     c = b.overlayButton,
     h, e;
    if (a && a.show) {
     c || (c = b.overlayButton = E.createElement("span"), m.dem.listen(c, "click", function () {
      d.raiseEvent("OverlayButtonClick",
       a, b.fcObj)
     }));
     for (h = a.message ? a.message : "Back"; c.firstChild;) c.removeChild(c.firstChild);
     c.appendChild(E.createTextNode(h));
     b.overlayButtonMessage = h;
     h = {
      border: "1px solid " + (a.borderColor ? a.borderColor.replace(Q, k) : "#7f8975"),
      backgroundColor: a.bgColor ? a.bgColor.replace(Q, k) : "#edefec",
      fontFamily: a.font ? a.font : "Verdana,sans",
      color: "#" + a.fontColor ? a.fontColor : "49563a",
      fontSize: (a.fontSize ? a.fontSize : "10") + Ga,
      padding: (a.padding ? a.padding : "3") + Ga,
      fontWeight: 0 === parseInt(a.bold, 10) ? "normal" : "bold",
      position: "absolute",
      top: "0",
      right: "0",
      _cursor: "hand",
      cursor: "pointer"
     };
     for (e in h) c.style[e] = h[e];
     b.hcObj.container.appendChild(c);
     b.overlayButtonActive = !0
    }
    else c && (b.overlayButton = c.parentNode.removeChild(c), b.overlayButtonActive = !1, delete b.overlayButtonMessage)
   },
   print: function (a) {
    return this.jsVars.hcObj && this.jsVars.hcObj.hasRendered && this.jsVars.hcObj.print(a)
   },
   exportChart: function (a) {
    var b = this.jsVars.hcObj;
    return b && b.options && b.options.exporting && b.options.exporting.enabled ? b.exportChart(a) : !1
   },
   getSVGString: function () {
    return this.jsVars &&
     this.jsVars.hcObj && this.jsVars.hcObj.paper && this.jsVars.hcObj.paper.toSVG()
   },
   resize: function () {
    var a = this.jsVars,
     b = a.container,
     c = a.hcObj;
    c && (c && c.destroy && c.destroy(), m.createChart(a.fcObj, b, a.type, void 0, void 0, !1, !0), delete a.isResizing)
   },
   lockResize: function (a) {
    return "boolean" !== typeof a ? !!this.jsVars.resizeLocked : this.jsVars.resizeLocked = a
   },
   showChartMessage: function (a, b, c) {
    var d = this.jsVars,
     e = d.hcObj,
     h = d.fcObj,
     g = h.options;
    d.msgStore[a] && (a = d.msgStore[a]);
    b && e && e.hasRendered ? a ? e.showMessage(a, c) :
     e.hideLoading() : (e && e.destroy && e.destroy(), h._chartMessageImageStyle = {
      imageHAlign: g.baseChartMessageImageHAlign,
      imageVAlign: g.baseChartMessageImageVAlign,
      imageAlpha: g.baseChartMessageImageAlpha,
      imageScale: g.baseChartMessageImageScale
     }, h._chartMessageStyle = {
      color: g.baseChartMessageColor,
      fontFamily: g.baseChartMessageFont,
      fontSize: g.baseChartMessageFontSize
     }, m.createChart(d.fcObj, d.container, d.type, void 0, a));
    return a
   },
   signature: function () {
    return "FusionCharts/3.4.0 (XT)"
   }
  },
  Oc = m.HCstub = function (c, d, h,
   g) {
   c = c.chart;
   var e = a(c.showborder, 1) ? a(c.borderthickness, 1) : 0,
    f = a(c.charttopmargin, g.charttopmargin, 15) + e,
    u = a(c.chartrightmargin, g.chartrightmargin, 15) + e,
    n = a(c.chartbottommargin, g.chartbottommargin, 15) + e,
    e = a(c.chartleftmargin, g.chartleftmargin, 15) + e,
    l = f + n,
    k = e + u;
   h *= .7;
   d *= .7;
   l > h && (f -= (l - h) * f / l, n -= (l - h) * n / l);
   k > d && (e -= (k - d) * e / k, u -= (k - d) * u / k);
   d = {
    _FCconf: {
     0: {
      stack: {}
     },
     1: {
      stack: {}
     },
     x: {
      stack: {}
     },
     oriCatTmp: [],
     isSpline: -1 !== g.chartInstance.options.chartType.search(/spline/i),
     noWrap: !1,
     marginLeftExtraSpace: 0,
     marginRightExtraSpace: 0,
     marginBottomExtraSpace: 0,
     marginTopExtraSpace: 0,
     marimekkoTotal: 0
    },
    chart: {
     alignTicks: !1,
     ignoreHiddenSeries: !1,
     events: {},
     reflow: !1,
     spacingTop: f,
     spacingRight: u,
     spacingBottom: n,
     spacingLeft: e,
     marginTop: f,
     marginRight: u,
     marginBottom: n,
     marginLeft: e,
     borderRadius: 0,
     plotBackgroundColor: "#FFFFFF",
     textDirection: "1" === c.hasrtltext ? "rtl" : "",
     style: {},
     animation: a(c.defaultanimation, c.animation, 1) ? {
      duration: 500 * a(c.animationduration, 1)
     } : !1
    },
    colors: "AFD8F8 F6BD0F 8BBA00 FF8E46 008E8E D64646 8E468E 588526 B3AA00 008ED6 9D080D A186BE CC6600 FDC689 ABA000 F26D7D FFF200 0054A6 F7941C CC3300 006600 663300 6DCFF6".split(" "),
    credits: {
     href: m.CREDIT_HREF,
     text: m.CREDIT_STRING,
     enabled: Fb
    },
    global: {},
    labels: {
     items: []
    },
    lang: {},
    legend: {
     enabled: !0,
     symbolWidth: 12,
     borderRadius: 1,
     backgroundColor: "#FFFFFF",
     initialItemX: 0,
     title: {
      text: b,
      x: 0,
      y: 0,
      padding: 2
     },
     scroll: {},
     itemStyle: {}
    },
    loading: {},
    plotOptions: {
     series: {
      pointPadding: 0,
      borderColor: "#333333",
      events: {},
      animation: a(c.animation, c.defaultanimation, 1) ? {
       duration: 1E3 * a(c.animationduration, 1)
      } : !1,
      states: {
       hover: {
        enabled: !1
       },
       select: {
        enabled: !1
       }
      },
      dataLabels: {
       enabled: !0,
       color: "#555555",
       style: {},
       formatter: function () {
        return this.point.showPercentValues ? g.numberFormatter.percentValue(this.percentage) : this.point.displayValue
       }
      },
      point: {
       events: {}
      }
     },
     area: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     radar: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     areaspline: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     line: {
      shadow: !0,
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     scatter: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     bubble: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     spline: {
      states: {
       hover: {
        enabled: !1
       }
      },
      marker: {
       lineWidth: 1,
       radius: 3,
       states: {
        hover: {
         enabled: !1
        },
        select: {
         enabled: !1
        }
       }
      }
     },
     pie: {
      size: "80%",
      allowPointSelect: !0,
      cursor: "pointer",
      point: {
       events: {
        legendItemClick: c.interactivelegend === Na ? N : function () {
         this.slice()
        }
       }
      }
     },
     pie3d: {
      size: "80%",
      allowPointSelect: !0,
      cursor: "pointer",
      point: {
       events: {
        legendItemClick: c.interactivelegend === Na ? N : function () {
         this.slice()
        }
       }
      }
     },
     column: {},
     floatedcolumn: {},
     column3d: {},
     bar: {},
     bar3d: {}
    },
    point: {},
    series: [],
    subtitle: {
     text: b,
     style: {}
    },
    symbols: [],
    title: {
     text: b,
     style: {}
    },
    toolbar: {},
    tooltip: {
     style: {}
    },
    xAxis: {
     steppedLabels: {
      style: {}
     },
     labels: {
      x: 0,
      style: {},
      enabled: !1
     },
     lineWidth: 0,
     plotLines: [],
     plotBands: [],
     title: {
      style: {},
      text: b
     },
     tickWidth: 0,
     scroll: {
      enabled: !1
     }
    },
    yAxis: [{
     startOnTick: !1,
     endOnTick: !1,
     title: {
      style: {},
      text: b
     },
     tickLength: 0,
     labels: {
      x: 0,
      style: {}
     },
     plotBands: [],
     plotLines: []
    }, {
     tickLength: 0,
     gridLineWidth: 0,
     startOnTick: !1,
     endOnTick: !1,
     title: {
      style: {},
      text: b
     },
     labels: {
      x: 0,
      style: {},
      enabled: !1,
      formatter: function () {
       return this.value !== yb ? this.value : b
      }
     },
     opposite: !0,
     plotBands: [],
     plotLines: []
    }],
    exporting: {
     buttons: {
      exportButton: {},
      printButton: {
       enabled: !1
      }
     }
    }
   };
   c.palettecolors && "string" === typeof c.palettecolors && (d.colors =
    c.palettecolors.split(/\s*\,\s*/));
   return g.hcJSON = d
  },
  nb = function (a, b, c, d, e) {
   var h = [],
    g = !1;
   d = d || 0;
   for (e = e || {
     max: Number.MIN_VALUE,
     min: Number.MAX_VALUE
    }; d < a.length; ++d)
    if (g)
     if (isNaN(a[d].y) || null === a[d].y) {
      if (!c) break
     }
     else h.push({
      index: d,
      y: a[d].y
     });
   else isNaN(a[d].y) || null === a[d].y || (g = !0, h.push({
    index: d,
    y: a[d].y
   }));
   if (2 < h.length) {
    var g = e,
     f = {},
     u, n, l;
    for (n = 0; n < h.length; ++n) u = h[n].index, f["D" + u] = 0;
    for (u = 0; 10 > u; ++u)
     for (n = 0; n < h.length; ++n) l = 0 === n ? (3 * (h[n + 1].y - h[n].y) - f["D" + h[n + 1].index]) / 2 : n === h.length -
      1 ? (3 * (h[n].y - h[n - 1].y) - f["D" + h[n - 1].index]) / 2 : (3 * (h[n + 1].y - h[n - 1].y) - f["D" + h[n + 1].index] - f["D" + h[n - 1].index]) / 4, f["D" + h[n].index] = l;
    u = H(b / (h.length - 1));
    for (n = 1; n < h.length; ++n) {
     l = g;
     for (var k = void 0, m = void 0, D = void 0, p = void 0, r = m = void 0, s = void 0, G = void 0, q = void 0, q = void 0, k = f["D" + h[0].index], m = f["D" + h[n].index], D = h[0].y, p = 3 * (h[n].y - h[0].y) - 2 * k - m, m = 2 * (h[0].y - h[n].y) + k + m, r = l.max, s = l.min, G = 0; G <= u; G++) q = G / u, q = D + k * q + p * q * q + m * q * q * q, q < s && (s = q), q > r && (r = q);
     l.max = r;
     l.min = s
    }
   }
   d < a.length && !c && nb(a, b, c, d, e);
   return e
  },
  Mb = m.placeVerticalAxis = function (c, d, h, f, e, u, n, l, k, m) {
   var D = h[g],
    p = D.smartLabel,
    r, X, q, v, N = 0,
    C = D.marginRightExtraSpace,
    ba = D.marginLeftExtraSpace,
    A = {},
    z = {},
    ha = {},
    E = c.plotLines,
    F = c.plotBands,
    D = d.verticalAxisValuesPadding,
    ua = isNaN(d.fixedValuesPadding) ? 0 : d.fixedValuesPadding,
    H = D - ua,
    ra = d.verticalAxisValuesPadding,
    ja = d.verticalAxisNamePadding,
    B = d.verticalAxisNameWidth,
    Ba = d.rotateVerticalAxisName && String(d.rotateVerticalAxisName).toLowerCase(),
    I = "none" !== Ba,
    K = c.offset ? c.offset : 0,
    Ha = 0,
    L = 0,
    Da = 0,
    xa = 0,
    Ka = 0,
    Q =
    0,
    nb = 0,
    eb, ia, Pa, ea, D = 2,
    nb = n ? C + 5 : ba + 4,
    fb = V(a(h.chart.plotBorderWidth, 1), 0),
    wa = c.showLine ? c.lineThickness : fb,
    bb = function (a, b) {
     var c, e;
     a && a.label && void 0 !== s(a.label.text) && (Pa = a.label, Pa.style && Pa.style !== ia && (ia = Pa.style, p.setStyle(ia)), r = p.getOriSize(a.label.text), e = (c = r.width) ? c + 2 : 0, a.isGrid ? (A[b] = {
      width: c,
      height: r.height,
      label: Pa
     }, xa <= e && (xa = e, d.lYLblIdx = b)) : a.isTrend && (n && Pa.textAlign === Ma || Pa.textAlign === ma ? (z[b] = {
      width: c,
      height: r.height,
      label: Pa
     }, Ka = V(Ka, e)) : (ha[b] = {
       width: c,
       height: r.height,
       label: Pa
      },
      Q = V(Q, e))))
    },
    W = function (a, d) {
     var h, g = d ? N : N + a;
     h = c.title.style;
     X = X || {};
     if (0 < g) return I ? (g < X.height && (p.setStyle(h), X = p.getSmartText(c.title.text, e, g)), h = X.height) : (g < X.width && (p.setStyle(h), X = p.getSmartText(c.title.text, g, e)), h = X.width), c.title._actualWidth = h, c.title.text = X.text, X.tooltext && (c.title.originalText = X.tooltext), d ? g - h + a : g - h;
     c.title.text = b;
     return 0
    },
    P = function (a, b, c) {
     for (var e in a) a[e].label.x = b, a[e].label.y = c
    },
    Da = 0;
   for (eb = F.length; Da < eb; Da += 1) bb(F[Da], Da);
   Da = 0;
   for (eb = E.length; Da < eb; Da +=
    1) bb(E[Da], Da);
   c.title && c.title.text != b && (ia = c.title.style, p.setStyle(ia), q = p.getOriSize(G).height, c.title._originalText = c.title.text, I ? (c.title.rotation = "cw" === Ba ? 90 : 270, X = p.getSmartText(c.title.text, e, u), N = X.height, v = q) : (c.title.rotation = 0, X = p.getSmartText(c.title.text, void 0 !== B ? B : u, e), N = X.width, v = 20));
   0 < Q && (L = Q + ra);
   k && (f = a(f.chart.maxlabelwidthpercent, 0), 1 <= f && 100 >= f && (k = f * k / 100, xa > k && (xa = k)));
   Ha = V(Ka, xa);
   Ha += Ha ? H + ua : 0;
   0 < N && (Ha += N + ja + nb);
   (function () {
    if (L + Ha > u) {
     ea = L + Ha - u;
     if (L) {
      if (ra >= ea) {
       ra -= ea;
       return
      }
      ea -= ra;
      ra = 0
     }
     if (H + ja >= ea) ja >= ea ? ja -= ea : (H -= ea - ja, ja = 0);
     else {
      ea -= H + ja;
      ja = H = 0;
      if (20 < Q)
       if (Ka > xa) {
        if (Q - Ka >= ea) {
         Q -= ea;
         return
        }
        if (Ka - Q >= ea) {
         Ka -= ea;
         return
        }
        Ka > Q ? (ea -= Ka - Q, Ka = Q) : (ea -= Q - Ka, Q = Ka);
        if (2 * (Ka - xa) >= ea) {
         Q -= ea / 2;
         Ka -= ea / 2;
         return
        }
        ea -= 2 * (Ka - xa);
        Q = Ka = xa
       }
       else {
        if (Q - 20 >= ea) {
         Q -= ea;
         return
        }
        ea -= Q - 20;
        Q = 20
       }
      if (Ka > xa) {
       if (Ka - xa >= ea) {
        Ka -= ea;
        return
       }
       ea -= Ka - xa;
       Ka = xa
      }
      N - v >= ea ? N -= ea : (ea -= N - v, N = v, Q >= ea ? Q = 0 : (ea -= Q, Q = 0, N >= ea ? N = 0 : (ea -= N, N = 0, xa >= ea && (Ka = xa -= ea))))
     }
    }
   })();
   Da = function (a, c) {
    var d, t = 0,
     h = c ? Q - 2 : Q + a - 2,
     g;
    if (0 < Q) {
     for (g in ha) Pa =
      ha[g].label, ha[g].width > h ? (Pa.style && Pa.style !== ia && (ia = Pa.style, p.setStyle(ia)), d = p.getSmartText(Pa.text, h, e, !0), Pa.text = d.text, d.tooltext && (Pa.originalText = d.tooltext), ha[g].height = d.height, t = V(t, d.width)) : t = V(t, ha[g].width);
     return c ? h - t + a : h - t
    }
    for (g in ha) ha[g].label.text = b;
    return 0
   }(0, !0);
   Da = W(Da, !0);
   Da = function (a) {
    var c = 0,
     d = V(xa, Ka) + a - 2,
     t;
    if (0 < d) {
     for (t in A) Pa = A[t].label, A[t].width > d ? (Pa.style && Pa.style !== ia && (ia = Pa.style, p.setStyle(ia)), a = p.getSmartText(Pa.text, d, e, !0), Pa.text = a.text, a.tooltext &&
      (Pa.originalText = a.tooltext), A[t].height = a.height, c = V(c, a.width)) : c = V(c, A[t].width);
     for (t in z) Pa = z[t].label, z[t].width > d ? (Pa.style && Pa.style !== ia && (ia = Pa.style, p.setStyle(ia)), a = p.getSmartText(Pa.text, d, e, !0), Pa.text = a.text, a.tooltext && (Pa.originalText = a.tooltext), z[t].height = a.height, c = V(c, a.width)) : c = V(c, z[t].width);
     return d - c
    }
    for (t in A) A[t].label.text = b;
    for (t in z) z[t].label.text = b;
    return 0
   }(Da);
   Da = W(Da);
   k = d.verticalAxisNamePadding - ja;
   Da && k && (Da > k ? (ja += k, Da -= k) : (ja += Da, Da = 0));
   k = d.verticalAxisValuesPadding -
    (H + ua);
   Da && k && (Da > k ? (H += k, Da -= k) : (H += Da, Da = 0));
   k = d.verticalAxisValuesPadding - ra;
   Da && k && (Da > k ? (ra += k, Da -= k) : (ra += Da, Da = 0));
   0 < Q && (L = Q + ra);
   Ha = V(Ka, xa);
   Ha += Ha ? H + ua : 0;
   0 < N && (Ha += N + ja + nb);
   k = V(Ka, xa);
   k += 0 < k ? H + ua : 0;
   0 < N ? (I ? N < X.height && (X = p.getSmartText(c.title.text, e, N)) : (N < X.width && (X = p.getSmartText(c.title.text, N, e)), c.title.y = -((X.height - q) / 2)), c.title.text = X.text, X.tooltext && (c.title.originalText = X.tooltext), c.title.margin = k + ja + nb + (I ? N - q : N / 2)) : c.title.text = b;
   q = -(H + ua + K + ba + 2);
   C = C + ra + K + 2;
   nb = V(Ka, xa);
   c.labels.style &&
    (D = .35 * parseInt(c.labels.style.fontSize, 10));
   n ? (0 < Q && P(ha, q, D), 0 < nb && (P(A, C, D), P(z, C, D))) : (0 < Q && P(ha, C, D), 0 < nb && (P(A, q, D), P(z, q, D)));
   c.labels._textY = D;
   c.labels._righttX = C;
   c.labels._leftX = q;
   Ha = Ha || wa;
   L = L || (l ? 0 : fb);
   m ? (h.chart.marginLeft += n ? L : Ha - m, h.chart.marginRight += n ? Ha - m : L) : (h.chart.marginLeft += n ? L : Ha, h.chart.marginRight += n ? Ha : L);
   return L + Ha
  },
  bb = m.titleSpaceManager = function (c, d, h, f) {
   var e = this.snapLiterals || (this.snapLiterals = {}),
    u = d.chart,
    n = C(u.caption);
   d = C(u.subcaption);
   var l = u = a(u.captionpadding,
     10),
    k = c[g],
    m = this.smartLabel || k.smartLabel,
    D = !1,
    p = 0,
    r, s, G = 0,
    q = 0,
    v = 0,
    N = 0,
    ba = c.title,
    A = c.subtitle,
    z = V(a(c.chart.plotBorderWidth, 1), 0),
    ha = 0,
    E = 0;
   if (3 < f) {
    u < z && (u = z + 2);
    n !== b && (r = ba.style, v = za(a(parseFloat(r.fontHeight, 10), parseFloat(r.lineHeight, 10), 12)));
    d !== b && (s = A.style, N = a(parseInt(s.fontHeight, 10), parseInt(s.lineHeight, 10), 12));
    if (0 < v || 0 < N) f = V(f, 0), p = v + N + u, p > f ? (G = f - p, D = !0, G < u ? u = V(G, 5) : (G -= u, u = 0, N > G ? (q = N - G + 10, N = 0, A._originalText = A.text, A.text = "") : (G -= N, N = 0, v > G && (q = v - G)))) : q = f - p, 0 < v && (m.setStyle(r),
     v += q, f = m.getSmartText(n, h, v), q = v - f.height, ba.height = v = f.height, ba.text = f.text, f.tooltext && (ba.originalText = f.tooltext), ha = f.width), 0 < N && (m.setStyle(s), N += q, h = m.getSmartText(d, h, N), q = N - h.height, N = h.height, A.text = h.text, A.height = h.height, h.tooltext && (A.originalText = h.tooltext), E = h.width), D && 0 < q && (u += $(l - u, q)), p = v + N + u;
    p = p || z;
    ba.isOnTop ? (e.captionstarty = c.chart.marginTop, c.chart.marginTop += p) : (c.chart.marginBottom += p, e.captionstarty = ba.y = k.height - c.chart.marginBottom + u, c.chart.marginTop += 5, p += 5);
    ba._captionWidth =
     ha;
    A._subCaptionWidth = E;
    ba._lineHeight = v;
    A._lineHeight = N
   }
   else A && (A.text = ""), ba && (ba.text = "");
   return p
  },
  ea = m.stepYAxisNames = function (a, c, d, h, e, f) {
   var u = 0,
    n = h.plotLines,
    l = [],
    k, m = h.plotLines.length;
   c = c[g].smartLabel;
   for (var p = parseFloat(L(d.basefontsize, 10)), D; u < m; u += 1) d = n[u], d.isGrid && d.label && d.label.text && (l.push(d), 0 === d.value && (k = l.length - 1));
   if (m = l.length)
    if (h.labels.style ? c.setStyle(h.labels.style) : l[0].label && l[0].label.style && c.setStyle(h.labels.style), u = c.getOriSize("W").height, f || (u += .4 *
      p), a /= m - 1, a < u) {
     f = V(1, za(u / a));
     for (u = a = k; u < m; u += 1) d = l[u], u === e && ((u - a) % f && D && (D.label.text = ""), a = e), d && d.label && ((u - a) % f ? d.label.text = b : D = d);
     for (u = a = k; 0 <= u; --u) d = l[u], u === e && ((a - u) % f && D && (D.label.text = ""), a = e), d && d.label && ((a - u) % f ? d.label.text = b : D = d)
    }
  },
  xb = m.placeHorizontalAxis = function (c, d, h, f, e, u, n) {
   var l = h[g],
    k = f && f.chart || {},
    m, D, p, r, G, q, v, N, C, ba, A, z, ha = 0,
    E = 0,
    F = 10,
    ua = 1,
    H = 0,
    ra = 0,
    ja = 0,
    Ha = 0,
    B = !1,
    Ba = !1,
    I = !1,
    Da = a(k.labelstep, 0),
    K = a(k.xaxisminlabelwidth, 0),
    L = a(k.maxlabelheight, u),
    Ka = d.labelDisplay,
    Q = d.rotateLabels,
    xa = d.horizontalLabelPadding,
    ea = l.marginBottomExtraSpace,
    nb = h.chart.marginLeft,
    Pa = h.chart.marginRight,
    ia = l.smartLabel,
    eb = l.plotBorderThickness,
    fb = d.catCount,
    wa = d.slantLabels,
    P = e / (c.max - c.min),
    bb = 0,
    W = 0,
    U = 0,
    O = 0,
    ga = f && f.chart || {},
    T = 1E3 * a(ga.updateinterval, ga.refreshinterval),
    oa = ga.datastreamurl,
    Oc = Boolean(this.realtimeEnabled && T && void 0 !== oa),
    xb, Ra, Ab, ub, Y, Tb, Mb, Jb, aa, Rb, Z, Zb, fa, ca, Ca, $a, ta, qa, pa, sa, ya, Ea, La, Ja, lb, Ga = null,
    Na = null,
    Sa, Wa, sb, dc, Ya, ib, kb, jb, Wb, va, Vb, ec, Qa = [],
    Hb = [],
    pb, Cb = 0,
    Db = 0,
    Xb, gc, tb, fc,
    kc, yb, db, lc = d.horizontalAxisNamePadding,
    Bb = 0,
    Xa = d.staggerLines,
    Ib = bb,
    Fb = !1,
    Qb = !1,
    Sb = 0,
    mc, Eb, Lb, Ub, td, Sc, ud, $c, ad, Ec, Tc, bd, pc, Mc, Uc, Gc, cd, Nc, Vc, Ac;
   Vb = c.plotLines;
   F = va = 0;
   for (db = Vb.length; va < db; va += 1)(D = Vb[va]) && D.label && !D.isTrend && F < parseInt(D.label.style.lineHeight, 10) && (F = parseInt(D.label.style.lineHeight, 10), q = D.label.style);
   if (q || c.labels.style) q = q || c.labels.style, ia.setStyle(q), N = ia.getOriSize("W"), F = ia.lineHeight, v = N.width + 4, z = ia.getOriSize("WWW").width + 4;
   c.title && c.title.text != b && (q = c.title.style,
    ia.setStyle(q), ra = ia.getOriSize("W").height, c.title.rotation = 0, r = ia.getSmartText(c.title.text, e, u), E = r.height);
   nb != parseInt(k.chartleftmargin, 10) && (kb = !0);
   Pa != parseInt(k.chartrightmargin, 10) && (jb = !0);
   void 0 !== k.canvaspadding && "" !== k.canvaspadding && (Qb = !0);
   Wb = e - n;
   switch (Ka) {
   case "none":
    B = I = !0;
    Q && (ha = wa ? 300 : 270, N = F, F = v, v = N);
    break;
   case "rotate":
    ha = wa ? 300 : 270;
    N = F;
    F = v;
    v = N;
    B = !0;
    break;
   case "stagger":
    Ba = B = !0;
    C = Aa((u - ra) / F);
    C < Xa && (Xa = C);
    break;
   default:
    Q && (ha = wa ? 300 : 270, N = F, F = v, v = N)
   }
   l.isBar && (B = !0);
   va = 0;
   Vb =
    c.plotLines;
   if (typeof h._FCconf.isXYPlot !== Ta || l.isBar) {
    xb = {};
    Tb = Y = 0;
    Rb = aa = null;
    qa = {};
    Fb = !0;
    P = e / (c.max - c.min);
    Ub = function (a, e, d) {
     var g, f, w, u, M, n;
     n = a.plotObj;
     M = a.labelTextWidth;
     M || (G = n.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), M = ia.getOriSize(G.text).width + 4, a.oriWidth = M, M > Ra && (M = Ra), a.labelTextWidth = M, a.leftEdge = n.value * P - M / 2, a.rightEdge = n.value * P + M / 2, d && (M = $(M, 2 * (D.value - c.min) * P + h.chart.marginLeft), a.labelTextWidth = M));
     if (typeof e !== Ta) {
      if (d = e.plotObj, G = d.label, G.style && G.style !== q &&
       (q = G.style, ia.setStyle(q)), e.oriWidth ? w = e.oriWidth : (w = ia.getOriSize(G.text).width + 4, e.oriWidth = w), w > Ra && (w = Ra), e.labelTextWidth = w, e.leftEdge = d.value * P - w / 2, e.rightEdge = d.value * P + w / 2, g = n.value * P, f = g + M / 2, u = d.value * P, w = u - w / 2, w < f)
       if (g + v < u - v) f -= w, g = u - g, a.labelTextWidth = f > g ? $(M, g) : V(v, M - f / 2), e.labelTextWidth = 2 * (g - a.labelTextWidth / 2), a.leftEdge = n.value * P - a.labelTextWidth / 2, a.rightEdge = n.value * P + a.labelTextWidth / 2, e.leftEdge = d.value * P - e.labelTextWidth / 2, e.rightEdge = d.value * P + e.labelTextWidth / 2;
       else return e.labelTextWidth =
        0, d.label.text = b, !1
     }
     else d && (M = $(M, 2 * (c.max - D.value) * P + h.chart.marginRight), a.labelTextWidth = M, a.leftEdge = n.value * P - M / 2, a.rightEdge = n.value * P + M / 2);
     a.nextCat = e;
     return !0
    };
    Ba ? Xa > gc ? Xa = gc : 2 > Xa && (Xa = 2) : Xa = 1;
    for (db = Vb.length; va < db; va += 1)(D = Vb[va]) && D.label && typeof D.label.text !== Ta && (D.isGrid ? (ub = {
     plotObj: D
    }, D.isCat && (Jb = va % Xa, xb[Jb] || (xb[Jb] = []), aa ? (Rb = ub, xb[Jb].push(Rb)) : (Rb = aa = ub, xb[Jb].push(aa))), Qa.push(ub)) : D.isTrend && Hb.push({
     plotObj: D
    }));
    ec = c.plotBands;
    va = 0;
    for (db = ec.length; va < db; va += 1)(D = ec[va]) &&
     D.isTrend && D.label && typeof D.label.text !== Ta && Hb.push({
      plotObj: D
     });
    if (Qa.length)
     if (!I && !ha)
      if (l.distributedColumns)
       for (va = 0, db = Qa.length; va < db; va += 1) $a = Qa[va], ta = va % Xa, D = $a.plotObj, D.label && D.isCat && (0 <= va - Xa ? (Zb = Qa[va - Xa], La = Zb.plotObj.value * P + Zb.plotObj._weight * P / 2) : (Zb = null, La = c.min * P - nb), va + Xa < db ? (Z = Qa[va + Xa], Ja = Z.plotObj.value * P - Z.plotObj._weight * P / 2) : (Z = null, Ja = c.max * P + Pa), G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), fa = D.value * P, ad = fa - D._weight * P / 2, $c = fa + D._weight * P / 2, 1 < Xa ? (sa =
        ad - La, ya = $c + Ja, lb = $c - ad + $(sa, ya)) : lb = $c - ad, G = D.label, G.style && G.style !== q && ia.setStyle(G.style), lb < v && v < ia.getOriSize(G.text).width ? (D.label.text = b, $a.labelTextWidth = 0) : ($a.labelTextWidth = lb, m = ia.getSmartText(G.text, lb - 4, u, B), lb = m.width + 4, $a.labelTextWidth = lb, O = V(O, m.height)));
      else {
       gc = Qa.length;
       Xb = Qa.length - 1;
       (pb = (Qa[Xb].plotObj.value - Qa[0].plotObj.value) * P) ? (Ra = .1 * pb, Ab = V(.2 * pb, pb / gc)) : Ab = Ra = e;
       for (p in xb)
        for (va = 0, ca = xb[p].length; va < ca;) {
         for (Mb = va + 1; !Ub(xb[p][va], xb[p][Mb]);) Mb += 1;
         va = Mb
        }
       aa && (Tb =
        (aa.plotObj.value - c.min) * P + nb - aa.labelTextWidth / 2);
       D = Qa[0].plotObj;
       aa && D === aa.plotObj || (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), A = ia.getOriSize(G.text).width + 4, fa = (D.value - c.min) * P + nb, aa && (Sa = Tb - fa, A = Sa < A && Sa > v / 2 ? 2 * Sa : 0), Qa[0].labelTextWidth = A, 0 < A && (N = fa - A / 2), N < Tb && (Tb = N));
       Rb && (A = Rb.labelTextWidth, Y = (c.max - Rb.plotObj.value) * P + Pa - A / 2);
       D = Qa[Xb].plotObj;
       Rb && D === Rb.plotObj || (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), A = ia.getOriSize(G.text).width + 4, fa = (c.max - D.value) *
        P + Pa, Rb && (Sa = fa - Y, A = Sa < A && Sa > v / 2 ? 2 * Sa : 0), Qa[Xb].labelTextWidth = A, 0 < A && (N = fa - A / 2), N < Y && (Y = N));
       Cb = 0 > Tb ? -Tb : 0;
       Db = 0 > Y ? -Y : 0;
       yb = Cb + Db;
       if (0 < yb)
        for (p in Wb > yb ? (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, Ca = (Ca = Cb * e / (Cb + e)) ? Ca + 4 : 0, h.chart.marginLeft += Ca, e -= Ca, P = e / (c.max - c.min)) : Cb < Db ? Wb >= Db && jb ? (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, P = e / (c.max - c.min)) : kb && (Ca = (Ca = Cb * e / (Cb + e)) ? Ca + 4 : 0, h.chart.marginLeft += Ca, e -= Ca, P = e / (c.max - c.min)) : Wb >= Cb && kb ? (Ca = (Ca = Cb * e / (Cb + e)) ? Ca + 4 : 0, h.chart.marginLeft +=
          Ca, e -= Ca, P = e / (c.max - c.min)) : jb && (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, P = e / (c.max - c.min)), Pa = h.chart.marginRight, nb = h.chart.marginLeft, pb = (Qa[Xb].plotObj.value - Qa[0].plotObj.value) * P, Ra = .1 * pb, Ab = V(.2 * pb, pb / gc), xb) {
         va = 0;
         for (ca = xb[p].length; va < ca;) {
          for (Mb = va + 1; !Ub(xb[p][va], xb[p][Mb], !0);) Mb += 1;
          va = Mb
         }
         p += 1
        }
       va = 0;
       for (db = Qa.length; va < db; va += 1)
        if ($a = Qa[va], ta = va % Xa, D = $a.plotObj, D.label)
         if (D.isCat) $a.labelTextWidth && (qa[ta] = $a);
         else {
          Z = (Zb = qa[ta]) ? Zb.nextCat : xb[ta] ? xb[ta][0] : null;
          pa = null;
          if (va >= Xa)
           for (Na = va - Xa, pa = Qa[Na]; !pa.labelTextWidth;)
            if (Na >= Xa) Na -= Xa, pa = Qa[Na];
            else {
             pa = null;
             break
            }
          La = pa ? pa.rightEdge : c.min * P - nb;
          Ja = Z ? Z.leftEdge : c.max * P + Pa;
          G = D.label;
          G.style && G.style !== q && (q = G.style, ia.setStyle(q));
          A = ia.getOriSize(G.text).width + 4;
          ib = D.value * P - A / 2;
          if (l.isBar && va == db - 1 && pa) La > ib && (pa.plotObj.label.text = b, pa.labelTextWidth = 0, La = pa.leftEdge);
          else if (La > ib || Ja < ib + A) {
           D.label.text = b;
           $a.labelTextWidth = 0;
           continue
          }
          La = V(La, ib);
          fa = D.value * P;
          lb = 2 * $(fa - La, Ja - fa);
          lb.toFixed && (lb = lb.toFixed(2));
          G = D.label;
          G.style && G.style !== q && ia.setStyle(G.style);
          lb < v && v < ia.getOriSize(G.text).width ? (D.label.text = b, $a.labelTextWidth = 0) : ($a.labelTextWidth = lb, m = ia.getSmartText(G.text, lb - 4, u, B), lb = m.width + 4, $a.labelTextWidth = lb, $a.leftEdge = fa - lb / 2, $a.rightEdge = fa + lb / 2, O = V(O, m.height))
         }
       pa = Ea = null;
       va = 0;
       for (db = Qa.length; va < db; va += 1)
        if ($a = Qa[va], D = $a.plotObj, ta = va % Xa, D.isCat && $a.labelTextWidth) {
         pa = Ea = null;
         fa = D.value * P;
         if (va >= Xa)
          for (Na = va - Xa, pa = Qa[Na]; !pa.labelTextWidth;)
           if (Na > Xa) Na -= Xa, pa = Qa[Na];
           else {
            pa = null;
            break
           }
         sa =
          pa ? fa - pa.rightEdge : fa - c.min * P + h.chart.marginLeft;
         if (va + Xa < db)
          for (Ga = va + Xa, Ea = Qa[Ga]; !Ea.labelTextWidth;)
           if (Ga + Xa < db - 1) Ga += Xa, Ea = Qa[Ga];
           else {
            Ea = null;
            break
           }
         ya = Ea ? Ea.leftEdge - fa : c.max * P + h.chart.marginRight - fa;
         lb = 2 * $(sa, ya);
         lb > Ab && (lb = Ab);
         lb > $a.oriWidth && (lb = $a.oriWidth);
         $a.labelTextWidth = lb;
         G = D.label;
         G.style && G.style !== q && ia.setStyle(G.style);
         m = ia.getSmartText(G.text, lb - 4, u, B);
         $a.labelTextWidth = m.width + 4;
         O = V(O, m.height);
         $a.rightEdge = fa + $a.labelTextWidth / 2
        }
      }
    else if (ha)
     for (va = 0, db = Qa.length; va < db; va +=
      1)
      if ((D = Qa[va].plotObj) && D.label && D.label.text) {
       G = D.label;
       G.style && G.style !== q && (q = G.style, ia.setStyle(q));
       p = 1;
       if (va + p < db)
        for (Ec = Qa[p + va].plotObj; Ec && (Ec.value - D.value) * P < v;)
         if (D.isCat) {
          if (Ec.label) {
           Ec.label.text = b;
           p += 1;
           if (p + va >= db - 1) break;
           Ec = Vb[p + va].plotObj
          }
         }
         else if (Ec.isCat) {
        D.label.text = b;
        D = Ec;
        va += p - 1;
        G = D.label;
        G.style && G.style !== q && (q = G.style, ia.setStyle(q));
        break
       }
       U = V(U, ia.getOriSize(G.text).width + 4)
      }
    p = 0;
    for (db = Hb.length; p < db; p += 1)(D = Hb[p].plotObj) && D.label && void 0 !== s(D.label.text) && (G = D.label,
     G.style && G.style !== q && (q = G.style, ia.setStyle(q)), m = ia.getOriSize(G.text), G.verticalAlign === Ia ? bb = V(bb, m.height) : W = V(W, m.height))
   }
   else {
    for (db = Vb.length; va < db; va += 1)(D = Vb[va]) && (D.isGrid ? Qa.push(D) : D.isTrend && Hb.push(D));
    ec = c.plotBands;
    va = 0;
    for (db = ec.length; va < db; va += 1)(D = ec[va]) && Hb.push(D);
    Xb = Qa.length - 1;
    gc = Qa.length;
    Ba && (Xa > gc ? Xa = gc : 2 > Xa && (Xa = 2));
    if (gc)
     for (c.scroll && c.scroll.viewPortMin && c.scroll.viewPortMax ? (dc = c.scroll.viewPortMin, Ya = c.scroll.viewPortMax, jb = kb = !1) : (dc = c.min, Ya = c.max), pb = (Qa[Xb].value -
       Qa[0].value) * P, tb = td = pb / (fb - 1), fc = (Qa[0].value - dc) * P, kc = (Ya - Qa[Xb].value) * P, "auto" === Ka ? tb < z && (ha = wa ? 300 : 270, N = F, F = v, v = N, B = !0) : "stagger" === Ka && (tb *= Xa), "line" !== this.defaultSeriesType && ("area" === this.defaultSeriesType ? l.drawFullAreaBorder && (eb > fc && (dc = c.min -= eb / (2 * P), fc += (Qa[0].value - dc) * P), eb > kc && (Ya = c.max += eb / (2 * P), kc += (Ya - Qa[Xb].value) * P)) : (eb > fc && (dc = c.min -= eb / (2 * P), fc += (Qa[0].value - dc) * P), eb > kc && (Ya = c.max += eb / (2 * P), kc += (Ya - Qa[Xb].value) * P))), v < K && (v = K), ua = Ba || I ? V(1, Da) : V(1, Da, za(v / tb)), l.x &&
      (l.x.stepValue = ua), tb *= ua, ba = 2 * (fc + nb), (G = Vb[0].label) && G.text && (G.style && ia.setStyle(G.style), A = 270 === ha ? $(tb, ia.getOriSize(G.text).height + 4) : $(tb, ia.getOriSize(G.text).width + 4), A > ba && (I || (Cb = (A - ba) / 2), kb || (Qb && (Cb = 0), tb -= Cb / (fb - 1), Lb = tb * (fb - 1), P = tb, mc = (pb - Lb) / P, Ya = c.max += mc, dc = c.min -= mc, Cb = 0, pb = Lb, fc = (Qa[0].value - dc) * P, kc = (Ya - Qa[Xb].value) * P))), ba = 2 * (kc + Pa), (G = Vb[Xb].label) && G.text && (G.style && ia.setStyle(G.style), A = 270 === ha ? $(tb, ia.getOriSize(G.text).height + 4) : $(tb, ia.getOriSize(G.text).width + 4),
       A > ba && (I || (Db = (A - ba) / 2), jb || (Qb && (Db = 0), tb -= Db / (fb - 1), Lb = tb * (fb - 1), P = tb, mc = (pb - Lb) / P, Db = 0, pb = Lb, fc = (Qa[0].value - dc) * P, kc = (Ya - Qa[Xb].value) * P))), yb = Cb + Db, 0 < yb && (Wb > yb ? (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, Ca = (Ca = Cb * e / (Cb + e)) ? Ca + 4 : 0, h.chart.marginLeft += Ca, e -= Ca, P = e / (c.max - c.min)) : Cb < Db ? Wb >= Db && jb ? (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, P = e / (c.max - c.min)) : kb && (Ca = (Ca = Cb * e / (Cb + e)) ? Ca + 4 : 0, h.chart.marginLeft += Ca, e -= Ca, P = e / (c.max - c.min)) : Wb >= Cb && kb ? (Ca = (Ca = Cb * e / (Cb +
       e)) ? Ca + 4 : 0, h.chart.marginLeft += Ca, e -= Ca, P = e / (c.max - c.min)) : jb && (Ca = (Ca = Db * e / (Db + e)) ? Ca + 4 : 0, h.chart.marginRight += Ca, e -= Ca, P = e / (c.max - c.min)), pb = (Qa[Xb].value - Qa[0].value) * P, tb = pb / (fb - 1), Ba && (tb *= Xa), ua = Ba || I ? V(1, Da) : ha ? V(1, Da, za(F / tb)) : V(1, Da, za(v / tb)), l.x && (l.x.stepValue = ua), tb *= ua), p = 0; p < gc; p += 1) {
      D = Qa[p];
      if (p % ua && D.label) {
       if (D.stepped = !0, D.label.style = c.steppedLabels.style, !Oc) continue
      }
      else D.stepped = !1;
      D && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)),
       ha && I ? (m = ia.getOriSize(G.text), U = V(U, m.width + 4), O = V(O, m.height)) : I || (m = ha || Ba ? ia.getOriSize(G.text) : ia.getSmartText(G.text, tb - 4, u, B), U = V(U, m.width + 4), O = V(O, m.height)))
     }
    p = 0;
    for (db = Hb.length; p < db; p += 1)(D = Hb[p]) && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), m = ia.getOriSize(G.text), G.verticalAlign === Ia ? bb = V(bb, m.height) : W = V(W, m.height));
    c.scroll && c.scroll.enabled && !ha && !I && (mc = U / 2, h.chart.marginLeft < mc && (Eb = mc - h.chart.marginLeft, Wb > Eb && (e -= Eb, Wb -= Eb, h.chart.marginLeft +=
     Eb)), h.chart.marginRight < mc && (Eb = mc - h.chart.marginRight, Wb > Eb && (e -= Eb, Wb -= Eb, h.chart.marginRight += Eb)))
   }
   I ? (Bb = F, ha && (Bb = U)) : Bb = ha ? U : Ba ? Xa * O : O;
   0 < Bb && (Bb + xa > L && (Bb = L - xa, Xa = Math.floor(Bb / O)), Ib += xa + Bb);
   0 < E && (Ib += E + lc);
   Wa = xa - 4;
   sb = W + Ib + 2;
   N = 0;
   sb > u && (Sa = sb - u, lc > Sa ? (lc -= Sa, Sa = 0) : (Sa -= lc, lc = 0, Wa > Sa ? (Wa -= Sa, Sa = 0) : (Sa -= Wa, Wa = 0), xa = Wa + 4), W > Sa ? (W -= Sa, Sa = 0) : (0 < W && (Sa -= W, W = 0), 0 < Sa && (bb > Sa ? (bb -= Sa, Sa = 0) : (0 < bb && (Sa -= bb, bb = 0), 0 < Sa && ((N = E - ra) > Sa ? (E -= Sa, Sa = 0) : (Sa -= N, E = ra, 0 < Sa && ((N = Bb - F) > Sa ? (Bb -= Sa, Sa = 0) : (Sa -= N, Bb = F,
    0 < Sa && (Sa -= E + lc, E = 0, 0 < Sa && (Sa -= Bb, Bb = 0, 0 < Sa && (xa -= Sa)))))))))));
   xa += ea;
   Tc = l.is3d ? -h.chart.xDepth : 0;
   bd = Bb + xa;
   Gc = Tc;
   cd = .5 * F;
   H = F + xa;
   db = Qa.length;
   ja = 0;
   if (Fb)
    if (ha)
     for (Ac = ma, pc = wa ? xa + 8 : xa + 4, db = Qa.length, p = 0; p < db; p += 1)(D = Qa[p].plotObj) && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), va = 1, m = ia.getSmartText(G.text, Bb - 4, v, B), G.text = m.text, m.tooltext && (G.originalText = m.tooltext), Gc = Tc + cd / 2, G.y = pc, G.x = Gc, G.rotation = ha, G.textAlign = Ac, ja += 1);
    else
     for (Mc = Bb, Ac = la,
      pc = H, p = 0; p < db; p += ua) D = Qa[p].plotObj, F = parseInt(D.label.style.lineHeight, 10), D && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), I || (m = ia.getSmartText(G.text, Qa[p].labelTextWidth - 4, Mc, B), G.text = m.text, m.tooltext && (G.originalText = m.tooltext), Ba && (pc = H + ja % Xa * F)), G.y = pc, G.x = Gc, G.rotation = ha, G.textAlign = Ac, ja += 1);
   else {
    ha ? (Mc = tb, Uc = Bb - 4, Ac = ma, pc = wa ? xa + 8 : xa + 4) : Ba ? (Uc = tb - 4, Ac = la) : (Mc = Bb, Uc = tb - 4, Ac = la, pc = H);
    for (p = 0; p < db; p += ua) D = Qa[p], F = za(parseFloat(D.label.style.lineHeight)),
     cd = .5 * F, H = F + xa, D && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), I || (Ba && (Mc = F), Sc = nb + (p - dc) * td - h.chart.spacingLeft, ud = 300 === ha ? $(na(2.999 * Sc * Sc + Sc * Sc) - xa, Uc) : Uc, m = ia.getSmartText(G.text, ud, Mc, B), Sb = V(Sb, ha ? m.width : m.height), G.text = m.text, m.tooltext && (G.originalText = m.tooltext), Ba && (pc = H + ja % Xa * F)), ha ? Gc = Tc + .5 * F : Ba || (pc = F + xa), G.y = pc, G.x = Gc, G.rotation = ha, G.textAlign = Ac, ja += 1);
    300 === ha && (Bb = Sb, bd = Bb + xa);
    d._labelY = H;
    d._labelX = Tc;
    d._yShipment = pc;
    d._isStagger =
     Ba;
    d._rotation = ha;
    d._textAlign = Ac;
    d._adjustedPx = cd;
    d._staggerLines = Xa;
    d._labelHeight = F
   }
   db = Hb.length;
   for (p = Vc = Nc = 0; p < db; p += 1)(D = Hb[p].plotObj ? Hb[p].plotObj : Hb[p]) && D.label && void 0 !== s(D.label.text) && (G = D.label, G.style && G.style !== q && (q = G.style, ia.setStyle(q)), G.verticalAlign === Ia ? (m = ia.getSmartText(G.text, e, bb, !0), Vc = V(Vc, m.height), G.text = m.text, m.tooltext && (G.originalText = m.tooltext), G.y = bd + ia.getOriSize(G.text).height, G.x = Gc) : (m = ia.getSmartText(G.text, e, W, !0), Nc = V(Nc, m.height), G.text = m.text, m.tooltext &&
    (G.originalText = m.tooltext), G.y = -(W - ia.getOriSize("W").height + xa + 2)));
   0 < E && (ia.setStyle(c.title.style), r = ia.getSmartText(c.title.text, e, E), c.title.text = r.text, r.tooltext && (c.title.originalText = r.tooltext), c.title.margin = bd + Vc + lc);
   Ib = Vc;
   0 < Bb && (l.horizontalAxisHeight = xa + Bb - ea, Ib += l.horizontalAxisHeight);
   0 < E && (Ib += Ha = E + lc);
   Ib = Ib || xa - ea;
   h.chart.marginBottom += Ib;
   0 < Nc && (h.chart.marginTop += Nc, Ib += Nc);
   if (c.opposite)
    for (c.title.margin -= Bb - (r && r.height || 0) + xa, Ib -= Ha, h.chart.marginTop += Ib, h.chart.marginBottom -=
     Ib, h.xAxis.opposite = 1, db = Vb.length, va = 0; va < db; va += 1)(D = Vb[va]) && D.isGrid && (G = D.label) && void 0 !== G.text && (G.textAlign = Ma, G.y -= pc + xa + 4);
   return Ib
  },
  Zb = m.configureLegendOptions = function (d, h, g, f, e) {
   f = d.legend;
   var u = d.chart,
    n = u.is3D ? Da.chart3D : Da.chart2D,
    l = u.useRoundEdges,
    k = a(h.legendiconscale, 1),
    m = (parseInt(f.itemStyle.fontSize, 10) || 10) + 1,
    D = this.colorManager,
    G;
   if (0 >= k || 5 < k) k = 1;
   f.padding = 4;
   0 >= m && (m = 1);
   G = 3 * k;
   m = $(m * k, e - 8);
   0 >= m && (G = m = 0);
   f.symbolWidth = m;
   f.symbolPadding = G;
   f.textPadding = 4;
   f.legendHeight = e = m +
    2 * G;
   f.rowHeight = V(parseInt(f.itemStyle.lineHeight, 10) || 12, e);
   g ? (f.align = ma, f.verticalAlign = "middle", f.layout = "vertical") : f.x = (u.marginLeft - u.spacingLeft - u.marginRight + u.spacingRight) / 2;
   g = c(h.legendbordercolor, D.getColor(n.legendBorderColor));
   e = a(h.legendborderalpha, 100);
   u = a(h.legendbgalpha, 100);
   f.backgroundColor = Y(c(h.legendbgcolor, D.getColor(n.legendBgColor)), u);
   f.borderColor = Y(g, e);
   f.borderWidth = a(h.legendborderthickness, !l || h.legendbordercolor ? 1 : 0);
   f.shadow = Boolean(a(h.legendshadow, 1));
   f.symbol3DLighting =
    Boolean(a(h.use3dlighting, h.useplotgradientcolor, 1));
   f.shadow && (f.shadow = {
    enabled: f.shadow,
    opacity: V(e, u) / 100
   });
   f.reversed = Boolean(a(h.reverselegend, 0) - a(this.reverseLegend, 0));
   f.style = {
    padding: 4
   };
   Boolean(a(h.interactivelegend, 1)) ? f.symbolStyle = {
    _cursor: "hand",
    cursor: "pointer"
   } : (d.legend.interactiveLegend = !1, f.itemStyle.cursor = "default", f.itemHoverStyle = {
    cursor: "inherit"
   });
   f.borderRadius = a(h.legendborderradius, l ? 3 : 0);
   f.legendAllowDrag = Boolean(a(h.legendallowdrag, 0));
   f.title.text = C(v(h.legendcaption,
    b));
   f.legendScrollBgColor = fa(c(h.legendscrollbgcolor, h.scrollcolor, D.getColor("altHGridColor")));
   f.legendScrollBarColor = c(h.legendscrollbarcolor, g);
   f.legendScrollBtnColor = c(h.legendscrollbtncolor, g)
  },
  P = m.placeLegendBlockRight = function (c, d, h, f, e) {
   this.configureLegendOptions(c, d.chart, !0, e, h);
   var u = this.snapLiterals || (this.snapLiterals = {}),
    n = 0,
    l = c.series,
    k, m = c[g],
    D = this.smartLabel || m.smartLabel,
    G = c.chart.spacingRight,
    p = c.legend,
    r, q = p.textPadding,
    s = p.title.padding,
    v = p.symbolWidth,
    N = p.symbolPadding,
    A =
    v + 2 * N,
    C = 2 * f,
    ba = 0,
    ha = a(d.chart.legendpadding, 7);
   d = ha + p.borderWidth / 2 + a(d.chart.canvasborderthickness, 1);
   var z = 2 * p.padding,
    F = z,
    E = !1,
    ua = [];
   h -= z + ha;
   e && (l = l && l[0] && l[0].data);
   if (typeof l === Ta || typeof l.length === Ta) return 0;
   e = l.length;
   for (n = 0; n < e; n += 1)(k = l[n]) && !1 !== k.showInLegend && (k.__i = n, ua.push(k));
   ua.sort(function (a, b) {
    return a.legendIndex - b.legendIndex || a.__i - b.__i
   });
   e = ua.length;
   r = h - A - ha - q;
   0 > r && (r = 0);
   D.setStyle(p.itemStyle);
   p.reversed && ua.reverse();
   for (n = 0; n < e; n += 1) k = ua[n], E = !0, k._legendX = 0, k._legendY =
    F, 0 === r ? (F += k._legendH = A, k.name = b, k._totalWidth = v + N) : (l = D.getSmartText(k.name, r, C), k.name = l.text, l.tooltext && (k.originalText = l.tooltext), l.height < A && (k._legendTestY = (A - l.height) / 2), k._totalWidth = v + N + q + l.width + ha, F += k._legendH = V(l.height, A), ba = V(l.width, ba));
   if (E) return p.itemWidth = ba + A + ha + q, p.width = p.itemWidth + z, p.title.text !== b && (D.setStyle(p.title.style), l = D.getSmartText(p.title.text, h, C), p.title.text = l.text, l.tooltext && (p.title.originalText = l.tooltext), n = l.width + z, p.width < n && (p.initialItemX = (n -
    p.width) / 2, p.width = n), p.initialItemY = l.height + s, F += p.initialItemY), p.height = p.totalHeight = F, p.height > f && (p.height = f, p.scroll.enabled = !0, p.scroll.flatScrollBars = m.flatScrollBars, p.scroll.scrollBar3DLighting = m.scrollBar3DLighting, p.width += (p.scroll.scrollBarWidth = 10) + (p.scroll.scrollBarPadding = 2)), u.legendstartx = m.width - G - p.width, u.legendwidth = p.width, u.legendendx = u.legendstartx + u.legendwidth, u.legendheight = p.height, d = $(p.width + d, h), c.chart.marginRight += d + ha, d;
   p.enabled = !1;
   return 0
  },
  Rb = m.placeLegendBlockBottom =
  function (c, d, h, f, e) {
   this.configureLegendOptions(c, d.chart, !1, e, h);
   var u = this.snapLiterals || (this.snapLiterals = {}),
    n = 0,
    l = c.series,
    k = c[g],
    m = k.smartLabel || this.smartLabel,
    D = c.chart,
    p = D.spacingBottom,
    r = D.spacingLeft,
    D = D.spacingRight,
    q = c.legend,
    s, v = q.textPadding,
    N = q.title.padding,
    A, ba = q.symbolWidth,
    ha = q.symbolPadding,
    z = q.legendHeight,
    F = d.chart;
   A = 0;
   var E = 2 * f,
    ua = q.rowHeight,
    H = .05 * ua,
    ja = [];
   s = a(F.minimisewrappinginlegend, 0);
   var F = a(parseInt(F.legendnumcolumns, 10), 0),
    ra = 0,
    B = 0,
    Ba = 0,
    I = n = 0,
    Ha = 0,
    Da = 0,
    K = q.padding,
    xa = 2 * K,
    K = v + ha + K;
   d = a(d.chart.legendpadding, 7) + q.borderWidth / 2 + 1;
   var ia = xa,
    L = !1,
    Ka, Q = [],
    P = !1,
    ea = 0,
    nb = 0;
   0 > F && (F = 0);
   h -= xa;
   m.setStyle(q.itemStyle);
   n = m.getOriSize(G).height;
   d = $(d, f - n - 8);
   f -= d;
   e && (l = l && l[0] && l[0].data);
   if (typeof l === Ta || typeof l.length === Ta) return 0;
   e = l.length;
   for (n = 0; n < e; n += 1)(Ka = l[n]) && !1 !== Ka.showInLegend && (Ka.__i = n, Q.push(Ka));
   Q.sort(function (a, b) {
    return a.legendIndex - b.legendIndex || a.__i - b.__i
   });
   e = Q.length;
   m.setStyle(q.itemStyle);
   for (n = 0; n < e; n += 1) L = !0, Q[n].name = C(Q[n].name), l = m.getOriSize(Q[n].name),
    ra = V(ra, l.width), Ha = V(Ha, $(l.height, E)), B += l.width, Ba += 1;
   n = B / Ba;
   z = z + H + v + ha + xa;
   B += z * Ba;
   if (L) {
    n += z;
    ra += z;
    0 < F && Ba < F && (F = Ba);
    B <= h && (0 >= F || F === Ba) ? (F = Ba, I = n = B / Ba, P = !0, Ha > ua && (Da = (Ha - ua) / 2, ua = Ha)) : 0 < F && (I = h / F) > n ? I > ra && (I = ra) : h > ra && (s || 1.5 * n > ra) ? (F = Aa(h / ra), Ba < F && (F = Ba), I = ra) : h >= 2 * n ? (F = Aa(h / n), Ba < F && (F = Ba), I = Aa(h / F), I > ra && (I = ra)) : (F = 1, I = h);
    q.itemWidth = I;
    s = I - z;
    0 > s && (ha = s = v = 0);
    q.symbolPadding = ha;
    q.textPadding = v;
    q.width = I * F - H;
    q.title.text !== b && (m.setStyle(q.title.style), l = m.getSmartText(q.title.text, h, E), q.title.text =
     l.text, l.tooltext && (q.title.originalText = l.tooltext), A = l.width + xa, q.width < A && (q.initialItemX = (A - q.width) / 2, q.width = A), q.initialItemY = A = l.height + N);
    m.setStyle(q.itemStyle);
    q.reversed && Q.reverse();
    for (n = 0; n < e; n += 1) {
     h = Q[n];
     0 === s && (ja[ea] = !0, h.name = b, N = 1, v = parseInt(ea / F, 10), H = ea % F, h._legendX = H * I, h._legendY = v * ua + xa, h._legendH = N * ua, h._totalWidth = ba + ha);
     if (P) l = m.getOriSize(h.name), l.height < ua && (h._legendTestY = (ua - l.height) / 2), h._markerYGutter = Da, h._legendX = nb, h._legendY = xa, h._legendH = ua, h._totalWidth = ba +
      K + l.width, nb += l.width + z;
     else {
      l = m.getSmartText(h.name, s, E);
      h.name = l.text;
      for (l.tooltext && (h.originalText = l.tooltext); !0 === ja[ea];) ea += 1;
      v = l.height / ua;
      H = ea;
      for (N = 0; N < v; N += 1, H += F) ja[H] = !0;
      l.height < ua && (h._legendTestY = (ua - l.height) / 2);
      v = parseInt(ea / F, 10);
      H = ea % F;
      h._legendX = H * I;
      h._legendY = v * ua + xa;
      h._legendH = N * ua;
      h._totalWidth = ba + K + l.width
     }
     ea += 1
    }
    m = P ? 1 : za(ja.length / F);
    q.height = q.totalHeight = ia + (m * ua + A);
    q.rowHeight = ua;
    q.legendNumColumns = F;
    q.height > f && (q.height = f, q.scroll.enabled = !0, q.scroll.flatScrollBars =
     k.flatScrollBars, q.scroll.scrollBar3DLighting = k.scrollBar3DLighting, q.width += (q.scroll.scrollBarWidth = 10) + (q.scroll.scrollBarPadding = 2));
    u.legendstartx = r + .5 * (k.width - r - D - q.width) + (q.x || 0);
    u.legendwidth = q.width;
    u.legendendx = u.legendstartx + u.legendwidth;
    u.legendstarty = k.height - p - q.height;
    u.legendheight = q.height;
    u.legendendy = u.legendstarty + u.legendheight;
    d += q.height;
    c.chart.marginBottom += d;
    return d
   }
   q.enabled = !1;
   return 0
  },
  Jb = function (a, b) {
   return a.value - b.value
  },
  $a = function (a, b, c) {
   var d = b._originalText;
   a = a[g].smartLabel;
   b.text = b.rotation ? a.getSmartText(d, c, b._actualWidth).text : a.getSmartText(d, b._actualWidth, c).text;
   b.centerYAxisName = !0
  },
  ub = m.adjustVerticalAxisTitle = function (a, b, c) {
   if (b && b.text) {
    var d = b.text,
     e = a[g].smartLabel,
     h = 2 * $(a.chart.marginTop, a.chart.marginBottom) + c,
     f = c + a.chart.marginTop + a.chart.marginBottom;
    b.style && e.setStyle(b.style);
    d = e.getOriSize(d);
    void 0 === b.centerYAxisName && (b.centerYAxisName = !0);
    b.rotation ? d.width > h && (b.y = f / 2 - (c / 2 + a.chart.marginTop), b.centerYAxisName = !1) : d.height >
     h && (b.y = (f / 2 - (c / 2 + a.chart.marginTop)) / 2, b.centerYAxisName = !1)
   }
  },
  Ra = m.adjustVerticalCanvasMargin = function (b, c, d, h) {
   var e = c.chart,
    g = c = 0,
    f = 0,
    u = a(e.canvastopmargin, 0),
    e = a(e.canvasbottommargin, 0),
    n = u / (u + e),
    l = b.chart.marginTop,
    k = b.chart.marginBottom;
   e > k && (c += e - k);
   u > l && (c += u - l);
   c > d ? u > l && e > k ? (g = d * n, f = d * (1 - n)) : u > l ? g = d : f = d : 0 < c && (e > k && (f = e - k), u > l && (g = u - l));
   g && (b.chart.marginTop += g);
   f && (b.chart.marginBottom += f, h && h.title && (h.title.margin += f));
   return g + f
  },
  Tb = m.adjustHorizontalCanvasMargin = function (b, c, d, h, e) {
   var g =
    c.chart;
   c = a(g.canvasleftmargin, 0);
   var g = a(g.canvasrightmargin, 0),
    f = c / (c + g),
    u = 0,
    n = b.chart.marginLeft,
    l = b.chart.marginRight,
    k = 0,
    m = 0;
   c > n && (u += c - n);
   g > l && (u += g - l);
   u > d ? c > n && g > l ? (k = d * f, m = d * (1 - f)) : g > l ? m = d : k = d : 0 < u && (c > n && (k = c - n), g > l && (m = g - l));
   k && (b.chart.marginLeft += k, h && h.title && (h.title.margin += k));
   m && (b.chart.marginRight += m, e && e.title && (e.title.margin += m));
   return m + k
  },
  wa = function (a, b) {
   return a - b
  },
  Ab = m.getDataParser = {
   column: function (b, d, h) {
    var f = b[g],
     e = d.borderWidth;
    return function (g, u, n) {
     var k = d.plotgradientcolor,
      m = d.is3d,
      D = d.isRoundEdges,
      p = d.plotBorderColor,
      G = c(g.color, d.color),
      q = c(g.ratio, d.ratio),
      r = ca(d.plotBorderAlpha),
      s = a(g.dashed, d.dashed),
      v = c(g.dashlen, d.dashLen),
      N = c(g.dashgap, d.dashGap),
      A = d.use3DLighting,
      C = ca(c(g.alpha, d.alpha)).toString(),
      ba = {
       opacity: C / 100
      },
      ha = d.isBar,
      F = d.fillAangle,
      z = 0 > n ? ha ? 180 - F : 360 - F : F,
      F = T(G + Ja + k, C, q, z, D, p, c(g.alpha, r).toString(), ha, m),
      E = s ? l(v, N, e) : "none";
     u = h.getPointStub(g, n, f.oriCatTmp[u], b, d, d.showValues, d.yAxis);
     g = h.pointHoverOptions(g, d, {
      plotType: "column",
      is3d: m,
      isBar: ha,
      use3DLighting: A,
      isRoundEdged: D,
      color: G,
      gradientColor: k,
      alpha: C,
      ratio: q,
      angle: z,
      borderWidth: e,
      borderColor: p,
      borderAlpha: r,
      borderDashed: s,
      borderDashGap: N,
      borderDashLen: v,
      shadow: ba
     });
     u.y = n;
     u.shadow = ba;
     u.color = F[0];
     u.borderColor = F[1];
     u.borderWidth = e;
     u.use3DLighting = A;
     u.dashStyle = E;
     u.tooltipConstraint = h.tooltipConstraint;
     u.hoverEffects = g.enabled && g.options;
     u.rolloverProperties = g.enabled && g.rolloverOptions;
     return u
    }
   },
   line: function (b, d, h) {
    var f = b[g];
    return function (e, g, u) {
     var n = a(e.alpha, d.lineAlpha),
      k = {
       opacity: n / 100
      },
      m = a(e.anchorsides, d.anchorSides, 0),
      D = a(e.anchorborderthickness, d.anchorBorderThickness, 1),
      p = fa(c(e.anchorbordercolor, d.anchorBorderColor)),
      G = fa(c(e.anchorbgcolor, d.anchorBgColor)),
      q = a(e.anchorstartangle, d.anchorStartAngle, 90),
      r = c(e.anchoralpha, d.anchorAlpha),
      s = c(e.anchorbgalpha, r),
      v = a(e.anchorradius, d.anchorRadius),
      N = Boolean(a(e.anchorshadow, d.anchorShadow, 0));
     g = h.getPointStub(e, u, f.oriCatTmp[g], b, d, d.showValues, d.yAxis);
     var A = c(e.anchorimageurl, d.imageUrl),
      C = c(e.anchorimagescale,
       d.imageScale),
      ba = c(e.anchorimagealpha, d.imageAlpha);
     g.y = u;
     g.shadow = k;
     g.anchorShadow = d.anchorShadow;
     g.dashStyle = a(e.dashed, d.lineDashed) ? l(d.lineDashLen, d.lineDashGap, d.lineThickness) : "none";
     g.color = {
      FCcolor: {
       color: fa(c(e.color, d.lineColor)),
       alpha: n
      }
     };
     g.valuePosition = c(e.valueposition, d.valuePosition);
     u = h.pointHoverOptions(e, d, {
      plotType: "anchor",
      anchorBgColor: G,
      anchorAlpha: r,
      anchorBgAlpha: s,
      anchorAngle: q,
      anchorBorderThickness: D,
      anchorBorderColor: p,
      anchorBorderAlpha: r,
      anchorSides: m,
      anchorRadius: v,
      imageUrl: A,
      imageScale: C,
      imageAlpha: ba,
      shadow: k
     });
     g.marker = {
      enabled: void 0 === d.drawAnchors ? 0 !== n : !!d.drawAnchors,
      shadow: N && {
       opacity: r / 100
      },
      fillColor: {
       FCcolor: {
        color: fa(c(e.anchorbgcolor, d.anchorBgColor)),
        alpha: (c(e.anchorbgalpha, d.anchorBgAlpha) * r / 100).toString()
       }
      },
      lineColor: {
       FCcolor: {
        color: fa(c(e.anchorbordercolor, d.anchorBorderColor)),
        alpha: r
       }
      },
      imageUrl: A,
      imageScale: C,
      imageAlpha: ba,
      lineWidth: a(e.anchorborderthickness, d.anchorBorderThickness),
      radius: a(e.anchorradius, d.anchorRadius),
      symbol: La(a(e.anchorsides,
       d.anchorSides)),
      startAngle: c(e.anchorstartangle, d.anchorAngle)
     };
     g.hoverEffects = u.enabled && u.options;
     g.rolloverProperties = u.enabled && u.rolloverOptions;
     return g
    }
   },
   area: function (b, d, h) {
    var f = b[g];
    return function (e, g, u) {
     var n = c(e.alpha, d.fillAlpha),
      l = {
       opacity: V(n, d.lineAlpha) / 100,
       inverted: !0
      },
      k = a(e.anchorsides, d.anchorSides, 0),
      m = a(e.anchorborderthickness, d.anchorBorderThickness, 1),
      D = fa(c(e.anchorbordercolor, d.anchorBorderColor)),
      p = fa(c(e.anchorbgcolor, d.anchorBgColor)),
      G = a(e.anchorstartangle, d.anchorStartAngle,
       90),
      q = c(e.anchoralpha, d.anchorAlpha),
      r = c(e.anchorbgalpha, q),
      s = a(e.anchorradius, d.anchorRadius),
      v = Boolean(a(e.anchorshadow, d.anchorShadow, 0));
     g = h.getPointStub(e, u, f.oriCatTmp[g], b, d, d.showValues, d.yAxis);
     var N = c(e.anchorimageurl, d.imageUrl),
      A = c(e.anchorimagescale, d.imageScale),
      C = c(e.anchorimagealpha, d.imageAlpha);
     g.y = u;
     g.shadow = l;
     g.anchorShadow = d.anchorShadow;
     g.color = {
      FCcolor: {
       color: fa(c(e.color, d.fillColor)),
       alpha: n
      }
     };
     g.valuePosition = c(e.valueposition, d.valuePosition);
     u = h.pointHoverOptions(e, d, {
      plotType: "anchor",
      anchorBgColor: p,
      anchorAlpha: q,
      anchorBgAlpha: r,
      anchorAngle: G,
      anchorBorderThickness: m,
      anchorBorderColor: D,
      anchorBorderAlpha: q,
      anchorSides: k,
      anchorRadius: s,
      imageUrl: N,
      imageScale: A,
      imageAlpha: C,
      shadow: l
     });
     g.marker = {
      enabled: d.drawAnchors,
      shadow: v && {
       opacity: q / 100
      },
      fillColor: {
       FCcolor: {
        color: fa(c(e.anchorbgcolor, d.anchorBgColor)),
        alpha: (c(e.anchorbgalpha, d.anchorBgAlpha) * q / 100).toString()
       }
      },
      lineColor: {
       FCcolor: {
        color: fa(c(e.anchorbordercolor, d.anchorBorderColor)),
        alpha: q
       }
      },
      imageUrl: N,
      imageScale: A,
      imageAlpha: C,
      lineWidth: a(e.anchorborderthickness, d.anchorBorderThickness),
      radius: s,
      symbol: La(a(e.anchorsides, d.anchorSides)),
      startAngle: c(e.anchorstartangle, d.anchorAngle)
     };
     g.hoverEffects = u.enabled && u.options;
     g.rolloverProperties = u.enabled && u.rolloverOptions;
     g.events = {
      click: d.getLink
     };
     return g
    }
   }
  };
 d.core.options.resizeTrackingInterval = 300;
 d.core.options.preventTrackResize = !1;
 d.core.options.SVGDefinitionURL = "relative";
 m.createChart = function (b, h, g, f, e, u, n) {
  var l = b.jsVars,
   k, D, p = qa[g || (g = b.chartType())],
   G, q = l.hasNativeMessage,
   r = b.options,
   s = b.args,
   v;
  v = function (a) {
   var c = {
     renderer: "javascript"
    },
    e = l.fcObj,
    u = e.width,
    k = e.height,
    D = p && p.eiMethods,
    r = l.overlayButton,
    s;
   h.jsVars = b.jsVars;
   l.container = h;
   l.hcObj = a;
   l.type = g;
   l.width = h.offsetWidth;
   l.height = h.offsetHeight;
   l.instanceAPI = G;
   if (a.hasRendered) {
    d.extend(h, Pa);
    if (D && "string" !== typeof D)
     for (s in D) h[s] = D[s];
    l.overlayButtonActive && r && (r.innerHTML = "", r.appendChild(E.createTextNode(l.overlayButtonMessage)), a.container.appendChild(r))
   }(/\%/g.test(u) || /\%/g.test(k)) && h && h.parentNode &&
    !d.core.options.preventTrackResize && fb(e, h);
   f && (f({
    success: a.hasRendered,
    ref: h,
    id: b.id
   }), a.hasRendered && (m.raiseEvent("loaded", {
    type: g,
    renderer: "javascript"
   }, b, [b.id]), q || (e.__state.firstRenderNotified = !0, setTimeout(function () {
    m.raiseEvent("rendered", {
     renderer: "javascript"
    }, e, [e.id])
   }, 0))));
   a.hasRendered && l.previousDrawCount < l.drawCount && (c.width = l.width, c.height = l.height, c.drawCount = l.drawCount, c.displayingMessage = q, c.renderer = e.options.renderer, m.raiseEvent("drawcomplete", c, e, [e.id]), q || n || setTimeout(function () {
    e.__state &&
     !e.__state.firstRenderNotified && m.raiseEvent("rendered", {
      renderer: "javascript"
     }, e, [e.id]);
    d.raiseEvent("renderComplete", c, e)
   }, 0))
  };
  l.instanceAPI && l.instanceAPI.dispose && l.instanceAPI.dispose();
  G = p ? new qa(g) : new qa("stub");
  G.chartInstance = b;
  G.origRenderWidth = b.__state.renderedWidth;
  G.origRenderHeight = b.__state.renderedHeight;
  void 0 !== e ? "string" === typeof e && (e = new ua(h, e, b), q = l.hasNativeMessage = !0) : !p || !p.init || p && "stub" === p.name ? (b._chartMessageImageStyle = {
    imageHAlign: c(s.typeNotSupportedMessageImageHAlign,
     r.baseChartMessageImageHAlign).toLowerCase(),
    imageVAlign: c(s.typeNotSupportedMessageImageVAlign, r.baseChartMessageImageVAlign).toLowerCase(),
    imageAlpha: a(s.typeNotSupportedMessageImageAlpha, r.baseChartMessageImageAlpha),
    imageScale: a(s.typeNotSupportedMessageImageScale, r.baseChartMessageImageScale)
   }, b._chartMessageStyle = {
    color: s.typeNotSupportedMessageColor || r.baseChartMessageColor,
    fontFamily: s.typeNotSupportedMessageFont || r.baseChartMessageFont,
    fontSize: s.typeNotSupportedMessageFontSize || r.baseChartMessageFontSize
   },
   e = new ua(h, r.typeNotSupportedMessage, b), q = l.hasNativeMessage = !0) : l.message ? (e = new ua(h, l.message, b), q = l.hasNativeMessage = !0) : l.loadError ? (b._chartMessageImageStyle = {
    imageHAlign: c(s.dataLoadErrorMessageImageHAlign, r.baseChartMessageImageHAlign).toLowerCase(),
    imageVAlign: c(s.dataLoadErrorMessageImageVAlign, r.baseChartMessageImageVAlign).toLowerCase(),
    imageAlpha: a(s.dataLoadErrorMessageImageAlpha, r.baseChartMessageImageAlpha),
    imageScale: a(s.dataLoadErrorMessageImageScale, r.baseChartMessageImageScale)
   },
   b._chartMessageStyle = {
    color: s.dataLoadErrorMessageColor || r.baseChartMessageColor,
    fontFamily: s.dataLoadErrorMessageFont || r.baseChartMessageFont,
    fontSize: s.dataLoadErrorMessageFontSize || r.baseChartMessageFontSize
   }, e = new ua(h, r.dataLoadErrorMessage, b), q = l.hasNativeMessage = !0) : l.stallLoad ? (b._chartMessageImageStyle = {
   imageHAlign: c(s.dataLoadStartMessageImageHAlign, r.baseChartMessageImageHAlign).toLowerCase(),
   imageVAlign: c(s.dataLoadStartMessageImageVAlign, r.baseChartMessageImageVAlign).toLowerCase(),
   imageAlpha: a(s.dataLoadStartMessageImageAlpha,
    r.baseChartMessageImageAlpha),
   imageScale: a(s.dataLoadStartMessageImageScale, r.baseChartMessageImageScale)
  }, b._chartMessageStyle = {
   fontFamily: s.dataLoadStartMessageFont || r.baseChartMessageFont,
   fontSize: s.dataLoadStartMessageFontSize || r.baseChartMessageFontSize,
   color: s.dataLoadStartMessageColor || r.baseChartMessageColor
  }, e = new ua(h, r.dataLoadStartMessage, b), q = l.hasNativeMessage = !0) : (d.raiseEvent("internal.drawStart", {
    chartType: g,
    logicName: G.name,
    logicBase: G.base && G.base.name,
    defaultSeriesType: G.defaultSeriesType
   },
   b), k = b.jsVars && b.jsVars.themeObject && b.jsVars.themeObject.getThemedJSONData() || b.getChartData(d.dataFormats.JSON, !0), D = k.data, k.error instanceof Error ? (b._chartMessageImageStyle = {
    imageHAlign: c(s.dataInvalidMessageImageHAlign, r.baseChartMessageImageHAlign).toLowerCase(),
    imageVAlign: c(s.dataInvalidMessageImageVAlign, r.baseChartMessageImageVAlign).toLowerCase(),
    imageAlpha: a(s.dataInvalidMessageImageAlpha, r.baseChartMessageImageAlpha),
    imageScale: a(s.dataInvalidMessageImageScale, r.baseChartMessageImageScale)
   },
   b._chartMessageStyle = {
    fontFamily: s.dataInvalidMessageFont || r.baseChartMessageFont,
    fontSize: s.dataInvalidMessageFontSize || r.baseChartMessageFontSize,
    color: s.dataInvalidMessageColor || r.baseChartMessageColor
   }, e = new ua(h, r.dataInvalidMessage, b), q = l.hasNativeMessage = !0, b.__state.dataReady = !1, n || d.raiseEvent("dataInvalid", {
    error: k.error
   }, l.fcObj, void 0, function () {
    m.raiseEvent("dataxmlinvalid", {}, b, [b.id])
   })) : (n || m.raiseEvent("dataloaded", {}, b, [b.id]), e = G.init(h, D, b, v), G.inited = !0, l.previousDrawCount = l.drawCount,
   l.drawCount += 1, 0 === e.series.length ? (b._chartMessageImageStyle = {
    imageHAlign: c(s.dataEmptyMessageImageHAlign, r.baseChartMessageImageHAlign).toLowerCase(),
    imageVAlign: c(s.dataEmptyMessageImageVAlign, r.baseChartMessageImageVAlign).toLowerCase(),
    imageAlpha: a(s.dataEmptyMessageImageAlpha, r.baseChartMessageImageAlpha),
    imageScale: a(s.dataEmptyMessageImageScale, r.baseChartMessageImageScale)
   }, b._chartMessageStyle = {
    fontFamily: s.dataEmptyMessageFont || r.baseChartMessageFont,
    fontSize: s.dataEmptyMessageFontSize ||
     r.baseChartMessageFontSize,
    color: s.dataEmptyMessageColor || r.baseChartMessageColor
   }, e = new ua(h, r.dataEmptyMessage, b), q = l.hasNativeMessage = !0, b.__state.dataReady = !1, n || m.raiseEvent("nodatatodisplay", {}, b, [b.id])) : (b.__state.dataReady = !0, q = l.hasNativeMessage = !1, delete l.message)));
  e || (b._chartMessageImageStyle = {
   imageHAlign: r.baseChartMessageImageHAlign,
   imageVAlign: r.baseChartMessageImageVAlign,
   imageAlpha: r.baseChartMessageImageAlpha,
   imageScale: r.baseChartMessageImageScale
  }, b._chartMessageStyle = {
   fontFamily: r.baseChartMessageFont,
   fontSize: r.baseChartMessageFontSize,
   color: r.baseChartMessageColor
  }, e = new ua(h, "Error rendering chart {0x01}", b), q = l.hasNativeMessage = !0);
  q && !G.inited && G.init(h, D, b, v);
  e.chart = e.chart || {};
  e.credits = e.credits || {};
  e.credits.enabled = p && !0 === p.creditLabel ? !0 : !1;
  !1 === u && (e.chart.animation = !1, e.plotOptions || (e.plotOptions = {}), e.plotOptions.series || (e.plotOptions.series = {}), e.plotOptions.series.animation = !1);
  h.style && (e.chart.containerBackgroundColor = m.getContainerBackgroundColor(b));
  return G.draw(e, v)
 };
 qa("base", {
  useScaleRecursively: !0,
  tooltipConstraint: "chart",
  rendererId: "root",
  canvasPaddingModifiers: ["anchor", "anchorlabel"],
  drawAnnotations: !0,
  draw: function (a, b) {
   var c = this.renderer;
   c || (c = this.renderer = new qa("renderer." + this.rendererId));
   this.updateDefaultAnnotations();
   return c.init(this, a, b)
  },
  init: function (h, g, u) {
   var l = this.chartInstance || u,
    e = l.jsVars;
   u = e._reflowData || (e._reflowData = {});
   var n = e._reflowClean,
    k = l.options,
    D = k.args,
    p, G;
   /^\s*absolute\s*$/i.test(d.core.options.SVGDefinitionURL) && (z._url =
    (z._g && z._g.win || q).location.href.replace(/#.*?$/, b));
   this.dataObj = g = f({}, g);
   G = g.chart = g.chart || g.graph || g.map || {};
   delete g.graph;
   delete g.map;
   u && !this.stateless && (p = u.hcJSON, delete u.hcJSON, f(this, u, !0), this.preReflowAdjustments && this.preReflowAdjustments.call(this), u.hcJSON = p);
   this.containerElement = h;
   this.config = {};
   this.smartLabel = e.smartLabel;
   this.smartLabel.useEllipsesOnOverflow(a(G.useellipseswhenoverflow, G.useellipsewhenoverflow, 1));
   this.colorManager = new m.colorManager(g, this);
   this.linkClickFN =
    ha(g, l);
   this.numberFormatter = new ba(g.chart, this);
   if (!this.standaloneInit) return l._chartMessageImageStyle = {
    imageHAlign: c(D.typeNotSupportedMessageImageHAlign, k.baseChartMessageImageHAlign).toLowerCase(),
    imageVAlign: c(D.typeNotSupportedMessageImageVAlign, k.baseChartMessageImageVAlign).toLowerCase(),
    imageAlpha: a(D.typeNotSupportedMessageImageAlpha, k.baseChartMessageImageAlpha),
    imageScale: a(D.typeNotSupportedMessageImageScale, k.baseChartMessageImageScale)
   }, l._chartMessageStyle = {
    fontFamily: D.typeNotSupportedMessageFont ||
     k.baseChartMessageFont,
    fontSize: D.typeNotSupportedMessageFontSize || k.baseChartMessageFontSize,
    color: D.typeNotSupportedMessageColor || k.baseChartMessageColor
   }, new m.createDialog(h, k.typeNotSupportedMessage, l);
   h = this.chart(h.offsetWidth || parseFloat(h.style.width), h.offsetHeight || parseFloat(h.style.height), l);
   u && !this.stateless && (u.hcJSON && f(h, u.hcJSON, !0), this.postReflowAdjustments && this.postReflowAdjustments.call(this), n && this.cleanedData && (this.cleanedData(this, n), this.cleanedData(u, n)));
   return h
  },
  postSpaceManager: function () {
   var b = this.hcJSON,
    c = b._FCconf,
    d = b.chart,
    h = d.marginLeft,
    e = d.spacingLeft,
    g = d.spacingRight,
    f = c.width - h - d.marginRight,
    u = b.title,
    b = b.subtitle,
    l = c.width,
    n = u.align,
    c = u.x,
    k = u.horizontalPadding,
    m = u.alignWithCanvas,
    D = (H(h) || 0) + a(f, l) / 2,
    h = this.snapLiterals || (this.snapLiterals = {}),
    f = u._captionWidth,
    p = b._subCaptionWidth,
    G = u._lineHeight,
    r = b._lineHeight,
    q = u.text;
   if (void 0 === c) {
    switch (n) {
    case ma:
     c = m ? l - d.marginRight - k : l - k;
     break;
    case Ma:
     c = m ? d.marginLeft + k : k;
     break;
    default:
     c = m ? D : e + .5 * (l - e -
      g) || l / 2
    }
    u.align === Ma ? (g = e = 0, u.align = "start") : u.align === ma ? (e = f, g = p, u.align = "end") : (e = f / 2, g = p / 2, u.align = "middle");
    u.x = c;
    u.y = u.y || d.spacingTop || 0;
    b.y = q ? u.y + G + 2 : u.y || d.spacingTop || 0;
    h.captionstartx = c - e - 2;
    h.captionwidth = f + 4;
    h.captionendx = h.captionstartx + h.captionwidth;
    h.captionstarty = u.y || 0;
    h.captionheight = G + 2;
    h.captionendy = h.captionstarty + h.captionheight;
    h.subcaptionstartx = c - g - 2;
    h.subcaptionwidth = p + 4;
    h.subcaptionendx = h.subcaptionstartx + h.subcaptionwidth;
    h.subcaptionstarty = b.y || 0;
    h.subcaptionheight = r +
     2;
    h.subcaptionendy = h.subcaptionstarty + h.subcaptionheight
   }
  },
  chart: function (h, w) {
   var J = this.name,
    k = this.dataObj,
    e = k.chart,
    m = this.colorManager,
    p, G, r, N, A, ba, ha, F = this.defaultSeriesType,
    z, E, ua, H, ra, ja, Ba, I, B, K, ia, Q, Ka, P, ea, nb, Pa, eb, fb, bb, W, wa, O, U, xb, T, Ra, Ab, ub, Mb, Tb, Rb, $a, $, Jb, Z, Zb, ca, pa, qa, na, Ea, La, za, Aa, Ya, Ua, vb, ib, rb, Ta, yb, wb, Kb, Ca, sc, uc, vc, nc, oc, yc, Fb, tc, wc, lb, Qb, Fc, Sa, hd, id, dc, jd, zc, kd, Xc, Wb, va, Vb, ec, Qa, Hb, pb, Cb, Db, Xb, gc, tb, fc, kc, sd, db, lc, Bb, Xa, Ib, Rc, Zc, ld, mc, Eb, Lb, Ub;
   p = Oc(k, h, w, this);
   B = p.chart;
   I =
    p.xAxis;
   z = p[g];
   this.snapLiterals || (this.snapLiterals = {});
   ia = this.snapLiterals;
   ia.chartstartx = 0;
   ia.chartstarty = 0;
   ia.chartwidth = h;
   ia.chartheight = w;
   ia.chartendx = h;
   ia.chartendy = w;
   ia.chartcenterx = h / 2;
   ia.chartcentery = w / 2;
   ia.chartbottommargin = B.spacingBottom;
   ia.chartleftmargin = B.spacingLeft;
   ia.chartrightmargin = B.spacingRight;
   ia.charttopmargin = B.spacingTop;
   this.updateSnapPoints && this.updateSnapPoints();
   this.postHCJSONCreation && this.postHCJSONCreation.call(this, p);
   d.raiseEvent("internal.postlogic", this, this.chartInstance);
   p.labels.smartLabel = ba = z.smartLabel = this.smartLabel;
   z.width = h;
   z.height = w;
   ua = p.plotOptions;
   z.isDual = this.isDual;
   z.numberFormatter = this.numberFormatter;
   z.axisGridManager = new D(F, e);
   z.tooltext = e.plottooltext;
   z.trendLineToolText = e.trendlinetooltext;
   B.is3D = G = z.is3d = /3d$/.test(F);
   B.isBar = E = z.isBar = this.isBar;
   ha = /^pie/.test(F);
   Ba = 1 == e.useroundedges;
   ja = G ? Da.chart3D : Da.chart2D;
   B.events.click = p.plotOptions.series.point.events.click = this.linkClickFN;
   B.defaultSeriesType = F;
   nb = 0 < e.palette && 6 > e.palette ? e.palette :
    a(this.paletteIndex, 1);
   --nb;
   B.paletteIndex = nb;
   B.usePerPointLabelColor = e.colorlabelsfromplot == sb;
   B.syncLabelWithAnchor = a(e.synclabelwithanchoronhover, 1);
   B.useRoundEdges = Ba && !G && !this.distributedColumns && "pie" !== this.defaultSeriesType;
   void 0 !== c(e.clickurl) && (B.link = e.clickurl, B.style.cursor = "pointer", p.plotOptions.series.point.events.click = function () {
    B.events.click.call({
     link: e.clickurl
    })
   });
   Pa = c(e.basefont, "Verdana,sans");
   eb = L(e.basefontsize, 10);
   fb = c(e.basefontcolor, m.getColor(ja.baseFontColor));
   bb =
    c(e.outcnvbasefont, Pa);
   W = L(e.outcnvbasefontsize, eb);
   wa = W + Ga;
   O = c(e.outcnvbasefontcolor, fb).replace(/^#?([a-f0-9]+)/ig, "#$1");
   T = eb;
   eb += Ga;
   fb = fb.replace(/^#?([a-f0-9]+)/ig, "#$1");
   z.trendStyle = z.outCanvasStyle = {
    fontFamily: bb,
    color: O,
    fontSize: wa
   };
   U = n(z.trendStyle);
   z.inCanvasStyle = {
    fontFamily: Pa,
    fontSize: eb,
    color: fb
   };
   xb = n(z.inCanvasStyle);
   z.divlineStyle = {
    fontFamily: Pa,
    fontSize: eb,
    color: fb,
    lineHeight: xb
   };
   I.labels.style = {
    fontFamily: c(e.labelfont, bb),
    fontSize: a(e.labelfontsize, W) + Ga,
    color: c(e.labelfontcolor,
     O)
   };
   I.labels.style.lineHeight = n(I.labels.style);
   I.steppedLabels.style = {
    fontFamily: bb,
    fontSize: wa,
    lineHeight: U,
    color: O,
    visibility: "hidden"
   };
   p.yAxis[0].labels.style = {
    fontFamily: bb,
    fontSize: wa,
    lineHeight: U,
    color: O
   };
   p.yAxis[1].labels.style = {
    fontFamily: bb,
    fontSize: wa,
    lineHeight: U,
    color: O
   };
   Ab = c(e.legenditemfont, bb);
   ub = L(e.legenditemfontsize, W);
   Mb = c(e.legenditemfontcolor, O).replace(/^#?([a-f0-9]+)/ig, "#$1");
   Tb = xa[a(e.legenditemfontbold, 0)] || "";
   Ra = L(e.legendcaptionfontsize, W) + Ga;
   ub += Ga;
   p.legend.itemStyle = {
    fontFamily: Ab,
    fontSize: ub,
    color: Mb,
    fontWeight: Tb
   };
   n(p.legend.itemStyle);
   p.legend.itemHiddenStyle = {
    fontFamily: Ab,
    fontSize: ub,
    color: c(e.legenditemhiddencolor, "cccccc").replace(/^#?([a-f0-9]+)/ig, "#$1"),
    fontWeight: Tb
   };
   n(p.legend.itemHiddenStyle);
   p.legend.itemHoverStyle = {
    color: c(e.legenditemhoverfontcolor, Mb).replace(/^#?([a-f0-9]+)/ig, "#$1")
   };
   p.legend.title.style = {
    fontFamily: c(e.legendcaptionfont, Ab),
    fontSize: Ra,
    color: c(e.legendcaptionfontcolor, O).replace(/^#?([a-f0-9]+)/ig, "#$1"),
    fontWeight: xa[a(e.legendcaptionfontbold,
     1)] || ""
   };
   n(p.legend.title.style);
   p.legend.title.align = jb[e.legendcaptionalignment && e.legendcaptionalignment.toLowerCase() || la] || jb.center;
   K = (K = v(e.valuebordercolor, b)) ? Y(K, a(e.valueborderalpha, e.valuealpha, 100)) : b;
   p.plotOptions.series.dataLabels.style = {
    fontFamily: c(e.valuefont, Pa),
    fontSize: c(e.valuefontsize, parseInt(eb, 10)) + Ga,
    lineHeight: xb,
    color: Y(c(e.valuefontcolor, fb), a(e.valuefontalpha, e.valuealpha, 100)),
    fontWeight: a(e.valuefontbold) ? "bold" : "normal",
    fontStyle: a(e.valuefontitalic) ? "italic" : "normal",
    border: K || e.valuebgcolor ? a(e.valueborderthickness, 1) + "px solid" : "",
    borderColor: K,
    borderThickness: a(e.valueborderthickness, 1),
    borderPadding: a(e.valueborderpadding, 2),
    borderRadius: a(e.valueborderradius, 0),
    backgroundColor: e.valuebgcolor ? Y(e.valuebgcolor, a(e.valuebgalpha, e.valuealpha, 100)) : b,
    borderDash: a(e.valueborderdashed, 0) ? l(a(e.valueborderdashlen, 4), a(e.valueborderdashgap, 2), a(e.valueborderthickness, 1)) : "none"
   };
   n(p.plotOptions.series.dataLabels.style);
   p.plotOptions.series.dataLabels.color = p.plotOptions.series.dataLabels.style.color;
   p.tooltip.style = {
    fontFamily: Pa,
    fontSize: eb,
    lineHeight: xb,
    color: fb
   };
   p.title.style = {
    fontFamily: c(e.captionfont, bb),
    color: c(e.captionfontcolor, O).replace(/^#?([a-f0-9]+)/ig, "#$1"),
    fontSize: a(e.captionfontsize, W + 3) + Ga,
    fontWeight: 0 === a(e.captionfontbold) ? "normal" : "bold"
   };
   p.title.align = c(e.captionalignment, la);
   p.title.isOnTop = a(e.captionontop, 1);
   p.title.alignWithCanvas = a(e.aligncaptionwithcanvas, this.alignCaptionWithCanvas, 1);
   p.title.horizontalPadding = a(e.captionhorizontalpadding, p.title.alignWithCanvas ?
    0 : 15);
   n(p.title.style);
   p.subtitle.style = {
    fontFamily: c(e.subcaptionfont, e.captionfont, bb),
    color: c(e.subcaptionfontcolor, e.captionfontcolor, O).replace(/^#?([a-f0-9]+)/ig, "#$1"),
    fontSize: a(e.subcaptionfontsize, a(V(a(e.captionfontsize) - 3, -1), W) + a(this.subTitleFontSizeExtender, 1)) + Ga,
    fontWeight: 0 === a(e.subcaptionfontbold, this.subTitleFontWeight, e.captionfontbold) ? "normal" : "bold"
   };
   p.subtitle.align = p.title.align;
   p.subtitle.isOnTop = p.title.isOnTop;
   p.subtitle.alignWithCanvas = p.title.alignWithCanvas;
   p.subtitle.horizontalPadding =
    p.title.horizontalPadding;
   n(p.subtitle.style);
   K = (K = v(e.xaxisnamebordercolor, b)) ? Y(K, a(e.xaxisnameborderalpha, e.xaxisnamealpha, 100)) : b;
   I.title.style = {
    fontFamily: c(e.xaxisnamefont, bb),
    fontSize: c(e.xaxisnamefontsize, parseInt(wa, 10)) + Ga,
    color: Y(c(e.xaxisnamefontcolor, O), a(e.xaxisnamefontalpha, e.xaxisnamealpha, 100)),
    fontWeight: a(e.xaxisnamefontbold, 1) ? "bold" : "normal",
    fontStyle: a(e.xaxisnamefontitalic) ? "italic" : "normal",
    border: K || e.xaxisnamebgcolor ? a(e.xaxisnameborderthickness, 1) + "px solid" : void 0,
    borderColor: K,
    borderThickness: a(e.xaxisnameborderthickness, 1),
    borderPadding: a(e.xaxisnameborderpadding, 2),
    borderRadius: a(e.xaxisnameborderradius, 0),
    backgroundColor: e.xaxisnamebgcolor ? Y(e.xaxisnamebgcolor, a(e.xaxisnamebgalpha, e.xaxisnamealpha, 100)) : b,
    borderDash: a(e.xaxisnameborderdashed, 0) ? l(a(e.xaxisnameborderdashlen, 4), a(e.xaxisnameborderdashgap, 2), a(e.xaxisnameborderthickness, 1)) : "none"
   };
   n(I.title.style);
   K = (K = c(e.pyaxisnamebordercolor, e.yaxisnamebordercolor, b)) ? Y(K, a(e.pyaxisnameborderalpha, e.yaxisnameborderalpha,
    e.pyaxisnamealpha, e.yaxisnamealpha, 100)) : b;
   p.yAxis[0].title.style = {
    fontFamily: c(e.pyaxisnamefont, e.yaxisnamefont, bb),
    fontSize: c(e.pyaxisnamefontsize, e.yaxisnamefontsize, parseInt(wa, 10)) + Ga,
    color: Y(c(e.pyaxisnamefontcolor, e.yaxisnamefontcolor, O), a(e.pyaxisnamefontalpha, e.yaxisnamefontalpha, e.pyaxisnamealpha, e.yaxisnamealpha, 100)),
    fontWeight: a(e.pyaxisnamefontbold, e.yaxisnamefontbold, 1) ? "bold" : "normal",
    fontStyle: a(e.pyaxisnamefontitalic, e.yaxisnamefontitalic) ? "italic" : "normal",
    border: K || e.pyaxisnamebgcolor ||
     e.yaxisnamebgcolor ? a(e.pyaxisnameborderthickness, e.yaxisnameborderthickness, 1) + "px solid" : void 0,
    borderColor: K,
    borderThickness: a(e.pyaxisnameborderthickness, e.yaxisnameborderthickness, 1),
    borderPadding: a(e.pyaxisnameborderpadding, e.yaxisnameborderpadding, 2),
    borderRadius: a(e.pyaxisnameborderradius, e.yaxisnameborderradius, 0),
    backgroundColor: e.pyaxisnamebgcolor || e.yaxisnamebgcolor ? Y(c(e.pyaxisnamebgcolor, e.yaxisnamebgcolor), a(e.pyaxisnamebgalpha, e.yaxisnamebgalpha, e.pyaxisnamealpha, e.yaxisnamealpha, 100)) : b,
    borderDash: a(e.pyaxisnameborderdashed, e.yaxisnameborderdashed, 0) ? l(a(e.pyaxisnameborderdashlen, e.yaxisnameborderdashlen, 4), a(e.pyaxisnameborderdashgap, e.yaxisnameborderdashgap, 2), a(e.pyaxisnameborderthickness, e.yaxisnameborderthickness, 1)) : "none"
   };
   n(p.yAxis[0].title.style);
   p.yAxis[1].title.style = {
    fontFamily: bb,
    color: O,
    fontSize: wa,
    lineHeight: void 0,
    fontWeight: "bold"
   };
   K = (K = c(e.syaxisnamebordercolor, e.yaxisnamebordercolor, b)) ? Y(K, a(e.syaxisnameborderalpha, e.yaxisnameborderalpha, e.syaxisnamealpha, e.yaxisnamealpha,
    100)) : b;
   p.yAxis[1].title.style = {
    fontFamily: c(e.syaxisnamefont, e.yaxisnamefont, bb),
    fontSize: c(e.syaxisnamefontsize, e.yaxisnamefontsize, parseInt(wa, 10)) + Ga,
    color: Y(c(e.syaxisnamefontcolor, e.yaxisnamefontcolor, O), a(e.syaxisnamefontalpha, e.yaxisnamefontalpha, e.syaxisnamealpha, e.yaxisnamealpha, 100)),
    fontWeight: a(e.syaxisnamefontbold, e.yaxisnamefontbold, 1) ? "bold" : "normal",
    fontStyle: a(e.syaxisnamefontitalic, e.yaxisnamefontitalic) ? "italic" : "normal",
    border: K || e.syaxisnamebgcolor || e.yaxisnamebgcolor ? a(e.syaxisnameborderthickness,
     e.yaxisnameborderthickness, 1) + "px solid" : void 0,
    borderColor: K,
    borderThickness: a(e.syaxisnameborderthickness, e.yaxisnameborderthickness, 1),
    borderPadding: a(e.syaxisnameborderpadding, e.yaxisnameborderpadding, 2),
    borderRadius: a(e.syaxisnameborderradius, e.yaxisnameborderradius, 0),
    backgroundColor: e.syaxisnamebgcolor || e.yaxisnamebgcolor ? Y(c(e.syaxisnamebgcolor, e.yaxisnamebgcolor), a(e.syaxisnamebgalpha, e.yaxisnamebgalpha, e.syaxisnamealpha, e.yaxisnamealpha, 100)) : b,
    borderDash: a(e.syaxisnameborderdashed, e.yaxisnameborderdashed,
     0) ? l(a(e.syaxisnameborderdashlen, e.yaxisnameborderdashlen, 4), a(e.syaxisnameborderdashgap, e.yaxisnameborderdashgap, 2), a(e.syaxisnameborderthickness, e.yaxisnameborderthickness, 1)) : "none"
   };
   n(p.yAxis[1].title.style);
   B.overlapColumns = a(e[E && "overlapbars" || "overlapcolumns"], G ? 0 : 1);
   p.orphanStyles = {
    defaultStyle: {
     style: f({}, z.inCanvasStyle)
    },
    connectorlabels: {
     style: f({}, p.plotOptions.series.dataLabels)
    },
    vyaxisname: {
     style: f({}, p.yAxis[0].title.style)
    }
   };
   p.plotOptions.series.dataLabels.tlLabelStyle = {
    fontFamily: s(e.tlfont,
     Pa),
    color: fa(s(e.tlfontcolor, fb)),
    fontSize: L(e.tlfontsize, T) + "px"
   };
   n(p.plotOptions.series.dataLabels.tlLabelStyle);
   p.plotOptions.series.dataLabels.trLabelStyle = {
    fontFamily: s(e.trfont, Pa),
    color: fa(s(e.trfontcolor, fb)),
    fontSize: L(e.trfontsize, T) + "px"
   };
   n(p.plotOptions.series.dataLabels.trLabelStyle);
   p.plotOptions.series.dataLabels.blLabelStyle = {
    fontFamily: s(e.blfont, Pa),
    color: fa(s(e.blfontcolor, fb)),
    fontSize: L(e.blfontsize, T) + "px"
   };
   n(p.plotOptions.series.dataLabels.blLabelStyle);
   p.plotOptions.series.dataLabels.brLabelStyle = {
    fontFamily: s(e.brfont, Pa),
    color: fa(s(e.brfontcolor, fb)),
    fontSize: L(e.brfontsize, T) + "px"
   };
   n(p.plotOptions.series.dataLabels.brLabelStyle);
   this.parseStyles(p);
   delete p.xAxis.labels.style.backgroundColor;
   delete p.xAxis.labels.style.borderColor;
   delete p.yAxis[0].labels.style.backgroundColor;
   delete p.yAxis[0].labels.style.borderColor;
   delete p.yAxis[1].labels.style.backgroundColor;
   delete p.yAxis[1].labels.style.borderColor;
   z.showTooltip = a(e.showtooltip, this.showtooltip, 1);
   z.tooltipSepChar = c(e.tooltipsepchar,
    this.tooltipsepchar, Sb);
   z.showValues = a(e.showvalues, this.showValues, 1);
   z.seriesNameInToolTip = a(e.seriesnameintooltip, 1);
   z.showVLines = a(e.showvlines, 1);
   z.showVLinesOnTop = a(e.showvlinesontop, 0);
   z.showVLineLabels = a(e.showvlinelabels, this.showVLineLabels, 1);
   z.showVLineLabelBorder = a(e.showvlinelabelborder, 1);
   z.rotateVLineLabels = a(e.rotatevlinelabels, 0);
   z.vLineColor = c(e.vlinecolor, "333333");
   z.vLineLabelColor = c(e.vlinelabelcolor);
   z.vLineThickness = c(e.vlinethickness, 1);
   z.vLineAlpha = a(e.vlinealpha, 80);
   z.vLineLabelBgColor =
    c(e.vlinelabelbgcolor, "ffffff");
   z.vLineLabelBgAlpha = a(e.vlinelabelbgalpha, G ? 50 : 100);
   z.trendlineColor = c(e.trendlinecolor, "333333");
   z.trendlineThickness = c(e.trendlinethickness, 1);
   z.trendlineAlpha = a(e.trendlinealpha);
   z.showTrendlinesOnTop = c(e.showtrendlinesontop, 0);
   z.trendlineValuesOnOpp = c(e.trendlinevaluesonopp, e.trendlinevaluesonright, 0);
   z.trendlinesAreDashed = a(e.trendlinesaredashed, 0);
   z.trendlinesDashLen = a(e.trendlinedashlen, 5);
   z.trendlinesDashGap = a(e.trendlinedashgap, 2);
   z.showTrendlines = a(e.showtrendlines,
    1);
   z.showTrendlineLabels = a(e.showtrendlinelabels, this.showTrendlineLabels, 1);
   z.flatScrollBars = a(e.flatscrollbars, 0);
   z.scrollBar3DLighting = a(e.scrollbar3dlighting, 1);
   B.anchorTrackingRadius = a(e.anchortrackingradius, Ha ? oa : ga);
   p.plotOptions.series.connectNullData = a(e.connectnulldata, 0);
   B.backgroundColor = {
    FCcolor: {
     color: c(e.bgcolor, m.getColor(ja.bgColor)),
     alpha: c(e.bgalpha, m.getColor(ja.bgAlpha)),
     angle: c(e.bgangle, m.getColor(ja.bgAngle)),
     ratio: c(e.bgratio, m.getColor(ja.bgRatio))
    }
   };
   B.rotateValues = a(e.rotatevalues,
    0);
   B.placeValuesInside = a(e.placevaluesinside, 0);
   B.valuePosition = c(e.valueposition, "auto");
   B.valuePadding = a(e.valuepadding, 2);
   B.managePlotOverflow = a(e.manageplotoverflow, 1);
   B.borderColor = Y(c(e.bordercolor, G ? "#666666" : m.getColor("borderColor")), c(e.borderalpha, G ? "100" : m.getColor("borderAlpha")));
   H = a(e.showborder, G ? 0 : 1);
   B.borderWidth = H ? a(e.borderthickness, 1) : 0;
   B.borderRadius = a(e.borderradius, 0);
   B.borderDashStyle = a(e.borderdashed, 0) ? l(a(e.borderdashlen, 4), a(e.borderdashgap, 2), B.borderWidth) : "none";
   B.plotBorderColor =
    Y(c(e.canvasbordercolor, m.getColor("canvasBorderColor")), c(e.canvasborderalpha, m.getColor("canvasBorderAlpha")));
   "0" !== e.showcanvasborder && (ra = Boolean(c(e.canvasborderthickness, Ba ? 0 : 1)), "1" !== e.showaxislines && "1" !== e.showxaxisline && "1" !== e.showyaxisline && "1" !== e.showsyaxisline || "1" === e.showcanvasborder || (ra = 0));
   B.plotBorderWidth = G || !ra ? 0 : a(e.canvasborderthickness, this.canvasborderthickness, B.useRoundEdges ? 1 : 2);
   B.bgSWF = c(e.bgimage, e.bgswf);
   B.bgSWFAlpha = a(e.bgimagealpha, e.bgswfalpha, 100);
   Rb = c(e.bgimagedisplaymode,
    "none").toLowerCase();
   $a = s(e.bgimagevalign, b).toLowerCase();
   $ = s(e.bgimagehalign, b).toLowerCase();
   "tile" == Rb || "fill" == Rb || "fit" == Rb ? ($a != ya && "middle" != $a && $a != Ia && ($a = "middle"), $ != Ma && "middle" != $ && $ != ma && ($ = "middle")) : ($a != ya && "middle" != $a && $a != Ia && ($a = ya), $ != Ma && "middle" != $ && $ != ma && ($ = Ma));
   B.bgImageDisplayMode = Rb;
   B.bgImageVAlign = $a;
   B.bgImageHAlign = $;
   B.bgImageScale = a(e.bgimagescale, 100);
   B.logoURL = s(e.logourl);
   B.logoPosition = c(e.logoposition, "tl").toLowerCase();
   B.logoAlpha = a(e.logoalpha, 100);
   B.logoLink =
    s(e.logolink);
   B.logoScale = a(e.logoscale, 100);
   B.logoLeftMargin = a(e.logoleftmargin, 0);
   B.logoTopMargin = a(e.logotopmargin, 0);
   Jb = B.toolbar = {
    button: {}
   };
   Z = Jb.button;
   Z.scale = a(e.toolbarbuttonscale, 1.15);
   Z.width = a(e.toolbarbuttonwidth, 15);
   Z.height = a(e.toolbarbuttonheight, 15);
   Z.radius = a(e.toolbarbuttonradius, 2);
   Z.spacing = a(e.toolbarbuttonspacing, 5);
   Z.fill = Y(c(e.toolbarbuttoncolor, "ffffff"));
   Z.labelFill = Y(c(e.toolbarlabelcolor, "cccccc"));
   Z.symbolFill = Y(c(e.toolbarsymbolcolor, "ffffff"));
   Z.hoverFill = Y(c(e.toolbarbuttonhovercolor,
    "ffffff"));
   Z.stroke = Y(c(e.toolbarbuttonbordercolor, "bbbbbb"));
   Z.symbolStroke = Y(c(e.toolbarsymbolbordercolor, "9a9a9a"));
   Z.strokeWidth = a(e.toolbarbuttonborderthickness, 1);
   Z.symbolStrokeWidth = a(e.toolbarsymbolborderthickness, 1);
   Zb = Z.symbolPadding = a(e.toolbarsymbolpadding, 5);
   Z.symbolHPadding = a(e.toolbarsymbolhpadding, Zb);
   Z.symbolVPadding = a(e.toolbarsymbolvpadding, Zb);
   ca = Jb.position = c(e.toolbarposition, "tr").toLowerCase();
   switch (ca) {
   case "tr":
   case "rt":
   case "top right":
   case "right top":
    ca = "tr";
    break;
   case "br":
   case "rb":
   case "bottom right":
   case "right bottom":
    ca =
     "br";
    break;
   case "tl":
   case "lt":
   case "top left":
   case "left top":
    ca = "tl";
    break;
   case "bl":
   case "lb":
   case "bottom left":
   case "left bottom":
    ca = "bl";
    break;
   default:
    ca = "tr"
   }
   pa = Jb.hAlign = "left" === (b + e.toolbarhalign).toLowerCase() ? "l" : ca.charAt(1);
   qa = Jb.vAlign = "bottom" === (b + e.toolbarvalign).toLowerCase() ? "b" : ca.charAt(0);
   Jb.hDirection = a(e.toolbarhdirection, "r" === pa ? -1 : 1);
   Jb.vDirection = a(e.toolbarvdirection, "b" === qa ? -1 : 1);
   Jb.vMargin = a(e.toolbarvmargin, 6);
   Jb.hMargin = a(e.toolbarhmargin, 10);
   Jb.x = a(e.toolbarx, "l" ===
    pa ? 0 : h);
   Jb.y = a(e.toolbary, "t" === qa ? 0 : w);
   na = c(e.divlinecolor, m.getColor(ja.divLineColor));
   Ea = c(e.divlinealpha, G ? m.getColor("divLineAlpha3D") : m.getColor("divLineAlpha"));
   La = a(e.divlinethickness, 1);
   za = Boolean(a(e.divlinedashed, e.divlineisdashed, this.divLineIsDashed, 0));
   Aa = a(e.divlinedashlen, 4);
   Ya = a(e.divlinedashgap, 2);
   p.yAxis[0].gridLineColor = Y(na, Ea);
   p.yAxis[0].gridLineWidth = La;
   p.yAxis[0].gridLineDashStyle = za ? l(Aa, Ya, La) : "none";
   p.yAxis[0].alternateGridColor = E ? Y(c(e.alternatevgridcolor, m.getColor("altVGridColor")),
    1 === a(e.showalternatevgridcolor, 1) ? c(e.alternatevgridalpha, m.getColor("altVGridAlpha")) : Na) : Y(c(e.alternatehgridcolor, m.getColor("altHGridColor")), "0" === e.showalternatehgridcolor ? 0 : c(e.alternatehgridalpha, m.getColor("altHGridAlpha")));
   oc = a(e.vdivlinethickness, 1);
   yc = Boolean(a(e.vdivlinedashed, e.vdivlineisdashed, 0));
   Fb = a(e.vdivlinedashlen, 4);
   tc = a(e.vdivlinedashgap, 2);
   I.gridLineColor = Y(c(e.vdivlinecolor, m.getColor(ja.divLineColor)), c(e.vdivlinealpha, m.getColor("divLineAlpha")));
   I.gridLineWidth = oc;
   I.gridLineDashStyle =
    yc ? l(Fb, tc, oc) : "none";
   I.alternateGridColor = Y(c(e.alternatevgridcolor, m.getColor("altVGridColor")), "1" === e.showalternatehgridcolor ? c(e.alternatevgridalpha, m.getColor("altVGridAlpha")) : 0);
   vb = c(e.canvasbgcolor, m.getColor(ja.canvasBgColor));
   rb = c(e.canvasbgalpha, m.getColor("canvasBgAlpha"));
   c(e.showcanvasbg, sb) == Na && (rb = "0");
   p.plotOptions.series.shadow = a(e.showshadow, e.showcolumnshadow, this.defaultPlotShadow, m.getColor("showShadow"));
   this.inversed && (p.yAxis[0].reversed = !0, p.yAxis[1].reversed = !0);
   this.isStacked &&
    (this.distributedColumns ? (z.showStackTotal = Boolean(a(e.showsum, 1)), A = a(e.usepercentdistribution, 1), Ua = a(e.showpercentvalues, 0), ib = a(e.showpercentintooltip, A, 0), z.showXAxisPercentValues = a(e.showxaxispercentvalues, 1)) : (z.showStackTotal = Boolean(a(this.showSum, e.showsum, 0)), A = a(this.stack100percent, e.stack100percent, 0), Ua = a(e.showpercentvalues, A, 0), ib = a(e.showpercentintooltip, Ua)), z.showPercentValues = Ua, z.showPercentInToolTip = ib, A ? (z.isValueAbs = !0, ua[F].stacking = "percent", z[0].stacking100Percent = !0) :
     ua[F].stacking = "normal");
   this.isDual && ("0" === e.primaryaxisonleft && (p.yAxis[0].opposite = !0, p.yAxis[1].opposite = !1), p.yAxis[0].showAlways = !0, p.yAxis[1].showAlways = !0);
   B.useRoundEdges && (p.plotOptions.series.shadow = a(e.showshadow, e.showcolumnshadow, 1), p.plotOptions.series.borderRadius = 1, p.tooltip.style.borderRadius = "2px", B.plotBorderRadius = 3, ra || (B.plotBorderWidth = 0), B.plotShadow = p.plotOptions.series.shadow ? {
    enabled: !0,
    opacity: rb / 100
   } : 0);
   1 === a(e.use3dlighting, 1) && (p.legend.lighting3d = !0);
   p.plotOptions.series.userMaxColWidth =
    E ? e.maxbarheight : a(e.maxcolwidth, this.maxColWidth);
   p.plotOptions.series.maxColWidth = ta(a(p.plotOptions.series.userMaxColWidth, 50)) || 1;
   p.title.text = C(e.caption);
   p.subtitle.text = C(e.subcaption);
   0 === a(e.showtooltip, this.showtooltip) && (p.tooltip.enabled = !1);
   Ta = p.tooltip.style;
   Ta.backgroundColor = Y(c(Ta.backgroundColor, e.tooltipbgcolor, m.getColor("toolTipBgColor")), c(e.tooltipbgalpha, 100));
   Ta.borderColor = Y(c(Ta.borderColor, e.tooltipbordercolor, m.getColor("toolTipBorderColor")), c(e.tooltipborderalpha, 100));
   p.tooltip.shadow = a(e.showtooltipshadow, e.showshadow, 1) ? {
    enabled: !0,
    opacity: V(a(e.tooltipbgalpha, 100), a(e.tooltipborderalpha, 100)) / 100
   } : !1;
   p.tooltip.constrain = a(e.constraintooltip, 1);
   Ta.borderWidth = a(e.tooltipborderthickness, 1) + "px";
   e.tooltipborderradius && (Ta.borderRadius = a(e.tooltipborderradius, 1) + "px");
   Ta.padding = a(e.tooltippadding, this.tooltippadding, 3) + "px";
   e.tooltipcolor && (Ta.color = fa(e.tooltipcolor));
   z.userPlotSpacePercent = p.plotOptions.series.userPlotSpacePercent = e.plotspacepercent;
   yb = a(e.plotspacepercent,
    20) % 100;
   z.plotSpacePercent = p.plotOptions.series.groupPadding = yb / 200;
   G && !ha ? (B.series2D3Dshift = "mscombi3d" === J ? !0 : Boolean(a(e.use3dlineshift, 0)), B.canvasBaseColor3D = c(e.canvasbasecolor, m.getColor("canvasBaseColor3D")), B.canvasBaseDepth = a(e.canvasbasedepth, 10), B.canvasBgDepth = a(e.canvasbgdepth, 3), B.showCanvasBg = Boolean(a(e.showcanvasbg, 1)), B.showCanvasBase = Boolean(a(e.showcanvasbase, 1)), E ? (B.xDepth = 5, B.yDepth = 5, B.showCanvasBg && (z.marginTopExtraSpace += B.canvasBgDepth), z.marginLeftExtraSpace += B.yDepth +
     (B.showCanvasBase ? B.canvasBaseDepth : 0), z.marginBottomExtraSpace += 5) : (B.xDepth = 10, B.yDepth = 10, B.showCanvasBg && (z.marginRightExtraSpace += B.canvasBgDepth), z.marginBottomExtraSpace += B.yDepth + (B.showCanvasBase ? B.canvasBaseDepth : 0)), vb = vb.split(Ja)[0], rb = rb.split(Ja)[0], B.use3DLighting = Boolean(a(e.use3dlighting, 1)), B.plotBackgroundColor = B.use3DLighting ? {
     FCcolor: {
      color: aa(vb, 85) + Ja + sa(vb, 55),
      alpha: rb + Ja + rb,
      ratio: kb,
      angle: u(h - (B.marginLeft + B.marginRight), w - (B.marginTop + B.marginBottom), 1)
     }
    } : Y(vb, rb), B.canvasBgColor =
    Y(aa(vb, 80), rb), r = c(e.zeroplanecolor, e.divlinecolor, m.getColor(ja.divLineColor)), N = c(e.zeroplanealpha, e.divlinealpha, m.getColor("divLineAlpha")), B.zeroPlaneColor = Y(r, N), B.zeroPlaneBorderColor = Y(c(e.zeroplanebordercolor, r), a(e.zeroplaneshowborder, 1) ? N : 0), B.zeroPlaneShowBorder = a(e.zeroplaneshowborder, 1)) : (B.is3D = !1, B.plotBackgroundColor = {
    FCcolor: {
     color: vb,
     alpha: rb,
     angle: c(e.canvasbgangle, m.getColor("canvasBgAngle")),
     ratio: c(e.canvasbgratio, m.getColor("canvasBgRatio"))
    }
   });
   this.parseExportOptions(p);
   this.parseHoverEffectOptions(B);
   this.preSeriesAddition && this.preSeriesAddition(p, k, h, w);
   this.series && this.series(k, p, J, h, w);
   this.postSeriesAddition(p, k, h, w);
   this.spaceManager(p, k, h, w);
   this.postSpaceManager && this.postSpaceManager(p, k, h, w);
   wb = a(e.drawquadrant, 0);
   z.isXYPlot && wb && (Kb = I.min, Ca = I.max, sc = p.yAxis[0].min, uc = p.yAxis[0].max, vc = a(e.quadrantxval, (Kb + Ca) / 2), nc = a(e.quadrantyval, (sc + uc) / 2), nc >= sc && nc <= uc && vc >= Kb && vc <= Ca && (wc = Y(c(e.quadrantlinecolor, B.plotBorderColor), c(e.quadrantlinealpha, Wa)), lb =
    a(e.quadrantlinethickness, B.plotBorderWidth), Qb = a(e.quadrantlinedashed, e.quadrantlineisdashed, 0), Fc = a(e.quadrantlinedashLen, 4), Sa = a(e.quadrantlinedashgap, 2), hd = s(e.quadrantlabeltl, b), id = s(e.quadrantlabeltr, b), dc = s(e.quadrantlabelbl, b), jd = s(e.quadrantlabelbr, b), zc = a(e.quadrantlabelpadding, 3), kd = Qb ? l(Fc, Sa, lb) : "none", I.plotLines.push({
     color: wc,
     value: vc,
     width: lb,
     dashStyle: kd,
     zIndex: 3
    }), p.yAxis[0].plotLines.push({
     color: wc,
     value: nc,
     width: lb,
     dashStyle: kd,
     zIndex: 3
    }), Xc = h - B.marginRight - B.marginLeft, Wb = w -
    B.marginTop - B.marginBottom, pb = z.inCanvasStyle, va = Xc / (Ca - Kb) * (vc - Kb), Vb = Xc - va, Qa = Wb / (uc - sc) * (nc - sc), ec = Wb - Qa, va -= zc, Vb -= zc, ec -= zc, Qa -= zc, Cb = zc + Ga, Db = Wb - zc + Ga, Xb = zc + Ga, gc = Xc - zc + Ga, ba.setStyle(pb), 0 < ec && (hd !== b && 0 < va && (K = v(e.quadrantlabeltlbordercolor, e.quadrantlabelbordercolor, b), Eb = c(e.quadrantlabeltlbgcolor, e.quadrantlabelbgcolor), Lb = a(e.quadrantlabeltlborderthickness, e.quadrantlabelborderthickness, 1), K = K ? Y(K, a(e.quadrantlabeltlborderalpha, e.quadrantlabelborderalpha, e.quadrantlabeltlalpha, e.quadrantlabelalpha,
     100)) : b, Ub = {
     left: Xb,
     top: Cb,
     fontSize: c(a(e.quadrantlabeltlfontsize, e.quadrantlabelfontsize), parseInt(pb.fontSize, 10)) + Ga,
     lineHeight: pb.lineHeight,
     fontFamily: c(e.quadrantlabeltlfont, e.quadrantlabelfont, pb.fontFamily),
     color: Y(c(e.quadrantlabeltlfontcolor, e.quadrantlabelfontcolor, pb.color), a(e.quadrantlabeltlfontalpha, e.quadrantlabelfontalpha, 100)),
     fontWeight: a(e.quadrantlabeltlfontbold, e.quadrantlabelfontbold) ? "bold" : "normal",
     fontStyle: a(e.quadrantlabeltlfontitalic, e.quadrantlabelfontitalic) ? "italic" : "normal",
     border: K || Eb ? Lb + "px solid" : b,
     borderColor: K,
     borderThickness: Lb,
     borderPadding: a(e.quadrantlabeltlborderpadding, e.quadrantlabelborderpadding, 2),
     borderRadius: a(e.quadrantlabeltlborderradius, e.quadrantlabelborderradius, 0),
     backgroundColor: Eb ? Y(Eb, a(e.quadrantlabeltlbgalpha, e.quadrantlabelbgalpha, e.quadrantlabeltlalpha, e.quadrantlabelalpha, 100)) : b,
     borderDash: a(e.quadrantlabeltlborderdashed, e.quadrantlabelborderdashed, 0) ? l(a(e.quadrantlabeltlborderdashlen, e.quadrantlabelborderdashlen, 4), a(e.quadrantlabeltlborderdashgap,
      e.quadrantlabelborderdashgap, 2), Lb) : "none"
    }, n(Ub), ba.setStyle(Ub), Hb = ba.getSmartText(hd, va, ec), p.labels.items.push({
     html: Hb.text,
     title: Hb.title,
     zIndex: 3,
     vAlign: ya,
     style: Ub
    })), id !== b && 0 < Vb && (K = v(e.quadrantlabeltrbordercolor, e.quadrantlabelbordercolor, b), Eb = c(e.quadrantlabeltrbgcolor, e.quadrantlabelbgcolor), Lb = a(e.quadrantlabeltrborderthickness, e.quadrantlabelborderthickness, 1), K = K ? Y(K, a(e.quadrantlabeltrborderalpha, e.quadrantlabelborderalpha, e.quadrantlabeltralpha, e.quadrantlabelalpha, 100)) : b, Ub = {
     left: gc,
     top: Cb,
     fontSize: c(a(e.quadrantlabeltrfontsize, e.quadrantlabelfontsize), parseInt(pb.fontSize, 10)) + Ga,
     lineHeight: pb.lineHeight,
     fontFamily: c(e.quadrantlabeltrfont, e.quadrantlabelfont, pb.fontFamily),
     color: Y(c(e.quadrantlabeltrfontcolor, e.quadrantlabelfontcolor, pb.color), a(e.quadrantlabeltrfontalpha, e.quadrantlabelfontalpha, 100)),
     fontWeight: a(e.quadrantlabeltrfontbold, e.quadrantlabelfontbold) ? "bold" : "normal",
     fontStyle: a(e.quadrantlabeltrfontitalic, e.quadrantlabelfontitalic) ? "italic" : "normal",
     border: K ||
      Eb ? Lb + "px solid" : b,
     borderColor: K,
     borderThickness: Lb,
     borderPadding: a(e.quadrantlabeltrborderpadding, e.quadrantlabelborderpadding, 2),
     borderRadius: a(e.quadrantlabeltrborderradius, e.quadrantlabelborderradius, 0),
     backgroundColor: Eb ? Y(Eb, a(e.quadrantlabeltrbgalpha, e.quadrantlabelbgalpha, e.quadrantlabeltralpha, e.quadrantlabelalpha, 100)) : b,
     borderDash: a(e.quadrantlabeltrborderdashed, e.quadrantlabelborderdashed, 0) ? l(a(e.quadrantlabeltrborderdashlen, e.quadrantlabelborderdashlen, 4), a(e.quadrantlabeltrborderdashgap,
      e.quadrantlabelborderdashgap, 2), Lb) : "none"
    }, n(Ub), ba.setStyle(Ub), Hb = ba.getSmartText(id, va, ec), p.labels.items.push({
     html: Hb.text,
     textAlign: ma,
     title: Hb.title,
     zIndex: 3,
     vAlign: ya,
     style: Ub
    }))), 0 < Qa && (dc !== b && 0 < va && (K = v(e.quadrantlabelblbordercolor, e.quadrantlabelbordercolor, b), Eb = c(e.quadrantlabelblbgcolor, e.quadrantlabelbgcolor), Lb = a(e.quadrantlabelblborderthickness, e.quadrantlabelborderthickness, 1), K = K ? Y(K, a(e.quadrantlabelblborderalpha, e.quadrantlabelborderalpha, e.quadrantlabelblalpha, e.quadrantlabelalpha,
     100)) : b, Ub = {
     left: Xb,
     top: Db,
     fontSize: c(a(e.quadrantlabelblfontsize, e.quadrantlabelfontsize), parseInt(pb.fontSize, 10)) + Ga,
     lineHeight: pb.lineHeight,
     fontFamily: c(e.quadrantlabelblfont, e.quadrantlabelfont, pb.fontFamily),
     color: Y(c(e.quadrantlabelblfontcolor, e.quadrantlabelfontcolor, pb.color), a(e.quadrantlabelblfontalpha, e.quadrantlabelfontalpha, 100)),
     fontWeight: a(e.quadrantlabelblfontbold, e.quadrantlabelfontbold) ? "bold" : "normal",
     fontStyle: a(e.quadrantlabelblfontitalic, e.quadrantlabelfontitalic) ? "italic" : "normal",
     border: K || Eb ? Lb + "px solid" : b,
     borderColor: K,
     borderThickness: Lb,
     borderPadding: a(e.quadrantlabelblborderpadding, e.quadrantlabelborderpadding, 2),
     borderRadius: a(e.quadrantlabelblborderradius, e.quadrantlabelborderradius, 0),
     backgroundColor: Eb ? Y(Eb, a(e.quadrantlabelblbgalpha, e.quadrantlabelbgalpha, e.quadrantlabelblalpha, e.quadrantlabelalpha, 100)) : b,
     borderDash: a(e.quadrantlabelblborderdashed, e.quadrantlabelborderdashed, 0) ? l(a(e.quadrantlabelblborderdashlen, e.quadrantlabelborderdashlen, 4), a(e.quadrantlabelblborderdashgap,
      e.quadrantlabelborderdashgap, 2), Lb) : "none"
    }, n(Ub), ba.setStyle(Ub), Hb = ba.getSmartText(dc, va, ec), p.labels.items.push({
     html: Hb.text,
     textAlign: Ma,
     title: Hb.title,
     zIndex: 3,
     vAlign: Ia,
     style: Ub
    })), jd !== b && 0 < Vb && (K = v(e.quadrantlabelbrbordercolor, e.quadrantlabelbordercolor, b), Eb = c(e.quadrantlabelbrbgcolor, e.quadrantlabelbgcolor), Lb = a(e.quadrantlabelbrborderthickness, e.quadrantlabelborderthickness, 1), K = K ? Y(K, a(e.quadrantlabelbrborderalpha, e.quadrantlabelborderalpha, e.quadrantlabelbralpha, e.quadrantlabelalpha,
     100)) : b, Ub = {
     left: gc,
     top: Db,
     fontSize: c(a(e.quadrantlabelbrfontsize, e.quadrantlabelfontsize), parseInt(pb.fontSize, 10)) + Ga,
     lineHeight: pb.lineHeight,
     fontFamily: c(e.quadrantlabelbrfont, e.quadrantlabelfont, pb.fontFamily),
     color: Y(c(e.quadrantlabelbrfontcolor, e.quadrantlabelfontcolor, pb.color), a(e.quadrantlabelbrfontalpha, e.quadrantlabelfontalpha, 100)),
     fontWeight: a(e.quadrantlabelbrfontbold, e.quadrantlabelfontbold) ? "bold" : "normal",
     fontStyle: a(e.quadrantlabelbrfontitalic, e.quadrantlabelfontitalic) ? "italic" : "normal",
     border: K || Eb ? Lb + "px solid" : b,
     borderColor: K,
     borderThickness: Lb,
     borderPadding: a(e.quadrantlabelbrborderpadding, e.quadrantlabelborderpadding, 2),
     borderRadius: a(e.quadrantlabelbrborderradius, e.quadrantlabelborderradius, 0),
     backgroundColor: Eb ? Y(Eb, a(e.quadrantlabelbrbgalpha, e.quadrantlabelbgalpha, e.quadrantlabelbralpha, e.quadrantlabelalpha, 100)) : b,
     borderDash: a(e.quadrantlabelbrborderdashed, e.quadrantlabelborderdashed, 0) ? l(a(e.quadrantlabelbrborderdashlen, e.quadrantlabelborderdashlen, 4), a(e.quadrantlabelbrborderdashgap,
      e.quadrantlabelborderdashgap, 2), Lb) : "none"
    }, n(Ub), ba.setStyle(Ub), Hb = ba.getSmartText(jd, va, ec), p.labels.items.push({
     html: Hb.text,
     textAlign: ma,
     vAlign: Ia,
     title: Hb.title,
     zIndex: 3,
     style: Ub
    })))));
   if (this.hasVDivLine && (tb = a(e.showvdivlines, 0), fc = a(e.numvdivlines, 0) + 1, tb && (fc = z.x.catCount - 1), 1 < fc)) {
    db = I.min;
    lc = z.x.catCount - 1;
    Bb = I.max;
    Ib = lc / fc;
    Rc = !0;
    Zc = db;
    I.scroll && !isNaN(I.scroll.viewPortMax) && (Bb = I.scroll.viewPortMax);
    kc = c(e.vdivlinecolor, na);
    sd = a(e.vdivlinealpha, Ea);
    oc = a(e.vdivlinethickness, La);
    yc = a(e.vdivlinedashed,
     e.vdivlineisdashed, za);
    Fb = a(e.vdivlinedashlen, Aa);
    tc = a(e.vdivlinedashgap, Ya);
    (mc = a(e.showalternatevgridcolor, 0)) && (ld = Y(c(e.alternatevgridcolor, m.getColor("altVGridColor")), c(e.alternatevgridalpha, m.getColor("altVGridAlpha"))));
    for (Xa = Ib; Xa < lc; Xa += Ib, Rc = !Rc) Rc && mc && I.plotBands.push({
     isNumVDIV: !0,
     color: ld,
     from: Zc,
     to: Xa,
     zIndex: 1
    }), I.plotLines.push({
     isNumVDIV: !0,
     width: oc,
     color: Y(kc, sd),
     dashStyle: yc ? l(Fb, tc, oc) : "none",
     value: Xa,
     zIndex: 1
    }), Zc = Xa;
    Rc && mc && I.plotBands.push({
     isNumVDIV: !0,
     color: ld,
     from: Zc,
     to: Bb,
     zIndex: 1
    })
   }
   Q = B.marginTop;
   Ka = B.marginBottom;
   P = B.marginLeft;
   ea = B.marginRight;
   ia.canvasstartx = P;
   ia.canvasstarty = Q;
   ia.canvasendx = h - ea;
   ia.canvasendy = w - Ka;
   ia.canvaswidth = ia.canvasendx - ia.canvasstartx;
   ia.canvasheight = ia.canvasendy - ia.canvasstarty;
   p.legend && p.legend.enabled && "vertical" === p.legend.layout && (ia.legendstarty = Q + .5 * (z.height - Ka - Q - ia.legendheight) + (p.legend.y || 0), ia.legendendy = ia.legendstarty + ia.legendheight);
   G && B.xDepth > B.marginLeft && (B.marginLeft = B.xDepth);
   q.console && q.console.log && q.FC_DEV_ENVIRONMENT &&
    console.log(p);
   return p
  },
  parseHoverEffectOptions: function (b) {
   var d = this.dataObj.chart,
    h;
   b.showHoverEffect = d.showhovereffect;
   b.plotHoverEffect = a(d.plothovereffect, d.anchorhovereffect, b.showHoverEffect);
   h = b.plotHoverEffects = {
    enabled: b.plotHoverEffect
   };
   h.highlight = a(d.highlightonhover, d.highlightplotonhover, b.plotHoverEffect);
   h.columnHighlight = a(h.highlight, d.highlightcolumnonhover, d.highlightbaronhover);
   h.anchorHighlight = a(h.highlight, d.highlightanchoronhover);
   h.imageHighlight = a(h.highlight, d.highlightanchorimageonhover);
   h.anchorImageHoverAlpha = c(d.anchorimagehoveralpha);
   h.anchorImageHoverScale = c(d.anchorimagehoverscale);
   h.bubbleHighlight = a(h.highlight, d.highlightbubbleonhover);
   h.color = c(d.plotfillhovercolor, d.columnhovercolor, d.barhovercolor, d.bubblehovercolor);
   h.alpha = c(d.plotfillhoveralpha, d.columnhoveralpha, d.barhoveralpha, d.bubblehoveralpha);
   h.scale = c(d.plothoverscale, d.columnhoverscale, d.barhoverscale, d.bubblehoverscale);
   h.gradientColor = d.plothovergradientcolor;
   h.ratio = d.plothoverratio;
   h.angle = d.plothoverangle;
   h.borderColor = d.plotborderhovercolor;
   h.borderAlpha = d.plotborderhoveralpha;
   h.borderThickness = d.plotborderhoverthickness;
   h.borderDashed = d.plotborderhoverdashed;
   h.borderDashGap = d.plotborderhoverdashgap;
   h.borderDashLen = d.plotborderhoverdashlen;
   h.shadow = d.plothovershadow;
   h.anchorScale = d.anchorhoverscale;
   h.anchorSides = d.anchorhoversides;
   h.anchorRadius = d.anchorhoverradius;
   h.anchorAlpha = d.anchorhoveralpha;
   h.anchorBgColor = c(d.anchorbghovercolor, d.anchorhovercolor);
   h.anchorBgAlpha = d.anchorbghoveralpha;
   h.anchorBorderColor =
    d.anchorborderhovercolor;
   h.anchorBorderAlpha = d.anchorborderhoveralpha;
   h.anchorBorderThickness = d.anchorborderhoverthickness;
   h.anchorStartAngle = d.anchorhoverstartangle;
   h.anchorDip = a(d.anchorhoverdip);
   h.anchorAnimation = a(d.anchorhoveranimation, 1);
   h.negativeColor = c(d.negativehovercolor, d.negativecolor);
   h.is3DBubble = a(d.is3donhover)
  },
  parseExportOptions: function (d) {
   var h = this.chartInstance,
    g = this.dataObj.chart;
   f(d.exporting, {
    enabled: a(g.exportenabled, 0),
    bgcolor: h.jsVars.transparent || 0 === a(h.options.containerBackgroundOpacity,
     1) ? b : h.options.containerBackgroundColor || "#ffffff",
    bgalpha: (h.jsVars.transparent ? 0 : a(h.options.containerBackgroundOpacity, 1)) + b,
    exporttargetwindow: c(g.exporttargetwindow, Qb ? "_blank" : "_self"),
    exportaction: g.exportaction && "save" === g.exportaction.toString().toLowerCase() && "save" || "download",
    exportfilename: c(g.exportfilename, "FusionCharts"),
    exporthandler: c(g.html5exporthandler, g.exporthandler, I),
    exportparameters: c(g.exportparameters, b),
    exportformat: c(g.exportformat, "PNG"),
    exportcallback: c(g.exportcallback,
     b),
    exportwithimages: a(g.exportwithimages, 0),
    buttons: {
     printButton: {
      enabled: !!a(g.printshowbutton, g.showprintmenuitem, 0)
     },
     exportButton: {
      enabled: !(!a(g.exportenabled, 0) || !a(g.exportshowbutton, g.exportshowmenuitem, 1))
     }
    }
   });
   var h = d.exporting,
    u;
   g = g.exportformats;
   d = B(d.exporting.exportaction);
   d = {
    JPG: d + " as JPEG image",
    PNG: d + " as PNG image",
    PDF: d + " as PDF document",
    SVG: d + " as SVG vector image"
   };
   var e, l, n;
   if (g) {
    g = g.split(/\s*?\|\s*?/);
    for (n = 0; n < g.length; n++) l = (e = g[n].split(/\s*?=\s*?/)) && e[0].toUpperCase() ||
     b, e = e && e[1] || b, d[l] && (u || (u = {})) && (u[l] = e || d[l]);
    u = u || d
   }
   else u = d;
   h.exportformats = u
  },
  defaultSeriesType: b,
  paletteIndex: 1,
  creditLabel: Fb,
  titleSpaceManager: bb,
  placeLegendBlockBottom: Rb,
  configureLegendOptions: Zb,
  placeLegendBlockRight: P,
  placeHorizontalAxis: xb,
  placeVerticalAxis: Mb,
  placeHorizontalCanvasMarginAdjustment: Tb,
  placeVerticalCanvasMarginAdjustment: Ra,
  placeHorizontalXYSpaceManager: function (b, d, h, f) {
   var e = b[g],
    u, l, n, k, m = d.chart,
    p, D, G, r, q, s, v, N = b.chart,
    z = e.marginLeftExtraSpace,
    A = e.marginTopExtraSpace,
    ba = e.marginBottomExtraSpace,
    C = e.marginRightExtraSpace;
   k = h - (z + C + N.marginRight + N.marginLeft);
   var F = f - (ba + N.marginBottom + N.marginTop),
    ha = .3 * k;
   h = .3 * F;
   var B = b.xAxis.showLine ? b.xAxis.lineThickness : 0;
   n = b.yAxis[0].showLine ? b.yAxis[0].lineThickness : 0;
   u = k - ha;
   f = F - h;
   p = c(m.legendposition, Ia).toLowerCase();
   b.legend.enabled && p === ma && (u -= this.placeLegendBlockRight(b, d, u / 2, F));
   q = a(m.xaxisnamepadding, 5);
   s = a(m.labelpadding, 4);
   v = c(m.rotatexaxisname, "ccw");
   v = v === Na ? "none" : v;
   D = c(m.showplotborder, e.is3d ? Na : sb) === sb;
   D = e.plotBorderThickness =
    D ? e.is3d ? 1 : a(m.plotborderthickness, 1) : 0;
   G = V(a(N.plotBorderWidth, 1), 0);
   !e.isDual && N.marginRight < G && void 0 === m.chartrightmargin && (l = G - N.marginRight, k > ha + l && (N.marginRight = G, k -= l, ha = .3 * k, u = k - ha));
   l = e.x;
   r = V(G, D / 2);
   s < r && (s = r);
   l.verticalAxisNamePadding = q;
   l.verticalAxisValuesPadding = s + B;
   l.rotateVerticalAxisName = v;
   l.verticalAxisNameWidth = a(m.xaxisnamewidth);
   u -= Mb(b.xAxis, l, b, d, F, u, !1, !1, k);
   b.xAxis.lineEndExtension = n;
   u -= Tb(b, d, u, b.xAxis);
   k = u + ha;
   b.legend.enabled && p !== ma && (f -= this.placeLegendBlockBottom(b, d,
    k, f / 2));
   f -= this.titleSpaceManager(b, d, k, f / 2);
   l = e[0];
   l.horizontalAxisNamePadding = a(m.yaxisnamepadding, 5);
   l.horizontalLabelPadding = V(a(m.yaxisvaluespadding, 4)) + n;
   l.labelDisplay = "auto";
   l.staggerLines = a(m.staggerlines, 2);
   l.slantLabels = a(m.slantlabels, 0);
   l.horizontalLabelPadding = l.horizontalLabelPadding < G ? G : l.horizontalLabelPadding;
   this.xAxisMinMaxSetter(b, d, k);
   n = b.xAxis;
   q = n.plotLines;
   u = f / (n.max - n.min);
   q && q.length && (G = (q[0].value - n.min) * u, q = (n.max - q[q.length - 1].value) * u, e.isBar && (D > G && (n.min -= (D - G) / (2 *
    u)), D > q && (n.max += (D - q) / (2 * u))));
   f -= this.placeHorizontalAxis(b.yAxis[0], l, b, d, k, f, ha);
   f -= Ra(b, d, f, b.yAxis[0]);
   ea(h + f, b, m, b.xAxis, e.x.lYLblIdx, !0);
   ub(b, b.xAxis.title, f);
   b.legend.enabled && p === ma && (b = b.legend, d = h + f, b.height > d && (b.height = d, b.scroll.enabled = !0, d = (b.scroll.scrollBarWidth = 10) + (b.scroll.scrollBarPadding = 2), b.width += d, N.marginRight += d), b.y = 20);
   N.marginLeft += z;
   N.marginTop += A;
   N.marginBottom += ba;
   N.marginRight += C
  },
  placeVerticalXYSpaceManager: function (b, d, h, f) {
   var e = b[g],
    u, l, n = !0;
   u = 0;
   var k = d.chart,
    m = !1,
    p, D, G, r, q = b.chart,
    s, v, N, z = e.marginLeftExtraSpace,
    A = e.marginTopExtraSpace,
    ba = e.marginBottomExtraSpace,
    C = e.marginRightExtraSpace;
   r = h - (z + C + q.marginRight + q.marginLeft);
   var ha = f - (ba + q.marginBottom + q.marginTop),
    F = .3 * r;
   f = .3 * ha;
   var B = r - F;
   h = ha - f;
   u = e.drawFullAreaBorder = a(k.drawfullareaborder, 1);
   var E = c(k.legendposition, Ia).toLowerCase();
   s = b.xAxis.showLine ? b.xAxis.lineThickness : 0;
   v = b.yAxis[0].showLine ? b.yAxis[0].lineThickness : 0;
   N = e.isDual && b.yAxis[1].showLine ? b.yAxis[1].lineThickness : 0;
   p = a(k.yaxisnamepadding,
    5);
   D = a(k.yaxisvaluespadding, k.labelypadding, 4);
   l = c(k.showplotborder, e.is3d ? Na : sb) === sb;
   l = e.plotBorderThickness = l ? e.is3d ? 1 : a(k.plotborderthickness, 1) : 0;
   G = V(a(q.plotBorderWidth, 1), 0);
   l = V(G, l / 2);
   "area" !== this.defaultSeriesType || u || (l = G);
   D < G && (D = G);
   !e.isDual && q.marginRight < G && void 0 === k.chartrightmargin && (u = G - b.chart.marginRight, r > F + u && (r -= u, F = .3 * r, B = r - F));
   b.legend.enabled && E === ma && (B -= this.placeLegendBlockRight(b, d, B / 2, ha));
   e.isDual && (m = !0, u = e[1], n = b.yAxis[1].opposite, G = c(k.rotateyaxisname, n ? "cw" : "ccw"),
    G = G === Na ? "none" : G, u.verticalAxisNamePadding = p, u.verticalAxisValuesPadding = D + N, u.rotateVerticalAxisName = G, u.verticalAxisNameWidth = a(k.syaxisnamewidth), B -= Mb(b.yAxis[1], u, b, d, ha, B / 2, n, m));
   u = e[0];
   n = !n;
   G = c(k.rotateyaxisname, n ? "cw" : "ccw");
   G = G === Na ? "none" : G;
   u.verticalAxisNamePadding = p;
   u.verticalAxisValuesPadding = D + v;
   u.rotateVerticalAxisName = G;
   u.verticalAxisNameWidth = a(m ? k.pyaxisnamewidth : k.yaxisnamewidth);
   B -= Mb(b.yAxis[0], u, b, d, ha, B, n, m, r);
   B -= Tb(b, d, B, b.yAxis[0], b.yAxis[1]);
   n = B + F;
   b.legend.enabled && E !==
    ma && (h -= this.placeLegendBlockBottom(b, d, n, h / 2));
   h -= this.titleSpaceManager(b, d, n, h / 2);
   u = e.x;
   u.horizontalAxisNamePadding = a(k.xaxisnamepadding, 5);
   u.horizontalLabelPadding = a(k.labelpadding, k.labelxpadding, 4) + s;
   u.labelDisplay = c(k.labeldisplay, "auto").toLowerCase();
   u.rotateLabels = a(k.rotatelabels, k.rotatexaxislabels, 0);
   u.staggerLines = a(k.staggerlines, 2);
   u.slantLabels = a(k.slantlabels, k.slantlabel, 0);
   b.yAxis[0].opposite ? (b.xAxis.lineEndExtension = v, b.xAxis.lineStartExtension = N) : (b.xAxis.lineEndExtension = N,
    b.xAxis.lineStartExtension = v);
   u.horizontalLabelPadding < l && (u.horizontalLabelPadding = l);
   r = {
    left: 0,
    right: 0
   };
   r = q.managePlotOverflow && this.canvasPaddingModifiers && this.calculateCanvasOverflow(b, !0) || r;
   s = r.left + r.right;
   v = .6 * n;
   s > v && (N = r.left / s, r.left -= N * (s - v), r.right -= (1 - N) * (s - v));
   this.xAxisMinMaxSetter(b, d, n, r.left, r.right);
   h -= this.placeHorizontalAxis(b.xAxis, u, b, d, n, h, F);
   h -= Ra(b, d, h, b.xAxis);
   b.title.alignWithCanvas || ("left" === b.title.align && b.yAxis[0].title.text && $a(b, b.yAxis[0].title, f + h), "right" ===
    b.title.align && m && b.yAxis[1].title.text && $a(b, b.yAxis[1].title, f + h));
   m && (ea(f + h, b, k, b.yAxis[1], e[1].lYLblIdx), ub(b, b.yAxis[1].title, f + h));
   ea(f + h, b, k, b.yAxis[0], e[0].lYLblIdx);
   ub(b, b.yAxis[0].title, f + h);
   b.legend.enabled && E === ma && (b = b.legend, d = f + h, b.height > d && "gradient" !== b.type && (b.height = d, b.scroll.enabled = !0, d = (b.scroll.scrollBarWidth = 10) + (b.scroll.scrollBarPadding = 2), b.width += d, q.marginRight += d));
   q.marginLeft += z;
   q.marginTop += A;
   q.marginBottom += ba;
   q.marginRight += C
  },
  placeVerticalAxisTitle: ub,
  calculateCanvasOverflow: function (a,
   c) {
   for (var d = this.canvasPaddingModifiers, h = a.chart, e = this.smartLabel, g = 0, f = 0, u = 0, l = 0, n = g = !1, k = !1, m = d && d.length || 0, p, D, G, r, q; m--;) switch (f = d[m], f) {
   case "anchor":
    n = D = g = !0;
    break;
   case "anchorlabel":
    G = D = g = !0;
    break;
   case "errorbar":
    k = g = !0
   }
   if (g && (m = (d = a.series) && d.length || 0, c))
    for (; m--;) p = d[m], D && (g = p && p.data || [], 1 < g.length && (r = g[0], q = g[g.length - 1], n && (g = r && r.marker && r.marker.enabled && (r.marker.radius || 0) + (r.marker.lineWidth || 0) || 0, f = q && q.marker && q.marker.enabled && (q.marker.radius || 0) + (q.marker.lineWidth ||
     0) || 0, u = V(g + 2, u), l = V(f + 2, l)), G && (e.setStyle(a.plotOptions.series.dataLabels.style), h.rotateValues ? (f = e.getOriSize(r && r.displayValue || b), g = f.height / 2, f = e.getOriSize(q && q.displayValue || b), f = f.height / 2) : (f = e.getOriSize(r && r.displayValue || b), g = f.width / 2, f = e.getOriSize(q && q.displayValue || b), f = f.width / 2), u = V(g + 2, u), l = V(f + 2, l)))), k && (f = g = p.errorBarWidth / 2 + p.errorBarThickness || 0, u = V(g + 2, u), l = V(f + 2, l));
   return {
    left: u,
    right: l
   }
  },
  spaceManager: function () {
   return this.placeVerticalXYSpaceManager.apply(this, arguments)
  },
  axisMinMaxSetter: function (b, c, d, h, e, g, f, u) {
   d = c.stacking100Percent ? ra(99, 1, 100, 0, e, g, f, u) : ra(a(c.max, d), a(c.min, h), d, h, e, g, f, u);
   b.min = Number(F(d.Min, 10));
   b.max = Number(F(d.Max, 10));
   b.tickInterval = Number(F(d.divGap, 10));
   c.numdivlines = r.round((b.max - b.min) / b.tickInterval) - 1;
   2 >= d.Range / d.divGap && (b.alternateGridColor = Ea);
   this.highValue = c.max;
   this.lowValue = c.min;
   delete c.max;
   delete c.min
  },
  configurePlotLines: function (d, h, f, u, e, l, n, k, m, p, D) {
   var G = f.min,
    r = f.max,
    q = f.tickInterval,
    s = p ? "xAxis" : u.stacking100Percent ?
    "percentValue" : "yAxis",
    v = G,
    N = 1,
    z = f.gridLineColor,
    A = f.gridLineWidth,
    ba = f.gridLineDashStyle,
    C = 0 > G && 0 < r ? !0 : !1,
    ha = 0 === G,
    B = 0 === r,
    E = 0 === a(u.showzeroplanevalue, d.showzeroplanevalue),
    ua = !0,
    H, ja = 1,
    I = 0 < a(d.numdivlines, 0),
    ra = h[g].axisGridManager,
    K = this.colorManager,
    Ba = this.is3D,
    ia = a(d.showaxislimitgridlines, this.showAxisLimitGridLines),
    Ba = a(ia, Ba || h.chart.plotBorderWidth ? 0 : 1),
    Ha = this.inversed;
   h = h.xAxis;
   D = a(D, m ? 1 : 0);
   delete f._altGrid;
   delete f._lastValue;
   p && !u.catOccupied && (u.catOccupied = {});
   !C || p && u.catOccupied[0] ||
    (p ? (ua = a(d.showvzeroplane, 1), H = a(d.showvzeroplanevalue, l), I = a(d.vzeroplanethickness, 1), K = c(d.vzeroplanealpha, d.vdivlinealpha, K.getColor("divLineAlpha")), d = 0 < I ? Y(c(d.vzeroplanecolor, z), K) : Ea) : (K = a(d.divlinealpha, K.getColor("divLineAlpha")), H = a(u.showzeroplanevalue, d.showzeroplanevalue, l), !1 === this.defaultZeroPlaneHighlighted ? (ua = a(u.showzeroplane, d.showzeroplane, !(this.defaultZeroPlaneHidden && !I)), I = A) : (I = 1 === A ? 2 : A, ja = 5, K = $(2 * K, 100)), I = a(u.zeroplanethickness, d.zeroplanethickness, I), K = c(u.zeroplanealpha,
     d.zeroplanealpha, K), d = 0 < I ? Y(c(u.zeroplanecolor, d.zeroplanecolor, z), K) : Ea), ua && (H = H ? k[s](0, D) : b, (ja = ra.addAxisGridLine(f, 0, H, I, ba, d, ja, p)) && (ja.isZeroPlane = !0)), f.effectiveZeroPlaneThickness = ua && parseInt(K, 10) && I);
   p && u.catOccupied[G] || (H = !e || ha && E ? b : k[s](G, D), (ja = ia || Ba && (Ha || !h.showLine) ? ra.addAxisGridLine(f, G, H, A, ba, z || Ea, 2, p) : ra.addAxisGridLine(f, G, H, .1, void 0, Ea, 2, p)) && (ja.isMinLabel = !0));
   0 >= A && (A = .1, z = Ea);
   for (G = Number(F(v + q, 10)); G < r; G = Number(F(G + q, 10)), N += 1) C && 0 > v && 0 < G && !m && (ra.addAxisAltGrid(f,
    0), N += 1), 0 === G || p && u.catOccupied[G] || (H = 1 === l && 0 === N % n ? k[s](G, D) : b, ra.addAxisGridLine(f, G, H, A, ba, z, 2, p)), v = G, m || ra.addAxisAltGrid(f, G);
   m || ra.addAxisAltGrid(f, r);
   0 !== N % n || p && u.catOccupied[r] || (H = !e || B && E ? b : k[s](r, D), (ja = ia || Ba && (!Ha || !h.showLine) ? ra.addAxisGridLine(f, r, H, A, ba, z || Ea, 2, p) : ra.addAxisGridLine(f, r, H, .1, ba, Ea, 2, p)) && (ja.isMaxLabel = !0));
   this.realtimeEnabled && (f.labels._enabled = f.labels.enabled, f._gridLineWidth = f.gridLineWidth, f._alternateGridColor = f.alternateGridColor);
   f.labels.enabled = !1;
   f.gridLineWidth = 0;
   f.alternateGridColor = Ea;
   f.plotLines.sort(Jb)
  },
  xAxisMinMaxSetter: function (b, c, d, h, e) {
   var f = b[g],
    u = f.x,
    l = c.chart,
    n = u.min = a(u.min, 0),
    k = u.max = a(u.max, u.catCount - 1),
    m = 0,
    p = 0,
    D = b.chart.defaultSeriesType,
    G = /^(column|column3d|bar|bar3d|floatedcolumn|sparkwinloss|boxandwhisker2d|dragcolumn)$/.test(D),
    r = /^(line|area|spline|areaspline)$/.test(D),
    D = /^(scatter|bubble|candlestick|dragnode)$/.test(D),
    q = b.xAxis,
    s = q.scroll,
    v = s && s.enabled,
    N = a(l.canvaspadding),
    z = W(N),
    A = za($(a(N, h, 0), d / 2 - 10)),
    N = za($(a(N,
     e, 0), d / 2 - 10)),
    ba, C, ha, F;
   u.adjustMinMax && (ba = a(l.setadaptivexmin, 1), k = n = !ba, C = a(this.numVDivLines, l.numvdivlines, 4), ha = l.adjustvdiv !== Na, F = a(l.showxaxisvalues, l.showxaxisvalue, 1), ba = a(l.showvlimits, F), F = a(l.showvdivlinevalue, l.showvdivlinevalues, F), this.axisMinMaxSetter(q, u, l.xaxismaxvalue, l.xaxisminvalue, n, k, C, ha), n = q.min, k = q.max, u.requiredAutoNumericLabels && (C = a(parseInt(l.xaxisvaluesstep, 10), 1), this.configurePlotLines(l, b, q, u, ba, F, 1 > C ? 1 : C, f.numberFormatter, !1, !0)), q.plotLines.sort(Jb));
   q.labels.enabled = !1;
   q.gridLineWidth = 0;
   q.alternateGridColor = Ea;
   (G || f.isScroll) && !f.hasNoColumn && !z && W(h) && W(e) && (p = d / (k - n + 1) * .5, A = 0 < p - h ? 0 : A, N = 0 < p - e ? 0 : N, m = 0 < p - h ? .5 : 0, p = 0 < p - e ? .5 : 0);
   G && !f.hasNoColumn && (p = m = .5);
   f.is3d && (A += a(b.chart.xDepth, 0));
   b = (d - (A + N)) / ((v ? s.vxLength : k) - n + (m + p));
   q.min = n - (m + A / b);
   q.max = k + (p + N / b);
   v && (m = s.vxLength, b = q.max - q.min, s.viewPortMin = q.min, s.viewPortMax = q.max, s.scrollRatio = m / b, s.flatScrollBars = f.flatScrollBars, s.scrollBar3DLighting = f.scrollBar3DLighting, q.max = q.min + m);
   r && q.min === q.max && (q.min -=
    .65, q.max += .65);
   D && c.vtrendlines && K(c.vtrendlines, q, f, !1, !0, !0)
  },
  postSeriesAddition: function (b) {
   var d = b[g],
    h = d.isBar,
    u = d.is3d,
    e = b.chart.rotateValues && !h ? 270 : 0,
    l = d[0],
    n = l && l.stacking100Percent,
    k, m, D, G, q, r, s, N, v, z, A, ba, C, F, ha, B, E, ua, H, I, ra, ja, K;
   if (this.isStacked)
    for (D in k = d.plotSpacePercent, m = b.chart.defaultSeriesType, k = 1 - 2 * k, B = b.series, E = this.numberFormatter, ra = f({}, b.plotOptions.series.dataLabels.style), ja = parseFloat(ra.fontSize), K = !l.stacking100Percent, ra.color = b.plotOptions.series.dataLabels.color,
     G = l.stack, G) {
     l = G[D].length;
     q = k / l;
     s = -(k - q) / 2;
     F = [];
     ba = 0;
     for (N = B.length; ba < N; ba += 1) v = B[ba], v.yAxis || c(v.type, m) !== D || F.push(v);
     for (r = 0; r < l; r += 1, s += q) {
      A = G[D][r];
      ha = [];
      ba = 0;
      for (N = F.length; ba < N; ba += 1) v = F[ba], a(v.columnPosition, 0) === r && ha.push(v.data);
      if (A && A.length)
       for (z = 0, v = A.length; z < v; z += 1)
        if (ba = A[z])
         for (C = (ba.n || 0) + (ba.p || 0), d.showStackTotal && (N = z, N += s, ba = 0 > C ? ba.n : ba.p, b.xAxis.plotLines.push({
           value: N,
           width: 0,
           isVline: K,
           isTrend: !K,
           zIndex: 4,
           _isStackSum: 1,
           _catPosition: z,
           _stackIndex: r,
           label: {
            align: la,
            textAlign: u ||
             270 !== e ? h ? 0 > C ? ma : Ma : la : 0 > C ? ma : Ma,
            offsetScale: K ? ba : void 0,
            offsetScaleIndex: 0,
            rotation: e,
            style: ra,
            verticalAlign: ya,
            y: h ? 0 : 0 > C ? 270 === e ? 4 : ja : -4,
            x: 0,
            text: d.numberFormatter.yAxis(C)
           }
          })), ba = 0, N = ha.length; ba < N; ba += 1)
          if (H = ha[ba][z])
           if (I = C && (H.y || 0) / C * 100, ua = E.percentValue(I), H.toolText = p(H.toolText, [14, 24, 25, 112], {
             percentValue: ua,
             sum: E.dataLabels(C),
             unformattedSum: C
            }), H.y || 0 === H.y) n && (H.y = I, H.previousY || 0 === H.previousY) && (H.previousY = H.previousY / C * 100), H.showPercentValues && (H.displayValue = ua)
     }
    }
  },
  styleMapForFont: ia,
  styleApplicationDefinition_font: function (a, b, c) {
   var d, e, h = !1,
    f, u, l = this.styleMapForFont;
   switch (b) {
   case "caption":
    d = a.title;
    break;
   case "datalabels":
    d = a.xAxis.labels;
    break;
   case "datavalues":
    d = a.plotOptions.series.dataLabels;
    h = !0;
    break;
   case "tldatavalues":
    d = {
     style: a.plotOptions.series.dataLabels.tlLabelStyle
    };
    break;
   case "trdatavalues":
    d = {
     style: a.plotOptions.series.dataLabels.trLabelStyle
    };
    break;
   case "bldatavalues":
    d = {
     style: a.plotOptions.series.dataLabels.blLabelStyle
    };
    break;
   case "brdatavalues":
    d = {
     style: a.plotOptions.series.dataLabels.brLabelStyle
    };
    break;
   case "subcaption":
    d = a.subtitle;
    break;
   case "tooltip":
    d = a.tooltip;
    break;
   case "trendvalues":
    d = {
     style: a[g].trendStyle
    };
    break;
   case "xaxisname":
    d = a.xAxis.title;
    break;
   case "yaxisname":
   case "pyaxisname":
   case "axistitle":
    d = [];
    b = 0;
    for (f = a.yAxis.length; b < f; b += 1) d.push(a.yAxis[b].title);
    break;
   case "yaxisvalues":
    d = [];
    b = 0;
    for (f = a.yAxis.length; b < f; b += 1) d.push(a.yAxis[b].labels);
    break;
   case "vlinelabels":
    d = {
     style: a[g].divlineStyle
    };
    break;
   case "legend":
    d = {
     style: a.legend.itemStyle
    };
    break;
   default:
    (d = a.orphanStyles[b]) ||
    (a.orphanStyles[b] = d = {
     text: "",
     style: {}
    })
   }
   if ("object" === typeof d)
    if (d instanceof Array)
     for (b = 0, f = d.length; b < f; b += 1) {
      u = d[b];
      for (e in c)
       if (a = e.toLowerCase(), "function" === typeof l[a]) l[a](c[e], u, h);
      n(u.style)
     }
    else {
     for (e in c)
      if (a = e.toLowerCase(), "function" === typeof l[a]) l[a](c[e], d, h);
     n(d.style)
    }
  },
  parseStyles: function (a) {
   var b, c, d, e = {},
    h, g = this.dataObj;
   if (g.styles && g.styles.definition instanceof Array && g.styles.application instanceof Array) {
    for (b = 0; b < g.styles.definition.length; b += 1) c = g.styles.definition[b],
     c.type && c.name && this["styleApplicationDefinition_" + c.type.toLowerCase()] && (e[c.name.toLowerCase()] = c);
    for (b = 0; b < g.styles.application.length; b += 1)
     for (c = g.styles.application[b].styles && g.styles.application[b].styles.split(Ja) || [], h = 0; h < c.length; h += 1)
      if (d = c[h].toLowerCase(), e[d] && g.styles.application[b].toobject) this["styleApplicationDefinition_" + e[d].type.toLowerCase()](a, g.styles.application[b].toobject.toLowerCase(), e[d])
   }
  },
  updateDefaultAnnotations: function () {
   var b = this.renderer,
    d = this.dataObj,
    h =
    this.chartInstance,
    g = d && d.annotations || {},
    e = {},
    f;
   if (this.drawAnnotations && h.dataReady() && d && d.chart && a(d.chart.showannotations, 1)) {
    f = a(g.scaleonresize, d.chart.scaleonresize, 1);
    var b = {
      interactionevents: c(this.annotationInteractionEvents, !0),
      showbelow: c(g.showbelow, g.showbelowchart),
      autoscale: g.autoscale,
      scaletext: g.scaletext,
      scaleimages: g.scaleimages,
      constrainedscale: g.constrainedscale,
      scaleonresize: f,
      origw: c(g.origw, d.chart.origw, f ? this.origRenderWidth : b.chartWidth),
      origh: c(g.origh, d.chart.origh,
       f ? this.origRenderHeight : b.chartHeight),
      xshift: g.xshift,
      yshift: g.yshift,
      grpxshift: g.grpxshift,
      grpyshift: g.grpyshift,
      xscale: g.xscale,
      yscale: g.yscale,
      rootxscale: a(g.xscale, 100) / 100,
      rootyscale: a(g.yscale, 100) / 100
     },
     u;
    b || (b = {});
    for (u in e) b[u] = e[u];
    h.annotations.reset(g, b, this.snapLiterals)
   }
   else h.annotations.clear()
  },
  dispose: function () {
   var a;
   this.disposing = !0;
   this.renderer && this.renderer.dispose();
   this.numberFormatter && this.numberFormatter.dispose();
   this.hcJSON && this.hcJSON.chart && this.hcJSON.chart.renderTo &&
    delete this.hcJSON.chart.renderTo;
   for (a in this) delete this[a];
   delete this.disposing;
   this.disposed = !0
  }
 });
 qa("stub", {
  init: function (a, b, c) {
   this.containerElement = a;
   this.smartLabel = c.jsVars.smartLabel
  },
  standaloneInit: !0
 }, qa.base);
 qa("barbase", {
  spaceManager: function () {
   return this.placeHorizontalXYSpaceManager.apply(this, arguments)
  }
 }, qa.base);
 qa("singleseries", {
  series: function (a, b, c) {
   var d = a.data || a.dataset && a.dataset[0] && a.dataset[0].data,
    e;
   d && 0 < d.length && d instanceof Array && (e = {
    data: [],
    hoverEffects: this.parseSeriesHoverOptions(a,
     b, {}, c),
    colorByPoint: !0
   }, b.legend.enabled = !1, c = this.point(c, e, d, a.chart, b), c instanceof Array ? b.series = b.series.concat(c) : b.series.push(c), this.configureAxis(b, a), a.trendlines && K(a.trendlines, b.yAxis, b[g], !1, this.isBar))
  },
  defaultSeriesType: b,
  configureAxis: function (b, d) {
   var h = b[g],
    f = b.xAxis,
    e = d.chart,
    u = b.chart.is3D,
    l, n, k, m, p, D, G, r, q, s, N, v, z = 0,
    A, ba, F, ha, B, E, ua, H = this.numberFormatter,
    I = a(e.syncaxislimits, 0),
    ra;
   f.title.text = C(e.xaxisname);
   ra = a(parseInt(e.yaxisvaluesstep, 10), parseInt(e.yaxisvaluestep,
    10), 1);
   ra = 1 > ra ? 1 : ra;
   l = b.yAxis[0];
   n = h[0];
   if (h.isDual) k = H.getCleanValue(e.pyaxismaxvalue), m = H.getCleanValue(e.pyaxisminvalue), l.title.text = C(e.pyaxisname), I && !n.stacking100Percent ? (v = h[1], N = a(v.max), v = a(v.min), void 0 !== N && void 0 !== v && (n.min = $(n.min, v), n.max = V(n.max, N)), N = H.getCleanValue(e.syaxismaxvalue), v = H.getCleanValue(e.syaxisminvalue), null !== v && (m = null !== m ? $(m, v) : v), null !== N && (k = null !== k ? V(k, N) : N)) : I = 0;
   else {
    k = H.getCleanValue(e.yaxismaxvalue);
    m = H.getCleanValue(e.yaxisminvalue);
    if (h.isSpline)
     for (v =
      0; v < b.series.length; v++) N = nb(b.series[v].data, h.width, b.plotOptions.series.connectNullData), n.min = $(n.min, N.min), n.max = V(n.max, N.max);
    l.title.text = C(e.yaxisname)
   }
   G = a(this.isStacked ? 0 : this.setAdaptiveYMin, e.setadaptiveymin, this.defSetAdaptiveYMin, 0);
   D = p = !G;
   r = a(h.numdivlines, e.numdivlines, this.numdivlines, 4);
   q = e.adjustdiv !== Na;
   s = a(this.showYAxisValues, e.showyaxisvalues, e.showyaxisvalue, 1);
   N = a(e.showyaxislimits, e.showlimits, s);
   v = a(e.showdivlinevalue, e.showdivlinevalues, s);
   u || (z = a(e.showaxislines, e.drawAxisLines,
     0), F = a(e.axislinethickness, 1), B = a(e.axislinealpha, 100), 100 < B && (B = 100), ba = Y(c(e.axislinecolor, "#000000"), B), l.showLine = a(e.showyaxisline, z), A = f.showLine = a(e.showxaxisline, z), ha = f.lineThickness = a(e.xaxislinethickness, F), l.lineThickness = a(e.yaxislinethickness, F), E = f.lineAlpha = a(e.xaxislinealpha, B), 100 < E && (E = f.lineAlpha = 100), ua = l.lineAlpha = a(e.yaxislinealpha, B), 100 < ua && (ua = l.lineAlpha = 100), f.lineColor = Y(c(e.xaxislinecolor, ba), E), l.lineColor = Y(c(e.yaxislinecolor, ba), ua), b.chart.xAxisLineVisible = A && !!ha &&
    0 < E);
   this.axisMinMaxSetter(l, n, k, m, p, D, r, q);
   this.configurePlotLines(e, b, l, n, N, v, ra, h.numberFormatter, !1);
   l.reversed && 0 <= l.min && (b.plotOptions.series.threshold = l.max);
   h.isDual && (l = b.yAxis[1], n = h[1], N = a(e.showsecondarylimits, N), v = a(e.showdivlinesecondaryvalue, s), I ? (f = b.yAxis[0], l.min = f.min, l.max = f.max, l.tickInterval = f.tickInterval, delete n.max, delete n.min) : (k = H.getCleanValue(e.syaxismaxvalue), m = H.getCleanValue(e.syaxisminvalue), G = a(e.setadaptivesymin, G), D = p = !G, this.axisMinMaxSetter(l, n, k, m, p, D, r, q)),
    u || (l.showLine = a(e.showsyaxisline, z), l.lineThickness = a(e.syaxislinethickness, F), u = l.lineAlpha = a(e.syaxislinealpha, B), 100 < u && (u = 100), l.lineColor = Y(c(e.syaxislinecolor, ba), u)), this.configurePlotLines(e, b, l, n, N, v, ra, h.numberFormatter, !0), l.title.text = C(e.syaxisname))
  },
  pointValueWatcher: function (b, d, h, f, e, u, l) {
   b = b[g];
   var n;
   if (null !== d) return h = a(h, 0), b[h] || (b[h] = {}), h = b[h], f && (this.distributedColumns && (b.marimekkoTotal += d), f = h.stack, e = a(e, 0), u = a(u, 0), l = c(l, Ta), f[l] || (f[l] = []), l = f[l], l[u] || (l[u] = []), u =
    l[u], u[e] || (u[e] = {}), e = u[e], 0 <= d ? e.p ? (n = e.p, d = e.p += d) : e.p = d : e.n ? (n = e.n, d = e.n += d) : e.n = d), h.max = h.max > d ? h.max : d, h.min = h.min < d ? h.min : d, n
  },
  parseSeriesHoverOptions: function (b, d, h) {
   b = d.chart.plotHoverEffects;
   d = {
    enabled: c(h.showhovereffect, h.hovereffect, b.enabled)
   };
   d.highlight = a(h.highlightonhover, h.highlightplotonhover, b.highlight);
   d.columnHighlight = a(d.highlight, h.highlightcolumnonhover, h.highlightbaronhover, b.columnHighlight);
   d.anchorHighlight = a(d.highlight, h.highlightanchoronhover, b.anchorHighlight);
   d.anchorHighlight = a(d.highlight, h.highlightimageonhover, b.imageHighlight);
   d.bubbleHighlight = a(d.highlight, h.highlightbubbleonhover, h.highlightbaronhover, b.bubbleHighlight);
   d.imageHoverAlpha = c(h.anchorimagehoveralpha, b.anchorImageHoverAlpha);
   d.imageHoverScale = c(h.anchorimagehoverscale, b.anchorImageHoverScale);
   d.color = c(h.hovercolor, h.bubblehovercolor, b.color);
   d.alpha = c(h.hoveralpha, b.alpha);
   d.scale = c(h.hoverscale, h.bubblehoverscale, b.scale);
   d.gradientColor = void 0 !== h.hovergradientcolor ? h.hovergradientcolor :
    b.gradientColor;
   d.ratio = c(h.hoverratio, b.ratio);
   d.angle = c(h.hoverangle, b.angle);
   d.borderColor = c(h.borderhovercolor, b.borderColor);
   d.borderAlpha = c(h.borderhoveralpha, b.borderAlpha);
   d.borderThickness = a(h.borderhoverthickness, b.borderThickness);
   d.borderDashed = a(h.borderhoverdashed, b.borderDashed);
   d.borderDashGap = a(h.borderhoverdashgap, b.borderDashGap);
   d.borderDashLen = a(h.borderhoverdashlen, b.borderDashLen);
   d.shadow = c(h.hovershadow, b.shadow);
   d.anchorSides = c(h.anchorhoversides, b.anchorSides);
   d.anchorRadius =
    c(h.anchorhoverradius, b.anchorRadius);
   d.anchorScale = c(h.anchorhoverscale, b.anchorScale);
   d.anchorAlpha = c(h.anchorhoveralpha, h.hoveralpha, b.anchorAlpha);
   d.anchorBgColor = c(h.anchorbghovercolor, h.anchorhovercolor, b.anchorBgColor);
   d.anchorBgAlpha = c(h.anchorbghoveralpha, b.anchorBgAlpha);
   d.anchorBorderColor = c(h.anchorborderhovercolor, b.anchorBorderColor);
   d.anchorBorderAlpha = c(h.anchorborderhoveralpha, b.anchorBorderAlpha);
   d.anchorBorderThickness = a(h.anchorborderhoverthickness, b.anchorBorderThickness);
   d.anchorStartAngle =
    c(h.anchorhoverstartangle, b.anchorStartAngle);
   d.anchorDip = c(h.anchorhoverdip, b.anchorDip);
   d.anchorAnimation = a(h.anchorhoveranimation, b.anchorAnimation, 1);
   d.negativeColor = c(h.negativehovercolor, b.negativeColor);
   d.is3DBubble = a(h.is3donhover, b.is3DBubble);
   return d
  },
  pointHoverOptions: function (d, h, g) {
   var f, e, u, n = {};
   f = h.hoverEffects;
   h = a(d.hovereffect, f && f.enabled);
   e = !1;
   var k = {
     enabled: h
    },
    m = g && b + g.plotType.toLowerCase();
   if (void 0 === h)
    if (this.forceHoverEnable) e = h = k.enabled = !0;
    else {
     "anchor" == m && (e = g.imageUrl ?
      h = k.enabled = void 0 !== c(d.anchorimagehoveralpha, f.imageHoverAlpha, d.anchorimagehoverscale, f.imageHoverScale, void 0) : h = k.enabled = void 0 !== c(d.hovercolor, d.anchorhovercolor, d.anchorbghovercolor, f.anchorBgColor, f.color, d.hoveralpha, d.anchorhoveralpha, f.anchorAlpha, d.bghoveralpha, d.anchorbghoveralpha, f.anchorBgAlpha, d.anchorborderhovercolor, d.borderhovercolor, f.anchorBorderColor, d.anchorborderhoverthickness, d.borderhoverthickness, f.anchorBorderThickness, d.anchorborderhoveralpha, d.borderhoveralpha, f.anchorBorderAlpha,
       d.hoverdip, d.anchorhoverdip, f.anchorDip, d.anchorhoverstartangle, f.anchorStartAngle, d.hoversides, d.anchorhoversides, f.anchorSides, d.hoverradius, d.anchorhoverradius, f.anchorRadius, void 0));
     if ("column" == m || "bubble" == m) e = h = k.enabled = void 0 !== c(d.hoveralpha, f.alpha, d.hovergradientcolor, f.gradientColor, d.borderhovercolor, f.borderColor, d.borderhoverthickness, f.borderThickness, d.hoverratio, f.ratio, d.hoverangle, f.angle, d.borderhoveralpha, f.borderAlpha, d.borderhoverdashed, f.borderDashed, d.borderhoverdashgap,
      f.borderDashGap, d.borderhoverdashlen, f.borderDashLen, d.hovercolor, f.color, void 0);
     e || "bubble" != m || (e = h = k.enabled = void 0 !== c(d.negativehovercolor, f.negativeColor, d.is3donhover, f.is3DBubble, d.hoverscale, f.scale, void 0));
     "pie" == m && (e = h = k.enabled = void 0 !== c(d.hovercolor, f.color, d.hoveralpha, f.alpha, d.borderhovercolor, f.borderColor, d.borderhoverthickness, f.borderThickness, d.borderhoveralpha, f.borderAlpha, void 0))
    }
   if (h) {
    k.highlight = a(d.highlightonhover, f.highlight);
    k.columnHighlight = a(k.highlight, d.highlightcolumnonhover,
     d.highlightbaronhover);
    k.anchorHighlight = a(k.highlight, d.highlightanchoronhover);
    k.bubbleHighlight = a(k.highlight, d.highlightbubbleonhover);
    k.alpha = c(d.hoveralpha, f.alpha, g.alpha);
    k.scale = c(d.hoverscale, f.scale, 1);
    k.gradientColor = void 0 === d.hovergradientcolor ? f.gradientColor : d.hovergradientcolor;
    k.borderColor = c(d.borderhovercolor, f.borderColor, g.borderColor);
    k.borderThickness = a(d.borderhoverthickness, f.borderThickness, g.borderWidth);
    k.ratio = c(d.hoverratio, f.ratio, g.ratio);
    k.angle = c(d.hoverangle, f.angle,
     g.angle);
    k.borderAlpha = c(d.borderhoveralpha, f.borderAlpha, g.borderAlpha);
    k.borderDashed = a(d.borderhoverdashed, f.borderDashed, g.borderDashed, 0);
    k.borderDashGap = a(d.borderhoverdashgap, f.borderDashGap, g.borderDashGap);
    k.borderDashLen = a(d.borderhoverdashlen, f.borderDashLen, g.borderDashLen);
    k.shadow = c(d.hovershadow, f.shadow, 0);
    k.color = c(d.hovercolor, f.color);
    "anchor" == m && (g.imageUrl ? (k.imageHoverAlpha = a(d.anchorimagehoveralpha, f.imageHoverAlpha, 100), k.imageHoverScale = g.imageScale * ta(a(d.anchorimagehoverscale,
     f.imageHoverScale, 110)) * .01, k.anchorAnimation = a(d.anchorhoveranimation, f.anchorAnimation, 1)) : (k.anchorColor = fa(c(d.hovercolor, d.anchorhovercolor, d.anchorbghovercolor, f.anchorBgColor, f.color, g.anchorBgColor)), k.anchorAlpha = c(d.hoveralpha, d.anchorhoveralpha, f.anchorAlpha, g.anchorAlpha), k.anchorBgAlpha = c(d.bghoveralpha, d.anchorbghoveralpha, f.anchorBgAlpha, k.anchorAlpha, g.anchorBgAlpha), k.anchorBorderColor = c(d.anchorborderhovercolor, d.borderhovercolor, f.anchorBorderColor, g.anchorBorderColor), k.anchorBorderThickness =
     c(d.anchorborderhoverthickness, d.borderhoverthickness, f.anchorBorderThickness, g.anchorBorderThickness), k.anchorBorderAlpha = a(d.anchorborderhoveralpha, d.borderhoveralpha, f.anchorBorderAlpha, k.anchorAlpha, g.anchorBorderAlpha), k.anchorDip = a(d.hoverdip, d.anchorhoverdip, f.anchorDip), k.startAngle = c(d.anchorhoverstartangle, f.anchorStartAngle, g.anchorAngle), k.anchorSides = a(d.hoversides, d.anchorhoversides, f.anchorSides, g.anchorSides), k.anchorRadius = a(d.hoverradius, d.anchorhoverradius, f.anchorRadius), k.anchorScale =
     a(d.hoverscale, d.anchorhoverscale, f.anchorScale), k.anchorAnimation = a(d.anchorhoveranimation, f.anchorAnimation, 1), void 0 === k.anchorRadius && (k.anchorRadius = !e || k.anchorHighlight ? g.anchorRadius && g.anchorRadius + 1 : g.anchorRadius)));
    if (e || (k.columnHighlight || k.bubbleHighlight) && k.color && 1 == k.highlight) k.highlight = 0;
    "column" == m && (k.color = (c(k.color, g.color) + Ja + (void 0 === k.gradientColor ? g.gradientColor : k.gradientColor)).replace(/,+?$/, ""));
    "pie" === m && (k.color = c(k.color, g.color).replace(/,+?$/, ""));
    "bubble" ==
    m && (k.negativeColor = c(d.negativehovercolor, f.negativeColor, g.negativeColor), k.is3d = a(d.is3donhover, f.is3DBubble, g.is3d), k.color = k.negativeColor && 0 > d.z ? k.negativeColor : k.color || g.color, u = "string" == typeof k.color, k.color = fa(u ? k.color : k.color.FCcolor.color), k.color = k.is3d ? qa.bubble.getPointColor(k.color, k.alpha) : {
     FCcolor: {
      color: k.color,
      alpha: k.alpha
     }
    });
    if (1 == k.highlight && "anchor" !== m) {
     d = (u = "string" == typeof k.color) ? k.color.split(/\s{0,},\s{0,}/) : k.color.FCcolor.color.split(/\s{0,},\s{0,}/);
     f = d.length;
     for (e = 0; e < f; e++) d[e] = sa(d[e], 70);
     u ? k.color = d.join(",") : k.color.FCcolor.color = d.join(",")
    }
    "pie" === m && (n = {
     color: this.getPointColor(k.color, k.alpha, g.radius3D),
     alpha: k.alpha,
     borderColor: Y(k.borderColor, k.borderAlpha),
     borderWidth: k.borderThickness
    });
    "column" == m && (k.colorArr = T(k.color, k.alpha, k.ratio, k.angle, g.isRoundEdged, k.borderColor, $(k.alpha, k.borderAlpha).toString(), g.isBar, g.is3d), k.dashStyle = k.borderDashed ? l(k.borderDashLen, k.borderDashGap, k.borderThickness) : "none", n = {
     shadow: k.shadow,
     color: k.colorArr[0],
     borderColor: k.colorArr[1],
     borderWidth: k.borderThickness,
     use3DLighting: g.use3DLighting,
     dashStyle: k.dashStyle
    });
    "anchor" == m && (n = g.imageUrl ? {
     animation: k.anchorAnimation,
     imageHoverAlpha: k.imageHoverAlpha,
     imageHoverScale: k.imageHoverScale
    } : {
     animation: k.anchorAnimation,
     shadow: k.shadow,
     fillColor: {
      FCcolor: {
       color: k.anchorColor,
       alpha: k.anchorBgAlpha * k.anchorAlpha / 100 + b
      }
     },
     lineColor: {
      FCcolor: {
       color: k.anchorBorderColor,
       alpha: k.anchorBorderAlpha
      }
     },
     lineWidth: k.anchorBorderThickness,
     radius: k.anchorRadius,
     symbol: La(k.anchorSides),
     startAngle: k.startAngle,
     sides: k.anchorSides,
     scale: k.anchorScale,
     dip: k.anchorDip
    });
    "bubble" == m && (n = {
     symbol: k.seriesAnchorSymbol,
     shadow: k.shadow,
     scale: k.scale,
     fillColor: k.color,
     lineColor: {
      FCcolor: {
       color: k.borderColor,
       alpha: k.alpha
      }
     },
     lineWidth: k.borderThickness
    })
   }
   return {
    enabled: h,
    options: k,
    rolloverOptions: n
   }
  },
  getPointStub: function (d, h, f, u) {
   var e = this.dataObj.chart;
   u = u[g];
   h = null === h ? h : u.numberFormatter.dataLabels(h);
   var l = s(C(c(d.tooltext, u.tooltext))),
    k = s(C(d.displayvalue)),
    e = u.showTooltip ? void 0 !==
    l ? p(l, [1, 2, 3, 5, 6, 7], {
     formattedValue: h,
     label: f,
     yaxisName: C(e.yaxisname),
     xaxisName: C(e.xaxisname)
    }, d, e) : null === h ? !1 : f !== b ? f + u.tooltipSepChar + h : h : b;
   u = a(d.showvalue, u.showValues) ? void 0 !== k ? k : h : b;
   d = c(d.link);
   return {
    displayValue: u,
    categoryLabel: f,
    toolText: e,
    link: d
   }
  },
  updateSnapPoints: function () {
   var a = this,
    b = a.snapLiterals,
    c = function (a, b) {
     var c = 0;
     switch (a) {
     case "startx":
      c = b.x;
      break;
     case "starty":
      c = b.y;
      break;
     case "x":
     case "middlex":
     case "centerx":
      c = b.x + b.width / 2;
      break;
     case "y":
     case "middley":
     case "centery":
      c =
       b.y + b.height / 2;
      break;
     case "endx":
      c = b.x + b.width;
      break;
     case "endy":
      c = b.y + b.height;
      break;
     default:
      c = 0
     }
     return c
    };
   b.dataset = function (b, d) {
    var h = a.renderer && a.renderer.plots,
     g, f, u, l;
    u = a.is3D;
    if (!h || !h.length) return 0;
    isNaN(b[0]) ? g = 0 : (g = Number(b[0]), b = b.slice(1));
    f = b[0];
    if ("set" === f) {
     isNaN(b[1]) ? (l = 0, b = b.slice(1)) : (l = Number(b[1]), b = b.slice(2));
     f = b[0];
     h = (h = h[g] && h[g].items[l]) && h.graphic;
     if (!h) return 0;
     u = d && u ? h._getBBox2() : h.getBBox();
     l = c(f, u)
    }
    return l
   };
   b.xaxis = function (b) {
    var d = a.renderer && a.renderer.xAxis &&
     a.renderer.xAxis[0] && a.renderer.xAxis[0].labels,
     h, g;
    if (!d || !d.length) return 0;
    g = b[0];
    if ("label" === g) {
     isNaN(b[1]) ? (h = 0, b = b.slice(1)) : (h = Number(b[1]), b = b.slice(2));
     g = b[0];
     b = d[h];
     if (!b) return 0;
     b = b.getBBox();
     h = c(g, b)
    }
    return h
   };
   b.yaxis = function (b) {
    var d = a.renderer && a.renderer.yAxis,
     h, g;
    if (!d || !d.length) return 0;
    isNaN(b[0]) ? h = 0 : (h = Number(b[0]), b = b.slice(1));
    h = d[h];
    if (!h) return 0;
    d = b[0];
    if ("label" === d) {
     g = h.labels;
     isNaN(b[1]) ? (h = 0, b = b.slice(1)) : (h = Number(b[1]), b = b.slice(2));
     d = b[0];
     b = g[h];
     if (!b) return 0;
     b = b.getBBox();
     g = c(d, b)
    }
    return g
   }
  }
 }, qa.base);
 qa("multiseries", {
  series: function (b, c, d) {
   var h, e, f = c[g],
    u, l;
   c.legend.enabled = Boolean(a(b.chart.showlegend, 1));
   if (b.dataset && 0 < b.dataset.length) {
    this.categoryAdder(b, c);
    h = 0;
    for (e = b.dataset.length; h < e; h += 1) u = b.dataset[h], l = {
     hoverEffects: this.parseSeriesHoverOptions(b, c, u, d),
     visible: !a(u.initiallyhidden, 0),
     data: []
    }, this.isStacked || (l.numColumns = e), u = this.point(d, l, u, b.chart, c, f.oriCatTmp.length, h), u instanceof Array ? c.series = c.series.concat(u) : c.series.push(u);
    this.configureAxis(c, b);
    b.trendlines && !this.isLog && K(b.trendlines, c.yAxis, f, !1, this.isBar, void 0, this.inversed)
   }
  },
  categoryAdder: function (c, d) {
   var h, f = 0,
    e = d[g],
    u = e.axisGridManager,
    l = c.chart,
    k = d.xAxis,
    m, e = e.x,
    p, D, G, r;
   if (c.categories && c.categories[0] && c.categories[0].category)
    for (c.categories[0].font && (d.xAxis.labels.style.fontFamily = c.categories[0].font), void 0 !== (h = a(c.categories[0].fontsize)) && (1 > h && (h = 1), d.xAxis.labels.style.fontSize = h + Ga, n(d.xAxis.labels.style)), c.categories[0].fontcolor && (d.xAxis.labels.style.color =
      c.categories[0].fontcolor.split(Ja)[0].replace(/^\#?/, "#")), D = d[g].oriCatTmp, G = c.categories[0].category, h = 0; h < G.length; h += 1) G[h].vline ? u.addVline(k, G[h], f, d) : (p = a(G[h].showlabel, l.showlabels, 1), r = c.categories[0].category[h], m = C(v(r.label, r.name)), u.addXaxisCat(k, f, f, p ? m : b, {}, r, l), D[f] = v(C(r.tooltext), m), f += 1);
   e.catCount = f
  },
  getPointStub: function (d, h, f, u, e, l, k, n, m, G) {
   var D = this.dataObj.chart,
    r = this.isDual,
    q = this.isXY,
    N = this.isMLAxis,
    z = this.isStacked,
    A = this.isErrorChart,
    ba;
   u = u[g];
   var F, ha, B = null === h ?
    h : this.numberFormatter.dataLabels(h, k),
    E, ua = s(C(c(d.tooltext, e.plottooltext, u.tooltext))),
    H = u.tooltipSepChar,
    ra, I = {},
    ja, K, Ba, ia, Ha, Da, xa, L, Q;
   A && (K = null === n ? n : this.numberFormatter.dataLabels(n, k), Da = null === h ? b : this.numberFormatter.percentValue(n / h * 100), ra = [1, 2, 3, 4, 5, 6, 7, 99, 100, 101, 102], h = {
    yaxisName: ia = C(r ? k ? D.syaxisname : D.pyaxisname : D.yaxisname),
    xaxisName: Ha = C(D.xaxisname),
    formattedValue: B,
    label: f,
    errorDataValue: K,
    errorPercentValue: Da
   }, q ? (Ba = null === m ? m : this.numberFormatter.xAxis(m), xa = null === G ? b : this.numberFormatter.percentValue(m /
    G * 100), ra.push(103, 104, 105, 106, 107, 108, 109, 110), Q = c(d.horizontalerrorvalue, d.errorvalue), h.errorValue = L = c(d.verticalerrorvalue, d.errorvalue), G = s(C(c(d.verticalerrorplottooltext, d.errorplottooltext, e.verticalerrorplottooltext, e.errorplottooltext, D.verticalerrorplottooltext, D.errorplottooltext))), null !== n && (h.verticalErrorDataValue = K, h.verticalErrorPercentValue = Da, h.verticalErrorValue = L), null !== m && (h.horizontalErrorDataValue = Ba, h.horizontalErrorPercentValue = xa, h.horizontalErrorValue = Q), ja = s(C(c(d.horizontalerrorplottooltext,
    d.errorplottooltext, e.horizontalerrorplottooltext, e.errorplottooltext, D.horizontalerrorplottooltext, D.errorplottooltext))), I._hErrortoolText = u.showTooltip ? void 0 !== ja ? p(ja, ra, {
     yaxisName: ia = C(r ? k ? D.syaxisname : D.pyaxisname : D.yaxisname),
     xaxisName: Ha = C(D.xaxisname),
     formattedValue: B,
     label: f,
     errorDataValue: Ba,
     errorPercentValue: xa,
     errorValue: Q,
     verticalErrorDataValue: K,
     verticalErrorPercentValue: Da,
     verticalErrorValue: L,
     horizontalErrorDataValue: Ba,
     horizontalErrorPercentValue: xa,
     horizontalErrorValue: Q
    }, d, D,
    e) : null === n ? !1 : Ba : !1) : (G = s(C(c(d.errorplottooltext, e.errorplottooltext, D.errorplottooltext))), h.errorValue = L = c(d.errorvalue)), I._errortoolText = u.showTooltip ? void 0 !== G ? p(G, ra, h, d, D, e) : null === n ? !1 : K : !1);
   u.showTooltip ? void 0 !== ua ? (z = [4, 5, 6, 7], k = {
    yaxisName: ia || C(r ? k ? D.syaxisname : D.pyaxisname : N ? e._yAxisName : D.yaxisname),
    xaxisName: Ha || C(D.xaxisname)
   }, q ? (z.push(8, 9, 10, 11), k.yDataValue = B, k.xDataValue = f, A && (z.push(103, 104, 105, 106, 107, 108, 109, 110), null !== n && (k.verticalErrorDataValue = K, k.verticalErrorPercentValue =
    Da, k.verticalErrorValue = L), null !== m && (k.horizontalErrorDataValue = Ba, k.horizontalErrorPercentValue = xa, k.horizontalErrorValue = Q))) : (z.push(1, 2, 3), k.formattedValue = B, k.label = f, A && (z.push(99, 100, 101, 102), k.errorValue = L, null !== n && (k.errorDataValue = K, k.errorPercentValue = Da))), e = p(ua, z, k, d, D, e)) : null === B ? e = !1 : (u.seriesNameInToolTip && (E = v(e && e.seriesname)), e = E ? E + H : b, e += f ? f + H : b, u.showPercentInToolTip && z ? (ha = !0, e += "$percentValue") : e += B) : e = !1;
   a(d.showvalue, l) ? void 0 !== s(d.displayvalue) ? ba = C(d.displayvalue) :
    u.showPercentValues ? F = !0 : ba = B : ba = b;
   I.link = c(d.link);
   I.displayValue = ba;
   I.categoryLabel = f;
   I.toolText = e;
   I.showPercentValues = F;
   I.showPercentInToolTip = ha;
   return I
  }
 }, qa.singleseries);
 qa("xybase", {
  hideRLine: function () {
   var a = this.chart.series[this.index + 1];
   a && a.hide && a.hide()
  },
  showRLine: function () {
   var a = this.chart.series[this.index + 1];
   a && a.show && a.show()
  },
  getRegressionLineSeries: function (a, b, c) {
   var d, e, h, g;
   g = a.sumXY;
   var f = a.sumX,
    u = a.sumY;
   e = a.xValues;
   h = a.sumXsqure;
   d = a.yValues;
   a = a.sumYsqure;
   b ? (e.sort(wa), d =
    e[0], e = e[e.length - 1], g = (c * g - f * u) / (c * h - U(f, 2)), h = isNaN(g) ? u / c : g * (d - f / c) + u / c, c = isNaN(g) ? u / c : g * (e - f / c) + u / c, c = [{
     x: d,
     y: h
    }, {
     x: e,
     y: c
    }]) : (d.sort(wa), h = d[0], d = d[d.length - 1], g = (c * g - f * u) / (c * a - U(u, 2)), e = isNaN(g) ? f / c : g * (h - u / c) + f / c, c = isNaN(g) ? f / c : g * (d - u / c) + f / c, c = [{
    x: e,
    y: h
   }, {
    x: c,
    y: d
   }]);
   return c
  },
  pointValueWatcher: function (a, b, c, d) {
   var e = a[g];
   null !== b && (a = e[0], a.max = a.max > b ? a.max : b, a.min = a.min < b ? a.min : b);
   null !== c && (a = e.x, a.max = a.max > c ? a.max : c, a.min = a.min < c ? a.min : c);
   d && (c = c || 0, b = b || 0, d.sumX += c, d.sumY += b, d.sumXY +=
    c * b, d.sumXsqure += U(c, 2), d.xValues.push(c), d.sumYsqure += U(b, 2), d.yValues.push(b))
  }
 }, qa.multiseries);
 qa("scrollbase", {
  postSeriesAddition: function () {
   var b = this.hcJSON,
    d = b.xAxis.scroll,
    h = b[g],
    f = h.width,
    e = h.x.catCount,
    u = this.dataObj.chart,
    k = this.colorManager,
    l, n, m, p, D, G;
   h.isScroll = !0;
   b.chart.hasScroll = !0;
   if (this.isStacked) l = 1;
   else {
    n = l = 0;
    p = b.series;
    G = b.chart.defaultSeriesType;
    for (m = p.length; n < m; n++) D = c(p[n].type, G), "column" === D && (l += 1);
    1 > l && (l = 1)
   }
   e *= l;
   f = a(u.numvisibleplot, Aa(f / this.avgScrollPointWidth));
   d && 2 <= f && f < e && (d.enabled = !0, d.vxLength = f / l, d.startPercent = $(1, V(0, parseFloat(u.scrolltoend) || 0)), d.padding = a(u.scrollpadding, 0), d.height = a(u.scrollheight, 16), d.showButtons = !!a(u.scrollshowbuttons, 1), d.buttonPadding = a(u.scrollbtnpadding, 0), d.color = fa(c(u.scrollcolor, k.getColor("altHGridColor"))), h.marginBottomExtraSpace += d.padding + d.height);
   if (Ha || a(u.enabletouchscroll, 0)) b.chart.zoomType = "x", b.chart.nativeZoom = !1, b.chart.selectionMarkerFill = "rgba(255,255,255,0)", (b.callbacks || (b.callbacks = [])).push(function (a) {
    A(a,
     "selectionstart selectiondrag", qa.scrollbase.performTouchScroll, {})
   })
  },
  performTouchScroll: function (a) {
   var b = this.xAxis[0].scroller,
    c = b.config,
    c = c.trackLength / (c.width / c.scrollRatio) * (a.chartX || 1);
   !0 !== a.isOutsidePlot && Ba(b.elements.anchor.element, "selectionstart" === a.type ? "dragstart" : "drag", {
    pageX: -c,
    pageY: -a.chartY
   })
  }
 }, qa.multiseries);
 qa("logbase", {
  isLog: !0,
  isValueAbs: !0,
  configureAxis: function (d, h) {
   var u = d[g],
    k = u.axisGridManager,
    e = this.numberFormatter,
    l = d.series,
    n = d.xAxis,
    m = d.yAxis[0],
    p = u[0],
    D = h.chart,
    G = !a(D.showyaxislimits, D.showlimits, D.showyaxisvalues, 1),
    r = !a(D.showdivlinevalues, D.showyaxisvalues, 1),
    q = a(D.base, D.logbase, 10),
    s = a(D.yaxismaxvalue),
    N = a(D.yaxisminvalue),
    v = this.colorManager,
    z = 1 === a(D.showminordivlinevalues),
    A = c(D.minordivlinecolor, m.gridLineColor, v.getColor("divLineColor")),
    ba = a(D.minordivlinealpha, D.divlinealpha, v.getColor("divLineAlpha")),
    v = [m, void 0, void 0, a(D.divlinethickness, 2), m.gridLineDashStyle, m.gridLineColor, 2],
    A = [m, void 0, void 0, a(D.minordivlinethickness, 1), m.gridLineDashStyle,
Y(c(D.minordivlinecolor, A), a(D.minordivlinealpha, ba / 2)), 2],
    ba = z || ba && A[3],
    F = a(D.showaxislimitgridlines, this.showAxisLimitGridLines),
    ha = a(F, this.is3D || d.chart.plotBorderWidth ? 0 : 1),
    B, E;
   0 >= q && (q = 10);
   0 >= s && (s = void 0);
   0 >= N && (N = void 0);
   s = this.getLogAxisLimits(p.max || q, p.min || 1, s, N, q, ba ? D.numminordivlines : 0);
   n.title.text = C(D.xaxisname);
   n.showLine = a(D.showxaxisline, D.showaxislines, 0);
   n.lineThickness = a(D.xaxislinethickness, D.axislinethickness, 1);
   n.lineAlpha = a(D.xaxislinealpha, D.axislinealpha, 100);
   n.lineColor =
    Y(c(D.xaxislinecolor, D.axislinecolor, "000"));
   f(m, {
    title: {
     text: C(D.yaxisname)
    },
    labels: {
     enabled: !1
    },
    gridLineWidth: 0,
    alternateGridColor: Ea,
    reversed: "1" === D.invertyaxis,
    max: ja(s.Max, q),
    min: ja(s.Min, q),
    showLine: a(D.showyaxisline, D.showaxislines, 0),
    lineThickness: a(D.yaxislinethickness, D.axislinethickness, 1),
    lineAlpha: a(D.yaxislinealpha, D.axislinealpha, 100),
    lineColor: Y(c(D.yaxislinecolor, D.axislinecolor, "000"))
   });
   for (D = l.length; D--;)
    if (N = l[D])
     for (N.threshold = m.min, E = (N = N.data) && N.length || 0; E--;) B = N[E], B.y =
      ja(B.y, q);
   delete p.max;
   delete p.min;
   p.isLog = !0;
   m.reversed && 0 <= m.min && (d.plotOptions.series.threshold = m.max);
   h.trendlines && K(h.trendlines, [{
    max: s.Max,
    min: s.Min,
    plotLines: m.plotLines,
    plotBands: m.plotBands,
    title: m.title
   }], u);
   for (D = m.plotLines.length; D--;) B = m.plotLines[D], B.value && (B.value = ja(B.value, q)), B.from && (B.from = ja(B.from, q)), B.to && (B.to = ja(B.to, q));
   for (D = m.plotBands.length; D--;) B = m.plotBands[D], B.from && (B.from = ja(B.from, q)), B.to && (B.to = ja(B.to, q));
   for (D = s.divArr.length; D--;) {
    B = s.divArr[D];
    if (B.ismajor) v[1] =
     ja(B.value, q), v[2] = e.yAxis(B.value), k.addAxisGridLine.apply(k, v);
    else if (ba || B.isextreme) A[1] = ja(B.value, q), A[2] = z || B.isextreme ? e.yAxis(B.value) : b, k.addAxisGridLine.apply(k, A);
    N = m.plotLines[m.plotLines.length - 1];
    B.isextreme ? (N.width = F || ha && (!B.isMin || !n.showLine) ? N.width : .1, G && (N.label.text = b)) : r && N.label && (N.label.text = b)
   }
  },
  getLogAxisLimits: function (a, b, c, d, e, h) {
   var g = function (a) {
     return null === a || void 0 === a || "" === a || isNaN(a) ? !1 : !0
    },
    f = 0,
    u = [],
    k, l, n, m, p, D, G, q;
   g(c) && Number(c) >= a ? a = Number(c) : (c = 1 < e ? za(Z(a) /
    Z(e)) : Aa(Z(a) / Z(e)), a = U(e, c), l = c);
   l || (l = 1 < e ? za(Z(a) / Z(e)) : Aa(Z(a) / Z(e)));
   g(d) && Number(d) <= b ? b = Number(d) : (c = 1 < e ? Aa(Z(b) / Z(e)) : za(Z(b) / Z(e)), b = U(e, c), k = c);
   k || (k = 1 < e ? Aa(Z(b) / Z(e)) : za(Z(b) / Z(e)));
   d = Number(String(Z(e) / Z(10)));
   h = Number(h) || (Aa(d) == d ? 8 : 4);
   1 < e ? (n = l, m = k) : 0 < e && 1 > e && (n = k, m = l);
   d = l;
   for (k = n; k >= m; --k)
    if (n = U(e, d), b <= n && a >= n && (u[f++] = {
      value: n,
      ismajor: !0
     }), k != m) {
     l = 1 < e ? -1 : 1;
     n = U(e, d) - U(e, d + l);
     c = n / (h + 1);
     for (g = 1; g <= h; ++g) n = U(e, d + l) + c * g, b <= n && a >= n && (u[f++] = {
      value: n,
      ismajor: !1
     });
     1 < e ? d-- : d++
    }
   for (G in u)
    for (q in u[G]) "value" ==
     q && (p || (p = u[G][q] == b && (u[G].isextreme = u[G].isMin = !0)), D || (D = u[G][q] == a && (u[G].isextreme = u[G].isMax = !0)));
   p || (u[f++] = {
    value: b,
    ismajor: !0,
    isMin: !0,
    isextreme: !0
   });
   D || (u[f] = {
    value: a,
    ismajor: !0,
    isMax: !0,
    isextreme: !0
   });
   return {
    Max: a,
    Min: b,
    divArr: u
   }
  },
  pointValueWatcher: function (b, c, d) {
   b = b[g];
   d = a(d, 0);
   0 < c && (b[d] || (b[d] = {}), d = b[d], d.max = d.max > c ? d.max : c, d.min = d.min < c ? d.min : c)
  }
 }, qa.mslinebase);
 Ya = qa.singleseries;
 ib = qa.multiseries;
 qa("column2dbase", {
  point: function (d, h, u, k, e) {
   var n = u.length,
    m = e[g],
    p = m.axisGridManager,
    D = e.xAxis,
    m = m.x,
    G = this.colorManager,
    q = /3d$/.test(e.chart.defaultSeriesType),
    r = this.isBar,
    s = /^spark/i.test(d);
   d = c(k.showplotborder, s || q ? Na : sb) === sb ? q ? 1 : a(k.plotborderthickness, 1) : 0;
   var N = e.chart.useRoundEdges,
    z = a(k.plotborderalpha, k.plotfillalpha, 100),
    A = c(k.plotbordercolor, G.getColor("plotBorderColor")).split(Ja)[0],
    s = s ? "" : a(k.useplotgradientcolor, 1) ? O(k.plotgradientcolor, G.getColor("plotGradientColor")) : b,
    ba = 0,
    B = Boolean(a(k.use3dlighting, 1)),
    F = e[g].numberFormatter,
    ha, E = a(k.plotborderdashed, 0),
    ua =
    a(k.plotborderdashlen, 5),
    H = a(k.plotborderdashgap, 4),
    I, ra, K, ja, Ba, ia, Ha, Da, xa, L, Q, Ka, P, ea;
   for (K = 0; K < n; K += 1) P = u[K], P.vline ? p.addVline(D, P, ba, e) : (ra = F.getCleanValue(P.value), ha = a(P.showlabel, k.showlabels, 1), ja = C(v(P.label, P.name)), I = c(P.color, G.getPlotColor()), Ba = c(P.alpha, k.plotfillalpha, Wa), ia = c(P.ratio, k.plotfillratio), Ha = c(360 - k.plotfillangle, r ? 180 : 90), Da = c(P.alpha, z), xa = a(P.dashed, E), L = c(P.dashgap, H), Q = c(P.dashlen, ua), p.addXaxisCat(D, ba, ba, ha ? ja : b, P, {}, k, I), ba += 1, 0 > ra && (Ha = r ? 180 - Ha : 360 - Ha), ea = {
    opacity: Ba /
     100
   }, Ka = T(I + Ja + s.replace(/,+?$/, ""), Ba, ia, Ha, N, A, Da + b, r, q), ha = xa ? l(Q, L, d) : "none", I = this.pointHoverOptions(P, h, {
    plotType: "column",
    is3d: q,
    isBar: r,
    use3DLighting: B,
    isRoundEdged: N,
    color: I,
    gradientColor: s,
    alpha: Ba,
    ratio: ia,
    angle: Ha,
    borderWidth: d,
    borderColor: A,
    borderAlpha: Da,
    borderDashed: xa,
    borderDashGap: L,
    borderDashLen: Q,
    shadow: ea
   }), h.data.push(f(this.getPointStub(P, ra, ja, e), {
    y: ra,
    shadow: ea,
    color: Ka[0],
    borderColor: Ka[1],
    borderWidth: d,
    use3DLighting: B,
    dashStyle: ha,
    tooltipConstraint: this.tooltipConstraint,
    hoverEffects: I.enabled && I.options,
    rolloverProperties: I.enabled && I.rolloverOptions
   })), this.pointValueWatcher(e, ra));
   m.catCount = ba;
   return h
  },
  defaultSeriesType: "column"
 }, Ya);
 qa("linebase", {
  defaultSeriesType: "line",
  hasVDivLine: !0,
  defaultPlotShadow: 1,
  point: function (d, h, u, k, e) {
   var n, m, p, D, G, q, r, s, N, z, ba, A, B, F, ha, E, ua, H, I, ra, K, ja, Ba, ia, Ha, Da;
   d = e.chart;
   var xa = u.length,
    L = e.xAxis;
   n = e[g];
   var Q = this.colorManager,
    P, Ka = n.axisGridManager,
    ea = 0,
    nb = n.x,
    Pa = e[g].numberFormatter,
    eb, bb, fb;
   F = fa(c(k.linecolor, k.palettecolors,
    Q.getColor("plotFillColor")));
   ha = c(k.linealpha, Wa);
   ba = a(k.linethickness, this.lineThickness, 4);
   A = Boolean(a(k.linedashed, 0));
   r = a(k.linedashlen, 5);
   s = a(k.linedashgap, 4);
   Ha = a(k.anchorshadow, 0);
   h.color = {
    FCcolor: {
     color: F,
     alpha: ha
    }
   };
   h.lineWidth = ba;
   h.anchorShadow = Ha;
   h.step = c(this.stepLine, h.step);
   h.drawVerticalJoins = Boolean(a(h.drawVerticalJoins, k.drawverticaljoins, 1));
   h.useForwardSteps = Boolean(a(h.useForwardSteps, k.useforwardsteps, 1));
   B = a(k.drawanchors, k.showanchors);
   for (m = 0; m < xa; m += 1) D = u[m], D.vline ? Ka.addVline(L,
    D, ea, e) : (n = Pa.getCleanValue(D.value), G = a(D.showlabel, k.showlabels, 1), p = C(v(D.label, D.name)), Ka.addXaxisCat(L, ea, ea, G ? p : b, D, {}, k), ea += 1, N = fa(c(D.color, F)), z = a(D.alpha, ha), G = a(D.dashed, A) ? l(r, s, ba) : "none", q = {
    opacity: z / 100
   }, ua = a(D.anchorsides, k.anchorsides, 0), ia = a(D.anchorstartangle, k.anchorstartangle, 90), ra = a(D.anchorradius, k.anchorradius, this.anchorRadius, 3), I = fa(c(D.anchorbordercolor, k.anchorbordercolor, F)), H = a(D.anchorborderthickness, k.anchorborderthickness, this.anchorBorderThickness, 1), K = fa(c(D.anchorbgcolor,
    k.anchorbgcolor, Q.getColor("anchorBgColor"))), ja = c(D.anchoralpha, k.anchoralpha, Wa), Ba = c(D.anchorbgalpha, k.anchorbgalpha, ja), eb = c(D.anchorimageurl, k.anchorimageurl), bb = c(D.anchorimagescale, k.anchorimagescale, 100), fb = c(D.anchorimagealpha, k.anchorimagealpha, 100), E = void 0 === B ? 0 !== z : !!B, Da = Boolean(a(D.anchorshadow, Ha, 0)), P = this.pointHoverOptions(D, h, {
    plotType: "anchor",
    anchorBgColor: K,
    anchorAlpha: ja,
    anchorBgAlpha: Ba,
    anchorAngle: ia,
    anchorBorderThickness: H,
    anchorBorderColor: I,
    anchorBorderAlpha: ja,
    anchorSides: ua,
    anchorRadius: ra,
    imageUrl: eb,
    imageScale: bb,
    imageAlpha: fb,
    shadow: q
   }), h.data.push(f(this.getPointStub(D, n, p, e), {
    y: n,
    color: {
     FCcolor: {
      color: N,
      alpha: z
     }
    },
    shadow: q,
    dashStyle: G,
    valuePosition: c(D.valueposition, d.valuePosition),
    marker: {
     enabled: !!E,
     shadow: Da && {
      opacity: ja / 100
     },
     fillColor: {
      FCcolor: {
       color: K,
       alpha: Ba * ja / 100 + b
      }
     },
     lineColor: {
      FCcolor: {
       color: I,
       alpha: ja
      }
     },
     lineWidth: H,
     radius: ra,
     startAngle: ia,
     symbol: La(ua),
     imageUrl: eb,
     imageScale: bb,
     imageAlpha: fb
    },
    tooltipConstraint: this.tooltipConstraint,
    hoverEffects: P.enabled &&
     P.options,
    rolloverProperties: P.enabled && P.rolloverOptions
   })), this.pointValueWatcher(e, n));
   nb.catCount = ea;
   return h
  },
  defaultZeroPlaneHighlighted: !1
 }, Ya);
 qa("area2dbase", {
  defaultSeriesType: "area",
  hasVDivLine: !0,
  parseAnchorVisibility: function (b, d, h) {
   var g = a(b.drawanchors, d.drawanchors, d.showanchors);
   return W(g) ? g : W(c(b.anchorsides, d.anchorsides, b.anchorstartangle, d.anchorstartangle, b.anchorradius, d.anchorradius, b.anchorbordercolor, d.anchorbordercolor, b.anchorborderthickness, d.anchorborderthickness, b.anchorbgcolor,
    d.anchorbgcolor, b.anchoralpha, d.anchoralpha, b.anchorbgalpha, d.anchorbgalpha, b.anchorshadow, d.anchorshadow)) || h
  },
  point: function (d, h, u, k, e) {
   d = e.chart;
   var n = u.length,
    m = e.xAxis,
    D = e[g],
    p = D.axisGridManager,
    D = D.x,
    G = e[g].numberFormatter,
    q = this.colorManager,
    r = 0,
    N, z, ba, A, B, F, ha, E, ua, H, I, ra, ja, K, Ba, ia, Ha, Da, xa, L, Q, P, Ka, ea, nb, Pa, eb, bb, fb;
   B = c(k.plotfillcolor, k.areabgcolor, s(k.palettecolors) ? q.getPlotColor(0) : q.getColor("plotFillColor")).split(/\s*\,\s*/)[0];
   Q = Ja + (a(k.useplotgradientcolor, 1) ? O(k.plotgradientcolor,
    q.getColor("plotGradientColor")) : b);
   F = c(k.plotfillalpha, k.areaalpha, this.isStacked ? Wa : "90");
   ha = a(k.plotfillangle, 270);
   E = c(k.plotbordercolor, k.areabordercolor, s(k.palettecolors) ? q.getPlotColor(0) : q.getColor("plotBorderColor")).split(/\s*\,\s*/)[0];
   ua = k.showplotborder == Na ? Na : c(k.plotborderalpha, k.plotfillalpha, k.areaalpha, Wa);
   N = a(k.plotborderangle, 270);
   z = Boolean(a(k.plotborderdashed, 0));
   ba = a(k.plotborderdashlen, 5);
   ja = a(k.plotborderdashgap, 4);
   Ha = a(k.plotborderthickness, k.areaborderthickness, 1);
   P = h.fillColor = {
    FCcolor: {
     color: B + Q.replace(/,+?$/, ""),
     alpha: F,
     ratio: kb,
     angle: ha
    }
   };
   h.lineWidth = Ha;
   h.dashStyle = z ? l(ba, ja, Ha) : "none";
   h.lineColor = {
    FCcolor: {
     color: E,
     alpha: ua,
     ratio: Wa,
     angle: N
    }
   };
   h.step = c(this.stepLine, h.step);
   h.drawVerticalJoins = Boolean(a(h.drawVerticalJoins, k.drawverticaljoins, 1));
   h.useForwardSteps = Boolean(a(h.useForwardSteps, k.useforwardsteps, 1));
   Ha = Boolean(a(k.drawanchors, k.showanchors, 1));
   nb = Boolean(this.parseAnchorVisibility({}, k, 0));
   h.anchorShadow = Ka = a(k.anchorshadow, 0);
   for (z = 0; z < n; z += 1) ja = u[z],
    ja.vline ? p.addVline(m, ja, r, e) : (N = G.getCleanValue(ja.value), A = a(ja.showlabel, k.showlabels, 1), ba = C(v(ja.label, ja.name)), p.addXaxisCat(m, r, r, A ? ba : b, ja, {}, k), r += 1, A = a(ja.anchorsides, k.anchorsides, 0), ra = a(ja.anchorstartangle, k.anchorstartangle, 90), H = a(ja.anchorradius, k.anchorradius, 3), I = fa(c(ja.anchorbordercolor, k.anchorbordercolor, E)), Da = a(ja.anchorborderthickness, k.anchorborderthickness, 1), K = fa(c(ja.anchorbgcolor, k.anchorbgcolor, q.getColor("anchorBgColor"))), Ba = c(ja.anchoralpha, k.anchoralpha, this.anchorAlpha,
     nb ? Wa : 0), ia = c(ja.anchorbgalpha, k.anchorbgalpha, Ba), ea = Boolean(a(ja.anchorshadow, Ka, 0)), xa = s(ja.color), L = a(ja.alpha), xa = void 0 !== xa || void 0 !== L ? {
     FCcolor: {
      color: xa ? fa(xa) + Q : B,
      alpha: void 0 === L ? ca(L) + b : F,
      ratio: kb,
      angle: ha
     }
    } : P, Pa = c(ja.anchorimageurl, k.anchorimageurl), eb = c(ja.anchorimagescale, k.anchorimagescale, 100), bb = c(ja.anchorimagealpha, k.anchorimagealpha, 100), L = {
     opacity: V(L, ua) / 100,
     inverted: !0
    }, fb = this.pointHoverOptions(ja, h, {
     plotType: "anchor",
     anchorBgColor: K,
     anchorAlpha: Ba,
     anchorBgAlpha: ia,
     anchorAngle: ra,
     anchorBorderThickness: Da,
     anchorBorderColor: I,
     anchorBorderAlpha: Ba,
     anchorSides: A,
     anchorRadius: H,
     imageUrl: Pa,
     imageScale: eb,
     imageAlpha: bb,
     shadow: L
    }), h.data.push(f(this.getPointStub(ja, N, ba, e), {
     y: N,
     shadow: L,
     color: xa,
     valuePosition: c(ja.valueposition, d.valuePosition),
     marker: {
      enabled: Ha,
      shadow: ea && {
       opacity: Ba / 100
      },
      fillColor: {
       FCcolor: {
        color: K,
        alpha: ia * Ba / 100 + b
       }
      },
      lineColor: {
       FCcolor: {
        color: I,
        alpha: Ba
       }
      },
      lineWidth: Da,
      radius: H,
      symbol: La(A),
      startAngle: ra,
      imageUrl: Pa,
      imageScale: eb,
      imageAlpha: bb
     },
     tooltipConstraint: this.tooltipConstraint,
     previousY: this.pointValueWatcher(e, N),
     hoverEffects: fb.enabled && fb.options,
     rolloverProperties: fb.enabled && fb.rolloverOptions
    })));
   D.catCount = r;
   return h
  }
 }, Ya);
 qa("mscolumn2dbase", {
  point: function (d, f, u, k, e, l, n, m, D) {
   d = a(k.ignoreemptydatasets, 0);
   var p = !1,
    G = u.data || [],
    q = e[g],
    r = c(f.type, this.defaultSeriesType),
    N = c(f.isStacked, e.plotOptions[r] && e.plotOptions[r].stacking),
    v = c(this.isValueAbs, q.isValueAbs, !1),
    z = a(f.yAxis, 0),
    ba = e[g].numberFormatter,
    A = this.colorManager,
    B = A.getPlotColor(),
    C, F = e._FCconf.isBar,
    ha =
    f.hoverEffects;
   N || (f.columnPosition = a(D, m, n));
   f.name = s(u.seriesname);
   if (0 === a(u.includeinlegend) || void 0 === f.name) f.showInLegend = !1;
   f.color = c(u.color, B).split(Ja)[0].replace(/^#?/g, "#");
   n = /3d$/.test(e.chart.defaultSeriesType);
   D = c(360 - k.plotfillangle, F ? 180 : 90);
   0 > C && (D = 360 - D);
   u = f._dataParser = Ab.column(e, {
    seriesname: f.name,
    plottooltext: u.plottooltext,
    color: c(u.color, B),
    alpha: c(u.alpha, k.plotfillalpha, Wa),
    plotgradientcolor: a(k.useplotgradientcolor, 1) ? O(k.plotgradientcolor, A.getColor("plotGradientColor")) : b,
    ratio: c(u.ratio, k.plotfillratio),
    fillAangle: D,
    isRoundEdges: e.chart.useRoundEdges,
    plotBorderColor: c(k.plotbordercolor, n ? h : A.getColor("plotBorderColor")).split(Ja)[0],
    plotBorderAlpha: k.showplotborder == Na || n && k.showplotborder != sb ? Na : c(k.plotborderalpha, u.alpha, k.plotfillalpha, Wa),
    isBar: this.isBar,
    is3d: n,
    dashed: a(u.dashed, k.plotborderdashed, 0),
    dashLen: a(u.dashlen, k.plotborderdashlen, 5),
    dashGap: a(u.dashgap, k.plotborderdashgap, 4),
    borderWidth: a(k.plotborderthickness, sb),
    showValues: a(u.showvalues, q.showValues),
    yAxis: z,
    use3DLighting: a(k.use3dlighting, 1),
    _sourceDataset: u,
    hoverEffects: ha
   }, this);
   for (k = 0; k < l; k += 1)(q = G[k]) ? (C = ba.getCleanValue(q.value, v), null === C ? f.data.push({
    y: null
   }) : (p = !0, q = u(q, k, C), f.data.push(q), q.previousY = this.pointValueWatcher(e, C, z, N, k, m, r))) : f.data.push({
    y: null
   });
   !d || p || this.realtimeEnabled || (f.showInLegend = !1);
   return f
  },
  defaultSeriesType: "column"
 }, ib);
 qa("mslinebase", {
  hasVDivLine: !0,
  point: function (d, h, f, u, e, k) {
   d = a(u.ignoreemptydatasets, 0);
   var l = !1,
    n = this.colorManager,
    m, D;
   m = e.chart;
   var p =
    f.data || [];
   D = e[g];
   var G = c(h.type, this.defaultSeriesType),
    q = c(h.isStacked, e.plotOptions[G] && e.plotOptions[G].stacking),
    r = c(this.isValueAbs, D.isValueAbs, !1),
    N = a(h.yAxis, 0),
    v = this.numberFormatter,
    z = fa(c(f.color, u.linecolor, n.getPlotColor())),
    ba = a(f.alpha, u.linealpha, Wa),
    A = a(u.showshadow, this.defaultPlotShadow, 1),
    B = a(f.drawanchors, f.showanchors, u.drawanchors, u.showanchors),
    C = a(f.anchorsides, u.anchorsides, 0),
    F = a(f.anchorstartangle, u.anchorstartangle, 90),
    ha = a(f.anchorradius, u.anchorradius, 3),
    E = fa(c(f.anchorbordercolor,
     u.anchorbordercolor, z)),
    ua = a(f.anchorborderthickness, u.anchorborderthickness, 1),
    n = fa(c(f.anchorbgcolor, u.anchorbgcolor, n.getColor("anchorBgColor"))),
    ja = c(f.anchoralpha, u.anchoralpha, Wa),
    H = c(f.anchorbgalpha, u.anchorbgalpha, ja),
    I = ja && c(f.anchorshadow, u.anchorshadow, 0),
    ra = h.hoverEffects;
   h.name = s(f.seriesname);
   if (0 === a(f.includeinlegend) || void 0 === h.name || 0 === ba && 1 !== B) h.showInLegend = !1;
   h.marker = {
    enabled: Boolean(a(B, 1)),
    fillColor: {
     FCcolor: {
      color: n,
      alpha: H * ja / 100 + b
     }
    },
    lineColor: {
     FCcolor: {
      color: E,
      alpha: ja +
       b
     }
    },
    lineWidth: ua,
    radius: ha,
    symbol: La(C),
    startAngle: F
   };
   h.color = {
    FCcolor: {
     color: z,
     alpha: ba
    }
   };
   h.shadow = A ? {
    opacity: A ? ba / 100 : 0
   } : !1;
   h.anchorShadow = I;
   h.step = c(this.stepLine, h.step);
   h.drawVerticalJoins = Boolean(a(h.drawVerticalJoins, u.drawverticaljoins, 1));
   h.useForwardSteps = Boolean(a(h.useForwardSteps, u.useforwardsteps, 1));
   h.lineWidth = a(f.linethickness, u.linethickness, 2);
   m = h._dataParser = Ab.line(e, {
    seriesname: h.name,
    plottooltext: f.plottooltext,
    lineAlpha: ba,
    anchorAlpha: ja,
    showValues: a(f.showvalues, D.showValues),
    yAxis: N,
    lineDashed: Boolean(a(f.dashed, u.linedashed, 0)),
    lineDashLen: a(f.linedashlen, u.linedashlen, 5),
    lineDashGap: a(f.linedashgap, u.linedashgap, 4),
    lineThickness: h.lineWidth,
    lineColor: z,
    valuePosition: c(f.valueposition, m.valuePosition),
    drawAnchors: B,
    anchorBgColor: n,
    anchorBgAlpha: H,
    anchorBorderColor: E,
    anchorBorderThickness: ua,
    anchorRadius: ha,
    anchorSides: C,
    anchorAngle: F,
    anchorShadow: h.anchorShadow,
    anchorStartAngle: a(f.anchorstartangle, u.anchorstartangle),
    _sourceDataset: f,
    hoverEffects: ra,
    imageUrl: c(f.anchorimageurl,
     u.anchorimageurl),
    imageScale: c(f.anchorimagescale, u.anchorimagescale, 100),
    imageAlpha: c(f.anchorimagealpha, u.anchorimagealpha, 100)
   }, this);
   for (u = 0; u < k; u += 1)(D = p[u]) ? (f = v.getCleanValue(D.value, r), null === f ? h.data.push({
    y: null
   }) : (l = !0, D = m(D, u, f), h.data.push(D), D.previousY = this.pointValueWatcher(e, f, N, q, u, 0, G))) : h.data.push({
    y: null
   });
   !d || l || this.realtimeEnabled || (h.showInLegend = !1);
   return h
  },
  defaultSeriesType: "line",
  defaultPlotShadow: 1,
  defaultZeroPlaneHighlighted: !1
 }, ib);
 qa("msareabase", {
  hasVDivLine: !0,
  point: function (d, h, f, u, e, k) {
   d = a(u.ignoreemptydatasets, 0);
   var n = !1,
    m = e.chart,
    D = f.data || [],
    p = e[g],
    G = c(h.type, this.defaultSeriesType),
    q = c(h.isStacked, e.plotOptions[G] && e.plotOptions[G].stacking),
    r = c(this.isValueAbs, p.isValueAbs, !1),
    s = a(h.yAxis, 0),
    N = e[g].numberFormatter,
    v = this.colorManager,
    z = v.getPlotColor(),
    ba = c(f.color, u.plotfillcolor, z).split(Ja)[0].replace(/^#?/g, "#").split(Ja)[0],
    A = c(f.alpha, u.plotfillalpha, u.areaalpha, this.areaAlpha, 70),
    B = a(u.plotfillangle, 270),
    z = c(f.plotbordercolor, u.plotbordercolor,
     u.areabordercolor, this.isRadar ? z : "666666").split(Ja)[0],
    C = c(f.showplotborder, u.showplotborder) == Na ? Na : c(f.plotborderalpha, u.plotborderalpha, f.alpha, u.plotfillalpha, u.areaalpha, "95"),
    F = a(u.plotborderangle, 270),
    ha = a(f.anchorsides, u.anchorsides, 0),
    E = a(f.anchorstartangle, u.anchorstartangle, 90),
    ja = a(f.anchorradius, u.anchorradius, 3),
    ua = fa(c(f.anchorbordercolor, u.anchorbordercolor, ba)),
    H = a(f.anchorborderthickness, u.anchorborderthickness, 1),
    I = fa(c(f.anchorbgcolor, u.anchorbgcolor, v.getColor("anchorBgColor"))),
    ra = Boolean(qa.area2dbase.parseAnchorVisibility(f, u, 0)),
    ra = a(f.anchoralpha, u.anchoralpha, this.anchorAlpha, ra ? Wa : 0),
    K = a(f.anchorbgalpha, u.anchorbgalpha, ra),
    Ba = ra && c(f.anchorshadow, u.anchorshadow, 0),
    Ha = h.hoverEffects;
   this.isRadar || (ba += Ja + (a(u.useplotgradientcolor, 1) ? O(u.plotgradientcolor, v.getColor("plotGradientColor")) : b), ba = ba.replace(/,+?$/, ""));
   h.step = c(this.stepLine, h.step);
   h.drawVerticalJoins = Boolean(a(h.drawVerticalJoins, u.drawverticaljoins, 1));
   h.useForwardSteps = Boolean(a(h.useForwardSteps, u.useforwardsteps,
    1));
   h.name = c(f.seriesname);
   if (0 === a(f.includeinlegend) || void 0 === h.name) h.showInLegend = !1;
   h.fillColor = {
    FCcolor: {
     color: ba,
     alpha: A,
     ratio: kb,
     angle: B
    }
   };
   h.color = ba;
   h.shadow = {
    opacity: a(u.showshadow, 1) ? C / 100 : 0
   };
   h.anchorShadow = Ba;
   h.lineColor = {
    FCcolor: {
     color: z,
     alpha: C,
     ratio: Wa,
     angle: F
    }
   };
   h.lineWidth = c(f.plotborderthickness, u.plotborderthickness, 1);
   h.dashStyle = Boolean(a(f.dashed, u.plotborderdashed, 0)) ? l(a(f.dashlen, u.plotborderdashlen, 5), a(f.dashgap, u.plotborderdashgap, 4), h.lineWidth) : "none";
   h.marker = {
    fillColor: {
     FCcolor: {
      color: I,
      alpha: K * ra / 100 + b
     }
    },
    lineColor: {
     FCcolor: {
      color: ua,
      alpha: ra + b
     }
    },
    lineWidth: H,
    radius: ja,
    symbol: La(ha),
    startAngle: E
   };
   f = h._dataParser = Ab.area(e, {
    seriesname: h.name,
    plottooltext: f.plottooltext,
    lineAlpha: C,
    anchorAlpha: ra,
    showValues: a(f.showvalues, p.showValues),
    yAxis: s,
    fillColor: ba,
    fillAlpha: A,
    valuePosition: c(f.valueposition, m.valuePosition),
    drawAnchors: Boolean(a(f.drawanchors, u.drawanchors, u.showanchors, 1)),
    anchorBgColor: I,
    anchorBgAlpha: K,
    anchorBorderColor: ua,
    anchorBorderThickness: H,
    anchorRadius: ja,
    anchorSides: ha,
    anchorAngle: E,
    anchorShadow: h.anchorShadow,
    getLink: this.linkClickFN,
    anchorStartAngle: a(f.anchorstartangle, u.anchorstartangle),
    _sourceDataset: f,
    hoverEffects: Ha,
    imageUrl: c(f.anchorimageurl, u.anchorimageurl),
    imageScale: c(f.anchorimagescale, u.anchorimagescale, 100),
    imageAlpha: c(f.anchorimagealpha, u.anchorimagealpha, 100)
   }, this);
   for (m = 0; m < k; m += 1)(p = D[m]) ? (u = p ? N.getCleanValue(p.value, r) : null, null === u ? h.data.push({
     y: null
    }) : (n = !0, p = f(p, m, u), h.data.push(p), p.previousY = this.pointValueWatcher(e, u, s, q, m, 0, G))) :
    h.data.push({
     y: null
    });
   !d || n || this.realtimeEnabled || (h.showInLegend = !1);
   return h
  },
  defaultSeriesType: "area",
  defaultPlotShadow: 0
 }, ib);
 qa("scatterbase", {
  showValues: 0,
  defaultPlotShadow: 0,
  rendererId: "cartesian",
  defaultSeriesType: "scatter",
  canvasPaddingModifiers: ["anchorlabel"],
  point: function (d, h, f, u, e, k, n) {
   d = a(u.ignoreemptydatasets, 0);
   var m = this.colorManager,
    D = m.getPlotColor(),
    p, G, q, r, N, v, z, ba, A, B, C, F, ha, E, ja, ua, H, I, ra;
   k = !1;
   var K, Ba;
   N = a(f.drawline, u.drawlines, 0);
   v = a(f.drawprogressioncurve, 0);
   r = f.data || [];
   var Ha, ia, Da, xa, L, Q = a(f.showvalues, e[g].showValues),
    P = this.numberFormatter,
    Ka, ea = h._showRegression = a(f.showregressionline, u.showregressionline, 0);
   h.zIndex = 1;
   h.name = s(f.seriesname);
   if (0 === a(f.includeinlegend) || void 0 === h.name) h.showInLegend = !1;
   if (N || v) q = fa(c(f.color, D)), r = c(f.alpha, Wa), N = a(f.linethickness, u.linethickness, 2), v = Boolean(a(f.linedashed, f.dashed, u.linedashed, 0)), z = a(f.linedashlen, u.linedashlen, 5), ba = a(f.linedashgap, u.linedashgap, 4), h.color = Y(c(f.linecolor, u.linecolor, q), a(f.linealpha,
    u.linealpha, r)), h.lineWidth = N, h.dashStyle = v ? l(z, ba, N) : "none";
   N = Boolean(a(f.drawanchors, f.showanchors, u.drawanchors, u.showanchors, 1));
   n = a(f.anchorsides, u.anchorsides, n + 3);
   v = a(f.anchorradius, u.anchorradius, 3);
   q = fa(c(f.anchorbordercolor, f.color, u.anchorbordercolor, q, D));
   D = a(f.anchorborderthickness, u.anchorborderthickness, 1);
   z = fa(c(f.anchorbgcolor, u.anchorbgcolor, m.getColor("anchorBgColor")));
   ba = c(f.anchoralpha, f.alpha, u.anchoralpha, Wa);
   C = c(f.anchorbgalpha, f.alpha, u.anchorbgalpha, ba);
   K = c(f.anchorstartangle,
    u.anchorstartangle, 90);
   h.anchorShadow = m = a(u.anchorshadow, 0);
   h.marker = {
    fillColor: this.getPointColor(z, Wa),
    lineColor: {
     FCcolor: {
      color: q,
      alpha: ba + b
     }
    },
    lineWidth: D,
    radius: v,
    symbol: La(n)
   };
   r = f.data || [];
   L = r.length;
   ea && (h.events = {
    hide: this.hideRLine,
    show: this.showRLine
   }, Ha = {
    sumX: 0,
    sumY: 0,
    sumXY: 0,
    sumXsqure: 0,
    sumYsqure: 0,
    xValues: [],
    yValues: []
   }, xa = a(f.showyonx, u.showyonx, 1), ia = fa(c(f.regressionlinecolor, u.regressionlinecolor, q)), Da = a(f.regressionlinethickness, u.regressionlinethickness, D), p = ca(a(f.regressionlinealpha,
    u.regressionlinealpha, ba)), ia = Y(ia, p));
   for (G = 0; G < L; G += 1)(A = r[G]) ? (p = P.getCleanValue(A.y), ra = P.getCleanValue(A.x), null === p ? h.data.push({
    y: null,
    x: ra
   }) : (k = !0, Ba = this.getPointStub(A, p, P.xAxis(ra), e, f, Q), F = a(A.anchorsides, n), ha = a(A.anchorradius, v), E = fa(c(A.anchorbordercolor, q)), ja = a(A.anchorborderthickness, D), ua = fa(c(A.anchorbgcolor, z)), H = c(A.anchoralpha, A.alpha, ba), I = c(A.anchorbgalpha, C), B = Boolean(a(A.anchorshadow, m, 0)), Ka = this.pointHoverOptions(A, h, {
    plotType: "anchor",
    anchorBgColor: ua,
    anchorAlpha: H,
    anchorBgAlpha: I,
    anchorAngle: K,
    anchorBorderThickness: ja,
    anchorBorderColor: E,
    anchorBorderAlpha: H,
    anchorSides: F,
    anchorRadius: ha,
    shadow: void 0
   }), h.data.push({
    y: p,
    x: ra,
    displayValue: Ba.displayValue,
    toolText: Ba.toolText,
    link: Ba.link,
    marker: {
     enabled: N,
     shadow: B && {
      opacity: H / 100
     },
     fillColor: {
      FCcolor: {
       color: ua,
       alpha: I * H / 100 + b
      }
     },
     lineColor: {
      FCcolor: {
       color: E,
       alpha: H
      }
     },
     lineWidth: ja,
     radius: ha,
     symbol: La(F),
     startAngle: c(A.anchorstartangle, f.anchorstartangle, u.anchorstartangle, 90)
    },
    hoverEffects: Ka.enabled && Ka.options,
    rolloverProperties: Ka.enabled &&
     Ka.rolloverOptions
   }), this.pointValueWatcher(e, p, ra, ea && Ha))) : h.data.push({
    y: null
   });
   ea && (f = this.getRegressionLineSeries(Ha, xa, L), this.pointValueWatcher(e, f[0].y, f[0].x), this.pointValueWatcher(e, f[1].y, f[1].x), e = {
    type: "line",
    color: ia,
    showInLegend: !1,
    lineWidth: Da,
    enableMouseTracking: !1,
    marker: {
     enabled: !1
    },
    data: f,
    zIndex: 0
   }, h = [h, e]);
   d && !k && (h.showInLegend = !1);
   return h
  },
  postSeriesAddition: function (b, c) {
   for (var d = b.chart, h = c.chart, e = b.series, f = 0, g = e.length; f < g; f += 1) e[f]._showRegression && (e[f].relatedSeries = [f + 1]);
   d.clipBubbles = a(h.clipbubbles, 1)
  },
  categoryAdder: function (d, h) {
   var f, u = 0,
    e, k = h[g].x,
    m, D = h.xAxis,
    p, G, q = d.chart,
    r = parseInt(q.labelstep, 10),
    s = a(q.showlabels, 1),
    N = c(q.xaxislabelmode, "categories").toLowerCase(),
    z = this.colorManager,
    ba = h[g].numberFormatter,
    A, B, F, ha, E, ja;
   h._FCconf.isXYPlot = !0;
   r = 1 < r ? r : 1;
   k.catOccupied = {};
   if ("auto" !== N && d.categories && d.categories[0] && d.categories[0].category) {
    G = d.categories[0];
    G.font && (h.xAxis.labels.style.fontFamily = G.font);
    void 0 !== (e = a(G.fontsize)) && (1 > e && (e = 1), h.xAxis.labels.style.fontSize =
     e + Ga, n(h.xAxis.labels.style));
    G.fontcolor && (h.xAxis.labels.style.color = G.fontcolor.split(Ja)[0].replace(/^\#?/, "#"));
    f = c(G.verticallinecolor, z.getColor("divLineColor"));
    e = a(G.verticallinethickness, 1);
    m = a(G.verticallinealpha, z.getColor("divLineAlpha"));
    z = a(G.verticallinedashed, 0);
    A = a(G.verticallinedashlen, 4);
    B = a(G.verticallinedashgap, 2);
    F = Y(f, m);
    for (f = 0; f < G.category.length; f += 1) ha = G.category[f], m = ba.getCleanValue(ha.x), null === m || ha.vline || (k.catOccupied[m] = !0, p = a(ha.showlabel, ha.showname, s), E = a(ha.showverticalline,
     ha.showline, ha.sl, 0), ja = a(ha.linedashed, z), p = 0 === p || 0 !== u % r ? b : C(v(ha.label, ha.name)), D.plotLines.push({
     isGrid: !0,
     isCat: !0,
     isDataLabel: !0,
     width: E ? e : 0,
     color: F,
     dashStyle: l(A, B, e, ja),
     value: m,
     label: {
      text: p,
      link: c(ha.link, q.labellink),
      style: pa({}, ha, q, D.labels.style),
      align: la,
      verticalAlign: Ia,
      textAlign: la,
      rotation: 0,
      x: 0,
      y: 0
     }
    }), this.pointValueWatcher(h, null, m), u += 1);
    "mixed" === N && (k.requiredAutoNumericLabels = a(this.requiredAutoNumericLabels, 1))
   }
   else k.requiredAutoNumericLabels = a(this.requiredAutoNumericLabels,
    1);
   k.adjustMinMax = !0
  },
  getPointColor: function (a, b) {
   var c, d;
   a = fa(a);
   b = ca(b);
   c = sa(a, 70);
   d = aa(a, 50);
   return {
    FCcolor: {
     gradientUnits: "objectBoundingBox",
     cx: .4,
     cy: .4,
     r: "100%",
     color: c + Ja + d,
     alpha: b + Ja + b,
     ratio: kb,
     radialGradient: !0
    }
   }
  }
 }, qa.xybase);
 qa("mscombibase", {
  canvasPaddingModifiers: ["anchor", "anchorlabel"],
  series: function (b, d, h) {
   var f, e, u, k, l = b.chart,
    n, m = [],
    D = [],
    p = [],
    G, q, r = d[g],
    s = this.isDual,
    N = 0,
    z;
   d.legend.enabled = Boolean(a(b.chart.showlegend, 1));
   if (b.dataset && 0 < b.dataset.length) {
    this.categoryAdder(b, d);
    k = r.oriCatTmp.length;
    f = 0;
    for (e = b.dataset.length; f < e; f += 1) switch (u = b.dataset[f], G = s && "s" === c(u.parentyaxis, "p").toLowerCase() ? !0 : !1, n = {
     hoverEffects: this.parseSeriesHoverOptions(b, d, u, h),
     visible: !a(u.initiallyhidden, 0),
     legendIndex: f,
     data: []
    }, G ? (n.yAxis = 1, q = v(u.renderas, this.secondarySeriesType), this.secondarySeriesFilter && (z = this.secondarySeriesFilter[q])) : (q = v(u.renderas, this.defaultSeriesType), this.defaultSeriesFilter && (z = this.defaultSeriesFilter[q])), q = q.toLowerCase(), q) {
    case "line":
    case "spline":
     n.type = !0 === z ? q : "line";
     m.push(qa.mslinebase.point.call(this, h, n, u, l, d, k, f));
     break;
    case "area":
    case "splinearea":
     n.type = !0 === z ? q : "area";
     d.chart.series2D3Dshift = !0;
     p.push(qa.msareabase.point.call(this, h, n, u, l, d, k, f));
     break;
    case "column":
    case "column3d":
     D.push(qa.mscolumn2dbase.point.call(this, h, n, b.dataset[f], l, d, k, f, void 0, N));
     N += 1;
     break;
    default:
     G ? (n.type = "line", m.push(qa.mslinebase.point.call(this, h, n, u, l, d, k, f))) : (D.push(qa.mscolumn2dbase.point.call(this, h, n, b.dataset[f], l, d, k, f, void 0, N)), N += 1)
    }
    "0" !==
    l.areaovercolumns ? (d.chart.areaOverColumns = !0, d.series = d.series.concat(D, p, m)) : (d.chart.areaOverColumns = !1, d.series = d.series.concat(p, D, m));
    if (0 === D.length && 1 !== k) r.hasNoColumn = !0;
    else if (!this.isStacked)
     for (h = 0, f = D.length; h < f; h += 1) D[h].numColumns = f;
    this.configureAxis(d, b);
    b.trendlines && K(b.trendlines, d.yAxis, d[g], s, this.isBar)
   }
  }
 }, qa.mscolumn2dbase)
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-renderer", function () {
 function d(a, b, c, d) {
  var f = b.paper,
   g = b.layers,
   k = c ? "y-axis" : "x-axis",
   l = this.layerAboveDataset = g.layerAboveDataset,
   n = this.layerBelowDataset = g.layerBelowDataset,
   g = l.bands || (l.bands = []),
   m = g.length,
   p = n.bands || (n.bands = []),
   q = p.length,
   r = l.lines || (l.lines = []),
   s = r.length,
   v = n.lines || (n.lines = []),
   z = v.length,
   l = l.labels || (l.labels = []),
   A = l.length,
   n = n.labels || (n.labels = []),
   B = n.length;
  this.renderer = b;
  this.axisData = a || {};
  this.globalOptions =
   b.options;
  this.isVertical = c;
  this.topBandGroup = this.topBandGroup || f.group(k + "-bands", this.layerAboveDataset);
  this.belowBandGroup = this.belowBandGroup || f.group(k + "-bands", this.layerBelowDataset);
  g.push(this.topBandGroup);
  m && g[m].insertAfter(g[m - 1]);
  p.push(this.belowBandGroup);
  q && p[q].insertAfter(p[q - 1]);
  this.topLineGroup = this.topLineGroup || f.group(k + "-lines", this.layerAboveDataset);
  this.belowLineGroup = this.belowLineGroup || f.group(k + "-lines", this.layerBelowDataset);
  this.topLabelGroup = this.topLabelGroup ||
   f.group(k + "-labels", this.layerAboveDataset);
  this.belowLabelGroup = this.belowLabelGroup || f.group(k + "-labels", this.layerBelowDataset);
  r.push(this.topLineGroup);
  s && r[s].insertAfter(r[s - 1]);
  v.push(this.belowLineGroup);
  z && v[z].insertAfter(v[z - 1]);
  l.push(this.topLabelGroup);
  A && l[A].insertAfter(l[A - 1]);
  n.push(this.belowLabelGroup);
  B && n[B].insertAfter(n[B - 1]);
  this.isReverse = d;
  this.configure()
 }

 function m(a, b, c, d) {
  return Ma(b - c[1] - d.top, a - c[0] - d.left)
 }

 function z(a, b) {
  var c = b ? 360 : Wa;
  a = (a || 0) % c;
  return 0 > a ? c + a :
   a
 }
 var q = this,
  E = q.window,
  b = q.hcLib,
  K = b.Raphael,
  I = b.chartAPI,
  c = /msie/i.test(E.navigator.userAgent) && !E.opera,
  s = E.document,
  a = E.Image,
  v = "VML" === K.type,
  O = b.BLANKSTRING,
  C = b.getPosition,
  g = "rgba(192,192,192," + (c ? .002 : 1E-6) + ")",
  c = b.TOUCH_THRESHOLD_PIXELS,
  f = b.CLICK_THRESHOLD_PIXELS,
  l = b.stubFN,
  p = {
   pageX: 0,
   pageY: 0
  },
  F = parseFloat,
  Q = parseInt,
  k = b.extend2,
  B = b.addEvent,
  A = b.getMouseCoordinate,
  W = b.removeEvent,
  r = b.pluck,
  oa = b.pluckNumber,
  ga = b.toRaphaelColor,
  $ = b.setImageDisplayMode,
  V = b.FC_CONFIG_STRING,
  ta = b.plotEventHandler,
  za = b.isArray,
  Aa = b.each = function (a, b, c, d) {
   var f;
   c || (c = a);
   d || (d = {});
   if (za(a))
    for (f = 0; f < a.length; f += 1) {
     if (!1 === b.call(c, a[f], f, a, d)) return f
    }
   else if (null !== a && void 0 !== a)
    for (f in a)
     if (!1 === b.call(c, a[f], f, a, d)) return f
  },
  Z = b.createElement,
  U = b.createContextMenu,
  na = b.hasTouch,
  H = na ? c : f,
  T = b.getSentenceCase,
  fa = b.getCrispValues,
  n = b.getValidValue,
  L = b.getFirstValue,
  ca = b.regex.dropHash,
  aa = b.HASHSTRING,
  sa = function (a) {
   return a !== Ea && null !== a
  },
  Y = function (a, b) {
   a[1] === a[4] && (a[1] = a[4] = pa(a[1]) + b % 2 / 2);
   a[2] === a[5] &&
    (a[2] = a[5] = pa(a[2]) + b % 2 / 2);
   return a
  },
  Ea, la = 8 === s.documentMode ? "visible" : "",
  ya = E.Math,
  Ia = ya.sin,
  ma = ya.cos,
  Ma = ya.atan2,
  pa = ya.round,
  qa = ya.min,
  La = ya.max,
  Ya = ya.abs,
  ib = ya.ceil,
  Ja = ya.floor,
  Ta = 180 / ya.PI,
  Na = ya.PI,
  sb = Na / 2,
  Wa = 2 * Na,
  Ga = Na + sb,
  Sb = b.getFirstColor,
  Qb = b.graphics.getLightColor,
  Fb = b.POSITION_TOP,
  jb = b.POSITION_BOTTOM,
  yb = b.POSITION_RIGHT,
  kb = b.POSITION_LEFT;
 K.ca.ishot = function (a) {
  if (this.removed) return !1;
  var b = this.node;
  a = a || "";
  b.ishot = a;
  switch (this.type) {
  case "group":
   for (b = this.bottom; b;) b.attr("ishot",
    a), b = b.next;
   break;
  case "text":
   if (K.svg)
    for (b = b.getElementsByTagName("tspan")[0]; b;) b.ishot = a, b = b.nextSibling
  }
  return !1
 };
 K.addSymbol({
  printIcon: function (a, b, c) {
   var d = .75 * c,
    f = .5 * c,
    g = .33 * c,
    k = pa(a - c) + .5,
    l = pa(b - c) + .5,
    n = pa(a + c) + .5;
   c = pa(b + c) + .5;
   var m = pa(a - d) + .5,
    p = pa(b - d) + .5,
    d = pa(a + d) + .5,
    q = pa(b + f) + .5,
    r = pa(a + f) + .5,
    s = pa(b + g) + .5;
   a = pa(a - f) + .5;
   g = pa(b + g + g) + .5;
   return ["M", m, l, "L", d, l, d, p, m, p, "Z", "M", k, p, "L", k, q, m, q, m, b, d, b, d, q, n, q, n, p, "Z", "M", m, b, "L", m, c, d, c, d, b, "Z", "M", r, s, "L", a, s, "M", r, g, "L", a, g]
  },
  exportIcon: function (a,
   b, c) {
   var d = .66 * c,
    f = .5 * d,
    g = pa(a - c) + .5,
    k = pa(b - c) + .5,
    l = pa(a + c) + .5;
   c = pa(b + c) - .5;
   var n = pa(a - f) + .5,
    m = b < c - 3 ? c - 3 : pa(b) + .5,
    f = pa(a + f) - .5,
    p = pa(a + d) - .5,
    d = pa(a - d) + .5;
   return ["M", g, m, "L", g, c, l, c, l, m, l, c, g, c, "Z", "M", a, c - 1, "L", d, b, n, b, n, k, f, k, f, b, p, b, "Z"]
  }
 });
 b.rendererRoot = I("renderer.root", {
  standaloneInit: !1,
  isRenderer: !0,
  inited: !1,
  callbacks: [],
  init: function (a, b, c) {
   var d = this,
    f = d.container = a && a.containerElement || b.chart.renderTo,
    g = b.tooltip,
    k = d.layer,
    l, n;
   d.options = b;
   d.logic = a;
   d.definition = a.dataObj;
   d.smartLabel =
    a.smartLabel;
   d.numberFormatter = a.numberFormatter;
   d.fusionCharts = a.chartInstance;
   d.linkClickFN = a.linkClickFN;
   n = (l = b.chart) && l.animation && l.animation.duration;
   d.animationCompleteQueue = [];
   f.innerHTML = O;
   f = d.paper = d.fusionCharts.jsVars.paper = new K(f, f.offsetWidth || a.width, f.offsetHeight || a.height);
   !1 !== q.core.options._useSVGDescTag && f._desc && (l = a.friendlyName || "Vector image", d.definition && d.definition.chart && d.definition.chart.caption && (l += ' with caption "' + d.definition.chart.caption + '"'), f._desc(l));
   d.chartWidth = f.width;
   d.chartHeight = f.height;
   d.elements || (d.elements = {});
   k || (k = d.layers = {}, k.background = k.background || f.group("background"), k.dataset = k.dataset || f.group("dataset").insertAfter(k.background), k.tracker = k.tracker || f.group("hot").insertAfter(k.dataset));
   g && !1 !== g.enabled && (f.tooltip(g.style, g.shadow, g.constrain), k.tracker.trackTooltip(!0), k.dataset.trackTooltip(!0));
   d.disposeChartStyleSheet();
   d.setMargins();
   d.drawBackground();
   d.drawButtons();
   d.drawGraph();
   b.legend && b.legend.enabled && d.drawLegend();
   d.drawCaption();
   d.drawLogo();
   d.setChartEvents();
   d.drawLabels && d.drawLabels();
   Aa(b.callbacks, function (a) {
    a.apply(d, this)
   }, [a]);
   Aa(d.callbacks, function (a) {
    a.apply(d, this)
   }, [a]);
   d.fusionCharts.annotations && d.fusionCharts.annotations.draw(d);
   d.createChartStyleSheet();
   d.options.nativeMessage || n || q.raiseEvent("internal.animationComplete", {}, d.fusionCharts);
   d.hasRendered = !0;
   c && c(d)
  },
  disposeChartStyleSheet: function () {
   this.paper.cssClear()
  },
  createChartStyleSheet: function () {
   this.paper.cssRender()
  },
  addCSSDefinition: function (a,
   b) {
   var c = this.paper;
   b.color && (b.fill = b.color);
   c.cssAddRule(a, b)
  },
  animationCompleteQueue: [],
  animationComplete: function () {
   var a, b, c, d;
   this.animatedElements = this.animatedElements ? ++this.animatedElements : 1;
   if (this.animatedElements === this.animatingElementsCount) {
    c = this.animationCompleteQueue;
    a = 0;
    for (b = c.length; a < b; a++) d = c[a], d.fn && d.fn.call(d.scope);
    this.animationCompleteQueue = [];
    q.raiseEvent("internal.animationComplete", {}, this.fusionCharts)
   }
  },
  getAnimationCompleteFn: function () {
   var a = this;
   a.animatingElementsCount =
    a.animatingElementsCount ? ++a.animatingElementsCount : 1;
   return function () {
    a.animationComplete()
   }
  },
  reinit: function (a, b, c) {
   this.hasRendered || this.init(b, c)
  },
  dispose: function () {
   var a = this.eventListeners,
    b = a && a.length;
   this.disposing = !0;
   if (b)
    for (; b--;) a[b].unlisten();
   if (this.toolbar && this.toolbar.length) {
    for (; this.toolbar.length;) a = this.toolbar.pop(), a.remove();
    this.toolbar.add = null
   }
   if (this.menus && this.menus.length)
    for (; this.menus.length;) a = this.menus.pop(), a.destroy();
   this.paper && (this.paper.clear(), this.paper.remove(),
    delete this.paper);
   this.exportIframe && (this.exportIframe.parentNode.removeChild(this.exportIframe), delete this.exportIframe);
   delete this.disposing;
   this.container = null;
   this.disposed = !0
  },
  onContainerClick: function (a) {
   var c = a.target || a.originalTarget || a.srcElement || a.relatedTarget || a.fromElement,
    d = a.data,
    f = d.fusionCharts;
   a = b.getMouseCoordinate(d.container, a.originalEvent);
   f.ref && (f = k({
    height: f.args.height,
    width: f.args.width,
    pixelHeight: f.ref.offsetHeight,
    pixelWidth: f.ref.offsetWidth,
    id: f.args.id,
    renderer: f.args.renderer,
    container: f.options.containerElement
   }, a), q.raiseEvent("chartclick", f, d.logic.chartInstance), c && c.ishot && d || d.options.chart.link && d.linkClickFN.call(d, d))
  },
  onContainerMouseMove: function (a) {
   var c = a.data,
    d = c.fusionCharts;
   a = b.getMouseCoordinate(c.container, a.originalEvent);
   d.ref && (d = k({
    height: d.args.height,
    width: d.args.width,
    pixelHeight: d.ref.offsetHeight,
    pixelWidth: d.ref.offsetWidth,
    id: d.args.id,
    renderer: d.args.renderer,
    container: d.options.containerElement
   }, a), q.raiseEvent("chartMouseMove", d, c.logic.chartInstance))
  },
  onContainerRollOver: function (a) {
   var c = a.data,
    d = c.fusionCharts;
   a = b.getMouseCoordinate(c.container, a.originalEvent);
   d.ref && (d = k({
    height: d.args.height,
    width: d.args.width,
    pixelHeight: d.ref.offsetHeight,
    pixelWidth: d.ref.offsetWidth,
    id: d.args.id,
    renderer: d.args.renderer,
    container: d.options.containerElement
   }, a), q.raiseEvent("chartRollOver", d, c.logic.chartInstance))
  },
  onContainerRollOut: function (a) {
   var c = a.chart,
    d = c.fusionCharts;
   a = b.getMouseCoordinate(c.container, a.event);
   d.ref && (d = k({
    height: d.args.height,
    width: d.args.width,
    pixelHeight: d.ref.offsetHeight,
    pixelWidth: d.ref.offsetWidth,
    id: d.args.id,
    renderer: d.args.renderer,
    container: d.options.containerElement
   }, a), q.raiseEvent("chartRollOut", d, c.logic.chartInstance))
  },
  mouseStateIn: !1,
  winMouseHover: function (a) {
   var b = a.originalEvent,
    b = b.target || b.originalTarget || b.srcElement || b.relatedTarget || b.fromElement,
    c = a.data,
    d = c.paper;
   a = {
    chart: c,
    event: a.originalEvent
   };
   v ? d.getById(b.parentNode.raphaelid) || (c.onContainerRollOut(a), c.mouseStateIn = !1, W(s, "mouseover",
    c.winMouseHover)) : b.viewportElement || (c.mouseStateIn = !1, c.onContainerRollOut(a), W(E, "mouseover", c.winMouseHover))
  },
  chartHoverManager: function () {
   return function (a) {
    var b = a.type,
     c = a.data,
     d = c.eventListeners || (c.eventListeners = []);
    "mouseover" !== b && "touchstart" !== b || !1 !== c.mouseStateIn || (c.mouseStateIn = !0, c.onContainerRollOver(a), d.push(B(v ? s : E, "mouseover", c.winMouseHover, c)))
   }
  }(),
  setChartEvents: function () {
   var a = this.options,
    b = this.eventListeners || (this.eventListeners = []),
    a = this.link = a.chart.link,
    c = this.container,
    d = oa(this.definition && this.definition.chart.enablechartmousemoveevent, 0);
   W(c, "click", this.onContainerClick);
   b.push(B(c, "click", this.onContainerClick, this));
   W(this.paper.canvas, "mouseover", this.chartHoverManager, this);
   W(this.paper.canvas, "touchstart", this.chartHoverManager, this);
   W(this.paper.canvas, "mouseout", this.chartHoverManager, this);
   W(this.paper.canvas, "touchend", this.chartHoverManager, this);
   b.push(B(this.paper.canvas, "mouseover touchstart mouseout touchend", this.chartHoverManager, this));
   W(c,
    "mousemove", this.onContainerMouseMove, this);
   W(c, "touchmove", this.onContainerMouseMove, this);
   d && b.push(B(c, "mousemove touchmove", this.onContainerMouseMove, this));
   this.paper.canvas.style.cursor = K.svg ? a && "pointer" || "default" : a && "hand" || "default"
  },
  onOverlayMessageClick: function () {
   var a = this.elements;
   K.animation({
    opacity: 0
   }, 1E3);
   a.messageText && a.messageText.hide();
   a.messageVeil && a.messageVeil.hide()
  },
  showMessage: function (a, b) {
   var c = this.paper,
    d = this.options.chart,
    f = this.elements,
    g = f.messageText,
    k = f.messageVeil,
    l = c.width,
    n = c.height;
   k || (k = f.messageVeil = c.rect(0, 0, l, n).attr({
    fill: "rgba(0,0,0,0.2)",
    stroke: "none"
   }));
   k.show().toFront().attr("cursor", b ? "pointer" : "default")[b ? "click" : "unclick"](this.onOverlayMessageClick, this);
   g || (g = f.messageText = c.text(l / 2, n / 2, O).attr({
    fill: "rgba(255,255,255,1)",
    "font-family": "Verdana,sans",
    "font-size": 10,
    "line-height": 14,
    direction: d.textDirection,
    ishot: !0
   }));
   a = a || O;
   this.smartLabel.setStyle({
    "line-height": "14px",
    "font-family": "Verdana,sans",
    "font-size": "10px"
   });
   c = this.smartLabel.getSmartText(a,
    l - (d.spacingRight || 0) - (d.spacingLeft || 0), n - (d.spacingTop || 0) - (d.spacingBotton || 0));
   g.attr({
    text: c.text,
    ishot: !0,
    cursor: b ? "pointer" : "default"
   })[b ? "click" : "unclick"](this.onOverlayMessageClick, this).show().toFront()
  },
  drawButtons: function () {
   var a = this,
    b = a.logic,
    c = "zoomline" === b.rendererId,
    d = a.paper,
    f = a.elements,
    g = a.toolbar || (a.toolbar = []),
    k = a.menus || (a.menus = []),
    l = a.layers,
    n = a.options,
    m = n[V],
    b = m && m.outCanvasStyle || b.outCanvasStyle || {},
    m = n.chart.toolbar || {},
    p = m.hDirection,
    q = c ? 1 : m.vDirection,
    r = m.button || {},
    s = r.scale,
    v = r.width * r.scale,
    z = r.height * r.scale,
    A = p * (r.spacing * r.scale + v),
    B = r.radius,
    C = (n = n.exporting) && n.buttons || {},
    F = C.exportButton && !1 !== C.exportButton.enabled,
    C = C.printButton && !1 !== C.printButton.enabled,
    E, H = l.buttons || (l.buttons = d.group("buttons").trackTooltip(!0));
   g.y || (g.y = (c ? 0 : m.y) + m.vMargin * q + qa(0, z * q));
   g.x || (g.x = m.x + m.hMargin * p - La(0, v * p));
   g.count = 0;
   g.add = function (a, b, c) {
    c = "string" === typeof c ? {
     tooltip: c
    } : c || {};
    var h = 0 === g.count ? A - p * r.spacing * r.scale : A,
     h = c.x || (g.x += h),
     f = c.tooltip || "";
    g.push(a =
     d.button(h, c.y || g.y, Ea, a, {
      width: v,
      height: z,
      r: B,
      id: g.count++,
      verticalPadding: r.symbolHPadding * s,
      horizontalPadding: r.symbolHPadding
     }, H).attr({
      ishot: !0,
      fill: [r.fill, r.labelFill, r.symbolFill, r.hoverFill],
      stroke: [r.stroke, r.symbolStroke],
      "stroke-width": [r.strokeWidth, r.symbolStrokeWidth]
     }).tooltip(f).buttonclick(b));
    return a
   };
   F && (k.push(E = f.exportMenu = U({
    chart: a,
    basicStyle: b,
    items: function (b) {
     var c = [],
      d = function (b) {
       return function () {
        a.logic.chartInstance.exportChart({
         exportFormat: b
        })
       }
      },
      f;
     for (f in b) c.push({
      text: b[f],
      onclick: d(f)
     });
     return c
    }(n.exportformats)
   })), f.exportButton = g.add("exportIcon", function (a, b) {
    return function () {
     E.visible ? E.hide() : E.show({
      x: a,
      y: b + 1
     })
    }
   }(g.x + v, g.y + z), {
    tooltip: "Export chart"
   }));
   C && (f.printButton = g.add("printIcon", function () {
    a.print()
   }, {
    tooltip: "Print chart"
   }))
  },
  setMargins: function () {
   var a = this.paper,
    b = this.options.chart || {},
    c = pa;
   this.canvasBorderWidth = b.plotBorderWidth || 0;
   this.canvasTop = c(b.marginTop) || 0;
   this.canvasLeft = c(b.marginLeft) || 0;
   this.canvasWidth = c(a.width - (b.marginLeft || 0) -
    (b.marginRight || 0));
   this.canvasHeight = c(a.height - (b.marginTop || 0) - (b.marginBottom || 0));
   this.canvasRight = this.canvasLeft + this.canvasWidth;
   this.canvasBottom = this.canvasTop + this.canvasHeight
  },
  drawBackground: function () {
   var b = this,
    c = b.paper,
    d = b.layers,
    f = b.elements,
    g = d.background,
    k = f.background,
    l = f.chartborder,
    n = b.options.chart || {},
    m = F(n.borderWidth) || 0,
    p = .5 * m,
    r = 2 * m,
    s = n.borderWidth || 0,
    v = b.chartHeight,
    z = b.chartWidth,
    A = f.backgroundImage,
    B = n.bgSWF,
    C = n.bgSWFAlpha / 100,
    E = n.bgImageDisplayMode,
    H = n.bgImageVAlign,
    I = n.bgImageHAlign,
    K = n.bgImageScale,
    L = s + "," + s + "," + (z - 2 * s) + "," + (v - 2 * s),
    Q, ea, O, W, P, U, T;
   c.canvas.style.backgroundColor = n.containerBackgroundColor;
   !g && (g = d.background = c.group("background"));
   d = {
    x: m,
    y: m,
    width: c.width - r,
    height: c.height - r,
    stroke: "none",
    fill: ga(n.backgroundColor)
   };
   k ? k.attr(d) : k = f.background = c.rect(d, g);
   d = {
    x: p,
    y: p,
    width: c.width - m,
    height: c.height - m,
    stroke: n.borderColor,
    "stroke-width": m,
    "stroke-dasharray": n.borderDashStyle,
    fill: "none",
    r: n.borderRadius || 0
   };
   l ? l.attr(d) : l = f.chartborder = c.rect(d,
    g);
   B && (Q = new a, P = O = 1, A = [], Q.onload = function () {
    ea = $(E, H, I, K, s, z, v, Q);
    ea["clip-rect"] = L;
    if (ea.tileInfo)
     for (O = ea.tileInfo.xCount, P = U = ea.tileInfo.yCount, T = ea.y, delete ea.tileInfo; O && ea.width && ea.height;) --U, W ? (A[void 0] = W.clone().attr({
      x: ea.x,
      y: ea.y
     }), g.appendChild(A[void 0])) : A[void 0] = W = c.image(B, g).attr(ea).css({
      opacity: C
     }), ea.y += ea.height, 0 === U && (U = P, --O, ea.x += ea.width, ea.y = T);
    else {
     if (b.disposed || c.disposed) return;
     A[0] = c.image(B, g);
     A[0].attr(ea).css({
      opacity: C
     }).attr({
      visibility: la,
      "clip-rect": L
     })
    }
    q.raiseEvent("BackgroundLoaded", {
     url: B,
     bgImageAlpha: 100 * C,
     bgImageDisplayMode: E,
     bgImageVAlign: H,
     bgImageHAlign: I,
     bgImageScale: K,
     imageWidth: Q.width,
     imageHeight: Q.height
    }, b.logic.chartInstance)
   }, Q.onerror = function (a) {
    q.raiseEvent("BackgroundLoadError", {
     url: B,
     bgImageAlpha: 100 * C,
     error: a,
     bgImageDisplayMode: E,
     bgImageVAlign: H,
     bgImageHAlign: I,
     bgImageScale: K
    }, b.logic.chartInstance)
   }, Q.src = B, f.backgroundImage = A)
  },
  drawGraph: function () {
   var a = this,
    b = a.paper,
    c = a.plots = a.elements.plots,
    d = a.logic,
    f = a.layers,
    g = a.options,
    l = a.elements,
    n = g.chart,
    g = a.datasets =
    g.series,
    m = L(n.rendererId, n.defaultSeriesType),
    p = f.background,
    q = f.dataset = f.dataset || b.group("dataset").insertAfter(p),
    s, v, p = function (a, b) {
     return function (h) {
      var f = c[a],
       g, l = {
        hcJSON: {
         series: []
        }
       },
       n = l.hcJSON.series[a] || (l.hcJSON.series[a] = {}),
       m = d.chartInstance.jsVars._reflowData;
      g = (h = L(h, !f.visible)) ? "visible" : "hidden";
      Aa(f.graphics, function (a) {
       !0 !== a.data("alwaysInvisible") && a.attr("visibility", g)
      });
      f.visible = h;
      b.visible = h;
      n.visible = h;
      k(m, l, !0)
     }
    },
    z = function (b) {
     return function (d, f) {
      a["legendClick" + m] &&
       a["legendClick" + m](c[b], d, f) || a.legendClick && a.legendClick(c[b], d, f)
     }
    },
    A = function (b) {
     return function () {
      return a.getEventArgs && a.getEventArgs(c[b])
     }
    },
    B = function (b, d, f) {
     return function (g, k) {
      d.call(a, c[b], f, {
       numUpdate: g,
       hasAxisChanged: k
      })
     }
    };
   f.tracker = f.tracker || b.group("hot").insertAfter(q);
   a.drawCanvas();
   a.drawAxes();
   c || (c = a.plots = a.plots || [], l.plots = c);
   f = 0;
   for (l = g.length; f < l; f++) b = g[f] || {}, q = b.updatePlot = "updatePlot" + T(r(b.type, b.plotType, m)), q = a[q], s = b.drawPlot = "drawPlot" + T(r(b.type, b.plotType, m)),
    s = a[s] || a.drawPlot, (v = c[f]) || (c.push(v = {
     index: f,
     items: [],
     data: b.data || [],
     name: b.name,
     userID: b.userID,
     setVisible: p(f, b),
     legendClick: z(f),
     getEventArgs: A(f),
     realtimeUpdate: B(f, q || s, b)
    }), b.plot = v, b.legendClick = v.legendClick, b.getEventArgs = v.getEventArgs, b.setVisible = v.setVisible), s.call(a, v, b);
   n.hasScroll && (a.drawScroller(), a.finalizeScrollPlots())
  },
  drawPlot: l,
  drawCanvas: l,
  drawAxes: l,
  drawScroller: function () {},
  drawLegend: function () {
   var a = this,
    b = a.options,
    c = a.paper,
    d = b.chart || {},
    f = b.legend,
    g = f.scroll,
    b = {
     elements: {}
    },
    l = b.elements,
    n = a.layers.legend,
    m = l.box,
    p = l.caption,
    q = l.elementGroup,
    r = "vertical" === f.layout,
    s = d.marginBottom,
    v = d.spacingBottom,
    z = d.spacingLeft,
    A = d.spacingRight,
    B = c.width,
    C = c.height,
    F = a.canvasTop,
    E = f.width,
    H = f.height,
    I = f.borderRadius,
    L = f.backgroundColor,
    Q = f.borderColor,
    W = f.borderWidth || 0,
    U = .5 * W,
    P = .5 * W + 2,
    ga = oa(f.padding, 4),
    V = .5 * ga,
    Z, ub, Ra, Y, wa, Ab, t, w;
   w = g && g.enabled;
   r ? (r = B - A - E, s = F + .5 * (C - s - F - H) + (f.y || 0)) : (r = z + .5 * (B - z - A - E) + (f.x || 0), s = C - v - H);
   v = K.crispBound(r, s, E, H, W);
   r = v.x;
   s = v.y;
   E = v.width;
   H = v.height;
   n || (n = a.layers.legend = c.group("legend").insertBefore(a.layers.tracker).translate(r, s).attr("class", "fusioncharts-legend"));
   a.addCSSDefinition(".fusioncharts-legend .fusioncharts-caption", k({
    "text-anchor": f.title.align
   }, f.title.style));
   f.legendAllowDrag && (a.addCSSDefinition(".fusioncharts-legend", {
    cursor: "move"
   }), ub = r, Ra = s, n.drag(function (a, b) {
    Y = Ab + a;
    wa = t + b;
    Y + E + P > B && (Y = B - E - P);
    wa + H + P > C && (wa = C - H - P);
    Y < P && (Y = P);
    wa < P && (wa = P);
    n.translate(Y - ub, wa - Ra);
    ub = Y;
    Ra = wa
   }, function () {
    Ab = ub;
    t = Ra
   }));
   I = {
    x: 0,
    y: 0,
    width: E,
    height: H,
    r: I,
    stroke: Q,
    "stroke-width": W,
    fill: L || "none",
    ishot: f.legendAllowDrag
   };
   m ? m.attr(I) : m = l.box = c.rect(I, n);
   m.shadow(f && f.shadow);
   w ? (Z = H - ga, m = "," + E + "," + Z, q = l.elementGroup = c.group("legenditems", n).attr({
    "clip-rect": "0," + V + m
   }), g = l.scroller || (l.scroller = c.scroller(E - 10 + V - W, U, 10, H - W, !1, {
    scrollPosition: g.scrollPosition || 0,
    scrollRatio: (Z + ga) / f.totalHeight,
    showButtons: !1,
    displayStyleFlat: g.flatScrollBars
   }, n)), g.attr("fill", f.legendScrollBgColor).scroll(function (b) {
    q.transform(["T", 0, (Z - f.totalHeight) *
b]);
    k(a.fusionCharts.jsVars._reflowData, {
     hcJSON: {
      legend: {
       scroll: {
        position: b
       }
      }
     }
    }, !0)
   })) : q = l.elementGroup = n;
   if (f.title && f.title.text !== O) {
    switch (f.title.align) {
    case "start":
     w = ga;
     break;
    case "end":
     w = E - ga - (w ? 10 : 0);
     break;
    default:
     w = .5 * E
    }
    I = {
     "class": "fusioncharts-caption",
     "text-anchor": f.title.align,
     text: f.title.text,
     title: f.title.originalText || "",
     x: w,
     y: ga,
     fill: f.title.style.color,
     "vertical-align": "top",
     direction: d.textDirection,
     "line-height": f.title.style.lineHeight
    };
    p ? p.attr(I) : p = l.caption = c.text(I, q).attr("class",
     "fusioncharts-caption")
   }
   this["draw" + T(f.type || "point") + "LegendItem"](b)
  },
  drawPointLegendItem: function (a) {
   var b = this,
    c = b.paper,
    d = b.options,
    f = d.series,
    l = d.chart,
    n = l.defaultSeriesType,
    d = d.legend,
    m = d.legendHeight,
    p = d.symbolPadding,
    s = d.textPadding || 2,
    v = oa(d.padding, 4),
    l = l.textDirection,
    z = d.itemHoverStyle,
    B = d.itemHiddenStyle,
    C = d.itemStyle,
    F = C.color,
    B = B && B.color || "#CCCCCC",
    E = z && z.color || F,
    z = d.symbol3DLighting,
    H = d.symbolWidth,
    I = !1 !== d.interactiveLegend,
    K = a.elements,
    L = K.elementGroup;
   a = a.item = [];
   var K = K.item = [],
    Q = [],
    W = {
     line: !0,
     spline: !0,
     scatter: !0,
     bubble: !0,
     dragnode: !0,
     zoomline: !0
    },
    O, ea, U, T, P, V, Z, Y, ub, Ra, $, wa, Ab, t, w, J, M, e, da, R, S;
   wa = 0;
   for (Ab = f.length; wa < Ab; wa += 1)
    if ((O = f[wa]) && !1 !== O.showInLegend)
     if (Y = O.type || n, "point" === O.legendType)
      for (O = O.data || [], P = 0, V = O.length; P < V; P += 1) U = O[P] || {}, !1 !== U.showInLegend && (U._legendType = Y, Q.push(U));
     else switch (O._legendType = Y, Y) {
     case "pie":
     case "pie3d":
     case "funnel":
     case "pyramid":
      Q = O.data;
      break;
     default:
      Q.push(O)
     }
   Q.sort(function (a, b) {
    return (a.legendIndex || 0) - (b.legendIndex ||
     0) || a.__i - b.__i
   });
   d.reversed && Q.reverse();
   f = d.initialItemX || 0;
   n = d.initialItemY || 0;
   P = function (a) {
    var c = this.data("legendItem"),
     d = c.getEventArgs ? c.getEventArgs() : {},
     e;
    a = A(b.logic.chartInstance.ref, a);
    d.chartX = a.chartX;
    d.chartY = a.chartY;
    d.pageX = a.pageX;
    d.pageY = a.pageY;
    d.preventDefaults = function () {
     e = !0
    };
    q.raiseEvent("LegendItemClicked", d, b.logic.chartInstance);
    I && !e && c.legendClick()
   };
   V = function (a) {
    var c = this.data("legendItem"),
     d = c.getEventArgs ? c.getEventArgs() : {};
    a = A(b.logic.chartInstance.ref, a);
    var e = !1 !== c.visible,
     c = c.plot.legend.elements.legendItemText;
    d.chartX = a.chartX;
    d.chartY = a.chartY;
    d.pageX = a.pageX;
    d.pageY = a.pageY;
    e && c && c.attr({
     fill: E
    });
    q.raiseEvent("LegendItemRollover", d, b.logic.chartInstance)
   };
   Z = function (a) {
    var c = this.data("legendItem"),
     d = c.getEventArgs ? c.getEventArgs() : {};
    a = A(b.logic.chartInstance.ref, a);
    var e = !1 !== c.visible,
     c = c.plot.legend.elements.legendItemText;
    d.chartX = a.chartX;
    d.chartY = a.chartY;
    d.pageX = a.pageX;
    d.pageY = a.pageY;
    e && c && c.attr({
     fill: F
    });
    q.raiseEvent("LegendItemRollout",
     d, b.logic.chartInstance)
   };
   b.addCSSDefinition(".fusioncharts-legend .fusioncharts-legenditem", d.itemStyle);
   wa = 0;
   for (Ab = Q.length; wa < Ab; wa += 1) !1 !== Q[wa].showInLegend && (S = {
    elements: {},
    hiddenColor: B,
    itemTextColor: F,
    hoverColor: E
   }, a.push(S), K.push(S.elements), O = Q[wa], ub = f + O._legendX + v, Ra = n + O._legendY - v, $ = O._legendH, ea = O._legendType || Y, U = !1 !== O.visible, T = S.itemLineColor = ga(O.color || {}), O.plot.legend = S, S.elements.legendItemText = c.text({
    "class": "fusioncharts-legenditem",
    x: ub + m + s - 2,
    y: Ra + (O._legendTestY || 0),
    text: O.name,
    fill: U ? F : B,
    "vertical-align": "top",
    direction: l,
    "text-anchor": "start",
    cursor: C.cursor || "pointer",
    ishot: I,
    "line-height": C.lineHeight,
    "font-size": C.fontSize
   }, L).data("legendItem", O), W[ea] ? (ea = Ra + (O._markerYGutter || 0) + p + .5 * H, O.lineWidth && (R = S.elements.legendItemLine = c.path({
    "stroke-width": O.lineWidth,
    stroke: U ? T : B,
    cursor: C.cursor || "pointer",
    ishot: I,
    path: ["M", ub + p, ea, "L", ub + p + H, ea]
   }, L).data("legendItem", O)), O && (M = O.marker) && !1 !== M.enabled && (S.symbolStroke = ga(r((e = M.lineColor) && (e.FCcolor && e.FCcolor.color.split(",")[0] ||
    e), T)), z ? M.fillColor && M.fillColor.FCcolor ? (ea = k({}, M.fillColor), ea.FCcolor.alpha = "100") : ea = r(M.fillColor, T) : ea = {
    FCcolor: {
     color: r((da = M.fillColor) && (da.FCcolor && da.FCcolor.color.split(",")[0] || da), T),
     angle: 0,
     ratio: "0",
     alpha: "100"
    }
   }, S.symbolColor = ga(ea), t = .5 * H, T = ub + p + t, ea = Ra + (O._markerYGutter || 0) + p + t, R && (t *= .6), w = M.symbol.split("_"), J = "spoke" === w[0] ? 1 : 0, ea = w[1] ? S.elements.legendItemSymbol = c.polypath(w[1], T, ea, t, M.startAngle, J, L) : S.elements.legendItemSymbol = c.circle(T, ea, t, L), ea.data("legendItem", O).attr({
    cursor: C.cursor ||
     "pointer",
    stroke: U ? S.symbolStroke : B,
    fill: U ? S.symbolColor : B,
    "stroke-width": 1,
    ishot: I
   }))) : (ea = b.getSymbolPath(ub + p, Ra + (O._markerYGutter || 0) + p, H, H, ea, O, !z), S.symbolColor = ga(ea.color), S.symbolStroke = ga(ea.strokeColor), ea = S.elements.legendItemSymbol = c.path({
    path: ea.path,
    "stroke-width": ea.strokeWidth,
    stroke: U ? S.symbolStroke : B,
    fill: U ? S.symbolColor : B,
    cursor: C.cursor || "pointer",
    ishot: I
   }, L).data("legendItem", O)), S.elements.legendItemBackground = c.rect({
    x: ub,
    y: Ra,
    width: O._totalWidth,
    height: $,
    r: 0,
    fill: ga(O.legendFillColor ||
     g),
    "stroke-width": 1,
    stroke: ga(O.legendBorderColor || "none"),
    cursor: C.cursor || "pointer",
    ishot: I
   }, L).click(P).mouseover(V).mouseout(Z).data("legendItem", O));
   d.reversed && Q.reverse()
  },
  drawCaption: function () {
   var a = this.options.chart,
    b = this.options.title,
    c = this.options.subtitle,
    d = this.paper,
    f = this.smartLabel,
    g = this.elements,
    k = this.layers,
    l = k.caption,
    n = g.caption,
    m = g.subcaption,
    p = b.text,
    q = c && c.text,
    r = b.x,
    s;
   !p && !q || l || (l = k.caption = d.group("caption"), k.tracker ? l.insertBefore(k.tracker) : l.insertAfter(k.dataset));
   p ? (this.addCSSDefinition(".fusioncharts-caption", b.style), s = {
    "class": "fusioncharts-caption",
    text: b.text,
    fill: b.style.color,
    x: r,
    y: b.y || a.spacingTop || 0,
    "text-anchor": b.align || "middle",
    "vertical-align": b.verticalAlign || "top",
    visibility: "visible",
    direction: a.textDirection,
    title: b.originalText || ""
   }, n ? n.attr(s) : n = g.caption = d.text(s, l).attr("class", "fusioncharts-caption"), n.css(b.style), f ? (f.setStyle(b.style), s = f.getOriSize(b.text).height) : s = 10) : n && (n = g.caption = n.remove());
   q ? (this.addCSSDefinition(".fusioncharts-subcaption",
    c.style), s = {
    "class": "fusioncharts-subcaption",
    text: c.text,
    title: c.originalText || "",
    fill: c.style.color,
    x: r,
    y: p ? n.attrs.y + s + 2 : b.y || a.spacingTop || 0,
    "text-anchor": b.align || "middle",
    "vertical-align": "top",
    direction: a.textDirection,
    visibility: "visible"
   }, m ? m.attr(s) : m = g.subcaption = d.text(s, l).attr("class", "fusioncharts-subcaption"), m.css(c.style)) : m && (g.subcaption = m.remove());
   p || q || !l || (k.caption = l.remove())
  },
  drawLogo: function () {
   var b = this,
    c = b.paper,
    d = b.elements,
    f = b.options,
    g = f.credits,
    k = f.chart || {},
    l = k.borderWidth ||
    0,
    n = b.chartHeight,
    m = b.chartWidth,
    p = d.logoImage,
    r = k.logoURL,
    s = k.logoAlpha / 100,
    z = k.logoPosition,
    B = k.logoLink,
    C = k.logoScale,
    F = k.logoLeftMargin,
    H = k.logoTopMargin,
    f = {
     tr: {
      vAlign: Fb,
      hAlign: yb
     },
     bl: {
      vAlign: jb,
      hAlign: kb
     },
     br: {
      vAlign: jb,
      hAlign: yb
     },
     cc: {
      vAlign: "middle",
      hAlign: "middle"
     }
    },
    I, K, L;
   b.logic && g.enabled && c.text().attr({
    text: g.text,
    x: 6,
    y: n - 4,
    "vertical-align": jb,
    direction: k.textDirection,
    "text-anchor": "start",
    fill: "rgba(0,0,0,0.5)",
    title: g.title || ""
   }).css({
    fontSize: 9,
    fontFamily: "Verdana,sans",
    cursor: "pointer",
    _cursor: "hand"
   }).click(function () {
    try {
     E.open(g.href)
    }
    catch (a) {
     (E.top || E).location.href = g.href
    }
   });
   r && (I = new a, (L = f[z]) || (L = {
    vAlign: Fb,
    hAlign: kb
   }), I.onload = function () {
    b.disposed || c.disposed || (K = $("none", L.vAlign, L.hAlign, C, l, m, n, I), v && (K.w = K.width || 0, K.h = K.height || 0), K.src = r, p = b.paper.image(K).translate(F, H).css("opacity", s), B && p.css({
     cursor: "pointer",
     _cursor: "hand"
    }), p.mouseover(function (a) {
     a = A(b.logic.chartInstance.ref, a);
     q.raiseEvent("LogoRollover", {
      logoURL: r,
      logoAlpha: 100 * s,
      logoPosition: z || "tl",
      logoScale: C,
      logoLink: B,
      chartX: a.chartX,
      chartY: a.chartY,
      pageX: a.pageX,
      pageY: a.pageY
     }, b.logic.chartInstance)
    }), p.mouseout(function (a) {
     a = A(b.logic.chartInstance.ref, a);
     q.raiseEvent("LogoRollout", {
      logoURL: r,
      logoAlpha: 100 * s,
      logoPosition: z || "tl",
      logoScale: C,
      logoLink: B,
      chartX: a.chartX,
      chartY: a.chartY,
      pageX: a.pageX,
      pageY: a.pageY
     }, b.logic.chartInstance)
    }), p.click(function (a) {
     a = A(b.logic.chartInstance.ref, a);
     q.raiseEvent("LogoClick", {
      logoURL: r,
      logoAlpha: 100 * s,
      logoPosition: z || "tl",
      logoScale: C,
      logoLink: B,
      chartX: a.chartX,
      chartY: a.chartY,
      pageX: a.pageX,
      pageY: a.pageY
     }, b.logic.chartInstance, void 0, function () {
      B && k.events.click.call({
       link: B
      })
     })
    }), q.raiseEvent("LogoLoaded", {
     logoURL: r,
     logoAlpha: 100 * s,
     logoPosition: z || "tl",
     logoScale: C,
     logoLink: B
    }, b.logic.chartInstance))
   }, I.onerror = function (a) {
    q.raiseEvent("LogoLoadError", {
     logoURL: r,
     logoAlpha: 100 * s,
     logoPosition: z || "tl",
     logoScale: C,
     logoLink: B,
     error: a
    }, b.logic.chartInstance)
   }, I.src = r, d.logoImage = p)
  },
  getEventArgs: function (a) {
   a = a || {};
   return {
    datasetName: a.name,
    datasetIndex: a.index,
    id: a.userID,
    visible: a.visible
   }
  },
  legendClick: function (a, b) {
   var c = a.legend,
    d = c && c.elements,
    f = d && d.legendItemText,
    g = d && d.legendItemSymbol,
    d = d && d.legendItemLine,
    k = c && c.hiddenColor,
    l = c && c.itemLineColor,
    n = c && c.itemTextColor,
    m = c && c.symbolColor,
    p = c && c.symbolStroke,
    c = r(b, !a.visible);
   a.setVisible(b);
   c ? (g && g.attr({
    fill: m || l,
    stroke: p
   }), f && f.attr({
    fill: n
   }), d && d.attr({
    stroke: l
   })) : (g && g.attr({
    fill: k,
    stroke: k
   }), f && f.attr({
    fill: k
   }), d && d.attr({
    stroke: k
   }));
   if ((f = this.datasets && this.datasets[a.index] && this.datasets[a.index].relatedSeries) &&
    f instanceof Array && 0 < f.length)
    for (g = f.length; g--;) d = parseFloat(f[g]), d = this.plots[d], d.legendClick.call(d, c, !1)
  },
  exportChart: function (c) {
   var d = this,
    f = d.fusionCharts,
    g = d.options;
   c = "object" === typeof c && function (a) {
    var b = {},
     c;
    for (c in a) b[c.toLowerCase()] = a[c];
    return b
   }(c) || {};
   var l = k(k({}, g.exporting), c),
    n = (l.exportformat || "png").toLowerCase(),
    m = l.exporthandler,
    p = (l.exportaction || O).toLowerCase(),
    r = l.exporttargetwindow || O,
    v = l.exportfilename,
    z = l.exportparameters,
    A = l.exportcallback,
    B = l.exportwithimages;
   if (!g.exporting || !g.exporting.enabled || !m) return !1;
   q.raiseEvent("beforeExport", l, f, void 0, function () {
    function c() {
     var a;
     if ("download" === p) {
      /webkit/ig.test(E.navigator.userAgent) && "_self" === r && (r = F = g + "export_iframe", d.exportIframe || (d.exportIframe = H = Z("IFRAME", {
       name: F,
       width: "1px",
       height: "1px"
      }, s.body), H.style.cssText = "position:absolute;left:-10px;top:-10px;"));
      I = Z("form", {
       method: "POST",
       action: m,
       target: r,
       style: "display:none;"
      }, s.body);
      for (a in C) Z("input", {
       type: "hidden",
       name: a,
       value: C[a]
      }, I);
      I.submit();
      s.body.removeChild(I);
      I = void 0;
      return !0
     }
     K = new q.ajax(function (a) {
      var c = {};
      a.replace(RegExp("([^?=&]+)(=([^&]*))?", "g"), function (a, b, d, e) {
       c[b] = e
      });
      A && E[A] && "function" === typeof E[A] && E[A].call(E, c);
      b.raiseEvent("exported", c, f)
     }, function (a) {
      a = {
       statusCode: 0,
       statusMessage: "failure",
       error: a,
       DOMId: g,
       width: k.width,
       height: k.height
      };
      A && E[A] && "function" === typeof E[A] && E[A].call(E, a);
      b.raiseEvent("exported", a, f, [a])
     });
     for (a in C) C.hasOwnProperty(a) && (C[a] = encodeURIComponent(C[a]));
     K.post(m, C)
    }
    var h = d.layers.buttons,
     g = f.id,
     k = d.paper,
     D = q && q.hcLib,
     C, F, H, I, K, L, D = D && D.isCanvasElemSupported(),
     Q, O, P = 0,
     W = {},
     U, T, ga, V, Y = {};
    h && h.attr("visibility", "hidden");
    L = k.toSVG(B && D && "svg" !== n);
    h && h.attr("visibility", "visible");
    L = L.replace(/(\sd\s*=\s*["'])[M\s\d\.]*(["'])/ig, "$1M 0 0 L 0 0$2");
    C = {
     charttype: f.chartType(),
     stream: L,
     stream_type: "svg",
     meta_bgColor: l.bgcolor || "",
     meta_bgAlpha: l.bgalpha || "1",
     meta_DOMId: f.id,
     meta_width: k.width,
     meta_height: k.height,
     parameters: ["exportfilename=" + v, "exportformat=" + n, "exportaction=" + p, "exportparameters=" +
z].join("|")
    }; - 1 !== L.indexOf("<image ") ? D ? (O = (Q = L.match(/<image [^\>]*\>/gi)) && Q.length, U = function (a) {
     a = a && a.split("/");
     a = a[a.length - 1].split(".");
     return {
      name: a[0],
      type: a[1] || "png"
     }
    }, T = function (b, c, d, f, h) {
     var g = new a;
     g.onload = function () {
      var a = "image/" + d,
       k = s.createElement("canvas"),
       l = k.getContext("2d"),
       n = "";
      k.width = g.width;
      k.height = g.height;
      l.drawImage(g, 0, 0);
      n = k.toDataURL(a);
      Y[b] = n;
      V(n, c, d, f, h)
     };
     g.onerror = function () {
      ga()
     };
     g.src = b
    }, V = function (a, b, c, d, f) {
     W["image_" + P] = {
      name: b,
      type: c,
      encodedData: a,
      width: d,
      height: f
     };
     ga()
    }, ga = function () {
     var a = {},
      b, d, f, h, g, e = !1;
     P < O ? (b = Q[P].replace(/\"/g, ""), b.split(" ").forEach(function (b) {
      b = b.split("=");
      a[b[0]] = b[1]
     }), a["xlink:href"] && (b = (d = U(a["xlink:href"])) && d.name || "temp_image_" + P, f = d && d.type || "png", h = parseInt(a.width, 10), g = parseInt(a.height, 10), d = b + "." + f, Y[a["xlink:href"]] ? e = !0 : T(a["xlink:href"], b, f, h, g)), b = 'xlink:href="' + a["xlink:href"], L = L.replace(b, 'xlink:href="temp/' + d), P += 1, e && ga()) : (C.encodedImgData = JSON.stringify(W), C.stream = L, c())
    }, ga()) : c() : c();
    q.raiseEvent("exportDataReady",
     C, f)
   }, function () {
    q.raiseEvent("exportCancelled", l, f)
   })
  },
  print: function (a) {
   var b = this,
    c = k({}, a);
   if (b.isPrinting) return !1;
   q.raiseEvent("BeforePrint", c, b.logic.chartInstance, void 0, function () {
    var a = b.container,
     d = b.elements,
     f = d.printButton,
     h = d.exportButton,
     g = [],
     k = a.parentNode,
     d = s.body || s.getElementsByTagName("body")[0],
     l = d.childNodes;
    b.isPrinting = !0;
    Aa(l, function (a, b) {
     1 == a.nodeType && (g[b] = a.style.display, a.style.display = "none")
    });
    !1 !== c.hideButtons && (f && "hidden" != f.attrs.visibility && f.attr({
      visibility: "hidden"
     }),
     h && "hidden" != h.attrs.visibility && h.attr({
      visibility: "hidden"
     }));
    d.appendChild(a);
    E.print();
    setTimeout(function () {
     f && f.attr({
      visibility: "visible"
     });
     h && h.attr({
      visibility: "visible"
     });
     k.appendChild(a);
     Aa(l, function (a, b) {
      1 == a.nodeType && (a.style.display = g[b])
     });
     b.isPrinting = !1;
     q.raiseEvent("PrintComplete", c, b.logic.chartInstance)
    }, 1E3)
   }, function () {
    q.raiseEvent("PrintCancelled", c, b.logic.chartInstance)
   })
  },
  getSymbolPath: function (a, b, c, d, f, g, k) {
   var l = ["M"],
    n, m, p;
   n = (g.color && Sb("string" === typeof g.color ? g.color :
    g.color.FCcolor.color) || O).replace(ca, "");
   p = Qb(n, 60).replace(ca, aa);
   k ? n = {
    FCcolor: {
     color: n,
     angle: 0,
     ratio: "0",
     alpha: "100"
    }
   } : (k = Qb(n, 40), n = {
    FCcolor: {
     color: n + "," + n + "," + k + "," + n + "," + n,
     ratio: "0,30,30,30,10",
     angle: 0,
     alpha: "100,100,100,100,100"
    }
   });
   switch (f) {
   case "column":
   case "dragcolumn":
   case "column3d":
    g = .25 * c;
    f = .5 * g;
    k = .7 * d;
    m = .4 * d;
    l = l.concat([a, b + d, "l", 0, -k, g, 0, 0, k, "z", "m", g + f, 0, "l", 0, -d, g, 0, 0, d, "z", "m", g + f, 0, "l", 0, -m, g, 0, 0, m, "z"]);
    n.FCcolor.angle = 270;
    break;
   case "bar":
   case "bar3d":
    g = .3 * c;
    f = .6 * c;
    k = d / 4;
    m =
     k / 2;
    l = l.concat([a, b, "L", a + f, b, a + f, b + k, a, b + k, "Z", "M", a, b + k + m, "L", a + c, b + k + m, a + c, b + k + m + k, a, b + 2 * k + m, "Z", "M", a, b + 2 * (k + m), "L", a + g, b + 2 * (k + m), a + g, b + d, a, b + d, "Z"]);
    break;
   case "area":
   case "area3d":
   case "areaspline":
   case "dragarea":
    k = .6 * d;
    m = .2 * d;
    d *= .8;
    l = l.concat([a, b + d, "L", a, b + k, a + .3 * c, b + m, a + .6 * c, b + k, a + c, b + m, a + c, b + d, "Z"]);
    n.FCcolor.angle = 270;
    break;
   case "pie":
   case "pie3d":
    g = .5 * c;
    f = .9 * g;
    c = a + g + 1;
    d = b + g - 1;
    a = a + g - 1;
    b = b + g + 1;
    l = l.concat(["M", c, d, "L", c, d - f + 1, "A", f - 1, f - 1, 0, 0, 1, c + f - 1, d, "Z", "M", a, b, "L", a, b - f, "A", f, f, 0, 1, 0,
a + f, b, "Z"]);
    n.FCcolor.radialGradient = "1";
    n.FCcolor.ratio = "0,0,0,100,0";
    break;
   case "boxandwhisker2d":
    l = l.concat([a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]);
    n = g.color;
    p = "#000000";
    break;
   default:
    l = l.concat([a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]), n.FCcolor.angle = 270, n.FCcolor.ratio = "0,70,30"
   }
   return {
    path: l,
    color: n,
    strokeWidth: .5,
    strokeColor: p
   }
  }
 });
 d.prototype = {
  configure: function () {
   var a = this.axisData,
    b = this.renderer,
    c = this.isVertical,
    d = this.isReverse,
    f = b.options,
    g = f.chart,
    k = g.marginBottom,
    g = g.marginRight,
    l = b.canvasTop,
    n = b.canvasLeft,
    m = this.min = a.min,
    m = this.span = (this.max = a.max) - m,
    n = this.startX = oa(a.startX, n),
    l = this.startY = oa(a.startY, l),
    p = this.endX = oa(a.endX, b.canvasRight),
    a = this.endY = oa(a.endY, b.canvasBottom),
    m = this.pixelRatio = c ? (a - l) / m : (p - n) / m,
    r = this.relatedObj = {};
   r.marginObj = {
    top: l,
    right: g,
    bottom: k,
    left: n
   };
   r.canvasObj = {
    x: n,
    y: l,
    w: p - n,
    h: a - l,
    toX: p,
    toY: a
   };
   this.startPixel = d ? c ? a : p : c ? l : n;
   this.pixelValueRatio = d ? -m : m;
   this.primaryOffset = this.secondaryOffset = 0;
   this.cache = {
    lowestVal: 0,
    highestVal: 0,
    indexArr: [],
    hashTable: {}
   };
   this.elements = this.elements || {};
   this.belowBandGroup && (b.elements.axes = b.elements.axes || {}, b.elements.axes.belowBandGroup = this.belowBandGroup, f && f.chart && f.chart.hasScroll && this.belowBandGroup.attr({
    "clip-rect": b.elements["clip-canvas"]
   }));
   this.poi = {}
  },
  draw: function () {
   var a = this.axisData,
    b = a && a.plotLines || [],
    c = a && a.plotBands || [],
    d = a && a.showLine,
    f = a && a.tickLength,
    g = a && a.tickWidth;
   a && a.title && this.drawAxisName();
   a && a.labels && (this.renderer.addCSSDefinition("." + a.labels.className + " .fusioncharts-label",
    a.labels.style), this.belowLabelGroup && this.belowLabelGroup.attr("class", a.labels.className), this.topLabelGroup && this.topLabelGroup.attr("class", a.labels.className));
   b && 0 < b.length && this.drawPlotLine();
   c && 0 < c.length && this.drawPlotBands();
   isNaN(f) || 0 === f || isNaN(g) || 0 === g || this.drawTicks();
   d && this.drawLine()
  },
  scroll: function () {},
  setOffset: function (a, b) {
   var c = this.primaryOffset = a,
    d = this.secondaryOffset = b || this.secondaryOffset,
    f = this.isVertical,
    g, k, l, n = [this.topLabelGroup, this.belowLabelGroup, this.topLineGroup,
this.belowLineGroup, this.topBandGroup, this.belowBandGroup],
    m, p;
   m = 0;
   for (p = n.length; m < p; m += 1)
    if (l = n[m]) g = f ? d : c, k = f ? c : d, l.attr({
     transform: "t" + g + "," + k
    });
   f || this.drawPlotLine && this.drawPlotLine()
  },
  update: function () {},
  drawTicks: function () {
   var a = this.axisData,
    b = this.renderer.paper,
    c = this.min,
    d = this.max,
    f = this.isVertical,
    g = this.layerBelowDataset,
    g = this.tickGroup = this.tickGroup || b.group("axis-ticks", g),
    k = this.relatedObj.canvasObj,
    l = a.offset,
    n = a.opposite,
    m = a.showAxis,
    p = a.tickInterval,
    r = a.tickLength,
    q = a.tickWidth,
    a = a.tickColor,
    s = c;
   if (f && m)
    for (c = this.getAxisPosition(c), f = this.getAxisPosition(d), k = n ? k.toX + l : k.x - l, b.path(["M", k, c, "L", k, f], g).attr({
      stroke: a,
      "stroke-width": q
     }); Ja(s) <= d;) l = this.getAxisPosition(s), c = n ? k + r : k - r, b.path(["M", k, l, "L", c, l], g).attr({
     stroke: a,
     "stroke-width": q
    }), s += p
  },
  getAxisPosition: function (a, b) {
   var c;
   b ? c = (a - this.startPixel) / this.pixelValueRatio + this.min : (a = this.axisData.reversed ? this.min + (this.max - a) : a, c = this.startPixel + (a - this.min) * this.pixelValueRatio);
   return c
  },
  drawPlotLine: function () {
   var a =
    this.renderer,
    b = a.paper,
    c = this.isVertical,
    d = +!c,
    f = this.lines = this.lines || [],
    k = this.labels = this.labels || [],
    l = this.relatedObj.canvasObj,
    n = this.globalOptions || {},
    m = this.elements || {},
    p = this.axisData.plotLines || [],
    r = this.primaryOffset,
    q = c ? this.startY : this.startX,
    s = c ? this.endY : this.endX,
    v = parseFloat(a.canvasBorderWidth) || 0,
    z = La(p.length, La(f.length, k.length)),
    A = a.layers.datalabels,
    B = this.belowLineGroup,
    C = this.topLineGroup,
    F = this.belowLabelGroup,
    E = this.topLabelGroup,
    I = !1 !== (a.tooltip || {}).enabled,
    K = function (b) {
     return function (c) {
      ta.call(this,
       a, c, b)
     }
    },
    L = n.chart.xDepth || 0,
    n = n.chart.textDirection,
    Q = [],
    W = 0,
    U, P, T, V, Z, $, Ra, fa, wa, aa, t, w, J, M, e, da, R, S, ka, ca, pa, ma, qa, X, Fa, la, na, sa, Ea, ya, za, Aa, Dc, Na, ob, Va, Oa, Ja, ab, Ga, Ia, mb, hb;
   for (hb = 0; hb < z; hb += 1) {
    T = V = Z = null;
    T = f[hb];
    V = k[hb];
    if (Ra = p[hb])
     if (fa = Ra.width, wa = Ra.isVline, aa = Ra.isTrend, t = Ra.isGrid, w = Ra.tooltext, J = Ra.value, M = Ra.color, e = Ra.dashStyle, da = aa ? Ra.to : null, R = Ra._isStackSum, U = 3 < Ra.zIndex ? C : B, S = Ra.label) {
      ka = S.style;
      ca = S.text;
      pa = ka && ka.color;
      ma = S.offsetScaleIndex || 0;
      qa = S.offsetScale;
      if (X = ka && ka.fontSize) Fa =
       X, -1 !== Fa.indexOf("px") && (Fa = Fa.replace("px", ""), Fa = parseFloat(Fa));
      P = ka && ka.lineHeight;
      X = ka ? {
       fontFamily: ka.fontFamily,
       fontSize: ka.fontSize,
       lineHeight: ka.lineHeight,
       fontWeight: ka.fontWeight,
       fontStyle: ka.fontStyle
      } : null;
      P && (la = P, -1 !== la.indexOf("px") && (la = la.replace("px", ""), la = parseFloat(la)));
      na = S.rotation;
      sa = S.x || 0;
      Ea = S.y || 0;
      ya = S.align;
      za = S.verticalAlign;
      Aa = S.textAlign;
      Dc = oa(parseInt(S.borderWidth, 10), 1);
      P = R ? A : 3 <= Ra.zIndex ? E : F;
      S.backgroundColor && (S.labelBgClr = ga({
       color: S.backgroundColor,
       alpha: 100 *
        S.backgroundOpacity
      }));
      S.borderColor && (S.labelBorderClr = ga({
       color: S.borderColor,
       alpha: "100"
      }));
      Na = Fa ? .2 * Fa : 2;
      Aa = "left" === Aa ? "start" : "right" === Aa ? "end" : "middle"
     }
    $ = Ia = "visible";
    mb = 0 > oa(qa, J, 0);
    c ? (Va = this.getAxisPosition(J), Ja = aa ? this.getAxisPosition(da) || Va : Va, ab = Va !== Ja ? !0 : !1, Ga = ["M", l.x, Va, "L", l.toX, Ja], wa ? a.logic.isBar && (ob = a.yAxis[ma], !R && !isNaN(qa) && 0 <= qa && 1 >= qa && (qa = ob.min + (ob.max - ob.min) * qa), Oa = ob.getAxisPosition(oa(qa, J)) + sa + Na * (mb ? -1 : 1)) : Oa = S ? ob = this.axisData.isOpposite || "right" === ya ? l.toX +
     sa : l.x + sa : ob = this.axisData.isOpposite ? l.toX : l.x) : (ob = this.getAxisPosition(J) || 0, Oa = aa ? this.getAxisPosition(da) || ob : ob, !aa && !wa && 0 < L && !a.logic.isBar && (ob += L, Oa += L, s += L), ab = ob !== Oa ? !0 : !1, Ga = ["M" + ob, l.y, "L", Oa, l.toY], Ia = ob + r < q || ob + r > s ? "hidden" : Ia, wa ? (ob = a.yAxis[ma], !R && !isNaN(qa) && 0 <= qa && 1 >= qa && (qa = ob.min + (ob.max - ob.min) * (1 - qa)), Va = ob.getAxisPosition(oa(qa, J)) + Ea, Va -= (v + parseFloat(Dc)) * (Ea && (0 < Ea ? -1 : 1))) : this.axisData.opposite || "top" === za && !t ? (Va = l.y + Ea, Ja = "bottom") : Va = l.toY + Ea, Ja = Va);
    $ = c ? $ : Oa + r < q ||
     Oa + r > s ? "hidden" : $;
    if (Ra && "visible" === Ia && .1 < fa) ab = {
     path: Y(Ga, fa),
     stroke: M,
     "stroke-width": fa,
     "shape-rendering": !ab && 1 <= fa ? "crisp" : void 0,
     "stroke-dasharray": e ? e : void 0,
     visibility: Ia
    }, T ? T.attr(ab) : (T = f[hb] = b.path(ab, U).css(Ra.style), m.lines = m.lines || [], m.lines.push(T)), I && w && fa < H && Ia && (Z = b.path({
     stroke: g,
     "stroke-width": H,
     ishot: !0,
     path: Ga,
     fill: g
    }, a.layers.tracker)), Z = Z || T, I && w && Z.tooltip(w);
    else if (T || V) T && T.remove(), T = null, f && (f[hb] = null), m && m.lines && (m.lines[hb] = null);
    S && Ra && !Ra.stepped && "visible" ===
     $ && S.text != O && " " != S.text ? (Va = aa ? "left" === ya ? Va : Ja : Ja, Z = Oa - +!wa * d * L + d * (sa || 0), R ? (Ja = c || na ? "middle" : "bottom", Va += c ? 0 : Fa * (mb ? -.4 : .4), na && (Va += mb ? 4 : -2, Aa = mb ? "end" : "start")) : d && this.axisData.opposite ? (Ja = jb, Aa = na ? "start" : "middle") : Ja = za, /\n|<br\s*?\/?>/ig.test(ca) && t && (na ? (Ja = "middle", Z -= d * (sa || 0)) : (Ja = d && this.axisData.opposite && !na ? "middle" : Fb, Va -= la)), ab = {
      "class": "fusioncharts-label",
      text: ca,
      fill: X ? pa || M : null,
      title: S && (S.originalText || O),
      cursor: S.link ? "pointer" : O,
      x: Z,
      y: Va,
      "text-anchor": Aa,
      "vertical-align": Ja,
      direction: n,
      transform: " ",
      "text-bound": [ka.backgroundColor || S.labelBgClr, ka.borderColor || S.labelBorderClr, ka.borderThickness || Dc, ka.borderPadding || Na, ka.borderRadius, ka.borderDash],
      visibility: $,
      "line-height": ka.lineHeight
     }, V ? V.attr(ab) : (V = k[hb] = b.text(ab, P).attr("class", "fusioncharts-label"), T && (T.label = V), m.labels = m.labels || [], m.labels.push(V), Ra.isDataLabel && V.click(K("dataLabelClick")).hover(K("dataLabelRollOver"), K("dataLabelRollOut"))), X && V.css(X), Ra.isDataLabel && ($ = {
       text: ca,
       index: W,
       link: S.link
      },
      W += 1, V.data("eventArgs", $)), na && V.attr("transform", ["r", na, Z, Va]), R && V && Q.push(V)) : V && (V.isRotationSet = !1, V.remove(), k && (k[hb] = null), m && m.labels && (m.labels[hb] = null));
    !T && !V || Ra && null === Ra.value || (Ra && Ra.isMinLabel ? this.poi.min = {
     label: V,
     index: hb,
     line: T
    } : Ra && Ra.isMaxLabel ? this.poi.max = {
     label: V,
     index: hb,
     line: T
    } : Ra && Ra.isZeroPlane && (this.poi.zero = {
     label: V,
     index: hb,
     line: T
    }));
    T = V = null
   }
   oa(a.options.plotOptions.series.animation.duration, 0)
  },
  drawPlotBands: function () {
   var a = this.renderer,
    b = a.paper,
    c = this.isVertical,
    d = this.axisData.plotBands || [],
    f = this.bands = this.bands || [],
    g = this.bandLabels = this.bandLabels || [],
    k = this.relatedObj.canvasObj,
    l = this.primaryOffset,
    n = c ? this.startY : this.startX,
    m = c ? this.endY : this.endX,
    p = a.options.chart.hasScroll,
    r = this.belowBandGroup,
    q = this.topBandGroup,
    s = this.belowLabelGroup,
    v = this.topLabelGroup,
    z = this.elements || {},
    A = a.options.chart.textDirection,
    a = !1 !== (a.tooltip || {}).enabled,
    B, C, F, E, H, I, K, L, Q, P, O, W, U, T, V, Z, Y, $, t, w, J, M, e, da, R, S, ka, fa, aa, ca, pa, X, qa, ma, ta, la = La(d.length, f.length);
   for (ta =
    0; ta < la; ta += 1) {
    ma = "visible";
    X = f[ta];
    qa = g[ta];
    if (B = d[ta])
     if (C = B.tooltext, F = B.to, E = B.from, H = B.value, I = B.width, K = B.color, ca = 3 < B.zIndex ? q : r, L = B.label) {
      if (Q = L.style) {
       if (T = Q.fontSize) P = T, -1 !== P.indexOf("px") && (P = P.replace("px", ""), parseFloat(P));
       (P = Q.lineHeight) && -1 !== P.indexOf("px") && (P = P.replace("px", ""), parseFloat(P));
       t = Q.color
      }(P = L.borderWidth) && -1 !== P.indexOf("px") && P.replace("px", "");
      O = L.align;
      W = L.x;
      U = L.y;
      Y = L.text;
      $ = L.originalText;
      V = L.backgroundColor;
      Z = L.backgroundOpacity;
      V && (J = L.labelBgClr = ga({
       color: V,
       alpha: 100 * Z
      }));
      if (V = L.borderColor) M = L.labelBorderClr = ga({
       color: V,
       alpha: "100"
      });
      V = L.textAlign;
      V = "left" === V ? "start" : "right" === V ? "end" : "middle";
      Z = L.verticalAlign;
      w = L.borderType;
      pa = 3 < B.zIndex ? v : s
     }
    e = this.getAxisPosition(oa(F, H));
    da = this.getAxisPosition(oa(E, H));
    R = c ? k.x : da;
    S = c ? e : k.y;
    ka = c ? k.w : (this.axisData.reversed ? da - e : e - da) || I || 1;
    da = c ? da - e || 1 : k.h;
    e = R + ka;
    ka = Ya(ka);
    0 > da && (da = Ya(da), S -= da);
    c || (ma = p ? "hidden" : R + l > m || e + l < n ? "hidden" : ma);
    L && (fa = c ? "right" === O ? k.toX + W : k.x + W : R + ka / 2, aa = c ? S + da / 2 : k.toY + U);
    if (!X && B &&
     "visible" === ma) B = {
     x: R,
     y: S,
     width: ka,
     height: da,
     fill: ga(K),
     "stroke-width": 0
    }, X ? X.attr(B) : (X = f[ta] = b.rect(B, ca), z.bands = z.bands || [], z.bands[ta] = X), a && C && X.tooltip(C);
    else if (X && (!B || "hidden" === ma)) {
     z.labels && (g[ta] = z.labels[ta] = null);
     X.label && X.label.remove();
     f[ta] = z.bands[ta] = null;
     X.remove();
     continue
    }
    X && L && L.text && (B = {
      "class": "fusioncharts-label",
      text: Y,
      title: $ || "",
      fill: t,
      "text-bound": [J, M, P, .2 * T, "solid" === w ? !1 : !0],
      x: fa,
      y: aa,
      "text-anchor": V,
      direction: A,
      "vertical-align": Z,
      "line-height": Q.lineHeight
     },
     qa ? qa.attr(B) : (qa = g[ta] = X.label = b.text(B, pa).attr("class", "fusioncharts-label"), Q && qa.css(Q), z.labels = z.labels || [], z.labels[ta] = qa))
   }
  },
  drawAxisName: function () {
   var a = this.axisData,
    b = a.title || {},
    c = b && b.style,
    d = b && b.className,
    f = b.align,
    g = b.centerYAxisName || !1,
    k = this.renderer.paper,
    l = this.isVertical,
    n = this.relatedObj.canvasObj,
    m = oa(a.offset, 0) + oa(b.margin, 0),
    p = b.text || "",
    r = this.name || void 0,
    a = a.opposite,
    q = this.layerBelowDataset,
    q = q.nameGroup = q.nameGroup || k.group("axis-name", q),
    s = oa(b.rotation, a ? 90 : 270),
    v = l ? a ? n.toX + m : n.x - m : (n.x + n.toX) / 2,
    z = {
     fontFamily: c.fontFamily,
     fontSize: c.fontSize,
     lineHeight: c.lineHeight,
     fontWeight: c.fontWeight,
     fontStyle: c.fontStyle
    },
    A, g = l ? "low" === f ? n.toY : g ? (n.y + n.toY) / 2 : this.renderer.chartHeight / 2 : n.toY + m;
   p ? (!isNaN(s) && s && l && (A = c.fontSize, A = -1 != A.indexOf("px") ? A.replace("px", "") : A, a ? (v += parseFloat(A), A = 270 === s ? "bottom" : "top") : (v -= parseFloat(A), A = 270 === s ? "top" : "bottom")), this.renderer.addCSSDefinition("." + d, z), d = {
    "class": d,
    x: 0,
    y: 0,
    text: p,
    fill: c.color,
    direction: this.renderer.options.chart.textDirection,
    "text-anchor": "low" === f ? 90 == s ? "end" : "start" : "middle",
    "vertical-align": l ? s ? A : "middle" : a ? jb : "top",
    transform: l ? "t" + v + "," + g + "r" + s : "t" + v + "," + g,
    "font-size": c.fontSize
   }, b.originalText && (d.title = b.originalText), r ? r.attr(d) : r = this.name = k.text(d, q), setTimeout(function () {
    r.attr({
     "line-height": c.lineHeight,
     "text-bound": [c.backgroundColor, c.borderColor, c.borderThickness, c.borderPadding, c.borderRadius, c.borderDash]
    })
   }, 0)) : r && r.remove();
   this.elements.name = r
  },
  drawLine: function () {
   var a = this.axisData,
    b = this.renderer.paper,
    c = this.min,
    d = this.max,
    f = this.isVertical,
    g = a.opposite,
    k = this.layerBelowDataset,
    k = this.lineGroup = this.lineGroup || b.group("axis-lines", k),
    l = a.lineColor,
    n = a.lineThickness,
    m = a.lineEndExtension || 0,
    p = a.lineStartExtension || 0,
    a = this.relatedObj.canvasObj;
   f ? (c = this.getAxisPosition(c) - p, m = this.getAxisPosition(d) + m, d = f = g ? a.toX + n / 2 : a.x - n / 2) : (d = a.x - p, f = a.toX + m, c = m = g ? a.y - n / 2 : a.toY + n / 2);
   b = b.path({
    path: ["M", d, c, "L", f, m],
    stroke: l,
    "stroke-width": n
   }, k);
   this.elements.axisLine = b
  },
  realtimeUpdateX: function (a) {
   if (0 < a) {
    for (var b =
      this.axisData.plotBands, c = this.min + a, d, f = b.length; f--;)(d = b[f]) && !d.isNumVDIV && (d.value < c || d.from < c || d.to < c ? b.splice(f, 1) : (void 0 !== d.value && (d.value -= a), void 0 !== d.from && (d.from -= a), void 0 !== d.to && (d.to -= a)));
    this.drawPlotLine();
    this.drawPlotBands()
   }
  },
  realtimeUpdateY: function (a, b) {
   var c = this.axisData,
    d = this.min = c.min = a,
    c = this.span = (this.max = c.max = b) - d,
    c = this.pixelRatio = this.isVertical ? this.relatedObj.canvasObj.h / c : this.relatedObj.canvasObj.w / c;
   this.pixelValueRatio = this.isReverse ? -c : c;
   this.drawPlotLine();
   this.drawPlotBands()
  }
 };
 d.prototype.constructor = d;
 I("renderer.cartesian", {
  drawCanvas: function () {
   var a = this.options.chart || {},
    b = a.plotBackgroundColor,
    c = this.paper,
    d = this.elements,
    f = d.canvas,
    g = d.canvas3DBase,
    k = d.canvas3dbaseline,
    g = d.canvasBorder,
    l = d.canvasBg,
    n = this.canvasTop,
    m = this.canvasLeft,
    p = this.canvasWidth,
    r = this.canvasHeight,
    q = oa(a.plotBorderRadius, 0),
    l = a.plotBorderWidth,
    s = .5 * l,
    z = a.plotBorderColor,
    A = a.isBar,
    B = a.is3D,
    C = a.use3DLighting,
    F = a.showCanvasBg,
    E = a.canvasBgDepth,
    H = a.showCanvasBase,
    I = a.canvasBaseColor3D,
    L = a.canvasBaseDepth,
    Q = a.plotShadow,
    O = v && 0 === l && Q && Q.enabled,
    W = a.xDepth || 0,
    a = a.yDepth || 0,
    P = this.layers,
    U = P.background,
    T = P.dataset;
   P.tracker = P.tracker || c.group("hot").insertAfter(T);
   P.datalabels = P.datalabels || c.group("datalabels").insertAfter(T);
   P = P.canvas = P.canvas || c.group("canvas").insertAfter(U);
   g || (d.canvasBorder = c.rect({
    x: m - s,
    y: n - s,
    width: p + l,
    height: r + l,
    r: q,
    "stroke-width": l,
    stroke: z,
    "stroke-linejoin": 2 < l ? "round" : "miter"
   }, P).shadow(Q));
   d["clip-canvas"] = [La(0, m - W), La(0, n - a), La(1, p + 2 * W), La(1, r + 2 * a)];
   d["clip-canvas-init"] = [La(0, m - W), La(0, n - a), 1, La(1, r + 2 * a)];
   B && (F && (l = A ? d.canvasBg = c.path(["M", m, ",", n, "L", m + 1.2 * E, ",", n - E, ",", m + p - E, ",", n - E, ",", m + p, ",", n, "Z"], P) : d.canvasBg = c.path(["M", m + p, ",", n, "L", m + p + E, ",", n + 1.2 * E, ",", m + p + E, ",", n + r - E, ",", m + p, ",", n + r, "Z"], P), l.attr({
    "stroke-width": 0,
    stroke: "none",
    fill: ga(b)
   })), H && (g = A ? d.canvas3DBase = c.cubepath(m - W - L - 1, n + a + 1, L, r, W + 1, a + 1, P) : d.canvas3DBase = c.cubepath(m - W - 1, n + r + a + 1, p, L, W + 1, a + 1, P), g.attr({
     stroke: "none",
     "stroke-width": 0,
     fill: [I.replace(ca, aa), !C]
    }), k ||
    (k = d.canvas3dbaseline = c.path(void 0, P)), k.attr({
     path: A ? ["M", m, n, "V", r + n] : ["M", m, n + r, "H", p + m],
     stroke: K.tintshade(I.replace(ca, aa), .05).rgba
    })));
   !f && b && (d.canvas = c.rect({
    x: m,
    y: n,
    width: p,
    height: r,
    r: q,
    "stroke-width": 0,
    stroke: "none",
    fill: ga(b)
   }, P).shadow(O))
  },
  drawAxes: function () {
   var a = this.logic,
    b = this.options,
    c = this.paper,
    f = this.layers,
    g = f.dataset,
    k = f.layerBelowDataset = f.layerBelowDataset || c.group("axisbottom").trackTooltip(!0),
    l = f.layerAboveDataset = f.layerAboveDataset || c.group("axistop").trackTooltip(!0),
    c = this.xAxis = [],
    f = this.yAxis = [];
   k.insertBefore(g);
   l.insertAfter(g);
   if (b.xAxis && b.xAxis.length)
    for (g = 0, k = b.xAxis.length; g < k; g += 1) c[g] = this.xAxis[g] = new d(b.xAxis[g], this, a.isBar);
   else c[0] = this.xAxis[0] = new d(b.xAxis, this, a.isBar);
   if (b.yAxis)
    for (g = 0, k = b.yAxis.length; g < k; g += 1) f[g] = this.yAxis[g] = new d(b.yAxis[g], this, !a.isBar, !a.isBar);
   g = 0;
   for (k = f.length; g < k; g += 1) f[g].axisData && (f[g].axisData.title && (f[g].axisData.title.className = "fusioncharts-yaxis-" + g + "-title"), f[g].axisData.labels && (f[g].axisData.labels.className =
    "fusioncharts-yaxis-" + g + "-gridlabels")), f[g].draw();
   g = 0;
   for (k = c.length; g < k; g += 1) c[g].axisData && (c[g].axisData.title && (c[g].axisData.title.className = "fusioncharts-xaxis-" + g + "-title"), c[g].axisData.labels && (c[g].axisData.labels.className = "fusioncharts-xaxis-" + g + "-gridlabels")), c[g].draw()
  },
  drawScroller: function () {
   var a = this,
    b = a.options,
    c = a.paper,
    d = a.layers,
    f = a.xAxis["0"] || {},
    g = f.axisData || {},
    l = g.scroll || {},
    n = a.canvasTop,
    m = a.canvasLeft,
    p = a.canvasWidth,
    r = a.canvasHeight,
    s = a.canvasBorderWidth,
    v = s || (g.showLine ?
     g.lineThickness : 0),
    z = s || g.lineStartExtension,
    g = s || g.lineEndExtension,
    s = b.chart.useRoundEdges,
    A, B, C, F, E, H, I, L, Q, O, W, U, P, T, ga, Z = d.dataset,
    Y = d.datalabels,
    $ = d.tracker;
   F = d.layerAboveDataset;
   var fa, wa;
   l.enabled && (fa = d.scroll = d.scroll || c.group("scroll").insertAfter(F), F = l.scrollRatio, b = oa(b[V].xAxisScrollPos, l.startPercent), E = l.viewPortMax, H = l.viewPortMin, B = l.vxLength, I = ib(B), L = l.showButtons, Q = l.height, O = l.padding, W = l.color, U = l.flatScrollBars, B = l.windowedCanvasWidth = f.getAxisPosition(B), A = l.fullCanvasWidth =
    f.getAxisPosition(E - H) - B, C = pa(b * A), P = a.fusionCharts.jsVars._reflowData, T = {
     hcJSON: {
      _FCconf: {
       xAxisScrollPos: 0
      }
     }
    }, ga = T.hcJSON._FCconf, d.scroller = c.scroller(m - z, n + r + v + O - !!v, p + z + g, Q, !0, {
     showButtons: L,
     displayStyleFlat: U,
     scrollRatio: F,
     scrollPosition: b
    }, fa).data("fullCanvasWidth", A).data("windowedCanvasWidth", B).attr({
     "scroll-display-style": U,
     fill: W,
     r: s && 2 || 0
    }).scroll(function (b) {
     var c;
     C = -pa(b * A);
     Z && Z.transform(["T", C, 0]);
     Y && Y.transform(["T", C, 0]);
     $ && $.transform(["T", C, 0]);
     f.setOffset && f.setOffset(C);
     c = {
      position: b,
      direction: b - l.lastPos || 0,
      vxLength: I
     };
     ga.xAxisScrollPos = l.lastPos = b;
     k(P, T, !0);
     if (0 !== c.direction)
      for (wa = 0; wa < a.datasets.length; wa++) a[a.datasets[wa].drawPlot + "Scroll"] && a[a.datasets[wa].drawPlot + "Scroll"].call(a, a.plots[wa], a.datasets[wa], c)
    }),
    function () {
     var b;
     K.eve.on("raphael.scroll.start." + d.scroller.id, function (c) {
      b = c;
      q.raiseEvent("scrollstart", {
       scrollPosition: c
      }, a.logic.chartInstance)
     });
     K.eve.on("raphael.scroll.end." + d.scroller.id, function (c) {
      q.raiseEvent("scrollend", {
        prevScrollPosition: b,
        scrollPosition: c
       },
       a.logic.chartInstance)
     })
    }());
   return l.enabled
  },
  finalizeScrollPlots: function () {
   var a = this,
    c = a.container,
    d = a.elements,
    f = a.layers,
    g = f.scroller,
    k = f.dataset,
    l = f.datalabels,
    f = f.tracker,
    n, m = {},
    r, s = a.xAxis["0"] || {},
    v = (s.axisData || {}).scroll || {},
    z = oa(a.options[V].xAxisScrollPos, v.startPercent),
    A = v.fullCanvasWidth;
   v.enabled && (k.attr({
    "clip-rect": d["clip-canvas"]
   }), l.attr({
    "clip-rect": d["clip-canvas"]
   }), f.attr({
    "clip-rect": d["clip-canvas"]
   }), d = function (c) {
    var d = a.elements.canvas,
     f = n.left,
     k = n.top,
     l = c.state,
     u =
     na && b.getTouchEvent(c) || p;
    c = c.originalEvent;
    f = (c.clientX || c.pageX || u.pageX) - f;
    k = (c.clientY || c.pageY || u.pageY) - k;
    switch (l) {
    case "start":
     r = d.isPointInside(f, k);
     m.ox = r && f || null;
     if (!r) return !1;
     m.prevScrollPosition = g.attrs["scroll-position"];
     q.raiseEvent("scrollstart", {
      scrollPosition: m.prevScrollPosition
     }, a.logic.chartInstance);
     break;
    case "end":
     q.raiseEvent("scrollend", {
      prevScrollPosition: m.prevScrollPosition,
      scrollPosition: m.scrollPosition
     }, a.logic.chartInstance);
     r = !1;
     m = {};
     break;
    default:
     if (!r) break;
     d =
      f - m.ox;
     m.ox = f;
     m.scrollPosition = g.attrs["scroll-position"] - d / A;
     g.attr({
      "scroll-position": m.scrollPosition
     })
    }
   }, na && (n = C(c), c && (W(c, "pointerdrag", d), B(c, "pointerdrag", d))), 0 < z && (c = -pa(z * A), k && k.transform(["T", c, 0]), l && l.transform(["T", c, 0]), f && f.transform(["T", c, 0]), s.setOffset && s.setOffset(c)))
  },
  drawPlotColumn: function (a, b, c) {
   var d = this,
    f = a.data,
    k = f.length,
    l = a.items,
    n = a.graphics || (a.graphics = []),
    m = d.paper,
    p = d.smartLabel,
    q = d.logic,
    s = d.layers,
    v = d.options,
    z = d.elements,
    A = v.chart,
    B = !1 !== (v.tooltip || {}).enabled,
    C, E = d.definition.chart,
    I = v.plotOptions.series,
    L = I.dataLabels.style,
    O = d.xAxis[b.xAxis || 0],
    W = d.yAxis[b.yAxis || 0],
    U = d.chartWidth,
    ea = d.chartHeight,
    T = W.axisData.reversed,
    Z = q.isLog,
    P = q.is3D,
    Y = q.isStacked,
    $ = q.isWaterfall,
    fa = q.isCandleStick,
    aa = r(O.axisData.scroll, {}),
    ca = c || {},
    ma = aa.enabled,
    wa = oa(ca.position, v[V].xAxisScrollPos, aa.startPercent),
    la = ca.vxLength || ib(aa.vxLength),
    t = ca.scrollStart || La(0, pa((k - la) * wa) - 1) || 0,
    w = ca.scrollEnd || qa(k, t + la + 2) || k,
    J = A.canvasBorderOpacity = K.color(A.plotBorderColor).opacity,
    M = d.canvasBorderWidth,
    e = A.isCanvasBorder = 0 !== J && 0 < M,
    da, R = c !== Ea ? 0 : isNaN(+I.animation) && I.animation.duration || 1E3 * I.animation,
    S = b.numColumns || 1,
    ka = b.columnPosition || 0,
    na = A.use3DLighting,
    Yb = !1 === b.visible ? "hidden" : "visible",
    ya = A.overlapColumns,
    za = O.getAxisPosition(0),
    X = O.getAxisPosition(1) - za,
    Fa = E && E.plotspacepercent,
    Aa = oa(E && E.plotpaddingpercent),
    Ja = I.groupPadding,
    Ia = I.maxColWidth,
    Na = (1 - .01 * Fa) * X || qa(X * (1 - 2 * Ja), Ia * S),
    Ga = Na / 2,
    Ma = Na / S,
    Wa = qa(Ma - 1, 1 < S ? ya || Aa !== Ea ? 0 < Aa ? Ma * Aa / 100 : 0 : 4 : 0),
    Dc = ka * Ma - Ga + Wa / 2,
    Ta = W.max,
    ob = W.min,
    Va = 0 < Ta && 0 <= ob,
    Oa = 0 >= Ta && 0 > ob,
    sb = 0 < Ta && 0 > ob,
    ab = Oa || T && Va ? Ta : Z || Va ? ob : 0,
    kb = W.yBasePos = W.getAxisPosition(ab),
    yb, mb = oa(A.useRoundEdges, 0),
    hb = s.dataset = s.dataset || m.group("dataset-orphan"),
    Za = s.datalabels = s.datalabels || m.group("datalabels").insertAfter(hb),
    cb = s.tracker,
    jb = d.canvasTop,
    Fb = d.canvasLeft,
    Qb = d.canvasWidth,
    Sb = d.canvasBottom,
    md = d.canvasRight,
    xc, nd, od, Hc, bc, cc, Pc, Nb, $b, zb, qb, qc, Gb, Bc, Ob, hc, Pb, gb, Cc, Ic, Ua, vb, ac, rb, rc, Qc, wb, Kb, Ca, sc, uc, vc, nc, oc, yc, dd, tc, wc, lb, Yc = function (a) {
     ta.call(this,
      d, a)
    },
    Fc = function (a, b) {
     return function (c) {
      a.attr(b);
      ta.call(this, d, c, "DataPlotRollOver")
     }
    },
    Sa = function (a, b) {
     return function (c) {
      a.attr(b);
      ta.call(this, d, c, "DataPlotRollOut")
     }
    };
   d.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", {
    fontFamily: L.fontFamily,
    fontSize: L.fontSize,
    lineHeight: L.lineHeight,
    fontWeight: L.fontWeight,
    fontStyle: L.fontStyle,
    color: L.color
   });
   Za.attr("class", "fusioncharts-datalabels");
   R && (!c && Za.attr({
    transform: "...t" + U + "," + ea
   }), d.animationCompleteQueue.push({
    fn: function () {
     Za.attr({
      transform: "...t" +
       -U + "," + -ea
     })
    },
    scope: d
   }));
   Ma -= Wa;
   ma && t > w - la - 2 && (t = La(0, w - la - 2));
   Y && (dd = hb.shadows || (hb.shadows = m.group("shadows", hb).toBack()));
   Ca = hb.column || (hb.column = m.group("columns", hb));
   fa || P || ma || Ca.attrs["clip-rect"] || Ca.attr({
    "clip-rect": z["clip-canvas"]
   });
   $ && Ca.toBack();
   if (P)
    for (bc = A.xDepth || 0, cc = A.yDepth || 0, sc = Ca.negative = Ca.negative || m.group("negative-values", Ca), nc = Ca.column = Ca.column || m.group("positive-values", Ca), vc = Ca.zeroPlane, !vc && 0 > ob && 0 <= Ta && (vc = Ca.zeroPlane = m.group("zero-plane", Ca).insertBefore(nc),
      nd = A.zeroPlaneColor, od = A.zeroPlaneBorderColor, Hc = A.zeroPlaneShowBorder, z.zeroplane = m.cubepath(Fb - bc, kb + cc, Qb, 1, bc, cc, vc).attr({
       fill: [nd, !na],
       stroke: od || "none",
       "stroke-width": Hc ? 1 : 0
      })), (uc = sc.data("categoryplots")) || (sc.data("categoryplots", Array(k)), uc = sc.data("categoryplots")), (oc = nc.data("categoryplots")) || (nc.data("categoryplots", Array(k)), oc = nc.data("categoryplots")), zb = 0; zb < k; zb += 1) uc[zb] = uc[zb] || m.group(sc), oc[zb] = oc[zb] || m.group(nc);
   else yc = Ca;
   p.setStyle({
    fontFamily: L.fontFamily,
    fontSize: L.fontSize,
    lineHeight: L.lineHeight,
    fontWeight: L.fontWeight,
    fontStyle: L.fontStyle
   });
   for (zb = t; zb < w; zb += 1) {
    qb = f[zb];
    Ob = qb.y;
    C = qb.toolText;
    xc = a.index + "_" + zb;
    wb = Kb = null;
    if (null === Ob) {
     if ($b = l[zb]) wb = $b.graphic, P || wb.attr({
      height: 0
     })
    }
    else {
     Pc = !1;
     Bc = oa(qb.x, zb);
     qc = qb.link;
     Gb = F(qb.borderWidth) || 0;
     Qc = qb._FCW * X;
     Pb = O.getAxisPosition(qb._FCX) || O.getAxisPosition(Bc) + Dc;
     hc = qb.previousY;
     Cc = W.getAxisPosition(hc || ab);
     gb = W.getAxisPosition(Ob + (hc || 0));
     Ua = Ya(gb - Cc);
     vb = Qc || Ma;
     lb = {
      index: zb,
      link: qc,
      value: qb.y,
      displayValue: qb.displayValue,
      categoryLabel: qb.categoryLabel,
      toolText: qb.toolText,
      id: a.userID,
      datasetIndex: a.index,
      datasetName: a.name,
      visible: a.visible
     };
     if (P) {
      0 > Ob && (gb = Cc, Pc = !0);
      yc = 0 > Ob ? uc : oc;
      ($b = l[zb]) || ($b = l[zb] = {
       index: zb,
       value: Ob,
       graphic: m.cubepath(yc[zb]),
       dataLabel: null,
       tracker: null,
       hot: null
      });
      wb = $b.graphic;
      rb = rc = {};
      qb.hoverEffects && (rb = {
       fill: [ga(qb.color), !na],
       stroke: Gb && ga(qb.borderColor) || "NONE",
       "stroke-width": Gb
      }, ac = qb.rolloverProperties, rc = {
       fill: [ga(ac.color), !na],
       stroke: ac.borderWidth && ga(ac.borderColor) || "NONE",
       "stroke-width": ac.borderWidth
      });
      wb.attr({
       cubepath: [Pb - bc, R ? kb + cc : gb + cc, vb, R ? 0 : Ua, bc, cc],
       fill: [ga(qb.color), !na],
       stroke: Gb && ga(qb.borderColor) || "NONE",
       "stroke-width": Gb,
       visibility: Yb
      }).shadow(I.shadow && qb.shadow, dd).data("BBox", {
       height: Ua,
       width: vb,
       x: Pb,
       y: gb
      });
      R && wb.animate({
       cubepath: [Pb - bc, gb + cc, vb, Ua, bc, cc]
      }, R, "normal", d.getAnimationCompleteFn());
      if (qc || B) !Y && Ua < H && (gb -= (H - Ua) / 2, Ua = H), $b.tracker || ($b.tracker = m.cubepath(cb)), Kb = $b.tracker, Kb.attr({
       cubepath: [Pb - bc, gb + cc, vb, Ua, bc, cc],
       cursor: qc ? "pointer" : "",
       stroke: Gb && g || "NONE",
       "stroke-width": Gb,
       fill: g,
       ishot: !0,
       visibility: Yb
      });
      (Kb || wb).data("eventArgs", lb).data("groupId", xc).click(Yc).hover(Fc(wb, rc), Sa(wb, rb)).tooltip(C);
      (Kb || wb)._.cubetop.data("eventArgs", lb).data("groupId", xc).click(Yc).hover(Fc(wb, rc), Sa(wb, rb)).tooltip(C);
      (Kb || wb)._.cubeside.data("eventArgs", lb).data("groupId", xc).click(Yc).hover(Fc(wb, rc), Sa(wb, rb)).tooltip(C);
      Y && Pc && (wb.toBack(), Kb && Kb.toBack())
     }
     else {
      Nb = !1;
      if (!Z && !T && 0 > Ob || !Z && T && 0 < Ob) gb = Cc, Nb = !0;
      T && !sb && 0 < Ob && (gb = Cc - Ua, Nb = !1);
      $ && 0 > Ob && sa(hc) && (gb -= Ua, Nb = !0);
      fa || ma ||
       (Q(gb) <= jb && (Ua -= jb - gb - +e, gb = jb - +e), pa(gb + Ua) >= Sb && (Ua -= pa(gb + Ua) - Sb + +!!Gb + +e, A.xAxisLineVisible && !e && (Ua += 1)), 1 >= Gb && (pa(Pb) <= Fb && (vb += Pb, Pb = Fb - Gb / 2 + +!!Gb - +e, vb -= Pb), pa(Pb + vb) >= md && (vb = md - Pb + Gb / 2 - +!!Gb + +e)));
      tc = K.crispBound(Pb, gb, vb, Ua, Gb);
      Pb = tc.x;
      gb = tc.y;
      vb = tc.width;
      Ua = tc.height;
      if (!fa && e && (!sa(hc) || $ && hc === Ob && Ob === qb._FCY))
       if (Oa && !T) da = gb - (jb - Gb / 2), Ua += da, kb = gb -= da;
       else if (Z || Va || T && Oa) Ua = Sb - gb + Gb / 2, kb = gb + Ua;
      $ && hc && 0 < Gb && 0 !== I.connectorOpacity && 1 === I.connectorWidth && I.connectorDashStyle &&
       (--Ua, 0 > Ob && (gb += 1));
      1 > Ua && (gb += 0 > Ob ? 1 : 0 === Ob ? 0 : -(1 - Ua), Ua = 1);
      b._columnWidth = vb;
      if (!($b = l[zb])) {
       $b = l[zb] = {
        index: zb,
        value: Ob,
        width: vb,
        graphic: null,
        valueBelowPlot: Nb,
        dataLabel: null,
        tracker: null
       };
       yb = 0;
       R || (kb = gb, yb = Ua || 1);
       rb = rc = {};
       qb.hoverEffects && (rb = {
        fill: ga(qb.color),
        stroke: ga(qb.borderColor),
        "stroke-width": Gb,
        "stroke-dasharray": qb.dashStyle
       }, ac = qb.rolloverProperties, rc = {
        fill: ga(ac.color),
        stroke: ga(ac.borderColor),
        "stroke-width": ac.borderWidth,
        "stroke-dasharray": ac.dashStyle
       });
       wc = {
        x: Pb,
        y: kb,
        width: vb,
        height: yb,
        r: mb,
        fill: ga(qb.color),
        stroke: ga(qb.borderColor),
        "stroke-width": Gb,
        "stroke-dasharray": qb.dashStyle,
        "stroke-linejoin": "miter",
        visibility: Yb
       };
       wb ? wb.attr(wc) : wb = $b.graphic = m.rect(wc, yc);
       wb.shadow(I.shadow && qb.shadow, dd).data("BBox", tc);
       R && wb.animate({
        y: gb,
        height: Ua || 1
       }, R, "normal", d.getAnimationCompleteFn());
       if (qc || B) !Y && Ua < H && (gb -= (H - Ua) / 2, Ua = H), wc = {
         x: Pb,
         y: gb,
         width: vb,
         height: Ua,
         r: mb,
         cursor: qc ? "pointer" : "",
         stroke: g,
         "stroke-width": Gb,
         fill: g,
         ishot: !0,
         visibility: Yb
        }, (Kb = $b.tracker) ? Kb.attr(wc) :
        Kb = $b.tracker = m.rect(wc, cb);
       Kb = $b.tracker;
       (Kb || wb).data("eventArgs", lb).data("groupId", xc).click(Yc).hover(Fc(wb, rc), Sa(wb, rb)).tooltip(C)
      }
     }
     Ic = d.drawPlotColumnLabel(a, b, zb, Pb, gb)
    }
    Ic && n.push(Ic);
    wb && n.push(wb);
    Kb && n.push(Kb);
    d.drawTracker && d.drawTracker.call(d, a, b, zb)
   }
   a.visible = !1 !== b.visible;
   return a
  },
  drawPlotColumnScroll: function (a, b, c) {
   var d = a.data.length,
    f = a.items,
    g;
   g = c.vxLength;
   var k = La(0, pa((d - g) * c.position) - 1) || 0,
    d = qa(d, k + g + 2) || d;
   k > d - g - 2 && (k = La(0, d - g - 2));
   c.scrollEnd = d;
   for (g = k; g < d; g++)
    if (!f[g]) {
     c.scrollStart =
      g;
     this.drawPlotColumn(a, b, c);
     break
    }
  },
  drawPlotColumnLabel: function (a, b, c, d, f, g) {
   var k = this.options,
    l = this.logic;
   d = k.chart;
   var n = this.paper,
    m = this.smartLabel,
    p = this.layers,
    k = k.plotOptions.series.dataLabels.style,
    q = 1 === d.rotateValues ? 270 : 0,
    s = this.canvasHeight,
    v = this.canvasTop,
    z = a.data[c];
   a = a.items[c];
   var A = d.valuePadding + 2,
    B = a.graphic;
   c = a.dataLabel;
   var C = r(a.valueBelowPlot, 0 > z.y),
    F = l.isStacked,
    l = l.is3D,
    E = d.xDepth || 0,
    I = d.yDepth || 0,
    H = z.displayValue;
   b = !1 === b.visible ? "hidden" : "visible";
   var K = d.placeValuesInside,
    L;
   g = g || p.datalabels;
   sa(H) && H !== O && null !== z.y ? (a._state && a._state.labelWidth || (m = m.getOriSize(H), a._state = q ? {
    labelWidth: m.height,
    labelHeight: m.width
   } : {
    labelWidth: m.width,
    labelHeight: m.height
   }), B = B.data("BBox"), p = B.height, m = L = a._state.labelHeight + A, A = .5 * L + A, B = B.x + .5 * B.width, L = C ? v + s - (f + p) : f - v, F ? (f = qa(v + s - .5 * m, f + .5 * p + (I || 0)), f = La(v + .5 * m, f), B -= E) : K ? p >= m ? (f += C ? p - A : A, z._valueBelowPoint = 1, l && (B -= E, f += I)) : L >= m ? (f += C ? p + A : -A, l && C && (B -= E, f += I)) : (f += C ? p - A : A, z._valueBelowPoint = 1, l && (B -= E, f += I)) : L >= m ? (f += C ? p + A :
    -A, l && (C ? (B -= E, f += I) : B -= E / 2)) : (f += C ? p - A : A, z._valueBelowPoint = 1, l && (B -= E, f += I)), c ? c.attr({
    x: B,
    y: f,
    visibility: b
   }) : c = a.dataLabel = n.text({
    text: H,
    "class": "fusioncharts-label",
    x: B,
    y: f,
    fill: k.color,
    "font-size": k.fontSize,
    direction: d.textDirection,
    visibility: b
   }, g).attr({
    "line-height": k.lineHeight,
    "text-bound": [k.backgroundColor, k.borderColor, k.borderThickness, k.borderPadding, k.borderRadius, k.borderDash]
   }), q && c.attr("transform", "T0,0,R" + q)) : c && c.attr({
    text: O
   });
   return c
  },
  drawPlotFloatedcolumn: function (a, b) {
   this.drawPlotColumn.call(this,
    a, b)
  },
  drawPlotColumn3d: function (a, b) {
   this.drawPlotColumn.call(this, a, b)
  },
  drawPlotBar: function (a, b) {
   var c = this,
    d = a.data,
    f = d.length,
    k = a.items,
    l = a.graphics = [],
    n = c.paper,
    m = c.logic,
    p = c.layers,
    r = c.options,
    q = c.elements,
    s = r.chart,
    v = !1 !== (r.tooltip || {}).enabled,
    A, z = c.definition.chart,
    r = r.plotOptions.series,
    B = r.dataLabels.style,
    C = {
     fontFamily: B.fontFamily,
     fontSize: B.fontSize,
     lineHeight: B.lineHeight,
     fontWeight: B.fontWeight,
     fontStyle: B.fontStyle
    },
    B = c.xAxis[b.xAxis || 0],
    E = c.yAxis[b.yAxis || 0],
    I = m.is3D,
    m = m.isStacked,
    L = s.canvasBorderOpacity = K.color(s.plotBorderColor).opacity,
    O = c.canvasBorderWidth,
    L = s.isCanvasBorder = 0 !== L && 0 < O,
    O = isNaN(+r.animation) && r.animation.duration || 1E3 * r.animation,
    W = b.numColumns || 1,
    T = b.columnPosition || 0,
    U = s.use3DLighting,
    V = !1 === b.visible ? "hidden" : "visible",
    P = s.overlapColumns,
    Z = B.getAxisPosition(0),
    Z = B.getAxisPosition(1) - Z,
    Y = z && z.plotspacepercent,
    z = oa(z && z.plotpaddingpercent),
    $ = r.groupPadding,
    fa = r.maxColWidth,
    Y = (1 - .01 * Y) * Z || qa(Z * (1 - 2 * $), fa * W),
    Z = Y / 2,
    Y = Y / W,
    P = qa(Y - 1, 1 < W ? P || z !== Ea ? 0 < z ? Y * z / 100 :
     0 : 4 : 0),
    W = Y - P,
    T = T * Y - Z + P / 2,
    aa = E.max,
    ca = E.min,
    P = E.getAxisPosition(0 > aa && 0 > ca ? aa : 0 < aa && 0 < ca ? ca : 0),
    z = oa(s.useRoundEdges, 0),
    wa = c.canvasTop,
    Z = c.canvasLeft,
    ma = c.canvasHeight,
    Y = c.canvasRight,
    t = c.chartWidth,
    w = c.chartHeight,
    J, M, e, da, R, S, ka, la, na, sa, $ = E.axisData.effectiveZeroPlaneThickness;
   ka = p.dataset = p.dataset || n.group("dataset-orphan");
   var Aa = p.datalabels = p.datalabels || n.group("datalabels").insertAfter(ka),
    p = p.tracker,
    X, Fa, ya, za, Ja, La, fa = function (a) {
     ta.call(this, c, a)
    },
    Na = function (a, b) {
     return function (d) {
      a.attr(b);
      ta.call(this, c, d, "DataPlotRollOver")
     }
    },
    Ia = function (a, b) {
     return function (d) {
      a.attr(b);
      ta.call(this, c, d, "DataPlotRollOut")
     }
    },
    Ga;
   c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", C);
   Aa.attr("class", "fusioncharts-datalabels");
   O && (c.animationCompleteQueue.push({
    fn: function () {
     Aa.attr({
      transform: "...t" + -t + "," + -w
     })
    },
    scope: c
   }), Aa.attr({
    transform: "...t" + t + "," + w
   }));
   m && (Ja = ka.shadows || (ka.shadows = n.group("shadows", ka).toBack()));
   la = ka.column = ka.column || n.group("bars", ka);
   if (I)
    for (J = s.xDepth ||
     0, M = s.yDepth || 0, C = la.negative = la.negative || n.group("negative-values", la), ka = la.column = la.column || n.group("positive-values", la), ya = la.zeroPlane, !ya && 0 > ca && 0 <= aa && (ya = la.zeroPlane = n.group("zero-plane", la).insertBefore(ka), sa = s.zeroPlaneColor, aa = s.zeroPlaneBorderColor, ca = s.zeroPlaneShowBorder, q.zeroplane = n.cubepath(P - J, wa + M, 1, ma, J, M, ya).attr({
      fill: [sa, !U],
      stroke: aa || "none",
      "stroke-width": ca ? 1 : 0
     })), (ya = C.data("categoryplots")) || (C.data("categoryplots", Array(f)), ya = C.data("categoryplots")), (sa = ka.data("categoryplots")) ||
     (ka.data("categoryplots", Array(f)), sa = ka.data("categoryplots")), q = 0; q < f; q += 1) ya[q] = ya[q] || n.group(C), sa[q] = sa[q] || n.group(ka);
   else la.attrs["clip-rect"] || la.attr({
    "clip-rect": q["clip-canvas"]
   }), za = la;
   q = 0;
   for (C = f - 1; q < f; q += 1, --C) {
    wa = d[q];
    ca = wa.y;
    X = ma = null;
    if (null === ca) {
     if (S = k[q]) X = S.graphic, I || X.attr({
      width: 0
     })
    }
    else {
     la = oa(wa.x, q);
     ka = wa.link;
     A = wa.toolText;
     aa = F(wa.borderWidth) || 0;
     la = B.getAxisPosition(la) + T;
     S = (e = wa.previousY) ? E.getAxisPosition(e) : P;
     na = E.getAxisPosition(ca + (e || 0));
     e = Ya(na - S);
     0 < ca && (na =
      S);
     Fa = {
      index: q,
      link: ka,
      value: wa.y,
      displayValue: wa.displayValue,
      categoryLabel: wa.categoryLabel,
      toolText: wa.toolText,
      id: a.userID,
      datasetIndex: a.index,
      datasetName: a.name,
      visible: a.visible
     };
     if (I) {
      za = 0 > ca ? ya : sa;
      (S = k[q]) || (S = k[q] = {
       index: q,
       value: ca,
       graphic: n.cubepath(za[C]),
       dataLabel: null,
       tracker: null
      });
      X = S.graphic;
      R = da = {};
      wa.hoverEffects && (R = {
       fill: [ga(wa.color), !U],
       stroke: aa && ga(wa.borderColor) || "NONE",
       "stroke-width": aa
      }, da = wa.rolloverProperties, da = {
       fill: [ga(da.color), !U],
       stroke: da.borderWidth && ga(da.borderColor) ||
        "NONE",
       "stroke-width": da.borderWidth
      });
      X.attr({
       cubepath: [O ? P - J : na - J, la + M, O ? 0 : e, W, J, M],
       fill: [ga(wa.color), !U],
       stroke: aa && ga(wa.borderColor) || "NONE",
       "stroke-width": aa,
       "stroke-dasharray": wa.dashStyle,
       cursor: ka ? "pointer" : "",
       visibility: V
      }).shadow(r.shadow && wa.shadow, Ja).data("BBox", {
       height: W,
       width: e,
       x: na,
       y: la
      });
      O && X.animate({
       cubepath: [na - J, la + M, e, W, J, M]
      }, O, "normal", c.getAnimationCompleteFn());
      if (ka || v) !m && e < H && (na -= (H - e) / 2, e = H), S.tracker || (S.tracker = n.cubepath(p)), ma = S.tracker, ma.attr({
       cubepath: [na - J,
la + M, e, W, J, M],
       cursor: ka ? "pointer" : "",
       stroke: aa && g || "NONE",
       "stroke-width": aa,
       fill: g,
       ishot: !0
      });
      (ma || X).data("eventArgs", Fa).click(fa).hover(Na(X, da), Ia(X, R)).tooltip(A);
      (ma || X)._.cubetop.data("eventArgs", Fa).click(fa).hover(Na(X, da), Ia(X, R));
      (ma || X)._.cubeside.data("eventArgs", Fa).click(fa).hover(Na(X, da), Ia(X, R));
      if (!m || m && 0 > ca) X.toBack(), ma && ma.toBack()
     }
     else {
      Q(na) <= Z && (e += na, na = Z + aa / 2 + .2, s.xAxisLineVisible && !L && --na, e -= na);
      pa(na + e) >= Y && (e = Y - na - aa / 2 - .2);
      La = K.crispBound(na, la, e, W, aa);
      na = La.x;
      la = La.y;
      e = La.width;
      Ga = La.height;
      1 >= e && (e = 1, na += 0 > ca ? -e : 0 === ca ? 0 : 1 < $ ? e : 0);
      (S = k[q]) || (S = k[q] = {
       index: q,
       value: ca,
       height: Ga,
       graphic: null,
       dataLabel: null,
       tracker: null
      });
      X = S.graphic;
      R = da = {};
      wa.hoverEffects && (R = {
       fill: ga(wa.color),
       stroke: ga(wa.borderColor),
       "stroke-width": aa,
       "stroke-dasharray": wa.dashStyle
      }, da = wa.rolloverProperties, da = {
       fill: ga(da.color),
       stroke: ga(da.borderColor),
       "stroke-width": da.borderWidth,
       "stroke-dasharray": da.dashStyle
      });
      ca = {
       x: O ? P : na,
       y: la,
       width: O ? 0 : e || 1,
       height: Ga,
       r: z,
       fill: ga(wa.color),
       stroke: ga(wa.borderColor),
       "stroke-width": aa,
       "stroke-dasharray": wa.dashStyle,
       "stroke-linejoin": "miter",
       cursor: ka ? "pointer" : "",
       visibility: V
      };
      X ? X.attr(ca) : X = S.graphic = n.rect(ca, za);
      X.shadow(r.shadow && wa.shadow, Ja).data("BBox", La);
      O && X.animate({
       x: na,
       width: e || 1
      }, O, "normal", c.getAnimationCompleteFn());
      if (ka || v) !m && e < H && (na -= (H - e) / 2, e = H), ma = S.tracker, ca = {
       x: na,
       y: la,
       width: e,
       height: W,
       r: z,
       cursor: ka ? "pointer" : "",
       stroke: g,
       "stroke-width": aa,
       fill: g,
       ishot: !0
      }, ma ? ma.attr(ca) : ma = S.tracker = n.rect(ca, p), ma.data("eventArgs", Fa);
      (ma || X).data("eventArgs",
       Fa).click(fa).hover(Na(X, da), Ia(X, R)).tooltip(A)
     }
     A = c.drawPlotBarLabel(a, b, q, na, la)
    }
    A && l.push(A);
    X && l.push(X);
    ma && l.push(ma);
    c.drawTracker && c.drawTracker.call(c, a, b, q)
   }
   a.visible = !1 !== b.visible;
   return a
  },
  drawPlotBarLabel: function (a, b, c, d, f, g) {
   var k = this.options,
    l = this.logic,
    n = k.chart,
    m = this.paper,
    p = this.layers,
    r = k.plotOptions.series.dataLabels.style,
    k = this.canvasLeft,
    q = this.canvasWidth,
    s = a.data[c],
    v = a.items[c];
   a = n.valuePadding + 2;
   var A = v.graphic;
   c = v.dataLabel;
   var z = 0 > s.y,
    B = l.isStacked,
    l = l.is3D,
    C = n.xDepth ||
    0,
    F = n.yDepth || 0,
    E = s.displayValue;
   b = !1 === b.visible ? "hidden" : "visible";
   var I = n.placeValuesInside;
   g = g || p.datalabels;
   if (sa(E) && E !== O && null !== s.y) {
    c || (c = v.dataLabel = m.text({
     "class": "fusioncharts-label",
     text: E,
     "font-size": r.fontSize,
     title: s.originalText || "",
     fill: r.color,
     direction: n.textDirection,
     x: 0,
     y: 0,
     "line-height": r.lineHeight
    }, g).attr("text-bound", [r.backgroundColor, r.borderColor, r.borderThickness, r.borderPadding, r.borderRadius, r.borderDash]));
    p = c.getBBox();
    g = A.data("BBox");
    r = g.height;
    m = g.width;
    g = B ?
     "middle" : z ? I ? "start" : "end" : I ? "end" : "start";
    n = z ? d - k : k + q - (d + m);
    p = p.width;
    p += a;
    r = f + .5 * r;
    s = d + (z ? 0 : m);
    f = z ? d - k : k + q - (d + m);
    if (B) s = La(k + .5 * p, s + .5 * (z ? m : -m)), s = qa(k + q - .5 * p, s), s -= l ? C : 0, r += l ? F : 0;
    else if (I ? m >= p ? (s += z ? a : -a, l && (r += F, s -= C)) : p < n ? (s += z ? -a : a, g = z ? "end" : "start", l && z && (s -= C)) : (z ? (s = d + m + La(p - d - m + k, 0) - a, g = "end", s -= l ? C : 0) : (s = d - La(p - (k + q - d), 0) + a, g = "start"), l && (s -= C, r += F)) : f >= p ? (s += z ? -a : a, l && z && (s -= C, r += C)) : (s += z ? a + p : -(a + p), l && (s -= C, r += F)), s > k + q || s < k) s = k + 4, g = "start";
    c.attr({
     x: s,
     y: r,
     "text-anchor": g,
     visibility: b
    })
   }
   else c &&
    c.attr({
     text: O
    });
   return c
  },
  drawPlotBar3d: function (a, b) {
   this.drawPlotBar.call(this, a, b)
  },
  drawPlotLine: function (b, c) {
   var d = this,
    f = d.paper,
    k = d.elements,
    l = d.options,
    n = l.chart,
    m = d.logic,
    p = l.plotOptions.series,
    r = b.items,
    q = b.graphics = b.graphics || [],
    s, v = d.xAxis[c.xAxis || 0],
    z = d.yAxis[c.yAxis || 0],
    A = m.multisetRealtime || m.dragExtended,
    B = m.isWaterfall,
    C, E, I, H, L, Q = 0,
    O = !1 !== (l.tooltip || {}).enabled,
    W, T = isNaN(+p.animation) && p.animation.duration || 1E3 * p.animation,
    U, P = p.dataLabels.style,
    V = {
     fontFamily: P.fontFamily,
     fontSize: P.fontSize,
     lineHeight: P.lineHeight,
     fontWeight: P.fontWeight,
     fontStyle: P.fontStyle
    },
    Z = n.xDepth || 0,
    Y = n.yDepth || 0,
    $ = n.series2D3Dshift,
    ca = c.step,
    aa = c.drawVerticalJoins,
    ma = c.useForwardSteps,
    la = b.data,
    t = !1 === c.visible ? "hidden" : "visible",
    w, J = la.length,
    M = v.getAxisPosition(0),
    e = v.getAxisPosition(1) - M,
    da = e * J,
    R = v.axisData.scroll || {},
    S = n.hasScroll || !1,
    ka, na = p.connectNullData,
    pa = d.chartWidth,
    sa = d.chartHeight,
    ya = function () {
     hc.attr({
      "clip-rect": null
     });
     Ob.show();
     Bc.show();
     Pb.show();
     Fb.attr({
      transform: "...t" + -pa + "," + -sa
     })
    },
    X,
    Fa, za, Aa, Ea, Ja, Na, Ia = null,
    Ga, Ma, Ta = p.connectorWidth = F(c.lineWidth),
    ob = c.color,
    Va, Oa, Wa = p.connectorDashStyle = c.dashStyle,
    ab, Ya, kb, mb, hb, Za, cb, ib, jb, sb = d.layers,
    yb = sb.dataset = sb.dataset || f.group("dataset-orphan"),
    Fb = sb.datalabels = sb.datalabels || f.group("datalabels").insertAfter(yb),
    xc = sb.tracker,
    Qb = k["clip-canvas-init"].slice(0),
    Sb = k["clip-canvas"].slice(0),
    Hc = z.axisData.reversed,
    bc = z.max,
    cc = z.min,
    Pc = z.getAxisPosition(0 < bc && 0 < cc ? Hc ? bc : cc : 0 > bc && 0 > cc ? Hc ? cc : bc : Hc ? bc : 0) + ($ ? Y : 0),
    Nb = [],
    $b = n.anchorTrackingRadius,
    zb = /drag/ig.test(d.logic.rendererId),
    qb, qc, Gb, Bc, Ob, hc, Pb, gb, Cc, Ic, Ua, vb, ac = [],
    rb = function (a) {
     ta.call(this, d, a)
    },
    rc = function (a) {
     return function (b) {
      d.hoverPlotAnchor(this, b, "DataPlotRollOver", a, d)
     }
    },
    Qc = function (a) {
     return function (b) {
      d.hoverPlotAnchor(this, b, "DataPlotRollOut", a, d)
     }
    },
    wb = function (a, e, k, l, n, m, p, r) {
     return function () {
      var s = k.imageUrl,
       w = k.imageScale,
       v = k.imageAlpha,
       z = p.imageHoverAlpha,
       A = p.imageHoverScale,
       B = this.height * w * .01,
       C = this.width * w * .01,
       F = this.width * A * .01;
      cb = {
       x: a - this.width * w * .005,
       y: e -
        this.height * w * .005,
       width: C,
       height: B,
       alpha: v
      };
      ib = {
       x: a - this.width * A * .005,
       y: e - this.height * A * .005,
       width: F,
       height: this.height * A * .01,
       alpha: z
      };
      z = F > C ? ib : cb;
      zb && (z = {
       cx: a,
       cy: e,
       r: .5 * La(B, C)
      });
      (l.graphic = mb = f.image(s, Pb).attr(cb).css({
       opacity: .01 * v
      }).data("alwaysInvisible", !w).data("setRolloverProperties", p).data("setRolloverAttr", ib).data("setRolloutAttr", cb).data("anchorRadius", w).data("anchorHoverRadius", A)) && q.push(mb);
      if (Fa || O || p) hb = l.tracker = (zb ? f.circle(xc) : f.rect(xc)).attr(z).attr({
       cursor: Fa ? "pointer" : "",
       stroke: g,
       "stroke-width": k.lineWidth,
       fill: g,
       ishot: !0,
       visibility: t
      }).data("eventArgs", n).data("groupId", qb).click(rb).hover(rc(l), Qc(l)).tooltip(m);
      d.drawTracker && d.drawTracker.call(d, b, c, r);
      (Ua = l.dataLabel = d.drawPlotLineLabel(b, c, r, a, e)) && q.push(Ua)
     }
    },
    Kb = function (a, e, f, g, k, l, n, m) {
     return function () {
      (Ua = g.dataLabel = d.drawPlotLineLabel(b, c, m, a, e)) && q.push(Ua)
     }
    };
   d.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", V);
   Fb.attr("class", "fusioncharts-datalabels");
   p.connectorOpacity = K.color(ob).opacity;
   z.yBasePos = Pc;
   B && (C = (E = d.definition.chart) && E.plotspacepercent, I = p.groupPadding, H = p.maxColWidth, L = (1 - .01 * C) * e || qa(e * (1 - 2 * I), 1 * H), Q = L / 2);
   Fb.attr({
    transform: "...t" + pa + "," + sa
   });
   T && d.animationCompleteQueue.push({
    fn: ya,
    scope: d
   });
   Gb = yb.line || (yb.line = f.group("line-connector", yb));
   Bc = b.lineShadowLayer || (b.lineShadowLayer = f.group("connector-shadow", Gb));
   Ob = b.anchorShadowLayer || (b.anchorShadowLayer = f.group("anchor-shadow", Gb));
   hc = b.lineLayer || (b.lineLayer = f.group("connector", Gb));
   Pb = b.anchorLayer || (b.anchorLayer =
    f.group("anchors", Gb));
   Pb.hide();
   Bc.hide();
   Ob.hide();
   for (w = 0; w < J; w += 1) {
    X = la[w];
    Ea = X.y;
    Ja = X.previousY || 0;
    W = X.toolText;
    qb = b.index + "_" + w;
    jb = Ua = mb = hb = null;
    s = r[w] = {
     index: w,
     value: null,
     graphic: null,
     connector: null,
     dataLabel: null,
     shadowGroup: Ob,
     tracker: null
    };
    if (null === Ea) ac.length = 0, 0 === na && (Ia = null);
    else {
     Aa = oa(X.x, w);
     Fa = X.link;
     "boxandwhisker" === c.relatedSeries && c.pointStart && (Aa += c.pointStart);
     Ma = z.getAxisPosition(Ea + Ja) + ($ ? Y : 0);
     Ga = v.getAxisPosition(Aa) - Z;
     Ga = fa(Ga, Ta, Ta).position;
     Ma = fa(Ma, Ta, Ta).position;
     if ((ab = X.marker) && ab.enabled)
      if (Ya = ab.symbol.split("_"), kb = "spoke" === Ya[0] ? 1 : 0, za = ab.radius, gb = ab.shadow, qc = {
        index: w,
        link: Fa,
        value: X.y,
        displayValue: X.displayValue,
        categoryLabel: X.categoryLabel,
        toolText: X.toolText,
        id: b.userID,
        datasetIndex: b.index,
        datasetName: b.name,
        visible: b.visible
       }, cb = ib = {}, Za = X.rolloverProperties, ab.imageUrl) vb = new a, vb.onload = wb(Ga, Ma, ab, s, qc, W, Za, w), vb.onerror = Kb(Ga, Ma, ab, s, qc, W, Za, w), vb.src = ab.imageUrl;
      else {
       Za && (cb = {
        polypath: [Ya[1] || 2, Ga, Ma, za, ab.startAngle, kb],
        fill: ga(ab.fillColor),
        "stroke-width": ab.lineWidth,
        stroke: ga(ab.lineColor)
       }, ib = {
        polypath: [Za.sides || 2, Ga, Ma, Za.radius, Za.startAngle, Za.dip],
        fill: ga(Za.fillColor),
        "stroke-width": Za.lineWidth,
        stroke: ga(Za.lineColor)
       });
       mb = s.graphic = f.polypath(Ya[1] || 2, Ga, Ma, za, ab.startAngle, kb, Pb).attr({
        fill: ga(ab.fillColor),
        "stroke-width": ab.lineWidth,
        stroke: ga(ab.lineColor),
        cursor: Fa ? "pointer" : "",
        visibility: za ? t : "hidden"
       }).data("alwaysInvisible", !za).data("setRolloverProperties", Za).data("setRolloverAttr", ib).data("setRolloutAttr", cb).data("anchorRadius",
        za).data("anchorHoverRadius", Za && Za.radius).shadow(gb || !1, Ob);
       if (Fa || O || Za) za = La(za, Za && Za.radius || 0, $b), hb = s.tracker = f.circle({
        cx: Ga,
        cy: Ma,
        r: za,
        cursor: Fa ? "pointer" : "",
        stroke: g,
        "stroke-width": ab.lineWidth,
        fill: g,
        ishot: !0,
        visibility: t
       }, xc);
       (hb || mb).data("eventArgs", qc).data("groupId", qb).click(rb).hover(rc(s), Qc(s)).tooltip(W);
       d.drawTracker && d.drawTracker.call(d, b, c, w)
      }
     Cc = Ic !== [ga(X.color || ob), X.dashStyle || Wa].join(":");
     if (null !== Ia) {
      if (ac.length && (Nb = Nb.concat(ac), ac.length = 0), (A || B || !Nb.join("")) &&
       Nb.push("M", Na, Ia), B && Nb.push("m", -Q, 0), ca ? ma ? (Nb.push("H", Ga), B && Nb.push("h", Q), aa ? Nb.push("V", Ma) : Nb.push("m", 0, Ma - Ia)) : (aa && Nb.push("V", Ma), Nb.push("M", Na, Ma, "H", Ga)) : Nb.push("L", Ga, Ma), A || Cc) jb = s.connector = f.path(Nb, hc).attr({
       "stroke-dasharray": Oa,
       "stroke-width": Ta,
       stroke: Va,
       "stroke-linecap": "round",
       "stroke-linejoin": 2 < Ta ? "round" : "miter",
       visibility: t
      }).shadow(p.shadow && X.shadow, Bc), Nb = []
     }
     else !A && ac.push("M", Ga, Ma);
     ab && ab.imageUrl || (Ua = s.dataLabel = d.drawPlotLineLabel(b, c, w, Ga, Ma));
     Na = Ga;
     Ia = Ma;
     Va = ga(X.color || ob);
     Oa = X.dashStyle || Wa;
     Ic = [Va, Oa].join(":")
    }
    Ua && q.push(Ua);
    mb && q.push(mb);
    jb && q.push(jb);
    hb && q.push(hb)
   }!A && Nb.join("") && (jb = f.path(Nb, hc).attr({
    "stroke-dasharray": Oa,
    "stroke-width": Ta,
    stroke: Va,
    "stroke-linecap": "round",
    "stroke-linejoin": 2 < Ta ? "round" : "miter",
    visibility: t
   }).shadow(p.shadow && X.shadow, Bc)) && q.push(jb);
   S && (ka = R.startPercent, Sb[2] = da + Qb[0], 1 === ka && (Qb[0] = Sb[2], Sb[0] = 0));
   T ? (U = K.animation({
    "clip-rect": Sb
   }, T, S ? "easeIn" : "normal", d.getAnimationCompleteFn()), hc.attr({
    "clip-rect": Qb
   }).animate(B ?
    U.delay(T) : U)) : (ya && ya(), ya = void 0);
   b.visible = !1 !== c.visible;
   return b
  },
  hoverPlotAnchor: function (a, b, c, d, f) {
   var g = d.graphic;
   d = d.dataLabel;
   var k = f.options.chart,
    l = 1 === k.rotateValues ? 270 : 0,
    n = g.data("setRolloverProperties"),
    m = g.data("isRealtime"),
    p = m && g.attr("polypath"),
    r = g.data("setRolloverAttr"),
    q = "image" === g.type,
    s = g.data("setRolloutAttr"),
    v = d && (d.data("isBelow") ? 1 : -1) * (q ? .5 * (r.height - s.height) : g.data("anchorHoverRadius") - g.data("anchorRadius")),
    z = "DataPlotRollOver" == c ? r : s,
    A = {
     transform: "T0," + ("DataPlotRollOver" ===
      c ? v : 0) + "R" + l
    },
    B = {
     fill: z.fill,
     "stroke-width": z["stroke-width"],
     stroke: z.stroke
    },
    z = q ? z : {
     polypath: z.polypath
    },
    k = k.syncLabelWithAnchor,
    C = g.data("anchorRadius"),
    F = g.data("anchorHoverRadius"),
    r = !(/,0\)$/.test(r.fill) && /,0\)$/.test(s.fill)) && g.data("anchorHoverRadius") - g.data("anchorRadius") && n.animation && 50;
   d && d.data("isMiddle") && (A = {
    transform: "T," + ("DataPlotRollOver" === c ? v : 0) + ",0R" + l
   });
   n && (("DataPlotRollOver" == c && 0 !== F || "DataPlotRollOut" == c && 0 !== C) && g.attr({
    visibility: "visible"
   }), q ? g.css({
    opacity: .01 *
     z.alpha
   }) : g.attr(B), m && !q && (z.polypath[1] = p[1], z.polypath[2] = p[2]), g.stop(), g.animate(z, r, "easeOut", function () {
    ("DataPlotRollOver" == c && !F || "DataPlotRollOut" == c && !C) && g.attr({
     visibility: "hidden"
    })
   }), d && d.stop(), r && k && d && d.animate(A, r, "easeOut"));
   ta.call(a, f, b, c)
  },
  drawPlotArea: function (b, c) {
   var d = this,
    f = d.paper,
    l = d.options,
    n = l.chart,
    m = d.logic,
    p = l.plotOptions.series,
    r = d.elements,
    q = b.items,
    s = b.graphics = b.graphics || [],
    v, z = d.xAxis[c.xAxis || 0],
    A = d.yAxis[c.yAxis || 0],
    B = A.axisData.reversed,
    C = n.xDepth || 0,
    F =
    n.yDepth || 0,
    m = m.isStacked,
    E = !1 !== (l.tooltip || {}).enabled,
    I, H, l = p.dataLabels.style,
    K = {
     fontFamily: l.fontFamily,
     fontSize: l.fontSize,
     lineHeight: l.lineHeight,
     fontWeight: l.fontWeight,
     fontStyle: l.fontStyle,
     color: l.color
    },
    l = isNaN(+p.animation) && p.animation.duration || 1E3 * p.animation,
    L = n.series2D3Dshift,
    Q = "0" === d.definition.chart.drawfullareaborder,
    O = b.data,
    W = !1 === c.visible ? "hidden" : "visible",
    T = O.length,
    P = z.getAxisPosition(0),
    U = (z.getAxisPosition(1) - P) * T,
    V = z.axisData.scroll || {},
    P = n.hasScroll || !1,
    Z = p.connectNullData,
    Y, $, aa, ca, fa, t = A.max,
    w = A.min,
    J = A.getAxisPosition(0 < t && 0 > w ? 0 : !B && 0 < t && 0 <= w ? w : t) + (L ? F : 0),
    M = d.chartWidth,
    e = d.chartHeight,
    B = function () {
     Wa.attr({
      "clip-rect": null
     });
     ab.show();
     Oa.show();
     Ma.attr({
      transform: "...t" + -M + "," + -e
     })
    },
    da = null,
    R, S, t = c.lineWidth,
    w = c.dashStyle,
    ka = ga(c.fillColor),
    ma = ga(c.lineColor),
    la = 0,
    na = /drag/ig.test(d.logic.rendererId),
    qa, X, pa, sa, ya, za, Aa = [],
    Ea = [],
    Ga = null,
    Ja = [],
    Ia = d.layers;
   ca = Ia.dataset = Ia.dataset || f.group("dataset-orphan");
   var Ma = Ia.datalabels = Ia.datalabels || f.group("datalabels").insertAfter(ca),
    Na = Ia.tracker,
    Ia = r["clip-canvas-init"].slice(0),
    r = r["clip-canvas"].slice(0),
    n = n.anchorTrackingRadius,
    Va, Oa, Ta, ab, Wa, Ya, mb, hb, Za, cb, ib = function (a) {
     ta.call(this, d, a)
    },
    jb = function (a) {
     return function (b) {
      d.hoverPlotAnchor(this, b, "DataPlotRollOver", a, d)
     }
    },
    kb = function (a) {
     return function (b) {
      d.hoverPlotAnchor(this, b, "DataPlotRollOut", a, d)
     }
    },
    Ga = function (a, e, l, n, m, p, r, q) {
     return function () {
      var t = l.imageUrl,
       v = l.imageScale,
       w = l.imageAlpha,
       z = r.imageHoverAlpha,
       A = r.imageHoverScale,
       B = this.width * v * .01,
       C = this.width * A *
       .01;
      ya = {
       x: a - this.width * v * .005,
       y: e - this.height * v * .005,
       width: B,
       height: this.height * v * .01,
       alpha: w
      };
      za = {
       x: a - this.width * A * .005,
       y: e - this.height * A * .005,
       width: C,
       height: this.height * A * .01,
       alpha: z
      };
      z = C > B ? za : ya;
      na && (z = {
       cx: a,
       cy: e,
       r: .5 * La(C, B)
      });
      (n.graphic = X = f.image(t, ab).attr(ya).css({
       opacity: .01 * w
      }).data("alwaysInvisible", !v).data("setRolloverProperties", r).data("setRolloverAttr", za).data("setRolloutAttr", ya).data("anchorRadius", v).data("anchorHoverRadius", A)) && s.push(X);
      if ($ || E || r) Va = k({
       cursor: $ ? "pointer" : "",
       stroke: g,
       "stroke-width": l.lineWidth,
       fill: g,
       ishot: !0,
       visibility: W
      }, z), pa = n.tracker = (na ? f.circle(Va, Na) : f.rect(Va, Na)).data("eventArgs", m).click(ib).hover(jb(n), kb(n)).tooltip(p), d.drawTracker && d.drawTracker.call(d, b, c, q);
      (cb = n.dataLabel = d.drawPlotLineLabel(b, c, q, a, e)) && s.push(cb)
     }
    },
    sb = function (a, e, f, g, k, l, n, m) {
     return function () {
      (cb = g.dataLabel = d.drawPlotLineLabel(b, c, m, a, e)) && s.push(cb)
     }
    };
   d.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label", K);
   Ma.attr("class", "fusioncharts-datalabels");
   A.yBasePos = J;
   Ma.attr({
    transform: "...t" + M + "," + e
   });
   l && d.animationCompleteQueue.push({
    fn: B,
    scope: d
   });
   K = ca;
   m && (Ya = K.shadows || (K.shadows = f.group("shadows", K).toBack()));
   Wa = K.area = K.area || f.group("area", K);
   K = K.areaConnector || (K.areaConnector = f.group("area-connector", K));
   b.lineShadowLayer || (b.lineShadowLayer = f.group("connector-shadow", K));
   Oa = b.anchorShadowLayer || (b.anchorShadowLayer = f.group("anchor-shadow", K));
   Ta = b.lineLayer || (b.lineLayer = f.group("connector", K));
   ab = b.anchorLayer || (b.anchorLayer = f.group("anchors",
    K));
   ab.hide();
   Oa.hide();
   K = ca;
   for (K = 0; K < T; K += 1) {
    Y = O[K];
    ca = Y.y;
    v = oa(Y.x, K);
    R = z.getAxisPosition(v) - C;
    X = cb = pa = null;
    v = q[K] = {};
    if (null === ca) 0 === Z && (da = null, 0 < la && (1 === la ? Aa.splice(-8, 8) : (Aa = Aa.concat(Ea), Aa.push("Z")), Ea = [])), v.chart = d, v.index = K, v.value = ca;
    else {
     $ = Y.link;
     I = Y.toolText;
     H = Y.previousY;
     fa = (fa = A.getAxisPosition(H) || null) || J;
     S = A.getAxisPosition(ca + (H || 0)) + (L ? F : 0);
     if ((Za = Y.marker) && Za.enabled)
      if (H = {
        index: K,
        link: $,
        value: Y.y,
        displayValue: Y.displayValue,
        categoryLabel: Y.categoryLabel,
        toolText: Y.toolText,
        id: b.userID,
        datasetIndex: b.index,
        datasetName: b.name,
        visible: b.visible
       }, ya = za = {}, sa = Y.rolloverProperties, Za.imageUrl) aa = new a, aa.onload = Ga(R, S, Za, v, H, I, sa, K), aa.onerror = sb(R, S, Za, v, H, I, sa, K), aa.src = Za.imageUrl;
      else {
       qa = Za.symbol.split("_");
       aa = Za.radius;
       hb = Za.shadow;
       sa && (ya = {
        polypath: [qa[1] || 2, R, S, aa, Za.startAngle, 0],
        fill: ga(Za.fillColor),
        "stroke-width": Za.lineWidth,
        stroke: ga(Za.lineColor)
       }, sa = Y.rolloverProperties, za = {
        polypath: [sa.sides || 2, R, S, sa.radius, sa.startAngle, sa.dip],
        fill: ga(sa.fillColor),
        "stroke-width": sa.lineWidth,
        stroke: ga(sa.lineColor)
       });
       X = v.graphic = f.polypath(qa[1] || 2, R, S, aa, Za.startAngle, 0, ab).attr({
        fill: ga(Za.fillColor),
        "stroke-width": Za.lineWidth,
        stroke: ga(Za.lineColor),
        cursor: $ ? "pointer" : "",
        visibility: aa ? W : "hidden"
       }).data("alwaysInvisible", !aa).data("setRolloverProperties", sa).data("setRolloverAttr", za).data("setRolloutAttr", ya).data("anchorRadius", aa).data("anchorHoverRadius", sa && sa.radius).shadow(hb || !1, Oa);
       if ($ || E || sa) m || (aa = La(aa, sa && sa.radius || 0, n)), pa = v.tracker = f.circle({
        cx: R,
        cy: S,
        r: aa,
        cursor: $ ?
         "pointer" : "",
        stroke: g,
        "stroke-width": Za.lineWidth,
        fill: g,
        ishot: !0,
        visibility: W
       }, Na);
       (pa || X).data("eventArgs", H).click(ib).hover(jb(v), kb(v)).tooltip(I);
       d.drawTracker && d.drawTracker.call(d, b, c, K)
      }
     null === da ? (Ja.push("M", R, ",", S), Aa.push("M", R, ",", fa), la = 0) : Ja.push("L", R, ",", S);
     Aa.push("L", R, ",", S);
     Ea.unshift("L", R, ",", fa);
     la++;
     da = S;
     Za && Za.imageUrl || (cb = v.dataLabel = d.drawPlotLineLabel(b, c, K, R, S));
     v.chart = d;
     v.index = K;
     v.value = ca;
     v.dataLabel = cb
    }
    cb && s.push(cb);
    X && s.push(X);
    pa && s.push(pa)
   }
   0 < la && (1 === la ? Aa.splice(-8,
    8) : (Aa = Aa.concat(Ea), Aa.push("Z")));
   (Ga = b.graphic = f.path(Aa, Wa).attr({
    fill: ka,
    "stroke-dasharray": w,
    "stroke-width": Q ? 0 : t,
    stroke: ma,
    "stroke-linecap": "round",
    "stroke-linejoin": 2 < t ? "round" : "miter",
    visibility: W
   }).shadow(p.shadow && Y.shadow, Ya)) && s.push(Ga);
   P && (p = V.startPercent, r[2] = U + Ia[0], 1 === p && (Ia[0] = r[2], r[0] = 0));
   l ? mb = Wa.attr({
    "clip-rect": Ia
   }).animate({
    "clip-rect": r
   }, l, P ? "easeIn" : "normal", d.getAnimationCompleteFn()) : (B && B(), B = void 0);
   Ya && (l ? Ya.attr({
    "clip-rect": Ia
   }).animateWith(Wa, mb, {
     "clip-rect": r
    },
    l, P ? "easeIn" : "normal",
    function () {
     Ya.attr({
      "clip-rect": null
     })
    }) : Ya.attr({
    "clip-rect": null
   }));
   Q && (p = b.connector = f.path(Ja, Ta).attr({
    "stroke-dasharray": w,
    "stroke-width": t,
    stroke: ma,
    "stroke-linecap": "round",
    "stroke-linejoin": 2 < t ? "round" : "miter",
    visibility: W
   }), l ? Ta.attr({
    "clip-rect": Ia
   }).animateWith(Wa, mb, {
    "clip-rect": r
   }, l, P ? "easeIn" : "normal", function () {
    Ta.attr({
     "clip-rect": null
    })
   }) : Ta.attr({
    "clip-rect": null
   }), p && s.push(p));
   b.visible = !1 !== c.visible;
   return b
  },
  drawPlotScatter: function (a, b) {
   var c = this,
    d =
    c.options,
    f = d.chart,
    k = d.plotOptions.series,
    l = c.paper,
    n = c.elements,
    m = a.items,
    p, r = a.graphics = a.graphics || [],
    q = c.xAxis[b.xAxis || 0],
    s = c.yAxis[b.yAxis || 0],
    v = a.data,
    z = !1 === b.visible ? "hidden" : "visible",
    d = !1 !== (d.tooltip || {}).enabled,
    A, B = k.dataLabels.style,
    C = {
     fontFamily: B.fontFamily,
     fontSize: B.fontSize,
     lineHeight: B.lineHeight,
     fontWeight: B.fontWeight,
     fontStyle: B.fontStyle,
     color: B.color
    },
    B = isNaN(+k.animation) && k.animation.duration || 1E3 * k.animation,
    F = c.chartWidth,
    E = c.chartHeight,
    I, H, K, L, Q, O, P, W, T, U = b.lineWidth,
    V = 0 < U,
    Y = b.color,
    Z = b.dashStyle,
    aa = k.connectNullData,
    $ = [],
    t, w, J, M, e, da, R = c.layers,
    S = R.dataset || (R.dataset = l.group("dataset-orphan")),
    ca = R.datalabels || (R.datalabels = l.group("datalabels").insertAfter(S)),
    R = R.tracker,
    f = f.anchorTrackingRadius,
    fa, la, ma, oa = function (a) {
     ta.call(this, c, a)
    },
    X = function (a) {
     return function (b) {
      c.hoverPlotAnchor(this, b, "DataPlotRollOver", a, c)
     }
    },
    na = function (a) {
     return function (b) {
      c.hoverPlotAnchor(this, b, "DataPlotRollOut", a, c)
     }
    };
   c.addCSSDefinition(".fusioncharts-datalabels .fusioncharts-label",
    C);
   ca.attr("class", "fusioncharts-datalabels");
   B && (c.animationCompleteQueue.push({
    fn: function () {
     ca.attr({
      transform: "...t" + -F + "," + -E
     })
    },
    scope: c
   }), ca.attr({
    transform: "...t" + F + "," + E
   }));
   fa = S.line || (S.line = l.group("line-connector", S));
   a.lineShadowLayer = l.group("connector-shadow", fa);
   S = a.anchorShadowLayer = l.group("anchor-shadow", fa);
   C = a.lineLayer = l.group("connector", fa);
   fa = a.anchorLayer = l.group("anchors", fa);
   I = 0;
   for (H = v.length; I < H; I += 1) {
    K = v[I];
    t = K.marker;
    W = T = M = A = e = null;
    ma = a.index + "_" + I;
    O = K.y;
    Q = K.x;
    if (null !==
     O && null !== Q) {
     if (t && t.enabled) {
      L = K.link;
      A = K.toolText;
      J = t.radius;
      la = t.shadow;
      T = s.getAxisPosition(O);
      W = q.getAxisPosition(Q);
      w = {
       index: I,
       link: L,
       y: K.y,
       x: K.x,
       displayValue: K.displayValue,
       categoryLabel: K.categoryLabel,
       toolText: K.toolText,
       id: a.userID,
       datasetIndex: a.index,
       datasetName: a.name,
       visible: a.visible
      };
      M = t.symbol.split("_");
      p = m[I] = {
       index: I,
       x: Q,
       y: O,
       value: O
      };
      Q = O = {};
      K.hoverEffects && (Q = {
        polypath: [M[1] || 2, W, T, J, t.startAngle, 0],
        fill: ga(t.fillColor),
        "stroke-width": t.lineWidth,
        stroke: ga(t.lineColor)
       }, da = K.rolloverProperties,
       O = {
        polypath: [da.sides || 2, W, T, da.radius, da.startAngle, da.dip],
        fill: ga(da.fillColor),
        "stroke-width": da.lineWidth,
        stroke: ga(da.lineColor)
       });
      M = p.graphic = l.polypath(M[1] || 2, W, T, J, t.startAngle, 0, fa).attr({
       fill: ga(t.fillColor),
       "stroke-width": t.lineWidth,
       stroke: ga(t.lineColor),
       cursor: L ? "pointer" : "",
       visibility: J ? z : "hidden"
      }).data("alwaysInvisible", !J).data("setRolloverProperties", da).data("setRolloverAttr", O).data("setRolloutAttr", Q).data("anchorRadius", J).data("anchorHoverRadius", da && da.radius).shadow(la ||
       !1, S);
      if (L || d || da) J = La(J, da && da.radius || 0, f), e = p.tracker = l.circle({
       cx: W,
       cy: T,
       r: J,
       cursor: L ? "pointer" : "",
       stroke: g,
       "stroke-width": t.lineWidth,
       fill: g,
       ishot: !0,
       visibility: z
      }, R);
      (e || M).data("eventArgs", w).data("groupId", ma).click(oa).hover(X(p), na(p)).tooltip(A)
     }
     V && ((void 0 === P || null === P && 0 === aa) && W && T && $.push("M", W, ",", T), W && T && $.push("L", W, ",", T), P = T);
     A = p.dataLabel = c.drawPlotLineLabel(a, b, I, W, T)
    }
    else V && 0 === aa && (P = null), m[I] = {
     chart: c,
     index: I,
     x: Q,
     y: O
    };
    A && r.push(A);
    M && r.push(M);
    e && r.push(e);
    c.drawTracker &&
     c.drawTracker.call(c, a, b, I)
   }
   $.length && (k = a.graphic = l.path($, C).attr({
    "stroke-dasharray": Z,
    "stroke-width": U,
    stroke: Y,
    "stroke-linecap": "round",
    "stroke-linejoin": 2 < U ? "round" : "miter",
    visibility: z
   }).shadow(k.shadow && K.shadow), C.attr({
    "clip-rect": n[B ? "clip-canvas-init" : "clip-canvas"]
   }), B && C.animate({
    "clip-rect": n["clip-canvas"]
   }, B, "normal"), r.push(k));
   B && fa.attr({
    opacity: 0
   }).animate({
    opacity: 1
   }, B, "normal", c.getAnimationCompleteFn());
   a.visible = !1 !== b.visible;
   return a
  },
  drawPlotLineLabel: function (a, b, c, d,
   f, g) {
   var k = this.options,
    l = k.chart,
    m = this.paper,
    p = this.layers,
    r = k.plotOptions.series.dataLabels.style,
    k = 1 === l.rotateValues ? 270 : 0,
    q = this.canvasHeight,
    s = this.canvasTop,
    v = a.data,
    z = v[c],
    A = a.items[c],
    B = n(z.valuePosition, "auto").toLowerCase();
   a = this.logic.defaultSeriesType;
   var C = A.graphic,
    F = z.marker,
    C = F && F.enabled ? C && "image" == C.type && .5 * C.attr("height") || F && F.radius - 3 : 0,
    C = l.valuePadding + 2 + C;
   b = !1 === b.visible ? "hidden" : "visible";
   F = A.dataLabel;
   g = g || p.datalabels;
   switch (B) {
   case "above":
    c = 0;
    break;
   case "below":
    c =
     1;
    break;
   default:
    p = v[c - 1] || {}, v = v[c + 1] || {}, c = c ? p.y > z.y ? 1 : (null == p.y && v.y) > z.y ? 1 : 0 : 0
   }
   p = z.displayValue;
   sa(p) && p !== O ? (F ? k && F.attr("transform", ["r", 360 - k]) : F = A.dataLabel = m.text(g).attr({
    "class": "fusioncharts-label",
    text: p,
    fill: r.color,
    "text-bound": [r.backgroundColor, r.borderColor, r.borderThickness, r.borderPadding, r.borderRadius, r.borderDash],
    direction: l.textDirection,
    "font-weight": r.fontWeight,
    "font-style": r.fontStyle,
    "font-family": r.fontFamily,
    "font-size": r.fontSize,
    "line-height": r.lineHeight
   }), F.attr({
    title: z.originalText ||
     "",
    fill: r.color
   }), A._state && A._state.labelWidth || (g = F.getBBox(), A._state = {
    labelWidth: g.width,
    labelHeight: g.height
   }), l = m = k ? A._state.labelWidth : A._state.labelHeight, g = f - s, q = s + q - f, l = l + C + 4, s = .5 * m + C, /bubble/i.test(a) || (c ? q > l ? (f += s, z._valueBelowPoint = 1) : g > l && (f -= s, z._valueBelowPoint = 0) : g > l ? (f -= s, z._valueBelowPoint = 0) : q > l && (f += s, z._valueBelowPoint = 1)), F.attr({
    x: d,
    y: f,
    visibility: b
   }).data("isBelow", z._valueBelowPoint), k && F.attr("transform", "T0,0,R" + k)) : F && F.attr({
    text: O
   });
   return F
  },
  drawLabels: function () {
   for (var a =
     this.paper, b = this.options, c = b.labels && b.labels.items && b.labels.items, d = c && c.length, f = this.layers.layerAboveDataset, g = this.elements.quadran || (this.elements.quadran = []), k = this.canvasTop, l = this.canvasLeft, b = b.chart.textDirection, n = {
      right: "end",
      left: "start",
      undefined: "start"
     }, m, p, r; d--;) r = c[d], m = r.style, p = {
    fontFamily: m.fontFamily,
    fontSize: m.fontSize,
    lineHeight: m.lineHeight,
    fontWeight: m.fontWeight,
    fontStyle: m.fontStyle,
    fill: m.color
   }, sa(r.html) && r.html !== O && (g[d] = a.text({
    text: r.html
   }, f).css(p).attr({
    x: parseInt(m.left,
     10) + l,
    y: parseInt(m.top, 10) + k,
    "text-anchor": n[r.textAlign],
    "vertical-align": r.vAlign,
    direction: b,
    "text-bound": [m.backgroundColor, m.borderColor, m.borderThickness, m.borderPadding, m.borderRadius, m.borderDash]
   }))
  }
 }, I["renderer.root"]);
 I("renderer.piebase", {
  isHovered: !1,
  getPlotData: function (a, b) {
   var c = this.datasets[0],
    d = c.data[a],
    c = c.userData || (c.userData = []),
    f, g;
   if (c[a]) c = c[a];
   else {
    c = c[a] = {};
    for (g in d) "object" !== typeof (f = d[g]) && "function" !== typeof f && 0 !== g.indexOf("_") && (c[g] = f);
    c.value = c.y;
    c.label = c.name;
    delete c.y;
    delete c.total;
    delete c.doNotSlice;
    delete c.name;
    delete c.centerAngle;
    delete c.showInLegend
   }
   c.sliced = b;
   return c
  },
  redrawDataLabels: function (a) {
   var b = a.elements.plots[0];
   a.placeDataLabels(!0, b.items, b);
   return {}
  },
  sliceInOtherPies: function (a) {
   var b = this.options.series[0],
    c = b.plot.items,
    d = c.length,
    f = 0,
    g;
   for (b.enableMultiSlicing = !0; d--;) d !== a && (g = c[d]).sliced && ++f && this.plotGraphicClick.call(g);
   b.enableMultiSlicing = !1;
   return !!f
  },
  plotGraphicClick: function (a) {
   var b = this.graphic || this,
    c = b.plotItem ||
    b.data("plotItem"),
    d = c.seriesData,
    f = c.chart,
    g = f.logic.chartInstance,
    l = c.index,
    n = b.data("eventArgs") || {},
    m = f.options.series[0].enableMultiSlicing,
    p = d.data[c.index].doNotSlice,
    r = c.slicedTranslation,
    s, v;
   !d.isRotating && ta.call(b, f, a);
   if (!(d.isRotating || d.singletonCase || p || (b = !m && f.sliceInOtherPies(l), (a = c.sliced) && b))) return b = c.graphic, d = c.connector, m = c.dataLabel, r = "object" === typeof r ? "t" + r : r, p = c.connectorPath, s = (a ? -1 : 1) * c.transX, v = (a ? -1 : 1) * c.transY, q.raiseEvent("slicingStart", {
    slicedState: a,
    dataIndex: "index" in
     n && n.index,
    data: f.getPlotData(l, a)
   }, g), b.animate({
    transform: a ? "t0,0" : r
   }, 200, "easeIn", function () {
    q.raiseEvent("slicingEnd", {
     slicedState: c.sliced,
     dataIndex: "index" in n && n.index,
     data: f.getPlotData(l, c.sliced)
    }, g)
   }), m && m.x && m.animate({
    x: m.x + (a ? 0 : s)
   }, 200, "easeIn"), p && (p[1] += s, p[2] += v, p[4] += s, p[6] += s, d.animate({
    path: p
   }, 200, "easeIn")), a = c.sliced = !a, b = {
    hcJSON: {
     series: []
    }
   }, b.hcJSON.series[0] = {
    data: r = []
   }, r[l] = {
    sliced: a
   }, k(g.jsVars._reflowData, b, !0), a
  },
  plotDragStart: function (a, b, c) {
   var d = this.data("plotItem"),
    f = d.chart,
    d = d.seriesData,
    g = f.options.series,
    k = -f.datasets[0].startAngle * Ta;
   d.isRotating = !1;
   if (g[0].enableRotation) {
    g = f.container;
    f = {
     left: 0,
     top: 0
    };
    if (g.getBoundingClientRect) g = g.getBoundingClientRect(), f.top = g.top + (E.pageYOffset || s.scrollTop || 0) - (s.clientTop || 0), f.left = g.left + (E.pageXOffset || s.scrollLeft || 0) - (s.clientLeft || 0);
    else
     for (; g;) f.left += g.offsetLeft || 0, f.top += g.offsetTop || 0, g !== s.body && g !== s.documentElement && (f.left -= g.scrollLeft || 0, f.top -= g.scrollTop || 0), g = g.offsetParent;
    d.chartPosition =
     f;
    a = m.call(c, a, b, d.pieCenter, d.chartPosition);
    d.dragStartAngle = a;
    d.startingAngleOnDragStart = k
   }
  },
  plotDragEnd: function (a) {
   var b = this.data("plotItem"),
    c = b.chart,
    d = b.seriesData,
    f = -c.datasets[0].startAngle * Ta,
    g = {
     hcJSON: {
      series: [{
       startAngle: f
      }]
     }
    };
   c.disposed || (k(c.logic.chartInstance.jsVars._reflowData, g, !0), c.rotate(d, c.options.series[0]));
   !d.isRotating && c.plotGraphicClick.call(b, a);
   d.isRotating && (setTimeout(function () {
    d.isRotating = !1
   }, 0), q.raiseEvent("RotationEnd", {
    startingAngle: z(f, !0),
    changeInAngle: f -
     d.startingAngleOnDragStart
   }, c.logic.chartInstance));
   !c.isHovered && c.onPlotHover(this, !1)
  },
  plotDragMove: function (a, b, c, d, f) {
   a = this.data("plotItem");
   var g = a.chart,
    k = a.seriesData,
    l = g.options.series;
   l[0].enableRotation && !k.singletonCase && (c = m.call(f, c, d, k.pieCenter, k.chartPosition), k.isRotating || (k.dragStartAngle !== c && (k.isRotating = !0), q.raiseEvent("RotationStart", {
     startingAngle: z(k.startingAngleOnDragStart, !0)
    }, g.logic.chartInstance)), l[0].startAngle += c - k.dragStartAngle, k.dragStartAngle = c, k.moveDuration =
    0, c = (new Date).getTime(), !k._lastTime || k._lastTime + k.timerThreshold < c) && (setTimeout(function () {
    g.rotate(k, l[0])
   }, 0), k._lastTime = c)
  },
  plotRollOver: function (a) {
   var b = this.plotItem || this.data("plotItem"),
    c = b.chart,
    d, f;
   b.seriesData.isRotating || (ta.call(this, c, a, "DataPlotRollOver"), c.onPlotHover(this, !0));
   c.isHovered = !0;
   (a = b.innerDiameter) && (d = b.centerLabelConfig) && (f = d.label) && c.drawDoughnutCenterLabel(f, b.center[0], b.center[1], a, a, d, !1)
  },
  plotRollOut: function (a) {
   var b = this.plotItem || this.data("plotItem"),
    c = b.chart,
    d = c.options.series[0],
    f, g;
   b.seriesData.isRotating || (ta.call(this, c, a, "DataPlotRollOut"), c.onPlotHover(this, !1));
   c.isHovered = !1;
   (a = b.innerDiameter) && (f = d.centerLabelConfig) && ((g = f.label) || !g) && c.drawDoughnutCenterLabel(g, b.center[0], b.center[1], a, a, f, !1)
  },
  onPlotHover: function (a, b) {
   var c = a.data("plotItem"),
    d = c.rolloverProperties,
    f = b ? d.color : c.color,
    g = b ? d.borderWidth : c.borderWidth,
    k = b ? d.borderColor : c.borderColor;
   d && c.graphic.attr({
    fill: ga(f),
    "stroke-width": g,
    stroke: k
   })
  },
  getEventArgs: function (a) {
   a =
    a || {};
   return {
    datasetName: a.label,
    datasetIndex: a.originalIndex,
    id: a.userID,
    visible: !0,
    label: a.label,
    value: a.value,
    percentValue: a.percentage,
    tooltext: a.toolText,
    link: a.link,
    sliced: a.sliced
   }
  },
  legendClick: function (a) {
   var b = a.chart;
   b.elements.plots[0].isRotating = !1;
   b.plotGraphicClick.call(a)
  },
  placeDataLabels: function () {
   var a = function (a, b) {
     return a.point.value - b.point.value
    },
    b = function (a, b) {
     return a.angle - b.angle
    },
    c = ["start", "start", "end", "end"],
    d = [-1, 1, 1, -1],
    f = [1, 1, -1, -1];
   return function (g, k, l, n) {
    var m =
     this.options.plotOptions,
     p = m.pie,
     r = this.canvasLeft + .5 * this.canvasWidth,
     q = this.canvasTop + .5 * this.canvasHeight,
     s = this.smartLabel,
     v = m.series.dataLabels,
     z = v.style,
     A = oa(ib(parseFloat(z.lineHeight)), 12),
     A = L(v.placeLabelsInside, 1 === k.length ? !0 : !1),
     m = v.skipOverlapLabels,
     B = v.manageLabelOverflow,
     C = v.connectorPadding,
     F = v.distance,
     E = n && n.metrics || [r, q, p.size, p.innerSize || 0],
     I = E[1],
     H = E[0];
    n = .5 * E[2];
    var K = [[], [], [], []],
     Q = this.canvasLeft,
     O = this.canvasTop,
     p = this.canvasWidth,
     F = l.labelsRadius || (l.labelsRadius = n + F),
     q = r = parseInt(z.fontSize, 10),
     P = q / 2,
     C = [C, C, -C, -C];
    l = l.labelsMaxInQuadrant || (l.labelsMaxInQuadrant = Ja(F / q));
    var v = v.isSmartLineSlanted,
     E = E[3] / 2,
     W, T, U, V, Y, Z, aa, $, t, w, J, M, e, da, R, S, ca, fa, ga, na;
    g || s.setStyle(z);
    if (1 == k.length && !E && A) V = k[0], (R = V.dataLabel) && R.show(), V.slicedTranslation = [Q, O], R && (R.attr({
     visibility: la,
     align: "middle",
     transform: ["t", H, I]
    }), R.x = H);
    else if (A) na = E + (n - E) / 2, Aa(k, function (a) {
     (R = a.dataLabel) && R.show();
     R && (e = a.angle, M = I + na * Ia(e), $ = H + na * ma(e), R.x = $, R._x = $, R.y = M, a.sliced && (ga = a.slicedTranslation,
      ca = ga[0] - Q, fa = ga[1] - O, $ += ca, M += fa), R.attr({
      visibility: la,
      align: "middle",
      transform: ["t", $, M]
     }))
    });
    else {
     Aa(k, function (a) {
      (R = a.dataLabel) && R.show();
      R && (e = a.angle % Wa, 0 > e && (e = Wa + e), S = 0 <= e && e < sb ? 1 : e < Na ? 2 : e < Ga ? 3 : 0, K[S].push({
       point: a,
       angle: e
      }))
     });
     for (k = g = 4; k--;) {
      if (m && (A = K[k].length - l, 0 < A))
       for (K[k].sort(a), z = K[k].splice(0, A), A = 0, U = z.length; A < U; A += 1) V = z[A].point, V.dataLabel.attr({
        visibility: "hidden"
       }), V.connector && V.connector.attr({
        visibility: "hidden"
       });
      K[k].sort(b)
     }
     A = La(K[0].length, K[1].length, K[2].length,
      K[3].length);
     da = La(qa(A, l) * q, F + q);
     K[1].reverse();
     for (K[3].reverse(); g--;) {
      E = K[g];
      U = E.length;
      m || (q = U > l ? da / U : r, P = q / 2);
      V = U * q;
      z = da;
      for (k = 0; k < U; k += 1, V -= q) A = Ya(da * Ia(E[k].angle)), z < A ? A = z : A < V && (A = V), z = (E[k].oriY = A) - q;
      W = c[g];
      U = da - (U - 1) * q;
      z = 0;
      for (k = E.length - 1; 0 <= k; --k, U += q)
       if (V = E[k].point, e = E[k].angle, Y = V.sliced, R = V.dataLabel, A = Ya(da * Ia(e)), A < z ? A = z : A > U && (A = U), z = A + q, w = (A + E[k].oriY) / 2, Z = H + f[g] * F * ma(ya.asin(w / da)), w *= d[g], w += I, J = I + n * Ia(e), aa = H + n * ma(e), (2 > g && Z < aa || 1 < g && Z > aa) && (Z = aa), $ = Z + C[g], M = w - P - 2, t = $ + C[g],
        R.x = t, R._x = t, B && (T = 1 < g ? t - this.canvasLeft : this.canvasLeft + p - t, s.setStyle(V.style), A = oa(ib(parseFloat(V.style.lineHeight)), 12) + 2 * ib(oa(parseFloat(V.style.border), 12), 12), A = s.getSmartText(V.labelText, T, A), R.attr({
         text: A.text,
         title: A.tooltext || ""
        })), R.y = M, Y && (ca = V.transX, fa = V.transY, $ += ca, Z += ca, aa += ca, J += fa, t += ca), R.attr({
         visibility: la,
         "text-anchor": W,
         vAlign: "middle",
         x: t,
         y: w
        }), A = V.connector) V.connectorPath = V = ["M", aa, J, "L", v ? Z : aa, w, $, w], A.attr({
        path: V,
        visibility: la
       })
     }
    }
   }
  }()
 }, I["renderer.root"])
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-interface", function () {
 var d = this,
  m = d.hcLib,
  z = d.renderer.getRenderer("javascript"),
  q = m.hasModule,
  E = m.loadModule,
  b = m.getMetaSentence,
  K = m.moduleCmdQueue,
  I = m.executeWaitingCommands,
  c = m.injectModuleDependency,
  s = m.moduleDependencies,
  a = m.getDependentModuleName,
  v, O;
 v = function (c) {
  var g, f, l, p = {},
   q;
  c = b(c);
  for (g in d.core.items) g = d.core.items[g], f = g.chartType(), l = g.options.chartTypeSourcePath + f, (f = g.jsVars) && f.waitingModule && g.__state.rendering &&
   m.needsModule(c.predicate, l) && (f.waitingModuleError = !0, f = a(l).concat(f.userModules), f.length && (f = f[f.length - 1], p[f] = m.moduleCmdQueue[f]));
  for (q in p) I(p[q]);
  d.raiseError(d.core, "11171116151", "run", "HC-interface~renderer.load", "Unable to load required modules and resources: " + c.key)
 };
 O = function (a, b, c) {
  var l = a.args,
   m = a.options;
  a._chartMessageImageStyle = {
   imageHAlign: l.typeNotSupportedMessageImageHAlign || m.baseChartMessageImageHAlign,
   imageVAlign: l.typeNotSupportedMessageImageVAlign || m.baseChartMessageImageVAlign,
   imageAlpha: l.typeNotSupportedMessageImageAlpha || m.baseChartMessageImageAlpha,
   imageScale: l.typeNotSupportedMessageImageScale || m.baseChartMessageImageScale
  };
  a._chartMessageStyle = {
   color: l.typeNotSupportedMessageColor || m.baseChartMessageColor,
   fontFamily: l.typeNotSupportedMessageFont || m.baseChartMessageFont,
   fontSize: l.typeNotSupportedMessageFontSize || m.baseChartMessageFontSize
  };
  d.hcLib.createChart(a, b, "stub", c, m.typeNotSupportedMessage)
 };
 m.eventList = d.extend(d.legacyEventList, {
  loaded: "FC_Loaded",
  dataloaded: "FC_DataLoaded",
  rendered: "FC_Rendered",
  drawcomplete: "FC_DrawComplete",
  dataxmlinvalid: "FC_DataXMLInvalid",
  nodatatodisplay: "FC_NoDataToDisplay",
  exported: "FC_Exported"
 });
 m.raiseEvent = d.raiseEventWithLegacy;
 s.charts = d.extend(s.charts || {}, {
  column2d: 0,
  column3d: 0,
  bar2d: 0,
  bar3d: 0,
  pie2d: 0,
  pie3d: 0,
  line: 0,
  area2d: 0,
  doughnut2d: 0,
  doughnut3d: 0,
  pareto2d: 0,
  pareto3d: 0,
  mscolumn2d: 0,
  mscolumn3d: 0,
  msline: 0,
  msarea: 0,
  msbar2d: 0,
  msbar3d: 0,
  stackedcolumn2d: 0,
  marimekko: 0,
  stackedcolumn3d: 0,
  stackedarea2d: 0,
  stackedcolumn2dline: 0,
  stackedcolumn3dline: 0,
  stackedbar2d: 0,
  stackedbar3d: 0,
  msstackedcolumn2d: 0,
  mscombi2d: 0,
  mscombi3d: 0,
  mscolumnline3d: 0,
  mscombidy2d: 0,
  mscolumn3dlinedy: 0,
  stackedcolumn3dlinedy: 0,
  msstackedcolumn2dlinedy: 0,
  scatter: 0,
  bubble: 0,
  ssgrid: 0,
  scrollcolumn2d: 0,
  scrollcolumn3d: 0,
  scrollline2d: 0,
  scrollarea2d: 0,
  scrollstackedcolumn2d: 0,
  scrollcombi2d: 0,
  scrollcombidy2d: 0,
  zoomline: 0
 });
 s.powercharts = d.extend(s.powercharts || {}, {
  spline: 0,
  splinearea: 0,
  msspline: 0,
  mssplinearea: 0,
  mssplinedy: 0,
  multiaxisline: 0,
  multilevelpie: 0,
  waterfall2d: 0,
  msstepline: 0,
  inversemsline: 0,
  inversemscolumn2d: 0,
  inversemsarea: 0,
  errorbar2d: 0,
  errorscatter: 0,
  errorline: 0,
  logmsline: 0,
  logmscolumn2d: 0,
  logstackedcolumn2d: 0,
  radar: 0,
  dragnode: 0,
  candlestick: 0,
  selectscatter: 0,
  dragcolumn2d: 0,
  dragline: 0,
  dragarea: 0,
  boxandwhisker2d: 0,
  kagi: 0,
  heatmap: 0
 });
 s.widgets = d.extend(s.widgets || {}, {
  angulargauge: 0,
  bulb: 0,
  cylinder: 0,
  drawingpad: 0,
  funnel: 0,
  hbullet: 0,
  hled: 0,
  hlineargauge: 0,
  vlineargauge: 0,
  pyramid: 0,
  realtimearea: 0,
  realtimecolumn: 0,
  realtimeline: 0,
  realtimelinedy: 0,
  realtimestackedarea: 0,
  realtimestackedcolumn: 0,
  sparkcolumn: 0,
  sparkline: 0,
  sparkwinloss: 0,
  thermometer: 0,
  vbullet: 0,
  gantt: 0,
  vled: 0
 });
 s.maps = d.extend(s.maps || {}, {});
 d.extend(z, {
  render: function (b, g) {
   var f = this.chartType(),
    l = this.options.chartTypeSourcePath + f,
    p = this.jsVars,
    s = this.__state,
    v = m.chartAPI,
    k = this.options,
    B = this.args,
    A = this.options.showChartLoadingMessage,
    E, r;
   E = a(l).concat(p.userModules);
   p.isResizing && (p.isResizing = clearTimeout(p.isResizing));
   p.hcObj && p.hcObj.destroy && p.hcObj.destroy();
   if (v[f]) {
    if (v[s.lastRenderedType] && s.lastRenderedType !==
     f)
     for (r in d.raiseEvent("chartTypeChanged", {
       previousType: s.lastRenderedType,
       newType: f
      }, this), v[s.lastRenderedType].eiMethods) delete this[r];
    s.lastRenderedType = f;
    s.lastRenderedSrc = this.src;
    !p.waitingModuleError && m.raiseEvent("internal.loaded", {
     type: f,
     triggeredModuleLoad: p.drLoadAttempted || p.waitingModule
    }, this, [this.id]);
    delete p.waitingModule;
    delete p.waitingModuleError;
    delete p.drLoadAttempted;
    d.hcLib.createChart(this, b, f, g)
   }
   else {
    if (f && q(E)) {
     if (p.drLoadAttempted) {
      d.raiseError(this, 11112822001, "run",
       "HC-interface~renderer.render", "Chart runtimes not loaded even when resource is present");
      O(this, b, g);
      return
     }
     c(l) && (E = a(l).concat(p.userModules));
     p.drLoadAttempted = !0
    }
    else {
     if (!E.length) {
      O(this, b, g);
      return
     }
     if (p.waitingModuleError) {
      O(this, b, g);
      delete p.waitingModule;
      delete p.waitingModuleError;
      return
     }
    }(f = K[E[E.length - 1]]) ? (f.push({
     cmd: "render",
     obj: this,
     args: arguments
    }), p.waitingModule || (p = A ? k.PBarLoadingText || k.loadMessage : "", this._chartMessageImageStyle = {
     imageHAlign: B.loadMessageImageHAlign || k.baseChartMessageImageHAlign,
     imageVAlign: B.loadMessageImageVAlign || k.baseChartMessageImageVAlign,
     imageAlpha: B.loadMessageImageAlpha || k.baseChartMessageImageAlpha,
     imageScale: B.loadMessageImageScale || k.baseChartMessageImageScale
    }, this._chartMessageStyle = {
     color: B.loadMessageColor || k.baseChartMessageColor,
     fontFamily: B.loadMessageFont || k.baseChartMessageFont,
     fontSize: B.loadMessageFontSize || k.baseChartMessageFontSize
    }, d.hcLib.createChart(this, b, "stub", void 0, p), z.load.call(this, b, g))) : (d.raiseError(this, 12080515551, "run", "HC-interface~renderer.render",
     "Unregistered module in dependentModule definition."), this._chartMessageImageStyle = {
     imageHAlign: B.renderErrorMessageImageHAlign || k.baseChartMessageImageHAlign,
     imageVAlign: B.renderErrorMessageImageVAlign || k.baseChartMessageImageVAlign,
     imageAlpha: B.renderErrorMessageImageAlpha || k.baseChartMessageImageAlpha,
     imageScale: B.renderErrorMessageImageScale || k.baseChartMessageImageScale
    }, this._chartMessageStyle = {
     color: B.renderErrorMessageColor || k.baseChartMessageColor,
     fontFamily: B.renderErrorMessageFont || k.baseChartMessageFont,
     fontSize: B.renderErrorMessageFontSize || k.baseChartMessageFontSize
    }, d.hcLib.createChart(this, b, "stub", void 0, k.renderErrorMessage))
   }
  },
  update: function (a) {
   var b = this.ref,
    c = this.jsVars,
    l = c && c.fcObj,
    l = c.container || l && l.options && l.options.containerElement && l.options.containerElement.childNodes[0];
   c.hcObj && c.hcObj.destroy && c.hcObj.destroy();
   c.isResizing && (c.isResizing = clearTimeout(c.isResizing));
   void 0 === a.error ? (delete c.stallLoad, delete c.loadError, this.isActive() ? this.src !== this.__state.lastRenderedSrc ?
    this.render() : d.hcLib.createChart(this, l) : this.__state.rendering && !c.waitingModule && d.hcLib.createChart(this, l)) : (this.isActive() && "function" === typeof b.showChartMessage && b.showChartMessage("InvalidXMLText"), delete c.loadError)
  },
  resize: function (a) {
   var b = this.ref,
    c, l = this.jsVars;
   b && b.resize && (l.isResizing && (l.isResizing = clearTimeout(l.isResizing)), l.isResizing = setTimeout(function () {
    c = d.normalizeCSSDimension(a.width, a.height, b);
    void 0 !== a.width && (b.style.width = c.width);
    void 0 !== a.height && (b.style.height =
     c.height);
    b.resize();
    delete l.isResizing
   }, 0))
  },
  dispose: function () {
   var a, b = this.jsVars;
   b.isResizing && (b.isResizing = clearTimeout(b.isResizing));
   b.instanceAPI && b.instanceAPI.dispose && (b.instanceAPI.dispose(), delete b.instanceAPI);
   if (a = this.ref) d.purgeDOM(a), a.parentNode && a.parentNode.removeChild(a);
   b.container = null;
   m.cleanupWaitingCommands(this)
  },
  load: function (b, c) {
   var f = this.jsVars,
    l = this.chartType(),
    p = d.hcLib.chartAPI[l],
    l = a(l).concat(f.userModules),
    q = l[l.length - 1];
   p || !l || l && 0 === l.length ? (delete f.waitingModule,
    b && O(this, b || this.ref, c)) : f.waitingModule || (f.waitingModule = !0, delete f.waitingModuleError, E(l, function () {
    delete f.waitingModule;
    I(m.moduleCmdQueue[q])
   }, v, this))
  }
 })
}]);
FusionCharts.register("module", ["private", "modules.api.dynamicchartattributes", function () {
 var d = this;
 d.extend(d.core, {
  setChartAttribute: function (m, z) {
   var q, E, b, K;
   if ("string" === typeof m) q = m, m = {}, m[q] = z;
   else if (null === m || "object" !== typeof m) return;
   K = 0;
   if (b = (q = this.getChartData(d.dataFormats.JSON)) && (q.chart || q.graph || q.map)) {
    for (E in m) K += 1, null === m[E] ? delete b[E.toLowerCase()] : b[E.toLowerCase()] = m[E];
    0 < K && ("undefined" === typeof b.animation && (b.animation = "0"), this.setChartData(q, d.dataFormats.JSON))
   }
   else d.raiseError(this,
    "2105141421", "run", "#setChartAttribute()", "Could not retrieve attribute list. Is data ready?")
  },
  getChartAttribute: function (m) {
   var z = this.getChartData(d.dataFormats.JSON),
    z = z && (z.chart || z.graph || z.map),
    q, E;
   if (0 === arguments.length || void 0 === m || void 0 === z) return z;
   if ("string" === typeof m) q = z[m.toString().toLowerCase()];
   else if (m instanceof Array)
    for (q = {}, E = 0; E < m.length; E += 1) q[m[E]] = z[m[E].toString().toLowerCase()];
   else d.raiseError(this, "25081429", "param", "~getChartAttribute()", 'Unexpected value of "attribute"');
   return q
  }
 }, !0)
}]);
FusionCharts.register("module", ["private", "api.linkmanager", function () {
 var d = this,
  m = d.FusionChartsDOMInsertModes,
  z = {},
  q = function (b, m) {
   this.items = {};
   this.root = b;
   this.parent = m;
   m instanceof d.core ? this.level = this.parent.link.level + 1 : (z[b.id] = [{}], this.level = 0)
  },
  E = function (b, d) {
   return (b.options.containerElement === d.options.containerElement || b.options.containerElementId === d.options.containerElementId) && b.options.insertMode === m.REPLACE
  };
 d.policies.link = ["link", void 0];
 q.prototype.configuration = function () {
  return z[this.root.id][this.level] ||
   (z[this.root.id][this.level] = {})
 };
 d.extend(d.core, {
  configureLink: function (b, m) {
   var q;
   if (b instanceof Array) {
    for (q = 0; q < b.length; q += 1) "object" !== typeof z[this.link.root.id][q] && (z[this.link.root.id][q] = {}), d.extend(z[this.link.root.id][q], b[q]);
    z[this.link.root.id].splice(b.length)
   }
   else "object" === typeof b ? ("number" !== typeof m && (m = this.link.level), void 0 === z[this.link.root.id][m] && (z[this.link.root.id][m] = {}), d.extend(z[this.link.root.id][m], b)) : d.raiseError(this, "25081731", "param", "~configureLink()",
    "Unable to update link configuration from set parameters")
  }
 }, !0);
 d.addEventListener("beforeInitialize", function (b) {
  b.sender.link instanceof q ? b.sender.link.parent instanceof d.core && (b.sender.link.parent.link.items[b.sender.id] = b.sender) : b.sender.link = new q(b.sender)
 });
 d.addEventListener("linkedChartInvoked", function (b, m) {
  var z = b.sender,
   c = z.clone({
    dataSource: m.data,
    dataFormat: m.linkType,
    link: new q(z.link.root, z)
   }, !0),
   s = m.alias,
   a;
  s && (!c.typeSource && c.swfUrl && (c.typeSource = c.swfUrl.replace(/(.*?)?[^\/]*\.swf.*?/ig,
   "$1")), c.type = s);
  z.args && 0 !== parseInt(z.args.animate, 10) && delete c.animate;
  d.extend(c, z.link.configuration());
  d.raiseEvent("beforeLinkedItemOpen", {
   level: z.link.level
  }, z.link.root, void 0, function () {
   d.core.items[c.id] instanceof d.core && d.core.items[c.id].dispose();
   a = new d.core(c);
   E(a, z) || z.options.overlayButton && z.options.overlayButton.message || ("object" !== typeof z.options.overlayButton && (z.options.overlayButton = {}), z.options.overlayButton.message = "Close");
   a.render();
   d.raiseEvent("linkedItemOpened", {
    level: z.link.level,
    item: a
   }, z.link.root)
  })
 });
 d.addEventListener("overlayButtonClick", function (b, m) {
  if ("LinkManager" === m.id) {
   var q = b.sender,
    c = q.link.level - 1,
    s = q.link.parent,
    a = q.link.root;
   d.raiseEvent("beforeLinkedItemClose", {
    level: c,
    item: q
   }, a, q, function () {
    setTimeout(function () {
     d.core.items[q.id] && q.dispose();
     d.raiseEvent("linkedItemClosed", {
      level: c
     }, a)
    }, 0);
    s.disposed || s.isActive() || !E(q, s) || s.render()
   })
  }
 });
 d.addEventListener("Loaded", function (b) {
  b = b.sender;
  var m;
  b && void 0 !== b.link && b.link.root !== b &&
   b.link.parent instanceof d.core && (b.ref && "function" === typeof b.ref.drawOverlayButton ? (m = d.extend({
    show: !0,
    id: "LinkManager"
   }, b.link.parent.options.overlayButton), d.extend(m, b.link.parent.link.configuration().overlayButton || {}), b.ref.drawOverlayButton(m)) : d.raiseWarning(b, "04091602", "run", "::LinkManager^Loaded", "Unable to draw overlay button on object. -" + b.id))
 });
 d.addEventListener("beforeDispose", function (b) {
  var m = b.sender;
  m && m.link instanceof q && (m && m.link && m.link.parent instanceof d.core && m.link.parent.link &&
   m.link.parent.link.items && delete m.link.parent.link.items[b.sender.id], delete z[m.id])
 })
}]);
FusionCharts.register("module", ["private", "modules.renderer.js-thememanager", function () {
 var d = this,
  m, z, q, E = /\s+!important$/,
  b = /\\!important$/,
  K = function (a, b) {
   for (var c = b.length, d = -1; c--;)
    if (a === b[c]) {
     d = c;
     break
    }
   return d
  },
  I = function (a, b, c, d, m) {
   var q, k, s, v;
   m ? (d.push(a), m.push(b)) : (d = [a], m = [b]);
   if (b instanceof Array)
    for (q = 0; q < b.length; q += 1) {
     try {
      k = a[q], s = b[q]
     }
     catch (z) {
      continue
     }
     if ("object" !== typeof s) c && void 0 === s || (a[q] = s);
     else {
      if (null === k || "object" !== typeof k) k = a[q] = s instanceof Array ? [] : {};
      v = K(s, m); -
      1 !== v ? k = a[q] = d[v] : I(k, s, c, d, m)
     }
    }
   else
    for (q in b) {
     try {
      k = a[q], s = b[q]
     }
     catch (r) {
      continue
     }
     if (null !== s && "object" === typeof s)
      if (v = Object.prototype.toString.call(s), "[object Object]" === v) {
       if (null === k || "object" !== typeof k) k = a[q] = {};
       v = K(s, m); - 1 !== v ? k = a[q] = d[v] : I(k, s, c, d, m)
      }
      else "[object Array]" === v ? (null !== k && k instanceof Array || (k = a[q] = []), v = K(s, m), -1 !== v ? k = a[q] = d[v] : I(k, s, c, d, m)) : a[q] = s;
     else a[q] = s
    }
   return a
  },
  c = function (a, b, c) {
   if ("object" !== typeof a && "object" !== typeof b) return null;
   if ("object" !== typeof b ||
    null === b) return a;
   "object" !== typeof a && (a = b instanceof Array ? [] : {});
   I(a, b, c);
   return a
  },
  s = function (a) {
   var c = {
    important: !1,
    str: ""
   };
   if (!a) return c;
   a = a.toString();
   E.test(a) ? (a = a.replace(E, ""), c.important = !0) : (a = a.replace(b, "!imporant"), c.important = !1);
   c.str = a;
   return c
  },
  a = function (b, c) {
   var d, m, q, s, k, z, A = 0,
    C = 0;
   for (d in b)
    if (m = b[d], m instanceof Array)
     for (z = m.length, k = 0; k < z; k += 1) {
      if (s = m[k], "object" === typeof s)
       if ("category" === d)
        if ("true" === s.vline) {
         if (q = c.component("vline", A, s)) v(s, q), A += 1
        }
        else {
         if (q = c.component("category",
           C, s, z)) v(s, q), C += 1
        }
      else if (q = c.component(d, k, s, z)) v(s, q), a(s, q)
     }
    else "object" === typeof m && (q = c.component(d, null, m)) && (v(m, q), a(m, q))
  },
  v = function (a, b) {
   var c = b.getAll(),
    d, m;
   for (d in c) m = c[d].toString(), m = s(m), m.important ? a[d.toLowerCase()] = m.str : void 0 === a[d.toLowerCase()] && (a[d.toLowerCase()] = m.str)
  },
  O = function (a, b) {
   "geo" === b.defaultSeriesType && C.call(this, a, b)
  },
  C = function (a, b) {
   var c = a.sender,
    m = c.getChartData(d.dataFormats.JSON, !0),
    s;
   m.error || ((s = m.data.chart.theme) ? q.themify(s, c, c.chartType(), m.data,
    "geo" === b.defaultSeriesType && "geo") : c.jsVars.themeObject && c.jsVars.themeObject.dispose())
  };
 m = function () {
  this.themeStore = {}
 };
 m.prototype = {
  constructor: m,
  add: function (a) {
   for (var b = 0, c = a.length, d; b < c; b += 1)(d = a[b].name) && (this.themeStore[d] = a[b])
  },
  themify: function (a, b, c, m, q) {
   var s = b.jsVars,
    k = a.split(","),
    v = [],
    A = k.length,
    E, r;
   if (A) {
    for (r = 0; r < A; r += 1) {
     E = this.themeStore;
     var I;
     I = k[r];
     I = I.replace(/^\s\s*/, "");
     for (var K = /\s/, $ = I.length; K.test(I.charAt(--$)););
     I = I.slice(0, $ + 1);
     (E = E[I]) && v.push(this.evaluateThemeJSON(E.theme,
      b, c, q))
    }
    v.length ? (s.themeObject = new z(v, b, !1, m), this.applyTheme(b), b.addEventListener("chartTypeChanged", C), b.addEventListener("internal.drawstart", O)) : d.raiseWarning(b, "14051100501", "run", "api.themes~themify()", 'The theme "' + a + '" requested has not been registered.')
   }
  },
  evaluateThemeJSON: function (a, b, d, m) {
   var q = {},
    s = b.jsVars,
    k = function (a) {
     var b, d;
     for (b in a) d = a[b], q[b] = d instanceof Array ? c(q[b] || [], d) : "object" === typeof d ? c(q[b] || {}, d) : d
    };
   d = d || b.chartType();
   s.themeObject && a !== s.themeObject && (s.themeObject.dispose(),
    delete s.themeObject);
   k(a.base);
   m && a[m] && k(a[m]);
   d && a[d] && k(a[d]);
   return q
  },
  applyTheme: function (b) {
   b = b.jsVars.themeObject;
   var c = b.getThemedJSONData().data;
   c && a(c, b)
  }
 };
 z = function (a, b, d, m) {
  this.themeArray = a;
  this.themeComponents = {};
  this.base = {};
  this.chartInstance = b;
  this.isChildInstance = Boolean(d);
  this.themedData = d ? null : c({}, m);
  this.length = a.length;
  b = 0;
  for (d = a.length; b < d; b += 1) this.parse(a[b])
 };
 z.prototype = {
  constructor: z,
  pushTheme: function (a) {
   a && (this.themeArray.push(a), this.parse(a), this.length += 1)
  },
  popTheme: function () {},
  parse: function (a) {
   var b = this.themeComponents,
    d = this.chartInstance,
    m = this.base,
    q, v, k;
   for (v in a)
    if ("string" === typeof a[v] || "number" === typeof a[v])
     if (m[v]) {
      if (q = s(a[v]), k = s(m[v]), q.important || !k.important) m[v] = a[v]
     }
     else m[v] = a[v];
   else b[v] || (b[v] = []), q = b[v], a[v] instanceof Array ? q.push(c([], a[v])) : "object" === typeof a[v] ? q.push(new z([a[v]], d, !0)) : "function" === typeof a[v] && q.push(a[v])
  },
  merge: function (a) {
   var b = this.base,
    c = a.base,
    d = this.themeComponents,
    m = a.themeComponents,
    q, k, v;
   for (v in c)
    if (q =
     s(b[v]), k = s(c[v]), !q.important || k.important) b[v] = c[v];
   for (v in m) d[v] = d[v] ? d[v].concat(m[v]) : [].concat(m[v]);
   this.length += a.length
  },
  get: function (a) {
   return this.base[a]
  },
  getAll: function () {
   return c({}, this.base)
  },
  component: function (a, b, c, d) {
   var m = this.themeComponents,
    q = this.chartInstance,
    k = new z([], q, !0),
    s, v, C;
   v = m[a];
   if (!v) return null;
   a = 0;
   for (m = v.length; a < m; a += 1) C = v[a], "function" === typeof C ? (b = b || 0, k.pushTheme(C.call(q, b, c, d))) : C instanceof Array ? (b = b || 0, s = C.length, b %= s, s = C[b], s instanceof z ? k.merge(s) :
    "function" === typeof s ? k.pushTheme(s.call(q, b, c, d)) : k.pushTheme(s)) : C instanceof z ? k.merge(C) : k.pushTheme(C);
   return k
  },
  getThemedJSONData: function () {
   return {
    data: this.themedData
   }
  },
  dispose: function () {
   var a = this.themeComponents,
    b = this.chartInstance,
    c, d;
   for (c in a)
    if (d = a[c].length) {
     for (; d--;) a[c][d].dispose && a[c][d].dispose();
     delete a[c]
    }
   this.isChildInstance || (b.removeEventListener("chartTypeChanged", C), b.removeEventListener("internal.drawstart", O));
   this.dataWithoutTheme = this.isChildInstance = this.themeArray =
    this.base = this.chartInstance = this.themeComponents = null
  }
 };
 q = new m;
 d.registrars.theme = d.registerTheme = function (a) {
  a && ("[object Array]" !== Object.prototype.toString.call(a) && (a = [a]), q.add(a))
 };
 d.addEventListener("beforeDataUpdate", function (a, b) {
  var c = a.sender,
   m = d.core.transcodeData(b.data, b.format, d.dataFormats.JSON),
   s = m.chart && m.chart.theme;
  s ? q.themify(s, c, c.args.type, m) : c.jsVars.themeObject && (c.jsVars.themeObject.dispose(), delete c.jsVars.themeObject)
 })
}]);
FusionCharts.register("theme", {
 name: "default",
 theme: {
  base: {
   chart: {
    labelDisplay: "stagger !important",
    caption: "Theme Caption \\!important",
    canvasBgColor: "#56EF22",
    borderThickness: "5 !important",
    borderColor: "#E60539",
    baseFontColor: "#781129"
   },
   categories: [{
    fontColor: "#0F4F40",
    fontSize: 15,
    category: function (d) {
     return {
      showLabel: d % 2 ? 0 : 1
     }
    },
    vline: {
     color: "#000000",
     thickness: 2
    }
   }],
   dataset: [{
    color: "#8C3146",
    data: function (d, m) {
     8 == d && (m.value = "");
     return {
      color: 32E3 > Number(m.value) ? "#8C3146" : "#FF0000",
      alpha: "100"
     }
    }
   }],
   trendlines: [{
    line: function (d) {
     return d ? {
      color: "#ff0000",
      thickness: 3
     } : {
      color: "#ffff00",
      thickness: 3
     }
    }
   }]
  },
  pie2d: {
   chart: {
    bgColor: "#FF0000"
   }
  },
  msline: {
   chart: {
    canvasBgColor: "#ff0000"
   }
  },
  geo: {
   chart: {
    canvasBgColor: "#0000ff"
   }
  },
  world: {
   chart: {
    canvasBgColor: "#00ff00"
   }
  }
 }
});
