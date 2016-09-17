<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQueryAjax</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
    <script src="JS/javascript.js"></script>
    <script src="JS/JQueryAjax.js"></script>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
    <link href="CSS/AJAX.css" type="text/css" rel="stylesheet">

    <style>
        label, input, p, select, h2{
            line-height: 1.8;
            font-size: 26px;
            margin-top: 10px;
        }
        button{
            font-size: 26px;
        }
    </style>
</head>
<body>
<?php
//echo "This JQuery Ajax";
?>

<div class="warp">
    <h1>JQueryAjax 实现</h1>
    <h1>员工查询</h1>
    <label>请输入员工编号：</label>
    <label for="JQ_Keyword"></label><input class="input_class" type="text" id="JQ_Keyword">
    <button id="JQ_search" class="button_class" onmouseover="button_show(this)" onmouseout="button_out(this)">
        查询
    </button>
    <p id="JQ_searchResult"></p>

    <div class="Ajax_div">
        <h1>员工添加</h1>
        <label>请输入员工姓名：</label>
        <label for="JQ_staffName"></label><input id="JQ_staffName" class="input_class" type="text"><br>

        <label>请输入员工编号：</label>
        <label for="JQ_staffNumber"></label><input class="input_class" type="text" id="JQ_staffNumber" /><br>

        <label>请选择员工性别：</label>
        <label for="JQ_staffSex"></label><select id="JQ_staffSex">
            <option>女</option>
            <option>男</option>
        </select><br>

        <label>请输入员工职位：</label>
        <label for="JQ_staffJob"></label><input class="input_class" type="text" id="JQ_staffJob" /><br>

        <button class="button_class" onmouseover="button_show(this)" onmouseout="button_out(this)" id="JQ_save">
            保存
        </button>
        <p id="JQ_createResult"></p>

        <p id="checkTest">测试获取name的value值</p>
    </div>
</div
</body>
</html>