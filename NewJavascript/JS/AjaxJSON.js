/**
 * Created by Mygamesd on 2016/9/14.
 */
'use strict';

$(function () {
    // 用于创建并返回XNLHttpRequest 或者 ActiveXObject 对象的方法
    function GetXmlHttpObject() {
        var request = null;
        try{
            // Chrome,Firefox,Opera 等等浏览器可以使用的方法，创建一个XMLHttpRequest对象
            request = new XMLHttpRequest();
        }
        catch (err){
            try {
                // ie5,ie6这些浏览器使用
                request = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (err){
                // 不行再使用一下方法
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return request;
    }


    document.getElementById('search_JSON').onclick = function () {
        var request = GetXmlHttpObject();
        // 这里查询使用Get方法,通过在URL中添加参数，来发送相应的值
        // request.open("GET", "Php/server.php?number=" + document.getElementById('keyword').value,true);
        request.open("GET", "Php/serverjson.php?number=" + document.getElementById('keyword_JSON').value,true);
        request.send();

        request.onreadystatechange = function () {
            if(request.readyState === 4){
                if(request.status === 200){
                    var data = JSON.parse(request.responseText);
                    if(data.success){
                        document.getElementById('searchResult_JSON').innerHTML = data.msg;
                    } else {
                        document.getElementById('searchResult_JSON').innerHTML = "出现错误: " + data.msg;
                    }
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    };
    
    
    document.getElementById('save_JSON').onclick = function () {
        var request = GetXmlHttpObject();
        request.open("POST","Php/serverjson.php");
        var data = 'name=' + document.getElementById('staffName_JSON').value +
            '&number=' + document.getElementById('staffNumber_JSON').value +
            '&sex=' + document.getElementById('staffSex_JSON').value +
            '&job=' + document.getElementById('staffJob_JSON').value;
        // 测试获取元素中的value值
        document.getElementById('checkTest').innerHTML = document.getElementById("staffName_JSON").value;
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(data);
        request.onreadystatechange = function () {
            if(request.readyState === 4){
                if(request.status === 200){
                    var data = JSON.parse(request.responseText);
                    if(data.success){
                        document.getElementById('createResult_JSON').innerHTML = data.msg;
                    } else {
                        document.getElementById('createResult_JSON').innerHTML = "出现错误: " + data.msg;
                    }
                }
            }
        }
    };

});