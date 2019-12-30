(function(){//函数立即调用
    var oCosmetics = document.getElementById("cosmetics");
    var aAdd = oCosmetics.getElementsByTagName("button");
    var aSpan = oCosmetics.getElementsByTagName("span");
    var aPrice = [];//价格
    var aNum = oCosmetics.getElementsByTagName("input");
    var oTotalPrice = document.getElementById("total-price")
    var oTotalNum = document.getElementById("total-num")
    var oClearCart = document.getElementById("clear-cart");
    for(var i=0; i<aSpan.length; i++){
        if(aSpan[i].className == "price"){
            aPrice.push(aSpan[i]);
        }
    }
    for(var i=0; i<aAdd.length; i++){
        aAdd[i].index = i;
        aAdd[i].onclick = function(){     
            oTotalPrice.innerHTML = parseFloat(aPrice[this.index].innerHTML) * aNum[this.index].value;
            oTotalNum.innerHTML = parseFloat(oTotalNum.innerHTML) +  parseFloat(aNum[this.index].value);
        };
    }
    oClearCart.onclick = function(){
        oTotalPrice.innerHTML = "0.00";
        oTotalNum.innerHTML = "0";
    }; 
}());