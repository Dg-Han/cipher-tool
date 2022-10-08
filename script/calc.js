/* this js file relys on jquery */

var Scramble=[1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];

function Scramble_S(s){
    let Score=0
    for (i=0; i<s.length; i++){
        if (s[i]!=" "){
            Score+=Scramble[s[i].toLowerCase().charCodeAt()-'a'.charCodeAt()];
        }
    }
    return Score
}
function Alphabetic_S(s){
    let Score=0
    for (i=0; i<s.length; i++){
        if (s[i]!=" "){
            Score+=(s[i].toLowerCase().charCodeAt()-'a'.charCodeAt())+1;
        }
    }
    return Score
}
function calc(){
    s=$("#calc_input").val();
    if ((s=='')||(!(/^[a-zA-Z\s]+$/).test(s))){     //空字符串或含字母或空格以外的字符
        alert('请输入纯字母组成的单词！')
        return
    }
    var p=$(".result");
    p.html(`${s} 的Scramble分数为: ${Scramble_S(s).toString()}<br>${s} 的字母序数分数为: ${Alphabetic_S(s).toString()}`);
}