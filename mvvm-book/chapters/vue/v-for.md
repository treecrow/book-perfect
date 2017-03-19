# v-for

## 遍历对象
```html
<li v-for="value in object">
    {{ value }}
</li>
<div v-for="(value, key) in object">
  {{ key }} : {{ value }}
</div>
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }} : {{ value }}
</div>
```

## 基于id排序
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
