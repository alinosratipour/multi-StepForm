import "./App.scss";
import MultiStepWindow from "./components/MultiStepWindow/MultiStepWindow";
import { AddonsProvider } from "./context/AddonsContext";

function App() {
  return (
    
      <AddonsProvider>
        <div className="app">
          <MultiStepWindow />
          </div> 
      </AddonsProvider>
    
   
  );
}

export default App;
