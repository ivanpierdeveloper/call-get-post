'use strict'
const myFunc = {
  messageToBack : function() {
    alert("Welcome To Back!!!");
  },
  messaggioMyAlert : function(testo) {
    let spanalert = document.querySelector('.my-alert-testo');
    spanalert.innerHTML = testo;
  }
}