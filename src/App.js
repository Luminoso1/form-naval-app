import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Rutas } from "./routes/Rutas";

function App() {
  return (
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
