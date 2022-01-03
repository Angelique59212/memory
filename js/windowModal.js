class divModal {
    /**
     * Create window
     * @param color
     * @param choiceVw
     * @param choiceVh
     * @param colorModal
     * @param titleText
     * @param text
     * @param size
     */
    windowDiv(color, choiceVw, choiceVh, colorModal, titleText, text, size) {
        const div = document.createElement("div");//create div back
        div.style.width = innerWidth + "px";
        div.style.height = innerHeight + "px";
        div.style.backgroundColor = color;
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left = "0";
        div.style.display = "flex";
        div.style.justifyContent= "center";
        div.style.alignItems = "center";
        document.body.appendChild(div);

        const div2 = document.createElement("div");// create div window
        div2.style.width = choiceVw;
        div2.style.height = choiceVh;
        div2.style.backgroundColor = colorModal;
        div2.style.position = "absolute";
        div2.style.textAlign = "center";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-around";
        div2.style.alignItems = "center"
        div2.style.flexDirection = "column";
        div2.style.fontSize = size;
        div.appendChild(div2);

        const titleH1 = document.createElement("h1");
        titleH1.innerHTML = titleText;
        div2.appendChild(titleH1);

        const divText = document.createElement("div");
        divText.innerHTML = text;
        div2.appendChild(divText);

        const button = document.createElement("button");
        div2.appendChild(button);
        button.innerHTML = "close";
        button.addEventListener("click", ()=> {
            div.remove();
        })
    }
}