document.addEventListener("DOMContentLoaded", evenement);

function div1Click() {
    L1.classList.add("L1")
}

function div2Click() {
    L1.classList.remove("L1")
}

function div3Survol() {
    Arial.classList.add("Arial")
}

function div3SurvolRien() {
    Arial.classList.remove("Arial")
}

function div4YES() {
    if ((BTN_1.checked == true) && (BTN_2.checked == true)) {
        console.log("YES")
        YES.classList.add("YES")
        YES.innerHTML = "YES"
    }
}

function div5delete() {
    document.getElementById("sup").remove();
}

function divEx6() {
    var ini = Txt_Name.value.substr(0, 1);
    var pos = Txt_Name.value.indexOf(" ");
    if (pos != -1) {
        ini += Txt_Name.value.substr(pos + 1, 1);
    }
    var longueur = Txt_Name.value.length;
    if (Txt_Name.value.lastIndexOf(" ") != +1 && Txt_Name.value.substr(longueur - 1, 1) != Txt_Name.value.substr(pos + 1, 1)) {
        ini += Txt_Name.value.substr(longueur - 1, 1);
    }

    Txt_Init.value = ini.toUpperCase();
}

function div7Marks() {
    cmd_Marks.disabled = true
    cmd_Marks.hidden = false
    cmd_Go.disabled = true
    cmd_Go.hidden = false
    cmd_Ready.disabled = false
    cmd_Ready.hidden = false
    Img_start.src = "Image/marks.png"
}

function div7Ready() {
    cmd_Marks.hidden = true
    cmd_Ready.disabled = true
    cmd_Go.disabled = false
    Img_start.src = "Image/set.png"
}

function div7Go() {
    cmd_Marks.hidden = true
    cmd_Ready.hidden = true
    cmd_Go.disabled = true
    Img_start.src = "Image/go.png"
    setTimeout(totaux, 3000)


}

function totaux() {
    Img_start.src = "Image/empty.png"
    cmd_Marks.disabled = false
    cmd_Marks.hidden = false
    cmd_Ready.disabled = true
    cmd_Go.hidden = true
}

function evenement() {
    L1.addEventListener("click", div1Click);
    L2.addEventListener("click", div2Click);
    Arial.addEventListener("mouseover", div3Survol);
    Arial.addEventListener("mouseleave", div3SurvolRien);
    BTN_1.addEventListener("click", div4YES);
    BTN_2.addEventListener("click", div4YES);
    texte.addEventListener("click", div5delete);
    Txt_Name.addEventListener("keyup", divEx6)
    cmd_Marks.addEventListener("click", div7Marks);
    cmd_Ready.addEventListener("click", div7Ready);
    cmd_Go.addEventListener("click", div7Go);
}

































































































































































































































