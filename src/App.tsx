import "./App.scss";
import MultiStepWindow from "./components/MultiStepWindow/MultiStepWindow";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Step2 from "./components/MultiStepWindow/Step2";

function App() {
  return (
    <div className="app">
  <BrowserRouter>
  <Routes>
    <Route  path="/"   element={<MultiStepWindow/>}/>
    <Route  path="/step2"   element={<Step2/>}/>
  </Routes>
    
  </BrowserRouter>
      
  


      
    </div>
  );
}

export default App;
