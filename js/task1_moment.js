const $moment_date = document.querySelector('#moment_date');
const $moment_calendar = document.querySelector('#moment_calendar');
$moment_date.textContent = `Current date: ${moment().format('YYYY MM DD')}`;
$moment_calendar.textContent = `Day of week in 3 days: ${moment().add(3, 'days').calendar()}`;
