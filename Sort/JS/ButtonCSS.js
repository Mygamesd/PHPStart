/**
 * Created by Mygamesd on 2016/9/23.
 */
'use strict';
define(["jquery"], function ($) {

    var $Sort_Btn = $('#Sort_Btn');
    //noinspection JSUnresolvedFunction
    $Sort_Btn.mouseover(function () {
        $(this).toggleClass('Button_show');
    });

    //noinspection JSUnresolvedFunction
    $Sort_Btn.mouseout(function () {
        $(this).toggleClass('Button_show');
    });

    var $wrap_menu = $('.warp_menu');
    //noinspection JSUnresolvedFunction
    $wrap_menu.find('a').on('click',function () {
        $wrap_menu.find('a').removeClass('menu_show');
        $(this).addClass('menu_show');
        $wrap_menu.find('span').removeClass('span_show');
        $(this).find('span').addClass('span_show');

    });

});
