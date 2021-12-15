'use strict'
const myFunc = {
  // messaggio di test
  messageToBack : function() {
    alert("Welcome To Back!!!");
  },
  // messaggio myAlert
  messaggioMyAlert : function(testo) {
    let spanalert = document.querySelector('.my-alert-testo');
    spanalert.innerHTML = testo;
  },
  // mostro myAlert
  showAlert : function(testo, sfondo, testocl, bordo) {
    $('.full-screen').css({
      'display' : 'block'
    });
    $('.my-alert').css({
        'background-color' : sfondo,
        'color' : testocl,
        'border-color' : bordo,
        'top' : '50%',
        'transition' : '2s'
    });
    myFunc.messaggioMyAlert(testo);
  },
  // chiudo myAlert
  closeMyAlert : function() {
    $('.full-screen').css({
      'display' : 'none'
    });
    $('.my-alert').css({
      'position' : 'fixed',
      'top' : '-50%',
      'transition' : '2s'
    });
  },
  // controllo form
  controlloAndSend : function() {
   var inputElement =  document.querySelectorAll('.input-text');
   let num = false;
   inputElement.forEach(function(val, indice) {
     if(val.value == "") {
       $(`.span-${indice}`).css({
        'display' : 'block'
       });
       num = true;
     } else {
      $(`.span-${indice}`).css({
        'display' : 'none'
       });
     }
   }); // end forEach
    
    if(num == false) {
      // controllo url
      var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(expression);
      var valUrl = inputElement[0].value;
      if (valUrl.match(regex)) {
        // controllo email
        var expressionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regexEmail = new RegExp(expressionEmail);
        var valEmail = inputElement[1].value;
        if (valEmail.match(regexEmail)) {
          senddata(valUrl, valEmail, inputElement[2].value, inputElement[3].value, inputElement[4].value);
          this.showAlert("dati inviati con successo", "var(--success)", "var(--white)", "var(--orange)");
        } else {
          // error email
          $(`.span-1`).css({
            'display' : 'block'
            }).html("email non corretta");
            return;
        } // end email
      } else {
        // error url
        $(`.span-0`).css({
          'display' : 'block'
         }).html("url non corretto");
         return;
      } // end url
    } else {
      // console.error("Errore: Non hai compilato tutti i campi obbligatori|||");
      myFunc.showAlert("errore: tutti i campi sono obbligatori", "var(--danger)", "var(--dark)", "var(--orange)");
    }
  }
} // end const myFunc
async function senddata(url, email, usr, psw, age) {
  'use strict'
  try {
    const formData = new FormData();
    formData.append("id", 2);
    formData.append("email", email);
    formData.append("usr", usr);
    formData.set("psw", psw);
    formData.set("age", age);

    let headers = new Headers();
      /* headers.append('Content-Type', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + base64.encode(usr + ":" +  psw)); */
      // headers.append('Origin',url);
      // text/plain, multipart/form-data o application/x-www-form-urlencoded. 
      headers.append("Access-Control-Allow-Origin", "*");

    const request = new Request(url, {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: formData
    });
    await fetch(request)
    .then( (response) => {
      if(response.ok) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText
        })
      }
    })
    .then( (data) => {
      console.table(data);
    })
    .catch( (err) => {
      //console.error(`Codice Errore: ${err.status} Messaggio Errore: ${err.statuText}`);
      //setTimeout( (e) => {
        // console.error(`Codice Errore: ${err.status} Messaggio Errore: ${err.statuText}`);
        myFunc.showAlert(`codice di errore: ${err.status} messaggio di errore: ${err.statusText}.<br />o disattivare il lucchetto per correggere il messaggio da parte del browser (bloccato il caricamento di contenuto misto attivo (mixed active content)).`, "var(--danger)", "var(--dark)", "var(--orange)");
      //}, 2000);
    })
  } catch (Exception) {
    // console.error(`Errore exception: ${Exception.message}`);
      myFunc.showAlert(`errore exception: ${Exception.message}`, "var(--danger)", "var(--dark)", "var(--orange)");
  }
}