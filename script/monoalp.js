/* this js file relys on jquery */

var mono_pre="";
var char_re = /[A-Za-z]/;

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
    else if (mode=="qwerty"){
        qwerty(str.toLowerCase(), way);
    }
    else if (mode=="atbash"){
        atbash(str.toLowerCase(), way);
    }
}

function caesar(str, way){
    for (i=1; i<26; i++){
        res = "";
        for (j=0; j<str.length; j++){
            res += char_re.test(str[j]) ? String.fromCharCode(97+(str[j].charCodeAt()-(way=="de" ? i : -i)-71)%26) : str[j];
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

function qwerty(str, way){
    var res = "";
    var de_dict = {"q":"a", "w":"b", "e":"c", "r":"d", "t":"e", "y":"f", "u":"g", "i":"h", "o":"i", "p":"j",
                   "a":"k", "s":"l", "d":"m", "f":"n", "g":"o", "h":"p", "j":"q", "k":"r", "l":"s",
                   "z":"t", "x":"u", "c":"v", "v":"w", "b":"x", "n":"y", "m":"z"};
    var en_dict = {"a":"q", "b":"w", "c":"e", "d":"r", "e":"t", "f":"y", "g":"u", "h":"i", "i":"o", "j":"p",
                   "k":"a", "l":"s", "m":"d", "n":"f", "o":"g", "p":"h", "q":"j", "r":"k", "s":"l",
                   "t":"z", "u":"x", "v":"c", "w":"v", "x":"b", "y":"n", "z":"m"};
    for (i=0; i<str.length; i++){
        res += char_re.test(str[i]) ? (way == "de" ? de_dict[str[i]] : en_dict[str[i]]) : str[i];
    }
    $("#monoalp_output").val(`${res}`);
}

function atbash(str, way){
    var res = "";
    for (i=0; i<str.length; i++){
        res += char_re.test(str[i]) ? (String.fromCharCode(97+122-str[i].charCodeAt())) : str[i];
    }
    $("#monoalp_output").val(`${res}`);
}