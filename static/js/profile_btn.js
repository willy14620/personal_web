var btn_1 = document.querySelector("#btn-1");
var btn_2 = document.querySelector("#btn-2");
var btn_3 = document.querySelector("#btn-3");
var page_1 = document.querySelector("#page-1");
var page_2 = document.querySelector("#page-2");
var page_3 = document.querySelector("#page-3");

btn_1.addEventListener("click", function() {
    if(page_1.style.display != "block"){
        hide();
        show(btn_1, page_1);
    }
});

btn_2.addEventListener("click", function() {
    if(page_2.style.display != "block"){
        hide();
        show(btn_2, page_2);
    }
});

btn_3.addEventListener("click", function() {
    if(page_3.style.display != "block"){
        hide();
        show(btn_3, page_3);
    }
});

function hide(){
    for(let i=1;i<=document.querySelectorAll("button.sidebar-item").length;i++){
        document.querySelector("#btn-"+i).style.backgroundColor = "rgb(51 ,51 ,51)";
        document.querySelector("#btn-"+i).style.color = "white";
        document.querySelector("#page-"+i).style.display = "none";
    }
}

function show(btn, page){
    btn.style.backgroundColor = "white";
    btn.style.color = "rgb(51, 51, 51)";
    page.style.display = "block";
}