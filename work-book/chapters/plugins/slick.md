# slick

## 相关文档

* [官方文档](http://kenwheeler.github.io/slick/)
* [どこよりも詳しい万能スライダー jQuery プラグイン slick.js の使い方](http://ithat.me/2016/10/17/how-to-use-slick-jquery-plugin)

## 使用示例

* 更新 slick

```javascript
if (!whole.localeSlick) {
  whole.localeSlick = $("#localeSlick").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    // arrows: false,
    // appendArrows: '',
    // prevArrow: '',
    // nextArrow: '',
    infinite: false
  });
} else {
  whole.localeSlick.slick("setPosition");
}
```

* 设置自定义箭头按钮

```javascript
$(".slider").slick({
  appendArrows: $(".slider-container"),
  prevArrow: '<span class="prev">prev</span>',
  nextArrow: '<span class="next">next</span>',
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 8
});
```

## settings

| option           | more                                     |
| ---------------- | ---------------------------------------- |
| accessibility    | 使用方向按键和 tab 按键滚动              |
| adaptiveHeight   | 根据 slide 内容自适应高度                |
| autoplay         | 自动播放                                 |
| autoplaySpeed    | 自动播放速度                             |
| arrows           | 是否显示前进/后退按钮                    |
| asNavFor         | 把两个 slider 关联起来                   |
| appendArrows     | 设置包裹左右箭头和 slider 列表的外层区域 |
| appendDots       | -                                        |
| prevArrow        | 前一个按钮                               |
| nextArrow        | 后一个按钮                               |
| centerMode       | 居中模式（当前 slider 居中展示）         |
| centerPadding    | -                                        |
| cssEase          | -                                        |
| customPaging     | -                                        |
| dots             | -                                        |
| dotsClass        | -                                        |
| draggable        | -                                        |
| fade             | 是否渐变                                 |
| focusOnSelect    | -                                        |
| easing           | -                                        |
| edgeFriction     | -                                        |
| infinite         | 是否无限循环（默认 true）                |
| initialSlide     | -                                        |
| lazyLoad         | -                                        |
| mobileFirst      | -                                        |
| pauseOnFocus     | Pause Autoplay On Focus                  |
| pauseOnHover     | Pause Autoplay On Hover                  |
| pauseOnDotsHover | -                                        |
| respondTo        | -                                        |
| responsive       | -                                        |
| rows             | -                                        |
| slide            | -                                        |
| slidesPerRow     | -                                        |
| slidesToShow     | 展示图片个数                             |
| slidesToScroll   | 滚动图片个数                             |
| speed            | -                                        |
| swipe            | -                                        |
| swipeToSlide     | -                                        |
| touchMove        | -                                        |
| touchThreshold   | -                                        |
| useCSS           | -                                        |
| useTransform     | -                                        |
| variableWidth    | -                                        |
| vertical         | -                                        |
| verticalSwiping  | -                                        |
| rtl              | -                                        |
| waitForAnimate   | -                                        |
| zIndex           | -                                        |

## Events

| event         | more |
| ------------- | ---- |
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
| ----------------- | ---- |
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

---

## this

### initials

| key               | more                   |
| ----------------- | ---------------------- |
| animating         | -                      |
| dragging          | -                      |
| autoPlayTimer     | -                      |
| currentDirection  | -                      |
| currentLeft       | -                      |
| currentSlide      | 当前显示的图片是第几个 |
| direction         | -                      |
| $dots             | -                      |
| listWidth         | -                      |
| listHeight        | -                      |
| loadIndex         | -                      |
| $nextArrow        | -                      |
| $prevArrow        | -                      |
| scrolling         | -                      |
| slideCount        | -                      |
| slideWidth        | -                      |
| $slideTrack       | -                      |
| $slides           | -                      |
| sliding           | -                      |
| slideOffset       | -                      |
| swipeLeft         | -                      |
| swiping           | -                      |
| $list             | -                      |
| touchObject       | -                      |
| transformsEnabled | -                      |
| unslicked         | -                      |

### this

| key                | more                       |
| ------------------ | -------------------------- |
| activeBreakpoint   | -                          |
| animType           | -                          |
| animProp           | -                          |
| breakpoints        | -                          |
| breakpointSettings | -                          |
| cssTransitions     | -                          |
| focussed           | -                          |
| interrupted        | -                          |
| hidden             | -                          |
| paused             | -                          |
| positionProp       | -                          |
| respondTo          | -                          |
| rowCount           | -                          |
| shouldClick        | -                          |
| $slider            | -                          |
| $slidesCache       | -                          |
| transformType      | -                          |
| transitionType     | -                          |
| visibilityChange   | -                          |
| windowWidth        | -                          |
| windowTimer        | -                          |
| currentSlide       | 当前显示的图片是第几个     |
| options            | 设置                       |
| originalSettings   | 初始设置                   |
| instanceUid        | 实例个数                   |
| htmlExpr           | 匹配 html 标签的正则表达式 |

### this.options / this.originalSettings

| option           | more                   |
| ---------------- | ---------------------- |
| accessibility    | -                      |
| adaptiveHeight   | -                      |
| appendArrows     | -                      |
| appendDots       | -                      |
| arrows           | -                      |
| asNavFor         | -                      |
| prevArrow        | -                      |
| nextArrow        | -                      |
| autoplay         | -                      |
| autoplaySpeed    | -                      |
| centerMode       | -                      |
| centerPadding    | -                      |
| cssEase          | -                      |
| customPaging     | -                      |
| dots             | -                      |
| dotsClass        | -                      |
| draggable        | -                      |
| easing           | -                      |
| edgeFriction     | -                      |
| fade             | -                      |
| focusOnSelect    | -                      |
| focusOnChange    | -                      |
| infinite         | -                      |
| initialSlide     | 首次展示的图片是第几个 |
| lazyLoad         | -                      |
| mobileFirst      | -                      |
| pauseOnHover     | -                      |
| pauseOnFocus     | -                      |
| pauseOnDotsHover | -                      |
| respondTo        | -                      |
| responsive       | -                      |
| rows             | -                      |
| rtl              | -                      |
| slide            | -                      |
| slidesPerRow     | -                      |
| slidesToShow     | -                      |
| slidesToScroll   | -                      |
| speed            | -                      |
| swipe            | -                      |
| swipeToSlide     | -                      |
| touchMove        | -                      |
| touchThreshold   | -                      |
| useCSS           | -                      |
| useTransform     | -                      |
| variableWidth    | -                      |
| vertical         | -                      |
| verticalSwiping  | -                      |
| waitForAnimate   | -                      |
| zIndex           | -                      |

## prototype

| prototype                      | more |
| ------------------------------ | ---- |
| activateADA                    | -    |
| addSlide / slickAdd            | -    |
| animateHeight                  | -    |
| animateSlide                   | -    |
| getNavTarget                   | -    |
| asNavFor                       | -    |
| applyTransition                | -    |
| autoPlay                       | -    |
| autoPlayClear                  | -    |
| autoPlayIterator               | -    |
| buildArrows                    | -    |
| buildDots                      | -    |
| buildOut                       | -    |
| buildRows                      | -    |
| checkResponsive                | -    |
| changeSlide                    | -    |
| checkNavigable                 | -    |
| cleanUpEvents                  | -    |
| cleanUpSlideEvents             | -    |
| cleanUpRows                    | -    |
| clickHandler                   | -    |
| destroy                        | -    |
| disableTransition              | -    |
| fadeSlide                      | -    |
| fadeSlideOut                   | -    |
| filterSlides / slickFilter     | -    |
| focusHandler                   | -    |
| getCurrent / slickCurrentSlide | -    |
| getDotCount                    | -    |
| getLeft                        | -    |
| getOption / slickGetOption     | -    |
| getNavigableIndexes            | -    |
| getSlick                       | -    |
| getSlideCount                  | -    |
| goTo / slickGoTo               | -    |
| init                           | -    |
| initADA                        | -    |
| initArrowEvents                | -    |
| initDotEvents                  | -    |
| initSlideEvents                | -    |
| initializeEvents               | -    |
| initUI                         | -    |
| keyHandler                     | -    |
| lazyLoad                       | -    |
| loadSlider                     | -    |
| next / slickNext               | -    |
| orientationChange              | -    |
| pause / slickPause             | -    |
| play / slickPlay               | -    |
| postSlide                      | -    |
| prev / slickPrev               | -    |
| preventDefault                 | -    |
| progressiveLazyLoad            | -    |
| refresh                        | -    |
| registerBreakpoints            | -    |
| reinit                         | -    |
| resize                         | -    |
| removeSlide / slickRemove      | -    |
| setCSS                         | -    |
| setDimensions                  | -    |
| setFade                        | -    |
| setHeight                      | -    |
| setOption / slickSetOption     | -    |
| setPosition                    | -    |
| setProps                       | -    |
| setSlideClasses                | -    |
| setupInfinite                  | -    |
| interrupt                      | -    |
| selectHandler                  | -    |
| slideHandler                   | -    |
| startLoad                      | -    |
| swipeDirection                 | -    |
| swipeEnd                       | -    |
| swipeHandler                   | -    |
| swipeMove                      | -    |
| swipeStart                     | -    |
| unfilterSlides / slickUnfilter | -    |
| unload                         | -    |
| unslick                        | -    |
| updateArrows                   | -    |
| updateDots                     | -    |
| visibility                     | -    |
