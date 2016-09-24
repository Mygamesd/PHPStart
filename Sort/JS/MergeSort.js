/**
 * Created by Mygamesd on 2016/9/24.
 */
'use strict';
define([],function () {
    // var MergeSort = function(array) {
    //     function sort(array, first, last) {
    //         first = (first === undefined) ? 0 : first;
    //         last = (last === undefined) ? array.length - 1 : last;
    //         if (last - first < 1) {
    //             return;
    //         }
    //         var middle = Math.floor((first + last) / 2);
    //         sort(array, first, middle);
    //         sort(array, middle + 1, last);
    //         var f = first,
    //             m = middle,
    //             i,
    //             temp;
    //         while (f <= m && m + 1 <= last) {
    //             if (array[f] >= array[m + 1]) { // 这里使用了插入排序的思想
    //                 temp = array[m + 1];
    //                 for (i = m; i >= f; i--) {
    //                     array[i + 1] = array[i];
    //                 }
    //                 array[f] = temp;
    //                 m++
    //             } else {
    //                 f++
    //             }
    //         }
    //         return array;
    //     }
    //     return sort(array);
    // };

    var MergeSort = function (array) {

        var Merge = function (array, p, lpos, rpos, rightEnd) {
            var i, leftEnd, Number, temPos;
            leftEnd = rpos - 1;
            Number = rightEnd - lpos + 1;
            temPos = lpos;

            while (lpos <= leftEnd && rpos <= rightEnd){
                if (array[lpos] <= array[rpos]){
                    p[temPos++] = array[lpos++];
                }
                else{
                    p[temPos++] = array[rpos++];
                }
            }

            while (lpos <= leftEnd){
                p[temPos++] = array[lpos++];
            }
            while (rpos <= rightEnd){
                p[temPos++] = array[rpos++];
            }

            for (i = 0; i < Number; i++, rightEnd--){
                array[rightEnd] = p[rightEnd];
            }
        };

        var MSort = function (array, p, left, right) {
            if (left < right){
                var center = Math.floor((left + right) / 2);
                MSort(array, p, left, center);
                MSort(array, p, center + 1, right);
                Merge(array, p, left, center + 1, right);
            }
        };


        var Sort = function(array){
            var p = new Array(array.length);
            MSort(array, p, 0, array.length - 1);
            return array;
        };

        return Sort(array);
    };


    return {
        MergeSort: MergeSort
    }
});

