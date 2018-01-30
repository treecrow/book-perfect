# [slick](http://kenwheeler.github.io/slick/)

## 相关文档

- [どこよりも詳しい万能スライダーjQueryプラグインslick.jsの使い方](http://ithat.me/2016/10/17/how-to-use-slick-jquery-plugin)

## 使用示例

- 更新 slick

```javascript
if (!whole.localeSlick) {
  whole.localeSlick = $('#localeSlick').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    // arrows: false,
    // appendArrows: '',
    // prevArrow: '',
    // nextArrow: '',
    infinite: false,
  });
} else {
  whole.localeSlick.slick('setPosition');
}
```

- 设置自定义箭头按钮

```javascript
$('.slider').slick({
  appendArrows: $('.slider-container'),
  prevArrow: '<span class="prev">prev</span>',
  nextArrow: '<span class="next">next</span>',
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 8,
});
```

## settings

| option           | more                           |
|------------------|--------------------------------|
| accessibility    | 使用方向按键和tab按键滚动                 |
| adaptiveHeight   | 根据 slide 内容自适应高度               |
| autoplay         | Enables Autoplay               |
| autoplaySpeed    | Autoplay Speed in milliseconds |
| arrows           | Prev/Next Arrows               |
| asNavFor         | 把两个slider关联起来                  |
| appendArrows     | 定义包裹左右箭头和slider列表的外层区域         |
| appendDots       | -                              |
| prevArrow        | 前一个按钮                          |
| nextArrow        | 后一个按钮                          |
| centerMode       | -                              |
| centerPadding    | -                              |
| cssEase          | -                              |
| customPaging     | -                              |
| dots             | -                              |
| dotsClass        | -                              |
| draggable        | -                              |
| fade             | 是否渐变                           |
| focusOnSelect    | -                              |
| easing           | -                              |
| edgeFriction     | -                              |
| infinite         | 是否无限循环（默认 true）                |
| initialSlide     | -                              |
| lazyLoad         | -                              |
| mobileFirst      | -                              |
| pauseOnFocus     | Pause Autoplay On Focus        |
| pauseOnHover     | Pause Autoplay On Hover        |
| pauseOnDotsHover | -                              |
| respondTo        | -                              |
| responsive       | -                              |
| rows             | -                              |
| slide            | -                              |
| slidesPerRow     | -                              |
| slidesToShow     | -                              |
| slidesToScroll   | -                              |
| speed            | -                              |
| swipe            | -                              |
| swipeToSlide     | -                              |
| touchMove        | -                              |
| touchThreshold   | -                              |
| useCSS           | -                              |
| useTransform     | -                              |
| variableWidth    | -                              |
| vertical         | -                              |
| verticalSwiping  | -                              |
| rtl              | -                              |
| waitForAnimate   | -                              |
| zIndex           | -                              |

## Events

| event         | more |
|---------------|------|
| afterChange   | -    |
| beforeChange  | -    |
| breakpoint    | -    |
| destroy       | -    |
| edge          | -    |
| init          | -    |
| reInit        | -    |
| setPosition   | -    |
| swipe         | -    |
| lazyLoaded    | -    |
| lazyLoadError | -    |

## Methods

| method            | more |
|-------------------|------|
| slickCurrentSlide | -    |
| slickGoTo         | -    |
| slickNext         | -    |
| slickPrev         | -    |
| slickPause        | -    |
| slickPlay         | -    |
| slickAdd          | -    |
| slickRemove       | -    |
| slickFilter       | -    |
| slickUnfilter     | -    |
| slickGetOption    | -    |
| slickSetOption    | -    |
| unslick           | -    |
| getSlick          | -    |
