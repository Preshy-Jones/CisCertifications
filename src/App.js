import './App.css';
import NavBar from './components/navBar';
import Home from './components/home/home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas,far, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
