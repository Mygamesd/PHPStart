/**
 * Created by Mygamesd on 2016/10/11.
 */
'use strict';
(function ($) {
    
    $.fn.jqList = function (child) {
        var obj = {
            child: child,
            activeStyle: function (dom) {
                $(dom).find(child).on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                })
            }
        };

        obj.activeStyle(this);
    };



    $.fn.jqAdd = function (father) {
        var obj = {
            checkCookie: function (name) {
                if(document.cookie.length > 0){
                    var cookieCheck = document.cookie.indexOf(name + "=");
                    if(cookieCheck != -1){
                        return true;
                    }
                }
                else return null;
            },
            setCookie: function (AddName,name_value,AddPrice,price_Val,AddIndex,index) {
                var Days = 1; //此 cookie 将被保存 1 天
                var exp　= new Date();
                exp.setTime(exp.getTime() +Days*24*60*60*1000);
                document.cookie = AddName +"="+ encodeURIComponent(name_value) + ";expires=" + exp.toGMTString();
                document.cookie = AddPrice +"="+ encodeURIComponent(price_Val) + ";expires=" + exp.toGMTString();
                document.cookie = AddIndex +"="+ encodeURIComponent(index) + ";expires=" + exp.toGMTString();
            },
            getCookie: function (name) {
                var arr =document.cookie.match(new RegExp("(^|)"+name+"=([^;]*)(;|$)"));
                if(arr !=null) return decodeURIComponent(arr[2]); return null;
            },
            addDom: function (TheFather,addname,addprice,index) {

                var DOM = $('<li class="col-xs-12 col-sm-6 clearfix">'
                    +'<a href="FirstProduct.html">'
                    +'<img class="col-md-5" />'
                    +'<div class="col-md-5">'
                    +'<span class="Product_header Product"></span>'
                    +'<span class="Product_footer Product">菠萝, 碎牛肉, 起司.</span>'
                    +'</div> <span class="col-md-2 number"></span> ' +
                    '</a>' +
                    ' </li>');
                $(DOM).find('.Product_header').eq(0).text(addname);
                $(DOM).find('.number').eq(0).text(addprice);
                $(DOM).attr('arrid',index);
                if(parseInt(index) < 2){
                    var imgSrc = 'image/img' + (parseInt(index) + 1) +'.png';
                }else if(parseInt(index) >= 3){
                    var imgSrc = 'image/img' + (parseInt(index)) +'.png';
                }

                $(DOM).find('img').eq(0).attr('src',imgSrc);
                $(TheFather).append($(DOM));

            }
        };

        if(obj.checkCookie("Food_Name") != null && obj.checkCookie("Food_Pri") != null){
            var add_FoodName = obj.getCookie("Food_Name");
            var add_FoodPrice = obj.getCookie("Food_Pri");
            var add_Foodindex = obj.getCookie("Add_Index");
            obj.addDom(father,add_FoodName,add_FoodPrice,add_Foodindex);
        }

        $(this).find('li').on('click', function () {
            var index = $(this).index();
            var name = $(this).find('.Featured_header').text();
            var price = $(this).find('.number').text();
            // if(obj.checkCookie("Food_Name") == null && obj.checkCookie("Food_Price") == null){
            //     obj.setCookie("Food_Name",name,"Food_Price",price);
            // }
            obj.setCookie("Food_Name",name,"Food_Pri",price,"Add_Index",index);
            var addname = obj.getCookie("Food_Name");
            var addprice = obj.getCookie("Food_Pri");
            obj.addDom(father,addname,addprice,index);
        })
    }

    

})(jQuery);