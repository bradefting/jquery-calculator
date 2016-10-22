"use strict";

$(function(){

  //append clicked innerText to screen
  $('span').on('click', function(){
    var screenText = $(this).text();
    // console.log(screenText);
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
        var result = eval(filteredStr);
      }
      catch(err)  {
        $('#screen').append('Error');
      }

      if(result===Infinity){
        $('#screen').append('Error');
      }else{
        $('#screen').append(result);
      }

  });

  //clear button
  $('#clear').on('click', function(){
    $('#screen').empty();
  });

});
