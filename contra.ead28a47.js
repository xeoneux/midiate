// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({14:[function(require,module,exports) {
module.exports = {
  "contra":
    "data:audio/mid;base64,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AEJAYEIAAEJAYEIAAEZAYEYAAEJAYEIAAElAgRBJAABIQIEQSAAARkBgRgAAQkBgQgAAQkBgQgAARkBgRgAAQkBgQgAASECBEEgAAElAgRBJAABKQGBKAAA9QDA9AAA9QGA9AAA8QIFAPAAwRkBgRgAARkBgRgAASECBQEgAADpAMDoAADpAYDoAADxAgUA8ADBJQGBJAABJQGBJAABLQIFASwAAPUAwPQAAPUBgPQAAPECBQDwAME1AYE0AAE1AYE0AAE5AgUBOAAA6QDA6AAA6QGA6AAA8QIFAPAAwUkAwUgAAUkBgUgAwUkAwUgAAUkBgUgAwQUBgQQAAQUBgQQAAREBgRAAAQUBgQQAASECBEEgAAEZAgRBGAABEQGBEAABBQGBBAABBQGBBAABEQGBEAABBQGBBAABIQIEQSAAARkCBEEYAAERAYEQAAEFAYEEAAEFAYEEAAERAYEQAAEFAYEEAAEhAgRBIAABGQIEQRgAAREBgRAAAQUBgQQAAQUBgQQAAREBgRAAAQUBgQQAARkCBEEYAAEhAgRBIAABJQGBJAABCQGBCAABCQGBCAABGQGBGAABCQGBCAABJQIEQSQAASECBEEgAAEZAYEYAAEJAYEIAAEJAYEIAAEZAYEYAAEJAYEIAAElAgRBJAABIQIEQSAAARkBgRgAAQkBgQgAAQkBgQgAARkBgRgAAQkBgQgAASUCBEEkAAEhAgRBIAABGQGBGAABCQGBCAABCQGBCAABGQGBGAABCQGBCAABIQIEQSAAASUCBEEkAAEpAYEoAAERAgUBEAABBOIFAQQAARTiBQEUAAEE4gUBBAABEOIFARAAAQTiBQEEAAEU4gUBFAABBOIFAQQAARDiBQEQAAEE4gUBBAABFOIFARQAAQTiBQEEAAEQ4gUBEAABBOIFAQQAARTiBQEUAAEE4gUBBAABEOGBEAABEOGBEAABBOGBBAABBOGBBAABFOGBFAABFOGBFAABBOGBBAABBOGBBAABEOGBEAABEOGBEAABBOGBBAABBOGBBAABFOGBFAABFOGBFAABBOGBBAABBOGBBAABEOGBEAABEOGBEAABBOGBBAABBOGBBAABFOGBFAABFOGBFAABBOGBBAABBOGBBAABEOGBEAABEOGBEAABBOGBBAABBOGBBAABFOGBFAABFOGBFAABBOGBBAABBOGBBAAD/LwBNVHJrAAAElQDDHRiTQThgQQAAQThgQQAARDhgRAAAQThgQQAASDiBEEgAAEY4gRBGAABEOGBEAABBOGBBAABBOGBBAABEOGBEAABBOGBBAABIOIEQSAAARjiBEEYAAEQ4YEQAAEE4YEEAAEE4YEEAAEQ4YEQAAEE4YEEAAEg4gRBIAABGOIEQRgAARDhgRAAAQThgQQAAQThgQQAARDhgRAAAQThgQQAARjiBEEYAAEg4gRBIAABJOGBJAABCOGBCAABCOGBCAABGOGBGAABCOGBCAABJOIEQSQAASDiBEEgAAEY4YEYAAEI4YEIAAEI4YEIAAEY4YEYAAEI4YEIAAEk4gRBJAABIOIEQSAAARjhgRgAAQjhgQgAAQjhgQgAARjhgRgAAQjhgQgAASTiBEEkAAEg4gRBIAABGOGBGAABCOGBCAABCOGBCAABGOGBGAABCOGBCAABIOIEQSAAASTiBEEkAAEo4YEoAAD04MD0AAD04YD0AADw4gUA8ADBGOGBGAABGOGBGAABIOIFASAAAOjgwOgAAOjhgOgAAPDiBQDwAMEk4YEkAAEk4YEkAAEs4gUBLAAA9ODA9AAA9OGA9AAA8OIFAPAAwTThgTQAATThgTQAATjiBQE4AADo4MDoAADo4YDoAADw4gUA8ADBSODBSAABSOGBSADBSODBSAABSOGBSADBBOGBBAABBOGBBAABEOGBEAABBOGBBAABIOIEQSAAARjiBEEYAAEQ4YEQAAEE4YEEAAEE4YEEAAEQ4YEQAAEE4YEEAAEg4gRBIAABGOIEQRgAARDhgRAAAQThgQQAAQThgQQAARDhgRAAAQThgQQAASDiBEEgAAEY4gRBGAABEOGBEAABBOGBBAABBOGBBAABEOGBEAABBOGBBAABGOIEQRgAASDiBEEgAAEk4YEkAAEI4YEIAAEI4YEIAAEY4YEYAAEI4YEIAAEk4gRBJAABIOIEQSAAARjhgRgAAQjhgQgAAQjhgQgAARjhgRgAAQjhgQgAASTiBEEkAAEg4gRBIAABGOGBGAABCOGBCAABCOGBCAABGOGBGAABCOGBCAABJOIEQSQAASDiBEEgAAEY4YEYAAEI4YEIAAEI4YEIAAEY4YEYAAEI4YEIAAEg4gRBIAABJOIEQSQAASjhgSgAARDiBQEQAAEEogUBBAABFKIFARQAAQSiBQEEAAEQogUBEAABBKIFAQQAARSiBQEUAAEEogUBBAABEKIFARAAAQSiBQEEAAEUogUBFAABBKIFAQQAARCiBQEQAAEEogUBBAABFKIFARQAAQSiBQEEAAEQoYEQAAEQoYEQAAEEoYEEAAEEoYEEAAEUoYEUAAEUoYEUAAEEoYEEAAEEoYEEAAEQoYEQAAEQoYEQAAEEoYEEAAEEoYEEAAEUoYEUAAEUoYEUAAEEoYEEAAEEoYEEAAEQoYEQAAEQoYEQAAEEoYEEAAEEoYEEAAEUoYEUAAEUoYEUAAEEoYEEAAEEoYEEAAEQoYEQAAEQoYEQAAEEoYEEAAEEoYEEAAEUoYEUAAEUoYEUAAEEoYEEAAEEoSEEAAP8vAE1UcmsAAAGhAMQeAJQuQJgALgAAMECYADAAADZAMDYAADZAYDYAADVAgUA1ADAzQGAzAAAzQGAzAAA1QIFANQAAM0AwMwAAM0BgMwAANUCBQDUAMDZAYDYAADZAYDYAADhAgUA4AAA2QDA2AAA2QGA2AAA1QIFANQAwOkBgOgAAOkBgOgAAPECBQDwAADNAMDMAADNAYDMAADVAgUA1ADAzQDAzAAAzQGAzADA1QDA1AAA1QGA1ADAuQJgALgAAMECYADAAADFAgUAxAAA6QIFAOgAAMjiBQDIAADo4gUA6AAAxOIFAMQAAOjiBQDoAADI4gUAyAAA6OIFAOgAAMTiBQDEAADo4gUA6AAAyOIFAMgAAOjiBQDoAADE4gUAxAAA6OIFAOgAAMjiBQDIAADo4gUA6AAAxOIFAMQAAOjiBQDoAADI4gUAyAAA6OIFAOgAAMTiBQDEAADo4gUA6AAAyOIFAMgAAOjiBQDoAADE4gUAxAAA6OIFAOgAAMjiBQDIAADo4gUA6AAAxOIFAMQAAOjiBQDoAADI4gUAyAAA6OIFAOgAA/y8ATVRyawAABckAmSxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxASCwAACxAGCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxASCwAACxAGCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxASCwAACxAGCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAMCwAACxAMCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAYCwAACxAMCwAACxAMCwAACxAYCwAACxAMCwAACxAMCwAACxAYCwAAP8vAA=="
}
;
},{}],71:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61984' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[71,14])
//# sourceMappingURL=/contra.ead28a47.map