var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
console.log(tabs);
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}
function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }
        else{
            tabs[i].className="";
            lists[i].className="clearfix";
        }
    }
}