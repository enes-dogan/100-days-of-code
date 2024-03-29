// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButton = document.body.children[2].children[4];
//    - Select the second button by using an "id"
const secondButton = document.getElementById('second-button');
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const firstParagraph = document.body.children[2].children[1];
const thirdParagraph = document.body.children[2].children[3];
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function firstButtonAction(event) {
  thirdParagraph.remove();
}
const firstButtonClicked = firstButton.addEventListener(
  'click',
  firstButtonAction
);
//    - Output the second button WITHOUT using the variable in which it's stored
function secondButtonAction(event) {
  //   document.body.children[2].children[1].style.backgroundColor = 'blue';
  firstParagraph.className = 'paragraph-background';
}
const secondButtonClicked = secondButton.addEventListener(
  'click',
  secondButtonAction
);
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

///REFACTOR SYNTAX

const changedToPercentage = document.getElementsByClassName('percentage')[0];

var value = (1.01 ** 40 - 1).toFixed(2);
var percent = value * 100 + '%';

changedToPercentage.textContent = percent;
