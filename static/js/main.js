let ccsColl = document.getElementsByClassName("copy-code-snippet");

let toggleIcon = (element, oldIcon, newIcon)=>{
    element.classList.remove(oldIcon);
    element.classList.add(newIcon);
}
let onClick = async (e) => {
    let fa_icon = e.currentTarget;
    await Copy2Clipboard(fa_icon);
    animate(fa_icon);
}

let Copy2Clipboard = async (target) => {
    let code_snippet = target.nextSibling.textContent
    await navigator.clipboard.writeText(code_snippet);
}

let animate = (target) => {
    target.style.transition = " all .5s ease-in-out";
    toggleIcon(target, "fa-copy", "fa-file-circle-check");
    target.style.color = "crimson";
    setTimeout(() => {
        toggleIcon(target, "fa-file-circle-check", "fa-copy");
        target.style.color = "white";
    }, 2000)
}

for (const ccs of ccsColl) {
    ccs.addEventListener("click", onClick)
}