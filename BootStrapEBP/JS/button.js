/**
 * Created by Mygamesd on 2016/10/10.
 */
'use strict';
(function ($) {
    var button = {
        rightDo: function (obj, input_IN) {
            $(obj).on('click', function () {
                var number = parseInt($(input_IN).val());
                if(number < 0 || isNaN(number) ){
                    number = 0;
                }
                else {
                    number += 1;
                }

                $(input_IN).val(number);
            })
        },

        leftDo: function (obj, input_IN) {
            $(obj).on('click', function () {
                var number = parseInt($(input_IN).val());
                if(number <= 0 || isNaN(number) ){
                    number = 0;
                }
                else{
                    number -= 1;
                }
                $(input_IN).val(number);
            })
        },
        addCookie : function (name,name_value,price,price_value1,num,num_value) {
            var Days = 1; //此 cookie 将被保存 30 天
            var exp　= new Date();
            exp.setTime(exp.getTime() +Days*24*60*60*1000);
            document.cookie = name +"="+ encodeURIComponent(name_value) + ";expires=" + exp.toGMTString();
            document.cookie = price +"="+ encodeURI(price_value1) + ";expires=" + exp.toGMTString();
            document.cookie = num +"="+ encodeURIComponent(num_value) + ";expires=" + exp.toGMTString();
            location.href = "text.html";//接收页面.
        }


    };

    // $.fn.integer=function(){
    //     this.bind("keypress",function(e){
    //         var code=(e.keyCode?e.keyCode:e.which); //兼容火狐 IE
    //         //火狐下不能使用退格键
    //         if(!$.browser.msie&&(e.keyCode==0x8)){
    //             return ;
    //         }
    //         return code >= 48 && code<= 57;
    //     });
    //     this.bind("paste",function(){
    //         return false;
    //     });
    //     this.bind("keyup",function(){
    //         if(/(^0+)/.test(this.value)) {
    //             this.value = this.value.replace(/^0*/,'');
    //         }
    //     });
    // };



    $('#sub').on('click', function () {
        button.addCookie('FoodName','甜酸蔬菜奶酪','Price',30,'Num',$('.Num').val());
    });


    button.rightDo($('.btn_right'),$('.Num'));
    button.leftDo($('.btn_left'),$('.Num'));
})(jQuery);