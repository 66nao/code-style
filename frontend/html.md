# HTML编码规范
## 参阅
[编码规范](http://zoomzhao.github.io/code-guide/)
## 语法
- 使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式
- 嵌套的节点应该缩进（两个空格）

```html
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
```
- 在属性上，使用双引号，不要使用单引号
- 在自动闭合标签结尾处使用斜线，如`<img />`，主要是为了避免错误
- html标签要正确关闭
- 不要在行内元素中包含块级元素

```
<!-- bad -->
<span>
  <h1>标题<h1>
  <p>内容</p>
</span>

<!-- good -->
<div class="xxx">
  <h1>标题<h1>
  <p>内容</p>
</div>
```
- 禁止使用被废弃的用于表现的标签，如 center, font 等

## HTML5 doctype
在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现（使用Emmet语法的话可以直接由`!`自动生成）。

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

## Language 属性
根据 HTML5 规范：
> 鼓励网站作者在 html 元素上指定 lang 属性，来指出页面的语言。这样做有助于语言合成工具来确定发音方式，以及帮助翻译工具决定使用的规则，等等。

点击查看[更多language codes 列表](http://reference.sitepoint.com/html/lang-codes)

```html
<html lang="en-us">
  <!-- ... -->
</html>
```

## 字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。这样做之后，需要避免在 HTML 中出现字符实体，直接提供字符与文档一致的编码（通常是 UTF-8，同样可以在Emmet语法中由`!`直接生成）。

```html
<head>
  <meta charset="utf-8">
</head>
```

## 小写
- 所有的HTML标签必须小写
- 所有的HTML属性必须小写
- 所有的属性值必须小写

## IE 兼容模式
Internet Explorer 支持使用兼容性`<meta>`标签来指定使用什么版本的 IE 来渲染页面。如果不是特殊需要，通常通过 edge mode 来通知 IE 使用最新的兼容模式。

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## 360等国内浏览器
添加下面的标签来告诉浏览器（主要是360浏览器）使用webkit内核来渲染页面
```html
<meta name="renderer" content="webkit">
```

## 引入 CSS 和 JavaScript
- 根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。

```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css">

<!-- In-document CSS -->
<style>
  /* ... */
</style>

<!-- JavaScript -->
<script src="code-guide.js"></script>
```
- 为保持各浏览器表现一致性，在html开头先引入[Normalize.css](https://github.com/necolas/normalize.css)，不要使用[reset.css](http://cssreset.com/)。
> Normalize.css preserves useful defaults rather than "unstyling" everything.
> 
> Normalize.css corrects some common bugs that are out of scope for reset.css.
> 
> Normalize.css doesn't clutter your dev tools. 
> 
> Normalize.css is more modular. 
> 
> Normalize.css has better documentation.

- 省略图像、媒体文件、样式表和脚本等URL协议头部声明 ( http: , https: )。如果不是这两个声明的URL则不能省略。
省略协议声明，使URL成相对地址，防止内容混淆问题和导致小文件重复下载（这个主要是指http和https交杂的场景中）。

```html
<!-- bad -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>

<!-- good -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

- 尽量避免在html中使用内联css和内联js，这样才能做到结构的解耦和方便构建的进行

## 实用高于完美
尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价。任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

## 属性顺序
HTML 属性应该按照特定的顺序出现以保证易读性。
- `class`
- `id`,`name`
- `data-*`
- `src`,`for`,`type`,`href`,`value`
- `title`,`alt`
- `role`,`aria-*`

Classes 是为高可复用组件设计的，所以他们处在第一位。Ids 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。

```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

## Boolean 属性
Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

## 减少标签数量
在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。

```html
<!-- bad -->
<span class="avatar">
  <img src="...">
</span>

<!-- good -->
<img class="avatar" src="...">
```

## JavaScript 生成标签
在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

## 多媒体替代方案
- 为img元素加上alt属性
- 为视频内容提供音轨替代
- 为音频内容提供字母替代等等

```html
<!-- bad -->
<img src="banner.jpg" />

<!-- good -->
<img src="banner.jpg" alt="520即将到来，爱就大声说出来" />
```

> alt属性的内容为对该图片的简要描述，这对于盲人用户和图像损毁都非常有意义，即无障碍。对于纯粹的装饰性图片，alt属性值可以留空，如 alt=""
