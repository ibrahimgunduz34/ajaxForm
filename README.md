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
