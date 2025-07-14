import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { FiSearch } from 'react-icons/fi';

function DebounceDemo() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3>useDebounce</h3>
        <span className="demo-badge">Performance</span>
      </div>
      <div className="input-group">
        <FiSearch className="input-icon" />
        <input 
          value={text} 
          onChange={e => setText(e.target.value)}
          placeholder="Type to see debounced result..."
          className="input-field"
        />
      </div>
      <div className="result-display">
        <strong>Debounced result:  </strong> 
        <span className="result-text">{debouncedText || 'Start typing...'}</span>
      </div>
    </div>
  );
}

export default DebounceDemo;
