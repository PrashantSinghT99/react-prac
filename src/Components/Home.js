import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/context">context</Link>
          </li>
          <li>
            <Link to="/useRef">useRef</Link>
          </li>
          <li>
            <Link to="/useMemo">useMemo</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
          <li>
            <Link to="/redux">redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
