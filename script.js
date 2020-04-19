$(function () {
  // Displaying current date/time
  setInterval(function () {
    $('#current-date').text(moment().format('MMMM Do YYYY, H:mm:ss'));
  }, 500);

  // Displaying previous inputs
  for (i = 9; i < 18; i++) {
    var input = '#event-input' + i;
    var output = '#event' + i;
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
    $(input).hide();
    $('button[row-number=' + inputNumber + '][type="save"]').hide();
    $(output).text(inputEvent);
    $(output).show();
    $('button[row-number=' + inputNumber + '][type="edit"]').show();
  });

  // Editing saved input
  $('button[type="edit"]').on('click', function (event) {
    var clickedButton = event.target;
    var inputNumber = $(clickedButton).attr('row-number');
    var input = '#event-input' + inputNumber;
    var output = '#event' + inputNumber;
    var eventText = $(output).text();

    $(output).hide();
    $('button[row-number=' + inputNumber + '][type="edit"]').hide();
    $(input).val(eventText);
    $(input).show();
    $('button[row-number=' + inputNumber + '][type="save"]').show();
  });
});
