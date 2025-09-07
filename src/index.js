import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import r2wc from "@r2wc/react-to-web-component"
import Checklist from "./components/checklist/Checklist"
import SimpleCounter from "./components/counter/Counter"

// const wcChecklist = r2wc(Checklist, {
//   props: {
//     items: "json"
//   }
// })

// customElements.define("r2w-checklist", wcChecklist)


const wcCounter = r2wc(SimpleCounter, {
  props: {
    min: "number",
    max: "number"
  }
})

customElements.define("r2w-counter", wcCounter)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
