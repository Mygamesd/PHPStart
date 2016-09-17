/**
 * Created by Mygamesd on 2016/7/25.
 */
'use strict';
function myfunction() {
    var x = document.getElementById('demo');
    var pageinput = prompt('请输入要改变的内容','My first javascript');
    x.innerHTML = pageinput

}

function changeimg() {
    var element = document.getElementById('myimg');
    if(element.src.match('bulbon')){
        element.src = "CSS/img/eg_bulboff.gif";
        /*在js中，路径现对于引入该js的html为准*/
    }
    else{
        element.src = "CSS/img/eg_bulbon.gif";
    }
}

function check_number() {
    var x = document.getElementById('demo_input').value;
    if(x==""||isNaN(x))
    {
        alert("Not Numeric");
    }
}

function get_id() {
    var The_id = document.getElementById('demo_getid');
    // alert(The_id.innerHTML);
    if(The_id.innerHTML == 'My First Paragraph'){
        The_id.innerHTML = 'My First Javascript';
    }else{
        The_id.innerHTML = 'My First Paragraph';
    }

}

function statement(){
    var carname = 'vovo';
    var carname;
    var x = document.getElementById('demo_getid');
    x.innerHTML = carname;
}

function new_array() {
    var arr = ["Audi","BMW","Volvo"];
    // var arr = new Array();
    // arr[0] = 'Audi';
    // arr[1] = 'BMW';
    // arr[2] = 'Volvo';
    var x = document.getElementById('demo_getid');
    x.innerHTML=arr[0] + arr[1] + arr[2];
}

function new_object() {

    // person=new Object();
    // person.firstname="Bill";
    // person.lastname="Gates";
    // person.age=56;
    // person.eyecolor="blue";
    var preson = {
        firstname: 'Bill',
        lastname: 'Great',
        id: 5566
    };

    var x = document.getElementById('demo_getid');
    var page_input = prompt('请输入你要查询的内容','firstname');
    if(page_input == 'firstname'){
        x.innerHTML = 'Firstname is ' + preson.firstname;
    }
    else if (page_input == 'lastname'){
        x.innerHTML = 'Lasttname is ' + preson["lastname"];
    }
    else if (page_input == 'id'){
        x.innerHTML = 'Id is ' + preson.id;
    }
}

function new_func(name, job) {
    alert('Welcome' + name + job);
}

function new_func_return() {
    var num1 = parseInt(prompt('请输入第一个数字'));
    var num2 = parseInt(prompt('请输入第二个数字'));
    function sum_func(num1,num2) {
        if (num2 == 0){
            return;
        }
        else{
            return num1 / num2;
        }
    }
    var sum = sum_func(num1,num2);
    if(sum==undefined)
    {
        alert('除数不能为0');
    }
    else{
        alert(sum);
    }
}


function use_switch_case() {
    var day=new Date().getDay();
    var x;
    switch (day)
    {
        case 0:
            x="Today it's Sunday";
            break;
        case 1:
            x="Today it's Monday";
            break;
        case 2:
            x="Today it's Tuesday";
            break;
        case 3:
            x="Today it's Wednesday";
            break;
        case 4:
            x="Today it's Thursday";
            break;
        case 5:
            x="Today it's Friday";
            break;
        case 6:
            x="Today it's Saturday";
            break;
        default:
            x="ERROR!";
    }

    var y = document.getElementById('demo_getid');
    y.innerHTML = x;
}

function use_for_in() {
    var x;
    var text = "";
    var person={fname:"John",lname:"Doe",age:25};

    for (x in person) {
        text = text + person[x];
    }
    document.getElementById('demo_getid').innerHTML = text;
}

function message() {
    var text = "";
    try{
        adddlert("hello");
    }catch(er) {
        text = "本页出现错误!\n\n";
        text += "错误描述:" + er.message + "\n\n";
        text += "按确定结束";
        alert(text);
    }
}

function throw_out() {
    try{
        var x = document.getElementById('throw_check').value;
        if(x == "")  throw "值为空";
        if(isNaN(x)) throw "不是数字";
        if(x > 10)   throw "太大";
        if(x < 5)    throw "太小";
    }catch(er) {
        var y=document.getElementById("mess");
        y.innerHTML="错误：" + er + "。";
    }
}

function validate_form(thisform)
{
    if (validate_required(thisform.email,"Email must be filled out!")==false)
    {
        thisform.email.focus(); /*将焦点移到文本框中*/
        return false;
    }
}


function validate_required(field,alerttxt)
{
    if (field.value==null||field.value=="")
    {
        alert(alerttxt);
        return false;
    }
    var apos = field.value.indexOf("@");
    var dotpos=field.value.lastIndexOf(".");
    if (apos<1||dotpos-apos<2)
    {
        alert(alerttxt);
        return false;
    }
    else {
        return true;
    }
}

function change_css() {
    var x = document.getElementById('demo_style');

    /*x.style.color = "red";*/
    if(x.className == 'button_class'){
        x.className = '';
    }else{
        x.className = 'button_class';
    }
}


// onload 和 onunload 事件
// onload 和 onunload 事件会在用户进入或离开页面时被触发。
// onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
// onload 和 onunload 事件可用于处理 cookie。
window.onload=function(){
    if(document.getElementById("demo_use") != null){
    document.getElementById("demo_use").onclick=function(){
                                                            var x = document.getElementById('demo_style');
                                                            x.className = '';
                                                        };
    }
    // function displayDate(){
    //     document.getElementById("demo").innerHTML=Date();
    // }
};

function on_change() {
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();
}

function mDown(obj)
{
    obj.style.backgroundColor="#1ec5e5";
    obj.innerHTML="请释放鼠标按钮"
}

function mUp(obj)
{
    obj.style.backgroundColor="green";
    obj.innerHTML="请按下鼠标按钮"
}

function mOver(obj)
{
    obj.innerHTML="谢谢"
}

function mOut(obj)
{
    obj.innerHTML="把鼠标移到上面"
}

function add_newp() {
    // 这段代码创建新的 <p> 元素：
    var para=document.createElement("p");
    // 如需向 <p> 元素添加文本，您必须首先创建文本节点。这段代码创建了一个文本节点：
    var node=document.createTextNode("这是新段落。");
    // 然后您必须向 <p> 元素追加这个文本节点：
    para.appendChild(node);

    // 最后您必须向一个已有的元素追加这个新元素。
    // 这段代码找到一个已有的元素：
    var element=document.getElementById("div1");
    // 这段代码向这个已有的元素追加新元素：
    element.appendChild(para);
}

function create_obj() {
    //使用构造函数来创建对象
    function person(firstname,lastname,age,eyecolor)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.eyecolor=eyecolor;
        this.changeName=changeName;
        function changeName(name)
        {
            this.lastname=name;
        }
    }

    var myFather=new person("Bill","Gates",56,"blue");
    myFather.sal = 50000;

    var myMother=new person("Steve","Jobs",56,"green");
    myMother.changeName("Ballmer");

    var text = myFather.firstname + " " + myFather.lastname + " " + myFather.age + " " + myFather.eyecolor + " " + myFather.sal;
    document.getElementById('demo_create_obj').innerHTML = text;
    text = myMother.firstname + " " + myMother.lastname + " " + myMother.age + " " + myMother.eyecolor;
    document.getElementById('demo_create_obj2').innerHTML = text;
}

function startTime()
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
// add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('show_time').innerHTML=h+":"+m+":"+s;
    var t = setTimeout('startTime()',500);
    // clearTimeout(t)可以停止由setTimeout发起的计时事件
    // t 为setTimeout返回的一个对象
}

function checkTime(i)
{
    if (i<10)
    {i="0" + i;}
    return i;
}

function show_window() {
    var win_width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var win_height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    var text = "浏览器窗口的内部宽度: " + win_width + " 浏览器窗口的内部高度: " + win_height;
    document.getElementById('show_window').innerHTML = text;
}

function show_screen() {
    var screen_width = screen.availWidth;
    var screen_height = screen.availHeight;
    
    var text = '可用窗口宽度:' + screen_width + ' 可用窗口高度: ' +screen_height;
    document.getElementById('show_screen').innerHTML = text;
    
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

    document.getElementById('show_text').value = URL;
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

    var AppcodeName = navigator.appCodeName;
    var AppName = navigator.appName;
    var AppVersion = navigator.appVersion;
    var PlatForm = navigator.platform;
    var UserAgent = navigator.userAgent;

    var Navi = 'The appCodeName: ' + AppcodeName + '\n' +
        'The appName: ' + AppName + '\n' +
        'The appVersion: ' + AppVersion + '\n' +
        'The platform: ' + PlatForm + '\n' +
        'The userAgent: ' + UserAgent;

    document.getElementById('show_text').value = Navi;
}

function set_time() {
    var TheConfirm = confirm('是否要打开新的网页');
    if(TheConfirm){
        var sec = document.getElementById('sec');
        var i = parseInt(prompt('请问要在多少秒后打开网页','5'));
        // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
        // setInterval 是Html DOM 方法
        
        var timer = setInterval(function () {
            i--;
            sec.innerHTML = i;
            if(i == 0){
                // setInterval() 方法会不停地调用函数，
                // 直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
                clearInterval(timer);
                location.href = 'http://www.bilibili.com/';
            }
        },1000);
    }
    else{
        alert("你取消了打开新网页" + '\n' + "添加折行。");
    }
}

function get_cookie(c_name) {
    if(document.cookie.length > 0){
        var c_start = document.cookie.indexOf(c_name + '=');
        if(c_start != -1){
            c_start = c_start + c_name.length + 1; // 因为有个 = 号，所以要加1
            var c_end=document.cookie.indexOf(";",c_start);
            if(c_end == -1)
                c_end = document.cookie.length;
            return decodeURI(document.cookie.substring(c_start,c_end));
        }
        return "";
    }
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +encodeURI(value)+//decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码。
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function checkCookie()
{
    var username=get_cookie('username');
    if (username!=null && username!="")
    {
        alert('Welcome again '+username+'!');
    }
    else
    {
        username=prompt('Please enter your name:',"");
        if (username!=null && username!="")
        {
            setCookie('username',username,1);
        }
    }
}

function button_show(name) {
    name.className = 'button_show';
}

function button_out(name) {
    name.className = 'button_class';
}
