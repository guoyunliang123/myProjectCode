define([], function(){
    function isArray(arr){
        if(arr.constructor == Array && arr instanceof Array){ //判断是不是个数组
            return true;
        }
        return false;
    }
    return isArray;
});