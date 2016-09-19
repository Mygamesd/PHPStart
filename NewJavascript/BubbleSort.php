<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BubbleSort</title>
    <script src="JS/jquery-2.2.4.min.js"></script> <!--要先引入JQuery-->
    <script src="JS/BubbleSort.js"></script>
    <script src="JS/javascript.js"></script>
    <link href="CSS/Javascript.css" type="text/css" rel="stylesheet">
</head>
<body>
    <div class="warp">
        <div id="BubbleSort_div">
            <h1>冒泡排序</h1>
            <p id="SendArr">输出排序后的数组</p>
            <button class="button_class" type="button"
                    onmouseout="button_out(this)" onmouseover="button_show(this)">
                点击输出排序后数组
            </button>
            <button class="button_class" type="button"
                    onmouseout="button_out(this)" onmouseover="button_show(this)">
                点击输出排序优化后数组
            </button>
            <button class="button_class" type="button"
                    onmouseout="button_out(this)" onmouseover="button_show(this)">
                点击输出排序优化后数组
            </button>
        </div>
    </div>
</body>
</html>