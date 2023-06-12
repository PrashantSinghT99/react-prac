import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Info from "./Components/Info";
import ContextState from "./Context/ContextState";
import UseContextForState from "./Components/UseContextForState";
import UseRef from "./useRefHook/UseRef";
import UseMemo from "./useMemo/UseMemo";
import UseReducer from "./useReducer/UseReducer";
import UseCallBack from "./useCallback/UseCallBack";
import Redux from "./Redux/Redux";

function App() {
  return (
    <div className="App">
      <ContextState>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/context" element={<UseContextForState/>} />   
          <Route exact path="/useRef" element={<UseRef/>} />
          <Route exact path="/useMemo" element={<UseMemo/>} />
          <Route exact path="/useReducer" element={<UseReducer/>} />
          <Route exact path="/useCallback" element={<UseCallBack/>} />
          <Route exact path="/redux" element={<Redux/>} />
        </Routes>
      </BrowserRouter>
      </ContextState>
    </div>
  );
}

export default App;
