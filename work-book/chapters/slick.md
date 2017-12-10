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