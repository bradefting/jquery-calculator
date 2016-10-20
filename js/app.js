$(function(){

  //append clicked innerText to screen
  $('span').on('click', function(){
    var screenText = $(this).text();
    console.log(screenText);
    $('#screen').append(screenText);
  });

  //equals
  $('#equals').on('click', function(){
    var unfilteredString = $('#screen').text();
    var filteredStr = unfilteredString.replace('÷','/').replace('x','*');

    $('#screen').empty();
    var lastIndex = filteredStr.lastIndexOf("=");
    filteredStr = filteredStr.substring(0, lastIndex);
    // console.log(str);

    // catch errors
      try{
        var newCalc = eval(filteredStr);
      }
      catch(err)  {
        $('#screen').append('Error')
      }

      if(newCalc==Infinity){
        $('#screen').append('Error')
      }else{
        // console.log(newCalc);
        $('#screen').append(newCalc)
      }

  })

//clear button
  $('#clear').on('click', function(){
    $('#screen').empty();
  });

});
