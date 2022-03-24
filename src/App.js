import "./App.css";
import Home from "./Home";
import Name from "./Components/Name";
import ParticleBackground from "./Components/ParticleBackground";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="App">

<BrowserRouter>
    <Routes>
       <Route
            path="/Home"
            element={
            <Home />} />
        <Route
            path="/"
            element={
            <ParticleBackground  />} />
       
    </Routes>
</BrowserRouter> 




  </div>
  );
}

export default App;