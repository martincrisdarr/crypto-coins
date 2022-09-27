import "rsuite/dist/rsuite.min.css";
import CoinsMap from "./Components/CoinsMap/CoinsMap";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CoinsMap />}/>
      </Routes>
    </>
  );
}

export default App;
