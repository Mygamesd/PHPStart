/**
 * Created by Mygamesd on 2016/10/12.
 */
// function getCookie(name)
// {
//     var arr =document.cookie.match(new RegExp("(^|)"+name+"=([^;]*)(;|$)"));
//     if(arr !=null) return decodeURIComponent(arr[2]); return null;
// }
'use strict';
(function ($) {

    // AJAX
    function GetXmlHttpObject() {
        var request = null;
        try {
            // Chrome,Firefox,Opera 等等浏览器可以使用的方法，创建一个XMLHttpRequest对象
            request = new XMLHttpRequest();
        }
        catch (err){
            try{
                // ie5,ie6这些浏览器使用
                request = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (err){
                // 不行再使用一下方法
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        // 返回一个XMLHttpRequest对象或者ActiveXObject对象，用于与后台交互
        return request;
    }

        var that = this;
        var carObj = {
            Product_cookies: document.cookie,
            checkCookie: function (name) {
                if(document.cookie.length > 0){
                    //  var cookieCheck = document.cookie.indexOf(name + "=");
                    // if(cookieCheck != -1){
                    //     return true;
                    // }
                    return true;
                }
                else return null;
            },
            getCookie: function (name) {
                var arr =document.cookie.match(new RegExp("(^|)"+name+"=([^;]*)(;|$)"));
                if(arr !=null) return decodeURIComponent(arr[2]); return null;
            },
            addElementImg: function (father) {
                var img = document.createElement("img");
                img.src = "image/img1.png";
                // img.class = "col-xs-12 col-md-4 Product_img";
                img.className = "Product_img";
                father.appendChild(img);
            },
            addElementPrice: function (father,price) {
                var price_div = document.createElement('div');
                var price_span = document.createElement('span');
                price_div.className = "col-xs-12 col-md-4 Product_Price";
                price_span.innerHTML = '$' + price;
                price_div.innerHTML = "单价: " ;
                price_div.appendChild(price_span);
                father.appendChild(price_div);
            },

            addElementNum: function (father,num) {
                var num_div = document.createElement('div');
                var num_span = document.createElement('span');
                num_div.className = "col-xs-12 col-md-4 Product_Price";
                num_span.innerHTML = num;
                num_div.innerHTML = "数量: ";
                num_div.appendChild(num_span);
                father.appendChild(num_div);
            }
        };

        if(carObj.checkCookie("FoodName") != null && carObj.checkCookie("Price") != null && carObj.checkCookie("Num") != null){
            var foodName = carObj.getCookie("FoodName");
            var price = carObj.getCookie("Price");
            var num = carObj.getCookie("Num");
            // alert("Success!: " + foodName);
            
            var img_father = document.getElementById('img_div');
            var father = document.getElementById('Pro_list');
            
            carObj.addElementImg(img_father);
            carObj.addElementPrice(father,price);
            carObj.addElementNum(father,num);
            
            
            var sum = parseInt(price) * parseInt(num);
            document.getElementById('tot_price').innerHTML = sum;
            
            document.getElementById('send').onclick = function () {
                var request = GetXmlHttpObject();
                request.open('POST','PHP/sever.php');
                var data = 'FoodName=' + foodName +
                        '&Price=' + price + 
                        '&Num=' + num + 
                        '&Sum=' + sum;

                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.send(data);
                request.onreadystatechange = function () {
                    if(request.readyState === 4){
                        if(request.status === 200){
                            alert(request.responseText);
                        }else {
                            alert("发生错误：" + request.status);
                        }
                    }
                }
            }
            
        }


   

})(jQuery);