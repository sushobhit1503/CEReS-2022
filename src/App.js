import './App.css';
import { Switch, Route } from "react-router-dom"
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
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/presentation' exact component={Presentation} />
        <Route path='/speaker' exact component={Speaker} />
        <Route path='/workshop' exact component={Workshop} />
        <Route path='/contact' exact component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
