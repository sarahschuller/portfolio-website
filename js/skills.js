jQuery(document).ready(function(){
  $(window).on("scroll", function() {
    if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },5500);
    
        jQuery(this).find('.progress-number-mark').animate(
          {left:jQuery(this).attr('data-percentage')},
          {
          duration: 5500,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find('.percent').html(data + '%');
          }
        });  
      });
    }
  });
});