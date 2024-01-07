/* this js file relys on jquery */

let codon_dict = {"UUU":"f", "UUC":"f", "UUA":"l", "UUG":"l", "UCU":"s", "UCC":"s", "UCA":"s", "UCG":"s",
                  "UAU":"y", "UAC":"y", "UAA":" ", "UAG":" ", "UGU":"c", "UGC":"c", "UGA":" ", "UGG":"w",
                  "CUU":"l", "CUC":"l", "CUA":"l", "CUG":"l", "CCU":"p", "CCC":"p", "CCA":"p", "CCG":"p",
                  "CAU":"h", "CAC":"h", "CAA":"q", "CAG":"q", "CGU":"r", "CGC":"r", "CGA":"r", "CGG":"r",
                  "AUU":"i", "AUC":"i", "AUA":"i", "AUG":"m", "ACU":"t", "ACC":"t", "ACA":"t", "ACG":"t",
                  "AAU":"n", "AAC":"n", "AAA":"k", "AAG":"k", "AGU":"s", "AGC":"s", "AGA":"r", "AGG":"r",
                  "GUU":"v", "GUC":"v", "GUA":"v", "GCG":"v", "GCU":"a", "GCC":"a", "GCA":"a", "GCG":"a",
                  "GAU":"d", "GAC":"d", "GAA":"e", "GAG":"e", "GGU":"g", "GGC":"g", "GGA":"g", "GGG":"g"};
let dna_code_dict = {"TTT":"f", "TTC":"f", "TTA":"l", "TTG":"l", "TCT":"s", "TCC":"s", "TCA":"s", "TCG":"s",
                     "TAT":"y", "TAC":"y", "TAA":" ", "TAG":" ", "TGT":"c", "TGC":"c", "TGA":" ", "TGG":"w",
                     "CTT":"l", "CTC":"l", "CTA":"l", "CTG":"l", "CCT":"p", "CCC":"p", "CCA":"p", "CCG":"p",
                     "CAT":"h", "CAC":"h", "CAA":"q", "CAG":"q", "CGT":"r", "CGC":"r", "CGA":"r", "CGG":"r",
                     "ATT":"i", "ATC":"i", "ATA":"i", "ATG":"m", "ACT":"t", "ACC":"t", "ACA":"t", "ACG":"t",
                     "AAT":"n", "AAC":"n", "AAA":"k", "AAG":"k", "AGT":"s", "AGC":"s", "AGA":"r", "AGG":"r",
                     "GTT":"v", "GTC":"v", "GTA":"v", "GCG":"v", "GCT":"a", "GCC":"a", "GCA":"a", "GCG":"a",
                     "GAT":"d", "GAC":"d", "GAA":"e", "GAG":"e", "GGT":"g", "GGC":"g", "GGA":"g", "GGG":"g"};

function codon(){
    let s = $("#codon_input").val().toUpperCase();
    let codon_0_1 = $(`input[name=codon_type]:checked`).val() == "codon" ? 1 : 0;
    let extract = "";
    for (i=0; i<s.length; i++){
        if (codon_0_1 ? ["A", "C", "G", "U"].indexOf(s[i]) > -1 : ["A", "C", "G", "T"].indexOf(s[i]) > -1){
            extract += s[i];
        }
    }
    if (extract.length%3 != 0){
        $(".result").html("密码子串长度不是3的倍数！")
    }
    else{
        let res = "";
        for (i=0; i<extract.length/3; i++){
            res += codon_0_1 ? codon_dict[extract.slice(3*i,3*i+3)] : dna_code_dict[extract.slice(3*i,3*i+3)];
        }
        $(".result").html(`${res}`);
    }
}