;(function($){
    $.AjaxForm = function(object, options) {
      this.object = object;
      this.options = options;
      this._bindEvent();
    }


    $.AjaxForm.defaults = {
      method  : 'POST'
    }

    $.AjaxForm.prototype = {
      _getForm : function() {
        return $(this.object);
      },

      runCallback : function(owner, key, callback, parameters) {
        if( typeof(callback) != 'undefined' ) {
          owner[key] = callback;
          owner[key].apply(owner, parameters);
        }
      },

      _activateControls : function(status) {
        this._getForm().find('input,select,button').attr('disabled', !status);
      },

      _bindEvent : function() {
        var obj = this;
        $(this._getForm()).unbind('submit').submit(function(event) {
          event.preventDefault();
          var url = this.action;
          var data = $(this).serialize();
          var method = (this.method) ? this.method : obj.options.method;
          $.ajax({
            url     : url,
            data    : data,
            type    : method,
            beforeSend : function() {
              obj._activateControls(false);
              var form = $(obj._getForm()).get(0);
              obj.runCallback(form, 'ajaxform_beforesend_callback', obj.options.beforeSend)
            },
            complete : function(xhrObject, textStatus) {
              obj._activateControls(true);
              if(typeof(obj.options.afterSend) != 'undefined') {
                var status = null;
                var data = null;
                if (xhrObject.status == 200) {
                  status = 'success';
                  data = xhrObject.responseText;
                } else {
                  status = 'fail';
                }

                var form = $(obj._getForm()).get(0);
                console.log(form);
                obj.runCallback(form, 'ajaxform_aftersend_callback', obj.options.afterSend, [data, status])
              }
            }
          });
        });
      }
    }

    $.fn.extend({
      ajaxForm : function(options) {
        var opt = $.extend({}, $.AjaxForm.defaults, options);
        return this.each(function() {
          new $.AjaxForm(this, opt);
        });
      }
    });
})(jQuery)
