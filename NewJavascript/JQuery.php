<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
    <script src="JS/jquery.js"></script>
    <script src="JS/javascript.js"></script>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="warp">
    <?php
        echo "myfirst jquery";
    ?>
    <div class="div_class">
        <h1 id="h1_first">Jquery</h1>
        <button id="h1_button" type="button" class="button_class" onmouseover="button_show(this)"
                onmouseout="button_out(this)">点击修改H1</button>
    </div>

    <div class="div_class">
        <p id="p_different_js">
            显示文本
        </p>
        <p id="p_different_jq">
            显示文本
        </p>
        <button id="button_js" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            js实现
        </button>
        <button id="button_jq" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            jq实现
        </button>
        <button id="restore" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原
        </button>
        <button id="change_DOM" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            转化为DOM
        </button>
        <button id="change_JQ" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            转化为JQ obj
        </button>
    </div>
    <div class="div_class">
        <p id="this_hideP">点击隐藏该P元素</p>
        <p class="p_showHide">class为p_showHide的元素</p>
        <p class="p_showHide">class为p_showHide的元素</p>
        <p class="p_showHide">class为p_showHide的元素</p>
        <button id="class_hideBtn" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            隐藏指定class元素
        </button>
        <button id="attribute" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            选择属性class元素
        </button>
        <button id="contains_select" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            内容选择器
        </button>
        <button id="restore_hide" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原
        </button>

    </div>

</div>
</body>
</html>