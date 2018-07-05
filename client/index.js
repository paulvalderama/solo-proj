import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

//DOM Document Object Model, cross-platform and language-indepndent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document

//react-dom package provides DOM-specific methods that can be used at the top level of your app
//and as an escape hatch to get outside of the React model if you need to. 
//rendering the app, passing in the contents byID 

render(
    <App />
    , document.getElementById('contents')
);
