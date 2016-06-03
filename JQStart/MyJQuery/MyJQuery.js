/**
 * Created by Mygamesd on 2016/6/3.
 */
"use strict";
function use_selector_eq() {
    var index = 1;
    var a=$('#olId').find('li');
    a.eq(index).css('color','#60F');
    a.last().css('color','#60F');
}

function use_selector_has() {
    $('#sec_olId').find('li').has('p').css('background-color','#FF00FF');
}

function use_selector_attribute() {
    // $("#sec_olId li label[title='Myselector']").css('background-color','#60F');
    $('#sec_olId').find('li').find("label[title='Myselector']").css('background-color','#60F');
}
