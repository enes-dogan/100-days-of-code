let anchorElement;

anchorElement = document.body.children[1].children[0];
anchorElement.href = 'http://www.google.com';
//OR
anchorElement = document.getElementById('anchor');
anchorElement.href = 'http://www.youtube.com';
// OR
anchorElement = document.querySelector('p a');
anchorElement.href = 'http://www.udemy.com';

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
let heading = document.body.children[0];
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
heading.parentElement;
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
heading.nextElementSibling;
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
heading = document.getElementById('main-title');
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
let p1 = document.querySelector('#paragraph');
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
p1.innerHTML = 'Changed via JavaScript <a id="anchor" href="#">link</a>';

// p1.textContent = 'JavaScript<a id="anchor" href="#">link</a>';
