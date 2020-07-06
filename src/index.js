import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './components/ShoppingList';

ReactDOM.render(
  <React.StrictMode>
    <ShoppingList name="Ram" />
  </React.StrictMode>,
  document.getElementById('root')
);

