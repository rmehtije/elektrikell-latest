import { Routes, Route } from "react-router-dom";
import ElecticPrice from "./ElectricPrice";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ElecticPrice />}>
          <Route path="lowprice/:hours" element={<ElecticPrice />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path=":id" element={<About />} />
          <Route path=":id/:name" element={<About />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
