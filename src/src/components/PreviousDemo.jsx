import { useState } from 'react';
import usePrevious from '../hooks/usePrevious';
import {FiClock} from 'react-icons/fi';

function PreviousDemo() {
  const [number, setNumber] = useState(0);
  const previous = usePrevious(number);

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3><FiClock /> usePrevious</h3>
        <span className="demo-badge">Utility</span>
      </div>
      <div className="input-group">
        <label htmlFor="number">Type a number:</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={e => setNumber(Number(e.target.value) || 0)}
          className="input-field"
          placeholder="Enter any number..."
        />
      </div>
      <div className="values-display">
        <div className="value-item current">
          <span className="label">Current:</span>
          <span className="value">{number}</span>
        </div>
        <div className="value-item previous">
          <span className="label">Previous:</span>
          <span className="value">{previous ?? 'N/A'}</span>
        </div>
      </div>
      <div className="info-box">
        <strong>How it works:</strong> The hook captures the previous value before each update. 
        When you type "55", it stores "5" as previous because it updates character by character.
      </div>
    </div>
  );
}

export default PreviousDemo;
