import './App.css';
import NavBar from './components/navBar';
import Home from './components/home/home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  Switch,
  Route
} from "react-router-dom";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Accreditation from './components/accreditation/Accreditation'
import Footer from './components/Footer/Footer'



library.add(fab, fas,far, faCheckSquare, faCoffee)

function App() {
  return (
  
    
    <div className="App">
      <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/accreditation">
              <Accreditation />
            </Route>
          </Switch>


      <Footer/>
    </div>
    
  );
}

export default App;
