#removeInlineStyle
This plugin removes only the specified style from the inline style attribute on selected elements.

```html
<p style="font-weight:bold; color:red; text-decoration:line-through">Bold red linethrough</p>
```

```javascript
$("p").removeInlineStyle('color');
```

Becomes:
```html
<p style="font-weight:bold; text-decoration:line-through">Bold red linethrough</p>
```