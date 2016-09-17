/**
 * Created by Mygamesd on 2016/9/1.
 */
'use strict';

$(function () {

    // 用于创建XMLHttpRequest 对象的方法
    /*
    function GetXmlHttpObject() {
        var request = null;
        try{
            // Firefox, Opera 8.0+, Safari
            request = new XMLHttpRequest();
        }
        catch (e){
            try {
                // ie5,ie6
                request = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e){
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
    return request;
    }
    */

    // 用于创建并返回XNLHttpRequest 或者 ActiveXObject 对象的方法
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
    // onreadystatechange
    // function stateChanged(request, requestID)
    // {
    //     if (request.readyState===4 && request.readyState===200)
    //     {
    //         // somethings
    //         requestID.innerHTML = request.responseText;
    //     }else {
    //         alert("发生错误：" + request.status);
    //     }
    // }

    // JQuery 实现
    /*
    $('#search').on('click', function () {
        var request = GetXmlHttpObject();
        request.open("GET", "Php/server.php?number=" + $('#keyword').val());
        request.send();

        request.onreadystatechange = function() {
            if (request.readyState===4) {
                if (request.status===200) {
                    $('#searchResult').html(request.responseText);
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    });
    */

    // JavaScript 实现
    /*
    document.getElementById("search").onclick = function() {
        var request = GetXmlHttpObject();
        request.open("GET", "Php/server.php?number=" + document.getElementById("keyword").value);
        request.send();

        request.onreadystatechange = function() {
            if (request.readyState===4) {
                if (request.status===200) {
                    document.getElementById("searchResult").innerHTML = request.responseText;
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    };
    */


    document.getElementById('search').onclick = function () {
        var request = GetXmlHttpObject();
        // 这里查询使用Get方法,通过在URL中添加参数，来发送相应的值
        request.open("GET", "Php/server.php?number=" + document.getElementById('keyword').value,true);
        request.send();

        request.onreadystatechange = function () {
            if (request.readyState===4) {
                if (request.status===200) {
                    document.getElementById('searchResult').innerHTML = request.responseText;
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    };



    // JQuery 实现
    // $('#save').on('click', function () {
    //     var request = GetXmlHttpObject();
    //     request.open("POST", "Php/server.php");
    //     var data = "name=" + $('#staffName').val()
    //         + "&number=" + $('#staffNumber').val()
    //         + "&sex=" + $('#staffSex').val()
    //         + "&job=" + $('#staffJob').val();
    //     request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //     request.send(data);
    //     request.onreadystatechange = function() {
    //         if (request.readyState===4) {
    //             if (request.status===200) {
    //                 $('#createResult').html(request.responseText);
    //             } else {
    //                 alert("发生错误：" + request.status);
    //             }
    //         }
    //     }
    // });

    /*
    $("#search").click(function(){
        $.ajax({
            type: "GET",
            url: "Php/server.php?number=" + $("#keyword").val(),
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    $("#searchResult").html(data.msg);
                } else {
                    $("#searchResult").html("出现错误：" + data.msg);
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            }
        });
    });

    $("#save").click(function(){
        $.ajax({
            type: "POST",
            url: "Php/server.php",
            data: {
                name: $("#staffName").val(),
                number: $("#staffNumber").val(),
                sex: $("#staffSex").val(),
                job: $("#staffJob").val()
            },
            dataType: "json",
            success: function(data){
                if (data.success) {
                    $("#createResult").html(data.msg);
                } else {
                    $("#createResult").html("出现错误：" + data.msg);
                }
            },
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            }
        });
    });
    */
    // JavaScript 实现
    /*
    document.getElementById("save").onclick = function() {

        var request = new XMLHttpRequest();
        request.open("POST", "Php/server.php");

        // 测试获取元素中的value值
        document.getElementById('checkTest').innerHTML = document.getElementById("staffName").value;
        
        var data = "name=" + document.getElementById("staffName").value
            + "&number=" + document.getElementById("staffNumber").value
            + "&sex=" + document.getElementById("staffSex").value
            + "&job=" + document.getElementById("staffJob").value;
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        request.send(data);
        request.onreadystatechange = function() {
            if (request.readyState===4) {
                if (request.status===200) {
                    document.getElementById("createResult").innerHTML = request.responseText;
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    };
    */

    document.getElementById('save').onclick = function () {
        var request = GetXmlHttpObject();
        request.open('POST','Php/server.php');
        var data = 'name=' + document.getElementById('staffName').value +
                    '&number=' + document.getElementById('staffNumber').value +
                    '&sex=' + document.getElementById('staffSex').value +
                    '&job=' + document.getElementById('staffJob').value;
        // 测试获取元素中的value值
        document.getElementById('checkTest').innerHTML = document.getElementById("staffName").value;
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(data);

        request.onreadystatechange = function () {
            if (request.readyState===4) {
                if (request.status===200) {
                    document.getElementById('createResult').innerHTML = request.responseText;
                } else {
                    alert("发生错误：" + request.status);
                }
            }
        }
    }

});