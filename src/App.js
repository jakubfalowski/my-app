import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Music } from "./Music";
import { Games } from "./Games";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="muzyka" element={<Music />} />
          <Route path="gry" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
