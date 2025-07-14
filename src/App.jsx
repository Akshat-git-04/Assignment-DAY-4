import { useState } from 'react';
import './App.css';
import useToggle from './src/hooks/useToggle';

import LocalStorageDemo from './src/components/LocalStorageDemo';
import DebounceDemo from './src/components/DebounceDemo';
import FetchDemo from './src/components/FetchDemo';
import CounterDemo from './src/components/CounterDemo';
import PreviousDemo from './src/components/PreviousDemo';
import ToggleDemo from './src/components/ToggleDemo';
import {FiMoon, FiSun} from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = useToggle(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>React Hooks Playground</h1>
        <p className="subtitle">Interactive demos of custom React hooks</p>
        <button 
          onClick={setDarkMode} 
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      
      <main className="demo-grid">
        <CounterDemo />
        <DebounceDemo />
        <FetchDemo />
        <LocalStorageDemo />
        <PreviousDemo />
        <ToggleDemo />
      </main>
    </div>
  );
}

export default App;
