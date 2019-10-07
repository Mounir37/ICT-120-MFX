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
    if ((BTN_1.checked == true) && (BTN_2.checked == true)){
        console.log("YES")
        YES.classList.add("YES")
        YES.innerHTML = "YES"
    }
}

function div5delete() {
        document.getElementById("sup").remove();
}

function evenement() {
    L1.addEventListener("click", div1Click);
    L2.addEventListener("click", div2Click);
    Arial.addEventListener("mouseover", div3Survol);
    Arial.addEventListener("mouseleave", div3SurvolRien);
    BTN_1.addEventListener("click", div4YES);
    BTN_2.addEventListener("click", div4YES);
    texte.addEventListener("click", div5delete);
}

T UNE BITE MEC !!!!!!!!!!!!!!!!!!
























































































































































































































