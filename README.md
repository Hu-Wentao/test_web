# test_web

## 测试 flutter_web_optimizer

```shell
# 1 构建Web，产物复制到 web_released
flutter clean && flutter build web


# 2 Web优化, 产物复制到 web_optimized
flutter pub run flutter_web_optimizer optimize --asset-base ./
```


```html
<script>
window.addEventListener('load', function(ev) {
// Download main.dart.js
_flutter.loader.loadEntrypoint({
serviceWorker: {
serviceWorkerVersion: serviceWorkerVersion,
},
onEntrypointLoaded: function(engineInitializer) {
engineInitializer.initializeEngine().then(function(appRunner) {
appRunner.runApp();
});
}
});
});
```

```html
<script>
// window.addEventListener('load', function(ev) {
// // Download main.dart.js
// _flutter.loader.loadEntrypoint({
// serviceWorker: {
// serviceWorkerVersion: serviceWorkerVersion,
// },
// onEntrypointLoaded: function(engineInitializer) {
// engineInitializer.initializeEngine().then(function(appRunner) {
// appRunner.runApp();
// });
// }
// });
// });
window.addEventListener('load', function (ev) {
// Download main.dart.js
_flutter.loader.loadEntrypoint({
serviceWorker: {
serviceWorkerVersion: serviceWorkerVersion,
}
}).then(function (engineInitializer) {
return engineInitializer.initializeEngine();
}).then(function (appRunner) {
return appRunner.runApp();
}).then(function (app) {
// Wait a few milliseconds so users can see the "zoooom" animation
// before getting rid of the "loading" div.
  });
});
</script>
```


```html
  <script>
    // window.addEventListener('load', function(ev) {
    //   // Download main.dart.js
    //   _flutter.loader.loadEntrypoint({
    //     serviceWorker: {
    //       serviceWorkerVersion: serviceWorkerVersion,
    //     },
    //     onEntrypointLoaded: function(engineInitializer) {
    //       engineInitializer.initializeEngine().then(function(appRunner) {
    //         appRunner.runApp();
    //       });
    //     }
    //   });
    // });
    window.addEventListener('load', function (ev) {
      // Download main.dart.js
      _flutter.loader.loadEntrypoint({
        serviceWorker: {
          serviceWorkerVersion: serviceWorkerVersion,
        }
      }).then(function (engineInitializer) {
        return engineInitializer.initializeEngine();
      }).then(function (appRunner) {
        return appRunner.runApp();
      }).then(function (app) {
        // Wait a few milliseconds so users can see the "zoooom" animation
        // before getting rid of the "loading" div.
      });
    });
  </script>
```