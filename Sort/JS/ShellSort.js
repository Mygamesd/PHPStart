/**
 * Created by Mygamesd on 2016/9/21.
 */
'use strict';
define([], function () {

    var ShellSort = function (array) {
        function swap(array, i, k) {
            var temp = array[i];
            array[i] = array[k];
            array[k] = temp;
        }

        var Sort = function (array) {
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
        return Sort(array);
    };

    return {
        ShellSort: ShellSort
    }

});