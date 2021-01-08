# Navigation in React

## Why?

We have learnt that traditional websites are composed of multiple HTML files, each representing a single page.
In those traditional websites each URL you type is essentially a path to an HTML file, which might in turn load other files like CSS sheets and JS scripts.

We also learned that a modern React app works differently.
A React app is composed of single HTML file that is manipulated by maaany JS files.
We call this composition Single Page Applications (SPA).

As we explained earlier, URLs represent the path to HTML files,
but since we only have a single HTML file in a SPA, by default they run with a single URL.
For example, everything we have worked on so far never moved from `localhost:3000`.

But people love URLs! They allow us to share specific webpages easily.
If you like something on an online store, you wanna share that specific product, not the home page.

Just like manipulating a single HTML page to display many different things, React can also manipulate the URL bar of the browser!

## Your task

In this assessment you are presented with a SPA that uses a homemade router to navigate between pages.
The homemade router is good for moving around, but it's not very flexible, and it doesn't rely on URLs for navigation.

Using `react-router` you are expected to introduce a more robust routing solution to the application.

Stick with the route names already present in the app. For the instructor profile route, use the slug of the instructor as a parameter.

Good luck!
