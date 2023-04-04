const elements = document.getElementsByClassName('element');

for (let element = 0; element < elements.length; element++) {
  if (element < 3) {
    elements[element].style.color = 'red';
  } else {
    elements[element].style.color = 'green';
  }
}
