import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hats from "./pages/Hats";
import Jackets from "./pages/Jackets";
import Shop from "./pages/Shop";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
