define(["isarray"], function(isArray){
    function sort(arr){
        if(isArray(arr)){
            return arr.sort(function(a, b){
                return a - b;
            });
        }else{
            return "传入的参数不是一个数组";
        }
    }
    return sort;
});  //给数组进行排序