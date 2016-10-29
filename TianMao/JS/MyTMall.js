/**
 * Created by Mygamesd on 2016/10/19.
 */
// function showBg() {
//     var bh = $("body").height();
//     var bw = $("body").width();
//     $(".zhezhao").css({
//         height: bh,
//         width: bw,
//         display: "block"
//     });
//     $("#dialog").show();
// }
// //关闭灰色 jQuery 遮罩
// function closeBg() {
//     $("#fullbg,#dialog").hide();
// }

$(document).ready(function () {

    $('#logo_click').on('tap', function () {
        // alert('success!');
        $(".zhezhao").css({
        display: "block"
        });

        $('#Classification').show(200);
        $('html,body').addClass('ovrHidden');
    });

    $('#Classification_click').on('tap', function () {
        $(".zhezhao").css({
            display: "none"
        });

        $('#Classification').hide(200);
        $('html,body').removeClass('ovrHidden');
    });

    $('#CI_tab').find('li').on('tap', function () {
        var index = $(this).index();
        $(this).addClass('CI_active').siblings().removeClass('CI_active');
        $('#CI_cont').find('div').eq(index).show().siblings().hide();
    });

    
});


