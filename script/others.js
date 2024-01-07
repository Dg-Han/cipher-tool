/* this js file relys on jquery */

var braille_cor = {"b1":"a", "b12":"b", "b14":"c", "b145":"d", "b15":"e", "b124":"f", "b1245":"g",
                   "b125":"h", "b24":"i", "b245":"j", "b13":"k", "b123":"l", "b134":"m", "b1345":"n",
                   "b135":"o", "b1234":"p", "b12345":"q", "b1235":"r", "b234":"s", "b2345":"t",
                   "b136":"u", "b1236":"v", "b246":"w", "b1346":"x", "b13456":"y", "b1356":"z"}
var braille_checked = [];

var flag_cor = {"s12":"a", "s13":"b", "s14":"c", "s15":"d", "s16":"e", "s17":"f", "s18":"g",
                "s23":"h", "s24":"i", "s57":"j", "s25":"k", "s26":"l", "s27":"m", "s28":"n",
                "s34":"o", "s35":"p", "s36":"q", "s37":"r", "s38":"s", "s45":"t",
                "s46":"u", "s58":"v", "s67":"w", "s68":"x", "s47":"y", "s78":"z"}
var flag_index_list = ["s", "sw", "w", "nw", "n", "ne", "e", "se"];
var flag_checked = [];

function braille_set(val){
    if (braille_checked.indexOf(val) > -1){
        $(`input[type=radio][name=braille_${val}]`).attr('checked', false);
        braille_checked.splice(braille_checked.indexOf(val), 1);
    }
    else{
        braille_checked.push(val);
    }
    
    let braille_str="b";
    for (i=1; i<7; i++){
        let cache = $(`input[type=radio][name=braille_${i}]:checked`).val();
        braille_str += (cache!=undefined) ? i : "";
    }
    $("#braille_result").html((Object.keys(braille_cor).indexOf(braille_str) > -1) ? braille_cor[braille_str] : "No result");
}

function braille_record(){
    let now_result = $("#braille_result").html();
    if (now_result.length == 1){
        $(".result").html($(".result").html() + now_result)
    }
}

function braille_clear(){
    $(".result").html("")
}

function flag_set(val){
    let color_pattern = /rgba?\(\d{1,3}, \d{1,3}, \d{1,3}(, \d{1,3})?\)/g;
    let r = $(`[name=flag_${val}]`).css('border-color');
    let colors = r.match(color_pattern);
    
    let c = new Array(4);
    for (let i=0; i<4; i++){
        if (colors[i] == "rgb(211, 211, 211)"){
            c[i] = "rgb(0, 0, 0)";
        }
        else if (colors[i] == "rgb(0, 0, 0)"){
            c[i] = "rgb(211, 211, 211)";
        }
        else{
            c[i] = "rgba(0, 0, 0, 0)";
        }
    }

    $(`[name=flag_${val}]`).css('border-color', c.join(" "));

    let i = flag_index_list.indexOf(val) + 1;
    if (flag_checked.indexOf(i) > -1){
        flag_checked.splice(flag_checked.indexOf(i), 1);
    }
    else{
        flag_checked.push(i);
    }

    let flag_str = "s" + flag_checked.sort(function(a,b){return a-b}).join("")
    $("#semaphore_result").html((Object.keys(flag_cor).indexOf(flag_str) > -1) ? flag_cor[flag_str] : "No Result");
}