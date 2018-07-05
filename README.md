# directive-photoswipe

> 开箱即用的photoswipe指令
## 特点

> 零配置开箱即用

## [预览](https://alexlees.github.io/topic/5b3053665c8f1ea723a569ea)
> 请在移动端查看

## 使用方式

***

0. 下载
```bash
npm install directive-photoswipe | yarn add directive-photoswipe
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

#### CDN
```html
<!-- 引入文件 -->
<script src="https://unpkg.com/directive-photoswipe/dist/directive-photoswipe.umd.min.js"></script>
```
#### TODO

- [] 配置参数
