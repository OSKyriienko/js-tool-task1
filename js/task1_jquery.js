const $position = $('#elemPosition');
const $positionOutput = $('#inputPosition');
const $btnFade = $('#btnFade');
// task1 (method 'position')
$positionOutput.val(`Left: ${$position.position().left}, Top: ${$position.position().top}`);
// task2 (method 'fadeIn' and 'fadeOut'
$btnFade.on('click', function() {
  $position.toggleClass('fade');
  if ($position.hasClass('fade')) {
    $position.fadeOut(1000);
    $btnFade.text('Fade In');
  }
  else {
    $position.fadeIn(1000);
    $btnFade.text('Fade Out');
   }
});
