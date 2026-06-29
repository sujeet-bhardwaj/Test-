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



<!-- Git And Github -->

Apne local Git repository ko ek naye GitHub repository se connect karne ke liye aur aage ke saare commits vahan push karne ke liye, aapko apne Git ka remote URL badanna hoga.

Ise karne ke do aasan tareeqe hain. Aap niche diye gaye steps ko follow kar sakte hain:

Method 1: Purane GitHub Repo ko Naye Repo se Replace karna (Recommended)
Agar aap chahte hain ki purana GitHub repo ka link hat jaye aur ab se sab kuch naye repo par hi jaye, to ye steps follow karein:

Naya GitHub Repository Banayein:
GitHub par jaakar ek naya blank repository banayein aur uska URL (HTTPS ya SSH) copy kar lein.

Terminal/Command Prompt Open Karein:
Apne project folder ke andar jaayein aur ye command chalayein:

Bash
git remote set-url origin <NEW_GITHUB_REPO_URL>
(Yahan <NEW_GITHUB_REPO_URL> ki jagah apne naye repo ka link paste karein)

Verify Karein:
Check karne ke liye ki URL badla ya nahi, ye command chalayein:

Bash
git remote -v
Yahan aapko ab naya URL dikhna chahiye.

Naye Commits Push Karein:
Ab aap jo bhi naya commit karenge, use pehli baar push karte waqt ye command chalayein:

Bash
git push -u origin main
(Agar aapke branch ka naam master hai, to main ki jagah master likhein)

Method 2: Dono GitHub Repositories ko Safe Rakhna (Dual Remotes)
Agar aap chahte hain ki purana GitHub repo bhi apni jagah rahe aur aap ek naya remote add karein jise aap naye commits bhej sakein, to aap ye kar sakte hain:

Naya Remote Add Karein:

Bash
git remote add new-origin <NEW_GITHUB_REPO_URL>
Naye Repo par Push Kaise Karein:
Ab jab bhi aap push karenge, to origin ki jagah new-origin likhein:

Bash
git push -u new-origin main

<!-- destrcyuring  ------------------------------------------>

Destructuring is an ES6 feature that allows you to extract values from arrays or properties from objects and store them in variables in a clean and readable way.
Instead of writing many lines, you can extract everything in one line.
Less code.
More readable.
Mostly used in React, Node.js, APIs, and modern JavaScript.

Object Destructuring
Basic Syntax
const obj = {
    key1: value1,
    key2: value2
};
const { key1, key2 } = obj;
Variable names must match property names.
Renaming Variables possible 

Nested Object Destructuring
const user = {
    name: "Sujeet",
    address: {
        city: "Kanpur",
        state: "UP"
    }
};
const {
    address: {
        city,
        state
    }
} = user;
Object with Rest Operator
const user = {
    name: "Sujeet",
    age: 22,
    city: "Kanpur"
};

const { name, ...others } = user;
console.log(name);
console.log(others);

Object Destructuring in Function Parameter

Instead of

function print(user){
    console.log(user.name);
}

Use

function print({ name, age }){
    console.log(name);
    console.log(age);
}

Call
print({
    name:"Sujeet",
    age:22
});
Very common in React.


Difference Between Object and Array Destructuring
Object	                                                Array
Uses property names      	                            Uses index positions
Order doesn't matter	                                Order matters
{} brackets                	                            [] brackets
Variable name should match property (unless renamed)	Variable name can be anything
Can rename easily	                                    No renaming concept because values are positional