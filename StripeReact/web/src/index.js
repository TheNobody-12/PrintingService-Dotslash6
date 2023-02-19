import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { loadStripe } from "@stripe/stripe-js"
const PUBLIC_KEY = "pk_test_51McozPSI053csSB71BAlLdrkVzNfnYrZGijKaGVm1aN69pvoXPLAyrNz3tLC1fUwDfXv3AqoCDjHSiB1EPcWTSUM00JaHckuBX"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
