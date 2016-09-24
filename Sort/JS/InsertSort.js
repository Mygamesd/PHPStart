/**
 * Created by Mygamesd on 2016/9/19.
 */
'use strict';
define([], function () {
    var InsertSort = function(array){
        var i, j, pivot;
        var len = array.length;
        for(i = 1; i < len; i++){
            pivot = array[i];

            for(j = i; j > 0 && array[j - 1] > pivot; j--){
                array[j] = array[j - 1];
            }
            array[j] = pivot;
        }
        return array;
    };

    return {
        InsertSort: InsertSort
    }
});
