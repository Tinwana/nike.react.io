import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPegasus from "./pages/ShopPegasus";
import Srkns from "./pages/Snkrs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopPegasus" element={<ShopPegasus />} />
        <Route path="/Srkns" element={<Srkns />} />
      </Routes>
    </>
  );
}

export default App;
