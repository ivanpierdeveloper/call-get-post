'use strict'
const cls = new Classmyalertjs();
const fnc = Funcmyalertjs;
// controller form
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

var verify = false;

function controllo() {
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
        console.table({ "messaggio": "dati inviati con successo", "lunghezza arr": arr.length });
        // console.log(arr.length);
        if (arr.length > 0) {
            arr.forEach(function(val, indice) {
                console.table({ "valore arr": images[indice] });
                fetchApi(val.url, val.email, val.usr, val.psw, val.age, images[indice]);
            });
            arr = [];
            images = [];
            document.querySelector('.img-avatar').setAttribute('src', "img/avatar/default.png");
            numPannel = 0;
            div_response.innerHTML = "";
            div_preview.innerHTML = "";
            div_preview.style.setProperty('display', 'none');
            // fetchApi(els[0].value, els[1].value, els[2].value, els[3].value, els[4].value);
        } else {
            fnc.showMyAlert("avviso", "nessun dato trovato. aggiungi prima e poi invia", 'var(--info)', 'var(--primary)', 'var(--white)', 'var(--dark)');
        }
    } else {
        console.table({ "messaggio": "Non è stato possibile inviare i dati" });
        fnc.showMyAlert("avviso", `errore. controllare di aver compilato correttamente tutto il form`,
            'var(--indianred)', 'var(--white)', 'var(--dark)', 'var(--orange)');
    }
} // ./controllo
function controllo2() {
    verify = true;
    let file = document.querySelector('.file-avatar');
    console.log(file.value);
    if (!file.value) {
        verify = false;
        document.querySelector('.span-avatar').innerHTML = "avatar obbligatoria";
        return false;
    } else {
        document.querySelector('.span-avatar').innerHTML = "";
    }
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
    if (!verify) {
        console.table({ "messaggio": "Non è stato possibile inviare i dati" });
        fnc.showMyAlert("avviso", `errore. controllare di aver compilato correttamente tutto il form`,
            'var(--indianred)', 'var(--white)', 'var(--dark)', 'var(--orange)');
    }
    return verify;
} // ./controllo2
var frm_submit = document.querySelector('.frm-dati');
var els = document.querySelectorAll('.txt-input');
var numPannel = 0;
// var regExUrl = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
frm_submit.addEventListener('submit', function(event) {
    event.preventDefault();
    controllo();
    // console.table({ "Messaggio": els.length });
}); // console.table({ "Messaggio": els.length });
let type_method = document.querySelector('.slc-type-method');
async function fetchApi(url, email, usr, psw, age, img) {
    const slc_method = type_method.value;
    // console.log(slc_method);
    // debugger;
    const frmData = new FormData();
    frmData.append('id', 154);
    frmData.append('email', email);
    frmData.append('usr', usr);
    frmData.append('psw', psw);
    frmData.append('age', age);
    frmData.append('image', img);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if (slc_method === "post") {
        const request = new Request(url, {
            method: 'POST',
            // headers: headers,
            // mode: 'cors',
            /* headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, */
            /* headers: {
                'Content-Type': 'multipart/form-data'
            }, */
            body: frmData
        });
        await fetch(request)
            .then((response) => {
                if (response.ok) {
                    fnc.showMyAlert("avviso", `dati inviati con successo`,
                        'var(--success)', 'var(--white)', 'var(--dark)', 'var(--orange)');
                    return Promise.resolve(response.json());
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText.toLocaleLowerCase()
                    });
                }
            }).then((data) => {
                console.table(data);
                numPannel += 1;
                createDiv(data);
            }).catch((error) => {
                // console.error(`Errore codice: ${error.status} Messaggio: ${error.statusText}`);
                fnc.showMyAlert("avviso", `codice errore: ${error.status} messaggio errore: ${error.statusText}`,
                    'var(--warning)', 'var(--indianred)', 'var(--dark)', 'var(--orange)');
            });
    } else {
        const params = `?id=154&email=${email}&usr=${usr}&psw=${psw}&age=${age}`;
        const request = new Request(url + params, {
            method: "GET",
            //mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        });
        await fetch(request)
            .then((response) => {
                if (response.ok) {
                    fnc.showMyAlert("avviso", `dati inviati con successo`,
                        'var(--success)', 'var(--white)', 'var(--dark)', 'var(--orange)');
                    return Promise.resolve(response.json());
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText.toLocaleLowerCase()
                    });
                }
            }).then((data) => {
                console.table(data);
                numPannel += 1;
                createDiv(data);
            }).catch((error) => {
                // console.error(`Errore codice: ${error.status} Messaggio: ${error.statusText}`);
                fnc.showMyAlert("avviso", `codice errore: ${error.status} messaggio errore: ${error.statusText}`,
                    'var(--warning)', 'var(--indianred)', 'var(--dark)', 'var(--orange)');
            });
    }

} // ./fetchApi
// creo il div per mostrare il response
const div_response = document.createElement('div');

function createDiv(data) {
    const path_folder_image = document.querySelector("#path_folder_image").value;

    const div_container = document.querySelector('.container');

    const div_style = div_response.style;
    div_style.setProperty('border', '1px solid var(--yellow)');
    div_style.setProperty('border-radius', '8px');
    div_style.setProperty('margin-top', '5px');
    div_style.setProperty('color', 'var(--success)');
    div_style.setProperty('padding', '18px');
    div_style.setProperty('font-size', '9pt');
    div_style.setProperty('display', 'block');
    const table = document.createElement('table');
    // table.style.setProperty('border', '1px solid var(--orange)');
    const caption = document.createElement('caption');
    caption.style.setProperty('border', '1px solid var(--white)');
    caption.style.setProperty('border-radius', '4px');
    caption.style.setProperty('font-weight', 'bold');
    const title = document.createTextNode(`pannello ${numPannel}`);
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');
    const th5 = document.createElement('th');
    const th6 = document.createElement('th');
    const th7 = document.createElement('th');
    const tbody = document.createElement('tbody');
    const id = document.createTextNode('id');
    const email = document.createTextNode('email');
    const usr = document.createTextNode('user');
    const psw = document.createTextNode('psw');
    const age = document.createTextNode('age');
    const mt = document.createTextNode('method');
    const avatar = document.createTextNode('avatar');
    th.appendChild(id);
    th2.appendChild(email);
    th3.appendChild(usr);
    th4.appendChild(psw);
    th5.appendChild(age);
    th6.appendChild(mt);
    th7.appendChild(avatar);
    data.forEach(function(val, indice) {
        // div_response.innerHTML += `${val.id} ${val.email} ${val.usr} ${val.psw} ${val.age}<br />`;
        // create tr
        const trindice = document.createElement('tr');
        if (val.id == 154) {
            console.table({ "messaggio": "id 154" });
            trindice.style.setProperty('background-color', 'var(--darkorchid)');
        }
        // create td
        const td_1_indice = document.createElement('td');
        const td_2_indice = document.createElement('td');
        const td_3_indice = document.createElement('td');
        const td_4_indice = document.createElement('td');
        const td_5_indice = document.createElement('td');
        const td_6_indice = document.createElement('td');
        const td_7_indice = document.createElement('td');
        const avatar_img = document.createElement('img');
        avatar_img.src = `${path_folder_image}${val.avatar}`;
        avatar_img.setAttribute('alt', 'not image');
        avatar_img.style.setProperty('cursor', 'pointer');
        avatar_img.setAttribute('title', 'visualizza');
        avatar_img.style.setProperty('height', '40px');
        avatar_img.style.setProperty('width', '40px');
        avatar_img.setAttribute('id', val.avatar);
        avatar_img.classList.add('avatar');
        avatar_img.addEventListener('click', (e) => {
            window.open(`${path_folder_image}${val.avatar}`);
        });
        td_1_indice.append(val.id);
        td_2_indice.append(val.email);
        td_3_indice.append(val.usr);
        td_4_indice.append(val.psw);
        td_5_indice.append(val.age);
        td_6_indice.append(val.method);
        td_7_indice.append(avatar_img);
        trindice.append(td_1_indice);
        trindice.append(td_2_indice);
        trindice.append(td_3_indice);
        trindice.append(td_4_indice);
        trindice.append(td_5_indice);
        trindice.append(td_6_indice);
        trindice.append(td_7_indice);
        tbody.append(trindice);
    })
    tr.appendChild(th);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);

    tr.appendChild(th7);

    thead.appendChild(tr);
    caption.appendChild(title);
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    div_response.appendChild(table);
    div_container.appendChild(div_response);
    //avatarEvent(data);
} // ./createDiv

async function compile() {
    const form = document.querySelector('form');
    form[0].value = "http://svilfi.utile.extranet.utilita.com/webserver/php/test/github/call-get-post/docs/pages/js.php";
    form[1].value = "ivanpier@gmail.com";
    form[2].value = "ivanpier";
    form[3].value = "pass";
    form[4].value = 44;
    // console.log(form.length);
}
compile();
// aggiungo i dati all'array
// begin
var obj = {};
// or
var arr = [];
// end
var verify_exists = false;
let form_add = document.querySelector('form');
let btn_add_data = document.querySelector('.add-data');
let file = document.querySelector('.file-avatar');
let images = Array();
btn_add_data.addEventListener('click', function() {
    var ritorno = controllo2();
    if (ritorno) {
        verify_exists = false;
        var path_file = file.files[0];
        images.push(path_file);
        // console.log(images);
        obj = {
            "url": form_add[0].value,
            "email": form_add[1].value,
            "usr": form_add[2].value,
            "psw": form_add[3].value,
            "age": form_add[4].value,
            "avatar": images
        };
        // console.log(obj.email); // str
        //debugger;
        // console.table(arr);
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].url.includes(obj.url)) {
                    console.warn("EXISTS");
                    // arr.push(obj);
                    verify_exists = true;
                    // return;
                } else {
                    console.warn("NOT EXISTS");
                    // arr.push(obj);
                    verify_exists = false;

                }
            } // ./ for
        } else {
            console.warn("NOT EXISTS");
            // arr.push(obj);
            verify_exists = true;
        }

        if (verify_exists == true) {
            arr.push(obj);
            console.group('success');
            console.log('add');
            console.groupEnd('success');
            // fnc.showMyAlert("avviso", `dati aggiunti num(${arr.length}) ma non inviati`, 'var(--primary)', 'var(--white)', 'var(--orange)', 'var(--dark)');
        }
        // console.table(arr);
        // console.log(arr[0].url);
        // or
        // arr.push(form_add[0].value);
        // arr.push(form_add[1].value);
        // console.table({ "messaggio": "success", "code": "200" });

        // or
        // console.log(`UID: ${arr[uid]} EMAIL: ${arr[mail]} COUNT: ${arr.length}`);
        /*
        arr.forEach(function(val, indice) {
            console.table({ "indice": indice, "valore": val });
        });
        */
        document.querySelector('.img-avatar').setAttribute('src', "img/avatar/default.png");
        document.querySelector('.file-avatar').value = "";
        // div anteprima
        preview();
    } // ./ritorno
}); // ./btn_add_data
// btn-clean
let btn_reload = document.querySelector('.btn-reload');
btn_reload.addEventListener('click', (e) => {
    window.location.reload();
}); // ./// btn-clean
// remove indice from arr
function removeIndex(id) {
    // console.table(arr);
    // posizione(id), numero di elementi da rimuovere (1)
    arr.splice(id, 1);
    images.splice(id, 1);
    // console.table(arr);
    preview();
} // ./remove indice from arr
// anteprima dell'arr
const div_preview = document.createElement('div');

function preview() {
    if (!arr.length) {
        div_preview.innerHTML = "";
        div_preview.style.setProperty('display', 'none');
        return false;
    }
    const div_container = document.querySelector('.container');
    div_response.innerHTML = "";
    div_response.style.setProperty('display', 'none');
    div_preview.innerHTML = "";
    let div_preview_style = div_preview.style;
    div_preview_style.setProperty('border', '1px solid var(--yellow)');
    div_preview_style.setProperty('border-radius', '8px');
    div_preview_style.setProperty('margin-top', '5px');
    div_preview_style.setProperty('color', 'var(--success)');
    div_preview_style.setProperty('padding', '18px');
    div_preview_style.setProperty('font-size', '9pt');
    div_preview_style.setProperty('display', 'block');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const txtCaption = document.createTextNode("anteprima");
    caption.appendChild(txtCaption);
    table.appendChild(caption);
    const thead = document.createElement('thead');
    const trTh = document.createElement('tr');
    const thTrUrl = document.createElement('th');
    thTrUrl.innerHTML = "url";
    const thTrEmail = document.createElement('th');
    thTrEmail.innerHTML = "email";
    const thTrUsr = document.createElement('th');
    thTrUsr.innerHTML = "usr";
    const thTrAge = document.createElement('th');
    thTrAge.innerHTML = "age";
    const thAvatar = document.createElement('th');
    const txtAvatar = document.createTextNode('avatar');
    thAvatar.appendChild(txtAvatar);
    const thTrAction = document.createElement('th');
    thTrAction.innerHTML = "action";
    trTh.appendChild(thTrUrl);
    trTh.appendChild(thTrEmail);
    trTh.appendChild(thTrUsr);
    trTh.appendChild(thTrAge);
    trTh.appendChild(thAvatar);
    trTh.appendChild(thTrAction);
    thead.appendChild(trTh);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    for (var y = 0; y < arr.length; y++) {
        const trTd = document.createElement('tr');
        const tdUrl = document.createElement('td');
        tdUrl.innerHTML = arr[y].url;
        const tdEmail = document.createElement('td');
        // or
        const txtEmail = document.createTextNode(arr[y].email);
        tdEmail.appendChild(txtEmail);
        const tdUsr = document.createElement('td');
        const txtUsr = document.createTextNode(arr[y].usr);
        tdUsr.appendChild(txtUsr);
        const tdAge = document.createElement('td');
        tdAge.innerHTML = arr[y].age;
        const tdAction = document.createElement('td');
        const tdAvatar = document.createElement('td');
        const imgPreview = document.createElement('img');
        imgPreview.src = URL.createObjectURL(arr[y].avatar[y]);
        imgPreview.setAttribute('alt', 'not image');
        imgPreview.style.setProperty('cursor', 'pointer');
        imgPreview.setAttribute('title', 'anteprima');
        imgPreview.style.setProperty('height', '40px');
        imgPreview.style.setProperty('width', '40px');
        const imgDel = document.createElement('img');
        imgDel.src = "img/clear.png";
        imgDel.setAttribute('alt', 'not image');
        imgDel.style.setProperty('cursor', 'pointer');
        imgDel.setAttribute('title', 'elimina riga');
        imgDel.style.setProperty('height', '40px');
        imgDel.style.setProperty('width', '40px');
        imgDel.setAttribute('id', y);
        imgDel.classList.add('removeIndice');
        tdAvatar.appendChild(imgPreview);
        tdAction.appendChild(imgDel);
        trTd.appendChild(tdUrl);
        trTd.appendChild(tdEmail);
        trTd.appendChild(tdUsr);
        trTd.appendChild(tdAge);
        trTd.appendChild(tdAvatar);
        trTd.appendChild(tdAction);
        tbody.appendChild(trTd);
    } // ./for

    table.appendChild(tbody);
    div_preview.appendChild(table);
    div_container.appendChild(div_preview);
    actionDel();
} // ./anteprima dell'arr
// actionDel
function actionDel() {
    let aHref = document.querySelectorAll('.removeIndice');
    for (var x = 0; x < aHref.length; x++) {
        aHref[x].addEventListener('click', function() {
            removeIndex(this.id);
        });
    } // ./for
} // ./// actionDel
// click preview image avatar
if (document.querySelector('.img-avatar')) {
    let img_avatar = document.querySelector('.img-avatar');
    img_avatar.addEventListener('click', function() {
        let file = document.querySelector('.file-avatar');
        file.click();
        file.addEventListener('change', function() {
            // console.log(file.baseURI);
            // preview file image
            // multiple
            let image = Array();
            image = file.files[0];
            /*
            for (var img = 0; img < file.files.length; img++) {
                image.push(file.files[img]);
            }
            console.log(image[0].size);
            */
            img_avatar.src = URL.createObjectURL(image);
        });

    });
}
// ./click preview image avatar