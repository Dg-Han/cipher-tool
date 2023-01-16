/* this js file relys on jquery */

function show_calc(){
    if ($("#calc").is(':hidden')){
        window.removeEventListener("keydown",count_hotkey);
        window.addEventListener("keydown",calc_hotkey);
        $(".result").html("");
        $("#count").hide();
        $("#monoalp").hide();
        $("#calc").show();
    }
}

function show_count(){
    if ($("#count").is(':hidden')){
        window.removeEventListener("keydown",calc_hotkey);
        window.addEventListener("keydown",count_hotkey);
        create_subst();
        $(".result").html("");
        $("#calc").hide();
        $("#monoalp").hide();
        $("#count").show();
    }
}

function show_monoalp(){
    if ($("#monoalp").is(':hidden')){
        window.removeEventListener("keydown",count_hotkey);
        window.removeEventListener("keydown",calc_hotkey);
        mono_pre="";
        $(".result").html("");
        $("input[type=text]").val("");
        $("textarea").val("");
        $("input[name=mono_type]").removeAttr("checked");
        $("#calc").hide();
        $("#count").hide();
        $("#monoalp").show();
    }
}

function clear_monoalp(){
    if ((mono_pre != "")&(mono_pre != $("input[type=radio][name=mono_type]:checked").val())){
        $("#monoalp_output").val("");
        $("input[type=text]").val("");
    }
    mono_pre = $("input[type=radio][name=mono_type]:checked").val();
}

function create_subst(){
    $(".subst").html("");
    for (i=0; i<26; i++){
        chr = String.fromCharCode(97+i);
        cache = $(".subst").html();
        $(".subst").html(`${cache}<div class="seventh"><label>${chr}<input type=\"text\" id=\"${chr}\" style="width:50px"></label></div>`);
    }
    cache = $(".subst").html();
    $(".subst").html(`${cache}<div style=\"width:28%\"></div><button type=\"button\" onclick=subst()>替换</button>`)
}