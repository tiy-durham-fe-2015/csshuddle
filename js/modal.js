$(function () {

  // $('.show-modal').click(function () {
  //   $('body').append($('#modalTemplate').html());
  // });
  //

  $('.remove-item').click(function () {
    var li = $(this).closest('li');
    var modal = $($('#modalTemplate').html());

    $('body').append(modal);

    $('.confirm-remove', modal).click(function () {
      li.remove();
      modal.remove();
    });
  });

  $('body').on('click', '.close-modal', function () {
    $(this).closest('.modal').fadeOut(function () {
      $(this).closest('.modal').remove();
    });

    // var modal = $(this).closest('.modal');
    // modal.fadeOut(function () {
    //   modal.remove();
    // });
    //
    //
    // console.log(this);
    //
    // function foo() {
    //   console.log(this);
    // }
    //
    // foo();

  });

});
