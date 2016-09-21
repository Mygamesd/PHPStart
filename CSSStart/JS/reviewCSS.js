/**
 * Created by Mygamesd on 2016/9/21.
 */
'use strict';
$(document).ready(function () {

    var $button = $('button');
    //noinspection JSUnresolvedFunction
    $button.mouseover(function () {
        $(this).toggleClass('button_show');
    });

    //noinspection JSUnresolvedFunction
    $button.mouseout(function () {
        $(this).toggleClass('button_show');
    });
    
    
    $('#relative_button').on('click', function () {

        $(".div_relative").fadeToggle('3000', function () {
            var check = $(this).css('display');
            if(check == "none"){
                // $('#out').html(check);
                $('#relative_button').text('点击显示relative_div');
            }else{
                // $('#out').html(check);
                $('#relative_button').text('点击隐藏relative_div');
            }
        });
    });


    $('#Containing_button').on('click', function () {

        $(".Containing_Block").fadeToggle('3000', function () {
            var check = $(this).css('display');
            if (check == "none") {
                // $('#out').html(check);
                $('#Containing_button').text('点击显示containing_block');
            } else {
                // $('#out').html(check);
                $('#Containing_button').text('点击隐藏containing_block');
            }
        });
    });
});
