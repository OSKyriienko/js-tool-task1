const $position = $('#elemPosition');
const $positionOutput = $('#inputPosition');
const $btnFade = $('#btnFade');
// task1 (method 'position')
$positionOutput.val(`Left: ${$position.position().left}, Top: ${$position.position().top}`);

// task2 (method 'fadeIn' and 'fadeOut')
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

const $array = document.querySelector('#array');
const $new_array = document.querySelector('#new_array');
let array = [1,2,3,4,5,6,7,8,9,10,2,3,5,6];
//task1 - Remove elements having remainder after division by 3
$array.textContent = `Initial array: ${array}`;
let new_array = _.remove(array, function(elem) {
    return elem % 3;
});
$new_array.textContent = `Array without elements with remainder (division by 3): ${new_array}`;

//task2 - Creating new array without duplicate elements
const $array_no_duplicate = document.querySelector('#array_no_duplicate');
array = [1,2,3,4,5,6,7,8,9,10,2,3,5,6];
let new_array2 = _.uniq(array);
$array_no_duplicate.textContent = `Array without duplicate: ${new_array2}`;

const $moment_date = document.querySelector('#moment_date');
const $moment_calendar = document.querySelector('#moment_calendar');
$moment_date.textContent = `Current date: ${moment().format('YYYY MM DD')}`;
$moment_calendar.textContent = `Day of week in 3 days: ${moment().add(3, 'days').calendar()}`;

const $numeralInit = document.querySelector('#numeral_init');
const $numeralBytes = document.querySelector('#numeral_bytes');
const $numeralCurrency = document.querySelector('#numeral_currency');
let formattedValue = numeral($numeralInit.textContent).format('0,0b');
$numeralBytes.textContent =`Formatted value (in bytes): ${formattedValue}`;
$numeralCurrency.textContent =`Formatted value (in $): ${numeral($numeralInit.textContent).format("($0,0)")}`;