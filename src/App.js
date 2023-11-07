import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./components/New";
import Skin from "./components/Skin";
import SkincareBlog from "./components/SkincareBlog";
import Hair from "./components/Hair";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="/skincare" element={<SkincareBlog/>}/>
          <Route path="/skin" element={<Skin />}/>
          <Route path="/hair" element={<Hair />}/>
        </Routes>
  </BrowserRouter>

  );
}

export default App;

    