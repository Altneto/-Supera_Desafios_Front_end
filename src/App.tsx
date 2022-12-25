import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Extrato from "./pages/Extrato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Extrato/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;