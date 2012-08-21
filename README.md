## What is AjaxForm ?
ajaxForm is using for form elements with AJAX feature easly.
## Example :
```html
<form action="destination.php" method="POST" class="ajax-form">
<input type="text" name="field1" />
<input type="submit" />
</form>
```

```javascript
//That's it!
$('.ajax-form').ajaxForm();
```

If you want to define any callback functions on before or/and after :
```javascript
$('.ajax-form').ajaxForm({
  beforeSend : function() {
    //write some code...
  },
  afterSend : function(data, textStatus) {
    //if textStatus is returned as 'success', returns response on data paremter from server side.
  }
});
```

##Licence 

Copyright (C) 2012 İbrahim Gündüz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

