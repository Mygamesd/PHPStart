/**
 * Created by Mygamesd on 2016/10/31.
 */
$(document).ready(function () {

    $.fn.jqList = function (child) {
        var Mytab = new Swiper('.wrap_main',{noSwiping : true});
        var index;
        var obj = {
            child: child,
            activeStyle: function (dom) {
                $(dom).find(child).on("tap", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    index = $(this).index();
                    Mytab.slideTo(index, 1000, false);
                })
            }
        };

        obj.activeStyle(this);

    };

    $.fn.jqAnimate = function () {
        
    };

    
});