<template>
  <div id="goods3">
    <div class="seckill-goods" id="lists">
                <ul class="clearfix active">
                    <li>
                        <div class="bg">
                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1593330564.86892796.jpg" alt="">
                        </div>
                        <div class="info">
                            <a href="" class="name">日常元素抽纸 青春版 24包一箱</a>
                            <p class="tips">先进加工，湿水不易破</p>
                            <p class="price">27.9元<del>32.9元</del></p>
                            <a href="" class="btn">提醒我</a>
                            <p class="person">已有55555人设置提醒</p>
                        </div>
                    </li>
                </ul>
            </div>
  </div>
</template>

<script>
export default {
  name:'Goods3'
}
</script>

<style>
body,ul,li{
    margin: 0;
    padding: 0;
}
.topbar{
    /*border: 1px solid black;*//*调试的时候加边框*/
    background-color: #333;
    height: 40px;
}
.topbar a{
    font-size: 12px;
    color: #b0b0b0;
}
.topbar a:hover{
    color: #fff;
}
.container{
    margin: 0 auto;/*居中，上下是0 左右是auto*/
    width: 1226px;
    /*border: 1px solid black;*/
}
/*下面两句用来解决浮动带来的边框塌陷*//*clearfix用来清理浮动带来的问题*/
.container::before,.container::after,.clearfix::before,.clearfix::after{
    content: "";
    display: table;
}
.container::after,.clearfix::after{
    clear: both;
}
.topbar-nav{
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 0;/*去掉不同标签间的空格*/
}
.topbar-nav span{
    font-size: 12px;
    height: 40px;
    margin: 0.5em;
    line-height: 40px;
    color: #424242;
}
.topbar-info,.topbar-cart{
    float: right;
    margin-right: 15px;
}
a{
    text-decoration: none;/*去掉下划线*/
}
.topbar-cart a{
    display: block;/*先设置为块元素*/
    height: 40px;
    line-height: 40px;/*字体高度*/
    background-color: #424242;
    width: 120px;
    text-align: center;
}
.topbar-cart span{
    margin-left: -4px;/*向左移动4个像素*/
    font-size: 12px;
}
.topbar-cart a:hover{
    background-color: #fff;
    color: #ff6700;
}
.topbar-info a{
    line-height: 40px;
    padding: 0px 5px;/*左右间距拉大*/
}
.xiaoxi{
    padding: 0 10px;
    
}



.header{
    height: 100px;
}
.header-logo{
    float: left;
    height: 55px;
    margin-top: 22px;
    width: 62px;
    /*border: 1px solid black;*/
}
.header-nav{
    float: left;
    width: 820px;
    height: 100px;
    /*border: 1px solid black;*/
}
.header-search{
    float: right;
    width: 296px;
    height: 50px;
    margin-top: 25px;
    /*border: 1px solid black;*/
}

.header-logo img{
    height: 55px;
    width: 55px;
    display: block;
}
ul{
    list-style-type: none;/*去掉无序列表里面的点*/
}
.nav-list{
    width: 820px;
    height: 100px;
    font-size: 16px;
    padding: 12px 0 0 30px;
}
.nav-item{
    float: left;
}
.nav-item a{
    display: block;
    padding: 26px 10px 38px;/*通过调整内边距，使得点击范围变大*/
    color: #333;
}
.nav-item a:hover{
    color: #ff6700;
}
.search-form{
    position: relative;/*通过定位把没在一行的两个东西放在一行*/
    display: block;
    width: 296px;
    height: 50px;
}
.search-text{
    position: absolute;
    right: 51px;
    top: 0px;
    display: block;
    height: 50px;
    width: 245px;
    line-height: 50px;

}
.search-btn{
    position: absolute;
    right: 0px;
    height: 0px;
    display: block;
    height: 50px;
    width: 51px;
}
.search-btn:hover{
    background-color: #ff6700;
    color: #b0b0b0;
}




.seckill{
    background-color: #f5f5f5;
    height: 730px;
}
.seckill-head{
    margin-top: 19px;
    
}
h1{
    text-align: center;
    color: #ff6700;
    padding-top: 25px;
    
}

.seckill-nav ul{
    height: 68px;
    background-color: #424242;

}
.seckill-nav li{
    display: block;
    float: left;
    color: #fff;
    height: 68px;
    width: 20%;
    line-height: 68px;
    text-align: center;
    cursor:pointer;/*鼠标移动上去有小手*/
    background-color: gray;
}
.seckill-nav .active{
    background-color: #f1393a;
}
.seckill-nav li em{
    display: inline-block;
    font-style: normal;/*去掉em 标签全本的斜体样式*/
    font-size: 18px;
    line-height: 1;/*与字体一样大小*/
    vertical-align: middle;
}
.seckill-nav li span{
    display: inline-block;
    font-size: 15px;
    line-height: 1;
    vertical-align: middle;
    margin-left: 15px;
}
.seckill-goods li{
    float: left;
    width: 400px;
    height: 190px;
    /*border: 1px solid black;*/
    margin-right: 13px;
    margin-bottom: 13px;
    background-color: #fff;
}
.seckill-goods ul{
    /*border: 1px solid black;*/
    margin-right: -13px;/*加起来宽度超了，把最右边的块（也就是第三个块）的右外边距消除掉*/
    margin-top: 20px;
    display: none;/*先把商品全部隐藏*/
}
.seckill-goods .active{
    display: block;/*加了这个classname的能够显示*/
}
.seckill-goods .bg{
    height: 190px;
    width: 190px;
    /*border: 1px solid black;*/
    float: left;
}
.seckill-goods .info{
    float: right;
    width: 190px;
    height: 190px;
   /* border: 1px solid black;*/
    padding-top: 20px;/*通过调整父类的内边距代替调整子类的外边距*/
}
.seckill-notice{
    font-size: 12px;
    color: #999;
    margin-top: 100px;
    padding-bottom: 35px;
}
.bg img{
    display: block;
    height: 190px;
    width: 190px;
}
.info .name{
    color: #333;
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    display: block;
    white-space: nowrap;/*取消字数多了自动换行*/
    overflow: hidden;/*隐藏超出的部分*/
    text-overflow: ellipsis;/*超出部分显示...*/
    margin-left: 10px;
}
.info .tips{
    font-size: 12px;
    color: #b0b0b0;
    line-height: 12px;
    margin-top: 10px;
    margin-left: 10px;
}
.info .price{
    font-size: 16px;
    line-height: 16px;
    color: #f1393a;
    margin-top: 14px;
    margin-left: 10px;
}
.info .price del{
    color: #999;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
}
.info .btn{
    display: inline-block;
    height: 28px;
    width: 118px;
    font-size: 14px;
    color: #fff;
    background-color: #f1393a;
    text-align: center;
    line-height: 28px;
    margin-left: 10px;
}
.person{
    font-size: 12px;
    height: 12px;
    color: #999;
    margin-top: 10px;
    margin-left: 10px;
}
</style>