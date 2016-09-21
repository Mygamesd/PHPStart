<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ReviewCSS</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
    <script src="JS/reviewCSS.js"></script>
<!--    <script src="JS/javascript.js"></script>-->
    <link href="CSS/reviewCSS.css" type="text/css" rel="stylesheet">
</head>
<body>
<?php
//echo "review CSS";
?>
<div class="warp">
    <div id="idSelect_div" class="div_class" >
        <p>
            The <span><strong>strongly</strong></span> emphasized <span><strong>word</strong></span>
            in this paragraph is<strong>red</strong>.
        </p>
        <h2>This subhead is also red.</h2>
        <h2>The strongly emphasized <span><strong>word</strong></span> in this subhead is<strong>blue</strong>.</h2>
        <p><a href="#">this is a link</a></p>
    </div>

    <div class="div_class">
        <p>The strongly emphasized word in this paragraph is<strong>red</strong>.</p>
        <h2>This subhead is also red.</h2>
        <h2>The strongly emphasized word in this subhead is<strong>blue</strong>.</h2>
    </div>

    <div Selecttitle="hello world" style=" width: 700px; margin: 10px auto; text-indent: 1em;">
        <p Selecttitle="p">The strongly emphasized word in this paragraph is<strong>red</strong>.</p>
        <h2 Selecttitle="h2">This subhead is also red.</h2>
        <h2 Selecttitle="h2 bb">The strongly emphasized word in this subhead is<strong>blue</strong>.</h2>
        <p><a href="#">this is a link</a></p>
    </div>
    
    <div class="div_class" style="text-align: center">
        <button id="relative_button" class="button_class" type="button">
            点击隐藏relative_div
        </button>
<!--        <p id="out">显示display属性</p>-->
    </div>

    
    <div class="div_relative">
        <p>这是relative定位(相对定位)</p>
        <p> 通过使用
            position: relative;
            left: 350px;
            定位于此
        </p>

        <div class="div_fixed">
            <p>这是fixed定位(固定定位)</p>
            <p>
                通过使用
                position: fixed;
                right: 10px;
                bottom: 10px;
                定位于此
            </p>
        </div>
        <div class="div_check">
            <p>对比用的div(static定位)</p>
            <p>这个div实在div_fixed下面的，div_fixed定位后不在占用空间</p>
        </div>

        <div class="div_absolute">
            <p>这是absolute定位(绝对)</p>
            <p>会脱离文档流，影响是无法消除的，父元素只能通过设置高度来支撑高度</p>
        </div>
        <div class="div_inherit">
            <p>这是inherit定位</p>
            <p>会继承父元素的定位值</p>
        </div>
    </div>

    <div class="div_class" style="text-align: center">
        <button id="Containing_button" class="button_class" type="button">
            点击隐藏Containing_Block
        </button>
    </div>
    <div class="Containing_Block div_class">
        <div class="div_class">
            <a href="http://www.w3help.org/zh-cn/kb/008.html">包含块的详细解释</a>
            <div class="div_class">
                <p style="border:1px solid red; width:200px; padding:20px;">
                    T
                <span style="background-color:#C0C0C0; position:relative;">
                        这段文字从左向右排列，红 XX 和 蓝 XX 和黄 XX 都是绝对定位元素，它的包含块是相对定位的SPAN。
                    可以通过它们绝对定位的位置来判断它们包含块的边缘。
                        <em style="position:absolute; color:red; top:0; left:0;">XX</em>
                        <em style="position:absolute; color:yellow; top:20px; left:0;">XX</em>
                        <em style="position:absolute; color:blue; bottom:0; right:0;">XX</em>
                </span>
                </p>
            </div>

            <div class="div_class">
                <p style="border:1px solid red; width:200px; padding:20px;">
                    TEXT TEXT
                <span style="background-color:#C0C0C0; position:relative;">
                    这段文字从左向右排列，红 XX 和 蓝 XX 和黄 XX 都是绝对定位元素，它的包含块是相对定位的SPAN。
                    BBBB可以通过它们绝对定位的位置来判断它们包含块的边缘。
                    <em style="position:absolute; color:red; top:0; left:0;">XX</em>
                    <em style="position:absolute; color:yellow; top:20px; left:0;">XX</em>
                    <em style="position:absolute; color:blue; bottom:0; right:0;">XX</em>
                </span>
                </p>
            </div>
            <div class="div_class">
                <p style="border:1px solid red; width:200px; padding:20px; direction:rtl;">
                    T
                <span style="background-color:#C0C0C0; position:relative;">
                     这段文字从右向左排列，红 XX 和 蓝 XX 和黄 XX 都是绝对定位元素，
                    它的包含块是相对定位的SPAN。可以通过它们绝对定位的位置来判断它们……
                    <em style="position:absolute; color:red; top:0; left:0;">XX</em>
                    <em style="position:absolute; color:yellow; top:20px; left:0;">XX</em>
                    <em style="position:absolute; color:blue; bottom:0; right:0;">XX</em>
                </span>
                </p>
            </div>
        </div>
    </div>


    <div class="div_class">
        <div class="elem clearFix div_fix">
            <span class="label" style="width: 206px">&lt;div class="clearFix"&gt;</span>
            <div class="nav elem elem-red ">
                <ul class="Fix_ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Taco Menu</a></li>
                    <li><a href="#">Draft List</a></li>
                    <li><a href="#">House</a></li>
                    <li><a href="#">Concat</a></li>
                </ul>
                <span class="label">&lt;nav&gt;</span>
            </div>
            <div class="Section elem elem-green">
                <span class="label">&lt;section&gt;</span>
                <p>
                    这个例子和之前那个外观一模一样。请注意我们在容器上做了“清除浮动”。原本在这个例子中是不需要的，但是当
                    <code>nav</code>
                    比非浮动的内容还要高时就需要了。
                </p>
            </div>
            <div class="Section elem elem-green">
                <span class="label">&lt;section&gt;</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl
                    est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                    Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus
                    interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                    In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida
                    venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                    Cras ac leo purus. Mauris quis diam velit.
                </p>
            </div>
        </div>
    </div>


</div>

</body>
</html>