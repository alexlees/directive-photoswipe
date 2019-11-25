# directive-photoswipe

> 开箱即用的photoswipe指令

## 特点

> 零配置开箱即用、适合Markdown

## [预览](https://github.com/alexlees/directive-photoswipe/blob/master/index.html)

> 请在移动端查看

### [demo](https://github.com/alexlees/directive-photoswipe/blob/master/index.html)

## 使用方式

***

0. 下载

```bash
npm install directive-photoswipe
```

或者

```bash
yarn add directive-photoswipe
```

1. 引入

```javascript
import DirectivePhotoswipe from 'directive-photoswipe'
```

2. 注册

```javascript
Vue.use(DirectivePhotoswipe)
```

3. 使用

```html
<!-- 只需要在容器中使用 v-photoswipe指令即可 -->
<!-- 点击容器内图片就会弹出图片画廊 -->
<div v-photoswipe>
  <img src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg" alt="">
  <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg" alt="">
</div>
```

***

#### ChangeLog

1. 增加TypeScript支持。
2. 增加全局配置参数。

#### 全局配置参数

> 全局配置参数请参考[photoswipe](http://photoswipe.com/documentation/options.html)

```javascript
import DirectivePhotoswipe from 'directive-photoswipe'

Vue.use(DirectivePhotoswipe, options)
```

#### CDN

```html
<!-- 引入文件 -->
<script src="https://unpkg.com/directive-photoswipe/dist/directive-photoswipe.min.js"></script>
```
#### TODO

- [x] 配置参数

#### Notice

1. 请勿嵌套使用v-photoswipe指令
2. DirectivePhotoSwipe使用id为pswp的元素展示PhotoSwipe,请勿占用该ID
