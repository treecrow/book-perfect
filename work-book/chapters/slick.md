# [slick](http://kenwheeler.github.io/slick/)

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

## settings

| option           | more                           |
|------------------|--------------------------------|
| accessibility    | -                              |
| adaptiveHeight   | -                              |
| autoplay         | Enables Autoplay               |
| autoplaySpeed    | Autoplay Speed in milliseconds |
| arrows           | Prev/Next Arrows               |
| asNavFor         | -                              |
| appendArrows     | -                              |
| appendDots       | -                              |
| prevArrow        | -                              |
| nextArrow        | -                              |
| centerMode       | -                              |
| centerPadding    | -                              |
| cssEase          | -                              |
| customPaging     | -                              |
| dots             | -                              |
| dotsClass        | -                              |
| draggable        | -                              |
| fade             | -                              |
| focusOnSelect    | -                              |
| easing           | -                              |
| edgeFriction     | -                              |
| infinite         | -                              |
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
