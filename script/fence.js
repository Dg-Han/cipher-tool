/* this js file relys on jquery */

function defence(n){
    let str = $("#fence_input").val();
    let res = "";
    if (n == -1){
        n = $("#fence_n").val();
        if (!(/[1-9]\d*/).test(n)){
            alert("未输入栅栏栏数！已转换为遍历所有栅栏可能性...");
            for (let i = 2; i < str.length; i++){
                res += `${i}: ${defence(i)}\n`;
            }
            $("#fence_output").val(res);
            return res;
        }
    }
    max_fence_width = Math.floor((str.length-1)/n) + 1; // 最大栅栏分组宽度
    max_fences_num = str.length % n > 0 ? str.length % n : n; // 最大栅栏宽度分组计数
    for (let i = 0; i < max_fence_width; i++){
        for (let j = 0; j < n; j++){
            res += (j * max_fence_width + i - (j > max_fences_num ? j - str.length % n : 0) < str.length) && !(i == (max_fence_width - 1) && j >= max_fences_num) ? str[j*max_fence_width+i - (j > max_fences_num ? j - str.length % n : 0)] : "";
        }
    }
    $("#fence_output").val(res);
    return res;
}

function fence(){
    let str = $("#fence_input").val();
    let n = $("#fence_n").val();
    if (!(/[1-9]\d*/).test(n)){
        alert("请输入栅栏栏数！");
        return 0;
    }
    let res = "";
    for (i = 0; i < n; i++){
        for (j = 0; j < Math.floor((str.length-1)/n)+1; j++){
            res += j*n+i < str.length ? str[j*n+i] : "";
        }
    }
    $("#fence_output").val(res);
}