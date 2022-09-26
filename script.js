let firstDisplayArray = [];
const secondDisplayArray = 0;
const thirdDisplayArray = 0;

const mainButtons = document.querySelector(`#mainButtons`);

mainButtons.addEventListener(`pointerdown`, assignPrimaryButtonsValue);

// Primary Buttons are MDAS and the numbers
function assignPrimaryButtonsValue(e) {
  const firstDisplay = document.querySelector(`#firstDisplay`);

  // To prevent a button with an empty value from being added to the display and the firstDisplayArray
  if (e.target.value === '' || e.target.value === undefined) {
    return;
  }

  // To stop operation button from doing anything when there is no element in the array
  if (isNaN(+e.target.value) && firstDisplay.value.length === 0) {
    return;
  }

  // To prevent two consecutive operation buttons
  if (isNaN(+e.target.value) && isNaN(+firstDisplay.value[firstDisplay.value.length - 1])) {
    firstDisplay.value = firstDisplay.value.slice(0, firstDisplay.value.length - 1).concat(e.target.value);

    firstDisplayArray.pop();
    firstDisplayArray = firstDisplay.value.split('');

    return;
  }

  firstDisplay.value += e.target.value;

  firstDisplayArray = firstDisplay.value.split('');
}
