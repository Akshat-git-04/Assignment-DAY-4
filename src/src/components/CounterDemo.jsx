import useCounter from '../hooks/useCounter';
import { FiPlus, FiMinus, FiRotateCcw} from 'react-icons/fi';
function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3>useCounter</h3>
        <span className="demo-badge">State Management</span>
      </div>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="button-group">
        <button onClick={increment} className="btn btn-primary">
          <FiPlus /> Increment
        </button>
        <button onClick={decrement} className="btn btn-secondary">
          <FiMinus /> Decrement
        </button>
        <button onClick={reset} className="btn btn-outline">
          <FiRotateCcw /> Reset
        </button>
      </div>
    </div>
  );
}

export default CounterDemo;
