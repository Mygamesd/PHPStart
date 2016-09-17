<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Javascript复习</title>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
    <script src="JS/javascript.js" type="text/javascript"></script>
    <script src="JS/jquery-2.2.4.min.js"></script>
</head>
<body>
<div class="warp">
    <div class="div_class">
        <p id="demo">Hello Javascript</p>
        <button class="button_class" type="button" onclick="myfunction()" >点击按钮</button>
    </div>

    <div class="div_class">
        <img id="myimg" src="CSS/img/eg_bulboff.gif" onclick="changeimg()" />
    </div>

    <div class="div_class">
        <p>请输入数字。如果输入值不是数字，浏览器会弹出提示框。</p>

        <input class="input_class" id="demo_input" type="text" />

        <button class="button_class" type="button" onclick="check_number()">点击按钮</button>
    </div>

    <div class="div_class">

        <h1><p id="demo_getid">My First Paragraph</p></h1>

        <button class="button_class" type="button" onclick="get_id()">点击按钮id</button>
        <button class="button_class" type="button" onclick="statement()">statement</button>
        <button class="button_class" type="button" onclick="new_array()">new_array</button>
        <button class="button_class" type="button" onclick="new_object()">new_object</button>
        <button class="button_class" type="button" onclick="new_func('Bile Gates','CEO')">new_func</button>
        <button class="button_class" type="button" onclick="new_func_return()">new_func_return</button>
        <button class="button_class" type="button" onclick="use_switch_case()">use_switch_case</button>
        <button class="button_class" type="button" onclick="use_for_in()">use_for_in</button>
        <button class="button_class" type="button" onclick="message()">message</button>
    </div>

    <div class="div_class">
        <p>请输入 5 到 10 之间的数字：</p>
        <input class="input_class" id="throw_check" type="text" title="" />
        <button class="button_class" type="button" onclick="throw_out()">测试输入值</button>
        <p id="mess"></p>
    </div>
    <div class="div_class">
        <form action="#" onsubmit="return validate_form(this)" method="post">
            Email: <input class="input_class" type="text" name="email" size="30" title="" />
            <input class="button_class"   type="submit" value="Submit">
        </form>
        <button type="button" class="button_class"  id = "demo_style" onclick="change_css()">点击修改样式</button>
        <button type="button" class="button_class"  id = "demo_use">onload</button>
    </div>

    <div class="div_class">
        请输入英文字符：<input class="input_class" type="text" id="fname" onchange="on_change()">
        <p>当您离开输入字段时，会触发将输入文本转换为大写的函数。</p>
    </div>

    <div class="div_class" onmousedown="mDown(this)" onmouseup="mUp(this)"
         style="background-color:green;color:#ffffff;width:90px;height:20px;padding:40px;font-size:12px; margin: 10px auto">
        请点击这里
    </div>

    <div onmouseover="mOver(this)" onmouseout="mOut(this)"
         style="background-color:green;width:120px;height:20px;padding:40px;color:#ffffff; margin: 10px auto">
    把鼠标移到上面
    </div>
    <div id="div1" class="div_class">
        <p id="p1">这是一个段落</p>
        <p id="p2" onclick="add_newp()"> 点击添加一个新段落</p>
    </div>

    <div class="div_class">
        <p id = 'demo_create_obj' onclick="create_obj()">显示对象值</p>
        <p id = 'demo_create_obj2'>显示对象值</p>
        <p id = 'show_time' onclick="startTime()">点击显示时间</p>
        <p id = 'show_window' onclick="show_window()">点击显示窗口大小</p>
        <h1 id = 'show_screen'>显示功能</h1>
        <textarea class="show_text" id="show_text"></textarea> <!--多行文本框-->
        <button class="button_class" type="button" onclick="show_screen()">show_screen</button>
        <button class="button_class" type="button" onclick="TheURL()">TheURL</button>
        <button class="button_class" type="button" onclick="TheNavi()">TheNavi</button>
    </div>

    <div class="div_class">
        <h1 id = 'sec'>显示秒数</h1>
        <button class="button_class" type="button" onmouseover="button_show(this)" onmouseout="button_out(this)"
                onclick="set_time()">
            set_time
        </button>
        <button class="button_class" type="button" onclick="checkCookie()">checkCookie</button>
    </div>

    <?php
    echo "myfirst php";
    ?>

</div>

</body>
</html>