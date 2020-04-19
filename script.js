$(function () {
  // Displaying current date/time
  setInterval(function () {
    $('#current-date').text(moment().format('MMMM Do YYYY, H:mm:ss'));
  }, 500);

  // Displaying previous inputs
  for (i = 0; i < 24; i++) {
    var input = '#event-input' + i;
    console.log(input);
    var output = '#event' + i;
    console.log(output);
    var savedInput = localStorage.getItem(i);

    if (!savedInput) {
      $('button[row-number=' + i + '][type="edit"]').hide();
    } else {
      $('button[row-number=' + i + '][type="save"]').hide();
      $(input).hide();
      $(output).text(savedInput);
      $(output).show();
    }
  }
  
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
  $('button[type="edit"]').on('click', function (event) {
    var clickedButton = event.target;
    var inputNumber = $(clickedButton).attr('row-number');
    var input = '#event-input' + inputNumber;
    var output = '#event' + inputNumber;
    var eventText = $(output).text();

    $(output).hide();
    $(input).val(eventText);
    $(input).show();
  });
});
