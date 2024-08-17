/* this js file relys on jquery */

function change_mode(){
    if ($("#theme_mode").html() == "切换深色模式"){
        $("body")[0].classList.add("dark-mode");
        $("#theme_mode").html("切换浅色模式");
    }
    else{
        $("body")[0].classList.remove("dark-mode");
        $("#theme_mode").html("切换深色模式");
    }
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches){
    $("body")[0].classList.add("dark-mode");
    $("#theme_mode").html("切换浅色模式");
}

var listeners = {
    dark: (MediaQueryList)=>{
        if (MediaQueryList.matches && $("#theme_mode").html()=="切换深色模式"){
            change_mode();
        }
    },
    light: (MediaQueryList)=>{
        if (MediaQueryList.matches && $("#theme_mode").html()=="切换浅色模式"){
            change_mode();
        }
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",listeners.dark);
window.matchMedia('(prefers-color-scheme: light)').addEventListener("change",listeners.light);