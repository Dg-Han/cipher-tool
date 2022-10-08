function show_calc(){
    window.removeEventListener("keydown",count_hotkey);
    window.addEventListener("keydown",calc_hotkey);
    $(".result").html("");
    $("#count").hide()
    $("#calc").show()
}

function show_count(){
    window.removeEventListener("keydown",calc_hotkey);
    window.addEventListener("keydown",count_hotkey);
    $(".result").html("");
    $("#calc").hide()
    $("#count").show()
}