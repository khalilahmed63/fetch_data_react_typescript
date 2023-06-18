import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Main from "./Layouts/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
