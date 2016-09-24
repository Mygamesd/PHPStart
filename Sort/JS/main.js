/**
 * Created by Mygamesd on 2016/9/23.
 */
'use strict';
requirejs.config({
    paths: {
        "jquery": "jquery-2.2.4.min",
        "HeapSort": "HeapSort",
        "QuickSort": "QuickSort",
        "MergeSort": "MergeSort",
        "BubbleSort": "BubbleSort",
        "SelectSort": "SelectSort",
        "InsertSort": "InsertSort",
        "ShellSort": "ShellSort",
        "ButtonCSS": "ButtonCSS"
    }
});

require(["jquery", "HeapSort","QuickSort","MergeSort","BubbleSort","SelectSort","InsertSort","ShellSort","ButtonCSS"],
    function ($,HS,QS,MS,BS,SS,IS,SL) {

        var array_len = 1000000;
        var array = [];
        var i;
        for(i = 0; i < array_len; i++){
            array[i] = parseInt(Math.random()*10000-5000);
        }

        var select = 0;
        var Sort_arr = ["QuickSort","HeapSort","MergeSort","BubbleSort","SelectSort","InsertSort","ShellSort"];
        $('.Which_sort').html(Sort_arr[select]);
        $('.warp_menu').find('a').on('click',function () {

            select = $('.warp_menu').find('a').index(this);
            $('.Which_sort').html(Sort_arr[select]);
        });

        $('#Sort_Btn').on('click', function () {
            // $('#Sort_See').html(select);
            var startTime;
            var stopTime;

            var len = parseInt($('#Sort_len').val());
            var a = array.slice(0,len);
            console.log(array);
            console.log(a);

            if(select == 0){
                startTime = new Date().getTime();
                QS.QuickSort(a, 0, a.length - 1);
                stopTime = new Date().getTime();
            }
            else if(select == 1){
                startTime = new Date().getTime();
                HS.HeapSort(a);
                stopTime = new Date().getTime();
            }
            else if(select == 2){
                startTime = new Date().getTime();
                MS.MergeSort(a);
                stopTime = new Date().getTime();
            }
            else if(select == 3){
                startTime = new Date().getTime();
                BS.BubbleSort(a);
                stopTime = new Date().getTime();
            }
            else if(select == 4){
                startTime = new Date().getTime();
                SS.SelectSort(a);
                stopTime = new Date().getTime();
            }
            else if(select == 5){
                startTime = new Date().getTime();
                IS.InsertSort(a);
                stopTime = new Date().getTime();
            }
            else if(select == 6){
                startTime = new Date().getTime();
                SL.ShellSort(a);
                stopTime = new Date().getTime();
            }


            var the_Time = stopTime - startTime;
            var myS = Math.floor(the_Time/ 1000) % 60;
            var myMS = Math.floor(the_Time) % 1000;
            $('#Sort_See').html(myS + 's ' + myMS + 'ms');
        });

    
});

