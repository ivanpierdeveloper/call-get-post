'use strict'
const myFunc = {
  messageToBack : function() {
    alert("Welcome To Back!!!");
  },
  messaggioMyAlert : function(testo) {
    let spanalert = document.querySelector('.my-alert-testo');
    spanalert.innerHTML = testo;
  },
  showAlert : function(data) {
    $('.full-screen').css({
      'display' : 'block'
    });
    $('.my-alert').css({
        'position' : 'fixed',
        'top' : '50%',
        'transition' : '2s'
    });
    myFunc.messaggioMyAlert(data);
  },
  closeMyAlert : function() {
    $('.full-screen').css({
      'display' : 'none'
    });
    $('.my-alert').css({
      'position' : 'fixed',
      'top' : '-50%',
      'transition' : '2s'
    });
  }
} // end const myFunc