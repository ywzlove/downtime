/**
 * ITCAST WEB
 * Created by zhousg on 2016/11/27.
 */
window.onload = function(){
    /*搜索栏*/
    search();
    /*轮播*/
    banner();
    /*倒计时*/
    downTime();
}
/*搜索栏*/
function search(){
    /*
    * 1.默认位置是全透明状态 顶部固定定位   css
    * 2.当页面滚动的时候 需要动态的改变盒子的透明度  onscroll 根据滚动的高度距离顶部的高度来确定透明度
    * 3.当页面滚动到轮播图一下的时候透明度保持不变  判断当前是不是在轮播图下面
    * */
    /*编码*/
    /*获取dom元素*/
    /*搜索盒子*/
    var searchBox = document.querySelector('.jd_header_box');
    /*轮播图盒子*/
    var bannerBox = document.querySelector('.jd_banner');
    /*获取高度*/
    var height = bannerBox.offsetHeight;

    /*2.当页面滚动的时候 需要动态的改变盒子的透明度*/
    window.onscroll = function(){
        /*滚动的高度距离顶部*/
        var top = document.body.scrollTop;/*谷歌获取方式*/
        /*var topIE = document.documentElement.scrollTop;*/
        /*计算透明度*/
        var opacity = 0;

        if(top < height){
            /*改变透明度*/
            opacity = top/height*0.85;
        }
        /*3.当页面滚动到轮播图一下的时候透明度保持不变*/
        else{
            opacity = 0.85;
        }

        /*改变透明度*/
        searchBox.style.background = 'rgba(201, 21, 35, '+opacity+')';
    }

}
function banner(){
    /*
    * 1.自动滚动                             定时器+转换位移+过渡
    * 1.1 无缝滚动                           在尾部加一张图片(瞬间 动画执行完成)
    * 1.2 无缝滑动                           在头不加图片 滑动的时候需要瞬间定位
    * 2.在滚动的同时点需要对应改变             监听索引然后改变当前样式
    * 3.轮播图滑动                           touch监听手指的x轴方向的移动让图片盒子随之位置改变
    * 4.当不超过一定距离的时候  吸附回去        三分之一  回到原来的定位  过渡
    * 5.当超过一定的距离的时候  滚动（上一张或下一张）  判断方向（手势 右滑 左滑）
    * */

    /*编码*/
    /*获取dom元素*/
    /*轮播图盒子*/
    var banner = document.querySelector('.jd_banner');
    /*宽度*/
    var width = banner.offsetWidth;
    /*图片盒子*/
    var imgBox = banner.querySelector('ul:first-child');
    /*点盒子*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');


    /*1.自动滚动 */
    var index = 1;/*重要，贯穿整个程序*/
    var timer = setInterval(function(){
        index ++;
        /*计算当前图片盒子的定位*/
        var translateX = -index * width;
        /*加过渡*/
        imgBox.style.transition = 'all 0.3s';
        imgBox.style.webkitTransition = 'all 0.3s';
        /*设置给当前的图片盒子*/
        imgBox.style.transform = 'translateX('+translateX+'px)';
        imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
    },1000);

    /*怎么时候来做无缝滚动 瞬间定位？？？*/
    /*动画结束之后怎么去判断*/
    /*过渡结束事件  transitionEnd 动画结束事件 animationEnd*/
    imgBox.addEventListener('transitionEnd',function(){
        /*什么时候会触发 没滚动一直执行一次过渡 产生一次过渡结束事件*/
        //console.log(index);
        /*1.1 无缝衔接 滚动*/
        if(index >= 9){
            index = 1;
            /*瞬间定位*/
            /*计算当前图片盒子的定位*/
            var translateX = -index * width;
            /*清除过渡*/
            imgBox.style.transition = 'none';
            imgBox.style.webkitTransition = 'none';
            /*设置给当前的图片盒子*/
            imgBox.style.transform = 'translateX('+translateX+'px)';
            imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
        }
        /*1.2 无缝滑动*/
        else if(index <= 0){
            index = 8;
            /*瞬间定位*/
            /*计算当前图片盒子的定位*/
            var translateX = -index * width;
            /*清除过渡*/
            imgBox.style.transition = 'none';
            imgBox.style.webkitTransition = 'none';
            /*设置给当前的图片盒子*/
            imgBox.style.transform = 'translateX('+translateX+'px)';
            imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
        }
        /*当前index的范围  0——8  9——1  ？ 1-8 */
        setPoint();
    });
    /*为什么没有绑定上*/
    imgBox.addEventListener('webkitTransitionEnd',function(){
        /*什么时候会触发 没滚动一直执行一次过渡 产生一次过渡结束事件*/
        //console.log(index);
        /*1.1 无缝衔接 滚动*/
        if(index >= 9){
            index = 1;
            /*瞬间定位*/
            /*计算当前图片盒子的定位*/
            var translateX = -index * width;
            /*清除过渡*/
            imgBox.style.transition = 'none';
            imgBox.style.webkitTransition = 'none';
            /*设置给当前的图片盒子*/
            imgBox.style.transform = 'translateX('+translateX+'px)';
            imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
        }
        /*1.2 无缝滑动*/
        else if(index <= 0){
            index = 8;
            /*瞬间定位*/
            /*计算当前图片盒子的定位*/
            var translateX = -index * width;
            /*清除过渡*/
            imgBox.style.transition = 'none';
            imgBox.style.webkitTransition = 'none';
            /*设置给当前的图片盒子*/
            imgBox.style.transform = 'translateX('+translateX+'px)';
            imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
        }

        /*当前index的范围  0——8  9——1  ？ 1-8 */
        setPoint();
    });


    var setPoint = function(){
        /*index 1-8*/
        for(var i = 0 ; i < points.length ; i++){
            points[i].className = ' ';
        }
        points[index-1].className = 'now';
    };

    /*3.轮播图滑动*/

    var startX = 0;/*记录刚刚触模摸屏幕的x坐标*/
    var moveX = 0;/*滑动的时候x坐标*/
    var distanceX = 0;/*滑动时候的距离*/
    var isMove = false;/*证一定滑动过 严谨*/

    imgBox.addEventListener('touchstart', function (e) {
        /*清除定时器*/
        clearInterval(timer);
        startX = e.touches[0].clientX
    });

    imgBox.addEventListener('touchmove', function (e) {
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;

        /*当前的定位是多少？*/
        /*将要去定位的位置*/
        var translateX = - index * width + distanceX;

        /*这里去定位  要不要过渡？*/
        /*清除过渡*/
        imgBox.style.transition = 'none';
        imgBox.style.webkitTransition = 'none';
        /*设置给当前的图片盒子*/
        imgBox.style.transform = 'translateX('+translateX+'px)';
        imgBox.style.webkitTransform = 'translateX('+translateX+'px)';

        console.log(distanceX);

        isMove = true;
    });

    imgBox.addEventListener('touchend', function (e) {
        /*4，5需求*/

        if(isMove){
            if(Math.abs(distanceX) < width/3){
                /*4.当不超过一定距离的时候  吸附回去*/
                /*怎么吸附回去  定为到滑动之前的位子*/
                var translateX = - index * width;
                /*加过渡*/
                imgBox.style.transition = 'all 0.3s';
                imgBox.style.webkitTransition = 'all 0.3s';
                /*设置给当前的图片盒子*/
                imgBox.style.transform = 'translateX('+translateX+'px)';
                imgBox.style.webkitTransform = 'translateX('+translateX+'px)';


            }else{
                /*5.当超过一定的距离的时候  滚动（上一张或下一张）  判断方向（手势 右滑 左滑）*/
                /*判断方向（手势 右滑 左滑）*/
                if(distanceX > 0){
                    /*右滑*/
                    /*上一张*/
                    index --;

                }else{
                    /*左滑*/
                    /*下一张*/
                    index ++;
                }
                /*计算定位*/
                var translateX = -index * width;
                /*过渡动画*/
                /*加过渡*/
                imgBox.style.transition = 'all 0.3s';
                imgBox.style.webkitTransition = 'all 0.3s';
                /*设置给当前的图片盒子*/
                imgBox.style.transform = 'translateX('+translateX+'px)';
                imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
            }
        }

        /*加定时器*/
        clearInterval(timer);/*严谨的做法*/
        timer = setInterval(function(){
            index ++;
            /*计算当前图片盒子的定位*/
            var translateX = -index * width;
            /*加过渡*/
            imgBox.style.transition = 'all 0.3s';
            imgBox.style.webkitTransition = 'all 0.3s';
            /*设置给当前的图片盒子*/
            imgBox.style.transform = 'translateX('+translateX+'px)';
            imgBox.style.webkitTransform = 'translateX('+translateX+'px)';
        },1000);
        /*重置参数*/
        startX = 0;
        moveX =0;
        distanceX =0;
        isMove = false;

    });





}
function downTime(){

}
