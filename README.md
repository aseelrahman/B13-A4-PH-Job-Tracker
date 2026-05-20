### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used when there is only one id needs to be pulled in js, where getElementsByClassName gets all of the elements that share the same class name. querySelector gets only the first element/tag/class/attribute from the document where querySelectorAll gets all of them in a document.

### 2. How do you create and insert a new element into the DOM?

We use document.createElement('elementName') to create an element and then we can set it's content using innerText/innerHTML/textContent to insert the element or we can use append()/appendChild().

### 3. What is Event Bubbling? And how does it work?

Event bubbling is a process when an element is triggered, it passes and triggers through every parent node up to document.

### 4. What is Event Delegation in JavaScript? Why is it useful?

When we add eventListener to an element's parent instead of directly use it on the element to reduce the repetition of same line of code each time; At that time if an child element gets triggered, it will automatically get caught by it's parent node because of the event bubbling. The process of handeling a child element by its parent is called event delegation.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser's default behavior but the event bubbling still happens. And when stopPropagation() method is used, it stops bubbing but keeps the browser's default behavior like reloading after submitting a form.
