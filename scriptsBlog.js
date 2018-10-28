let number = 0;

$('#button').on('click', (event) => {
    number = number + 1;
    $('#number').text(number);
    
  });

  
$('#formular').on('click', (event) => {
    $('ul').append(`<li>${$('input').val()}</li>`)



  });

  