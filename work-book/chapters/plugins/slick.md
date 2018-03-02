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

| option           | more                                            |
| ---------------- | ----------------------------------------------- |
| accessibility    | 使用方向按键和 tab 按键滚动                     |
| adaptiveHeight   | 根据 slide 内容自适应高度                       |
| autoplay         | 自动播放                                        |
| autoplaySpeed    | 自动播放速度                                    |
| arrows           | 是否显示前进/后退按钮                           |
| asNavFor         | 把两个 slider 关联起来                          |
| appendArrows     | 设置包裹左右箭头和 slider 列表的外层区域        |
| appendDots       | -                                               |
| prevArrow        | 前一个按钮                                      |
| nextArrow        | 后一个按钮                                      |
| centerMode       | 居中模式（当前 slider 居中展示）                |
| centerPadding    | 居中模式时 .slick-list 的左右边距（或上下边距） |
| cssEase          | -                                               |
| customPaging     | -                                               |
| dots             | -                                               |
| dotsClass        | -                                               |
| draggable        | -                                               |
| fade             | 是否渐变                                        |
| focusOnSelect    | -                                               |
| easing           | -                                               |
| edgeFriction     | -                                               |
| infinite         | 是否无限循环（默认 true）                       |
| initialSlide     | -                                               |
| lazyLoad         | -                                               |
| mobileFirst      | -                                               |
| pauseOnFocus     | Pause Autoplay On Focus                         |
| pauseOnHover     | Pause Autoplay On Hover                         |
| pauseOnDotsHover | -                                               |
| respondTo        | -                                               |
| responsive       | -                                               |
| rows             | 行数                                            |
| slidesPerRow     | 每行组合的 img 数量                             |
| slide            | element 选择，用作 slide                        |
| slidesToShow     | 展示图片个数                                    |
| slidesToScroll   | 滚动图片个数                                    |
| speed            | -                                               |
| swipe            | -                                               |
| swipeToSlide     | -                                               |
| touchMove        | -                                               |
| touchThreshold   | -                                               |
| useCSS           | -                                               |
| useTransform     | -                                               |
| variableWidth    | -                                               |
| vertical         | -                                               |
| verticalSwiping  | -                                               |
| rtl              | -                                               |
| waitForAnimate   | -                                               |
| zIndex           | -                                               |

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

| key               | more                                   |
| ----------------- | -------------------------------------- |
| animating         | 是否处于运动过程中                     |
| dragging          | -                                      |
| autoPlayTimer     | -                                      |
| currentDirection  | -                                      |
| currentLeft       | 当前滑动的距离                         |
| currentSlide      | 当前显示的图片是第几个                 |
| direction         | -                                      |
| $dots             | 焦点列表                               |
| listWidth         | -                                      |
| listHeight        | -                                      |
| loadIndex         | -                                      |
| $prevArrow        | prev 箭头                              |
| $nextArrow        | next 箭头                              |
| scrolling         | -                                      |
| slideCount        | slide 的真实数量                       |
| slideWidth        | -                                      |
| $slideTrack       | slide 的包裹元素(.slick-track)         |
| $list             | slide 的包裹元素(.slick-list)          |
| $slides           | slide 列表(默认为目标元素子元素的列表) |
| sliding           | -                                      |
| slideOffset       | -                                      |
| swipeLeft         | 滑动的距离                             |
| swiping           | -                                      |
| touchObject       | -                                      |
| transformsEnabled | -                                      |
| unslicked         | -                                      |

### this

| key                | more                                        |
| ------------------ | ------------------------------------------- |
| activeBreakpoint   | -                                           |
| animType           | anim css 前缀                               |
| transformType      | transform css 前缀                          |
| transitionType     | transition css 前缀                         |
| animProp           | -                                           |
| breakpoints        | 断点数组（number）（已经排序）              |
| breakpointSettings | 断点设置(number:setting)                    |
| cssTransitions     | 是否使用 css 过渡                           |
| focussed           | -                                           |
| interrupted        | -                                           |
| hidden             | -                                           |
| paused             | 是否暂停                                    |
| positionProp       | 是否使用垂直滑动模式（top---是；left---否） |
| respondTo          | -                                           |
| rowCount           | -                                           |
| shouldClick        | -                                           |
| $slider            | 目标元素                                    |
| $slidesCache       | -                                           |
| visibilityChange   | -                                           |
| windowWidth        | -                                           |
| windowTimer        | -                                           |
| currentSlide       | 当前显示的图片是第几个                      |
| options            | 设置                                        |
| originalSettings   | 初始设置                                    |
| instanceUid        | 实例个数                                    |
| htmlExpr           | 匹配 html 标签的正则表达式                  |

### this.options / this.originalSettings

| option           | more                                                         |
| ---------------- | ------------------------------------------------------------ |
| accessibility    | 使用方向按键和 tab 按键滚动                                  |
| adaptiveHeight   | slide 自适应高度（仅对 slidesToShow=1 vertical=false 有效 ） |
| dots             | 是否显示焦点                                                 |
| appendDots       | element 对象，焦点插入的位置                                 |
| customPaging     | function,自定义 paging 模板                                  |
| asNavFor         | -                                                            |
| arrows           | 是否有 Prev/Next 箭头                                        |
| appendArrows     | element 对象，prev、next 箭头插入的位置                      |
| prevArrow        | prevArrow html 字符串                                        |
| nextArrow        | nextArrow html 字符串                                        |
| autoplay         | -                                                            |
| autoplaySpeed    | -                                                            |
| centerMode       | 居中显示当前 slide (为 true 时 slidesToScroll 强制设置为 1)  |
| centerPadding    | -                                                            |
| slidesToShow     | slide 展示的数量                                             |
| slidesToScroll   | 滚动的 slide 的数量                                          |
| cssEase          | -                                                            |
| dotsClass        | -                                                            |
| draggable        | 是否可拖拽                                                   |
| easing           | -                                                            |
| edgeFriction     | -                                                            |
| fade             | 是否透明度渐变(为 true 时 centerMode 强制设置为 false)       |
| focusOnSelect    | -                                                            |
| focusOnChange    | -                                                            |
| infinite         | 无限循环                                                     |
| initialSlide     | 首次展示的图片是第几个                                       |
| lazyLoad         | -                                                            |
| mobileFirst      | 响应计算优先使用移动端                                       |
| pauseOnHover     | -                                                            |
| pauseOnFocus     | -                                                            |
| pauseOnDotsHover | -                                                            |
| respondTo        | -                                                            |
| responsive       | -                                                            |
| rows             | -                                                            |
| rtl              | 滚动方向是否从右到左                                         |
| slide            | -                                                            |
| slidesPerRow     | -                                                            |
| speed            | -                                                            |
| swipe            | -                                                            |
| swipeToSlide     | 可以拖拽完成滚动 (为 true 时 slidesToScroll 强制设置为 1)    |
| touchMove        | -                                                            |
| touchThreshold   | -                                                            |
| useCSS           | 是否使用 css 过渡                                            |
| useTransform     | 是否使用 css 转换                                            |
| variableWidth    | -                                                            |
| vertical         | 是否使用垂直滑动模式                                         |
| verticalSwiping  | -                                                            |
| waitForAnimate   | 当变动的时候禁止 slide 变动                                  |
| zIndex           | Set the zIndex values for slides, useful for IE9 and lower   |
|                  |

## prototype

| prototype                      | more                                                               |
| ------------------------------ | ------------------------------------------------------------------ |
| buildRows                      | 根据 options.rows、options.slidesPerRow（如果设置了）构建元素结构  |
| buildOut                       | 处理 slide 元素，使用 .slick-track 和 .slick-list 包裹 slides 元素 |
| setupInfinite                  | 无限循环为 true，复制 slide                                        |
| buildArrows                    | arrows 为 true 时，构建前进后退箭头                                |
| getDotCount                    | 获取焦点数量                                                       |
| buildDots                      | dots 为 true 时，构建焦点                                          |
| updateDots                     | 更新焦点状态                                                       |
| setSlideClasses                | 根据当前 slide 索引（currentSlide）,重置 slide class               |
| lazyLoad                       | 设置延迟加载技术                                                   |
| setProps                       | 根据 options 设置 this                                             |
| startLoad                      | 开始加载的准备工作                                                 |
| setDimensions                  | 设置元素尺寸边距等                                                 |
| setHeight                      | 设置 slide 自适应高度                                              |
| getLeft                        | 根据 slide 索引 获取对应 slide 距离左边的距离                      |
| setCSS                         | 根据像素设置 .slick-track 的偏移量                                 |
| setFade                        | 设置 slide 的位置和透明度                                          |
| setPosition                    | 设置 slide 的尺寸、位置、高度                                      |
| initUI                         | 显示箭头和焦点                                                     |
| progressiveLazyLoad            | options.lazyLoad=progressive 时的处理                              |
| loadSlider                     | slide 加载后                                                       |
| getNavigableIndexes            | 获取索引列表                                                       |
| checkNavigable                 | 根据传入的 index(索引)，判断 index 是否有效，返回适合的索引        |
| getNavTarget                   | 获得 options.asNavFor 对应的目标元素                               |
| asNavFor                       | 根据索引使 options.asNavFor 对应的 slick 对象滑动到 指定位置       |
| autoPlay                       | 自动滑动                                                           |
| initADA                        | -                                                                  |
| postSlide                      | 根据索引滑动 slide                                                 |
| animateSlide                   | -                                                                  |
| slideHandler                   | 根据索引滑动 slide                                                 |
| changeSlide                    | \_.slideHandler 方法的一层封装                                     |
| keyHandler                     | -                                                                  |
| initArrowEvents                | 绑定箭头事件                                                       |
| initDotEvents                  | -                                                                  |
| initSlideEvents                | 绑定各种事件                                                       |
| initializeEvents               | -                                                                  |
| activateADA                    | -                                                                  |
| addSlide / slickAdd            | -                                                                  |
| animateHeight                  | -                                                                  |
| applyTransition                | -                                                                  |
| autoPlayClear                  | -                                                                  |
| autoPlayIterator               | -                                                                  |
| checkResponsive                | -                                                                  |
| cleanUpEvents                  | -                                                                  |
| cleanUpSlideEvents             | -                                                                  |
| cleanUpRows                    | -                                                                  |
| clickHandler                   | -                                                                  |
| destroy                        | -                                                                  |
| disableTransition              | -                                                                  |
| fadeSlide                      | -                                                                  |
| fadeSlideOut                   | -                                                                  |
| filterSlides / slickFilter     | -                                                                  |
| focusHandler                   | -                                                                  |
| getCurrent / slickCurrentSlide | -                                                                  |
| getOption / slickGetOption     | -                                                                  |
| getSlick                       | 获取 slick 实例自身（this）                                        |
| getSlideCount                  | -                                                                  |
| goTo / slickGoTo               | -                                                                  |
| init                           | -                                                                  |
| next / slickNext               | -                                                                  |
| orientationChange              | -                                                                  |
| pause / slickPause             | -                                                                  |
| play / slickPlay               | -                                                                  |
| prev / slickPrev               | -                                                                  |
| preventDefault                 | -                                                                  |
| refresh                        | -                                                                  |
| registerBreakpoints            | -                                                                  |
| reinit                         | -                                                                  |
| resize                         | -                                                                  |
| removeSlide / slickRemove      | -                                                                  |
| setOption / slickSetOption     | -                                                                  |
| interrupt                      | -                                                                  |
| selectHandler                  | -                                                                  |
| swipeDirection                 | -                                                                  |
| swipeEnd                       | -                                                                  |
| swipeHandler                   | -                                                                  |
| swipeMove                      | -                                                                  |
| swipeStart                     | -                                                                  |
| unfilterSlides / slickUnfilter | -                                                                  |
| unload                         | -                                                                  |
| unslick                        | -                                                                  |
| updateArrows                   | -                                                                  |
| visibility                     | -                                                                  |

## element

| element | attr/data        | more             |
| ------- | ---------------- | ---------------- |
| slider  | -                | -                |
| ~       | -                | -                |
| ~       | -                | -                |
| slide   | -                | -                |
| ~       | data-slick-index | slide 的排列序号 |
| ~       | originalStyling  | slide 初始样式   |
