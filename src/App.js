import Home from "./pages/Home/Home";
import DataFakultas from "./pages/DataFakultas/DataFakultas";
import './style/app.css'
import { Routes, Route } from "react-router-dom";
import FormFakultas from "./pages/FormFakultas/FormFakultas";
import About from "./pages/About/About";
import FormFakultasEdit from "./pages/FormFakultas/FormFakultasEdit";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element= {<Home/>} /> 
        <Route path="/datafakultas" element={< DataFakultas/>}/>
        <Route path="/formfakultas" element={< FormFakultas/>}/>
        <Route path="/formfakultasEdit/:id" element={< FormFakultasEdit/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </div>
  );
  
}

export default App;
