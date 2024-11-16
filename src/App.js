import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/counter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
