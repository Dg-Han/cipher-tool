function calc_hotkey(event){
    if (event.keyCode==13){
        calc();
    }
}

function count_hotkey(event){
    if (event.keyCode==13){
        if (event.ctrlKey == false){
            event.preventDefault();
            count();
        }
        else{
            str = $("#count_input").val();
            $("#count_input").val(str + "\n");
        }
    }
}