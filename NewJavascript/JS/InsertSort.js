/**
 * Created by Mygamesd on 2016/9/19.
 */
$(document).ready(function(){

    /*
    * 直接插入排序(Insertion Sort)的基本思想是：每次将一个待排序的记录，按其关键字大小插入到前面已经排好序的子序列中的适当位置，
    * 直到全部记录插入完成为止。

     设数组为a[0…n-1]。

     1.      初始时，a[0]自成1个有序区，无序区为a[1..n-1]。令i=1

     2.      将a[i]并入当前的有序区a[0…i-1]中形成a[0…i]的有序区间。

     3.      i++并重复第二步直到i==n-1。排序完成。
    * */

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

    var $InsertSort =  $('.InsertSort');
    $InsertSort.find('button').eq(0).on('click', function () {
        var array = [21,32,343,65,23,76,231];
        var Search = InsertSort(array);
        $InsertSort.find('p').eq(0).html(Search.join(','));
    })
});
