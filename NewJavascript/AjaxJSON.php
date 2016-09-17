<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AjaxJSON</title>
    <script src="JS/jquery-2.2.4.min.js"></script>
    <script src="JS/javascript.js"></script>
    <script src="JS/AjaxJSON.js"></script>
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
//echo "The AjaxJSON";
?>
<div class="warp">
    <h1>Ajax JSON 实现</h1>
    <h2>员工查询</h2>
    <label>请输入员工编号：</label>
    <label for="keyword_JSON"></label><input class="input_class" type="text" id="keyword_JSON" />
    <button class="button_class" id="search_JSON" onmouseover="button_show(this)" onmouseout="button_out(this)">
        查询
    </button>
    <p id="searchResult_JSON"></p>

    <div style="text-align: start; margin: 10px auto; width: 600px;">
        <h2>员工新建</h2>
        <label>请输入员工姓名：</label>
        <label for="staffName_JSON"></label><input class="input_class" type="text" id="staffName_JSON" /><br>
        
        <label>请输入员工编号：</label>
        <label for="staffNumber_JSON"></label><input class="input_class" type="text" id="staffNumber_JSON" /><br>
        
        <label>请选择员工性别：</label>
        <label for="staffSex_JSON"></label><select id="staffSex_JSON">
            <option>女</option>
            <option>男</option>
        </select><br>
        
        <label>请输入员工职位：</label>
        <label for="staffJob_JSON"></label><input class="input_class" type="text" id="staffJob_JSON" /><br>
        
        <button class="button_class" onmouseover="button_show(this)" onmouseout="button_out(this)" id="save_JSON">
            保存
        </button>
        <p id="createResult_JSON"></p>

        <p id="checkTest">测试获取name的value值</p>
    </div>
</div>
</body>
</html>