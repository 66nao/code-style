# 六六脑开发规范

## 更新记录
- `0.1.1` 2015.12.14 修改stylint的配置
- `0.1.0` 2015.11.17 前端编码规范初步确定
- `0.0.0` 2015.11.12 开始制定

## 前端开发规范
最后更新时间  2015.12.14  
[点击进入](./frontend/README.md)

## 后端开发规范
最后更新时间  
[点击进入](./backend/README.md)

## EditorConfig
为配合规范的实施，给IDE都安装上`editorconfig`插件，并使用[.editorconfig](./.editorconfig)配置文件来统一开发环境。

关于EditConfig的介绍请[点击这里查看](http://editorconfig.org/)

## Ignore
所有与项目无关的文件（夹）都需要加入到`Ignore List`中，主要是IDE的各种配置文件。如果有示例文件，那么示例文件对应的开发文件也应该加入到`Ignore List`。

```
// 由config.example.js复制得到的config.js应该ignore
- config.example.js
- config.js(ignore)
```

可参考[.gitignore](./.gitignore)初始化
