$(document).ready(function() {
    
    $('.ajax-form').ajaxForm({

      beforeSend : function() {
        $('#ajaxResult').html('Please wait...');
      },

      afterSend : function(data, textStatus) {
        if(textStatus == 'success') {
          $('#ajaxResult').html(data);
        } else {
          $('#ajaxResult').html('Error occurred while sending data.')
        }
      }

    });

});
