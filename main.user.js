// ==UserScript==
// @name         juliaSinister
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  i hate Jer
// @author       @bagd1k
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (!location.hash) {
        const br = document.querySelector('#sa_add2 > div:nth-child(3) > div.sa_sn.float_left.small')
        const div = document.querySelector("#sa_add2 > div:nth-child(3)")
        console.log(br)
        const authButton = document.createElement("a")
        authButton.setAttribute("class", "sa_link gogo")
        authButton.setAttribute("href", "https://oauth.vk.com/authorize?client_id=3524629&scope=notify,friends&redirect_uri=https://rivalregions.com/main/vklogina&response_type=code")
        const authImage = document.createElement("div")
        authImage.setAttribute("class", "sa_sn float_left imp gogo")
        authImage.setAttribute("style", "swidth: 180px; background-size: 32px 32px; background-image: url(//static.rivalregions.com/static/images/flags/1165.png)")
        const authText = document.createTextNode("Войти через ВК")
        authImage.appendChild(authText)
        authButton.appendChild(authImage)
        div.insertBefore(authButton, br)
    }
})();
