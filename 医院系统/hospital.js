var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(tabs);
console.log(lists);
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}
function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]==this){
            tabs[i].className="focus";
            lists[i].className="focus clearfix";
        }
        else{
            tabs[i].className="";
            lists[i].className="clearfix";
        }
    }
}

//定义ui-search的功能函数
$.fn.UiSearch=function(){
    var ui=$(this);
    $(".search-select",ui).on("click",function(){
        $(".search-select-list").show();
        return false;
    });
    $(".search-select-list a",ui).on("click",function(){
        $(".search-select",ui).text($(this).text());
        $(".search-select-list").hide();
        return false;
    });
    $("body").on("click",function(){
        $(".search-select-list").hide();
    })
}


$.fn.UiBackTop=function(){
    var ui=$(this);
    var el=$('<a class="ui-backtop" href=""></a>');
    ui.append(el);
    var windowHeight=$(window).height();
    $(window).on("scroll",function(){
        var top=$('body').scrollTop();
        if(top>windowHeight){
            el.show();
        }
        else{
            el.show();
        }
    });
    el.on("click",function(){
        $(window).scrollTop(0);
    });
}



//页面的脚本逻辑
$(function(){
    $(".ui-search").UiSearch();
    $("body").UiBackTop();
})



