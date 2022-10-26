import React from 'react';
import {createRoot} from "react-dom/client";
import './style/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// React 18 root API -> new way of rendering root element
// ReactDOM.render is not supported in React 18 anymore
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
