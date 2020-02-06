import React from 'react';
import Header from './Header';
import Toggle1 from './Toggle1';
import Toggle2 from './Toggle2';
import Toggle3 from './Toggle3';
import Md from './Md';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Md />
      <div className="mt-4">
        <div class="row">
          <div class="col-sm">
            WHEN I WAS BORN
            <Toggle1 />
    </div>
          <div class="col-sm">
            MY STORY
            <Toggle2 />
    </div>
          <div class="col-sm">
          Retirement life
            <Toggle3 />
    </div>
        </div>
      </div>
    </div>
  );
}

export default App;
