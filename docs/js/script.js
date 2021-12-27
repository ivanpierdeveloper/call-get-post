'use strict'
const cls = new Classmyalertjs();
const fnc = Funcmyalertjs;
// contrller form
function validURL(url) {
    var regExUrl = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return regExUrl.test(url.toLowerCase());
}


function validEMAIL(email) {
    return email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
} // ./valid EMAIL

function validALFANUMERICO(str) {
    const regExpAlpha = /^[a-zA-Z0-9]+$/;
    return regExpAlpha.test(str.toLowerCase());
} // ./valid ALFANUMERICO

function validNUMBER(num) {
    var onlyNumber = new RegExp('^[0-9]+$');
    return onlyNumber.test(num.toLowerCase());
} // ./valid NUMBER

var frm_submit = document.querySelector('.frm-dati');
var els = document.querySelectorAll('.txt-input');
var regExUrl = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
var verify = false;
frm_submit.addEventListener('submit', function(event) {
    event.preventDefault();
    verify = true;
    for (var i = 0; i < els.length; i++) {
        if (els[i].value == "") {
            // uno o più campi vuoti
            verify = false;
            document.querySelector(`.span-${i}`).innerHTML = "* campo obbligatorio"
            document.querySelector(`.span-${i}`).style.setProperty('display', 'block');
        } else {
            document.querySelector(`.span-${i}`).innerHTML = ""
            document.querySelector(`.span-${i}`).style.setProperty('display', 'none');
            // url
            if (els[0]) {
                if (!validURL(els[0].value)) {
                    verify = false;
                    document.querySelector(`.span-${0}`).innerHTML = "url non corretto"
                    document.querySelector(`.span-${0}`).style.setProperty('display', 'block');
                }
            } // ./ url
            // email
            if (els[1]) {
                if (!validEMAIL(els[1].value)) {
                    verify = false;
                    document.querySelector(`.span-${1}`).innerHTML = "email non corretto"
                    document.querySelector(`.span-${1}`).style.setProperty('display', 'block');
                }
            } // ./email
            // username alfanumerico
            if (els[2]) {
                if (!validALFANUMERICO(els[2].value)) {
                    verify = false;
                    document.querySelector(`.span-${2}`).innerHTML = "username alfanumerico"
                    document.querySelector(`.span-${2}`).style.setProperty('display', 'block');
                }
            } // ./ username alfanumerico
            // number (age)
            if (els[4]) {
                if (!validNUMBER(els[4].value)) {
                    verify = false;
                    document.querySelector(`.span-${4}`).innerHTML = "età non corretta"
                    document.querySelector(`.span-${4}`).style.setProperty('display', 'block');
                }
            } // ./number (age)
        } // ./else
    } // ./for
    if (verify) {
        console.table({ "messaggio": "dati inviati con successo" });
        fetchApi(els[0].value, els[1].value, els[2].value, els[3].value, els[4].value);
    } else {
        console.table({ "messaggio": "Non è stato possibile inviare i dati" });
    }
    // console.table({ "Messaggio": els.length });
}); // console.table({ "Messaggio": els.length });
async function fetchApi(url, email, usr, psw, age) {
    const frmData = new FormData();
    frmData.append('id', 154);
    frmData.append('email', email);
    frmData.append('usr', usr);
    frmData.append('psw', psw);
    frmData.append('age', age);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const request = new Request(url, {
        method: 'POST',
        // headers: headers,
        // mode: 'cors',
        body: frmData
    });
    await fetch(request)
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response.json());
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                });
            }
        }).then((data) => {
            console.table(data);
        }).catch((error) => {
            // console.error(`Errore codice: ${error.status} Messaggio: ${error.statusText}`);
            fnc.showMyAlert("avviso", `codice errore: ${error.status} messaggio errore: ${error.statusText.toLowerCase()}`,
                'var(--warning)', 'var(--indianred)', 'var(--dark)', 'var(--orange)');
        });
}
