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
        var array = [2,4,3,4,6,3,2,5,6,2,3,6,5,4];
        var TheReturn = QuickSort(array);
        $('#SendArr').html(TheReturn.join(","));
    });

    /*
    * 快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。

      该方法的基本思想是：

      1．先从数列中取出一个数作为基准数。

      2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。

      3．再对左右区间重复第二步，直到各区间只有一个数。
    * */

    // 挖坑填补法
    /*
    * 1．i =L; j = R; 将基准数挖出形成第一个坑a[i]。

      2．j--由后向前找比它小的数，找到后挖出此数填前一个坑a[i]中。

      3．i++由前向后找比它大的数，找到后也挖出此数填到前一个坑a[j]中。
 
      4．再重复执行2，3二步，直到i==j，将基准数填入a[i]中。
    * */
    var QuickSort2 = function (array, left,right) {
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
            QuickSort2(array, left, i - 1);
            QuickSort2(array, i + 1, right);
        }
        return array;
    };


    $('#QuickSort2').on('click', function () {
        var array = [12,12,55,34,77,43,23,55,43,21];
        var TheReturn = QuickSort2(array, 0, array.length - 1);
        $('#SendArr').html(TheReturn.join(","));
    });


    function sortQuick(array){
        var low=0,high=array.length-1;
        var sort=function(low,high){
            if(low==high){
                return;
            }
            var key=array[low];
            var tmplow=low;
            var tmphigh=high;
            while(low<high){
                while(low<high&&key<=array[high]){
                    --high;
                }
                array[low]=array[high];
                while(low<high&&array[low]<key)
                {
                    ++low;
                }
                array[high]=array[low];
                if(low==tmplow){
                    sort(++low,tmphigh);
                    return;
                }
            }
            array[low]=key;
            sort(tmplow,low-1);
            sort(high+1,tmphigh);
        };
        sort(low,high);
        sort();
        return array;
    }
});

