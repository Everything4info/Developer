
 !function(h){h(".ripple-effect").click(function(t){var e=h(this);0==e.find(".ink").length&&e.append("<span class='ink'></span>");var i=e.find(".ink");if(i.removeClass("animate"),!i.height()&&!i.width()){var a=Math.max(e.outerWidth(),e.outerHeight());i.css({height:a,width:a})}var n=t.pageX-e.offset().left-i.width()/2,s=t.pageY-e.offset().top-i.height()/2;i.css({top:s+"px",left:n+"px"}).addClass("animate")})}(jQuery); 
 
 