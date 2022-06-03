jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').delay(1500).animate({
      width:jQuery(this).attr('data-percentage')
    },3500);
    
    jQuery(this).find('.progress-number-mark').delay(1500).animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 3500,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});