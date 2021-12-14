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
       num = false;
     }
   }); // end forEach
    if(num == false) {
      console.table("Send");
    } else {
      console.error("Errore");
    }
  }
} // end const myFunc