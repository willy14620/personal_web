var btn_1 = document.querySelector("#btn-1");
var btn_2 = document.querySelector("#btn-2");
var page_1 = document.querySelector("#page-1");
var page_2 = document.querySelector("#page-2");

btn_1.addEventListener("click", function() {
    if(page_1.style.display != "block"){
        hide();
        page_1.style.display = "block";
        btn_1.classList.add("active");
    }
});

btn_2.addEventListener("click", function() {
    if(page_2.style.display != "block"){
        hide();
        page_2.style.display = "block";
        btn_2.classList.add("active");
    }
});

function hide(){
    for(let i=1;i<=document.querySelectorAll("button.sidebar-item").length;i++){
        document.querySelector("#btn-"+i).classList.remove("active")
        document.querySelector("#page-"+i).style.display = "none";
    }
}