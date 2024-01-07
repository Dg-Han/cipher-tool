/* this js file relys on jquery */

var morse_dict = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
                  'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
                  'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'}

function morse(){
    let str = $("#morse_input").val();
    let dash = 0;
    let dot = 0;
    let res = "";
    for (i = 0; i < str.length; i++){
        if ((/[a-zA-Z]/).test(str[i])){
            let cache = morse_dict[str[i].toUpperCase()];
            res += cache + ' ';
            dash += cache.split("-").length - 1;
            dot += cache.split(".").length - 1;
        }
    }
    var p=$(".result");
    p.html(`摩斯转换结果为${res}<br>共有${dash}个-<br>共有${dot}个.`)
}