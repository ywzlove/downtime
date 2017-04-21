/**
 * ITCAST WEB
 * Created by zhousg on 2016/11/27.
 */
/*公用方法的封装*/
//命名空间 itcast 在这对象里面
window.itcast = {};
/*封装的是过渡结束事件方法函数*/
itcast.addTransitionEnd = function(dom,callback){

    if(!dom || typeof dom != 'object') return false;

    dom.addEventListener('webkitTransitionEnd',function(){
        /*相同的业务逻辑*/
        callback && callback();
        /*if(callback){
            callback();
        }*/
    });
    dom.addEventListener('transitionEnd',function(){
        /*相同的业务逻辑*/
        callback && callback();
    });
};


