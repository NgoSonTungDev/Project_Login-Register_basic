import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
