$(function () {
  setInterval(function () {
    $('#current-date').text(moment().format('MMMM Do YYYY, H:mm:ss'));
  }, 500);

  // Saving user input
  $('button[type="save"]').on('click', function (event) {
    var clickedButton = event.target;
    var inputNumber = $(clickedButton).attr('row-number');
    var input = '#event-input' + inputNumber;
    var output = '#event' + inputNumber;
    var inputEvent = $(input).val();

    localStorage.setItem(inputNumber, inputEvent);
    $(output).text(inputEvent);
    $(input).hide();
    $(output).show();
  });

  // Editing saved input
  $('button[type="edit"]').on('click', function (event){
      
  });
});
