(function(){
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImgs = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oProductMain = document.getElementById("product-main");
    var oWrapper = oProductMain.getElementsByClassName("wrapper")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex = 0;
    for(var i=0; i<aSmallImgs.length; i++){
        aSmallImgs.index = i;
        aSmallImgs[i].onclick = function(){
            nowIndex = this.index;
            changeImg();
        };
    }

    oLeft.onclick = oRight.onclick = function(){
        if( this === oRight){
            nowIndex++;
            if(nowIndex == aSmallImgs.length){
                nowIndex = 0;                      
            }
        }else{
           nowIndex--;
            if(nowIndex == -1){
                nowIndex = aSmallImgs.length - 1;
            }
        }
        changeImg();
    };

    function changeImg (){
        oBigImg.src = aSmallImgs[nowIndex].src;
        for (var i = 0; i < aSmallImgs.length; i++) {
            aSmallImgs[i].className = "";
        }
        aSmallImgs[nowIndex].className = "selected";
        //小图片移动
        if(nowIndex == 0){
            //oSmallPic.style.left = 0;
            animate(oSmallPic, {
                left: 0
            });
        }else{
            //oSmallPic.style.left = -(aSmallImgs[0].offsetWidth + 10) + "px";
            animate(oSmallPic, {
                left: -(aSmallImgs[0].offsetWidth + 10)
            });
        }
    }


/* 
小图片移动规则：
下标            移动距离
 0                0
 1                1*width
 2                1*width
 3                1*width
*/



    //放大镜
    var oDrag = document.getElementById("drag");
    var oMagnify = document.getElementById("magnify");
    var oMask = document.getElementById("mask");
    var oMagnifyImg = oMagnify.getElementsByTagName("img")[0];
    oMask.onmouseover = function(){
        oDrag.style.display = "block";
        oMagnify.style.display = "block";
    };
    oMask.onmouseout = function(){
        oDrag.style.display = "none";
        oMagnify.style.display = "none";
    };
    oMask.onmousemove = function(e){
        e = e || window.event
        var left = e.pageX - oWrapper.offsetLeft - oDrag.offsetWidth / 2;
        var top = e.pageY - oProductMain.offsetTop - oDrag.offsetHeight / 2;
        if(left <= 10){
            left = 10;
        }
        if(top <= 10){
            top = 10;
        }
        var maxX = oBigPic.offsetWidth - oDrag.offsetWidth - 10;
        if(left >= maxX){
            left = maxX;
        }
        var maxY = oBigPic.offsetHeight - oDrag.offsetHeight - 10;
        if(top >= maxY){
            top = maxY;
        }
        oDrag.style.left = left + "px";
        oDrag.style.top = top + "px";
    
    
        //右边大图片移动
        var scaleX = left / maxX;
        var scaleY = top / maxY;
        oMagnifyImg.style.left = -scaleX * (oMagnifyImg.offsetWidth -oMagnify.offsetWidth) + "px";
        oMagnifyImg.style.top = -scaleY * (oMagnifyImg.offsetHeight - oMagnify.offsetHeight) + "px";  
    };
})();