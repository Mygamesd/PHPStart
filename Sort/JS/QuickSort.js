/**
 * Created by Mygamesd on 2016/9/17.
 */
'use strict';
define([], function () {
    var QuickSort = function (array, left, right) {
        if(left < right){
            var i, j;
            i = left;
            j = right;
            var pivot = array[i];

            while(i < j){
                while (i < j && array[j] >= pivot){
                    j--;
                }
                if(i < j){
                    array[i] = array[j];
                    i++;
                }

                while (i < j && array[i] < pivot){
                    i++;
                }
                if(i < j){
                    array[j] = array[i];
                    j--;
                }
            }
            array[i] = pivot;
            QuickSort(array, left, i - 1);
            QuickSort(array, i + 1, right);
        }
        return array;
    };

    return {
        QuickSort: QuickSort
    }
});