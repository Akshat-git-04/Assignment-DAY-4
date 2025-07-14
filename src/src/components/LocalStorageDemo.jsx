import useLocalStorage from '../hooks/useLocalStorage';
import {FiSave} from 'react-icons/fi';

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3><FiSave /> useLocalStorage</h3>
        <span className="demo-badge">Storage</span>
      </div>
      <div className="input-group">
        <label htmlFor="name">Enter your name:</label>
        <input 
          id="name"
          value={name} 
          onChange={e => setName(e.target.value)}
          placeholder="Your name here..."
          className="input-field"
        />
      </div>
      <div className="result-display">
        <strong>Stored value:</strong> 
        <span className="result-text">{name || 'Nothing stored yet'}</span>
      </div>
    </div>
  );
}

export default LocalStorageDemo;
