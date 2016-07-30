/**
 * Created by Mygamesd on 2016/7/28.
 */

$(function () {
    'use strict';

    $("#h1_button").on("click",  function () {
        $("#h1_first").html("这是我的第一个Jquery");
    });
    
    // DOM 和 JQ obj的是不同的
    // 我们要获取页面上这个id为imooc的div元素，
    // 然后给这个文本节点增加一段文字
    // ：“您好！通过慕课网学习jQuery才是最佳的途径”，并且让文字颜色变成红色
    
    //Javascript
    document.getElementById('button_js').onclick = function () {
        var p = document.getElementById('p_different_js');
        p.innerHTML = '您好！通过慕课网学习jS才是最佳的途径';
        p.className = 'p_show';
    };
    
    //JQuery
    $('#button_jq').on('click', function () {
        $('#p_different_jq').html('您好！通过慕课网学习jQuery才是最佳的途径').addClass('p_show');
    });

    //还原
    $('#restore').on('click', function () {
        $('#p_different_jq, #p_different_js').html('显示文本').removeClass('p_show');
    });

    //JQ obj转化为DOM
    $('#change_DOM').on('click', function () {
        var DOM_boj = $('#p_different_jq').get(0);
        DOM_boj.innerHTML = 'JQ对象转化为DOM';
        DOM_boj.className = 'p_show';
    });
    
    //DOM 转化为JQ obj
    $('#change_JQ').on('click', function () {
        var DOM_obj = document.getElementById('p_different_js');
        var $JQ_obj = $(DOM_obj);
        $JQ_obj.html('DOM转化为JQ obj').addClass('p_show');
    });

    // 选择器说明：
    // jQuery 元素选择器
    // jQuery 使用 CSS 选择器来选取 HTML 元素。
    // $("p") 选取 <p> 元素。
    // $("p.intro") 选取所有 class="intro" 的 <p> 元素。

    // jQuery 属性选择器
    // jQuery 使用 XPath 表达式来选择带有给定属性的元素。
    // $("[href]") 选取所有带有 href 属性的元素。
    // $("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
    // $("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
    // $("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。

    // 选择class = class_hideBtn 的元素，修改css样式
    $('#attribute').on('click', function () {
        $("[class = 'p_showHide']").addClass('p_show');
    });

    //使用hide隐藏当前元素
    $('#this_hideP').on('click', function () {
        $(this).hide();
    });

    //使用hide隐藏指定class元素
    $('#class_hideBtn').on('click', function () {
        $('.p_showHide').hide('show');
    });

    //还原
    $('#restore_hide').on('click', function () {
        $('p').show('fast').removeClass('p_show');
    });

    //eq选择器
    $('.p_showHide').eq(2).on('click', function () {
        $(this).hide(1000);
    });
    
    //内容选择器
    $('#contains_select').on('click', function () {
        // $('.p_showHide').contains('class为p_showHide的元素').hide(1000);
        $(".p_showHide:contains('class为p_showHide的元素')").hide(1000);
    });

    // :hidden选择器，不仅仅包含样式是display="none"的元素，还包括隐藏表单、visibility等等

    //
});
