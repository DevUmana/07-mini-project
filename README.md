# Module 07 Mini-Project: Portfolio Generator

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

- Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

- An HTML document containing the information collected from the prompts should be constructed and written to the file system. Make sure to add some CSS styling to the document.

- You’ll need the following tools and technologies to accomplish this:

  - `fs` for writing to the file system

  - `inquirer` for collecting user input

  - String template literals for generating a string version of the HTML document before it is written to the file system

## 💡 Hints

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## 🏆 Bonus

- Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?
  - Promises:
    - Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide methods like .then(), .catch(), and .finally() to handle asynchronous results in a more readable manner.
  - async/await:
    - The async and await keywords provide a way to write asynchronous code that looks synchronous, making it easier to read and maintain. Functions declared with async return a Promise, and await can be used inside them to pause execution until the Promise is resolved.
  - Generators:
    - Generators can be used to manage asynchronous code when combined with libraries like co or redux-saga. They allow you to pause execution and resume it, making them useful for handling sequences of asynchronous operations.
  - Observables:
    - Observables, provided by libraries like RxJS, are used to handle streams of asynchronous data. They are powerful for managing complex async workflows and reacting to multiple events over time.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
