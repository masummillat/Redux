import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  storeFactory from './store/index'

const store = storeFactory()
window.React = React
window.store = store
console.log(store)

ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
registerServiceWorker();
