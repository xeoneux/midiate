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
})({13:[function(require,module,exports) {
module.exports = {
  "zelda":
    "data:audio/mid;base64,TVRoZAAAAAYAAQAOAYBNVHJrAAAAGgD/WAQEAmAIAP9/AwAAQQD/UQMGL50A/y8ATVRyawAABHAA/wMGTWVsb2R5ALAAAADARwCwWwAA/1kC/gAAkEY+hgCARj6CAJBGPlSARj4skEY+VIBGPiyQRj5UgEY+LJBGPlSARj4skEY+fIBGPoEEkEQ+VIBEPiyQRj6EAIBGPoEAkEY+VIBGPiyQRj5UgEY+LJBGPlSARj4skEY+VIBGPiyQRj58gEY+gQSQRD5UgEQ+LJBGPoQ8gEY+RJBGPlSARj4skEY+VIBGPiyQRj5UgEY+LJBGPlSARj4skEY+gQCARj5AkEE+QIBBPiCQQT5AgEE+IJBBPoEAgEE+QJBBPkCAQT4gkEE+QIBBPiCQQT6BAIBBPkCQQT5AgEE+IJBBPkCAQT4gkEE+gQCAQT5AkEE+gQCAQT5AkEY+ggCARj6BAJBBPoQ8gEE+ZJBGPlyARj4EkEY+XIBGPgSQSD5cgEg+BJBKPlyASj4EkEs+XIBLPgSQTT6FfIBNPoFEkE0+gQCATT5AkE0+fIBNPgSQTj58gE4+BJBQPnyAUD4EkFI+hnyAUj4EkFI+fIBSPgSQUj58gFI+BJBSPnyAUj4EkFA+fIBQPgSQTj58gE4+BJBQPnyAUD6BBJBOPnyATj4EkE0+hXyATT4EkE0+gnyATT4EkEs+gTyASz4EkEs+XIBLPgSQTT5cgE0+BJBOPoV8gE4+BJBNPoE8gE0+BJBLPoE8gEs+BJBJPoE8gEk+BJBJPlyAST4EkEs+XIBLPgSQTT6FfIBNPgSQSz6BPIBLPgSQST6BPIBJPgSQSD6BPIBIPgSQSD5cgEg+BJBKPlyASj4EkEw+hXyATD4EkE8+gnyATz4EkE0+gQCATT5AkEE+QIBBPiCQQT5AgEE+IJBBPoEAgEE+QJBBPkCAQT4gkEE+QIBBPiCQQT6BAIBBPkCQQT5AgEE+IJBBPkCAQT4gkEE+gQCAQT5AkEE+gQCAQT5AkEY+ggCARj6BAJBBPoQ8gEE+ZJBGPlyARj4EkEY+XIBGPgSQSD5cgEg+BJBKPlyASj4EkEs+XIBLPgSQTT6FfIBNPoFEkE0+gQCATT5AkE0+fIBNPgSQTj58gE4+BJBQPnyAUD4EkFI+iHyAUj4EkFU+gnyAVT4EkFQ+gUCAVD6BQJBRPoUAgFE+gQCQTT6CfIBNPgSQTj6GQIBOPoJAkFI+gnyAUj4EkFE+gUCAUT6BQJBNPoUAgE0+gQCQTT6CfIBNPgSQTj6FfIBOPoMEkFI+gnyAUj4EkFE+gTyAUT6BRJBNPoV8gE0+BJBKPoJ8gEo+BJBLPoV8gEs+gwSQTj6CfIBOPgSQTT6BPIBNPoFEkEk+hXyAST4EkEY+gnyARj4EkEg+gTyASD4EkEg+XIBIPgSQSj5cgEo+BJBMPoV8gEw+BJBPPoJ8gE8+BJBNPoEAgE0+QJBBPkCAQT4gkEE+QIBBPiCQQT6BAIBBPkCQQT5AgEE+IJBBPkCAQT4gkEE+gQCAQT5AkEE+QIBBPiCQQT5AgEE+IJBBPoEAgEE+QJBBPoEAgEE+AP8vAE1UcmsAAAW8AP8DB0hhcm1vbnkAsQAAAMFHALEKPwCxWwAA/1kC/gAAkT47hgCBPjuCAJE+O1SBPjsskT47VIE+OyyRPjtUgT47LJE+O1SBPjsskTw7fIE8O4EEkTw7VIE8OyyRPDuEAIE8O4IAkTw7VIE8OyyRPDtUgTw7LJE8O1SBPDsskT07fIE9O4EEkT07VIE9OyyRPTuEPIE9O0SRPTtUgT07LJE9O1SBPTsskT07VIE9OyyRPTtUgT07LJE9O4E8gT07BJE5O0CBOTsgkTk7QIE5OyCROTuBAIE5O0CROTtAgTk7IJE5O0CBOTsgkTk7gQCBOTtAkTk7QIE5OyCROTtAgTk7IJE5O4EAgTk7QJE5O4EAgTk7QJE+O4IAgT47gQCRPjt8gT47BJE+O3yBPjsEkTw7fIE8OwSRPjuBPIE+O2SRPjtcgT47BJE+O1yBPjsEkT87XIE/OwSRQTtcgUE7BJFDO1yBQzsEkUQ7ghyBRDsEkUY7XIFGOwSRRjtcgUY7BJFIO1yBSDsEkUo7XIFKOwSRSztcgUs7BJFNO4E8gU07BJFNO4E8gU07BJFEO3yBRDsEkUY7fIFGOwSRSDt8gUg7BJFJO4IcgUk7BJFCO1yBQjsEkUI7XIFCOwSRRDtcgUQ7BJFGO1yBRjsEkUg7XIFIOwSRSTuBPIFJOwSRSTuBPIFJOwSRSTt8gUk7BJFIO3yBSDsEkUY7fIFGOwSRSTt8gUk7gQSRRDt8gUQ7BJFEO3yBRDsEkUQ7fIFEOwSRQjt8gUI7BJFEO3yBRDuBBJFEO3yBRDsEkUQ7fIFEOwSRQjt8gUI7BJFEO3yBRDsEkUI7gWyBQjsUkUI7PIFCOwSRQTs8gUE7BJFCO4IAkUI7HIFCOyCBQjsEkUQ7PIFEOwSRRjuCfIFGOwSRRDuBPIFEOwSRQjuBPIFCOwSRQTuCAJFBOxyBQTsggUE7BJE/OzyBPzsEkUE7ggCRQTscgUE7IIFBOwSRQjs8gUI7BJFEO4J8gUQ7BJFCO4E8gUI7BJFBO4E8gUE7BJFAO4J8gUA7BJFAO4IcgUA7BJFBO1yBQTsEkUM7ggCRQzscgUM7IIFDOwSRRTs8gUU7BJFGO4E8gUY7BJFIO4E8gUg7BJFFO4EAgUU7QJE5O0CBOTsgkTk7QIE5OyCROTuBAIE5O0CROTtAgTk7IJE5O0CBOTsgkTk7gQCBOTtAkTk7QIE5OyCROTtAgTk7IJE5O4EAgTk7QJE5O4EAgTk7QJE+O4IAgT47gQCRPjt8gT47BJE+O3yBPjsEkTw7fIE8OwSRPjuBPIE+O2SRPjtcgT47BJE+O1yBPjsEkT87XIE/OwSRQTtcgUE7BJFDO1yBQzsEkUQ7ghyBRDsEkUY7XIFGOwSRRjtcgUY7BJFIO1yBSDsEkUo7XIFKOwSRSztcgUs7BJFNO4E8gU07BJFNO4E8gU07BJFEO3yBRDsEkUY7fIFGOwSRSDt8gUg7BJFJO4h8gUk7BJFMO4J8gUw7BJFLO4FAgUs7gUCRSDuFAIFIO4EAkUU7gnyBRTsEkUc7hkCBRzuCQJFJO4J8gUk7BJFIO4E8gUg7gUSRRTuFAIFFO4EAkUU7gnyBRTsEkUc7hXyBRzuDBJFJO4J8gUk7BJFIO4E8gUg7gUSRRTuFfIFFOwSRRTuCfIFFOwSRQjuFfIFCO4MEkUc7gnyBRzsEkUY7gTyBRjuBRJFBO4V8gUE7BJE9O4J8gT07BJFAO4J8gUA7BJFAO4IcgUA7BJFBO1yBQTsEkUM7ggCRQzscgUM7IIFDOwSRRTs8gUU7BJFGO4E8gUY7BJFIO4E8gUg7BJFFO4EAgUU7QJE5O0CBOTsgkTk7QIE5OyCROTuBAIE5O0CROTtAgTk7IJE5O0CBOTsgkTk7gQCBOTtAkTk7QIE5OyCROTtAgTk7IJE5O4EAgTk7QJE5O4EAgTk7AP8vAE1UcmsAAAWOAP8DCUJhc3MgTGluZQCyAAAAwlUA/1kC/gAAki5/ggCCLn+BAJIuf1SCLn8ski5/VIIufyySLn9Ugi5/LJIuf4IAgi5/gQCSLn9Ugi5/LJIuf1SCLn8ski5/VIIufyySLH+CAIIsf4EAkix/VIIsfyySLH9Ugix/LJIsf1SCLH8skix/ggCCLH+BAJIsf1SCLH8skix/VIIsfyySLH9Ugix/LJIqf4IAgip/gQCSKn9Ugip/LJIqf1SCKn8skip/VIIqfyySKn+CAIIqf4EAkip/VIIqfyySKn9Ugip/LJIqf1SCKn8skip/gTyCKn+BRJIpf4EAgil/ggCSKX+BAIIpf4IAkit/gTyCK38Eki1/gTyCLX8Eki5/gQCCLn+CAJIuf1SCLn8ski5/VIIufyySLH9Ugix/LJIuf4EAgi5/ggCSLn+BAIIuf4IAkix/gQCCLH+CAJIsf1SCLH8skix/VIIsfyySKn9Ugip/LJIsf4EAgix/ggCSLH+BAIIsf4IAkip/gQCCKn+CAJIqf1SCKn8skip/VIIqfyySKH9Ugih/LJIqf4EAgip/ggCSKn+BAIIqf4IAkjF/gTyCMX+BRJIxf3yCMX8EkjF/fIIxfwSSL398gi9/BJIxf4E8gjF/gUSSMX+BPIIxf4FEki9/gTyCL3+BRJIvf3yCL38Eki9/fIIvfwSSLn98gi5/BJIvf4E8gi9/gUSSL398gi9/BJIvf3yCL38Eki9/fIIvfwSSLn+BPIIuf4FEki5/fIIufwSSLn98gi5/BJIsf3yCLH8Eki5/gTyCLn+BRJIuf3yCLn8Eki5/fIIufwSSLn98gi5/BJIwf4E8gjB/gUSSMH98gjB/BJIwf3yCMH8Eki5/fIIufwSSMH+BPIIwf4FEkjB/fIIwfwSSMH98gjB/BJIwf3yCMH8Ekil/gQCCKX+CAJIpf4EAgil/ggCSKX+BAIIpf4IAkit/gTyCK38Eki1/gTyCLX8Eki5/gQCCLn+CAJIuf1SCLn8ski5/VIIufyySLH9Ugix/LJIuf4EAgi5/ggCSLn+BAIIuf4IAkix/gQCCLH+CAJIsf1SCLH8skix/VIIsfyySKn9Ugip/LJIsf4EAgix/ggCSLH+BAIIsf4IAkip/gQCCKn+CAJIqf1SCKn8skip/VIIqfyySKH9Ugih/LJIqf4EAgip/ggCSKn+BAIIqf4IAkil/gQCCKX+CAJIpf1SCKX8skil/VIIpfyySJ398gid/BJIpf4EAgil/ggCSKX+BAIIpf4IAkih/VIIofyySLn9Ugi5/LJIxf1SCMX8skjR/VII0fyySOn9Ugjp/LJI9f1SCPX8skkB/gQCCQH+FAJJBf4EAgkF/ggCSKX9Ugil/LJIpf1SCKX8skil/VIIpfyySKX+BAIIpf4UAkih/VIIofyySLn9Ugi5/LJIxf1SCMX8skjR/VII0fyySOn9Ugjp/LJI9f1SCPX8skkB/gQCCQH+FAJJBf4EAgkF/ggCSKX9Ugil/LJIpf1SCKX8skil/VIIpfyySKX+BAIIpf4UAki9/gQCCL3+CAJIvf1SCL38ski9/VIIvfyySLn9Ugi5/LJIvf4EAgi9/ggCSL39Ugi9/LJIvf1SCL38ski9/VIIvfyySLn+BAIIuf4IAki5/VIIufyySLn9Ugi5/LJIsf1SCLH8ski5/gQCCLn+CAJIuf1SCLn8ski5/VIIufyySLn9Ugi5/LJIwf4EAgjB/ggCSMH9UgjB/LJIwf1SCMH8skjB/VIIwfyySMH+BAIIwf4IAkjB/VIIwfyySMH9UgjB/LJIwf1SCMH8skil/gQCCKX+CAJIpf4EAgil/giCSKX+BAIIpf4Fgkit/gTyCK38Eki1/gTyCLX8A/y8ATVRyawAABOYA/wMKUGVyY3Vzc2lvbgC5AAAAyQAAmSYrggCJJiuHAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4IAiSYrhwCZJitUiSYrLJkmK1SJJissmSYrVIkmKyyZJiuCAIkmK4cAmSYrVIkmKyyZJitUiSYrLJkmK1SJJissmSYrgQCJJiuCAJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJitAmSYrgQCJJitAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmK4IAmSYrgQCJJiuCAJkmK1SJJissmSYrVIkmKyyZJitUiSYrLJkmK4EAiSYrggCZJiuBAIkmKwD/LwBNVHJrAAAAGgD/AxJKZWZmcmV5IE0gQ29sbGV0dGkA/y8ATVRyawAAACgA/wMgamNvbGxldHRAYXR0aWxhLnN0ZXZlbnMtdGVjaC5lZHUA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8ATVRyawAAAAQA/y8A"
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
},{}]},{},[71,13])
//# sourceMappingURL=/zelda.f9b7457b.map