import React from 'react';
import './style.css';
import Header from './Header';
import {Footer} from './Footer';
import {Todo} from './Todo';
import {Todos} from './Todos';

export default function App() {
  return (
    <div>
      <Header />
      <Todo/>
      <Todos/>
      <Footer/>
    </div>
  );
}
