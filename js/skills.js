jQuery(document).ready(function(){
  
/* Delay added to function.

Delay should help so that when a viewer first clicks on the About Me page, a 1.5 second delay begins to allow time to start skimming and scrolling down the page. Delay is not so long as to be extremely noticeable if user refreshes while at the bottom of the page.  

*/
  
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