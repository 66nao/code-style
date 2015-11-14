# 前端通用开发规范
## 参阅
[编码规范](http://zoomzhao.github.io/code-guide/)  
[知乎-丁小倪的回答](http://www.zhihu.com/question/19963993/answer/13496088)

## 说明
规范的制定是我们长期以来对工作的积累与沉淀的产物，帮助我们更快、更好、更高效的完成繁重、复杂、多样化的任务，我们制作规范的主要目的在于：

* 降低每个组员介入项目的门槛成本
* 提高工作效率及协同开发的便捷性
* 高度统一的代码风格
* 提供一整套HTML、CSS解决方案，来帮助开发人员快速做出高质量的符合要求的页面

最终实现：
> 不管有多少参与者，代码都应该像同一个人所写。

## 结构分离
要求结构（HTML）、表现（CSS）、行为（JavaScript）分离
> 将结构与表现、行为分离，保证它们之间的最小耦合，这对前期开发和后期维护都至关重要。

## 命名
- 除了js中存在驼峰命名方式，其它一律使用`-`连接单词，且单词都为小写，单词尽量短但必须保持明确的意义，如`btn`可取代`button`，但`s`并不能表示任何意义
- 上述规则同样适用于html属性
- 不允许使用拼音（约定俗成的除外，如：youku,baidu）

## 缩进
统一使用2个空格进行缩进，在[HTML编码规范](./html.md)中有提及。

## 编码
统一使用无BOM的utf-8编码格式

## 注释
- HTML中模块间添加注释，模块间添加空行

```html
<main>
  <!-- nav start -->
  <nav>
    xxx
  </nav>
  <!-- nav end -->
  
  <!-- head start -->
  <header>
  	<ul>
      <li></li>
      ...
    </ul>
  </header>
  <!-- head end -->
  
  <!-- footer start -->
  <footer>
    xxx
  </footer>
  <!-- footer end -->
</main>
```
- CSS中已模块为单位添加注释

```css
/**
 * Nav style
 */
.nav {

}
.nav ul li {

}

/**
 * Comments
 */
.comment {

}
.comment .reply {

}
```
- JS文件名添加注释，公用方法或对外暴露的方法要求添加注释并说明每个参数的意义，复杂的还需要给出示例代码

```javascript
// modal.js

/**
 * 模态框插件，支持在页面中打开一个模态框
 */
(function($) {
  // some code ...
  $.extend({
    /**
	 * 打开模态框
	 * @param id 模态框DOM的id
	 * @param easing 打开模态框时的动画曲线函数，可取值：easeIn,easeOut,linear,...
	 */
    showModal: function(id, easing) {
      // some code
    }
  });
  
  // some code
  /**
   * 模态框打开前触发的事件，可以通过下面这种方式监听
   * $modal.on('modal.opening', function(event) {
   *   // your code
   *   // you can return false to prevent opening
   * })
   */
  $modal.trigger('modal.opening);
})(jQuery); 
```
- 使用`TODO`注释表明后续需要实现的地方，使用`FIXME`注释表明后续需要修改的地方（HTML、CSS、JavaScript通用）。

```javascript
function updateDom() {
  // some code
  // FIXME: BUG123，需要修改为...
  // some error code
}

function initListener() {
  // TODO: 监听页面元素变化
}
```

## 空格
- 大括号`{`开始前加一个空格，逗号`,`和冒号`:`后面都要加一个空格，等号`=`等判断符前后都加一个空格，一行中多个表示式之间需要空格(不管是`,`还是`;`)

```
// bad
main{
  color:#333;
}
var a=1;
var b = 'a',c = 'aa';

// good
main {
  color: #333;
}
var a = 1;
var b = 'a', c = 'aa';
```
- `if`,`else`,`for`等之后需要加一个空格，`else`,`else if`和前面结束的`}`同行且两者间空一格

```javascript
// bad
if(a>0){
  // xxx
}else{

}
for(var i=0;i<10;i++){
  // xxx
}


// good
if (a > 0) {
  // xxx
} else {

}
for (var i = 0; i < 10; i++) {

}
```
- 删除行尾空格，这些空格没有必要存在

## 括号
- 开始大括号`{`不要另起一行，放在行尾，和前面的空一格，结束大括号`}`单独一行

```javascript
// bad
function test(){
  // some code}

// good
function test() {
  // some code
}
```
- 小括号、中括号和大括号一起出现时可连在一起写并且一起结束

```javascript
// bad
var students = [
 {
   name: 'xx',
   age: 12
 }, {
   name: 'xx',
   age: 13
 }
];

// good
var students = [{
   name: 'xx',
   age: 12
 }, {
   name: 'xx',
   age: 13
 }];
```

## 命缩写规范
- 保证缩写后还能较为清晰保持原单词所能表述的意思
- 使用业界熟知的或者约定俗成的

```
navigation   =>  nav
button       =>  button
description  ->  desc
```

## 代码有效性
- 使用 [W3C HTML Validator](http://validator.w3.org/) 来验证你的HTML代码有效性
- 使用 [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) 来验证你的CSS代码有效性

> 代码验证不是最终目的，真的目的在于让开发者在经过多次的这种验证过程后，能够深刻理解到怎样的语法或写法是非标准和不推荐的，即使在某些场景下被迫要使用非标准写法，也可以做到心中有数。

## 图形图片
- 所有图片必须经过一定的压缩和优化才能发布
- 图片保存格式为png还是jpg的判断基础标准就是图片质量和图片大小，在满足质量的情况下选择文件大小小的那个
- 多个小图片需要进行sprite（CSS Sprite是一种将数个图片合成为一张大图的技术（既可以是背景图也可以是前景图），然后通过偏移来进行图像位置选取）处理