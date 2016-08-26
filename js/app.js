// wait for the DOM to finish loading
$(document).ready(function() {
  var x;
  var O;
  // all code to manipulate the DOM
  // goes inside this function


  function consoleLogger(){
    console.log('Os Turn')

    //append O to the board


    if (x) {
      console.log('Xs Turn')

    //append X to the board
    $(this).append( "X" );
    $(this).addClass("x");


      return x = false;
    }
      $(this).append( "O" );
      $(this).addClass("o");
      return x = true;
      
  }




  $('.box').on('click', consoleLogger)

});

//add an alert
