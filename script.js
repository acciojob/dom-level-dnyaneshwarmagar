//your JS code here. If required.
const targetElement = document.getElementById('level');

let domLevel = 0;

let parentElement = targetElement;
while (parentElement !== document.documentElement) {
    parentElement = parentElement.parentElement;
    domLevel++;
}

// alert('The level of the element is:', domLevel);
