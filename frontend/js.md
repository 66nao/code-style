# JavaScript编程规范
## 参阅
[Node 编码规范](https://github.com/windyrobin/iFrame/blob/master/style.md)  
[Google JavaScript 编码规范指南](http://alloyteam.github.io/JX/doc/specification/google-javascript.xml)  
[Javascript代码及注释规范 2014/3/5](https://github.com/hiwanz/javascript-style-reference)  
[Javascript编程风格](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)  
[JavaScript规范](https://github.com/adamlu/javascript-style-guide)  
[JavaScript编码规范](https://github.com/fex-team/styleguide/blob/master/javascript.md)  

## 命名
- 常量的形式如:`NAMES_LIKE_THIS`，全部使用大写字符，并用下划线分隔。你也可用`@const`标记来指明它是一个常量。但请永远不要使用`const`关键词。常量定义后就不要去修改
- 变量的命名格式统一使用`Camel命名法`，即驼峰格式

```js
// bad
var user_list = [];

// good
var userList = [];
```
- 函数、函数的参数都使用Camel命名法
- 类使用`Pascal命名法`

```js
function TextNode(options) {
}
```
- 类名使用`名词`
- 函数名使用`动宾短语`
- boolean型变量使用`is`,`has`开头
- Promise对象使用`动宾短语的进行时`

```js
var loadingData = ajax.get('url');
loadingData.then(callback);
```


## 语法
- 永远用`var`声明变量，不加`var`时，会污染顶层上下文
- 总是加上分号作为结束符
- 操作符与操作算子之间要有空格

```js
// bad
var string = 'Foo'+bar;

// good
var string = 'Foo' + bar;
```
- 使用`string` 时，用单引号替代双引号（JSON除外）

```js
// bad
var foo = "bar";
var http = require("http");

// good
var foo = 'bar';
var http = require('http');
```

- 使用`===`和`!==`来做比较而不是`==`和`!=`
- 使用字面表达式，禁止使用new来创建基础类型变量，用`{}`,`[]`代替`new Array`，`new Object`，不要使用 `string`，`bool`，`number` 的对象类型，即不要调用 `new String` ，`new Boolean` ，`new Number`
- 避免使用`with`与`eval`，`eval`仅用于解析序列化串
- 使用`this`时应当十分小心，要理解清楚`this`具体指向的是哪个对象
- `for-in`只用于遍历`object`,`map`,`hash`，不要用于遍历`Array`
- 不要出现长字符串，尤其是使用变量拼接的字符串，你应该考虑使用其它形式来实现，比如模版
- 函数参数大于3个时，应以对象形式作为参数集传递
- 禁止在代码块中声明函数

```js
// bad
if (true) {
  function foo() {
  }
}

// good
var foo = function() {
}
if (true) {
  foo();
}
```
- 不要将不同目的的语句，合并成一行

```js
// bad
if (a = b) {...}

var a = b = 0;

// good
a = b;
if (a) {...}

var a = 0;
var b = 0;
```
- 所有变量声明都放在头部，所有函数都在使用之前定义，先写变量，后写函数
- 永远不要把参数命名为 `arguments`。这将取代函数作用域内的 `arguments` 对象
- 使用 `.` 来访问对象的属性，只有当通过变量访问属性时才使用中括号 `[]`
- 使用`parseInt`时，必须指定进制

```js
// bad
parseInt(str);

// good
parseInt(str, 10);
```
- `undefined`,`null`,`0`,`NaN`,`''`,`false`这些表达式会被计算为false，而`[]`,`{}`,`'0'`,`1`等会被计算为true，所以在做if判断时我们应当使用简写方式

```js
// bad
var a;
if (a === null || a === undefined) {
  // some code
}

// good
var a;
if (a) {
  // some code
}

// bad
var b = [];
if (b.length > 0) {
  // some code
}

// good
var b = [];
if (b.length) {
  // some code
}
```
- 使用大括号包裹代码段，即使只有1行

```js
// bad
if (true) return 'a';

// good
if (true) {
  return 'a';
}
```
- 运算符处换行时，运算符必须在新行的行首

```js
// bad
if (user.isAuthenticated() &&
  user.isInRole('admin') &&
  user.hasAuthority('add-admin') ||
  user.hasAuthority('delete-admin')) {
  // Code
}

// good
if (user.isAuthenticated()
  && user.isInRole('admin')
  && user.hasAuthority('add-admin')
  || user.hasAuthority('delete-admin')) {
  // Code
}
```

## 链式调用
- 鼓励使用链式调用，这样可以使代码更短，思路更清晰，减少变量使用和重复代码
- 链式过长时（一般为超过120列）应当另起一行，另起一行时应当以`.`开头，强调这是方法调用而不是新语句

```js
// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
  find('.selected').
  highlight().
  end().
  find('.open').
  updateCount();

// good
$('#items').find('.selected').highlight().end()
  .find('.open').updateCount();
```

## JSON
- 不要使用关键字、保留字作为键值，例如`class`,`default`
- json对象的最后一个不要有逗号`,`

```js
// bad
var students = [{
  name: '',
  age: 12,
}, {
  name: '',
  age: 13,
},]

// good
var students = [{
  name: '',
  age: 12
}, {
  name: '',
  age: 13
}]
```

## 面向对象编程
- 类中的成员变量使用构造函数来初始化
- 除非是必须移除类的成员，否则析构函数中对成员的销毁应通过将其设置为null，而不是用delete，因为重新赋值方式性能比用delete好
- 使用下划线开头的变量表示私有变量，例如`this.__private = 'private';`
- 使用`_this`保留对`this`的引用
- 方法应尽量返回`this`来实现方法链式使用
- 构造存取函数时应该保持和Java一样的规则（使用get,set和is,has），不要使用jquery的方法

```js
// bad
this.value = function(val) {
  if (val) {
    this.value = val;
    return this;
  } else {
    return this.value;
  }
}

// good
this.getValue = function() {
  return this.value;
}
this.setValue = function(val) {
  this.value = val;
  return this;
}
```

- 给对象原型分配方法，而不是使用一个新对象覆盖原型。覆盖原型将导致继承出现问题：重设原型将覆盖原有原型！

```js
function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};
```

## 模块化
建议先看看玉伯老师的文章[前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)  
关于模块化的技术选型仍在考虑中

## Promise
关于`promise`的介绍可以参阅这篇文章[promise-cookbook](https://github.com/mattdesl/promise-cookbook/blob/master/README.zh.md)

- jQuery（1.5.0版本开始）已自带promise
- angularjs也有自己promise模块`$q`
- 没有promise模块时统一使用[Q](https://github.com/kriskowal/q)

关于各自的使用方法不做过多介绍，请自行学习

## jQuery
- 使用 `$` 作为存储 jQuery 对象的变量名前缀

```js
// bad
var sidebar = $('.sidebar');

// good
var $sidebar = $('.sidebar');
```
- 缓存jQuery查询，超过一次以上调用就需要用变量缓存，避免再次执行DOM查询而浪费内存

```js
// bad
function setSidebar() {
  $('.sidebar').hide();

  // ...stuff...

  $('.sidebar').addClass('js-active');
}

// good
function setSidebar() {
  var $sidebar = $('.sidebar');
  $sidebar.hide();

  // ...stuff...

  $sidebar.addClass('js-active');
}
```
- 不要使用js来控制元素的样式，而应该是通过增减class来实现

```js
// bad
$dom.css({color: '#fff'});

// good
// css中添加.js-white {color: #fff;}
$dom.addClass('js-white');
```
- 自定义的事件名全小写，使用命名空间配合`.`来连接

```js
$dom.trigger('modal.opening');
```
- 设置元素的`checked`,`disabled`等状态时建议使用原生的js方法去改，而不是使用jquery的`attr`方法

```js
// bad
$dom.attr('checked', 'checked');

// good
$dom[0].checked = true;
```

## 安全
- 禁止使用站外资源，因为这些站外资源不可控
- 警惕xss, csrf等安全性漏洞攻击

## 注释
### 文件注释
文件的注释中要包含作者信息，使用`@author`标识

开发者信息能够体现开发人员对文件的贡献，并且能够让遇到问题或希望了解相关信息的人找到维护人。通常情况文件在被创建时标识的是创建者。随着项目的进展，越来越多的人加入，参与这个文件的开发，新的作者应该被加入`@author`标识。

`@author`标识具有多人时，原则是按照 责任 进行排序。通常的说就是如果有问题，就是找第一个人应该比找第二个人有效。比如文件的创建者由于各种原因，模块移交给了其他人或其他团队，后来因为新增需求，其他人在新增代码时，添加 @author 标识应该把自己的名字添加在创建人的前面。

`@author`中的名字不允许被删除。任何劳动成果都应该被尊重。

业务项目中，一个文件可能被多人频繁修改，并且每个人的维护时间都可能不会很长，不建议为文件增加 @author 标识。通过版本控制系统追踪变更，按业务逻辑单元确定模块的维护责任人，通过文档与wiki跟踪和查询，是更好的责任管理方式。

对于业务逻辑无关的技术型基础项目，特别是开源的公共项目，应使用`@author`标识。

```js
/**
 * @file Describe the file
 * @author author-name(mail-name@domain.com)
 *         author-name2(mail-name2@domain.com)
 */
```

### 命名空间注释
命名空间使用`@namespace`标识

```js
/**
 * @namespace util通用工具
 */
var util = {};
window.util = util;
```

### 其它
更多注释说明请查看  
[js/javascript代码注释规范与示例](http://www.lifefrom.com/qianduan/336.html)  
[注释](https://github.com/fex-team/styleguide/blob/master/javascript.md#24-注释)

## CoffeeScript
建议使用CoffeeScript书写代码，但前提是你已经熟悉了JavaScript。引用知乎上[Brandon Wu](http://www.zhihu.com/people/brandon-wu)的回答。
> CoffeeScript = The Good Parts of JavaScript + Syntax Sugar

> CoffeeScript 只是让你用一种愉♂悦的方式来写正确的 JavaScript

> 一个合格的 JavaScript 程序员编写的代码，应该和 CoffeeScript 编译器生成的代码有很高的相似度
