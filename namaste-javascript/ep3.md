# Hoisting in Javascript

In Javascript, in certain senarios, functions and variables can be accessed before they are defined in the code, this happens because the Javascript gives allocated memory and gives values to these variables and functions before the code execution phase.

```javascript
getName()
console.log(getName)
console.log(x)
var x = 4
function getName() {
    console.log("Namaste Javascript")
}
```
The code above will execute normally, more or less, the first two lines will execute like one would expect if the function definition was above these lines, the third line with log ``undefined``, because although Javascript engine did give a place holder for ``x`` even before the code execution phase, it gave her the value ``undefined``, Javascript would only give it the value ``4`` after it reaches that line in the code execution phase.
Removing the the forth line or the function definition would cause a ``not defined`` error.

```javascript
getName()
var getName = () => {
    console.log("Namaste Javascript")
}
```
The code above would result in an error, since at the beginning of the code execution phase, Javescript execution expects getName to be a variable and not a function definition, in the memory allocation phase, the Javascript saw getName, and gave it a place holder as a variable with the value ``undefined``, it would only work if it had stored it as a function, which needs function declaration syntax.