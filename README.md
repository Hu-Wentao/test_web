# test_web

## 测试 flutter_web_optimizer

```shell
# 1 构建Web，产物复制到 web_released
flutter build web


# 2 Web优化, 产物复制到 web_optimized
flutter pub run flutter_web_optimizer optimize --asset-base ./
```