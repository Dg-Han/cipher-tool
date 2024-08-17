/* this js file relys on jquery */

function show_item(item_name){
    if ($(`#${item_name}`).is(":hidden")){
        $(".result").html("");
        $(".content").hide();
        $(`#${item_name}`).show();

        if (item_name == "calc"){
            window.removeEventListener("keydown",count_hotkey);
            window.addEventListener("keydown",calc_hotkey);
        }
        if (item_name == "count"){
            window.removeEventListener("keydown",calc_hotkey);
            window.addEventListener("keydown",count_hotkey);
            create_subst();
        }
        if (item_name == "monoalp"){
            window.removeEventListener("keydown",count_hotkey);
            window.removeEventListener("keydown",calc_hotkey);
            mono_pre="";
            $("input[type=text]").val("");
            $("textarea").val("");
            $("input[name=mono_type]").removeAttr("checked");
        }
        if (item_name == "others"){
            window.removeEventListener("keydown",count_hotkey);
            window.removeEventListener("keydown",calc_hotkey);
            $("input[name^=braille]").removeAttr("checked");
            let cache = JSON.parse(JSON.stringify(flag_checked));
            cache.forEach(function(val,key,iterable){flag_set(flag_index_list[val-1])});
            $("[id$=result]").html("");
            $(".result").html("");
        }
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

function item_hover_img(item_name, relative_x){
    $(`#${item_name}_img`).css("left", relative_x);
}