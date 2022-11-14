/* this js file relys on jquery */

function count(){
    var text=$("#count_input").val();
    var f={};
    if ($("input[type=checkbox][name=ign_cap]")[0].checked){
        for (let i=0; i<text.length; i++){
            if ((/[a-zA-Z]/).test(text[i])){
                f[text[i].toLowerCase()] = (text[i].toLowerCase() in f) ? f[text[i].toLowerCase()]+1 : 1;
            }
        }
    }
    else{
        let i=0;
        while (i<text.length){
            f[text[i]] = (text[i] in f) ? f[text[i]]+1 : 1;
            i+=1;
        }
    }
    if ($("input[type=checkbox][name=twochar]")[0].checked){
        for (let i=0; i<text.length-1; i++){
            if ((/[a-zA-Z]{2}/).test(text.toLowerCase().slice(i,i+2))){
                f[text.toLowerCase().slice(i,i+2)] = (text.toLowerCase().slice(i,i+2) in f) ? f[text.toLowerCase().slice(i,i+2)]+1 : 1;
            }
        }
    }
    var h=JSON.stringify(f);
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
    $(".result").html(h);
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
        chr = text[i];
        result = result + (($(`#${chr}`).val() == '') ? text[i] : $(`#${text[i]}`).val());
    }
    $(".result").html(result);
}