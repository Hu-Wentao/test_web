    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = ".";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.c0dc3e9b.js",
  "main.dart_0.js": "main.dart_0.93fbdcc6.js",
  "main.dart_1.js": "main.dart_1.b8d1760c.js",
  "main.dart_2.js": "main.dart_2.ae12d464.js",
  "main.dart_3.js": "main.dart_3.6dc6d135.js",
  "main.dart_4.js": "main.dart_4.9c331c74.js",
  "main.dart_5.js": "main.dart_5.797bcbda.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.460e316e.json",
  "assets/FontManifest.json": "assets/FontManifest.012eb3a7.json",
  "assets/fonts/MaterialIcons-Regular.otf": "assets/fonts/MaterialIcons-Regular.e7069dfd.otf",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "assets/packages/cupertino_icons/assets/CupertinoIcons.6d342eb6.ttf",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.10920ce5.js",
  "icons/Icon-192.png": "icons/Icon-192.ac9a721a.png",
  "icons/Icon-512.png": "icons/Icon-512.96e75261.png",
  "icons/Icon-maskable-192.png": "icons/Icon-maskable-192.c457ef57.png",
  "icons/Icon-maskable-512.png": "icons/Icon-maskable-512.301a7604.png",
  "main.dart.js": "main.dart.c0dc3e9b.js",
  "main.dart_0.js": "main.dart_0.93fbdcc6.js",
  "main.dart_1.js": "main.dart_1.b8d1760c.js",
  "main.dart_2.js": "main.dart_2.ae12d464.js",
  "main.dart_3.js": "main.dart_3.6dc6d135.js",
  "main.dart_4.js": "main.dart_4.9c331c74.js",
  "main.dart_5.js": "main.dart_5.797bcbda.js",
  "manifest.json": "manifest.9a79ed10.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return value;
          },
          set: function (v) {
            value = v;
            if (v.startsWith('./')) {
              v = v.replace('./', '');
            }
            if (hashFileManifest[v]) {
              value = assetBase + hashFileManifest[v];
            }
            element.setAttribute(property, value);
          }
        })
  
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
  
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }  
    })();

    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
      var src;
      try {
        var url = new URL(uri);
        var key = url.pathname.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      } catch (e) {
        var key = uri.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      }
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    