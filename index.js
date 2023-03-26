var img = 1;//起始图片序号
window.onloadstart=ppt_start();//页面打开运行函数

// 开始函数
function ppt_start(){
    ppt_time = setInterval("ppt_right()",3000);
    // 设置计时器轮播图片,越小越快，可以向左轮播，也可以向右轮播，该函数即可
    // 计时器以毫秒计算，3000 即 3s=3000ms
    change_dot(img);//引用改变点颜色函数
}
// 停止函数
function ppt_stop(){
    clearInterval(ppt_time);
}
// 向左切换图片
function ppt_left(){
    img--;
    if(img<=0){
        img=4;
    }
    change_img();
    change_dot(img);
}
// 向右切换图片
function ppt_right(){
    img++;
    if(img>=5){
        img=1;
    }
    change_img();
    change_dot(img);
}
// 改变点的颜色
function change_dot(img){
    var a = document.getElementById("pd1");
    var b = document.getElementById("pd2");
    var c = document.getElementById("pd3");
    var d = document.getElementById("pd4");
    // 通过 switch 去判断并改变 css 中的 background-Color
    switch(img){
        case 1:
            a.style.backgroundColor="rgb(202, 202, 202)";
            b.style.backgroundColor="rgb(34, 34, 34)";
            c.style.backgroundColor="rgb(34, 34, 34)";
            d.style.backgroundColor="rgb(34, 34, 34)";
            break;
        case 2:
            a.style.backgroundColor="rgb(34, 34, 34)";
            b.style.backgroundColor="rgb(202, 202, 202)";
            c.style.backgroundColor="rgb(34, 34, 34)";
            d.style.backgroundColor="rgb(34, 34, 34)";
            break;
        case 3:
            a.style.backgroundColor="rgb(34, 34, 34)";
            b.style.backgroundColor="rgb(34, 34, 34)";
            c.style.backgroundColor="rgb(202, 202, 202)";
            d.style.backgroundColor="rgb(34, 34, 34)";
            break;
        case 4:
            a.style.backgroundColor="rgb(34, 34, 34)";
            b.style.backgroundColor="rgb(34, 34, 34)";
            c.style.backgroundColor="rgb(34, 34, 34)";
            d.style.backgroundColor="rgb(202, 202, 202)";
            break;
    }
}
//每个点的被点击切换对应图片
function click_dot1(){
    img=1;
    change_img();
    change_dot(img);
}
function click_dot2(){
    img=2;
    change_img();
    change_dot(img);
}
function click_dot3(){
    img=3;
    change_img();
    change_dot(img);
}
function click_dot4(){
    img=4;
    change_img();
    change_dot(img);
}
// 改变图片的函数
function change_img(){
    var a = document.getElementById("ppt");
    //                      "url(./top/top"+图片序号+".png)"
    //                            路径|     图片名    |图片后缀
    // 改变 css 中的 background-Image
    a.style.backgroundImage="url(./top/top"+img+".png)";
}