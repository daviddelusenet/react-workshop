# React workshop

This workshop is meant for people with (almost) no previous React experience. Before diving into the examples please first carefully read the information below.

## Introduction into the React galaxy

[React's website](https://reactjs.org/) describes React as 

> A JavaScript library for building user interfaces

With React it's possible to develop JavaScript web applications *really* fast. Reacts best use case is a [single page application](https://en.wikipedia.org/wiki/Single-page_application) with a lot of user input/changing data. This is where React really shines.

React is component based and most people use the [JSX](https://jsx.github.io/) language to define these components. Most people also use the ES6 version of React. Of course you need to compile this code back to ES5 if you want to use it in a production environment.

All in all, React is **powerfull** library suitable for a multitude of projects.

## React advantages

React has a lot of advantages but of course also some disadvantages. Let's go through some of the advantages first.

- **React makes it easy to reuse code**

  Since React is component based it's quite easy to reuse code, especially when you use a pattern like [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). This prevents code duplication and makes it easy to build up pages with already existing components.

- **React is a open-source library**

  Open-source projects have a lot of benefits. For example, it's easier for the community to build additional tools. Also the quality of the project code itself will be better since there are a lot of contributors working on the project.
  
  If you would like to read more about open-source software in general you can read [this](https://opensource.com/article/17/8/enterprise-open-source-advantages) and [this](https://www.zivtech.com/blog/benefits-open-source-software).

- **React has a big community**

  At the moment React is the most popular JavaScript library of its kind. This means the React community is really big which leads to a lot of questions/tutorials/examples online. When you encounter a problem during your development process you can probably find the answer to your problem on Stack Overflow or somewhere else on the internet.

- **React uses a lot of JavaScript techniques but doesn't force you to use them aswell**

  As mentioned before, React uses JSX and ES6. Using these techniques isn't mandatory though. If you don't want to use JSX then don't. The same goes for ES6 since there's also a ES5 version of React.

  Besides all of this, React also uses a lot of native JavaScript functionality to get things done. So that means when you're learning React you're also becoming a better JavaScript developer in general.
  
- **React can update the DOM fast because of the Virtual DOM**

  Normally when you update an element in the DOM all parent elements also need to be updated. This is just how the DOM works. If you want to understand this concept better you could read [this](https://developer.mozilla.org/en-US/docs/Introduction_to_Layout_in_Mozilla) and [this](http://taligarsiel.com/Projects/howbrowserswork1.htm#Parsing_general). In complex applications this approach can become slow since a lot of nodes need to be updated when changing a deeply nested element.

  React solves this issue by using the Virtual DOM to update the DOM. The Virtual DOM is a copy of the DOM which React uses to compare to the *normal* DOM. When something in a React component is changed the component will be marked *dirty*. This will trigger the update part of the component lifecycle which eventually will update the Virtual DOM. When this is done, the Virtual DOM gets compared to the DOM and the *normal* DOM will copy all the changes to the Virtual DOM.
  
- **React gives you a lot of freedom**

  In React you have a lot of possibilities on how to do things. Of course React has best practices but doesn't force these on you. 

  Also there are a lot of tools which extend/improve React functionality. You can pick the ones you like and (in most cases) ignore the ones you don't like.
  
- **There are entire project structures based on the usage of React**

  Since a React project behaves way different then your average project your project structure will probably also be different. Luckily for us there were already people thinking of ways on how to structure a complex React project, like [this one](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).
  
- **You can also develop mobile applications with React Native**

  With [React Native](https://facebook.github.io/react-native/) it's possible to develop mobile applications with React. These aren't hybrid apps or web apps, they're the real deal.
  
These are not all of the advantages React has to offer. If you would like to read more about why React is awesome check out the following articles:

- [Why did we build React?](https://reactjs.org/blog/2013/06/05/why-react.html)
- [Why React? 6 Reasons We Love It](https://blog.syncano.io/reactjs-reasons-why-part-1/)
- [Yes, React is taking over front-end development. The question is why](https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)
- [7 Reasons why you should use React](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247)
- [Simple React Development in 2017](https://hackernoon.com/simple-react-development-in-2017-113bd563691f)
  
## React disadvantages

As mentioned before, React also has some disadvantages. Let's take a closer look at some of them.

- **High pace of development**

  React is still a project under development. This means as a developer working with React you have to keep yourself up to date with the latest changes to the React codebase. 
 
  Besides the constantly evolving React codebase a lot of the tools you will use in combination with React (like [React Router](https://github.com/ReactTraining/react-router), [Redux](https://github.com/reactjs/redux) and [Webpack](https://webpack.js.org/)) are also still under development. 
 
  So as a developer there's a lot of stuff you need to keep yourself up to date on.
 
- **Not suitable for every type of project**
 
  Of course it's possible to build everything you want (and more) with React. However, in some cases this isn't the best decision.
  
  For example, React isn't good with complex animations. So if your project will contain a lot of these it might not be the best choice to go with React.
  
- **Learning curve can be steep**

  When you don't have a lot of previous experience with Webpack, JavaScript and/or ES6 features it might be hard to get into React.
  
Now that you know some of the advantages and disadvantages of React **let's get coding!**

## Workshop contents

- **Example 1:** *Hello World*

  - https://reactjs.org/docs/hello-world.html
 
- **Example 2:** *First Setup Todo App*
- **Example 3:** *Stateless vs Statefull Components*

  - https://reactjs.org/docs/components-and-props.html
  - https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/
  - https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
  
- **Example 4:** *Adding Some Styling*

  - https://github.com/gajus/babel-plugin-react-css-modules
  
- **Example 5:** *React Component Lifecycle Basics*

  - https://reactjs.org/docs/state-and-lifecycle.html
  - https://reactjs.org/docs/react-component.html
  
- **Example 6:** *Refs and the DOM*
  
  - https://reactjs.org/docs/refs-and-the-dom.html
  - https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
  
- **Example 7:** *React Router*

  - https://reacttraining.com/react-router/web/guides/philosophy
  
- **Example 8:** *React PropTypes And The Classnames JavaScript Utility*

  - https://reactjs.org/docs/typechecking-with-proptypes.html
  - https://github.com/JedWatson/classnames
  
- **Example 9:** *The Future According To David: Styled Components*

  - https://www.styled-components.com/docs
  - https://www.youtube.com/watch?v=bIK2NwoK9xk
