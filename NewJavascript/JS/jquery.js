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

    // .removeClass( [className ] )：每个匹配元素移除的一个或多个用空格隔开的样式名
    // .removeClass( function(index, class) ) ： 一个函数，返回一个或多个将要被移除的样式名
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

    // .addClass()方法不会替换一个样式类名。它只是简单的添加一个样式类名到元素上
    // .addClass( className ) : 为每个匹配元素所要增加的一个或多个样式名
    // .addClass( function(index, currentClass) ) : 这个函数返回一个或更多用空格隔开的要增加的样式名
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

    // $(selector).toggle(speed,callback);
    // toggle() 显示被隐藏的元素，并隐藏已显示的元素
    // 可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是 toggle() 方法完成后所执行的函数名称。


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

    //Javascript 面向对象编程
    $('#cat_up').on('click', function () {
        var name = $('#cat_name').val();
        var color = $('#cat_color').val();
        function Cat(name, color) {
            this.name = name;
            this.color = color;
        }

        Cat.prototype.type = "猫科动物";
        Cat.prototype.eat = function(){alert("吃老鼠")};

        var cat = new Cat(name, color);
        $('#cat_information').html('猫名：' + cat.name +
                                    '颜色： ' + cat.color +
                                    '种类： ' + cat.type);
        cat.eat();
    });

    var $input_id = $('#attr_from');

    $input_id.find('.input_class').eq(0).on('click', function () {
        // 使用 attr( attributeName, value ) 设置 value 的值
        $(this).attr('value','使用 attr( attributeName, value ) 设置 value 的值');
    });

    $input_id.find('input').eq(1).on('click', function () {
        // 获取value的值
        $(this).attr(value);
    });

    $input_id.find('input').eq(2).on('click', function () {
        //在attr()中使用function时，会带有两个参数，（元素下标Index， function前面的元素的值value）
        //元素下标用不用得上也要加上
        $(this).attr('value', function (i, val) {
            return '通过function设置' + val;
        });
    });

    $input_id.find('input').eq(3).on('click', function () {
        // 删除value值
        $(this).removeAttr('value');
    });

    // html 和 text()
    // .html处理的是元素内容，.text处理的是文本内容

    // html()获取值，html(value)，替换为值value
    // .html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数
    $('#html_btn').on('click', function () {
        var $html_id = $('#html_h1');
        var h1_value = $html_id.find('+ h2').html();
        h1_value += 'html';
        $html_id.html(h1_value);
    });

    //text()
    // .text( function(index, oldtext) ) 用来返回设置文本内容的一个函数
    // index选中的元素下标，oldtest：原本的内容
    
    $('#text_btn').on('click', function () {
        var $text_id = $('#html_h1');
        var h1_value = $text_id.find('+ h2').text();
        h1_value += 'text';
        $text_id.text(h1_value);
    });

    //两者区别：.html与.text的方法操作是一样，只是在具体针对处理对象不同
    // .html处理的是元素内容，.text处理的是文本内容
    // .html只能使用在HTML文档中，.text 在XML 和 HTML 文档中都能使用
    // 如果处理的对象只有一个子文本节点，那么html处理的结果与text是一样的
    // 火狐不支持innerText属性，用了类似的textContent属性，.text()方法综合了2个属性的支持，所以可以兼容所有浏览器
    
    $('#diff_HtmlText').on('click', function () {
        var $div_id = $('#html_div');
        // .html()是整个html文档结构
        $div_id.find('p').eq(1).text($div_id.find('p').eq(0).html());
        // .text()是文本内容的合集
        $div_id.find('p').eq(2).text($div_id.find('p').eq(0).text());
    });

    //还原
    $('#restore_html').on('click', function () {
        var $div_id = $('#html_div');
        $div_id.find('h1').html('显示文本');
        $div_id.find('p').eq(1).html('html输出div内容');
        $div_id.find('p').eq(2).html('text输出div内容');
    });

    // .val事件
    // Query中有一个.val()方法主要是用于处理表单元素的值，比如 input, select 和 textarea。
    // val()无参数，获取匹配的元素集合中第一个元素的当前值
    // .val( value )，设置匹配的元素集合中每个元素的值
    // .val( function ) ，一个用来返回设置值的函数
    // 通过.val()处理select元素， 当没有选择项被选中，它返回null
    // .val()方法多用来设置表单的字段的值
    // 如果select元素有multiple（多选）属性，并且至少一个选择项被选中，
    // .val()方法返回一个数组，这个数组包含每个选中选择项的值

    $('#single_btn').on('click', function () {
        $('#single_out').html($('#single').val());
    });

    $('#multiple_btn').on('click', function () {
        $('#single_out').html($('#multiple').val());
    });

    $('#changeInp_btn').on('click', function () {
        // $('#multiple').find('+ .input_class').eq(0).val('修改表单字段');
        $('#input_val').val('修改表单字段');
    });

    // .html(),.text()和.val()的差异总结：

    // .html(),.text(),.val()三种方法都是用来读取选定元素的内容；只不过.html()是用来读取元素的html内容（包括html标签），
    // .text()用来读取元素的纯文本内容，包括其后代元素，.val()是用来读取表单元素的"value"值。
    // 其中.html()和.text()方法不能使用在表单元素上,而.val()只能使用在表单元素上；
    // 另外.html()方法使用在多个元素上时，只读取第一个元素；
    // .val()方法和.html()相同，如果其应用在多个元素上时，只能读取第一个表单元素的"value"值，
    // 但是.text()和他们不一样，如果.text()应用在多个元素上时，将会读取所有选中元素的文本内容。
    // .html(htmlString),.text(textString)和.val(value)三种方法都是用来替换选中元素的内容，
    // 如果三个方法同时运用在多个元素上时，那么将会替换所有选中元素的内容。
    // .html(),.text(),.val()都可以使用回调函数的返回值来动态的改变多个元素的内容。


    // .toggleClass( )方法：在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。
    // 即：如果存在（不存在）就删除（添加）一个类
    $('#toggle_class').find('+ button').on('click', function () {
        $('#toggle_class').toggleClass('p_show');
    });

    // .css( propertyName ) ：获取匹配元素集合中的第一个元素的样式属性的计算值
    // .css( propertyNames )：传递一组数组，返回一个对象结果
    $('.div_css + button').on('click', function () {
        var style = prompt('请输入你想查询的值');
        // $('.div_css').find('p').eq(0).html($('.div_css').css(style));
        var return_value = $(".div_css").css(style);
        if(return_value){
            $('.div_css').find('p').eq(0).html(return_value);
        }else{
            $('.div_css').find('p').eq(0).html('输入有误！');
        }
    });


    // .css(propertyName, value )：设置CSS
    // .css( propertyName, function )：可以传入一个回调函数，返回取到对应的值进行处理
    // .css( properties )：可以传一个对象，同时设置多个样式
    $('#changCss_btn').on('click', function () {
        $(".div_css").css("width",function(index,value){
            //value带单位，先分解
            value = value.split('px');
            //返回一个新的值，在原有的值上，增加50px
            return (Number(value[0]) + 50) + value[1];
        });
    });

    // 浏览器属性获取方式不同，在获取某些值的时候都jQuery采用统一的处理，比如颜色采用RBG，尺寸采用px
    // .css()方法支持驼峰写法与大小写混搭的写法，内部做了容错的处理
    // 当一个数只被作为值（value）的时候， jQuery会将其转换为一个字符串，并添在字符串的结尾处添加px，
    // 例如 .css("width",50}) 与 .css("width","50px"})一样

    // 淡入淡出 jQuery Fading 方法

    // 淡出 fadeout()
    // $(selector).fadeOut(speed,callback);
    //可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是 fading 完成后所执行的函数名称。

    var $fading_id = $('#fading_id');
    $fading_id.find('button').eq(0).on('click', function () {
        $fading_id.find('div').eq(0).fadeOut();
        $fading_id.find('div').eq(1).fadeOut('slow');
        $fading_id.find('div').eq(2).fadeOut(2000);
    });

    // 淡入 fadeIn()
    // $(selector).fadeIn(speed,callback);
    // 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是 fading 完成后所执行的函数名称。

    $fading_id.find('button').eq(1).on('click', function () {
        $fading_id.find('div').eq(0).fadeIn();
        $fading_id.find('div').eq(1).fadeIn('slow');
        $fading_id.find('div').eq(2).fadeIn(2000);
    });

    // jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。
    // 如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
    // 如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

    $fading_id.find('button').eq(2).on('click', function () {
        $fading_id.find('div').eq(0).fadeToggle();
        $fading_id.find('div').eq(1).fadeToggle('slow');
        $fading_id.find('div').eq(2).fadeToggle(2000);
    });

    // jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。
    // $(selector).fadeTo(speed,opacity,callback);
    //  必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
    // 可选的 callback 参数是该函数完成后所执行的函数名称。

    $fading_id.find('button').eq(3).on('click', function () {
        $fading_id.find('div').eq(0).fadeTo('slow', 0.15);
        $fading_id.find('div').eq(1).fadeTo('slow', 0.4);
        $fading_id.find('div').eq(2).fadeTo(2000, 0.7);
    });

    // jQuery 滑动方法

    // jQuery slideDown() 方法用于向下滑动元素。
    // $(selector).slideDown(speed,callback);
    // 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是滑动完成后所执行的函数名称。
    $fading_id.find('button').eq(4).on('click', function () {
        $fading_id.find('div').eq(0).slideDown();
        $fading_id.find('div').eq(1).slideDown('slow');
        $fading_id.find('div').eq(2).slideDown(2000);
    });

    // jQuery slideUp() 方法用于向上滑动元素。
    // $(selector).slideUp(speed,callback);
    // 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是滑动完成后所执行的函数名称。
    $fading_id.find('button').eq(5).on('click', function () {
        $fading_id.find('div').eq(0).slideUp();
        $fading_id.find('div').eq(1).slideUp('slow');
        $fading_id.find('div').eq(2).slideUp(2000);
    });

    // Query slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。
    // 如果元素向下滑动，则 slideToggle() 可向上滑动它们。
    // 如果元素向上滑动，则 slideToggle() 可向下滑动它们。
    // $(selector).slideToggle(speed,callback);
    // 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是滑动完成后所执行的函数名称。

    $fading_id.find('button').eq(6).on('click', function () {
        $fading_id.find('div').eq(0).slideToggle();
        $fading_id.find('div').eq(1).slideToggle('slow');
        $fading_id.find('div').eq(2).slideToggle(2000, function () {
            alert('finish!');
        });
    });


    // jQuery animate() 方法用于创建自定义动画。
    // $(selector).animate({params},speed,callback);
    // 必需的 params 参数定义形成动画的 CSS 属性。
    // 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    // 可选的 callback 参数是动画完成后所执行的函数名称。

    var $animate_id = $('#animate_id');

    // 提示：可以用 animate() 方法来操作所有 CSS 属性吗？
    // 是的，几乎可以！不过，需要记住一件重要的事情：当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，
    // 比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
    // 同时，色彩动画并不包含在核心 jQuery 库中。
    // 如果需要生成颜色动画，您需要从 jQuery.com 下载 Color Animations 插件。
    $animate_id.find('button').eq(0).on('click', function () {
        $animate_id.find('div').eq(0).animate({
            left:'250px',
            opacity:'0.5',
            // 也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=：
            // height:'+=150px'
            // width:'+=150px'
            // 您甚至可以把属性的动画值设置为 "show"、"hide" 或 "toggle"：
            // height: 'toggle';
            height:'150px',
            width:'150px'
        });
    });

    // 还原
    $animate_id.find('button').eq(1).on('click', function () {
        $animate_id.find('div').eq(0).animate({
            left:'0px',
            opacity:'1',
            height:'80px',
            width:'80px'
        });
    });

    // 队列效果
    $animate_id.find('button').eq(2).on('click', function () {
        $animate_id.find('div').animate({height:'300px',opacity:'0.4'},"slow");
        $animate_id.find('div').animate({width:'300px',opacity:'0.8'},"slow");
        $animate_id.find('div').animate({height:'100px',opacity:'0.4'},"slow");
        $animate_id.find('div').animate({width:'100px',opacity:'0.8'},"slow");
    });

    // jQuery stop() 方法用于停止动画或效果，在它们完成之前。
    // stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
    // $(selector).stop(stopAll,goToEnd);
    // 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
    // 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
    // 因此，默认地，stop() 会清除在被选元素上指定的当前动画。

    $animate_id.find('button').eq(3).on('click', function () {
        $animate_id.find('div').stop();
    });

    // 添加新的HTML内容
    var $add_html = $('#add_html');
    var $add_button = $('#add_button');
    // append() - 在被选元素的子元素结尾插入内容
    $add_button.find('button').eq(0).on('click', function () {
        $add_html.find('h1').eq(0).append('<p class="p_show">添加的子元素</p>');
    });

    // jQuery prepend() 方法在被选元素的子元素开头插入内容。
    $add_button.find('button').eq(1).on('click', function () {
        $add_html.find('h1').eq(0).prepend('<ul><li>first</li><li>second</li><li>third</li></ul>');
    });

    // append() 和 prepend() 方法能够通过参数接收无限数量的新元素。
    // 可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。
    $add_button.find('button').eq(2).on('click', function () {
        var txt1="<p>Text.1</p>";               // 以 HTML 创建新元素
        var txt2=$("<p></p>").text("Text.2");   // 以 jQuery 创建新元素
        var txt3=document.createElement("p");  // 以 DOM 创建新元素
        txt3.innerHTML="Text.3";
        $add_html.find('h1').eq(0).append(txt1, txt2, txt3);
    });

    // jQuery remove() 方法删除被选元素及其子元素。
    $add_button.find('button').eq(3).on('click', function () {
        $add_html.find('h1').eq(0).remove();
        $add_html.prepend('<h1>添加内容</h1>');
    });

    // after()——其方法是将方法里面的参数添加到jquery对象后面去；
    $add_button.find('button').eq(4).on('click', function () {
        $add_html.find('h1').eq(0).after('<p>结尾添加的元素</p>')
    });

    // before()——其方法是将方法里面的参数添加到jquery对象前面去。
    $add_button.find('button').eq(5).on('click', function () {
        $add_html.find('h1').eq(0).before('<p>开头添加元素</p>');
    });

    // jQuery empty() 方法删除被选元素的子元素。
    $add_button.find('button').eq(6).on('click', function () {
        $add_html.empty();
        $add_html.prepend('<h1>添加内容</h1>');
    });
    
    // 通过 jQuery，很容易处理元素和浏览器窗口的尺寸。

    // 一个表单多个checkBox
    $('#coffeeFrom').find('button').eq(0).on('click', function () {
        var text = '';
        var coffee = $('#coffeeFrom').find("[name = 'coffee']");
        for ( var i=0;i<coffee.length;++ i)
        {
            if (coffee[i].checked)
            {
                text=text + coffee[i].value + " "
            }
        }
        $('#order').val("您订购的咖啡带有： " + text);
    });
    
    // 使用单选按钮中的 value 属性
    var $answerFrom = $('#answerFrom').find("[name = 'browser']");

    function check(browser) {
        $('#answer').val(browser);
    }

    $answerFrom.eq(0).on('click', function () {
        // var browser = $(this).attr('value');
        var browser = $(this).val();
        check(browser);
    });
    $answerFrom.eq(1).on('click', function () {
        // var browser = $(this).attr('value');
        var browser = $(this).val();
        check(browser);
    });
    $answerFrom.eq(2).on('click', function () {
        // var browser = $(this).attr('value');
        var browser = $(this).val();
        check(browser);
    });
    $answerFrom.eq(3).on('click', function () {
        // var browser = $(this).attr('value');
        var browser = $(this).val();
        $('#answer').val(browser);
    });

    // 重置表单
    $('#resetFrom').find('button').eq(0).on('click', function () {
        $('#resetFrom').find('input').val('');
    });

    // 提交表单
    var $submitFrom = $('#submitFrom').find('button');
    $submitFrom.eq(0).on('click', function () {
       $('#submitFrom').submit();
    });
    // 获取焦点
    $submitFrom.eq(1).on('click', function () {
        $('#submitFrom').find("[name = 'firstName']").focus();
    });
    $submitFrom.eq(2).on('click', function () {
        $('#submitFrom').find("[name = 'firstName']").blur();
    });

    //noinspection JSUnresolvedFunction
    $('#selectId').change(function () {
        var thisValue = $(this).val();
        $('#favorite').val(thisValue);
    });



    // 完整的 key press 过程分为两个部分：1. 按键被按下；2. 按键被松开。
    // 当按钮被按下时，发生 keydown 事件。
    // keydown() 方法触发 keydown 事件，或规定当发生 keydown 事件时运行的函数。

    // 当按钮被松开时，发生 keyup 事件。它发生在当前获得焦点的元素上。
    // keyup() 方法触发 keyup 事件，或规定当发生 keyup 事件时运行的函数。

    // 当达到文本域的最大字符数时跳至下一个域
    var $nextFrom = $('#nextFrom').find('input');

    // 封装 toNext 函数
    function toNext(thisDOM) {
        var maxLength = $(thisDOM).attr('maxlength');
        var thisLength = $(thisDOM).val().length;
        var next = $(thisDOM).attr('tabindex');
        if(thisLength == maxLength){
            if(next < $nextFrom.length){
                $nextFrom.eq(next).focus();
            }
        }
    }
    //noinspection JSUnresolvedFunction
    $nextFrom.eq(0).keyup(function () {
        // var maxLength = $(this).attr('maxlength');
        // var thisLength = $(this).val().length;
        // var next = $(this).attr('tabindex');
        // if(thisLength == maxLength){
        //     if(next < $nextFrom.length){
        //         $nextFrom.eq(next + 1).focus();
        //     }
        // }
        toNext(this);
    });

    //noinspection JSUnresolvedFunction
    $nextFrom.eq(1).keyup(function () {
        toNext(this);
    });

    //noinspection JSUnresolvedFunction
    $nextFrom.eq(2).keyup(function () {
        toNext(this);
    });


     /*
     点击显示父元素
     阻止事件冒泡
     */

    function familyFunc($target) {
        $target.parent().css({"color":"red","border":"2px solid red"});

        // jQuery children() 方法
        // children() 方法返回被选元素的所有直接子元素。
        // 该方法只会向下一级对 DOM 树进行遍历。

        $target.children().css({"color":"red","border":"2px solid red"});

        // jQuery siblings() 方法
        // siblings() 方法返回被选元素的所有同胞元素。
        // $target.get(0).tagName 获取标签名

        if($target.get(0).tagName == 'SPAN'){ // 此处的判断其实最好用 if($target.is('span'))
            $target.siblings('.secondClass').css({"color":"red","border":"2px solid red"});
        }
        else{
            $target.siblings().css({"color":"red","border":"2px solid red"});
        }

        // 其他的一些同胞遍历
        /*
         jQuery next() 方法
         next() 方法返回被选元素的下一个同胞元素。
         $(document).ready(function(){
         $("h2").next();
         });

         jQuery nextAll() 方法
         nextAll() 方法返回被选元素的所有跟随的同胞元素。
         $(document).ready(function(){
         $("h2").nextAll();
         });

         jQuery nextUntil() 方法
         nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。
         $(document).ready(function(){
         $("h2").nextUntil("h6");
         });

         jQuery prev(), prevAll() & prevUntil() 方法
         prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：
         它们返回的是前面的同胞元素（在 DOM 树中沿着同胞元素向后遍历，而不是向前）。

        */
    }

    // 其他的一些祖先遍历
    /*
     jQuery parents() 方法
     下面的例子返回所有 <span> 元素的所有祖先，并且它是 <ul> 元素：
     $(document).ready(function(){
     $("span").parents("ul");
     });

     jQuery parentsUntil() 方法
     parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。
     下面的例子返回介于 <span> 与 <div> 元素之间的所有祖先元素：
     $(document).ready(function(){
     $("span").parentsUntil("div");
     });
     */

    $('#ancestors').on('click',function (event) {
        var $target = $(event.target);
        if($target.is('#sSpan')){
            familyFunc($target);
        }
        else if($target.is('li')){
            $target.parent().css({"color":"red","border":"2px solid red"});
            // 您也可以使用可选参数来过滤对子元素的搜索。这里使得选择 .firstClass 和 .secondClass
            //noinspection JSValidateTypes
            $target.children('.firstClass, .secondClass').css({"color":"red","border":"2px solid red"});
        }
        else if($target.is('ul')){
            familyFunc($target);
        }
        else if($target.is('.firstClass')){
            familyFunc($target);
        }
        else if($target.is('.secondClass')){
            familyFunc($target);
        }
        else if($target.is('span')){
            familyFunc($target);
        }
    });

    // AJAX
    /*
     XMLHttpRequest 对象
     所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
     XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

     创建 XMLHttpRequest 对象的语法：
     variable=new XMLHttpRequest();
     老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
     variable=new ActiveXObject("Microsoft.XMLHTTP");
     为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，则创建 XMLHttpRequest 对象。
     如果不支持，则创建 ActiveXObject ：
    */
    /*
    var xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    */
    
    $('#xmlDiv').find('button').eq(0).on('click', function () {
        var xmlHttp;
        var txt,x,y,i;
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlHttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlHttp.onreadystatechange=function()
        {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                var xmlDoc = xmlHttp.responseXML;
                txt="";
                x = xmlDoc.getElementsByTagName("title");
                y = $(xmlDoc).find('author');
                for(i=0; i<x.length; i++)
                {
                    txt = txt + x[i].childNodes[0].nodeValue +
                        '       Author: ' + y[i].childNodes[0].nodeValue +
                        "<br />";
                }
                $('#xmlDiv').find('div').eq(0).html(txt);
            }
        };

        // nginx 访问静态文件不能使用post
        xmlHttp.open("Get","xml/books.xml",true);
        xmlHttp.send();
    });

    // AJAX PHP 根据字母返回返回建议
    //noinspection JSUnresolvedFunction
    $('#nameDiv').find('input').eq(0).keyup(function () {
        var xmlHttp;
        var str = $(this).val();
        if(str.length == 0){
            $('#textHint').html('');
            return 0;
        }
        if(window.XMLHttpRequest){
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlHttp = new XMLHttpRequest();
        }
        else{
            // code for IE6, IE5
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                $('#textHint').html(xmlHttp.responseText);
            }
        };
        xmlHttp.open('Get','Php/myfirst.php?q='+str,true);
        xmlHttp.send();

    })

});
