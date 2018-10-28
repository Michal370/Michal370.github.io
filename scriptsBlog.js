let number = 0;

$('#button').on('click', (event) => {
    number = number + 1;
    $('#number').text(number);
    
  });

  
$('#Odesilac').on('click', (event) => {
    $('body').append("<h3>"+$('#Title').val()+"</h3>")
    $('body').append("<h2>"+$('#Content').val()+"</h2>")

let path = "posts/1";
    let dataToSave = {
    title: "My first saved blog post",
    text: "Some hilarious content, which proves how awesome I am."
    };
    fb.ref(path).set(dataToSave);




  });

  