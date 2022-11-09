function init() {
    //add your javascrip between these two lines of code
    function makealert() {
      var input = document.getElementById('entryinput').value;
      var output = document.getElementById('textoutput');
      output.innerHTML = input;
      alert('Pedro Espinoza: ' + input);
    }
  
    var vbutton = document.getElementById('entrybutton');
    vbutton.addEventListener('click', makealert);
  }
  
  
  window.addEventListener('load', init);