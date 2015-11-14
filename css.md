# CSS编码规范
## 参阅
[HTML/CSS开发规范指南](https://github.com/doyoe/html-css-guide)  
[编码规范](http://zoomzhao.github.io/code-guide/)

## 语法
- 使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式
- 使用组合选择器时，保持每个独立的选择器占用一行
- 为了代码的易读性，在每个声明的左括号前增加一个空格
- 声明块的右括号应该另起一行
- 每条声明`:`后应该插入一个空格
- 每条声明应该只占用一行来保证错误报告更加准确
- 所有声明应该以分号结尾，虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错
- 逗号分隔的取值，都应该在逗号之后增加一个空格
- 不要在颜色值`rgb()`,`rgba()`,`hsl()`,`hsla()`,和`rect()`中增加空格
- 不要在属性取值或者颜色参数前面添加不必要的0(比如，使用`.5`替代`0.5`和`.5px`替代`0.5px`)
- 所有的十六进制值都应该使用小写字母，例如`#fff`，因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来
- 不要使用系统自带的颜色值，如`red`,`blue`等
- 尽可能使用短的十六进制数值，例如使用`#fff`替代`#ffffff`
- 为选择器中得属性取值添加引号，例如`input[type="text"]`，[他们只在某些情况下可有可无](http://mathiasbynens.be/notes/unquoted-attribute-values#css)，所以都使用引号可以增加一致性
- 不要为0指明单位，比如使用`margin: 0;`而不是`margin: 0px;`

```css
/* bad */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* good */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0px 1px 2px #ccc, inset 0 1px 0 #fff;
}
```
- 不要在url()里对引用资源加引号

```css
/** bad */
body {
    background-image: url("sprites.png");
}

/** good */
body {
    background-image: url(sprites.png);
}
```
- 尽量不要使用`!important`

## 文件引用
- 一律使用link的方式调用外部样式
- 不允许在页面中使用`<style>`块
- 不允许在`<style>`块中使用 @import
- 尽量避免使用 style 属性写行内样式，在写的时候先想想自己的布局是否有问题，是否已经有已存在的样式可用

> 一般情况下，在页面中只允许使用'<link />'标签来引用CSS文件

## 属性声明顺序
属性声明应该以下面的顺序分组处理：
序号|分组|包含的属性
---|:---:|:---:
1| Positioning 位置| display position left top float等
2| Box Model 盒模型| width height margin padding border等
3| Typographic 排版| font color text-align等
4| Visual 外观| background-color border opacity等

Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。

其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。

``` css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```
*另外，如果包含 content 属性，应放在最前面*

## 媒体查询位置
尽量将媒体查询的位置靠近他们相关的规则。不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。这里是一个典型的案例。

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```

## 不要使用`@import`
与`<link>`相比, `@import`更慢，需要额外的页面请求，并且可能引发其他的意想不到的问题。应该避免使用他们，而选择其他的方案：
- 使用多个`<link>`元素
- 使用CSS预处理器例如`Sass`或`Less`将样式编译到一个文件中
- 使用`Grunt`或者`Gulp`来合并 CSS 文件

## 前缀属性
当使用厂商前缀属性时，通过缩进使取值垂直对齐以便多行编辑，同时保证私有属性在前，标准属性在后。

```css
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
          box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
```

## 单条声明的声明块
在一个声明块中只包含一条声明的情况下，为了易读性和快速编辑可以考虑移除其中的换行。所有包含多条声明的声明块应该分为多行。

这样做的关键因素是错误检测 - 例如，一个 CSS 验证程序显示你在 183 行有一个语法错误,如果是一个单条声明的行，那就是他了。在多个声明的情况下，你必须为哪里出错了费下脑子。

```css
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
```

## 属性简写
坚持限制属性取值简写的使用，属性简写需要你必须显式设置所有取值。常见的属性简写滥用包括:
- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

大多数情况下，我们并不需要设置属性简写中包含的所有值。例如，HTML 头部只设置上下的 margin，所以如果需要，只设置这两个值。过度使用属性简写往往会导致更混乱的代码，其中包含不必要的重写和意想不到的副作用。

```css
/* bad */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* good */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url(image.jpg);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```
## class命名
前缀|说明|示例
---|---|---|
g-|全局通用样式命名，前缀g全称为global，一旦修改将影响全站样式|g-layout
m-|模块命名方式|m-user-manager
c-|组件命名方式|c-calendar
js-|所有用于纯交互的命名，不涉及任何样式规则。JSer拥有全部定义权限|js-switch
*|辅助类，辅助类不需要添加前缀|clearfix,hidden

```css
/** bad */
.info { sRules; }
.current { sRules; }
.news { sRules; }

/** good */
.m-detail .info { sRules; }
.m-detail .current { sRules; }
.m-detail .news { sRules; }
```

> 如果不这样，将给我们带来不可预知的管理麻烦以及沉重的历史包袱。你永远也不会知道哪些样式名已经被用掉了，如果你是一个新人，你可能会遭遇，你每定义个样式名，都有同名的样式已存在，然后你只能是换样式名或者覆盖规则。


> 采用这种命名方式后，所有的规则都必须在某个相对的作用域下才生效，尽可能减少全局污染。

js- 这种级别的className完全交由JSer自定义，但是命名的规则也要遵守上述的规则


## 选择器
- 不要使用类型选择器（元素选择器），因为结构可能会发生改变

```css
// bad
div.doc {
  // xxx
}

// good
.doc {
  // xxx
}
```
- 避免多id选择

```css
// bad
#abc #cde {
  // xxx
}

// good
#cde {
  // xxx
}
```

- 使用 classes 而不是通用元素标签来优化渲染性能
- 减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内
- 避免在经常出现的组件中使用一些属性选择器 (例如，`[class^="..."]`)。浏览器性能会受到这些情况的影响
- 只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况)

## 代码组织
- 以组件为单位组织代码
- 制定一个一致的注释层级结构
- 使用一致的空白来分割代码块，这样做在查看大的文档时更有优势
- 当使用多个 CSS 文件时，通过组件而不是页面来区分他们。页面会被重新排列组合，而组件是可以移动的

```css
/*
 * Component section heading
 */

.element { ... }


/*
 * Component section heading
 *
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

.element { ... }

/* Contextual sub-component or modifer */
.element-heading { ... }
```

## 注释
保持注释内容与星号之间有一个空格的距离

**普通注释（单行）**

```css
/* 普通注释 */
```

**区块注释**

```css
/**
 * 模块: m-detail
 * 描述：酒店详情模块
 * 应用：page detail, info and etc...etc
 */
``` 

> 有特殊作用的规则一定要有注释说明

> 应用了高级技巧的地方一定要注释说明

## 伪类和伪元素
常用的伪类包括：  
- `:link`  
- `:active`  
- `:hover`  
- `:visited`  
- `:focus`  
- `:first-child`  
- `:lang`  
- `:nth-child`(css3)  
- `:disabled`  
- `:enabled`  
- `:checked`  

常用的伪元素包括：  
- `::first-line`  
- `::first-letter`  
- `::before`  
- `::after`  
- `::selection`

更多内容请查看[伪类选择器](http://edu.cnzz.cn/201401/94267679.shtml)  
关于伪类和伪元素的区别简单来说就是：
> 如果不使用伪类而又要达到伪类的效果，那么我们需要在元素上添加一个样式类；如果不使用伪元素而又要达到伪元素的效果，那么我们需要在元素中创建一个新的元素。

伪类统一使用一个冒号`:Pseudo-classes`，伪元素统一使用两个冒号`::Pseudo-elements`

## Stylus预编译
- 声明结尾没有分号
- 属性名与属性值之间保留冒号
- 不要大括号
- 变量以`$`开头
- `Mixin`在调用时必须使用括号
- 不要使用透明`Mixin`，对于开发和维护都不方便

## 建议
- 改变浏览器默认的滚动条样式
- 改变浏览器默认的`::selection`(Normalize.css中有定义)
- 默认`html`元素的`font-size`为`16`，可根据实际项目修改
- 为自适应灵活使用`rem`,`em`,`vw`,`vh`,`%`等单位
- 使用`.active`样式来控制元素的显隐，过渡和动画