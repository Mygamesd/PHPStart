<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AJAX</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
<!--    <script src="JS/jquery.js"></script>-->
    <script src="JS/javascript.js"></script>
    <script src="JS/AJAX.js"></script>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
    <link href="CSS/AJAX.css" type="text/css" rel="stylesheet">
    <style>
        label, input, p, select, h1{
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
//echo "myFirst AJAX";
?>
<div class="warp">
    <h1>员工查询</h1>

    <label>请输入员工编号：</label>
    <input class="input_class" type="text" id="keyword" />
    <button class="button_class" id="search" onmouseover="button_show(this)" onmouseout="button_out(this)">查询</button>
    <p id="searchResult"></p>

    <div style="text-align: start; margin: 10px auto; width: 600px;">
        <h1>员工新建</h1>
        <label>请输入员工姓名：</label>
        <input class="input_class" type="text" id="staffName" /><br>
        <label>请输入员工编号：</label>
        <input class="input_class" type="text" id="staffNumber" /><br>
        <label>请选择员工性别：</label>
        <select id="staffSex">
            <option>女</option>
            <option>男</option>
        </select><br>
        <label>请输入员工职位：</label>
        <input class="input_class" type="text" id="staffJob" /><br>
        <button class="button_class" onmouseover="button_show(this)" onmouseout="button_out(this)" id="save">保存</button>
        <p id="createResult"></p>

        <p id="checkTest">测试获取name的value值</p>
    </div>
</div>
</body>
