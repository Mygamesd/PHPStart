/**
 * Created by Mygamesd on 2016/9/15.
 */
$(document).ready(function () {

    $('#JQ_search').on('click', function () {
        $.ajax({
            type: "Get",
            url: "http://legeron.veryhot.tokyo/NewJavascript/Php/JQserver.php?number=" + $('#JQ_Keyword').val(),
            dataType: "json",
            success: function (data) {
                if(data.success){
                    $('#JQ_searchResult').html(data.msg);
                }else{
                    $('#JQ_searchResult').html("出现错误：" + data.msg);
                }
            },
            error: function (jqXHR) {
                alert("发生错误" + jqXHR.status);
            }
        });
    });

    $('#JQ_save').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://legeron.veryhot.tokyo/NewJavascript/Php/JQserver.php",
            dataType: "json",
            // JQuery 传递数据时使用data，会被解析成json格式的文件
            data: {
                name: $('#JQ_staffName').val(),
                number: $('#JQ_staffNumber').val(),
                sex: $('#JQ_staffSex').val(),
                job: $('#JQ_staffJob').val()
            },
            // 成功后执行success，data是后端返回的值
            success: function (data) {
                if (data.success) {
                    $("#JQ_createResult").html(data.msg);
                } else {
                    $("#JQ_createResult").html("出现错误：" + data.msg);
                }
            },
            //
            error: function(jqXHR){
                alert("发生错误：" + jqXHR.status);
            }
        });
        $('#checkTest').html($('#JQ_staffName').val());
    });

});