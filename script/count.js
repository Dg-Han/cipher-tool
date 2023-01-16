/* this js file relys on jquery */

function count(){
    var text = $("#count_input").val();
    var f = {};
    for (let i=0; i<text.length; i++){
        if ((/[a-zA-Z]/).test(text[i])){
            if ($("input[type=checkbox][name=ign_cap]")[0].checked){
                f[text[i].toLowerCase()] = (text[i].toLowerCase() in f) ? f[text[i].toLowerCase()]+1 : 1;
            }
            else{
                f[text[i]] = (text[i] in f) ? f[text[i]]+1 : 1;
            }
        }
    }
    var h = count_sorted_output(f);

    if ($("input[type=checkbox][name=twochar]")[0].checked){
        var f2 = {};
        for (let i=0; i<text.length-1; i++){
            s2 = text.toLowerCase().slice(i,i+2);
            if ((/[a-zA-Z]{2}/).test(s2)){
                f2[s2] = (s2 in f2) ? f2[s2]+1 : 1;
            }
        }
    }
    var h2 = (f2 != undefined) ? "<br>" + count_sorted_output(f2): "";

    $(".result").html(h + h2);
}

function count_sorted_output(f){
    const sorted_val = Object.values(f).sort((a,b) => {return b-a;})
    var r = {}
    const keys = Object.keys(f)
    for (val in sorted_val){
        keys.forEach((item) => {
            if (sorted_val[val] === f[item]){
                r[item] = sorted_val[val];
            }
        })
    }

    var h=JSON.stringify(r);
    let i=0; j=0; k=0;
    while (i<h.length){
        if (h[i]==","){
            k=i;
        }
        if (i-j>=100){
            h=h.slice(0,k+1)+"<br>"+h.slice(k+1,h.length);
            j=k+4;
        }
        i+=1;
    }
    return h
}

function subst(){
    var check=[];
    for (i = 0; i < 26; i++){
        chr = String.fromCharCode(97+i);
        to = $(`#${chr}`).val();
        if ((to != '') & (!check.includes(to))){
            check+=[to]
        }
        else if (to != ''){
            alert("存在多对一！")
            return
        }
    }
    var text = $("#count_input").val();
    var result = "";
    for (i=0; i<text.length; i++){
        upper = /[A-Z]/.test(text[i]);
        chr = text[i].toLowerCase();
        result = result + (((!/[a-z]/.test(chr)) || ($(`#${chr}`).val() == '')) ? text[i] : (upper ? $(`#${chr}`).val().toUppercase() : $(`#${chr}`).val()));
    }
    $(".result").html(result);
}