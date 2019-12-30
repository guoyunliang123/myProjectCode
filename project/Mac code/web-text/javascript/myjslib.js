function $(selector, context){
    context = context || document;
    switch(selector.charAt(0)){
        case "#": //id
            return [document.getElementById(selector.substring(1))];
            break;
        case ".": //class   
            return context.getByClass(selector.substring(1), context);
            break;
        default: //tag
            return context.getElementsByTagName(selector);
            break;
    }
}


/**
 * 查找符合className的元素
 * @param {*} className 
 * @param {*} context 
 * @return {Array}
 */
function getByClass(className, context){
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName("*");  //搜索所有的标签
    var re = new RegExp("\\b" + className + "\\b");
    for (var i=0; i<arr.length; i++){  //for循环过滤掉不想要的className
        if(re.test(arr[i].className)){  //判断每一个元素的className
            result.push(arr[i]);
        }
    }
    return result;
}


/**
 * 返回指定的元素的下一个元素兄弟
 * @param {*} elem 
 * @return 指定的元素的下一个元素兄弟
 */
function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}


/**
 * 返回指定的元素的前一个元素兄弟
 * @param {*} elem 
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}


/**
 * 查找指定元素的第一个孩子节点
 * @param {*} elem 
 */
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodeType == 1 ? elem : next(elem);
}


/**
 * 查找指定元素的最后一个孩子节点
 * @param {*} elem 
 */
function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodeType == 1 ? elem : prev(elem);  
}


//封装换区当前元素所有元素节点的方法
/**
*
*@param elem  当前元素
*@return {Array} 返回当前元素的元素节点
*/
function siblings(elem){
var arr = [];
var elements = elem.parentNode.children;
    for (var i=0; i<elements.length; i++){
        if(elements[i] != elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}


//封装在给定的当前元素前面插入一个新元素     
/**
*在给定的当然元素的前面插入一个新元素
*@param elem
*/
function before(elem, newNode){
    elem.parentNode.insertBefore(newNode, elem); 
}


//封装在给定的当前元素后面插入一个新元素
/**
*在给定的当前元素后面插入一个新元素
*@param elem
*@param newNode
*/
function after(elem, newNode){
    if(elem.nextSibling){
        before(elem.nextSibling, newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}   


/**
*@param target 被合并的对象
*@paran obj 要合并的对象
*@return 返回合并的新对象
*/
function extend(target, obj){
    for(var p in obj){
        if(typeof obj[p] === "object"){
            target[p] = extend(obj[p]);
        }else{
            target[p] = obj[p];
        }
    }
    return target;
}

function cloneObj(obj){
var newObj = {};
    for (var p in obj){
        if(typeof obj[p] === "object"){
            newObj[p] = cioneObj(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
return newObj;
}
//var o = extend(o1, o2);
//console.log(o);


/**
 * 去除字符串首位空格
 * @param {*} str 
 * @return {string}
 */
function trim(str){
    return str.replace(/^\s+|\s+$/g, "")
}


/**
 * 获取当前元素的样式
 * @param {*} elem 
 * @param {*} attr 
 * @return {*}
 */
function getStyle(elem, attr){
    if(elem.currentStyle){//IE
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){//标准浏览器
        return getComputedStyle(elem, false)[attr];
    }else{
        return elem.style[attr];
    }
}


function addEvent (elem, type, fn){
    if(elem.addEventListener){//标准
        elem.addEventListener(type, fn, false);
    }else if(elem.attachEvent){//IE
        elem[type+fn] = function(){
            fn.call(elem); //改变this的指向
        };
        elem.attachEvent("on" + type, elem[type+fn]); 
    }else{
        elem["on" +type] = fn;
    }
}


function removeEvent(elem, type, fn){
    if(elem.removeEventListener){
        elem.removeEventListener(type, fn, false);
    }else if(elem.detachEvent){
        elem.detachEvent("on" + type, elem[type+fn]);
    }else{
        elem["on" + type] = null;
    }
}