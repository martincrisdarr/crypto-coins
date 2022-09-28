import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DinamicCoin from "./Views/DinamicCoin";
import { useDispatch } from "react-redux";
import { getAllCryptos } from "./store/features/cryptos/cryptosSlice";
import Home from "./Views/Home";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCryptos());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<DinamicCoin />} />
      </Routes>
    </>
  );
}

export default App;
