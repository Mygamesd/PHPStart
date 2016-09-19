/**
 * Created by Mygamesd on 2016/9/19.
 */
$(document).ready(function(){

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }
    /*
    * 直接选择排序和直接插入排序类似，都将数据分为有序区和无序区，
    * 所不同的是直接播放排序是将无序区的第一个元素直接插入到有序区以形成一个更大的有序区，
    * 而直接选择排序是从无序区选一个最小的元素直接放到有序区的最后。

      设数组为a[0…n-1]。

      1.      初始时，数组全为无序区为a[0..n-1]。令i=0

      2.      在无序区a[i…n-1]中选取一个最小的元素，将其与a[i]交换。交换之后a[0…i]就形成了一个有序区。

      3.      i++并重复第二步直到i==n-1。排序完成。
    *
    * */
   var SelectSort = function (array) {
       var i, j, minIndex;
       var len = array.length;

       for(i = 0; i < len; i++){
           minIndex = i;
           for(j = i + 1; j < len; j++){
               if(array[j] < array[minIndex]){
                   minIndex = j;
               }
           }
           swap(array, i, minIndex);
       }
       return array;
   };

    var $SelectSort =  $('.SelectSort');
    $SelectSort.find('button').eq(0).on('click', function () {
        var array = [21,32,343,65,23,76,231];
        var Search = SelectSort(array);
        $SelectSort.find('p').eq(0).html(Search.join(','));
    })
});