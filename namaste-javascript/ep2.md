# Execution context example

```javascript   
var n=2;
function square(num) {
    var ans = num * num;
    return ans;
}
var suqare2 = square(n);
var square4 = square(4);
```

### Global execution context created


1. **Memory allocation phase**: Allocate memroy to all variables and functions, it gives them values (``undefined`` for variables like ``n`` and the whole code for functions like ``square``)

2. **Code execution phase**: 
    1. Variables take values when possible, like ``n`` that takes the value ``2``
    2. Function definitions are skipped
    3. When we reach a function invocation like in line 6, a mini execution context is created that will go through these same steps, the parameters of the function get the same treatment as normal variables:
        1. Memory is allocated for them in the memory allocation phase of this new execution context
        2. ``undefined`` is the value they are assigned before the code execution phase
        3. In the code execution phase, the variables get assigned the values passed to the function when it was invoked
        4. Expressions get evaluation and assigned to their proper variables, like ``num * num`` that gets evaluated and assigned to ``var ans``
        5. In the last line of the function, we encounter the special keyword ``return`` which returns control to the function that invoked the ``square`` function, in the line where it was invoked, returning with the value of ``ans`` it had stored in its local memroy
    4. After the square function finishes execution, the value it returned replaces the ``undefined`` we had stored for ``square2``, the ``square`` function's execution context is also deleted as soon as it returned a value
    5. After going through all the lines, the global execution context is also deleted.

## Call stack

The call stack maintains the order of execution of the execution contexts.

1. Global excution context is always in the bottom of the stack
2. Whenever an execution context is created, Javascript engine puts it on top of the stack, and give it control
3. After the top execution context finishes execution, it is poped from the execution, giving back control to the execution context before it