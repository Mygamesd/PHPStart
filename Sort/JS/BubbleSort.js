/**
 * Created by Mygamesd on 2016/9/18.
 */
'use strict';
define(["jquery"],function ($) {
    
    var BubbleSort = function (array) {
       
        function swap(items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        }

        var Sort = function (array) {
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
        return Sort(array);
    };
    
    return {
        BubbleSort: BubbleSort
    }
});