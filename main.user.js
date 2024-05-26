// ==UserScript==
// @name         juliaSinister
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  i hate Jer
// @author       @bagd1k
// @match        https://rivalregions.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rivalregions.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.querySelector("#sa_logo")) {
        const br = document.querySelector('#sa_add2 > div:nth-child(3) > div.sa_sn.float_left.small')
        const div = document.querySelector("#sa_add2 > div:nth-child(3)")
        const authButton = document.createElement("a")
        authButton.setAttribute("class", "sa_link gogo")
        authButton.setAttribute("href", `https://oauth.vk.com/authorize?client_id=3524629&scope=notify,friends&redirect_uri=https://rivalregions.com/main/vklogina&response_type=code&state=${location.hash.substring(1)}`)
        const authImage = document.createElement("div")
        authImage.setAttribute("class", "sa_sn float_left imp gogo")
        authImage.setAttribute("style", "swidth: 180px; background-size: 32px 32px; background-image: url(//static.rivalregions.com/static/images/flags/1165.png)")
        const authText = document.createTextNode("Войти через ВК")
        authImage.appendChild(authText)
        authButton.appendChild(authImage)
        div.insertBefore(authButton, br)
    } else if (location.hash == '#slide/setups') {
        setTimeout(() => {
            const parentDiv = document.querySelector("#header_slide_inner > div.minwidth > div:nth-child(8)")
            const div = document.querySelector("#header_slide_inner > div.minwidth > div:nth-child(8) > div:nth-child(1)")
            const button = document.createElement('button')
            button.appendChild(document.createTextNode('MAIL HERE'))
            button.setAttribute('style', "width: 165.752px; height: 32px; margin-top: -6px;")
            button.setAttribute('class', "button_blue setups_logout_3 prog_set_nat float_left")
            button.addEventListener("click", async () => {
                const mail = prompt("Input your e-mail")
                await fetch('/rival/addemaillogin', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    body: `email=${mail}&c=${window.c_html}`
                })
                const code = prompt("Input the code you had just *mostly likely* received")
                await fetch('/rival/confirmemaillogin', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    body: `code=${code}&c=${window.c_html}`
                })
            })
            const warCrime = document.createElement('div')
            warCrime.setAttribute('style', "height: 32px; width: 50px; margin-top: -6px;")
            parentDiv.insertBefore(button, div)
            parentDiv.insertBefore(warCrime, div)
        }, 3000)
    }
})();
