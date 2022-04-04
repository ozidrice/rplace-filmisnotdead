// ==UserScript==
// @name         R/Place - Film Is Not Dead
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Film Is Not Dead
// @author       Damien Trolard - Le Blog Argentique /// Initial code by Adcoss95
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://leblogargentique.com/wp-content/uploads/2022/01/Logo.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/ozidrice/rplace-filmisnotdead/raw/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            document.addEventListener("keydown", function(event) {
                if(event.key == "F4"){
                    if (i.style.display === "none") {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            return i;
        })())

    }, false);

}
