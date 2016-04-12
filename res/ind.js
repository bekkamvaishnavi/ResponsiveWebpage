$(document).ready(function(){
        $("#sub-story3").hide();
        function check(story){
          $(story).hide();
          for(var i=1;i<=4;i++)
            {
              var j="#sub-story"+i;
              if($(j).css('display') == 'none'){
             if(j!=story){
              $(j).show();
               if(story=="#sub-story4")
                 {
                   $(j).css('margin-right',0);
                 }
               break;
             }         
            }
            }
        }
    $('.sub-story').on('click', function() { 
      check("#"+($(this).attr("id")));
});

});