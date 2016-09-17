/**
 * Created by Mygamesd on 2016/9/17.
 */
$(document).ready(function () {

    /**
     * @return {string}
     */
    var QuickSort = function (arr) {
        if(arr.length <= 1){
           return arr;
        }

        var left = [];
        var right = [];
        var pivot = arr[0];

        for (var i = 1; i < arr.length; i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return QuickSort(left).concat(pivot, QuickSort(right));
    };


    $('#QuickSort').on('click', function () {
        var array = [12,12,55,34,77,43,23,55,43,21];
        var TheReturn = QuickSort(array);
        $('#SendArr').html(TheReturn.join(","));
    })
});

