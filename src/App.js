import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hats from "./pages/Hats";
import Jackets from "./pages/Jackets";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import SigninSignup from "./pages/SigninSignup";

import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsub = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        navigate("/");
      } else {
        setCurrentUser(null);
      }
    })

    return () => {
      unsub();
    }

  }, [])



  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SigninSignup />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
