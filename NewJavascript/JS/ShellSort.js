/**
 * Created by Mygamesd on 2016/9/21.
 */
$(document).ready(function(){

    function swap(array, i, k) {
        var temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }

    var ShellSort = function (array) {
        var i, j, gap, len;
        len = array.length;
        gap = Math.floor(len / 2);

            for(gap; gap > 0; gap = Math.floor(gap / 2)){
                for(i = gap; i < len; i++){
                    for(j = i;j-gap >= 0 && array[j - gap] > array[j]; j -= gap){
                        swap(array, j, j - gap);
                    }
                }
            }
        return array;
    };

    var $ShellSort = $('.ShellSort');
    $ShellSort.find('button').eq(0).on('click', function () {
        var array = [12,32,54,76,43,12,12,43,65,43,32];
        var Search = ShellSort(array);
        $ShellSort.find('p').eq(0).html(Search.join(','));
        // $ShellSort.find('p').eq(0).html('ShellSort');
    });

    var ShellSort2 = function(array) {
        var length = array.length,
            gap = Math.floor(length / 2);
        while (gap > 0) {
            for (var i = gap; i < length; i++) {
                for (var j = i; 0 < j; j -= gap) {
                    if (array[j - gap] > array[j]) {
                        swap(array, j - gap, j);
                    } else {
                        break;
                    }
                }
            }
            gap = Math.floor(gap / 2);
        }
        return array;
    };
    
    $ShellSort.find('button').eq(1).on('click', function () {
        var array = [22,42,64,86,53,22,22,53,65,53,32];
        var Search = ShellSort2(array);
        $ShellSort.find('p').eq(0).html(Search.join(','));
        // $ShellSort.find('p').eq(0).html('ShellSort');
    });



});
