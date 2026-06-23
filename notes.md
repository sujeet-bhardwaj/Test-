What is the DOM?
DOM (Document Object Model) is a tree-like representation of an HTML or XML document.
<!-- Each element (like <div>, <p>, <h1>) is a node in the tree. -->
Nodes have relationships: parent, child, sibling, descendant.
JavaScript can traverse, modify, add, or remove these nodes.

1. Accessing Elements
document.getElementById("id") → Selects element by ID.
document.getElementsByClassName("class") → Selects elements by class.
document.querySelector("selector") → Selects first match using CSS selector.
document.querySelectorAll("selector") → Selects all matches.

2. Changing Content
element.textContent = "New Text" → Updates text inside element.
element.innerHTML = "<b>Bold Text</b>" → Updates HTML inside element.

3. Modifying Attributes
element.setAttribute("src", "image.jpg") → Changes attribute.
element.removeAttribute("disabled") → Removes attribute.

4. Styling with JavaScript
element.style.color = "red" → Inline style change.
element.classList.add("highlight") → Adds CSS class.
element.classList.remove("hidden") → Removes CSS class.

5. Creating & Removing Elements
javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM!";
document.body.appendChild(newDiv); // Adds element
document.body.removeChild(newDiv); // Removes element

6. Event Handling
element.addEventListener("click", function(){ ... }) → Attaches event.
Events can bubble (child → parent) or capture (parent → child)
