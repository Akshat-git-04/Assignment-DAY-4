import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import {FiGlobe} from 'react-icons/fi';

function FetchDemo() {
  const [postId, setPostId] = useState(1);
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <div className="demo-card">
      <div className="demo-header">
        <h3><FiGlobe /> useFetch</h3>
        <span className="demo-badge">API</span>
      </div>
      <div className="input-group">
        <label htmlFor="postId">Post ID (1-100):</label>
        <input
          id="postId"
          type="number"
          value={postId}
          onChange={e => setPostId(e.target.value)}
          min="1"
          max="100"
          className="input-field"
        />
      </div>
      
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      )}
      
      {error && (
        <div className="error-state">
          <strong>Error:</strong> {error.message}
        </div>
      )}
      
      {data && (
        <div className="data-display">
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default FetchDemo;
