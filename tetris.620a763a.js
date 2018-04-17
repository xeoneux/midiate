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
})({15:[function(require,module,exports) {
module.exports = {
  "tetris":
    "data:audio/mid;base64,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"
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
},{}]},{},[71,15])
//# sourceMappingURL=/tetris.620a763a.map