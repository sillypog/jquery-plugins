#templateLoader
For use with the jquery.tmpl plugin.
This plugin simplifies the compilation of jQuery templates from markup. Templates can be defined as id-labelled script tags and included in the head of index.html. These will be removed from the DOM during compilation. 

To use templateLoader, an array of template ids is passed into the loader for compilation, along with a namespace object to allow easy referencing of the compiled templates.

For example, to compile the template defined in a script with the id 'my_template' and store it in an object named *templates*:

```javascript
var templates = {};
$.templateLoader (['my_template'], templates);
```

The template can then be referenced by its uppercase name.

```javascript
$.tmpl(templates.MY_TEMPLATE).appendTo($('body'));
```

Although the templateLoader plugin has a define statement for use with require.js, it is dependent on the jquery.tmpl plugin which is not an AMD module.
