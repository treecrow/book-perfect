# .DS_Store

## 禁止.DS_store生成

```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
// 重启Mac
```

## 恢复.DS_store生成

```bash
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```