import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import License from "./pages/license";
import Youtube from "./pages/youtubeLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Youtube />} />
        <Route path="/license" exact element={<License />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
