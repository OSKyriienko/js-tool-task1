const $numeralInit = document.querySelector('#numeral_init');
const $numeralBytes = document.querySelector('#numeral_bytes');
const $numeralCurrency = document.querySelector('#numeral_currency');
let formattedValue = numeral($numeralInit.textContent).format('0,0b');
$numeralBytes.textContent =`Formatted value (in bytes): ${formattedValue}`;
$numeralCurrency.textContent =`Formatted value (in $): ${numeral($numeralInit.textContent).format("($0,0)")}`;
