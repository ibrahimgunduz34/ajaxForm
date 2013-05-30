(function($){
    $.AjaxForm = function(object, options) {
      this.object = object;
      this.options = options;
      this.request = {}
      this.overrideFormSubmit();
    }

    $.AjaxForm.defaults = {
      method  : 'POST'
    }

    $.AjaxForm.prototype = {
        getRequest : function() {
            return this.request;
        },

        getCompleteCallback : function(xhrObject, textStatus) {
            var isSuccess = xhrObject.status == 200;
            var response = xhrObject.responseText;
            if(typeof(this.options.result) != 'undefined') {
                callback = this.options.afterSend;
                callback.apply(this.object, [isSuccess, response]);
            }
        },

        getFormData : function() {
            if(this.object.enctype=='multipart/form-data') {
                var formData = new FormData(this.object);
                return formData;
            } else {
                return $(this.object).serialize();
            }
        },

        decorateRequest : function(request) {
            var obj = this;
            var form = this.object;
            var options = this.options;
            var request = request || this.getRequest();
            request.url = form.action;
            request.type = form.method;
            request.contentType = form.enctype!='multipart/form-data';
            request.processData = form.enctype!='multipart/form-data';
            request.data = this.getFormData();
            request.dataType = ( typeof (options.dataType) != 'undefined' && 
                                options.dataType != null) ?
                                options.dataType : 'html';
            request.beforeSend = ( typeof(options.beforeSend) != 'undefined' && 
                                    options.beforeSend != null ) ? 
                                    options.beforeSend : null;
            request.complete = function(xhrObject, textStatus) {
                obj.getCompleteCallback.apply(obj, [xhrObject, textStatus])
            }
        },

        sendRequest : function() {
            var request = this.getRequest();
            this.decorateRequest(request);
            $.ajax(request);
        },

        overrideFormSubmit : function() {
            var obj = this;
            $(this.object).submit(function(){
                obj.sendRequest();
                return false;
            })
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
})(window.jQuery);