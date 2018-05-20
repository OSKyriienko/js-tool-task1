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

