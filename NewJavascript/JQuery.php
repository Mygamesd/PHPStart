<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
    <script src="JS/jquery.js"></script>
    <script src="JS/AJAX.js"></script>
    <script src="JS/javascript.js"></script>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="warp">
    <?php
        echo "myFirst jquery";
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

    <div class="div_class">
        <form>
            猫名:<label for="cat_name"></label><input id="cat_name" class="input_class" type="text" />
            颜色:<label for="cat_color"></label><input id="cat_color" class="input_class" type="text"  />
            <p id="cat_information">显示猫咪信息</p>
            <button id="cat_up" class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                输出猫咪信息
            </button>
        </form>
    </div>

    <div class="div_class">
        <h2>.attr()与.removeAttr()</h2>
        <h3>.attr</h3>
        <form id="attr_from">
            <label>
                <input class="input_class" type="text" value="设置value"/>
                <input class="input_class" type="text" value="获取value"/>
                <input class="input_class" type="text" value="回调拼接value" />
                <input class="input_class" type="text" value="删除value" />
            </label>
        </form>
    </div>

    <div id="html_div" class="div_class">
        <h1 id="html_h1">显示文本</h1>
        <h2>替换用文本</h2>
        <button id="html_btn" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            替换文本html()
        </button>
        <button id="text_btn" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            替换文本text()
        </button>
        <p>用于测试的<b>内容</b></p>
        <p>html输出div内容</p>
        <p>text输出div内容</p>
        <button id="diff_HtmlText" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            两者不同之处
        </button>
        <button id="restore_html" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原
        </button>
    </div>

    <div class="div_class">
        <form action="#" method="post">
            <label for="single"></label><select id="single">
                <option>第一项</option>
                <option>第二项</option>
                <option>第三项</option>
            </select>
            <p>你选择的是：<b id="single_out"></b></p>

            <p>多项选择</p>
            <label for="multiple"></label><select id="multiple" multiple="multiple">
                <option selected="selected">苹果</option>
                <option>雪梨</option>
                <option selected="selected">葡萄</option>
                <option>黑加仑</option>
            </select>

            <label>
                <input id="input_val" class="input_class" type="text" value="click a button"/>
            </label>

            <button id="single_btn" class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                输出选项
            </button>
            <button id="multiple_btn" class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                输出多项选择
            </button> 
            <button id="changeInp_btn" class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                输出多项选择
            </button>
        </form>
    </div>
    
    <div class="div_class">
        <h1 id="toggle_class">切换样式</h1>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            切换样式
        </button>
    </div>
    
    <div class="div_class">
        <div class="div_css">
            <p>css样式</p>
        </div>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            获取样式
        </button>
        <button id="changCss_btn" class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            修改宽度
        </button>
    </div>

    <div class="div_class" id="fading_id">
        <div style="width:80px;height:80px;display:inline-block;margin-left:20px;background-color:red;"></div>
        <div style="width:80px;height:80px;display:inline-block;margin-left:20px;background-color:green;"></div>
        <div style="width:80px;height:80px;display:inline-block;margin-left:20px;background-color:blue;"></div>

        <br />
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            淡出
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            淡入
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            淡入淡出
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            淡化
        </button>
        <br />
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            向下滑动
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            向上滑动
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            滑动切换
        </button>
    </div>

    <div id="animate_id" class="div_class" style="position: relative; height: 100px">
        <div class="div_aniCss"></div>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            变化效果
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原效果
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            队列效果
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            停止动画
        </button>
    </div>

    <div class="div_class" id="add_button" >
        <div class="div_class" id="add_html">
            <h1>添加内容</h1>
        </div>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            结尾添加子元素
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            开头添加子元素
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            添加多个子元素
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原
        </button>
        <br />
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            结尾添加元素
        </button>        
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            开头添加元素
        </button>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            还原
        </button>
    </div>

    <div class="div_class">
        <p>你喜欢如何</p>
        <from id = 'coffeeFrom'>
            <label>
                <input type="checkbox" name="coffee" value="奶油">
            </label>加奶油<br />
            <label>
                <input type="checkbox" name="coffee" value="糖块">
            </label>加糖块<br />
            <br />
<!--            <input type="button" onclick="createOrder()" value="发送订单">-->
            <button class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                发送订单
            </button>
            <br /><br />
            <label for="order"></label><input class="input_class" type="text" id="order" size="50">
        </from>
    </div>

    <div class="div_class">
        <form id="answerFrom">
            <label>
                <input type="radio" name="browser" value="Internet Explorer">
                Internet Explorer
            </label><br />
            <label>
                <input type="radio" name="browser" value="Firefox">
                Firefox
            </label><br />
            <label>
                <input type="radio" name="browser" value="Netscape">
                Netscape
            </label><br />
            <label>
                <input type="radio" name="browser" value="Opera">
                Opera
            </label><br />
            <br />
            <label for="answer">您喜欢的浏览器是：</label><input class="input_class" type="text" id="answer" size="20">
        </form>
    </div>

    <div class="div_class">
        <from id="resetFrom">
            <label>
                姓名：
                <input class="input_class" type="text" size="20">
            </label><br />
            <label>
                年龄：
                <input class="input_class" type="text" size="20">
            </label><br />
            <button class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                重置
            </button>
        </from>
    </div>

    <div class="div_class">
        <form id="submitFrom" action="CSS/img/eg_bulboff.gif">
            <label>
                名：
                <input type="text" class="input_class" name="firstName" size="20">
            </label><br />
            <label>
                姓：
                <input type="text" class="input_class" name="lastName" size="20">
            </label><br />
            <button class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                提交
            </button>
            <button class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                获取焦点
            </button>
            <button class="button_class" type="button" onmouseover="button_show(this)"
                    onmouseout="button_out(this)">
                失去焦点
            </button>
        </form>

    </div>

    <div class="div_class">
        <form id="selectFrom">
            选择你最喜欢的浏览器:
            <select id="selectId" title="选择">
                <option>Internet Explorer</option>
                <option>Netscape</option>
                <option>Opera</option>
            </select>
            <p><label for="favorite">您喜欢的浏览器是：</label>
                <input class="input_class" type="text" id="favorite" size="20">
            </p>
        </form>
    </div>

    <div class="div_class" style="margin-top: 20px">
        <from id="nextFrom">
            <p>达到长度上限后自动跳转到下一个文本框：</p><br/>
            <label>
                <input class="input_class" tabindex="1" maxlength="3" size="3"/>
            </label>
            <label>
                <input class="input_class" tabindex="2" maxlength="2" size="3" />
            </label>
            <label>
                <input class="input_class" tabindex="3" maxlength="3" size="3" />
            </label>
        </from>
    </div>

    <div class="div_class">
        <h1>JQuery遍历，点击显示祖先、后代、同胞</h1>
        <div class="ancestors" id="ancestors">
            <div>div (曾祖父)
                <ul>ul (祖父)
                    <li>li (直接父)
                        <span id="sSpan">span</span>
                        <p class="firstClass">p (子)
                            <span>span (孙)</span>
                        </p>
                        <p class="secondClass">p (子)
                            <span>span (孙)</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="div_class" id="xmlDiv" style="margin-top: 30px">
        <h1>AJAX的运用</h1>
        <h2>My Book Collection:</h2>
        <div></div>
        <button class="button_class" type="button" onmouseover="button_show(this)"
                onmouseout="button_out(this)">
            获得我的图书收藏列表
        </button>
    </div>

    <div class="div_class" id="nameDiv">
        <h2>请在下面的输入框中键入字母（A - Z）：</h2>
        <form action="">
            <label>
                姓氏：
                <input class="input_class" type="text"/>
            </label>
        </form>
        <p>建议：<span id="textHint"></span></p>
    </div>

</div>
</body>
</html>