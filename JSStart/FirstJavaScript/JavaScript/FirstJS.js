/**
 * Created by Mygamesd on 2016/4/13.
 */
// document.write("这是我的第一个JavaScript项目");

var mywin;
function Wopen() {
    mywin = window.open("http://www.imooc.com");
}

function Wcolse() {
    mywin.close();
}

//window.open
function openWindow(){
    var myconfirm = confirm("是否打开新的对话框");
    if(myconfirm)
    {
        var pagename;
        pagename = prompt("请输入要打开的网址","imooc");
        window.open('http://'+pagename+'.com','_blank','width=400, height=500, menubar=no, status=no');
    }
    else{
        alert("选择不打开");
    }
}
//getElementById()使用
function GetID() {
    var myID = document.getElementById("Na");
    document.write("结果:"+ myID);
    document.write("内容:"+ myID.innerHTML);
}

//innerHTML使用
function Changvalue() {
    var myID = document.getElementById("Na");
    document.write("结果:"+ myID);
    document.write("内容:"+ myID.innerHTML + "<br/>");
    var myconfirm = confirm("是否修改内容");
    if(myconfirm){
        var mychar = prompt("请输入修改后的内容","JavaScript");
        myID.innerHTML = mychar;
        document.write("结果:"+ myID);
        document.write("修改后内容:"+ myID.innerHTML + "<br/>");
    }
    else{
        alert("取消修改");
    }
}

// 搜索 obj.className obj.innerHTML 的使用？
function search(){
    //获取input标签对象（注意是对象不是内容）
    var search_str = document.getElementById("search_str");
    var is_search; //用于判断是否出现相同内容
    alert("你将要搜索："+search_str.value);

    //循环遍历p标签的HTML内容
    for (var i = 0; i < 4; i++) {
        //获取第i个p标签对象
        var p = document.getElementsByTagName("p")[i];

        p.className="";//初始化，清除每次遍历后p标签的class值

        if (p.innerHTML==search_str.value) {
            p.className="p_serchar";
            is_search = 1; //如果存在相同则记录为1
        }
    }
    //在p标签遍历完后如果is_search=1，则证明存在有相同内容，否则输出警告
    if(is_search!=1){
        alert("你输入的内容并不在任何p标签中存在！");
    }
    is_search = 0;//对判断元素初始化

}

// display的使用
function hidetext()
{
    var mychar = document.getElementById("displayID");
    mychar.style.display = "none";
}
function showtext()
{
    var mychar = document.getElementById("displayID");
    mychar.style.display = "block";
}


// 综合使用
//定义"改变颜色"的函数
function changecolor(){
    var changeID = document.getElementById("txt");
    var mycolor = prompt("请输入你想变化的颜色","red");
    changeID.style.color = mycolor;
    changeID.style.backgroundColor = "#CCC";
}

//定义"改变宽高"的函数
function changeWandH(){
    var changeID = document.getElementById("txt");
    changeID.style.width = "300px";
    changeID.style.height = "600px";
}

//定义"隐藏内容"的函数
function hitText(){
    var changeID = document.getElementById("txt");
    changeID.style.display = "none";
}

//定义"显示内容"的函数
function showText(){
    var changeID = document.getElementById("txt");
    changeID.style.display = "block";
}
//定义"取消设置"的函数
function Reflush(){
    var changeID = document.getElementById("txt");
    var check = confirm("是否取消设置");
    if(check){
        changeID.removeAttribute("style");
    }
}

//switch
function SwitchFunc() {
    var myweek = prompt("输入星期几","3");//myweek表示星期几变量
    document.write("myweek的类型" + typeof(myweek));
    //propmt返回值是字符串类型，你的case承接的是整型数据，当然没反应了，你把”case 1:“改成“case “1”
    // Number("myweek");
    //noinspection JSUnresolvedFunction
    myweek = parseInt(myweek);
    document.write("转换后myweek的类型" + typeof(myweek));
    switch(myweek)
    {
        case 1:
            document.write("学习理念知识");
            break;
        case 2:
            document.write("学习理念知识");
            break;
        case 3:
            document.write("到企业实践");
            break;
        case 4:
            document.write("到企业实践");
            break;
        case 5:
            document.write("总结经验");
            break;
        default:   
            document.write("周六、日休息和娱乐");
    }
}

function infosFunc(){
    //var Myarr = [[0 , 1 , 2 ],[1 , 2 , 3]],相当于Myarr[0]=[0,1,2],Myarr[1]=[1.2.3]这个数组里有两个数组，每个数组里又有三个数值
    var infos = [
        ['小A','女',21,'大一'],  ['小B','男',23,'大三'],

        ['小C','男',24,'大四'],  ['小D','女',21,'大一'],

        ['小E','女',22,'大四'],  ['小F','男',21,'大一'],

        ['小G','女',22,'大二'],  ['小H','女',20,'大三'],

        ['小I','女',20,'大一'],  ['小J','男',20,'大三']
    ]
    
    // document.write(infos.length);
    var Grade = prompt("输入你想筛选的年级:","大一");
    var Sex = prompt("输入你想筛选的性别:","女");
    var flag = 0;
    for(var i = 0; i < infos.length; i++){
        if(infos[i][3] == Grade){
            if(infos[i][1] == Sex){
                document.write("筛选出来的名字:" + infos[i][0]);
                flag++;
            }
        }
    }
    if(flag == 0){
            document.write("不存在符合筛选条件的人");
    }
}

function witchMax() {
    var FirstNum = prompt("输入第一个数字");
    var SecondNum = prompt("输入第二个数字");
    var ThirdNum = prompt("输入第三个数字");
    var temp;
    FirstNum = parseInt(FirstNum);
    SecondNum = parseInt(SecondNum);
    ThirdNum = parseInt(ThirdNum);


    if(FirstNum >= SecondNum)
    {
        temp = FirstNum;
        if (FirstNum <= ThirdNum) {
            temp = ThirdNum;
        }
    }
    else{
        temp = SecondNum;
        if (SecondNum <= ThirdNum) {
            temp = ThirdNum;
        }
    }

    document.write("最大的数为:" + temp);
}

//触发事件
function message(){
    alert("您触发了选中事件！"); }
function Onblur(){
    alert("您触发了失焦事件！"); }
function Onfocus(){
    alert("您触发了聚焦事件！"); }

//计算器
function count() {
    var FirstNum = parseInt(document.getElementById("txt1").value);
    var SceondNum = parseInt(document.getElementById("txt2").value);
    var Select = document.getElementById("select").value;
    var Fruit = 0;

    switch (Select){
        case '+':
            Fruit = FirstNum + SceondNum;
            break;
        case '-':
            Fruit = FirstNum - SceondNum;
            break;
        case '*':
            Fruit = FirstNum * SceondNum;
            break;
        case '/':
            if(SceondNum == 0){
                alert("除数不能为0！");
            }else{

                Fruit = FirstNum / SceondNum;
            }
            break;
        default:
            alert("选择失败!");
    }
   // document.write(Fruit);
    document.getElementById('fruit').value = Fruit;
}

function checktime() {
    var mydate=new Date();
    document.write("当前时间:"+ mydate + '<br/>');
    // 年份
    document.write("年份:"+ mydate.getFullYear() + '<br/>');
    //星期
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    document.write("今天是：" + weekday[mydate.getDay()] + '<br/>');
    //时间
    mydate.setTime( mydate.getTime()  + 2* 60 * 60 * 1000);
    document.write("推迟二小时时间：" + mydate + '<br/>');
}

function forString() {
    var mystr=prompt("输入一串字符串:");

    // 返回该字符串的长度
    var mycharLength = mystr.length;
    document.write('字符串长度为:' + mycharLength + '<br/>');

    //将字符串小写字母转换为大写
    var mycharUpper = mystr.toUpperCase()
    document.write("字符串为："+mycharUpper+"<br>");
    
    //将字符串所有大写字母都变成小写的字符串。
    var mycharLower=mystr.toLowerCase();
    document.write("字符串为："+mycharLower+"<br>");

    //charAt() 方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。字符串中第一个字符的下标是 0。
    // 最后一个字符的下标为字符串长度减一（string.length-1）。

    // var index = parseInt(prompt('选择返回的位置'));
    // while (index <= 0 || index > mycharLength){
    //    index =  prompt('你输入的位置有误，请从新输入大于0且小于'+ mycharLength + '的数字');
    // }
    // document.write('返回第' + index + '位置的字母' + mystr.charAt(index - 1));

    //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    //语法：stringObject.indexOf(substring, startpos)
    //说明：
    //  1.该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 substring。
    // 2.可选参数，从stringObject的startpos位置开始查找substring，如果没有此参数将从stringObject的开始位置查找。
    // 3.如果找到一个 substring，则返回 substring 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。
    // 注意：1.indexOf() 方法区分大小写。
    // 2.如果要检索的字符串值没有出现，则该方法返回 -1。

    // var thechar = prompt('输入要查找的字符以返回首次出现的位置');
    // var index = mystr.indexOf(thechar);
    // if(index != -1){
    //     document.write('字符' + thechar + '首次出现的位置为' + (index + 1));
    // }else{
    //     document.write('查找的字符不存在');
    // }

    //split() 方法将字符串分割为字符串数组，并返回此数组。
    // stringObject.split(separator,limit)
    //注意：如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割

    // document.write(mystr.split('-')+ "<br />");
    // document.write(mystr.split('')+ "<br />");
    // document.write(mystr.split('',3));

    //substring() 方法用于提取字符串中介于两个指定下标之间的字符。

    // var start = parseInt(prompt('输入要取的开始位置'));
    // var ifstop = confirm('是否需要取结束位置');
    // if(ifstop) {
    //     var stop = parseInt(prompt('输入要取的结束位置'));
    //     document.write('取出的字符串为:' + mystr.substring(start,stop));
    // }else{
    //     document.write('取出的字符串为:' + mystr.substring(start));
    // }

    //substr() 方法从字符串中提取从 startPos位置开始的指定数目的字符串。
    // stringObject.substr(startPos,length)
    // 注意：如果参数startPos是负数，从字符串的尾部开始算起的位置。
    // 也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
    //如果startPos为负数且绝对值大于字符串长度，startPos为0。

    var start = parseInt(prompt('输入要取的开始位置'));
    var ifstop = confirm('是否需要取长度');
    if(ifstop) {
        var stop = parseInt(prompt('输入要取的结束位置'));
        document.write('取出的字符串为:' + mystr.substr(start,stop));
    }else{
        document.write('取出的字符串为:' + mystr.substr(start));
    }
}

function forMath() {
    var myMath = Number(prompt('请输入一个数字'));

    //ceil() 方法可对一个数进行向上取整。
   // document.write('对'+ myMath + '进行向上取整为' + Math.ceil(myMath) + '<br/>');

    //floor() 方法可对一个数进行向下取整。
   // document.write('对'+ myMath + '进行向下取整为' + Math.floor(myMath) + '<br/>');

    //round() 方法可把一个数字四舍五入为最接近的整数。
    // 注意：
    // 1. 返回与 x 最接近的整数。
    // 2. 对于 0.5，该方法将进行上舍入。(5.5 将舍入为 6)
    // 3. 如果 x 与两侧整数同等接近，则结果接近 +∞方向的数字值 。(如 -5.5 将舍入为 -5; -5.52 将舍入为 -6),如下图:
   // document.write('对'+ myMath + '进行4舍5入取整为' + Math.round(myMath) + '<br/>');

    //random() 方法可返回介于 0 ~ 1（大于或等于 0 但小于 1 )之间的一个随机数。
    //返回一个大于或等于 0 但小于 1 的符号为正的数字值。
    // var forRandom = Number(prompt('输入多大的随机数'));
    // document.write(Math.round(Math.random()*forRandom));

}

function ForArray() {
    var array = new Array();
    //concat() 方法用于连接两个或多个数组。此方法返回一个新数组，不改变原来的数组。
    //该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    //arrayObject.concat(array1,array2,...,arrayN)
    var myarr1 = new Array("hello!");
    var myarr2 = ["I","love"];
    var myarr3 = new Array("JavaScript","!");
    array = myarr1.concat(myarr2,myarr3);

    document.write('输出的连接数组(concat()):' + array + '<br/>');

    //join()方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
    //语法：
    //arrayObject.join(分隔符)
    //注意：返回一个字符串，该字符串把数组中的各个元素串起来，用<分隔符>置于元素与元素之间。
    // 这个方法不影响数组原本的内容。

    document.write('输出指定分隔符连接数组元素(join()):' + array.join('') + '<br/>');

    //reverse() 方法用于颠倒数组中元素的顺序。
    //该方法会改变原来的数组，而不会创建新的数组。
    document.write('原本顺序:' + array + '<br/>');
    array.reverse();
    document.write('输出颠倒数组元素顺序(reverse()):' + array + '<br/>');

    //slice() 方法可从已有的数组中返回选定的元素。
    //语法
    //arrayObject.slice(start,end) start 和 end 是数组下标 从0开始
    //1.返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
    // 2. 该方法并不会修改数组，而是返回一个子数组。
    // 注意：
    // 1. 可使用负值从数组的尾部选取元素。
    // 2.如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
    // 3. String.slice() 与 Array.slice() 相似。

    document.write('输出选定元素(slice()):' + array.slice(1,3) + '<br/>');

    //sort()方法使数组中的元素按照一定的顺序排列。
    //1.如果不指定<方法函数>，则按unicode码顺序排列。
    //2.如果指定<方法函数>，则按<方法函数>所指定的排序方法排序。
    //myArray.sort(sortMethod);
    //注意: 该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。
    // 比较函数应该具有两个参数 a 和 b，其返回值如下：
    //若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    //若 a 等于 b，则返回 0。
    //若 a 大于 b，则返回一个大于 0 的值。
    function sortNum(a,b) {
        return a - b;
    }
    var myarr4 = new Array("80","16","50","6","100","1");
    document.write('对原顺序myarr4:'+ myarr4 + '<br/>'  +'进行升序排序后:'+myarr4.sort(sortNum) + '<br/>');
}

function TheSevenPrictuce() {
    var date = new Date();  //实例化时间对象
    var timeStr = '';//日期 用一个对象存为字符串
    timeStr = date.getFullYear() + "年" ;
    timeStr += date.getMonth() + 1 +"月"; //getMonth返回从0到11；
    timeStr += date.getDate()+"日";
    //date 所指的星期中的某一天，使用本地时间。返回值是 0（周日） 到 6（周六） 之间的一个整数
    var day  = date.getDay(); //星期 返回0-6

    // document.write('The day is:' + day + '<br/>');
    var week='';

    switch (day){
        case  0 :
            week  = '星期天';
            break;
        case  1 :
            week  = '星期一';
            break;
        case  2 :
            week  = '星期二';
            break;
        case  3 :
            week  = '星期三';
            break;
        case  4 :
            week  = '星期四';
            break;
        case  5 :
            week  = '星期五';
            break;
        case  6 :
            week  = '星期六';
            break;
    }
    timeStr += "&nbsp;"+week;
    //打印出日期
    document.write(timeStr + '<br/>');


    //成绩是一长窜的字符串不好处理，找规律后分割放到数组里更好操作哦
    var sorceStr = "小明:87; 小花:81; 小红:97; 小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";

    var arr  = sorceStr.split(';');//按 ; 符号进行数组分割
    document.write('arr为:' + arr + '<br/>');
    var sum = 0;
    var av= 0;
    for( var i =0;i<arr.length;i++ ){
        var index = arr[i].indexOf(':'); //根据 ： 符号确定数字开始的位置
        //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
        //语法
        //stringObject.substr(start,length)
        // 参数	描述
        //start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。
        // 也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
        //length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
        //返回值
        //一个新的字符串，包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。
        // 如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。
        sum += parseInt(  arr[i].substr(index+1,2)  );  // parseInt() 字符串类型转成整型
    }
    av = sum/arr.length;
    av = Math.floor(av);  // 取整
    
    //从数组中将成绩撮出来，然后求和取整，并输出。

    document.write("--班级总分为："+av);
}

//输出时间
function clock(){
    var attime;
    var time=new Date();

    var year = time.getFullYear();
    var month = time.getMonth();
    var date =  time.getDate();
    var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var day = time.getDay();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    month++;
    if(month<10){month = '0' + month;}
    if(date<10){date = '0' + date;}
    if(hours<10){hours = '0' + hours;}
    if(minutes<10){minutes = '0' + minutes;}
    if(seconds<10){seconds = '0' + seconds;}

    attime = year + '年' + month + '月' + date + '日' + week[day] + hours + ':' + minutes + ':' + seconds;
    document.getElementById("clock").value = attime;
}

var timeID;
function timeclock() {
    // 在执行时,从载入页面后每隔指定的时间执行代码。
    // 语法:
    // setInterval(代码,交互时间);
    // 参数说明：
    // 1. 代码：要调用的函数或要执行的代码串。
    // 2. 交互时间：周期性执行或调用表达式之间的时间间隔，以毫秒计（1s=1000ms）。
    // 返回值:
    // 一个可以传递给 clearInterval() 从而取消对"代码"的周期性执行的值。
   timeID =  setInterval(clock, 1000);
}

function stoptime() {
    // clearInterval() 方法可取消由 setInterval() 设置的交互时间。
    // 语法：
    // clearInterval(id_of_setInterval)
    // 参数说明:
    // id_of_setInterval：由 setInterval() 返回的 ID 值。
    clearInterval(timeID);
}

var setTimeID;
function setTime() {
    // setTimeout()计时器，在载入后延迟指定时间后,去执行一次表达式,仅执行一次。
    // 语法:
    // setTimeout(代码,延迟时间);
    // 参数说明：
    // 1. 要调用的函数或要执行的代码串。
    // 2. 延时时间：在执行代码前需等待的时间，以毫秒为单位（1s=1000ms)。
    clock();
    setTimeID = setTimeout('setTime()', 1000);
}

function stopSetTime() {
    // setTimeout()和clearTimeout()一起使用，停止计时器。
    // 语法:
    // clearTimeout(id_of_setTimeout)
    // 参数说明:
    // id_of_setTimeout：由 setTimeout() 返回的 ID 值。该值标识要取消的延迟执行代码块。
    clearTimeout(setTimeID);
}

function theHistory() {
    // history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。
    // 注意:从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。
    // 语法：
    // window.history.[属性|方法]
    // 注意：window可以省略。
    // 使用length属性，当前窗口的浏览历史总长度
    var His =  window.history.length;
    document.getElementById("his").value = 'URL长度为' + His;
}

function GoBack() {
    // back()方法，加载 history 列表中的前一个 URL。
    // 语法：
    // window.history.back();
    // 比如，返回前一个浏览的页面，代码如下：
    // window.history.back();
    // 注意：等同于点击浏览器的倒退按钮。
    // back()相当于go(-1),代码如下:
    // window.history.go(-1);

    window.history.back();
    //window.history.go(-1);

    // go()方法，根据当前所处的页面，加载 history 列表中的某个具体的页面。
    // 语法：
    // window.history.go(number);
    // 浏览器中，返回当前页面之前浏览过的第二个历史页面，代码如下：
    // window.history.go(-2);
    // 注意：和在浏览器中单击两次后退按钮操作一样。
    // 同理，返回当前页面之后浏览过的第三个历史页面，代码如下：
    // window.history.go(3);
}

function GoForward() {
    // forward()方法，加载 history 列表中的下一个 URL。
    // 如果倒退之后，再想回到倒退之前浏览的页面，则可以使用forward()方法,代码如下:
    // window.history.forward();
    // 注意：等价点击前进按钮。
    // forward()相当于go(1),代码如下:
    // window.history.go(1);
    window.history.forward();
}

function TheURL() {
    var Hash = window.location.hash;
    var Host = window.location.host;
    var Hostname = window.location.hostname;
    var Href = window.location.href;
    var Pathname = window.location.pathname;
    var Port = window.location.port;
    var Protocol = window.location.protocol;
    var theSearch = window.location.search;

    // hash	设置或返回从井号 (#) 开始的 URL（锚）。
    // host	设置或返回主机名和当前 URL 的端口号。
    // hostname	设置或返回当前 URL 的主机名。
    // href	设置或返回完整的 URL。
    // pathname	设置或返回当前 URL 的路径部分。
    // port	设置或返回当前 URL 的端口号。
    // protocol	设置或返回当前 URL 的协议。
    // search	设置或返回从问号 (?) 开始的 URL（查询部分）。


    var URL = 'The hash: ' + Hash + '\n' +
                'The host: ' + Host + '\n' +
                'The hostname: ' + Hostname + '\n' +
                'The href: ' + Href + '\n' +
                'The pahtname: ' + Pathname  + '\n' +
                'The port: ' + Port  + '\n' +
                'The protocol: ' + Protocol  + '\n' +
                'The search: ' + theSearch;

    document.getElementById('Locat').value = URL;
}

function TheNavi() {
    // Navigator 对象包含有关浏览器的信息，通常用于检测浏览器与操作系统的版本。
    // Navigator 对象属性
    // 属性	        描述
    // appCodeName	返回浏览器的代码名。
    // appMinorVersion	返回浏览器的次级版本。
    // appName	返回浏览器的名称。
    // appVersion	返回浏览器的平台和版本信息。
    // browserLanguage	返回当前浏览器的语言。
    // cookieEnabled	返回指明浏览器中是否启用 cookie 的布尔值。
    // cpuClass	返回浏览器系统的 CPU 等级。
    // onLine	返回指明系统是否处于脱机模式的布尔值。
    // platform	返回运行浏览器的操作系统平台。
    // systemLanguage	返回 OS 使用的默认语言。
    // userAgent	返回由客户机发送服务器的 user-agent 头部的值。(返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串))
    // userLanguage	返回 OS 的自然语言设置。

    var AppcodeName = window.navigator.appCodeName;
    var AppName = window.navigator.appName;
    var AppVersion = window.navigator.appVersion;
    var PlatForm = window.navigator.platform;
    var UserAgent = window.navigator.userAgent;
    
    var Navi = 'The appCodeName: ' + AppcodeName + '\n' +
                'The appName: ' + AppName + '\n' +
                'The appVersion: ' + AppVersion + '\n' +
                'The platform: ' + PlatForm + '\n' +
                'The userAgent: ' + UserAgent;

    document.getElementById('Locat').value = Navi;
}

function TheScreen() {
    // window.screen 对象包含有关用户屏幕的信息。
    // 1. screen.height 返回屏幕分辨率的高
    // 2. screen.width 返回屏幕分辨率的宽
    // 注意:
    // 1.单位以像素计。
    // 2. window.screen 对象在编写时可以不使用 window 这个前缀。
    var WindowHeight = window.screen.height;
    var WindowWidth = window.screen.width;

    // 1. screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如任务栏。
    // 2. screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如任务栏。
    // 注意:
    // 不同系统的任务栏默认高度不一样，及任务栏的位置可在屏幕上下左右任何位置，所以有可能可用宽度和高度不一样。
    var canUseHeight = window.screen.availHeight;
    var canUseWidth = window.screen.availWidth;


    var Screen = 'The Window Height: ' + WindowHeight + 'px' + '\n' +
                    'The Window Width: ' + WindowWidth + 'px' + '\n' +
                    'The can use Height: ' + canUseHeight + 'px' + '\n' +
                    'The cae use Width: ' + canUseWidth + 'px';
    
    document.getElementById('Locat').value = Screen;
}

function eightPrictice() {
    var TheComfirm = confirm('是否要打开新的网页');
    if(TheComfirm){
        var sec = document.getElementById("second");
        var i = 5;
        var timer = setInterval(function(){
            i--;
            sec.innerHTML = i;
            if(i==0){
                clearInterval(timer);
                window.location.href =  "http://www.imooc.com/";
            }
        },1000);
    }
}

function getValue()
{
    // document是获取整个界面元素，
    // 如果你要获取ul（class="ul1"）的li，
    // 可以var Ul = document.getElementsByClassName('ul1')。
    // 获取下面的li，Ul.item().getElementsByTagName("li");

    var myH=document.getElementById("myHead");
    alert('使用getElementByID()返回的ID中的内容' + myH.innerHTML);
}
function getElements()
{
    // getElementsByName()方法
    // 返回带有指定名称的节点对象的集合。
    // 语法：
    // document.getElementsByName(name)
    // 与getElementById() 方法不同的是，通过元素的 name 属性查询元素，而不是通过 id 属性。
    // 注意:
    // 1. 因为文档中的 name 属性可能不唯一，所有 getElementsByName() 方法返回的是元素的数组，而不是一个元素。
    // 2. 和数组类似也有length属性，可以和访问数组一样的方法来访问，从0开始。
    var TheName = prompt('请输入你要查询的Name', 'sex');
    var myS = document.getElementsByName(TheName);
    alert('用getElementsByName()返回name为' + TheName + '的数量(长度)为: ' + myS.length);
}

function getTagElements()
{
    // getElementsByTagName()方法
    // 返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。
    // 语法:
    // getElementsByTagName(Tagname)
    // 说明:
    // 1. Tagname是标签的名称，如p、a、img等标签名。
    // 2. 和数组类似也有length属性，可以和访问数组一样的方法来访问，所以从0开始。

    var TheLabel = prompt('请输入你要查询的标签', 'input');
    var myI = document.getElementsByTagName(TheLabel);
    alert('使用getElementsByTagName()返回的' + TheLabel + '标签的数量(长度)为: ' + myI.length);
}

//checkBOx
function checkall(){
    var hobby = document.getElementsByTagName("input");
    for(var i = 0;i < hobby.length;i++){
        if(hobby[i].type == "checkbox"){
            hobby[i].checked = true;
        }
    }
}
function clearall(){
    var hobby = document.getElementsByName("hobby");
    for(var i = 0;i < hobby.length;i++){
        hobby[i].checked = false;
    }
}
function checkone(){
    var j=document.getElementById("wb").value;
    var hobby = document.getElementById("hobby"+j);
    hobby.checked = true;
}


//
function GetAttritube() {
    var String = null;
    var con=document.getElementsByTagName("li");
    for (var i=0; i< con.length;i++){
    // getAttribute()方法
    // 通过元素节点的属性名称获取属性的值。
    // 语法：
    // elementNode.getAttribute(name)
    // 说明:
    // 1. elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。
    // 2. name：要想查询的元素节点的属性名字
        var text = con[i].getAttribute('title');
        if(text!=null) {
            if(String == null){
                String = text + '\n';
            }
            else{
                String = String + text + '\n';
            }
        }
        else {
    //  setAttribute()方法
    // setAttribute() 方法增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
    // 语法：
    // elementNode.setAttribute(name,value)
    // 说明：
    // 1.name: 要设置的属性名。
    // 2.value: 要设置的属性值。
    // 注意：
    // 1.把指定的属性设置为指定的值。如果不存在具有指定名称的属性，该方法将创建一个新属性。
    // 2.类似于getAttribute()方法，setAttribute()方法只能通过元素节点对象调用的函数。
            con[i].setAttribute('title','置换'); //setAttribute()方法没有返回值。
            text = con[i].getAttribute('title');
            if(String == null){
                String = text + '\n';
            }
            else{
                String = String + text + '\n';
            }
        }
    }
    alert(String);
}

function TheNode() {
    var Node = document.getElementsByTagName('li');
    var String =null;
    for(var i=0;i<Node.length;i++){

        // 在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：
        // 1. nodeName : 节点的名称
        // 2. nodeValue ：节点的值
        // 3. nodeType ：节点的类型
        // 一、nodeName 属性: 节点的名称，是只读的。
        // 1. 元素节点的 nodeName 与标签名相同
        // 2. 属性节点的 nodeName 是属性的名称
        // 3. 文本节点的 nodeName 永远是 #text
        // 4. 文档节点的 nodeName 永远是 #document
        // 二、nodeValue 属性：节点的值
        // 1. 元素节点的 nodeValue 是 undefined 或 null
        // 2. 文本节点的 nodeValue 是文本自身
        // 3. 属性节点的 nodeValue 是属性的值
        // 三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
        // 元素类型    节点类型
        // 元素          1
        // 属性          2
        // 文本          3
        // 注释          8
        // 文档          9

        var text = 'nodename: ' + Node[i].nodeName + '\n' +
            'nodeValue: ' + Node[i].nodeValue + '\n' +
            'nodeTyep: ' + Node[i].nodeType + '\n';
        if (String == null){
            String = text;
        }
        else{
            String = String + text;
        }
    }
    alert(String);
}

function AccessNode() {
    var Node = document.getElementsByTagName('ul');
    // var Node = document.getElementById('TheNodeOfdiv');
    var x = Node[0].childNodes;
    var String = null;
    for(var i = 0;i<x.length;i++){
        var text = 'nodeTyep: ' + x[i].nodeType + '\n';
        if (String == null){
            String = text;
        }
        else{
            String = String + text;
        }
    }
    alert('长度为: ' + x.length + '<br/>' +String);
}

function get_firstChild() {
    // 因为在非ie浏览器中，空格，及换行符都会被视作是文本节点，所以第一个节点是<div id="con">
    // <p>javascript</p>这2个标签之间的空白部分，所以是#text。
    // 若需要必须将 HTML 调整成 <div><p>javascript</p><div>jQuery</div><h5>PHP</h5></div>的形式
    var Node = document.getElementById('TheNodeOfdiv');
    var firstChildOfNode = Node.firstChild;
    alert('第一个节点nodeName为: ' + firstChildOfNode.nodeName + '\n' +
            '第一个节点nodeType为: ' + firstChildOfNode.nodeType + '\n' +
            '第一个节点nodeValue为: ' + firstChildOfNode.nodeValue);
}

function get_lastChild() {
    var Node = document.getElementById('TheNodeOfdiv');
    var lastChildOfNode = Node.lastChild;
    alert('最后一个节点nodeName为: ' + lastChildOfNode.nodeName+ '\n' +
        '最后个节点nodeType为: ' + lastChildOfNode.nodeType + '\n' +
        '最后个节点nodeValue为: ' + lastChildOfNode.nodeValue);
}

function get_parentNode() {
    var Node = document.getElementById('ulId');
    // 获取指定节点的父节点
    // 语法：
    // elementNode.parentNode
    // 注意:父节点只能有一个。
    // 访问祖节点:
    // elementNode.parentNode.parentNode
    var parentNodeOfNode = Node.parentNode;
    var HTMLContent = parentNodeOfNode.firstChild.innerHTML;
    alert('id为' + Node.getAttribute('id') + '节点的父节点为: ' + parentNodeOfNode.nodeName + '\n' +
        '其首节点内容为: ' + HTMLContent);
}

function get_nextSibling() {
    var Node = document.getElementById('ulId');
    // 1. nextSibling 属性可返回某个节点之后紧跟的节点（处于同一树层级中）。
    // 语法：
    // nodeObject.nextSibling
    // 说明：如果无此节点，则该属性返回 null。
    var nextNodeOfNode = Node.nextSibling;
    while(nextNodeOfNode && nextNodeOfNode.nodeType != 1){// 判断是否为空白文本(是否为元素节点，元素节点的nodeType为1)
        nextNodeOfNode = nextNodeOfNode.nextSibling;
    }
    var HTMLContent = nextNodeOfNode.innerHTML;
    alert('id为' + Node.getAttribute('id') + '节点的下一个兄弟节点为: ' + nextNodeOfNode.nodeName + '\n' +
        '其内容为: ' + HTMLContent);
}

function get_previousSibling() {
    var Node = document.getElementById('ulId');
    // 2. previousSibling 属性可返回某个节点之前紧跟的节点（处于同一树层级中）。
    // 语法：
    // nodeObject.previousSibling
    // 说明：如果无此节点，则该属性返回 null。
    // 注意: 两个属性获取的是节点。Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略。
    var previousNodeOfNode = Node.previousSibling;
    while(previousNodeOfNode && previousNodeOfNode.nodeType != 1){// 判断是否为空白文本(是否为元素节点，元素节点的nodeType为1)
        previousNodeOfNode = previousNodeOfNode.previousSibling;
    }
    var HTMLContent = previousNodeOfNode.innerHTML;
    alert('id为' + Node.getAttribute('id') + '节点的下一个兄弟节点为: ' + previousNodeOfNode.nodeName + '\n' +
        '其内容为: ' + HTMLContent + '\n' + '其nodeType: ' + previousNodeOfNode.nodeType);
}

function set_appendChild() {
    // 在指定节点的最后一个子节点列表之后添加一个新的子节点。
    // 语法:
    // appendChild(newnode)
    // 参数:
    // newnode：指定追加的节点。
    var Node = document.getElementById('ulId');
    var newNode = document.createElement('li');
    var newNodeHTNLContent = prompt('请输入新加节点的内容','This is new Node of appendChild');
    newNode.innerHTML = newNodeHTNLContent;
    Node.appendChild(newNode);
}

function set_insertBefore() {
    // insertBefore() 方法可在已有的子节点前插入一个新的子节点。
    // 语法:
    // insertBefore(newnode,node);
    // 参数:
    // newnode: 要插入的新节点。
    // node: 指定此节点前插入节点。
    var Node = document.getElementById('TheNodeOfdiv');
    var set_Node = document.getElementById('ulId');
    var newNode = document.createElement('p');
    var newNodeHTNLContent = prompt('请输入新加节点的内容','This is new Node of insertBefore');
    if(newNodeHTNLContent != null) {
        newNode.innerHTML = newNodeHTNLContent;
        Node.insertBefore(newNode, set_Node);
    }
}

function use_removeChild() {
    // var content=document.getElementById("content");
    // for(var i=content.childNodes.length-1;i>=0;i--){
    //     var childNode = content.childNodes[i];
    //     content.removeChild(childNode);}
    var Node = document.getElementById('ulId');
    var i = parseInt(prompt('输入要删除的节点位置','0'));
    // while(Node.childNodes[i] && Node.childNodes[i].nodeType != 1){
    //     i++;
    // }
    var Node_array = new Array();
    var array_index = 0;
    var Node_child = Node.childNodes;
    for(var Node_index = 0; Node_index < Node_child.length; Node_index++){
        if(Node_child[Node_index] && Node_child[Node_index].nodeType == 1){
            Node_array[array_index] = Node_child[Node_index];
            array_index++;
             // document.write('Node_array[' + array_index + ']: ' + Node_array[array_index].nodeName + '<br/>')
        }
        // document.write('Node_child[' + Node_index + ']: ' + Node_child[Node_index].nodeName + ' ' +
        //     Node_child[Node_index].nodeType + '<br/>');
    }
    var removeNode = Node.removeChild(Node_array[i]);

    // removeChild() 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。
    // 语法:
    // nodeObject.removeChild(node)
    // 参数:
    // node ：必需，指定需要删除的节点。
    // 注意: 把删除的子节点赋值给 x，这个子节点不在DOM树中，但是还存在内存中，可通过 x 操作。

    var HTMLcontent = removeNode.innerHTML;
     alert('删除节点的内容为：' + HTMLcontent + '\n' + 'Node的子节点长度为: ' + Node.childNodes.length);
}

function use_replaceChild() {
    var Node = document.getElementById('ulId');

    // createElement() 方法可创建元素节点。
    // 此方法可返回一个 Element 对象。
    var newNode = document.createElement('p');

    // createTextNode() 可创建文本节点。
    // 此方法可返回 Text 对象。
    // 语法：
    // createTextNode(data)
    // 参数	描述
    // data	字符串值，可规定此节点的文本。
    // 返回值
    // 返回新创建的 Text 节点，表示指定的 data 字符串。
    var newNodeText = document.createTextNode('Node.js');
    newNode.appendChild(newNodeText);
    var oldNode = document.getElementById('liId');

    // eplaceChild 实现子节点(对象)的替换。返回被替换对象的引用。
    // 语法：
    // node.replaceChild (newnode,oldnew )
    // 参数：
    // newnode : 必需，用于替换 oldnew 的对象。
    // oldnew : 必需，被 newnode 替换的对象。
    Node.replaceChild(newNode, oldNode);
    var String = null;
    for(var index=0;index < Node.childNodes.length;index++){
        if(Node.childNodes[index] && Node.childNodes[index].nodeType == 1){
            if(String == null){
                String = Node.childNodes[index].nodeName + '\n';
            }
            else{
                String = String + Node.childNodes[index].nodeName + '\n';
            }
        }
    }
    alert('修改过后: ' + String);
}

// createTextNode 和 innerHTML的区别
// 一、createTextNode 例如:
// var element = document.createElement("div");
// element.className = "message";
// var textNode = document.createTextNode("<Strong>Hello</Strong>");
// element.appendChild(textNode);
// document.body.appendChild(element);
// 结果: <Strong>Hello</Strong>
// 二、innerHTML 例子:
// <div > <h2 id="h2"></h2></div>
// document.getElementById("h2").innerHTML = "<strong>hello</strong>";
// 结果: Hello 识别成加粗的黑体
// 三、区别
// innerHTML和createTextNode都可以把一段内容添加到一个节点中，区别是如果这段内容中有html标签（如例子中的<strong></strong>）
// 时表现就不同了，在createTextNode中会当作文本处理，不会被浏览器解析，
// 但用innerHTML就会被当作HTML代码处理（如你的例子中Hello会被加粗显示）。
// 总的来说，如果你确定要插入的内容中没有html标签，可以用innerHTML，
// 这样更简洁，但如果不能确定（比如要插入用户输入的内容）建议用createTextNode的方式。


function use_createElement() {
    //我们也可以使用setAttribute来设置属性，代码如下：
    var body= document.body;
    var btn = document.createElement("input");
    btn.setAttribute("type", "text");
    btn.setAttribute("name", "q");
    btn.setAttribute("value", "使用setAttribute");
    btn.setAttribute("onclick", "javascript:alert('This is a text!');");
    body.appendChild(btn);
    //效果：在HTML文档中，创建一个文本框，使用setAttribute设置属性值。 当点击这个文本框时，会弹出对话框“This is a text!”。
}