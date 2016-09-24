<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sort</title>
    <!--（1）实现js文件的异步加载，避免网页失去响应；-->
    <!--（2）管理模块之间的依赖性，便于代码的编写和维护。-->
    <script src="JS/require.js" defer async="true" data-main="JS/main"></script>
    <link href="CSS/Sort.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="head clearFix">
    <div class="head_title "><p>Sort</p></div><!--head_title结束-->
    <div class="head_menu">
        <ul class="ul_style ul_menu">
            <li><a href="https://github.com/Mygamesd">GitHub</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">...</a></li>
        </ul>
    </div><!--head_menu结束-->
</div><!--head结尾-->
<div class="warp clearFix">
    <div class="left_warp">
        <ul class="ul_style warp_menu">
            <li><a><span class="span">&gt;</span>QuickSort</a></li>
            <li><a><span class="span">&gt;</span>HeapSort</a></li>
            <li><a><span class="span">&gt;</span>MergeSort</a></li>
            <li><a><span class="span">&gt;</span>BubbleSort</a></li>
            <li><a><span class="span">&gt;</span>SelectSort</a></li>
            <li><a><span class="span">&gt;</span>InsertSort</a></li>
            <li><a><span class="span">&gt;</span>ShellSort</a></li>
        </ul>
    </div><!--left_warp结束-->

    <div class="right_warp">
        <div class="WR_head">
            <h1>算法效率测试</h1>
        </div><!--WR_head结束-->
        <div class="Select_Sort">
            <p>现在为<span class="Which_sort"></span>算法:</p>
        </div>
        <div class="Sort_IN">
            <label>请输入用于排序的数的数量:</label>
            <br />
            <input id="Sort_len" class="input_class"  title="Len" maxlength="6"/>
            <button id="Sort_Btn" class="button_class" type="button"
                    title="最好输入10000来测试BubbleSort，太多会导致无响应(实际还在排，时间会长)">
                点击测试效率
            </button>
        </div><!--Sort_IN结束-->
        <div class="Sort_Out">
            <p><span class="Which_sort"></span>排序：<span id="Sort_See">在此处显示算法效率</span></p>
        </div>
    </div>


</div><!--warp结尾-->
<div class="footer"></div><!--footer结尾-->

</body>
</html>