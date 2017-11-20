# React workshop

This workshop is meant for people with (almost) no previous React experience. Before diving into the examples first please read the text below.

## Introduction into the React galaxy

React's website describes React as 

> A JavaScript library for building user interfaces

With React it's possible to develop JavaScript web applications *really* fast. 

React is component based and uses the [JSX](https://jsx.github.io/) language to define these components. Also it uses ES6 which you need to compile back to ES5 when you want to use your code in a production environment.

All in all, React is **really powerfull** library.

## React advantages

React has a lot of advantages but also some disadvantages. Let's go through some of the advantages first.

- **React makes it easy to reuse code**

  Since React is component based it's quite easy to reuse a component, especially when you use a pattern like [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **React is a open-source library**

  Open-source projects have a lot of benefits. For example, it's easier for the community to build additional tools. Also the quality of the projects code itself will be good since there are a lot of open-source contributors working on the project.

- **React has a big community**

  React is the most popular JavaScript library at the moment. This means the React community is really big which leads to a lot of questions/tutorials online. When you encounter a problem during your React development you can probably find the answer to your problem on Stack Overflow (or somewhere else on Google).

- **React uses a lot of JavaScript functionality but doesn't force you to use it aswell**

  As mentioned before, React uses JSX and ES6. This isn't mandatory tho. If you don't want to use JSX then don't. The same goes for ES6 since there's also a ES5 version of React.

  Besides all of this, React uses a lot of navite JavaScript functionality. So that means when you're getting better with React you're also getting better with JavaScript in general.
  
- **React can update the DOM fast because of the Virtual DOM**

  Normally when you update an element in the DOM all parent elements also need to be updated. This is just how the DOM works. To understand this concept better you can read [this](https://developer.mozilla.org/en-US/docs/Introduction_to_Layout_in_Mozilla) and [this](http://taligarsiel.com/Projects/howbrowserswork1.htm#Parsing_general). In complex (big) applications this approach can become slow since a lot of nodes need to be updated when changing a deeply nested element.

  React solves this issue by using the Virtual DOM to update the DOM. The Virtual DOM is a copy of the DOM which React uses to compare to the *normal* DOM. When something in a React component is changed the component will be marked *dirty*. This will trigger the update part of the component lifecycle which eventually will update the Virtual DOM. When this is done, the Virtual DOM gets compared to the DOM and the *normal* DOM will copy all the changes to the Virtual DOM.

## Workshop contents

- **Example 1:** *Hello World*

  https://reactjs.org/docs/hello-world.html
 
- **Example 2:** *First Setup Todo App*
- **Example 3:** *Stateless vs Statefull Components*

  https://reactjs.org/docs/components-and-props.html
  https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/
  https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
  
- **Example 4:** *Adding Some Styling*

  https://github.com/gajus/babel-plugin-react-css-modules
  
- **Example 5:** *React Component Lifecycle Basics*

  https://reactjs.org/docs/state-and-lifecycle.html
  https://reactjs.org/docs/react-component.html
  
- **Example 6:** *Refs and the DOM*
  
  https://reactjs.org/docs/refs-and-the-dom.html
  https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81
  
- **Example 7:** *React Router*

  https://reacttraining.com/react-router/web/guides/philosophy
  
- **Example 8:** *React PropTypes And The Classnames JavaScript Utility*

  https://reactjs.org/docs/typechecking-with-proptypes.html
  https://github.com/JedWatson/classnames
  
- **Example 9:** *The Future According To David: Styled Components*

  https://www.styled-components.com/docs
  https://www.youtube.com/watch?v=bIK2NwoK9xk
