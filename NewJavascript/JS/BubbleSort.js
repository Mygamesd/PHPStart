/**
 * Created by Mygamesd on 2016/9/18.
 */
$(document).ready(function () {

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    var BubbleSort = function (array) {
        var i, j, len;
        len = array.length;

        for(i = 0; i < len; i++){
            for(j = 1; j < len - i; j++){
                if(array[j-1] > array[j]){
                    swap(array, j-1, j);
                }
            }
        }
        return array;
    };

    var $BubbleButton = $('#BubbleSort_div').find('button');

    $BubbleButton.eq(0).on('click', function () {
        var array = [2, 3, 2, 2, 1, 7, 9];
        var Search = BubbleSort(array);
        $('#SendArr').html(Search.join(','));
    });
    
    // 添加一个标识，如果再一次排序中，没有发生任何的交换，则表示排序已经完成
    // 并退出排序循环
    var BubbleSort2 = function (array) {
        var j, len;
        var flag = true;

        len = array.length;

        while(flag){
            flag = false;
            for(j = 1; j < len; j++){
                if(array[j - 1] > array[j]){
                    swap(array, j-1, j);
                    flag = true;
                }
            }
            len--;
        }
        return array;
    };

    $BubbleButton.eq(1).on('click', function () {
        var array = [22, 32, 22, 22, 21, 72, 92];
        var Search = BubbleSort2(array);
        $('#SendArr').html(Search.join(','));
    });


    // 添加一个标识，用来标记每次排序后，最后一次交换的下标，也就是位置
    // 表明，标识后面的数没有位置没有发生变化，也就是说后面的数是有序的
    // 因此，我们只需要对标识之前的数进行排序
    var BubbleSort3 = function (array) {
        var i, len, flag;
        len = array.length;

        flag = len;

        while(flag > 0){
            flag = 0;
            for(i = 1; i < len; i++){
                if(array[i - 1] > array[i]){
                    swap(array, i-1, i);
                    flag = i;
                }
            }
            len = flag;
        }

        return array;
    };

    $BubbleButton.eq(2).on('click', function () {
        var array = [32, 33, 32, 32, 31, 73, 93];
        var Search = BubbleSort3(array);
        $('#SendArr').html(Search.join(','));
    })


    
});