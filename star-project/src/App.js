

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from './components/Homepage';


function App() {
  return (
    
  
      
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
          
          <Route path="/register" element={<SignUp />} />
          <Route path='/homepage' element={<Homepage/>
         
          }
          />
          </Routes>

    </BrowserRouter>
  );
}

export default App;
