import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Speaker from "./Pages/Speaker"
import ContactUs from "./Pages/ContactUs"
import Presentation from "./Pages/Presentation"
import Workshop from "./Pages/Workshop"
import Toolbar from "./Components/Toolbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/presentation' exact element={<Presentation />} />
        <Route path='/speaker' exact element={<Speaker />} />
        <Route path='/workshop' exact element={<Workshop />} />
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
