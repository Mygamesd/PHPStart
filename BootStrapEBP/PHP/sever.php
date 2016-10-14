<?php
/**
 * Created by PhpStorm.
 * User: Mygamesd
 * Date: 2016/10/12
 * Time: 16:26
 */
//设置页面内容是html编码格式是utf-8
header("Content-Type: text/plain;charset=utf-8");
//header("Content-Type: application/json;charset=utf-8");
//header("Content-Type: text/xml;charset=utf-8");
//header("Content-Type: text/html;charset=utf-8");
//header("Content-Type: application/javascript;charset=utf-8");

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "GET") {
//    search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
    create();
}

function create(){
    //判断信息是否填写完全
    if (!isset($_POST["FoodName"]) || empty($_POST["FoodName"])
        || !isset($_POST["Price"]) || empty($_POST["Price"])
        || !isset($_POST["Num"]) || empty($_POST["Num"])
        || !isset($_POST["Sum"]) || empty($_POST["Sum"])) {
        echo "订单错误";
        return;
    }
    //TODO: 获取POST表单数据并保存到数据库

    //提示保存成功
    echo "你提交的订单是： 食物名：" . $_POST["FoodName"] ." 食物单价：" . $_POST["Price"] . " 订单数量：" . $_POST["Num"]." 总价：" . $_POST["Sum"] . "提交成功！";
}