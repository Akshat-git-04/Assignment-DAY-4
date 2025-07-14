import useToggle from '../hooks/useToggle';
import {FiToggleLeft, FiToggleRight} from 'react-icons/fi';

function ToggleDemo() {
  const [on, toggle] = useToggle(false);

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3>useToggle</h3>
        <span className="demo-badge">State</span>
      </div>
      <div className="toggle-display">
        <div className={`toggle-indicator ${on ? 'on' : 'off'}`}>
          {on ? <FiToggleRight /> : <FiToggleLeft />}
          <span>{on ? " ON" : " OFF"}</span>
        </div>
      </div>
      <button onClick={toggle} className="btn btn-primary">
        Toggle State
      </button>
    </div>
  );
}

export default ToggleDemo;
