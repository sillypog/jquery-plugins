#loadSVG
For use with Modernizr.
This plugin edits the img src attribute of specified elements to load SVG images if Modernizr has determined the broswer supports them. If not, the fallback type will be used. No unnecessary server calls are required.

To use loadSVG, do not specify src attributes for img tags. Instead, add a 'svg-src' attribute containing the name of the image without an extension. Select all of these images by their classname and call loadSVG to add the path to the correct filetype. The svg-src attributes are removed.

If SVG is not supported, a fallback format is used. The default is 'png' but alternatives can be specified as the first argument to the function.

It is assumed that images are organised in folders based on the format, eg 'svg/image.svg'. If this is not the case, the path can be specified in the second argument to the function.

```html
<img class="dynamicImage" svg-src="sillypog" />
<img class="dynamicImage2" svg-src="sillypog" />
```

```javascript
$(".dynamicImage).loadSVG();
$(".dynamicImage2).loadSVG('jpg','');
```

Becomes:
```html
<img class="dynamicImage src="svg/sillypog.svg" />
<img class="dynamicImage src="sillypog.svg" /> <!-- Or "sillypog.jpg" if SVG not supported -->
```