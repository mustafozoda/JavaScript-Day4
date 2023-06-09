# **JavaScript-Day4**

# **`Table of contents`**
<br>

- [**Recursion**](#recursion)
- [**Closure**](#closure)

<br>

# **`Recursion`**

![](/img/reccc.png)

Recursion in JavaScript is a technique in which a function calls itself until it reaches a certain condition or base case. This technique allows the function to solve problems that can be broken down into smaller, simpler problems of the same type.

In JavaScript, recursive functions can help you solve complex problems with less code and can make your code more readable and maintainable. Some common examples of problems that can be solved using recursion include traversing trees and graphs, calculating factorials, and generating permutations and combinations.

Here's an example of a recursive function that calculates the factorial of a number:
![](/img/recusion.png)

This is a JavaScript function that calculates the factorial of a given number **`n`**. The factorial of a non-negative integer **`n`**, denoted by **`n!`**, is the product of all positive integers less than or equal to **`n`**.

Here's how the function works:

- The **`factorial`** function takes a single argument **`n`**, which is the number whose factorial needs to be calculated.
- The function first checks if **`n`** is equal to 1. If it is, then the function returns 1. This is the base case of the function.
- If **`n`** is not 1, then the function multiplies **`n`** with the result of calling the **`factorial`** function recursively with **`n - 1`** as the argument. This recursive call will continue until the base case is reached (i.e., **`n`** is equal to 1).

For example, when you call **`factorial(5)`**, the function will first check if **`n`** is equal to 1. Since it's not, the function will return **`5 * factorial(4)`**. Then, it will call **`factorial(4)`** which will return **`4 * factorial(3)`**. This process will continue until the base case is reached and **`factorial(1)`** is evaluated to 1. Then, the final result will be returned, which is **`5 * 4 * 3 * 2 * 1 = 120`**.

<br>
<br>

# **`Closure`**

![](/img/closure14.png)

In JavaScript, a closure is created when a function accesses variables from its outer scope, even after the outer function has returned. The closure "closes over" or captures the values of those variables at the time the function is created, allowing the inner function to access and manipulate the captured values.

In other words, a closure allows a function to maintain access to variables in its lexical scope, even when the function is executed outside that scope. This can be useful for creating private variables, implementing callbacks, and more.

![](/img/col.png)

Here's an example:

In this example, the **`add()`** function takes a number   **`x`** and returns a new function that takes another number **`y`** and returns the sum of **`x`** and **`y`**. The returned function has access to the **`x`** variable in its outer scope, which is stored in the closure.

When we call **`add(2)`**, it creates a new closure with **`x`** equal to **`2`**. We assign the returned function to the **`addTwo`** variable, which becomes a function that adds **`2`** to its argument. Similarly, calling **`add(10)`** creates a new closure with **`x`** equal to **`10`**, which we assign to the **`addTen`** variable.

When we call **`addTwo(3)`** and **`addTen(5)`**, each of these functions uses the **`x`** variable from its respective closure to add the correct value to its argument, returning the expected result (**`5`** and **`15`**, respectively).