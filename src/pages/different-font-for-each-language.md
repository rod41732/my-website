---
title: "เปลี่ยน font แยกตามภาษาแบบง่ายๆด้วย CSS"
subtitle: "ไม่ต้อมางแยก class สำหรับแต่ละภาษาอีกต่อไป"
date: "2020-05-16"
image: "doge.png"
tags: ["CSS"]
---

# ทำให้ข้อความ div/p/ etc. มี font ต่างกันไปตามภาษาด้วย CSS 

เคยอยากใช้ font ภาษาไทยแล้วไม่อยากใช้ font อังกฤษที่มากับมันเพราะมันไม่สวยหรือไม่ชอบ เช่นมันอาจจะไม่สวย
หรือด้วยเหตุผลไรก็ตามแต่ที่อยากให้ font ไทยหรืออังกฤษมันต่างกัน 555+

> เช่นเราอยากใช้ Font AAA สำหรับภาษาไทย แต่อยากใช้ Font BBB สำหรับภาษาอังกฤษ

### TLDR; define font ที่ให้มันมีผลกับแค่บางช่วงของ unicode


## การประกาศ font face ขึ้นมาใหม่ 

### ประกาศ font ไทย
- ตั้งชื่่อว่า `ThaiFont` จริงๆจะเรียกไรก็ได้ และมี space ระหว่างกลางได้ (เพราะเรามี quote แล้ว)
- ซึ่งใช้กับแค่ตัวอักษรในช่วง Unicode: `U+0E00` ถึง `U+0E7F` (ก็คือภาษาไทยแหละ)
- `src` บอกว่าจะดึง font นี้มาจากไหน ในที่นึงดึงมาแบบ relative path คือเรามี font host บน web เรา
   - ใช้ URL ของ font ก็ได้เช่น `https://fonts.gstatic.com/s/tangerine/v11/IurY6Y5j_oScZZow4VOxCZZJ.ttf`

```CSS
@font-face {
    font-family: "ThaiFont";
    unicode-range: U+0E00-0E7F;
    src: url(fonts/Krub-Light.ttf);
}
```

### ประกาศ font อังกฤษ
define ของภาษาอังกฤษบ้าง (ช่วง `U+0000` ถึง `U+007F`) ทำคล้ายๆกัน
```CSS
@font-face {
    unicode-range: U+0000-007F;
    src: url(fonts/DMMono-Medium.ttf);
    font-family: "EngFont";
}
```

### เพิ่มเติ่มเกี่ยวกับ source
หาก font ที่เราจะใช้เป็น font ที่เราเคย embed มาแล้วเช่นใช้ google fonts แบบนี้ 
`<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">`
เราสามารถอ้าง font โดยใช้ `local(font-name)` แทนได้

```CSS
@font-face {
    /* ... */
    src: local("Kanit");
}
```
ดูเพิ่มเติมไดด้ที่เว็บของ [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

## จากนั้นเอามาใช้ใน CSS
```CSS
.dynamic {
    font-family: ThaiFont, EngFont;
}
```

## และสุดท้ายคือเอาไปใช้ใน class

```HTML
<div class="dynamic">
    สวัสดี Hello ชาวโลก World !!
</div>
```

## ผลที่ได้
### นี่คือแบบที่มี font เดัียว
<div class="thai-font">
    สวัสดี Hello ชาวโลก World !!
<div>


### นี่คือแบบทีมี 2 font
<div class="dynamic">
    สวัสดี Hello ชาวโลก World !!
</div>

Footnote

