
$(function(){

  //append clicked innerText to screen
  $('span').on('click', function(){
    var str=$(this).text();
    console.log(str);
    // value = parseInt($(this).text());
    // console.log(typeof value);
    $('#screen').append(str);

  });

  //equals
  $('#equals').on('click', function(){
    var bad = $('#screen').text();
    var str = bad.replace('÷','/').replace('x','*');

    $('#screen').empty();
    var lastIndex = str.lastIndexOf("=");
    str = str.substring(0, lastIndex);
    // console.log(str);

    // catch errors
      try{
        var newCalc = eval(str);
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

//
// $(function(){
//
//
//   //append clicked innerText to screen
//   $('span').on('click', function(){
//     var str=$(this).text();
//     console.log(str);
//     // value = parseInt($(this).text());
//     // console.log(typeof value);
//     $('#screen').append(str);
//
//
//   });
//
//   //equals
//   $('#equals').on('click', function(){
//     var bad = $('#screen').text();
//
//     var str = bad.replace('÷','/').replace('x','*')
//     // var str= better.replace('x','*')
//     $('#screen').empty();
//     var lastIndex = str.lastIndexOf("=");
//     str = str.substring(0, lastIndex);
//     // console.log(str);
//     var newCalc = eval(str);
//     console.log(e);
//
//       if(newCalc==Infinity){
//         $('#screen').append('Error')
//       }else{
//         // console.log(newCalc);
//         $('#screen').append(newCalc)
//       }
//
//   })
//
// //clear button
//   $('#clear').on('click', function(){
//     $('#screen').empty();
//   });
//
// });
