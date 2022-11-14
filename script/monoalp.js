var mono_pre="";

function monoalp(way){
    $("#monoalp_output").val("");
    var mode = $("input[type=radio][name=mono_type]:checked").val();
    if (mode==""){
        alert("请选择单表密码模式！");
        return
    }
    var str = $("#monoalp_input").val();
    if (mode=="caesar"){
        caesar(str.toLowerCase(), way);
    }
    else if (mode=="vigenere"){
        var key = $("#vigenere_key").val().toLowerCase();
        vigenere(str, key, way);
    }
}

function caesar(str, way){
    for (i=1; i<26; i++){
        res = "";
        p = /[A-Za-z]/;
        for (j=0; j<str.length; j++){
            res += p.test(str[j]) ? String.fromCharCode(97+(str[j].charCodeAt()-(way=="de" ? i : -i)-71)%26) : str[j];
        }
        cache = $("#monoalp_output").val();
        $("#monoalp_output").val(`${cache}${i}\: ${res}\n`);
    }
}

function vigenere(str, key, way){
    var res = "";
    var p = /[a-z]/;
    var P = /[A-Z]/;
    var j=0;
    for (i=0; i<str.length; i++){
        if (p.test(str[i])){
            res += String.fromCharCode(97+(str[i].charCodeAt()-(way=="de" ? key[j%key.length].charCodeAt()-26 : 194-key[j%key.length].charCodeAt()))%26);
            j+=1;
        }
        else if (P.test(str[i])){
            res += String.fromCharCode(65+(str[i].charCodeAt()-(way=="de" ? key[j%key.length].charCodeAt()-58 : 162-key[j%key.length].charCodeAt()))%26);
            j+=1;
        }
        else{
            res += str[i];
        }
        //alert(str[i]+" "+key[j%key.length]);
    }
    
    $("#monoalp_output").val(`${res}`);
}